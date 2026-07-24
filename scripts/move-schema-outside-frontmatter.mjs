#!/usr/bin/env node

/**
 * move-schema-outside-frontmatter.mjs
 *
 * Moves Breadcrumb/Course Schema script blocks from INSIDE frontmatter
 * to AFTER the closing --- delimiter.
 *
 * Before:
 *   ---
 *   title: Foo
 *   <!-- Breadcrumb Schema -->
 *   <script>...</script>
 *   ---
 *
 * After:
 *   ---
 *   title: Foo
 *   ---
 *   <!-- Breadcrumb Schema -->
 *   <script>...</script>
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

function moveSchemaOutsideFrontmatter(filePath) {
  const content = readFileSync(filePath, 'utf-8')
  
  // Quick check: does this file have Breadcrumb/Course Schema between --- delimiters?
  if (!content.includes('<!-- Breadcrumb Schema') && !content.includes('<!-- Course Schema')) {
    return false
  }
  
  // Find the first two --- delimiters
  const lines = content.split('\n')
  let fmStart = -1
  let fmEnd = -1
  let dashCount = 0
  
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim() === '---') {
      dashCount++
      if (dashCount === 1) fmStart = i
      if (dashCount === 2) { fmEnd = i; break }
    }
  }
  
  if (fmStart === -1 || fmEnd === -1) return false
  
  // Check if there are script blocks in the frontmatter
  const fmLines = lines.slice(fmStart + 1, fmEnd)
  const fmText = fmLines.join('\n')
  
  if (!fmText.includes('<!-- Breadcrumb Schema') && !fmText.includes('<!-- Course Schema')) {
    return false
  }
  
  // Separate: YAML lines vs Script blocks
  const yamlLines = []
  const scriptBlocks = []
  let collectingScript = false
  let currentScript = []
  
  for (const line of fmLines) {
    if (line.includes('<!-- Breadcrumb Schema') || line.includes('<!-- Course Schema')) {
      collectingScript = true
      currentScript = [line]
      continue
    }
    
    if (collectingScript) {
      currentScript.push(line)
      if (line.trim() === '</script>') {
        scriptBlocks.push(currentScript)
        collectingScript = false
        currentScript = []
      }
      continue
    }
    
    yamlLines.push(line)
  }
  
  // If no script blocks were extracted, no change needed
  if (scriptBlocks.length === 0) return false
  
  const newLines = []
  
  // 1. Everything before frontmatter (should be empty for most files)
  for (let i = 0; i < fmStart; i++) {
    newLines.push(lines[i])
  }
  
  // 2. Opening ---
  newLines.push('---')
  
  // 3. YAML-only lines from frontmatter
  for (const line of yamlLines) {
    newLines.push(line)
  }
  
  // 4. Closing ---
  newLines.push('---')
  
  // 5. Script blocks (moved outside frontmatter)
  for (const block of scriptBlocks) {
    newLines.push('')
    for (const line of block) {
      newLines.push(line)
    }
  }
  
  // 6. Rest of file after the closing --- of original frontmatter
  for (let i = fmEnd + 1; i < lines.length; i++) {
    newLines.push(lines[i])
  }
  
  const newContent = newLines.join('\n')
  
  if (newContent !== content) {
    writeFileSync(filePath, newContent)
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
    if (moveSchemaOutsideFrontmatter(file)) siteFixed++
  }
  
  if (siteFixed > 0) {
    console.log(`${site}: ${siteFixed} files fixed`)
    totalFixed += siteFixed
  }
}

console.log(`\nTotal: Fixed ${totalFixed} files`)
