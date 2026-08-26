#!/usr/bin/env node
/**
 * fix-thin-stubs.js
 *
 * Removes or expands thin stub index pages that are 100% auto-generated
 * boilerplate with no educational content.
 *
 * Strategy:
 * - Files under 1KB with the boilerplate pattern: delete if parent has child
 *   pages, otherwise expand minimally.
 * - Files with title "Zh" or unexpanded acronyms: delete (i18n stubs).
 *
 * Usage: node scripts/fix-thin-stubs.js [--dry-run]
 */

import { readFileSync, writeFileSync, existsSync, readdirSync, unlinkSync } from 'node:fs'
import { execSync } from 'node:child_process'
import { dirname, basename } from 'node:path'

const DRY_RUN = process.argv.includes('--dry-run')

const BOILERPLATE_PATTERN = /This section provides study materials and resources for/i
const THIN_THRESHOLD = 1000 // bytes

function findThinStubs() {
  const result = execSync(
    'find sites/*/src/content/docs -name "index.md" -o -name "index.mdx"',
    { encoding: 'utf-8', cwd: process.cwd() }
  )
  return result.trim().split('\n').filter(Boolean)
}

function hasChildPages(filePath) {
  const dir = dirname(filePath)
  try {
    const children = readdirSync(dir)
    return children.some(
      (f) =>
        f !== basename(filePath) &&
        (f.endsWith('.md') || f.endsWith('.mdx'))
    )
  } catch {
    return false
  }
}

function isBoilerplate(content) {
  return BOILERPLATE_PATTERN.test(content)
}

function isBadTitle(content) {
  // Check frontmatter title for stubs
  const titleMatch = content.match(/^title:\s*["']?([^"'\n]+)["']?\s*$/m)
  if (!titleMatch) return false
  const title = titleMatch[1].trim()
  // Unexpanded acronyms or single-word stubs
  return title === 'Zh' || title === 'Oop' || title === 'Zfs' || title.length <= 2
}

const files = findThinStubs()
let deleted = 0
let expanded = 0
let skipped = 0
const deletedFiles = []
const expandedFiles = []

for (const file of files) {
  const content = readFileSync(file, 'utf-8')
  const size = Buffer.byteLength(content, 'utf-8')

  // Only process files under threshold
  if (size > THIN_THRESHOLD) {
    skipped++
    continue
  }

  const isStub = isBoilerplate(content) || isBadTitle(content)

  if (!isStub) {
    skipped++
    continue
  }

  // If the directory has child pages, this index is redundant
  if (hasChildPages(file)) {
    if (!DRY_RUN) {
      unlinkSync(file)
    }
    deleted++
    deletedFiles.push(file)
  } else {
    // This is the only page in the directory - expand minimally
    const titleMatch = content.match(/^title:\s*["']?([^"'\n]+)["']?\s*$/m)
    const topic = titleMatch
      ? titleMatch[1].trim()
      : basename(dirname(file)).replace(/^\d+-/, '').replace(/-/g, ' ')

    const expandedContent = `---
title: "${topic}"
description: "Introduction to ${topic} concepts and fundamentals."
---

## Overview

${topic} is a fundamental area covered in this course.

## Key Concepts

This section provides an overview of the core ${topic} concepts.
Refer to the sub-pages for detailed coverage of each topic.

## Study Approach

Begin with the topic summaries, then work through the practice problems
to test your understanding.
`
    if (!DRY_RUN) {
      writeFileSync(file, expandedContent, 'utf-8')
    }
    expanded++
    expandedFiles.push(file)
  }
}

console.log(`\nThin stub fix results:`)
console.log(`  Index pages scanned: ${files.length}`)
console.log(`  Deleted (has child pages): ${deleted}`)
console.log(`  Expanded (only page in dir): ${expanded}`)
console.log(`  Skipped (already substantive): ${skipped}`)
console.log(`  Dry run: ${DRY_RUN}`)

if (deletedFiles.length > 0) {
  console.log(`\nDeleted files:`)
  for (const file of deletedFiles) {
    console.log(`  ${file}`)
  }
}

if (expandedFiles.length > 0) {
  console.log(`\nExpanded files:`)
  for (const file of expandedFiles) {
    console.log(`  ${file}`)
  }
}
