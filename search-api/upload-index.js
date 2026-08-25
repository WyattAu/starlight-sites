#!/usr/bin/env node

// upload-index.js
// Uploads the merged search index to Cloudflare KV

const fs = require('node:fs')
const path = require('node:path')

const KV_NAMESPACE_ID = process.env.KV_NAMESPACE_ID
const CF_API_TOKEN = process.env.CLOUDFLARE_API_TOKEN
const CF_ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID

console.log('KV_NAMESPACE_ID:', KV_NAMESPACE_ID ? 'set' : 'MISSING')
console.log('CF_API_TOKEN:', CF_API_TOKEN ? 'set (' + CF_API_TOKEN.length + ' chars)' : 'MISSING')
console.log('CF_ACCOUNT_ID:', CF_ACCOUNT_ID ? 'set (' + CF_ACCOUNT_ID.length + ' chars)' : 'MISSING')

if (!KV_NAMESPACE_ID || !CF_API_TOKEN || !CF_ACCOUNT_ID) {
  console.error('Missing required environment variables')
  process.exit(1)
}

async function uploadToKV() {
  const indexPath = path.join(__dirname, 'merged-index.json')
  if (!fs.existsSync(indexPath)) {
    console.error('merged-index.json not found at', indexPath)
    process.exit(1)
  }
  
  const indexContent = fs.readFileSync(indexPath)
  console.log('Index file size:', indexContent.length, 'bytes')
  
  console.log('Uploading merged-index to KV...')
  const indexResp = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${CF_ACCOUNT_ID}/storage/kv/namespaces/${KV_NAMESPACE_ID}/values/merged-index`,
    {
      method: 'PUT',
      headers: { Authorization: `Bearer ${CF_API_TOKEN}` },
      body: indexContent,
    }
  )
  
  const indexResult = await indexResp.json()
  if (!indexResult.success) {
    console.error('Index upload failed:', JSON.stringify(indexResult.errors))
    process.exit(1)
  }
  console.log('Index uploaded successfully')
  
  // Upload metadata
  const index = JSON.parse(indexContent)
  const metadataResp = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${CF_ACCOUNT_ID}/storage/kv/namespaces/${KV_NAMESPACE_ID}/values/metadata`,
    {
      method: 'PUT',
      headers: { Authorization: `Bearer ${CF_API_TOKEN}` },
      body: JSON.stringify(index.metadata),
    }
  )
  
  const metadataResult = await metadataResp.json()
  if (!metadataResult.success) {
    console.error('Metadata upload failed:', JSON.stringify(metadataResult.errors))
    process.exit(1)
  }
  console.log('Metadata uploaded successfully')
  console.log('Done!')
}

uploadToKV().catch(err => {
  console.error('Upload failed:', err)
  process.exit(1)
})
