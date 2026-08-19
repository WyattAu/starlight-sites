import { beforeEach, describe, expect, it, vi } from 'vitest'
import {
  getLongestStreak,
  getStreak,
  getTotalReviews,
  listDecks,
  recordReview,
} from '../../shared/components/flashcard/storage'

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {}
  return {
    getItem: (key: string) => store[key] ?? null,
    setItem: (key: string, value: string) => {
      store[key] = value
    },
    removeItem: (key: string) => {
      delete store[key]
    },
    clear: () => {
      store = {}
    },
    get length() {
      return Object.keys(store).length
    },
    key: (index: number) => Object.keys(store)[index] ?? null,
  }
})()

vi.stubGlobal('localStorage', localStorageMock)

const isoDaysAgo = (n: number) =>
  new Date(Date.now() - n * 86400000).toISOString().slice(0, 10)

function seedDates(dates: string[]) {
  localStorage.setItem('wn-streak', JSON.stringify(dates))
}

describe('Global streak tracking', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  describe('recordReview', () => {
    it('records today once and is idempotent within the day', () => {
      recordReview()
      recordReview()
      const stored = JSON.parse(localStorage.getItem('wn-streak') || '[]') as string[]
      expect(stored).toHaveLength(1)
      expect(stored[0]).toBe(new Date().toISOString().slice(0, 10))
    })

    it('appends to existing dates', () => {
      seedDates([isoDaysAgo(2), isoDaysAgo(1)])
      recordReview()
      const stored = JSON.parse(localStorage.getItem('wn-streak') || '[]') as string[]
      expect(stored).toHaveLength(3)
    })

    it('does not throw when localStorage is corrupt (getReviewDates fallback)', () => {
      localStorage.setItem('wn-streak', 'not-json')
      expect(() => recordReview()).not.toThrow()
    })

    it('does not throw when the write fails (quota)', () => {
      const spy = vi.spyOn(localStorage, 'setItem').mockImplementation(() => {
        throw new DOMException('quota exceeded')
      })
      expect(() => recordReview()).not.toThrow()
      spy.mockRestore()
    })
  })

  describe('getStreak', () => {
    it('returns 0 with no history', () => {
      expect(getStreak()).toBe(0)
    })

    it('counts a consecutive run ending today', () => {
      seedDates([isoDaysAgo(2), isoDaysAgo(1), isoDaysAgo(0)])
      expect(getStreak()).toBe(3)
    })

    it('tolerates a run ending yesterday (streak not yet broken)', () => {
      seedDates([isoDaysAgo(3), isoDaysAgo(2), isoDaysAgo(1)])
      expect(getStreak()).toBe(3)
    })

    it('breaks on a gap older than yesterday', () => {
      seedDates([isoDaysAgo(5), isoDaysAgo(4), isoDaysAgo(1)])
      // Most recent consecutive run ending yesterday is length 1.
      expect(getStreak()).toBe(1)
    })

    it('deduplicates stored dates', () => {
      seedDates([isoDaysAgo(0), isoDaysAgo(0), isoDaysAgo(1)])
      expect(getStreak()).toBe(2)
    })

    it('returns 0 for corrupt storage', () => {
      localStorage.setItem('wn-streak', 'not-json')
      expect(getStreak()).toBe(0)
    })
  })

  describe('getLongestStreak', () => {
    it('returns 0 with no history', () => {
      expect(getLongestStreak()).toBe(0)
    })

    it('returns 1 for a single day', () => {
      seedDates([isoDaysAgo(0)])
      expect(getLongestStreak()).toBe(1)
    })

    it('returns the longest consecutive run across gaps', () => {
      // runs: 3 days (5,4,3 ago), 1 gap, 2 days (1, 0 ago) -> longest 3
      seedDates([isoDaysAgo(5), isoDaysAgo(4), isoDaysAgo(3), isoDaysAgo(1), isoDaysAgo(0)])
      expect(getLongestStreak()).toBe(3)
    })

    it('counts a run reaching the final element', () => {
      seedDates([isoDaysAgo(2), isoDaysAgo(1), isoDaysAgo(0)])
      expect(getLongestStreak()).toBe(3)
    })

    it('handles unsorted input', () => {
      seedDates([isoDaysAgo(0), isoDaysAgo(2), isoDaysAgo(1)])
      expect(getLongestStreak()).toBe(3)
    })
  })

  describe('listDecks / getTotalReviews', () => {
    it('lists decks by stripping the storage prefix', () => {
      localStorage.setItem('wyattsnotes-spaced-rep-maths', '{}')
      localStorage.setItem('wyattsnotes-spaced-rep-physics', '{}')
      localStorage.setItem('unrelated-key', '{}')
      expect(listDecks().sort()).toEqual(['maths', 'physics'])
    })

    it('sums review history across decks', () => {
      localStorage.setItem(
        'wyattsnotes-spaced-rep-a',
        JSON.stringify({ cardStates: {}, reviewHistory: [{}, {}, {}], lastStudyDate: null, streak: 0 }),
      )
      localStorage.setItem(
        'wyattsnotes-spaced-rep-b',
        JSON.stringify({ cardStates: {}, reviewHistory: [{}], lastStudyDate: null, streak: 0 }),
      )
      expect(getTotalReviews()).toBe(4)
    })

    it('returns 0 when a deck payload is corrupt', () => {
      localStorage.setItem('wyattsnotes-spaced-rep-bad', 'not-json')
      expect(getTotalReviews()).toBe(0)
    })
  })
})
