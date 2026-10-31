/**
 * Formatting utilities for display values.
 */

/**
 * Format milliseconds as mm:ss or s string.
 *
 * Preconditions:
 *   PRE-FMT-001: ms >= 0
 *
 * Postconditions:
 *   POST-FMT-001: output matches pattern /\d+:\d{2}/ or /\d+s/
 *
 * @param ms - Duration in milliseconds
 * @returns Formatted time string
 */
export function formatTime(ms: number): string {
  const secs = Math.floor(ms / 1000)
  const mins = Math.floor(secs / 60)
  const rem = secs % 60
  return mins > 0 ? `${mins}:${String(rem).padStart(2, '0')}` : `${rem}s`
}
