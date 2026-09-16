import { describe, expect, it } from 'vitest'
import { tierForStats } from '../../shared/components/flashcard/mastery'
import type { PracticeStats } from '../../shared/components/practice/store'

function stats(attempts: number, correct: number): PracticeStats {
  return {
    attempts,
    correct,
    lastPracticed: Date.now(),
    recent: [],
  }
}

describe('mastery tiers', () => {
  it('unseen when no data', () => {
    expect(tierForStats(null)).toBe(0)
    expect(tierForStats(stats(0, 0))).toBe(0)
  })

  it('weak below 60% accuracy', () => {
    expect(tierForStats(stats(10, 5))).toBe(1)
    expect(tierForStats(stats(1, 0))).toBe(1)
  })

  it('developing for 60-79% or thin attempts', () => {
    expect(tierForStats(stats(10, 7))).toBe(2)
    // 100% accuracy but fewer than 3 attempts stays developing
    expect(tierForStats(stats(2, 2))).toBe(2)
  })

  it('solid at >=80% across >=3 attempts', () => {
    expect(tierForStats(stats(3, 3))).toBe(3)
    expect(tierForStats(stats(10, 8))).toBe(3)
  })

  it('mastered at >=90% across >=5 attempts', () => {
    expect(tierForStats(stats(5, 5))).toBe(4)
    expect(tierForStats(stats(10, 9))).toBe(4)
  })

  it('high accuracy with few attempts never reaches mastered', () => {
    expect(tierForStats(stats(4, 4))).toBe(3)
  })
})
