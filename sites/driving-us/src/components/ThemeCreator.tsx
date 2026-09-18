/**
 * ThemeCreator, custom theme builder with WCAG AA validation.
 *
 * Mounted once in the shared Header override (client:idle); opens via
 * the `wn:open-theme-creator` custom event, dispatched by the reader
 * panel's "Custom" theme chip.
 *
 * Applying a theme:
 *   1. Persists the palette to `wn-custom-theme` (localStorage).
 *   2. Sets `wn-theme=custom` so the ThemeProvider/reader persist it.
 *   3. Sets the --ea-* design tokens inline on <html>, which cascade
 *      through the :root paper contract into --wn-* and --sl-color-*.
 * Inline styles beat any stylesheet, so custom survives every theme
 * block and is re-applied by ThemeProvider on view-transition swaps.
 */

import { createEffect, createSignal, onCleanup, onMount, Show } from 'solid-js'

interface CustomColors {
  accent: string
  bg: string
  bgElevated: string
  text: string
  textMuted: string
  border: string
}

const CUSTOM_THEME_KEY = 'wn-custom-theme'

const DEFAULT_COLORS: CustomColors = {
  accent: '#8c2f2f',
  bg: '#f5f1e8',
  bgElevated: '#fef9f2',
  text: '#1a1815',
  textMuted: '#5c554d',
  border: '#d8d0be',
}

function getLuminance(hex: string): number {
  const r = parseInt(hex.slice(1, 3), 16) / 255
  const g = parseInt(hex.slice(3, 5), 16) / 255
  const b = parseInt(hex.slice(5, 7), 16) / 255
  const toLinear = (c: number) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4)
  return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b)
}

function getContrastRatio(fg: string, bg: string): number {
  const l1 = getLuminance(fg)
  const l2 = getLuminance(bg)
  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05)
}

function isWCAAPass(ratio: number, isLargeText: boolean): boolean {
  return isLargeText ? ratio >= 3 : ratio >= 4.5
}

function hexAlpha(hex: string, alpha: string): string {
  return hex + alpha
}

export function applyCustomThemeColors(colors: CustomColors): void {
  const s = document.documentElement.style
  s.setProperty('--ea-accent', colors.accent)
  s.setProperty('--ea-accent-deep', colors.accent)
  s.setProperty('--ea-accent-low', hexAlpha(colors.accent, '1a'))
  s.setProperty('--ea-surface', colors.bg)
  s.setProperty('--ea-surface-warm', colors.bgElevated)
  s.setProperty('--ea-surface-card', colors.bgElevated)
  s.setProperty('--ea-surface-hover', colors.bgElevated)
  s.setProperty('--ea-text', colors.text)
  s.setProperty('--ea-text-muted', colors.textMuted)
  s.setProperty('--ea-text-dim', colors.textMuted)
  s.setProperty('--ea-text-inverse', colors.bg)
  s.setProperty('--ea-hairline-color', colors.border)
}

export function clearCustomThemeColors(): void {
  const s = document.documentElement.style
  const props = [
    '--ea-accent',
    '--ea-accent-deep',
    '--ea-accent-low',
    '--ea-surface',
    '--ea-surface-warm',
    '--ea-surface-card',
    '--ea-surface-hover',
    '--ea-text',
    '--ea-text-muted',
    '--ea-text-dim',
    '--ea-text-inverse',
    '--ea-hairline-color',
  ]
  for (const p of props) s.removeProperty(p)
}

function loadStoredColors(): CustomColors | null {
  try {
    const raw = localStorage.getItem(CUSTOM_THEME_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as CustomColors
    if (typeof parsed?.bg !== 'string') return null
    return parsed
  } catch {
    return null
  }
}

export default function ThemeCreator() {
  const [open, setOpen] = createSignal(false)
  const [colors, setColors] = createSignal<CustomColors>({ ...DEFAULT_COLORS })

  // Opens via the reader panel's "Custom" theme chip.
  const openFromEvent = () => setOpen(true)
  onMount(() => {
    document.addEventListener('wn:open-theme-creator', openFromEvent)
    onCleanup(() => document.removeEventListener('wn:open-theme-creator', openFromEvent))
  })

  createEffect(() => {
    if (open()) {
      const stored = loadStoredColors()
      if (stored) setColors(stored)
    }
  })

  const textOnBg = () => getContrastRatio(colors().text, colors().bg)
  const mutedOnBg = () => getContrastRatio(colors().textMuted, colors().bg)
  const accentOnBg = () => getContrastRatio(colors().accent, colors().bg)

  const apply = () => {
    try {
      localStorage.setItem(CUSTOM_THEME_KEY, JSON.stringify(colors()))
      localStorage.setItem('wn-theme', 'custom')
      applyCustomThemeColors(colors())
      document.documentElement.setAttribute('data-theme', 'custom')
      document.dispatchEvent(new CustomEvent('wn:theme-changed'))
      document.dispatchEvent(new CustomEvent('wn:progress-changed'))
      setOpen(false)
    } catch {
      /* non-fatal */
    }
  }

  const reset = () => {
    try {
      localStorage.removeItem(CUSTOM_THEME_KEY)
      localStorage.setItem('wn-theme', 'paper')
      clearCustomThemeColors()
      document.documentElement.setAttribute('data-theme', 'paper')
      document.dispatchEvent(new CustomEvent('wn:theme-changed'))
    } catch {
      /* non-fatal */
    }
  }

  const usingCustom = () => {
    try {
      return localStorage.getItem('wn-theme') === 'custom'
    } catch {
      return false
    }
  }

  return (
    <Show when={open()}>
      {/* biome-ignore lint/a11y/noStaticElementInteractions: backdrop dismiss; Escape and the close button serve keyboard users */}
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: Escape closes via the key handler below */}
      <div
        class="theme-creator-backdrop"
        role="presentation"
        onClick={() => setOpen(false)}
        onKeyDown={e => {
          if (e.key === 'Escape') setOpen(false)
        }}
      >
        <div
          class="theme-creator-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Custom theme creator"
          onClick={e => e.stopPropagation()}
          onKeyDown={e => e.stopPropagation()}
        >
          <div class="theme-creator-header">
            <h2>Custom Theme</h2>
            <button
              type="button"
              class="theme-creator-close"
              aria-label="Close theme creator"
              onClick={() => setOpen(false)}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                aria-hidden="true"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>

          <div class="theme-creator-body">
            <div class="theme-creator-pickers">
              <ForColor
                label="Accent Color"
                value={colors().accent}
                onChange={v => setColors(c => ({ ...c, accent: v }))}
              />
              <ForColor
                label="Background"
                value={colors().bg}
                onChange={v => setColors(c => ({ ...c, bg: v }))}
              />
              <ForColor
                label="Card Background"
                value={colors().bgElevated}
                onChange={v => setColors(c => ({ ...c, bgElevated: v }))}
              />
              <ForColor
                label="Text"
                value={colors().text}
                onChange={v => setColors(c => ({ ...c, text: v }))}
              />
              <ForColor
                label="Muted Text"
                value={colors().textMuted}
                onChange={v => setColors(c => ({ ...c, textMuted: v }))}
              />
              <ForColor
                label="Border"
                value={colors().border}
                onChange={v => setColors(c => ({ ...c, border: v }))}
              />
            </div>

            <div class="theme-creator-contrast">
              <h3>WCAG AA Contrast</h3>
              <div class="contrast-row">
                <span>Text on background</span>
                <span class={isWCAAPass(textOnBg(), false) ? 'contrast-pass' : 'contrast-fail'}>
                  {textOnBg().toFixed(1)}:1 {isWCAAPass(textOnBg(), false) ? 'PASS' : 'FAIL'}
                </span>
              </div>
              <div class="contrast-row">
                <span>Muted text on background</span>
                <span class={isWCAAPass(mutedOnBg(), false) ? 'contrast-pass' : 'contrast-fail'}>
                  {mutedOnBg().toFixed(1)}:1 {isWCAAPass(mutedOnBg(), false) ? 'PASS' : 'FAIL'}
                </span>
              </div>
              <div class="contrast-row">
                <span>Accent on background</span>
                <span class={isWCAAPass(accentOnBg(), true) ? 'contrast-pass' : 'contrast-fail'}>
                  {accentOnBg().toFixed(1)}:1 {isWCAAPass(accentOnBg(), true) ? 'PASS' : 'FAIL'}
                </span>
              </div>
            </div>
          </div>

          <div class="theme-creator-footer">
            <Show when={usingCustom()}>
              <button type="button" class="theme-creator-reset" onClick={reset}>
                Reset to Paper
              </button>
            </Show>
            <button type="button" class="theme-creator-apply" onClick={apply}>
              Apply Theme
            </button>
          </div>
        </div>
      </div>
    </Show>
  )
}

function ForColor(props: { label: string; value: string; onChange: (v: string) => void }) {
  const inputId = `theme-creator-${props.label.toLowerCase().replace(/[^a-z]+/g, '-')}`
  return (
    <div class="theme-creator-field">
      <label for={inputId}>{props.label}</label>
      <input
        id={inputId}
        type="color"
        value={props.value}
        onInput={e => props.onChange(e.currentTarget.value)}
      />
      <span>{props.value}</span>
    </div>
  )
}
