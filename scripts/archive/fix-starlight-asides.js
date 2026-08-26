#!/usr/bin/env node
/**
 * fix-starlight-asides.js
 *
 * Converts raw HTML <aside class="starlight-aside--{type}"> blocks to
 * Starlight's native :::type callout syntax.
 *
 * Supported variants:
 *   <aside class="starlight-aside starlight-aside--note">   -> :::note
 *   <aside class="starlight-aside starlight-aside--tip">    -> :::tip
 *   <aside class="starlight-aside starlight-aside--caution"> -> :::caution
 *   <aside class="starlight-aside starlight-aside--danger">  -> :::danger
 *   <aside class="starlight-aside--note">                    -> :::note
 *
 * Usage: node scripts/fix-starlight-asides.js [--dry-run]
 */

import { readFileSync, writeFileSync } from 'node:fs'
import { execSync } from 'node:child_process'

const DRY_RUN = process.argv.includes('--dry-run')

function findContentFiles() {
  const result = execSync(
    'find sites/*/src/content/docs -name "*.md" -o -name "*.mdx"',
    { encoding: 'utf-8', cwd: process.cwd() }
  )
  return result.trim().split('\n').filter(Boolean)
}

function convertAsides(content) {
  let changed = false
  let count = 0

  // Pattern: <aside class="starlight-aside starlight-aside--{type}"> ... </aside>
  // or <aside class="starlight-aside--{type}"> ... </aside>
  // Note: some files have nested asides (unlikely but handle gracefully by
  // processing from the inside out via non-greedy match on single asides).

  const asideRegex = /<aside\s+class="starlight-aside(?:\s+starlight-aside--(\w+))">\s*\n([\s\S]*?)\n\s*<\/aside>/g

  const newContent = content.replace(asideRegex, (match, type, body) => {
    const calloutType = type || 'note'
    count++
    changed = true

    // Clean up the body: remove leading/trailing blank lines
    const cleanBody = body.replace(/^\n+/, '').replace(/\n+$/, '')

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

  if (!content.includes('starlight-aside')) continue

  const { content: newContent, changed, count } = convertAsides(content)

  if (!changed) continue

  if (!DRY_RUN) {
    writeFileSync(file, newContent, 'utf-8')
  }

  totalFixed++
  totalAsides += count
  fixedFiles.push({ file, asides: count })
}

console.log(`\nStarlight aside conversion results:`)
console.log(`  Files with starlight-aside HTML: ${totalFixed}`)
console.log(`  Total aside blocks converted: ${totalAsides}`)
console.log(`  Dry run: ${DRY_RUN}`)

if (fixedFiles.length > 0) {
  console.log(`\nFixed files:`)
  for (const { file, asides } of fixedFiles) {
    console.log(`  ${file} (${asides} asides)`)
  }
}
