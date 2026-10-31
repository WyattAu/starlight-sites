#!/usr/bin/env node
/**
 * Unit tests for scripts/fix-glued-code-spans.py.
 *
 * Line-wrapping damage ate the separators between sentences, leaving two
 * shapes across the network:
 *
 *   R1  `` `M[0][2]``M[1][2]``M[2][2]` ``  -- a list of code spans whose
 *       `, ` separators were eaten, collapsing into one span with a backtick
 *       inside it.
 *   R2  `` if `low + high > INT_MAX`The sum overflow ``  -- a closing
 *       backtick followed straight by a capital, the full stop and space gone.
 *
 * The distinction that matters and that the first implementation got wrong:
 * R2 inserts the separator and leaves the capital alone. `B`Then is a new
 * sentence, so `. Then` is the repair and `. then` is a second, unjustified
 * edit. R1 emits `, `, and a following And/Or continues that list rather
 * than starting a sentence, so it gets ` and ` instead of `. And`.
 *
 * Anything whose repair would require guessing -- a capital that could be a
 * proper noun or an identifier -- is deliberately left alone and reported.
 * The principle is the same one used elsewhere in this repo: a repair that
 * adds information with certainty is mechanical, one that needs judgement is
 * a worklist.
 */

const assert = require('node:assert')
const fs = require('node:fs')
const os = require('node:os')
const path = require('node:path')
const { execFileSync } = require('node:child_process')
const { after, describe, it } = require('node:test')

const REPO_ROOT = path.resolve(__dirname, '..', '..')
const FIXER = path.join(REPO_ROOT, 'scripts', 'fix-glued-code-spans.py')

// Temp fixtures are removed after the suite. os.tmpdir() is a tmpfs on CI and
// on this machine, and leaked mkdtemp directories accumulate until unrelated
// suites fail with ENOSPC.
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

/** Run the fixer over a single-file fixture and return the repaired text. */
function fixOne(body, extraArgs = []) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'glued-code-spans-'))
  FIXTURE_DIRS.push(dir)
  const file = path.join(dir, 'page.md')
  fs.writeFileSync(file, body, 'utf8')
  execFileSync('python3', [FIXER, '--apply', file, ...extraArgs], { encoding: 'utf8' })
  return fs.readFileSync(file, 'utf8')
}

/** Run the fixer in --check mode and return its exit code and output. */
function checkOne(body) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'glued-code-spans-'))
  FIXTURE_DIRS.push(dir)
  const file = path.join(dir, 'page.md')
  fs.writeFileSync(file, body, 'utf8')
  try {
    const stdout = execFileSync('python3', [FIXER, '--check', file], {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
    })
    return { code: 0, stdout }
  } catch (err) {
    return { code: err.status ?? 1, stdout: err.stdout ?? '' }
  }
}

describe('fix-glued-code-spans.py R1: eaten list separators', () => {
  it('splits a collapsed span into a comma-separated list', () => {
    assert.equal(
      fixOne('Column 2 is `M[0][2]``M[1][2]``M[2][2]`.\n'),
      'Column 2 is `M[0][2]`, `M[1][2]`, `M[2][2]`.\n',
    )
  })

  it('splits two spans into two', () => {
    assert.equal(
      fixOne('What are the addresses of `C[0]``C[4]`?\n'),
      'What are the addresses of `C[0]`, `C[4]`?\n',
    )
  })

  it('continues the list with ` and ` rather than starting a sentence', () => {
    const got = fixOne('addresses of `C[0]``C[4]`And `C[12]`?\n')
    assert.equal(got, 'addresses of `C[0]`, `C[4]` and `C[12]`?\n')
  })
})

describe('fix-glued-code-spans.py R2: eaten sentence boundaries', () => {
  it('inserts a full stop and space, keeping the capital', () => {
    // The capital belongs to the new sentence. `. then` would be a second
    // edit that nothing justifies.
    assert.equal(
      fixOne('force on body `B`Then body `B` reacts.\n'),
      'force on body `B`. Then body `B` reacts.\n',
    )
  })

  it('handles the plural of a code span', () => {
    assert.equal(fixOne('- Use `Key`S when modifying.\n'), '- Use `Key`s when modifying.\n')
  })

  it('leaves an opening backtick followed by a capital alone', () => {
    // `Partial, Pick` is a list of type names, not a glued boundary.
    const body = 'Utility types (`Partial, Pick, Omit`) help.\n'
    assert.equal(fixOne(body), body)
  })

  it('leaves a capital that could be a proper noun, but still reports it', () => {
    const body = 'edited by `git`Ed on the release notes\n'
    assert.equal(fixOne(body), body, 'must not guess at a proper noun')
    const { code, stdout } = checkOne(body)
    assert.match(stdout, /worklist: 1 ambiguous/, 'ambiguous cases must never be silent')
    assert.equal(code, 0, 'an unrepairable case must not block the deploy')
  })

  it('accepts an approved word', () => {
    assert.equal(
      fixOne('committed by `git`Version tag follows.\n', ['--approve', 'version']),
      'committed by `git`. Version tag follows.\n',
    )
  })
})

describe('fix-glued-code-spans.py safety', () => {
  it('never touches LaTeX', () => {
    const body = 'If `x > 0` then $\\frac{\\alpha}{2}$ and $\\theta \\to \\infty$.\n'
    assert.equal(fixOne(body), body)
  })

  it('does not repair inside a fenced code block', () => {
    const body = '```\n`a``b`And `c`\n```\n'
    assert.equal(fixOne(body), body)
  })

  it('does not repair a table row', () => {
    const body = '| x | note |\n| --- | --- |\n| `a` | `b`Then more |\n'
    assert.equal(fixOne(body), body)
  })

  it('leaves an unterminated code span alone', () => {
    const body = 'an unclosed `span and more text\n'
    assert.equal(fixOne(body), body)
  })

  it('is idempotent', () => {
    const once = fixOne('Column 2 is `M[0][2]``M[1][2]`And `M[2][2]`The sum.\n')
    assert.equal(fixOne(once), once)
  })

  it('is clean on the whole repo', () => {
    const { code, stdout } = (() => {
      try {
        const stdout = execFileSync('python3', [FIXER, '--check'], {
          cwd: REPO_ROOT,
          encoding: 'utf8',
          stdio: ['ignore', 'pipe', 'pipe'],
        })
        return { code: 0, stdout }
      } catch (err) {
        return { code: err.status ?? 1, stdout: err.stdout ?? '' }
      }
    })()
    assert.equal(code, 0, `glued code spans remain:\n${stdout}`)
  })
})
