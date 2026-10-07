#!/usr/bin/env node
/**
 * Unit tests for scripts/lint-tables.mjs.
 *
 * Two properties matter most, and both were got wrong in the first
 * implementation:
 *
 *  1. The trailing pipe must actually be dropped. `s.slice(1)` removes a
 *     leading character that was just removed, so every row counted one cell
 *     too many and both reported counts were inflated.
 *
 *  2. A `$$ ... $$` display block can contain what looks like a table -- the
 *     `table-in-math` damage class emits a `| --- | --- |` delimiter row
 *     inside maths. That row is not a table delimiter and must not be
 *     counted as one.
 */

const assert = require('node:assert')
const fs = require('node:fs')
const os = require('node:os')
const path = require('node:path')
const { execFileSync } = require('node:child_process')
const { describe, it } = require('node:test')

const REPO = path.resolve(__dirname, '..', '..')
const SCRIPT = path.join(REPO, 'scripts', 'lint-tables.mjs')

function run(content, ...flags) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'tables-'))
  const file = path.join(dir, 'page.md')
  fs.writeFileSync(file, content, 'utf8')
  let out = ''
  let code = 0
  try {
    out = execFileSync('node', [SCRIPT, ...flags, file], {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
    })
  } catch (err) {
    code = err.status
    out = err.stdout || ''
  }
  return { out: String(out), code, text: fs.readFileSync(file, 'utf8') }
}

const GOOD = ['| A | B | C |', '| - | - | - |', '| 1 | 2 | 3 |', ''].join('\n')

describe('lint-tables: counting', () => {
  it('accepts a well-formed table', () => {
    const res = run(GOOD, '--check')
    assert.equal(res.code, 0)
    assert.match(res.out, /0 delimiter row\(s\) mismatched/)
  })

  it('does not count the outer pipes as cells', () => {
    // Regression: `slice(1)` instead of `slice(0, -1)` made a 3-column header
    // count as 4, so a correct table looked broken.
    const res = run(GOOD, '--check')
    assert.doesNotMatch(res.out, /mismatched in 1 file/)
  })

  it('does not count a delimiter row as a data row', () => {
    const res = run(GOOD, '--check')
    assert.match(res.out, /0 data row\(s\) misaligned/)
  })
})

describe('lint-tables: delimiter mismatch is severe and repaired', () => {
  const BAD = ['| A | B | C |', '| - | - | - | - |', '| 1 | 2 | 3 |', ''].join('\n')

  it('fails when the delimiter is wider than the header', () => {
    const res = run(BAD, '--check')
    assert.equal(res.code, 1)
    assert.match(res.out, /^FAIL:/m)
    assert.match(res.out, /1 delimiter row\(s\) mismatched/)
  })

  it('fails when the delimiter is narrower than the header', () => {
    const src = ['| A | B | C | D |', '| - | - |', '| 1 | 2 | 3 | 4 |', ''].join('\n')
    const res = run(src, '--check')
    assert.equal(res.code, 1)
  })

  it('resizes the delimiter row to the header width', () => {
    const res = run(BAD)
    const delim = res.text.split('\n')[1]
    assert.equal(delim.split('|').length - 2, 3, `delimiter should have 3 cells: ${delim}`)
  })

  it('preserves delimiter cell widths when resizing', () => {
    const src = [
      '| Short | Much longer header |',
      '| ------ | ------------------- | - |',
      '| 1 | 2 |',
      '',
    ].join('\n')
    const res = run(src)
    const delim = res.text.split('\n')[1]
    // The two surviving cells keep their original dash runs; only the extra
    // third cell is dropped.
    assert.equal(delim.split('|').length - 2, 2)
    assert.match(delim, /\| -{6} \|/)
    assert.match(delim, /\| -{15,} \|/)
  })

  it('is idempotent', () => {
    const once = run(BAD).text
    assert.equal(run(once).text, once)
  })
})

describe('lint-tables: data row mismatch is advisory only', () => {
  it('reports but does not fail on a short data row', () => {
    const src = ['| A | B | C |', '| - | - | - |', '| 1 | 2 |', ''].join('\n')
    const res = run(src, '--check')
    assert.equal(res.code, 0, 'a misaligned data row must not block the gate')
    assert.match(res.out, /1 data row\(s\) misaligned/)
    assert.equal(res.text, src, 'must not guess which column went missing')
  })
})

describe('lint-tables: things that are not tables', () => {
  it('ignores a delimiter row inside a display-math block', () => {
    // The table-in-math damage class emits exactly this.
    const src = [
      '$$',
      String.raw`\begin\{aligned\}`,
      '| a | b |',
      '| --- | --- | --- | --- | --- |',
      '| 1 | 2 |',
      String.raw`\end\{aligned\}`,
      '$$',
      '',
    ].join('\n')
    const res = run(src, '--check')
    assert.equal(res.code, 0)
    assert.match(res.out, /0 delimiter row\(s\) mismatched/)
  })

  it('ignores a table inside a fenced code block', () => {
    const src = ['```md', '| A | B |', '| - | - | - |', '| 1 | 2 |', '```', ''].join('\n')
    const res = run(src, '--check')
    assert.equal(res.code, 0)
  })

  it('ignores a pipe inside an escaped-pipe cell', () => {
    const src = ['| A | B |', '| - | - |', '| `T \\| null` | 2 |', ''].join('\n')
    const res = run(src, '--check')
    assert.match(res.out, /0 data row\(s\) misaligned/)
  })

  it('treats prose containing pipes as not a table', () => {
    const src = ['a | b and c | d are just words here', ''].join('\n')
    const res = run(src, '--check')
    assert.match(res.out, /0 delimiter row\(s\) mismatched/)
  })
})
