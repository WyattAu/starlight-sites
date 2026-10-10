#!/usr/bin/env node
/**
 * Unit tests for the deploy base ref in .github/workflows/deploy.yml.
 *
 * The changed-site detection decides which of the 45 sites get rolled out. It
 * is supposed to diff against `last-good-deploy`, the tag mark-good moves after
 * a fully successful deploy, so that a run only rebuilds what is actually
 * stale.
 *
 * It shipped pointing at `refs/remotes/origin/last-good-deploy`, which never
 * exists: actions/checkout fetches tags into `refs/tags/*` and has no such
 * remote-tracking ref. The `rev-parse --verify --quiet` guard swallowed the
 * miss, execution fell through to `github.event.before`, and the filter ended
 * up diffing only the single latest push. Consequence: when a push superseded
 * an earlier queued run, every site change from the superseded commit was
 * silently excluded from the rollout, and the run still reported success. A
 * rebuilt page simply never went live.
 *
 * This is the class the test exists to kill. A shell guard that quietly falls
 * back is indistinguishable from one that works, so the ref has to be pinned
 * and the ref form has to be checked against real git, not against intent.
 */

const assert = require('node:assert')
const fs = require('node:fs')
const os = require('node:os')
const path = require('node:path')
const { execFileSync } = require('node:child_process')
const { after, describe, it } = require('node:test')

const REPO_ROOT = path.resolve(__dirname, '..', '..')
const WORKFLOW = path.join(REPO_ROOT, '.github', 'workflows', 'deploy.yml')
const workflow = fs.readFileSync(WORKFLOW, 'utf8')

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

function git(cwd, args) {
  return execFileSync('git', args, {
    cwd,
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  }).trim()
}

function resolves(cwd, ref) {
  try {
    git(cwd, ['rev-parse', '--verify', '--quiet', ref])
    return true
  } catch {
    return false
  }
}

/** Build a repo laid out the way actions/checkout leaves one, with a tag. */
function makeRepoWithTag(tagName) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'deploy-base-ref-'))
  FIXTURE_DIRS.push(dir)
  git(dir, ['init', '-q', '.'])
  git(dir, ['config', 'user.email', 'test@example.invalid'])
  git(dir, ['config', 'user.name', 'test'])
  git(dir, ['commit', '-q', '--allow-empty', '-m', 'first'])
  const sha = git(dir, ['rev-parse', 'HEAD'])
  git(dir, ['commit', '-q', '--allow-empty', '-m', 'second'])
  git(dir, ['tag', tagName, sha])
  return { dir, sha }
}

describe('deploy.yml changed-site detection base ref', () => {
  it('resolves the deploy base from refs/tags, not refs/remotes/origin', () => {
    assert.ok(
      workflow.includes('BASE="refs/tags/${LAST_GOOD_TAG}"'),
      'deploy.yml must resolve last-good-deploy as refs/tags/${LAST_GOOD_TAG}; ' +
        'refs/remotes/origin/* is never populated by actions/checkout',
    )
    assert.ok(
      !/BASE="refs\/remotes\/origin\//.test(workflow),
      'deploy.yml must not resolve the deploy base from refs/remotes/origin/*',
    )
  })

  it('uses a ref form that real git can resolve in a checkout-shaped repo', () => {
    const { dir, sha } = makeRepoWithTag('last-good-deploy')

    // The ref the workflow now uses must resolve...
    assert.ok(
      resolves(dir, 'refs/tags/last-good-deploy'),
      'refs/tags/last-good-deploy must resolve against a repo carrying the tag',
    )
    assert.equal(git(dir, ['rev-parse', 'refs/tags/last-good-deploy']), sha)

    // ...and the form that caused the silent under-deploy must not, so a
    // regression here is visible as a failing test rather than a stale diff.
    assert.ok(
      !resolves(dir, 'refs/remotes/origin/last-good-deploy'),
      'refs/remotes/origin/last-good-deploy resolving would mean this test no ' +
        'longer reproduces the original defect',
    )
  })

  it('fetches the tag explicitly, since mark-good force-moves it', () => {
    // Built from parts so the literal characters `${` never appear in a plain
    // string (biome noTemplateCurlyInString).
    const tagRef = 'refs/tags/' + '\\$\\{LAST_GOOD_TAG\\}'
    const fetchLine = new RegExp(`git fetch .*${tagRef}:${tagRef}`)
    assert.ok(
      fetchLine.test(workflow),
      'deploy.yml must fetch the last-good-deploy tag explicitly; mark-good ' +
        'force-moves the tag, so a checkout that raced a tag move can be stale',
    )
  })

  it('makes the fallback loud instead of silent', () => {
    const step = workflow.slice(
      workflow.indexOf('- name: Detect sites changed since last good deploy'),
    )
    const untilNextStep = step.slice(0, step.indexOf('\n      - name:', 10))

    assert.ok(
      untilNextStep.includes('::warning::'),
      'the event.before fallback must emit a ::warning:: annotation; a silent ' +
        'fallback is indistinguishable from the tag having worked',
    )
    assert.ok(
      /echo "Diff base:/.test(untilNextStep),
      'the detected diff base must be logged, so a wrong base is visible in logs',
    )
  })

  it('keeps mark-good gated on full success', () => {
    const markGood = workflow.slice(workflow.indexOf('\n  mark-good:'))
    const block = markGood.slice(0, markGood.indexOf('\n  rollback-on-failure:'))

    assert.ok(
      /needs:.*deploy-canary.*deploy-rollout/s.test(block),
      'mark-good must depend on the deploy jobs so a cancelled or failed ' +
        'rollout cannot advance the deploy base',
    )
    assert.ok(/if: success\(\)/.test(block), 'mark-good must require success()')
    assert.ok(
      !/if:.*always\(\)/.test(block),
      'mark-good must not run under always(); that would advance the deploy ' +
        'base on a failed deploy',
    )
  })
})
