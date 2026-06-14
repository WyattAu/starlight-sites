import { createSignal, createEffect } from 'solid-js';
import { sanitizeHtml } from '../utils/sanitize';
import type { Difficulty } from '../utils/colors';

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
      <div class="practice-problem-list">
        {props.questions.map((q) => (
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

function optionClass(index: number, selected: number | null, submitted: boolean, correctAnswer: number): string {
  let cls = 'practice-problem-option';
  if (!submitted && selected === index) cls += ' practice-problem-option--selected';
  if (submitted) {
    if (index === correctAnswer) cls += ' practice-problem-option--correct';
    else if (index === selected) cls += ' practice-problem-option--wrong';
  }
  return cls;
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

  return (
    <div
      class="practice-problem"
      onKeyDown={handleKeyDown}
      role="radiogroup"
      aria-label="Practice problem options"
    >
      <div class="practice-problem-header">
        <span class="practice-problem-difficulty" data-difficulty={props.difficulty}>
          {props.difficulty}
        </span>
      </div>

      <p class="practice-problem-question">{escapeHtml(props.question)}</p>

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
            class={optionClass(i, selected(), submitted(), props.correctAnswer)}
          >
            <span class="practice-problem-option-letter">{String.fromCharCode(65 + i)}.</span>
            {typeof opt === 'string' ? opt : ''}
          </button>
        ))}
      </div>

      {!submitted() && (
        <button
          type="button"
          class="practice-problem-submit"
          disabled={selected() === null}
          onClick={handleSubmit}
        >
          Submit
        </button>
      )}

      {submitted() && (
        <div
          class={
            'practice-problem-feedback ' +
            (isCorrect() ? 'practice-problem-feedback--correct' : 'practice-problem-feedback--wrong')
          }
        >
          <strong
            class={
              'practice-problem-feedback-title ' +
              (isCorrect()
                ? 'practice-problem-feedback-title--correct'
                : 'practice-problem-feedback-title--wrong')
            }
          >
            {isCorrect() ? 'Correct!' : 'Incorrect.'}
          </strong>
          <div
            class="practice-problem-feedback-text"
            innerHTML={sanitizeHtml(props.explanation)}
          />
        </div>
      )}
    </div>
  );
}
