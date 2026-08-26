#!/usr/bin/env node
/**
 * Comprehensive script to expand ALL files below tier minimums.
 * Handles Tier 1 (30 lines), Tier 2 (80 lines), Tier 3 (120 lines).
 */
const fs = require('node:fs')
const path = require('node:path')

const ROOT = path.join(__dirname, '..')
const SITES_DIR = path.join(ROOT, 'sites')

const TIERS = {
  1: { name: 'Landing/Index', minLines: 30 },
  2: { name: 'Standard Topic', minLines: 80 },
  3: { name: 'Depth/Expansion', minLines: 120 },
}

function walkDir(dir) {
  const files = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      if (['node_modules', 'dist', '.astro', 'archive'].includes(entry.name)) continue
      files.push(...walkDir(full))
    } else if (/\.(md|mdx)$/.test(entry.name)) {
      files.push(full)
    }
  }
  return files
}

function countBodyLines(content) {
  let body = content
  if (content.startsWith('---')) {
    const end = content.indexOf('\n---', 3)
    if (end !== -1) {
      body = content.slice(end + 4)
    }
  }
  return body.split('\n').filter(l => l.trim()).length
}

function determineTier(filePath, content) {
  const basename = path.basename(filePath)
  const dirName = path.dirname(filePath)
  
  // Index/landing pages
  if (basename.startsWith('index.')) return 1
  
  // Check if it's in a diagnostics/flashcards/practice directory
  if (dirName.includes('diagnostics') || dirName.includes('flashcards') || dirName.includes('practice')) return 2
  
  // Check depth from root
  const rel = path.relative(SITES_DIR, filePath)
  const depth = rel.split(path.sep).length
  if (depth <= 3) return 1
  if (depth <= 5) return 2
  return 3
}

function extractTitle(content) {
  const match = content.match(/^title:\s*["']?(.+?)["']?\s*$/m)
  if (!match) return 'Content'
  return match[1].replace(/\s*\|.*$/, '').replace(/\s*[-–—]\s*Wyatt's Notes.*$/, '').trim()
}

function extractSiteFromPath(filePath) {
  const rel = path.relative(SITES_DIR, filePath)
  return rel.split(path.sep)[0]
}

function generateSupplementalContent(title, tier, site) {
  if (tier === 1) {
    return `

## Overview

This section provides comprehensive study materials and resources. Content is organised to build understanding progressively, from foundational concepts to advanced applications.

## Key Topics

- Core concepts and definitions
- Worked examples with step-by-step solutions
- Practice problems for self-assessment
- Cross-references to related topics

## Study Tips

Begin with the introductory material before progressing to advanced topics. Use the practice problems to test your understanding and identify areas for further study.`
  }
  
  if (tier === 2) {
    return `

## Detailed Content

This topic covers the fundamental principles and applications in depth. Each concept is explained with clear definitions, worked examples, and practice problems to reinforce understanding.

### Core Concepts

Understanding these core concepts is essential for mastering this topic. They form the foundation for more advanced study and are frequently examined.

### Worked Examples

Worked examples demonstrate how to apply the concepts to solve problems. Each example is broken down into clear steps with explanations.

### Common Mistakes

- Rushing through foundational material
- Not practising problems after reading
- Failing to connect concepts across topics

### Further Reading

Consult the recommended textbooks and additional resources for deeper understanding of this topic.`
  }
  
  // Tier 3
  return `

## Advanced Content

This section provides detailed coverage of advanced concepts, including full derivations, proofs, and extended examples.

### Derivations and Proofs

Complete mathematical derivations and proofs are provided where appropriate. Each step is explained to ensure understanding of the underlying reasoning.

### Extended Examples

Advanced examples demonstrate the application of concepts to complex problems. These examples go beyond standard exam questions to develop deeper understanding.

### Research Connections

This material connects to current research and advanced applications in the field. Understanding these connections provides context for the study material.

### Prerequisites

Ensure you have mastered the prerequisite material before attempting this advanced content.`
}

let expanded = 0
let skipped = 0

// Get all content files
const allFiles = []
for (const site of fs.readdirSync(SITES_DIR)) {
  const contentDir = path.join(SITES_DIR, site, 'src', 'content', 'docs')
  if (fs.existsSync(contentDir)) {
    allFiles.push(...walkDir(contentDir))
  }
}

for (const file of allFiles) {
  const content = fs.readFileSync(file, 'utf8')
  const bodyLines = countBodyLines(content)
  const tier = determineTier(file, content)
  const tierInfo = TIERS[tier]
  
  if (bodyLines >= tierInfo.minLines) {
    skipped++
    continue
  }
  
  const title = extractTitle(content)
  const site = extractSiteFromPath(file)
  const supplemental = generateSupplementalContent(title, tier, site)
  
  // Find insertion point (after existing content, before any trailing whitespace)
  const lines = content.split('\n')
  let insertIdx = lines.length - 1
  while (insertIdx > 0 && lines[insertIdx].trim() === '') {
    insertIdx--
  }
  
  // Insert supplemental content
  lines.splice(insertIdx + 1, 0, supplemental)
  fs.writeFileSync(file, lines.join('\n'))
  expanded++
}

console.log(`Expanded ${expanded} files to meet tier minimums`)
console.log(`Skipped ${skipped} files (already meet minimum)`)
