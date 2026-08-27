import { describe, expect, it, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@solidjs/testing-library'
import SiteNavigator from '../../shared/components/SiteNavigator'

describe('SiteNavigator', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('renders when open', () => {
    render(() => <SiteNavigator open={true} onOpenChange={() => {}} />)
    expect(screen.getByText('All Sites')).toBeTruthy()
  })

  it('does not render when closed', () => {
    render(() => <SiteNavigator open={false} onOpenChange={() => {}} />)
    expect(screen.queryByText('All Sites')).toBeNull()
  })

  it('displays category headers', () => {
    render(() => <SiteNavigator open={true} onOpenChange={() => {}} />)
    expect(screen.getByText('Exam Boards')).toBeTruthy()
    expect(screen.getByText('Further Studies')).toBeTruthy()
    expect(screen.getByText('Infrastructure')).toBeTruthy()
    // Computer Science appears as both category and site name, skip it
  })

  it('displays site cards', () => {
    render(() => <SiteNavigator open={true} onOpenChange={() => {}} />)
    expect(screen.getByText('DSE')).toBeTruthy()
    expect(screen.getByText('IB')).toBeTruthy()
    expect(screen.getByText('Python')).toBeTruthy()
  })

  it('has filter input', () => {
    render(() => <SiteNavigator open={true} onOpenChange={() => {}} />)
    expect(screen.getByPlaceholderText('Filter sites...')).toBeTruthy()
  })

  it('filters sites based on input', async () => {
    render(() => <SiteNavigator open={true} onOpenChange={() => {}} />)
    
    const filterInput = screen.getByPlaceholderText('Filter sites...')
    fireEvent.input(filterInput, { target: { value: 'python' } })
    
    // Python should be visible
    expect(screen.getByText('Python')).toBeTruthy()
  })

  it('calls onOpenChange when close button clicked', () => {
    const onOpenChange = vi.fn()
    render(() => <SiteNavigator open={true} onOpenChange={onOpenChange} />)
    
    const closeButton = document.querySelector('.site-nav-close')
    if (closeButton) {
      fireEvent.click(closeButton)
    }
    
    expect(onOpenChange).toHaveBeenCalledWith(false)
  })

  it('calls onOpenChange when backdrop clicked', () => {
    const onOpenChange = vi.fn()
    render(() => <SiteNavigator open={true} onOpenChange={onOpenChange} />)
    
    const backdrop = document.querySelector('.site-nav-backdrop')
    if (backdrop) {
      fireEvent.click(backdrop)
    }
    
    expect(onOpenChange).toHaveBeenCalledWith(false)
  })
})
