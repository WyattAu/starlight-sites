/**
 * FlashcardDeckStats -- Review statistics view showing mastery breakdown,
 * streak, total reviews, and average ease factor.
 */

import { For } from 'solid-js'
import { t } from '../../i18n/config'
// biome-ignore lint/correctness/noUnusedImports: used via use:animate directive
import { animate } from '../../utils/animate'
import { MASTERY_COLORS, MASTERY_LABELS } from './constants'

function StatBox(props: { label: string; value: string | number }) {
  return (
    <div class="min-w-[90px] rounded-lg border border-emphasis-200 bg-emphasis-100 px-4 py-3 text-center">
      <div class="font-bold text-xl">{props.value}</div>
      <div class="text-emphasis-700 text-xs">{props.label}</div>
    </div>
  )
}

function ActionButton(props: { label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={props.onClick}
      class="cursor-pointer rounded-lg border border-emphasis-300 bg-surface px-6 py-2.5 font-semibold text-base text-base transition-all hover:bg-emphasis-100"
    >
      {props.label}
    </button>
  )
}

export interface StatsViewProps {
  masteredCount: number
  masteryBreakdown: Record<string, number>
  streak: number
  totalReviews: number
  avgEase: number
  globalStreak?: number
  longestStreak?: number
  setView: (view: string) => void
}

export default function StatsView(props: StatsViewProps) {
  return (
    <div class="text-center">
      <h3 class="mt-0 mb-4 font-semibold text-base">{t('flashcard.stats')}</h3>
      <div class="mb-6 flex flex-wrap justify-center gap-3">
        <StatBox label={t('flashcard.mastered')} value={props.masteredCount} />
        <StatBox
          label="Learning"
          value={(props.masteryBreakdown.learning ?? 0) + (props.masteryBreakdown.review ?? 0)}
        />
        <StatBox label="New" value={props.masteryBreakdown.new ?? 0} />
        <StatBox label={t('flashcard.streak')} value={`${props.streak} days`} />
        {props.globalStreak !== undefined && (
          <StatBox label={t('stats.global_streak')} value={`${props.globalStreak}d`} />
        )}
        {props.longestStreak !== undefined && (
          <StatBox label={t('stats.longest_streak')} value={`${props.longestStreak}d`} />
        )}
        <StatBox label="Total Reviews" value={props.totalReviews} />
        <StatBox label="Avg Ease Factor" value={props.avgEase.toFixed(2)} />
      </div>
      <div class="mb-6 flex flex-wrap justify-center gap-2" use:animate>
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
      <ActionButton label="Back" onClick={() => props.setView('deck')} />
    </div>
  )
}
