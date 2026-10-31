#!/usr/bin/env node
/**
 * Unit tests for how the workflows hand a build directory to wrangler.
 *
 * Every upload is `wrangler pages deploy <dir>`. The workflows passed the bare
 * relative word `dist`, which leaves the whole path construction to wrangler's
 * internal `path.join` of the directory against some base it derives itself.
 * That went wrong in production: a rollback of the `alevel` site died with
 *
 *     Error: Cannot compress file //dist/...
 *
 * a doubled path separator, mid-rollback, on the one job whose entire job is
 * to restore service. The zone kept serving its previous good build, so nothing
 * broke visibly -- which is exactly why it sat uninvestigated.
 *
 * Two things are pinned here.
 *
 * The directory is now an absolute, already-normalised path built by the shell
 * (`"$PWD/dist"`). A shell-produced absolute path cannot pick up a doubled
 * separator from a join performed by the tool it is handed to, so the class of
 * failure is removed rather than debugged.
 *
 * And the upload is gated on the build actually existing. `wrangler pages
 * deploy` pointed at a missing or empty directory does not fail in a way that
 * names the real problem; it fails somewhere inside asset compression. A
 * preflight that checks for the built `index.html` and exits with an `::error::`
 * annotation converts "Cannot compress file //dist/..." into "the build for
 * this site produced no index.html at <path>", which is actionable.
 *
 * The assertions run over all three workflows rather than one, because the same
 * line was copy-pasted into six places and the six places drifted: `deploy.yml`
 * had three invocations, `rollback.yml` two, `preview.yml` one.
 */

const assert = require('node:assert')
const fs = require('node:fs')
const path = require('node:path')
const { describe, it } = require('node:test')

const REPO_ROOT = path.resolve(__dirname, '..', '..')
const WORKFLOW_DIR = path.join(REPO_ROOT, '.github', 'workflows')
const WORKFLOWS = ['deploy.yml', 'rollback.yml', 'preview.yml']

/** Every line in every workflow that invokes wrangler's pages deploy. */
function wranglerLines() {
  const found = []
  for (const name of WORKFLOWS) {
    const file = path.join(WORKFLOW_DIR, name)
    const lines = fs.readFileSync(file, 'utf8').split('\n')
    lines.forEach((line, index) => {
      if (/wrangler\s+pages\s+deploy/.test(line)) {
        found.push({ name, lineNo: index + 1, line })
      }
    })
  }
  return found
}

/** The whole `run:` script of the step containing a given line. */
function enclosingStep(name, lineNo) {
  const lines = fs.readFileSync(path.join(WORKFLOW_DIR, name), 'utf8').split('\n')
  let start = lineNo - 1
  while (start >= 0 && !/^\s*run:/.test(lines[start])) start--
  assert.ok(start >= 0, `no run: found above ${name}:${lineNo}`)
  // `run: |` (and `>`, with any chomping indicator) means the script is the
  // indented block below; a bare `run:` carries its command inline.
  if (!/^run:\s*[|>][-+]?\s*$/.test(lines[start].trim())) return lines[start]
  const indent = lines[start].match(/^\s*/)[0].length
  const body = []
  for (let i = start + 1; i < lines.length; i++) {
    if (lines[i].trim() === '') {
      body.push(lines[i])
      continue
    }
    if (lines[i].match(/^\s*/)[0].length <= indent) break
    body.push(lines[i])
  }
  return [lines[start], ...body].join('\n')
}

describe('wrangler pages deploy receives a safe, verified directory', () => {
  const invocations = wranglerLines()

  it('finds every wrangler pages deploy in the workflows', () => {
    // Six was the count before this test existed. If a future workflow adds an
    // upload site, this number must move with it or the assertions below are
    // quietly checking less than they claim to.
    assert.equal(
      invocations.length,
      6,
      `expected 6 wrangler pages deploy invocations, found ${invocations.length}: ` +
        invocations.map(i => `${i.name}:${i.lineNo}`).join(', '),
    )

    for (const inv of invocations) {
      assert.ok(
        !/wrangler\s+pages\s+deploy\s+dist\b/.test(inv.line),
        `${inv.name}:${inv.lineNo} still passes the bare relative \`dist\` to wrangler; ` +
          'a relative path is resolved by wrangler internals and produced ' +
          '"Cannot compress file //dist/..." mid-rollback',
      )
    }
  })

  it('passes an absolute, shell-built directory variable', () => {
    for (const inv of invocations) {
      assert.match(
        inv.line,
        /wrangler\s+pages\s+deploy\s+"\$dist_dir"/,
        `${inv.name}:${inv.lineNo} must pass the quoted "$dist_dir" absolute path, got: ${inv.line.trim()}`,
      )
    }
  })

  it('builds dist_dir from $PWD so the path is absolute before wrangler sees it', () => {
    for (const inv of invocations) {
      const step = enclosingStep(inv.name, inv.lineNo)
      assert.match(
        step,
        /dist_dir="\$PWD\//,
        `${inv.name}:${inv.lineNo} must set dist_dir from $PWD; a relative dist_dir just moves the ` +
          'same path-joining problem',
      )
    }
  })

  it('refuses to upload when the build produced no index.html', () => {
    for (const inv of invocations) {
      const step = enclosingStep(inv.name, inv.lineNo)
      assert.match(
        step,
        /-f "\$dist_dir\/index\.html"/,
        `${inv.name}:${inv.lineNo} must check for the built index.html before uploading`,
      )
      assert.match(
        step,
        /::error::/,
        `${inv.name}:${inv.lineNo} must fail with an ::error:: annotation; a bare exit 1 in a ` +
          'rollback is invisible in the GitHub UI',
      )
    }
  })

  it('has not let the six invocations drift apart', () => {
    const byWorkflow = {}
    for (const inv of invocations) {
      byWorkflow[inv.name] = (byWorkflow[inv.name] || 0) + 1
    }
    // The landing-page rollback builds and uploads in one step, so its preflight
    // and its build share a script; the others are separate steps. Either way
    // every one of the six carries both fixes, which the tests above pin.
    assert.deepEqual(byWorkflow, { 'deploy.yml': 3, 'rollback.yml': 2, 'preview.yml': 1 })
  })
})
