/**
 * Mermaid diagram renderer for Starlight.
 *
 * astro-mermaid's injectScript('page', ...) doesn't work with Starlight's
 * rendering pipeline, so the initialization script is never included.
 * This standalone script handles:
 * - Lazy-loading mermaid from CDN only on pages with diagrams
 * - Auto-detecting theme from data-theme attribute
 * - Rendering all pre.mermaid elements to SVG
 * - Re-rendering on view transitions and theme changes
 */
;(() => {
  let defined = false

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

  const initMermaid = async () => {
    if (!hasMermaid()) return

    if (!defined) {
      const script = document.createElement('script')
      script.src = 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.min.js'
      script.onload = () => {
        window.mermaid.initialize({
          startOnLoad: false,
          theme: getTheme(),
          securityLevel: 'loose',
        })
        defined = true
        renderAll()
      }
      script.onerror = () => {
        console.error('[mermaid] Failed to load mermaid library from CDN')
      }
      document.head.appendChild(script)
    } else {
      renderAll()
    }
  }

  // Initial render
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMermaid)
  } else {
    initMermaid()
  }

  // Re-render on view transitions (Astro)
  document.addEventListener('astro:after-swap', () => {
    defined = false
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
