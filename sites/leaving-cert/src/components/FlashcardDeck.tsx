/**
 * FlashcardDeck -- Spaced repetition flashcard component.
 *
 * Uses SM-2 algorithm for scheduling reviews.
 * Persists progress to localStorage.
 *
 * Split into modules:
 *   flashcard/sm2.ts        -- SM-2 algorithm and types
 *   flashcard/storage.ts    -- localStorage persistence
 *   flashcard/constants.ts  -- UI constants and config
 *   flashcard/DeckView.tsx  -- Main deck view (stats, navigation)
 *   flashcard/ReviewView.tsx -- SM-2 review loop (flip, rate)
 *   flashcard/StatsView.tsx -- Review statistics
 */

import { createEffect, createMemo, createSignal, onCleanup } from 'solid-js'
import { t } from '../i18n/config'
import { trackEvent } from '../utils/analytics'
import ErrorBoundary from './ErrorBoundary'
import type { View } from './flashcard/constants'
import DeckView from './flashcard/DeckView'
import ReviewView from './flashcard/ReviewView'
import StatsView from './flashcard/StatsView'
import {
  applySM2,
  type CardState,
  createDefaultState,
  DEFAULT_EASE,
  getMasteryLevel,
  isDue,
  type Rating,
} from './flashcard/sm2'
import {
  calculateStreak,
  type DeckData,
  getLongestStreak,
  getStreak,
  loadDeck,
  saveDeck,
} from './flashcard/storage'
import ReviewQueue from './ReviewQueue'
import SettingsDialog from './SettingsDialog'

// Dynamic import of solid-sonner to avoid SSR breakage. The solid-sonner
// module calls a client-only API at import time; importing it statically
// in a component that's rendered during Astro prerender (even via
// client:only) causes the SSR build to fail. Lazy-loading it only when
// a toast is actually needed keeps the SSR bundle clean.
async function showToast(type: 'success' | 'error', message: string) {
  const { toast } = await import('solid-sonner')
  toast[type](message)
}

export interface Flashcard {
  id: string
  front: string
  back: string
  tags: string[]
  difficulty?: 'easy' | 'medium' | 'hard'
}

export interface FlashcardDeckProps {
  cards: Flashcard[]
  deckId: string
  title?: string
  description?: string
  decks?: Array<{ deckId: string; cards: Flashcard[] }>
}

export type { View } from './flashcard/constants'
export type { CardState, Rating } from './flashcard/sm2'
export { applySM2, getMasteryLevel, isDue } from './flashcard/sm2'
export type { DeckData } from './flashcard/storage'
export {
  calculateStreak,
  getLongestStreak,
  getStreak,
  getTotalReviews,
  listDecks,
  loadDeck,
  recordReview,
  saveDeck,
} from './flashcard/storage'

function ActionButton(props: {
  label: string
  onClick: () => void
  primary?: boolean
  danger?: boolean
  disabled?: boolean
}) {
  const cls = () => {
    const base = 'py-2.5 px-6 rounded-lg font-semibold text-base cursor-pointer transition-all'
    if (props.primary)
      return `${base} border-none bg-primary text-white hover:opacity-90 disabled:bg-emphasis-300 disabled:cursor-not-allowed disabled:opacity-60`
    if (props.danger)
      return `${base} bg-error/10 text-error border border-emphasis-300 hover:bg-error/20`
    return `${base} bg-surface border border-emphasis-300 text-base hover:bg-emphasis-100 disabled:opacity-50 disabled:cursor-not-allowed`
  }

  return (
    <button type="button" onClick={props.onClick} disabled={props.disabled} class={cls()}>
      {props.label}
    </button>
  )
}

function createKeyboardShortcuts(handlers: Record<string, () => void>) {
  const handler = (e: KeyboardEvent) => {
    const key = e.key === 'Spacebar' ? ' ' : e.key
    if (key in handlers) {
      e.preventDefault()
      handlers[key]?.()
    }
  }

  if (typeof document !== 'undefined') {
    document.addEventListener('keydown', handler)
    onCleanup(() => document.removeEventListener('keydown', handler))
  }
}

function createPrefersReducedMotion() {
  const [prefersReduced, setPrefersReduced] = createSignal(false)

  if (typeof window !== 'undefined') {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReduced(mq.matches)

    const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches)
    mq.addEventListener('change', handler)
    onCleanup(() => mq.removeEventListener('change', handler))
  }

  return prefersReduced
}

export default function FlashcardDeck(props: FlashcardDeckProps) {
  const [getDeckData, setDeckData] = createSignal<DeckData | null>(loadDeck(props.deckId))
  const [getView, setView] = createSignal<View>('deck')
  const [getFlipped, setFlipped] = createSignal(false)
  const [getCurrentIndex, setCurrentIndex] = createSignal(0)
  const [getDueQueue, setDueQueue] = createSignal<string[]>([])

  const [getReviewQueueOpen, setReviewQueueOpen] = createSignal(false)

  const reviewQueueDecks = createMemo(() => {
    if (props.decks && props.decks.length > 0) return props.decks
    return [{ deckId: props.deckId, cards: props.cards }]
  })

  const globalDueCount = createMemo(() => {
    let count = 0
    const n = Date.now()
    for (const entry of reviewQueueDecks()) {
      const data = loadDeck(entry.deckId)
      for (const card of entry.cards) {
        const state = data?.cardStates[card.id] ?? createDefaultState()
        if (isDue(state, n)) count++
      }
    }
    return count
  })

  const now = Date.now()
  const prefersReducedMotion = createPrefersReducedMotion()

  const cardStates = createMemo(() => {
    const states: Record<string, CardState> = {}
    for (const card of props.cards) {
      states[card.id] = getDeckData()?.cardStates[card.id] ?? createDefaultState()
    }
    return states
  })

  const dueCards = createMemo(() =>
    props.cards.filter(c => isDue(cardStates()[c.id] ?? createDefaultState(), now)),
  )

  const masteryBreakdown = createMemo(() => {
    const counts = { new: 0, learning: 0, review: 0, mastered: 0 }
    for (const card of props.cards) {
      counts[getMasteryLevel(cardStates()[card.id] ?? createDefaultState())]++
    }
    return counts
  })

  const masteredCount = createMemo(() => masteryBreakdown().mastered)
  const masteryPercent = createMemo(() =>
    props.cards.length > 0 ? Math.round((masteredCount() / props.cards.length) * 100) : 0,
  )

  const avgEase = createMemo(() => {
    if (props.cards.length === 0) return DEFAULT_EASE
    const sum = props.cards.reduce(
      (acc, c) => acc + (cardStates()[c.id] ?? createDefaultState()).easeFactor,
      0,
    )
    return sum / props.cards.length
  })

  const streak = createMemo(() => {
    const data = getDeckData()
    return data ? calculateStreak(data) : 0
  })
  const totalReviews = createMemo(() => getDeckData()?.reviewHistory.length ?? 0)

  const persistData = (next: DeckData) => {
    saveDeck(props.deckId, next)
    setDeckData(next)
  }

  const startReview = () => {
    const due = props.cards.filter(c =>
      isDue(cardStates()[c.id] ?? createDefaultState(), Date.now()),
    )
    if (due.length === 0) return
    setDueQueue(due.map(c => c.id))
    setCurrentIndex(0)
    setFlipped(false)
    setView('review')
  }

  const handleRate = (rating: Rating) => {
    if (getCurrentIndex() >= getDueQueue().length) return
    const cardId = getDueQueue()[getCurrentIndex()]
    if (cardId === undefined) return
    const prevState = cardStates()[cardId] ?? createDefaultState()
    const newState = applySM2(prevState, rating, Date.now())
    const entry = { cardId, rating, timestamp: Date.now() }
    const lastStudyDate = Date.now()
    const data = getDeckData()
    const prevStreak = data ? calculateStreak(data) : 0
    const lastStudy = data?.lastStudyDate
    const lastDate = lastStudy ? new Date(lastStudy).toDateString() : ''
    const today = new Date().toDateString()
    const newStreak = lastDate === today ? prevStreak : prevStreak + 1

    const next: DeckData = {
      cardStates: { ...(getDeckData()?.cardStates ?? {}), [cardId]: newState },
      reviewHistory: [...(getDeckData()?.reviewHistory ?? []), entry],
      lastStudyDate,
      streak: newStreak,
    }

    persistData(next)

    trackEvent({
      event: 'flashcard_rate',
      component: 'FlashcardDeck',
      action: 'rate',
      rating,
      cardId,
      deckId: props.deckId || 'unknown',
      streak: newStreak,
    })

    if (getCurrentIndex() + 1 < getDueQueue().length) {
      setCurrentIndex(getCurrentIndex() + 1)
      setFlipped(false)
    } else {
      setView('deck')
      setDueQueue([])
    }
  }

  const handleReset = () => {
    persistData({ cardStates: {}, reviewHistory: [], lastStudyDate: null, streak: 0 })
    setView('deck')
    showToast('success', 'Deck reset')
  }

  const handleExport = () => {
    const data = getDeckData() ?? {
      cardStates: {},
      reviewHistory: [],
      lastStudyDate: null,
      streak: 0,
    }
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${props.deckId}-progress.json`
    a.click()
    URL.revokeObjectURL(url)
    showToast('success', 'Progress exported')
  }

  const handleImport = () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = '.json'
    input.onchange = () => {
      const file = input.files?.[0]
      if (!file) return
      const reader = new FileReader()
      reader.onload = () => {
        try {
          const data = JSON.parse(reader.result as string) as DeckData
          if (data.cardStates) {
            persistData(data)
            showToast('success', 'Progress imported')
          } else {
            showToast('error', 'Invalid progress file')
          }
        } catch {
          showToast('error', 'Failed to parse file')
        }
      }
      reader.readAsText(file)
    }
    input.click()
  }

  createEffect(() => {
    if (getView() !== 'review') return
    createKeyboardShortcuts({
      ' ': () => setFlipped(!getFlipped()),
      '1': () => getFlipped() && handleRate(1),
      '2': () => getFlipped() && handleRate(2),
      '3': () => getFlipped() && handleRate(3),
      '4': () => getFlipped() && handleRate(4),
    })
  })

  const currentCardId = createMemo(() => getDueQueue()[getCurrentIndex()] ?? null)
  const currentCard = createMemo(() => {
    const id = currentCardId()
    return id ? (props.cards.find(c => c.id === id) ?? null) : null
  })

  if (props.cards.length === 0) {
    return (
      <section
        aria-label="Flashcard deck empty"
        class="mx-auto my-6 max-w-[600px] rounded-xl border-2 border-emphasis-300 bg-surface p-6 text-center font-sans text-base"
      >
        {t('flashcard.empty')}
      </section>
    )
  }

  return (
    <ErrorBoundary component="FlashcardDeck">
      <section
        aria-label={props.title ? `Flashcard deck: ${props.title}` : 'Flashcard deck'}
        class="mx-auto my-6 max-w-[600px] rounded-xl border-2 border-emphasis-300 bg-surface p-6 font-sans text-base"
      >
      <ReviewQueue
        open={getReviewQueueOpen()}
        onOpenChange={setReviewQueueOpen}
        decks={reviewQueueDecks()}
      />

      {getView() === 'deck' && (
        <DeckView
          title={props.title}
          description={props.description}
          cards={props.cards}
          dueCards={dueCards()}
          masteredCount={masteredCount()}
          streak={streak()}
          masteryBreakdown={masteryBreakdown()}
          masteryPercent={masteryPercent()}
          startReview={startReview}
          setView={setView}
          onOpenReviewQueue={() => setReviewQueueOpen(true)}
          globalDueCount={globalDueCount()}
        />
      )}

      {getView() === 'review' && (
        <ReviewView
          currentCard={currentCard()}
          currentIndex={getCurrentIndex()}
          dueQueueLength={getDueQueue().length}
          flipped={getFlipped()}
          setFlipped={setFlipped}
          handleRate={handleRate}
          setView={setView}
          setDueQueue={setDueQueue}
          prefersReducedMotion={prefersReducedMotion()}
        />
      )}

      {getView() === 'stats' && (
        <StatsView
          masteredCount={masteredCount()}
          masteryBreakdown={masteryBreakdown()}
          streak={streak()}
          totalReviews={totalReviews()}
          avgEase={avgEase()}
          globalStreak={getStreak()}
          longestStreak={getLongestStreak()}
          setView={setView}
        />
      )}

      {getView() === 'settings' && (
        <SettingsDialog
          open={getView() === 'settings'}
          onOpenChange={open => {
            if (!open) setView('deck')
          }}
          title={t('settings.title')}
        >
          <div class="flex flex-col gap-3">
            <ActionButton label={t('flashcard.export')} onClick={handleExport} />
            <ActionButton label={t('flashcard.import')} onClick={handleImport} />
            <ActionButton label={t('flashcard.reset')} onClick={handleReset} danger />
          </div>
          <div class="mt-5">
            <ActionButton label={t('flashcard.close')} onClick={() => setView('deck')} />
          </div>
        </SettingsDialog>
      )}
    </section>
    </ErrorBoundary>
  )
}
