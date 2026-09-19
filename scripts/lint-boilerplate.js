#!/usr/bin/env node

/**
 * lint-boilerplate.js -- template-text fingerprint detection.
 *
 * Index/intro pages assembled by early content migrations carry shared
 * boilerplate paragraphs ("This section covers ...", "Key Topics",
 * "Overview"). Duplicate opening text across pages reads as generated
 * filler and is weak for search. This script fingerprints opening
 * sentences and reports the most-repeated templates with their pages.
 *
 * Advisory only: reports, never fails. The output is the worklist for
 * the de-boilerplating pass.
 */

const fs = require('node:fs')
const path = require('node:path')

const ROOT = path.join(__dirname, '..')
const SITES_DIR = path.join(ROOT, 'sites')
const MIN_PAGES = 5 // sentences on >= 5 pages are template candidates

function frontmatterEnd(text) {
  if (!text.startsWith('---')) return 0
  const end = text.indexOf('\n---', 3)
  return end === -1 ? 0 : end + 4
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

function firstSentences(body, count) {
  // strip headings/tables/code/lists, keep prose
  const prose = body
    .split('\n')
    .filter(l => !/^\s*(#|\||```|:|-|\*|\d+\.|<|>)/.test(l))
    .join(' ')
  const sentences = prose.split(/(?<=[.!?])\s+/)
  return sentences.slice(0, count).map(s => normalize(s)).filter(s => s.split(' ').length >= 5)
}

const fingerprint = new Map() // normalized sentence -> [{site, path, raw}]
let pagesScanned = 0

for (const site of fs.readdirSync(SITES_DIR)) {
  const docs = path.join(SITES_DIR, site, 'src', 'content', 'docs')
  if (!fs.existsSync(docs)) continue
  for (const file of walkMd(docs)) {
    const rel = path.relative(ROOT, file)
    // index/intro/hub pages are where template text concentrates
    const base = path.basename(file, path.extname(file))
    if (!/^(index|intro|hub|about)$/.test(base) && !/\/(intro|index)\//.test(rel)) continue
    let text
    try {
      text = fs.readFileSync(file, 'utf8')
    } catch {
      continue
    }
    const body = text.slice(frontmatterEnd(text))
    pagesScanned++
    for (const sentence of firstSentences(body, 3)) {
      if (!fingerprint.has(sentence)) fingerprint.set(sentence, [])
      fingerprint.get(sentence).push({ site, rel, raw: sentence })
    }
  }
}

// aggregate: report normalized sentences appearing on many pages
const repeated = [...fingerprint.entries()]
  .filter(([, occurrences]) => {
    // distinct sites count (same sentence on 6 sites is template; 6 times
    // on one site is a writing tic but not network boilerplate)
    return new Set(occurrences.map(o => o.site)).size >= MIN_PAGES
  })
  .map(([sentence, occurrences]) => ({
    sentence,
    pages: occurrences.length,
    sites: new Set(occurrences.map(o => o.site)).size,
    sample: occurrences[0].raw,
  }))
  .sort((a, b) => b.pages - a.pages)

console.log(`Scanned ${pagesScanned} index/intro pages.`)

if (repeated.length === 0) {
  console.log('No template sentences detected across the network.')
  process.exit(0)
}

const totalRepeatedPages = repeated.reduce((sum, r) => sum + r.pages, 0)
console.log(`Template sentences (on >= ${MIN_PAGES} sites): ${repeated.length}`)
console.log(`Pages carrying at least one template sentence: ${totalRepeatedPages}`)
console.log('')
for (const r of repeated.slice(0, 25)) {
  console.log(`  [${r.pages} pages / ${r.sites} sites] ${r.sample.slice(0, 110)}`)
}
if (repeated.length > 25) console.log(`  ...and ${repeated.length - 25} more`)
console.log('')
console.log('This is the de-boilerplating worklist. Rewrite the flagged openings')
console.log('with site-specific prose, then re-run to confirm the count drops.')
