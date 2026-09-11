import { createSignal, onCleanup, Show } from 'solid-js'
import './AccessibilityPanel.css'

/**
 * AccessibilityPanel — floating settings panel for reading preferences.
 *
 * Controls: font family, font size, line height, content width, contrast,
 * reduce motion. All persisted to localStorage and applied via CSS custom
 * properties on the root element.
 */
export default function AccessibilityPanel() {
  const [open, setOpen] = createSignal(false)

  const getPref = (key: string, fallback: string): string =>
    localStorage.getItem(`wn-${key}`) ?? fallback

  const setPref = (key: string, value: string) => {
    localStorage.setItem(`wn-${key}`, value)
    apply(key, value)
  }

  const apply = (key: string, value: string) => {
    const root = document.documentElement
    switch (key) {
      case 'font-size':
        root.style.setProperty('--wn-font-size-scale', value)
        break
      case 'line-height':
        root.style.setProperty('--wn-line-height', value)
        break
      case 'content-width':
        root.dataset.width = value
        break
      case 'contrast':
        root.dataset.contrast = value
        break
      case 'reduce-motion':
        root.dataset.reduceMotion = value
        break
      case 'font-family':
        if (value === 'serif')
          root.style.setProperty('--ea-font-body', '"Cormorant Garamond", Georgia, serif')
        else if (value === 'mono')
          root.style.setProperty('--ea-font-body', '"JetBrains Mono", monospace')
        else root.style.removeProperty('--ea-font-body')
        break
    }
  }

  // Apply saved preferences on mount
  const prefs: [string, string][] = [
    ['font-size', getPref('font-size', '1')],
    ['line-height', getPref('line-height', '1.6')],
    ['font-family', getPref('font-family', 'sans')],
    ['content-width', getPref('content-width', 'medium')],
    ['contrast', getPref('contrast', 'normal')],
    ['reduce-motion', getPref('reduce-motion', 'false')],
  ]
  prefs.forEach(([k, v]) => apply(k, v))

  return (
    <div class="a11y-panel-root">
      <button
        class="a11y-toggle"
        onClick={() => setOpen(!open())}
        aria-expanded={open()}
        aria-label="Accessibility settings"
        title="Accessibility settings"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v4l2.5 2.5" />
        </svg>
      </button>
      <Show when={open()}>
        <div class="a11y-panel" role="dialog" aria-label="Accessibility settings">
          <h3>Reading preferences</h3>

          <label>
            <span>Font family</span>
            <select
              value={getPref('font-family', 'sans')}
              onChange={(e) => setPref('font-family', e.currentTarget.value)}
            >
              <option value="sans">Sans</option>
              <option value="serif">Serif</option>
              <option value="mono">Mono</option>
            </select>
          </label>

          <label>
            <span>Font size</span>
            <input
              type="range" min="0.8" max="1.4" step="0.1"
              value={getPref('font-size', '1')}
              onInput={(e) => setPref('font-size', e.currentTarget.value)}
            />
          </label>

          <label>
            <span>Line height</span>
            <input
              type="range" min="1.3" max="2.2" step="0.1"
              value={getPref('line-height', '1.6')}
              onInput={(e) => setPref('line-height', e.currentTarget.value)}
            />
          </label>

          <label>
            <span>Content width</span>
            <select
              value={getPref('content-width', 'medium')}
              onChange={(e) => setPref('content-width', e.currentTarget.value)}
            >
              <option value="narrow">Narrow</option>
              <option value="medium">Medium</option>
              <option value="wide">Wide</option>
            </select>
          </label>

          <label>
            <span>High contrast</span>
            <input
              type="checkbox"
              checked={getPref('contrast', 'normal') === 'high'}
              onChange={(e) => setPref('contrast', e.currentTarget.checked ? 'high' : 'normal')}
            />
          </label>

          <label>
            <span>Reduce motion</span>
            <input
              type="checkbox"
              checked={getPref('reduce-motion', 'false') === 'true'}
              onChange={(e) => setPref('reduce-motion', e.currentTarget.checked ? 'true' : 'false')}
            />
          </label>
        </div>
      </Show>
    </div>
  )
}
