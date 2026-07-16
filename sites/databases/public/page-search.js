// Page-level search component for Wyatt's Notes
// Adds a floating search button + modal search experience
// SEARCH_API is defined by cross-site-search.js which loads first

function initPageSearch() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPageSearch)
    return
  }

  // Don't double-init
  if (document.getElementById('page-search-modal')) return

  // Create modal HTML
  const modal = document.createElement('div')
  modal.id = 'page-search-modal'
  modal.innerHTML = `
    <style>
      #page-search-modal {
        position: fixed;
        inset: 0;
        z-index: 9999;
        display: none;
      }
      #page-search-modal.active {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        padding-top: 10vh;
      }
      #page-search-modal .backdrop {
        position: absolute;
        inset: 0;
        background: rgba(0,0,0,0.7);
        backdrop-filter: blur(4px);
      }
      #page-search-modal .dialog {
        position: relative;
        width: 90%;
        max-width: 640px;
        background: #1e293b;
        border: 1px solid #334155;
        border-radius: 16px;
        box-shadow: 0 25px 50px rgba(0,0,0,0.5);
        overflow: hidden;
        max-height: 70vh;
        display: flex;
        flex-direction: column;
      }
      #page-search-modal .dialog-header {
        display: flex;
        align-items: center;
        padding: 1rem 1.25rem;
        border-bottom: 1px solid #334155;
        gap: 0.75rem;
      }
      #page-search-modal .dialog-header svg {
        color: #94a3b8;
        flex-shrink: 0;
      }
      #page-search-modal .dialog-input {
        flex: 1;
        background: none;
        border: none;
        color: #e2e8f0;
        font-size: 1.1rem;
        outline: none;
      }
      #page-search-modal .dialog-input::placeholder {
        color: #64748b;
      }
      #page-search-modal .dialog-kbd {
        font-size: 0.7rem;
        color: #64748b;
        background: #0f172a;
        border: 1px solid #334155;
        border-radius: 4px;
        padding: 0.15rem 0.4rem;
      }
      #page-search-modal .dialog-body {
        flex: 1;
        overflow-y: auto;
        padding: 0.5rem;
      }
      #page-search-modal .result-item {
        display: block;
        padding: 0.875rem 1rem;
        border-radius: 10px;
        text-decoration: none;
        color: inherit;
        transition: background 0.1s;
        cursor: pointer;
      }
      #page-search-modal .result-item:hover,
      #page-search-modal .result-item.focused {
        background: #334155;
      }
      #page-search-modal .result-site {
        display: inline-block;
        font-size: 0.65rem;
        font-weight: 600;
        padding: 0.1rem 0.4rem;
        border-radius: 3px;
        margin-bottom: 0.3rem;
      }
      #page-search-modal .result-title {
        font-weight: 600;
        font-size: 0.95rem;
        margin-bottom: 0.2rem;
      }
      #page-search-modal .result-url {
        font-size: 0.75rem;
        color: #64748b;
        margin-bottom: 0.3rem;
      }
      #page-search-modal .result-snippet {
        font-size: 0.85rem;
        color: #94a3b8;
        line-height: 1.4;
      }
      #page-search-modal .result-snippet mark {
        background: rgba(255, 107, 53, 0.3);
        color: #e2e8f0;
        border-radius: 2px;
        padding: 0 2px;
      }
      #page-search-modal .dialog-footer {
        padding: 0.6rem 1rem;
        border-top: 1px solid #334155;
        font-size: 0.75rem;
        color: #64748b;
        display: flex;
        justify-content: space-between;
      }
      #page-search-modal .dialog-footer kbd {
        background: #0f172a;
        border: 1px solid #334155;
        border-radius: 3px;
        padding: 0.05rem 0.3rem;
        font-size: 0.7rem;
      }
      #page-search-modal .empty-state {
        padding: 2rem;
        text-align: center;
        color: #64748b;
      }
      #page-search-modal .suggestion-chips {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        padding: 1rem;
        justify-content: center;
      }
      #page-search-modal .chip {
        font-size: 0.8rem;
        padding: 0.35rem 0.75rem;
        background: #0f172a;
        border: 1px solid #334155;
        border-radius: 20px;
        color: #94a3b8;
        cursor: pointer;
        transition: all 0.15s;
      }
      #page-search-modal .chip:hover {
        border-color: #ff6b35;
        color: #ff6b35;
      }
      #page-search-modal .recent-item {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.6rem 1rem;
        border-radius: 8px;
        cursor: pointer;
        transition: background 0.1s;
      }
      #page-search-modal .recent-item:hover {
        background: #334155;
      }
      #page-search-modal .recent-icon {
        color: #64748b;
        font-size: 0.85rem;
      }
      #page-search-modal .recent-text {
        flex: 1;
        font-size: 0.9rem;
      }
      #page-search-modal .recent-remove {
        color: #64748b;
        font-size: 0.75rem;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.1s;
      }
      #page-search-modal .recent-item:hover .recent-remove {
        opacity: 1;
      }
    </style>
    <div class="backdrop" id="search-backdrop"></div>
    <div class="dialog">
      <div class="dialog-header">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.35-4.35"></path>
        </svg>
        <input type="text" class="dialog-input" id="modal-search-input" placeholder="Search across all sites..." autocomplete="off" spellcheck="false">
        <span class="dialog-kbd">ESC</span>
      </div>
      <div class="dialog-body" id="modal-search-body">
        <div class="suggestion-chips" id="modal-suggestions">
          <span class="chip" data-query="physics">Physics</span>
          <span class="chip" data-query="calculus">Calculus</span>
          <span class="chip" data-query="c++">C++</span>
          <span class="chip" data-query="organic chemistry">Organic Chemistry</span>
          <span class="chip" data-query="linear algebra">Linear Algebra</span>
          <span class="chip" data-query="algorithms">Algorithms</span>
        </div>
        <div id="modal-recent"></div>
      </div>
      <div class="dialog-footer">
        <span><kbd>↑</kbd><kbd>↓</kbd> navigate &middot; <kbd>↵</kbd> open &middot; <kbd>esc</kbd> close</span>
        <span>Search powered by <a href="https://search.wyattau.com" style="color:#ff6b35;text-decoration:none">Wyatt's Notes</a></span>
      </div>
    </div>
  `

  document.body.appendChild(modal)

  const input = document.getElementById('modal-search-input')
  const _body = document.getElementById('modal-search-body')
  const backdrop = document.getElementById('search-backdrop')
  const suggestions = document.getElementById('modal-suggestions')
  const recentDiv = document.getElementById('modal-recent')

  let debounceTimer = null
  let focusIndex = -1
  let results = []

  // Open/close modal
  function openModal() {
    modal.classList.add('active')
    input.value = ''
    input.focus()
    showDefault()
    document.body.style.overflow = 'hidden'
    trackEvent('search_modal_open')
  }

  function closeModal() {
    modal.classList.remove('active')
    document.body.style.overflow = ''
    trackEvent('search_modal_close')
  }

  // Keyboard shortcuts
  document.addEventListener('keydown', e => {
    // Cmd/Ctrl + K to open
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault()
      openModal()
    }
    // Escape to close
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal()
    }
  })

  backdrop.addEventListener('click', closeModal)

  // Suggestion chips
  suggestions.addEventListener('click', e => {
    const chip = e.target.closest('.chip')
    if (chip) {
      input.value = chip.dataset.query
      performSearch(chip.dataset.query)
      trackEvent('search_suggestion_click', { query: chip.dataset.query })
    }
  })

  // Input handling
  input.addEventListener('input', () => {
    clearTimeout(debounceTimer)
    const query = input.value.trim()
    focusIndex = -1

    if (query.length < 2) {
      showDefault()
      return
    }

    debounceTimer = setTimeout(() => performSearch(query), 250)
  })

  // Keyboard navigation
  input.addEventListener('keydown', e => {
    if (!results.length) return

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      focusIndex = Math.min(focusIndex + 1, results.length - 1)
      updateFocus()
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      focusIndex = Math.max(focusIndex - 1, -1)
      updateFocus()
    } else if (e.key === 'Enter') {
      e.preventDefault()
      if (focusIndex >= 0 && results[focusIndex]) {
        trackEvent('search_result_click', {
          query: input.value,
          position: focusIndex,
          url: results[focusIndex].url,
          site: results[focusIndex].site,
        })
        window.open(results[focusIndex].url, '_blank')
        addRecent(input.value)
        closeModal()
      } else if (input.value.trim()) {
        trackEvent('search_enter', { query: input.value })
        addRecent(input.value)
      }
    }
  })

  function showDefault() {
    results = []
    // Show recent searches
    const recent = getRecent()
    if (recent.length > 0) {
      recentDiv.innerHTML = `
        <div style="padding:0.5rem 1rem;font-size:0.75rem;color:#64748b;text-transform:uppercase">Recent</div>
        ${recent
          .map(
            r => `
          <div class="recent-item" data-query="${escapeAttr(r)}">
            <span class="recent-icon" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            </span>
            <span class="recent-text">${escapeHtml(r)}</span>
            <span class="recent-remove" data-remove="${escapeAttr(r)}" role="button" aria-label="Remove ${escapeHtml(r)} from recent searches">&times;</span>
          </div>
        `,
          )
          .join('')}
      `
    } else {
      recentDiv.innerHTML = ''
    }

    suggestions.style.display = ''
  }

  async function performSearch(query) {
    suggestions.style.display = 'none'
    recentDiv.innerHTML = '<div class="empty-state">Searching...</div>'

    try {
      const resp = await fetch(`${SEARCH_API}/search?q=${encodeURIComponent(query)}&limit=15`)
      const data = await resp.json()
      results = data.results || []
      renderResults(results, query)
      addRecent(query)
      trackEvent('search_query', { query, resultCount: results.length })
    } catch {
      recentDiv.innerHTML = '<div class="empty-state">Search unavailable</div>'
    }
  }

  function renderResults(items, query) {
    if (items.length === 0) {
      recentDiv.innerHTML = `<div class="empty-state">No results for "${escapeHtml(query)}"</div>`
      return
    }

    recentDiv.innerHTML = items
      .map((r, i) => {
        const url = new URL(r.url)
        const path = url.pathname.replace(/\/$/, '') || '/'
        const snippet = r.snippet ? highlight(r.snippet, query) : ''

        return `
        <a class="result-item" href="${escapeAttr(r.url)}" target="_blank" rel="noopener" data-index="${i}">
          <span class="result-site" style="background:${r.siteColor}20;color:${r.siteColor}">${escapeHtml(r.siteName)}</span>
          <div class="result-title">${escapeHtml(r.title)}</div>
          <div class="result-url">${escapeHtml(url.hostname)}${escapeHtml(path)}</div>
          ${snippet ? `<div class="result-snippet">${snippet}</div>` : ''}
        </a>
      `
      })
      .join('')

    // Add click tracking to results
    recentDiv.querySelectorAll('.result-item').forEach(el => {
      el.addEventListener('click', () => {
        const idx = parseInt(el.dataset.index, 10)
        trackEvent('search_result_click', {
          query,
          position: idx,
          url: items[idx].url,
          site: items[idx].site,
        })
      })
    })
  }

  function updateFocus() {
    const items = recentDiv.querySelectorAll('.result-item')
    items.forEach((el, i) => {
      el.classList.toggle('focused', i === focusIndex)
    })
  }

  function highlight(text, query) {
    let result = escapeHtml(text)
    for (const word of query.split(/\s+/).filter(w => w.length > 1)) {
      result = result.replace(new RegExp(`(${escapeRegex(word)})`, 'gi'), '<mark>$1</mark>')
    }
    return result
  }

  function escapeHtml(str) {
    if (!str) return ''
    const div = document.createElement('div')
    div.textContent = str
    return div.innerHTML
  }

  function escapeAttr(str) {
    return escapeHtml(str).replace(/"/g, '&quot;')
  }

  function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  }

  // Recent searches (localStorage)
  function getRecent() {
    try {
      return JSON.parse(localStorage.getItem('wn_recent_searches') || '[]')
    } catch {
      return []
    }
  }

  function addRecent(query) {
    let recent = getRecent()
    recent = recent.filter(r => r !== query)
    recent.unshift(query)
    recent = recent.slice(0, 8)
    localStorage.setItem('wn_recent_searches', JSON.stringify(recent))
  }

  // Analytics tracking
  function trackEvent(event, data = {}) {
    try {
      fetch(`${SEARCH_API}/track`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event,
          ...data,
          timestamp: new Date().toISOString(),
          page: window.location.href,
          referrer: document.referrer,
        }),
      }).catch(() => {})
    } catch {}
  }

  // Make openModal globally accessible
  window.openSearchModal = openModal
}

initPageSearch()
