// Input validation for Worker endpoints.
//
// Inverts validation policy into a declarative schema table (SOLID-DIP)
// instead of inline ad-hoc checks. Kept dependency-free: the previous
// analysis flagged an installed-but-unused `zod`; a 60-line table replaces
// it without adding bundle weight to the edge Worker.
// @ts-check

/**
 * Declarative field schemas. Each field: [required, type, maxLen/numeric
 * bounds]. Unknown fields in the payload are dropped (never stored raw).
 */
const TRACK_SCHEMA = {
  event: { type: 'string', required: true, maxLength: 64 },
  query: { type: 'string', required: false, maxLength: 200 },
  position: { type: 'number', required: false, min: 0, max: 10000, integer: true },
  url: { type: 'string', required: false, maxLength: 2048 },
  site: { type: 'string', required: false, maxLength: 64 },
  resultCount: { type: 'number', required: false, min: 0, max: 1_000_000, integer: true },
  timestamp: { type: 'string', required: false, maxLength: 32 },
  page: { type: 'string', required: false, maxLength: 2048 },
  referrer: { type: 'string', required: false, maxLength: 2048 },
}

// Event names emitted by the client scripts (page-search.js,
// cross-site-search.js). Unknown events are rejected rather than stored.
const TRACK_EVENTS = new Set([
  'search_enter',
  'search_modal_open',
  'search_modal_close',
  'search_query',
  'search_result_click',
  'search_suggestion_click',
])

/**
 * Validate and sanitize a /api/track payload.
 * @param {unknown} data - parsed JSON body
 * @returns {{ok: true, value: object} | {ok: false, error: string}}
 */
function validateTrackPayload(data) {
  if (data === null || typeof data !== 'object' || Array.isArray(data)) {
    return { ok: false, error: 'Payload must be a JSON object' }
  }

  const value = {}
  for (const [field, rule] of Object.entries(TRACK_SCHEMA)) {
    const raw = data[field]
    if (raw === undefined || raw === null) {
      if (rule.required) return { ok: false, error: `Missing required field: ${field}` }
      continue
    }

    if (rule.type === 'string') {
      if (typeof raw !== 'string') return { ok: false, error: `${field} must be a string` }
      if (raw.length > rule.maxLength) {
        return { ok: false, error: `${field} exceeds ${rule.maxLength} characters` }
      }
      value[field] = raw
    } else {
      const num = typeof raw === 'number' ? raw : Number.parseInt(raw, 10)
      if (Number.isNaN(num)) return { ok: false, error: `${field} must be a number` }
      if (rule.integer && !Number.isInteger(num)) {
        return { ok: false, error: `${field} must be an integer` }
      }
      if (num < rule.min || num > rule.max) {
        return { ok: false, error: `${field} out of range [${rule.min}, ${rule.max}]` }
      }
      value[field] = num
    }
  }

  if (!TRACK_EVENTS.has(value.event)) {
    return {
      ok: false,
      error: `Unknown event; expected one of: ${[...TRACK_EVENTS].join(', ')}`,
    }
  }

  return { ok: true, value }
}

/**
 * Validate a search query string.
 * @param {string | undefined} query
 * @returns {{ok: true, value: string} | {ok: false, status: number, error: string}}
 */
function validateSearchQuery(query) {
  if (!query || query.length < 2) {
    return { ok: false, status: 400, error: 'Query must be at least 2 characters' }
  }
  if (query.length > 200) {
    return { ok: false, status: 400, error: 'Query must be at most 200 characters' }
  }
  return { ok: true, value: query }
}

export { TRACK_EVENTS, TRACK_SCHEMA, validateSearchQuery, validateTrackPayload }
