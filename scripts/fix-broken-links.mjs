#!/usr/bin/env node

/**
 * fix-broken-links.mjs -- Fixes broken relative links in biology section.
 *
 * The issue: files in 1-cell-biology/ use ../1-cell-biology/ which creates
 * duplicate path segments like /biology/1-cell-biology/1-cell-biology/
 *
 * Usage:
 *   node scripts/fix-broken-links.mjs            # Fix all broken links
 *   node scripts/fix-broken-links.mjs --dry-run  # Show what would change
 */

import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { basename, dirname, join, relative } from 'node:path'

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
  const fileDir = dirname(filePath)
  const fileName = basename(filePath, '.md')

  // Get the current directory name (e.g., "1-cell-biology")
  const currentDir = basename(fileDir)

  // Pattern: ../{currentDir}/something → ./{something}
  // This fixes links that go up one level and back into the same directory
  const pattern = new RegExp(`\\.\\./${currentDir.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}/`, 'g')

  const newContent = content.replace(pattern, './')

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

// Fix biology section
const bioDir = 'sites/ib/src/content/docs/biology'
const files = walkFiles(bioDir)
let fixed = 0

for (const file of files) {
  if (fixLinks(file)) fixed++
}

console.log(`${DRY_RUN ? 'Would fix' : 'Fixed'} ${fixed} files`)
