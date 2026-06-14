/**
 * FlashcardDeck -- Spaced repetition flashcard component.
 *
 * Uses SM-2 algorithm for scheduling reviews.
 * Persists progress to localStorage.
 *
 * Split into modules:
 *   flashcard/sm2.ts        -- SM-2 algorithm and types
 *   flashcard/storage.ts    -- localStorage persistence
 *   flashcard/constants.ts  -- UI constants and config
 */

import { createSignal, createEffect, createMemo, onCleanup, For } from 'solid-js';
import {
  type Rating,
  type CardState,
  DEFAULT_EASE,
  createDefaultState,
  applySM2,
  isDue,
  getMasteryLevel,
} from './flashcard/sm2';
import { type DeckData, loadDeck, saveDeck, calculateStreak } from './flashcard/storage';
import {
  MASTERY_LABELS,
  MASTERY_COLORS,
  RATING_CONFIG,
  type View,
} from './flashcard/constants';

export interface Flashcard {
  id: string;
  front: string;
  back: string;
  tags: string[];
  difficulty?: 'easy' | 'medium' | 'hard';
}

export interface FlashcardDeckProps {
  cards: Flashcard[];
  deckId: string;
  title?: string;
  description?: string;
}

// Re-export types for backward compatibility
export type { Rating, CardState, DeckData, View } from './flashcard/sm2';
export { applySM2, isDue, getMasteryLevel } from './flashcard/sm2';
export { loadDeck, saveDeck, calculateStreak } from './flashcard/storage';

const RatingButton = (props: {
  config: (typeof RATING_CONFIG)[number];
  onClick: (rating: Rating) => void;
  disabled: boolean;
}) => {
  return (
    <button
      type="button"
      disabled={props.disabled}
      onClick={() => props.onClick(props.config.key)}
      aria-label={`${props.config.label} (${props.config.shortcut})`}
      class="flashcard-rating-btn"
      style={{ '--rating-color': props.config.color } as Record<string, string>}
    >
      {props.config.label}
      <span class="flashcard-rating-shortcut">{props.config.shortcut}</span>
    </button>
  );
};

function StatBox(props: {
  label: string;
  value: string | number;
  highlight?: boolean;
}) {
  return (
    <div class={`flashcard-stat ${props.highlight ? 'flashcard-stat--highlight' : ''}`}>
      <div class="flashcard-stat-value">{props.value}</div>
      <div class="flashcard-stat-label">{props.label}</div>
    </div>
  );
}

function ActionButton(props: {
  label: string;
  onClick: () => void;
  primary?: boolean;
  danger?: boolean;
  disabled?: boolean;
}) {
  const cls = [
    'flashcard-action-btn',
    props.primary && 'flashcard-action-btn--primary',
    props.danger && 'flashcard-action-btn--danger',
  ].filter(Boolean).join(' ');

  return (
    <button
      type="button"
      onClick={props.onClick}
      disabled={props.disabled}
      class={cls}
    >
      {props.label}
    </button>
  );
}

export default function FlashcardDeck(props: FlashcardDeckProps) {
  const [getDeckData, setDeckData] = createSignal<DeckData | null>(loadDeck(props.deckId));
  const [getView, setView] = createSignal<View>('deck');
  const [getFlipped, setFlipped] = createSignal(false);
  const [getCurrentIndex, setCurrentIndex] = createSignal(0);
  const [getDueQueue, setDueQueue] = createSignal<string[]>([]);
  let containerRef: HTMLDivElement | undefined;
  let cardRef: HTMLDivElement | undefined;

  const now = Date.now();

  const cardStates = createMemo(() => {
    const states: Record<string, CardState> = {};
    for (const card of props.cards) {
      states[card.id] = getDeckData()?.cardStates[card.id] ?? createDefaultState();
    }
    return states;
  });

  const dueCards = createMemo(() => props.cards.filter((c) => isDue(cardStates()[c.id], now)));

  const masteryBreakdown = createMemo(() => {
    const counts = { new: 0, learning: 0, review: 0, mastered: 0 };
    for (const card of props.cards) {
      counts[getMasteryLevel(cardStates()[card.id])]++;
    }
    return counts;
  });

  const masteredCount = createMemo(() => masteryBreakdown().mastered);
  const masteryPercent = createMemo(() =>
    props.cards.length > 0 ? Math.round((masteredCount() / props.cards.length) * 100) : 0,
  );

  const avgEase = createMemo(() => {
    if (props.cards.length === 0) return DEFAULT_EASE;
    const sum = props.cards.reduce((acc, c) => acc + cardStates()[c.id].easeFactor, 0);
    return sum / props.cards.length;
  });

  const streak = createMemo(() => getDeckData() ? calculateStreak(getDeckData()!) : 0);
  const totalReviews = createMemo(() => getDeckData()?.reviewHistory.length ?? 0);

  const persistData = (next: DeckData) => {
    saveDeck(props.deckId, next);
    setDeckData(next);
  };

  const startReview = () => {
    const due = props.cards.filter((c) => isDue(cardStates()[c.id], Date.now()));
    if (due.length === 0) return;
    setDueQueue(due.map((c) => c.id));
    setCurrentIndex(0);
    setFlipped(false);
    setView('review');
    setTimeout(() => cardRef?.focus(), 50);
  };

  const handleRate = (rating: Rating) => {
    if (getCurrentIndex() >= getDueQueue().length) return;
    const cardId = getDueQueue()[getCurrentIndex()];
    const prevState = cardStates()[cardId] ?? createDefaultState();
    const newState = applySM2(prevState, rating, Date.now());
    const entry = { cardId, rating, timestamp: Date.now() };
    const lastStudyDate = Date.now();
    const prevStreak = getDeckData() ? calculateStreak(getDeckData()!) : 0;
    const lastDate = getDeckData()?.lastStudyDate
      ? new Date(getDeckData()!.lastStudyDate).toDateString() : '';
    const today = new Date().toDateString();
    const newStreak = lastDate === today ? prevStreak : prevStreak + 1;

    const next: DeckData = {
      cardStates: { ...(getDeckData()?.cardStates ?? {}), [cardId]: newState },
      reviewHistory: [...(getDeckData()?.reviewHistory ?? []), entry],
      lastStudyDate,
      streak: newStreak,
    };

    persistData(next);

    if (getCurrentIndex() + 1 < getDueQueue().length) {
      setCurrentIndex(getCurrentIndex() + 1);
      setFlipped(false);
    } else {
      setView('deck');
      setDueQueue([]);
    }
  };

  const handleReset = () => {
    persistData({ cardStates: {}, reviewHistory: [], lastStudyDate: null, streak: 0 });
    setView('deck');
  };

  const handleExport = () => {
    const data = getDeckData() ?? { cardStates: {}, reviewHistory: [], lastStudyDate: null, streak: 0 };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${props.deckId}-progress.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImport = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = () => {
      const file = input.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const data = JSON.parse(reader.result as string) as DeckData;
          if (data.cardStates) persistData(data);
        } catch { /* invalid JSON */ }
      };
      reader.readAsText(file);
    };
    input.click();
  };

  createEffect(() => {
    if (getView() !== 'review') return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === ' ' || e.key === 'Spacebar') {
        e.preventDefault();
        setFlipped(!getFlipped());
      } else if (getFlipped() && e.key >= '1' && e.key <= '4') {
        e.preventDefault();
        handleRate(Number(e.key) as Rating);
      }
    };
    document.addEventListener('keydown', handler);
    onCleanup(() => document.removeEventListener('keydown', handler));
  });

  const currentCardId = createMemo(() => getDueQueue()[getCurrentIndex()] ?? null);
  const currentCard = createMemo(() => {
    const id = currentCardId();
    return id ? props.cards.find((c) => c.id === id) : null;
  });

  const prefersReducedMotion = () =>
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (props.cards.length === 0) {
    return (
      <div role="region" aria-label="Flashcard deck empty" class="flashcard-deck flashcard-deck--empty">
        No cards in this deck.
      </div>
    );
  }

  return (
    <div
      ref={(el) => { containerRef = el; }}
      role="region"
      aria-label={props.title ? `Flashcard deck: ${props.title}` : 'Flashcard deck'}
      class="flashcard-deck"
    >
      {getView() === 'deck' && (
        <div class="flashcard-deck-view">
          {props.title && <h3 class="flashcard-title">{props.title}</h3>}
          {props.description && <p class="flashcard-description">{props.description}</p>}

          <div class="flashcard-stats-row">
            <StatBox label="Total Cards" value={props.cards.length} />
            <StatBox label="Due Today" value={dueCards().length} highlight={dueCards().length > 0} />
            <StatBox label="Mastered" value={masteredCount()} />
            <StatBox label="Streak" value={`${streak()}d`} />
          </div>

          <div class="flashcard-mastery-row">
            <For each={Object.entries(masteryBreakdown())}>
              {([level, count]) => (
                <span class="flashcard-mastery-badge" style={{ background: MASTERY_COLORS[level] }}>
                  {MASTERY_LABELS[level]}: {count}
                </span>
              )}
            </For>
          </div>

          <div class="flashcard-progress">
            <div class="flashcard-progress-header">
              <span>Mastery</span>
              <span>{masteryPercent()}%</span>
            </div>
            <div class="flashcard-progress-bar">
              <div class="flashcard-progress-fill" style={{ width: `${masteryPercent()}%` }} />
            </div>
          </div>

          <div class="flashcard-actions">
            <ActionButton label="Study Now" disabled={dueCards().length === 0} onClick={startReview} primary />
            <ActionButton label="Stats" onClick={() => setView('stats')} />
            <ActionButton label="Settings" onClick={() => setView('settings')} />
          </div>
        </div>
      )}

      {getView() === 'review' && (
        <div class="flashcard-review-view">
          <div class="flashcard-review-counter">
            Card {getCurrentIndex() + 1} of {getDueQueue().length}
          </div>

          <div class="flashcard-flip-container" style={{ perspective: '1000px' }}>
            <div
              ref={(el) => { cardRef = el; }}
              tabIndex={0}
              role="button"
              aria-label={getFlipped() ? 'Card answer shown. Rate your recall.' : 'Card question. Press Space to flip.'}
              onClick={() => setFlipped(!getFlipped())}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setFlipped(!getFlipped());
                }
              }}
              class="flashcard-flip-inner"
              style={{
                transform: getFlipped() ? 'rotateY(180deg)' : 'rotateY(0)',
                transition: prefersReducedMotion() ? 'none' : 'transform 0.6s',
              }}
            >
              <div class="flashcard-face flashcard-face--front">
                <div class="flashcard-face-label">QUESTION</div>
                <div class="flashcard-face-content">{currentCard()?.front}</div>
              </div>
              <div class="flashcard-face flashcard-face--back">
                <div class="flashcard-face-label">ANSWER</div>
                <div class="flashcard-face-content">{currentCard()?.back}</div>
              </div>
            </div>
          </div>

          <div class="flashcard-rating-row" style={{ opacity: getFlipped() ? 1 : 0.3, pointerEvents: getFlipped() ? 'auto' : 'none' }}>
            <For each={RATING_CONFIG}>
              {(cfg) => <RatingButton config={cfg} onClick={handleRate} disabled={!getFlipped()} />}
            </For>
          </div>

          <div class="flashcard-exit-row">
            <button type="button" class="flashcard-exit-btn" onClick={() => { setView('deck'); setDueQueue([]); }}>
              Exit Review
            </button>
          </div>
        </div>
      )}

      {getView() === 'stats' && (
        <div class="flashcard-stats-view">
          <h3 class="flashcard-title">Statistics</h3>
          <div class="flashcard-stats-row">
            <StatBox label="Cards Mastered" value={masteredCount()} />
            <StatBox label="Cards Learning" value={masteryBreakdown().learning + masteryBreakdown().review} />
            <StatBox label="Cards New" value={masteryBreakdown().new} />
            <StatBox label="Review Streak" value={`${streak()} days`} />
            <StatBox label="Total Reviews" value={totalReviews()} />
            <StatBox label="Avg Ease Factor" value={avgEase().toFixed(2)} />
          </div>
          <div class="flashcard-mastery-row">
            <For each={Object.entries(masteryBreakdown())}>
              {([level, count]) => (
                <span class="flashcard-mastery-badge" style={{ background: MASTERY_COLORS[level] }}>
                  {MASTERY_LABELS[level]}: {count}
                </span>
              )}
            </For>
          </div>
          <ActionButton label="Back" onClick={() => setView('deck')} />
        </div>
      )}

      {getView() === 'settings' && (
        <div class="flashcard-settings-view">
          <h3 class="flashcard-title">Settings</h3>
          <div class="flashcard-actions">
            <ActionButton label="Export Progress" onClick={handleExport} />
            <ActionButton label="Import Progress" onClick={handleImport} />
            <ActionButton label="Reset Deck" onClick={handleReset} danger />
          </div>
          <div style={{ marginTop: 20 }}>
            <ActionButton label="Back" onClick={() => setView('deck')} />
          </div>
        </div>
      )}
    </div>
  );
}
