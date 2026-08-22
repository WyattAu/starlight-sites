// Client-side error reporting utility for the search Worker.
// Captures unhandled errors and sends them to /api/track for observability.
// @ts-check

const SEARCH_API = typeof window !== 'undefined'
  // @ts-ignore — custom global for testing
  ? (window.__SEARCH_API || 'https://search.wyattau.com/api')
  : 'https://search.wyattau.com/api'

/**
 * Report a client-side error to the search API.
 * Called by ErrorBoundary and window.onerror handler.
 * @param {Error | string} error
 * @param {string} [component]
 * @param {string} [url]
 */
export function captureClientError(error: Error | string, component = 'unknown', url = '') {
  try {
    const payload = {
      event: 'client_error',
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack?.slice(0, 500) : '',
      component,
      page: url || (typeof window !== 'undefined' ? window.location.href : ''),
      timestamp: new Date().toISOString(),
    }
    // Fire-and-forget: errors must never block the UI
    fetch(`${SEARCH_API}/track`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }).catch(() => {})
  } catch {
    // Swallow: error reporting must never crash the app
  }
}

/**
 * Install a global window.onerror handler.
 * Call once at app mount to capture uncaught errors.
 */
export function installGlobalErrorCapture() {
  if (typeof window === 'undefined') return
  window.onerror = (message: string | Event, source?: string, lineno?: number, colno?: number, error?: Error) => {
    captureClientError(
      error || new Error(String(message)),
      `window.onerror:${lineno}:${colno}`,
      source || '',
    )
  }
  window.addEventListener('unhandledrejection', (event) => {
    captureClientError(
      event.reason instanceof Error ? event.reason : new Error(String(event.reason)),
      'unhandledrejection',
    )
  })
}
