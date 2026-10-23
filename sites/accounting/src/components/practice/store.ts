/**
 * Practice outcome persistence via localStorage.
 *
 * Outcomes are keyed by page path so mastery aggregation can attribute
 * results to topics without extra props flowing through generated MDX.
 *
 * Storage shape (wn-practice-<path>):
 *   { attempts, correct, lastPracticed, recent: [{ t, c }] }
 *
 * `recent` holds the last MAX_RECENT outcomes (oldest first) so the
 * mastery model can weight recent performance without unbounded growth.
 */

const PRACTICE_PREFIX = 'wn-practice-'
const MAX_RECENT = 20

export interface PracticeOutcome {
  t: number
  c: 0 | 1
}

export interface PracticeStats {
  attempts: number
  correct: number
  lastPracticed: number
  recent: PracticeOutcome[]
}

export function normalizePath(path: string): string {
  if (!path) return '/'
  let p = path.split('?')[0] ?? '/'
  p = p.split('#')[0] ?? '/'
  if (!p.endsWith('/')) p += '/'
  return p || '/'
}

function readKey(key: string): PracticeStats | null {
  try {
    const raw = localStorage.getItem(key)
    if (!raw) return null
    const parsed = JSON.parse(raw) as PracticeStats
    if (typeof parsed?.attempts !== 'number') return null
    return parsed
  } catch {
    return null
  }
}

export function loadPracticeStats(path: string): PracticeStats | null {
  if (typeof localStorage === 'undefined') return null
  return readKey(PRACTICE_PREFIX + normalizePath(path))
}

export function recordPracticeOutcome(
  path: string,
  correct: boolean,
  now: number = Date.now(),
): PracticeStats {
  const key = PRACTICE_PREFIX + normalizePath(path)
  const prev = readKey(key)
  const entry: PracticeOutcome = { t: now, c: correct ? 1 : 0 }

  const recent = [...(prev?.recent ?? []), entry].slice(-MAX_RECENT)

  const stats: PracticeStats = {
    attempts: (prev?.attempts ?? 0) + 1,
    correct: (prev?.correct ?? 0) + (correct ? 1 : 0),
    lastPracticed: now,
    recent,
  }

  try {
    localStorage.setItem(key, JSON.stringify(stats))
  } catch {
    /* quota exceeded -- silently fail */
  }

  return stats
}

export function listPracticedTopics(): Array<{ path: string; stats: PracticeStats }> {
  if (typeof localStorage === 'undefined') return []
  const out: Array<{ path: string; stats: PracticeStats }> = []
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    if (!key?.startsWith(PRACTICE_PREFIX)) continue
    const stats = readKey(key)
    if (stats) out.push({ path: key.slice(PRACTICE_PREFIX.length), stats })
  }
  return out.sort((a, b) => b.stats.lastPracticed - a.stats.lastPracticed)
}

export function accuracyOf(stats: PracticeStats | null): number | null {
  if (!stats || stats.attempts === 0) return null
  return stats.correct / stats.attempts
}
