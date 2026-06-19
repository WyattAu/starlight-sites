#!/usr/bin/env node
/**
 * Tier 2 content expansion prioritizer.
 *
 * Generates a prioritized list of Tier 2 files below their 80-line minimum,
 * sorted by deficit (most urgent first) and grouped by site.
 *
 * Usage: node scripts/prioritize-tier2.js [--json] [--site=alevel]
 */
const fs = require('node:fs')
const path = require('node:path')

const SITES_DIR = path.join(__dirname, '..', 'sites')
const MIN_LINES = 80

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
const jsonMode = args.includes('--json')
const siteFilter = args.find(a => a.startsWith('--site='))?.split('=')[1]

// Collect files
const files = []
const sites = fs.readdirSync(SITES_DIR).filter(f => {
  return (
    fs.statSync(path.join(SITES_DIR, f)).isDirectory() &&
    !['node_modules', '.astro', 'dist'].includes(f)
  )
})

for (const site of sites) {
  if (siteFilter && site !== siteFilter) continue
  const contentDir = path.join(SITES_DIR, site, 'src', 'content', 'docs')
  if (fs.existsSync(contentDir)) {
    files.push(...walkDir(contentDir))
  }
}

// Find Tier 2 files below minimum
const issues = []
for (const file of files) {
  const content = fs.readFileSync(file, 'utf8')
  const lineCount = countBodyLines(content)
  const siteId = getSiteId(file)

  // Skip Tier 1 (index files) and Tier 3 (advanced/depth directories)
  const basename = path.basename(file)
  const isIndex = basename === 'index.md' || basename === 'index.mdx'
  const relPath = path.relative(path.join(SITES_DIR, siteId, 'src', 'content', 'docs'), file)
  const isAdvanced =
    relPath.includes('advanced') ||
    relPath.includes('depth') ||
    relPath.includes('extension') ||
    relPath.includes('extra')

  if (isIndex || isAdvanced) continue

  if (lineCount < MIN_LINES) {
    const relPath = path.relative(path.join(__dirname, '..'), file)
    issues.push({
      file: relPath,
      site: siteId,
      lineCount,
      minLines: MIN_LINES,
      deficit: MIN_LINES - lineCount,
    })
  }
}

// Sort by deficit (most urgent first)
issues.sort((a, b) => b.deficit - a.deficit)

// Group by site
const bySite = {}
for (const issue of issues) {
  if (!bySite[issue.site]) bySite[issue.site] = []
  bySite[issue.site].push(issue)
}

// Output
if (jsonMode) {
  console.log(JSON.stringify({ total: issues.length, bySite }, null, 2))
} else {
  console.log(`=== Tier 2 Content Expansion Prioritization ===`)
  console.log(`Total Tier 2 files below minimum: ${issues.length}\n`)

  // Summary by site
  console.log('--- By Site ---')
  for (const [site, siteIssues] of Object.entries(bySite).sort(
    (a, b) => b[1].length - a[1].length,
  )) {
    const totalDeficit = siteIssues.reduce((sum, i) => sum + i.deficit, 0)
    console.log(`  ${site}: ${siteIssues.length} files (total deficit: ${totalDeficit} lines)`)
  }
  console.log()

  // Top 20 most urgent
  console.log('--- Top 20 Most Urgent ---')
  for (const issue of issues.slice(0, 20)) {
    console.log(`  ${issue.file}`)
    console.log(`    ${issue.lineCount}/${issue.minLines} lines (deficit: ${issue.deficit})`)
  }
  if (issues.length > 20) {
    console.log(`  ... and ${issues.length - 20} more files`)
  }
  console.log()

  // By subject area
  console.log('--- By Subject Area ---')
  const bySubject = {}
  for (const issue of issues) {
    const parts = issue.file.split('/')
    const subject = parts[2] // e.g., "alevel" in "sites/alevel/..."
    if (!bySubject[subject]) bySubject[subject] = 0
    bySubject[subject]++
  }
  for (const [subject, count] of Object.entries(bySubject).sort((a, b) => b[1] - a[1])) {
    console.log(`  ${subject}: ${count} files`)
  }
}
