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
 */

import { createSignal, For, Show, createEffect, onCleanup } from 'solid-js'

interface SiteNavigatorProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

interface Site {
  name: string
  url: string
  category: string
}

const SITES: Site[] = [
  // Exam Boards
  { name: 'DSE', url: 'https://dse.wyattau.com', category: 'Exam Boards' },
  { name: 'IB', url: 'https://ib.wyattau.com', category: 'Exam Boards' },
  { name: 'A-Level', url: 'https://alevel.wyattau.com', category: 'Exam Boards' },
  { name: 'GCSE', url: 'https://gcse.wyattau.com', category: 'Exam Boards' },
  { name: 'AP', url: 'https://ap.wyattau.com', category: 'Exam Boards' },
  { name: 'Highers', url: 'https://highers.wyattau.com', category: 'Exam Boards' },
  { name: 'Leaving Cert', url: 'https://leaving-cert.wyattau.com', category: 'Exam Boards' },
  { name: 'CBSE', url: 'https://cbse.wyattau.com', category: 'Exam Boards' },
  { name: 'Gaokao', url: 'https://gaokao.wyattau.com', category: 'Exam Boards' },
  { name: 'HSC', url: 'https://hsc.wyattau.com', category: 'Exam Boards' },
  { name: 'SAT', url: 'https://sat.wyattau.com', category: 'Exam Boards' },

  // Computer Science
  { name: 'C++', url: 'https://cpp.wyattau.com', category: 'Computer Science' },
  { name: 'Java', url: 'https://java.wyattau.com', category: 'Computer Science' },
  { name: 'Python', url: 'https://python.wyattau.com', category: 'Computer Science' },
  { name: 'Rust', url: 'https://rust.wyattau.com', category: 'Computer Science' },
  { name: 'Go', url: 'https://go.wyattau.com', category: 'Computer Science' },
  { name: 'Kotlin', url: 'https://kotlin.wyattau.com', category: 'Computer Science' },
  { name: 'TypeScript', url: 'https://typescript.wyattau.com', category: 'Computer Science' },
  { name: 'Dart', url: 'https://dart.wyattau.com', category: 'Computer Science' },
  { name: 'Swift', url: 'https://swift.wyattau.com', category: 'Computer Science' },
  { name: 'Ruby', url: 'https://ruby.wyattau.com', category: 'Computer Science' },
  { name: 'Haskell', url: 'https://haskell.wyattau.com', category: 'Computer Science' },
  { name: 'Elixir', url: 'https://elixir.wyattau.com', category: 'Computer Science' },
  { name: 'Languages', url: 'https://languages.wyattau.com', category: 'Computer Science' },
  { name: 'Tools', url: 'https://tools.wyattau.com', category: 'Computer Science' },

  // Further Studies
  { name: 'Mathematics', url: 'https://mathematics.wyattau.com', category: 'Further Studies' },
  { name: 'Physics', url: 'https://physics.wyattau.com', category: 'Further Studies' },
  { name: 'Chemistry', url: 'https://chemistry.wyattau.com', category: 'Further Studies' },
  { name: 'CS Theory', url: 'https://computer-science.wyattau.com', category: 'Further Studies' },
  { name: 'Admissions', url: 'https://admissions.wyattau.com', category: 'Further Studies' },

  // Infrastructure
  { name: 'Networking', url: 'https://networking.wyattau.com', category: 'Infrastructure' },
  { name: 'Linux', url: 'https://linux.wyattau.com', category: 'Infrastructure' },
  { name: 'Security', url: 'https://security.wyattau.com', category: 'Infrastructure' },
  { name: 'Databases', url: 'https://databases.wyattau.com', category: 'Infrastructure' },
  { name: 'TrueNAS', url: 'https://truenas.wyattau.com', category: 'Infrastructure' },
  { name: 'Tuning', url: 'https://tuning.wyattau.com', category: 'Infrastructure' },
  { name: 'Licensing', url: 'https://licensing.wyattau.com', category: 'Infrastructure' },
  { name: 'ML', url: 'https://machine-learning.wyattau.com', category: 'Infrastructure' },
]

const CATEGORIES = ['Exam Boards', 'Computer Science', 'Further Studies', 'Infrastructure']

export default function SiteNavigator(props: SiteNavigatorProps) {
  const [filter, setFilter] = createSignal('')
  const [selectedIndex, setSelectedIndex] = createSignal(0)

  const filteredSites = () => {
    const q = filter().toLowerCase()
    if (!q) return SITES
    return SITES.filter(s => s.name.toLowerCase().includes(q) || s.category.toLowerCase().includes(q))
  }

  const groupedSites = () => {
    const groups: Record<string, Site[]> = {}
    for (const cat of CATEGORIES) {
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

            <For each={CATEGORIES}>
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
