import { compile } from '../node_modules/.bun/@astrojs+mdx@6.0.3+ea99d0d19699dbc0/node_modules/@mdx-js/mdx/index.js'
import { readFileSync } from 'fs'

const src = readFileSync(process.argv[2], 'utf8')
try {
  await compile(src)
  console.log('OK')
} catch (e) {
  console.log('name:', e.name)
  console.log('message:', String(e.message).slice(0, 180))
  console.log('place:', JSON.stringify(e.place))
}
