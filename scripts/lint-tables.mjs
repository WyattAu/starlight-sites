#!/usr/bin/env node
/**
 * lint-tables.mjs — markdown table shape gate.
 *
 * A markdown table looks correct in source whether or not it renders as one.
 * Two distinct defects, with very different severity:
 *
 *   SEVERE   the delimiter row (`| --- | --- |`) does not have the same cell
 *            count as the header. GFM requires an exact match, so the block
 *            stops being a table and renders as literal pipe-delimited text.
 *
 *   ADVISORY a data row has a different cell count than the header. GFM pads
 *            the row at the end, so a row that is short by one does not merely
 *            gain an empty cell -- every value shifts a column to the left and
 *            lands under the wrong heading. Silent, and worse than looking
 *            broken.
 *
 * The severe case is repaired automatically, because a delimiter row carries
 * no content: resizing it to the header's width cannot lose information.
 * The advisory case is reported only. The repair needs to know *which* column
 * went missing, and that is the author's judgement -- see the note in
 * docs/content-gates.md about the corpus containing both rows that are short
 * at the front (a leading `(a)` label column the data rows omit) and rows that
 * are short at the back.
 *
 * Fenced code blocks are skipped, and a cell's cell count ignores escaped
 * pipes (`\|`) and pipes inside inline maths, since those do not split cells.
 *
 * Usage:
 *   node scripts/lint-tables.mjs           # repair delimiter rows, report the rest
 *   node scripts/lint-tables.mjs --check   # gate: fail on severe, report advisory
 *   node scripts/lint-tables.mjs <globs>... # scoped run
 */
import { globSync, readFileSync, writeFileSync } from 'node:fs'
import process from 'node:process'

const argv = process.argv.slice(2)
const check = argv.includes('--check')
const args = argv.filter(a => a !== '--check')

const targets =
  args.length > 0
    ? args.flatMap(g => globSync(g))
    : [
        ...globSync('sites/*/src/content/docs/**/*.md'),
        ...globSync('sites/*/src/content/docs/**/*.mdx'),
      ]

const FENCE = /^\s*(```|~~~)/
const DELIM = /^\s*\|?[\s:|-]*-[\s:|-]*\|[\s:|-]*$/
const DELIM_CELL = /^:?-{1,}:?$/

/** Cell count, ignoring pipes that do not split cells. */
function cells(line) {
  let s = line.replace(/\\\|/g, '')
  s = s.replace(/\$[^$]*\$/g, m => m.replace(/\|/g, ''))
  s = s.replace(/`[^`]*`/g, m => m.replace(/\|/g, ''))
  s = s.trim()
  if (s.startsWith('|')) s = s.slice(1)
  // slice(0, -1) drops the trailing pipe. `slice(1)` would drop a leading
  // character that was just removed, leaving the pipe in place and inflating
  // every count by one.
  if (s.endsWith('|')) s = s.slice(0, -1)
  return s.split('|').length
}

/** Rebuild a delimiter row with exactly `width` cells. */
function resizeDelimiter(line, width) {
  const original = line.trim()
  const indent = line.slice(0, line.length - line.trimStart().length)
  const bare = original.replace(/^\|/, '').replace(/\|$/, '')
  const widths = bare.split('|').map(c => Math.max(3, c.trim().length))
  const out = []
  for (let i = 0; i < width; i++) out.push('-'.repeat(widths[i] ?? 3))
  return `${indent}| ${out.join(' | ')} |`
}

let severe = 0
let advisory = 0
let escapedRows = 0
const escapedFiles = new Set()
const severeFiles = new Set()
const advisoryFiles = new Set()
const samples = { severe: [], advisory: [], escaped: [] }

for (const file of targets) {
  const lines = readFileSync(file, 'utf8').split('\n')
  const out = [...lines]
  let inFence = false
  let inDisplay = false
  let header = null
  let headerLine = -1
  let touched = false

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    if (FENCE.test(line)) {
      inFence = !inFence
      header = null
      continue
    }
    if (inFence) continue

    const s = line.trim()

    // A `$$ ... $$` display block can contain what looks like a table -- the
    // `table-in-math` damage class does exactly that. Its `| --- | --- |` row
    // is not a table delimiter and must not be counted as one; the defect is
    // reported by scripts/fix-latex-braces.mjs instead.
    if (s === '$$') {
      inDisplay = !inDisplay
      header = null
      continue
    }
    if (inDisplay) continue

    const isRow = s.startsWith('|') && s.endsWith('|') && s.length > 1

    if (!isRow) {
      header = null
      continue
    }

    const width = cells(line)

    // An over-wide row is usually a table cell whose maths contains an
    // unescaped pipe: `$\ln|x|$` splits into three cells at the two pipes,
    // and a fragment beginning with `<` is then read by MDX as a JSX element,
    // which fails the whole site's build. Escaping pipes inside the maths
    // spans is the repair, and it is only applied when it makes the row match
    // the header exactly -- so a genuinely over-wide row is left alone.
    // The trigger is not `width > header`. `cells()` strips pipes inside maths
    // so that it counts *logical* cells, but MDX splits on *physical* pipes --
    // the two disagree exactly when this defect is present, which means the row
    // can look well-formed here while still failing the build. So the trigger is
    // an over-wide row, or any row whose maths contains a bare pipe.
    // Tested per span rather than on the whole line: `[^$]*` between two spans
    // can span a cell boundary, which would flag every multi-cell row.
    let hasBarePipeInMath = false
    for (const span of s.match(/\$[^$]*\$/g) ?? []) {
      if (span.includes('|')) {
        hasBarePipeInMath = true
        break
      }
    }
    if (header !== null && !DELIM.test(s) && (width > header || hasBarePipeInMath)) {
      const escaped = s.replace(/\$[^$]*\$/g, (m) => m.replace(/(?<!\\)\|/g, '\\\|'))
      if (cells(escaped) === header) {
        out[i] = escaped
        touched = true
        escapedRows++
        escapedFiles.add(file)
        if (samples.escaped.length < 12) {
          samples.escaped.push(
            `${file.replace('sites/', '').replace('/src/content/docs', '')}:${i + 1}  ${width} -> ${header}  ${s.slice(0, 52)}`,
          )
        }
      }
      continue
    }

    // Header row: the first row of a table, immediately followed by a
    // delimiter row.
    const next = lines[i + 1]
    if (header === null && next && DELIM.test(next) && !FENCE.test(next)) {
      header = width
      headerLine = i
      const delimWidth = cells(next)
      if (delimWidth !== width) {
        severe++
        severeFiles.add(file)
        touched = true
        out[i + 1] = resizeDelimiter(next, width)
        if (samples.severe.length < 12) {
          samples.severe.push(
            `${file.replace('sites/', '').replace('/src/content/docs', '')}:${i + 2}  header=${width} delimiter=${delimWidth}`,
          )
        }
      }
      continue
    }

    if (header !== null && !DELIM.test(s) && width !== header) {
      advisory++
      advisoryFiles.add(file)
      if (samples.advisory.length < 12) {
        samples.advisory.push(
          `${file.replace('sites/', '').replace('/src/content/docs', '')}:${i + 1}  header=${header} row=${width}  ${s.slice(0, 58)}`,
        )
      }
    }
  }

  if (touched && !check) writeFileSync(file, out.join('\n'))
}

const status = severe > 0 ? 'FAIL' : 'OK'
console.log(
  `${status}: ${severe} delimiter row(s) mismatched in ${severeFiles.size} file(s); ` +
    `${advisory} data row(s) misaligned in ${advisoryFiles.size} file(s). ` +
    `(${targets.length} files scanned)`,
)
for (const s of samples.severe) console.log(`  severe   ${s}`)
for (const s of samples.advisory) console.log(`  advisory ${s}`)
for (const s of samples.escaped) console.log(`  escaped  ${s}`)

if (check && severe > 0) {
  console.error('Run: node scripts/lint-tables.mjs')
  process.exit(1)
}
