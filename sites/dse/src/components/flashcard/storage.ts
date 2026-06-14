/**
 * Flashcard deck persistence via localStorage.
 */

import type { CardState } from './sm2';

const STORAGE_PREFIX = 'wyattsnotes-spaced-rep-';

export interface ReviewEntry {
  cardId: string;
  rating: number;
  timestamp: number;
}

export interface DeckData {
  cardStates: Record<string, CardState>;
  reviewHistory: ReviewEntry[];
  lastStudyDate: number | null;
  streak: number;
}

export function loadDeck(deckId: string): DeckData | null {
  try {
    const raw = localStorage.getItem(STORAGE_PREFIX + deckId);
    if (!raw) return null;
    return JSON.parse(raw) as DeckData;
  } catch {
    return null;
  }
}

export function saveDeck(deckId: string, data: DeckData): void {
  try {
    localStorage.setItem(STORAGE_PREFIX + deckId, JSON.stringify(data));
  } catch {
    /* quota exceeded -- silently fail */
  }
}

export function calculateStreak(data: DeckData): number {
  if (!data.lastStudyDate) return 0;

  const streak = data.streak ?? 0;
  const lastDate = new Date(data.lastStudyDate).toDateString();
  const today = new Date().toDateString();
  const yesterday = new Date(Date.now() - 86400000).toDateString();

  if (lastDate === today || lastDate === yesterday) {
    return streak;
  }

  return 0;
}
