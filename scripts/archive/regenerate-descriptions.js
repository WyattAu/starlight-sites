#!/usr/bin/env node
/**
 * Regenerate templated descriptions
 *
 * Replaces generic boilerplate descriptions with unique, SEO-friendly text
 * based on the page title and content.
 */

const fs = require('fs')
const path = require('path')

const ROOT = '/home/wyatt/dev/src/github.com/WyattAu/starlight-sites'

// Description templates by pattern
const TEMPLATES = {
  // "Comprehensive diagnostics study notes for [site]..."
  diagnostic: (site, topic) => `Diagnostic test notes for ${site} ${topic} covering key concepts, worked examples, and practice problems for exam preparation.`,
  
  // "Comprehensive study notes for [topic]..."
  study: (topic) => `Study notes for ${topic} with worked examples, practice problems, and key concepts for exam preparation.`,
  
  // "This section covers [topic]..."
  section: (topic) => `This section covers ${topic.toLowerCase()} concepts, definitions, and applications with worked examples and practice problems.`,
  
  // Default fallback
  default: (title) => `${title} — comprehensive study notes with worked examples, practice problems, and key concepts for exam preparation.`,
}

function extractTitle(content) {
  const match = content.match(/^title:\s*["']?(.+?)["']?\s*$/m)
  if (!match) return null
  return match[1].replace(/\s*\|.*$/, '').replace(/\s*[-–—]\s*Wyatt's Notes.*$/, '').trim()
}

function extractSiteFromPath(filePath) {
  const rel = path.relative(path.join(ROOT, 'sites'), filePath)
  return rel.split(path.sep)[0]
}

function extractTopicFromTitle(title) {
  // Remove common prefixes
  return title
    .replace(/^Comprehensive\s+/i, '')
    .replace(/^Diagnostic\s+Test\s+Notes\s+for\s+/i, '')
    .replace(/^Study\s+Notes\s+for\s+/i, '')
    .replace(/^This\s+section\s+covers\s+/i, '')
    .trim()
}

function generateDescription(title, site, filePath) {
  if (!title) return null
  
  const topic = extractTopicFromTitle(title)
  
  // Check existing description pattern
  const descMatch = filePath.match(/content\/docs\/(.+)\//)
  const isDiagnostic = descMatch && descMatch[1].includes('diagnostic')
  const isIndex = path.basename(filePath).startsWith('index.')
  
  if (isDiagnostic) {
    return TEMPLATES.diagnostic(site, topic)
  } else if (isIndex) {
    return TEMPLATES.section(topic)
  } else {
    return TEMPLATES.study(topic)
  }
}

let fixed = 0
let skipped = 0

// Find all content files
function walk(dir) {
  const files = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      if (['node_modules', 'dist', '.astro', 'archive'].includes(entry.name)) continue
      files.push(...walk(full))
    } else if (/\.(md|mdx)$/.test(entry.name)) {
      files.push(full)
    }
  }
  return files
}

const allFiles = walk(path.join(ROOT, 'sites'))

for (const file of allFiles) {
  const content = fs.readFileSync(file, 'utf8')
  
  // Check if description is templated
  const descMatch = content.match(/^description:\s*["'](.+?)["']\s*$/m)
  if (!descMatch) continue
  
  const desc = descMatch[1]
  
  // Check if it matches templated patterns
  const isTemplated = 
    desc.startsWith('Comprehensive') ||
    desc.startsWith('This section covers') ||
    desc.includes('with worked examples, practice problems, and key concepts for exam preparation')
  
  if (!isTemplated) continue
  
  const title = extractTitle(content)
  if (!title) {
    skipped++
    continue
  }
  
  const site = extractSiteFromPath(file)
  const newDesc = generateDescription(title, site, file)
  
  if (!newDesc || newDesc === desc) {
    skipped++
    continue
  }
  
  // Replace description
  const newContent = content.replace(
    /^description:\s*["'](.+?)["']\s*$/m,
    `description: "${newDesc}"`
  )
  
  fs.writeFileSync(file, newContent)
  fixed++
}

console.log(`Regenerated ${fixed} templated descriptions`)
console.log(`Skipped ${skipped} pages (no title or already unique)`)
