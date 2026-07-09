// Search API Worker for Wyatt's Notes
// Merges Pagefind indexes from 9 sites into a unified search API
// @ts-check

import { DASHBOARD_HTML } from './dashboard.js'

// Structured logging for Cloudflare Workers. Output is JSON (one object per
// line), which Cloudflare captures as structured logs in the dashboard.
function log(level, message, extra = {}) {
  console.log(JSON.stringify({ level, message, ts: new Date().toISOString(), ...extra }))
}

// Simple in-memory rate limiter. Tracks requests per IP over a 60-second
// window. Resets when the Worker instance is recycled (acceptable for a
// documentation search API). For stricter enforcement, configure Cloudflare
// Rate Limiting rules at the dashboard level.
const RATE_LIMIT_MAX = 100 // requests per window
const RATE_LIMIT_WINDOW_MS = 60_000
const rateLimitCounters = new Map()

const SITES = {
  dse: { name: 'DSE', url: 'https://dse.wyattau.com', color: '#ff6b35', lang: 'en' },
  ib: { name: 'IB', url: 'https://ib.wyattau.com', color: '#0077b6', lang: 'en' },
  alevel: { name: 'A-Level', url: 'https://alevel.wyattau.com', color: '#2a9d8f', lang: 'en' },
  university: {
    name: 'University',
    url: 'https://university.wyattau.com',
    color: '#9b5de5',
    lang: 'en',
  },
  qualifications: {
    name: 'Qualifications',
    url: 'https://qualifications.wyattau.com',
    color: '#f4a261',
    lang: 'en',
  },
  programming: {
    name: 'Programming',
    url: 'https://programming.wyattau.com',
    color: '#06d6a0',
    lang: 'en',
  },
  infrastructure: {
    name: 'Infrastructure',
    url: 'https://infrastructure.wyattau.com',
    color: '#ef476f',
    lang: 'en',
  },
  languages: {
    name: 'Languages',
    url: 'https://languages.wyattau.com',
    color: '#118ab2',
    lang: 'en',
  },
  tools: { name: 'Tools', url: 'https://tools.wyattau.com', color: '#073b4c', lang: 'en' },
}

// Site authority weights for ranking
const SITE_AUTHORITY = {
  university: 10,
  programming: 8,
  infrastructure: 7,
  languages: 7,
  dse: 6,
  ib: 6,
  alevel: 6,
  tools: 6,
  qualifications: 5,
}

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

export default {
  async fetch(request, env) {
    const url = new URL(request.url)

    // CORS headers
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Cache-Control': 'public, max-age=300, s-maxage=300',
    }

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders })
    }

    // Route handling
    try {
      if (url.pathname === '/api/search') {
        return await handleSearch(request, url, env, corsHeaders)
      }
      if (url.pathname === '/api/sites') {
        return handleSites(corsHeaders)
      }
      if (url.pathname === '/api/health') {
        return await handleHealth(env, corsHeaders)
      }
      if (url.pathname === '/api/trending') {
        return await handleTrending(env, corsHeaders)
      }
      if (url.pathname === '/api/suggest') {
        return await handleSuggest(url, env, corsHeaders)
      }
      if (url.pathname === '/api/track' && request.method === 'POST') {
        return await handleTrack(request, env, corsHeaders)
      }
      if (url.pathname === '/api/analytics') {
        return await handleAnalytics(env, corsHeaders)
      }
      if (url.pathname === '/api/ab-test') {
        return await handleABTest(env, corsHeaders)
      }
      if (url.pathname === '/' || url.pathname === '/dashboard') {
        return await handleDashboard(corsHeaders)
      }
      // CDN-cached static assets
      if (url.pathname === '/page-search.js') {
        return await handleStaticAsset('page-search.js', corsHeaders)
      }
      if (url.pathname === '/cross-site-search.js') {
        return await handleStaticAsset('cross-site-search.js', corsHeaders)
      }
      return new Response(JSON.stringify({ error: 'Not found' }), {
        status: 404,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    } catch (err) {
      // Log the real error server-side (Cloudflare captures Worker console
      // output); return a generic message to the client so internals (KV
      // shape, stack frames) are not leaked on a 500.
      log('error', 'worker unhandled error', { error: String(err), stack: err?.stack })
      return new Response(JSON.stringify({ error: 'Internal error' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }
  },
}

async function handleSearch(request, url, env, corsHeaders) {
  const startTime = Date.now()

  // Simple IP-based rate limiting (100 req/60s per IP).
  const clientIP = request.headers.get('cf-connecting-ip') || 'unknown'
  const now = Date.now()
  const counter = rateLimitCounters.get(clientIP)
  if (counter && now - counter.windowStart > RATE_LIMIT_WINDOW_MS) {
    rateLimitCounters.delete(clientIP)
  }
  if (!rateLimitCounters.has(clientIP)) {
    rateLimitCounters.set(clientIP, { windowStart: now, count: 1 })
  } else {
    const c = rateLimitCounters.get(clientIP)
    c.count++
    if (c.count > RATE_LIMIT_MAX) {
      return new Response(JSON.stringify({ error: 'Rate limit exceeded. Try again later.' }), {
        status: 429,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
          'Retry-After': String(Math.ceil((RATE_LIMIT_WINDOW_MS - (now - c.windowStart)) / 1000)),
        },
      })
    }
  }

  const query = url.searchParams.get('q')?.trim()
  const limit = Math.min(parseInt(url.searchParams.get('limit') || '20', 10), 50)
  const site = url.searchParams.get('site') // optional: filter by site
  const subject = url.searchParams.get('subject') // optional: filter by subject (physics, chemistry, etc.)
  const variant = url.searchParams.get('variant') // optional: A/B test variant
  const lang = url.searchParams.get('lang')
  const preview = url.searchParams.get('preview') === 'true' // optional: language filter

  if (!query || query.length < 2) {
    return new Response(JSON.stringify({ error: 'Query must be at least 2 characters' }), {
      status: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }

  // Cap query length to prevent ReDoS or excessive memory usage.
  if (query.length > 200) {
    return new Response(JSON.stringify({ error: 'Query must be at most 200 characters' }), {
      status: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }

  // Detect language if not specified
  const detectedLang = lang || detectLanguage(query)

  // Determine A/B test variant (50/50 split)
  const abVariant = variant || (hashString(query) % 2 === 0 ? 'control' : 'variant_a')
  const weights = RANKING_VARIANTS[abVariant] || RANKING_VARIANTS.control

  // Check edge cache (Cloudflare Cache API)
  const cacheUrl = new URL(url)
  cacheUrl.searchParams.set('ab', abVariant)
  const cache = caches.default
  const cacheRequest = new Request(cacheUrl.toString(), request)
  const cachedResponse = await cache.match(cacheRequest)
  if (cachedResponse) {
    return cachedResponse
  }

  // Check KV cache for hot queries
  const kvCacheKey = `search:${site || 'all'}:${abVariant}:${query.toLowerCase()}`
  const cached = await env.SEARCH_KV.get(kvCacheKey, { type: 'json' })
  if (cached) {
    const response = new Response(JSON.stringify(cached), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
    // Store in edge cache for 5 minutes
    const edgeCacheResponse = new Response(JSON.stringify(cached), {
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=300',
      },
    })
    cache.put(cacheRequest, edgeCacheResponse)
    return response
  }

  // Fetch merged index from KV
  const index = await env.SEARCH_KV.get('merged-index', { type: 'json' })
  if (!index) {
    return new Response(JSON.stringify({ error: 'Search index not available' }), {
      status: 503,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }

  // Search and rank with A/B weights
  let results = searchIndex(query, index, site, weights, detectedLang, subject)

  // Apply limit
  results = results.slice(0, limit)

  // Zero-result recovery: surface alternative queries so the user is not
  // presented with a dead end. Suggestions are derived from trending queries
  // and a curated common-query list (see generateSuggestions).
  let suggestions = []
  if (results.length === 0) {
    const trending = (await env.SEARCH_KV.get('trending', { type: 'json' })) || []
    suggestions = generateSuggestions(query, trending).slice(0, 5)
  }

  const response = {
    query,
    total: results.length,
    variant: abVariant,
    lang: detectedLang,
    ...(results.length === 0 ? { suggestions } : {}),
    results: results.map(r => ({
      ...(preview
        ? {
            preview: {
              url: r.url,
              title: r.title,
              site: r.site,
              siteName: SITES[r.site]?.name || r.site,
              siteColor: SITES[r.site]?.color || '#666',
              snippet: r.snippet,
              score: r.score,
            },
          }
        : {}),
      title: r.title,
      url: r.url,
      site: r.site,
      siteName: SITES[r.site]?.name || r.site,
      siteColor: SITES[r.site]?.color || '#666',
      siteUrl: SITES[r.site]?.url || '',
      snippet: r.snippet,
      score: r.score,
      breadcrumbs: r.url.split('/').filter(Boolean).slice(0, -1),
    })),
  }

  // Cache hot queries in KV (top 1000)
  if (results.length > 0) {
    await env.SEARCH_KV.put(kvCacheKey, JSON.stringify(response), { expirationTtl: 300 })
  }

  // Log search query for analytics
  const latencyMs = Date.now() - startTime
  await logSearch(query, results.length, abVariant, env)
  await trackSearchMetrics(query, results.length, latencyMs, env)

  // Cache in edge (Cloudflare Cache API)
  const edgeResponse = new Response(JSON.stringify(response), {
    headers: {
      ...corsHeaders,
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=300',
    },
  })
  cache.put(cacheRequest, edgeResponse)

  return new Response(JSON.stringify(response), {
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  })
}

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
      const subjectKeywords = {
        physics: [
          'physics',
          'mechanics',
          'waves',
          'electricity',
          'magnetism',
          'thermal',
          'nuclear',
        ],
        chemistry: ['chemistry', 'organic', 'inorganic', 'physical-chemistry'],
        biology: ['biology', 'cell', 'genetics', 'ecology', 'physiology'],
        mathematics: ['maths', 'mathematics', 'algebra', 'calculus', 'statistics'],
        'computer-science': ['computer-science', 'programming', 'algorithms', 'data-structures'],
        economics: ['economics', 'microeconomics', 'macroeconomics'],
      }

      const keywords = subjectKeywords[subjectFilter.toLowerCase()] || [subjectFilter.toLowerCase()]
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

    {
      // Generate snippet
      const snippet = generateSnippet(contentLower, queryWords)

      results.push({
        ...entry,
        score,
        snippet,
      })
    }
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

function handleSites(corsHeaders) {
  const sites = Object.entries(SITES).map(([id, info]) => ({
    id,
    ...info,
    authority: SITE_AUTHORITY[id] || 0,
  }))

  return new Response(JSON.stringify({ sites }), {
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  })
}

async function handleHealth(env, corsHeaders) {
  const metadata = await env.SEARCH_KV.get('metadata', { type: 'json' })
  const metrics = await env.SEARCH_KV.get('search-metrics', { type: 'json' })

  // Compute search SLO metrics from stored data.
  const avgLatencyMs =
    metrics && metrics.latencyCount > 0
      ? Math.round(metrics.latencySum / metrics.latencyCount)
      : null

  return new Response(
    JSON.stringify({
      status: 'ok',
      indexVersion: metadata?.version || 'unknown',
      lastUpdated: metadata?.lastUpdated || 'unknown',
      siteCount: metadata?.siteCount || 0,
      totalEntries: metadata?.totalEntries || 0,
      // Search SLO metrics (expose for monitoring and alerting).
      search: {
        totalSearches: metrics?.totalSearches || 0,
        zeroResults: metrics?.zeroResults || 0,
        zeroResultRate:
          metrics && metrics.totalSearches > 0
            ? ((metrics.zeroResults / metrics.totalSearches) * 100).toFixed(1) + '%'
            : '0%',
        avgLatencyMs,
        maxLatencyMs: metrics?.latencyMax || 0,
        // SLO targets (documented in CODE_QUALITY_VS_FAANG.md G5).
        slo: {
          zeroResultRate: '<5%',
          avgLatencyMs: '<200',
        },
      },
    }),
    {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    },
  )
}

async function handleTrending(env, corsHeaders) {
  const trending = await env.SEARCH_KV.get('trending', { type: 'json' })

  return new Response(JSON.stringify({ trending: trending || [] }), {
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  })
}

async function handleSuggest(url, env, corsHeaders) {
  const query = url.searchParams.get('q')?.trim().toLowerCase()
  if (!query || query.length < 1) {
    return new Response(JSON.stringify({ suggestions: [] }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }

  const trending = (await env.SEARCH_KV.get('trending', { type: 'json' })) || []
  const suggestions = generateSuggestions(query, trending).slice(0, 8)

  return new Response(JSON.stringify({ suggestions }), {
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  })
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
  'dse',
  'ib',
  'a-level',
  'gcse',
  'ap',
  'algorithms',
  'data structures',
  'databases',
  'networking',
]

/**
 * Generate query suggestions for a prefix query.
 * Combines trending queries (by recency-weighted count) and curated common
 * queries that contain the query substring.
 * @param {string} query - lowercased prefix
 * @param {Array<{query:string,count:number}>} trending - trending queries
 * @returns {Array<{query:string,count:number}>}
 */
function generateSuggestions(query, trending) {
  const suggestions = trending
    .filter(t => t.query.toLowerCase().includes(query))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5)
    .map(t => ({ query: t.query, count: t.count }))

  for (const q of COMMON_QUERIES) {
    if (q.includes(query) && !suggestions.find(s => s.query === q)) {
      suggestions.push({ query: q, count: 0 })
    }
  }
  return suggestions
}

async function handleTrack(request, env, corsHeaders) {
  try {
    const data = await request.json()
    const { event, query, position, url, site, resultCount, timestamp, page } = data

    // Store tracking event
    const trackingKey = `track:${Date.now()}`
    await env.SEARCH_KV.put(trackingKey, JSON.stringify(data), { expirationTtl: 86400 * 30 })

    // Update analytics counters
    const analytics = (await env.SEARCH_KV.get('analytics', { type: 'json' })) || {
      totalSearches: 0,
      totalClicks: 0,
      uniqueQueries: {},
      siteClicks: {},
      dailyVolume: {},
    }

    analytics.totalSearches++
    if (event === 'search_result_click' || event === 'search_enter') {
      analytics.totalClicks++
    }

    // Track unique queries
    if (query) {
      analytics.uniqueQueries[query] = (analytics.uniqueQueries[query] || 0) + 1
    }

    // Track site clicks
    if (site) {
      analytics.siteClicks[site] = (analytics.siteClicks[site] || 0) + 1
    }

    // Track daily volume
    const day = timestamp ? timestamp.slice(0, 10) : new Date().toISOString().slice(0, 10)
    analytics.dailyVolume[day] = (analytics.dailyVolume[day] || 0) + 1

    // Keep only last 30 days
    const cutoff = new Date(Date.now() - 30 * 86400000).toISOString().slice(0, 10)
    for (const key of Object.keys(analytics.dailyVolume)) {
      if (key < cutoff) delete analytics.dailyVolume[key]
    }

    await env.SEARCH_KV.put('analytics', JSON.stringify(analytics), { expirationTtl: 86400 * 90 })

    return new Response(JSON.stringify({ ok: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  } catch (err) {
    // Track endpoint: a 400 is a client error, so err.message is useful to
    // the caller, but log it server-side too for observability.
    log('error', 'track endpoint error', { error: String(err), stack: err?.stack })
    return new Response(JSON.stringify({ ok: false, error: err.message }), {
      status: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
}

async function handleAnalytics(env, corsHeaders) {
  const analytics = (await env.SEARCH_KV.get('analytics', { type: 'json' })) || {
    totalSearches: 0,
    totalClicks: 0,
    uniqueQueries: {},
    siteClicks: {},
    dailyVolume: {},
  }

  // Top queries
  const topQueries = Object.entries(analytics.uniqueQueries)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 20)
    .map(([query, count]) => ({ query, count }))

  // Click-through rate
  const ctr =
    analytics.totalSearches > 0
      ? ((analytics.totalClicks / analytics.totalSearches) * 100).toFixed(1)
      : '0.0'

  // Daily volume (last 30 days)
  const dailyVolume = Object.entries(analytics.dailyVolume)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([date, count]) => ({ date, count }))

  // Site distribution
  const siteClicks = Object.entries(analytics.siteClicks)
    .sort((a, b) => b[1] - a[1])
    .map(([site, count]) => ({ site, count }))

  // Search quality metrics (latency, zero-result rate)
  const searchMetrics = (await env.SEARCH_KV.get('search-metrics', { type: 'json' })) || {
    totalSearches: 0,
    zeroResults: 0,
    zeroResultQueries: {},
    latencySum: 0,
    latencyCount: 0,
    latencyMax: 0,
  }
  const zeroResultRate =
    searchMetrics.totalSearches > 0
      ? ((searchMetrics.zeroResults / searchMetrics.totalSearches) * 100).toFixed(1)
      : '0.0'
  const avgLatencyMs =
    searchMetrics.latencyCount > 0
      ? Math.round(searchMetrics.latencySum / searchMetrics.latencyCount)
      : 0
  const topZeroResultQueries = Object.entries(searchMetrics.zeroResultQueries)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([query, count]) => ({ query, count }))

  return new Response(
    JSON.stringify({
      totalSearches: analytics.totalSearches,
      totalClicks: analytics.totalClicks,
      clickThroughRate: ctr,
      uniqueQueryCount: Object.keys(analytics.uniqueQueries).length,
      topQueries,
      dailyVolume,
      siteClicks,
      searchQuality: {
        zeroResultRate: `${zeroResultRate}%`,
        zeroResultCount: searchMetrics.zeroResults,
        topZeroResultQueries,
        avgLatencyMs,
        maxLatencyMs: searchMetrics.latencyMax,
      },
    }),
    {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    },
  )
}

async function handleABTest(env, corsHeaders) {
  // Get A/B test data for all variants
  const variants = ['control', 'variant_a', 'variant_b']
  const results = {}

  for (const variant of variants) {
    const keys = await env.SEARCH_KV.list({ prefix: `ab:${variant}:` })
    let totalSearches = 0
    let totalClicks = 0

    for (const key of keys.keys) {
      const data = await env.SEARCH_KV.get(key.name, { type: 'json' })
      if (data) {
        totalSearches += data.searches || 0
        totalClicks += data.clicks || 0
      }
    }

    results[variant] = {
      searches: totalSearches,
      clicks: totalClicks,
      ctr: totalSearches > 0 ? ((totalClicks / totalSearches) * 100).toFixed(1) : '0.0',
    }
  }

  return new Response(JSON.stringify({ variants: results }), {
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  })
}

async function handleStaticAsset(filename, _corsHeaders) {
  // In production, these would be stored in KV or fetched from a CDN
  // For now, return a redirect to the landing page's static files
  const assetMap = {
    'page-search.js': 'https://wyattsnotes.wyattau.com/page-search.js',
    'cross-site-search.js': 'https://dse.wyattau.com/cross-site-search.js',
  }

  const url = assetMap[filename]
  if (url) {
    return Response.redirect(url, 302)
  }

  return new Response('Not found', { status: 404 })
}

async function handleDashboard(corsHeaders) {
  return new Response(DASHBOARD_HTML, {
    headers: {
      ...corsHeaders,
      'Content-Type': 'text/html; charset=utf-8',
      // Security headers for the dashboard HTML page.
      'Content-Security-Policy':
        "default-src 'self'; script-src 'self' https://static.cloudflareinsights.com; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self'",
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
    },
  })
}

async function logSearch(query, _resultCount, variant, env) {
  // Get current trending
  let trending = (await env.SEARCH_KV.get('trending', { type: 'json' })) || []

  // Find or create entry
  const existing = trending.find(t => t.query === query)
  if (existing) {
    existing.count++
    existing.lastSearched = new Date().toISOString()
  } else {
    trending.push({
      query,
      count: 1,
      lastSearched: new Date().toISOString(),
    })
  }

  // Keep top 50 trending
  trending.sort((a, b) => b.count - a.count)
  trending = trending.slice(0, 50)

  await env.SEARCH_KV.put('trending', JSON.stringify(trending), { expirationTtl: 86400 })

  // Track A/B test results
  const abKey = `ab:${variant}:${query}`
  const abData = (await env.SEARCH_KV.get(abKey, { type: 'json' })) || { searches: 0, clicks: 0 }
  abData.searches++
  await env.SEARCH_KV.put(abKey, JSON.stringify(abData), { expirationTtl: 86400 * 7 })
}

/**
 * Track search quality metrics: latency and zero-result rate.
 * Stored under a separate key to avoid bloating the main analytics object.
 * @param {string} query - the search query
 * @param {number} resultCount - number of results returned
 * @param {number} latencyMs - wall-clock time of the search
 * @param {object} env - worker env with SEARCH_KV
 */
async function trackSearchMetrics(query, resultCount, latencyMs, env) {
  const metrics = (await env.SEARCH_KV.get('search-metrics', { type: 'json' })) || {
    totalSearches: 0,
    zeroResults: 0,
    zeroResultQueries: {},
    latencySum: 0,
    latencyCount: 0,
    latencyMax: 0,
  }

  metrics.totalSearches++
  metrics.latencySum += latencyMs
  metrics.latencyCount++
  if (latencyMs > metrics.latencyMax) metrics.latencyMax = latencyMs

  if (resultCount === 0) {
    metrics.zeroResults++
    metrics.zeroResultQueries[query] = (metrics.zeroResultQueries[query] || 0) + 1
    // Keep only the top 50 zero-result queries to bound storage.
    const sorted = Object.entries(metrics.zeroResultQueries)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 50)
    metrics.zeroResultQueries = Object.fromEntries(sorted)
  }

  await env.SEARCH_KV.put('search-metrics', JSON.stringify(metrics), { expirationTtl: 86400 * 90 })
}

// Named exports of pure functions and constants for unit testing.
// These do not affect the Worker runtime (which uses the default export) but
// let the test suite import the real implementation instead of duplicating it.
export {
  COMMON_QUERIES,
  detectLanguage,
  generateSnippet,
  generateSuggestions,
  hashString,
  LANG_PATTERNS,
  RANKING_VARIANTS,
  SITE_AUTHORITY,
  SITES,
  searchIndex,
}
