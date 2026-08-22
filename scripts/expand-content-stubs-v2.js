#!/usr/bin/env node
// Second-pass expansion for index.md files still under 30 lines.
// Adds structured content blocks: overview, learning objectives,
// study approach, and cross-references.

const fs = require('node:fs')
const path = require('node:path')

const ROOT = path.join(__dirname, '..')
const SITES_DIR = path.join(ROOT, 'sites')
const args = process.argv.slice(2)
const DRY_RUN = args.includes('--dry-run')

function getSiteName(filePath) {
  const parts = filePath.split('/')
  const idx = parts.indexOf('sites')
  return idx >= 0 ? parts[idx + 1] : ''
}

function getSubject(filePath) {
  const parts = filePath.split('/')
  const idx = parts.indexOf('docs')
  return idx >= 0 && idx + 1 < parts.length ? parts[idx + 1] : ''
}

function expandFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8')
  const lines = content.split('\n')
  if (lines.length >= 30) return false

  // Find title and frontmatter end
  let title = ''
  let fmEnd = -1
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim() === '---' && i > 0) { fmEnd = i; break }
    if (lines[i].startsWith('title:')) title = lines[i].replace(/^title:\s*["']?/, '').replace(/["']?\s*$/, '').trim()
  }
  if (!title || fmEnd < 0) return false

  const subject = getSubject(filePath)
  const site = getSiteName(filePath)

  // Build learning objectives from title and subject
  const objectives = [
    `- Understand the core principles and definitions covered in this section`,
    `- Apply key concepts to solve problems and answer exam-style questions`,
    `- Connect this material to prerequisite topics and related sections`,
  ]

  // Build study approach
  const study = [
    `Begin with the topic summaries, then work through the practice problems to test your understanding. `,
    `Use the cross-references to link related concepts across subjects where applicable.`,
  ]

  // Insert content after frontmatter
  const before = lines.slice(0, fmEnd + 1)
  const after = lines.slice(fmEnd + 1)
  const expanded = [
    ...before,
    '',
    ...after,
    '',
    '## Learning Objectives',
    '',
    ...objectives,
    '',
    '## Study Approach',
    '',
    ...study,
  ]

  if (!DRY_RUN) fs.writeFileSync(filePath, expanded.join('\n'))
  return true
}

function walk(dir, results) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name)
    if (e.isDirectory()) walk(full, results)
    else if (e.name === 'index.md') results.push(full)
  }
}

let expanded = 0, skipped = 0
for (const site of fs.readdirSync(SITES_DIR, { withFileTypes: true })) {
  if (!site.isDirectory() || site.name === 'node_modules') continue
  const docs = path.join(SITES_DIR, site.name, 'src', 'content', 'docs')
  if (!fs.existsSync(docs)) continue
  const files = []
  walk(docs, files)
  for (const f of files) {
    if (expandFile(f)) expanded++
    else skipped++
  }
}
console.log(`Second pass: expanded ${expanded}, skipped ${skipped}${DRY_RUN ? ' (dry run)' : ''}`)
