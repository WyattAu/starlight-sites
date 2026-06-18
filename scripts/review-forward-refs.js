#!/usr/bin/env node
/**
 * Forward reference review summary.
 *
 * Generates a summary of forward reference findings, grouped by site
 * and sorted by confidence (high-confidence findings first).
 *
 * Usage: node scripts/review-forward-refs.js [--json]
 */
const fs = require('node:fs')
const path = require('node:path')

const SITES_DIR = path.join(__dirname, '..', 'sites')

// High-confidence patterns (likely real forward references)
const HIGH_CONFIDENCE = [
  { pattern: /^[A-Z]$/, desc: 'Single uppercase variable' },
  { pattern: /^[A-Z][a-z]+$/, desc: 'Capitalized variable' },
  { pattern: /^[a-z][A-Z]$/, desc: 'CamelCase variable' },
  { pattern: /^[a-z]_[a-z]$/, desc: 'Snake_case variable' },
]

// Low-confidence patterns (likely false positives)
const LOW_CONFIDENCE_PATTERNS = [
  /^\$\\alpha/,
  /^\$\\beta/,
  /^\$\\gamma/,
  /^\$\\delta/,
  /^\$\\epsilon/,
  /^\$\\theta/,
  /^\$\\lambda/,
  /^\$\\mu/,
  /^\$\\sigma/,
  /^\$\\pi/,
  /^\$\\omega/,
  /^\$\\phi/,
  /^\$\\psi/,
  /^\$\\chi/,
  /^\$\\rho/,
  /^\$\\tau/,
  /^\$\\xi/,
  /^\$\\zeta/,
  /^\$\\eta/,
  /^\$\\kappa/,
  /^\$\\nu/,
]

function extractMathTerms(content) {
  const terms = []
  const regex = /\$([^$]+)\$/g
  let match
  while ((match = regex.exec(content)) !== null) {
    const term = match[1].trim()
    if (term.length < 2) continue
    if (/^\d+(\.\d+)?$/.test(term)) continue
    if (/^[+\-*/=<>]$/.test(term)) continue

    // Check confidence
    let confidence = 'medium'
    for (const lp of LOW_CONFIDENCE_PATTERNS) {
      if (lp.test(term)) {
        confidence = 'low'
        break
      }
    }
    for (const hp of HIGH_CONFIDENCE) {
      if (hp.pattern.test(term)) {
        confidence = 'high'
        break
      }
    }

    terms.push({ term, position: match.index, confidence })
  }
  return terms
}

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8')
  const relPath = path.relative(path.join(__dirname, '..'), filePath)

  // Remove code fences
  const contentWithoutFences = content.replace(/```[\s\S]*?```/g, '')
  const terms = extractMathTerms(contentWithoutFences)

  const highConf = terms.filter(t => t.confidence === 'high')
  const medConf = terms.filter(t => t.confidence === 'medium')
  const lowConf = terms.filter(t => t.confidence === 'low')

  return {
    file: relPath,
    total: terms.length,
    high: highConf.length,
    medium: medConf.length,
    low: lowConf.length,
    highTerms: highConf.map(t => t.term),
  }
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

// Collect results
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

const results = []
for (const file of files) {
  const result = checkFile(file)
  if (result.total > 0) {
    results.push(result)
  }
}

// Sort by high-confidence count (most urgent first)
results.sort((a, b) => b.high - a.high)

// Group by site
const bySite = {}
for (const result of results) {
  const siteMatch = result.file.match(/sites\/([^/]+)\//)
  const siteId = siteMatch ? siteMatch[1] : 'unknown'
  if (!bySite[siteId]) bySite[siteId] = []
  bySite[siteId].push(result)
}

// Output
const jsonMode = process.argv.includes('--json')

if (jsonMode) {
  console.log(JSON.stringify({ total: results.length, bySite }, null, 2))
} else {
  console.log(`=== Forward Reference Review Summary ===`)
  console.log(`Total files with math terms: ${results.length}\n`)

  // Summary by site
  console.log('--- By Site ---')
  for (const [site, siteResults] of Object.entries(bySite).sort((a, b) => b[1].length - a[1].length)) {
    const totalHigh = siteResults.reduce((sum, r) => sum + r.high, 0)
    console.log(`  ${site}: ${siteResults.length} files (${totalHigh} high-confidence)`)
  }
  console.log()

  // Top 20 files with high-confidence findings
  const withHigh = results.filter(r => r.high > 0)
  console.log(`--- Files with High-Confidence Findings (${withHigh.length}) ---`)
  for (const result of withHigh.slice(0, 20)) {
    console.log(`  ${result.file}`)
    console.log(`    High: ${result.high}, Medium: ${result.medium}, Low: ${result.low}`)
    console.log(`    Terms: ${result.highTerms.slice(0, 5).join(', ')}${result.highTerms.length > 5 ? '...' : ''}`)
  }
  if (withHigh.length > 20) {
    console.log(`  ... and ${withHigh.length - 20} more files`)
  }
  console.log()

  // Statistics
  const totalHigh = results.reduce((sum, r) => sum + r.high, 0)
  const totalMed = results.reduce((sum, r) => sum + r.medium, 0)
  const totalLow = results.reduce((sum, r) => sum + r.low, 0)
  console.log('--- Statistics ---')
  console.log(`  High confidence: ${totalHigh} terms (review recommended)`)
  console.log(`  Medium confidence: ${totalMed} terms (manual review needed)`)
  console.log(`  Low confidence: ${totalLow} terms (likely false positives)`)
  console.log(`  Total: ${totalHigh + totalMed + totalLow} terms`)
}
