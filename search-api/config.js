// Site catalogue, ranking weights, and policy data for the search Worker.
//
// Single source of truth for site metadata is sites.meta.json at the repo
// root (validated against the sites/ directory by scripts/lib/sites.cjs and
// tests/unit/no-ghost-sites.test.js). This module is pure data: no imports
// of node:fs, safe to bundle into the Worker runtime.
// @ts-check

import META from '../sites.meta.json' with { type: 'json' }

const DOMAIN_SUFFIX = META.defaults.domainSuffix

/**
 * Site enrichment map keyed by slug.
 * Built from sites.meta.json so adding a site there is sufficient -- no
 * hand-copied list here (the previous list stranded 36 sites without
 * names/colors and kept 3 that no longer exist).
 */
const SITES = Object.fromEntries(
  Object.entries(META.sites).map(([slug, m]) => [
    slug,
    { name: m.name, url: `https://${slug}${DOMAIN_SUFFIX}`, color: m.color, lang: 'en' },
  ]),
)

/** Ranking authority per site (from sites.meta.json). */
const SITE_AUTHORITY = Object.fromEntries(
  Object.entries(META.sites).map(([slug, m]) => [slug, m.authority]),
)

// A/B test variants for ranking weights
const RANKING_VARIANTS = {
  control: {
    titleExact: 100,
    titleWord: 20,
    contentExact: 50,
    contentWord: 5,
    urlMatch: 15,
    authorityMultiplier: 2,
    depthBonus: 10,
  },
  variant_a: {
    titleExact: 120,
    titleWord: 25,
    contentExact: 60,
    contentWord: 8,
    urlMatch: 20,
    authorityMultiplier: 3,
    depthBonus: 15,
  },
  variant_b: {
    titleExact: 80,
    titleWord: 15,
    contentExact: 40,
    contentWord: 3,
    urlMatch: 10,
    authorityMultiplier: 1,
    depthBonus: 5,
  },
}

// Language detection patterns
const LANG_PATTERNS = {
  zh: /[\u4e00-\u9fff]/,
  ja: /[\u3040-\u309f\u30a0-\u30ff]/,
  ko: /[\uac00-\ud7af]/,
  ar: /[\u0600-\u06ff]/,
  ru: /[\u0400-\u04ff]/,
}

// URL keywords per subject, for the ?subject= search filter.
const SUBJECT_KEYWORDS = {
  physics: ['physics', 'mechanics', 'waves', 'electricity', 'magnetism', 'thermal', 'nuclear'],
  chemistry: ['chemistry', 'organic', 'inorganic', 'physical-chemistry'],
  biology: ['biology', 'cell', 'genetics', 'ecology', 'physiology'],
  mathematics: ['maths', 'mathematics', 'algebra', 'calculus', 'statistics'],
  'computer-science': ['computer-science', 'programming', 'algorithms', 'data-structures'],
  economics: ['economics', 'microeconomics', 'macroeconomics'],
}

// Curated common queries used for autocomplete and zero-result recovery.
const COMMON_QUERIES = [
  'physics',
  'chemistry',
  'biology',
  'mathematics',
  'calculus',
  'linear algebra',
  'thermodynamics',
  'quantum',
  'organic chemistry',
  'c++',
  'python',
  'rust',
  'java',
  'javascript',
  'typescript',
  'go',
  'kotlin',
  'dart',
  'swift',
  'ruby',
  'haskell',
  'elixir',
  'dse',
  'ib',
  'a-level',
  'gcse',
  'ap',
  'highers',
  'leaving cert',
  'cbse',
  'gaokao',
  'hsc',
  'sat',
  'algorithms',
  'data structures',
  'databases',
  'networking',
  'linux',
  'security',
  'trueNAS',
  'machine learning',
  'admissions',
  'personal statement',
  'oxbridge',
  'interview',
]

// In-memory rate limiting policy (per Worker instance).
const RATE_LIMIT_MAX = 100 // requests per window
const RATE_LIMIT_WINDOW_MS = 60_000

// Redirects for the CDN-cached client scripts served from the Worker origin.
const ASSET_REDIRECTS = {
  'page-search.js': 'https://wyattsnotes.wyattau.com/page-search.js',
  'cross-site-search.js': 'https://dse.wyattau.com/cross-site-search.js',
}

export {
  ASSET_REDIRECTS,
  COMMON_QUERIES,
  LANG_PATTERNS,
  RANKING_VARIANTS,
  RATE_LIMIT_MAX,
  RATE_LIMIT_WINDOW_MS,
  SITE_AUTHORITY,
  SITES,
  SUBJECT_KEYWORDS,
}
