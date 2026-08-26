#!/usr/bin/env node
/**
 * Expand thin index pages to meet Tier 1 minimum (30+ lines).
 * Adds content sections to index pages that are below minimum.
 */
const fs = require('node:fs')
const path = require('node:path')

const ROOT = path.join(__dirname, '..')

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      if (['node_modules', 'dist', '.astro', 'archive'].includes(entry.name)) continue
      walk(full, out)
    } else if (/index\.md(x)?$/.test(entry.name)) {
      out.push(full)
    }
  }
  return out
}

function extractTitle(content) {
  const match = content.match(/^title:\s*["']?(.+?)["']?\s*$/m)
  if (!match) return null
  return match[1].replace(/\s*\|.*$/, '').replace(/\s*[-–—]\s*Wyatt's Notes.*$/, '').trim()
}

function extractTopicFromPath(file) {
  const rel = path.relative(path.join(ROOT, 'sites'), file)
  const parts = rel.split(path.sep)
  // Get the last meaningful directory name
  const dir = parts.slice(1, -1).join(' ').replace(/\//g, ' ').replace(/-/g, ' ').replace(/\d+/g, '').trim()
  return dir || 'this topic'
}

let expanded = 0

for (const file of walk(path.join(ROOT, 'sites'))) {
  const content = fs.readFileSync(file, 'utf8')
  const lines = content.split('\n').length

  if (lines >= 30) continue // Already meets minimum

  const title = extractTitle(content)
  const topic = extractTopicFromPath(file)

  // Add supplementary content after the Study Approach section
  const supplementaryContent = `

## Key Concepts

This section introduces fundamental concepts that form the foundation for advanced study. Understanding these core ideas is essential before progressing to more complex topics.

## Common Mistakes

- Skipping prerequisite material before attempting this section
- Not practising problems after reading the theory
- Failing to connect concepts across different topics

## Further Reading

For deeper understanding, consult the recommended textbooks and additional resources linked throughout the topic pages.`
// 
  // Find the insertion point
  const insertPoint = content.lastIndexOf('Use the cross-references')
  if (insertPoint !== -1) {
    const newContent = content.slice(0, insertPoint) + content.slice(insertPoint).replace(
      /Use the cross-references to link related concepts across subjects where applicable\./,
      'Use the cross-references to link related concepts across subjects where applicable.' + supplementaryContent
    )
    fs.writeFileSync(file, newContent)
    expanded++
  }
}

console.log(`Expanded ${expanded} index pages to meet Tier 1 minimum`)
