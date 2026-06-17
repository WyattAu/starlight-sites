/**
 * SM-2 Spaced Repetition Algorithm
 * Based on Piotr Wozniak's SuperMemo-2 algorithm.
 *
 * Reference: https://supermemo.com/en/archives1990-2015/english/ol/sm2
 *
 * Invariants:
 *   INV-SM2-001: easeFactor >= MIN_EASE (always maintained)
 *   INV-SM2-002: interval >= 0 (always non-negative)
 *   INV-SM2-003: repetitions >= 0 (always non-negative)
 *   INV-SM2-004: nextReview >= lastReview (review order maintained)
 *   INV-SM2-005: lastReview == now (updated on every applySM2 call)
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

/**
 * Assert an invariant condition. Throws if condition is false.
 * Used for runtime verification of algorithm correctness.
 *
 * @param condition - Invariant condition to verify
 * @param message - Error message describing the invariant
 * @throws {Error} if condition is false
 */
export function assertInvariant(condition: boolean, message: string): void {
  if (!condition) {
    throw new Error(`Invariant violated: ${message}`)
  }
}

/**
 * Validate that a CardState satisfies all invariants.
 *
 * @param state - Card state to validate
 * @throws {Error} if any invariant is violated
 */
export function validateState(state: CardState): void {
  assertInvariant(
    state.easeFactor >= MIN_EASE,
    `easeFactor ${state.easeFactor} < MIN_EASE ${MIN_EASE}`,
  )
  assertInvariant(state.interval >= 0, `interval ${state.interval} < 0`)
  assertInvariant(state.repetitions >= 0, `repetitions ${state.repetitions} < 0`)
  assertInvariant(
    state.nextReview >= state.lastReview,
    `nextReview ${state.nextReview} < lastReview ${state.lastReview}`,
  )
}

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
 * Preconditions:
 *   PRE-SM2-001: rating in {1, 2, 3, 4}
 *   PRE-SM2-002: now > 0
 *
 * Postconditions:
 *   POST-SM2-001: result.easeFactor >= MIN_EASE
 *   POST-SM2-002: result.interval >= 1 (after rating > 1)
 *   POST-SM2-003: result.nextReview == now + result.interval * 60 * 1000
 *   POST-SM2-004: result.lastReview == now
 *   POST-SM2-005: state is not mutated (immutability)
 *
 * @param state - Current card state
 * @param rating - User rating (1=Again, 2=Hard, 3=Good, 4=Easy)
 * @param now - Current timestamp (ms)
 * @returns Updated card state satisfying all postconditions
 */
export function applySM2(state: CardState, rating: Rating, now: number): CardState {
  // PRE-SM2-001: rating must be valid
  assertInvariant(rating >= 1 && rating <= 4, `invalid rating ${rating}`)
  // PRE-SM2-002: now must be positive
  assertInvariant(now > 0, `now must be positive, got ${now}`)
  // Validate input state
  validateState(state)

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

  // POST-SM2-001: easeFactor >= MIN_EASE
  assertInvariant(next.easeFactor >= MIN_EASE, `easeFactor ${next.easeFactor} < MIN_EASE`)
  // POST-SM2-003: nextReview == now + interval * 60 * 1000
  assertInvariant(
    next.nextReview === now + next.interval * 60 * 1000,
    `nextReview ${next.nextReview} != now + interval * 60 * 1000`,
  )
  // POST-SM2-004: lastReview == now
  assertInvariant(next.lastReview === now, `lastReview ${next.lastReview} != now`)

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
