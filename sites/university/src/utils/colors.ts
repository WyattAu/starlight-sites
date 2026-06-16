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

export const DIFFICULTY_COLORS = {
  easy: COLORS.success,
  medium: COLORS.warning,
  hard: COLORS.error,
} as const

export const MASTERY_COLORS = {
  new: '#95a5a6',
  learning: COLORS.info,
  familiar: COLORS.warning,
  mastered: COLORS.success,
} as const

export type Difficulty = 'easy' | 'medium' | 'hard'
export type MasteryLevel = 'new' | 'learning' | 'familiar' | 'mastered'
