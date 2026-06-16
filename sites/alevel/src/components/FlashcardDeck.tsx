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
 */

import { createEffect, createMemo, createSignal, For, onCleanup } from 'solid-js'
import { MASTERY_COLORS, MASTERY_LABELS, RATING_CONFIG, type View } from './flashcard/constants'
import {
  applySM2,
  type CardState,
  createDefaultState,
  DEFAULT_EASE,
  getMasteryLevel,
  isDue,
  type Rating,
} from './flashcard/sm2'
import { calculateStreak, type DeckData, loadDeck, saveDeck } from './flashcard/storage'
import SettingsDialog from './SettingsDialog'

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
}

// Re-export types for backward compatibility
export type { CardState, DeckData, Rating, View } from './flashcard/sm2'
export { applySM2, getMasteryLevel, isDue } from './flashcard/sm2'
export { calculateStreak, loadDeck, saveDeck } from './flashcard/storage'

const RatingButton = (props: {
  config: (typeof RATING_CONFIG)[number]
  onClick: (rating: Rating) => void
  disabled: boolean
}) => {
  return (
    <button
      type="button"
      disabled={props.disabled}
      onClick={() => props.onClick(props.config.key)}
      aria-label={`${props.config.label} (${props.config.shortcut})`}
      class="flex-1 py-2.5 px-2 rounded-lg text-white font-semibold text-sm cursor-pointer transition-opacity hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
      style={{ '--rating-color': props.config.color, background: props.config.color } as Record<string, string>}
    >
      {props.config.label}
      <span class="block text-xs opacity-80 mt-0.5">{props.config.shortcut}</span>
    </button>
  )
}

function StatBox(props: { label: string; value: string | number; highlight?: boolean }) {
  return (
    <div
      class={`py-3 px-4 rounded-lg text-center min-w-[90px] border ${
        props.highlight
          ? 'border-error bg-error/10'
          : 'bg-emphasis-100 border-emphasis-200'
      }`}
    >
      <div class="text-xl font-bold">{props.value}</div>
      <div class="text-xs text-emphasis-700">{props.label}</div>
    </div>
  )
}

function ActionButton(props: {
  label: string
  onClick: () => void
  primary?: boolean
  danger?: boolean
  disabled?: boolean
}) {
  const cls = () => {
    const base = 'py-2.5 px-6 rounded-lg font-semibold text-base cursor-pointer transition-all'
    if (props.primary) return `${base} border-none bg-primary text-white hover:opacity-90 disabled:bg-emphasis-300 disabled:cursor-not-allowed disabled:opacity-60`
    if (props.danger) return `${base} bg-error/10 text-error border border-emphasis-300 hover:bg-error/20`
    return `${base} bg-surface border border-emphasis-300 text-base hover:bg-emphasis-100 disabled:opacity-50 disabled:cursor-not-allowed`
  }

  return (
    <button type="button" onClick={props.onClick} disabled={props.disabled} class={cls()}>
      {props.label}
    </button>
  )
}

/**
 * Custom hook for keyboard shortcuts using native event handling.
 * Replaces manual createEffect + addEventListener pattern.
 */
function createKeyboardShortcuts(handlers: Record<string, () => void>) {
  const handler = (e: KeyboardEvent) => {
    const key = e.key === 'Spacebar' ? ' ' : e.key
    if (key in handlers) {
      e.preventDefault()
      handlers[key]()
    }
  }

  if (typeof document !== 'undefined') {
    document.addEventListener('keydown', handler)
    onCleanup(() => document.removeEventListener('keydown', handler))
  }
}

/**
 * Custom hook for prefers-reduced-motion media query.
 * Returns a reactive signal that tracks the media query state.
 */
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
  let _containerRef: HTMLDivElement | undefined
  let cardRef: HTMLDivElement | undefined

  const now = Date.now()
  const prefersReducedMotion = createPrefersReducedMotion()

  const cardStates = createMemo(() => {
    const states: Record<string, CardState> = {}
    for (const card of props.cards) {
      states[card.id] = getDeckData()?.cardStates[card.id] ?? createDefaultState()
    }
    return states
  })

  const dueCards = createMemo(() => props.cards.filter(c => isDue(cardStates()[c.id], now)))

  const masteryBreakdown = createMemo(() => {
    const counts = { new: 0, learning: 0, review: 0, mastered: 0 }
    for (const card of props.cards) {
      counts[getMasteryLevel(cardStates()[card.id])]++
    }
    return counts
  })

  const masteredCount = createMemo(() => masteryBreakdown().mastered)
  const masteryPercent = createMemo(() =>
    props.cards.length > 0 ? Math.round((masteredCount() / props.cards.length) * 100) : 0,
  )

  const avgEase = createMemo(() => {
    if (props.cards.length === 0) return DEFAULT_EASE
    const sum = props.cards.reduce((acc, c) => acc + cardStates()[c.id].easeFactor, 0)
    return sum / props.cards.length
  })

  const streak = createMemo(() => (getDeckData() ? calculateStreak(getDeckData()!) : 0))
  const totalReviews = createMemo(() => getDeckData()?.reviewHistory.length ?? 0)

  const persistData = (next: DeckData) => {
    saveDeck(props.deckId, next)
    setDeckData(next)
  }

  const startReview = () => {
    const due = props.cards.filter(c => isDue(cardStates()[c.id], Date.now()))
    if (due.length === 0) return
    setDueQueue(due.map(c => c.id))
    setCurrentIndex(0)
    setFlipped(false)
    setView('review')
    setTimeout(() => cardRef?.focus(), 50)
  }

  const handleRate = (rating: Rating) => {
    if (getCurrentIndex() >= getDueQueue().length) return
    const cardId = getDueQueue()[getCurrentIndex()]
    const prevState = cardStates()[cardId] ?? createDefaultState()
    const newState = applySM2(prevState, rating, Date.now())
    const entry = { cardId, rating, timestamp: Date.now() }
    const lastStudyDate = Date.now()
    const prevStreak = getDeckData() ? calculateStreak(getDeckData()!) : 0
    const lastDate = getDeckData()?.lastStudyDate
      ? new Date(getDeckData()?.lastStudyDate).toDateString()
      : ''
    const today = new Date().toDateString()
    const newStreak = lastDate === today ? prevStreak : prevStreak + 1

    const next: DeckData = {
      cardStates: { ...(getDeckData()?.cardStates ?? {}), [cardId]: newState },
      reviewHistory: [...(getDeckData()?.reviewHistory ?? []), entry],
      lastStudyDate,
      streak: newStreak,
    }

    persistData(next)

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
          if (data.cardStates) persistData(data)
        } catch {
          /* invalid JSON */
        }
      }
      reader.readAsText(file)
    }
    input.click()
  }

  // Keyboard shortcuts for review mode
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
    return id ? props.cards.find(c => c.id === id) : null
  })

  if (props.cards.length === 0) {
    return (
      <div
        role="region"
        aria-label="Flashcard deck empty"
        class="max-w-[600px] mx-auto my-6 p-6 border-2 border-emphasis-300 rounded-xl bg-surface text-base text-center font-sans"
      >
        No cards in this deck.
      </div>
    )
  }

  return (
    <div
      ref={el => {
        _containerRef = el
      }}
      role="region"
      aria-label={props.title ? `Flashcard deck: ${props.title}` : 'Flashcard deck'}
      class="max-w-[600px] mx-auto my-6 p-6 border-2 border-emphasis-300 rounded-xl bg-surface text-base font-sans"
    >
      {getView() === 'deck' && (
        <div class="text-center">
          {props.title && <h3 class="mt-0 mb-1 text-base font-semibold">{props.title}</h3>}
          {props.description && <p class="mt-0 mb-4 text-sm text-emphasis-700">{props.description}</p>}

          <div class="flex flex-wrap gap-3 justify-center mb-4">
            <StatBox label="Total Cards" value={props.cards.length} />
            <StatBox
              label="Due Today"
              value={dueCards().length}
              highlight={dueCards().length > 0}
            />
            <StatBox label="Mastered" value={masteredCount()} />
            <StatBox label="Streak" value={`${streak()}d`} />
          </div>

          <div class="flex flex-wrap gap-2 justify-center mb-5">
            <For each={Object.entries(masteryBreakdown())}>
              {([level, count]) => (
                <span class="inline-block py-1 px-3 rounded-full text-xs font-semibold text-white" style={{ background: MASTERY_COLORS[level] }}>
                  {MASTERY_LABELS[level]}: {count}
                </span>
              )}
            </For>
          </div>

          <div class="w-full max-w-[520px] mt-3 mx-auto">
            <div class="flex justify-between text-xs mb-1">
              <span>Mastery</span>
              <span>{masteryPercent()}%</span>
            </div>
            <div class="h-2 rounded bg-emphasis-200">
              <div class="h-full rounded bg-primary transition-[width]" style={{ width: `${masteryPercent()}%` }} />
            </div>
          </div>

          <div class="mt-5 flex gap-2.5 justify-center flex-wrap">
            <ActionButton
              label="Study Now"
              disabled={dueCards().length === 0}
              onClick={startReview}
              primary
            />
            <ActionButton label="Stats" onClick={() => setView('stats')} />
            <ActionButton label="Settings" onClick={() => setView('settings')} />
          </div>
        </div>
      )}

      {getView() === 'review' && (
        <div>
          <div class="text-center mb-3 text-sm text-emphasis-700">
            Card {getCurrentIndex() + 1} of {getDueQueue().length}
          </div>

          <div class="w-full max-w-[520px] mx-auto" style={{ perspective: '1000px' }}>
            <div
              ref={el => {
                cardRef = el
              }}
              tabIndex={0}
              role="button"
              aria-label={
                getFlipped()
                  ? 'Card answer shown. Rate your recall.'
                  : 'Card question. Press Space to flip.'
              }
              onClick={() => setFlipped(!getFlipped())}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setFlipped(!getFlipped())
                }
              }}
              class="relative w-full min-h-[220px] cursor-pointer"
              style={{
                'transform-style': 'preserve-3d',
                transform: getFlipped() ? 'rotateY(180deg)' : 'rotateY(0)',
                transition: prefersReducedMotion() ? 'none' : 'transform 0.6s',
              }}
            >
              <div class="absolute inset-0 min-h-[220px] backface-hidden flex flex-col items-center justify-center p-7 px-6 rounded-xl border-2 border-emphasis-300 bg-surface box-border">
                <div class="text-xs text-emphasis-500 mb-2">QUESTION</div>
                <div class="text-lg font-semibold text-center leading-relaxed">{currentCard()?.front}</div>
              </div>
              <div class="absolute inset-0 min-h-[220px] backface-hidden flex flex-col items-center justify-center p-7 px-6 rounded-xl border-2 border-emphasis-300 bg-surface box-border" style={{ transform: 'rotateY(180deg)' }}>
                <div class="text-xs text-emphasis-500 mb-2">ANSWER</div>
                <div class="text-lg font-semibold text-center leading-relaxed">{currentCard()?.back}</div>
              </div>
            </div>
          </div>

          <div
            class="flex gap-2 mt-5 max-w-[520px] mx-auto transition-[opacity]"
            style={{
              opacity: getFlipped() ? 1 : 0.3,
              'pointer-events': getFlipped() ? 'auto' : 'none',
            }}
          >
            <For each={RATING_CONFIG}>
              {cfg => <RatingButton config={cfg} onClick={handleRate} disabled={!getFlipped()} />}
            </For>
          </div>

          <div class="text-center mt-4">
            <button
              type="button"
              class="py-2 px-5 border border-emphasis-300 rounded-lg bg-transparent cursor-pointer text-sm"
              onClick={() => {
                setView('deck')
                setDueQueue([])
              }}
            >
              Exit Review
            </button>
          </div>
        </div>
      )}

      {getView() === 'stats' && (
        <div class="text-center">
          <h3 class="mt-0 mb-4 text-base font-semibold">Statistics</h3>
          <div class="flex flex-wrap gap-3 justify-center mb-6">
            <StatBox label="Cards Mastered" value={masteredCount()} />
            <StatBox
              label="Cards Learning"
              value={masteryBreakdown().learning + masteryBreakdown().review}
            />
            <StatBox label="Cards New" value={masteryBreakdown().new} />
            <StatBox label="Review Streak" value={`${streak()} days`} />
            <StatBox label="Total Reviews" value={totalReviews()} />
            <StatBox label="Avg Ease Factor" value={avgEase().toFixed(2)} />
          </div>
          <div class="flex flex-wrap gap-2 justify-center mb-6">
            <For each={Object.entries(masteryBreakdown())}>
              {([level, count]) => (
                <span class="inline-block py-1 px-3 rounded-full text-xs font-semibold text-white" style={{ background: MASTERY_COLORS[level] }}>
                  {MASTERY_LABELS[level]}: {count}
                </span>
              )}
            </For>
          </div>
          <ActionButton label="Back" onClick={() => setView('deck')} />
        </div>
      )}

      {getView() === 'settings' && (
        <SettingsDialog
          open={getView() === 'settings'}
          onOpenChange={(open) => {
            if (!open) setView('deck')
          }}
          title="Settings"
        >
          <div class="flex flex-col gap-3">
            <ActionButton label="Export Progress" onClick={handleExport} />
            <ActionButton label="Import Progress" onClick={handleImport} />
            <ActionButton label="Reset Deck" onClick={handleReset} danger />
          </div>
          <div class="mt-5">
            <ActionButton label="Close" onClick={() => setView('deck')} />
          </div>
        </SettingsDialog>
      )}
    </div>
  )
}
