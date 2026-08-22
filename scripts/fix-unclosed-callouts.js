#!/usr/bin/env node
/**
 * fix-unclosed-callouts.js
 *
 * Fixes unclosed :::note/tip/caution blocks created by the aside conversion.
 * These are cases where the original <aside> wrapped hundreds of lines of
 * content (entire sections), not small callout snippets. The fix is to
 * unwrap them - remove the ::: wrapper and keep just the content.
 *
 * Usage: node scripts/fix-unclosed-callouts.js [--dry-run]
 */

import { readFileSync, writeFileSync } from 'node:fs'
import { execSync } from 'node:child_process'

const DRY_RUN = process.argv.includes('--dry-run')

function findProblemFiles() {
  const result = execSync(
    'node scripts/lint-content.js 2>&1 | grep "Unclosed" | sed "s/.*\\[ERROR\\] //; s/:.*//" | sort -u | sed "s|^|sites/|"',
    { encoding: 'utf-8', cwd: process.cwd() }
  )
  return result.trim().split('\n').filter(Boolean)
}

function fixUnclosedCallouts(content) {
  const lines = content.split('\n')
  const output = []
  let i = 0
  let fixed = 0

  while (i < lines.length) {
    const line = lines[i]
    const openMatch = line.match(/^:::(note|tip|caution|danger)\s*$/)
    if (openMatch) {
      let depth = 1
      let j = i + 1
      let hasClosing = false

      while (j < lines.length && depth > 0) {
        if (lines[j].match(/^:::(note|tip|caution|danger)/)) {
          depth++
        } else if (lines[j].match(/^:::\s*$/)) {
          depth--
          if (depth === 0) hasClosing = true
        }
        j++
      }

      if (!hasClosing) {
        fixed++
        i++
        continue
      }
    }
    output.push(lines[i])
    i++
  }

  return { content: output.join('\n'), fixed }
}

const files = findProblemFiles()
let totalFixed = 0

for (const file of files) {
  const content = readFileSync(file, 'utf-8')
  const { content: newContent, fixed } = fixUnclosedCallouts(content)

  if (!fixed) continue

  if (!DRY_RUN) {
    writeFileSync(file, newContent, 'utf-8')
  }

  totalFixed += fixed
  console.log('  ' + file + ' (unwrapped ' + fixed + ' callouts)')
}

console.log('\nUnclosed callout fix: ' + totalFixed + ' blocks unwrapped')
console.log('  Dry run: ' + DRY_RUN)
