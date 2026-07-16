/**
 * Mermaid diagram renderer for Starlight.
 * mermaid.min.js is loaded via <script defer> in Head.astro.
 * This script initializes and renders all pre.mermaid elements.
 */
;(() => {
  let initialized = false

  const hasMermaid = () => document.querySelectorAll('pre.mermaid').length > 0

  const getTheme = () => {
    const t = document.documentElement.getAttribute('data-theme')
    return t === 'light' ? 'default' : 'dark'
  }

  const renderAll = () => {
    if (typeof window.mermaid === 'undefined') return
    let i = 0
    document.querySelectorAll('pre.mermaid').forEach(el => {
      if (el.getAttribute('data-processed')) return
      if (!el.getAttribute('data-diagram')) {
        el.setAttribute('data-diagram', el.textContent)
      }
      const def = el.getAttribute('data-diagram')
      const id = `mermaid-${++i}`
      window.mermaid
        .render(id, def)
        .then(r => {
          el.innerHTML = r.svg
          el.setAttribute('data-processed', 'true')
        })
        .catch(e => {
          const msg = e?.message ?? 'Unknown error'
          el.innerHTML = `<div style="color:#f87171;padding:1rem;border:1px solid #f87171;border-radius:8px"><strong>Mermaid error:</strong> ${msg}</div>`
          el.setAttribute('data-processed', 'true')
        })
    })
  }

  const initMermaid = () => {
    if (!hasMermaid()) return
    if (typeof window.mermaid === 'undefined') {
      // mermaid.min.js hasn't loaded yet, wait for it
      window.addEventListener('load', () => {
        if (typeof window.mermaid !== 'undefined' && !initialized) {
          window.mermaid.initialize({
            startOnLoad: false,
            theme: getTheme(),
            securityLevel: 'loose',
          })
          initialized = true
          renderAll()
        }
      })
      return
    }
    if (!initialized) {
      window.mermaid.initialize({ startOnLoad: false, theme: getTheme(), securityLevel: 'loose' })
      initialized = true
    }
    renderAll()
  }

  // Initial render
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMermaid)
  } else {
    initMermaid()
  }

  // Re-render on view transitions (Astro)
  document.addEventListener('astro:after-swap', () => {
    initialized = false
    if (hasMermaid()) initMermaid()
  })

  // Re-render on theme change
  const observer = new MutationObserver(mutations => {
    for (const mutation of mutations) {
      if (mutation.attributeName === 'data-theme') {
        document.querySelectorAll('pre.mermaid[data-processed]').forEach(el => {
          el.removeAttribute('data-processed')
        })
        if (typeof window.mermaid !== 'undefined') {
          window.mermaid.initialize({
            startOnLoad: false,
            theme: getTheme(),
            securityLevel: 'loose',
          })
          renderAll()
        }
      }
    }
  })
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme'],
  })
})()
