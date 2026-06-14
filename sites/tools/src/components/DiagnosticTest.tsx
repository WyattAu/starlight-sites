/**
 * DiagnosticTest -- Adaptive diagnostic assessment component.
 *
 * Selects questions dynamically based on user performance,
 * targeting weak topics and appropriate difficulty levels.
 */

import { createSignal, createEffect, createMemo, onCleanup, For, Show } from 'solid-js';
import { sanitizeHtml } from '../utils/sanitize';
import { COLORS, DIFFICULTY_COLORS } from '../utils/colors';

export interface DiagnosticQuestion {
  id: string;
  topic: string;
  difficulty: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface TopicResult {
  topic: string;
  correct: number;
  total: number;
  score: number;
  level: 'strong' | 'moderate' | 'weak';
}

export interface DiagnosticResult {
  subject: string;
  totalQuestions: number;
  totalCorrect: number;
  overallScore: number;
  topicResults: TopicResult[];
  strengths: string[];
  weaknesses: string[];
  recommendedTopics: string[];
  timeSpentMs: number;
}

interface DiagnosticTestProps {
  subject: string;
  questions: DiagnosticQuestion[];
  maxQuestions?: number;
  onComplete: (results: DiagnosticResult) => void;
}

const LABELS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'] as const;

function getLevel(score: number): 'strong' | 'moderate' | 'weak' {
  if (score >= 0.8) return 'strong';
  if (score >= 0.5) return 'moderate';
  return 'weak';
}

/**
 * Adaptive question selection.
 *
 * Strategy:
 * 1. If no answers yet, pick a medium-difficulty question from a random topic.
 * 2. After answers, compute average performance per topic.
 * 3. Target difficulty = round(average_score * 5), clamped to [1,5].
 * 4. Prioritize weak topics (score < 60%).
 * 5. Fall back to any available question if no candidates match.
 */
function pickNextQuestion(
  pool: DiagnosticQuestion[],
  asked: Set<string>,
  topicScores: Map<string, { correct: number; total: number }>,
): DiagnosticQuestion | null {
  const remaining = pool.filter((q) => !asked.has(q.id));
  if (remaining.length === 0) return null;

  // Compute average performance across all topics
  const scores = Array.from(topicScores.values());
  const avgPerf = scores.length > 0
    ? scores.reduce((s, t) => s + (t.total > 0 ? t.correct / t.total : 0.5), 0) / scores.length
    : 0.5;

  // Target difficulty: map 0..1 performance to 1..5 difficulty
  const targetDiff = Math.max(1, Math.min(5, Math.round(avgPerf * 5)));

  // Find weak topics (score < 60% with at least 1 answer)
  const weakTopics = Array.from(topicScores.entries())
    .filter(([, s]) => s.total > 0 && s.correct / s.total < 0.6)
    .map(([t]) => t);

  // Priority 1: Weak topics at target difficulty
  let candidates = remaining.filter(
    (q) => weakTopics.includes(q.topic) && q.difficulty === targetDiff,
  );

  // Priority 2: Weak topics at any difficulty
  if (candidates.length === 0) {
    candidates = remaining.filter((q) => weakTopics.includes(q.topic));
  }

  // Priority 3: Any topic at target difficulty
  if (candidates.length === 0) {
    candidates = remaining.filter((q) => q.difficulty === targetDiff);
  }

  // Priority 4: Any remaining question
  if (candidates.length === 0) {
    candidates = remaining;
  }

  // Random selection from candidates
  return candidates[Math.floor(Math.random() * candidates.length)];
}

function computeResults(
  answers: Map<string, number>,
  questions: DiagnosticQuestion[],
  elapsed: number,
  subject: string,
): DiagnosticResult {
  const topicMap = new Map<string, { correct: number; total: number }>();

  for (const [qid, a] of answers) {
    const q = questions.find((qq) => qq.id === qid);
    if (!q) continue;
    const prev = topicMap.get(q.topic) ?? { correct: 0, total: 0 };
    topicMap.set(q.topic, {
      correct: prev.correct + (a === q.correctIndex ? 1 : 0),
      total: prev.total + 1,
    });
  }

  const topicResults: TopicResult[] = Array.from(topicMap.entries()).map(([topic, s]) => ({
    topic,
    correct: s.correct,
    total: s.total,
    score: s.total > 0 ? s.correct / s.total : 0,
    level: getLevel(s.total > 0 ? s.correct / s.total : 0),
  }));

  topicResults.sort((a, b) => a.score - b.score);

  const strengths = topicResults.filter((t) => t.level === 'strong').map((t) => t.topic);
  const weaknesses = topicResults.filter((t) => t.level === 'weak').map((t) => t.topic);
  const recommendedTopics = topicResults.filter((t) => t.level !== 'strong').map((t) => t.topic);

  let totalCorrect = 0;
  for (const [qid, a] of answers) {
    const q = questions.find((qq) => qq.id === qid);
    if (q && a === q.correctIndex) totalCorrect++;
  }

  return {
    subject,
    totalQuestions: answers.size,
    totalCorrect,
    overallScore: answers.size > 0 ? totalCorrect / answers.size : 0,
    topicResults,
    strengths,
    weaknesses,
    recommendedTopics,
    timeSpentMs: elapsed,
  };
}

function formatTime(ms: number): string {
  const secs = Math.floor(ms / 1000);
  const mins = Math.floor(secs / 60);
  const rem = secs % 60;
  return mins > 0 ? `${mins}:${String(rem).padStart(2, '0')}` : `${rem}s`;
}

export default function DiagnosticTest(props: DiagnosticTestProps) {
  const maxQ = props.maxQuestions ?? Math.min(props.questions.length, 15);

  const [getAskedIds, setAskedIds] = createSignal(new Set<string>());
  const [getAnswers, setAnswers] = createSignal(new Map<string, number>());
  const [getSelected, setSelected] = createSignal<number | null>(null);
  const [getSubmitted, setSubmitted] = createSignal(false);
  const [getShowResults, setShowResults] = createSignal(false);
  const [getTopicScores, setTopicScores] = createSignal(
    new Map<string, { correct: number; total: number }>(),
  );
  const [getStartTime] = createSignal(Date.now());
  const [getElapsed, setElapsed] = createSignal(0);

  // Dynamic question selection: compute next question based on current scores
  const currentQuestion = createMemo(() => {
    return pickNextQuestion(props.questions, getAskedIds(), getTopicScores());
  });

  const progress = createMemo(() => getAskedIds().size);
  const isComplete = createMemo(() => progress() >= maxQ || currentQuestion() === null);

  createEffect(() => {
    if (getShowResults()) return;
    const start = getStartTime();
    const interval = setInterval(() => setElapsed(Date.now() - start), 1000);
    onCleanup(() => clearInterval(interval));
  });

  const handleSelect = (index: number) => {
    if (!getSubmitted()) setSelected(index);
  };

  const handleSubmit = () => {
    const sel = getSelected();
    const q = currentQuestion();
    if (sel === null || !q) return;

    setSubmitted(true);
    const newAnswers = new Map(getAnswers());
    newAnswers.set(q.id, sel);
    setAnswers(newAnswers);

    const newAsked = new Set(getAskedIds());
    newAsked.add(q.id);
    setAskedIds(newAsked);

    const prev = getTopicScores().get(q.topic) ?? { correct: 0, total: 0 };
    setTopicScores(
      new Map(getTopicScores()).set(q.topic, {
        correct: prev.correct + (sel === q.correctIndex ? 1 : 0),
        total: prev.total + 1,
      }),
    );
  };

  const handleNext = () => {
    if (isComplete()) {
      const results = computeResults(getAnswers(), props.questions, getElapsed(), props.subject);
      setShowResults(true);
      props.onComplete(results);
      return;
    }
    setSelected(null);
    setSubmitted(false);
  };

  const result = createMemo(() => {
    if (!getShowResults() || getAnswers().size === 0) return null;
    return computeResults(getAnswers(), props.questions, getElapsed(), props.subject);
  });

  // --- Views ---

  if (props.questions.length === 0) {
    return (
      <div class="diagnostic-test diagnostic-test--empty" role="region" aria-label="Diagnostic test">
        No questions available.
      </div>
    );
  }

  if (getShowResults() && result()) {
    const r = result()!;
    return (
      <div class="diagnostic-test" role="region" aria-label="Diagnostic test results">
        <h3 class="diagnostic-title">Results: {r.subject}</h3>
        <div class="diagnostic-score-row">
          <div class="diagnostic-score-card">
            <div class="diagnostic-score-value">{Math.round(r.overallScore * 100)}%</div>
            <div class="diagnostic-score-label">Overall Score</div>
          </div>
          <div class="diagnostic-score-card">
            <div class="diagnostic-score-value">{r.totalCorrect}/{r.totalQuestions}</div>
            <div class="diagnostic-score-label">Correct</div>
          </div>
          <div class="diagnostic-score-card">
            <div class="diagnostic-score-value">{formatTime(r.timeSpentMs)}</div>
            <div class="diagnostic-score-label">Time</div>
          </div>
        </div>

        <h4>Topic Breakdown</h4>
        <div class="diagnostic-topic-list">
          <For each={r.topicResults}>
            {(t) => (
              <div class="diagnostic-topic-item">
                <span class="diagnostic-topic-name">{t.topic}</span>
                <span class="diagnostic-topic-score" style={{ color: getLevelColor(t.level) }}>
                  {Math.round(t.score * 100)}% ({t.correct}/{t.total})
                </span>
                <span class="diagnostic-topic-level" style={{ color: getLevelColor(t.level) }}>
                  {t.level}
                </span>
              </div>
            )}
          </For>
        </div>

        <Show when={r.strengths.length > 0}>
          <div class="diagnostic-section">
            <h4>Strengths</h4>
            <div class="diagnostic-tag-list">
              <For each={r.strengths}>
                {(s) => <span class="diagnostic-tag diagnostic-tag--strong">{s}</span>}
              </For>
            </div>
          </div>
        </Show>

        <Show when={r.weaknesses.length > 0}>
          <div class="diagnostic-section">
            <h4>Weaknesses</h4>
            <div class="diagnostic-tag-list">
              <For each={r.weaknesses}>
                {(w) => <span class="diagnostic-tag diagnostic-tag--weak">{w}</span>}
              </For>
            </div>
          </div>
        </Show>

        <Show when={r.recommendedTopics.length > 0}>
          <div class="diagnostic-section">
            <h4>Recommended Review</h4>
            <div class="diagnostic-tag-list">
              <For each={r.recommendedTopics}>
                {(t) => <span class="diagnostic-tag diagnostic-tag--review">{t}</span>}
              </For>
            </div>
          </div>
        </Show>
      </div>
    );
  }

  const q = currentQuestion();
  if (!q) return null;

  return (
    <div class="diagnostic-test" role="region" aria-label={`Diagnostic test: ${props.subject}`}>
      <div class="diagnostic-header">
        <span class="diagnostic-progress">Question {progress() + 1} of {maxQ}</span>
        <span class="diagnostic-timer">{formatTime(getElapsed())}</span>
      </div>

      <div class="diagnostic-question">
        <span class="diagnostic-topic-badge">{q.topic}</span>
        <span class="diagnostic-difficulty-badge">Difficulty {q.difficulty}</span>
        <p class="diagnostic-question-text">{q.question}</p>
      </div>

      <div class="diagnostic-options" role="radiogroup" aria-label="Answer options">
        <For each={q.options}>
          {(opt, i) => (
            <button
              type="button"
              class={`diagnostic-option ${getSubmitted() ? (i() === q.correctIndex ? 'diagnostic-option--correct' : (getSelected() === i() ? 'diagnostic-option--wrong' : '')) : (getSelected() === i() ? 'diagnostic-option--selected' : '')}`}
              onClick={() => handleSelect(i())}
              disabled={getSubmitted()}
              role="radio"
              aria-checked={getSelected() === i()}
            >
              <span class="diagnostic-option-label">{LABELS[i()]}</span>
              <span class="diagnostic-option-text">{opt}</span>
            </button>
          )}
        </For>
      </div>

      <Show when={getSubmitted()}>
        <div class="diagnostic-explanation">
          <strong>Explanation:</strong>
          <div innerHTML={sanitizeHtml(q.explanation)} />
        </div>
      </Show>

      <div class="diagnostic-actions">
        <Show when={!getSubmitted()}>
          <button
            type="button"
            class="diagnostic-btn diagnostic-btn--primary"
            disabled={getSelected() === null}
            onClick={handleSubmit}
          >
            Submit
          </button>
        </Show>
        <Show when={getSubmitted()}>
          <button
            type="button"
            class="diagnostic-btn diagnostic-btn--primary"
            onClick={handleNext}
          >
            {isComplete() ? 'View Results' : 'Next Question'}
          </button>
        </Show>
      </div>
    </div>
  );
}
