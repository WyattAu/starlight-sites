#!/usr/bin/env node
/**
 * lint-tables-responsive.js -- flag content tables that will break a phone.
 *
 * At 390px a markdown table that is not inside a scroll container does not
 * scroll itself; it widens the whole document. The page's header, sidebar and
 * reading column then slide sideways together and the text is unreadable while
 * you are trying to read it. Users reported exactly this.
 *
 * The wrapper has to be in the markdown. Site CSS cannot add a container
 * around a table it never sees the boundary of -- by the time the browser holds
 * a `<table>`, the overflow has already propagated to the document. So the
 * content ships the wrapper, and this gate is what keeps it doing so.
 *
 * Scope: a table is only flagged when it would plausibly overflow, because a
 * two-column table of short symbols is fine on a phone and flagging it would
 * train people to ignore the gate.
 */

const fs = require('node:fs')
const path = require('node:path')

const REPO_ROOT = path.resolve(__dirname, '..')

/** Wrapper spellings the sites' CSS treats as horizontal scroll containers. */
const WRAPPER_OPEN =
  /<div[^>]*class="[^"]*\b(table-wrap|table-scroll-wrapper|table-overflow|overflow-x)\b[^"]*"[^>]*>/i

/*
 * Every unwrapped table is flagged, and deliberately so.
 *
 * The tempting version of this gate measures the markdown -- count the columns,
 * look for long cells, exempt anything narrow. It was written that way first
 * and it is wrong, for a reason specific to these notes: a cell's rendered width
 * is not its character count. `$x^{\frac{1}{2}}$` is eleven characters in the
 * source and a stack of fractions in KaTeX, so a two-column table of formulas --
 * exactly the table these pages are full of, comparing operators, listing
 * theorem hypotheses -- overflows a 390px phone while measuring narrow.
 *
 * Exempting narrow tables therefore exempts precisely the ones that break. And
 * the exemption is unfalsifiable from the source, so nobody can tell whether a
 * given exemption was correct.
 *
 * Flagging every unwrapped table makes the rule one sentence long and checkable
 * by reading: tables scroll, or they do not. The cost is wrapping a handful of
 * genuinely fine two-column tables, which is cheap and harmless.
 */

function parseArgs(argv) {
  const args = { root: REPO_ROOT }
  const flags = new Set(argv)
  for (const flag of flags) {
    const at = argv.indexOf(flag)
    if (flag === '--root') args.root = path.resolve(argv[at + 1])
  }
  return args
}

function isContentPath(file) {
  return /\.(md|mdx)$/.test(file) && file.includes(`${path.sep}content${path.sep}docs${path.sep}`)
}

/** Strip fenced code blocks so their contents are never read as tables. */
function stripFences(text) {
  return text.replace(/^```[\s\S]*?^```/gm, '').replace(/^~~~[\s\S]*?^~~~/gm, '')
}

/**
 * Is this line the start of a real markdown table?
 *
 * A table needs a delimiter row -- the `| --- |` line -- directly beneath it.
 * Requiring that is what keeps prose containing a bare `|` from being counted.
 */
function isTableStart(line, next) {
  if (!line.trim().startsWith('|')) return false
  if (typeof next !== 'string') return false
  return /^\s*\|?[\s:|-]+\|[\s:|-]*$/.test(next) && next.includes('-')
}

/** How many columns a table row declares. */
function countColumns(row) {
  return row
    .trim()
    .replace(/^\||\|$/g, '')
    .split('|').length
}

/** Find unwrapped tables in one document. */
function findUnwrappedTables(text, relative) {
  const body = stripFences(text)
  const lines = body.split('\n')
  const findings = []
  let wrapperDepth = 0

  for (const [index, line] of lines.entries()) {
    if (WRAPPER_OPEN.test(line)) {
      wrapperDepth += 1
      continue
    }
    if (/^<\/div>/.test(line.trim()) && wrapperDepth > 0) {
      wrapperDepth -= 1
      continue
    }
    if (wrapperDepth > 0) continue
    if (!isTableStart(line, lines[index + 1])) continue

    findings.push({
      file: relative,
      line: index + 1,
      columns: countColumns(line),
      preview: line.trim().slice(0, 70),
    })
  }

  return findings
}

function collectFiles(root) {
  const sitesDir = path.join(root, 'sites')
  if (!fs.existsSync(sitesDir)) return []
  const out = []
  const walk = dir => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.name === 'node_modules' || entry.name === 'dist' || entry.name === '.astro')
        continue
      const full = path.join(dir, entry.name)
      if (entry.isDirectory()) walk(full)
      else if (isContentPath(full)) out.push(full)
    }
  }
  walk(sitesDir)
  return out
}

function main() {
  const args = parseArgs(process.argv.slice(2))
  const files = collectFiles(args.root)

  let findings = []
  for (const file of files) {
    const text = fs.readFileSync(file, 'utf8')
    const relative = path.relative(args.root, file)
    findings = findings.concat(findUnwrappedTables(text, relative))
  }

  if (findings.length === 0) {
    const total = files.length
    console.log(`responsive tables      ok  ${total} file(s), every table in a scroll container`)
    return 0
  }

  // Group by file so the report is actionable: one line per page to fix.
  const byFile = new Map()
  for (const finding of findings) {
    if (!byFile.has(finding.file)) byFile.set(finding.file, [])
    byFile.get(finding.file).push(finding)
  }

  console.log(
    `responsive tables      FAIL  ${findings.length} unwrapped table(s) in ${byFile.size} file(s)\n`,
  )
  for (const [file, items] of [...byFile.entries()].sort((a, b) => b[1].length - a[1].length)) {
    console.log(`  ${file} (${items.length})`)
    for (const item of items.slice(0, 6)) {
      console.log(`      line ${item.line}: ${item.columns} cols -- ${item.preview}`)
    }
    if (items.length > 6) console.log(`      ...and ${items.length - 6} more`)
    console.log('')
  }
  console.log('  Fix: wrap the table so it scrolls instead of widening the page:')
  console.log('    <div class="table-wrap">')
  console.log('')
  console.log('    | Header | Header |')
  console.log('    | ------ | ------ |')
  console.log('    | cell   | cell   |')
  console.log('')
  console.log('    </div>')
  return 1
}

process.exit(main())
