import { beforeEach, describe, expect, it, vi } from 'vitest'
import { createDefaultState } from '../../shared/components/flashcard/sm2'
import { calculateStreak, loadDeck, saveDeck } from '../../shared/components/flashcard/storage'

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

describe('Flashcard Storage', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  describe('loadDeck', () => {
    it('should return null for non-existent deck', () => {
      expect(loadDeck('non-existent')).toBeNull()
    })

    it('should return saved deck data', () => {
      const data = {
        cardStates: { 'card-1': createDefaultState() },
        reviewHistory: [],
        lastStudyDate: null,
        streak: 0,
      }
      localStorage.setItem('wyattsnotes-spaced-rep-test-deck', JSON.stringify(data))
      expect(loadDeck('test-deck')).toEqual(data)
    })

    it('should return null for invalid JSON', () => {
      localStorage.setItem('wyattsnotes-spaced-rep-invalid', 'not-json')
      expect(loadDeck('invalid')).toBeNull()
    })
  })

  describe('saveDeck', () => {
    it('should save deck data to localStorage', () => {
      const data = {
        cardStates: { 'card-1': createDefaultState() },
        reviewHistory: [],
        lastStudyDate: null,
        streak: 0,
      }
      saveDeck('test-deck', data)
      const saved = localStorage.getItem('wyattsnotes-spaced-rep-test-deck')
      expect(saved).toBeTruthy()
      expect(JSON.parse(saved!)).toEqual(data)
    })

    it('should overwrite existing deck data', () => {
      const data1 = {
        cardStates: { 'card-1': createDefaultState() },
        reviewHistory: [],
        lastStudyDate: null,
        streak: 0,
      }
      const data2 = {
        cardStates: { 'card-2': createDefaultState() },
        reviewHistory: [],
        lastStudyDate: null,
        streak: 0,
      }
      saveDeck('test-deck', data1)
      saveDeck('test-deck', data2)
      expect(loadDeck('test-deck')).toEqual(data2)
    })
  })

  describe('calculateStreak', () => {
    it('should return 0 when lastStudyDate is null', () => {
      const data = {
        cardStates: {},
        reviewHistory: [],
        lastStudyDate: null,
        streak: 0,
      }
      expect(calculateStreak(data)).toBe(0)
    })

    it('should return streak when last study was today', () => {
      const data = {
        cardStates: {},
        reviewHistory: [],
        lastStudyDate: Date.now(),
        streak: 5,
      }
      expect(calculateStreak(data)).toBe(5)
    })

    it('should return streak when last study was yesterday', () => {
      const data = {
        cardStates: {},
        reviewHistory: [],
        lastStudyDate: Date.now() - 86400000,
        streak: 3,
      }
      expect(calculateStreak(data)).toBe(3)
    })

    it('should return 0 when last study was more than 1 day ago', () => {
      const data = {
        cardStates: {},
        reviewHistory: [],
        lastStudyDate: Date.now() - 86400000 * 2,
        streak: 5,
      }
      expect(calculateStreak(data)).toBe(0)
    })
  })
})
