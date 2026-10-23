/**
 * FlashcardDeckView -- The main deck view showing card statistics,
 * mastery breakdown, and navigation buttons.
 */

import { For } from 'solid-js'
import { t } from '../../i18n/config'
// biome-ignore lint/correctness/noUnusedImports: used via use:animate directive
import { animate } from '../../utils/animate'
import type { Flashcard } from '../FlashcardDeck'
import { MASTERY_COLORS, MASTERY_LABELS } from './constants'

function StatBox(props: { label: string; value: string | number; highlight?: boolean }) {
  return (
    <div
      class={`min-w-[90px] rounded-lg border px-4 py-3 text-center ${
        props.highlight ? 'border-error bg-error/10' : 'border-emphasis-200 bg-emphasis-100'
      }`}
    >
      <div class="font-bold text-xl">{props.value}</div>
      <div class="text-emphasis-700 text-xs">{props.label}</div>
    </div>
  )
}

function ActionButton(props: {
  label: string
  onClick: () => void
  primary?: boolean
  disabled?: boolean
}) {
  const cls = props.primary
    ? 'py-2.5 px-6 rounded-lg font-semibold text-base cursor-pointer transition-all border-none bg-primary text-white hover:opacity-90 disabled:bg-emphasis-300 disabled:cursor-not-allowed disabled:opacity-60'
    : 'py-2.5 px-6 rounded-lg font-semibold text-base cursor-pointer transition-all bg-surface border border-emphasis-300 text-base hover:bg-emphasis-100 disabled:opacity-50 disabled:cursor-not-allowed'

  return (
    <button type="button" onClick={props.onClick} disabled={props.disabled} class={cls}>
      {props.label}
    </button>
  )
}

export interface DeckViewProps {
  title?: string
  description?: string
  cards: Flashcard[]
  dueCards: Flashcard[]
  masteredCount: number
  streak: number
  masteryBreakdown: Record<string, number>
  masteryPercent: number
  startReview: () => void
  setView: (view: string) => void
  onOpenReviewQueue?: () => void
  globalDueCount?: number
}

export default function DeckView(props: DeckViewProps) {
  return (
    <div class="text-center">
      {props.title && <h3 class="mt-0 mb-1 font-semibold text-base">{props.title}</h3>}
      {props.description && <p class="mt-0 mb-4 text-emphasis-700 text-sm">{props.description}</p>}

      <div class="mb-4 flex flex-wrap justify-center gap-3">
        <StatBox label={t('flashcard.total_cards')} value={props.cards.length} />
        <StatBox
          label={t('flashcard.due_today')}
          value={props.dueCards.length}
          highlight={props.dueCards.length > 0}
        />
        <StatBox label={t('flashcard.mastered')} value={props.masteredCount} />
        <StatBox label={t('flashcard.streak')} value={`${props.streak}d`} />
      </div>

      <div class="mb-5 flex flex-wrap justify-center gap-2" use:animate>
        <For each={Object.entries(props.masteryBreakdown)}>
          {([level, count]) => (
            <span
              class="inline-block rounded-full px-3 py-1 font-semibold text-white text-xs"
              style={{ background: MASTERY_COLORS[level] }}
            >
              {MASTERY_LABELS[level]}: {count}
            </span>
          )}
        </For>
      </div>

      <div class="mx-auto mt-3 w-full max-w-[520px]">
        <div class="mb-1 flex justify-between text-xs">
          <span>{t('flashcard.mastery')}</span>
          <span>{props.masteryPercent}%</span>
        </div>
        <div class="h-2 rounded bg-emphasis-200">
          <div
            class="h-full rounded bg-primary transition-[width]"
            style={{ width: `${props.masteryPercent}%` }}
          />
        </div>
      </div>

      <div class="mt-5 flex flex-wrap justify-center gap-2.5">
        <ActionButton
          label={t('flashcard.study_now')}
          disabled={props.dueCards.length === 0}
          onClick={props.startReview}
          primary
        />
        {props.onOpenReviewQueue && (
          <ActionButton
            label={`${t('review_queue.review_all')}${props.globalDueCount ? ` (${props.globalDueCount})` : ''}`}
            onClick={props.onOpenReviewQueue}
          />
        )}
        <ActionButton label={t('flashcard.stats')} onClick={() => props.setView('stats')} />
        <ActionButton label={t('flashcard.settings')} onClick={() => props.setView('settings')} />
      </div>
    </div>
  )
}
