#!/usr/bin/env node
/**
 * Fix duplicate descriptions.
 *
 * Finds files with duplicate descriptions and generates unique ones
 * based on the file's title and subject.
 *
 * Usage:
 *   node scripts/fix-duplicate-descriptions.js --dry-run    # Preview changes
 *   node scripts/fix-duplicate-descriptions.js --apply       # Apply changes
 */
const fs = require('node:fs')
const path = require('node:path')

const SITES_DIR = path.join(__dirname, '..', 'sites')

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

function generateUniqueDescription(title, filePath) {
  // Extract subject from file path
  const pathParts = filePath.split('/')
  const siteId = pathParts.find(p => ['alevel', 'ib', 'dse', 'university', 'qualifications', 'programming', 'infrastructure', 'languages', 'tools'].includes(p))
  
  // Extract subject from path (e.g., "biology", "chemistry", "maths")
  const contentIndex = pathParts.indexOf('content')
  const docsIndex = pathParts.indexOf('docs')
  const subject = contentIndex !== -1 && docsIndex !== -1 ? pathParts[docsIndex + 1] : 'general'

  // Extract type from filename (flashcards, practice, etc.)
  const filename = path.basename(filePath)
  let type = 'notes'
  if (filename.includes('flashcards')) type = 'flashcards'
  else if (filename.includes('practice')) type = 'practice problems'
  else if (filename.includes('diagnostic')) type = 'diagnostic tests'

  // Generate unique description
  const subjectTitle = subject.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
  const siteTitle = siteId ? siteId.toUpperCase() : 'General'
  
  return `${siteTitle} ${subjectTitle} ${type}: ${title}. Comprehensive study material with definitions, examples, and assessment tools.`
}

function getSiteId(filePath) {
  const match = filePath.match(/sites\/([^/]+)\/src\/content\/docs/)
  return match ? match[1] : 'unknown'
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

// Build description map
const descMap = new Map() // description -> [files]
for (const file of files) {
  const content = fs.readFileSync(file, 'utf8')
  const frontmatter = extractFrontmatter(content)
  if (!frontmatter) continue
  
  const desc = parseDescription(frontmatter)
  if (!desc) continue
  
  if (!descMap.has(desc)) {
    descMap.set(desc, [])
  }
  descMap.get(desc).push(file)
}

// Find duplicates and fix them
const fixes = []
for (const [desc, dupFiles] of descMap) {
  if (dupFiles.length <= 1) continue
  
  // Skip files that already have unique descriptions
  const filesToFix = dupFiles.filter(f => {
    const content = fs.readFileSync(f, 'utf8')
    const frontmatter = extractFrontmatter(content)
    const title = parseTitle(frontmatter)
    // Fix all duplicates except the first one
    return true
  })
  
  if (filesToFix.length === 0) continue
  
  // Fix all but the first file (keep original for the first)
  for (let i = 1; i < filesToFix.length; i++) {
    const file = filesToFix[i]
    const content = fs.readFileSync(file, 'utf8')
    const frontmatter = extractFrontmatter(content)
    const title = parseTitle(frontmatter) || 'Content'
    
    const newDesc = generateUniqueDescription(title, file)
    
    if (!dryRun) {
      const fixed = fixDescription(content, newDesc)
      fs.writeFileSync(file, fixed, 'utf8')
    }
    
    const relPath = path.relative(path.join(__dirname, '..'), file)
    fixes.push({
      file: relPath,
      oldDesc: desc.substring(0, 60) + '...',
      newDesc: newDesc,
    })
  }
}

// Report
console.log(`Results: ${fixes.length} descriptions ${dryRun ? 'would be fixed' : 'fixed'}\n`)

if (fixes.length > 0) {
  console.log('--- FIXED ---')
  for (const fix of fixes.slice(0, 20)) {
    console.log(`  ${fix.file}`)
    console.log(`    Old: ${fix.oldDesc}`)
    console.log(`    New: ${fix.newDesc}`)
    console.log()
  }
  if (fixes.length > 20) {
    console.log(`  ... and ${fixes.length - 20} more`)
  }
}
