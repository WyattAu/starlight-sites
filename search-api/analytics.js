// Analytics persistence and aggregation (KV-backed).
// @ts-check

/** Shape stored under the 'analytics' KV key. */
function emptyAnalytics() {
  return {
    totalSearches: 0,
    totalClicks: 0,
    uniqueQueries: {},
    siteClicks: {},
    dailyVolume: {},
  }
}

/** Shape stored under the 'search-metrics' KV key. */
function emptySearchMetrics() {
  return {
    totalSearches: 0,
    zeroResults: 0,
    zeroResultQueries: {},
    latencySum: 0,
    latencyCount: 0,
    latencyMax: 0,
  }
}

/**
 * Update the trending list and A/B counters for one executed search.
 * @param {string} query
 * @param {number} _resultCount
 * @param {string} variant
 * @param {object} env - worker env with SEARCH_KV
 */
async function logSearch(query, _resultCount, variant, env) {
  if (!env.SEARCH_KV) return
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
  if (!env.SEARCH_KV) return
  const metrics =
    (await env.SEARCH_KV.get('search-metrics', { type: 'json' })) || emptySearchMetrics()

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

/**
 * Fold a validated tracking event into the analytics counters.
 * Pure-ish: reads, mutates a copy, writes back.
 * @param {object} value - validated track payload
 * @param {object} env
 */
async function recordTrackEvent(value, env) {
  // Store the validated (whitelisted-field) event
  const trackingKey = `track:${Date.now()}`
  await env.SEARCH_KV?.put(trackingKey, JSON.stringify(value), { expirationTtl: 86400 * 30 })

  const analytics = (await env.SEARCH_KV?.get('analytics', { type: 'json' })) || emptyAnalytics()

  analytics.totalSearches++
  if (value.event === 'search_result_click' || value.event === 'search_enter') {
    analytics.totalClicks++
  }

  if (value.query) {
    analytics.uniqueQueries[value.query] = (analytics.uniqueQueries[value.query] || 0) + 1
  }
  if (value.site) {
    analytics.siteClicks[value.site] = (analytics.siteClicks[value.site] || 0) + 1
  }

  const day = value.timestamp ? value.timestamp.slice(0, 10) : new Date().toISOString().slice(0, 10)
  analytics.dailyVolume[day] = (analytics.dailyVolume[day] || 0) + 1

  // Keep only last 30 days
  const cutoff = new Date(Date.now() - 30 * 86400000).toISOString().slice(0, 10)
  for (const key of Object.keys(analytics.dailyVolume)) {
    if (key < cutoff) delete analytics.dailyVolume[key]
  }

  await env.SEARCH_KV?.put('analytics', JSON.stringify(analytics), { expirationTtl: 86400 * 90 })
}

/**
 * Read both analytics objects and derive the /api/analytics summary.
 * @param {object} env
 */
async function summarizeAnalytics(env) {
  const analytics = (await env.SEARCH_KV?.get('analytics', { type: 'json' })) || emptyAnalytics()
  const searchMetrics =
    (await env.SEARCH_KV?.get('search-metrics', { type: 'json' })) || emptySearchMetrics()

  const topQueries = Object.entries(analytics.uniqueQueries)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 20)
    .map(([query, count]) => ({ query, count }))

  const ctr =
    analytics.totalSearches > 0
      ? ((analytics.totalClicks / analytics.totalSearches) * 100).toFixed(1)
      : '0.0'

  const dailyVolume = Object.entries(analytics.dailyVolume)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([date, count]) => ({ date, count }))

  const siteClicks = Object.entries(analytics.siteClicks)
    .sort((a, b) => b[1] - a[1])
    .map(([site, count]) => ({ site, count }))

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

  return {
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
  }
}

export {
  emptyAnalytics,
  emptySearchMetrics,
  logSearch,
  recordTrackEvent,
  summarizeAnalytics,
  trackSearchMetrics,
}
