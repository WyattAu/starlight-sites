#!/usr/bin/env node
/**
 * fix-titles.js
 *
 * Fixes META002: titles too short (<30 chars). Regenerates short titles
 * from the site name + page topic, ensuring minimum 30 characters.
 *
 * Usage: node scripts/fix-titles.js [--dry-run]
 */

import { readFileSync, writeFileSync } from 'node:fs'
import { execSync } from 'node:child_process'

const DRY_RUN = process.argv.includes('--dry-run')
const MIN_TITLE_LENGTH = 30

function findContentFiles() {
  const result = execSync(
    'find sites/*/src/content/docs -name "*.md" -o -name "*.mdx"',
    { encoding: 'utf-8', cwd: process.cwd() }
  )
  return result.trim().split('\n').filter(Boolean)
}

function fixTitle(content, filepath) {
  const titleMatch = content.match(/^title:\s*"?([^"\n]+)"?\s*$/m)
  if (!titleMatch) return { content, fixed: false }

  const title = titleMatch[1].trim().replace(/^"|"$/g, '')
  if (title.length >= MIN_TITLE_LENGTH) return { content, fixed: false }

  // Derive site name from filepath
  const siteSlug = filepath.split('/')[1]
  const siteNames = {
    'python': 'Python', 'java': 'Java', 'rust': 'Rust', 'cpp': 'C++',
    'go': 'Go', 'kotlin': 'Kotlin', 'typescript': 'TypeScript',
    'dart': 'Dart', 'swift': 'Swift', 'ruby': 'Ruby', 'haskell': 'Haskell',
    'elixir': 'Elixir', 'mathematics': 'Mathematics', 'physics': 'Physics',
    'chemistry': 'Chemistry', 'computer-science': 'Computer Science',
    'databases': 'Databases', 'linux': 'Linux', 'networking': 'Networking',
    'security': 'Security', 'tools': 'Tools', 'programming': 'Programming',
    'languages': 'Languages', 'ib': 'IB', 'alevel': 'A-Level',
    'gcse': 'GCSE', 'ap': 'AP', 'dse': 'DSE', 'sat': 'SAT',
    'highers': 'Highers', 'leaving-cert': 'Leaving Cert',
    'cbse': 'CBSE', 'hsc': 'HSC', 'gaokao': 'Gaokao',
    'machine-learning': 'Machine Learning', 'truenas': 'TrueNAS',
    'tuning': 'Tuning',
  }
  const siteName = siteNames[siteSlug] || siteSlug

  // Build a longer title
  let newTitle = title
  if (!title.toLowerCase().includes(siteName.toLowerCase())) {
    newTitle = `${title} | ${siteName}`
  }
  // Pad if still too short
  if (newTitle.length < MIN_TITLE_LENGTH) {
    newTitle = `${newTitle} - Wyatt's Notes`
  }
  // Truncate if too long
  if (newTitle.length > 70) {
    newTitle = newTitle.slice(0, 67) + '...'
  }

  const newContent = content.replace(titleMatch[0], `title: "${newTitle}"`)
  return { content: newContent, fixed: true, oldTitle: title, newTitle }
}

const files = findContentFiles()
let fixed = 0

for (const file of files) {
  const content = readFileSync(file, 'utf-8')
  const { content: newContent, fixed: wasFixed, oldTitle, newTitle } = fixTitle(content, file)

  if (!wasFixed) continue

  if (!DRY_RUN) {
    writeFileSync(file, newContent, 'utf-8')
  }

  fixed++
  if (fixed <= 10) {
    console.log(`  ${file}`)
    console.log(`    "${oldTitle}" -> "${newTitle}"`)
  }
}

console.log(`\nTitle fix: ${fixed} files updated (dry run: ${DRY_RUN})`)
