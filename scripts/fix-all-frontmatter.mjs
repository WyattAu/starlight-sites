#!/usr/bin/env node

/**
 * fix-index-mdx-frontmatter.mjs -- Fixes frontmatter in index.md|.mdx files.
 *
 * Removes embedded script tags from frontmatter in index.md|.mdx files.
 *
 * Usage:
 *   node scripts/fix-index-mdx-frontmatter.mjs
 */

import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join, relative } from 'node:path'

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

function fixFrontmatter(filePath) {
  const content = readFileSync(filePath, 'utf-8')

  // Check if file has the problematic pattern
  if (!content.includes('<!-- Breadcrumb Schema') && !content.includes('<!-- Course Schema')) {
    return false
  }

  const lines = content.split('\n')
  let fmStart = -1
  let fmEnd = -1
  let dashCount = 0

  for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim() === '---') {
      dashCount++
      if (dashCount === 1) fmStart = i
      if (dashCount === 2) {
        fmEnd = i
        break
      }
    }
  }

  if (fmStart === -1 || fmEnd === -1) return false

  // Extract the frontmatter content (between the delimiters)
  const fmLines = lines.slice(fmStart + 1, fmEnd)
  const fmText = fmLines.join('\n')

  // Check if there are script blocks in the frontmatter
  if (!fmText.includes('<!-- Breadcrumb Schema') && !fmText.includes('<!-- Course Schema')) {
    return false
  }

  // Remove script blocks from frontmatter content
  const cleanedFmLines = []
  let skip = false
  let inScript = false

  for (const line of fmLines) {
    if (line.includes('<!-- Breadcrumb Schema') || line.includes('<!-- Course Schema')) {
      skip = true
      inScript = false
      continue
    }

    if (skip && line.trim() === '<script type="application/ld+json">') {
      inScript = true
      continue
    }

    if (inScript && line.trim() === '</script>') {
      skip = false
      inScript = false
      continue
    }

    if (inScript) continue
    if (skip) continue

    cleanedFmLines.push(line)
  }

  // Reconstruct the file: everything before frontmatter + cleaned frontmatter + everything after
  const newContent = [
    ...lines.slice(0, fmStart + 1),
    ...cleanedFmLines,
    ...lines.slice(fmEnd),
  ].join('\n')

  if (newContent !== content) {
    writeFileSync(filePath, newContent)
    console.log(`Fixed: ${relative('.', filePath)}`)
    return true
  }
  return false
}

// Fix all index.md|.mdx files
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
    if (fixFrontmatter(file)) siteFixed++
  }

  if (siteFixed > 0) {
    console.log(`${site}: ${siteFixed} files fixed`)
    totalFixed += siteFixed
  }
}

console.log(`\nTotal: Fixed ${totalFixed} files`)
