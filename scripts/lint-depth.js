#!/usr/bin/env node
// Content depth tier validation script.
//
// Checks that content pages meet minimum line counts for their tier.
// Tier is inferred from directory path:
//   - Tier 1 (landing/index): index.md files, top-level landing pages
//   - Tier 2 (standard topic): typical subject pages
//   - Tier 3 (depth/expansion): pages in "advanced" or "depth" directories
//   - Tier 4 (university/reference): pages in university site
//
// Usage: node scripts/lint-depth.js [file ...]
const fs = require('node:fs')
const path = require('node:path')

const SITES_DIR = path.join(__dirname, '..', 'sites')

const TIERS = {
  1: { name: 'Landing/Index', minLines: 30 },
  2: { name: 'Standard Topic', minLines: 80 },
  3: { name: 'Depth/Expansion', minLines: 120 },
  4: { name: 'University/Reference', minLines: 150 },
}

function determineTier(filePath, siteDir) {
  const relPath = path.relative(siteDir, filePath)
  const parts = relPath.split(path.sep)

  // Tier 4: university site (check first, then override for index files)
  if (siteDir.includes('university')) {
    // Index files in university are still tier 1
    if (path.basename(filePath) === 'index.md' || path.basename(filePath) === 'index.mdx') {
      return 1
    }
    // Top-level subject pages are tier 2
    if (parts.length <= 2) {
      return 2
    }
    // Advanced/depth pages are tier 4
    if (relPath.includes('advanced') || relPath.includes('proof') || relPath.includes('theorem')) {
      return 4
    }
    // Default university content is tier 3
    return 3
  }

  // Tier 1: index files or top-level landing pages
  if (path.basename(filePath) === 'index.md' || path.basename(filePath) === 'index.mdx') {
    return 1
  }
  if (parts.length <= 2) {
    // Directly under subject directory (e.g., maths/intro.md)
    return 1
  }

  // Tier 3: pages in "advanced", "depth", "extension" directories
  if (relPath.includes('advanced') || relPath.includes('depth') || relPath.includes('extension') || relPath.includes('extra')) {
    return 3
  }

  // Tier 2: everything else
  return 2
}

function countBodyLines(content) {
  // Strip frontmatter
  let body = content
  if (content.startsWith('---')) {
    const end = content.indexOf('\n---', 3)
    if (end !== -1) {
      body = content.slice(end + 4)
    }
  }

  const lines = body.split('\n')
  // Count non-empty, non-comment lines
  let count = 0
  for (const line of lines) {
    const trimmed = line.trim()
    if (trimmed === '' || trimmed.startsWith('<!--')) continue
    count++
  }
  return count
}

function checkFile(filePath, siteDir) {
  const content = fs.readFileSync(filePath, 'utf8')
  const relativePath = path.relative(path.join(__dirname, '..'), filePath)
  const tier = determineTier(filePath, siteDir)
  const tierInfo = TIERS[tier]
  const lineCount = countBodyLines(content)

  const issues = []

  // Skip flashcard and practice wrapper files - content is in data files
  const basename = path.basename(filePath)
  if (basename.match(/^flashcards?-/i) || basename.match(/^practice-/i)) {
    // These are thin wrappers that import data from JS files
    // Only check if they have substantial inline content (not just imports)
    const hasImports = content.includes('import ') && content.includes('from ')
    const hasComponent = content.includes('<FlashcardDeck') || content.includes('<PracticeProblem')
    if (hasImports && hasComponent) {
      // Wrapper file - skip depth check
      return issues
    }
  }

  if (lineCount < tierInfo.minLines) {
    issues.push({
      file: relativePath,
      tier,
      tierName: tierInfo.name,
      lineCount,
      minLines: tierInfo.minLines,
      deficit: tierInfo.minLines - lineCount,
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
  files = args
    .map(f => path.resolve(f))
    .filter(f => f.includes(path.join('sites')) && (f.endsWith('.md') || f.endsWith('.mdx')))
    .filter(f => fs.existsSync(f))
} else {
  // Walk all sites
  files = []
  const sites = fs.readdirSync(SITES_DIR).filter(f => {
    return fs.statSync(path.join(SITES_DIR, f)).isDirectory() && !['node_modules', '.astro', 'dist'].includes(f)
  })
  for (const site of sites) {
    const contentDir = path.join(SITES_DIR, site, 'src', 'content', 'docs')
    if (fs.existsSync(contentDir)) {
      files.push(...walkDir(contentDir))
    }
  }
}

const allIssues = []
for (const file of files) {
  // Determine site directory for this file
  const siteMatch = file.match(/sites\/([^/]+)\//)
  const siteDir = siteMatch ? path.join(SITES_DIR, siteMatch[1], 'src', 'content', 'docs') : SITES_DIR
  allIssues.push(...checkFile(file, siteDir))
}

// Report
if (allIssues.length > 0) {
  console.log('=== Content Depth Tier Report ===')
  console.log(`Files scanned: ${files.length}`)
  console.log(`Files below minimum: ${allIssues.length}`)
  console.log()

  // Group by tier
  const byTier = {}
  for (const issue of allIssues) {
    if (!byTier[issue.tier]) byTier[issue.tier] = []
    byTier[issue.tier].push(issue)
  }

  for (const [tier, issues] of Object.entries(byTier).sort((a, b) => a[0] - b[0])) {
    const tierInfo = TIERS[tier]
    console.log(`--- Tier ${tier}: ${tierInfo.name} (min ${tierInfo.minLines} lines) ---`)
    for (const issue of issues.slice(0, 10)) {
      console.log(`  ${issue.file}: ${issue.lineCount} lines (need ${issue.minLines}, deficit ${issue.deficit})`)
    }
    if (issues.length > 10) {
      console.log(`  ... and ${issues.length - 10} more`)
    }
    console.log()
  }

  console.log(`Total: ${allIssues.length} files below tier minimums.`)
} else {
  console.log(`All ${files.length} files meet their tier minimums.`)
}

// Informational only -- always exits 0
process.exit(0)
