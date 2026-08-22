#!/usr/bin/env node
/**
 * generate-expansion-prompts.js
 *
 * Scans content files below their tier minimums and generates expansion
 * prompts with specific guidance for what content to add.
 *
 * Usage: node scripts/generate-expansion-prompts.js [--top N]
 */

import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'

const TOP_N = parseInt(process.argv.find((_, i, a) => a[i - 1] === '--top') || '50')
const SITES_DIR = join(import.meta.dirname, '..', 'sites')

const TIER_MINIMUMS = {
  1: 30,   // Landing/index pages
  2: 80,   // Standard topic pages
  3: 120,  // Depth pages (2+ worked examples, 3+ pitfalls)
  4: 150,  // University advanced (every theorem proved)
}

function inferTier(filePath, lineCount) {
  if (/index\.(md|mdx)$/.test(filePath)) return 1
  if (/diagnostics?\//.test(filePath)) return 2
  if (lineCount > 200) return 3
  return 2
}

function findContentFiles(dir) {
  const files = []
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...findContentFiles(path))
    } else if (/\.(md|mdx)$/.test(entry.name)) {
      files.push(path)
    }
  }
  return files
}

function getMissingSections(content) {
  const missing = []
  if (!/## (Worked Examples?|Examples?)/.test(content)) missing.push('Worked Examples (2+)')
  if (!/## (Common Pitfalls?|Pitfalls?)/.test(content)) missing.push('Common Pitfalls (3+)')
  if (!/## Summary/.test(content)) missing.push('Summary')
  if (!/## Cross-References/.test(content)) missing.push('Cross-References')
  if (!/## (Key )?Relationships?/.test(content) && !/\|.*\|.*\|/.test(content)) missing.push('Relationship table')
  return missing
}

const pages = []
for (const siteDir of readdirSync(SITES_DIR, { withFileTypes: true })) {
  if (!siteDir.isDirectory()) continue
  const docsDir = join(SITES_DIR, siteDir.name, 'src', 'content', 'docs')
  if (!statSync(docsDir, { throwIfNoEntry: false })?.isDirectory()) continue

  for (const file of findContentFiles(docsDir)) {
    const content = readFileSync(file, 'utf-8')
    const lines = content.split('\n').length
    const relPath = relative(SITES_DIR, file)
    const tier = inferTier(relPath, lines)
    const minLines = TIER_MINIMUMS[tier]

    if (lines >= minLines) continue

    const titleMatch = content.match(/^title:\s*"?([^"\n]+)"?\s*$/m)
    const title = titleMatch ? titleMatch[1] : file.split('/').pop()
    const shortage = minLines - lines
    const missing = getMissingSections(content)

    pages.push({
      file: relPath,
      title,
      lines,
      tier,
      minLines,
      shortage,
      missing,
      site: siteDir.name,
    })
  }
}

pages.sort((a, b) => b.shortage - a.shortage)

console.log(`Found ${pages.length} pages below tier minimums.\n`)
console.log(`Top ${TOP_N} pages to expand (sorted by shortage):\n`)

for (const page of pages.slice(0, TOP_N)) {
  console.log(`  ${page.lines}/${page.minLines} lines (-${page.shortage}) | Tier ${page.tier} | ${page.site}`)
  console.log(`    ${page.file}`)
  console.log(`    Title: ${page.title}`)
  if (page.missing.length) {
    console.log(`    Missing: ${page.missing.join(', ')}`)
  }
  console.log()
}
