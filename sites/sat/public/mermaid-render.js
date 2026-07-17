;(() => {
  let initialized = false
  let pollTimer = null

  const hasMermaid = () =>
    document.querySelectorAll('pre.mermaid, pre[data-language="mermaid"]').length > 0

  const getTheme = () => {
    const t = document.documentElement.getAttribute('data-theme')
    return t === 'light' ? 'default' : 'dark'
  }

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

  const tryInit = () => {
    if (!hasMermaid()) return false
    convertExpressiveCodeBlocks()
    if (typeof window.mermaid === 'undefined') return false
    if (!initialized) {
      window.mermaid.initialize({ startOnLoad: false, theme: getTheme(), securityLevel: 'loose' })
      initialized = true
    }
    renderAll()
    return true
  }

  const initMermaid = () => {
    if (tryInit()) return
    // Poll for mermaid.min.js
    pollTimer = setInterval(() => {
      if (tryInit()) {
        clearInterval(pollTimer)
        pollTimer = null
      }
    }, 200)
    // Safety: stop after 30 seconds
    setTimeout(() => {
      if (pollTimer) {
        clearInterval(pollTimer)
        pollTimer = null
      }
    }, 30000)
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMermaid)
  } else {
    initMermaid()
  }

  // Also listen for load event (fires after ALL resources including mermaid.min.js)
  window.addEventListener('load', () => {
    if (!initialized && hasMermaid()) {
      if (typeof window.mermaid !== 'undefined') {
        window.mermaid.initialize({ startOnLoad: false, theme: getTheme(), securityLevel: 'loose' })
        initialized = true
        renderAll()
      }
    }
  })

  // Re-render on view transitions
  document.addEventListener('astro:after-swap', () => {
    initialized = false
    if (pollTimer) {
      clearInterval(pollTimer)
      pollTimer = null
    }
    initMermaid()
  })
})()
