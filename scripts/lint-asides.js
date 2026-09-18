#!/usr/bin/env node

/**
 * lint-asides.js -- Starlight aside directive integrity across all sites.
 *
 * Catches the aside corruption classes that shipped to production:
 *   1. Unterminated ::: directives (opener without closer)
 *   2. Raw HTML (<strong>, <em>, <Aside>) inside ::: directives in .mdx
 *      files -- raw HTML/JSX defeats directive parsing in MDX, so the
 *      whole block leaks as literal text on the page
 *   3. Indented openers (asides inside list items parse unreliably)
 *   4. Cramped fences: content on the same line as ::: opener/closer
 *
 * Directives inside fenced code blocks are ignored. Exit 1 on any
 * violation.
 */

const fs = require('node:fs')
const path = require('node:path')

const ROOT = path.join(__dirname, '..')
const SITES_DIR = path.join(ROOT, 'sites')

const asideOpen = /^:::(danger|note|tip|caution|aside)(\[[^\]]*\])?\s*$/
const closer = /^:::\s*$/

const violations = []

function* walkMdFiles(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) yield* walkMdFiles(full)
    else if (/\.mdx?$/.test(entry.name)) yield full
  }
}

function lintFile(rel, lines) {
  let inFence = false
  let open = null // { line: lineNumber, type }
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    const trimmed = line.trim()
    if (trimmed.startsWith('```') || trimmed.startsWith('~~~')) {
      inFence = !inFence
      continue
    }
    if (inFence) continue

    if (asideOpen.test(line)) {
      if (open) {
        violations.push(
          `${rel}:${i + 1} nested aside opener (previous ${open.type} at line ${open.line} not closed)`,
        )
      }
      open = { line: i + 1, type: line.trim() }
      continue
    }
    if (/^:::\s*$/.test(line)) {
      open = null
      continue
    }

    // content on the opener/closer line leaks literally
    if (/^:::(danger|note|tip|caution|aside)\s+\S/.test(line)) {
      violations.push(`${rel}:${i + 1} text on the ::: opener line -- directive renders literally`)
    }

    if (open) {
      // Raw HTML inside an aside defeats directive parsing in .mdx (the
      // whole block leaks as literal text). In .md it renders, so only
      // flag the MDX case.
      if (rel.endsWith('.mdx') && /<\/?(strong|em|b|i|div|span|Aside|p|ul|ol)\b/.test(line)) {
        violations.push(
          `${rel}:${i + 1} raw HTML inside ::: ${open.type} aside (leaks literally in MDX)`,
        )
      }
      if (/^\s+:::(danger|note|tip|caution|aside)/.test(line)) {
        violations.push(`${rel}:${i + 1} indented aside opener inside a list item`)
      }
    }
  }
  if (open) {
    violations.push(`${rel}:${open.line} unterminated ::: ${open.type} directive`)
  }
}

for (const site of fs.readdirSync(SITES_DIR)) {
  const docs = path.join(SITES_DIR, site, 'src', 'content', 'docs')
  if (!fs.existsSync(docs)) continue
  for (const file of walkMdFiles(docs)) {
    const rel = path.relative(ROOT, file)
    let text
    try {
      text = fs.readFileSync(file, 'utf8')
    } catch {
      continue
    }
    lintFile(rel, text.split('\n'))
  }
}

if (violations.length) {
  console.error(`Found ${violations.length} aside violation(s):`)
  for (const v of violations.slice(0, 40)) console.error(`  ${v}`)
  if (violations.length > 40) console.error(`  ...and ${violations.length - 40} more`)
  process.exit(1)
}

console.log('All aside directives are well-formed.')
