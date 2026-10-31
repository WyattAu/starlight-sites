/**
 * Flashcard deck UI constants and configuration.
 *
 * Colors reference shared/utils/colors.ts for single-source-of-truth.
 */

import { COLORS } from '../../utils/colors'
import type { Rating } from './sm2'

export const MASTERY_LABELS: Record<string, string> = {
  new: 'New',
  learning: 'Learning',
  review: 'Reviewing',
  mastered: 'Mastered',
}

export const MASTERY_COLORS: Record<string, string> = {
  new: 'var(--sl-color-gray-5)',
  learning: COLORS.warning,
  review: COLORS.info,
  mastered: COLORS.success,
}

export interface RatingConfig {
  key: Rating
  label: string
  color: string
  shortcut: string
}

export const RATING_CONFIG: RatingConfig[] = [
  { key: 1, label: 'Again', color: '#e74c3c', shortcut: '1' },
  { key: 2, label: 'Hard', color: '#f39c12', shortcut: '2' },
  { key: 3, label: 'Good', color: '#2ecc71', shortcut: '3' },
  { key: 4, label: 'Easy', color: '#3498db', shortcut: '4' },
]

export type View = 'deck' | 'review' | 'stats' | 'settings'
