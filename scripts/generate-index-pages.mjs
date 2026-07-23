#!/usr/bin/env node

/**
 * generate-index-pages.mjs -- Generates index pages for directories missing them.
 *
 * Creates index.md files for directories that don't have them.
 *
 * Usage:
 *   node scripts/generate-index-pages.mjs
 */

import { writeFileSync, readdirSync, existsSync } from 'node:fs'
import { join, basename, dirname, relative } from 'node:path'

function walkDirectories(dir) {
  const results = []
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) {
      // Check if directory has markdown files
      const hasMd = readdirSync(full).some(f => f.endsWith('.md') || f.endsWith('.mdx'))
      if (hasMd) {
        results.push(full)
      }
      results.push(...walkDirectories(full))
    }
  }
  return results
}

function generateIndexPage(dirPath) {
  const dirName = basename(dirPath)
  const parentDir = basename(dirname(dirPath))
  
  // Convert directory name to title
  const title = dirName
    .replace(/^\d+-/, '') // Remove leading number
    .replace(/-/g, ' ') // Replace hyphens with spaces
    .replace(/\b\w/g, c => c.toUpperCase()) // Capitalize words
  
  return `---
title: ${title}
description: "Study notes and resources for ${title}"
date: 2026-01-01T00:00:00Z
---

# ${title}

## Topics

${readdirSync(dirPath)
  .filter(f => f.endsWith('.md') || f.endsWith('.mdx'))
  .map(f => {
    const name = f.replace(/\.(md|mdx)$/, '')
    const displayName = name
      .replace(/^\d+-/, '')
      .replace(/-/g, ' ')
      .replace(/\b\w/g, c => c.toUpperCase())
    return `- [${displayName}](./${name})`
  })
  .join('\n')}
`
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

let totalGenerated = 0

for (const site of sites) {
  const contentDir = join(sitesDir, site, 'src', 'content', 'docs')
  if (!existsSync(contentDir)) continue
  
  const directories = walkDirectories(contentDir)
  
  for (const dir of directories) {
    const indexPath = join(dir, 'index.md')
    const indexMdxPath = join(dir, 'index.mdx')
    
    if (!existsSync(indexPath) && !existsSync(indexMdxPath)) {
      const content = generateIndexPage(dir)
      writeFileSync(indexPath, content)
      console.log(`Generated: ${relative('.', indexPath)}`)
      totalGenerated++
    }
  }
}

console.log(`\nGenerated ${totalGenerated} index pages`)
