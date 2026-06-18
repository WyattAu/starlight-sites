#!/usr/bin/env node
/**
 * Depth expansion prioritizer.
 *
 * Generates a prioritized list of files below their tier minimums,
 * grouped by site and sorted by deficit (most urgent first).
 *
 * Usage: node scripts/prioritize-depth.js [--json]
 */
const fs = require('node:fs')
const path = require('node:path')

const SITES_DIR = path.join(__dirname, '..', 'sites')

const TIERS = {
  1: { name: 'Landing/Index', minLines: 30 },
  2: { name: 'Standard Topic', minLines: 80 },
  3: { name: 'Depth/Expansion', minLines: 120 },
  4: { name: 'University/Reference', minLines: 150 },
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

function determineTier(filePath, siteDir) {
  const relPath = path.relative(siteDir, filePath)
  const parts = relPath.split(path.sep)

  if (siteDir.includes('university')) {
    if (path.basename(filePath) === 'index.md' || path.basename(filePath) === 'index.mdx') return 1
    if (parts.length <= 2) return 2
    if (relPath.includes('advanced') || relPath.includes('proof') || relPath.includes('theorem')) return 4
    return 3
  }

  if (path.basename(filePath) === 'index.md' || path.basename(filePath) === 'index.mdx') return 1
  if (parts.length <= 2) return 1
  if (relPath.includes('advanced') || relPath.includes('depth') || relPath.includes('extension') || relPath.includes('extra')) return 3
  return 2
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

// Collect all files below minimum
const files = []
const sites = fs.readdirSync(SITES_DIR).filter(f => {
  return fs.statSync(path.join(SITES_DIR, f)).isDirectory() && !['node_modules', '.astro', 'dist'].includes(f)
})

for (const site of sites) {
  const contentDir = path.join(SITES_DIR, site, 'src', 'content', 'docs')
  if (fs.existsSync(contentDir)) {
    files.push(...walkDir(contentDir))
  }
}

const issues = []
for (const file of files) {
  const content = fs.readFileSync(file, 'utf8')
  const lineCount = countBodyLines(content)
  const siteId = getSiteId(file)
  const siteDir = path.join(SITES_DIR, siteId, 'src', 'content', 'docs')
  const tier = determineTier(file, siteDir)
  const tierInfo = TIERS[tier]

  if (lineCount < tierInfo.minLines) {
    const relPath = path.relative(path.join(__dirname, '..'), file)
    issues.push({
      file: relPath,
      site: siteId,
      tier,
      tierName: tierInfo.name,
      lineCount,
      minLines: tierInfo.minLines,
      deficit: tierInfo.minLines - lineCount,
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
const jsonMode = process.argv.includes('--json')

if (jsonMode) {
  console.log(JSON.stringify({ total: issues.length, bySite }, null, 2))
} else {
  console.log(`=== Depth Expansion Prioritization ===`)
  console.log(`Total files below minimum: ${issues.length}\n`)

  // Summary by site
  console.log('--- By Site ---')
  for (const [site, siteIssues] of Object.entries(bySite).sort((a, b) => b[1].length - a[1].length)) {
    const totalDeficit = siteIssues.reduce((sum, i) => sum + i.deficit, 0)
    console.log(`  ${site}: ${siteIssues.length} files (total deficit: ${totalDeficit} lines)`)
  }
  console.log()

  // Top 20 most urgent
  console.log('--- Top 20 Most Urgent ---')
  for (const issue of issues.slice(0, 20)) {
    console.log(`  [Tier ${issue.tier}] ${issue.file}`)
    console.log(`    ${issue.lineCount}/${issue.minLines} lines (deficit: ${issue.deficit})`)
  }
  console.log()

  // By tier
  console.log('--- By Tier ---')
  for (const [tier, tierInfo] of Object.entries(TIERS)) {
    const tierIssues = issues.filter(i => i.tier === parseInt(tier))
    if (tierIssues.length > 0) {
      const totalDeficit = tierIssues.reduce((sum, i) => sum + i.deficit, 0)
      console.log(`  Tier ${tier} (${tierInfo.name}): ${tierIssues.length} files, ${totalDeficit} total deficit lines`)
    }
  }
}
