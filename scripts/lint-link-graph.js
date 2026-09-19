#!/usr/bin/env node

/**
 * lint-link-graph.js -- network-wide internal link graph analysis.
 *
 * Complements lint-links.js (which validates href="..." attributes) by
 * adding the classes it cannot see:
 *
 *   1. Markdown-style links [text](target) -- previously unchecked
 *   2. Fragment validation -- #anchors must match a heading in the
 *      target page (GitHub-style slugification)
 *   3. Orphan pages -- content pages with zero inbound internal links
 *      (utility pages excluded)
 *
 * Modes:
 *   (default)  report only, exit 0 -- advisory for the gate
 *   --fix      rewrite broken links whose correct target verifiably exists
 *              in the page index (root-relative rewrites and cross-site
 *              repo-relative -> canonical URL). Unfixable links are left
 *              untouched and reported.
 *   --strict   exit 1 when any broken link remains (for CI once the
 *              backlog is cleared)
 *
 * Exit 0 unless --strict is passed.
 */

const fs = require('node:fs')
const path = require('node:path')

const ROOT = path.join(__dirname, '..')
const SITES_DIR = path.join(ROOT, 'sites')
const { extractLinks, normalizeLink, resolveLinkTarget, targetExists } = require('./lint-links')

// Utility pages exempt from orphan detection: navigation and generated
// surfaces are not expected to accumulate inbound content links.
const ORPHAN_EXEMPT =
  /(^|\/)(index|404|hub|about|glossary|intro)$|(^|\/)(practice|flashcards|diagnostic|diag|quiz)[\w-]*$|(^|\/)zh(\/|$)/

const mdLink = /(?<!!)\[([^\]]*)\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g

function* walkMd(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) yield* walkMd(full)
    else if (/\.mdx?$/.test(entry.name)) yield full
  }
}

/** GitHub-style anchor slugging (approximation of github-slugger). */
function slugify(heading) {
  return heading
    .trim()
    .toLowerCase()
    .replace(/[$`*_{}[\]()#!?.,'"~<>|/\\]/g, '')
    .replace(/\s+/g, '-')
}

/** Collect headings of a content file: raw text + slugified forms. */
function headingsOf(absPath) {
  const set = new Set()
  const text = fs.readFileSync(absPath, 'utf8')
  for (const m of text.matchAll(/^#{1,6}\s+(.+?)\s*$/gm)) {
    const raw = m[1].replace(/[*_`~]/g, '').trim()
    set.add(raw.toLowerCase())
    set.add(slugify(raw))
  }
  // implicit top anchor
  set.add('')
  return set
}

function pageUrlPath(rel) {
  const noExt = rel.replace(/\.mdx?$/, '')
  if (noExt.endsWith('/index')) return '/' + noExt.slice(0, -'/index'.length) + '/'
  if (noExt === 'index') return '/'
  return '/' + noExt + '/'
}

// ── build the page index ──────────────────────────────────────────────────

const sites = {} // slug -> { pages: Map<urlPath, {abs, rel, anchors}>, urlPathSet }

for (const site of fs.readdirSync(SITES_DIR)) {
  const docs = path.join(SITES_DIR, site, 'src', 'content', 'docs')
  if (!fs.existsSync(docs)) continue
  const pages = new Map()
  for (const file of walkMd(docs)) {
    const rel = path.relative(docs, file).split(path.sep).join('/')
    const urlPath = pageUrlPath(rel)
    pages.set(urlPath, { abs: file, rel, anchors: headingsOf(file) })
  }
  sites[site] = { pages, urlPathSet: new Set(pages.keys()) }
}

// ── walk pages and validate links ─────────────────────────────────────────

const broken = []
let rewritten = 0
const inbound = new Map() // `${site}:${urlPath}` -> count
let linksChecked = 0

function stripTrailingSlash(p) {
  return p.replace(/\/$/, '') || '/'
}
const FIX = process.argv.includes('--fix')
const STRICT = process.argv.includes('--strict')

function resolveInternal(site, fromUrlPath, href) {
  // Browser semantics: resolve href against the page URL (the page URL is
  // treated as a directory). Returns { site, urlPath, fragment } when the
  // target page exists in this site's index, else null (broken on live).
  let pathPart = href
  let fragment = ''
  const hash = href.indexOf('#')
  if (hash !== -1) {
    pathPart = href.slice(0, hash)
    fragment = decodeURIComponent(href.slice(hash + 1))
  }
  if (pathPart === '') {
    return { site, urlPath: fromUrlPath, fragment, samePage: true }
  }
  let target
  if (pathPart.startsWith('/')) {
    target = pathPart
  } else {
    const dir = fromUrlPath.endsWith('/')
      ? fromUrlPath
      : fromUrlPath.slice(0, fromUrlPath.lastIndexOf('/') + 1)
    target = new URL(pathPart, `https://x${dir}`).pathname
  }
  target = target.replace(/\/$/, '') || '/'
  for (const c of [target, `${target}/`]) {
    if (sites[site].urlPathSet.has(c)) return { site, urlPath: c, fragment }
  }
  return null
}

/** Fix suggestion for repo-relative links: the referenced page on the other site. */
function suggestCrossSite(pathPart) {
  const repo = pathPart.match(/^(?:\.\.\/)+([a-z-]+)\/src\/content\/docs\/(.*)$/)
  if (!repo) return null
  const other = repo[1]
  const p = `/${repo[2].replace(/\.mdx?$/, '')}${repo[2].includes('.') ? '' : '/'}`
  if (sites[other] && sites[other].urlPathSet.has(p)) {
    return { site: other, urlPath: p }
  }
  return null
}

for (const [site, { pages }] of Object.entries(sites)) {
  for (const [urlPath, page] of pages) {
    const text = fs.readFileSync(page.abs, 'utf8')
    const links = []

    // markdown links
    for (const m of text.matchAll(mdLink)) links.push(m[2])
    // href attributes (existing extractor skips external/asset/fragment-only)
    for (const href of extractLinks(text)) links.push(href)

    for (const href of links) {
      if (href.startsWith('mailto:') || href.startsWith('tel:')) continue
      const isInternal =
        href.startsWith('/') ||
        href.startsWith('./') ||
        href.startsWith('../') ||
        href.startsWith('#') ||
        (!/^https?:\/\//.test(href) && !href.startsWith('//'))
      if (!isInternal) continue
      linksChecked++

      const resolved = resolveInternal(site, urlPath, href)
      if (!resolved) {
        // Broken as written. Two mechanically fixable classes:
        //  1. sibling/relative links whose target exists higher in the
        //     site tree (content copied with wrong relative assumptions)
        //  2. repo-relative links to another site's content (rewritten to
        //     the canonical URL on that site)
        // Everything else stays broken and is reported.
        let fixHref = null
        let fixNote = ''

        if (FIX && !href.startsWith('#')) {
          // 1) ancestor climb: try progressively shallower directories
          const dir = urlPath.endsWith('/')
            ? urlPath
            : urlPath.slice(0, urlPath.lastIndexOf('/') + 1)
          const segs = dir.split('/').filter(Boolean)
          let pathPart = href
          let fragment = ''
          const hash = href.indexOf('#')
          if (hash !== -1) {
            pathPart = href.slice(0, hash)
            fragment = href.slice(hash)
          }
          if (pathPart && !pathPart.startsWith('/')) {
            for (let depth = segs.length; depth >= 0; depth--) {
              const base = '/' + segs.slice(0, depth).join('/') + (depth > 0 ? '/' : '')
              const candPath = stripTrailingSlash(new URL(pathPart, `https://x${base}`).pathname)
              let found = null
              for (const c of [candPath, `${candPath}/`]) {
                if (sites[site].urlPathSet.has(c)) {
                  found = c
                  break
                }
              }
              if (found) {
                fixHref = found + fragment
                fixNote = `ancestor climb depth ${depth}`
                break
              }
            }
          }

          // 2) same-directory numeric-prefix match:
          //    /economics/macro/aggregate-demand-and-supply
          //    -> /economics/macro/02-aggregate-demand-and-supply/
          if (!fixHref && pathPart.startsWith('/')) {
            const tDir = pathPart.slice(0, pathPart.lastIndexOf('/'))
            const tSlug = pathPart.slice(pathPart.lastIndexOf('/') + 1)
            const prefixRe = new RegExp(`^${tDir}/\\d+-${tSlug}/$`)
            const matches = [...sites[site].urlPathSet].filter(u => prefixRe.test(u))
            if (matches.length === 1) {
              fixHref = matches[0] + fragment
              fixNote = 'numeric-prefix match'
            }
          }

          // 3) unique same-slug match elsewhere in the site
          if (!fixHref && pathPart.startsWith('/')) {
            const tSlug = pathPart.slice(pathPart.lastIndexOf('/') + 1)
            const slugRe = new RegExp(`/${tSlug}/$`)
            const matches = [...sites[site].urlPathSet].filter(u => slugRe.test(u))
            if (matches.length === 1) {
              fixHref = matches[0] + fragment
              fixNote = 'unique slug match'
            }
          }

          // 4) repo-relative to another site's content
          if (!fixHref) {
            const suggestion = suggestCrossSite(pathPart || href)
            if (suggestion) {
              fixHref = `https://${suggestion.site}.wyattau.com${suggestion.urlPath}${fragment}`
              fixNote = `cross-site content link to ${suggestion.site}`
            }
          }
        }

        if (FIX && fixHref) {
          const escHref = href.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
          const reMd = new RegExp(`(\\]\\()${escHref}(\\))`, 'g')
          const reHref = new RegExp(`(href=["'])${escHref}(["'])`, 'g')
          let fixed = text.replace(reMd, `$1${fixHref}$2`)
          if (fixed === text) fixed = text.replace(reHref, `$1${fixHref}$2`)
          if (fixed !== text) {
            fs.writeFileSync(page.abs, fixed)
            rewritten++
            console.error(`rewritten: ${site}:${urlPath} :: ${href} => ${fixHref} (${fixNote})`)
          } else {
            broken.push({ site, urlPath, href, cls: 'no-target' })
          }
        } else {
          broken.push({ site, urlPath, href, cls: 'no-target' })
        }
        continue
      }

      const key = `${resolved.site}:${resolved.urlPath}`
      inbound.set(key, (inbound.get(key) ?? 0) + 1)

      if (resolved.fragment) {
        const targetPage = sites[resolved.site].pages.get(resolved.urlPath)
        if (targetPage) {
          const frag = decodeURIComponent(resolved.fragment).toLowerCase()
          const anchorOk =
            targetPage.anchors.has(frag) || targetPage.anchors.has(resolved.fragment.toLowerCase())
          if (!anchorOk) {
            // The page exists but the fragment does not. Linking to the
            // page without the fragment is strictly better than a dead
            // anchor -- strip it (fix mode) or report (report mode).
            if (FIX) {
              const escHref = href.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
              const reMd = new RegExp(`(\\]\\()${escHref}(\\))`, 'g')
              const reHref = new RegExp(`(href=["'])${escHref}(["'])`, 'g')
              let fixed = text.replace(reMd, `$1${resolved.urlPath}$2`)
              if (fixed === text) fixed = text.replace(reHref, `$1${resolved.urlPath}$2`)
              if (fixed !== text) {
                fs.writeFileSync(page.abs, fixed)
                rewritten++
                console.error(`fragment stripped: ${site}:${urlPath} :: ${href} => ${resolved.urlPath}`)
              } else {
                broken.push({ site, urlPath, href, cls: 'missing-anchor' })
              }
            } else {
              broken.push({ site, urlPath, href, cls: 'missing-anchor' })
            }
          }
        }
      }
    }
  }
}

// ── orphan detection (advisory) ───────────────────────────────────────────

const orphans = []
for (const [site, { pages }] of Object.entries(sites)) {
  for (const [urlPath] of pages) {
    if (ORPHAN_EXEMPT.test(urlPath)) continue
    const key = `${site}:${urlPath}`
    if (!inbound.has(key)) orphans.push(`${site}:${urlPath}`)
  }
}

console.error(`Checked ${linksChecked} internal links across ${Object.keys(sites).length} sites.`)

if (broken.length) {
  const byClass = {}
  for (const b of broken) byClass[b.cls] = (byClass[b.cls] ?? 0) + 1
  console.error(`Found ${broken.length} broken internal link(s)/anchor(s):`)
  for (const [cls, count] of Object.entries(byClass).sort((a, b) => b[1] - a[1])) {
    console.error(`  ${cls}: ${count}`)
  }
  for (const b of broken.slice(0, 25))
    console.error(`  ${b.site}:${b.urlPath} -> ${b.href} (${b.cls})`)
  if (broken.length > 25) console.error(`  ...and ${broken.length - 25} more`)
}

console.error(`Orphan pages (zero inbound internal links): ${orphans.length}`)
for (const o of orphans.slice(0, 30)) console.error(`  orphan: ${o}`)
if (orphans.length > 30) console.error(`  ...and ${orphans.length - 30} more`)

if (STRICT && broken.length) process.exit(1)
