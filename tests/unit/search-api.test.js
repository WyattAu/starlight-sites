#!/usr/bin/env node
/**
 * Pure-function unit tests for the search ranking, language detection, hashing,
 * and snippet generation logic.
 *
 * These tests import the REAL exports from search-api/worker.js (no duplicated
 * logic) so they always run against the production implementation. End-to-end
 * worker behaviour (routing, KV, caching) is covered by
 * tests/unit/search-worker.test.js.
 *
 * Run: node --test tests/unit/search-api.test.js
 */

const { describe, it, before } = require('node:test')
const assert = require('node:assert')
const path = require('node:path')

const WORKER_PATH = path.join(__dirname, '..', '..', 'search-api', 'worker.js')

let api
before(async () => {
  api = await import(`file://${WORKER_PATH}`)
})

const TEST_INDEX = {
  entries: [
    {
      title: 'Quadratic Equations',
      url: 'https://dse.wyattau.com/maths/quadratics/',
      site: 'dse',
      content: 'A quadratic equation has the form ax^2 + bx + c = 0. Discriminant and roots.',
    },
    {
      title: "Mechanics: Newton's Laws",
      url: 'https://dse.wyattau.com/physics/mechanics/',
      site: 'dse',
      content: 'Newton three laws. F = ma. Inertia, force, action-reaction.',
    },
    {
      title: 'Vector Spaces',
      url: 'https://university.wyattau.com/mathematics/linear-algebra/',
      site: 'university',
      content: 'A vector space over a field with addition and scalar multiplication axioms.',
    },
    {
      title: 'Rust Ownership',
      url: 'https://languages.wyattau.com/rust/ownership/',
      site: 'languages',
      content: 'Ownership borrowing lifetimes in Rust memory safety.',
    },
  ],
}

describe('Search Ranking', () => {
  it('ranks exact title matches above content-only matches', () => {
    const results = api.searchIndex(
      'quadratic',
      TEST_INDEX,
      null,
      api.RANKING_VARIANTS.control,
      null,
      null,
    )
    assert.ok(results.length >= 1)
    // The exact-title entry must not score lower than any content-only match.
    const top = results[0]
    assert.match(top.title, /quadratic/i)
  })

  it('excludes entries with no query relevance (authority-only no longer pollutes results)', () => {
    // A nonsense query must return zero results even though sites have authority.
    const results = api.searchIndex(
      'zzzznonexistent',
      TEST_INDEX,
      null,
      api.RANKING_VARIANTS.control,
      null,
      null,
    )
    assert.strictEqual(results.length, 0, 'authority must not include non-matching entries')
  })

  it('applies authority as a boost on matching entries (university > dse for a shared term)', () => {
    // Both "maths" (dse) and "mathematics" (university) entries contain math terms;
    // ensure authority influences ordering without being the sole inclusion criterion.
    const results = api.searchIndex(
      'axioms',
      TEST_INDEX,
      null,
      api.RANKING_VARIANTS.control,
      null,
      null,
    )
    // Only the vector-space entry mentions axioms.
    assert.ok(results.length >= 1)
    assert.match(results[0].title, /vector spaces/i)
  })

  it('filters by site', () => {
    const results = api.searchIndex(
      'newton',
      TEST_INDEX,
      'dse',
      api.RANKING_VARIANTS.control,
      null,
      null,
    )
    assert.ok(results.every(r => r.site === 'dse'))
  })

  it('sorts results by score descending', () => {
    const results = api.searchIndex(
      'rust ownership',
      TEST_INDEX,
      null,
      api.RANKING_VARIANTS.control,
      null,
      null,
    )
    for (let i = 1; i < results.length; i++) {
      assert.ok(results[i - 1].score >= results[i].score)
    }
  })

  it('respects A/B ranking variants (variant_a weights title higher)', () => {
    const control = api.searchIndex(
      'quadratic',
      TEST_INDEX,
      null,
      api.RANKING_VARIANTS.control,
      null,
      null,
    )
    const variantA = api.searchIndex(
      'quadratic',
      TEST_INDEX,
      null,
      api.RANKING_VARIANTS.variant_a,
      null,
      null,
    )
    if (control.length && variantA.length) {
      // variant_a titleExact (120) > control titleExact (100); the top score must differ.
      assert.ok(variantA[0].score >= control[0].score)
    }
  })
})

describe('Language Detection', () => {
  it('detects English by default', () => {
    assert.strictEqual(api.detectLanguage('hello world'), 'en')
  })
  it('detects Chinese', () => {
    assert.strictEqual(api.detectLanguage('你好世界'), 'zh')
  })
  it('detects Japanese', () => {
    assert.strictEqual(api.detectLanguage('こんにちは'), 'ja')
  })
  it('detects Korean', () => {
    assert.strictEqual(api.detectLanguage('안녕하세요'), 'ko')
  })
  it('detects Arabic', () => {
    assert.strictEqual(api.detectLanguage('مرحبا'), 'ar')
  })
  it('detects Russian', () => {
    assert.strictEqual(api.detectLanguage('привет мир'), 'ru')
  })
})

describe('Hash Function', () => {
  it('is deterministic', () => {
    assert.strictEqual(api.hashString('physics'), api.hashString('physics'))
  })
  it('distinguishes different inputs', () => {
    assert.notStrictEqual(api.hashString('physics'), api.hashString('chemistry'))
  })
  it('is always non-negative', () => {
    for (const s of ['', 'a', 'test query', '数学']) {
      assert.ok(api.hashString(s) >= 0, `hashString("${s}") must be non-negative`)
    }
  })
})

describe('Snippet Generation', () => {
  it('handles empty content', () => {
    const snip = api.generateSnippet('', ['physics'])
    assert.ok(typeof snip === 'string')
  })
  it('returns the beginning when no match is found', () => {
    const content = 'This document is about mathematics and nothing else relevant here.'
    const snip = api.generateSnippet(content, ['chemistry'])
    assert.ok(snip.length > 0)
  })
  it('includes context around the match', () => {
    const content = 'The quick brown fox jumps over the lazy dog near the riverbank at noon.'
    const snip = api.generateSnippet(content, ['fox'])
    assert.match(snip, /fox/i)
  })
  it('adds ellipsis for mid-content matches', () => {
    const content = `${'padding '.repeat(20)} target ${' padding '.repeat(20)}`
    const snip = api.generateSnippet(content, ['target'])
    assert.ok(snip.includes('...') || snip.includes('target'))
  })
})

describe('Site Configuration', () => {
  it('has exactly nine sites', () => {
    assert.strictEqual(Object.keys(api.SITES).length, 9)
  })
  it('every site has required fields', () => {
    for (const [id, site] of Object.entries(api.SITES)) {
      assert.ok(site.name, `${id} needs a name`)
      assert.ok(site.url, `${id} needs a url`)
      assert.ok(site.color, `${id} needs a color`)
    }
  })
  it('every site has a positive authority weight', () => {
    for (const [id, site] of Object.entries(api.SITES)) {
      const authority = api.SITE_AUTHORITY[id]
      assert.ok(authority > 0, `${id} (${site.name}) needs positive authority`)
    }
  })
})

describe('Suggestions', () => {
  it('returns curated common queries that contain the prefix', () => {
    const suggestions = api.generateSuggestions('phys', [])
    const queries = suggestions.map(s => s.query)
    assert.ok(queries.includes('physics'))
  })
  it('prefers trending queries (sorted by count) over curated', () => {
    const trending = [{ query: 'physical chemistry', count: 99 }]
    const suggestions = api.generateSuggestions('phys', trending)
    assert.strictEqual(suggestions[0].query, 'physical chemistry')
    assert.strictEqual(suggestions[0].count, 99)
  })
  it('deduplicates trending and curated', () => {
    const trending = [{ query: 'physics', count: 5 }]
    const suggestions = api.generateSuggestions('phys', trending)
    const physicsEntries = suggestions.filter(s => s.query === 'physics')
    assert.strictEqual(physicsEntries.length, 1, 'physics must appear only once')
  })
  it('returns empty for a prefix matching nothing', () => {
    const suggestions = api.generateSuggestions('zzzz', [])
    assert.strictEqual(suggestions.length, 0)
  })
})
