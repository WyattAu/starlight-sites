/**
 * ThemeCreator.tsx — Custom theme creator with WCAG validation
 *
 * Features:
 * - Color picker for accent, bg, text colors
 * - Real-time WCAG AA validation
 * - Live preview of changes
 * - Export as CSS custom properties
 * - Import from CSS file
 * - Reset to defaults
 */

import { createSignal, createEffect, Show } from 'solid-js'

interface ThemeCreatorProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const DEFAULT_COLORS = {
  accent: '#ff6b35',
  bg: '#0a0a0f',
  bgElevated: '#12121a',
  text: '#e8e8ed',
  textMuted: '#8888a0',
  border: '#2a2a3a',
}

function getLuminance(hex: string): number {
  const r = parseInt(hex.slice(1, 3), 16) / 255
  const g = parseInt(hex.slice(3, 5), 16) / 255
  const b = parseInt(hex.slice(5, 7), 16) / 255
  const toLinear = (c: number) => c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
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

export default function ThemeCreator(props: ThemeCreatorProps) {
  const [colors, setColors] = createSignal({ ...DEFAULT_COLORS })
  const [showImport, setShowImport] = createSignal(false)
  const [importValue, setImportValue] = createSignal('')

  const textOnBg = () => getContrastRatio(colors().text, colors().bg)
  const mutedOnBg = () => getContrastRatio(colors().textMuted, colors().bg)
  const accentOnBg = () => getContrastRatio(colors().accent, colors().bg)

  const exportCSS = () => {
    const css = `:root {
  --sl-color-accent: ${colors().accent};
  --wn-bg: ${colors().bg};
  --wn-bg-elevated: ${colors().bgElevated};
  --wn-text: ${colors().text};
  --wn-text-muted: ${colors().textMuted};
  --wn-border: ${colors().border};
}`
    const blob = new Blob([css], { type: 'text/css' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'custom-theme.css'
    a.click()
    URL.revokeObjectURL(url)
  }

  const importCSS = () => {
    try {
      const css = importValue()
      const accentMatch = css.match(/--sl-color-accent:\s*(#[0-9a-fA-F]{6})/)
      const bgMatch = css.match(/--wn-bg:\s*(#[0-9a-fA-F]{6})/)
      const textMatch = css.match(/--wn-text:\s*(#[0-9a-fA-F]{6})/)
      if (accentMatch) setColors(c => ({ ...c, accent: accentMatch[1] }))
      if (bgMatch) setColors(c => ({ ...c, bg: bgMatch[1] }))
      if (textMatch) setColors(c => ({ ...c, text: textMatch[1] }))
      setShowImport(false)
    } catch {}
  }

  return (
    <Show when={props.open}>
      <div class="theme-creator-backdrop" onClick={() => props.onOpenChange(false)}>
        <div class="theme-creator-modal" onClick={(e) => e.stopPropagation()}>
          <div class="theme-creator-header">
            <h2>Theme Creator</h2>
            <button class="theme-creator-close" onClick={() => props.onOpenChange(false)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 6 6 18" /><path d="m6 6 12 12" />
              </svg>
            </button>
          </div>

          <div class="theme-creator-body">
            <div class="theme-creator-pickers">
              <div class="theme-creator-field">
                <label>Accent Color</label>
                <input type="color" value={colors().accent} onInput={(e) => setColors(c => ({ ...c, accent: e.currentTarget.value }))} />
                <span>{colors().accent}</span>
              </div>
              <div class="theme-creator-field">
                <label>Background</label>
                <input type="color" value={colors().bg} onInput={(e) => setColors(c => ({ ...c, bg: e.currentTarget.value }))} />
                <span>{colors().bg}</span>
              </div>
              <div class="theme-creator-field">
                <label>Elevated Background</label>
                <input type="color" value={colors().bgElevated} onInput={(e) => setColors(c => ({ ...c, bgElevated: e.currentTarget.value }))} />
                <span>{colors().bgElevated}</span>
              </div>
              <div class="theme-creator-field">
                <label>Text Color</label>
                <input type="color" value={colors().text} onInput={(e) => setColors(c => ({ ...c, text: e.currentTarget.value }))} />
                <span>{colors().text}</span>
              </div>
              <div class="theme-creator-field">
                <label>Muted Text</label>
                <input type="color" value={colors().textMuted} onInput={(e) => setColors(c => ({ ...c, textMuted: e.currentTarget.value }))} />
                <span>{colors().textMuted}</span>
              </div>
              <div class="theme-creator-field">
                <label>Border</label>
                <input type="color" value={colors().border} onInput={(e) => setColors(c => ({ ...c, border: e.currentTarget.value }))} />
                <span>{colors().border}</span>
              </div>
            </div>

            <div class="theme-creator-contrast">
              <h3>WCAG AA Contrast Ratios</h3>
              <div class="contrast-row">
                <span>Text on Background:</span>
                <span class={isWCAAPass(textOnBg(), false) ? 'contrast-pass' : 'contrast-fail'}>
                  {textOnBg().toFixed(1)}:1 {isWCAAPass(textOnBg(), false) ? '[PASS]' : '[FAIL]'}
                </span>
              </div>
              <div class="contrast-row">
                <span>Muted on Background:</span>
                <span class={isWCAAPass(mutedOnBg(), false) ? 'contrast-pass' : 'contrast-fail'}>
                  {mutedOnBg().toFixed(1)}:1 {isWCAAPass(mutedOnBg(), false) ? '[PASS]' : '[FAIL]'}
                </span>
              </div>
              <div class="contrast-row">
                <span>Accent on Background:</span>
                <span class={isWCAAPass(accentOnBg(), false) ? 'contrast-pass' : 'contrast-fail'}>
                  {accentOnBg().toFixed(1)}:1 {isWCAAPass(accentOnBg(), false) ? '[PASS]' : '[FAIL]'}
                </span>
              </div>
            </div>

            <div class="theme-creator-preview" data-theme="dark"
              style={{ background: colors().bg, color: colors().text }}>
              <h3 style={{ color: colors().text }}>Preview</h3>
              <p>This is how your theme will look.</p>
              <code style={{ background: colors().bgElevated, color: colors().text }}>const theme = "custom"</code>
              <div style={{ background: colors().bgElevated, border: `1px solid ${colors().border}`, padding: '1rem', borderRadius: '10px' }}>
                <strong style={{ color: colors().accent }}>Card Title</strong>
                <p style={{ color: colors().textMuted }}>Muted text content.</p>
              </div>
            </div>
          </div>

          <div class="theme-creator-footer">
            <button class="action-btn action-btn-secondary action-btn-md" onClick={() => setColors({ ...DEFAULT_COLORS })}>
              Reset
            </button>
            <button class="action-btn action-btn-secondary action-btn-md" onClick={() => setShowImport(true)}>
              Import
            </button>
            <button class="action-btn action-btn-primary action-btn-md" onClick={exportCSS}>
              Export CSS
            </button>
          </div>

          <Show when={showImport()}>
            <div class="theme-creator-import">
              <textarea
                placeholder="Paste CSS custom properties here..."
                value={importValue()}
                onInput={(e) => setImportValue(e.currentTarget.value)}
              />
              <div class="theme-creator-import-actions">
                <button class="action-btn action-btn-secondary action-btn-sm" onClick={() => setShowImport(false)}>
                  Cancel
                </button>
                <button class="action-btn action-btn-primary action-btn-sm" onClick={importCSS}>
                  Import
                </button>
              </div>
            </div>
          </Show>
        </div>
      </div>
    </Show>
  )
}
