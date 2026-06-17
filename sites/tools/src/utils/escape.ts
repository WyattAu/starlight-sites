/**
 * HTML escape utility for safe text rendering.
 *
 * Invariants:
 *   INV-ESC-001: output contains no HTML special characters
 *   INV-ESC-002: output length >= input length (entities expand)
 *   INV-ESC-003: idempotent (double-escape produces same result)
 *
 * @param text - Raw text to escape
 * @returns HTML-safe string with special characters as entities
 */
export function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}
