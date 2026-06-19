import { describe, expect, it } from 'vitest'
import {
  applySM2,
  assertInvariant,
  createDefaultState,
  DEFAULT_EASE,
  getMasteryLevel,
  isDue,
  MIN_EASE,
  type Rating,
  validateState,
} from '../../shared/components/flashcard/sm2'

describe('SM-2 Algorithm', () => {
  describe('createDefaultState', () => {
    it('should create state with default values', () => {
      const state = createDefaultState()
      expect(state.easeFactor).toBe(DEFAULT_EASE)
      expect(state.interval).toBe(0)
      expect(state.repetitions).toBe(0)
      expect(state.nextReview).toBe(0)
      expect(state.lastReview).toBe(0)
    })
  })

  describe('applySM2', () => {
    const now = Date.now()

    describe('rating 1 (Again)', () => {
      it('should reset repetitions to 0', () => {
        const state = createDefaultState()
        state.repetitions = 5
        const result = applySM2(state, 1, now)
        expect(result.repetitions).toBe(0)
      })

      it('should set interval to 1', () => {
        const state = createDefaultState()
        const result = applySM2(state, 1, now)
        expect(result.interval).toBe(1)
      })

      it('should decrease ease factor by 0.2', () => {
        const state = createDefaultState()
        const result = applySM2(state, 1, now)
        expect(result.easeFactor).toBe(DEFAULT_EASE - 0.2)
      })

      it('should not decrease ease factor below MIN_EASE', () => {
        const state = createDefaultState()
        state.easeFactor = MIN_EASE
        const result = applySM2(state, 1, now)
        expect(result.easeFactor).toBe(MIN_EASE)
      })

      it('should set nextReview to now + 1 minute', () => {
        const state = createDefaultState()
        const result = applySM2(state, 1, now)
        expect(result.nextReview).toBe(now + 60 * 1000)
      })
    })

    describe('rating 2 (Hard)', () => {
      it('should increase interval by 20%', () => {
        const state = createDefaultState()
        state.interval = 10
        const result = applySM2(state, 2, now)
        expect(result.interval).toBe(12)
      })

      it('should decrease ease factor by 0.15', () => {
        const state = createDefaultState()
        const result = applySM2(state, 2, now)
        expect(result.easeFactor).toBe(DEFAULT_EASE - 0.15)
      })

      it('should increment repetitions', () => {
        const state = createDefaultState()
        const result = applySM2(state, 2, now)
        expect(result.repetitions).toBe(1)
      })

      it('should set minimum interval to 1', () => {
        const state = createDefaultState()
        state.interval = 0
        const result = applySM2(state, 2, now)
        expect(result.interval).toBe(1)
      })
    })

    describe('rating 3 (Good)', () => {
      it('should set interval to 1 on first repetition', () => {
        const state = createDefaultState()
        const result = applySM2(state, 3, now)
        expect(result.interval).toBe(1)
      })

      it('should set interval to 6 on second repetition', () => {
        const state = createDefaultState()
        state.repetitions = 1
        const result = applySM2(state, 3, now)
        expect(result.interval).toBe(6)
      })

      it('should multiply interval by ease factor after second repetition', () => {
        const state = createDefaultState()
        state.repetitions = 2
        state.interval = 10
        const result = applySM2(state, 3, now)
        expect(result.interval).toBe(Math.round(10 * DEFAULT_EASE))
      })

      it('should decrease ease factor slightly for rating 3', () => {
        const state = createDefaultState()
        const result = applySM2(state, 3, now)
        expect(result.easeFactor).toBeLessThan(DEFAULT_EASE)
      })

      it('should increment repetitions', () => {
        const state = createDefaultState()
        const result = applySM2(state, 3, now)
        expect(result.repetitions).toBe(1)
      })
    })

    describe('rating 4 (Easy)', () => {
      it('should set interval to 1 on first repetition', () => {
        const state = createDefaultState()
        const result = applySM2(state, 4, now)
        expect(result.interval).toBe(1)
      })

      it('should set interval to 6 on second repetition', () => {
        const state = createDefaultState()
        state.repetitions = 1
        const result = applySM2(state, 4, now)
        expect(result.interval).toBe(6)
      })

      it('should multiply interval by 1.5 after second repetition', () => {
        const state = createDefaultState()
        state.repetitions = 2
        state.interval = 10
        const result = applySM2(state, 4, now)
        expect(result.interval).toBe(15)
      })

      it('should increase ease factor more than rating 3', () => {
        const stateGood = createDefaultState()
        const stateEasy = createDefaultState()
        const resultGood = applySM2(stateGood, 3, now)
        const resultEasy = applySM2(stateEasy, 4, now)
        expect(resultEasy.easeFactor).toBeGreaterThan(resultGood.easeFactor)
      })
    })

    describe('general', () => {
      it('should update lastReview to now', () => {
        const state = createDefaultState()
        const result = applySM2(state, 3, now)
        expect(result.lastReview).toBe(now)
      })

      it('should not mutate original state', () => {
        const state = createDefaultState()
        const original = { ...state }
        applySM2(state, 3, now)
        expect(state).toEqual(original)
      })
    })
  })

  describe('isDue', () => {
    it('should return true when nextReview <= now', () => {
      const state = createDefaultState()
      state.nextReview = 100
      expect(isDue(state, 200)).toBe(true)
    })

    it('should return false when nextReview > now', () => {
      const state = createDefaultState()
      state.nextReview = 200
      expect(isDue(state, 100)).toBe(false)
    })

    it('should return true when nextReview equals now', () => {
      const state = createDefaultState()
      state.nextReview = 100
      expect(isDue(state, 100)).toBe(true)
    })
  })

  describe('getMasteryLevel', () => {
    it('should return "new" when repetitions is 0', () => {
      const state = createDefaultState()
      expect(getMasteryLevel(state)).toBe('new')
    })

    it('should return "learning" when interval < 6', () => {
      const state = createDefaultState()
      state.repetitions = 1
      state.interval = 1
      expect(getMasteryLevel(state)).toBe('learning')
    })

    it('should return "review" when interval >= 6 and < 21', () => {
      const state = createDefaultState()
      state.repetitions = 2
      state.interval = 6
      expect(getMasteryLevel(state)).toBe('review')
    })

    it('should return "mastered" when interval >= 21', () => {
      const state = createDefaultState()
      state.repetitions = 3
      state.interval = 21
      expect(getMasteryLevel(state)).toBe('mastered')
    })

    it('should return "mastered" for high intervals', () => {
      const state = createDefaultState()
      state.repetitions = 5
      state.interval = 100
      expect(getMasteryLevel(state)).toBe('mastered')
    })
  })

  describe('invariant verification', () => {
    it('should satisfy INV-SM2-001: easeFactor >= MIN_EASE for all ratings', () => {
      const ratings: Rating[] = [1, 2, 3, 4]
      const now = Date.now()

      for (const rating of ratings) {
        const state = createDefaultState()
        const result = applySM2(state, rating, now)
        expect(result.easeFactor).toBeGreaterThanOrEqual(MIN_EASE)
      }
    })

    it('should satisfy INV-SM2-002: interval >= 0 for all ratings', () => {
      const ratings: Rating[] = [1, 2, 3, 4]
      const now = Date.now()

      for (const rating of ratings) {
        const state = createDefaultState()
        const result = applySM2(state, rating, now)
        expect(result.interval).toBeGreaterThanOrEqual(0)
      }
    })

    it('should satisfy INV-SM2-003: repetitions >= 0 for all ratings', () => {
      const ratings: Rating[] = [1, 2, 3, 4]
      const now = Date.now()

      for (const rating of ratings) {
        const state = createDefaultState()
        const result = applySM2(state, rating, now)
        expect(result.repetitions).toBeGreaterThanOrEqual(0)
      }
    })

    it('should satisfy INV-SM2-004: nextReview >= lastReview for all ratings', () => {
      const ratings: Rating[] = [1, 2, 3, 4]
      const now = Date.now()

      for (const rating of ratings) {
        const state = createDefaultState()
        const result = applySM2(state, rating, now)
        expect(result.nextReview).toBeGreaterThanOrEqual(result.lastReview)
      }
    })

    it('should satisfy INV-SM2-005: lastReview == now for all ratings', () => {
      const ratings: Rating[] = [1, 2, 3, 4]
      const now = Date.now()

      for (const rating of ratings) {
        const state = createDefaultState()
        const result = applySM2(state, rating, now)
        expect(result.lastReview).toBe(now)
      }
    })

    it('should maintain invariants through 10 successive reviews', () => {
      let state = createDefaultState()
      const now = Date.now()

      for (let i = 0; i < 10; i++) {
        const rating = ((i % 4) + 1) as Rating
        state = applySM2(state, rating, now + i * 1000)
        validateState(state)
      }
    })

    it('should validate default state', () => {
      const state = createDefaultState()
      expect(() => validateState(state)).not.toThrow()
    })
  })

  describe('property-based tests', () => {
    // Deterministic, seedable PRNG (mulberry32) so any failure is
    // reproducible from the printed seed. This is required for
    // property-based testing to constitute evidence rather than noise.
    //
    // Ref: https://gist.github.com/tommyettinger/46a874533a276f5c7b8d0c7b5ffdbd32
    function mulberry32(seed: number): () => number {
      let a = seed >>> 0
      return () => {
        a = (a + 0x6d2b79f5) >>> 0
        let t = a
        t = Math.imul(t ^ (t >>> 15), t | 1)
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296
      }
    }

    // Fixed seeds make these tests fully deterministic. To explore a
    // wider state space, append additional seeds.
    const SEEDS = [0x12345678, 0x9e3779b9, 0xdeadbeef, 0xc0ffee, 0xcafebabe]

    it('should never decrease easeFactor below MIN_EASE across 200 random reviews per seed', () => {
      for (const seed of SEEDS) {
        const rand = mulberry32(seed)
        let state = createDefaultState()
        const now = 1_000_000
        for (let i = 0; i < 200; i++) {
          const rating = (Math.floor(rand() * 4) + 1) as Rating
          state = applySM2(state, rating, now + i * 60000)
          expect(state.easeFactor).toBeGreaterThanOrEqual(MIN_EASE)
        }
      }
    })

    it('should produce monotonically increasing nextReview across good ratings', () => {
      let state = createDefaultState()
      const now = Date.now()

      for (let i = 0; i < 10; i++) {
        const prevNextReview = state.nextReview
        state = applySM2(state, 3, now + i * 60000)
        expect(state.nextReview).toBeGreaterThanOrEqual(prevNextReview)
      }
    })

    it('should keep interval positive after easy/good ratings', () => {
      let state = createDefaultState()
      const now = Date.now()

      for (let i = 0; i < 20; i++) {
        const rating = (i % 2 === 0 ? 3 : 4) as Rating
        state = applySM2(state, rating, now + i * 60000)
        expect(state.interval).toBeGreaterThanOrEqual(1)
      }
    })

    it('INV-SM2-001..005: all documented invariants hold for every generated state', () => {
      for (const seed of SEEDS) {
        const rand = mulberry32(seed)
        let state = createDefaultState()
        const baseNow = 1_700_000_000_000
        for (let i = 0; i < 300; i++) {
          const rating = (Math.floor(rand() * 4) + 1) as Rating
          // Strictly increasing timestamps satisfy PRE-SM2-002 and keep
          // POST-SM2-003 well-defined.
          const now = baseNow + i * 60_000
          state = applySM2(state, rating, now)
          // INV-SM2-001
          expect(state.easeFactor).toBeGreaterThanOrEqual(MIN_EASE)
          // INV-SM2-002
          expect(state.interval).toBeGreaterThanOrEqual(0)
          // INV-SM2-003
          expect(state.repetitions).toBeGreaterThanOrEqual(0)
          // INV-SM2-004
          expect(state.nextReview).toBeGreaterThanOrEqual(state.lastReview)
          // INV-SM2-005: lastReview must equal the supplied now.
          expect(state.lastReview).toBe(now)
        }
      }
    })

    it('POST-SM2-005: applySM2 never mutates the input state', () => {
      for (const seed of SEEDS) {
        const rand = mulberry32(seed)
        let state = createDefaultState()
        const baseNow = 1_800_000_000_000
        for (let i = 0; i < 100; i++) {
          const rating = (Math.floor(rand() * 4) + 1) as Rating
          const now = baseNow + i * 60_000
          const snapshot = { ...state }
          const result = applySM2(state, rating, now)
          // Immutability: input reference must be unchanged.
          expect(state).toEqual(snapshot)
          // Returned state must differ from input (lastReview updates).
          expect(result).not.toBe(state)
          state = result
        }
      }
    })

    it('POST-SM2-003: nextReview == now + interval * 60 * 1000 for every output', () => {
      for (const seed of SEEDS) {
        const rand = mulberry32(seed)
        let state = createDefaultState()
        const baseNow = 1_900_000_000_000
        for (let i = 0; i < 200; i++) {
          const rating = (Math.floor(rand() * 4) + 1) as Rating
          const now = baseNow + i * 60_000
          state = applySM2(state, rating, now)
          expect(state.nextReview).toBe(now + state.interval * 60 * 1000)
        }
      }
    })

    it('validateState accepts every output of applySM2', () => {
      for (const seed of SEEDS) {
        const rand = mulberry32(seed)
        let state = createDefaultState()
        const baseNow = 2_000_000_000_000
        for (let i = 0; i < 200; i++) {
          const rating = (Math.floor(rand() * 4) + 1) as Rating
          state = applySM2(state, rating, baseNow + i * 60_000)
          expect(() => validateState(state)).not.toThrow()
        }
      }
    })

    it('PRE-SM2-001: rejects out-of-range ratings', () => {
      const state = createDefaultState()
      // @ts-expect-error: deliberately invalid rating for precondition test
      expect(() => applySM2(state, 0, Date.now())).toThrow()
      // @ts-expect-error: deliberately invalid rating for precondition test
      expect(() => applySM2(state, 5, Date.now())).toThrow()
    })

    it('PRE-SM2-002: rejects non-positive timestamps', () => {
      const state = createDefaultState()
      expect(() => applySM2(state, 3, 0)).toThrow()
      expect(() => applySM2(state, 3, -1)).toThrow()
    })
  })

  describe('assertInvariant', () => {
    it('should not throw when condition is true', () => {
      expect(() => assertInvariant(true, 'test')).not.toThrow()
    })

    it('should throw when condition is false', () => {
      expect(() => assertInvariant(false, 'test error')).toThrow('Invariant violated: test error')
    })
  })
})
