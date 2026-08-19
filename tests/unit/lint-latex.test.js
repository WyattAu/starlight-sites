#!/usr/bin/env node
/**
 * Unit tests for the LaTeX corruption linter (scripts/lint-latex.js).
 *
 * Validates detection semantics for each corruption layer and asserts the
 * current content tree is clean.
 *
 * Run: node --test tests/unit/lint-latex.test.js
 */

const { describe, it } = require('node:test')
const assert = require('node:assert')
const os = require('node:os')
const fs = require('node:fs')
const path = require('node:path')
const { PATTERNS, scanFile, main } = require('../../scripts/lint-latex.js')

const ROOT = path.join(__dirname, '..', '..')

describe('corruption pattern detection', () => {
  it('flags the doubled brace-group mangle from d47dfaea', () => {
    const line = String.raw`$\mathcal{{'}P{}'}(S)$`
    assert.ok(PATTERNS.some(p => p.re.test(line)))
  })

  it('flags the double-quote variant from the sentinel restore', () => {
    const line = String.raw`$\mathbb{{"}R{}'}$`
    assert.ok(PATTERNS.some(p => p.re.test(line)))
  })

  it('flags diamond sentinels from the placeholder system', () => {
    const line = String.raw`\mathcal◆LB◆◆LB◆'◆RB◆M◆LB◆◆RB◆'◆RB◆_1`
    assert.ok(PATTERNS.some(p => p.re.test(line)))
  })

  it('flags the original JSX backslash escapes', () => {
    const line = String.raw`\mathrm{'\{'}Cov{'}\}'}`
    assert.ok(PATTERNS.some(p => p.re.test(line)))
  })

  it('does not flag clean LaTeX', () => {
    const clean = [
      String.raw`$\mathcal{P}(S)$`,
      String.raw`$\mathbb{E}[X^k]$`,
      String.raw`$x_{i-1} \in \mathbb{R}$`,
    ]
    for (const line of clean) {
      for (const p of PATTERNS) {
        p.re.lastIndex = 0
        assert.ok(!p.re.test(line), `false positive on ${line}`)
      }
    }
  })
})

describe('lint-latex scanFile', () => {
  it('exits 0 on a clean tree (current repo state)', () => {
    assert.strictEqual(main(), 0)
  })

  it('reports corruption with file/line/column details', () => {
    const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'lint-latex-'))
    const f = path.join(tmp, 'page.md')
    fs.writeFileSync(f, `---\ntitle: T\n---\n\n$mathcal{{'}F{}'}$ clean $mathcal{P}(S)$\n`)
    const found = scanFile(f)
    // One line may match multiple patterns ({{'} and {}'} both hit); each is reported.
    assert.ok(found.length >= 1, 'expected at least one violation')
    assert.strictEqual(found[0].line, 5)
    assert.match(found[0].name, /brace-mangle|orphan-residue/)

    const clean = path.join(tmp, 'clean.md')
    fs.writeFileSync(clean, `---\ntitle: T\n---\n\n$mathcal{P}(S)$ and $mathbb{E}[X]$\n`)
    assert.strictEqual(scanFile(clean).length, 0)

    fs.rmSync(tmp, { recursive: true, force: true })
  })
})
