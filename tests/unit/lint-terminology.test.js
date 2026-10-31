#!/usr/bin/env node
/**
 * Unit tests for the terminology linter.
 *
 * "Directly connected" is not a mathematical term, and the notes used it as
 * though it were: in a *definition* of simple connectedness, in Cauchy's
 * theorem's hypotheses, in the Riemann mapping theorem's statement, and in the
 * Poincare lemma as stated inside a generated practice problem. A reader who
 * knows the subject searches for "simply connected", finds nothing, and
 * concludes the notes are wrong.
 *
 * The phrase is also correct English used correctly elsewhere in this repo: BGP
 * "directly connected" routes and neighbours are standard networking
 * terminology, and "directly connected to a specific claim" is good prose. A
 * blanket find-and-replace would have damaged all of those, which is why the
 * rule is scoped by site and the scoping is what these tests pin -- getting the
 * substitution right while getting the scope wrong is worse than doing nothing,
 * because it silently corrupts working content.
 */

const assert = require('node:assert')
const fs = require('node:fs')
const os = require('node:os')
const path = require('node:path')
const { execFileSync } = require('node:child_process')
const { after, describe, it } = require('node:test')

const REPO_ROOT = path.resolve(__dirname, '..', '..')
const LINTER = path.join(REPO_ROOT, 'scripts', 'lint-terminology.js')

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

function makeSite(site, files) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'terminology-'))
  FIXTURE_DIRS.push(root)
  for (const [rel, body] of Object.entries(files)) {
    const full = path.join(root, 'sites', site, 'src', 'content', 'docs', rel)
    fs.mkdirSync(path.dirname(full), { recursive: true })
    fs.writeFileSync(full, body)
  }
  return root
}

function lint(root) {
  const copied = path.join(root, 'lint-terminology.js')
  fs.copyFileSync(LINTER, copied)
  try {
    return execFileSync(process.execPath, [copied, '--root', root], {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
    })
  } catch (error) {
    if (error.stdout) return error.stdout
    throw error
  }
}

describe('terminology linter', () => {
  it('flags "directly connected" in the mathematics site', () => {
    const root = makeSite('mathematics', {
      '9-topology/9_intro.md':
        '---\ntitle: T\n---\n\nA path-connected space $X$ is **directly connected** if $\\pi_1(X) = \\{e\\}$.\n',
    })
    const out = lint(root)
    assert.match(out, /directly connected/, out)
    assert.match(out, /simply connected/, out)
  })

  it('flags it inside a generated practice problem', () => {
    // The differential-geometry practice MDX carries the phrase in a JSX string
    // prop, so the linter has to read generated wrapper files, not just prose.
    const root = makeSite('mathematics', {
      '12_practice.mdx':
        '<PracticeProblem question={"On a directly connected manifold, every closed 1-form is exact."} />\n',
    })
    const out = lint(root)
    assert.match(out, /directly connected/, out)
  })

  it('catches every capitalisation, including title case in a heading', () => {
    const root = makeSite('mathematics', {
      'h.md':
        '---\ntitle: T\n---\n\n## 9.3 Directly Connected Spaces\n\n### 9.4 Directly connected domains\n\n### 9.5 DIRECTLY CONNECTED sets\n',
    })
    const out = lint(root)
    // Three occurrences across three capitalisations.
    assert.match(out, /3 non-standard term/, out)
  })

  it('leaves correct networking usage alone', () => {
    // BGP "directly connected" is standard terminology. Flagging it would push
    // the author toward "simply connected" in a routing table, which is worse
    // than leaving it.
    const root = makeSite('networking', {
      'bgp.md':
        '---\ntitle: T\n---\n\nRouters flood information about their directly connected links.\n\nC 10.0.0.0/24 is directly connected, Ethernet0/0\n',
    })
    const out = lint(root)
    assert.match(out, /no invented terms/, out)
  })

  it('leaves correct prose alone in a non-mathematics site', () => {
    const root = makeSite('gcse', {
      'essay.md':
        '---\ntitle: T\n---\n\nEvery contextual point must be directly connected to a specific claim.\n',
    })
    const out = lint(root)
    assert.match(out, /no invented terms/, out)
  })

  it('accepts the standard term', () => {
    const root = makeSite('mathematics', {
      'ok.md':
        '---\ntitle: T\n---\n\nA path-connected space $X$ is **simply connected** if $\\pi_1(X) = \\{e\\}$.\n',
    })
    const out = lint(root)
    assert.match(out, /no invented terms/, out)
  })

  it('reports the file and line so the fix is locatable', () => {
    // The line number is asserted exactly rather than loosely. A linter that
    // reported every hit against line 1 -- or that counted frontmatter lines
    // the body reader skipped -- would still look correct to a regex checking
    // only for the filename, and the reader would be sent to the wrong line on
    // a 3,000-line page. Line 7 is the sixth body line: frontmatter occupies 1-3,
    // then a blank, then "line one", a blank, then the offending line.
    const root = makeSite('mathematics', {
      'a.md': '---\ntitle: T\n---\n\nline one\n\nline two is directly connected\n',
    })
    const out = lint(root)
    assert.match(out, /a\.md:7/, out)
  })
})
