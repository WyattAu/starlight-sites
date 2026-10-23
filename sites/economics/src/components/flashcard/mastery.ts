/**
 * Mastery model, aggregates practice outcomes, spaced-repetition state,
 * and reading recency into a simple per-topic 0-4 tier.
 *
 * Tiers:
 *   0 unseen      no data
 *   1 weak        practised, accuracy below 60%
 *   2 developing  accuracy 60-79%, or fewer than 3 attempts
 *   3 solid       accuracy >= 80% across >= 3 attempts
 *   4 mastered    accuracy >= 90% across >= 5 attempts
 *
 * Pure functions only: callers supply stats so the tier logic is
 * unit-testable without a DOM.
 */

import {
  accuracyOf,
  listPracticedTopics,
  loadPracticeStats,
  type PracticeStats,
} from '../practice/store'
import { isDue } from './sm2'
import { getStreak, listDecks, loadDeck } from './storage'

export type TopicMasteryTier = 0 | 1 | 2 | 3 | 4

export interface TopicProgress {
  path: string
  attempts: number
  correct: number
  accuracy: number | null
  lastPracticed: number | null
  tier: TopicMasteryTier
  label: 'unseen' | 'weak' | 'developing' | 'solid' | 'mastered'
}

export const TIER_LABELS = ['unseen', 'weak', 'developing', 'solid', 'mastered'] as const

export function tierForStats(stats: PracticeStats | null): TopicMasteryTier {
  const acc = accuracyOf(stats)
  if (acc === null) return 0
  if (acc < 0.6) return 1
  if ((stats?.attempts ?? 0) >= 5 && acc >= 0.9) return 4
  if (acc >= 0.8 && (stats?.attempts ?? 0) >= 3) return 3
  return 2
}

export function getTopicProgress(path: string, stats?: PracticeStats | null): TopicProgress {
  const s = stats ?? loadPracticeStats(path)
  const tier = tierForStats(s)
  return {
    path,
    attempts: s?.attempts ?? 0,
    correct: s?.correct ?? 0,
    accuracy: accuracyOf(s),
    lastPracticed: s?.lastPracticed ?? null,
    tier,
    label: TIER_LABELS[tier],
  }
}

export interface SiteProgressSummary {
  streak: number
  reviewsTotal: number
  dueTotal: number
  practicedCount: number
  /** Topics with practice data, most recent first (already sorted). */
  topics: TopicProgress[]
}

export function getSiteProgressSummary(now: number = Date.now()): SiteProgressSummary {
  const practiced = listPracticedTopics()
  let dueTotal = 0
  let reviewsTotal = 0

  if (typeof localStorage !== 'undefined') {
    for (const deckId of listDecks()) {
      const data = loadDeck(deckId)
      if (!data) continue
      reviewsTotal += data.reviewHistory.length
      for (const state of Object.values(data.cardStates)) {
        if (isDue(state, now)) dueTotal++
      }
    }
  }

  return {
    streak: typeof localStorage !== 'undefined' ? getStreak() : 0,
    reviewsTotal,
    dueTotal,
    practicedCount: practiced.length,
    topics: practiced.map(({ path, stats }) => getTopicProgress(path, stats)),
  }
}
