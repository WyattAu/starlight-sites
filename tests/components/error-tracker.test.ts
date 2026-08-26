import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import { captureClientError, installGlobalErrorCapture } from '../../shared/utils/error-tracker'

describe('captureClientError', () => {
  let fetchSpy: ReturnType<typeof vi.fn>

  beforeEach(() => {
    fetchSpy = vi.fn().mockResolvedValue({})
    vi.stubGlobal('fetch', fetchSpy)
    ;(window as any).__SEARCH_API = 'https://test.example.com/api'
  })

  afterEach(() => {
    vi.restoreAllMocks()
    delete (window as any).__SEARCH_API
  })

  it('posts Error objects with message and stack to /api/track', async () => {
    const err = new Error('boom')
    captureClientError(err, 'MyComponent', 'https://example.com/page')

    expect(fetchSpy).toHaveBeenCalledOnce()
    const [url, init] = fetchSpy.mock.calls[0]
    expect(url).toContain('/api/track')
    expect(init.method).toBe('POST')

    const body = JSON.parse(init.body)
    expect(body.event).toBe('client_error')
    expect(body.error).toBe('boom')
    expect(body.stack).toBe(err.stack?.slice(0, 500))
    expect(body.component).toBe('MyComponent')
    expect(body.page).toBe('https://example.com/page')
    expect(body.timestamp).toBeDefined()
  })

  it('handles string errors with default component and page from window.location', async () => {
    captureClientError('something broke')

    const body = JSON.parse(fetchSpy.mock.calls[0][1].body)
    expect(body.error).toBe('something broke')
    expect(body.stack).toBe('')
    expect(body.component).toBe('unknown')
    expect(body.page).toBe(window.location.href)
  })

  it('uses empty url when window is undefined (SSR)', async () => {
    const origWindow = globalThis.window
    // @ts-expect-error -- testing SSR path
    delete globalThis.window
    try {
      captureClientError(new Error('ssr error'), 'ssr')
      // Outer try succeeds; fetch is fire-and-forget
      expect(fetchSpy).toHaveBeenCalled()
    } finally {
      globalThis.window = origWindow
    }
  })

  it('swallows errors from failed fetch (fire-and-forget)', async () => {
    fetchSpy.mockRejectedValue(new Error('network'))

    // Should not throw
    captureClientError(new Error('test'))
    // Give microtask a chance
    await new Promise(r => setTimeout(r, 0))
  })

  it('swallows errors from payload construction (outer catch)', async () => {
    // Force an error inside the try block by making Date.toISOString throw
    vi.spyOn(Date.prototype, 'toISOString').mockImplementation(() => {
      throw new Error('date broken')
    })

    // Should not throw — the outer catch swallows everything
    captureClientError(new Error('test'), 'comp', 'url')
    expect(fetchSpy).not.toHaveBeenCalled()
  })
})

describe('installGlobalErrorCapture', () => {
  let fetchSpy: ReturnType<typeof vi.fn>

  beforeEach(() => {
    fetchSpy = vi.fn().mockResolvedValue({})
    vi.stubGlobal('fetch', fetchSpy)
    ;(window as any).__SEARCH_API = 'https://test.example.com/api'
  })

  afterEach(() => {
    vi.restoreAllMocks()
    window.onerror = null
  })

  it('sets window.onerror to report errors via captureClientError', () => {
    installGlobalErrorCapture()
    expect(window.onerror).toBeDefined()

    const testError = new Error('global error')
    // window.onerror(message, source, lineno, colno, error)
    window.onerror!('test message', 'https://src.js', 42, 7, testError)

    expect(fetchSpy).toHaveBeenCalledOnce()
    const body = JSON.parse(fetchSpy.mock.calls[0][1].body)
    expect(body.event).toBe('client_error')
    expect(body.component).toBe('window.onerror:42:7')
    expect(body.page).toBe('https://src.js')
  })

  it('handles onerror when error is null (message-based)', () => {
    installGlobalErrorCapture()

    // When error param is null, it falls back to new Error(String(message))
    window.onerror!('string error', undefined, undefined, undefined, undefined)

    expect(fetchSpy).toHaveBeenCalledOnce()
    const body = JSON.parse(fetchSpy.mock.calls[0][1].body)
    expect(body.component).toBe('window.onerror:undefined:undefined')
  })

  it('registers an unhandledrejection handler', async () => {
    installGlobalErrorCapture()

    const reason = new Error('rejected promise')
    const p = Promise.reject(reason)
    p.catch(() => {}) // suppress unhandled rejection in test harness
    const event = new PromiseRejectionEvent('unhandledrejection', {
      promise: p,
      reason,
    })
    window.dispatchEvent(event)

    expect(fetchSpy).toHaveBeenCalled()
    const body = JSON.parse(fetchSpy.mock.calls[0][1].body)
    expect(body.component).toBe('unhandledrejection')
    expect(body.error).toBe('rejected promise')
  })

  it('handles non-Error rejection reasons', async () => {
    installGlobalErrorCapture()

    const p = Promise.reject('string reason')
    p.catch(() => {}) // suppress unhandled rejection in test harness
    const event = new PromiseRejectionEvent('unhandledrejection', {
      promise: p,
      reason: 'string reason',
    })
    window.dispatchEvent(event)

    const body = JSON.parse(fetchSpy.mock.calls[0][1].body)
    expect(body.error).toBe('string reason')
  })

  it('is a no-op in SSR (typeof window === undefined)', async () => {
    const origWindow = globalThis.window
    // @ts-expect-error -- testing SSR path
    delete globalThis.window
    try {
      // Should not throw
      installGlobalErrorCapture()
    } finally {
      globalThis.window = origWindow
    }
  })
})
