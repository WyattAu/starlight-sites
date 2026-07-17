/**
 * Mermaid diagram renderer for Starlight.
 *
 * Problem: Starlight's Expressive Code intercepts ```mermaid code blocks
 * and wraps them in <pre data-language="mermaid"><code>...syntax-highlighted...</code></pre>
 * instead of the <pre class="mermaid"> that mermaid expects.
 *
 * Solution: This script converts Expressive Code's mermaid output back to
 * plain <pre class="mermaid"> elements, then initializes mermaid to render them.
 *
 * mermaid.min.js is loaded via <script defer> in Head.astro.
 */
;(() => {
  let initialized = false
  let pollTimer = null

  const hasMermaid = () =>
    document.querySelectorAll('pre.mermaid, pre[data-language="mermaid"]').length > 0

  const getTheme = () => {
    const t = document.documentElement.getAttribute('data-theme')
    return t === 'light' ? 'default' : 'dark'
  }

  /**
   * Convert Expressive Code's mermaid blocks to plain pre.mermaid.
   * EC wraps mermaid in: <figure class="frame"><pre data-language="mermaid"><code>...</code></pre></figure>
   * We need: <pre class="mermaid">raw mermaid text</pre>
   */
  const convertExpressiveCodeBlocks = () => {
    document.querySelectorAll('pre[data-language="mermaid"]').forEach(pre => {
      if (pre.classList.contains('mermaid')) return
      const codeEl = pre.querySelector('code')
      if (!codeEl) return
      const lines = []
      codeEl.querySelectorAll('.ec-line .code').forEach(line => {
        lines.push(line.textContent)
      })
      if (lines.length === 0) return
      const mermaidText = lines.join('\n')
      const figure = pre.closest('figure')
      if (figure) {
        const newPre = document.createElement('pre')
        newPre.className = 'mermaid'
        newPre.textContent = mermaidText
        figure.replaceWith(newPre)
      } else {
        pre.className = 'mermaid'
        pre.textContent = mermaidText
        const code = pre.querySelector('code')
        if (code) code.remove()
      }
    })
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
    convertExpressiveCodeBlocks()

    if (typeof window.mermaid !== 'undefined') {
      if (!initialized) {
        window.mermaid.initialize({ startOnLoad: false, theme: getTheme(), securityLevel: 'loose' })
        initialized = true
      }
      renderAll()
      return
    }

    // Poll for mermaid.min.js to load (defer scripts run before 'load' event)
    if (pollTimer) return
    pollTimer = setInterval(() => {
      if (typeof window.mermaid !== 'undefined') {
        clearInterval(pollTimer)
        pollTimer = null
        window.mermaid.initialize({ startOnLoad: false, theme: getTheme(), securityLevel: 'loose' })
        initialized = true
        renderAll()
      }
    }, 100)

    // Safety: stop polling after 10 seconds
    setTimeout(() => {
      if (pollTimer) {
        clearInterval(pollTimer)
        pollTimer = null
      }
    }, 10000)
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMermaid)
  } else {
    initMermaid()
  }

  document.addEventListener('astro:after-swap', () => {
    initialized = false
    if (pollTimer) {
      clearInterval(pollTimer)
      pollTimer = null
    }
    if (hasMermaid()) initMermaid()
  })
})()
