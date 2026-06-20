#!/usr/bin/env node
/**
 * Regression guard: no Docusaurus --ifm-* CSS variable shims remain.
 *
 * The Docusaurus -> Starlight migration completed (ADR-001, 2026-06-12). The
 * --ifm-* compatibility shims in shared/styles/custom.css were dead weight that
 * obscured the canonical --sl-color-* / --wn-* token system. They were removed
 * in GUI refactor phase R1 and every consumer (PhetSimulation, DesmosGraph,
 * flashcard/constants) was repointed at the real Starlight tokens.
 *
 * This test prevents reintroduction by failing if any `ifm-` reference is found
 * under shared/ (the canonical source that syncs to all nine sites).
 *
 * Run: node --test tests/unit/no-ifm-shims.test.js
 */

const { describe, it } = require('node:test')
const assert = require('node:assert')
const fs = require('node:fs')
const path = require('node:path')

const ROOT = path.join(__dirname, '..', '..')
const SHARED = path.join(ROOT, 'shared')

const TEXT_EXTENSIONS = new Set(['.css', '.ts', '.tsx', '.js', '.mjs', '.astro', '.json', '.html'])

function walk(dir) {
  const out = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      out.push(...walk(full))
    } else if (TEXT_EXTENSIONS.has(path.extname(entry.name))) {
      out.push(full)
    }
  }
  return out
}

describe('no-ifm-shims enforcement', () => {
  it('shared/ contains zero --ifm-* references', () => {
    const offenders = []
    for (const file of walk(SHARED)) {
      const content = fs.readFileSync(file, 'utf8')
      if (content.includes('ifm-')) {
        // Report every offending line for fast triage.
        content.split('\n').forEach((line, i) => {
          if (line.includes('ifm-')) {
            offenders.push(`${path.relative(ROOT, file)}:${i + 1}: ${line.trim()}`)
          }
        })
      }
    }
    assert.strictEqual(
      offenders.length,
      0,
      `--ifm-* shims reintroduced. Use --sl-color-* / --wn-* tokens instead:\n${offenders.join('\n')}`,
    )
  })
})
