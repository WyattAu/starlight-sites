#!/usr/bin/env node

/**
 * fix-duplicate-h1.mjs -- Fixes duplicate H1 headings in content files.
 *
 * In Starlight, the frontmatter title is rendered as an H1 by PageTitle.astro.
 * If the content also has an H1, it creates duplicate H1 headings.
 *
 * This script changes the first H1 in content to H2.
 *
 * Usage:
 *   node scripts/fix-duplicate-h1.mjs            # Fix all duplicate H1s
 *   node scripts/fix-duplicate-h1.mjs --dry-run  # Show what would change
 */

import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join, relative } from 'node:path'

const args = new Set(process.argv.slice(2))
const DRY_RUN = args.has('--dry-run')

function walkFiles(dir) {
  const out = []
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) out.push(...walkFiles(full))
    else if (entry.isFile() && (entry.name.endsWith('.md') || entry.name.endsWith('.mdx'))) {
      out.push(full)
    }
  }
  return out
}

function fixH1(filePath) {
  const content = readFileSync(filePath, 'utf-8')

  // Find the first H1 heading (line starting with # but not ##)
  // Skip frontmatter (between --- delimiters)
  const lines = content.split('\n')
  let inFrontmatter = false
  let firstH1Line = -1

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    // Track frontmatter
    if (line.trim() === '---') {
      inFrontmatter = !inFrontmatter
      continue
    }

    // Skip frontmatter content
    if (inFrontmatter) continue

    // Check for H1 heading (starts with # but not ##)
    if (line.match(/^# [^#]/) && firstH1Line === -1) {
      firstH1Line = i
      break
    }
  }

  if (firstH1Line === -1) return false

  // Change H1 to H2
  const newLines = [...lines]
  newLines[firstH1Line] = lines[firstH1Line].replace(/^# /, '## ')
  const newContent = newLines.join('\n')

  if (newContent !== content) {
    if (DRY_RUN) {
      console.log(`Would fix: ${relative('.', filePath)} (line ${firstH1Line + 1})`)
    } else {
      writeFileSync(filePath, newContent)
      console.log(`Fixed: ${relative('.', filePath)} (line ${firstH1Line + 1})`)
    }
    return true
  }
  return false
}

// Fix all sites
const sitesDir = 'sites'
const sites = readdirSync(sitesDir).filter(f => {
  try {
    const entries = readdirSync(join(sitesDir, f, 'src'), { withFileTypes: true })
    return entries.some(e => e.name === 'content')
  } catch {
    return false
  }
})

let totalFixed = 0

for (const site of sites) {
  const contentDir = join(sitesDir, site, 'src', 'content', 'docs')
  const files = walkFiles(contentDir)
  let siteFixed = 0

  for (const file of files) {
    if (fixH1(file)) siteFixed++
  }

  if (siteFixed > 0) {
    console.log(`${site}: ${siteFixed} files fixed`)
    totalFixed += siteFixed
  }
}

console.log(`\nTotal: ${DRY_RUN ? 'Would fix' : 'Fixed'} ${totalFixed} files`)
