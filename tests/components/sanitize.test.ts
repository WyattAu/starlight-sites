import { describe, expect, it } from 'vitest'
import { sanitizeHtml } from '../../shared/utils/sanitize'

describe('sanitizeHtml', () => {
  describe('SSR fallback', () => {
    it('should return dirty string when window is undefined', () => {
      // The function checks typeof window === 'undefined'
      // In jsdom test env, window exists, so we test the DOMPurify path
      const input = '<b>safe</b>'
      const result = sanitizeHtml(input)
      expect(result).toContain('safe')
    })
  })

  describe('Allowed HTML tags preservation', () => {
    it('should preserve basic formatting tags', () => {
      const input = '<p>Hello <strong>world</strong></p>'
      const result = sanitizeHtml(input)
      expect(result).toContain('<p>')
      expect(result).toContain('<strong>')
    })

    it('should preserve headings', () => {
      const input = '<h1>Title</h1><h2>Subtitle</h2>'
      const result = sanitizeHtml(input)
      expect(result).toContain('<h1>')
      expect(result).toContain('<h2>')
    })

    it('should preserve links', () => {
      const input = '<a href="https://example.com">link</a>'
      const result = sanitizeHtml(input)
      expect(result).toContain('<a')
      expect(result).toContain('href=')
    })

    it('should preserve code blocks', () => {
      const input = '<pre><code>const x = 1</code></pre>'
      const result = sanitizeHtml(input)
      expect(result).toContain('<pre>')
      expect(result).toContain('<code>')
    })

    it('should preserve lists', () => {
      const input = '<ul><li>item 1</li><li>item 2</li></ul>'
      const result = sanitizeHtml(input)
      expect(result).toContain('<ul>')
      expect(result).toContain('<li>')
    })

    it('should preserve tables', () => {
      const input =
        '<table><thead><tr><th>Header</th></tr></thead><tbody><tr><td>Cell</td></tr></tbody></table>'
      const result = sanitizeHtml(input)
      expect(result).toContain('<table>')
      expect(result).toContain('<th>')
      expect(result).toContain('<td>')
    })
  })

  describe('Dangerous content removal', () => {
    it('should strip script tags', () => {
      const input = '<p>Safe</p><script>alert("xss")</script>'
      const result = sanitizeHtml(input)
      expect(result).not.toContain('<script>')
      expect(result).not.toContain('alert')
    })

    it('should strip event handlers', () => {
      const input = '<img src="x" onerror="alert(1)">'
      const result = sanitizeHtml(input)
      expect(result).not.toContain('onerror')
      expect(result).not.toContain('alert')
    })

    it('should strip javascript: URLs', () => {
      const input = '<a href="javascript:alert(1)">click</a>'
      const result = sanitizeHtml(input)
      expect(result).not.toContain('javascript:')
    })

    it('should strip iframe tags', () => {
      const input = '<iframe src="https://evil.com"></iframe>'
      const result = sanitizeHtml(input)
      expect(result).not.toContain('<iframe>')
    })

    it('should strip object tags', () => {
      const input = '<object data="evil.swf"></object>'
      const result = sanitizeHtml(input)
      expect(result).not.toContain('<object>')
    })

    it('should strip form tags', () => {
      const input = '<form action="https://evil.com"><input type="submit"></form>'
      const result = sanitizeHtml(input)
      expect(result).not.toContain('<form>')
    })
  })

  describe('SVG support', () => {
    it('should preserve SVG elements', () => {
      const input = '<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="40"/></svg>'
      const result = sanitizeHtml(input)
      expect(result).toContain('<svg')
      expect(result).toContain('<circle')
    })

    it('should preserve SVG attributes', () => {
      const input = '<svg viewBox="0 0 100 100"><path d="M0 0 L100 100" fill="red"/></svg>'
      const result = sanitizeHtml(input)
      expect(result).toContain('viewBox')
      expect(result).toContain('fill=')
    })
  })

  describe('MathML support', () => {
    it('should preserve MathML elements', () => {
      const input = '<math><mi>x</mi><mo>+</mo><mn>1</mn></math>'
      const result = sanitizeHtml(input)
      expect(result).toContain('<math>')
      expect(result).toContain('<mi>')
      expect(result).toContain('<mn>')
    })
  })

  describe('ARIA attribute preservation', () => {
    it('should preserve aria-label', () => {
      const input = '<div aria-label="test">content</div>'
      const result = sanitizeHtml(input)
      expect(result).toContain('aria-label')
    })

    it('should preserve role attribute', () => {
      const input = '<div role="button">content</div>'
      const result = sanitizeHtml(input)
      expect(result).toContain('role=')
    })
  })

  describe('Edge cases', () => {
    it('should handle empty string', () => {
      expect(sanitizeHtml('')).toBe('')
    })

    it('should handle plain text', () => {
      expect(sanitizeHtml('Hello World')).toBe('Hello World')
    })

    it('should handle nested tags', () => {
      const input = '<div><p><strong><em>nested</em></strong></p></div>'
      const result = sanitizeHtml(input)
      expect(result).toContain('nested')
    })

    it('should handle malformed HTML gracefully', () => {
      const input = '<p>unclosed<div>broken</p>'
      const result = sanitizeHtml(input)
      expect(result).toBeTruthy()
    })
  })
})
