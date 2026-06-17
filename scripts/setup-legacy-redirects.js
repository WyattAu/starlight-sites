#!/usr/bin/env node
/**
 * Create Cloudflare Transform Rules for legacy subdomain redirects.
 *
 * Usage:
 *   CLOUDFLARE_API_TOKEN=xxx node scripts/setup-legacy-redirects.js
 *
 * Requires: Zone:Transform Rules:Edit permission on the API token.
 * This script creates 301 redirects from old subdomains to the new sites.
 */

const ZONE_ID = '55ec52794cd169def38cb5ca2cad3481'
const API_TOKEN = process.env.CLOUDFLARE_API_TOKEN

if (!API_TOKEN) {
  console.error('CLOUDFLARE_API_TOKEN environment variable required')
  process.exit(1)
}

// Legacy subdomain -> new site mappings
const REDIRECTS = [
  { from: 'alevel-maths-physics.wyattau.com', to: 'https://alevel.wyattau.com/maths/' },
  { from: 'alevel-sciences.wyattau.com', to: 'https://alevel.wyattau.com/chemistry/' },
  { from: 'academics.wyattau.com', to: 'https://wyattsnotes.wyattau.com' },
]

async function createRedirect(from, to) {
  const response = await fetch(
    `https://api.cloudflare.com/client/v4/zones/${ZONE_ID}/rules/phases/http_request_transform/static`,
    {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        rules: [
          {
            expression: `(http.host eq "${from}")`,
            action: 'rewrite',
            action_parameters: {
              uri: { value: to },
            },
            description: `Redirect ${from} to ${to}`,
          },
        ],
      }),
    },
  )

  const data = await response.json()
  if (data.success) {
    console.log(`  OK: ${from} -> ${to}`)
  } else {
    console.error(`  FAIL: ${from} - ${data.errors?.[0]?.message || 'unknown error'}`)
  }
}

async function main() {
  console.log('Setting up legacy subdomain redirects...\n')

  for (const { from, to } of REDIRECTS) {
    await createRedirect(from, to)
  }

  console.log('\nDone. Verify redirects at:')
  for (const { from } of REDIRECTS) {
    console.log(`  curl -I https://${from}`)
  }
}

main().catch(console.error)
