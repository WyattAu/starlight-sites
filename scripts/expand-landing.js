#!/usr/bin/env node
/**
 * Landing page expander for Tier 1 index files.
 *
 * Expands index.md files that are below the 30-line minimum by adding
 * missing sections (overview, scope, navigation/cross-links).
 *
 * Usage:
 *   node scripts/expand-landing.js --dry-run    # Preview changes
 *   node scripts/expand-landing.js --apply       # Apply changes
 */
const fs = require('node:fs')
const path = require('node:path')

const SITES_DIR = path.join(__dirname, '..', 'sites')
const MIN_LINES = 30

// Site descriptions for generating content
const SITE_DESCRIPTIONS = {
  alevel: {
    title: 'A-Level',
    description: 'UK A-Level revision notes',
    subjects: [
      'biology',
      'chemistry',
      'computer-science',
      'economics',
      'english',
      'further-maths',
      'geography',
      'history',
      'maths',
      'physics',
      'psychology',
    ],
  },
  dse: {
    title: 'DSE',
    description: 'Hong Kong Diploma of Secondary Education (DSE) notes',
    subjects: [
      'biology',
      'chemistry',
      'computer-science',
      'economics',
      'english',
      'geography',
      'history',
      'maths',
      'physics',
    ],
  },
  ib: {
    title: 'IB',
    description: 'International Baccalaureate (IB) Diploma Programme notes',
    subjects: [
      'biology',
      'chemistry',
      'computer-science',
      'economics',
      'english',
      'maths',
      'physics',
    ],
  },
  university: {
    title: 'University',
    description: 'university-level STEM notes',
    subjects: ['chemistry', 'computer-science', 'mathematics', 'physics'],
  },
  qualifications: {
    title: 'Qualifications',
    description: 'GCSE, AP, Scottish Highers, Irish Leaving Certificate notes',
    subjects: ['ap', 'gcse', 'ilc', 'sat', 'scottish-highers'],
  },
  programming: {
    title: 'Programming',
    description: 'C++ systems programming notes',
    subjects: ['cpp'],
  },
  infrastructure: {
    title: 'Infrastructure',
    description: 'server administration and databases notes',
    subjects: ['databases', 'networking', 'security', 'storage'],
  },
  languages: {
    title: 'Languages',
    description: 'comparative programming languages notes',
    subjects: ['elixir', 'haskell', 'kotlin', 'python', 'ruby', 'rust', 'swift'],
  },
  tools: {
    title: 'Tools',
    description: 'algorithms and data structures notes',
    subjects: ['algorithms', 'data-structures'],
  },
}

function countBodyLines(content) {
  let body = content
  if (content.startsWith('---')) {
    const end = content.indexOf('\n---', 3)
    if (end !== -1) {
      body = content.slice(end + 4)
    }
  }

  const lines = body.split('\n')
  let count = 0
  for (const line of lines) {
    const trimmed = line.trim()
    if (trimmed === '' || trimmed.startsWith('<!--')) continue
    count++
  }
  return count
}

function getSiteId(filePath) {
  const match = filePath.match(/sites\/([^/]+)\/src\/content\/docs/)
  return match ? match[1] : 'unknown'
}

function getSubjectFromPath(filePath, siteId) {
  const relPath = path.relative(path.join(SITES_DIR, siteId, 'src', 'content', 'docs'), filePath)
  const parts = relPath.split(path.sep)
  if (parts.length > 1) {
    return parts[0] // First directory is the subject
  }
  return null
}

function expandLandingPage(filePath, siteId) {
  const content = fs.readFileSync(filePath, 'utf8')
  const lines = content.split('\n')

  // Find the end of frontmatter
  let frontmatterEnd = -1
  if (lines[0].trim() === '---') {
    for (let i = 1; i < lines.length; i++) {
      if (lines[i].trim() === '---') {
        frontmatterEnd = i
        break
      }
    }
  }

  if (frontmatterEnd === -1) return null

  const frontmatter = lines.slice(0, frontmatterEnd + 1).join('\n')
  const body = lines.slice(frontmatterEnd + 1).join('\n')

  // Check if body already has required sections
  const hasOverview =
    body.includes('## Overview') ||
    body.includes('## What') ||
    body.includes('## About') ||
    body.includes('## Introduction') ||
    (body.includes('These notes') && body.includes('cover'))
  const hasScope =
    body.includes('## Scope') ||
    body.includes('## Topics') ||
    body.includes('## Subjects') ||
    body.includes('## Contents') ||
    body.includes('## Key Topics')
  const hasNavigation =
    body.includes('## Navigation') ||
    body.includes('## Browse') ||
    body.includes('## How to') ||
    body.includes('## Getting Started')

  // Also check if the file already has enough content
  const bodyLineCount = countBodyLines(content)
  if (bodyLineCount >= MIN_LINES && hasOverview && hasScope) {
    return null // Already has enough content and sections
  }

  const siteInfo = SITE_DESCRIPTIONS[siteId]
  if (!siteInfo) return null

  const subject = getSubjectFromPath(filePath, siteId)
  const additions = []

  // Add overview if missing
  if (!hasOverview) {
    additions.push('')
    additions.push('## Overview')
    additions.push('')
    if (subject) {
      additions.push(
        `This section covers ${subject.replace(/-/g, ' ')} content for ${siteInfo.title} level students.`,
      )
    } else {
      additions.push(`${siteInfo.description}.`)
    }
    additions.push('')
  }

  // Add scope if missing
  if (!hasScope) {
    additions.push('## Scope')
    additions.push('')
    if (siteInfo.subjects.length > 0) {
      additions.push('Topics covered in this section:')
      additions.push('')
      for (const s of siteInfo.subjects.slice(0, 8)) {
        additions.push(`- ${s.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}`)
      }
      if (siteInfo.subjects.length > 8) {
        additions.push(`- And ${siteInfo.subjects.length - 8} more`)
      }
    } else {
      additions.push('See the navigation menu for available topics.')
    }
    additions.push('')
  }

  // Add navigation if missing
  if (!hasNavigation) {
    additions.push('## Navigation')
    additions.push('')
    additions.push(
      'Use the sidebar to browse topics, or start with the introductory pages linked from the sidebar.',
    )
    additions.push('')
  }

  // Insert additions before the last line or at the end
  const newBody = `${body.trimEnd()}\n${additions.join('\n')}`
  const newContent = `${frontmatter}\n${newBody}`

  return newContent
}

function walkDir(dir) {
  const files = []
  if (!fs.existsSync(dir)) return files
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory() && !['node_modules', '.astro', 'dist'].includes(entry.name)) {
      files.push(...walkDir(fullPath))
    } else if (entry.isFile() && (entry.name.endsWith('.md') || entry.name.endsWith('.mdx'))) {
      files.push(fullPath)
    }
  }
  return files
}

// Parse args
const args = process.argv.slice(2)
const dryRun = !args.includes('--apply')

if (dryRun) {
  console.log('=== DRY RUN === No files will be modified.\n')
} else {
  console.log('=== APPLY MODE === Files will be modified.\n')
}

// Find Tier 1 files below minimum
const files = []
const sites = fs.readdirSync(SITES_DIR).filter(f => {
  return (
    fs.statSync(path.join(SITES_DIR, f)).isDirectory() &&
    !['node_modules', '.astro', 'dist'].includes(f)
  )
})

for (const site of sites) {
  const contentDir = path.join(SITES_DIR, site, 'src', 'content', 'docs')
  if (fs.existsSync(contentDir)) {
    files.push(...walkDir(contentDir))
  }
}

console.log(`Scanning ${files.length} files...\n`)

const results = []
let belowMinCount = 0
let expandedCount = 0
for (const file of files) {
  const content = fs.readFileSync(file, 'utf8')
  const lineCount = countBodyLines(content)

  if (lineCount >= MIN_LINES) continue

  // Only expand Tier 1 files: index.md or top-level landing pages
  const basename = path.basename(file)
  const isIndex = basename === 'index.md' || basename === 'index.mdx'
  const relPath = path.relative(path.join(SITES_DIR, 'site', 'src', 'content', 'docs'), file)
  const depth = relPath.split(path.sep).length - 1
  const isTopLevel = depth <= 1 // Directly under subject directory

  if (!isIndex && !isTopLevel) continue

  belowMinCount++

  const siteId = getSiteId(file)
  const expanded = expandLandingPage(file, siteId)

  if (expanded) {
    expandedCount++
    if (!dryRun) {
      fs.writeFileSync(file, expanded, 'utf8')
    }
    results.push({
      file: path.relative(path.join(__dirname, '..'), file),
      oldLines: lineCount,
      newLines: countBodyLines(expanded),
      status: dryRun ? 'would-expand' : 'expanded',
    })
  }
}

console.log(`Files below minimum (Tier 1 only): ${belowMinCount}`)
console.log(`Expanded: ${expandedCount}`)
console.log(`Results: ${results.length} files ${dryRun ? 'would be expanded' : 'expanded'}\n`)

if (results.length > 0) {
  console.log('--- EXPANDED ---')
  for (const r of results) {
    console.log(`  ${r.file}: ${r.oldLines} -> ${r.newLines} lines`)
  }
}
