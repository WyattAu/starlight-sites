import { describe, expect, it, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@solidjs/testing-library'
import ThemeCreator from '../../shared/components/ThemeCreator'

describe('ThemeCreator', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('renders when open', () => {
    render(() => <ThemeCreator open={true} onOpenChange={() => {}} />)
    expect(screen.getByText('Theme Creator')).toBeTruthy()
  })

  it('does not render when closed', () => {
    render(() => <ThemeCreator open={false} onOpenChange={() => {}} />)
    expect(screen.queryByText('Theme Creator')).toBeNull()
  })

  it('displays color pickers', () => {
    render(() => <ThemeCreator open={true} onOpenChange={() => {}} />)
    expect(screen.getByText('Accent Color')).toBeTruthy()
    expect(screen.getByText('Background')).toBeTruthy()
    expect(screen.getByText('Text Color')).toBeTruthy()
  })

  it('displays WCAG contrast ratios', () => {
    render(() => <ThemeCreator open={true} onOpenChange={() => {}} />)
    expect(screen.getByText('WCAG AA Contrast Ratios')).toBeTruthy()
    expect(screen.getByText(/Text on Background/)).toBeTruthy()
  })

  it('has export button', () => {
    render(() => <ThemeCreator open={true} onOpenChange={() => {}} />)
    expect(screen.getByText('Export CSS')).toBeTruthy()
  })

  it('has reset button', () => {
    render(() => <ThemeCreator open={true} onOpenChange={() => {}} />)
    expect(screen.getByText('Reset')).toBeTruthy()
  })

  it('has import button', () => {
    render(() => <ThemeCreator open={true} onOpenChange={() => {}} />)
    expect(screen.getByText('Import')).toBeTruthy()
  })

  it('calls onOpenChange when close button clicked', () => {
    const onOpenChange = vi.fn()
    render(() => <ThemeCreator open={true} onOpenChange={onOpenChange} />)
    
    const closeButton = document.querySelector('.theme-creator-close')
    if (closeButton) {
      fireEvent.click(closeButton)
    }
    
    expect(onOpenChange).toHaveBeenCalledWith(false)
  })
})
