#!/usr/bin/env node

/**
 * fix-docs-qual-links.mjs -- Fixes /docs_qualifications/ links across all sites.
 *
 * Pattern: /docs_qualifications/{site}/ → /
 *
 * Usage:
 *   node scripts/fix-docs-qual-links.mjs            # Fix all broken links
 *   node scripts/fix-docs-qual-links.mjs --dry-run  # Show what would change
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

  // Fix /docs_qualifications/{site}/ → /
  const newContent = content.replace(/\/docs_qualifications\/[a-z-]+\//g, '/')

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
    if (fixLinks(file)) siteFixed++
  }

  if (siteFixed > 0) {
    console.log(`${site}: ${siteFixed} files fixed`)
    totalFixed += siteFixed
  }
}

console.log(`\nTotal: ${DRY_RUN ? 'Would fix' : 'Fixed'} ${totalFixed} files`)
