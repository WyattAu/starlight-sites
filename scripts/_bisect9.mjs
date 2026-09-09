import { compile } from '../node_modules/.bun/@astrojs+mdx@6.0.3+ea99d0d19699dbc0/node_modules/@mdx-js/mdx/index.js'
import { readFileSync } from 'fs'

const src = readFileSync(process.argv[2], 'utf8')
try {
  await compile(src)
  console.log('OK')
} catch (e) {
  // mdx errors carry position info
  const lines = src.split('\n')
  const m = String(e.message).match(/:(\d+):(\d+)/)
  console.log('error:', String(e.message).slice(0, 150))
  if (m) {
    const ln = +m[1], col = +m[2]
    console.log(`line ${ln} col ${col}:`, JSON.stringify(lines[ln - 1]?.slice(Math.max(0, col - 50), col + 30)))
  }
}
