import { describe, expect, it } from 'vitest'
import type { Difficulty } from '../../shared/utils/colors'
import { COLORS, MASTERY_COLORS } from '../../shared/utils/colors'

describe('colors module', () => {
  describe('COLORS', () => {
    it('should have all required color constants', () => {
      expect(COLORS.success).toBe('#2ecc71')
      expect(COLORS.warning).toBe('#f39c12')
      expect(COLORS.error).toBe('#e74c3c')
      expect(COLORS.info).toBe('#3498db')
    })

    it('should have valid hex color format', () => {
      const hexColorRegex = /^#[0-9A-Fa-f]{6}$/
      expect(COLORS.success).toMatch(hexColorRegex)
      expect(COLORS.warning).toMatch(hexColorRegex)
      expect(COLORS.error).toMatch(hexColorRegex)
      expect(COLORS.info).toMatch(hexColorRegex)
    })
  })

  describe('MASTERY_COLORS', () => {
    it('should map mastery levels to colors', () => {
      expect(MASTERY_COLORS.new).toBe('#95a5a6')
      expect(MASTERY_COLORS.learning).toBe(COLORS.warning)
      expect(MASTERY_COLORS.review).toBe(COLORS.info)
      expect(MASTERY_COLORS.mastered).toBe(COLORS.success)
    })

    it('should have all mastery levels', () => {
      expect(MASTERY_COLORS.new).toBeTruthy()
      expect(MASTERY_COLORS.learning).toBeTruthy()
      expect(MASTERY_COLORS.review).toBeTruthy()
      expect(MASTERY_COLORS.mastered).toBeTruthy()
    })
  })

  describe('Type definitions', () => {
    it('should accept valid difficulty types', () => {
      const difficulties: Difficulty[] = ['easy', 'medium', 'hard']
      expect(difficulties).toHaveLength(3)
      for (const d of difficulties) {
        expect(['easy', 'medium', 'hard']).toContain(d)
      }
    })
  })

  describe('Color relationships', () => {
    it('should have progressive mastery colors', () => {
      // New is gray (neutral)
      expect(MASTERY_COLORS.new).toBe('#95a5a6')
      // Learning is orange (warning)
      expect(MASTERY_COLORS.learning).toBe(COLORS.warning)
      // Review is blue (info)
      expect(MASTERY_COLORS.review).toBe(COLORS.info)
      // Mastered is green (success)
      expect(MASTERY_COLORS.mastered).toBe(COLORS.success)
    })
  })
})
