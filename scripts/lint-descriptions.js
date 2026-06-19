#!/usr/bin/env node
// Description quality validation script.
//
// Checks that every content file has:
// - A `description` field in frontmatter
// - Description is 120-160 characters
// - Description is unique across the site
//
// Usage: node scripts/lint-descriptions.js [file ...]
//   With no arguments, walks all sites/*/src/content/docs/ directories.
//   With file arguments, checks only those files (lint-staged mode).
const fs = require('node:fs')
const path = require('node:path')

const SITES_DIR = path.join(__dirname, '..', 'sites')

function extractFrontmatter(content) {
  if (!content.startsWith('---')) return null
  const end = content.indexOf('\n---', 3)
  if (end === -1) return null
  return content.slice(3, end)
}

function parseDescription(frontmatter) {
  if (!frontmatter) return null
  const match = frontmatter.match(/^description:\s*(.+)$/m)
  if (!match) return null
  let value = match[1].trim()
  // Remove surrounding quotes
  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    value = value.slice(1, -1)
  }
  return value
}

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8')
  const frontmatter = extractFrontmatter(content)
  const relativePath = path.relative(path.join(__dirname, '..'), filePath)
  const issues = []

  if (!frontmatter) {
    issues.push({ file: relativePath, type: 'ERROR', message: 'Missing frontmatter' })
    return issues
  }

  const description = parseDescription(frontmatter)

  if (!description) {
    issues.push({ file: relativePath, type: 'ERROR', message: 'Missing description field' })
    return issues
  }

  if (description.length < 120) {
    issues.push({
      file: relativePath,
      type: 'WARNING',
      message: `Description too short (${description.length} chars, minimum 120)`,
    })
  }

  if (description.length > 160) {
    issues.push({
      file: relativePath,
      type: 'WARNING',
      message: `Description too long (${description.length} chars, maximum 160)`,
    })
  }

  // Check for handwave phrases
  if (/\b(obviously|clearly|intuitively|simply|easily)\b/i.test(description)) {
    issues.push({
      file: relativePath,
      type: 'WARNING',
      message: 'Description contains handwave phrase',
    })
  }

  return issues
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

// Determine files to check
const args = process.argv.slice(2).filter(a => !a.startsWith('-'))
let files
if (args.length > 0) {
  // Only check files inside sites/<site>/src/content/docs/. The previous
  // filter (`f.includes(path.join('sites'))`) matched any path containing
  // the substring "sites", which falsely included repo-level paths under
  // "starlight-sites/" (e.g. .docs/, .reports/). Use a path-separator-
  // aware check so only the real content directory is scanned.
  const sitesSegment = `${path.sep}sites${path.sep}`
  files = args
    .map(f => path.resolve(f))
    .filter(f => f.includes(sitesSegment) && (f.endsWith('.md') || f.endsWith('.mdx')))
    .filter(f => fs.existsSync(f))
} else {
  files = walkDir(SITES_DIR)
}

const allIssues = []
const descriptions = new Map() // description -> file path (for uniqueness check)

for (const file of files) {
  const issues = checkFile(file)
  allIssues.push(...issues)

  // Check uniqueness
  const content = fs.readFileSync(file, 'utf8')
  const frontmatter = extractFrontmatter(content)
  const desc = parseDescription(frontmatter)
  if (desc) {
    const relPath = path.relative(path.join(__dirname, '..'), file)
    if (descriptions.has(desc)) {
      allIssues.push({
        file: relPath,
        type: 'WARNING',
        message: `Duplicate description (also in ${descriptions.get(desc)})`,
      })
    } else {
      descriptions.set(desc, relPath)
    }
  }
}

// Report
const errors = allIssues.filter(i => i.type === 'ERROR')
const warnings = allIssues.filter(i => i.type === 'WARNING')

if (errors.length > 0 || warnings.length > 0) {
  console.log('=== Description Quality Report ===')
  if (errors.length > 0) {
    console.log()
    console.log('ERRORS:')
    for (const issue of errors) {
      console.log(`  ${issue.file}: ${issue.message}`)
    }
  }
  if (warnings.length > 0) {
    console.log()
    console.log('WARNINGS:')
    for (const issue of warnings.slice(0, 20)) {
      console.log(`  ${issue.file}: ${issue.message}`)
    }
    if (warnings.length > 20) {
      console.log(`  ... and ${warnings.length - 20} more warnings`)
    }
  }
  console.log()
  console.log(`Total: ${errors.length} error(s), ${warnings.length} warning(s)`)
} else {
  console.log(`All ${files.length} files have valid descriptions.`)
}

process.exit(errors.length > 0 ? 1 : 0)
