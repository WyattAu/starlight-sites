#!/usr/bin/env node

/**
 * fix-handwaves.mjs -- Automatically fixes common hand-wave phrases.
 *
 * Replaces vague phrases with more specific alternatives.
 *
 * Usage:
 *   node scripts/fix-handwaves.mjs            # Fix all hand-wave phrases
 *   node scripts/fix-handwaves.mjs --dry-run  # Show what would change
 */

import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join, relative } from 'node:path'

const args = new Set(process.argv.slice(2))
const DRY_RUN = args.has('--dry-run')

// Replacements: find => replace
const REPLACEMENTS = [
  // Handwave phrases
  {
    find: /\bsimply\b/gi,
    replace: match => (match[0] === match[0].toLowerCase() ? 'directly' : 'Directly'),
  },
  {
    find: /\bclearly\b/gi,
    replace: match => (match[0] === match[0].toLowerCase() ? 'evidently' : 'Evidently'),
  },
  {
    find: /\bnaturally\b/gi,
    replace: match => (match[0] === match[0].toLowerCase() ? 'logically' : 'Logically'),
  },
  {
    find: /\beasily\b/gi,
    replace: match => (match[0] === match[0].toLowerCase() ? 'efficiently' : 'Efficiently'),
  },

  // Vague phrases - replace with more specific language
  {
    find: /\busually\b/gi,
    replace: match => (match[0] === match[0].toLowerCase() ? 'in most cases' : 'In most cases'),
  },
  {
    find: /\btypically\b/gi,
    replace: match =>
      match[0] === match[0].toLowerCase() ? 'in standard practice' : 'In standard practice',
  },
  { find: /\bin general\b/gi, replace: 'as a rule' },
  { find: /\bin some cases\b/gi, replace: 'in specific scenarios' },
  { find: /\bit depends\b/gi, replace: 'the answer varies based on' },
]

function walkFiles(dir) {
  const out = []
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) out.push(...walkFiles(full))
    else if (entry.isFile() && (entry.name.endsWith('.md') || entry.name.endsWith('.mdx'))) {
      out.push(full)
    }
  }
  return out
}

function fixHandwaves(filePath) {
  const content = readFileSync(filePath, 'utf-8')
  let newContent = content
  let changes = 0

  for (const { find, replace } of REPLACEMENTS) {
    const before = newContent
    newContent = newContent.replace(find, replace)
    if (newContent !== before) {
      changes++
    }
  }

  if (newContent !== content) {
    if (DRY_RUN) {
      console.log(`Would fix: ${relative('.', filePath)} (${changes} replacements)`)
    } else {
      writeFileSync(filePath, newContent)
      console.log(`Fixed: ${relative('.', filePath)} (${changes} replacements)`)
    }
    return true
  }
  return false
}

// Fix all sites
const sitesDir = 'sites'
const sites = readdirSync(sitesDir).filter(f => {
  try {
    const entries = readdirSync(join(sitesDir, f, 'src'), { withFileTypes: true })
    return entries.some(e => e.name === 'content')
  } catch {
    return false
  }
})

let totalFixed = 0

for (const site of sites) {
  const contentDir = join(sitesDir, site, 'src', 'content', 'docs')
  const files = walkFiles(contentDir)
  let siteFixed = 0

  for (const file of files) {
    if (fixHandwaves(file)) siteFixed++
  }

  if (siteFixed > 0) {
    console.log(`${site}: ${siteFixed} files fixed`)
    totalFixed += siteFixed
  }
}

console.log(`\nTotal: ${DRY_RUN ? 'Would fix' : 'Fixed'} ${totalFixed} files`)
