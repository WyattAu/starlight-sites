#!/usr/bin/env node
/**
 * fix-descriptions.js
 *
 * Regenerates templated/garbage meta descriptions from body content.
 * Targets: "Study notes and resources for ...", "Comprehensive educational
 * content coverage with definitions...", and other boilerplate patterns.
 *
 * Strategy: extract the first meaningful sentence from the body (skipping
 * headings, blank lines, and frontmatter), truncate to 120-160 chars at
 * a word boundary.
 *
 * Usage: node scripts/fix-descriptions.js [--dry-run]
 */

import { readFileSync, writeFileSync } from 'node:fs'
import { execSync } from 'node:child_process'

const DRY_RUN = process.argv.includes('--dry-run')
const MIN_DESC_LENGTH = 120
const MAX_DESC_LENGTH = 160

const BOILERPLATE_PATTERNS = [
  /^Study notes and resources for /i,
  /^Comprehensive educational content/i,
  /^This topic covers the essential/i,
  /^This topic covers the biological/i,
  /^Free study notes.*revision guide/i,
  /^.*description:\s*"/i,  // doubled description prefix
]

function isBoilerplate(desc) {
  return BOILERPLATE_PATTERNS.some(p => p.test(desc))
}

function findContentFiles() {
  const result = execSync(
    'find sites/*/src/content/docs -name "*.md" -o -name "*.mdx"',
    { encoding: 'utf-8', cwd: process.cwd() }
  )
  return result.trim().split('\n').filter(Boolean)
}

function extractDescription(content) {
  // Find end of frontmatter
  const fmEnd = content.indexOf('---', 3)
  if (fmEnd < 0) return null

  const body = content.slice(fmEnd + 3).trim()
  const lines = body.split('\n')

  // Find first non-heading, non-blank, non-frontmatter line
  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed) continue
    if (trimmed.startsWith('#')) continue
    if (trimmed.startsWith('```')) continue
    if (trimmed.startsWith('<')) continue
    if (trimmed.startsWith('**') && trimmed.endsWith('**')) continue
    if (trimmed.startsWith('|')) continue

    // Skip known boilerplate sections
    if (/^(Prerequisites|Learning Objectives|Study Approach|Overview|Key Concepts|Summary|Worked Examples|Common Pitfalls|Cross-References)/i.test(trimmed)) continue

    // This looks like a real sentence
    let desc = trimmed
      .replace(/\*\*/g, '')
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')  // strip markdown links
      .replace(/\$[^$]+\$/g, '')  // strip inline math
      .replace(/[|]/g, '')  // strip table pipes
      .trim()

    if (desc.length < 20) continue

    // Truncate to MAX_DESC_LENGTH at word boundary
    if (desc.length > MAX_DESC_LENGTH) {
      const truncated = desc.slice(0, MAX_DESC_LENGTH)
      const lastSpace = truncated.lastIndexOf(' ')
      desc = truncated.slice(0, lastSpace > 80 ? lastSpace : MAX_DESC_LENGTH)
    }

    // Ensure minimum length
    if (desc.length < MIN_DESC_LENGTH) {
      // Try to get the next line too
      continue
    }

    return desc
  }
  return null
}

const files = findContentFiles()
let fixed = 0
let skipped = 0
let noDesc = 0

for (const file of files) {
  const content = readFileSync(file, 'utf-8')

  // Check if file has description in frontmatter
  const descMatch = content.match(/^description:\s*"?([^"\n]+)"?\s*$/m)
  if (!descMatch) {
    noDesc++
    continue
  }

  const currentDesc = descMatch[1].trim()

  // Skip if description is already good (not boilerplate, correct length)
  if (!isBoilerplate(currentDesc) && currentDesc.length >= MIN_DESC_LENGTH) {
    skipped++
    continue
  }

  // Extract new description from body
  const newDesc = extractDescription(content)
  if (!newDesc || newDesc === currentDesc) {
    skipped++
    continue
  }

  // Replace the description in frontmatter
  const newContent = content.replace(
    descMatch[0],
    `description: "${newDesc.replace(/"/g, '\\"')}"`
  )

  if (!DRY_RUN) {
    writeFileSync(file, newContent, 'utf-8')
  }

  fixed++
}

console.log(`Description fix: ${fixed} files updated, ${skipped} already good, ${noDesc} missing desc (dry run: ${DRY_RUN})`)
