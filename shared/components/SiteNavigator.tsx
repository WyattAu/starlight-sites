/**
 * SiteNavigator.tsx — Consolidated site navigator (replaces 3 implementations)
 *
 * Features:
 * - Modal overlay with backdrop
 * - Category groups (accordion-style)
 * - Site cards with icons
 * - Search filter
 * - Keyboard navigation (↑↓ Enter Escape)
 * - Responsive (bottom sheet on mobile)
 *
 * URLs are derived from sites.meta.json (SSOT) via site-data.ts.
 */

import { createSignal, For, Show, createEffect, onCleanup } from 'solid-js'
import { sites, categories } from '../lib/site-data'

interface SiteNavigatorProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function SiteNavigator(props: SiteNavigatorProps) {
  const [filter, setFilter] = createSignal('')
  const [selectedIndex, setSelectedIndex] = createSignal(0)

  const filteredSites = () => {
    const q = filter().toLowerCase()
    if (!q) return sites
    return sites.filter(s => s.name.toLowerCase().includes(q) || s.category.toLowerCase().includes(q))
  }

  const groupedSites = () => {
    const groups: Record<string, typeof sites> = {}
    for (const cat of categories) {
      groups[cat] = filteredSites().filter(s => s.category === cat)
    }
    return groups
  }

  // Keyboard navigation
  const handleKeyDown = (e: KeyboardEvent) => {
    const items = filteredSites()
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
          window.location.href = items[selectedIndex()].url
        }
        break
      case 'Escape':
        e.preventDefault()
        props.onOpenChange(false)
        break
    }
  }

  // Global keyboard shortcut
  createEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && props.open) props.onOpenChange(false)
    }
    document.addEventListener('keydown', handler)
    onCleanup(() => document.removeEventListener('keydown', handler))
  })

  return (
    <Show when={props.open}>
      <div class="site-nav-backdrop" onClick={() => props.onOpenChange(false)}>
        <div class="site-nav-panel" onClick={(e) => e.stopPropagation()}>
          <div class="site-nav-header">
            <h2>All Sites</h2>
            <button class="site-nav-close" onClick={() => props.onOpenChange(false)}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 6 6 18" /><path d="m6 6 12 12" />
              </svg>
            </button>
          </div>

          <div class="site-nav-body">
            <input
              type="text"
              class="site-nav-filter"
              placeholder="Filter sites..."
              value={filter()}
              onInput={(e) => { setFilter(e.currentTarget.value); setSelectedIndex(0) }}
              onKeyDown={handleKeyDown}
            />

            <For each={categories}>
              {(cat) => (
                <Show when={groupedSites()[cat]?.length > 0}>
                  <div class="site-nav-category">
                    <div class="site-nav-cat-header">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
                        <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
                      </svg>
                      {cat}
                    </div>
                    <div class="site-nav-grid">
                      <For each={groupedSites()[cat]}>
                        {(site) => (
                          <a href={site.url} class="site-nav-card" target="_blank" rel="noopener">
                            <strong>{site.name}</strong>
                          </a>
                        )}
                      </For>
                    </div>
                  </div>
                </Show>
              )}
            </For>
          </div>
        </div>
      </div>
    </Show>
  )
}
