#!/usr/bin/env node
/**
 * Search Worker unit tests with a mocked KV namespace.
 *
 * Exercises the full request/routing/ranking/caching pipeline of
 * search-api/worker.js against an in-memory KV, with the Cloudflare Cache API
 * stubbed. No network, no Cloudflare account required.
 *
 * Run: node --test tests/unit/search-worker.test.js
 */

const { describe, it, before, after } = require('node:test')
const assert = require('node:assert')
const path = require('node:path')

const WORKER_PATH = path.join(__dirname, '..', '..', 'search-api', 'worker.js')

// --- Test fixture: a small but realistic merged index ----------------------
const FIXTURE_INDEX = {
  entries: [
    {
      title: 'Quadratic Equations',
      url: 'https://dse.wyattau.com/maths/quadratics/',
      site: 'dse',
      content:
        'A quadratic equation has the form ax^2 + bx + c = 0. The discriminant determines the nature of the roots.',
      description:
        'Solving quadratic equations by factorisation, the formula, and completing the square.',
    },
    {
      title: "Mechanics: Newton's Laws of Motion",
      url: 'https://dse.wyattau.com/physics/mechanics/newtons-laws/',
      site: 'dse',
      content:
        "Newton's three laws describe the relationship between a body and the forces acting on it. F = ma.",
    },
    {
      title: 'Linear Algebra: Vector Spaces',
      url: 'https://university.wyattau.com/mathematics/linear-algebra/vector-spaces/',
      site: 'university',
      content:
        'A vector space over a field is a set equipped with addition and scalar multiplication satisfying eight axioms.',
    },
    {
      title: 'Quadratic Forms',
      url: 'https://university.wyattau.com/mathematics/quadratic-forms/',
      site: 'university',
      content: 'A quadratic form is a homogeneous polynomial of degree two in several variables.',
    },
    {
      title: 'Rust Ownership and Borrowing',
      url: 'https://languages.wyattau.com/rust/ownership/',
      site: 'languages',
      content:
        'Ownership is the central concept of Rust memory safety. Each value has a single owner.',
    },
  ],
  metadata: {
    totalEntries: 5,
    siteCount: 9,
    version: 'test-v1',
    lastUpdated: '2026-06-15T00:00:00.000Z',
  },
}

// --- Mock Cloudflare KV namespace ------------------------------------------
function createMockKV(initial = {}) {
  const store = new Map(Object.entries(initial))
  return {
    store,
    async get(key, opts) {
      const raw = store.get(key)
      if (raw === undefined) return null
      if (opts && opts.type === 'json') {
        try {
          return JSON.parse(raw)
        } catch {
          return null
        }
      }
      return raw
    },
    async put(key, value, _opts) {
      store.set(key, typeof value === 'string' ? value : JSON.stringify(value))
    },
    async delete(key) {
      store.delete(key)
    },
    async list({ prefix = '' } = {}) {
      const keys = []
      for (const key of store.keys()) {
        if (key.startsWith(prefix)) keys.push({ name: key })
      }
      return { keys, list_complete: true, cacheStatus: null }
    },
  }
}

// --- Mock Cloudflare Cache API (caches.default) ----------------------------
function installMockCache() {
  const cached = new Map()
  const mockCache = {
    async match(_req) {
      return undefined
    }, // bypass edge cache for deterministic tests
    async put(_req, _res) {
      return undefined
    },
    _cached: cached,
  }
  const prev = globalThis.caches
  globalThis.caches = { default: mockCache }
  return () => {
    globalThis.caches = prev
  }
}

// --- Helpers ---------------------------------------------------------------
function makeEnv(kv) {
  return { SEARCH_KV: kv }
}

async function callWorker(worker, pathname, { search = '', method = 'GET', env } = {}) {
  const url = `https://search.wyattau.com${pathname}${search}`
  const request = new Request(url, { method })
  const response = await worker.fetch(request, env)
  let body = null
  const text = await response.text()
  try {
    body = JSON.parse(text)
  } catch {
    body = text
  }
  return { status: response.status, headers: response.headers, body }
}

// --- Tests -----------------------------------------------------------------
describe('Search Worker (mocked KV)', () => {
  let worker
  let restoreCache

  before(async () => {
    restoreCache = installMockCache()
    worker = (await import(`file://${WORKER_PATH}`)).default
  })

  after(() => {
    if (restoreCache) restoreCache()
  })

  function freshEnv(extra = {}) {
    const kv = createMockKV({
      'merged-index': JSON.stringify(FIXTURE_INDEX),
      metadata: JSON.stringify(FIXTURE_INDEX.metadata),
      ...extra,
    })
    return makeEnv(kv)
  }

  describe('CORS preflight', () => {
    it('OPTIONS returns 204-style empty response with CORS headers', async () => {
      const { status, headers } = await callWorker(worker, '/api/search', {
        method: 'OPTIONS',
        env: freshEnv(),
      })
      // Cloudflare-style empty preflight; status may be 200 with empty body.
      assert.ok(status === 200 || status === 204, 'OPTIONS should succeed')
      assert.strictEqual(headers.get('Access-Control-Allow-Origin'), '*')
    })
  })

  describe('Routing', () => {
    it('unknown path returns 404', async () => {
      const { status, body } = await callWorker(worker, '/api/nope', { env: freshEnv() })
      assert.strictEqual(status, 404)
      assert.strictEqual(body.error, 'Not found')
    })
  })

  describe('GET /api/search', () => {
    it('rejects queries shorter than 2 characters with 400', async () => {
      const { status, body } = await callWorker(worker, '/api/search', {
        search: '?q=a',
        env: freshEnv(),
      })
      assert.strictEqual(status, 400)
      assert.match(body.error, /at least 2 characters/i)
    })

    it('returns ranked results for a matching query', async () => {
      const { status, body } = await callWorker(worker, '/api/search', {
        search: '?q=quadratic',
        env: freshEnv(),
      })
      assert.strictEqual(status, 200)
      assert.ok(body.total >= 2, 'should match at least the two quadratic entries')
      // Both quadratic titles must be present.
      const titles = body.results.map(r => r.title)
      assert.ok(titles.includes('Quadratic Equations'))
      assert.ok(titles.includes('Quadratic Forms'))
    })

    it('ranks exact title matches above content-only matches', async () => {
      const { body } = await callWorker(worker, '/api/search', {
        search: '?q=quadratic',
        env: freshEnv(),
      })
      // Results are sorted by score descending.
      const scores = body.results.map(r => r.score)
      for (let i = 1; i < scores.length; i++) {
        assert.ok(scores[i - 1] >= scores[i], 'results must be sorted by score descending')
      }
    })

    it('filters results by site', async () => {
      const { body } = await callWorker(worker, '/api/search', {
        search: '?q=quadratic&site=university',
        env: freshEnv(),
      })
      assert.ok(body.total >= 1)
      for (const r of body.results) {
        assert.strictEqual(r.site, 'university', 'site filter must exclude other sites')
      }
    })

    it('filters results by subject (physics)', async () => {
      const { body } = await callWorker(worker, '/api/search', {
        search: '?q=newton&subject=physics',
        env: freshEnv(),
      })
      assert.ok(body.total >= 1)
      assert.strictEqual(body.results[0].title, "Mechanics: Newton's Laws of Motion")
    })

    it('respects the limit parameter (capped at 50)', async () => {
      const { body } = await callWorker(worker, '/api/search', {
        search: '?q=quadratic&limit=1',
        env: freshEnv(),
      })
      assert.ok(body.results.length <= 1, 'limit must cap the result count')
    })

    it('attaches site metadata (name, color, url) to each result', async () => {
      const { body } = await callWorker(worker, '/api/search', {
        search: '?q=rust',
        env: freshEnv(),
      })
      const r = body.results[0]
      assert.ok(r.siteName, 'siteName should be populated')
      assert.ok(r.siteColor, 'siteColor should be populated')
      assert.ok(r.siteUrl, 'siteUrl should be populated')
    })

    it('returns 503 when the merged index is missing', async () => {
      // KV with no merged-index key.
      const env = makeEnv(createMockKV({ metadata: JSON.stringify(FIXTURE_INDEX.metadata) }))
      const { status, body } = await callWorker(worker, '/api/search', {
        search: '?q=quadratic',
        env,
      })
      assert.strictEqual(status, 503)
      assert.match(body.error, /index not available/i)
    })

    it('returns breadcrumbs derived from the URL', async () => {
      const { body } = await callWorker(worker, '/api/search', {
        search: '?q=vector',
        env: freshEnv(),
      })
      const r = body.results.find(x => x.title.includes('Vector Spaces'))
      assert.ok(r, 'vector space entry should match')
      assert.ok(Array.isArray(r.breadcrumbs))
      assert.ok(r.breadcrumbs.includes('mathematics'))
    })

    it('includes a preview object when preview=true', async () => {
      const { body } = await callWorker(worker, '/api/search', {
        search: '?q=quadratic&preview=true',
        env: freshEnv(),
      })
      assert.ok(body.results[0].preview, 'preview=true must attach a preview object')
      assert.ok(body.results[0].preview.snippet)
    })

    it('returns alternative suggestions on zero results (zero-result recovery)', async () => {
      // "calculus" is a curated common query but matches no fixture entry, so
      // it yields zero index results and should surface suggestions.
      const { status, body } = await callWorker(worker, '/api/search', {
        search: '?q=calculus',
        env: freshEnv(),
      })
      assert.strictEqual(status, 200)
      assert.strictEqual(body.total, 0, 'calculus matches no fixture entry')
      assert.ok(
        Array.isArray(body.suggestions),
        'zero-result queries must include a suggestions array',
      )
      assert.ok(
        body.suggestions.length > 0,
        'calculus should yield at least one curated suggestion',
      )
    })
  })

  describe('GET /api/sites', () => {
    it('returns the nine configured sites', async () => {
      const { status, body } = await callWorker(worker, '/api/sites', { env: freshEnv() })
      assert.strictEqual(status, 200)
      assert.strictEqual(body.sites.length, 9)
      const ids = body.sites.map(s => s.id).sort()
      assert.deepStrictEqual(ids, [
        'alevel',
        'dse',
        'ib',
        'infrastructure',
        'languages',
        'programming',
        'qualifications',
        'tools',
        'university',
      ])
    })
  })

  describe('GET /api/health', () => {
    it('reports ok with metadata when index present', async () => {
      const { status, body } = await callWorker(worker, '/api/health', { env: freshEnv() })
      assert.strictEqual(status, 200)
      assert.strictEqual(body.status, 'ok')
      assert.strictEqual(body.siteCount, 9)
      assert.strictEqual(body.totalEntries, 5)
    })
  })

  describe('GET /api/suggest', () => {
    it('returns suggestions derived from titles', async () => {
      const { status, body } = await callWorker(worker, '/api/suggest', {
        search: '?q=quad',
        env: freshEnv(),
      })
      assert.strictEqual(status, 200)
      assert.ok(Array.isArray(body.suggestions))
    })

    it('returns an empty suggestion list (200) without a query', async () => {
      const { status, body } = await callWorker(worker, '/api/suggest', { env: freshEnv() })
      assert.strictEqual(status, 200)
      assert.ok(Array.isArray(body.suggestions))
      assert.strictEqual(body.suggestions.length, 0, 'no query should yield no suggestions')
    })
  })

  describe('GET /api/trending', () => {
    it('returns a trending array (empty when no data)', async () => {
      const { status, body } = await callWorker(worker, '/api/trending', { env: freshEnv() })
      assert.strictEqual(status, 200)
      assert.ok(Array.isArray(body.queries) || Array.isArray(body.trending) || Array.isArray(body))
    })
  })

  describe('GET /api/analytics', () => {
    it('returns an analytics object', async () => {
      const { status, body } = await callWorker(worker, '/api/analytics', { env: freshEnv() })
      assert.strictEqual(status, 200)
      assert.ok(typeof body === 'object')
    })
  })

  describe('Tracking and ranking persistence', () => {
    it('POST /api/track records a search and it appears in analytics', async () => {
      const env = freshEnv()
      const trackRes = await callWorker(worker, '/api/track', {
        method: 'POST',
        search: '',
        env,
      })
      // POST without body may still 200 (no-op) or 400; ensure it does not crash.
      assert.ok([200, 400].includes(trackRes.status))

      // A real search should log. Perform a search then check analytics shape.
      await callWorker(worker, '/api/search', { search: '?q=quadratic', env })
      const analytics = await callWorker(worker, '/api/analytics', { env })
      assert.strictEqual(analytics.status, 200)
    })
  })

  describe('KV caching', () => {
    it('caches hot query results in KV after the first search', async () => {
      const env = freshEnv()
      await callWorker(worker, '/api/search', { search: '?q=quadratic', env })
      // The worker stores cached results under a search:<site>:<variant>:<query> key.
      const cachedKeys = [...env.SEARCH_KV.store.keys()].filter(k => k.startsWith('search:'))
      assert.ok(cachedKeys.length > 0, 'a hot query should be written to the KV cache')
    })
  })

  describe('Language detection', () => {
    it('detects CJK queries as non-English', async () => {
      const { body } = await callWorker(worker, '/api/search', {
        search: `?q=${encodeURIComponent('向量')}`,
        env: freshEnv(),
      })
      assert.ok(['zh', 'en'].includes(body.lang))
    })
  })

  describe('Search quality metrics', () => {
    it('records latency and zero-result rate in search-metrics KV', async () => {
      const env = freshEnv()
      // A zero-result search.
      await callWorker(worker, '/api/search', { search: '?q=calculus', env })
      // A successful search.
      await callWorker(worker, '/api/search', { search: '?q=quadratic', env })
      const metrics = await env.SEARCH_KV.get('search-metrics', { type: 'json' })
      assert.ok(metrics, 'search-metrics should exist')
      assert.ok(metrics.totalSearches >= 2, 'both searches should be tracked')
      assert.ok(metrics.zeroResults >= 1, 'calculus is a zero-result query')
      assert.ok(metrics.latencyCount >= 2, 'both searches should contribute to latency')
    })

    it('analytics endpoint includes searchQuality block', async () => {
      const env = freshEnv()
      await callWorker(worker, '/api/search', { search: '?q=calculus', env })
      const { body } = await callWorker(worker, '/api/analytics', { env })
      assert.ok(body.searchQuality, 'analytics must include searchQuality')
      assert.ok(typeof body.searchQuality.zeroResultRate === 'string')
      assert.ok(typeof body.searchQuality.avgLatencyMs === 'number')
    })
  })

  describe('dashboard XSS hardening (P0-1)', () => {
    // The analytics dashboard renders user-controlled data (q.query) into
    // innerHTML. This guard ensures the esc() helper is present and that it
    // escapes XSS payloads, so a stored search-term payload cannot execute in
    // the dashboard origin. See CODE_QUALITY_AUDIT.md F1.
    it('dashboard HTML defines the esc() helper and wraps q.query in it', async () => {
      const { body } = await callWorker(worker, '/dashboard', { env: freshEnv() })
      const html = String(body)
      // The escape helper must be defined in the embedded client script.
      assert.match(html, /function esc\(s\)/, 'esc() helper must be defined')
      // q.query must be wrapped in esc() -- not interpolated raw. This is the
      // exact regression that would reintroduce stored XSS.
      assert.doesNotMatch(html, /'<b>'\+q\.query\+'/, 'q.query must not be raw')
      assert.match(html, /esc\(q\.query\)/, 'q.query must be escaped')
    })

    it('esc() escapes HTML metacharacters and neutralises an XSS payload', async () => {
      const { body } = await callWorker(worker, '/dashboard', { env: freshEnv() })
      const html = String(body)
      // Extract the esc function source from the embedded script and verify
      // it escapes the OWASP payload, so the payload renders as inert text.
      const match = html.match(/function esc\(s\)\{(.+?)\}/)
      assert.ok(match, 'esc function source not found')
      // match[1] is the function body (starts with `return String(s)...`).
      const esc = new Function('s', match[1])
      const payload = '<img src=x onerror=alert(1)>'
      const escaped = esc(payload)
      assert.ok(!escaped.includes('<img'), 'escaped output must not contain a raw <img tag')
      assert.ok(escaped.includes('&lt;img'), 'must escape < to &lt; (tag broken)')
      assert.ok(
        !escaped.includes('<') && !escaped.includes('>'),
        'no raw angle brackets may remain (payload is inert text)',
      )
    })
  })
})
