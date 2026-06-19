#!/usr/bin/env node
/**
 * Batch description fixer.
 *
 * Finds content files missing descriptions or with descriptions < 120 chars,
 * then generates appropriate descriptions from the file's title and first paragraph.
 *
 * Usage:
 *   node scripts/fix-descriptions.js --dry-run    # Preview changes
 *   node scripts/fix-descriptions.js --apply       # Apply changes
 *   node scripts/fix-descriptions.js --apply --site university  # One site only
 */
const fs = require('node:fs')
const path = require('node:path')

const SITES_DIR = path.join(__dirname, '..', 'sites')

const MIN_DESC_LENGTH = 120
const MAX_DESC_LENGTH = 160

// Site-specific context for description generation
const SITE_CONTEXT = {
  dse: 'Hong Kong Diploma of Secondary Education (DSE)',
  ib: 'International Baccalaureate (IB) Diploma Programme',
  alevel: 'UK A-Level revision notes',
  university: 'university-level STEM',
  qualifications: 'qualifications including GCSE, AP, Scottish Highers, Irish LC',
  programming: 'C++ systems programming',
  infrastructure: 'server administration and databases',
  languages: 'comparative programming languages',
  tools: 'algorithms and data structures',
}

function extractFrontmatter(content) {
  if (!content.startsWith('---')) return { frontmatter: null, rest: content }
  const end = content.indexOf('\n---', 3)
  if (end === -1) return { frontmatter: null, rest: content }
  return {
    frontmatter: content.slice(3, end),
    rest: content.slice(end + 4),
  }
}

function parseTitle(frontmatter) {
  const match = frontmatter.match(/^title:\s*(.+)$/m)
  if (!match) return null
  let value = match[1].trim()
  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    value = value.slice(1, -1)
  }
  return value
}

function parseDescription(frontmatter) {
  const match = frontmatter.match(/^description:\s*(.+)$/m)
  if (!match) return null
  let value = match[1].trim()
  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    value = value.slice(1, -1)
  }
  return value
}

function extractFirstParagraph(body) {
  const lines = body.split('\n')
  let inParagraph = false
  const paragraphLines = []

  for (const line of lines) {
    const trimmed = line.trim()

    // Skip empty lines, headings, code fences, imports, math blocks, admonitions
    if (
      trimmed === '' ||
      trimmed.startsWith('#') ||
      trimmed.startsWith('```') ||
      trimmed.startsWith('import ') ||
      trimmed.startsWith('$$') ||
      trimmed.startsWith('$') ||
      trimmed.startsWith(':::')
    ) {
      if (inParagraph) break
      continue
    }

    // Skip HTML/JSX components
    if (trimmed.startsWith('<')) continue

    inParagraph = true
    paragraphLines.push(trimmed)
  }

  return paragraphLines
    .join(' ')
    .replace(/\$[^$]+\$/g, '') // Remove inline math
    .replace(/`[^`]+`/g, '') // Remove inline code
    .replace(/\*\*[^*]+\*\*/g, '') // Remove bold
    .replace(/\[[^\]]+\]\([^)]+\)/g, '') // Remove links
    .replace(/:::[a-z]+(?:\[[^\]]*\])?\s*/g, '') // Remove admonition markers
    .replace(/\s+/g, ' ')
    .trim()
}

function findNaturalBreak(text, targetLength) {
  // Find a natural sentence or clause boundary near the target length
  const candidates = []

  // Look for sentence endings (. ! ?) near target
  for (let i = targetLength - 20; i <= targetLength + 20; i++) {
    if (i >= 0 && i < text.length && /[.!?]/.test(text[i]) && text[i + 1] === ' ') {
      candidates.push({ pos: i + 1, priority: 1 })
    }
  }

  // Look for clause boundaries (; , --) near target
  for (let i = targetLength - 10; i <= targetLength + 10; i++) {
    if (i >= 0 && i < text.length && /[;,]/.test(text[i]) && text[i + 1] === ' ') {
      candidates.push({ pos: i + 1, priority: 2 })
    }
  }

  // Look for word boundaries near target
  for (let i = targetLength - 5; i <= targetLength + 5; i++) {
    if (i >= 0 && i < text.length && text[i] === ' ') {
      candidates.push({ pos: i, priority: 3 })
    }
  }

  // Sort by priority (sentence > clause > word) then by distance to target
  candidates.sort((a, b) => {
    if (a.priority !== b.priority) return a.priority - b.priority
    return Math.abs(a.pos - targetLength) - Math.abs(b.pos - targetLength)
  })

  return candidates.length > 0 ? candidates[0].pos : targetLength
}

function generateDescription(title, body, siteId) {
  const firstParagraph = extractFirstParagraph(body)
  const siteContext = SITE_CONTEXT[siteId] || 'educational content'

  // Strategy 1: Use first paragraph if it's descriptive enough and within range
  if (firstParagraph.length >= MIN_DESC_LENGTH && firstParagraph.length <= MAX_DESC_LENGTH) {
    return firstParagraph
  }

  // Strategy 2: Truncate first paragraph to fit at natural boundary
  if (firstParagraph.length > MAX_DESC_LENGTH) {
    const breakPos = findNaturalBreak(firstParagraph, MAX_DESC_LENGTH - 3)
    return (
      firstParagraph.slice(0, breakPos).trim() + (breakPos < firstParagraph.length ? '...' : '')
    )
  }

  // Strategy 3: Use title + specific subject context
  const subject = title
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim()

  // Extract key terms from title for better context
  const keyTerms = title
    .split(/[\s:–—-]+/)
    .filter(w => w.length > 3)
    .slice(0, 3)
    .join(' ')

  const variants = [
    `${title} -- ${siteContext} notes covering key definitions, core concepts, worked examples, and practice questions.`,
    `Comprehensive ${siteContext} notes on ${subject} with precise definitions, theorems, and common pitfalls.`,
    `${title}: detailed coverage of ${siteContext} concepts with exam-style questions and worked solutions.`,
    `${keyTerms} -- ${siteContext} study guide with definitions, examples, and practice problems.`,
  ]

  for (const variant of variants) {
    if (variant.length >= MIN_DESC_LENGTH && variant.length <= MAX_DESC_LENGTH) {
      return variant
    }
  }

  // Strategy 4: Force fit title-based description
  return `${title}: ${siteContext} notes with definitions and practice.`.slice(0, MAX_DESC_LENGTH)
}

function fixDescription(content, newDescription) {
  const lines = content.split('\n')
  let inserted = false
  let inMultilineDesc = false
  let descStartLine = -1

  for (let i = 0; i < lines.length; i++) {
    const trimmed = lines[i].trim()

    // Check for multi-line description (starts with 'description:' and continues on next lines)
    if (trimmed.startsWith('description:') && !trimmed.includes("'") && !trimmed.includes('"')) {
      // Multi-line description - find where it ends
      inMultilineDesc = true
      descStartLine = i
      // Replace the first line and remove continuation lines
      lines[i] = `description: '${newDescription}'`
      inserted = true
      continue
    }

    if (inMultilineDesc) {
      // Check if this line is a continuation of the multi-line description
      if (lines[i].startsWith('  ') || lines[i].startsWith('\t')) {
        lines[i] = null // Mark for removal
        continue
      } else {
        // End of multi-line description
        inMultilineDesc = false
      }
    }

    // If we find an existing single-line description, replace it
    if (trimmed.startsWith('description:') && (trimmed.includes("'") || trimmed.includes('"'))) {
      lines[i] = `description: '${newDescription}'`
      inserted = true
      break
    }

    // If we find the end of frontmatter and no description yet, insert before ---
    if (trimmed === '---' && i > 0 && !inserted) {
      lines.splice(i, 0, `description: '${newDescription}'`)
      inserted = true
      break
    }
  }

  // Remove null lines (from multi-line description cleanup)
  return lines.filter(l => l !== null).join('\n')
}

function getSiteId(filePath) {
  const match = filePath.match(/sites\/([^/]+)\//)
  return match ? match[1] : 'unknown'
}

function processFile(filePath, dryRun) {
  const content = fs.readFileSync(filePath, 'utf8')
  const { frontmatter, rest } = extractFrontmatter(content)

  if (!frontmatter) return null

  const title = parseTitle(frontmatter)
  const existingDesc = parseDescription(frontmatter)

  if (!title) return null

  // Check if description is missing or too short
  if (existingDesc && existingDesc.length >= MIN_DESC_LENGTH) {
    return null // Already good
  }

  const siteId = getSiteId(filePath)
  const newDesc = generateDescription(title, rest, siteId)

  if (newDesc.length < MIN_DESC_LENGTH || newDesc.length > MAX_DESC_LENGTH) {
    // Couldn't generate a good description
    return {
      file: filePath,
      status: 'skip',
      reason: `Generated desc ${newDesc.length} chars`,
      title,
    }
  }

  const fixed = fixDescription(content, newDesc)

  if (!dryRun) {
    fs.writeFileSync(filePath, fixed, 'utf8')
  }

  return {
    file: filePath,
    status: dryRun ? 'would-fix' : 'fixed',
    title,
    oldDesc: existingDesc || '(missing)',
    newDesc,
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

// Parse args
const args = process.argv.slice(2)
const dryRun = !args.includes('--apply')
const siteFilter =
  args.find(a => a.startsWith('--site='))?.split('=')[1] ||
  (args.includes('--site') ? args[args.indexOf('--site') + 1] : null)

if (dryRun) {
  console.log('=== DRY RUN === No files will be modified.\n')
} else {
  console.log('=== APPLY MODE === Files will be modified.\n')
}

// Find files
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

console.log(`Scanning ${files.length} files...\n`)

const results = []
for (const file of files) {
  const result = processFile(file, dryRun)
  if (result) results.push(result)
}

// Report
const fixed = results.filter(r => r.status === 'fixed' || r.status === 'would-fix')
const skipped = results.filter(r => r.status === 'skip')

console.log(
  `Results: ${fixed.length} ${dryRun ? 'would be fixed' : 'fixed'}, ${skipped.length} skipped\n`,
)

if (fixed.length > 0) {
  console.log('--- FIXED ---')
  for (const r of fixed.slice(0, 30)) {
    const relPath = path.relative(path.join(__dirname, '..'), r.file)
    console.log(`  ${relPath}`)
    console.log(`    Title: ${r.title}`)
    console.log(`    Old: ${r.oldDesc.slice(0, 60)}...`)
    console.log(`    New: ${r.newDesc}`)
    console.log()
  }
  if (fixed.length > 30) {
    console.log(`  ... and ${fixed.length - 30} more\n`)
  }
}

if (skipped.length > 0) {
  console.log("--- SKIPPED (couldn't auto-generate) ---")
  for (const r of skipped.slice(0, 10)) {
    const relPath = path.relative(path.join(__dirname, '..'), r.file)
    console.log(`  ${relPath}: ${r.reason}`)
  }
  if (skipped.length > 10) {
    console.log(`  ... and ${skipped.length - 10} more`)
  }
}
