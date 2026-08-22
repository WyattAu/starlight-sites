// HTTP request handlers for the search Worker (one per route).
// @ts-check

import { logSearch, recordTrackEvent, summarizeAnalytics, trackSearchMetrics } from './analytics.js'
import { ASSET_REDIRECTS, RANKING_VARIANTS, SITE_AUTHORITY, SITES } from './config.js'
import { renderDashboard } from './dashboard.js'
import { log } from './log.js'
import STATIC_INDEX from './merged-index.js'
import { detectLanguage, hashString, searchIndex } from './ranking.js'
import { checkRateLimit } from './rate-limit.js'
import { generateSuggestions } from './suggest.js'
import { validateSearchQuery, validateTrackPayload } from './validate.js'

function jsonResponse(body, corsHeaders, { status = 200, headers = {} } = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json', ...headers },
  })
}

async function handleSearch(request, url, env, corsHeaders) {
  const startTime = Date.now()

  // Simple IP-based rate limiting (100 req/60s per IP).
  const rl = checkRateLimit(request)
  if (!rl.allowed) {
    return jsonResponse({ error: 'Rate limit exceeded. Try again later.' }, corsHeaders, {
      status: 429,
      headers: { 'Retry-After': String(rl.retryAfterSec) },
    })
  }

  const queryRaw = url.searchParams.get('q')?.trim()
  const qCheck = validateSearchQuery(queryRaw)
  if (!qCheck.ok) {
    return new Response(JSON.stringify({ error: qCheck.error }), {
      status: qCheck.status,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
  const query = qCheck.value

  const limit = Math.min(parseInt(url.searchParams.get('limit') || '20', 10), 50)
  const site = url.searchParams.get('site') // optional: filter by site
  const subject = url.searchParams.get('subject') // optional: filter by subject
  const variant = url.searchParams.get('variant') // optional: A/B test variant
  const lang = url.searchParams.get('lang')
  const preview = url.searchParams.get('preview') === 'true'

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
  const cached = await env.SEARCH_KV?.get(kvCacheKey, { type: 'json' })
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

  // Fetch merged index from KV, fall back to static bundle
  const index = (await env.SEARCH_KV?.get('merged-index', { type: 'json' })) || STATIC_INDEX
  if (!index) {
    return jsonResponse({ error: 'Search index not available' }, corsHeaders, { status: 503 })
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
    const trending = (await env.SEARCH_KV?.get('trending', { type: 'json' })) || []
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
    await env.SEARCH_KV?.put(kvCacheKey, JSON.stringify(response), { expirationTtl: 300 })
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

function handleSites(corsHeaders) {
  const sites = Object.entries(SITES).map(([id, info]) => ({
    id,
    ...info,
    authority: SITE_AUTHORITY[id] || 0,
  }))

  return jsonResponse({ sites }, corsHeaders)
}

async function handleHealth(env, corsHeaders) {
  const metadata = await env.SEARCH_KV?.get('metadata', { type: 'json' })
  const metrics = await env.SEARCH_KV?.get('search-metrics', { type: 'json' })

  const avgLatencyMs =
    metrics && metrics.latencyCount > 0
      ? Math.round(metrics.latencySum / metrics.latencyCount)
      : null

  return jsonResponse(
    {
      status: 'ok',
      indexVersion: metadata?.version || 'unknown',
      lastUpdated: metadata?.lastUpdated || 'unknown',
      siteCount: metadata?.siteCount || 0,
      totalEntries: metadata?.totalEntries || 0,
      search: {
        totalSearches: metrics?.totalSearches || 0,
        zeroResults: metrics?.zeroResults || 0,
        zeroResultRate:
          metrics && metrics.totalSearches > 0
            ? `${((metrics.zeroResults / metrics.totalSearches) * 100).toFixed(1)}%`
            : '0%',
        avgLatencyMs,
        maxLatencyMs: metrics?.latencyMax || 0,
        slo: {
          zeroResultRate: '<5%',
          avgLatencyMs: '<200',
        },
      },
    },
    corsHeaders,
  )
}

async function handleErrors(env, corsHeaders) {
  // Surface recent client errors from KV for dashboard visibility.
  const keys = await env.SEARCH_KV?.list({ prefix: 'track:', limit: 100 }) || { keys: [] }
  const errors = []
  for (const key of keys.keys) {
    if (!key.name.includes('client_error')) continue
    const data = await env.SEARCH_KV?.get(key.name, { type: 'json' })
    if (data && data.event === 'client_error') {
      errors.push({
        error: data.error,
        component: data.component,
        page: data.page,
        timestamp: data.timestamp,
      })
    }
  }
  // Sort newest first, limit to 50
  errors.sort((a, b) => (b.timestamp || '').localeCompare(a.timestamp || ''))
  return jsonResponse({ errors: errors.slice(0, 50), total: errors.length }, corsHeaders)
}

async function handleTrending(env, corsHeaders) {
  const trending = await env.SEARCH_KV?.get('trending', { type: 'json' })
  return jsonResponse({ trending: trending || [] }, corsHeaders)
}

async function handleSuggest(url, env, corsHeaders) {
  const query = url.searchParams.get('q')?.trim().toLowerCase()
  if (!query || query.length < 1) {
    return jsonResponse({ suggestions: [] }, corsHeaders)
  }

  const trending = (await env.SEARCH_KV.get('trending', { type: 'json' })) || []
  const suggestions = generateSuggestions(query, trending).slice(0, 8)

  return jsonResponse({ suggestions }, corsHeaders)
}

async function handleTrack(request, env, corsHeaders) {
  try {
    let data
    try {
      data = await request.json()
    } catch {
      return jsonResponse({ ok: false, error: 'Body must be valid JSON' }, corsHeaders, {
        status: 400,
      })
    }

    const check = validateTrackPayload(data)
    if (!check.ok) {
      return jsonResponse({ ok: false, error: check.error }, corsHeaders, { status: 400 })
    }

    await recordTrackEvent(check.value, env)
    return jsonResponse({ ok: true }, corsHeaders)
  } catch (err) {
    // Track endpoint: a 400 is a client error, so err.message is useful to
    // the caller, but log it server-side too for observability.
    log('error', 'track endpoint error', { error: String(err), stack: err?.stack })
    return jsonResponse({ ok: false, error: err.message }, corsHeaders, { status: 400 })
  }
}

async function handleAnalytics(env, corsHeaders) {
  const summary = await summarizeAnalytics(env)
  return jsonResponse(summary, corsHeaders)
}

async function handleABTest(env, corsHeaders) {
  // Get A/B test data for all variants
  const variants = ['control', 'variant_a', 'variant_b']
  const results = {}

  for (const variant of variants) {
    const keys = (await env.SEARCH_KV?.list({ prefix: `ab:${variant}:` })) || { keys: [] }
    let totalSearches = 0
    let totalClicks = 0

    for (const key of keys.keys) {
      const data = await env.SEARCH_KV?.get(key.name, { type: 'json' })
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

  return jsonResponse({ variants: results }, corsHeaders)
}

function handleStaticAsset(filename, _corsHeaders) {
  // In production, these would be stored in KV or fetched from a CDN
  // For now, return a redirect to the landing page's static files
  const url = ASSET_REDIRECTS[filename]
  if (url) {
    return Response.redirect(url, 302)
  }

  return new Response('Not found', { status: 404 })
}

function handleDashboard(corsHeaders) {
  return new Response(renderDashboard(SITES), {
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

export {
  handleABTest,
  handleAnalytics,
  handleDashboard,
  handleErrors,
  handleHealth,
  handleSearch,
  handleSites,
  handleStaticAsset,
  handleSuggest,
  handleTrack,
  handleTrending,
}
