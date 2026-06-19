#!/usr/bin/env node
// Hand-wave phrase detector for technical documentation.
//
// Scans markdown files for phrases that violate CONTENT_STANDARD.md Section 6:
// - No hand-waving ("intuitively", "obviously", "clearly" without justification)
// - No vague qualifiers ("it depends", "in some cases" without specifying which cases)
// - No hedging language ("it can be shown that" -- show it)
//
// Only scans prose outside code fences, math blocks, and inline code.
//
// Usage: node scripts/lint-handwaves.js [file ...]
//   With no arguments, walks all sites/*/src/content/docs/ directories.
//   With file arguments, checks only those files (lint-staged mode).
const fs = require('node:fs')
const path = require('node:path')

const SITES_DIR = path.join(__dirname, '..', 'sites')

// Phrases that require justification context
const HANDWAVE_PHRASES = [
  [/\bintuitively\b/gi, 'intuitively'],
  [/\bobviously\b/gi, 'obviously'],
  [/\bclearly\b/gi, 'clearly'],
  [/\btrivially\b/gi, 'trivially'],
  [/\beasily\b/gi, 'easily (in argument context)'],
  [/\bsimply\b/gi, 'simply (in argument context)'],
  [/\bself.evident\b/gi, 'self-evident'],
  [/\bgoes without saying\b/gi, 'goes without saying'],
  [/\bit is easy to see\b/gi, 'it is easy to see'],
  [/\bit is straightforward\b/gi, 'it is straightforward'],
  [/\bit follows (?:easily|trivially|directly|immediately)\b/gi, 'it follows ...ly'],
  [/\bthe rest is (?:obvious|trivial|straightforward|easy)\b/gi, 'the rest is obvious/trivial'],
  [/\bas one would expect\b/gi, 'as one would expect'],
  [/\bnaturally\b/gi, 'naturally (in argument context)'],
]

// Vague qualifiers requiring specification
const VAGUE_PHRASES = [
  [/\bit depends\b/gi, 'it depends (specify on what)'],
  [/\bin some cases\b/gi, 'in some cases (specify which)'],
  [/\bin certain cases\b/gi, 'in certain cases (specify which)'],
  [/\bin general\b/gi, 'in general (specify exceptions)'],
  [/\busually\b/gi, 'usually (specify exceptions)'],
  [/\btypically\b/gi, 'typically (specify exceptions)'],
  [/\bmost of the time\b/gi, 'most of the time (specify exceptions)'],
  [/\boftentimes\b/gi, 'oftentimes (specify when)'],
  [/\bunder certain conditions\b/gi, 'under certain conditions (specify which)'],
  [/\bin many (?:cases|situations|scenarios)\b/gi, 'in many cases (specify)'],
]

// Hedging language that should present the argument instead
const HEDGE_PHRASES = [
  [/\bit can be shown (?:that)\b/gi, 'it can be shown that (show it)'],
  [/\bit can be (?:easily|readily) (?:shown|proved|demonstrated)\b/gi, 'it can be shown (show it)'],
  [/\bone can (?:show|prove|demonstrate|verify)\b/gi, 'one can show (show it)'],
  [
    /\bthe (?:proof|derivation|argument) is left as an exercise\b/gi,
    'proof left as exercise (provide it)',
  ],
  [/\bthe details are (?:left|omitted|skipped)\b/gi, 'details left out (provide them)'],
]

const ALL_PATTERNS = [
  { patterns: HANDWAVE_PHRASES, category: 'HANDWAVE' },
  { patterns: VAGUE_PHRASES, category: 'VAGUE' },
  { patterns: HEDGE_PHRASES, category: 'HEDGE' },
]

function getCodeFenceRanges(lines) {
  const ranges = new Set()
  let inFence = false
  for (let i = 0; i < lines.length; i++) {
    const stripped = lines[i].trim()
    if (stripped.startsWith('```')) {
      inFence = !inFence
    } else if (inFence) {
      ranges.add(i)
    }
  }
  return ranges
}

function isInsideInlineCode(line, matchStart) {
  const before = line.slice(0, matchStart)
  return before.split('`').length % 2 === 0
}

function isInsideMath(line, matchStart) {
  const before = line.slice(0, matchStart)
  // Check if inside inline math ($...$)
  const dollarCount = (before.match(/\$/g) || []).length
  if (dollarCount % 2 !== 0) return true
  // Check if inside display math ($$...$$)
  const doubleDollarCount = (before.match(/\$\$/g) || []).length
  if (doubleDollarCount % 2 !== 0) return true
  return false
}

function scanFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8')
  const lines = content.split('\n')
  const issues = []
  const fenceRanges = getCodeFenceRanges(lines)

  for (const { patterns, category } of ALL_PATTERNS) {
    for (const [regex, label] of patterns) {
      for (let lineno = 0; lineno < lines.length; lineno++) {
        if (fenceRanges.has(lineno)) continue
        const stripped = lines[lineno].trim()
        if (stripped.startsWith('```')) continue

        // Reset regex lastIndex for each line
        regex.lastIndex = 0
        let match
        while ((match = regex.exec(lines[lineno])) !== null) {
          if (isInsideInlineCode(lines[lineno], match.index)) continue
          if (isInsideMath(lines[lineno], match.index)) continue

          const relPath = path.relative(path.join(__dirname, '..'), filePath)
          issues.push({
            file: relPath,
            line: lineno + 1,
            category,
            phrase: match[0],
            label,
          })
        }
      }
    }
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
  files = walkDir(SITES_DIR)
}

const allIssues = []
for (const file of files) {
  allIssues.push(...scanFile(file))
}

// Report
const categoryCounts = {}
for (const issue of allIssues) {
  categoryCounts[issue.category] = (categoryCounts[issue.category] || 0) + 1
}

if (allIssues.length > 0) {
  console.log('=== Hand-Wave Detection Report ===')
  console.log(`Files scanned: ${files.length}`)
  console.log(`Total findings: ${allIssues.length}`)
  console.log()
  console.log('Category breakdown:')
  for (const [cat, count] of Object.entries(categoryCounts).sort()) {
    console.log(`  ${cat}: ${count}`)
  }
  console.log()

  // Show first 30 findings
  const sorted = allIssues.sort((a, b) => a.file.localeCompare(b.file) || a.line - b.line)
  console.log('--- FINDINGS ---')
  for (const issue of sorted.slice(0, 30)) {
    console.log(
      `  ${issue.file}:${issue.line}: [${issue.category}] '${issue.phrase}' -- ${issue.label}`,
    )
  }
  if (sorted.length > 30) {
    console.log(`  ... and ${sorted.length - 30} more`)
  }
  console.log()

  // Summary by file
  const fileCounts = {}
  for (const issue of allIssues) {
    fileCounts[issue.file] = (fileCounts[issue.file] || 0) + 1
  }
  console.log('--- BY FILE (top 10) ---')
  const sortedFiles = Object.entries(fileCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
  for (const [file, count] of sortedFiles) {
    console.log(`  ${file}: ${count} findings`)
  }
  console.log()
  console.log(`Total: ${allIssues.length} findings across ${Object.keys(fileCounts).length} files.`)
} else {
  console.log(`No hand-wave phrases found in ${files.length} files.`)
}

// Informational only -- always exits 0
process.exit(0)
