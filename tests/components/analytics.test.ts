import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import { trackEvent } from '../../shared/utils/analytics'

describe('trackEvent', () => {
  let sendBeaconSpy: ReturnType<typeof vi.fn>

  beforeEach(() => {
    sendBeaconSpy = vi.fn().mockReturnValue(true)
    // jsdom lacks navigator.sendBeacon, so we define it for the test.
    Object.defineProperty(navigator, 'sendBeacon', {
      value: sendBeaconSpy,
      configurable: true,
      writable: true,
    })
  })

  afterEach(() => {
    vi.restoreAllMocks()
    // @ts-expect-error -- cleanup: remove the polyfill we added
    delete navigator.sendBeacon
  })

  it('sends a JSON payload via sendBeacon with page and timestamp', () => {
    trackEvent({ event: 'click', component: 'FlashcardDeck', action: 'flip' })

    expect(sendBeaconSpy).toHaveBeenCalledOnce()
    const [url, payload] = sendBeaconSpy.mock.calls[0]
    expect(url).toBe('/api/track')

    const body = JSON.parse(payload)
    expect(body.event).toBe('click')
    expect(body.component).toBe('FlashcardDeck')
    expect(body.action).toBe('flip')
    expect(body.page).toBe(window.location.href)
    expect(body.timestamp).toBeDefined()
  })

  it('skips sendBeacon when navigator is unavailable (SSR branch)', () => {
    // Remove sendBeacon to hit the typeof navigator !== 'undefined' && sendBeacon branch
    // @ts-expect-error -- testing SSR branch
    delete navigator.sendBeacon
    trackEvent({ event: 'test', component: 'ssr', action: 'view' })
  })

  it('swallows errors from sendBeacon (catch block)', () => {
    sendBeaconSpy.mockImplementation(() => {
      throw new Error('beacon failed')
    })

    // Should not throw — catch block swallows
    trackEvent({ event: 'error', component: 'test', action: 'fail' })
  })
})
