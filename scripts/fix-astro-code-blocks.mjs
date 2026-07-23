#!/usr/bin/env node

/**
 * fix-astro-code-blocks.mjs -- Fixes code blocks in Astro files.
 *
 * Wraps code blocks in backticks to prevent Astro from parsing them as JavaScript.
 *
 * Usage:
 *   node scripts/fix-astro-code-blocks.mjs
 */

import { readFileSync, writeFileSync, readdirSync } from 'node:fs'
import { join, relative } from 'node:path'

function walkFiles(dir) {
  const out = []
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) out.push(...walkFiles(full))
    else if (entry.isFile() && entry.name.endsWith('.astro')) {
      out.push(full)
    }
  }
  return out
}

function fixCodeBlocks(filePath) {
  const content = readFileSync(filePath, 'utf-8')
  
  // Check if file has unescaped code blocks or LaTeX math
  if (!content.includes('<pre><code>') && !content.includes('$$')) {
    return false
  }
  
  let newContent = content
  
  // Fix code blocks
  if (content.includes('<pre><code>') && !content.includes('{`')) {
    newContent = newContent.replace(
      /<pre><code>([\s\S]*?)<\/code><\/pre>/g,
      (match, code) => {
        // Skip if already escaped
        if (code.includes('{`') || code.includes('`}')) {
          return match
        }
        // Escape curly braces and colons in code
        const escaped = code
          .replace(/\{/g, '&#123;')
          .replace(/\}/g, '&#125;')
          .replace(/:/g, '&#58;')
        return `<pre><code>${escaped}</code></pre>`
      }
    )
  }
  
  // Fix LaTeX math expressions (double dollar signs)
  if (newContent.includes('$$') && !newContent.includes('{`$$')) {
    newContent = newContent.replace(
      /\$\$([\s\S]*?)\$\$/g,
      (match, math) => {
        // Skip if already escaped
        if (math.includes('{`')) {
          return match
        }
        return '{`$$' + math + '$$`}'
      }
    )
  }
  
  // Fix inline LaTeX math (single dollar signs)
  if (newContent.includes('$') && !newContent.includes('{`$')) {
    newContent = newContent.replace(
      /\$([^$\n]+)\$/g,
      (match, math) => {
        // Skip if already escaped or if it's a double dollar
        if (math.includes('{`') || math.includes('$$')) {
          return match
        }
        return '{`$' + math + '$`}'
      }
    )
  }
  
  if (newContent !== content) {
    writeFileSync(filePath, newContent)
    console.log(`Fixed: ${relative('.', filePath)}`)
    return true
  }
  return false
}

// Fix all Astro files
const files = walkFiles('sites/main/src/pages/study-guides')
let fixed = 0

for (const file of files) {
  if (fixCodeBlocks(file)) fixed++
}

console.log(`\nFixed ${fixed} files`)
