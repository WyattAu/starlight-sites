// Query suggestion generation (autocomplete + zero-result recovery).
// @ts-check

import { COMMON_QUERIES } from './config.js'

/**
 * Generate query suggestions for a prefix query.
 * Combines trending queries (by recency-weighted count) and curated common
 * queries that contain the query substring.
 * @param {string} query - lowercased prefix
 * @param {Array<{query:string,count:number}>} trending - trending queries
 * @returns {Array<{query:string,count:number}>}
 */
function generateSuggestions(query, trending) {
  const suggestions = trending
    .filter(t => t.query.toLowerCase().includes(query))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5)
    .map(t => ({ query: t.query, count: t.count }))

  for (const q of COMMON_QUERIES) {
    if (q.includes(query) && !suggestions.find(s => s.query === q)) {
      suggestions.push({ query: q, count: 0 })
    }
  }
  return suggestions
}

export { generateSuggestions }
