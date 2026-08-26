#!/usr/bin/env node

/**
 * fix-alevel-links.mjs -- Fixes broken links in A-Level site.
 *
 * Pattern: /docs/alevel/ → /
 * Pattern: /alevel/ → /
 *
 * Usage:
 *   node scripts/fix-alevel-links.mjs            # Fix all broken links
 *   node scripts/fix-alevel-links.mjs --dry-run  # Show what would change
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

function fixLinks(filePath) {
  const content = readFileSync(filePath, 'utf-8')

  // Fix /docs/alevel/ → /
  let newContent = content.replace(/\/docs\/alevel\//g, '/')

  // Fix /alevel/ → / (but not inside URLs that are already correct)
  // Only fix if it's a link target, not a full URL
  newContent = newContent.replace(/\(\/alevel\//g, '(/')
  newContent = newContent.replace(/\[([^\]]+)\]\(\/alevel\//g, '[$1](')

  if (newContent !== content) {
    if (DRY_RUN) {
      console.log(`Would fix: ${relative('.', filePath)}`)
    } else {
      writeFileSync(filePath, newContent)
      console.log(`Fixed: ${relative('.', filePath)}`)
    }
    return true
  }
  return false
}

// Fix A-Level site
const alevelDir = 'sites/alevel/src/content/docs'
const files = walkFiles(alevelDir)
let fixed = 0

for (const file of files) {
  if (fixLinks(file)) fixed++
}

console.log(`${DRY_RUN ? 'Would fix' : 'Fixed'} ${fixed} files`)
