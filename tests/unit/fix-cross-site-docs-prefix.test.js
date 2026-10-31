#!/usr/bin/env node
/**
 * Unit tests for scripts/fix-cross-site-docs-prefix.py.
 *
 * When the collections were split into numbered subject directories, a batch of
 * cross-site links was left pointing at `/docs/<...>`, which 404s now. Most of
 * them have a repair that is provable rather than a judgement call, and the
 * distinction is the whole point of this fixer:
 *
 *   SAFE   dropping the stale prefix yields a route that exists. The full
 *          intended path survives, so the link names exactly one real page.
 *   UNSAFE dropping it does not. Choosing a target then requires knowing which
 *          page the author meant, which is editorial, so those are reported.
 *
 * The renumber rule restores the numeric directory prefix that the subject
 * split introduced (`classical-mechanics` -> `1-classical-mechanics`). Its
 * first implementation matched `/<n>-<slug>` anywhere in a route, which also
 * matched the directory prefix of every page *under* that directory: 16 routes
 * instead of 1, so it silently refused to repair. Pinning that is the reason
 * these tests exist.
 */

const assert = require('node:assert')
const fs = require('node:fs')
const os = require('node:os')
const path = require('node:path')
const { execFileSync } = require('node:child_process')
const { after, describe, it } = require('node:test')

const REPO_ROOT = path.resolve(__dirname, '..', '..')
const FIXER = path.join(REPO_ROOT, 'scripts', 'fix-cross-site-docs-prefix.py')

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
 * Build a fixture network.
 *
 * @param routes    routes the target site publishes, as paths under its docs
 * @param link      the URL the source page links to
 */
function makeFixture(routes, link) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'docs-prefix-'))
  FIXTURE_DIRS.push(root)
  const beta = path.join(root, 'sites', 'beta')
  fs.mkdirSync(beta, { recursive: true })
  fs.writeFileSync(
    path.join(beta, 'astro.config.mjs'),
    "export default { site: 'https://beta.wyattau.com' }\n",
  )
  const docs = path.join(beta, 'src', 'content', 'docs')
  for (const rel of routes) {
    const file = path.join(docs, `${rel}.md`)
    fs.mkdirSync(path.dirname(file), { recursive: true })
    fs.writeFileSync(file, '---\ntitle: x\n---\n')
  }
  const alpha = path.join(root, 'sites', 'alpha')
  const alphaDocs = path.join(alpha, 'src', 'content', 'docs')
  fs.mkdirSync(alphaDocs, { recursive: true })
  fs.writeFileSync(
    path.join(alpha, 'astro.config.mjs'),
    "export default { site: 'https://alpha.wyattau.com' }\n",
  )
  fs.writeFileSync(path.join(alphaDocs, 'index.md'), `---\ntitle: x\n---\n\n[go](${link})\n`)
  return root
}

function run(routes, link, extra = []) {
  const root = makeFixture(routes, link)
  try {
    const stdout = execFileSync('python3', [FIXER, '--apply', ...extra, root], {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
    })
    const body = fs.readFileSync(
      path.join(root, 'sites', 'alpha', 'src', 'content', 'docs', 'index.md'),
      'utf8',
    )
    return { body, stdout }
  } catch (err) {
    return { body: null, stdout: (err.stdout ?? '') + (err.stderr ?? '') }
  }
}

describe('fix-cross-site-docs-prefix.py: provable repairs', () => {
  it('drops the stale /docs prefix when the rest of the path exists', () => {
    const r = run(['chemistry/redox'], 'https://beta.wyattau.com/docs/chemistry/redox/')
    assert.match(r.body, /\]\(https:\/\/beta\.wyattau\.com\/chemistry\/redox\/\)/)
  })

  it('also drops a redundant copy of the site slug', () => {
    const r = run(['chemistry/redox'], 'https://beta.wyattau.com/docs/beta/chemistry/redox')
    assert.match(r.body, /\]\(https:\/\/beta\.wyattau\.com\/chemistry\/redox\/\)/)
  })

  it('restores the numeric directory prefix the subject split introduced', () => {
    const r = run(
      ['1-classical-mechanics/index'],
      'https://beta.wyattau.com/docs/classical-mechanics',
    )
    assert.match(r.body, /\/1-classical-mechanics\//, r.stdout)
  })

  it('restores the prefix from the top-level directory, not a nested prefix', () => {
    // The regression: matching `/<n>-<slug>` anywhere matched the 16 routes
    // *under* the directory as well, so the rule saw no unique answer.
    const routes = [
      '1-classical-mechanics/index',
      '1-classical-mechanics/3_lagrangian',
      '1-classical-mechanics/4_hamiltonian',
      '1-classical-mechanics/5_noether',
    ]
    const r = run(routes, 'https://beta.wyattau.com/docs/classical-mechanics')
    assert.match(r.body, /\/1-classical-mechanics\//, r.stdout)
  })

  it('leaves a working link untouched', () => {
    const r = run(['hub/index'], 'https://beta.wyattau.com/hub/')
    assert.match(r.body, /\]\(https:\/\/beta\.wyattau\.com\/hub\/\)/)
    assert.match(r.stdout, /repaired 0 link/)
  })
})

describe('fix-cross-site-docs-prefix.py: editorial cases are left alone', () => {
  it('does not guess when no route matches', () => {
    // /docs/calculus has no route on this site -- only /vector-calculus/ does,
    // and which of several calculus pages was meant is an editorial decision.
    const r = run(['vector-calculus/index'], 'https://beta.wyattau.com/docs/calculus')
    assert.match(r.body, /\]\(https:\/\/beta\.wyattau\.com\/docs\/calculus\)/)
  })

  it('does not guess when two directories would match the slug', () => {
    const r = run(['1-advanced/x', '2-advanced/y'], 'https://beta.wyattau.com/docs/advanced')
    assert.match(r.body, /\]\(https:\/\/beta\.wyattau\.com\/docs\/advanced\)/)
  })

  it('reports what it declined to repair', () => {
    const r = run(['hub/index'], 'https://beta.wyattau.com/docs/nothing-here', ['--report-unfixed'])
    assert.match(r.stdout, /unresolved/)
    assert.match(r.stdout, /beta\.wyattau\.com\/docs\/nothing-here/)
  })
})

describe('fix-cross-site-docs-prefix.py on this repository', () => {
  it('has nothing left to repair', () => {
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
    assert.match(stdout, /repaired 0 link\(s\)/, `stale /docs links remain:\n${stdout}`)
  })
})
