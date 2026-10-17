#!/usr/bin/env node
/**
 * lint-cross-site-links.js -- validate absolute cross-zone links against the
 * local content tree.
 *
 * lint-link-graph.js checks internal `/path/` links against the current
 * site's collections. It cannot check an absolute URL on another zone:
 * there is nothing local to resolve them against, so those links were simply
 * never validated. Three dead ones shipped on a single physics page before
 * this existed.
 *
 * The check does not need the network. All 46 sites live in this repository,
 * and every one of them declares its own domain in astro.config.mjs, so the
 * target site's routes can be enumerated from its content tree and the link
 * resolved locally. That matters here: probing every zone over HTTP is what
 * previously hit Cloudflare error 1027 on the free tier, and a gate must not
 * be capable of taking the network down.
 *
 * Route derivation follows Starlight defaults. Every site in this repo uses
 * them -- no site sets srcDir, docsDir, routeBase or a base path -- and the
 * script asserts that rather than assuming it, so a site that later deviates
 * is skipped loudly instead of generating false failures.
 */

const fs = require('node:fs')
const path = require('node:path')

const ROOT = path.join(__dirname, '..')
const SITES_DIR = path.join(ROOT, 'sites')
const ADVISORY = process.argv.includes('--advisory')

/** Absolute link to a wyattau.com zone, capturing host and path. */
const LINK = /\]\(\s*(https?:\/\/([a-z0-9-]+)\.wyattau\.com)(\/[^)\s#]*)?/g

/** Internal-style link, i.e. one written relative to the current site. */
const INTERNAL = /\]\(\s*(\/[^)\s#]*)\s*\)/g

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(full, out)
    else out.push(full)
  }
  return out
}

/** Read `site:` out of an astro config without evaluating it. */
function domainOf(siteDir) {
  const cfg = path.join(siteDir, 'astro.config.mjs')
  if (!fs.existsSync(cfg)) return null
  const m = /site:\s*['"](https?:\/\/([a-z0-9-]+)\.wyattau\.com)/.exec(fs.readFileSync(cfg, 'utf8'))
  return m ? m[2] : null
}

/** True when the site deviates from Starlight's default routing. */
function nonStandardRouting(siteDir) {
  const cfg = path.join(siteDir, 'src', 'content.config.ts')
  if (!fs.existsSync(cfg)) return false
  return /srcDir|docsDir|routeBase/.test(fs.readFileSync(cfg, 'utf8'))
}

/** Enumerate the routes a site publishes, from its content and pages. */
function routesOf(siteDir) {
  const routes = new Set(['/'])
  const docs = path.join(siteDir, 'src', 'content', 'docs')
  for (const file of walk(docs)) {
    if (!/\.mdx?$/.test(file)) continue
    // `index` maps to its directory, not to `/dir/index/`. Getting this wrong
    // hides every section landing page, which is most of a subject's
    // top-level navigation -- and produces false failures on working links.
    const parts = path
      .relative(docs, file)
      .replace(/\.mdx?$/, '')
      .split(path.sep)
    if (parts[parts.length - 1] === 'index') parts.pop()
    if (!parts.length) continue
    routes.add('/' + parts.join('/') + '/')
  }
  for (const file of walk(path.join(siteDir, 'src', 'pages'))) {
    if (!file.endsWith('.astro')) continue
    const parts = path
      .relative(path.join(siteDir, 'src', 'pages'), file)
      .replace(/\.astro$/, '')
      .split(path.sep)
    if (parts[parts.length - 1] === 'index') parts.pop()
    routes.add('/' + parts.join('/') + (parts.length ? '/' : ''))
  }
  return routes
}

/**
 * Canonical form for comparison.
 *
 * Astro redirects `/hub` to `/hub/`, so a link written without the trailing
 * slash resolves and must not be reported. Comparing raw strings produced
 * false positives on every such link.
 */
function normalise(route) {
  if (!route || route === '/') return '/'
  return route.replace(/\/+$/, '')
}

const byHost = new Map()
const unvalidated = new Set()

for (const site of fs.readdirSync(SITES_DIR, { withFileTypes: true })) {
  if (!site.isDirectory()) continue
  const siteDir = path.join(SITES_DIR, site.name)
  const host = domainOf(siteDir)
  if (!host) continue
  if (nonStandardRouting(siteDir)) {
    unvalidated.add(host)
    continue
  }
  byHost.set(host, new Set([...routesOf(siteDir)].map(normalise)))
}

const dead = []
const misfiled = []
let checked = 0

/**
 * An internal-style link `/x` is misfiled when it does not exist on the site
 * it was written on, but exists on exactly one other site. That is
 * unambiguous: the author used a route from the wrong site, and the repair is
 * the absolute URL. This caught three such links across two pages in one
 * session, all pointing at physics routes from mathematics pages.
 */
function sourceSiteOf(file) {
  const parts = file.split(path.sep)
  const i = parts.indexOf('sites')
  return i === -1 ? null : parts[i + 1]
}

function sourceRoutesOf(slug, allRoutes) {
  const host = domainOf(path.join(SITES_DIR, slug))
  return host ? allRoutes.get(host) : null
}

for (const file of walk(SITES_DIR)) {
  if (!/\.mdx?$/.test(file)) continue
  const rel = path.relative(ROOT, file)
  if (rel.split(path.sep).includes('zh')) continue
  let text
  try {
    text = fs.readFileSync(file, 'utf8')
  } catch {
    continue
  }
  const ownSlug = sourceSiteOf(rel)
  const ownRoutes = ownSlug ? byHost.get(domainOf(path.join(SITES_DIR, ownSlug))) : null

  let m
  INTERNAL.lastIndex = 0
  while ((m = INTERNAL.exec(text)) !== null) {
    const target = m[1] || '/'
    if (target === '/') continue
    const n = normalise(target)
    const hits = []
    for (const [host, routes] of byHost) {
      if (ownRoutes === routes) continue
      if (routes.has(n)) hits.push(host)
    }
    // Exactly one other site has it, and the source site does not.
    if (ownRoutes && !ownRoutes.has(n) && hits.length === 1) {
      const line = text.slice(0, m.index).split('\n').length
      misfiled.push(
        `${rel}:${line} -> ${n} exists only on ${hits[0]}.wyattau.com (written as an internal link)`,
      )
    }
  }

  m = null
  LINK.lastIndex = 0
  while ((m = LINK.exec(text)) !== null) {
    const host = m[2]
    const target = m[3] || '/'
    const routes = byHost.get(host)
    if (!routes) continue // not one of ours, or unvalidated host
    checked++
    if (!routes.has(normalise(target))) {
      const line = text.slice(0, m.index).split('\n').length
      dead.push(`${rel}:${line} -> https://${host}.wyattau.com${target}`)
    }
  }
}

for (const host of [...unvalidated].sort()) {
  console.log(`  note: not validating links to ${host}.wyattau.com (non-standard routing)`)
}

if (misfiled.length) {
  console.log(`Found ${misfiled.length} cross-site link(s) written as internal:`)
  for (const d of misfiled.slice(0, 25)) console.log(`  ${d}`)
  if (misfiled.length > 25) console.log(`  ...and ${misfiled.length - 25} more`)
}

if (dead.length) {
  console.error(`Found ${dead.length} dead cross-site link(s) (of ${checked} checked):`)
  for (const d of dead.slice(0, 60)) console.error(`  ${d}`)
  if (dead.length > 60) console.error(`  ...and ${dead.length - 60} more`)
  if (ADVISORY) {
    console.log('  -> advisory only')
  } else {
    process.exit(1)
  }
} else {
  console.log(`All ${checked} cross-site links resolve against the local content tree.`)
}
