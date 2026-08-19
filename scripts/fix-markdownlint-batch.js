#!/usr/bin/env node
/**
 * Batch-fix remaining markdownlint violations: MD001 (heading increments),
 * MD003 (setext→ATX), MD046 (indented→fenced code blocks).
 *
 * Strategy:
 * - MD001: When a heading level skips (e.g., h1→h3), demote subsequent
 *   headings to fill the gap. For Starlight pages, the frontmatter title
 *   is h1, so content should start at h2.
 * - MD003: Convert setext headings (underlined with ---) to ATX (## heading).
 * - MD046: Convert indented code blocks to fenced ``` blocks.
 */
const fs = require('node:fs')
const path = require('node:path')
const ROOT = path.join(__dirname, '..')
const SITES_DIR = path.join(ROOT, 'sites')

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8')
  const lines = content.split('\n')
  let changed = false

  // MD003: Convert setext headings to ATX
  for (let i = 0; i < lines.length - 1; i++) {
    const line = lines[i].trimEnd()
    const underline = lines[i + 1]?.trimEnd()
    // Setext: text line followed by a line of only = or -
    if (underline && /^=+\s*$/.test(underline) && line.length > 0 && !line.startsWith('#') && !line.startsWith('```')) {
      lines[i] = '# ' + line
      lines.splice(i + 1, 1)
      changed = true
    } else if (underline && /^-+\s*$/.test(underline) && line.length > 0 && !line.startsWith('#') && !line.startsWith('```') && !line.startsWith('[') && !line.startsWith('---')) {
      lines[i] = '## ' + line
      lines.splice(i + 1, 1)
      changed = true
    }
  }

  // MD046: Convert indented code blocks to fenced
  // An indented code block: 4+ spaces of indentation, not in a list context.
  // We look for runs of indented lines and wrap them in ```.
  let i = 0
  const result = []
  while (i < lines.length) {
    const line = lines[i]
    const trimmed = line.trimStart()
    const indent = line.length - trimmed.length

    // Check if this is the start of an indented code block
    if (indent >= 4 && trimmed.length > 0 && !trimmed.startsWith('#') && !trimmed.startsWith('```') && !trimmed.startsWith('|')) {
      // Collect the indented block
      const block = []
      while (i < lines.length) {
        const l = lines[i]
        const t = l.trimStart()
        const ind = l.length - t.length
        if (ind >= 4 && t.length > 0) {
          block.push(l.slice(4)) // remove the 4-space indent
          i++
        } else {
          break
        }
      }
      if (block.length > 0) {
        result.push('```')
        result.push(...block)
        result.push('```')
        changed = true
        continue
      }
    }
    result.push(lines[i])
    i++
  }

  // MD001: Fix heading level skips
  // After processing, walk through headings and ensure each level is at most
  // one more than the previous heading level.
  const headingLines = []
  for (let j = 0; j < result.length; j++) {
    const m = result[j].match(/^(#{1,6})\s/)
    if (m) {
      headingLines.push({ index: j, level: m[1].length })
    }
  }

  if (headingLines.length > 1) {
    // Find the first heading level (usually h1 from frontmatter, or h2)
    let prevLevel = headingLines[0].level

    for (let k = 1; k < headingLines.length; k++) {
      const current = headingLines[k]
      if (current.level > prevLevel + 1) {
        // Skipped a level — demote current heading to prevLevel + 1
        const newLevel = prevLevel + 1
        const oldLine = result[current.index]
        result[current.index] = oldLine.replace(/^(#{1,6})(\s)/, '#'.repeat(newLevel) + '$2')
        changed = true
      }
      prevLevel = result[current.index].match(/^(#{1,6})\s/)?.[1].length || current.level
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, result.join('\n'))
  }
  return changed
}

function walk(dir) {
  let results = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === 'node_modules' || entry.name === 'dist' || entry.name === '.astro') continue
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) results = results.concat(walk(full))
    else if (/\.(md|mdx)$/.test(entry.name)) results.push(full)
  }
  return results
}

const files = process.argv.slice(2).filter(a => !a.startsWith('--'))
const targets = files.length > 0 ? files : walk(SITES_DIR)
let count = 0
for (const f of targets) {
  if (fixFile(f)) count++
}
console.log(`Fixed ${count}/${targets.length} files`)
