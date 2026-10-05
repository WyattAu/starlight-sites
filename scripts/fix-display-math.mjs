#!/usr/bin/env node
/**
 * fix-display-math.js — normalise display-math delimiters.
 *
 * remark-math (which Starlight uses) only recognises `$$` fences as display math
 * when the delimiters sit on their own lines. A one-line block such as
 *
 *     $$a = bq + r, \qquad 0 \le r < b.$$
 *
 * is parsed as *inline* math, so it renders glued into the surrounding prose
 * instead of as a centred display block. This script rewrites every such line to
 * the fenced form:
 *
 *     $$
 *     a = bq + r, \qquad 0 \le r < b.
 *     $$
 *
 * Fenced code blocks are skipped (a `$$` line inside a shell snippet is data,
 * not math), as are HTML comments (breadcrumb ld+json blobs embed raw text).
 *
 * Usage: node scripts/fix-display-math.js [--check] [globs...]
 */
import { globSync, readFileSync, writeFileSync } from 'node:fs'
import process from 'node:process'

const argv = process.argv.slice(2)
const check = argv.includes('--check')
const args = argv.filter(a => a !== '--check')

const targets =
  args.length > 0
    ? args.flatMap(g => globSync(g))
    : globSync('sites/*/src/content/docs/**/*.{md,mdx}').filter(f => /\.(md|mdx)$/.test(f))

/** Matches a line that is exactly one display-math span, with no nested `$$`. */
const ONE_LINE = /^(\s*)\$\$(.+?)\$\$\s*$/
/** A `$$`-only line — already a correct fence, used to detect unbalanced blocks. */
const FENCE_ONLY = /^\s*\$\$\s*$/

let changedFiles = 0
let changedBlocks = 0
const offenders = []

for (const file of targets) {
  const src = readFileSync(file, 'utf8')
  const lines = src.split('\n')
  let inFence = false
  let fenceMarker = ''
  let inComment = false
  const out = []
  let touched = false

  for (const line of lines) {
    // Track fenced code blocks (``` or ~~~) so we never rewrite inside them.
    const fence = line.match(/^\s*(```+|~~~+)/)
    if (fence) {
      if (!inFence) {
        inFence = true
        fenceMarker = fence[1][0]
      } else if (fence[1][0] === fenceMarker) {
        inFence = false
      }
      out.push(line)
      continue
    }
    if (inFence) {
      out.push(line)
      continue
    }

    // Track HTML comments so ld+json / template payloads are left alone.
    const opens = (line.match(/<!--/g) || []).length
    const closes = (line.match(/-->/g) || []).length
    const startsInside = inComment
    if (opens > 0) inComment = true

    if (!inComment && !startsInside) {
      const m = line.match(ONE_LINE)
      // Reject `$$a$$ ... $$` shapes: more than one `$$` on the line means it is
      // not a single self-contained display block. Also reject degenerate runs
      // like `$$$$`, whose "content" is only currency signs.
      const content = m ? m[2].trim() : ''
      if (m && content && !m[2].includes('$$') && !/^\$+$/.test(content)) {
        changedBlocks += 1
        touched = true
        out.push(`${m[1]}$$`, `${m[1]}${m[2].trim()}`, `${m[1]}$$`)
        if (closes > 0) inComment = false
        continue
      }
    }

    if (closes > 0) inComment = false
    out.push(line)
  }

  if (touched) {
    changedFiles += 1
    if (check) offenders.push(file)
    else writeFileSync(file, out.join('\n'))
  }
}

if (check) {
  if (offenders.length > 0) {
    console.error(
      `FAIL: ${changedBlocks} single-line $$ display block(s) in ${offenders.length} file(s).`,
    )
    for (const f of offenders.slice(0, 20)) console.error(`  ${f}`)
    if (offenders.length > 20) console.error(`  ... and ${offenders.length - 20} more`)
    console.error('Run: node scripts/fix-display-math.js')
    process.exit(1)
  }
  console.log(`OK: no single-line $$ display blocks (${targets.length} files scanned).`)
} else {
  console.log(`Rewrote ${changedBlocks} single-line $$ block(s) across ${changedFiles} file(s).`)
}
