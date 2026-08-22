#!/usr/bin/env node
/**
 * lint-capitalisation.js
 *
 * Regression lint: detects the mid-sentence capitalisation corruption
 * pattern ($G$Then without space). This pattern was fixed in P0-1 and
 * this lint prevents reintroduction.
 *
 * Exit code: 1 on any match (CI + pre-commit gate).
 * @ts-check
 */

import { execSync } from 'node:child_process'

const result = execSync(
  "grep -rn '\\$Then \\|\\$So \\|\\$And \\|\\$But ' sites/*/src/content/docs/ || true",
  { encoding: 'utf-8', cwd: process.cwd() }
)

const matches = result.trim().split('\n').filter(Boolean)

if (matches.length > 0) {
  console.error(`[lint-capitalisation] ${matches.length} corruption pattern(s) found:`)
  for (const match of matches.slice(0, 10)) {
    console.error(`  ${match}`)
  }
  if (matches.length > 10) {
    console.error(`  ... and ${matches.length - 10} more`)
  }
  process.exit(1)
}

console.log('[lint-capitalisation] OK: no corruption patterns found')
