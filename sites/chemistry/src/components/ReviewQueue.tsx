import { createEffect, createMemo, createSignal, onCleanup } from 'solid-js'
import { t } from '../i18n/config'
import BaseDialog from './BaseDialog'
import type { Flashcard } from './FlashcardDeck'
import ReviewView from './flashcard/ReviewView'
import { applySM2, type CardState, createDefaultState, isDue, type Rating } from './flashcard/sm2'
import { getStreak, loadDeck, recordReview, saveDeck } from './flashcard/storage'

type Phase = 'overview' | 'review' | 'complete'

export interface DeckEntry {
  deckId: string
  cards: Flashcard[]
}

export interface ReviewQueueProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  decks: DeckEntry[]
}

export default function ReviewQueue(props: ReviewQueueProps) {
  const [phase, setPhase] = createSignal<Phase>('overview')
  const [flipped, setFlipped] = createSignal(false)
  const [currentIndex, setCurrentIndex] = createSignal(0)
  const [ratings, setRatings] = createSignal<Rating[]>([])

  const prefersReducedMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const now = Date.now()

  const queue = createMemo(() => {
    const items: Array<{ card: Flashcard; state: CardState; deckId: string }> = []
    for (const entry of props.decks) {
      const data = loadDeck(entry.deckId)
      for (const card of entry.cards) {
        const state = data?.cardStates[card.id] ?? createDefaultState()
        if (isDue(state, now)) {
          items.push({ card, state, deckId: entry.deckId })
        }
      }
    }
    items.sort((a, b) => a.state.nextReview - b.state.nextReview)
    return items
  })

  const currentItem = createMemo(() => queue()[currentIndex()])

  const handleStart = () => {
    setCurrentIndex(0)
    setFlipped(false)
    setRatings([])
    setPhase('review')
  }

  const handleRate = (rating: Rating) => {
    const idx = currentIndex()
    if (idx >= queue().length) return

    const item = queue()[idx]
    const prevData = loadDeck(item.deckId)
    const prevState = prevData?.cardStates[item.card.id] ?? createDefaultState()
    const newState = applySM2(prevState, rating, Date.now())

    const entry = { cardId: item.card.id, rating, timestamp: Date.now() }
    const next: CardState = newState

    const nextData = {
      cardStates: { ...(prevData?.cardStates ?? {}), [item.card.id]: next },
      reviewHistory: [...(prevData?.reviewHistory ?? []), entry],
      lastStudyDate: Date.now(),
      streak: (prevData?.streak ?? 0) + 1,
    }
    saveDeck(item.deckId, nextData)
    recordReview()

    setRatings(prev => [...prev, rating])

    if (idx + 1 < queue().length) {
      setCurrentIndex(idx + 1)
      setFlipped(false)
    } else {
      setPhase('complete')
    }
  }

  const handleClose = () => {
    setPhase('overview')
    props.onOpenChange(false)
  }

  createEffect(() => {
    if (phase() !== 'review') return
    const handler = (e: KeyboardEvent) => {
      const key = e.key === 'Spacebar' ? ' ' : e.key
      if (key === ' ') {
        e.preventDefault()
        setFlipped(f => !f)
      } else if (key === '1' || key === '2' || key === '3' || key === '4') {
        if (!flipped()) return
        handleRate(parseInt(key, 10) as Rating)
      }
    }
    if (typeof document !== 'undefined') {
      document.addEventListener('keydown', handler)
      onCleanup(() => document.removeEventListener('keydown', handler))
    }
  })

  const avgRating = createMemo(() => {
    const r = ratings()
    if (r.length === 0) return 0
    return r.reduce((a, b) => a + b, 0) / r.length
  })

  const streakAfter = () => getStreak()

  const estimatedMinutes = () => Math.ceil(queue().length * 0.5)

  return (
    <BaseDialog
      open={props.open}
      onOpenChange={open => {
        if (!open) handleClose()
      }}
      title={t('review_queue.title')}
      size="lg"
    >
      {phase() === 'overview' && (
        <div class="text-center">
          <div class="mb-4 flex flex-wrap justify-center gap-3">
            <div class="min-w-[90px] rounded-lg border border-emphasis-200 bg-emphasis-100 px-4 py-3 text-center">
              <div class="font-bold text-xl">{queue().length}</div>
              <div class="text-emphasis-700 text-xs">{t('flashcard.due_today')}</div>
            </div>
            <div class="min-w-[90px] rounded-lg border border-emphasis-200 bg-emphasis-100 px-4 py-3 text-center">
              <div class="font-bold text-xl">
                {estimatedMinutes()}
                <span class="text-sm">m</span>
              </div>
              <div class="text-emphasis-700 text-xs">{t('review_queue.estimated')}</div>
            </div>
          </div>
          <button
            type="button"
            disabled={queue().length === 0}
            onClick={handleStart}
            class="cursor-pointer rounded-lg border-none bg-primary px-6 py-2.5 font-semibold text-base text-white transition-all hover:opacity-90 disabled:cursor-not-allowed disabled:bg-emphasis-300 disabled:opacity-60"
          >
            {t('review_queue.start')}
          </button>
        </div>
      )}

      {phase() === 'review' && (
        <ReviewView
          currentCard={currentItem()?.card ?? null}
          currentIndex={currentIndex()}
          dueQueueLength={queue().length}
          flipped={flipped()}
          setFlipped={setFlipped}
          handleRate={handleRate}
          setView={handleClose}
          setDueQueue={() => {}}
          prefersReducedMotion={prefersReducedMotion}
        />
      )}

      {phase() === 'complete' && (
        <div class="text-center">
          <h3 class="mt-0 mb-4 font-semibold text-base">{t('review_queue.complete')}</h3>
          <div class="mb-6 flex flex-wrap justify-center gap-3">
            <div class="min-w-[90px] rounded-lg border border-emphasis-200 bg-emphasis-100 px-4 py-3 text-center">
              <div class="font-bold text-xl">{ratings().length}</div>
              <div class="text-emphasis-700 text-xs">{t('review_queue.cards_reviewed')}</div>
            </div>
            <div class="min-w-[90px] rounded-lg border border-emphasis-200 bg-emphasis-100 px-4 py-3 text-center">
              <div class="font-bold text-xl">{avgRating().toFixed(1)}</div>
              <div class="text-emphasis-700 text-xs">{t('review_queue.avg_rating')}</div>
            </div>
            <div class="min-w-[90px] rounded-lg border border-emphasis-200 bg-emphasis-100 px-4 py-3 text-center">
              <div class="font-bold text-xl">
                {streakAfter()}
                <span class="text-sm">d</span>
              </div>
              <div class="text-emphasis-700 text-xs">{t('flashcard.streak')}</div>
            </div>
          </div>
          <button
            type="button"
            onClick={handleClose}
            class="cursor-pointer rounded-lg border-none bg-primary px-6 py-2.5 font-semibold text-base text-white transition-all hover:opacity-90"
          >
            {t('review_queue.continue')}
          </button>
        </div>
      )}
    </BaseDialog>
  )
}
