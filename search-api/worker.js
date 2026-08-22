// Search API Worker for Wyatt's Notes -- entry point and routing table.
//
// Decomposed out of a single 967-line module (see ADR-012):
//   config.js     -- site catalogue + ranking weights (from sites.meta.json)
//   handlers.js   -- one handler per route
//   ranking.js    -- search execution + scoring (pure)
//   suggest.js    -- autocomplete/zero-result suggestions (pure)
//   analytics.js  -- KV-backed analytics persistence/aggregation
//   validate.js   -- declarative input validation for track + search
//   rate-limit.js -- in-memory IP rate limiting
//   log.js        -- structured JSON logging
//
// The named exports at the bottom preserve the unit-test surface
// (tests/unit/search-worker.test.js, tests/unit/search-api.test.js import
// the real implementation rather than duplicating it).
// @ts-check

import { COMMON_QUERIES, LANG_PATTERNS, RANKING_VARIANTS, SITE_AUTHORITY, SITES } from './config.js'
import {
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
} from './handlers.js'
import { log } from './log.js'
import { detectLanguage, generateSnippet, hashString, searchIndex } from './ranking.js'
import { generateSuggestions } from './suggest.js'

export default {
  async fetch(request, env) {
    const url = new URL(request.url)

    // CORS headers: restrict to wyattau.com subdomains for API endpoints,
    // but allow * for static assets (page-search.js, cross-site-search.js)
    // since they are injected into third-party pages via script tags.
    const origin = request.headers.get('origin') || ''
    const isWyattauOrigin = origin.endsWith('.wyattau.com') || origin === 'https://wyattsnotes.wyattau.com'
    const corsOrigin = isWyattauOrigin ? origin : '*'
    const corsHeaders = {
      'Access-Control-Allow-Origin': corsOrigin,
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Cache-Control': 'public, max-age=300, s-maxage=300',
    }

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders })
    }

    // Routing table
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
      if (url.pathname === '/api/errors') {
        return await handleErrors(env, corsHeaders)
      }
      if (url.pathname === '/api/ab-test') {
        return await handleABTest(env, corsHeaders)
      }
      if (url.pathname === '/' || url.pathname === '/dashboard') {
        return handleDashboard(corsHeaders)
      }
      // CDN-cached static assets
      if (url.pathname === '/page-search.js') {
        return handleStaticAsset('page-search.js', corsHeaders)
      }
      if (url.pathname === '/cross-site-search.js') {
        return handleStaticAsset('cross-site-search.js', corsHeaders)
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
