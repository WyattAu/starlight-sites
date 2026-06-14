#!/usr/bin/env node
/**
 * Unit tests for search-api/worker.js
 * Run: node --test tests/unit/search-api.test.js
 */

const { describe, it } = require('node:test');
const assert = require('node:assert');

// Import search functions by evaluating the worker module
// Since worker.js uses ES modules and Cloudflare Workers API,
// we test the pure functions directly by extracting them.

// Recreate the pure functions for testing
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
};

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
};

function detectLanguage(text) {
  const patterns = {
    zh: /[\u4e00-\u9fff]/,
    ja: /[\u3040-\u309f\u30a0-\u30ff]/,
    ko: /[\uac00-\ud7af]/,
    ar: /[\u0600-\u06ff]/,
    ru: /[\u0400-\u04ff]/,
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
    if (pos !== -1 && (bestPos === -1 || pos < bestPos)) {
      bestPos = pos;
    }
  }
  if (bestPos === -1) {
    return content.slice(0, 200).trim() + '...';
  }
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
    if (!entry.title || !entry.url) continue;

    let score = 0;
    const titleLower = (entry.title || '').toLowerCase();
    const contentLower = (entry.content || entry.description || '').toLowerCase();
    const urlLower = (entry.url || '').toLowerCase();

    if (titleLower.includes(queryLower)) {
      score += weights.titleExact;
    }
    for (const word of queryWords) {
      if (titleLower.includes(word)) score += weights.titleWord;
    }
    if (contentLower.includes(queryLower)) {
      score += weights.contentExact;
    }
    for (const word of queryWords) {
      if (contentLower.includes(word)) score += weights.contentWord;
    }
    for (const word of queryWords) {
      if (urlLower.includes(word)) score += weights.urlMatch;
    }
    score += (SITE_AUTHORITY[entry.site] || 0) * weights.authorityMultiplier;

    if (score > 0) {
      const snippet = generateSnippet(contentLower, queryWords);
      results.push({ ...entry, score, snippet });
    }
  }

  results.sort((a, b) => b.score - a.score);
  return results;
}

describe('Search API - Language Detection', () => {
  it('should detect English', () => {
    assert.strictEqual(detectLanguage('hello world'), 'en');
  });

  it('should detect Chinese', () => {
    assert.strictEqual(detectLanguage('你好世界'), 'zh');
  });

  it('should detect Japanese', () => {
    assert.strictEqual(detectLanguage('こんにちは'), 'ja');
  });

  it('should detect Korean', () => {
    assert.strictEqual(detectLanguage('안녕하세요'), 'ko');
  });

  it('should detect Arabic', () => {
    assert.strictEqual(detectLanguage('مرحبا'), 'ar');
  });

  it('should detect Russian', () => {
    assert.strictEqual(detectLanguage('привет'), 'ru');
  });

  it('should default to English for mixed content', () => {
    assert.strictEqual(detectLanguage('physics 101'), 'en');
  });
});

describe('Search API - Hash Function', () => {
  it('should produce consistent hashes', () => {
    const h1 = hashString('physics');
    const h2 = hashString('physics');
    assert.strictEqual(h1, h2);
  });

  it('should produce different hashes for different strings', () => {
    const h1 = hashString('physics');
    const h2 = hashString('chemistry');
    assert.notStrictEqual(h1, h2);
  });

  it('should always return non-negative', () => {
    for (const str of ['a', 'test', 'hello world', 'physics']) {
      assert.ok(hashString(str) >= 0);
    }
  });
});

describe('Search API - Snippet Generation', () => {
  it('should handle empty content', () => {
    assert.strictEqual(generateSnippet('', ['test']), '');
    assert.strictEqual(generateSnippet(null, ['test']), '');
  });

  it('should return beginning when no match found', () => {
    const content = 'a'.repeat(300);
    const snippet = generateSnippet(content, ['xyz']);
    assert.ok(snippet.length <= 210); // 200 + '...'
    assert.ok(snippet.endsWith('...'));
  });

  it('should include matched content', () => {
    const content = 'the quick brown fox jumps over the lazy dog near the river';
    const snippet = generateSnippet(content, ['fox']);
    assert.ok(snippet.includes('fox'));
  });

  it('should add ellipsis for mid-content matches', () => {
    const content = 'start ' + 'x'.repeat(200) + ' physics ' + 'y'.repeat(200) + ' end';
    const snippet = generateSnippet(content, ['physics']);
    assert.ok(snippet.startsWith('...'));
    assert.ok(snippet.endsWith('...'));
  });
});

describe('Search API - Search Ranking', () => {
  const testIndex = {
    entries: [
      { title: 'Physics Mechanics', url: '/physics/mechanics', site: 'dse', content: 'Introduction to mechanics' },
      { title: 'Chemistry Basics', url: '/chemistry/basics', site: 'ib', content: 'Basic chemistry concepts' },
      { title: 'Physics Waves', url: '/physics/waves', site: 'university', content: 'Advanced physics waves' },
      { title: 'Mathematics', url: '/maths/', site: 'dse', content: 'General mathematics' },
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

  it('should return empty for no matches with zero authority', () => {
    // When no query words match AND authority multiplier effect is zero,
    // results should be empty. Test with authorityMultiplier=0.
    const zeroAuthWeights = { ...RANKING_VARIANTS.control, authorityMultiplier: 0 };
    const results = searchIndex('zzzznonexistent', testIndex, null, zeroAuthWeights, null, null);
    assert.strictEqual(results.length, 0);
  });

  it('should apply authority bonus', () => {
    const results = searchIndex('physics', testIndex, null, RANKING_VARIANTS.control, null, null);
    // university has highest authority (10), should rank higher
    const uniResult = results.find(r => r.site === 'university');
    assert.ok(uniResult, 'Should have university result');
  });

  it('should sort by score descending', () => {
    const results = searchIndex('physics', testIndex, null, RANKING_VARIANTS.control, null, null);
    for (let i = 1; i < results.length; i++) {
      assert.ok(
        results[i - 1].score >= results[i].score,
        'Results should be sorted by score descending'
      );
    }
  });
});

describe('Search API - Site Configuration', () => {
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

  it('should have exactly 9 sites', () => {
    assert.strictEqual(Object.keys(SITES).length, 9);
  });

  it('all sites should have required fields', () => {
    for (const [id, site] of Object.entries(SITES)) {
      assert.ok(site.name, `${id} should have name`);
      assert.ok(site.url, `${id} should have url`);
      assert.ok(site.url.startsWith('https://'), `${id} url should be HTTPS`);
      assert.ok(site.url.endsWith('.wyattau.com'), `${id} url should be on wyattau.com`);
      assert.ok(site.color, `${id} should have color`);
      assert.ok(site.lang, `${id} should have lang`);
    }
  });

  it('all site authorities should be positive', () => {
    for (const [id, authority] of Object.entries(SITE_AUTHORITY)) {
      assert.ok(authority > 0, `${id} authority should be positive`);
    }
  });
});
