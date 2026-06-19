#!/usr/bin/env node
// Forward reference detection script.
//
// Detects when a LaTeX math term ($X$) is used before it is defined in the same document.
// Definitions are identified by common patterns:
//   - "Let $X$ be..."
//   - "Define $X$ as..."
//   - "We define $X$..."
//   - "where $X$ is..."
//   - "The $X$ is defined as..."
//   - "**Definition**" sections
//
// This is a heuristic check. False positives are expected.
//
// Usage: node scripts/lint-forward-refs.js [file ...]
const fs = require('node:fs')
const path = require('node:path')

const SITES_DIR = path.join(__dirname, '..', 'sites')

// Patterns that indicate a term is being defined
const DEFINITION_PATTERNS = [
  /\b(?:let|define|where|设|令)\s+\$([^$]+)\$\s+(?:be|denote|represent|表示|为)/i,
  /\b(?:we define|we set|we denote)\s+\$([^$]+)\$/i,
  /The\s+\$([^$]+)\$\s+(?:is defined as|denotes?|represents?)/i,
  /\$\$[^$]*\\(?:text|mathrm)\{(?:Definition|定义)[^$]*\$\$/i,
]

function extractMathTerms(content) {
  const terms = []
  // Match inline math $...$ but not $$...$$
  const regex = /\$([^$]+)\$/g
  let match
  while ((match = regex.exec(content)) !== null) {
    const term = match[1].trim()
    // Skip very short terms, numbers, operators, and common LaTeX that aren't variable names
    if (term.length < 2) continue
    if (/^\d+(\.\d+)?$/.test(term)) continue
    if (/^[+\-*/=<>]$/.test(term)) continue
    if (
      /^\\(?:frac|sum|prod|int|partial|infty|alpha|beta|gamma|delta|epsilon|theta|lambda|mu|sigma|pi|omega|mathbb|mathrm|text|left|right|cdot|times|leq|geq|neq|approx|equiv|pm|mp)/.test(
        term,
      )
    )
      continue

    terms.push({ term, position: match.index, length: match[0].length })
  }
  return terms
}

function isDefinition(content, position) {
  // Check if the term at this position is part of a definition
  // Look at the surrounding 200 characters
  const start = Math.max(0, position - 200)
  const end = Math.min(content.length, position + 200)
  const context = content.slice(start, end)

  for (const pattern of DEFINITION_PATTERNS) {
    if (pattern.test(context)) return true
  }

  // Check if we're inside a "Definition" section
  const beforeContent = content.slice(0, position)
  const lastDefHeading = beforeContent.lastIndexOf('## Definition')
  const lastTheoremHeading = beforeContent.lastIndexOf('## Theorem')
  const lastLemmaHeading = beforeContent.lastIndexOf('## Lemma')

  if (lastDefHeading > lastTheoremHeading && lastDefHeading > lastLemmaHeading) {
    // Check if there's a heading between the Definition heading and this position
    const afterDef = content.slice(lastDefHeading)
    const nextHeading = afterDef.indexOf('\n## ')
    if (nextHeading === -1 || nextHeading > position - lastDefHeading) {
      return true // We're in a Definition section
    }
  }

  return false
}

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8')
  const relativePath = path.relative(path.join(__dirname, '..'), filePath)
  const issues = []

  // Remove code fences
  const contentWithoutFences = content.replace(/```[\s\S]*?```/g, '')

  const terms = extractMathTerms(contentWithoutFences)

  // Track which terms have been defined
  const defined = new Set()
  // Terms used before any definition section are considered forward refs
  const reachedDefinitionSection = false

  for (const { term, position } of terms) {
    // Normalize the term for comparison
    const normalized = term.replace(/\s+/g, ' ').toLowerCase()

    if (isDefinition(contentWithoutFences, position)) {
      defined.add(normalized)
      continue
    }

    // Check if this is a usage of an already-defined term
    if (defined.has(normalized)) continue

    // Check if this looks like a variable/symbol name (single letter or short identifier)
    const isVariable =
      /^[A-Za-z](?:_\\?[a-zA-Z0-9])?$/.test(term) || /^[A-Z](?:_[a-z]+)?$/.test(term)

    if (isVariable && !reachedDefinitionSection) {
      // This is a variable used before any definition section
      const lineNum = contentWithoutFences.slice(0, position).split('\n').length
      issues.push({
        file: relativePath,
        line: lineNum,
        term: `$${term}$`,
        type: 'WARNING',
        message: `Term $${term}$ used before any definition section`,
      })
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
  // Scope to files inside sites/<site>/src/content/docs/. A substring
  // check on "sites" falsely matches the repo root (starlight-sites/),
  // so use a path-separator-aware check.
  const sitesSegment = `${path.sep}sites${path.sep}`
  files = args
    .map(f => path.resolve(f))
    .filter(f => f.includes(sitesSegment) && (f.endsWith('.md') || f.endsWith('.mdx')))
    .filter(f => fs.existsSync(f))
} else {
  files = walkDir(SITES_DIR)
}

const allIssues = []
for (const file of files) {
  allIssues.push(...checkFile(file))
}

// Report
if (allIssues.length > 0) {
  console.log('=== Forward Reference Detection Report ===')
  console.log(`Files scanned: ${files.length}`)
  console.log(`Potential forward references: ${allIssues.length}`)
  console.log()
  console.log('--- FINDINGS ---')
  const sorted = allIssues.sort((a, b) => a.file.localeCompare(b.file) || a.line - b.line)
  for (const issue of sorted.slice(0, 30)) {
    console.log(`  ${issue.file}:${issue.line}: ${issue.message}`)
  }
  if (sorted.length > 30) {
    console.log(`  ... and ${sorted.length - 30} more`)
  }
  console.log()
  console.log('Note: Forward reference detection is heuristic. Review findings manually.')
} else {
  console.log(`No forward references detected in ${files.length} files.`)
}

// Informational only -- always exits 0
process.exit(0)
