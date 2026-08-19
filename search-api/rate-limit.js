// Simple in-memory rate limiter. Tracks requests per IP over a rolling
// window. Resets when the Worker instance is recycled (acceptable for a
// documentation search API). For stricter enforcement, configure Cloudflare
// Rate Limiting rules at the dashboard level.
// @ts-check

import { RATE_LIMIT_MAX, RATE_LIMIT_WINDOW_MS } from './config.js'

const counters = new Map()

/**
 * @param {Request} request
 * @returns {{allowed: boolean, retryAfterSec?: number}}
 */
function checkRateLimit(request) {
  const clientIP = request.headers.get('cf-connecting-ip') || 'unknown'
  const now = Date.now()
  const counter = counters.get(clientIP)
  if (counter && now - counter.windowStart > RATE_LIMIT_WINDOW_MS) {
    counters.delete(clientIP)
  }
  if (!counters.has(clientIP)) {
    counters.set(clientIP, { windowStart: now, count: 1 })
    return { allowed: true }
  }
  const c = counters.get(clientIP)
  c.count++
  if (c.count > RATE_LIMIT_MAX) {
    return {
      allowed: false,
      retryAfterSec: Math.ceil((RATE_LIMIT_WINDOW_MS - (now - c.windowStart)) / 1000),
    }
  }
  return { allowed: true }
}

/** Test hook: clear counters between isolated test environments. */
function resetRateLimits() {
  counters.clear()
}

export { checkRateLimit, resetRateLimits }
