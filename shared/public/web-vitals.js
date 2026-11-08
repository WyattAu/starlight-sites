/**
 * Web Vitals tracking for Wyatt's Notes.
 *
 * Tracks Core Web Vitals (LCP, CLS, INP, TTFB) and sends them
 * to Cloudflare Web Analytics as custom events.
 *
 * The library is vendored same-origin (public/vendor/web-vitals.iife.js,
 * web-vitals 4.2.4); the previous CDN import from jsdelivr died with the
 * CDN and silently dropped all vitals. Note: no page currently loads this
 * file; it is kept wired to the vendored build so re-enabling vitals is a
 * one-line script tag, not a CDN dependency.
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

function bind(v) {
  v.onLCP(sendToAnalytics)
  v.onCLS(sendToAnalytics)
  v.onINP(sendToAnalytics)
  v.onTTFB(sendToAnalytics)
  if (typeof v.onFID === 'function') v.onFID(sendToAnalytics)
}

// Load the vendored IIFE build and bind. Nothing is sent if the optional
// Cloudflare beacon is absent.
function init() {
  if (window.webVitals) {
    bind(window.webVitals)
    return
  }
  const script = document.createElement('script')
  script.src = '/vendor/web-vitals.iife.js'
  script.onload = () => window.webVitals && bind(window.webVitals)
  document.head.appendChild(script)
}

init()
