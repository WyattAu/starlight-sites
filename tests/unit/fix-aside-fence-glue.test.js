#!/usr/bin/env node
/**
 * Unit tests for scripts/fix-aside-fence-glue.py and the lint rule it exists
 * for.
 *
 * `:::## Cross-References` shipped on five pages across four sites. The fence
 * opens nothing and closes nothing, so the parser treats the whole line as
 * text: the heading silently stops being a heading. Nothing else on those
 * pages is wrong, and the site builds, so review does not catch it.
 *
 * The existing aside gate had exactly this hole. `:::## ...` is not a valid
 * opener, not a bare closer, and the cramped-fence rule only tests valid
 * aside labels, so the line fell through all four rules unnoticed.
 *
 * The fixtures here are chosen to pin the boundary: a fence glued to a heading
 * is repaired, and every shape that merely resembles one is left alone.
 */

const assert = require('node:assert')
const fs = require('node:fs')
const os = require('node:os')
const path = require('node:path')
const { execFileSync } = require('node:child_process')
const { after, describe, it } = require('node:test')

const REPO_ROOT = path.resolve(__dirname, '..', '..')
const FIXER = path.join(REPO_ROOT, 'scripts', 'fix-aside-fence-glue.py')
const LINTER = path.join(REPO_ROOT, 'scripts', 'lint-asides.js')

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

/** Build a site-shaped fixture tree containing the given files. */
function makeFixture(files) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'aside-fence-glue-'))
  FIXTURE_DIRS.push(root)
  const docs = path.join(root, 'mathematics', 'src', 'content', 'docs')
  fs.mkdirSync(docs, { recursive: true })
  for (const [name, body] of Object.entries(files)) {
    fs.writeFileSync(path.join(docs, name), body, 'utf8')
  }
  return root
}

function fix(root) {
  execFileSync('python3', [FIXER, root], { encoding: 'utf8' })
}

function read(root, name) {
  return fs.readFileSync(path.join(root, 'mathematics', 'src', 'content', 'docs', name), 'utf8')
}

describe('fix-aside-fence-glue.py', () => {
  it('removes a stray fence so the heading renders as a heading', () => {
    const root = makeFixture({ 'a.md': 'intro\n\n:::## Cross-References\n\n- link\n' })
    fix(root)
    assert.equal(read(root, 'a.md'), 'intro\n\n## Cross-References\n\n- link\n')
  })

  it('keeps a legitimate aside opener', () => {
    const body = ':::note\ninside\n:::\n\n## After\n'
    const root = makeFixture({ 'a.md': body })
    fix(root)
    assert.equal(read(root, 'a.md'), body)
  })

  it('keeps an aside opener with a title', () => {
    const body = ':::note[Careful]\nbody\n:::\n'
    const root = makeFixture({ 'a.md': body })
    fix(root)
    assert.equal(read(root, 'a.md'), body)
  })

  it('leaves a fence inside a fenced code block alone', () => {
    // A markdown file documenting the directive has to show it verbatim.
    const body = 'Example:\n\n```markdown\n:::## Cross-References\n```\n\n## Real\n'
    const root = makeFixture({ 'a.md': body })
    fix(root)
    assert.equal(read(root, 'a.md'), body)
  })

  it('does not touch a bare closer, which is valid', () => {
    const body = ':::caution\nbody\n:::\n'
    const root = makeFixture({ 'a.md': body })
    fix(root)
    assert.equal(read(root, 'a.md'), body)
  })

  it('handles mdx as well as md', () => {
    const root = makeFixture({ 'a.mdx': ':::## Cross-References\n\n<Aside>hi</Aside>\n' })
    fix(root)
    assert.equal(read(root, 'a.mdx'), '## Cross-References\n\n<Aside>hi</Aside>\n')
  })

  it('preserves LaTeX on the repaired line', () => {
    // Regression guard: earlier fixer work in this repo mangled backslash
    // sequences, so the repair must be a pure prefix strip.
    const root = makeFixture({ 'a.md': ':::## $\\alpha$ and \\frac{a}{b}\n' })
    fix(root)
    assert.equal(read(root, 'a.md'), '## $\\alpha$ and \\frac{a}{b}\n')
  })
})

describe('lint-asides.js stray-fence rule', () => {
  it('is clean on the whole repo, so a reintroduced fence fails CI', () => {
    // The five shipped instances are repaired, so the gate exits 0. If a
    // stray fence ever comes back -- or a new one is authored -- this turns
    // red, which is the whole point of adding the rule.
    const { status, stdout } = spawnLint()
    assert.equal(status, 0, `aside gate should be clean; got:\n${stdout}`)
    assert.match(stdout, /well-formed/)
  })

  it('reports the stray fence it is there to catch', () => {
    // Proves the rule still fires, by feeding the linter a tree containing
    // the exact shape that shipped.
    const root = makeFixture({ 'a.md': ':::## Cross-References\n\n- link\n' })
    const { status, stderr } = spawnLint(root)
    assert.equal(status, 1)
    assert.match(stderr, /stray ::: fence glued to "## Cross-References"/)
  })
})

function spawnLint(root) {
  const args = root ? [LINTER, root] : [LINTER]
  try {
    const stdout = execFileSync('node', args, {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
    })
    return { status: 0, stdout, stderr: '' }
  } catch (err) {
    return { status: err.status ?? 1, stdout: err.stdout ?? '', stderr: err.stderr ?? '' }
  }
}
