#!/usr/bin/env node
/**
 * Unit tests for the table-wrapping script.
 *
 * The defect it prevents: at 390px a table that is not inside a horizontal
 * scroll container widens the whole document rather than scrolling itself, so
 * the header, sidebar and prose all slide sideways together. Measured on a
 * thermodynamics page before the fix: `scrollWidth` 682 against a 390px
 * viewport, with one table 650px wide inside a 326px reading column.
 *
 * These tests pin the parts of the rewrite that are easy to get quietly wrong.
 * The nesting case is the important one: the first version closed each wrapper
 * after the blank line that followed its table, so the next table in the file
 * began with a blank line and then `<div class="table-wrap">`. The wrapper-depth
 * counter then saw an opening tag and treated the following table as already
 * wrapped, and adjacent tables came out nested instead of side by side. Open and
 * close `<div>` counts still matched, so nothing about the result looked broken
 * -- the damage only shows as a table that no longer scrolls at all.
 */

const assert = require('node:assert')
const fs = require('node:fs')
const os = require('node:os')
const path = require('node:path')
const { execFileSync } = require('node:child_process')
const { after, describe, it } = require('node:test')

const REPO_ROOT = path.resolve(__dirname, '..', '..')
const WRAPPER = path.join(REPO_ROOT, 'scripts', 'wrap-tables.py')

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

/** Write one content file into a fixture site and return the repo-relative path. */
function makeSite(name, body) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'wrap-tables-'))
  FIXTURE_DIRS.push(root)
  const docs = path.join(root, 'sites', 'physics', 'src', 'content', 'docs')
  fs.mkdirSync(docs, { recursive: true })
  fs.writeFileSync(path.join(docs, name), body)
  return { root, rel: path.join('sites', 'physics', 'src', 'content', 'docs', name) }
}

function wrap({ root }, extraArgs = []) {
  try {
    return execFileSync('python3', [WRAPPER, ...extraArgs], {
      cwd: root,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
    })
  } catch (error) {
    if (error.stdout) return error.stdout
    throw error
  }
}

function content(site) {
  return fs.readFileSync(path.join(site.root, site.rel), 'utf8')
}

const ONE_TABLE = `---
title: "One"
---

| A | B |
| - | - |
| 1 | 2 |
`

const TWO_ADJACENT = `---
title: "Two adjacent"
---

| A | B |
| - | - |
| 1 | 2 |

| C | D |
| - | - |
| 3 | 4 |
`

const TABLE_THEN_PROSE_THEN_TABLE = `---
title: "Separated"
---

| A | B |
| - | - |
| 1 | 2 |

Now some prose in between.

| C | D |
| - | - |
| 3 | 4 |
`

const ALREADY_WRAPPED = `---
title: "Wrapped"
---

<div class="table-wrap">

| A | B |
| - | - |
| 1 | 2 |

</div>
`

describe('wrap-tables.py', () => {
  it('wraps a bare table', () => {
    const site = makeSite('one.md', ONE_TABLE)
    wrap(site)
    const out = content(site)
    assert.match(out, /<div class="table-wrap">/)
    assert.match(out, /<\/div>/)
    assert.equal(out.match(/<div/g).length, out.match(/<\/div>/g).length)
  })

  it('closes the wrapper immediately after the table, not after the blank line', () => {
    // The regression: a trailing blank line left inside the wrapper makes the
    // next table look already-wrapped, so the depth counter swallows it.
    const site = makeSite('two.md', TWO_ADJACENT)
    wrap(site)
    const out = content(site)
    assert.ok(
      !/<div class="table-wrap">\s*\n\s*<div class="table-wrap">/.test(out),
      `adjacent tables must be siblings, got:\n${out}`,
    )
    assert.equal(out.match(/<div class="table-wrap">/g).length, 2, 'both tables must be wrapped')
  })

  it('wraps tables separated by prose independently', () => {
    const site = makeSite('sep.md', TABLE_THEN_PROSE_THEN_TABLE)
    wrap(site)
    const out = content(site)
    assert.equal(out.match(/<div class="table-wrap">/g).length, 2)
    assert.match(out, /Now some prose in between\./)
  })

  it('does not double-wrap an already wrapped table', () => {
    const site = makeSite('wrapped.md', ALREADY_WRAPPED)
    const before = content(site)
    wrap(site)
    assert.equal(content(site), before, 'an already-wrapped table must be left byte-identical')
  })

  it('is idempotent', () => {
    const site = makeSite('two.md', TWO_ADJACENT)
    wrap(site)
    const first = content(site)
    wrap(site)
    assert.equal(content(site), first, 'a second run must change nothing')
  })

  it('leaves tables inside fenced code blocks alone', () => {
    const fenced = `---
title: "Fenced"
---

\`\`\`\`
| A | B |
| - | - |
| 1 | 2 |
\`\`\`
`
    const site = makeSite('fenced.md', fenced)
    wrap(site)
    assert.equal(content(site), fenced, 'a table shown as source is not content')
  })

  it('does not touch a table in the frontmatter region', () => {
    const withFm = `---
title: "Frontmatter"
table: |
  | A | B |
  | - | - |
---

| C | D |
| - | - |
| 3 | 4 |
`
    const site = makeSite('fm.md', withFm)
    wrap(site)
    const out = content(site)
    assert.match(out, /table: \|/)
    assert.equal(out.match(/<div class="table-wrap">/g).length, 1)
  })

  it('--check reports without writing', () => {
    const site = makeSite('one.md', ONE_TABLE)
    const before = content(site)
    const out = wrap(site, ['--check'])
    assert.equal(content(site), before, '--check must not modify files')
    assert.match(out, /would wrap/, out)
  })

  it('--check passes on already-wrapped content', () => {
    const site = makeSite('wrapped.md', ALREADY_WRAPPED)
    const out = wrap(site, ['--check'])
    assert.match(out, /every table is in a scroll container/, out)
  })
})
