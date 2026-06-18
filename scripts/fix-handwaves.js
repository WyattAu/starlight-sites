#!/usr/bin/env node
/**
 * Hand-wave phrase auto-fixer.
 *
 * Replaces hand-wave phrases with more precise language.
 * Some phrases can be auto-fixed (e.g., "simply" -> removed).
 * Others need context-aware replacement or manual review.
 *
 * Usage:
 *   node scripts/fix-handwaves.js --dry-run    # Preview changes
 *   node scripts/fix-handwaves.js --apply       # Apply changes
 */
const fs = require('node:fs')
const path = require('node:path')

const SITES_DIR = path.join(__dirname, '..', 'sites')

// Auto-fixable replacements: phrase -> replacement (null = remove entirely)
const AUTO_FIXES = {
  // HANDWAVE phrases - can be removed or replaced
  'obviously': null,           // Remove - the surrounding text should justify
  'clearly': null,             // Remove - the surrounding text should justify
  'trivially': null,           // Remove
  'easily': null,              // Remove
  'simply': null,              // Remove
  'naturally': null,           // Remove
  'self-evident': null,        // Remove
  'goes without saying': null, // Remove
  'it is easy to see': null,   // Remove
  'it is straightforward': null, // Remove

  // VAGUE phrases - need context, but can often be simplified
  'it depends': 'this varies',  // Less vague
  'in some cases': 'in specific scenarios',
  'in certain cases': 'in specific scenarios',
  'in general': 'generally',
  'usually': 'commonly',
  'typically': 'commonly',
  'most of the time': 'in most scenarios',
  'oftentimes': 'frequently',
  'under certain conditions': 'under specific conditions',
  'in many cases': 'in many scenarios',

  // HEDGE phrases - should present the argument
  'it can be shown that': '',  // Remove - should be shown, not claimed
  'it can be easily shown that': '',
  'it can be readily shown that': '',
  'one can show': '',
  'one can prove': '',
  'one can demonstrate': '',
  'one can verify': '',
  'the proof is left as an exercise': '',  // Should provide proof
  'the details are left': 'the full details are',
  'the details are omitted': 'the full details are',
  'the details are skipped': 'the full details are',
}

// Build case-insensitive lookup
const FIX_MAP = new Map()
for (const [phrase, replacement] of Object.entries(AUTO_FIXES)) {
  FIX_MAP.set(phrase.toLowerCase(), { original: phrase, replacement })
}

function getCodeFenceRanges(lines) {
  const ranges = new Set()
  let inFence = false
  for (let i = 0; i < lines.length; i++) {
    const stripped = lines[i].trim()
    if (stripped.startsWith('```')) {
      inFence = !inFence
    } else if (inFence) {
      ranges.add(i)
    }
  }
  return ranges
}

function isInsideInlineCode(line, matchStart) {
  const before = line.slice(0, matchStart)
  return before.split('`').length % 2 === 0
}

function isInsideMath(line, matchStart) {
  const before = line.slice(0, matchStart)
  const dollarCount = (before.match(/\$/g) || []).length
  return dollarCount % 2 !== 0
}

function processFile(filePath, dryRun) {
  const content = fs.readFileSync(filePath, 'utf8')
  const lines = content.split('\n')
  const fenceRanges = getCodeFenceRanges(lines)
  const changes = []

  const newLines = lines.map((line, lineno) => {
    if (fenceRanges.has(lineno)) return line
    const stripped = line.trim()
    if (stripped.startsWith('```')) return line

    let newLine = line

    // Only check lines that might contain handwave phrases (quick filter)
    const lowerLine = line.toLowerCase()
    const hasHandwave = /[a-z]/.test(lowerLine) &&
      (lowerLine.includes('obviously') || lowerLine.includes('clearly') ||
       lowerLine.includes('trivially') || lowerLine.includes('easily') ||
       lowerLine.includes('simply') || lowerLine.includes('naturally') ||
       lowerLine.includes('typically') || lowerLine.includes('usually') ||
       lowerLine.includes('it depends') || lowerLine.includes('in general') ||
       lowerLine.includes('in some cases') || lowerLine.includes('in many cases') ||
       lowerLine.includes('it can be shown') || lowerLine.includes('one can show') ||
       lowerLine.includes('the proof is left') || lowerLine.includes('the details are'))

    if (!hasHandwave) return line

    for (const [phraseLower, { original, replacement }] of FIX_MAP) {
      if (!lowerLine.includes(phraseLower)) continue

      // Build regex that matches the phrase with word boundaries
      const regex = new RegExp(`\\b${original.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi')
      
      let match
      while ((match = regex.exec(line)) !== null) {
        // Skip if inside inline code or math
        if (isInsideInlineCode(line, match.index)) continue
        if (isInsideMath(line, match.index)) continue

        if (replacement === null || replacement === '') {
          // Remove the phrase
          newLine = newLine.replace(regex, '')
          changes.push({ line: lineno + 1, phrase: original, action: 'removed' })
        } else {
          // Replace the phrase
          newLine = newLine.replace(regex, replacement)
          changes.push({ line: lineno + 1, phrase: original, action: `replaced with "${replacement}"` })
        }
      }
    }

    // Clean up double spaces after removal
    newLine = newLine.replace(/  +/g, ' ')
    // Clean up trailing spaces before newline
    newLine = newLine.replace(/ $/, '')

    return newLine
  })

  if (changes.length > 0 && !dryRun) {
    fs.writeFileSync(filePath, newLines.join('\n'), 'utf8')
  }

  return changes
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

// Find files
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

console.log(`Scanning ${files.length} files...\n`)

const allChanges = []
let filesModified = 0

for (const file of files) {
  const changes = processFile(file, dryRun)
  if (changes.length > 0) {
    filesModified++
    const relPath = path.relative(path.join(__dirname, '..'), file)
    for (const change of changes) {
      allChanges.push({ file: relPath, ...change })
    }
  }
}

// Report
console.log(`Results: ${allChanges.length} phrases ${dryRun ? 'would be fixed' : 'fixed'} across ${filesModified} files\n`)

if (allChanges.length > 0) {
  // Group by action
  const byAction = {}
  for (const change of allChanges) {
    if (!byAction[change.action]) byAction[change.action] = []
    byAction[change.action].push(change)
  }

  for (const [action, changes] of Object.entries(byAction)) {
    console.log(`--- ${action.toUpperCase()} (${changes.length}) ---`)
    for (const change of changes.slice(0, 10)) {
      console.log(`  ${change.file}:${change.line}: '${change.phrase}'`)
    }
    if (changes.length > 10) {
      console.log(`  ... and ${changes.length - 10} more`)
    }
    console.log()
  }
}
