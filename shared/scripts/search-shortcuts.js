/**
 * search-shortcuts.js — Global keyboard shortcuts for search modal
 *
 * Cmd+K (macOS) / Ctrl+K (Windows/Linux) opens the search modal.
 * / opens search when no input is focused.
 */

(function() {
  function isInputFocused() {
    const el = document.activeElement
    return el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.isContentEditable)
  }

  function openSearchModal() {
    // Dispatch a custom event that SearchModal.tsx listens for
    document.dispatchEvent(new CustomEvent('wn:open-search'))
  }

  document.addEventListener('keydown', (e) => {
    // Cmd+K / Ctrl+K
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault()
      openSearchModal()
      return
    }

    // / key when not in input
    if (e.key === '/' && !isInputFocused()) {
      e.preventDefault()
      openSearchModal()
    }
  })
})()
