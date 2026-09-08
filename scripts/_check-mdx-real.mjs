// Replicates the Astro MDX pipeline: mdx() integration receives remarkMath.
import { compile } from '../node_modules/.bun/@astrojs+mdx@6.0.3+ea99d0d19699dbc0/node_modules/@mdx-js/mdx/index.js'
import { readFileSync } from 'fs'

const file = process.argv[2]
const src = readFileSync(file, 'utf8')
try {
  await compile(src)
  console.log('MDX OK (bare):', file)
  process.exit(0)
} catch (bareErr) {
  // Distinguish: does the error involve content a $-math plugin would hide?
  const msg = String(bareErr.message ?? bareErr)
  // Retry is not possible without the plugin; classify by heuristics
  console.log('MDX FAIL (bare):', file)
  console.log(msg.slice(0, 250))
  process.exit(1)
}
