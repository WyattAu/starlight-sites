/**
 * FlashcardDeckReview -- The SM-2 spaced repetition review view.
 * Shows a flipable card with rating buttons.
 */

import { For } from 'solid-js'
import { t } from '../../i18n/config'
import { RATING_CONFIG } from './constants'
import type { Rating } from './sm2'
import type { Flashcard } from '../FlashcardDeck'

function RatingButton(props: {
  config: (typeof RATING_CONFIG)[number]
  onClick: (rating: Rating) => void
  disabled: boolean
}) {
  return (
    <button
      type="button"
      disabled={props.disabled}
      onClick={() => props.onClick(props.config.key)}
      aria-label={`${props.config.label} (${props.config.shortcut})`}
      class="flex-1 cursor-pointer rounded-lg px-2 py-2.5 font-semibold text-sm text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
      style={
        { '--rating-color': props.config.color, background: props.config.color } as Record<
          string,
          string
        >
      }
    >
      {props.config.label}
      <span class="mt-0.5 block text-xs opacity-80">{props.config.shortcut}</span>
    </button>
  )
}

export interface ReviewViewProps {
  currentCard: Flashcard | null
  currentIndex: number
  dueQueueLength: number
  flipped: boolean
  setFlipped: (f: boolean) => void
  handleRate: (rating: number) => void
  setView: (view: string) => void
  setDueQueue: (q: string[]) => void
  prefersReducedMotion: boolean
}

export default function ReviewView(props: ReviewViewProps) {
  return (
    <div>
      <div class="mb-3 text-center text-emphasis-700 text-sm">
        {t('flashcard.card_of', {
          current: String(props.currentIndex + 1),
          total: String(props.dueQueueLength),
        })}
      </div>

      <div class="mx-auto w-full max-w-[520px]" style={{ perspective: '1000px' }}>
        <div
          tabIndex={0}
          role="button"
          aria-label={
            props.flipped
              ? 'Card answer shown. Rate your recall.'
              : 'Card question. Press Space to flip.'
          }
          onClick={() => props.setFlipped(!props.flipped)}
          onKeyDown={e => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              props.setFlipped(!props.flipped)
            }
          }}
          class="relative min-h-[220px] w-full cursor-pointer"
          style={{
            'transform-style': 'preserve-3d',
            transform: props.flipped ? 'rotateY(180deg)' : 'rotateY(0)',
            transition: props.prefersReducedMotion ? 'none' : 'transform 0.6s',
          }}
        >
          <div class="backface-hidden absolute inset-0 box-border flex min-h-[220px] flex-col items-center justify-center rounded-xl border-2 border-emphasis-300 bg-surface p-7 px-6">
            <div class="mb-2 text-emphasis-500 text-xs">{t('flashcard.question')}</div>
            <div class="text-center font-semibold text-lg leading-relaxed">
              {props.currentCard()?.front}
            </div>
          </div>
          <div
            class="backface-hidden absolute inset-0 box-border flex min-h-[220px] flex-col items-center justify-center rounded-xl border-2 border-emphasis-300 bg-surface p-7 px-6"
            style={{ transform: 'rotateY(180deg)' }}
          >
            <div class="mb-2 text-emphasis-500 text-xs">{t('flashcard.answer')}</div>
            <div class="text-center font-semibold text-lg leading-relaxed">
              {props.currentCard()?.back}
            </div>
          </div>
        </div>
      </div>

      <div
        class="mx-auto mt-5 flex max-w-[520px] gap-2 transition-[opacity]"
        style={{
          opacity: props.flipped ? 1 : 0.3,
          'pointer-events': props.flipped ? 'auto' : 'none',
        }}
      >
        <For each={RATING_CONFIG}>
          {cfg => (
            <RatingButton config={cfg} onClick={props.handleRate} disabled={!props.flipped} />
          )}
        </For>
      </div>

      <div class="mt-4 text-center">
        <button
          type="button"
          class="cursor-pointer rounded-lg border border-emphasis-300 bg-transparent px-5 py-2 text-sm"
          onClick={() => {
            props.setView('deck')
            props.setDueQueue([])
          }}
        >
          {t('flashcard.exit_review')}
        </button>
      </div>
    </div>
  )
}
