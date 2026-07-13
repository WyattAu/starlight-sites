#!/usr/bin/env node

/**
 * sync-shared.mjs -- Single-source-of-truth synchronizer.
 *
 * The monorepo deliberately duplicates shared assets into each site so that
 * every site builds standalone (see ADR-002, generate-site.mjs). This script
 * is the enforcement mechanism: it propagates the canonical copies to every
 * site and reports drift. Paired with the integrity test
 * (tests/unit/shared-sync.test.js) it makes drift impossible to merge.
 *
 * Canonical sources:
 *   shared/components/  -> sites/<site>/src/components/   (9 Astro sites)
 *   shared/utils/       -> sites/<site>/src/utils/        (9 Astro sites)
 *   shared/styles/      -> sites/<site>/src/styles/       (9 Astro sites)
 *   search-api/page-search.js       -> sites/<site>/public/page-search.js
 *   search-api/cross-site-search.js -> sites/<site>/public/cross-site-search.js
 *
 * Sites receiving component/style copies: the 9 Astro sites (excludes main,
 * which is a static HTML landing page and has no src/components).
 * Sites receiving public/ scripts: all 10 (9 Astro sites + main).
 *
 * Usage:
 *   node scripts/sync-shared.mjs            # sync everything
 *   node scripts/sync-shared.mjs --check    # exit 1 if drift detected (CI mode)
 *   node scripts/sync-shared.mjs --dry-run  # report what would change
 */

import { createHash } from 'node:crypto'
import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join, relative, sep } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')

const ASTRO_SITES = [
  'admissions',
  'alevel',
  'ap',
  'cbse',
  'chemistry',
  'computer-science',
  'computing',
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

// (sourceDir, destSubpath) pairs that are recursively synced for the 9 Astro sites.
const SHARED_DIRS = [
  ['shared/components', 'src/components'],
  ['shared/utils', 'src/utils'],
  ['shared/styles', 'src/styles'],
  ['shared/fonts', 'public/fonts'],
  ['shared/i18n', 'src/i18n'],
]

// (sourceFile, destFile) pairs of public/ client scripts synced to ALL sites.
const PUBLIC_FILES = [
  ['search-api/page-search.js', 'public/page-search.js'],
  ['search-api/cross-site-search.js', 'public/cross-site-search.js'],
  ['search-api/sw.js', 'public/sw.js'],
  ['shared/scripts/reader.js', 'public/reader.js'],
  ['shared/public/wasm/starlight_widgets.js', 'public/wasm/starlight_widgets.js'],
  ['shared/public/wasm/starlight_widgets_bg.wasm', 'public/wasm/starlight_widgets_bg.wasm'],
]

const args = new Set(process.argv.slice(2))
const CHECK_ONLY = args.has('--check')
const DRY_RUN = args.has('--dry-run')

function sha256(buf) {
  return createHash('sha256').update(buf).digest('hex')
}

function walkFiles(dir) {
  const out = []
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) out.push(...walkFiles(full))
    else if (entry.isFile()) out.push(full)
  }
  return out
}

/** Sync one directory tree from srcDir to destDir (mirror semantics). */
function syncDir(srcDir, destDir, report) {
  if (!existsSync(srcDir)) return
  mkdirSync(destDir, { recursive: true })

  const srcFiles = walkFiles(srcDir).map(f => relative(srcDir, f).split(sep).join('/'))
  const destFiles = existsSync(destDir)
    ? walkFiles(destDir).map(f => relative(destDir, f).split(sep).join('/'))
    : []

  // Copy/overwrite changed files.
  for (const rel of srcFiles) {
    const s = join(srcDir, rel)
    const d = join(destDir, rel)
    const srcBytes = readFileSync(s)
    const destBytes = existsSync(d) ? readFileSync(d) : null
    if (!destBytes || sha256(srcBytes) !== sha256(destBytes)) {
      report.changed.push(relative(ROOT, d))
      if (!DRY_RUN && !CHECK_ONLY) {
        mkdirSync(dirname(d), { recursive: true })
        writeFileSync(d, srcBytes)
      }
    }
  }

  // Remove files in dest that no longer exist in src (mirror).
  for (const rel of destFiles) {
    if (!srcFiles.includes(rel)) {
      const d = join(destDir, rel)
      report.removed.push(relative(ROOT, d))
      if (!DRY_RUN && !CHECK_ONLY) {
        rmSync(d, { force: true })
      }
    }
  }
}

function syncFile(srcRel, destRel, report) {
  const s = join(ROOT, srcRel)
  const d = join(ROOT, destRel)
  if (!existsSync(s)) {
    report.missingSource.push(srcRel)
    return
  }
  const srcBytes = readFileSync(s)
  const destBytes = existsSync(d) ? readFileSync(d) : null
  if (!destBytes || sha256(srcBytes) !== sha256(destBytes)) {
    report.changed.push(relative(ROOT, d))
    if (!DRY_RUN && !CHECK_ONLY) {
      mkdirSync(dirname(d), { recursive: true })
      writeFileSync(d, srcBytes)
    }
  }
}

function main() {
  const report = { changed: [], removed: [], missingSource: [] }

  // Shared dirs -> 9 Astro sites.
  for (const site of ASTRO_SITES) {
    for (const [srcRel, destRel] of SHARED_DIRS) {
      syncDir(join(ROOT, srcRel), join(ROOT, 'sites', site, destRel), report)
    }
  }

  // Shared fonts -> landing page (main has no src/components but needs public/fonts).
  syncDir(join(ROOT, 'shared/fonts'), join(ROOT, 'sites', 'main', 'public', 'fonts'), report)

  // Public client scripts -> all sites.
  for (const site of ALL_SITES) {
    for (const [srcRel, destRel] of PUBLIC_FILES) {
      syncFile(srcRel, join('sites', site, destRel), report)
    }
  }

  // Output report.
  if (report.changed.length) {
    for (const _f of report.changed) {
      console.log(`  changed: ${_f}`)
    }
  }
  if (report.removed.length) {
    for (const _f of report.removed) {
      console.log(`  removed: ${_f}`)
    }
  }
  if (report.missingSource.length) {
    for (const _f of report.missingSource) {
      console.log(`  missing source: ${_f}`)
    }
  }

  const totalChanges = report.changed.length + report.removed.length
  if (totalChanges === 0 && report.missingSource.length === 0) {
    return 0
  }

  const _verb = DRY_RUN || CHECK_ONLY ? 'drift detected' : 'synchronized'

  return CHECK_ONLY ? 1 : 0
}

process.exit(main())
