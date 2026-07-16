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

  const hasMermaid = () =>
    document.querySelectorAll('pre.mermaid, pre[data-language="mermaid"]').length > 0

  const getTheme = () => {
    const t = document.documentElement.getAttribute('data-theme')
    return t === 'light' ? 'default' : 'dark'
  }

  /**
   * Convert Expressive Code's mermaid blocks to plain <pre class="mermaid">.
   * EC wraps mermaid in: <figure class="frame"><pre data-language="mermaid"><code>...</code></pre></figure>
   * We need: <pre class="mermaid">raw mermaid text</pre>
   */
  const convertExpressiveCodeBlocks = () => {
    document.querySelectorAll('pre[data-language="mermaid"]').forEach(pre => {
      // Skip if already converted
      if (pre.classList.contains('mermaid')) return

      // Extract the raw mermaid text from the syntax-highlighted code
      // EC wraps each line in <div class="ec-line"><div class="code">...</div></div>
      const codeEl = pre.querySelector('code')
      if (!codeEl) return

      // Get text content from all ec-line elements (strips HTML syntax highlighting)
      const lines = []
      codeEl.querySelectorAll('.ec-line .code').forEach(line => {
        lines.push(line.textContent)
      })

      if (lines.length === 0) return

      const mermaidText = lines.join('\n')

      // Replace the EC element with a plain <pre class="mermaid">
      const figure = pre.closest('figure')
      if (figure) {
        // Replace the entire figure with a plain pre.mermaid
        const newPre = document.createElement('pre')
        newPre.className = 'mermaid'
        newPre.textContent = mermaidText
        figure.replaceWith(newPre)
      } else {
        // No figure wrapper, replace just the pre
        pre.className = 'mermaid'
        pre.textContent = mermaidText
        // Remove the code child
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

    // Step 1: Convert Expressive Code blocks to plain pre.mermaid
    convertExpressiveCodeBlocks()

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
