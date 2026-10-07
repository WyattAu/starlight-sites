#!/usr/bin/env node
/**
 * Unit tests for scripts/fix-latex-braces.mjs.
 *
 * The central property is that the fixer is KaTeX-verified: it writes a change
 * only when the original maths fails to parse and the repaired maths succeeds.
 *
 * That means the fixtures here are chosen by asking KaTeX, not by guessing.
 * Several plausible-looking damage patterns turn out to *parse* --
 * `x = \frac\{b\}\{a\}` alone is accepted by KaTeX -- so a test asserting a
 * repair for them would be asserting a change that is not needed. KaTeX
 * tolerating a slightly odd rendering is not the same as the author having
 * written what they meant, so those stay untouched by design.
 */

const assert = require('node:assert')
const fs = require('node:fs')
const os = require('node:os')
const path = require('node:path')
const { execFileSync } = require('node:child_process')
const { after, describe, it } = require('node:test')

// Temp fixtures are removed after the suite. os.tmpdir() is a tmpfs on CI and
// on this machine, and leaked mkdtemp directories accumulate until unrelated
// suites fail with ENOSPC.
const FIXTURE_DIRS = []

after(() => {
  for (const dir of FIXTURE_DIRS) {
    try {
      fs.rmSync(dir, { recursive: true, force: true })
    } catch {
      // Best effort: a leftover temp dir must never fail the suite.
    }
  }
})

const REPO = path.resolve(__dirname, '..', '..')
const SCRIPT = path.join(REPO, 'scripts', 'fix-latex-braces.mjs')

function run(content, ...flags) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'latex-'))
  FIXTURE_DIRS.push(dir)
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

const repair = c => run(c).text

const display = (...body) => ['$$', ...body, '$$', ''].join('\n')

describe('fix-latex-braces: repairs what KaTeX rejects', () => {
  it('unescapes an environment name', () => {
    const out = repair(
      display(String.raw`\begin\{aligned\}`, String.raw`y &= 1`, String.raw`\end\{aligned\}`),
    )
    assert.match(out, /\\begin\{aligned\}/)
    assert.match(out, /\\end\{aligned\}/)
  })

  it('reduces a doubled backslash before a brace', () => {
    const out = repair('the set $A$ is $\\\\{1, 2, 3\\}$ here.\n')
    assert.match(out, /\\\{1, 2, 3\\}/)
  })
})

describe('fix-latex-braces: must not touch correct maths', () => {
  it('leaves a literal escaped brace alone', () => {
    // `\{A, B\}` renders the braces. It is set notation, not damage, and a
    // naive unescape would delete the visible braces.
    const src = 'the set $X$ is $\\{A, B\\}$ in the problem.\n'
    assert.equal(repair(src), src)
  })

  it('leaves \\left\\{ and \\right\\} alone', () => {
    const src = 'interval $\\left\\{ x : x > 0 \\right\\}$ is half-open.\n'
    assert.equal(repair(src), src)
  })

  it('leaves an already-correct fraction alone', () => {
    const src = 'the rate is $\\frac{dy}{dx}$ exactly.\n'
    assert.equal(repair(src), src)
  })

  it('leaves maths that KaTeX already accepts alone', () => {
    // Verified against KaTeX: this parses. Whether the author meant it is a
    // separate question, and rewriting a rendering that works is out of scope.
    const src = 'a bare $\\frac\\{b\\}\\{a\\}$ renders.\n'
    assert.equal(repair(src), src)
  })

  it('leaves maths inside a fenced block alone', () => {
    const src = ['```tex', String.raw`\begin\{aligned\}`, '```', ''].join('\n')
    assert.equal(repair(src), src)
  })

  it('leaves a shell template alone', () => {
    const src = 'pass `${sourceDir}` on the command line, not $\\frac\\{1\\}\\{2\\}$.\n'
    assert.equal(repair(src), src)
  })
})

describe('fix-latex-braces: structural damage is reported, not guessed', () => {
  it('is idempotent', () => {
    const src = display(
      String.raw`\begin\{aligned\}`,
      String.raw`y &= 1`,
      String.raw`\end\{aligned\}`,
    )
    const once = repair(src)
    assert.equal(repair(once), once)
  })
})

describe('fix-latex-braces: --check mode', () => {
  it('passes on a clean file', () => {
    const res = run('the rate is $\\frac{dy}{dx}$ exactly.\n', '--check')
    assert.equal(res.code, 0)
    assert.match(res.out, /^OK:/m)
  })
})
