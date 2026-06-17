import { fireEvent, render, screen } from '@solidjs/testing-library'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import type { Flashcard } from '../../shared/components/FlashcardDeck'
import FlashcardDeck from '../../shared/components/FlashcardDeck'

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

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})

describe('FlashcardDeck Component', () => {
  const mockCards: Flashcard[] = [
    { id: '1', front: 'What is 2+2?', back: '4', tags: ['math'], difficulty: 'easy' },
    { id: '2', front: 'What is 3+3?', back: '6', tags: ['math'], difficulty: 'medium' },
    { id: '3', front: 'What is 4+4?', back: '8', tags: ['math'], difficulty: 'hard' },
  ]

  beforeEach(() => {
    localStorage.clear()
  })

  it('should render empty state when no cards', () => {
    render(() => <FlashcardDeck cards={[]} deckId="test" />)
    expect(screen.getByText('No cards in this deck.')).toBeTruthy()
  })

  it('should render deck view with cards', () => {
    render(() => <FlashcardDeck cards={mockCards} deckId="test" title="Math Flashcards" />)
    expect(screen.getByText('Math Flashcards')).toBeTruthy()
    expect(screen.getByText('Total Cards')).toBeTruthy()
    expect(screen.getAllByText('3').length).toBeGreaterThanOrEqual(1)
  })

  it('should show due cards count', () => {
    render(() => <FlashcardDeck cards={mockCards} deckId="test" />)
    expect(screen.getByText('Due Today')).toBeTruthy()
  })

  it('should show mastery breakdown', () => {
    render(() => <FlashcardDeck cards={mockCards} deckId="test" />)
    expect(screen.getByText('New: 3')).toBeTruthy()
  })

  it('should show progress bar', () => {
    render(() => <FlashcardDeck cards={mockCards} deckId="test" />)
    expect(screen.getByText('Mastery')).toBeTruthy()
    expect(screen.getByText('0%')).toBeTruthy()
  })

  it('should have action buttons', () => {
    render(() => <FlashcardDeck cards={mockCards} deckId="test" />)
    expect(screen.getByText('Study Now')).toBeTruthy()
    expect(screen.getByText('Stats')).toBeTruthy()
    expect(screen.getByText('Settings')).toBeTruthy()
  })

  it('should enable Study Now when cards are due', () => {
    render(() => <FlashcardDeck cards={mockCards} deckId="test" />)
    const studyBtn = screen.getByText('Study Now')
    // All new cards have nextReview=0 which is <= Date.now(), so they are due
    expect(studyBtn.hasAttribute('disabled')).toBe(false)
  })

  it('should navigate to stats view', async () => {
    render(() => <FlashcardDeck cards={mockCards} deckId="test" />)
    await fireEvent.click(screen.getByText('Stats'))
    expect(screen.getByText('Mastered')).toBeTruthy()
    expect(screen.getByText('Streak')).toBeTruthy()
  })

  it('should navigate to settings view', async () => {
    render(() => <FlashcardDeck cards={mockCards} deckId="test" />)
    await fireEvent.click(screen.getByText('Settings'))
    expect(screen.getByText('Export Progress')).toBeTruthy()
    expect(screen.getByText('Import Progress')).toBeTruthy()
    expect(screen.getByText('Reset Deck')).toBeTruthy()
  })

  it('should have accessible region', () => {
    render(() => <FlashcardDeck cards={mockCards} deckId="test" title="Test Deck" />)
    expect(screen.getByRole('region', { name: 'Flashcard deck: Test Deck' })).toBeTruthy()
  })

  it('should have accessible empty state', () => {
    render(() => <FlashcardDeck cards={[]} deckId="test" />)
    expect(screen.getByRole('region', { name: 'Flashcard deck empty' })).toBeTruthy()
  })
})
