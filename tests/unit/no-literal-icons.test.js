#!/usr/bin/env node
/**
 * Regression guard: interactive islands use Lucide icons, not literal glyphs.
 *
 * R3 replaced the literal `x` close button in BaseDialog and the hand-drawn
 * <svg> primitives in LocaleSwitcher with the shared Lucide icon components.
 * This test prevents reintroduction by failing if any of the target components
 * regress to a literal single-character close affordance or raw inline SVG
 * circle/line/polyline primitives (the icons module is now the source).
 *
 * Run: node --test tests/unit/no-literal-icons.test.js
 */

const { describe, it } = require('node:test')
const assert = require('node:assert')
const fs = require('node:fs')
const path = require('node:path')

const ROOT = path.join(__dirname, '..', '..')

const TARGETS = ['shared/components/BaseDialog.tsx', 'shared/components/LocaleSwitcher.tsx']

// A literal close affordance: a text node that is exactly a single character
// used as a "close" symbol (x, X, +, *). Matches `>x<` / `>X<` style text nodes.
const LITERAL_CLOSE_RE = />\s*[xX+*]\s*</

// Raw inline SVG drawing primitives that should live in the icons module, not
// in the interactive components. Lucide icons render <path> elements; the
// hand-drawn replacements used <circle>, <line>, and <polyline>.
const RAW_SVG_PRIMITIVE_RE = /<(circle|line|polyline)\b/

describe('no-literal-icons enforcement', () => {
  for (const rel of TARGETS) {
    it(`${rel} has no literal glyph close affordance`, () => {
      const content = fs.readFileSync(path.join(ROOT, rel), 'utf8')
      assert.ok(
        !LITERAL_CLOSE_RE.test(content),
        `${rel}: literal single-character close affordance found. Use IconX from shared/components/icons.`,
      )
    })

    it(`${rel} has no raw inline SVG circle/line/polyline primitives`, () => {
      const content = fs.readFileSync(path.join(ROOT, rel), 'utf8')
      assert.ok(
        !RAW_SVG_PRIMITIVE_RE.test(content),
        `${rel}: raw inline SVG primitive found. Use the shared Lucide icon components from shared/components/icons.`,
      )
    })
  }
})
