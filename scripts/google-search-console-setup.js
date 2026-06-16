#!/usr/bin/env node
/**
 * Google Search Console verification helper.
 *
 * Generates the DNS TXT record needed for domain verification and
 * lists all sitemap URLs to submit.
 *
 * Usage: node scripts/google-search-console-setup.js
 *
 * Manual steps after running this script:
 * 1. Add the DNS TXT record shown below to your Cloudflare DNS
 * 2. Go to https://search.google.com/search-console
 * 3. Add property: wyattau.com (domain property)
 * 4. Verify using the DNS record
 * 5. Submit the sitemaps listed below
 */

const SITES = [
  { id: 'dse', url: 'https://dse.wyattau.com', name: 'DSE' },
  { id: 'ib', url: 'https://ib.wyattau.com', name: 'IB' },
  { id: 'alevel', url: 'https://alevel.wyattau.com', name: 'A-Level' },
  { id: 'university', url: 'https://university.wyattau.com', name: 'University' },
  { id: 'qualifications', url: 'https://qualifications.wyattau.com', name: 'Qualifications' },
  { id: 'programming', url: 'https://programming.wyattau.com', name: 'Programming' },
  { id: 'infrastructure', url: 'https://infrastructure.wyattau.com', name: 'Infrastructure' },
  { id: 'languages', url: 'https://languages.wyattau.com', name: 'Languages' },
  { id: 'tools', url: 'https://tools.wyattau.com', name: 'Tools' },
]

console.log('Google Search Console Setup')
console.log('='.repeat(50))

console.log('\n1. DNS Verification Record')
console.log('-'.repeat(50))
console.log('Add this TXT record to your Cloudflare DNS:')
console.log('')
console.log('  Type:  TXT')
console.log('  Name:  @')
console.log('  Value: google-site-verification=XXXXXXXXXXXXXXXXXXXXXXXX')
console.log('')
console.log('To get the actual verification code:')
console.log('  1. Go to https://search.google.com/search-console')
console.log('  2. Click "Add property" > "Domain"')
console.log('  3. Enter: wyattau.com')
console.log('  4. Copy the TXT record value provided')

console.log('\n2. Sitemaps to Submit')
console.log('-'.repeat(50))
console.log('After verification, submit these sitemaps:')
console.log('')
for (const site of SITES) {
  console.log(`  ${site.name.padEnd(20)} ${site.url}/sitemap-index.xml`)
}

console.log('\n3. Additional Steps')
console.log('-'.repeat(50))
console.log('  - Set geographic targeting: United States (or your primary audience)')
console.log('  - Enable HTTPS in Security settings')
console.log('  - Check "Coverage" report weekly for indexing issues')
console.log('  - Monitor "Performance" for search queries and clicks')

console.log('\n4. Robots.txt Verification')
console.log('-'.repeat(50))
console.log('Verify robots.txt is accessible on each site:')
for (const site of SITES) {
  console.log(`  curl -s ${site.url}/robots.txt | head -5`)
}
