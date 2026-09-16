#!/usr/bin/env node
/**
 * Fix pages with JSON-LD breadcrumb data in the description field.
 * Generates proper SEO descriptions from the page title.
 */
const fs = require('node:fs')
const path = require('node:path')

const ROOT = path.join(__dirname, '..')

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

function generateDescription(title, slug) {
  if (!title) return null
  // Clean up title
  const clean = title.replace(/['"]/g, '').trim()
  return `Comprehensive study notes for ${clean} with worked examples, practice problems, and key concepts for exam preparation.`
}

let fixed = 0
let skipped = 0

for (const file of walk(path.join(ROOT, 'sites'))) {
  const content = fs.readFileSync(file, 'utf8')

  // Check if description contains JSON-LD
  if (!/^description:.*itemListElement/m.test(content)) continue

  const title = extractTitle(content)
  if (!title) {
    skipped++
    continue
  }

  const newDesc = generateDescription(title)
  if (!newDesc) {
    skipped++
    continue
  }

  // Replace the description line
  const newContent = content.replace(
    /^description:.*$/m,
    `description: "${newDesc}"`
  )

  fs.writeFileSync(file, newContent)
  fixed++
}

console.log(`Fixed ${fixed} pages with JSON-LD descriptions`)
console.log(`Skipped ${skipped} pages (no title found)`)
