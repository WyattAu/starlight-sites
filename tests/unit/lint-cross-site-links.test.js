#!/usr/bin/env node
/**
 * Unit tests for scripts/lint-cross-site-links.js.
 *
 * Absolute cross-zone links used to be invisible to every gate:
 * lint-link-graph.js resolves internal `/path/` links against the current
 * site's collections, and there is nothing local to resolve another zone's
 * URL against. Three dead ones shipped on one physics page before this
 * existed, and the check found 1,517 more.
 *
 * The check deliberately does not use the network. All 46 sites live in this
 * repository and each declares its own domain, so the target's routes are
 * enumerated from its content tree. That is not just cheaper -- probing every
 * zone over HTTP is what previously hit Cloudflare error 1027 on the free
 * tier, and a gate must not be able to take the network down.
 *
 * Both bugs below were found by checking the linter against production rather
 * than against its own intent, which is why they are pinned here.
 */

const assert = require('node:assert')
const fs = require('node:fs')
const os = require('node:os')
const path = require('node:path')
const { execFileSync } = require('node:child_process')
const { after, describe, it } = require('node:test')

const REPO_ROOT = path.resolve(__dirname, '..', '..')
const LINTER = path.join(REPO_ROOT, 'scripts', 'lint-cross-site-links.js')

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

/** Build a two-site fixture: `alpha` links into `beta`. */
function makeFixture(betaRoutes, linkPath) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'cross-site-links-'))
  FIXTURE_DIRS.push(root)
  const sites = path.join(root, 'sites')

  const beta = path.join(sites, 'beta')
  fs.mkdirSync(beta, { recursive: true, force: true })
  fs.writeFileSync(
    path.join(beta, 'astro.config.mjs'),
    "export default { site: 'https://beta.wyattau.com' }\n",
  )
  const betaDocs = path.join(beta, 'src', 'content', 'docs')
  for (const rel of betaRoutes) {
    const file = path.join(betaDocs, `${rel}.md`)
    fs.mkdirSync(path.dirname(file), { recursive: true })
    fs.writeFileSync(file, '---\ntitle: x\n---\n')
  }

  const alpha = path.join(sites, 'alpha')
  const alphaDocs = path.join(alpha, 'src', 'content', 'docs')
  fs.mkdirSync(alphaDocs, { recursive: true })
  fs.writeFileSync(
    path.join(alpha, 'astro.config.mjs'),
    "export default { site: 'https://alpha.wyattau.com' }\n",
  )
  fs.writeFileSync(
    path.join(alphaDocs, 'index.md'),
    `---\ntitle: x\n---\n\nSee [beta](https://beta.wyattau.com${linkPath})\n`,
  )
  return root
}

function run(root) {
  // The linter resolves the repo root from its own location, so it must be run
  // as the copy inside the fixture -- passing the real path would silently
  // check this repository instead and report its own backlog.
  const local = path.join(root, 'scripts', 'lint-cross-site-links.js')
  try {
    const stdout = execFileSync('node', [local], {
      cwd: root,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
    })
    return { code: 0, stdout }
  } catch (err) {
    return { code: err.status ?? 1, stdout: err.stdout ?? '', stderr: err.stderr ?? '' }
  }
}

/** Copy just the linter into the fixture root so it runs there. */
function installLinter(root) {
  const scripts = path.join(root, 'scripts')
  fs.mkdirSync(scripts, { recursive: true })
  fs.copyFileSync(LINTER, path.join(scripts, 'lint-cross-site-links.js'))
}

function check(betaRoutes, linkPath) {
  const root = makeFixture(betaRoutes, linkPath)
  installLinter(root)
  return run(root)
}

describe('lint-cross-site-links.js route derivation', () => {
  it('accepts a link to a page that exists', () => {
    const r = check(['maths/calculus'], '/maths/calculus/')
    assert.equal(r.code, 0, r.stderr || r.stdout)
    assert.match(r.stdout, /cross-site links resolve/)
  })

  it('accepts a link written without a trailing slash', () => {
    // Astro redirects /hub to /hub/. Comparing raw strings reported every such
    // link as dead; a sampled check against production is what caught it.
    const r = check(['hub'], '/hub')
    assert.equal(r.code, 0, `trailing slash must not matter:\n${r.stdout}`)
  })

  it('maps a section index.md to its directory route', () => {
    // The bug that mattered most: `chemistry/index.md` produced
    // `/chemistry/index/`, so every section landing page in the network was
    // reported dead. A sample that returned 200 in production found it.
    const r = check(['chemistry/index'], '/chemistry/')
    assert.equal(r.code, 0, `index.md must map to its directory:\n${r.stdout}`)
  })

  it('maps a nested index.md to its directory route', () => {
    const r = check(['maths/calculus/index'], '/maths/calculus/')
    assert.equal(r.code, 0, r.stdout)
  })

  it('rejects a link to a page that does not exist', () => {
    const r = check(['hub'], '/nope/')
    assert.equal(r.code, 1)
    // Findings go to stderr, which is where a linter's output belongs.
    assert.match(r.stderr, /dead cross-site link/)
  })
})

describe('lint-cross-site-links.js on this repository', () => {
  it('has no false positives against live routes', () => {
    // Every cross-zone route the network actually links to must resolve. If
    // route derivation regressed, this fails loudly instead of reporting
    // working links as dead.
    const { code, stdout, stderr } = (() => {
      try {
        const stdout = execFileSync('node', [LINTER], {
          cwd: REPO_ROOT,
          encoding: 'utf8',
          stdio: ['ignore', 'pipe', 'pipe'],
        })
        return { code: 0, stdout, stderr: '' }
      } catch (err) {
        return { code: err.status ?? 1, stdout: err.stdout ?? '', stderr: err.stderr ?? '' }
      }
    })()
    const m = /Found (\d+) dead cross-site link\(s\)/.exec(stdout + stderr)
    assert.ok(m, `unexpected output: ${stdout}${stderr}`)
    // The known, tracked backlog must not grow (818 after the /docs prefix repair). A route-derivation regression
    // shows up as a larger number rather than as a failing deploy, since the
    // gate is advisory while the backlog is worked down.
    assert.ok(Number(m[1]) <= 818, `dead cross-site links grew to ${m[1]}; expected <= 818`)
  })
})
