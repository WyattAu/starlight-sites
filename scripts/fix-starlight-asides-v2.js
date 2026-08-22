#!/usr/bin/env node
/**
 * fix-starlight-asides-v2.js
 *
 * Converts remaining raw HTML <aside> blocks that have aria-label attributes.
 * These were missed by fix-starlight-asides.js because the regex assumed
 * class came first in the tag.
 *
 * Usage: node scripts/fix-starlight-asides-v2.js [--dry-run]
 */

import { readFileSync, writeFileSync } from 'node:fs'
import { execSync } from 'node:child_process'

const DRY_RUN = process.argv.includes('--dry-run')

function findContentFiles() {
  const result = execSync(
    'grep -rl "starlight-aside" sites/*/src/content/docs/',
    { encoding: 'utf-8', cwd: process.cwd() }
  )
  return result.trim().split('\n').filter(Boolean)
}

function convertAsides(content) {
  let changed = false
  let count = 0

  // Pattern 1: <aside aria-label="..." class="starlight-aside starlight-aside--type">...</aside>
  // Pattern 2: <aside class="starlight-aside starlight-aside--type">...</aside>
  // Both may contain <p class="starlight-aside__title">...</p> inside

  const asideRegex = /<aside\s+(?:aria-label="[^"]*"\s+)?class="starlight-aside(?:\s+starlight-aside--(\w+))">\s*\n?([\s\S]*?)\n?\s*<\/aside>/g

  const newContent = content.replace(asideRegex, (match, type, body) => {
    const calloutType = type || 'note'
    count++
    changed = true

    // Remove <p class="starlight-aside__title">...</p> elements (SVG icons + title text)
    // These are Starlight's rendered title elements - the :::type syntax handles titles differently
    let cleanBody = body
      .replace(/<p\s+class="starlight-aside__title"[^>]*>[\s\S]*?<\/p>\s*/g, '')
      .trim()

    // Remove any remaining HTML tags that are Starlight-specific
    cleanBody = cleanBody
      .replace(/<svg[^>]*>[\s\S]*?<\/svg>/g, '')
      .trim()

    return `:::${calloutType}\n${cleanBody}\n:::`
  })

  return { content: newContent, changed, count }
}

const files = findContentFiles()
let totalFixed = 0
let totalAsides = 0
const fixedFiles = []

for (const file of files) {
  const content = readFileSync(file, 'utf-8')
  const { content: newContent, changed, count } = convertAsides(content)

  if (!changed) continue

  if (!DRY_RUN) {
    writeFileSync(file, newContent, 'utf-8')
  }

  totalFixed++
  totalAsides += count
  fixedFiles.push({ file, asides: count })
}

console.log(`\nStarlight aside v2 conversion results:`)
console.log(`  Files converted: ${totalFixed}`)
console.log(`  Total aside blocks converted: ${totalAsides}`)
console.log(`  Dry run: ${DRY_RUN}`)

if (fixedFiles.length > 0) {
  console.log(`\nFixed files:`)
  for (const { file, asides } of fixedFiles) {
    console.log(`  ${file} (${asides} asides)`)
  }
}
