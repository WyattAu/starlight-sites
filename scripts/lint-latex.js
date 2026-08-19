#!/usr/bin/env node
/**
 * LaTeX corruption linter.
 *
 * Detects residue from the Docusaurus-era MDX brace-escaping migrations
 * (May 2026, WyattsNotes commits eb9952fd..38270148 and the July 2026
 * sentinel-restore pass in this repo). These forms render silently wrong
 * in KaTeX (stray prime/quote glyphs inside \mathcal{} / \mathbb{} groups)
 * rather than failing loudly, so static detection is the only reliable gate.
 *
 * Patterns flagged (in content .md/.mdx files under sites):
 *   {{'}X{}'}   doubled brace group with quote residue  (d47dfaea form)
 *   {{"}X{}'}   double-quote variant                    (2d6d10d34 form)
 *   {}'}        orphan closing residue
 *   {'\{'}, {'\}'}  backslash escape form               (eb9952fd form)
 *   ◆LB◆ / ◆RB◆  diamond sentinels                       (38270148 form)
 *
 * Repair tool: scripts/fix-latex-corruption.js
 *
 * Exit code: 1 if any violation is found, 0 otherwise.
 */

const fs = require('node:fs')
const path = require('node:path')

const ROOT = path.join(__dirname, '..')
const SITES_DIR = path.join(ROOT, 'sites')

const PATTERNS = [
  { re: /\{\{'\}/g, name: "brace-mangle {{'}" },
  { re: /\{\{"\}/g, name: 'brace-mangle {{"}' },
  { re: /\{\}'\}/g, name: "orphan-residue {}'}" },
  { re: /\{'\\\{'\}/g, name: "jsx-escape {'\\{'}" },
  { re: /\{'\\'\}'\}/g, name: "jsx-escape {'\\'}'}" },
  { re: /◆LB◆|◆RB◆/g, name: 'diamond sentinel' },
]

const violations = []

function scanFile(filePath) {
  const rel = path.relative(ROOT, filePath)
  let content
  try {
    content = fs.readFileSync(filePath, 'utf8')
  } catch {
    return []
  }
  const before = violations.length
  const lines = content.split('\n')
  for (let i = 0; i < lines.length; i++) {
    for (const p of PATTERNS) {
      p.re.lastIndex = 0
      const m = p.re.exec(lines[i])
      if (m) {
        violations.push({
          file: rel,
          line: i + 1,
          column: m.index + 1,
          name: p.name,
          excerpt: lines[i].slice(Math.max(0, m.index - 20), m.index + 20).trim(),
        })
      }
    }
  }
  return violations.slice(before)
}

function walk(dir) {
  let entries
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true })
  } catch {
    return
  }
  for (const entry of entries) {
    if (entry.name === 'node_modules' || entry.name === 'dist' || entry.name === '.astro') continue
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      walk(full)
    } else if (entry.isFile() && /\.(md|mdx)$/.test(entry.name)) {
      scanFile(full)
    }
  }
}

function main() {
  walk(SITES_DIR)

  if (violations.length === 0) return 0

  for (const v of violations) {
    console.log(`  ${v.file}:${v.line}:${v.column}  ${v.name}: ...${v.excerpt}...`)
  }
  console.log(`\n  ${violations.length} LaTeX corruption marker(s) found.`)
  console.log('  Repair with: node scripts/fix-latex-corruption.js <file>')
  return 1
}

if (require.main === module) {
  process.exit(main())
}

module.exports = { PATTERNS, scanFile, main }
