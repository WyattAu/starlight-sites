/**
 * Web Vitals tracking for Wyatt's Notes.
 *
 * Tracks Core Web Vitals (LCP, FID, CLS, INP, TTFB) and sends them
 * to Cloudflare Web Analytics as custom events.
 *
 * Usage in astro.config.mjs:
 *   head: [
 *     { tag: 'script', attrs: { type: 'module', src: '/web-vitals.js' } },
 *   ]
 */

import { onCLS, onFID, onINP, onLCP, onTTFB } from 'web-vitals'

function sendToAnalytics(metric) {
  const { name, delta, value, id } = metric

  // Send to Cloudflare Web Analytics as custom event
  if (window.cfBeacon) {
    window.cfBeacon('event', 'web-vitals', {
      event_category: 'Web Vitals',
      event_label: id,
      value: Math.round(name === 'CLS' ? delta * 1000 : delta),
      non_interaction: true,
    })
  }

  // Also log to console in development
  if (import.meta.env.DEV) {
    console.log(`[Web Vitals] ${name}: ${value} (delta: ${delta})`)
  }
}

// Track all Core Web Vitals
onLCP(sendToAnalytics)
onFID(sendToAnalytics)
onCLS(sendToAnalytics)
onINP(sendToAnalytics)
onTTFB(sendToAnalytics)
