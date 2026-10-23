/**
 * ProgressBadge, header chip showing review-queue due count and the
 * global study streak. Renders nothing until the visitor has data, so
 * first-time visitors see a clean header.
 *
 * Refreshes on `wn:progress-changed` (dispatched by PracticeProblem and
 * FlashcardDeck after outcome writes).
 */

import { createSignal, onCleanup, onMount, Show } from 'solid-js'
import { getSiteProgressSummary, type SiteProgressSummary } from './flashcard/mastery'

export default function ProgressBadge() {
  const [summary, setSummary] = createSignal<SiteProgressSummary | null>(null)

  const refresh = () => {
    try {
      setSummary(getSiteProgressSummary())
    } catch {
      /* non-fatal */
    }
  }

  const openReview = () => {
    document.dispatchEvent(new CustomEvent('wn:open-review'))
  }

  onMount(() => {
    refresh()
    document.addEventListener('wn:progress-changed', refresh)
    onCleanup(() => document.removeEventListener('wn:progress-changed', refresh))
  })

  const badge = () => {
    const s = summary()
    if (!s) return null
    return s.dueTotal > 0 || s.streak > 0 ? s : null
  }

  return (
    <Show when={badge()} keyed>
      {s => (
        <button
          type="button"
          class="wn-progress-badge"
          onClick={openReview}
          title="Reviews due and study streak"
          aria-label={`Reviews due: ${s.dueTotal}. Study streak: ${s.streak} days. Open review queue.`}
        >
          <Show when={s.dueTotal > 0}>
            <span class="wn-progress-due">{s.dueTotal}</span>
            <span class="wn-progress-label">due</span>
          </Show>
          <Show when={s.streak > 0}>
            <svg
              class="wn-progress-streak"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              aria-hidden="true"
            >
              <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
            </svg>
            <span class="wn-progress-label">{s.streak}d</span>
          </Show>
        </button>
      )}
    </Show>
  )
}
