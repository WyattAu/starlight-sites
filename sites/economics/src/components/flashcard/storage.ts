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

/* ---- Deck content registry (wn-deck-<deckId>) ----
 *
 * SM-2 state (STORAGE_PREFIX above) only stores scheduling data, so a
 * GLOBAL review queue has no card content to show for decks whose page
 * is not currently open. FlashcardDeck registers its card content here
 * on mount; ReviewQueueHost reads the registry to review any deck from
 * anywhere on the site.
 */

const DECK_REGISTRY_PREFIX = 'wn-deck-'

export interface RegisteredCard {
  id: string
  front: string
  back: string
  tags?: string[]
}

export interface DeckRegistration {
  deckId: string
  registeredAt: number
  cards: RegisteredCard[]
}

/** Synthesize a stable per-page deck id when MDX does not pass one.
 *  Most decks historically fell back to 'undefined', sharing one bucket;
 *  path-based ids keep per-page decks isolated going forward. */
export function resolveDeckId(deckId: string | undefined, path?: string): string {
  if (deckId && deckId !== 'unknown' && deckId !== 'undefined') return deckId
  const p = path ?? (typeof location !== 'undefined' ? location.pathname : '/unknown/')
  return `deck::${p}`
}

export function registerDeckContent(
  deckId: string,
  cards: ReadonlyArray<RegisteredCard>,
  now: number = Date.now(),
): void {
  if (typeof localStorage === 'undefined' || !deckId || cards.length === 0) return
  const key = DECK_REGISTRY_PREFIX + deckId
  const normalized = JSON.stringify([...cards])
  try {
    const raw = localStorage.getItem(key)
    if (raw) {
      try {
        const existing = JSON.parse(raw) as DeckRegistration
        // Identical content: keep the original registration untouched so
        // registeredAt stays meaningful and we avoid write churn on mount.
        if (existing?.deckId === deckId && JSON.stringify(existing.cards) === normalized) return
      } catch {
        /* fall through and overwrite the corrupted entry */
      }
    }
    const next: DeckRegistration = { deckId, registeredAt: now, cards: [...cards] }
    localStorage.setItem(key, JSON.stringify(next))
  } catch {
    /* quota exceeded -- silently fail */
  }
}

export function getRegisteredDecks(): DeckRegistration[] {
  if (typeof localStorage === 'undefined') return []
  const out: DeckRegistration[] = []
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    if (!key?.startsWith(DECK_REGISTRY_PREFIX)) continue
    try {
      const parsed = JSON.parse(localStorage.getItem(key) ?? '') as DeckRegistration
      if (parsed?.deckId && Array.isArray(parsed.cards)) out.push(parsed)
    } catch {
      /* corrupted entry -- skip */
    }
  }
  return out
}

export function removeDeckRegistration(deckId: string): void {
  if (typeof localStorage === 'undefined') return
  try {
    localStorage.removeItem(DECK_REGISTRY_PREFIX + deckId)
  } catch {
    /* silently fail */
  }
}
