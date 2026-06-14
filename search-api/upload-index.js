#!/usr/bin/env node

// upload-index.js
// Uploads the merged search index to Cloudflare KV
// Usage: KV_NAMESPACE_ID=xxx node upload-index.js

const fs = require('fs');
const path = require('path');

const KV_NAMESPACE_ID = process.env.KV_NAMESPACE_ID;
const CF_API_TOKEN = process.env.CLOUDFLARE_API_TOKEN;
const CF_ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID;

if (!KV_NAMESPACE_ID || !CF_API_TOKEN || !CF_ACCOUNT_ID) {
  console.error('Missing required environment variables: KV_NAMESPACE_ID, CLOUDFLARE_API_TOKEN, CLOUDFLARE_ACCOUNT_ID');
  process.exit(1);
}

async function uploadToKV() {
  console.log('Uploading search index to KV...\n');

  // Read the merged index
  const indexPath = path.join(__dirname, 'merged-index.json');
  if (!fs.existsSync(indexPath)) {
    console.error('[FAIL] merged-index.json not found. Run build-search-index.js first.');
    process.exit(1);
  }

  const indexContent = fs.readFileSync(indexPath);
  const index = JSON.parse(indexContent);

  console.log(`Index: ${index.metadata.totalEntries} entries, ${index.metadata.siteCount} sites`);
  console.log(`Version: ${index.metadata.version}`);

  // Upload merged index
  console.log('\nUploading merged-index...');
  const indexResp = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${CF_ACCOUNT_ID}/storage/kv/namespaces/${KV_NAMESPACE_ID}/values/merged-index`,
    {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${CF_API_TOKEN}`,
      },
      body: indexContent,
    }
  );

  if (!indexResp.ok) {
    const err = await indexResp.json();
    console.error('[FAIL] Failed to upload index:', JSON.stringify(err.errors));
    process.exit(1);
  }
  console.log('[OK] Index uploaded');

  // Upload metadata
  console.log('Uploading metadata...');
  const metadataResp = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${CF_ACCOUNT_ID}/storage/kv/namespaces/${KV_NAMESPACE_ID}/values/metadata`,
    {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${CF_API_TOKEN}`,
      },
      body: JSON.stringify(index.metadata),
    }
  );

  if (!metadataResp.ok) {
    const err = await metadataResp.json();
    console.error('[FAIL] Failed to upload metadata:', JSON.stringify(err.errors));
    process.exit(1);
  }
  console.log('[OK] Metadata uploaded');

  console.log('\nDone! Search index is now live.');
}

uploadToKV().catch(err => {
  console.error('Upload failed:', err);
  process.exit(1);
});
