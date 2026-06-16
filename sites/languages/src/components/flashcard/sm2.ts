/**
 * SM-2 Spaced Repetition Algorithm
 * Based on Piotr Wozniak's SuperMemo-2 algorithm.
 *
 * Reference: https://supermemo.com/en/archives1990-2015/english/ol/sm2
 */

export type Rating = 1 | 2 | 3 | 4

export interface CardState {
  easeFactor: number
  interval: number
  repetitions: number
  nextReview: number
  lastReview: number
}

export const DEFAULT_EASE = 2.5
export const MIN_EASE = 1.3

export function createDefaultState(): CardState {
  return {
    easeFactor: DEFAULT_EASE,
    interval: 0,
    repetitions: 0,
    nextReview: 0,
    lastReview: 0,
  }
}

/**
 * Apply SM-2 algorithm to compute next card state.
 *
 * @param state - Current card state
 * @param rating - User rating (1=Again, 2=Hard, 3=Good, 4=Easy)
 * @param now - Current timestamp (ms)
 * @returns Updated card state
 */
export function applySM2(state: CardState, rating: Rating, now: number): CardState {
  const next = { ...state, lastReview: now }

  if (rating === 1) {
    // Again: reset to learning
    next.repetitions = 0
    next.interval = 1
    next.easeFactor = Math.max(MIN_EASE, next.easeFactor - 0.2)
  } else if (rating === 2) {
    // Hard: reduce interval growth
    next.interval = Math.max(1, state.interval * 1.2)
    next.easeFactor = Math.max(MIN_EASE, next.easeFactor - 0.15)
    next.repetitions += 1
  } else if (rating === 3) {
    // Good: standard progression
    if (state.repetitions === 0) {
      next.interval = 1
    } else if (state.repetitions === 1) {
      next.interval = 6
    } else {
      next.interval = Math.round(state.interval * next.easeFactor)
    }
    next.easeFactor = Math.max(
      MIN_EASE,
      next.easeFactor + (0.1 - (5 - 3) * (0.08 + (5 - 3) * 0.02)),
    )
    next.repetitions += 1
  } else {
    // Easy: accelerate progression
    if (state.repetitions === 0) {
      next.interval = 1
    } else if (state.repetitions === 1) {
      next.interval = 6
    } else {
      next.interval = Math.max(1, Math.round(state.interval * 1.5))
    }
    next.easeFactor = Math.max(
      MIN_EASE,
      next.easeFactor + (0.1 - (5 - 4) * (0.08 + (5 - 4) * 0.02)),
    )
    next.repetitions += 1
  }

  // Convert interval from minutes to milliseconds
  next.nextReview = now + next.interval * 60 * 1000

  return next
}

export function isDue(state: CardState, now: number): boolean {
  return state.nextReview <= now
}

export type MasteryLevel = 'new' | 'learning' | 'review' | 'mastered'

export function getMasteryLevel(state: CardState): MasteryLevel {
  if (state.repetitions === 0) return 'new'
  if (state.interval < 6) return 'learning'
  if (state.interval < 21) return 'review'
  return 'mastered'
}
