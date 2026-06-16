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

  // Check for unconverted :::warning admonitions (only flag if no code block on the same line or nearby)
  const lines = content.split('\n')
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes(':::warning') && !lines[i].includes(':::warning{')) {
      // Check if this is a bare :::warning without proper Starlight syntax
      const hasCodeBlock = lines.slice(Math.max(0, i - 3), i + 4).some(l => l.includes('```'))
      if (!hasCodeBlock) {
        ISSUES.push({
          file: relativePath,
          type: 'WARNING',
          message: `Unconverted :::warning at line ${i + 1}`,
        })
        break // Only report once per file
      }
    }
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
    if (fs.existsSync(f) && /\.[mdx]+$/.test(f)) checkFile(path.resolve(f))
  }
} else {
  walkDir(SITES_DIR)
}

const errors = ISSUES.filter(i => i.type === 'ERROR')
const warnings = ISSUES.filter(i => i.type === 'WARNING')

if (errors.length > 0) {
  errors.forEach(_i => {})
}
if (warnings.length > 0) {
  warnings.slice(0, 20).forEach(_i => {})
  if (warnings.length > 20) {
    console.log(`  ... and ${warnings.length - 20} more warnings`)
  }
}

process.exit(errors.length > 0 ? 1 : 0)
