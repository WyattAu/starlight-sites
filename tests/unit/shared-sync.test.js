#!/usr/bin/env node
/**
 * Shared-asset integrity tests.
 *
 * Guarantees the SOP defined by scripts/sync-shared.mjs: every site's copy of
 * shared components, utils, styles, and the public client scripts must be
 * byte-for-byte identical to the canonical shared/ (or search-api/) source.
 * Drift is therefore impossible to merge without an explicit sync.
 *
 * Run: node --test tests/unit/shared-sync.test.js
 */

const { describe, it } = require('node:test')
const assert = require('node:assert')
const { execFileSync } = require('node:child_process')
const fs = require('node:fs')
const path = require('node:path')
const crypto = require('node:crypto')

const ROOT = path.join(__dirname, '..', '..')

const EXPECTED_SITES = [
  'alevel',
  'admissions',
  'alevel',
  'ap',
  'cbse',
  'chemistry',
  'computer-science',
  'cpp',
  'dart',
  'databases',
  'dse',
  'elixir',
  'gaokao',
  'gcse',
  'go',
  'haskell',
  'highers',
  'hsc',
  'ib',
  'java',
  'kotlin',
  'languages',
  'leaving-cert',
  'licensing',
  'linux',
  'machine-learning',
  'mathematics',
  'networking',
  'physics',
  'programming',
  'python',
  'ruby',
  'rust',
  'sat',
  'security',
  'swift',
  'tools',
  'truenas',
  'tuning',
  'typescript',
]

const ASTRO_SITES = [
  'admissions',
  'alevel',
  'ap',
  'cbse',
  'chemistry',
  'computer-science',
  'cpp',
  'dart',
  'databases',
  'dse',
  'elixir',
  'gaokao',
  'gcse',
  'go',
  'haskell',
  'highers',
  'hsc',
  'ib',
  'java',
  'kotlin',
  'languages',
  'leaving-cert',
  'licensing',
  'linux',
  'machine-learning',
  'mathematics',
  'networking',
  'physics',
  'programming',
  'python',
  'ruby',
  'rust',
  'sat',
  'security',
  'swift',
  'tools',
  'truenas',
  'tuning',
  'typescript',
]
const ALL_SITES = [...ASTRO_SITES, 'main']

function sha256(filePath) {
  return crypto.createHash('sha256').update(fs.readFileSync(filePath)).digest('hex')
}

describe('sync-shared tool', () => {
  it('reports zero drift when invoked with --check', () => {
    // The repo must already be in sync; --check exits non-zero on drift.
    assert.doesNotThrow(() => {
      execFileSync('node', [path.join(ROOT, 'scripts', 'sync-shared.mjs'), '--check'], {
        cwd: ROOT,
        stdio: 'pipe',
      })
    }, 'sync-shared --check must pass; run "bun run sync" if this fails')
  })
})

describe('Canonical source integrity', () => {
  it('shared/components, shared/utils, shared/styles are mirrored to all Astro sites', () => {
    const trees = [
      { src: 'shared/components', dest: 'src/components' },
      { src: 'shared/utils', dest: 'src/utils' },
      { src: 'shared/styles', dest: 'src/styles' },
    ]
    for (const { src, dest } of trees) {
      const canonicalFiles = listFiles(path.join(ROOT, src))
      assert.ok(canonicalFiles.length > 0, `${src} must contain canonical files`)
      for (const site of ASTRO_SITES) {
        const siteFiles = listFiles(path.join(ROOT, 'sites', site, dest))
        assert.deepStrictEqual(
          siteFiles.sort(),
          canonicalFiles.sort(),
          `sites/${site}/${dest} file set must match ${src}`,
        )
        for (const rel of canonicalFiles) {
          const a = sha256(path.join(ROOT, src, rel))
          const b = sha256(path.join(ROOT, 'sites', site, dest, rel))
          assert.strictEqual(a, b, `sites/${site}/${dest}/${rel} must match ${src}/${rel}`)
        }
      }
    }
  })

  it('page-search.js is mirrored to every site from search-api canonical', () => {
    const canonical = sha256(path.join(ROOT, 'search-api', 'page-search.js'))
    for (const site of ALL_SITES) {
      const siteCopy = path.join(ROOT, 'sites', site, 'public', 'page-search.js')
      assert.ok(fs.existsSync(siteCopy), `sites/${site}/public/page-search.js must exist`)
      assert.strictEqual(sha256(siteCopy), canonical, `sites/${site}/public/page-search.js drifted`)
    }
  })

  it('cross-site-search.js is mirrored to every site from search-api canonical', () => {
    const canonical = sha256(path.join(ROOT, 'search-api', 'cross-site-search.js'))
    for (const site of ALL_SITES) {
      const siteCopy = path.join(ROOT, 'sites', site, 'public', 'cross-site-search.js')
      assert.ok(fs.existsSync(siteCopy), `sites/${site}/public/cross-site-search.js must exist`)
      assert.strictEqual(
        sha256(siteCopy),
        canonical,
        `sites/${site}/public/cross-site-search.js drifted`,
      )
    }
  })
})

describe('Dead-code absence', () => {
  it('BookmarkManager.tsx is fully removed (dead component, zero usages)', () => {
    for (const site of ASTRO_SITES) {
      const p = path.join(ROOT, 'sites', site, 'src', 'components', 'BookmarkManager.tsx')
      assert.ok(!fs.existsSync(p), `BookmarkManager.tsx must be removed from sites/${site}`)
    }
    assert.ok(
      !fs.existsSync(path.join(ROOT, 'shared', 'components', 'BookmarkManager.tsx')),
      'shared/components/BookmarkManager.tsx must be removed',
    )
  })

  it('shared/config.js is removed (dead React-based factory, zero importers)', () => {
    assert.ok(
      !fs.existsSync(path.join(ROOT, 'shared', 'config.js')),
      'shared/config.js must be removed',
    )
  })

  it('redundant pnpm-workspace.yaml is removed (only bun.lock is authoritative)', () => {
    assert.ok(
      !fs.existsSync(path.join(ROOT, 'pnpm-workspace.yaml')),
      'pnpm-workspace.yaml must be removed',
    )
  })

  it('stale infrastructure package-lock.json is removed', () => {
    assert.ok(
      !fs.existsSync(path.join(ROOT, 'sites', 'infrastructure', 'package-lock.json')),
      'stale sites/infrastructure/package-lock.json must be removed',
    )
  })

  it('account-api/ is removed (reverted feature, see commit 254901ae)', () => {
    assert.ok(
      !fs.existsSync(path.join(ROOT, 'account-api')),
      'account-api/ was reverted (commit 254901ae) and must not be reintroduced',
    )
  })

  it('shared/public/sw.js is removed (unreferenced service worker)', () => {
    assert.ok(
      !fs.existsSync(path.join(ROOT, 'shared', 'public', 'sw.js')),
      'shared/public/sw.js has no registrant and must remain removed',
    )
  })

  it('all sites have a canonical sw.js (service worker for PWA/offline)', () => {
    // sw.js is now an intentional feature — registered in Head.astro
    // for offline reading support. All sites must have it and it must
    // match the canonical search-api/sw.js source.
    const canonical = fs.readFileSync(
      path.join(ROOT, 'search-api', 'sw.js'),
      'utf8',
    )
    for (const site of EXPECTED_SITES) {
      const sitePath = path.join(ROOT, 'sites', site, 'public', 'sw.js')
      assert.ok(
        fs.existsSync(sitePath),
        `sites/${site}/public/sw.js must exist`,
      )
      const siteContent = fs.readFileSync(sitePath, 'utf8')
      assert.strictEqual(
        siteContent,
        canonical,
        `sites/${site}/public/sw.js must match canonical search-api/sw.js`,
      )
    }
  })
})

function listFiles(dir) {
  if (!fs.existsSync(dir)) return []
  const out = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      for (const f of listFiles(full)) out.push(`${entry.name}/${f}`)
    } else if (entry.isFile()) {
      out.push(entry.name)
    }
  }
  return out
}
