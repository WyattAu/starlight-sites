// Search execution and ranking (pure functions, no I/O).
// @ts-check

import { LANG_PATTERNS, RANKING_VARIANTS, SITE_AUTHORITY, SUBJECT_KEYWORDS } from './config.js'

/**
 * Score and filter index entries for a query.
 * @param {string} query
 * @param {{entries: Array<object>}} index
 * @param {string|null} siteFilter
 * @param {object} weights - ranking weight set (RANKING_VARIANTS.*)
 * @param {string|null} _lang - detected language (reserved)
 * @param {string|null} subjectFilter
 * @returns {Array<object>}
 */
function searchIndex(
  query,
  index,
  siteFilter,
  weights = RANKING_VARIANTS.control,
  _lang = null,
  subjectFilter = null,
) {
  const queryLower = query.toLowerCase().trim()
  // Content words drive matching; stop words only participate via the
  // exact-phrase bonus below. "what is the" should not score every entry
  // that contains "the".
  // Hyphenated compounds split into their parts: "gauss-markov" must match
  // entries containing "Gauss" and "Markov" separately (the index stores
  // em-dashed titles as "Gauss--Markov", and word-boundary matching treats
  // the dashes as boundaries on the content side — the query side has to
  // do the same).
  const queryWords = queryLower
    .split(/\s+/)
    .map(w => w.replace(/[^a-z0-9-]/g, ''))
    .flatMap(w => w.split(/-+/))
    .filter(w => w.length >= 2 && !STOP_WORDS.has(w))
    .map(stem)
  const results = []

  // One word-boundary regex per stemmed query word. Boundary matching is the
  // precision fix: the old substring test scored "generate" for the query
  // "rate", which both polluted ranking and defeated the zero-result gate.
  const wordRegexes = queryWords.map(w => new RegExp(`\\b${escapeRegex(w)}[a-z]{0,3}\\b`))
  const phraseRegex = new RegExp(`\\b${escapeRegex(queryLower)}\\b`)

  for (const entry of index.entries) {
    // Filter by site if specified
    if (siteFilter && entry.site !== siteFilter) continue

    // Filter by subject if specified (check URL path for subject keywords)
    if (subjectFilter) {
      const urlLower = (entry.url || '').toLowerCase()
      const keywords = SUBJECT_KEYWORDS[subjectFilter.toLowerCase()] || [
        subjectFilter.toLowerCase(),
      ]
      const matchesSubject = keywords.some(kw => urlLower.includes(kw))
      if (!matchesSubject) continue
    }

    // Skip entries with missing data
    if (!entry.title || !entry.url) continue

    let score = 0
    const titleLower = (entry.title || '').toLowerCase()
    const contentLower = (entry.content || entry.description || '').toLowerCase()
    const urlLower = (entry.url || '').toLowerCase()

    // 1. Exact phrase match in title (highest signal)
    if (phraseRegex.test(titleLower)) {
      score += weights.titleExact
    }

    // 2. Word matches in title (stemmed, word-boundary)
    let titleHits = 0
    for (const re of wordRegexes) {
      if (re.test(titleLower)) {
        score += weights.titleWord
        titleHits++
      }
    }

    // 3. Exact phrase match in content
    if (phraseRegex.test(contentLower)) {
      score += weights.contentExact
    }

    // 4. Word matches in content (stemmed, word-boundary)
    let contentHits = 0
    for (const re of wordRegexes) {
      if (re.test(contentLower)) {
        score += weights.contentWord
        contentHits++
      }
    }

    // 4b. Conjunction bonus: an entry matching EVERY content word is almost
    // always the intended target for multi-word queries. Without this, an
    // entry matching one word many times can outrank the entry matching all.
    if (queryWords.length > 1 && contentHits === queryWords.length) {
      score += weights.allWords ?? 0
    }

    // 5. Match in URL slug
    for (const re of wordRegexes) {
      if (re.test(urlLower)) score += weights.urlMatch
    }

    // Relevance gate: authority and depth are BOOSTS applied only to entries
    // that actually match the query. Without this gate, every entry would
    // receive a positive authority-only score and pollute the results,
    // defeating zero-result recovery and ranking quality.
    if (score <= 0) {
      continue
    }

    // 6. Site authority bonus (boost on matching entries)
    score += (SITE_AUTHORITY[entry.site] || 0) * weights.authorityMultiplier

    // 7. Content length penalty (prefer focused pages)
    const contentLength = (entry.content || entry.description || '').length
    if (contentLength > 5000) score -= 5
    if (contentLength > 10000) score -= 10

    // 8. Shallow URL depth bonus (prefer top-level pages)
    const depth = entry.url.split('/').length - 3 // subtract protocol + domain
    if (depth <= 1) score += weights.depthBonus
    if (depth <= 2) score += Math.floor(weights.depthBonus / 2)

    const snippet = generateSnippet(contentLower, queryWords)
    results.push({ ...entry, score, snippet })
  }

  // Sort by score descending
  results.sort((a, b) => b.score - a.score)

  return results
}

// --- Query understanding -----------------------------------------------------

// Words that appear in questions but carry no topical signal. Filtered from
// word-level scoring; they still participate in exact-phrase matching.
const STOP_WORDS = new Set([
  'the',
  'a',
  'an',
  'of',
  'in',
  'to',
  'for',
  'and',
  'or',
  'is',
  'are',
  'was',
  'were',
  'what',
  'how',
  'why',
  'when',
  'where',
  'who',
  'which',
  'on',
  'at',
  'by',
  'with',
  'from',
  'as',
  'it',
  'its',
  'be',
  'been',
  'do',
  'does',
  'did',
  'can',
  'could',
  'should',
  'would',
  'will',
  'my',
  'your',
  'me',
  'you',
  'i',
  'about',
  'into',
  'between',
  'difference',
  'between',
  'explain',
  'tell',
])

// Light, symmetric stemmer: both query words and matching are stemmed, so an
// imperfect stem still matches (both sides go through the same function).
// Rules are ordered longest-suffix first; lengths guard against over-stripping.
function stem(word) {
  const w = word
  if (w.length > 4 && w.endsWith('ies')) return w.slice(0, -3) + 'y' // studies -> study
  if (w.length > 4 && w.endsWith('sses')) return w.slice(0, -2) // classes -> class
  if (
    w.length > 3 &&
    w.endsWith('s') &&
    !w.endsWith('ss') &&
    !w.endsWith('us') &&
    !w.endsWith('is')
  )
    return w.slice(0, -1) // derivatives -> derivative
  if (w.length > 5 && w.endsWith('ing')) return w.slice(0, -3) // testing -> test
  if (w.length > 4 && w.endsWith('ed')) return w.slice(0, -2) // derived -> deriv
  return w
}

function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

// Curated stem-level synonym map for zero-result recovery. Keys and values
// are already-stemmed content words; expandQuery substitutes each query word
// with the union of itself and its synonyms and returns the alternative
// queries to retry, most-promising first.
const STEM_SYNONYMS = {
  gradient: ['derivative'],
  derivative: ['differenti'],
  antiderivative: ['integral', 'integr'],
  integral: ['antideriv'],
  tangent: ['gradient', 'derivative'],
  binomial: ['binomi'],
  quadratic: ['quadrat'],
  vector: ['vectors'],
  probability: ['probabil'],
  distributions: ['distribut'],
  distribution: ['distribut'],
  electron: ['electron'],
  bonding: ['bond'],
  organic: ['organ'],
  logarithm: ['log'],
  logarithms: ['log'],
  trapezium: ['trapezoid', 'integr'],
  kinematics: ['motion', 'velocity'],
  genetics: ['genet'],
  photosynthesis: ['photosynthes'],
  electrolysis: ['electroly'],
  moles: ['mole'],
}

/**
 * Zero-result fallback: swap in stem synonyms for the query's content words.
 * @param {string} query
 * @returns {string[]} alternative queries (possibly empty)
 */
function expandQuery(query) {
  const words = query.toLowerCase().trim().split(/\s+/)
  const alternatives = []
  for (let i = 0; i < words.length; i++) {
    const stemmed = stem(words[i].replace(/[^a-z0-9-]/g, ''))
    const syns = STEM_SYNONYMS[stemmed]
    if (syns) {
      for (const syn of syns) {
        const variant = [...words]
        variant[i] = syn
        alternatives.push(variant.join(' '))
      }
    }
  }
  return alternatives
}

// Language detection
function detectLanguage(text) {
  for (const [lang, pattern] of Object.entries(LANG_PATTERNS)) {
    if (pattern.test(text)) return lang
  }
  return 'en'
}

// Simple hash for A/B testing
function hashString(str) {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i)
    hash &= hash
  }
  return Math.abs(hash)
}

function generateSnippet(content, queryWords) {
  // Handle undefined/null content
  if (!content) return ''

  // Find the first occurrence of any query word (stemmed, word-boundary —
  // the same matching the scorer used, so the snippet agrees with the score).
  const regexes = queryWords.map(w => new RegExp(`\\b${escapeRegex(w)}`, 'i'))
  let bestPos = -1
  for (const re of regexes) {
    const m = re.exec(content)
    if (m && (bestPos === -1 || m.index < bestPos)) {
      bestPos = m.index
    }
  }

  if (bestPos === -1) {
    // No match in content, return beginning
    return `${content.slice(0, 200).trim()}...`
  }

  // Extract snippet around the match
  const start = Math.max(0, bestPos - 80)
  const end = Math.min(content.length, bestPos + 120)
  let snippet = content.slice(start, end).trim()

  if (start > 0) snippet = `...${snippet}`
  if (end < content.length) snippet += '...'

  return snippet
}

export { detectLanguage, expandQuery, generateSnippet, hashString, searchIndex, stem }
