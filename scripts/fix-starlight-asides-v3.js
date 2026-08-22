#!/usr/bin/env node
/**
 * fix-starlight-asides-v3.js
 *
 * Final pass: converts remaining <aside> blocks using a line-by-line parser
 * instead of regex, to handle malformed aria-label attributes with embedded quotes.
 *
 * Usage: node scripts/fix-starlight-asides-v3.js [--dry-run]
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

function extractCalloutType(line) {
  const match = line.match(/starlight-aside--(\w+)/)
  return match ? match[1] : 'note'
}

function hasAsideStart(line) {
  return line.includes('<aside') && line.includes('starlight-aside')
}

function hasAsideEnd(line) {
  return line.includes('</aside>')
}

function convertFile(content) {
  const lines = content.split('\n')
  const output = []
  let insideAside = false
  let calloutType = 'note'
  let asideContent = []
  let changed = false
  let count = 0
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    if (!insideAside && hasAsideStart(line)) {
      insideAside = true
      calloutType = extractCalloutType(line)
      asideContent = []
      changed = true
      count++
      i++
      continue
    }

    if (insideAside) {
      if (hasAsideEnd(line)) {
        insideAside = false
        const body = asideContent
          .join('\n')
          .replace(/<p\s+class="starlight-aside__title"[^>]*>[\s\S]*?<\/p>/g, '')
          .replace(/<svg[^>]*>[\s\S]*?<\/svg>/g, '')
          .trim()
        output.push(`:::${calloutType}`)
        output.push(body)
        output.push(':::')
        asideContent = []
        i++
        continue
      }
      asideContent.push(line)
      i++
      continue
    }

    output.push(line)
    i++
  }

  return { content: output.join('\n'), changed, count }
}

const files = findContentFiles()
let totalFixed = 0
let totalAsides = 0
const fixedFiles = []

for (const file of files) {
  const content = readFileSync(file, 'utf-8')
  const { content: newContent, changed, count } = convertFile(content)

  if (!changed) continue

  if (!DRY_RUN) {
    writeFileSync(file, newContent, 'utf-8')
  }

  totalFixed++
  totalAsides += count
  fixedFiles.push({ file, asides: count })
}

console.log(`\nStarlight aside v3 (final pass) results:`)
console.log(`  Files converted: ${totalFixed}`)
console.log(`  Total aside blocks converted: ${totalAsides}`)
console.log(`  Dry run: ${DRY_RUN}`)

if (fixedFiles.length > 0) {
  console.log(`\nFixed files:`)
  for (const { file, asides } of fixedFiles) {
    console.log(`  ${file} (${asides} asides)`)
  }
}
