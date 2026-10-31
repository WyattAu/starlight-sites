/**
 * Lightweight client-side analytics tracker.
 * Posts events to /api/track via sendBeacon (non-blocking, survives page unload).
 */

export interface TrackEvent {
  event: string
  component: string
  action: string
  [key: string]: string | number | boolean | undefined
}

export function trackEvent(data: TrackEvent): void {
  try {
    const payload = {
      ...data,
      page: typeof window !== 'undefined' ? window.location.href : '',
      timestamp: new Date().toISOString(),
    }
    if (typeof navigator !== 'undefined' && navigator.sendBeacon) {
      navigator.sendBeacon('/api/track', JSON.stringify(payload))
    }
  } catch {
    // Silent fail -- analytics should never break the UI
  }
}
