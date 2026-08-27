/**
 * site-data.ts — Derived site metadata from sites.meta.json (SSOT)
 *
 * This file derives the site list from sites.meta.json,
 * ensuring a single source of truth for all site references.
 * Never hand-copy site lists — always import from here.
 */

import siteMeta from '../../sites.meta.json'

export interface Site {
  name: string
  url: string
  category: string
  color: string
}

// Category mapping for sites
const CATEGORY_MAP: Record<string, string> = {
  // Exam Boards
  dse: 'Exam Boards', ib: 'Exam Boards', alevel: 'Exam Boards',
  gcse: 'Exam Boards', ap: 'Exam Boards', highers: 'Exam Boards',
  'leaving-cert': 'Exam Boards', cbse: 'Exam Boards', gaokao: 'Exam Boards',
  hsc: 'Exam Boards', sat: 'Exam Boards',

  // Computer Science
  cpp: 'Computer Science', java: 'Computer Science', python: 'Computer Science',
  rust: 'Computer Science', go: 'Computer Science', kotlin: 'Computer Science',
  typescript: 'Computer Science', dart: 'Computer Science', swift: 'Computer Science',
  ruby: 'Computer Science', haskell: 'Computer Science', elixir: 'Computer Science',
  languages: 'Computer Science', tools: 'Computer Science',

  // Further Studies
  mathematics: 'Further Studies', physics: 'Further Studies',
  chemistry: 'Further Studies', 'computer-science': 'Further Studies',
  admissions: 'Further Studies', 'machine-learning': 'Further Studies',

  // Infrastructure
  networking: 'Infrastructure', linux: 'Infrastructure', security: 'Infrastructure',
  databases: 'Infrastructure', truenas: 'Infrastructure', tuning: 'Infrastructure',
  licensing: 'Infrastructure',

  // Driving
  'driving-us': 'Driving', 'driving-uk': 'Driving', 'driving-eu': 'Driving',

  // Other
  'civics-tests': 'Civics', 'professional-certs': 'Professional',
  'language-tests': 'Language Tests',
}

// Derive site list from sites.meta.json
export const sites: Site[] = Object.entries(siteMeta.sites).map(([slug, data]) => ({
  name: data.name,
  url: `https://${slug}.wyattau.com`,
  category: CATEGORY_MAP[slug] || 'Other',
  color: data.color,
}))

// Export categories for use in components
export const categories = [...new Set(sites.map(s => s.category))]
