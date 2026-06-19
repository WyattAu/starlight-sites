/**
 * HTML escape utility for safe text rendering.
 *
 * Invariants:
 *   INV-ESC-001: output contains no raw HTML special characters
 *                (they are replaced by entity references)
 *   INV-ESC-002: output length >= input length (entities expand)
 *
 * Non-idempotence contract:
 *   This function is NOT idempotent. The output of a first escape pass
 *   contains entity references whose leading `&` is itself an HTML
 *   special character; a second pass re-encodes that `&` to `&amp;`.
 *   Callers MUST apply this function exactly once to any piece of raw
 *   text, never to already-escaped output.
 *
 *   Example: escapeHtml('<')           // '&lt;'
 *            escapeHtml(escapeHtml('<')) // '&amp;lt;'  (intentional)
 *
 * @param text - Raw text to escape (MUST NOT be pre-escaped)
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
