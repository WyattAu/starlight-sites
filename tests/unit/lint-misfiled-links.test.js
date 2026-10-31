#!/usr/bin/env node
/**
 * Unit tests for the misfiled-link rule in lint-cross-site-links.js.
 *
 * An internal-style link `/x` written on a site whose own routes do not
 * include `/x`, where exactly one *other* site has that route, is a link to
 * the wrong site. Three of these were written in one session -- all pointing
 * at physics routes from mathematics pages -- and every one resolved as a 404
 * while looking completely plausible in the source.
 *
 * The rule is deliberately strict: a route that exists on two or more other
 * sites is not reported, because `/hub/` and `/glossary/` exist everywhere and
 * flagging them would be noise rather than signal.
 */

const assert = require('node:assert')
const fs = require('node:fs')
const os = require('node:os')
const path = require('node:path')
const { execFileSync } = require('node:child_process')
const { after, describe, it } = require('node:test')

const REPO_ROOT = path.resolve(__dirname, '..', '..')
const LINTER = path.join(REPO_ROOT, 'scripts', 'lint-cross-site-links.js')

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

function makeNetwork(files, configs) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'misfiled-links-'))
  FIXTURE_DIRS.push(root)
  const sites = path.join(root, 'sites')
  for (const [site, cfg] of Object.entries(configs)) {
    const dir = path.join(sites, site)
    fs.mkdirSync(dir, { recursive: true })
    fs.writeFileSync(path.join(dir, 'astro.config.mjs'), cfg)
  }
  for (const [rel, body] of Object.entries(files)) {
    const file = path.join(sites, rel)
    fs.mkdirSync(path.dirname(file), { recursive: true })
    fs.writeFileSync(file, body)
  }
  return root
}

function run(root) {
  const local = path.join(root, 'scripts', 'lint-cross-site-links.js')
  fs.mkdirSync(path.dirname(local), { recursive: true })
  fs.copyFileSync(LINTER, local)
  try {
    const stdout = execFileSync('node', [local], {
      cwd: root,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
    })
    return { code: 0, stdout, stderr: '' }
  } catch (err) {
    return { code: err.status ?? 1, stdout: err.stdout ?? '', stderr: err.stderr ?? '' }
  }
}

const CFG = host => `export default { site: 'https://${host}.wyattau.com' }\n`

describe('lint-cross-site-links.js misfiled-link rule', () => {
  it('flags an internal link whose route exists on exactly one other site', () => {
    const root = makeNetwork(
      {
        'alpha/src/content/docs/index.md': '---\ntitle: x\n---\n\n[go](/only-on-beta/)\n',
        'beta/src/content/docs/only-on-beta.md': '---\ntitle: x\n---\n',
        'gamma/src/content/docs/gamma-only.md': '---\ntitle: x\n---\n',
      },
      { alpha: CFG('alpha'), beta: CFG('beta'), gamma: CFG('gamma') },
    )
    const r = run(root)
    assert.match(r.stdout, /exists only on beta\.wyattau\.com/, r.stdout + r.stderr)
  })

  it('does not flag a route that exists on the source site', () => {
    const root = makeNetwork(
      {
        'alpha/src/content/docs/own.md': '---\ntitle: x\n---\n',
        'alpha/src/content/docs/index.md': '---\ntitle: x\n---\n\n[go](/own/)\n',
      },
      { alpha: CFG('alpha'), beta: CFG('beta') },
    )
    const r = run(root)
    assert.doesNotMatch(r.stdout, /written as internal/, r.stdout + r.stderr)
  })

  it('does not flag a route that exists on two other sites', () => {
    // /hub/ exists on many sites; flagging it would be noise.
    const root = makeNetwork(
      {
        'alpha/src/content/docs/index.md': '---\ntitle: x\n---\n\n[go](/hub/)\n',
        'beta/src/content/docs/hub.md': '---\ntitle: x\n---\n',
        'gamma/src/content/docs/hub.md': '---\ntitle: x\n---\n',
      },
      { alpha: CFG('alpha'), beta: CFG('beta'), gamma: CFG('gamma') },
    )
    const r = run(root)
    assert.doesNotMatch(r.stdout, /written as internal/, r.stdout + r.stderr)
  })

  it('does not flag the site root', () => {
    const root = makeNetwork(
      {
        'alpha/src/content/docs/index.md': '---\ntitle: x\n---\n\n[home](/)\n',
      },
      { alpha: CFG('alpha'), beta: CFG('beta') },
    )
    const r = run(root)
    assert.doesNotMatch(r.stdout, /written as internal/, r.stdout + r.stderr)
  })
})
