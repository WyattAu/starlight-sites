import { fireEvent, render, screen, waitFor } from '@solidjs/testing-library'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import ReviewQueue from '../../shared/components/ReviewQueue'
import type { Flashcard } from '../../shared/components/FlashcardDeck'
import { createDefaultState } from '../../shared/components/flashcard/sm2'

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

// jsdom lacks matchMedia
vi.stubGlobal('matchMedia', vi.fn().mockReturnValue({ matches: false }))

const card = (id: string, front: string): Flashcard =>
  ({ id, front, back: `${front} answer` }) as unknown as Flashcard

function deckData(cardIds: string[]) {
  return {
    cardStates: Object.fromEntries(cardIds.map(id => [id, createDefaultState()])),
    reviewHistory: [],
    lastStudyDate: null,
    streak: 0,
  }
}

function renderQueue(decks: Array<{ deckId: string; cards: Flashcard[] }>) {
  const onOpenChange = vi.fn()
  render(() => <ReviewQueue open onOpenChange={onOpenChange} decks={decks} />)
  return { onOpenChange }
}

describe('ReviewQueue', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('shows the due count and an enabled start button when cards are due', () => {
    // Fresh default states have nextReview in the past, so all cards are due.
    localStorage.setItem(
      'wyattsnotes-spaced-rep-maths',
      JSON.stringify(deckData(['c1', 'c2'])),
    )
    renderQueue([{ deckId: 'maths', cards: [card('c1', 'Q1'), card('c2', 'Q2')] }])
    expect(screen.getByText('2')).toBeTruthy()
    const start = screen.getByRole('button', { name: /start/i })
    expect(start.hasAttribute('disabled')).toBe(false)
  })

  it('disables start when nothing is due (all cards scheduled ahead)', () => {
    const data = deckData(['c1'])
    const future = Date.now() + 1000 * 60 * 60 * 24 * 30
    for (const state of Object.values(data.cardStates)) state.nextReview = future
    localStorage.setItem('wyattsnotes-spaced-rep-maths', JSON.stringify(data))
    renderQueue([{ deckId: 'maths', cards: [card('c1', 'Q1')] }])
    expect(screen.getAllByText('0').length).toBeGreaterThan(0)
    expect(screen.getByRole('button', { name: /start/i }).hasAttribute('disabled')).toBe(true)
  })

  it('reviews a card, persists the SM-2 update, and advances', async () => {
    localStorage.setItem(
      'wyattsnotes-spaced-rep-maths',
      JSON.stringify(deckData(['c1', 'c2'])),
    )
    renderQueue([{ deckId: 'maths', cards: [card('c1', 'Q1'), card('c2', 'Q2')] }])

    fireEvent.click(screen.getByRole('button', { name: /start/i }))
    // Review phase: the first card front is visible.
    await waitFor(() => expect(screen.getByText('Q1')).toBeTruthy())

    // Flip, then rate 4 (Easy).
    fireEvent.click(screen.getByRole('button', { name: /flip/i }))
    const easy = await screen.findByRole('button', { name: /easy|4/i })
    fireEvent.click(easy)

    // Persistence: deck was saved with a review history entry + streak bump.
    await waitFor(() => {
      const saved = JSON.parse(localStorage.getItem('wyattsnotes-spaced-rep-maths') || '{}')
      expect(saved.reviewHistory).toHaveLength(1)
      expect(saved.reviewHistory[0].cardId).toBe('c1')
      expect(saved.streak).toBe(1)
      expect(saved.lastStudyDate).toBeGreaterThan(0)
    })
    // Global streak record was written.
    expect(localStorage.getItem('wn-streak')).toBeTruthy()

    // Second card shown next.
    await waitFor(() => expect(screen.getByText('Q2')).toBeTruthy())
  })

  it('reaches the complete phase after the last card and shows stats', async () => {
    localStorage.setItem('wyattsnotes-spaced-rep-maths', JSON.stringify(deckData(['c1'])))
    renderQueue([{ deckId: 'maths', cards: [card('c1', 'Solo')] }])

    fireEvent.click(screen.getByRole('button', { name: /start/i }))
    fireEvent.click(screen.getByRole('button', { name: /flip/i }))
    const rate = await screen.findByRole('button', { name: /good|3/i })
    fireEvent.click(rate)

    await waitFor(() => expect(screen.getByText('Review Complete!')).toBeTruthy())
    // Cards-reviewed stat ( Reviewed | Avg Rating | streak tiles all render).
    expect(screen.getByText('Avg Rating')).toBeTruthy()
    expect(screen.getByText('Reviewed')).toBeTruthy()
  })

  it('close from complete resets to overview and notifies the parent', async () => {
    localStorage.setItem('wyattsnotes-spaced-rep-maths', JSON.stringify(deckData(['c1'])))
    const { onOpenChange } = renderQueue([{ deckId: 'maths', cards: [card('c1', 'Solo')] }])

    fireEvent.click(screen.getByRole('button', { name: /start/i }))
    fireEvent.click(screen.getByRole('button', { name: /flip/i }))
    const rate = await screen.findByRole('button', { name: /good|3/i })
    fireEvent.click(rate)

    const cont = await waitFor(() => screen.getByRole('button', { name: 'Continue' }))
    fireEvent.click(cont)
    expect(onOpenChange).toHaveBeenCalledWith(false)
  })

  it('handles keyboard shortcuts: space flips, digits rate while flipped', async () => {
    localStorage.setItem('wyattsnotes-spaced-rep-maths', JSON.stringify(deckData(['c1'])))
    renderQueue([{ deckId: 'maths', cards: [card('c1', 'Keys')] }])

    fireEvent.click(screen.getByRole('button', { name: /start/i }))
    await waitFor(() => expect(screen.getByText('Keys')).toBeTruthy())

    // Space flips the card.
    fireEvent.keyDown(document, { key: ' ' })
    // Rating digits require the flipped state; rate with 4.
    fireEvent.keyDown(document, { key: '4' })

    await waitFor(() =>
      expect(
        JSON.parse(localStorage.getItem('wyattsnotes-spaced-rep-maths') || '{}').reviewHistory,
      ).toHaveLength(1),
    )
  })
})
