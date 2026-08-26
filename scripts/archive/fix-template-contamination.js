#!/usr/bin/env node
/**
 * fix-template-contamination.js
 *
 * Removes auto-generated Summary sections that insert wrong-subject boilerplate.
 * Affected patterns:
 *   - "essential chemistry of [TOPIC]" in non-chemistry files
 *   - "biological principles of [TOPIC]" in non-biology files
 *   - "Git fundamentals" bullet points in non-git files
 *
 * Strategy: find the Summary section, check if it contains contamination
 * phrases, and remove the entire Summary section (from "## Summary" to next
 * "##" heading). The contaminated Summary sections are 100% auto-generated
 * and contain no legitimate content.
 *
 * Usage: node scripts/fix-template-contamination.js [--dry-run]
 */

import { readFileSync, writeFileSync } from 'node:fs'
import { globSync } from 'node:fs'
import { join, basename } from 'node:path'
import { execSync } from 'node:child_process'

const DRY_RUN = process.argv.includes('--dry-run')

// Contamination phrases that indicate wrong-subject boilerplate.
// Each entry: [regex, list of site dirs where this phrase is CONTEXTUALLY LEGITIMATE]
const CONTAMINATION_PATTERNS = [
  {
    phrase: 'essential chemistry of',
    legitimateDirs: ['chemistry', 'ap'],
    description: 'chemistry summary in non-chemistry file',
  },
  {
    phrase: 'biological principles of',
    legitimateDirs: ['biology', 'ap'],
    description: 'biology summary in non-biology file',
  },
  {
    phrase: 'key chemical principles',
    legitimateDirs: ['chemistry', 'ap'],
    description: 'chemistry bullet points in non-chemistry file',
  },
  {
    phrase: 'applications of chemistry',
    legitimateDirs: ['chemistry', 'ap'],
    description: 'chemistry applications in non-chemistry file',
  },
  {
    phrase: 'key biological principles',
    legitimateDirs: ['biology', 'ap'],
    description: 'biology bullet points in non-biology file',
  },
  {
    phrase: 'applications of biology',
    legitimateDirs: ['biology', 'ap'],
    description: 'biology applications in non-biology file',
  },
  {
    phrase: 'ethical considerations in biological research',
    legitimateDirs: ['biology', 'ap'],
    description: 'biology ethics in non-biology file',
  },
  {
    phrase: 'experimental methods and data analysis',
    legitimateDirs: ['biology', 'ap', 'physics', 'chemistry'],
    description: 'lab methodology in non-science file',
  },
]

// Find all content files
function findContentFiles() {
  const result = execSync(
    'find sites/*/src/content/docs -name "*.md" -o -name "*.mdx"',
    { encoding: 'utf-8', cwd: process.cwd() }
  )
  return result.trim().split('\n').filter(Boolean)
}

// Check if a file path is in a legitimate directory for the given phrase
function isLegitimateContext(filePath, legitimateDirs) {
  const parts = filePath.split('/')
  return legitimateDirs.some((dir) => parts.includes(dir))
}

// Extract the Summary section (from "## Summary" to next "##" heading)
function extractSummarySection(content) {
  const lines = content.split('\n')
  let summaryStart = -1
  let summaryEnd = -1

  for (let i = 0; i < lines.length; i++) {
    if (lines[i].match(/^## Summary\b/i)) {
      summaryStart = i
    } else if (summaryStart >= 0 && lines[i].match(/^## [^#]/)) {
      summaryEnd = i
      break
    }
  }

  if (summaryStart >= 0 && summaryEnd === -1) {
    summaryEnd = lines.length
  }

  return { summaryStart, summaryEnd, lines }
}

// Check if a Summary section contains contamination
function hasContamination(summaryText) {
  for (const pattern of CONTAMINATION_PATTERNS) {
    if (summaryText.toLowerCase().includes(pattern.phrase.toLowerCase())) {
      return pattern
    }
  }
  return null
}

// Main
const files = findContentFiles()
let contaminated = 0
let fixed = 0
let skipped = 0
const fixedFiles = []

for (const file of files) {
  const content = readFileSync(file, 'utf-8')
  const { summaryStart, summaryEnd, lines } = extractSummarySection(content)

  if (summaryStart < 0) continue

  const summaryText = lines.slice(summaryStart, summaryEnd).join('\n')
  const contamination = hasContamination(summaryText)

  if (!contamination) continue
  contaminated++

  // Check if file is in a legitimate context for this contamination
  if (isLegitimateContext(file, contamination.legitimateDirs)) {
    skipped++
    continue
  }

  // Remove the Summary section
  const newLines = [...lines.slice(0, summaryStart), ...lines.slice(summaryEnd)]
  const newContent = newLines.join('\n')

  if (!DRY_RUN) {
    writeFileSync(file, newContent, 'utf-8')
  }

  fixed++
  fixedFiles.push({
    file,
    contamination: contamination.description,
    removedLines: summaryEnd - summaryStart,
  })
}

console.log(`\nTemplate contamination fix results:`)
console.log(`  Files scanned: ${files.length}`)
console.log(`  Files with contamination phrases: ${contaminated}`)
console.log(`  Skipped (legitimate context): ${skipped}`)
console.log(`  Fixed: ${fixed}`)
console.log(`  Dry run: ${DRY_RUN}`)

if (fixedFiles.length > 0) {
  console.log(`\nFixed files:`)
  for (const { file, contamination, removedLines } of fixedFiles) {
    console.log(`  ${file} (${contamination}, removed ${removedLines} lines)`)
  }
}
