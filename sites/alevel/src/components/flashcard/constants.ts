/**
 * Flashcard deck UI constants and configuration.
 */

import type { Rating } from './sm2'

export const MASTERY_LABELS: Record<string, string> = {
  new: 'New',
  learning: 'Learning',
  review: 'Reviewing',
  mastered: 'Mastered',
}

export const MASTERY_COLORS: Record<string, string> = {
  new: 'var(--ifm-color-emphasis-300)',
  learning: '#f39c12',
  review: '#3498db',
  mastered: '#2ecc71',
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
