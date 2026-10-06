/**
 * Unit tests for scripts/fix-duplicate-blocks.mjs.
 *
 * The fix is only acceptable because it discards *byte-identical* content.
 * These tests pin that: anything less than an exact match, and anything in a
 * different structural position, must survive untouched.
 */

const { execFileSync } = require('node:child_process')
const assert = require('node:assert')
const fs = require('node:fs')
const os = require('node:os')
const path = require('node:path')
const { describe, it } = require('node:test')

const REPO = path.resolve(__dirname, '..', '..')
const SCRIPT = path.join(REPO, 'scripts', 'fix-duplicate-blocks.mjs')

function repair(content) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'dupblock-'))
  const file = path.join(dir, 'page.md')
  fs.writeFileSync(file, content, 'utf8')
  execFileSync('node', [SCRIPT, file], { encoding: 'utf8' })
  return fs.readFileSync(file, 'utf8')
}

function check(content) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'dupblock-'))
  const file = path.join(dir, 'page.md')
  fs.writeFileSync(file, content, 'utf8')
  try {
    execFileSync('node', [SCRIPT, '--check', file], { encoding: 'utf8', stdio: 'pipe' })
    return { code: 0, out: '' }
  } catch (err) {
    return { code: err.status, out: err.stdout || '' }
  }
}

const BODY = [
  'This topic covers the fundamental principles and applications in depth.',
  'Each concept is explained with clear definitions and worked examples.',
  '',
  '### Core Concepts',
  '',
  'Understanding these core concepts is essential for mastering this topic.',
  'They form the foundation for more advanced study.',
  '',
].join('\n')

const SECTION = ['## Detailed Content', '', BODY].join('\n')

describe('fix-duplicate-blocks: collapsing exact duplicates', () => {
  it('removes a byte-identical repeated section', () => {
    const src = ['# Page', '', SECTION, '', SECTION, ''].join('\n')
    const out = repair(src)
    assert.equal(out.match(/## Detailed Content/g).length, 1)
  })

  it('removes a section repeated three times', () => {
    const src = ['# Page', '', SECTION, '', SECTION, '', SECTION, ''].join('\n')
    const out = repair(src)
    assert.equal(out.match(/## Detailed Content/g).length, 1)
  })

  it('keeps one blank line between the surviving section and what follows', () => {
    const src = ['# Page', '', SECTION, '', SECTION, '', '## Contact', '', 'Email me.', ''].join(
      '\n',
    )
    const out = repair(src)
    // The absorbed blank run must not leave the next heading welded onto the
    // preceding paragraph.
    assert.doesNotMatch(out, /advanced study\.\n## Contact/)
    assert.match(out, /advanced study\.\n\n## Contact/)
  })

  it('is idempotent', () => {
    const src = ['# Page', '', SECTION, '', SECTION, ''].join('\n')
    const once = repair(src)
    assert.equal(repair(once), once)
  })
})

describe('fix-duplicate-blocks: what it must not touch', () => {
  it('keeps a section that differs by one character', () => {
    const other = SECTION.replace('in depth', 'in detail')
    const src = ['# Page', '', SECTION, '', other, ''].join('\n')
    assert.equal(repair(src), src)
  })

  it('keeps identical sections under different parents', () => {
    // Scoping to the enclosing block is what makes this safe: two sections
    // under different headings are not interchangeable.
    const src = [
      '# Page',
      '',
      '## Alpha',
      '',
      '### Notes',
      '',
      'Shared body text that is long enough to clear the minimum length gate.',
      '',
      '## Beta',
      '',
      '### Notes',
      '',
      'Shared body text that is long enough to clear the minimum length gate.',
      '',
    ].join('\n')
    assert.equal(repair(src), src)
  })

  it('keeps a trailing section that carries a diagram the others lack', () => {
    // The final copy is not byte-identical because it extends to EOF with a
    // mermaid block. Removing its children individually would leave a
    // heading with nothing under it.
    const withDiagram = [
      '## Detailed Content',
      '',
      BODY,
      '```mermaid',
      'graph TD',
      '  A --> B',
      '```',
      '',
    ].join('\n')
    const src = ['# Page', '', SECTION, '', withDiagram, ''].join('\n')
    const out = repair(src)
    assert.equal(out.match(/## Detailed Content/g).length, 2)
    assert.match(out, /### Core Concepts/)
    assert.match(out, /graph TD/)
  })

  it('keeps a short repeated section', () => {
    // Below the minimum length, repetition may be deliberate.
    const src = [
      '# Page',
      '',
      '## Note',
      '',
      'See below.',
      '',
      '## Note',
      '',
      'See below.',
      '',
    ].join('\n')
    assert.equal(repair(src), src)
  })

  it('does not treat headings inside fenced code as blocks', () => {
    const src = [
      '# Page',
      '',
      '```md',
      '## Detailed Content',
      '',
      'This topic covers the fundamental principles and applications in depth.',
      'Each concept is explained with clear definitions and worked examples.',
      '',
      '### Core Concepts',
      '',
      'Understanding these core concepts is essential for mastering this topic.',
      'They form the foundation for more advanced study.',
      '```',
      '',
    ].join('\n')
    assert.equal(repair(src), src)
  })

  it('does not touch a heading inside frontmatter', () => {
    const src = ['---', 'title: X', '---', '', '# Page', '', SECTION, ''].join('\n')
    assert.equal(repair(src), src)
  })
})

describe('fix-duplicate-blocks: --check mode', () => {
  it('fails when a duplicate remains', () => {
    const res = check(['# Page', '', SECTION, '', SECTION, ''].join('\n'))
    assert.equal(res.code, 1)
  })

  it('passes on already-collapsed content', () => {
    const res = check(['# Page', '', SECTION, ''].join('\n'))
    assert.equal(res.code, 0)
  })
})
