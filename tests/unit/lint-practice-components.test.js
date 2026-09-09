#!/usr/bin/env node
/**
 * Unit tests for the PracticeProblem corruption linter
 * (scripts/lint-practice-components.js).
 *
 * Validates detection semantics for the three corruption classes
 * (swallowed options, bare options array, doubled prefix) and asserts
 * the current content tree is clean.
 *
 * Run: node --test tests/unit/lint-practice-components.test.js
 */

const { describe, it } = require('node:test')
const assert = require('node:assert')
const { execFileSync } = require('node:child_process')
const path = require('node:path')
const { RULES, lintLine, lintContent } = require('../../scripts/lint-practice-components.js')

const ROOT = path.join(__dirname, '..', '..')

describe('lintLine detection', () => {
  it('flags the swallowed-options corruption', () => {
    const hits = lintLine(
      'question={"What is 2+2?&quot; options={[\'3\', \'4\']} correctAnswer={1}',
    )
    assert.ok(hits.includes('swallowed-options'))
  })

  it('flags bare options arrays without expression braces', () => {
    const hits = lintLine("options=['$1$', '$2x$'] correctAnswer={0}")
    assert.ok(hits.includes('bare-options-array'))
  })

  it('flags doubled options prefixes', () => {
    const hits = lintLine('options=options={["a", "b"]}')
    assert.ok(hits.includes('doubled-options-prefix'))
  })

  it('does NOT flag well-formed components', () => {
    const good =
      '<PracticeProblem client:only="solid-js" question={"What is 2+2?"} ' +
      'options={["$3$", "$4$"]} correctAnswer={1} explanation={"Because."} difficulty="easy" />'
    assert.deepStrictEqual(lintLine(good), [])
  })

  it('does NOT flag static markdown question blocks', () => {
    assert.deepStrictEqual(lintLine('**Q1. What is 2+2?**'), [])
    assert.deepStrictEqual(lintLine('A. Three'), [])
  })
})

describe('lintContent reporting', () => {
  it('reports 1-indexed line numbers', () => {
    const violations = lintContent('line one\nquestion={"Q?&quot; options={[1]}')
    assert.strictEqual(violations.length, 1)
    assert.strictEqual(violations[0].line, 2)
    assert.strictEqual(violations[0].ruleId, 'swallowed-options')
  })
})

describe('repository is clean', () => {
  it('lint-practice-components.js exits 0 on the current tree', { timeout: 120000 }, () => {
    execFileSync('node', [path.join(ROOT, 'scripts', 'lint-practice-components.js')], {
      cwd: ROOT,
      stdio: 'pipe',
    })
  })
})
