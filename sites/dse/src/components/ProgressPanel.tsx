/**
 * ProgressPanel — landing-page surface for the mastery engine.
 *
 * Shows "continue where you left off" topic chips (practice recency),
 * the due-review count, and the study streak. Renders nothing for
 * first-time visitors so the landing stays clean.
 *
 * Recent-visit chips come from `wn-recent-topics`, maintained by
 * reader.js on every page view.
 */

import { createSignal, For, onCleanup, onMount, Show } from 'solid-js'
import { getSiteProgressSummary, type SiteProgressSummary, TIER_LABELS } from './flashcard/mastery'

interface RecentTopic {
  p: string
  t: string
  ts: number
}

function loadRecentTopics(): RecentTopic[] {
  try {
    const raw = localStorage.getItem('wn-recent-topics')
    if (!raw) return []
    const parsed = JSON.parse(raw) as RecentTopic[]
    return Array.isArray(parsed) ? parsed.slice(0, 6) : []
  } catch {
    return []
  }
}

export default function ProgressPanel() {
  const [summary, setSummary] = createSignal<SiteProgressSummary | null>(null)
  const [recent, setRecent] = createSignal<RecentTopic[]>([])

  const refresh = () => {
    try {
      setSummary(getSiteProgressSummary())
      setRecent(loadRecentTopics())
    } catch {
      /* non-fatal */
    }
  }

  onMount(() => {
    refresh()
    document.addEventListener('wn:progress-changed', refresh)
    onCleanup(() => document.removeEventListener('wn:progress-changed', refresh))
  })

  const hasContent = () => {
    const s = summary()
    return !!s && (s.practicedCount > 0 || s.reviewsTotal > 0 || recent().length > 0)
  }

  return (
    <Show when={hasContent() && summary()} keyed>
      {s => (
        <section class="progress-panel" aria-label="Your progress">
          <div class="progress-panel__inner">
            <p class="progress-kicker">Your progress</p>
            <div class="progress-stats">
              <Show when={s.dueTotal > 0}>
                <button
                  type="button"
                  class="progress-stat"
                  onClick={() => document.dispatchEvent(new CustomEvent('wn:open-review'))}
                >
                  <span class="progress-stat__value">{s.dueTotal}</span>
                  <span class="progress-stat__label">cards due for review</span>
                </button>
              </Show>
              <Show when={s.streak > 0}>
                <div class="progress-stat">
                  <span class="progress-stat__value">{s.streak}</span>
                  <span class="progress-stat__label">day streak</span>
                </div>
              </Show>
              <Show when={s.practicedCount > 0}>
                <div class="progress-stat">
                  <span class="progress-stat__value">{s.practicedCount}</span>
                  <span class="progress-stat__label">topics practised</span>
                </div>
              </Show>
            </div>

            <Show when={recent().length > 0}>
              <p class="progress-kicker">Continue where you left off</p>
              <div class="progress-continue">
                <For each={recent()}>
                  {topic => (
                    <a class="progress-continue__chip" href={topic.p}>
                      <span class="progress-continue__title">{topic.t}</span>
                      <span class="progress-continue__arrow" aria-hidden="true">
                        &rarr;
                      </span>
                    </a>
                  )}
                </For>
              </div>
            </Show>

            <Show when={s.topics.length > 0}>
              <p class="progress-kicker">Practice mastery</p>
              <div class="progress-topics">
                <For each={s.topics.slice(0, 8)}>
                  {topic => (
                    <a class="progress-topic" href={topic.path} data-tier={topic.tier}>
                      <span class="progress-topic__dots" aria-hidden="true">
                        {[1, 2, 3, 4].map(n => (
                          <span
                            class="progress-topic__dot"
                            classList={{ filled: n <= topic.tier }}
                          />
                        ))}
                      </span>
                      <span class="progress-topic__path">
                        {topic.path.replace(/^\//, '').replace(/\/$/, '')}
                      </span>
                      <span class="progress-topic__label">{TIER_LABELS[topic.tier]}</span>
                    </a>
                  )}
                </For>
              </div>
            </Show>
          </div>
        </section>
      )}
    </Show>
  )
}
