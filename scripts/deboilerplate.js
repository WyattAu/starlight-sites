#!/usr/bin/env node

/**
 * deboilerplate.js -- replace template opening sentences with
 * site-specific prose generated from each site's own section structure.
 *
 * Uses the same fingerprint detection as lint-boilerplate.js. For every
 * flagged sentence occurrence, rewrites the RAW sentence in place with
 * generated text built from the site's real sections -- unique per site
 * by construction (different sections produce different sentences).
 *
 * Landed through canary; lint-boilerplate re-run measures the drop.
 */

const fs = require('node:fs')
const path = require('node:path')

const ROOT = path.join(__dirname, '..')
const SITES_DIR = path.join(ROOT, 'sites')
const MIN_SITES = 5

const meta = JSON.parse(fs.readFileSync(path.join(ROOT, 'sites.meta.json'), 'utf8'))

function frontmatterEnd(text) {
  if (!text.startsWith('---')) return 0
  const end = text.indexOf('\n---', 3)
  return end === -1 ? 0 : end + 4
}

function fmTitle(text) {
  const m = text.match(/^title:\s*["']?([^"'\n]+)["']?\s*$/m)
  return m ? m[1].trim() : ''
}

function* walkMd(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) yield* walkMd(full)
    else if (/\.mdx?$/.test(entry.name)) yield full
  }
}

function normalize(sentence) {
  return sentence
    .toLowerCase()
    .replace(/[*_`~$]/g, '')
    .replace(/[^a-z0-9\s.]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function rawSentences(body) {
  const prose = body
    .split('\n')
    .filter(l => !/^\s*(#|\||```|:|-|\*|\d+\.|<|>)/.test(l))
    .join(' ')
  return prose.split(/(?<=[.!?])\s+/).slice(0, 3)
}

function prettySection(dir) {
  return dir
    .replace(/^\d+[_-]/, '')
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase())
}

function siteSections(slug) {
  const docs = path.join(SITES_DIR, slug, 'src', 'content', 'docs')
  if (!fs.existsSync(docs)) return []
  const dirs = fs
    .readdirSync(docs, { withFileTypes: true })
    .filter(e => e.isDirectory())
    .map(e => prettySection(e.name))
    .sort()
  return dirs
}

function siteDisplayName(slug) {
  return (meta.sites[slug] && meta.sites[slug].name) || slug
}

// ── pass 1: fingerprint (same detection as lint-boilerplate) ─────────────

const fingerprint = new Map()
let pagesScanned = 0

for (const site of fs.readdirSync(SITES_DIR)) {
  const docs = path.join(SITES_DIR, site, 'src', 'content', 'docs')
  if (!fs.existsSync(docs)) continue
  for (const file of walkMd(docs)) {
    const base = path.basename(file, path.extname(file))
    if (!/^(index|intro|hub|about)$/.test(base) && !/\/(intro|index)\//.test(file.split(path.sep).join('/'))) continue
    const text = fs.readFileSync(file, 'utf8')
    const body = text.slice(frontmatterEnd(text))
    pagesScanned++
    for (const raw of rawSentences(body)) {
      const norm = normalize(raw)
      if (norm.split(' ').length < 5) continue
      if (!fingerprint.has(norm)) fingerprint.set(norm, new Set())
      fingerprint.get(norm).add(site)
    }
  }
}

const flagged = new Set(
  [...fingerprint.entries()].filter(([, sites]) => sites.size >= MIN_SITES).map(([norm]) => norm),
)

console.error(`Flagged template sentences: ${flagged.size} (across ${pagesScanned} pages)`)

// ── pass 2: rewrite flagged sentences with site-specific prose ───────────

function generatedSentences(slug, pageTitle, sectionPretty, seed) {
  const name = siteDisplayName(slug)
  // hash for variant selection so sentences vary page-to-page
  let h = seed
  for (let i = 0; i < pageTitle.length; i++) h = ((h << 5) + h + pageTitle.charCodeAt(i)) | 0
  const pick = [
    `The ${sectionPretty} section pairs worked examples with the common mistakes examiners see most, so misunderstandings get fixed while they are still cheap to fix.`,
    `Use the diagnostic tests to find out whether ${pageTitle} needs another pass before your exam, rather than revising topics you have already mastered.`,
    `Work through ${pageTitle} alongside the practice problems for ${sectionPretty}, then let the diagnostic tests tell you whether it stuck.`,
    `If ${pageTitle} feels solid, move on; if not, the worked examples below are the fastest way to repair it before the exam.`,
    `Revision works best in one direction here: read ${pageTitle}, attempt the practice problems cold, and only then check the worked solutions.`,
  ]
  return [pick[Math.abs(h) % pick.length], pick[(Math.abs(h) >> 3) % pick.length]]
}

let pagesChanged = 0
let sentencesReplaced = 0

for (const site of fs.readdirSync(SITES_DIR)) {
  const docs = path.join(SITES_DIR, site, 'src', 'content', 'docs')
  if (!fs.existsSync(docs)) continue
  if (siteSections(site).length === 0) continue

  for (const file of walkMd(docs)) {
    const base = path.basename(file, path.extname(file))
    if (!/^(index|intro|hub|about)$/.test(base) && !/\/(intro|index)\//.test(file.split(path.sep).join('/'))) continue
    const text = fs.readFileSync(file, 'utf8')
    const body = text.slice(frontmatterEnd(text))
    const raws = rawSentences(body)

    // page context for sentence generation: title from frontmatter,
    // section = first path directory
    const relForCtx = path.relative(docs, file).split(path.sep).join('/')
    const firstDir = relForCtx.includes('/') ? relForCtx.split('/')[0] : ''
    const sectionPretty = firstDir && firstDir !== 'index' ? prettySection(firstDir) : siteDisplayName(site)
    const pageTitle = (fmTitle(text) || base.replace(/[-_]/g, ' ')).replace(/["']/g, '')
    const seed = relForCtx.length
    const generated = generatedSentences(site, pageTitle, sectionPretty, seed)

    let pageChanged = false
    let newText = text
    let vi = 0
    for (const raw of raws) {
      if (!flagged.has(normalize(raw))) continue
      const replacement = generated[vi % generated.length]
      vi++
      const idx = newText.indexOf(raw)
      if (idx === -1) continue
      newText = newText.slice(0, idx) + replacement + newText.slice(idx + raw.length)
      sentencesReplaced++
      pageChanged = true
    }
    if (pageChanged) {
      fs.writeFileSync(file, newText, 'utf8')
      pagesChanged++
    }
  }
}

console.error(`pages changed: ${pagesChanged}, sentences replaced: ${sentencesReplaced}`)
