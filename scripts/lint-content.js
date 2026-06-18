#!/usr/bin/env node
/**
 * Content validation linter.
 *
 * Checks frontmatter presence, forbidden legacy imports, unconverted
 * admonitions, and thin content. Accepts optional explicit file paths as
 * arguments (used by lint-staged to check only staged files); with no
 * arguments it walks the entire sites/ tree (used by CI / --no-build).
 */
const fs = require('node:fs')
const path = require('node:path')

const SITES_DIR = path.join(__dirname, '..', 'sites')
const ISSUES = []

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8')
  const relativePath = path.relative(SITES_DIR, filePath)
  const ext = path.extname(filePath)

  if (ext === '.md' && content.includes('import { Tabs, TabItem }')) {
    ISSUES.push({ file: relativePath, type: 'ERROR', message: 'Raw import in .md file' })
  }

  if (content.includes("import Tabs from '@theme/Tabs'")) {
    ISSUES.push({ file: relativePath, type: 'ERROR', message: 'Old Docusaurus Tabs import' })
  }

  const lines = content.split('\n')

  // Check for unconverted :::warning admonitions
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes(':::warning') && !lines[i].includes(':::warning{')) {
      const hasCodeBlock = lines.slice(Math.max(0, i - 3), i + 4).some(l => l.includes('```'))
      if (!hasCodeBlock) {
        ISSUES.push({
          file: relativePath,
          type: 'WARNING',
          message: `Unconverted :::warning at line ${i + 1}`,
        })
        break
      }
    }
  }

  // Admonition validation: check for unclosed blocks and formatting issues
  const admonitionStack = []
  const validTypes = ['note', 'tip', 'info', 'caution', 'warning', 'danger']
  let inCodeFence = false

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()

    // Track code fences
    if (line.startsWith('```')) {
      inCodeFence = !inCodeFence
      continue
    }
    if (inCodeFence) continue

    // Check for opening admonition (must be on its own line or with title in brackets)
    const openMatch = line.match(/^:::([a-z]+)(?:\[.*?\])?\s*$/)
    if (openMatch) {
      const type = openMatch[1]
      if (validTypes.includes(type)) {
        admonitionStack.push({ type, line: i + 1 })
      }
      continue
    }

    // Check for single-line admonition (opens and closes on same line)
    const singleLineMatch = line.match(/^:::([a-z]+)(?:\[.*?\])?\s+.*$/)
    if (singleLineMatch && validTypes.includes(singleLineMatch[1])) {
      // This is a single-line admonition with content - valid in Starlight
      continue
    }

    // Check for content on same line as opening admonition (Starlight allows this for titles)
    const openInlineMatch = line.match(/^:::([a-z]+)\s+(.+)/)
    if (openInlineMatch && validTypes.includes(openInlineMatch[1])) {
      const content = openInlineMatch[2].trim()
      // Allow titles in brackets: :::info[Title]
      // Allow single-line admonitions with content: :::note Some text
      // Only flag if it looks like multi-line content that should be on next line
      if (!content.startsWith('[') && content.length > 100) {
        ISSUES.push({
          file: relativePath,
          type: 'WARNING',
          message: `Long content on same line as :::${openInlineMatch[1]} at line ${i + 1} (consider moving to next line)`,
        })
      }
    }

    // Check for closing admonition
    if (line === ':::') {
      if (admonitionStack.length > 0) {
        admonitionStack.pop()
      } else {
        // This might be a single-line admonition that was already processed
        // Don't flag it as an error
      }
    }
  }

  // Report unclosed admonitions
  for (const unclosed of admonitionStack) {
    ISSUES.push({
      file: relativePath,
      type: 'ERROR',
      message: `Unclosed :::${unclosed.type} opened at line ${unclosed.line}`,
    })
  }

  if (!content.trim().startsWith('---')) {
    ISSUES.push({ file: relativePath, type: 'ERROR', message: 'Missing frontmatter' })
  }

  const wordCount = content.split(/\s+/).length
  if (wordCount < 50) {
    ISSUES.push({
      file: relativePath,
      type: 'WARNING',
      message: `Thin content (${wordCount} words)`,
    })
  }
}

function walkDir(dir) {
  if (!fs.existsSync(dir)) return
  const files = fs.readdirSync(dir)
  for (const file of files) {
    const fullPath = path.join(dir, file)
    const stat = fs.statSync(fullPath)
    if (stat.isDirectory() && !['node_modules', '.astro', 'dist'].includes(file)) {
      walkDir(fullPath)
    } else if (stat.isFile() && (file.endsWith('.md') || file.endsWith('.mdx'))) {
      checkFile(fullPath)
    }
  }
}

// Explicit file arguments: check only those (lint-staged mode). Otherwise walk all.
const args = process.argv.slice(2).filter(a => !a.startsWith('-'))
if (args.length > 0) {
  for (const f of args) {
    const resolved = path.resolve(f)
    // Only check files under sites/ (content pages); skip root-level docs
    if (!resolved.includes(path.join(SITES_DIR))) continue
    if (fs.existsSync(resolved) && /\.[mdx]+$/.test(resolved)) checkFile(resolved)
  }
} else {
  walkDir(SITES_DIR)
}

const errors = ISSUES.filter(i => i.type === 'ERROR')
const warnings = ISSUES.filter(i => i.type === 'WARNING')

if (errors.length > 0) {
  for (const i of errors) {
    console.log(`  [ERROR] ${i.file}: ${i.message}`)
  }
}
if (warnings.length > 0) {
  for (const i of warnings.slice(0, 20)) {
    console.log(`  [WARN]  ${i.file}: ${i.message}`)
  }
  if (warnings.length > 20) {
    console.log(`  ... and ${warnings.length - 20} more warnings`)
  }
  console.log(`\n  ${warnings.length} warning(s) found.`)
}

process.exit(errors.length > 0 ? 1 : 0)
