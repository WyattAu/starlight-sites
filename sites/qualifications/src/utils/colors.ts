/**
 * Shared color constants for interactive components.
 * Centralizes hardcoded colors used across FlashcardDeck, DiagnosticTest, and PracticeProblem.
 */

export const COLORS = {
  success: '#2ecc71',
  warning: '#f39c12',
  error: '#e74c3c',
  info: '#3498db',
} as const

/**
 * MASTERY_COLORS -- Canonical definitions.
 * Note: learning=orange, review=blue (matches flashcard/constants.ts).
 */
export const MASTERY_COLORS = {
  new: '#95a5a6',
  learning: COLORS.warning,
  review: COLORS.info,
  mastered: COLORS.success,
} as const

export type Difficulty = 'easy' | 'medium' | 'hard'
