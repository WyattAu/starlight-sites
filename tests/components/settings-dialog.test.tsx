import { fireEvent, render, screen, waitFor } from '@solidjs/testing-library'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import SettingsDialog from '../../shared/components/SettingsDialog'

// Kobalte's Slider computes calc(NaN%) during first paint, which css-tree
// (jsdom's style parser) rejects fatally. Mock the Slider primitives only;
// the radio/switch controls and all effects under test stay real.
vi.mock('@kobalte/core/slider', () => {
  const Root = (props: Record<string, unknown>) => (
    <div role="slider" aria-label={String(props['aria-label'] ?? '')}>
      {(props.children ?? null) as never}
    </div>
  )
  const passthrough = (tag: string) => (props: Record<string, unknown>) => {
    void props
    return <div data-mocked={tag} />
  }
  return { Root, Track: passthrough('track'), Fill: passthrough('fill'), Thumb: passthrough('thumb') }
})

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {}
  return {
    getItem: (key: string) => store[key] ?? null,
    setItem: (key: string, value: string) => {
      store[key] = value
    },
    removeItem: (key: string) => {
      delete store[key]
    },
    clear: () => {
      store = {}
    },
    get length() {
      return Object.keys(store).length
    },
    key: (index: number) => Object.keys(store)[index] ?? null,
  }
})()

vi.stubGlobal('localStorage', localStorageMock)

function renderDialog() {
  const onOpenChange = vi.fn()
  render(() => <SettingsDialog open onOpenChange={onOpenChange} />)
  return { onOpenChange }
}

function html() {
  return document.documentElement
}

describe('SettingsDialog', () => {
  beforeEach(() => {
    localStorage.clear()
    html().removeAttribute('data-theme')
    html().removeAttribute('data-justify')
    html().removeAttribute('data-reduce-motion')
    html().removeAttribute('data-dim-images')
    document.body.classList.remove('wn-nav-hidden')
  })

  it('applies default preferences to <html> and persists them on mount', async () => {
    renderDialog()
    await waitFor(() => expect(html().getAttribute('data-theme')).toBe('dark'))
    expect(html().style.getPropertyValue('--wn-font-size-scale')).toBe('1')
    expect(html().style.getPropertyValue('--wn-line-height')).toBe('1.7')
    expect(html().style.getPropertyValue('--wn-content-width')).toBe('48rem')
    expect(html().getAttribute('data-justify')).toBe('false')
    expect(html().getAttribute('data-reduce-motion')).toBe('false')
    expect(html().getAttribute('data-dim-images')).toBe('true')

    // Persistence: every preference key is written with its default.
    expect(localStorage.getItem('wn-theme')).toBe('dark')
    expect(localStorage.getItem('wn-font-size')).toBe('1')
    expect(localStorage.getItem('wn-line-height')).toBe('1.7')
    expect(localStorage.getItem('wn-content-width')).toBe('48rem')
    expect(localStorage.getItem('wn-font-family')).toBe('sans')
    expect(localStorage.getItem('wn-justify')).toBe('false')
    expect(localStorage.getItem('wn-dim-images')).toBe('true')
    expect(localStorage.getItem('wn-auto-hide')).toBe('false')
  })

  it('restores stored preferences on mount and invalid values fall back', async () => {
    localStorage.setItem('wn-theme', 'sepia')
    localStorage.setItem('wn-font-size', '1.25')
    localStorage.setItem('wn-justify', 'true')
    localStorage.setItem('wn-content-width', '56rem')
    localStorage.setItem('wn-font-family', 'serif')
    // Invalid content width falls back to the default.
    localStorage.setItem('wn-line-height', '2.0')

    renderDialog()
    await waitFor(() => expect(html().getAttribute('data-theme')).toBe('sepia'))
    expect(html().style.getPropertyValue('--wn-font-size-scale')).toBe('1.25')
    expect(html().getAttribute('data-justify')).toBe('true')
    expect(html().style.getPropertyValue('--wn-content-width')).toBe('56rem')
    expect(html().style.getPropertyValue('--wn-font-body')).toContain('Merriweather')
    expect(html().style.getPropertyValue('--wn-line-height')).toBe('2.0')
  })

  it('rejects an invalid stored content width (falls back to 48rem)', async () => {
    localStorage.setItem('wn-content-width', '999rem')
    renderDialog()
    await waitFor(() =>
      expect(html().style.getPropertyValue('--wn-content-width')).toBe('48rem'),
    )
  })

  it('rejects an invalid stored font family (falls back to sans)', async () => {
    localStorage.setItem('wn-font-family', 'comic-sans')
    renderDialog()
    await waitFor(() =>
      expect(html().style.getPropertyValue('--wn-font-body')).toContain('Inter'),
    )
  })

  // Note: the radio-group interaction path (onChange -> setTheme) is not
  // drivable in jsdom -- Kobalte's radio items use roving focus with
  // tabIndex=-1 on inactive items and no native input, so neither click nor
  // keyboard events reach the selection handler. The theme radio branches
  // are exercised on the Playwright E2E flows instead.

  it('auto-hides the nav on scroll-down when auto-hide is enabled', async () => {
    localStorage.setItem('wn-auto-hide', 'true')
    renderDialog()
    await waitFor(() => expect(localStorage.getItem('wn-auto-hide')).toBe('true'))

    const setScrollY = (v: number) =>
      Object.defineProperty(window, 'scrollY', { value: v, configurable: true })

    // Scroll down past the threshold: nav hides.
    setScrollY(0)
    fireEvent.scroll(window)
    setScrollY(200)
    fireEvent.scroll(window)
    expect(document.body.classList.contains('wn-nav-hidden')).toBe(true)

    // Scroll up: nav reappears.
    setScrollY(150)
    fireEvent.scroll(window)
    expect(document.body.classList.contains('wn-nav-hidden')).toBe(false)

    // Scroll down but within the threshold: stays visible.
    setScrollY(60)
    fireEvent.scroll(window)
    setScrollY(70)
    fireEvent.scroll(window)
    expect(document.body.classList.contains('wn-nav-hidden')).toBe(false)
  })

  it('does not attach the scroll listener when auto-hide is off', async () => {
    renderDialog()
    await waitFor(() => expect(html().getAttribute('data-theme')).toBe('dark'))

    const setScrollY = (v: number) =>
      Object.defineProperty(window, 'scrollY', { value: v, configurable: true })
    setScrollY(0)
    fireEvent.scroll(window)
    setScrollY(300)
    fireEvent.scroll(window)
    expect(document.body.classList.contains('wn-nav-hidden')).toBe(false)
  })

  it('renders all ten theme options', async () => {
    renderDialog()
    await waitFor(() => expect(html().getAttribute('data-theme')).toBe('dark'))
    for (const name of ['Dark', 'Light', 'Sepia', 'Nord', 'Dracula', 'Monokai', 'Ayu Mirage', 'Solarized', 'Papercolor']) {
      expect(screen.getByText(name)).toBeTruthy()
    }
  })
})
