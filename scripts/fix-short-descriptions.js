#!/usr/bin/env node
/**
 * Fix short descriptions.
 *
 * Extends descriptions that are below the 120-character minimum
 * by adding subject-specific context.
 *
 * Usage:
 *   node scripts/fix-short-descriptions.js --dry-run    # Preview changes
 *   node scripts/fix-short-descriptions.js --apply       # Apply changes
 */
const fs = require('node:fs')
const path = require('node:path')

const SITES_DIR = path.join(__dirname, '..', 'sites')
const MIN_DESC_LENGTH = 120

function extractFrontmatter(content) {
  if (!content.startsWith('---')) return null
  const end = content.indexOf('\n---', 3)
  if (end === -1) return null
  return content.slice(3, end)
}

function parseTitle(frontmatter) {
  const match = frontmatter.match(/^title:\s*(.+)$/m)
  if (!match) return null
  let value = match[1].trim()
  if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
    value = value.slice(1, -1)
  }
  return value
}

function parseDescription(frontmatter) {
  const match = frontmatter.match(/^description:\s*(.+)$/m)
  if (!match) return null
  let value = match[1].trim()
  if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
    value = value.slice(1, -1)
  }
  return value
}

function fixDescription(content, newDescription) {
  const lines = content.split('\n')
  let inserted = false
  let inMultilineDesc = false

  for (let i = 0; i < lines.length; i++) {
    const trimmed = lines[i].trim()

    if (trimmed.startsWith('description:') && !trimmed.includes("'") && !trimmed.includes('"')) {
      inMultilineDesc = true
      lines[i] = `description: '${newDescription}'`
      inserted = true
      continue
    }

    if (inMultilineDesc) {
      if (lines[i].startsWith('  ') || lines[i].startsWith('\t')) {
        lines[i] = null
        continue
      } else {
        inMultilineDesc = false
      }
    }

    if (trimmed.startsWith('description:') && (trimmed.includes("'") || trimmed.includes('"'))) {
      lines[i] = `description: '${newDescription}'`
      inserted = true
      break
    }

    if (trimmed === '---' && i > 0 && !inserted) {
      lines.splice(i, 0, `description: '${newDescription}'`)
      inserted = true
      break
    }
  }

  return lines.filter(l => l !== null).join('\n')
}

function extendDescription(desc, title) {
  // Find a natural break point near the end
  const targetLength = MIN_DESC_LENGTH + 10 // Aim for 130 chars
  
  if (desc.length >= targetLength) return desc
  
  // Add subject-specific context
  const subject = title.toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
  
  // Try to extend with context
  const extensions = [
    ` Study guide for A-Level ${subject} with worked examples and practice questions.`,
    ` Comprehensive A-Level ${subject} revision notes with definitions and examples.`,
    ` Detailed A-Level ${subject} coverage including theory, examples, and assessment.`,
  ]
  
  for (const ext of extensions) {
    const newDesc = desc + ext
    if (newDesc.length >= MIN_DESC_LENGTH && newDesc.length <= 160) {
      return newDesc
    }
  }
  
  // If extensions don't work, try truncating and extending
  const breakPos = Math.min(desc.length, targetLength - 50)
  const truncated = desc.slice(0, breakPos).trim()
  
  for (const ext of extensions) {
    const newDesc = truncated + ext
    if (newDesc.length >= MIN_DESC_LENGTH && newDesc.length <= 160) {
      return newDesc
    }
  }
  
  // If still not enough, just add a period and the subject
  const simpleExt = ` ${subject} study guide.`
  const newDesc = desc + simpleExt
  if (newDesc.length >= MIN_DESC_LENGTH && newDesc.length <= 160) {
    return newDesc
  }
  
  return desc // Return original if we can't extend
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

if (dryRun) {
  console.log('=== DRY RUN === No files will be modified.\n')
} else {
  console.log('=== APPLY MODE === Files will be modified.\n')
}

// Find all content files
const files = []
const sites = fs.readdirSync(SITES_DIR).filter(f => {
  return fs.statSync(path.join(SITES_DIR, f)).isDirectory() && !['node_modules', '.astro', 'dist'].includes(f)
})

for (const site of sites) {
  const contentDir = path.join(SITES_DIR, site, 'src', 'content', 'docs')
  if (fs.existsSync(contentDir)) {
    files.push(...walkDir(contentDir))
  }
}

// Find and fix short descriptions
const fixes = []
for (const file of files) {
  const content = fs.readFileSync(file, 'utf8')
  const frontmatter = extractFrontmatter(content)
  if (!frontmatter) continue
  
  const desc = parseDescription(frontmatter)
  const title = parseTitle(frontmatter)
  
  if (!desc || !title) continue
  
  if (desc.length < MIN_DESC_LENGTH) {
    const newDesc = extendDescription(desc, title)
    
    if (newDesc !== desc && newDesc.length >= MIN_DESC_LENGTH) {
      if (!dryRun) {
        const fixed = fixDescription(content, newDesc)
        fs.writeFileSync(file, fixed, 'utf8')
      }
      
      const relPath = path.relative(path.join(__dirname, '..'), file)
      fixes.push({
        file: relPath,
        oldLength: desc.length,
        newLength: newDesc.length,
        oldDesc: desc,
        newDesc: newDesc,
      })
    }
  }
}

// Report
console.log(`Results: ${fixes.length} descriptions ${dryRun ? 'would be fixed' : 'fixed'}\n`)

if (fixes.length > 0) {
  console.log('--- FIXED ---')
  for (const fix of fixes.slice(0, 20)) {
    console.log(`  ${fix.file}`)
    console.log(`    ${fix.oldLength} -> ${fix.newLength} chars`)
    console.log(`    Old: ${fix.oldDesc}`)
    console.log(`    New: ${fix.newDesc}`)
    console.log()
  }
  if (fixes.length > 20) {
    console.log(`  ... and ${fixes.length - 20} more`)
  }
}
