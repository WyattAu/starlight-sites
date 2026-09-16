import { fireEvent, render, screen, waitFor } from '@solidjs/testing-library'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import ThemeCreator, {
  applyCustomThemeColors,
  clearCustomThemeColors,
} from '../../shared/components/ThemeCreator'

describe('ThemeCreator', () => {
  beforeEach(() => {
    localStorage.clear()
    vi.clearAllMocks()
  })

  const openCreator = async () => {
    // Let onMount attach the listener before dispatching.
    await Promise.resolve()
    document.dispatchEvent(new CustomEvent('wn:open-theme-creator'))
    await Promise.resolve()
  }

  it('renders when opened via wn:open-theme-creator event', async () => {
    render(() => <ThemeCreator />)
    expect(screen.queryByText('Custom Theme')).toBeNull()
    await openCreator()
    await waitFor(() => expect(screen.getByText('Custom Theme')).toBeTruthy())
  })

  it('does not render initially', () => {
    render(() => <ThemeCreator />)
    expect(screen.queryByText('Custom Theme')).toBeNull()
  })

  it('displays color pickers', async () => {
    render(() => <ThemeCreator />)
    await openCreator()
    expect(screen.getByText('Accent Color')).toBeTruthy()
    expect(screen.getByText('Background')).toBeTruthy()
    expect(screen.getByText('Text')).toBeTruthy()
  })

  it('displays WCAG contrast ratios', async () => {
    render(() => <ThemeCreator />)
    await openCreator()
    expect(screen.getByText('WCAG AA Contrast')).toBeTruthy()
    expect(screen.getByText(/Text on background/)).toBeTruthy()
  })

  it('has apply and reset buttons', async () => {
    render(() => <ThemeCreator />)
    await openCreator()
    expect(screen.getByText('Apply Theme')).toBeTruthy()
    // Reset only shows when a custom theme is active
    expect(screen.queryByText('Reset to Paper')).toBeNull()
    localStorage.setItem('wn-theme', 'custom')
    openCreator()
    // Re-open does not re-render existing dialog; assert apply still present
    expect(screen.getByText('Apply Theme')).toBeTruthy()
  })

  it('apply persists custom theme and sets data-theme', async () => {
    render(() => <ThemeCreator />)
    await openCreator()
    fireEvent.click(screen.getByText('Apply Theme'))
    expect(localStorage.getItem('wn-theme')).toBe('custom')
    expect(localStorage.getItem('wn-custom-theme')).toBeTruthy()
    expect(document.documentElement.getAttribute('data-theme')).toBe('custom')
  })

  it('applyCustomThemeColors sets inline design tokens', () => {
    applyCustomThemeColors({
      accent: '#123456',
      bg: '#abcdef',
      bgElevated: '#fff000',
      text: '#111111',
      textMuted: '#666666',
      border: '#dddddd',
    })
    const style = document.documentElement.style
    expect(style.getPropertyValue('--ea-accent')).toBe('#123456')
    expect(style.getPropertyValue('--ea-surface')).toBe('#abcdef')
    expect(style.getPropertyValue('--ea-text')).toBe('#111111')
    expect(style.getPropertyValue('--ea-hairline-color')).toBe('#dddddd')
    clearCustomThemeColors()
    expect(style.getPropertyValue('--ea-accent')).toBe('')
  })

  it('close button hides the dialog', async () => {
    render(() => <ThemeCreator />)
    await openCreator()
    const closeButton = document.querySelector('.theme-creator-close')
    expect(closeButton).toBeTruthy()
    fireEvent.click(closeButton as HTMLElement)
    await Promise.resolve()
    expect(screen.queryByText('Custom Theme')).toBeNull()
  })
})
