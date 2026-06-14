#!/usr/bin/env node
/**
 * Unit tests for the no-emoji linter (scripts/lint-no-emoji.js).
 *
 * Validates detection semantics (which characters are flagged, scope rules)
 * and asserts the current codebase is clean. Test fixtures use Unicode
 * escapes so the source file itself contains no pictograph characters.
 *
 * Run: node --test tests/unit/lint-no-emoji.test.js
 */

'use strict';

const { describe, it } = require('node:test');
const assert = require('node:assert');
const { execFileSync } = require('node:child_process');
const path = require('node:path');
const { EMOJI_RE, isErrorScope } = require('../../scripts/lint-no-emoji.js');

const ROOT = path.join(__dirname, '..', '..');

// Fixtures constructed from code points to keep this file pictograph-free.
const CHECK = String.fromCodePoint(0x2705); // WHITE HEAVY CHECK MARK
const CROSS = String.fromCodePoint(0x274c); // CROSS MARK
const CLOCK = String.fromCodePoint(0x1f550); // CLOCK FACE ONE OCLOCK
const PARTY = String.fromCodePoint(0x1f389); // PARTY POPPER
const HEART = String.fromCodePoint(0x2764); // HEAVY BLACK HEART

describe('EMOJI_RE detection', () => {
  it('flags pictograph-plane emoji', () => {
    assert.ok(EMOJI_RE.test('status OK ' + CHECK));
    assert.ok(EMOJI_RE.test('failed ' + CROSS));
    assert.ok(EMOJI_RE.test('clock ' + CLOCK));
    assert.ok(EMOJI_RE.test('party ' + PARTY));
    assert.ok(EMOJI_RE.test('heart ' + HEART));
  });

  it('does NOT flag legitimate typographic/mathematical notation', () => {
    // ASCII, math operators, and implication arrows are out of scope.
    assert.ok(!EMOJI_RE.test('A + B -> C'));
    assert.ok(!EMOJI_RE.test('x <= 0'));
    assert.ok(!EMOJI_RE.test('increase: +, decrease: -'));
    assert.ok(!EMOJI_RE.test('plain ascii text 123'));
  });

  it('is stateless across repeated exec calls', () => {
    assert.ok(EMOJI_RE.test('a ' + CHECK + ' b'));
    assert.ok(EMOJI_RE.test('a ' + CHECK + ' b'));
  });
});

describe('isErrorScope', () => {
  it('excludes content pages under sites/<site>/src/content/', () => {
    assert.strictEqual(
      isErrorScope(path.join(ROOT, 'sites/dse/src/content/docs/maths/x.md')),
      false,
    );
    assert.strictEqual(
      isErrorScope(path.join(ROOT, 'sites/ib/src/content/docs/foo.mdx')),
      false,
    );
  });

  it('includes code, config, and repo-level docs', () => {
    assert.strictEqual(isErrorScope(path.join(ROOT, 'search-api/worker.js')), true);
    assert.strictEqual(isErrorScope(path.join(ROOT, 'shared/components/FlashcardDeck.tsx')), true);
    assert.strictEqual(isErrorScope(path.join(ROOT, 'README.md')), true);
    assert.strictEqual(isErrorScope(path.join(ROOT, '.github/workflows/ci.yml')), true);
  });

  it('includes site data files (not content)', () => {
    assert.strictEqual(
      isErrorScope(path.join(ROOT, 'sites/dse/src/data/flashcards/x.js')),
      true,
    );
  });
});

describe('Repo-wide no-emoji enforcement', () => {
  it('lint-no-emoji exits 0 on the current tree', () => {
    // The whole tree must pass; CI and pre-commit rely on this.
    assert.doesNotThrow(() => {
      execFileSync('node', [path.join(ROOT, 'scripts', 'lint-no-emoji.js')], {
        cwd: ROOT,
        stdio: 'pipe',
      });
    }, 'lint-no-emoji must pass; remove emoji from code/docs/config');
  });
});
