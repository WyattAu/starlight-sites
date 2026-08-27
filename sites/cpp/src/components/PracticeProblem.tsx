import { RadioGroup } from '@kobalte/core'
import { createSignal, For } from 'solid-js'
import type { Difficulty } from '../utils/colors'
import { escapeHtml } from '../utils/escape'
import { sanitizeHtml } from '../utils/sanitize'
import ErrorBoundary from './ErrorBoundary'
import QuestionDialog from './QuestionDialog'

export interface PracticeQuestionData {
  question: string
  options: string[]
  correct?: number
  correctAnswer?: number
  explanation: string
  difficulty?: Difficulty
}

export interface PracticeProblemProps {
  question?: string
  options?: string[]
  correctAnswer?: number
  explanation?: string
  difficulty?: Difficulty
  questions?: PracticeQuestionData[]
}

export default function PracticeProblem(props: PracticeProblemProps) {
  if (props.questions && props.questions.length > 0) {
    return (
      <div class="flex flex-col gap-6">
        {props.questions.map(q => (
          <PracticeProblemItem
            question={q.question}
            options={q.options}
            correctAnswer={q.correctAnswer ?? q.correct ?? 0}
            explanation={q.explanation}
            difficulty={q.difficulty ?? 'medium'}
          />
        ))}
      </div>
    )
  }

  return (
    <PracticeProblemItem
      question={props.question ?? ''}
      options={props.options ?? []}
      correctAnswer={props.correctAnswer ?? 0}
      explanation={props.explanation ?? ''}
      difficulty={props.difficulty ?? 'medium'}
    />
  )
}

function optionClass(
  index: number,
  selected: number | null,
  submitted: boolean,
  correctAnswer: number,
): string {
  const base =
    'block w-full py-3 px-4 my-1.5 border-2 rounded-lg bg-surface text-base text-left font-sans cursor-pointer transition-all'

  if (submitted) {
    if (index === correctAnswer) return `${base} border-success bg-success/12 cursor-default`
    if (index === selected) return `${base} border-error bg-error/12 cursor-default`
    return `${base} border-emphasis-300 cursor-default`
  }

  if (selected === index) return `${base} border-accent bg-primary-soft`
  return `${base} border-emphasis-300 hover:border-accent`
}

function PracticeProblemItem(props: {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  difficulty: Difficulty
}) {
  const [selected, setSelected] = createSignal<number | null>(null)
  const [submitted, setSubmitted] = createSignal(false)

  const isCorrect = () => submitted() && selected() === props.correctAnswer

  // Kobalte RadioGroup uses string values; selected is the option index.
  const selectedValue = () => (selected() !== null ? String(selected()) : undefined)

  // Arrow-key navigation and roving tabindex are provided by Kobalte; only the
  // Enter-to-submit convenience is kept (not part of the radiogroup pattern).
  const handleKeyDown = (e: KeyboardEvent) => {
    if (submitted()) return
    if (e.key === 'Enter' && selected() !== null) {
      e.preventDefault()
      setSubmitted(true)
    }
  }

  const handleSubmit = () => {
    if (selected() !== null) {
      setSubmitted(true)
    }
  }

  const difficultyColor = () => {
    if (props.difficulty === 'easy') return 'bg-success'
    if (props.difficulty === 'medium') return 'bg-warning'
    return 'bg-error'
  }

  return (
    <ErrorBoundary component="PracticeProblem">
      <QuestionDialog
      open={true}
      onOpenChange={() => {}}
      title={`Practice Problem - ${props.difficulty}`}
    >
      <div class="mb-3">
        <span
          class={`inline-block rounded px-2.5 py-0.5 font-semibold text-white text-xs uppercase tracking-wider ${difficultyColor()}`}
          data-difficulty={props.difficulty}
        >
          {props.difficulty}
        </span>
      </div>

      <p class="mb-4 font-semibold text-lg">{escapeHtml(props.question)}</p>

      <RadioGroup.Root
        value={selectedValue()}
        onChange={value => {
          if (!submitted()) setSelected(Number(value))
        }}
        orientation="vertical"
        class="flex flex-col gap-2"
        aria-label="Answer options"
        onKeyDown={handleKeyDown}
      >
        <For each={props.options}>
          {(opt, i) => (
            <RadioGroup.Item value={String(i())} disabled={submitted()}>
              {/* ItemControl is the visible, clickable card; its onClick selects. */}
              <RadioGroup.ItemControl
                class={optionClass(i(), selected(), submitted(), props.correctAnswer)}
              >
                <span class="mr-2 font-semibold">{String.fromCharCode(65 + i())}.</span>
                {typeof opt === 'string' ? opt : ''}
              </RadioGroup.ItemControl>
              {/* ItemInput is the native radio (role=radio, checked) for a11y + forms. */}
              <RadioGroup.ItemInput
                aria-label={`Option ${String.fromCharCode(65 + i())}: ${escapeHtml(String(opt))}`}
              />
            </RadioGroup.Item>
          )}
        </For>
      </RadioGroup.Root>

      <div class="mt-4 flex justify-center">
        {!submitted() && (
          <button
            type="button"
            class="cursor-pointer rounded-lg border-none bg-primary px-6 py-2.5 font-semibold text-base text-white disabled:cursor-not-allowed disabled:bg-emphasis-300 disabled:opacity-60"
            disabled={selected() === null}
            onClick={handleSubmit}
          >
            Submit
          </button>
        )}
      </div>

      {submitted() && (
        <QuestionDialog
          open={submitted()}
          onOpenChange={open => {
            if (!open) {
              setSelected(null)
              setSubmitted(false)
            }
          }}
          title={isCorrect() ? 'Correct!' : 'Incorrect.'}
        >
          <div
            class={`rounded-lg border p-4 ${
              isCorrect() ? 'border-success bg-success/10' : 'border-error bg-error/10'
            }`}
          >
            <strong class={`block ${isCorrect() ? 'text-success' : 'text-error'}`}>
              {isCorrect() ? 'Well done!' : 'Not quite right.'}
            </strong>
            <div class="mt-2 leading-relaxed" innerHTML={sanitizeHtml(props.explanation)} />
          </div>
        </QuestionDialog>
      )}
    </QuestionDialog>
    </ErrorBoundary>
  )
}
