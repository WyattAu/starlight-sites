import { createSignal, createEffect, onCleanup, createMemo } from 'solid-js';
import { sanitizeHtml } from '../utils/sanitize';

export type Difficulty = 'easy' | 'medium' | 'hard';

export interface PracticeQuestionData {
  question: string;
  options: string[];
  correct?: number;
  correctAnswer?: number;
  explanation: string;
  difficulty?: Difficulty;
}

export interface PracticeProblemProps {
  question?: string;
  options?: string[];
  correctAnswer?: number;
  explanation?: string;
  difficulty?: Difficulty;
  questions?: PracticeQuestionData[];
}

const DIFFICULTY_COLORS: Record<Difficulty, string> = {
  easy: '#2ecc71',
  medium: '#f39c12',
  hard: '#e74c3c',
};

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export default function PracticeProblem(props: PracticeProblemProps) {
  if (props.questions && props.questions.length > 0) {
    return (
      <div style={{ display: 'flex', 'flex-direction': 'column', gap: '1.5rem' }}>
        {props.questions.map((q, idx) => (
          <PracticeProblemItem
            question={q.question}
            options={q.options}
            correctAnswer={q.correctAnswer ?? q.correct ?? 0}
            explanation={q.explanation}
            difficulty={q.difficulty ?? 'medium'}
          />
        ))}
      </div>
    );
  }

  return (
    <PracticeProblemItem
      question={props.question ?? ''}
      options={props.options ?? []}
      correctAnswer={props.correctAnswer ?? 0}
      explanation={props.explanation ?? ''}
      difficulty={props.difficulty ?? 'medium'}
    />
  );
}

function PracticeProblemItem(props: {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: Difficulty;
}) {
  const [selected, setSelected] = createSignal<number | null>(null);
  const [submitted, setSubmitted] = createSignal(false);
  const buttonRefs: (HTMLButtonElement | null)[] = [];

  const focusedIndex = () => selected() ?? -1;
  const isCorrect = () => submitted() && selected() === props.correctAnswer;

  createEffect(() => {
    const idx = focusedIndex();
    if (idx >= 0 && buttonRefs[idx]) {
      buttonRefs[idx]?.focus();
    }
  });

  const handleKeyDown = (e: KeyboardEvent) => {
    if (submitted()) {
      return;
    }
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      setSelected((prev) => (prev === null ? 0 : Math.min(prev + 1, props.options.length - 1)));
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      setSelected((prev) => (prev === null ? props.options.length - 1 : Math.max(prev - 1, 0)));
    } else if (e.key === 'Enter' && selected() !== null) {
      e.preventDefault();
      setSubmitted(true);
    }
  };

  const handleSubmit = () => {
    if (selected() !== null) {
      setSubmitted(true);
    }
  };

  const getOptionStyle = (index: number): Record<string, string> => {
    const base: Record<string, string> = {
      display: 'block',
      width: '100%',
      padding: '12px 16px',
      margin: '6px 0',
      border: '2px solid var(--ifm-color-emphasis-300)',
      'border-radius': '8px',
      background: 'var(--ifm-background-surface-color)',
      color: 'var(--ifm-font-color-base)',
      'font-size': '1rem',
      'text-align': 'left',
      cursor: submitted() ? 'default' : 'pointer',
      transition: 'border-color 0.15s, background 0.15s',
      'font-family': 'inherit',
    };

    if (!submitted() && selected() === index) {
      base['border-color'] = 'var(--ifm-color-primary)';
      base.background = 'var(--ifm-color-primary-soft)';
    }
    if (submitted()) {
      if (index === props.correctAnswer) {
        base['border-color'] = DIFFICULTY_COLORS.easy;
        base.background = 'rgba(46,204,113,0.12)';
      } else if (index === selected() && index !== props.correctAnswer) {
        base['border-color'] = DIFFICULTY_COLORS.hard;
        base.background = 'rgba(231,76,60,0.12)';
      }
    }

    return base;
  };

  return (
    <div
      onKeyDown={handleKeyDown}
      role="radiogroup"
      aria-label="Practice problem options"
      style={{
        'max-width': '700px',
        margin: '1.5rem auto',
        padding: '24px',
        border: '2px solid var(--ifm-color-emphasis-300)',
        'border-radius': '12px',
        background: 'var(--ifm-background-surface-color)',
        'font-family': 'var(--ifm-font-family-base)',
      }}
    >
      <div style={{ display: 'flex', 'align-items': 'center', gap: '8px', 'margin-bottom': '12px' }}>
        <span
          style={{
            display: 'inline-block',
            padding: '2px 10px',
            'border-radius': '4px',
            'font-size': '0.75rem',
            'font-weight': 600,
            'text-transform': 'uppercase',
            'letter-spacing': '0.05em',
            background: DIFFICULTY_COLORS[props.difficulty],
            color: '#fff',
          }}
        >
          {props.difficulty}
        </span>
      </div>

      <p
        style={{
          'font-size': '1.15rem',
          'font-weight': 600,
          'margin-bottom': '16px',
          color: 'var(--ifm-font-color-base)',
        }}
      >
        {escapeHtml(props.question)}
      </p>

      <div role="group" aria-label="Answer options">
        {props.options.map((opt, i) => (
          <button
            ref={(el) => {
              buttonRefs[i] = el;
            }}
            type="button"
            role="radio"
            aria-checked={selected() === i}
            aria-label={`Option ${String.fromCharCode(65 + i)}: ${escapeHtml(String(opt))}`}
            tabIndex={selected() === i ? 0 : -1}
            disabled={submitted()}
            onClick={() => !submitted() && setSelected(i)}
            style={getOptionStyle(i)}
          >
            <span style={{ 'font-weight': 600, 'margin-right': '8px' }}>{String.fromCharCode(65 + i)}.</span>
            {typeof opt === 'string' ? opt : ''}
          </button>
        ))}
      </div>

      {!submitted() && (
        <button
          type="button"
          disabled={selected() === null}
          onClick={handleSubmit}
          style={{
            'margin-top': '12px',
            padding: '10px 24px',
            border: 'none',
            'border-radius': '8px',
            background:
              selected() === null ? 'var(--ifm-color-emphasis-300)' : 'var(--ifm-color-primary)',
            color: '#fff',
            'font-weight': 600,
            'font-size': '1rem',
            cursor: selected() === null ? 'not-allowed' : 'pointer',
            opacity: selected() === null ? '0.6' : '1',
          }}
        >
          Submit
        </button>
      )}

      {submitted() && (
        <div
          style={{
            'margin-top': '16px',
            padding: '16px',
            'border-radius': '8px',
            background: isCorrect() ? 'rgba(46,204,113,0.1)' : 'rgba(231,76,60,0.1)',
            border: `1px solid ${isCorrect() ? DIFFICULTY_COLORS.easy : DIFFICULTY_COLORS.hard}`,
          }}
        >
          <strong style={{ color: isCorrect() ? DIFFICULTY_COLORS.easy : DIFFICULTY_COLORS.hard }}>
            {isCorrect() ? 'Correct!' : 'Incorrect.'}
          </strong>
          <div
            style={{ 'margin-top': '8px', 'line-height': '1.6', color: 'var(--ifm-font-color-base)' }}
            innerHTML={sanitizeHtml(props.explanation)}
          />
        </div>
      )}
    </div>
  );
}
export default PracticeProblem;
