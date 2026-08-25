// Test Cloudflare API access
const CF_API_TOKEN = process.env.CLOUDFLARE_API_TOKEN
const CF_ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID

console.log('Testing Cloudflare API access...')
console.log('CF_API_TOKEN:', CF_API_TOKEN ? 'set' : 'MISSING')
console.log('CF_ACCOUNT_ID:', CF_ACCOUNT_ID ? 'set' : 'MISSING')

if (!CF_API_TOKEN || !CF_ACCOUNT_ID) {
  console.error('Missing credentials')
  process.exit(1)
}

async function testAPI() {
  try {
    const resp = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${CF_ACCOUNT_ID}/storage/kv/namespaces`,
      {
        headers: { Authorization: `Bearer ${CF_API_TOKEN}` }
      }
    )
    const data = await resp.json()
    if (data.success) {
      console.log('API access OK. KV namespaces:', data.result?.length || 0)
      data.result?.forEach(ns => console.log(`  ${ns.id} - ${ns.title}`))
    } else {
      console.log('API error:', JSON.stringify(data.errors))
    }
  } catch (err) {
    console.error('API error:', err.message)
  }
}

testAPI()
