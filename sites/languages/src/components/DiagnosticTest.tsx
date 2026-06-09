import { createSignal, createEffect, createMemo, onCleanup, For, Show } from 'solid-js';
import { sanitizeHtml } from '../utils/sanitize';

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
  onComplete: (results: DiagnosticResult) => void;
}

const LABELS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'] as const;

function getLevel(score: number): 'strong' | 'moderate' | 'weak' {
  if (score >= 0.8) {
    return 'strong';
  }
  if (score >= 0.5) {
    return 'moderate';
  }

  return 'weak';
}

function getLevelColor(level: 'strong' | 'moderate' | 'weak'): string {
  if (level === 'strong') {
    return '#2ecc71';
  }
  if (level === 'moderate') {
    return '#f39c12';
  }

  return '#e74c3c';
}

function pickNextQuestion(
  pool: DiagnosticQuestion[],
  asked: Set<string>,
  topicScores: Map<string, { correct: number; total: number }>,
): DiagnosticQuestion | null {
  const remaining = pool.filter((q) => !asked.has(q.id));

  if (remaining.length === 0) {
    return null;
  }

  const avgDiff =
    Array.from(topicScores.values()).length > 0
      ? Array.from(topicScores.values()).reduce((s, t) => s + (t.correct / t.total) * 5, 0) /
        Array.from(topicScores.values()).length
      : 3;

  const targetDiff = Math.max(1, Math.min(5, Math.round(avgDiff)));

  let candidates = remaining.filter((q) => q.difficulty === targetDiff);

  if (candidates.length === 0) {
    candidates = remaining;
  }

  const weakTopics = Array.from(topicScores.entries())
    .filter(([, s]) => s.total > 0 && s.correct / s.total < 0.6)
    .map(([t]) => t);

  if (weakTopics.length > 0) {
    const weakCandidates = candidates.filter((q) => weakTopics.includes(q.topic));

    if (weakCandidates.length > 0) {
      candidates = weakCandidates;
    }
  }

  return candidates[Math.floor(Math.random() * candidates.length)] ?? remaining[0];
}

function formatTime(ms: number): string {
  const secs = Math.floor(ms / 1000);
  const mins = Math.floor(secs / 60);
  const rem = secs % 60;

  return mins > 0 ? `${mins}:${String(rem).padStart(2, '0')}` : `${rem}s`;
}

export default function DiagnosticTest(props: DiagnosticTestProps) {
  const [getCurrentIndex, setCurrentIndex] = createSignal(0);
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
  const showTimer = true;

  const questionOrder = createMemo(() => {
    const maxQ = Math.min(props.questions.length, 15);
    const order: string[] = [];
    const asked = new Set<string>();
    const scores = new Map<string, { correct: number; total: number }>();

    for (let i = 0; i < maxQ; i++) {
      const next = pickNextQuestion(props.questions, asked, scores);

      if (!next) {
        break;
      }
      order.push(next.id);
      asked.add(next.id);
      const prev = scores.get(next.topic) ?? { correct: 0, total: 0 };

      scores.set(next.topic, prev);
    }

    return order;
  });

  const currentQuestionId = createMemo(() => questionOrder()[getCurrentIndex()] ?? null);
  const currentQuestion = createMemo(() => {
    const id = currentQuestionId();
    if (!id) return null;
    return props.questions.find((q) => q.id === id) ?? null;
  });

  createEffect(() => {
    if (!showTimer || getShowResults()) {
      return;
    }
    const start = getStartTime();
    const interval = setInterval(() => setElapsed(Date.now() - start), 1000);
    onCleanup(() => clearInterval(interval));
  });

  const handleSelect = (index: number) => {
    if (!getSubmitted()) {
      setSelected(index);
    }
  };

  const handleSubmit = () => {
    const sel = getSelected();
    const q = currentQuestion();
    if (sel === null || !q) {
      return;
    }
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
    const ci = getCurrentIndex();
    if (ci + 1 >= questionOrder().length) {
      setShowResults(true);

      return;
    }
    setCurrentIndex(ci + 1);
    setSelected(null);
    setSubmitted(false);
  };

  createEffect(() => {
    if (!getShowResults()) {
      return;
    }
    const ans = getAnswers();
    const qs = props.questions;
    const topicMap = new Map<string, { correct: number; total: number }>();

    for (const [qid, a] of ans) {
      const q = qs.find((qq) => qq.id === qid);

      if (!q) {
        continue;
      }
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
    const totalCorrect = Array.from(ans.values()).filter((a, i) => {
      const q = qs.find((qq) => qq.id === Array.from(ans.keys())[i]);

      return q && a === q.correctIndex;
    }).length;
    const totalQuestions = ans.size;

    props.onComplete({
      subject: props.subject,
      totalQuestions,
      totalCorrect,
      overallScore: totalQuestions > 0 ? totalCorrect / totalQuestions : 0,
      topicResults,
      strengths,
      weaknesses,
      recommendedTopics,
      timeSpentMs: getElapsed(),
    });
  });

  const result: () => DiagnosticResult | null = createMemo(() => {
    if (!getShowResults() || getAnswers().size === 0) {
      return null;
    }
    const ans = getAnswers();
    const qs = props.questions;
    const topicMap = new Map<string, { correct: number; total: number }>();

    for (const [qid, a] of ans) {
      const q = qs.find((qq) => qq.id === qid);

      if (!q) {
        continue;
      }
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
    const recommended = topicResults.filter((t) => t.level !== 'strong').map((t) => t.topic);
    let totalCorrect = 0;

    for (const [qid, a] of ans) {
      const q = qs.find((qq) => qq.id === qid);

      if (q && a === q.correctIndex) {
        totalCorrect++;
      }
    }

    return {
      subject: props.subject,
      totalQuestions: ans.size,
      totalCorrect,
      overallScore: ans.size > 0 ? totalCorrect / ans.size : 0,
      topicResults,
      strengths,
      weaknesses,
      recommendedTopics: recommended,
      timeSpentMs: getElapsed(),
    };
  });

  const containerStyle: Record<string, string> = {
    maxWidth: '700px',
    margin: '1.5rem auto',
    padding: '24px',
    border: '2px solid var(--ifm-color-emphasis-300)',
    borderRadius: '12px',
    background: 'var(--ifm-background-surface-color)',
    fontFamily: 'var(--ifm-font-family-base)',
  };

  const progressBarBg: Record<string, string> = {
    width: '100%',
    height: '8px',
    borderRadius: '4px',
    background: 'var(--ifm-color-emphasis-200)',
    marginBottom: '16px',
  };

  const progressBarFill = createMemo(() => ({
    height: '100%',
    borderRadius: '4px',
    background: 'var(--ifm-color-primary)',
    transition: 'width 0.3s',
    width: `${((getCurrentIndex() + (getSubmitted() ? 1 : 0)) / questionOrder().length) * 100}%`,
  }));

  const isCorrect = createMemo(
    () => getSubmitted() && getSelected() === currentQuestion()?.correctIndex,
  );

  const optionStyle = (index: number): Record<string, string> => {
    const base: Record<string, string> = {
      display: 'block',
      width: '100%',
      padding: '12px 16px',
      margin: '6px 0',
      border: '2px solid var(--ifm-color-emphasis-300)',
      borderRadius: '8px',
      background: 'var(--ifm-background-surface-color)',
      color: 'var(--ifm-font-color-base)',
      fontSize: '1rem',
      textAlign: 'left',
      cursor: getSubmitted() ? 'default' : 'pointer',
      transition: 'border-color 0.15s, background 0.15s',
      fontFamily: 'inherit',
    };

    if (!getSubmitted() && getSelected() === index) {
      base.borderColor = 'var(--ifm-color-primary)';
      base.background = 'var(--ifm-color-primary-soft)';
    }
    if (getSubmitted()) {
      const q = currentQuestion()!;
      if (index === q.correctIndex) {
        base.borderColor = '#2ecc71';
        base.background = 'rgba(46,204,113,0.12)';
      } else if (index === getSelected() && index !== q.correctIndex) {
        base.borderColor = '#e74c3c';
        base.background = 'rgba(231,76,60,0.12)';
      }
    }

    return base;
  };

  const pct = (s: number) => `${Math.round(s * 100)}%`;

  return (
    <>
      <Show when={result()} keyed>
        {(r) => (
          <div style={containerStyle}>
            <h3 style={{ marginBottom: '4px' }}>{props.subject} — Diagnostic Results</h3>
            <p style={{ color: 'var(--ifm-color-emphasis-700)', marginBottom: '16px' }}>
              {r.totalCorrect}/{r.totalQuestions} correct ({pct(r.overallScore)})
              {showTimer && ` in ${formatTime(getElapsed())}`}
            </p>
            <h4 style={{ marginBottom: '8px' }}>Topic Breakdown</h4>
            <For each={r.topicResults}>
              {(t) => (
                <div style={{ marginBottom: '10px' }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '2px',
                    }}
                  >
                    <span
                      style={{
                        fontWeight: 600,
                        color: getLevelColor(t.level),
                      }}
                    >
                      {t.topic}
                    </span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--ifm-font-color-base)' }}>
                      {t.correct}/{t.total} — {pct(t.score)}
                    </span>
                  </div>
                  <div style={progressBarBg}>
                    <div
                      style={{
                        height: '100%',
                        borderRadius: '4px',
                        width: `${t.score * 100}%`,
                        background: getLevelColor(t.level),
                        transition: 'width 0.3s',
                      }}
                    />
                  </div>
                </div>
              )}
            </For>
            <Show when={r.strengths.length > 0}>
              <div style={{ marginTop: '16px' }}>
                <h4 style={{ color: '#2ecc71', marginBottom: '4px' }}>Strengths</h4>
                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                  <For each={r.strengths}>{(t) => <li>{t}</li>}</For>
                </ul>
              </div>
            </Show>
            <Show when={r.weaknesses.length > 0}>
              <div style={{ marginTop: '12px' }}>
                <h4 style={{ color: '#e74c3c', marginBottom: '4px' }}>Needs Improvement</h4>
                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                  <For each={r.weaknesses}>{(t) => <li>{t}</li>}</For>
                </ul>
              </div>
            </Show>
            <Show when={r.recommendedTopics.length > 0}>
              <div style={{ marginTop: '12px' }}>
                <h4 style={{ color: '#f39c12', marginBottom: '4px' }}>Recommended Study Topics</h4>
                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                  <For each={r.recommendedTopics}>{(t) => <li>{t}</li>}</For>
                </ul>
              </div>
            </Show>
          </div>
        )}
      </Show>
      <Show when={!getShowResults() && currentQuestion()} keyed>
        {(q) => (
          <div style={containerStyle}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '4px',
              }}
            >
              <h3 style={{ margin: 0 }}>{props.subject}</h3>
              <Show when={showTimer}>
                <span style={{ fontSize: '0.85rem', color: 'var(--ifm-color-emphasis-700)' }}>
                  {formatTime(getElapsed())}
                </span>
              </Show>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span
                style={{
                  display: 'inline-block',
                  padding: '2px 10px',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  background: 'var(--ifm-color-primary)',
                  color: '#fff',
                }}
              >
                {q.topic}
              </span>
              <span style={{ fontSize: '0.75rem', color: 'var(--ifm-color-emphasis-700)' }}>
                Difficulty {q.difficulty}/5
              </span>
            </div>
            <div style={progressBarBg}>
              <div style={progressBarFill()} />
            </div>
            <p
              style={{
                fontSize: '0.8rem',
                color: 'var(--ifm-color-emphasis-700)',
                marginBottom: '12px',
              }}
            >
              Question {getCurrentIndex() + 1} of {questionOrder().length}
            </p>
            <div
              style={{
                fontSize: '1.15rem',
                fontWeight: 600,
                marginBottom: '16px',
                color: 'var(--ifm-font-color-base)',
              }}
              innerHTML={sanitizeHtml(q.question)}
            />
            <div role="group" aria-label="Answer options">
              <For each={q.options}>
                {(opt, i) => (
                  <button
                    type="button"
                    disabled={getSubmitted()}
                    onClick={() => handleSelect(i())}
                    aria-label={`Option ${LABELS[i()]}: ${opt}`}
                    style={optionStyle(i())}
                  >
                    <span style={{ fontWeight: 600, marginRight: '8px' }}>{LABELS[i()]}.</span>
                    {opt}
                  </button>
                )}
              </For>
            </div>
            <Show when={!getSubmitted()}>
              <button
                type="button"
                disabled={getSelected() === null}
                onClick={handleSubmit}
                style={{
                  marginTop: '12px',
                  padding: '10px 24px',
                  border: 'none',
                  borderRadius: '8px',
                  background:
                    getSelected() === null
                      ? 'var(--ifm-color-emphasis-300)'
                      : 'var(--ifm-color-primary)',
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: '1rem',
                  cursor: getSelected() === null ? 'not-allowed' : 'pointer',
                  opacity: getSelected() === null ? 0.6 : 1,
                }}
              >
                Submit
              </button>
            </Show>
            <Show when={getSubmitted()}>
              <>
                <div
                  style={{
                    marginTop: '16px',
                    padding: '16px',
                    borderRadius: '8px',
                    background: isCorrect() ? 'rgba(46,204,113,0.1)' : 'rgba(231,76,60,0.1)',
                    border: `1px solid ${isCorrect() ? '#2ecc71' : '#e74c3c'}`,
                  }}
                >
                  <strong style={{ color: isCorrect() ? '#2ecc71' : '#e74c3c' }}>
                    {isCorrect() ? 'Correct!' : 'Incorrect.'}
                  </strong>
                  <div
                    style={{
                      marginTop: '8px',
                      lineHeight: 1.6,
                      color: 'var(--ifm-font-color-base)',
                    }}
                    innerHTML={sanitizeHtml(q.explanation)}
                  />
                </div>
                <button
                  type="button"
                  onClick={handleNext}
                  style={{
                    marginTop: '12px',
                    padding: '10px 24px',
                    border: 'none',
                    borderRadius: '8px',
                    background: 'var(--ifm-color-primary)',
                    color: '#fff',
                    fontWeight: 600,
                    fontSize: '1rem',
                    cursor: 'pointer',
                  }}
                >
                  {getCurrentIndex() + 1 >= questionOrder().length ? 'View Results' : 'Next Question'}
                </button>
              </>
            </Show>
          </div>
        )}
      </Show>
    </>
  );
}

export default DiagnosticTest;
