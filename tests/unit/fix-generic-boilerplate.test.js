#!/usr/bin/env node
/**
 * Unit tests for scripts/fix-generic-boilerplate.py.
 *
 * The most-repeated paragraph in the network appears 706 times across 28 sites
 * and says nothing about any of them. This fixer removes that padding, under
 * two constraints that are the whole point:
 *
 *   1. A page is only touched if it stays at or above its tier minimum
 *      afterwards. Otherwise the boilerplate is left in place and the page is
 *      reported. A page below its minimum has not been fixed, only exposed,
 *      and that shortfall is editorial.
 *   2. A block carrying an aside fence is never removed.
 *
 * Constraint 2 exists because the first run broke 190 :::tip directives:
 * some boilerplate paragraphs have an aside's closing ::: glued to their last
 * line, so deleting them as prose orphaned the opener. Nothing about that
 * failure is visible in a paragraph-frequency measurement -- only the aside
 * gate caught it, which is why that gate runs first.
 */

const assert = require('node:assert')
const fs = require('node:fs')
const os = require('node:os')
const path = require('node:path')
const { execFileSync } = require('node:child_process')
const { after, describe, it } = require('node:test')

const REPO_ROOT = path.resolve(__dirname, '..', '..')
const FIXER = path.join(REPO_ROOT, 'scripts', 'fix-generic-boilerplate.py')

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

/**
 * Build a fixture network where `filler` is the most common paragraph, so it
 * clears the repetition threshold, and `content` is unique prose.
 */
function makeFixture({ filler, body, indexPage = false, tierPage = false }) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'generic-boilerplate-'))
  FIXTURE_DIRS.push(root)
  const site = path.join(root, 'sites', 'alpha')
  const docs = path.join(site, 'src', 'content', 'docs')
  fs.mkdirSync(docs, { recursive: true })
  fs.writeFileSync(
    path.join(site, 'astro.config.mjs'),
    "export default { site: 'https://alpha.wyattau.com' }\n",
  )

  const front = '---\ntitle: x\n---\n\n'
  // 40 pages carrying the filler, to push it past the threshold of 30.
  for (let i = 0; i < 40; i++) {
    fs.writeFileSync(path.join(docs, `pad${i}.md`), front + filler + '\n\n' + filler + '\n')
  }
  const target = path.join(docs, tierPage ? 'subject' : '', indexPage ? 'index.md' : 'page.md')
  fs.mkdirSync(path.dirname(target), { recursive: true })
  fs.writeFileSync(target, front + body + '\n')
  return { root, target }
}

function run(fixture, extra = []) {
  try {
    const stdout = execFileSync('python3', [FIXER, '--apply', ...extra, fixture.root], {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
    })
    return { code: 0, stdout, body: fs.readFileSync(fixture.target, 'utf8') }
  } catch (err) {
    return { code: err.status ?? 1, stdout: (err.stdout ?? '') + (err.stderr ?? ''), body: null }
  }
}

const FILLER =
  'Worked examples demonstrating the application of key concepts are covered in the detailed sub-pages linked above.'

describe('fix-generic-boilerplate.py', () => {
  it('removes filler from a page that stays above its minimum', () => {
    const unique = []
    for (let i = 0; i < 60; i++)
      unique.push(`Unique substantive sentence number ${i} about the topic.`)
    const f = makeFixture({ filler: FILLER, body: unique.join('\n\n') })
    const r = run(f)
    assert.ok(!r.body.includes('Worked examples demonstrating'), r.stdout)
    assert.ok(r.body.includes('Unique substantive sentence number 0'))
  })

  it('leaves a page alone rather than dropping it below its minimum', () => {
    // An index page is tier 1, minimum 30 body lines. Two filler paragraphs
    // removed from a short page would breach it, so nothing is removed and
    // the page is reported instead.
    const short = ['Short unique line about subject area.', 'Another unique sentence here.']
    // The target page must actually carry the filler, otherwise the assertion
    // checks for something that was never there.
    const f = makeFixture({
      filler: FILLER,
      body: `${FILLER}\n\n${short.join('\n\n')}`,
      indexPage: true,
    })
    const r = run(f, ['--report-blocked'])
    assert.ok(r.body.includes('Worked examples demonstrating'), 'must not go below minimum')
    assert.match(r.stdout, /blocked/)
  })

  it('never removes a block carrying an aside fence', () => {
    // The regression: an aside's closing fence glued to a boilerplate
    // paragraph. Deleting the paragraph orphans the :::tip opener.
    const unique = []
    for (let i = 0; i < 60; i++) unique.push(`Distinct content line ${i} with real material.`)
    const body = `${unique.join('\n\n')}\n\n:::tip\nA genuine tip.\n:::\n`
    const f = makeFixture({ filler: FILLER, body })
    const r = run(f)
    assert.ok(r.body.includes(':::tip'), 'the opener must survive')
    assert.ok(r.body.includes('A genuine tip.'))
  })

  it('keeps deliberate network-promotion boilerplate', () => {
    const unique = []
    for (let i = 0; i < 60; i++) unique.push(`Body line ${i} carrying actual explanation.`)
    const promo =
      'Visit [wyattsnotes.wyattau.com](https://wyattsnotes.wyattau.com) for the full network of study resources.'
    // Repeat the promo across the padding pages so it clears the threshold,
    // and put it in the target page too.
    const f = makeFixture({ filler: promo, body: `${promo}\n\n${unique.join('\n\n')}` })
    const r = run(f)
    assert.ok(r.body.includes('wyattsnotes.wyattau.com'), 'promo boilerplate is deliberate')
  })

  it('leaves tables, lists and headings alone', () => {
    const unique = []
    for (let i = 0; i < 60; i++) unique.push(`Explanation ${i} of a genuinely distinct idea.`)
    const body = `## A heading\n\n| a | b |\n| --- | --- |\n| 1 | 2 |\n\n- list item one\n- list item two\n\n${unique.join('\n\n')}`
    const f = makeFixture({ filler: FILLER, body })
    const r = run(f)
    assert.ok(r.body.includes('| a | b |'))
    assert.ok(r.body.includes('- list item one'))
    assert.ok(r.body.includes('## A heading'))
  })
})

describe('fix-generic-boilerplate.py on this repository', () => {
  it('has nothing removable left', () => {
    const { stdout } = (() => {
      try {
        const stdout = execFileSync('python3', [FIXER, '--check'], {
          cwd: REPO_ROOT,
          encoding: 'utf8',
          stdio: ['ignore', 'pipe', 'pipe'],
        })
        return { stdout, code: 0 }
      } catch (err) {
        return { stdout: (err.stdout ?? '') + (err.stderr ?? ''), code: err.status ?? 1 }
      }
    })()
    assert.match(stdout, /removed 0 across 0 file\(s\)/, `removable filler remains:\n${stdout}`)
  })
})
