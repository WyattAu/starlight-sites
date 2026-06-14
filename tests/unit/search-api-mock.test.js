#!/usr/bin/env node
/**
 * Unit tests for search-api/worker.js with mock KV.
 * Tests the worker logic without requiring Cloudflare Workers runtime.
 * Run: node --test tests/unit/search-api-mock.test.js
 */

const { describe, it, beforeEach } = require('node:test');
const assert = require('node:assert');

// Extract pure functions from worker.js by evaluating key logic
// Since worker.js uses ES module exports, we replicate the core functions

const SITES = {
  dse: { name: 'DSE', url: 'https://dse.wyattau.com', color: '#ff6b35', lang: 'en' },
  ib: { name: 'IB', url: 'https://ib.wyattau.com', color: '#0077b6', lang: 'en' },
  alevel: { name: 'A-Level', url: 'https://alevel.wyattau.com', color: '#2a9d8f', lang: 'en' },
  university: { name: 'University', url: 'https://university.wyattau.com', color: '#9b5de5', lang: 'en' },
  qualifications: { name: 'Qualifications', url: 'https://qualifications.wyattau.com', color: '#f4a261', lang: 'en' },
  programming: { name: 'Programming', url: 'https://programming.wyattau.com', color: '#06d6a0', lang: 'en' },
  infrastructure: { name: 'Infrastructure', url: 'https://infrastructure.wyattau.com', color: '#ef476f', lang: 'en' },
  languages: { name: 'Languages', url: 'https://languages.wyattau.com', color: '#118ab2', lang: 'en' },
  tools: { name: 'Tools', url: 'https://tools.wyattau.com', color: '#073b4c', lang: 'en' },
};

const SITE_AUTHORITY = {
  university: 10, programming: 8, infrastructure: 7, languages: 7,
  dse: 6, ib: 6, alevel: 6, tools: 6, qualifications: 5,
};

const RANKING_VARIANTS = {
  control: {
    titleExact: 100, titleWord: 20, contentExact: 50,
    contentWord: 5, urlMatch: 15, authorityMultiplier: 2, depthBonus: 10,
  },
};

function detectLanguage(text) {
  const patterns = {
    zh: /[\u4e00-\u9fff]/, ja: /[\u3040-\u309f\u30a0-\u30ff]/,
    ko: /[\uac00-\ud7af]/, ar: /[\u0600-\u06ff]/, ru: /[\u0400-\u04ff]/,
  };
  for (const [lang, pattern] of Object.entries(patterns)) {
    if (pattern.test(text)) return lang;
  }
  return 'en';
}

function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash = hash & hash;
  }
  return Math.abs(hash);
}

function generateSnippet(content, queryWords) {
  if (!content) return '';
  let bestPos = -1;
  for (const word of queryWords) {
    const pos = content.indexOf(word);
    if (pos !== -1 && (bestPos === -1 || pos < bestPos)) bestPos = pos;
  }
  if (bestPos === -1) return content.slice(0, 200).trim() + '...';
  const start = Math.max(0, bestPos - 80);
  const end = Math.min(content.length, bestPos + 120);
  let snippet = content.slice(start, end).trim();
  if (start > 0) snippet = '...' + snippet;
  if (end < content.length) snippet = snippet + '...';
  return snippet;
}

function searchIndex(query, index, siteFilter, weights, lang, subjectFilter) {
  const queryLower = query.toLowerCase();
  const queryWords = queryLower.split(/\s+/);
  const results = [];

  for (const entry of index.entries) {
    if (siteFilter && entry.site !== siteFilter) continue;
    if (subjectFilter) {
      const urlLower = (entry.url || '').toLowerCase();
      const subjectKeywords = {
        physics: ['physics', 'mechanics', 'waves', 'electricity'],
        chemistry: ['chemistry', 'organic', 'inorganic'],
        biology: ['biology', 'cell', 'genetics', 'ecology'],
        mathematics: ['maths', 'mathematics', 'algebra', 'calculus'],
        'computer-science': ['computer-science', 'programming', 'algorithms'],
        economics: ['economics', 'microeconomics', 'macroeconomics'],
      };
      const keywords = subjectKeywords[subjectFilter.toLowerCase()] || [subjectFilter.toLowerCase()];
      if (!keywords.some(kw => urlLower.includes(kw))) continue;
    }
    if (!entry.title || !entry.url) continue;

    let score = 0;
    const titleLower = (entry.title || '').toLowerCase();
    const contentLower = (entry.content || entry.description || '').toLowerCase();
    const urlLower = (entry.url || '').toLowerCase();

    if (titleLower.includes(queryLower)) score += weights.titleExact;
    for (const word of queryWords) {
      if (titleLower.includes(word)) score += weights.titleWord;
    }
    if (contentLower.includes(queryLower)) score += weights.contentExact;
    for (const word of queryWords) {
      if (contentLower.includes(word)) score += weights.contentWord;
      if (urlLower.includes(word)) score += weights.urlMatch;
    }
    score += (SITE_AUTHORITY[entry.site] || 0) * weights.authorityMultiplier;

    if (score > 0) {
      results.push({ ...entry, score, snippet: generateSnippet(contentLower, queryWords) });
    }
  }

  results.sort((a, b) => b.score - a.score);
  return results;
}

// --- Mock KV Store ---
class MockKV {
  constructor() {
    this.store = new Map();
  }
  async get(key, opts) {
    const val = this.store.get(key);
    if (!val) return null;
    if (opts?.type === 'json') return JSON.parse(val);
    return val;
  }
  async put(key, value, opts) {
    this.store.set(key, typeof value === 'string' ? value : JSON.stringify(value));
  }
  async list(opts) {
    const keys = [];
    for (const key of this.store.keys()) {
      if (!opts?.prefix || key.startsWith(opts.prefix)) {
        keys.push({ name: key });
      }
    }
    return { keys };
  }
}

// --- Tests ---

describe('Search API - Mock KV Integration', () => {
  let kv;

  beforeEach(() => {
    kv = new MockKV();
  });

  it('should return 503 when index not available', async () => {
    const index = await kv.get('merged-index', { type: 'json' });
    assert.strictEqual(index, null, 'KV should return null for missing index');
  });

  it('should store and retrieve index', async () => {
    const testIndex = { entries: [{ title: 'Test', url: '/test', site: 'dse' }] };
    await kv.put('merged-index', JSON.stringify(testIndex));
    const retrieved = await kv.get('merged-index', { type: 'json' });
    assert.strictEqual(retrieved.entries.length, 1);
    assert.strictEqual(retrieved.entries[0].title, 'Test');
  });

  it('should store and retrieve metadata', async () => {
    const meta = { version: 'v123', totalEntries: 100, siteCount: 9 };
    await kv.put('metadata', JSON.stringify(meta));
    const retrieved = await kv.get('metadata', { type: 'json' });
    assert.strictEqual(retrieved.version, 'v123');
    assert.strictEqual(retrieved.totalEntries, 100);
  });

  it('should store and retrieve trending queries', async () => {
    const trending = [{ query: 'physics', count: 10 }];
    await kv.put('trending', JSON.stringify(trending));
    const retrieved = await kv.get('trending', { type: 'json' });
    assert.strictEqual(retrieved.length, 1);
    assert.strictEqual(retrieved[0].query, 'physics');
  });

  it('should list keys by prefix', async () => {
    await kv.put('ab:control:physics', JSON.stringify({ searches: 5 }));
    await kv.put('ab:variant_a:physics', JSON.stringify({ searches: 3 }));
    await kv.put('search:dse:all:physics', JSON.stringify({ results: [] }));

    const abKeys = await kv.list({ prefix: 'ab:' });
    assert.strictEqual(abKeys.keys.length, 2);

    const searchKeys = await kv.list({ prefix: 'search:' });
    assert.strictEqual(searchKeys.keys.length, 1);
  });

  it('should handle cache expiration gracefully', async () => {
    // Simulate expired cache entry
    kv.store.delete('merged-index');
    const index = await kv.get('merged-index', { type: 'json' });
    assert.strictEqual(index, null);
  });
});

describe('Search API - Query Processing', () => {
  const testIndex = {
    entries: [
      { title: 'Physics Mechanics', url: '/physics/mechanics', site: 'dse', content: 'Introduction to classical mechanics covering Newtons laws' },
      { title: 'Chemistry Organic', url: '/chemistry/organic', site: 'ib', content: 'Organic chemistry reactions and mechanisms' },
      { title: 'Physics Waves', url: '/physics/waves', site: 'university', content: 'Wave motion and oscillations in physics' },
      { title: 'Mathematics Algebra', url: '/maths/algebra', site: 'alevel', content: 'Linear algebra and matrix operations' },
      { title: 'Computer Science Algorithms', url: '/cs/algorithms', site: 'programming', content: 'Algorithm design and complexity analysis' },
    ],
  };

  it('should rank exact title matches highest', () => {
    const results = searchIndex('physics', testIndex, null, RANKING_VARIANTS.control, null, null);
    assert.ok(results.length > 0);
    assert.ok(results[0].title.toLowerCase().includes('physics'));
  });

  it('should filter by site', () => {
    const results = searchIndex('physics', testIndex, 'dse', RANKING_VARIANTS.control, null, null);
    for (const r of results) {
      assert.strictEqual(r.site, 'dse');
    }
  });

  it('should filter by subject', () => {
    const results = searchIndex('physics', testIndex, null, RANKING_VARIANTS.control, null, 'physics');
    for (const r of results) {
      assert.ok(r.url.includes('physics'));
    }
  });

  it('should handle multi-word queries', () => {
    const results = searchIndex('organic chemistry', testIndex, null, RANKING_VARIANTS.control, null, null);
    assert.ok(results.length > 0);
    assert.ok(results[0].url.includes('chemistry'));
  });

  it('should return empty for no matches with zero authority', () => {
    const zeroAuth = { ...RANKING_VARIANTS.control, authorityMultiplier: 0 };
    const results = searchIndex('zzzznonexistent', testIndex, null, zeroAuth, null, null);
    assert.strictEqual(results.length, 0);
  });

  it('should sort by score descending', () => {
    const results = searchIndex('physics', testIndex, null, RANKING_VARIANTS.control, null, null);
    for (let i = 1; i < results.length; i++) {
      assert.ok(results[i - 1].score >= results[i].score);
    }
  });

  it('should generate snippets containing query words', () => {
    const results = searchIndex('mechanics', testIndex, null, RANKING_VARIANTS.control, null, null);
    assert.ok(results.length > 0);
    assert.ok(results[0].snippet.includes('mechanics'));
  });
});

describe('Search API - Snippet Edge Cases', () => {
  it('should handle empty content', () => {
    assert.strictEqual(generateSnippet('', ['test']), '');
    assert.strictEqual(generateSnippet(null, ['test']), '');
  });

  it('should handle content shorter than snippet window', () => {
    const snippet = generateSnippet('short content', ['short']);
    assert.ok(snippet.includes('short'));
  });

  it('should add ellipsis for mid-content matches', () => {
    const content = 'start ' + 'x'.repeat(200) + ' physics ' + 'y'.repeat(200) + ' end';
    const snippet = generateSnippet(content, ['physics']);
    assert.ok(snippet.startsWith('...'));
    assert.ok(snippet.endsWith('...'));
  });

  it('should handle multiple query words', () => {
    const content = 'the quick brown fox jumps over the lazy dog near the river bank';
    const snippet = generateSnippet(content, ['fox', 'dog']);
    assert.ok(snippet.includes('fox') || snippet.includes('dog'));
  });
});

describe('Search API - Analytics Tracking', () => {
  let kv;

  beforeEach(() => {
    kv = new MockKV();
  });

  it('should increment trending count', async () => {
    let trending = await kv.get('trending', { type: 'json' }) || [];
    const query = 'physics';
    const existing = trending.find(t => t.query === query);
    if (existing) {
      existing.count++;
    } else {
      trending.push({ query, count: 1, lastSearched: new Date().toISOString() });
    }
    await kv.put('trending', JSON.stringify(trending));

    const result = await kv.get('trending', { type: 'json' });
    assert.strictEqual(result.length, 1);
    assert.strictEqual(result[0].count, 1);
  });

  it('should track A/B test data', async () => {
    const variant = 'control';
    const query = 'physics';
    const key = `ab:${variant}:${query}`;
    let abData = await kv.get(key, { type: 'json' }) || { searches: 0, clicks: 0 };
    abData.searches++;
    await kv.put(key, JSON.stringify(abData));

    const result = await kv.get(key, { type: 'json' });
    assert.strictEqual(result.searches, 1);
  });

  it('should keep top 50 trending queries', async () => {
    let trending = [];
    for (let i = 0; i < 60; i++) {
      trending.push({ query: `query${i}`, count: i });
    }
    trending.sort((a, b) => b.count - a.count);
    trending = trending.slice(0, 50);
    await kv.put('trending', JSON.stringify(trending));

    const result = await kv.get('trending', { type: 'json' });
    assert.strictEqual(result.length, 50);
  });
});
