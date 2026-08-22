// Rate limiter with KV-backed persistence when available, falling back to
// in-memory. On Cloudflare Workers, in-memory counters reset per isolate
// recycle, so this is best-effort without KV. Configure Cloudflare Rate
// Limiting rules at the dashboard level for strict enforcement.
// @ts-check

import { RATE_LIMIT_MAX, RATE_LIMIT_WINDOW_MS } from './config.js'

const counters = new Map()

/**
 * @param {Request} request
 * @param {object} [env] - Worker env with optional SEARCH_KV binding
 * @returns {Promise<{allowed: boolean, retryAfterSec?: number}>}
 */
async function checkRateLimit(request, env) {
  const clientIP = request.headers.get('cf-connecting-ip') || 'unknown'
  const now = Date.now()
  const key = `rl:${clientIP}`

  // Try KV-backed rate limiting if available
  if (env?.SEARCH_KV) {
    try {
      const stored = await env.SEARCH_KV.get(key, { type: 'json' })
      if (stored && now - stored.windowStart > RATE_LIMIT_WINDOW_MS) {
        // Window expired, reset
        await env.SEARCH_KV.put(key, JSON.stringify({ windowStart: now, count: 1 }), {
          expirationTtl: Math.ceil(RATE_LIMIT_WINDOW_MS / 1000) + 10,
        })
        return { allowed: true }
      }
      if (stored) {
        stored.count++
        if (stored.count > RATE_LIMIT_MAX) {
          return {
            allowed: false,
            retryAfterSec: Math.ceil((RATE_LIMIT_WINDOW_MS - (now - stored.windowStart)) / 1000),
          }
        }
        await env.SEARCH_KV.put(key, JSON.stringify(stored), {
          expirationTtl: Math.ceil(RATE_LIMIT_WINDOW_MS / 1000) + 10,
        })
        return { allowed: true }
      }
      // No stored counter, start new window
      await env.SEARCH_KV.put(key, JSON.stringify({ windowStart: now, count: 1 }), {
        expirationTtl: Math.ceil(RATE_LIMIT_WINDOW_MS / 1000) + 10,
      })
      return { allowed: true }
    } catch {
      // KV error, fall through to in-memory
    }
  }

  // In-memory fallback (per-isolate, resets on recycle)
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
