/**
 * Web Vitals tracking for Wyatt's Notes.
 *
 * Tracks Core Web Vitals (LCP, FID, CLS, INP, TTFB) and sends them
 * to Cloudflare Web Analytics as custom events.
 */

function sendToAnalytics(metric) {
  const { name, delta, id } = metric
  if (window.cfBeacon) {
    window.cfBeacon('event', 'web-vitals', {
      event_category: 'Web Vitals',
      event_label: id,
      value: Math.round(name === 'CLS' ? delta * 1000 : delta),
      non_interaction: true,
    })
  }
}

// Load web-vitals from CDN and bind
import('https://cdn.jsdelivr.net/npm/web-vitals@4/dist/web-vitals.js')
  .then(({ onCLS, onFID, onINP, onLCP, onTTFB }) => {
    onLCP(sendToAnalytics)
    onFID(sendToAnalytics)
    onCLS(sendToAnalytics)
    onINP(sendToAnalytics)
    onTTFB(sendToAnalytics)
  })
  .catch(() => {})
