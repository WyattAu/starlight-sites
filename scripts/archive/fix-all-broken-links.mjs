#!/usr/bin/env node

/**
 * fix-all-broken-links.mjs -- Fixes broken relative links across all sites.
 *
 * Pattern: ../{currentDir}/something → ./{something}
 * This fixes links that go up one level and back into the same directory.
 *
 * Usage:
 *   node scripts/fix-all-broken-links.mjs            # Fix all broken links
 *   node scripts/fix-all-broken-links.mjs --dry-run  # Show what would change
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

  // Get the current directory name (e.g., "1-cell-biology", "cognitive", etc.)
  const currentDir = basename(fileDir)

  // Pattern: ../{currentDir}/something → ./{something}
  // This fixes links that go up one level and back into the same directory
  const escapedDir = currentDir.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const pattern = new RegExp(`\\.\\./${escapedDir}/`, 'g')

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

// Fix all sites
const sitesDir = 'sites'
const sites = readdirSync(sitesDir).filter(f => {
  const stat = readdirSync(join(sitesDir, f), { withFileTypes: true })
  return stat.some(e => e.isDirectory() && e.name === 'src')
})

let totalFixed = 0

for (const site of sites) {
  const contentDir = join(sitesDir, site, 'src', 'content', 'docs')
  if (!readdirSync(join(sitesDir, site, 'src')).some(e => e.name === 'content')) {
    continue
  }

  const files = walkFiles(contentDir)
  let siteFixed = 0

  for (const file of files) {
    if (fixLinks(file)) siteFixed++
  }

  if (siteFixed > 0) {
    console.log(`${site}: ${siteFixed} files fixed`)
    totalFixed += siteFixed
  }
}

console.log(`\nTotal: ${DRY_RUN ? 'Would fix' : 'Fixed'} ${totalFixed} files`)
