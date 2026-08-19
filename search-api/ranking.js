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
  const queryLower = query.toLowerCase()
  const queryWords = queryLower.split(/\s+/)
  const results = []

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
    if (titleLower.includes(queryLower)) {
      score += weights.titleExact
    }

    // 2. Individual word matches in title
    for (const word of queryWords) {
      if (titleLower.includes(word)) score += weights.titleWord
    }

    // 3. Exact phrase match in content
    if (contentLower.includes(queryLower)) {
      score += weights.contentExact
    }

    // 4. Individual word matches in content
    for (const word of queryWords) {
      if (contentLower.includes(word)) score += weights.contentWord
    }

    // 5. Match in URL slug
    for (const word of queryWords) {
      if (urlLower.includes(word)) score += weights.urlMatch
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

  // Find the first occurrence of any query word
  let bestPos = -1
  for (const word of queryWords) {
    const pos = content.indexOf(word)
    if (pos !== -1 && (bestPos === -1 || pos < bestPos)) {
      bestPos = pos
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

export { detectLanguage, generateSnippet, hashString, searchIndex }
