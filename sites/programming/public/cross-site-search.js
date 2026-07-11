// Cross-site search component for Wyatt's Notes
// Injected into all Starlight site headers

const SEARCH_API = 'https://search.wyattau.com/api'

function initCrossSiteSearch() {
  // Wait for DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCrossSiteSearch)
    return
  }

  // Check if search already exists
  if (document.getElementById('cross-site-search')) return

  // Find the top navigation bar container.
  // Strategy: look for Starlight's header -> site-title wrapper -> insert after it
  var topBar =
    document.querySelector('header.header') ||
    document.querySelector('.header') ||
    document.querySelector('header')
  if (!topBar) return

  // Inside the header, find the title wrapper or the first flex row
  // Insert search into the header's right-group area (next to theme toggle)
  var rightGroup = topBar.querySelector('.right-group')
  if (!rightGroup) return

  var searchContainer = document.createElement('div')
  searchContainer.id = 'cross-site-search-container'
  searchContainer.style.cssText = 'display:flex;align-items:center;'

  rightGroup.parentNode.insertBefore(searchContainer, rightGroup)

  // Create search component
  const wrapper = document.createElement('div')
  wrapper.id = 'cross-site-search'
  wrapper.innerHTML = `
    <style>
      #cross-site-search {
        position: relative;
        display: flex;
        align-items: center;
      }
      #cross-site-search .search-icon {
        position: absolute;
        left: 0.5rem;
        color: var(--wn-text-muted, #8888a0);
        pointer-events: none;
        width: 14px;
        height: 14px;
        z-index: 1;
        top: 50%;
        transform: translateY(-50%);
      }
      #cross-site-search input {
        width: 160px;
        padding: 0.25rem 0.5rem 0.25rem 1.75rem;
        font-size: 0.8rem;
        height: 28px;
        background: var(--wn-bg-card, #1a1a24);
        border: 1px solid var(--wn-border, #2a2a3a);
        border-radius: 6px;
        color: var(--wn-text, #e8e8ed);
        outline: none;
        transition: width 0.2s, border-color 0.2s;
        box-sizing: border-box;
      }
      #cross-site-search input::placeholder {
        color: var(--wn-text-dim, #5a5a70);
      }
      #cross-site-search input:focus {
        width: 240px;
        border-color: var(--sl-color-accent, #ff6b35);
      }
      #cross-site-search .search-results {
        position: absolute;
        top: 100%;
        right: 0;
        width: 400px;
        margin-top: 0.5rem;
        background: var(--wn-bg-elevated, #12121a);
        border: 1px solid var(--wn-border, #2a2a3a);
        border-radius: 10px;
        box-shadow: var(--wn-elevation-3);
        max-height: 400px;
        overflow-y: auto;
        z-index: 1000;
        display: none;
      }
      #cross-site-search .search-results.active {
        display: block;
      }
      #cross-site-search .search-result {
        display: block;
        padding: 0.75rem 1rem;
        border-bottom: 1px solid var(--wn-border-light, #3a3a4a);
        text-decoration: none;
        color: inherit;
        transition: background 0.15s;
      }
      #cross-site-search .search-result:last-child {
        border-bottom: none;
      }
      #cross-site-search .search-result:hover {
        background: var(--wn-bg-hover, #242436);
      }
      #cross-site-search .result-site {
        display: inline-block;
        font-size: 0.65rem;
        font-weight: 600;
        padding: 0.1rem 0.4rem;
        border-radius: 3px;
        margin-bottom: 0.2rem;
      }
      #cross-site-search .result-title {
        font-weight: 600;
        font-size: 0.85rem;
        margin-bottom: 0.25rem;
      }
      #cross-site-search .result-url {
        font-size: 0.7rem;
        color: var(--wn-text-muted, #8888a0);
      }
      #cross-site-search .search-footer {
        padding: 0.5rem 1rem;
        font-size: 0.75rem;
        color: var(--wn-text-muted, #8888a0);
        text-align: center;
      }
      #cross-site-search mark {
        background: color-mix(in srgb, var(--sl-color-accent) 30%, transparent);
        color: inherit;
        border-radius: 2px;
        padding: 0 1px;
      }
      @media (max-width: 640px) {
        #cross-site-search .search-results {
          width: calc(100vw - 2rem);
          right: 0;
          left: auto;
        }
        #cross-site-search input:focus {
          width: 180px;
        }
      }
    </style>
    <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.35-4.35"></path>
    </svg>
    <input type="text" placeholder="Search all sites..." id="cross-site-search-input" autocomplete="off" spellcheck="false">
    <div class="search-results" id="cross-site-results"></div>
  `

  searchContainer.appendChild(wrapper)

  const input = document.getElementById('cross-site-search-input')
  const results = document.getElementById('cross-site-results')
  let debounceTimer = null

  input.addEventListener('input', () => {
    clearTimeout(debounceTimer)
    const query = input.value.trim()
    if (query.length < 2) {
      results.classList.remove('active')
      return
    }
    debounceTimer = setTimeout(() => search(query), 300)
  })

  input.addEventListener('focus', () => {
    if (input.value.trim().length >= 2) {
      results.classList.add('active')
    }
  })

  document.addEventListener('click', e => {
    if (!e.target.closest('#cross-site-search')) {
      results.classList.remove('active')
    }
  })

  async function search(query) {
    results.innerHTML = '<div class="search-footer">Searching...</div>'
    results.classList.add('active')

    try {
      const resp = await fetch(`${SEARCH_API}/search?q=${encodeURIComponent(query)}&limit=10`)
      const data = await resp.json()
      renderResults(data)
    } catch {
      results.innerHTML = '<div class="search-footer">Search unavailable</div>'
    }
  }

  function renderResults(data) {
    if (!data.results || data.results.length === 0) {
      results.innerHTML = `<div class="search-footer">No results for "${data.query}"</div>`
      return
    }

    results.innerHTML = data.results
      .map(r => {
        const url = new URL(r.url)
        const path = url.pathname.replace(/\/$/, '') || '/'
        const _snippet = r.snippet ? highlight(r.snippet, data.query) : ''
        return `
        <a class="search-result" href="${r.url}" target="_blank" rel="noopener">
          <span class="result-site" style="background:${r.siteColor}20;color:${r.siteColor}">${r.siteName}</span>
          <div class="result-title">${escapeHtml(r.title)}</div>
          <div class="result-url">${url.hostname}${path}</div>
        </a>
      `
      })
      .join('')
  }

  function highlight(text, query) {
    let result = escapeHtml(text)
    for (const word of query.split(/\s+/).filter(w => w.length > 1)) {
      result = result.replace(
        new RegExp(`(${word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'),
        '<mark>$1</mark>',
      )
    }
    return result
  }

  function escapeHtml(str) {
    if (!str) return ''
    const div = document.createElement('div')
    div.textContent = str
    return div.innerHTML
  }
}

initCrossSiteSearch()
