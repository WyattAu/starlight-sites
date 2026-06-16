#!/usr/bin/env node

// upload-index.js
// Uploads the merged search index to Cloudflare KV
// Usage: KV_NAMESPACE_ID=xxx node upload-index.js

const fs = require('node:fs')
const path = require('node:path')

const KV_NAMESPACE_ID = process.env.KV_NAMESPACE_ID
const CF_API_TOKEN = process.env.CLOUDFLARE_API_TOKEN
const CF_ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID

if (!KV_NAMESPACE_ID || !CF_API_TOKEN || !CF_ACCOUNT_ID) {
  process.exit(1)
}

async function uploadToKV() {
  // Read the merged index
  const indexPath = path.join(__dirname, 'merged-index.json')
  if (!fs.existsSync(indexPath)) {
    process.exit(1)
  }

  const indexContent = fs.readFileSync(indexPath)
  const index = JSON.parse(indexContent)

  const indexResp = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${CF_ACCOUNT_ID}/storage/kv/namespaces/${KV_NAMESPACE_ID}/values/merged-index`,
    {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${CF_API_TOKEN}`,
      },
      body: indexContent,
    },
  )

  if (!indexResp.ok) {
    const _err = await indexResp.json()

    process.exit(1)
  }

  const metadataResp = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${CF_ACCOUNT_ID}/storage/kv/namespaces/${KV_NAMESPACE_ID}/values/metadata`,
    {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${CF_API_TOKEN}`,
      },
      body: JSON.stringify(index.metadata),
    },
  )

  if (!metadataResp.ok) {
    const _err = await metadataResp.json()

    process.exit(1)
  }
}

uploadToKV().catch(_err => {
  process.exit(1)
})
