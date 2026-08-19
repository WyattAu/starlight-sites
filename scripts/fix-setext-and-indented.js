#!/usr/bin/env node
/**
 * Surgical fix for MD003 (setext headings → ATX) and MD046 (indented code blocks → fenced).
 * Processes only the specific files and line numbers reported by markdownlint.
 */
const fs = require('node:fs')
const path = require('node:path')

const ROOT = path.join(__dirname, '..')

function fixSetextHeading(filePath, lineNum) {
  // lineNum is 1-based. A setext heading is:
  //   text on line N
  //   === or --- on line N+1
  const lines = fs.readFileSync(filePath, 'utf8').split('\n')
  const idx = lineNum - 1

  if (idx >= lines.length) return false

  // The heading is on line `idx` (0-based). Check if the underline is on the next line.
  const current = lines[idx].trim()
  const next = lines[idx + 1]?.trim()

  if (next === undefined) return false

  // Check if next line is a setext underline
  if (/^=+\s*$/.test(next)) {
    // H1 setext: replace with ATX
    lines[idx] = '# ' + current
    lines.splice(idx + 1, 1)
    fs.writeFileSync(filePath, lines.join('\n'))
    return true
  } else if (/^-+\s*$/.test(next)) {
    // H2 setext: replace with ATX
    lines[idx] = '## ' + current
    lines.splice(idx + 1, 1)
    fs.writeFileSync(filePath, lines.join('\n'))
    return true
  }

  return false
}

function fixIndentedCodeBlock(filePath, lineNum) {
  const lines = fs.readFileSync(filePath, 'utf8').split('\n')
  const idx = lineNum - 1

  if (idx >= lines.length) return false

  // Find the extent of the indented code block
  let start = idx
  let end = idx

  // Go backwards to find the start of the block
  while (start > 0 && lines[start - 1].trimStart().length > 0 && (lines[start - 1].length - lines[start - 1].trimStart().length) >= 4) {
    start--
  }

  // Go forwards to find the end of the block
  while (end + 1 < lines.length && lines[end + 1].trimStart().length > 0 && (lines[end + 1].length - lines[end + 1].trimStart().length) >= 4) {
    end++
  }

  if (end <= start) return false

  // Check: are these lines in a list context? If so, don't convert.
  // Simple heuristic: if any line before start is a list item, skip
  const beforeStart = lines[start - 1]?.trim() || ''
  if (/^[-*+]\s/.test(beforeStart) || /^\d+\.\s/.test(beforeStart)) return false

  // Convert: extract content (remove 4-space indent), wrap in ```
  const content = lines.slice(start, end + 1).map(l => l.slice(4))
  lines.splice(start, end - start + 1, '```', ...content, '```')
  fs.writeFileSync(filePath, lines.join('\n'))
  return true
}

// Parse the markdownlint output
const fixes = fs.readFileSync('/tmp/md_fixes.txt', 'utf8').split('\n').filter(Boolean)

// Group by file
const fileFixes = new Map()
for (const line of fixes) {
  // Format: path:line:error_rule
  const parts = line.split(':')
  const filePath = path.join(ROOT, parts.slice(0, -2).join(':').replace(/_/g, ' '))
  const lineNum = parseInt(parts[parts.length - 2])
  const rule = parts[parts.length - 1]?.split('_')[0] || ''

  if (!fileFixes.has(filePath)) fileFixes.set(filePath, [])
  fileFixes.get(filePath).push({ line: lineNum, rule })
}

let totalFixed = 0

for (const [filePath, fixes] of fileFixes) {
  // Sort fixes by line number descending so earlier fixes don't shift later ones
  fixes.sort((a, b) => b.line - a.line)

  for (const fix of fixes) {
    if (fix.rule === 'MD003') {
      if (fixSetextHeading(filePath, fix.line)) {
        totalFixed++
      }
    } else if (fix.rule === 'MD046') {
      if (fixIndentedCodeBlock(filePath, fix.line)) {
        totalFixed++
      }
    }
  }
}

console.log(`Fixed ${totalFixed}/50 issues across ${fileFixes.size} files`)
