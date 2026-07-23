#!/usr/bin/env node

/**
 * fix-frontmatter-scripts.mjs -- Removes embedded script tags from frontmatter.
 *
 * The Breadcrumb Schema and Course Schema script tags embedded between --- delimiters
 * cause YAML parse failures. This script removes them.
 *
 * Usage:
 *   node scripts/fix-frontmatter-scripts.mjs
 */

import { readFileSync, writeFileSync, readdirSync } from 'node:fs'
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
  
  // Check if file has the problematic pattern:
  // ---\n\n<!-- Breadcrumb Schema -->\n<script>...\n</script>\n\ntitle:
  // We need to remove the script blocks that are BETWEEN the --- delimiters
  
  const lines = content.split('\n')
  let inFrontmatter = false
  let frontmatterStart = -1
  let frontmatterEnd = -1
  let hasEmbeddedScript = false
  
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim() === '---') {
      if (!inFrontmatter) {
        inFrontmatter = true
        frontmatterStart = i
      } else {
        frontmatterEnd = i
        break
      }
    }
  }
  
  if (frontmatterStart === -1 || frontmatterEnd === -1) return false
  
  // Check if there are script tags in the frontmatter
  const frontmatterContent = lines.slice(frontmatterStart, frontmatterEnd + 1).join('\n')
  if (!frontmatterContent.includes('<!-- Breadcrumb Schema') && !frontmatterContent.includes('<!-- Course Schema')) {
    return false
  }
  
  // Remove script blocks from frontmatter
  const newLines = []
  let skip = false
  let inScript = false
  
  for (let i = frontmatterStart; i <= frontmatterEnd; i++) {
    const line = lines[i]
    
    if (line.includes('<!-- Breadcrumb Schema') || line.includes('<!-- Course Schema')) {
      skip = true
      inScript = false
      continue
    }
    
    if (skip && line.includes('<script type="application/ld+json">')) {
      inScript = true
      continue
    }
    
    if (inScript && line.includes('</script>')) {
      skip = false
      inScript = false
      continue
    }
    
    if (inScript) continue
    
    if (skip) continue
    
    newLines.push(line)
  }
  
  // Add back the rest of the file
  newLines.push(...lines.slice(frontmatterEnd + 1))
  
  const newContent = newLines.join('\n')
  
  if (newContent !== content) {
    writeFileSync(filePath, newContent)
    console.log(`Fixed: ${relative('.', filePath)}`)
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
    if (fixFrontmatter(file)) siteFixed++
  }
  
  if (siteFixed > 0) {
    console.log(`${site}: ${siteFixed} files fixed`)
    totalFixed += siteFixed
  }
}

console.log(`\nTotal: Fixed ${totalFixed} files`)
