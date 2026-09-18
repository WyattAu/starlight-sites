import { beforeEach, describe, expect, it, vi } from 'vitest'
import {
  getRegisteredDecks,
  registerDeckContent,
  removeDeckRegistration,
  resolveDeckId,
} from '../../shared/components/flashcard/storage'
import {
  listPracticedTopics,
  loadPracticeStats,
  normalizePath,
  recordPracticeOutcome,
} from '../../shared/components/practice/store'

// Mock localStorage (same pattern as storage-streaks.test.ts)
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

const windowMock = { location: { pathname: '/test-topic/' } }

vi.stubGlobal('localStorage', localStorageMock)
vi.stubGlobal('window', windowMock)

beforeEach(() => {
  localStorageMock.clear()
})

describe('practice outcome store', () => {
  it('records attempts with path normalization', () => {
    recordPracticeOutcome('/physics/kinematics', true)
    recordPracticeOutcome('/physics/kinematics/', false)
    const s = loadPracticeStats('/physics/kinematics/')
    expect(s?.attempts).toBe(2)
    expect(s?.correct).toBe(1)
  })

  it('caps recent outcomes at 20', () => {
    for (let i = 0; i < 25; i++) {
      recordPracticeOutcome('/topic/', i % 2 === 0)
    }
    const s = loadPracticeStats('/topic/')
    expect(s?.attempts).toBe(25)
    expect(s?.recent.length).toBe(20)
  })

  it('lists practiced topics most recent first', () => {
    recordPracticeOutcome('/a/', true, 1000)
    recordPracticeOutcome('/b/', false, 2000)
    const topics = listPracticedTopics()
    expect(topics[0]?.path).toBe('/b/')
    expect(topics[1]?.path).toBe('/a/')
  })

  it('normalizePath adds trailing slash and strips query/hash', () => {
    expect(normalizePath('/x')).toBe('/x/')
    expect(normalizePath('/x?q=1#frag')).toBe('/x/')
    expect(normalizePath('')).toBe('/')
  })
})

describe('deck content registry', () => {
  const cards = [
    { id: 'c1', front: 'f1', back: 'b1' },
    { id: 'c2', front: 'f2', back: 'b2', tags: ['t'] },
  ]

  it('registers and reads back deck content', () => {
    registerDeckContent('/decks/one/', cards)
    const decks = getRegisteredDecks()
    expect(decks.length).toBe(1)
    expect(decks[0]?.deckId).toBe('/decks/one/')
    expect(decks[0]?.cards.length).toBe(2)
  })

  it('does not rewrite identical content', () => {
    registerDeckContent('/d/', cards, 1000)
    const before = localStorageMock.getItem('wn-deck-/d/')
    registerDeckContent('/d/', cards, 2000)
    expect(localStorageMock.getItem('wn-deck-/d/')).toBe(before)
  })

  it('removes registrations', () => {
    registerDeckContent('/d/', cards)
    removeDeckRegistration('/d/')
    expect(getRegisteredDecks().length).toBe(0)
  })

  it('skips empty card lists', () => {
    registerDeckContent('/empty/', [])
    expect(getRegisteredDecks().length).toBe(0)
  })
})

describe('resolveDeckId', () => {
  it('keeps explicit ids', () => {
    expect(resolveDeckId('my-deck')).toBe('my-deck')
  })

  it('synthesizes path-based ids for missing or legacy fallbacks', () => {
    expect(resolveDeckId(undefined, '/physics/kinematics/')).toBe('deck::/physics/kinematics/')
    expect(resolveDeckId('unknown', '/x/')).toBe('deck::/x/')
    expect(resolveDeckId('undefined', '/x/')).toBe('deck::/x/')
  })

  it('falls back to location.pathname', () => {
    expect(resolveDeckId(undefined)).toBe(`deck::${location.pathname}`)
  })
})
