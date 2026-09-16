#!/usr/bin/env node
/**
 * Fix duplicate/auto-generated boilerplate descriptions.
 * Generates unique descriptions from the page title and path.
 */
const fs = require('node:fs')
const path = require('node:path')

const ROOT = path.join(__dirname, '..')

// Descriptions that appear 5+ times (auto-generated boilerplate)
const BOILERPLATE = new Set([
  'This section covers language learning, proficiency levels, and assessment frameworks. These materials support preparation for standardised language',
  'This section covers fundamental chemical principles, from atomic structure and bonding to reaction kinetics and equilibrium. Mastery of these concepts enables',
  'This section covers key physical principles, from classical mechanics to modern physics. Each topic builds on mathematical modelling to describe natural',
  'This section covers core concepts in biology, from molecular mechanisms to whole-organism physiology. Understanding these foundations is essential for tackling',
  'This section covers programming language concepts, from syntax and type systems to algorithms and design patterns. Understanding these foundations enables',
  'This section covers computational thinking, data structures, algorithms, and systems. Understanding these concepts is critical for both theory examinations and',
  'This section covers literary analysis, language techniques, and critical writing skills. Strong performance requires close reading, evidence-based',
  'This section covers microeconomic and macroeconomic theory, from market structures to fiscal policy. These models provide the analytical framework for',
  'This section covers computer networking fundamentals, from protocol layers to network security. These concepts underpin modern distributed systems and internet',
  'This section covers cybersecurity principles, network security, and defensive strategies. Understanding these topics is critical for protecting systems and',
  'This section covers essential mathematical techniques and theories. These foundations underpin quantitative reasoning across the sciences and are tested in',
  'This section provides study materials and resources for diagnostics. Browse the topics below to find the specific area you need to revise.',
])

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      if (['node_modules', 'dist', '.astro', 'archive'].includes(entry.name)) continue
      walk(full, out)
    } else if (/\.(md|mdx)$/.test(entry.name)) {
      out.push(full)
    }
  }
  return out
}

function extractTitle(content) {
  const match = content.match(/^title:\s*["']?(.+?)["']?\s*$/m)
  if (!match) return null
  return match[1].replace(/\s*\|.*$/, '').replace(/\s*[-–—]\s*Wyatt's Notes.*$/, '').trim()
}

function extractSiteAndTopic(file) {
  const rel = path.relative(path.join(ROOT, 'sites'), file)
  const parts = rel.split(path.sep)
  const site = parts[0]
  const slug = parts.slice(1, -1).join('/')
  const filename = path.basename(file, path.extname(file))
  return { site, slug, filename }
}

function generateDescription(title, site, slug, filename) {
  if (!title) return null

  const clean = title.replace(/['"]/g, '').trim()

  // For index pages, use the section context
  if (filename === 'index') {
    const section = slug || site
    const sectionName = section.split('/').pop().replace(/-/g, ' ')
    return `Comprehensive ${sectionName} study notes for ${site} with worked examples, practice problems, and key concepts for exam preparation.`
  }

  // For topic pages, use the title directly
  return `Study notes for ${clean} with worked examples, practice problems, and key concepts for ${site} exam preparation.`
}

let fixed = 0
let skipped = 0

for (const file of walk(path.join(ROOT, 'sites'))) {
  const content = fs.readFileSync(file, 'utf8')

  // Check if description is boilerplate
  const descMatch = content.match(/^description:\s*["']?(.+?)["']?\s*$/m)
  if (!descMatch) continue

  const desc = descMatch[1].trim()
  if (!BOILERPLATE.has(desc)) continue

  const title = extractTitle(content)
  const { site, slug, filename } = extractSiteAndTopic(file)
  const newDesc = generateDescription(title, site, slug, filename)

  if (!newDesc) {
    skipped++
    continue
  }

  const newContent = content.replace(
    /^description:.*$/m,
    `description: "${newDesc}"`
  )

  fs.writeFileSync(file, newContent)
  fixed++
}

console.log(`Fixed ${fixed} pages with boilerplate descriptions`)
console.log(`Skipped ${skipped} pages (no title found)`)
