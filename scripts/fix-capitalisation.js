#!/usr/bin/env node
/**
 * fix-capitalisation.js
 *
 * Fixes mid-sentence capitalisation corruption: missing space after closing $
 * before Then/So/And/But. Pattern: $G$Then -> $G$ Then
 *
 * Usage: node scripts/fix-capitalisation.js [--dry-run]
 */

import { readFileSync, writeFileSync } from 'node:fs'
import { execSync } from 'node:child_process'

const DRY_RUN = process.argv.includes('--dry-run')

function findAffectedFiles() {
  const result = execSync(
    "grep -rl '\\$Then \\|\\$So \\|\\$And \\|\\$But ' sites/*/src/content/docs/",
    { encoding: 'utf-8', cwd: process.cwd() }
  )
  return result.trim().split('\n').filter(Boolean)
}

function fixCapitalisation(content) {
  // Fix: closing $ immediately followed by Then/So/And/But without space
  // Pattern: $\b(Then|So|And|But)\b -> $ \1
  const regex = /\$(Then|So|And|But)\b/g
  let count = 0
  const newContent = content.replace(regex, (match, word) => {
    count++
    return `$ ${word}`
  })
  return { content: newContent, count }
}

const files = findAffectedFiles()
let totalFixed = 0
let totalReplacements = 0

for (const file of files) {
  const content = readFileSync(file, 'utf-8')
  const { content: newContent, count } = fixCapitalisation(content)

  if (!count) continue

  if (!DRY_RUN) {
    writeFileSync(file, newContent, 'utf-8')
  }

  totalFixed++
  totalReplacements += count
}

console.log(`Capitalisation fix: ${totalReplacements} replacements across ${totalFixed} files (dry run: ${DRY_RUN})`)
