#!/usr/bin/env node

/**
 * convert-html-comments-to-mdx.mjs
 *
 * Converts HTML comments to MDX comments in MDX files.
 * MDX does not support HTML comments in the content area.
 *
 * Usage:
 *   node scripts/convert-html-comments-to-mdx.mjs
 */

import { readFileSync, writeFileSync, readdirSync } from 'node:fs'
import { join, relative } from 'node:path'

function walkFiles(dir) {
  const out = []
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) out.push(...walkFiles(full))
    else if (entry.isFile() && entry.name.endsWith('.mdx')) {
      out.push(full)
    }
  }
  return out
}

function convertComments(filePath) {
  const content = readFileSync(filePath, 'utf-8')
  
  // Convert HTML comments <!-- --> to MDX comments {/* */}
  // But only in the content area (after the frontmatter)
  const lines = content.split('\n')
  
  // Find the end of frontmatter
  let fmEnd = -1
  let dashCount = 0
  
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim() === '---') {
      dashCount++
      if (dashCount === 2) { fmEnd = i; break }
    }
  }
  
  if (fmEnd === -1) return false
  
  // Process lines after frontmatter
  let changed = false
  for (let i = fmEnd + 1; i < lines.length; i++) {
    const line = lines[i]
    
    // Convert <!-- Breadcrumb Schema for SEO --> to {/* Breadcrumb Schema for SEO */}
    if (line.includes('<!-- Breadcrumb Schema for SEO -->')) {
      lines[i] = line.replace('<!-- Breadcrumb Schema for SEO -->', '{/* Breadcrumb Schema for SEO */}')
      changed = true
    }
    
    // Convert <!-- Course Schema for SEO --> to {/* Course Schema for SEO */}
    if (line.includes('<!-- Course Schema for SEO -->')) {
      lines[i] = line.replace('<!-- Course Schema for SEO -->', '{/* Course Schema for SEO */}')
      changed = true
    }
  }
  
  if (changed) {
    writeFileSync(filePath, lines.join('\n'))
    console.log(`Fixed: ${relative('.', filePath)}`)
    return true
  }
  return false
}

// Process all sites
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
  if (!readdirSync(contentDir).length) continue
  
  const files = walkFiles(contentDir)
  let siteFixed = 0
  
  for (const file of files) {
    if (convertComments(file)) siteFixed++
  }
  
  if (siteFixed > 0) {
    console.log(`${site}: ${siteFixed} files fixed`)
    totalFixed += siteFixed
  }
}

console.log(`\nTotal: Fixed ${totalFixed} files`)
