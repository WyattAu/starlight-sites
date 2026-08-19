/**
 * Flashcard deck persistence via localStorage.
 */

import type { CardState } from './sm2'

const STORAGE_PREFIX = 'wyattsnotes-spaced-rep-'
const STREAK_STORAGE_KEY = 'wn-streak'

export interface ReviewEntry {
  cardId: string
  rating: number
  timestamp: number
}

export interface DeckData {
  cardStates: Record<string, CardState>
  reviewHistory: ReviewEntry[]
  lastStudyDate: number | null
  streak: number
}

export function loadDeck(deckId: string): DeckData | null {
  try {
    const raw = localStorage.getItem(STORAGE_PREFIX + deckId)
    if (!raw) return null
    return JSON.parse(raw) as DeckData
  } catch {
    return null
  }
}

export function saveDeck(deckId: string, data: DeckData): void {
  try {
    localStorage.setItem(STORAGE_PREFIX + deckId, JSON.stringify(data))
  } catch {
    /* quota exceeded -- silently fail */
  }
}

export function calculateStreak(data: DeckData): number {
  if (!data.lastStudyDate) return 0

  const streak = data.streak ?? 0
  const lastDate = new Date(data.lastStudyDate).toDateString()
  const today = new Date().toDateString()
  const yesterday = new Date(Date.now() - 86400000).toDateString()

  if (lastDate === today || lastDate === yesterday) {
    return streak
  }

  return 0
}

/* ---- Global streak tracking (wn-street) ---- */

function getReviewDates(): string[] {
  try {
    const raw = localStorage.getItem(STREAK_STORAGE_KEY)
    return raw ? (JSON.parse(raw) as string[]) : []
  } catch {
    return []
  }
}

export function recordReview(): void {
  const today = new Date().toISOString().slice(0, 10)
  const dates = getReviewDates()
  if (!dates.includes(today)) {
    dates.push(today)
    try {
      localStorage.setItem(STREAK_STORAGE_KEY, JSON.stringify(dates))
    } catch {
      /* silently fail */
    }
  }
}

export function getStreak(): number {
  const dates = [...new Set(getReviewDates())].sort((a, b) => b.localeCompare(a))
  if (dates.length === 0) return 0

  const fmt = (d: Date) => d.toISOString().slice(0, 10)
  const today = new Date()
  const yesterday = new Date(today)
  yesterday.setDate(yesterday.getDate() - 1)

  // Anchor the run at today if studied today, else yesterday if studied
  // yesterday (streak not yet broken); otherwise the streak is 0.
  let anchor: Date
  const first = dates[0]
  if (first === fmt(today)) {
    anchor = today
  } else if (first === fmt(yesterday)) {
    anchor = yesterday
  } else {
    return 0
  }

  // Walk backwards day by day from the anchor. (The previous implementation
  // compared every entry against today-i even when the run ended yesterday,
  // collapsing multi-day runs to length 1 -- caught by the streak tests.)
  let streak = 0
  for (let i = 0; i < dates.length; i++) {
    const check = new Date(anchor)
    check.setDate(anchor.getDate() - i)
    if (dates[i] === fmt(check)) {
      streak++
    } else {
      break
    }
  }

  return streak
}

export function getLongestStreak(): number {
  const dates = [...new Set(getReviewDates())].sort()
  if (dates.length === 0) return 0

  let longest = 1
  let current = 1

  for (let i = 1; i < dates.length; i++) {
    const prevDate = dates[i - 1]
    const currDate = dates[i]
    if (prevDate === undefined || currDate === undefined) continue
    const prev = new Date(prevDate)
    const curr = new Date(currDate)
    const diffMs = curr.getTime() - prev.getTime()
    const diffDays = Math.round(diffMs / 86400000)

    if (diffDays === 1) {
      current++
    } else {
      longest = Math.max(longest, current)
      current = 1
    }
  }

  return Math.max(longest, current)
}

export function getTotalReviews(): number {
  let total = 0
  for (const id of listDecks()) {
    const data = loadDeck(id)
    if (data) total += data.reviewHistory.length
  }
  return total
}

export function listDecks(): string[] {
  const decks: string[] = []
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    if (key?.startsWith(STORAGE_PREFIX)) {
      decks.push(key.slice(STORAGE_PREFIX.length))
    }
  }
  return decks
}
