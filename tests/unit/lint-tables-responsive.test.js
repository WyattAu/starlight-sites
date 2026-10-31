#!/usr/bin/env node
/**
 * Unit tests for the responsive-table gate on tables in content.
 *
 * Tables are the most common wide object in a study-notes page: comparison
 * tables of formulas, operator/observable tables, theorem tables. At 390px a
 * table that is not wrapped in a scroll container does not scroll -- it forces
 * the whole document to scroll sideways, so the page's header, sidebar and
 * reading column all slide out of alignment with each other and the text
 * becomes unreadable while trying to read it.
 *
 * The fix is structural, not visual: the content ships a `.table-wrap` (or the
 * site's own scroll container class) around every table, which clips the
 * overflow to the container and lets the table scroll inside it. That has to be
 * present in the markdown, because the site CSS cannot add a wrapper to
 * something it never sees the boundary of.
 *
 * This gate checks the markdown, which is where the mistake is made. A test
 * alone would not do: the class name is a site-wide convention that a rename in
 * shared/styles/ silently invalidates, and a table added in a future commit
 * would not be covered by any assertion written here.
 */

const assert = require('node:assert')
const fs = require('node:fs')
const os = require('node:os')
const path = require('node:path')
const { execFileSync } = require('node:child_process')
const { after, describe, it } = require('node:test')

const REPO_ROOT = path.resolve(__dirname, '..', '..')
const LINTER = path.join(REPO_ROOT, 'scripts', 'lint-tables-responsive.js')

const FIXTURE_DIRS = []
after(() => {
  for (const dir of FIXTURE_DIRS) {
    try {
      fs.rmSync(dir, { recursive: true, force: true })
    } catch {
      // A fixture that will not delete must not fail the suite.
    }
  }
})

/** Run the linter as a copy inside the fixture root, never as the real path. */
function lint(root, extraArgs = []) {
  const copied = path.join(root, 'lint-table-responsive.js')
  fs.copyFileSync(LINTER, copied)
  try {
    return execFileSync(process.execPath, [copied, '--root', root, ...extraArgs], {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
    })
  } catch (error) {
    // A non-zero exit is the normal "found problems" path; the report is on
    // stdout and the assertion helpers below read it.
    if (error.stdout) return error.stdout
    throw error
  }
}

/** Build a fixture site with the given content files. */
function makeSite(files) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'table-responsive-'))
  FIXTURE_DIRS.push(root)
  const docs = path.join(root, 'sites', 'physics', 'src', 'content', 'docs')
  fs.mkdirSync(docs, { recursive: true })
  for (const [name, body] of Object.entries(files)) {
    fs.mkdirSync(path.dirname(path.join(docs, name)), { recursive: true })
    fs.writeFileSync(path.join(docs, name), body)
  }
  return root
}

const WRAPPED = `---
title: "Wrapped"
---

<div class="table-wrap">

| Name | Meaning |
| ---- | ------- |
| $x$  | position |

</div>
`

const BARE = `---
title: "Bare"
---

| Name | Meaning |
| ---- | ------- |
| $x$  | position |
`

const MULTIPLE_BARE = `---
title: "Two bare tables"
---

| A | B |
| - | - |
| 1 | 2 |

Some prose between them, so a single global replacement cannot paper over the
count.

| C | D |
| - | - |
| 3 | 4 |
`

const NARROW_TABLE = `---
title: "Narrow"
---

| Symbol | Name |
| ------ | ---- |
| $\\nabla$ | nabla |
`

describe('responsive table gate', () => {
  it('accepts a table already wrapped in a scroll container', () => {
    const root = makeSite({ 'ok.md': WRAPPED })
    const out = lint(root)
    assert.match(out, /ok\s+\d+ file\(s\), every table in a scroll container/, out)
  })

  it('flags a bare markdown table', () => {
    const root = makeSite({ 'bad.md': BARE })
    const out = lint(root)
    assert.match(out, /bad\.md/, out)
    assert.match(out, /table-wrap/, out)
  })

  it('counts every bare table in a file, not just the first', () => {
    const root = makeSite({ 'two.md': MULTIPLE_BARE })
    const out = lint(root)
    // Both tables are reported, and at the line numbers they are actually on.
    // A linter that stops after the first match in a file reports one problem,
    // and the second table then ships broken with the gate green.
    assert.match(out, /2 unwrapped table\(s\)/, out)
    assert.match(out, /two\.md \(2\)/, out)
    assert.match(out, /line 5/, out)
    // Line 12, not 11: the prose paragraph between the tables runs to line 10,
    // so the second table's header is on 12. Asserting the exact line is what
    // catches off-by-one reporting -- a linter that shifted every finding by one
    // would still look correct against a loose regex.
    assert.match(out, /line 12/, out)
  })

  it('flags a narrow-looking table, because source width is not rendered width', () => {
    // This is the case the first version of the gate got wrong. It measured the
    // markdown and exempted tables under four columns with short cells -- and
    // so exempted exactly the tables these notes are full of. `$x^{\\frac{1}{2}}$`
    // is eleven source characters and a tall stack of fractions once KaTeX
    // renders it, so a two-column table of formulas overflows a 390px phone
    // while measuring narrow. The exemption was also unfalsifiable from the
    // source, so no one could tell whether it had been correct.
    const root = makeSite({ 'narrow.md': NARROW_TABLE })
    const out = lint(root)
    assert.match(out, /narrow\.md/, out)
  })

  it('flags a wide table of one-character cells', () => {
    const wide = `---
title: "Wide"
---

| a | b | c | d | e | f | g |
| - | - | - | - | - | - | - |
| 1 | 2 | 3 | 4 | 5 | 6 | 7 |
`
    const root = makeSite({ 'wide.md': wide })
    const out = lint(root)
    assert.match(out, /wide\.md/, out)
  })

  it('ignores tables that are not real content tables', () => {
    // A table inside a fenced code block is documentation, not content: it is
    // rendered as source, cannot overflow the page, and flagging it is noise
    // that teaches people to ignore the gate. Prose containing a bare pipe with
    // no delimiter row beneath it is likewise not a table.
    const noise = `---
title: "Noise"
---

\`\`\`\`
| also | not | a | table |
| --- | --- | --- | ----- |
| a   | b   | c   | d     |
\`\`\`

And a single unterminated pipe line, which is prose:

Values are separated by | characters in some contexts.
`
    const root = makeSite({ 'noise.md': noise })
    const out = lint(root)
    assert.doesNotMatch(out, /noise\.md/, out)
  })

  it('accepts the other scroll-container spellings already in the content', () => {
    const alt = `---
title: "Alt"
---

<div class="table-scroll-wrapper">

| A | B |
| - | - |
| 1 | 2 |

</div>
`
    const root = makeSite({ 'alt.md': alt })
    const out = lint(root)
    assert.doesNotMatch(out, /alt\.md/, out)
  })
})
