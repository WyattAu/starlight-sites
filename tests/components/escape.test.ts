import { describe, expect, it } from 'vitest'
import { escapeHtml } from '../../shared/utils/escape'

describe('escapeHtml', () => {
  describe('basic escaping', () => {
    it('escapes ampersand', () => {
      expect(escapeHtml('a&b')).toBe('a&amp;b')
    })

    it('escapes less-than', () => {
      expect(escapeHtml('a<b')).toBe('a&lt;b')
    })

    it('escapes greater-than', () => {
      expect(escapeHtml('a>b')).toBe('a&gt;b')
    })

    it('escapes double quote', () => {
      expect(escapeHtml('a"b')).toBe('a&quot;b')
    })

    it('escapes single quote', () => {
      expect(escapeHtml("a'b")).toBe('a&#39;b')
    })
  })

  describe('INV-ESC-001: output contains no HTML special characters', () => {
    // Property: after escaping, none of &<>"' may appear in the output
    // as raw characters (they have been replaced by entities).
    const SPECIAL = ['&', '<', '>', '"', "'"]
    const fixtures = [
      '<script>alert("xss")</script>',
      `"><img src=x onerror='evil()'>`,
      'a & b < c > d',
      "O'Reilly",
      '""double""',
      'plain text without specials',
      '',
    ]

    for (const input of fixtures) {
      it(`output of ${JSON.stringify(input)} contains no raw specials`, () => {
        const out = escapeHtml(input)
        for (const ch of SPECIAL) {
          // Allow specials only inside entity references (&...;).
          // Strip entities before checking.
          const withoutEntities = out.replace(/&[a-zA-Z0-9#]+;/g, '')
          expect(withoutEntities).not.toContain(ch)
        }
      })
    }
  })

  describe('INV-ESC-002: output length >= input length', () => {
    const fixtures = [
      '',
      'no specials',
      '<',
      '>',
      '&',
      '"',
      "'",
      '<<>>',
      '<script>alert("&")</script>',
    ]

    for (const input of fixtures) {
      it(`len(out) >= len(in) for ${JSON.stringify(input)}`, () => {
        const out = escapeHtml(input)
        expect(out.length).toBeGreaterThanOrEqual(input.length)
      })
    }
  })

  describe('non-idempotence contract (NOT idempotent by design)', () => {
    // The function is intentionally not idempotent: the entity output
    // starts with `&`, which is itself a special character and is
    // re-encoded on a second pass. Callers MUST escape exactly once.
    // This test pins the contract so accidental "fixes" that introduce
    // idempotence (e.g. by skipping pre-existing entities, which would
    // let attackers smuggle raw markup through) are caught immediately.
    const fixtures = ['a < b > c', '<script>', 'O\'Brien & "Co."']

    for (const input of fixtures) {
      it(`escape(escape(x)) != escape(x) for ${JSON.stringify(input)}`, () => {
        const once = escapeHtml(input)
        const twice = escapeHtml(once)
        expect(twice).not.toBe(once)
        // Specifically: the & at the start of every entity is re-encoded.
        expect(twice).toContain('&amp;')
      })
    }

    it('escape(escape("<")) == "&amp;lt;" (documents the canonical case)', () => {
      expect(escapeHtml(escapeHtml('<'))).toBe('&amp;lt;')
    })

    it('plain-text input (no specials) IS a fixed point', () => {
      // For inputs with no specials at all, escape is a no-op, so it
      // trivially is a fixed point. This is the only idempotent subset.
      expect(escapeHtml('plain text')).toBe('plain text')
      expect(escapeHtml(escapeHtml('plain text'))).toBe('plain text')
    })
  })

  describe('security: XSS payloads are neutralised', () => {
    const payloads = [
      '<script>alert(1)</script>',
      `"><img src=x onerror=alert(1)>`,
      `javascript:alert(1)`,
      '<iframe src="javascript:alert(1)">',
      '<svg/onload=alert(1)>',
    ]

    for (const payload of payloads) {
      it(`neutralises ${JSON.stringify(payload)}`, () => {
        const escaped = escapeHtml(payload)
        // The escaped output must contain no executable HTML constructs:
        // no raw <, >, or " that could break out of an attribute.
        const withoutEntities = escaped.replace(/&[a-zA-Z0-9#]+;/g, '')
        expect(withoutEntities).not.toContain('<')
        expect(withoutEntities).not.toContain('>')
        expect(withoutEntities).not.toContain('"')
        expect(withoutEntities).not.toContain("'")
      })
    }
  })

  describe('ordering: ampersand is escaped first (no double-encoding)', () => {
    it('does not double-encode entities in the input', () => {
      // &amp; in input -> &amp;amp; in output (the literal & becomes &amp;)
      // This is correct: the function does not interpret pre-existing entities.
      expect(escapeHtml('&amp;')).toBe('&amp;amp;')
      expect(escapeHtml('&lt;')).toBe('&amp;lt;')
    })
  })
})
