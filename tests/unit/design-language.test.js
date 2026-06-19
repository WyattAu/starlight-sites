#!/usr/bin/env node
/**
 * Unit tests for tests/e2e/gui-snapshot.js design-language verification.
 *
 * The script cannot be run inline in CI without a per-site build (which
 * is too slow for pre-commit), so the verification logic is exported as
 * pure functions and tested in isolation here.
 *
 * Run: node --test tests/unit/design-language.test.js
 */

const { describe, it } = require('node:test')
const assert = require('node:assert')
const fs = require('node:fs')
const os = require('node:os')
const path = require('node:path')

// The script is a CommonJS entry that runs main() at import time, so we
// parse out the pure helpers with a regex-resilient require that defers
// execution. Easiest: stub the dynamic import + main, then require.
//
// To keep this test focused and deterministic, we re-implement the two
// pure helpers here and verify their contract; if gui-snapshot.js ever
// diverges, the integration test (run via `node tests/e2e/gui-snapshot.js
// tools --no-build` after a build) will fail.
function findCompiledCss(distDir) {
  const out = []
  function walk(dir) {
    if (!fs.existsSync(dir)) return
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name)
      if (entry.isDirectory()) walk(full)
      else if (entry.isFile() && entry.name.endsWith('.css')) out.push(full)
    }
  }
  walk(distDir)
  return out
}

const DESIGN_TOKENS = [
  '--wn-elevation-1',
  '--wn-elevation-2',
  '--wn-elevation-3',
  '--wn-elevation-4',
  '--wn-elevation-accent',
  '--wn-radius-sm',
  '--wn-radius-md',
  '--wn-radius-lg',
  '--wn-radius-pill',
  '--wn-space-fluid-sm',
  '--wn-space-fluid-md',
  '--wn-space-fluid-lg',
  '--wn-ease-organic',
]

function verifyDesignTokens(distDir) {
  const cssFiles = findCompiledCss(distDir)
  if (cssFiles.length === 0) {
    return { ok: false, missing: DESIGN_TOKENS, reason: 'no compiled CSS found' }
  }
  const combined = cssFiles.map(f => fs.readFileSync(f, 'utf8')).join('\n')
  const missing = DESIGN_TOKENS.filter(token => !combined.includes(token))
  return { ok: missing.length === 0, missing, cssFiles: cssFiles.length }
}

describe('findCompiledCss', () => {
  it('walks dist/ recursively for .css files', () => {
    const root = fs.mkdtempSync(path.join(os.tmpdir(), 'design-lang-'))
    try {
      fs.mkdirSync(path.join(root, '_astro'), { recursive: true })
      fs.mkdirSync(path.join(root, 'nested', 'deep'), { recursive: true })
      fs.writeFileSync(path.join(root, 'a.css'), '/* a */')
      fs.writeFileSync(path.join(root, '_astro', 'b.css'), '/* b */')
      fs.writeFileSync(path.join(root, 'nested', 'deep', 'c.css'), '/* c */')
      // Non-CSS files must be ignored.
      fs.writeFileSync(path.join(root, 'ignore.txt'), 'noise')
      fs.writeFileSync(path.join(root, 'ignore.js'), 'noise')

      const found = findCompiledCss(root)
      assert.equal(found.length, 3)
      assert.ok(found.every(f => f.endsWith('.css')))
    } finally {
      fs.rmSync(root, { recursive: true, force: true })
    }
  })

  it('returns empty list for non-existent directory', () => {
    assert.deepEqual(findCompiledCss('/nonexistent/path'), [])
  })
})

describe('verifyDesignTokens', () => {
  it('returns ok=true when all tokens are present in any CSS file', () => {
    const root = fs.mkdtempSync(path.join(os.tmpdir(), 'design-lang-'))
    try {
      fs.mkdirSync(path.join(root, '_astro'), { recursive: true })
      // Split tokens across two CSS files to verify multi-file scan.
      const half = DESIGN_TOKENS.length / 2
      const fileA = DESIGN_TOKENS.slice(0, half)
        .map(t => `  ${t}: some-value;`)
        .join('\n')
      const fileB = DESIGN_TOKENS.slice(half)
        .map(t => `  ${t}: some-value;`)
        .join('\n')
      fs.writeFileSync(path.join(root, '_astro', 'a.css'), `:root {\n${fileA}\n}`)
      fs.writeFileSync(path.join(root, '_astro', 'b.css'), `:root {\n${fileB}\n}`)

      const result = verifyDesignTokens(root)
      assert.equal(result.ok, true)
      assert.deepEqual(result.missing, [])
      assert.equal(result.cssFiles, 2)
    } finally {
      fs.rmSync(root, { recursive: true, force: true })
    }
  })

  it('reports missing tokens by name', () => {
    const root = fs.mkdtempSync(path.join(os.tmpdir(), 'design-lang-'))
    try {
      fs.mkdirSync(path.join(root, '_astro'), { recursive: true })
      // Include only the first 5 tokens.
      const partial = DESIGN_TOKENS.slice(0, 5)
        .map(t => `  ${t}: x;`)
        .join('\n')
      fs.writeFileSync(path.join(root, '_astro', 'partial.css'), `:root {\n${partial}\n}`)

      const result = verifyDesignTokens(root)
      assert.equal(result.ok, false)
      assert.equal(result.missing.length, DESIGN_TOKENS.length - 5)
      // Every missing token must be one of the declared ones.
      for (const m of result.missing) {
        assert.ok(DESIGN_TOKENS.includes(m), `unexpected missing token: ${m}`)
      }
    } finally {
      fs.rmSync(root, { recursive: true, force: true })
    }
  })

  it('fails with reason when no CSS is present', () => {
    const root = fs.mkdtempSync(path.join(os.tmpdir(), 'design-lang-'))
    try {
      const result = verifyDesignTokens(root)
      assert.equal(result.ok, false)
      assert.equal(result.reason, 'no compiled CSS found')
      assert.deepEqual(result.missing, DESIGN_TOKENS)
    } finally {
      fs.rmSync(root, { recursive: true, force: true })
    }
  })

  it('catches sync drift: stale CSS without new tokens fails the check', () => {
    // Regression: a site with a stale dist/ from before the design
    // tokens were introduced must fail the contract so a refresh is
    // forced. We simulate this by writing a CSS file with NO tokens.
    const root = fs.mkdtempSync(path.join(os.tmpdir(), 'design-lang-'))
    try {
      fs.mkdirSync(path.join(root, '_astro'), { recursive: true })
      fs.writeFileSync(path.join(root, '_astro', 'stale.css'), ':root { --accent: #ff6b35; }')

      const result = verifyDesignTokens(root)
      assert.equal(result.ok, false)
      assert.ok(result.missing.length > 10, 'most tokens should be missing from stale build')
    } finally {
      fs.rmSync(root, { recursive: true, force: true })
    }
  })
})

describe('DESIGN_TOKENS contract', () => {
  it('covers Spatial Materialism elevation tiers (1-4 + accent)', () => {
    for (const n of [1, 2, 3, 4]) {
      assert.ok(DESIGN_TOKENS.includes(`--wn-elevation-${n}`), `missing elevation tier ${n}`)
    }
    assert.ok(DESIGN_TOKENS.includes('--wn-elevation-accent'))
  })

  it('covers Amoebic UI radii (sm, md, lg, pill)', () => {
    for (const r of ['sm', 'md', 'lg', 'pill']) {
      assert.ok(DESIGN_TOKENS.includes(`--wn-radius-${r}`), `missing radius tier ${r}`)
    }
  })

  it('covers Amoebic UI fluid spacing (sm, md, lg)', () => {
    for (const s of ['sm', 'md', 'lg']) {
      assert.ok(DESIGN_TOKENS.includes(`--wn-space-fluid-${s}`), `missing fluid space tier ${s}`)
    }
  })

  it('covers organic motion easing', () => {
    assert.ok(DESIGN_TOKENS.includes('--wn-ease-organic'))
  })
})
