// Structured logging for Cloudflare Workers. Output is JSON (one object per
// line), which Cloudflare captures as structured logs in the dashboard.
// @ts-check

function log(level, message, extra = {}) {
  console.log(JSON.stringify({ level, message, ts: new Date().toISOString(), ...extra }))
}

export { log }
