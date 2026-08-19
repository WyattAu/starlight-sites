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
    const include = canarySites().map((site) => ({
      site,
      project: meta[site].project,
      url: meta[site].url,
    }))
    console.log(JSON.stringify(include))
    break
  }
  case '--rollout-matrix': {
    const meta = siteMeta()
    const include = rolloutSites().map((site) => ({
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
    console.error('usage: list-sites.js --slugs | --all | --ci-matrix | --canary-matrix | --rollout-matrix | --preview-matrix | --urls')
    process.exit(2)
}
