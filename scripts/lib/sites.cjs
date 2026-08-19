#!/usr/bin/env node
/**
 * Single source of truth for the site enumeration.
 *
 * The authoritative list of sites is the sites/ directory itself: any
 * directory with an astro.config.mjs (plus the 'main' landing page) is a
 * site. Hand-maintained copies of this list previously drifted across four
 * test/config locations and three workflows (see ADR-011); every consumer
 * must now derive the list from here.
 *
 * Metadata (display name, color, ranking authority) lives in sites.meta.json
 * at the repo root and is cross-validated against the directory listing on
 * every load -- a missing or extra key throws immediately rather than
 * drifting silently.
 *
 * This module is CommonJS so it is require()-able from the node:test suites
 * and import()-able from ESM (scripts/sync-shared.mjs, search-api).
 *
 * Run-time note: this module uses node:fs and must NOT be imported by the
 * Cloudflare Worker bundle; the worker reads sites.meta.json directly.
 */

const fs = require('node:fs')
const path = require('node:path')

const ROOT = path.join(__dirname, '..', '..')
const SITES_DIR = path.join(ROOT, 'sites')
const LANDING = 'main'

const META = JSON.parse(fs.readFileSync(path.join(ROOT, 'sites.meta.json'), 'utf8'))
const DEFAULTS = META.defaults

/** @returns {string[]} directory names under sites/ that look like sites */
function siteDirs() {
  return fs
    .readdirSync(SITES_DIR, { withFileTypes: true })
    .filter(
      e =>
        e.isDirectory() &&
        e.name !== LANDING &&
        e.name !== 'node_modules' &&
        fs.existsSync(path.join(SITES_DIR, e.name, 'astro.config.mjs')),
    )
    .map(e => e.name)
    .sort()
}

/**
 * All Astro/Starlight sites (excludes the 'main' landing page).
 * @returns {string[]}
 */
function astroSites() {
  return siteDirs()
}

/**
 * All sites including the landing page.
 * @returns {string[]}
 */
function allSites() {
  return [...astroSites(), LANDING]
}

/**
 * Metadata for every Astro site, keyed by slug, validated against the
 * directory listing. Throws on drift in either direction.
 * @returns {Record<string, {name: string, color: string, authority: number, url: string, project: string}>}
 */
function siteMeta() {
  const dirs = siteDirs()
  const metaKeys = Object.keys(META.sites).sort()

  const missing = dirs.filter(d => !metaKeys.includes(d))
  const extra = metaKeys.filter(k => !dirs.includes(k))
  if (missing.length > 0 || extra.length > 0) {
    const parts = []
    if (missing.length > 0) parts.push(`sites.meta.json is missing: ${missing.join(', ')}`)
    if (extra.length > 0) parts.push(`sites.meta.json has non-existent sites: ${extra.join(', ')}`)
    throw new Error(`site metadata drift -- ${parts.join('; ')} (edit sites.meta.json)`)
  }

  const out = {}
  for (const slug of dirs) {
    const m = META.sites[slug]
    out[slug] = {
      name: m.name,
      color: m.color,
      authority: m.authority,
      url: siteUrl(slug),
      project: siteProject(slug),
    }
  }
  return out
}

/** Production URL for an Astro site slug. */
function siteUrl(slug) {
  return `https://${slug}${DEFAULTS.domainSuffix}`
}

/** Cloudflare Pages project name for an Astro site slug. */
function siteProject(slug) {
  return `${DEFAULTS.projectPrefix}${slug}`
}

/**
 * Preview-deploy subset (policy, not enumeration): one representative site
 * per structural variant. Membership is validated against the real site
 * list so a removed site can never silently break preview.yml again.
 * @returns {string[]}
 */
function previewSites() {
  const subset = [
    'dse', // content-heavy exam site (original variant)
    'ib', // mermaid diagrams enabled
    'python', // programming-language site (Kobalte islands)
    'sat', // test-prep generator family
    'machine-learning', // WASM widgets
    'tools', // KaTeX-heavy probabilisticml content
  ]
  const dirs = new Set(siteDirs())
  const ghosts = subset.filter(s => !dirs.has(s))
  if (ghosts.length > 0) {
    throw new Error(`preview subset references non-existent sites: ${ghosts.join(', ')}`)
  }
  return subset
}

/**
 * Canary subset for staged production deploys (ADR-014): the smallest pair
 * covering distinct structural variants. The canary wave deploys first and
 * is smoke-verified before the remaining sites roll out, halving the blast
 * radius of a bad build (ECN staged-release discipline).
 * @returns {string[]}
 */
function canarySites() {
  const subset = [
    'dse', // largest content site -- exercises the heaviest build
    'tools', // KaTeX/mermaid remark pipeline variant
  ]
  const dirs = new Set(siteDirs())
  const ghosts = subset.filter((s) => !dirs.has(s))
  if (ghosts.length > 0) {
    throw new Error(`canary subset references non-existent sites: ${ghosts.join(', ')}`)
  }
  return subset
}

/**
 * The complement of the canary subset (all Astro sites minus canaries).
 * @returns {string[]}
 */
function rolloutSites() {
  const canary = new Set(canarySites())
  return astroSites().filter((s) => !canary.has(s))
}

module.exports = {
  LANDING,
  astroSites,
  allSites,
  siteMeta,
  siteUrl,
  siteProject,
  previewSites,
  canarySites,
  rolloutSites,
}
