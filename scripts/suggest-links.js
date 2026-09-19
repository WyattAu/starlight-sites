#!/usr/bin/env node

/**
 * suggest-links.js -- internal-link suggestions for orphan and weakly
 * linked pages (advisory report).
 *
 * For every page with zero or few inbound internal links, finds published
 * pages whose titles share distinctive terms, and proposes links. Output
 * is a ranked report for hand-review -- nothing is rewritten
 * automatically.
 *
 * Usage: node scripts/suggest-links.js [maxSuggestionsPerPage]
 */

const fs = require('node:fs')
const path = require('node:path')

const ROOT = path.join(__dirname, '..')
const SITES_DIR = path.join(ROOT, 'sites')
const MAX_SUGGESTIONS = Number(process.argv[2] || 3)

const STOP = new Set(
  'the a an and or of in on for to with by from as is are was were be been at it its this that these those how what why when who which notes guide guide-revision revision level paper papers'.split(' '),
)

function titleCase(dir) {
  return dir
    .replace(/^\d+[_-]/, '')
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
}

function* walkMd(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) yield* walkMd(full)
    else if (/\.mdx?$/.test(entry.name)) yield full
  }
}

function frontmatterTitle(text, fallback) {
  const m = text.match(/^title:\s*["']?([^"'\n]+)["']?\s*$/m)
  return m ? m[1].trim() : fallback
}

function terms(text) {
  return new Set(
    text
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, ' ')
      .split(/\s+/)
      .filter((w) => w.length > 3 && !STOP.has(w)),
  )
}

// ── build the page graph ─────────────────────────────────────────────────

const pages = [] // { site, urlPath, title, terms, inbound }

for (const site of fs.readdirSync(SITES_DIR)) {
  const docs = path.join(SITES_DIR, site, 'src', 'content', 'docs')
  if (!fs.existsSync(docs)) continue
  for (const file of walkMd(docs)) {
    const rel = path.relative(docs, file).split(path.sep).join('/')
    if (rel === '404.md' || rel === '404.mdx') continue
    const text = fs.readFileSync(file, 'utf8')
    const isIndex = /(^|\/)index\.mdx?$/.test(rel)
    const dirPart = path.dirname(rel)
    const urlPath = isIndex
      ? dirPart === '.'
        ? `/${site === 'main' ? '' : site}/`
        : `/${dirPart}/`
      : `/${rel.replace(/\.mdx?$/, '')}/`
    const title = frontmatterTitle(text, titleCase(path.basename(file, path.extname(file))))
    const body = text.slice(text.indexOf('\n---', 3) + 4)

    // count inbound links (markdown + href=)
    const linkTargets = []
    for (const m of body.matchAll(/\[[^\]]*\]\((\/[^)\s]*)\)/g)) linkTargets.push(m[1])
    for (const m of body.matchAll(/href="(\/[^"\s]*)"/g)) linkTargets.push(m[1])

    pages.push({
      site,
      urlPath,
      title,
      terms: terms(`${title} ${urlPath}`),
      inbound: linkTargets.length,
      outboundTargets: linkTargets,
      abs: file,
    })
  }
}

// resolve same-site link targets to pages
const pageKey = new Map()
for (const p of pages) pageKey.set(`${p.site}:${p.urlPath}`, p)
for (const p of pages) {
  for (const t of p.outboundTargets) {
    const norm = t.endsWith('/') ? t : `${t}/`
    const target = pageKey.get(`${p.site}:${norm}`) || pageKey.get(`${p.site}:${t}`)
    if (target) {
      target.inbound = (target.inbound || 0) + 1
    }
  }
}

// ── suggestions ──────────────────────────────────────────────────────────

const weak = pages.filter((p) => (p.inbound || 0) <= 1 && !/\/(glossary|about|hub|404|search)\/?$/.test(p.urlPath))
const suggestions = []

for (const page of weak) {
  const candidates = []
  for (const other of pages) {
    if (other === page || other.site !== page.site) continue
    const overlap = [...page.terms].filter((t) => other.terms.has(t))
    if (overlap.length >= 2) candidates.push({ other, overlap: overlap.length })
  }
  candidates.sort((a, b) => b.overlap - a.overlap)
  if (candidates.length > 0) {
    suggestions.push({
      page,
      links: candidates.slice(0, MAX_SUGGESTIONS),
    })
  }
}

suggestions.sort((a, b) => a.page.inbound - b.page.inbound)

console.log(`Pages needing internal links: ${suggestions.length} of ${pages.length} pages.`)
console.log('')
for (const s of suggestions.slice(0, 30)) {
  console.log(`${s.page.site}.wyattau.com${s.page.urlPath} (inbound: ${s.page.inbound || 0})`)
  for (const l of s.links) {
    console.log(`    -> link to ${l.other.site}.wyattau.com${l.other.urlPath} [${l.other.title}] (shared terms: ${l.overlap})`)
  }
}
if (suggestions.length > 30) console.log(`...and ${suggestions.length - 30} more pages`)
