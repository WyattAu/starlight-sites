// Scan the file with micromark-level line reporting: find lines containing
// <' patterns (Rust lifetimes) that MDX would choke on.
import { readFileSync } from 'fs'
const lines = readFileSync(process.argv[2], 'utf8').split('\n')
lines.forEach((line, i) => {
  if (/<'[a-z]/.test(line)) {
    const col = line.search(/<'[a-z]/) + 1
    console.log(`line ${i + 1} col ${col}: ${line.slice(Math.max(0, col - 30), col + 40)}`)
  }
})
