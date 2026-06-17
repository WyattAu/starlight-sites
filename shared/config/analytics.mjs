/**
 * Cloudflare Web Analytics configuration for Wyatt's Notes.
 *
 * To enable analytics:
 * 1. Go to https://dash.cloudflare.com → Analytics & Logs → Web Analytics
 * 2. Enable Web Analytics for your domain
 * 3. Copy the beacon token (looks like: abc123def456)
 * 4. Set the CLOUDFLARE_ANALYTICS_TOKEN environment variable, or
 * 5. Replace the token below directly
 *
 * Usage in astro.config.mjs:
 *   import { cloudflareAnalytics } from '../../shared/config/analytics.mjs'
 *   // Add to head array: head: [...cloudflareAnalytics()]
 */

const ANALYTICS_TOKEN = process.env.CLOUDFLARE_ANALYTICS_TOKEN || ''

/**
 * Returns Cloudflare Web Analytics script tag for Starlight head config.
 * Returns empty array if no token is configured.
 */
export function cloudflareAnalytics() {
  if (!ANALYTICS_TOKEN) return []

  return [
    {
      tag: 'script',
      attrs: {
        defer: true,
        src: 'https://static.cloudflareinsights.com/beacon.min.js',
        'data-cf-beacon': JSON.stringify({ token: ANALYTICS_TOKEN }),
      },
    },
  ]
}

/**
 * Returns Cloudflare Web Analytics script tag for custom layouts.
 * Returns empty string if no token is configured.
 */
export function cloudflareAnalyticsTag() {
  if (!ANALYTICS_TOKEN) return ''

  return `<script defer src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='${JSON.stringify({ token: ANALYTICS_TOKEN })}'></script>`
}
