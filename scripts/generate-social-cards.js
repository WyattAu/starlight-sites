import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const SITES_DIR = path.join(__dirname, '..', 'sites')

const siteConfig = {
  'civics-tests': {
    title: 'Civics and Citizenship Tests',
    subtitle: 'Complete preparation for civics and citizenship tests across countries.',
    color: '#ff6b35',
    icon: 'Campus️',
  },
  cpp: {
    title: 'C++',
    subtitle: 'Deep C++ systems programming notes covering ownership, RAII, templates, and concurrency.',
    color: '#e74c3c',
    icon: 'Gear️',
  },
  dart: {
    title: 'Dart',
    subtitle: 'Dart programming language notes.',
    color: '#0175c2',
    icon: 'Target',
  },
  'driving-eu': {
    title: 'EU Driving Test',
    subtitle: 'Complete EU driving test preparation covering theory and practical tests.',
    color: '#003399',
    icon: 'Driving',
  },
  'driving-uk': {
    title: 'UK Driving Test',
    subtitle: 'Complete UK driving test preparation covering theory, hazard perception, and practical test.',
    color: '#c8102e',
    icon: 'Driving',
  },
  'driving-us': {
    title: 'US Driving Test',
    subtitle: 'Complete US driving test preparation covering DMV written test, road test, and driving rules.',
    color: '#3c3b6e',
    icon: 'Driving',
  },
  elixir: {
    title: 'Elixir',
    subtitle: 'Elixir programming language notes.',
    color: '#6e4a7e',
    icon: 'Water',
  },
  go: {
    title: 'Go',
    subtitle: 'Go programming language notes.',
    color: '#00add8',
    icon: 'Hamster',
  },
  haskell: {
    title: 'Haskell',
    subtitle: 'Haskell programming language notes.',
    color: '#5e5086',
    icon: 'λ',
  },
  java: {
    title: 'Java',
    subtitle: 'Java programming language notes.',
    color: '#f89820',
    icon: 'Coffee',
  },
  kotlin: {
    title: 'Kotlin',
    subtitle: 'Kotlin programming language notes.',
    color: '#7f52ff',
    icon: 'Purple',
  },
  'language-tests': {
    title: 'Language Proficiency Tests',
    subtitle: 'Complete preparation for language proficiency tests from A1 to C2 levels.',
    color: '#1abc9c',
    icon: 'Globe',
  },
  'professional-certs': {
    title: 'Professional Certifications',
    subtitle: 'Complete preparation for professional certification exams.',
    color: '#f39c12',
    icon: 'Trophy',
  },
  python: {
    title: 'Python',
    subtitle: 'Python programming language notes.',
    color: '#3776ab',
    icon: 'Snake',
  },
  ruby: {
    title: 'Ruby',
    subtitle: 'Ruby programming language notes.',
    color: '#cc342d',
    icon: 'Gem',
  },
  rust: {
    title: 'Rust',
    subtitle: 'Rust programming language notes.',
    color: '#dea584',
    icon: 'Crab',
  },
  swift: {
    title: 'Swift',
    subtitle: 'Swift programming language notes.',
    color: '#fa7343',
    icon: 'Bird',
  },
  typescript: {
    title: 'TypeScript',
    subtitle: 'TypeScript programming language notes.',
    color: '#3178c6',
    icon: 'Book',
  },
}

function generateSVG(config) {
  const { title, subtitle, color, icon } = config

  // Darken the accent color for gradient effect
  const darkerColor = color + '33'
  const lighterColor = color + '11'

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1a1a2e"/>
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${color}"/>
      <stop offset="100%" stop-color="${color}88"/>
    </linearGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="${darkerColor}" stroke-width="0.5"/>
    </pattern>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#grid)" opacity="0.4"/>
  <circle cx="100" cy="100" r="200" fill="${lighterColor}" opacity="0.15"/>
  <circle cx="1100" cy="550" r="250" fill="${lighterColor}" opacity="0.1"/>
  <rect x="0" y="0" width="1200" height="6" fill="url(#accent)"/>
  <text x="600" y="260" text-anchor="middle" font-size="72" font-weight="800" fill="#ffffff" font-family="system-ui, -apple-system, sans-serif">${escapeXml(title)}</text>
  <text x="600" y="340" text-anchor="middle" font-size="26" fill="#94a3b8" font-family="system-ui, -apple-system, sans-serif">${escapeXml(subtitle)}</text>
  <rect x="480" y="380" width="240" height="4" rx="2" fill="url(#accent)" opacity="0.6"/>
  <text x="600" y="560" text-anchor="middle" font-size="18" fill="#475569" font-family="system-ui, -apple-system, sans-serif">wyattau.com</text>
</svg>`
}

function escapeXml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

let created = 0
let skipped = 0

for (const [slug, config] of Object.entries(siteConfig)) {
  const imgDir = path.join(SITES_DIR, slug, 'public', 'img')
  const svgPath = path.join(imgDir, 'social-card.svg')

  if (fs.existsSync(svgPath)) {
    console.log(`  skip  ${slug}/public/img/social-card.svg (exists)`)
    skipped++
    continue
  }

  fs.mkdirSync(imgDir, { recursive: true })
  fs.writeFileSync(svgPath, generateSVG(config))
  console.log(`  created  ${slug}/public/img/social-card.svg`)
  created++
}

console.log(`\nDone: ${created} created, ${skipped} skipped`)
