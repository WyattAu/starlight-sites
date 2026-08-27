/**
 * SearchModal.tsx — Spotlight search with Cmd+K/Ctrl+K trigger
 *
 * Features:
 * - Cmd+K / Ctrl+K global keyboard shortcut
 * - Debounced search (300ms)
 * - Keyboard navigation (↑↓ Enter Escape)
 * - Recent searches (localStorage)
 * - Loading skeleton animation
 * - Responsive design (bottom sheet on mobile)
 * - Full accessibility (ARIA labels, focus management)
 */

import { createSignal, createEffect, For, Show, onCleanup } from 'solid-js'

interface SearchResult {
  title: string
  url: string
  site: string
  siteColor: string
  snippet?: string
}

interface SearchModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSelect?: (result: SearchResult) => void
}

const RECENT_KEY = 'wn-search-recent'
const MAX_RECENT = 5
const SEARCH_DEBOUNCE = 300
const SEARCH_API = 'https://search.wyattau.com/api'

export default function SearchModal(props: SearchModalProps) {
  const [query, setQuery] = createSignal('')
  const [results, setResults] = createSignal<SearchResult[]>([])
  const [loading, setLoading] = createSignal(false)
  const [selectedIndex, setSelectedIndex] = createSignal(0)
  const [recentSearches, setRecentSearches] = createSignal<string[]>([])

  // Load recent searches from localStorage
  createEffect(() => {
    try {
      const stored = localStorage.getItem(RECENT_KEY)
      if (stored) setRecentSearches(JSON.parse(stored))
    } catch {}
  })

  // Save recent searches
  const saveRecent = (q: string) => {
    if (!q.trim()) return
    const updated = [q, ...recentSearches().filter(r => r !== q)].slice(0, MAX_RECENT)
    setRecentSearches(updated)
    try { localStorage.setItem(RECENT_KEY, JSON.stringify(updated)) } catch {}
  }

  // Debounced search
  let searchTimeout: ReturnType<typeof setTimeout>
  createEffect(() => {
    const q = query()
    clearTimeout(searchTimeout)
    if (q.length < 2) {
      setResults([])
      setLoading(false)
      return
    }
    setLoading(true)
    searchTimeout = setTimeout(async () => {
      try {
        const res = await fetch(`${SEARCH_API}/search?q=${encodeURIComponent(q)}&limit=8`)
        const data = await res.json()
        setResults(data.results || [])
        setSelectedIndex(0)
      } catch {
        setResults([])
      } finally {
        setLoading(false)
      }
    }, SEARCH_DEBOUNCE)
  })

  // Keyboard navigation
  const handleKeyDown = (e: KeyboardEvent) => {
    const items = results()
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setSelectedIndex(i => Math.min(i + 1, items.length - 1))
        break
      case 'ArrowUp':
        e.preventDefault()
        setSelectedIndex(i => Math.max(i - 1, 0))
        break
      case 'Enter':
        e.preventDefault()
        if (items[selectedIndex()]) {
          saveRecent(query())
          props.onSelect?.(items[selectedIndex()])
          window.location.href = items[selectedIndex()].url
        }
        break
      case 'Escape':
        e.preventDefault()
        props.onOpenChange(false)
        break
    }
  }

  // Close on backdrop click
  const handleBackdropClick = (e: MouseEvent) => {
    if (e.target === e.currentTarget) {
      props.onOpenChange(false)
    }
  }

  // Global keyboard shortcut
  createEffect(() => {
    const openHandler = () => props.onOpenChange(true)
    const closeHandler = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && props.open) props.onOpenChange(false)
    }

    document.addEventListener('wn:open-search', openHandler)
    document.addEventListener('keydown', closeHandler)

    onCleanup(() => {
      document.removeEventListener('wn:open-search', openHandler)
      document.removeEventListener('keydown', closeHandler)
    })
  })

  return (
    <Show when={props.open}>
      <div
        class="search-modal-backdrop"
        onClick={handleBackdropClick}
        role="dialog"
        aria-label="Search"
        aria-modal="true"
      >
        <div class="search-modal">
          <div class="search-modal-header">
            <svg class="search-modal-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              class="search-modal-input"
              placeholder="Search all sites..."
              value={query()}
              onInput={(e) => setQuery(e.currentTarget.value)}
              onKeyDown={handleKeyDown}
              autofocus
            />
            <kbd class="search-modal-shortcut">Esc</kbd>
          </div>

          <div class="search-modal-body">
            <Show when={loading()}>
              <div class="search-skeleton">
                <div class="search-skeleton-row skeleton-pulse" />
                <div class="search-skeleton-row skeleton-pulse" />
                <div class="search-skeleton-row skeleton-pulse" />
              </div>
            </Show>

            <Show when={!loading() && results().length > 0}>
              <div class="search-results-list">
                <For each={results()}>
                  {(result, i) => (
                    <a
                      href={result.url}
                      class={`search-result-item ${i() === selectedIndex() ? 'selected' : ''}`}
                      onClick={() => saveRecent(query())}
                    >
                      <span
                        class="search-result-badge"
                        style={{ background: `${result.siteColor}20`, color: result.siteColor }}
                      >
                        {result.site}
                      </span>
                      <div class="search-result-content">
                        <div class="search-result-title">{result.title}</div>
                        <div class="search-result-url">{result.url}</div>
                      </div>
                    </a>
                  )}
                </For>
              </div>
            </Show>

            <Show when={!loading() && results().length === 0 && query().length >= 2}>
              <div class="search-empty">
                <p>No results found for "{query()}"</p>
                <p class="search-empty-hint">Try different keywords or check spelling</p>
              </div>
            </Show>

            <Show when={!loading() && query().length < 2 && recentSearches().length > 0}>
              <div class="search-recent">
                <div class="search-recent-header">Recent searches</div>
                <For each={recentSearches()}>
                  {(recent) => (
                    <button
                      class="search-recent-item"
                      onClick={() => setQuery(recent)}
                    >
                      {recent}
                    </button>
                  )}
                </For>
              </div>
            </Show>
          </div>
        </div>
      </div>
    </Show>
  )
}
