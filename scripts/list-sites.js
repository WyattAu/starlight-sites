#!/usr/bin/env node
/**
 * CLI wrapper around scripts/lib/sites.cjs for GitHub Actions workflows.
 *
 * Workflows cannot readdir() in YAML; they call this script in a resolve job
 * and feed the JSON output into a dynamic matrix (see ci.yml, deploy.yml,
 * preview.yml). This keeps the workflow matrices derived from sites/ rather
 * than hand-copied (ADR-011).
 *
 * Usage:
 *   node scripts/list-sites.js --slugs          ["a","b",...]  (Astro sites)
 *   node scripts/list-sites.js --all            ["a","b",...,"main"]
 *   node scripts/list-sites.js --ci-matrix      [{"site","project","url"},...]
 *   node scripts/list-sites.js --preview-matrix [{"site","project"},...]
 *   node scripts/list-sites.js --urls           ["https://a...",...]
 */

const {
  astroSites,
  allSites,
  siteMeta,
  previewSites,
  canarySites,
  rolloutSites,
  siteUrl,
} = require('./lib/sites.cjs')

const arg = process.argv[2]

switch (arg) {
  case '--slugs':
    console.log(JSON.stringify(astroSites()))
    break
  case '--changed-from-file': {
    // Reads a newline-separated list of changed file paths (from
    // `git diff --name-only`) and reports which Astro sites are affected.
    // Any change OUTSIDE sites/<slug>/ (shared assets, scripts, workflows,
    // fixtures, root configs) forces every site -- those trees feed all of
    // them. Output: {"force": bool, "slugs": ["a","b",...]}
    const fs = require('node:fs')
    const file = process.argv[3]
    if (!file) {
      console.error('usage: list-sites.js --changed-from-file <path>')
      process.exit(1)
    }
    const paths = fs.readFileSync(file, 'utf8').split('\n').filter(Boolean)
    const forcePaths = paths.filter(p => !p.startsWith('sites/') || /^sites\/[^/]+\/$/.test(p))
    const slugs = new Set()
    for (const p of paths) {
      const m = p.match(/^sites\/([^/]+)\//)
      if (m && m[1] !== 'main' && astroSites().includes(m[1])) slugs.add(m[1])
    }
    if (forcePaths.length > 0) for (const s of astroSites()) slugs.add(s)
    console.log(JSON.stringify({ force: forcePaths.length > 0, slugs: [...slugs].sort() }))
    break
  }
  case '--all':
    console.log(JSON.stringify(allSites()))
    break
  case '--ci-matrix': {
    const meta = siteMeta()
    const include = Object.entries(meta).map(([site, m]) => ({
      site,
      project: m.project,
      url: m.url,
    }))
    console.log(JSON.stringify(include))
    break
  }
  case '--canary-matrix': {
    const meta = siteMeta()
    const include = canarySites().map(site => ({
      site,
      project: meta[site].project,
      url: meta[site].url,
    }))
    console.log(JSON.stringify(include))
    break
  }
  case '--rollout-matrix': {
    const meta = siteMeta()
    const include = rolloutSites().map(site => ({
      site,
      project: meta[site].project,
      url: meta[site].url,
    }))
    console.log(JSON.stringify(include))
    break
  }
  case '--preview-matrix': {
    const include = previewSites().map(site => ({
      site,
      project: `wyattsnotes-${site}`,
    }))
    console.log(JSON.stringify(include))
    break
  }
  case '--urls': {
    const urls = [...astroSites().map(siteUrl), 'https://wyattsnotes.wyattau.com']
    console.log(JSON.stringify(urls))
    break
  }
  default:
    console.error(
      'usage: list-sites.js --slugs | --all | --ci-matrix | --canary-matrix | --rollout-matrix | --preview-matrix | --urls',
    )
    process.exit(2)
}
