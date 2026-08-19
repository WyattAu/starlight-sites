import { describe, expect, it } from 'vitest'
import { render } from '@solidjs/testing-library'
import ToastProvider from '../../shared/components/ToastProvider'

describe('ToastProvider', () => {
  it('mounts the solid-sonner live region', () => {
    const { container } = render(() => <ToastProvider />)
    // solid-sonner renders an a11y live region; the [data-sonner-toaster]
    // list itself is created lazily when the first toast is shown.
    const region = container.querySelector('section[aria-live="polite"]')
    expect(region).not.toBeNull()
    expect(region?.getAttribute('aria-label')).toContain('Notifications')
  })

  it('is marked as the top rendering layer (portal semantics)', () => {
    const { container } = render(() => <ToastProvider />)
    const region = container.querySelector<HTMLElement>('section[data-react-aria-top-layer]')
    expect(region).not.toBeNull()
  })
})
