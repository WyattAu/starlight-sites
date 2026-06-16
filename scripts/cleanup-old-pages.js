#!/usr/bin/env node
/**
 * List and optionally remove old Cloudflare Pages projects.
 *
 * Usage:
 *   CLOUDFLARE_API_TOKEN=xxx node scripts/cleanup-old-pages.js          # list only
 *   CLOUDFLARE_API_TOKEN=xxx node scripts/cleanup-old-pages.js --delete # delete
 *
 * Requires: Pages:Read (list) and Pages:Delete (remove) permissions.
 */

const ACCOUNT_ID = '26966ba2f4b3a12cb750cd615c8d0bcf'
const API_TOKEN = process.env.CLOUDFLARE_API_TOKEN
const DELETE_MODE = process.argv.includes('--delete')

if (!API_TOKEN) {
  console.error('CLOUDFLARE_API_TOKEN environment variable required')
  process.exit(1)
}

// Current active projects (do NOT delete these)
const ACTIVE_PROJECTS = new Set([
  'wyattsnotes-dse',
  'wyattsnotes-ib',
  'wyattsnotes-alevel',
  'wyattsnotes-university',
  'wyattsnotes-qualifications',
  'wyattsnotes-programming',
  'wyattsnotes-infrastructure',
  'wyattsnotes-languages',
  'wyattsnotes-tools',
  'wyattsnotes',
])

async function listProjects() {
  const response = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/pages/projects`,
    {
      headers: { 'Authorization': `Bearer ${API_TOKEN}` },
    },
  )
  const data = await response.json()
  return data.result || []
}

async function deleteProject(name) {
  const response = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/pages/projects/${name}`,
    {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${API_TOKEN}` },
    },
  )
  return response.ok
}

async function main() {
  const projects = await listProjects()
  const oldProjects = projects.filter(p => !ACTIVE_PROJECTS.has(p.name))

  console.log(`Found ${projects.length} total Pages projects.`)
  console.log(`${oldProjects.length} appear to be legacy/old projects.\n`)

  if (oldProjects.length === 0) {
    console.log('No legacy projects to clean up.')
    return
  }

  console.log('Legacy projects:')
  for (const p of oldProjects) {
    console.log(`  - ${p.name} (created: ${p.created_on})`)
  }

  if (!DELETE_MODE) {
    console.log('\nDry run. Add --delete to remove these projects.')
    return
  }

  console.log('\nDeleting legacy projects...')
  for (const p of oldProjects) {
    const ok = await deleteProject(p.name)
    console.log(`  ${ok ? 'OK' : 'FAIL'}: ${p.name}`)
  }

  console.log('\nDone.')
}

main().catch(console.error)
