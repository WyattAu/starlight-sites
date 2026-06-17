/**
 * DiagnosticTest -- Adaptive diagnostic assessment component.
 *
 * Selects questions dynamically based on user performance,
 * targeting weak topics and appropriate difficulty levels.
 */

import { createEffect, createMemo, createSignal, For, onCleanup, Show } from 'solid-js'
import { t } from '../i18n/config'
import { COLORS } from '../utils/colors'
import { formatTime } from '../utils/format'
import { sanitizeHtml } from '../utils/sanitize'
import QuestionDialog from './QuestionDialog'

export interface DiagnosticQuestion {
  id: string
  topic: string
  difficulty: number
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

export interface TopicResult {
  topic: string
  correct: number
  total: number
  score: number
  level: 'strong' | 'moderate' | 'weak'
}

export interface DiagnosticResult {
  subject: string
  totalQuestions: number
  totalCorrect: number
  overallScore: number
  topicResults: TopicResult[]
  strengths: string[]
  weaknesses: string[]
  recommendedTopics: string[]
  timeSpentMs: number
}

interface DiagnosticTestProps {
  subject: string
  questions: DiagnosticQuestion[]
  maxQuestions?: number
  onComplete: (results: DiagnosticResult) => void
}

const LABELS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'] as const

function getLevel(score: number): 'strong' | 'moderate' | 'weak' {
  if (score >= 0.8) return 'strong'
  if (score >= 0.5) return 'moderate'
  return 'weak'
}

function getLevelColor(level: 'strong' | 'moderate' | 'weak'): string {
  if (level === 'strong') return COLORS.success
  if (level === 'moderate') return COLORS.warning
  return COLORS.error
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
  const remaining = pool.filter(q => !asked.has(q.id))
  if (remaining.length === 0) return null

  // Compute average performance across all topics
  const scores = Array.from(topicScores.values())
  const avgPerf =
    scores.length > 0
      ? scores.reduce((s, t) => s + (t.total > 0 ? t.correct / t.total : 0.5), 0) / scores.length
      : 0.5

  // Target difficulty: map 0..1 performance to 1..5 difficulty
  const targetDiff = Math.max(1, Math.min(5, Math.round(avgPerf * 5)))

  // Find weak topics (score < 60% with at least 1 answer)
  const weakTopics = Array.from(topicScores.entries())
    .filter(([, s]) => s.total > 0 && s.correct / s.total < 0.6)
    .map(([t]) => t)

  // Priority 1: Weak topics at target difficulty
  let candidates = remaining.filter(
    q => weakTopics.includes(q.topic) && q.difficulty === targetDiff,
  )

  // Priority 2: Weak topics at any difficulty
  if (candidates.length === 0) {
    candidates = remaining.filter(q => weakTopics.includes(q.topic))
  }

  // Priority 3: Any topic at target difficulty
  if (candidates.length === 0) {
    candidates = remaining.filter(q => q.difficulty === targetDiff)
  }

  // Priority 4: Any remaining question
  if (candidates.length === 0) {
    candidates = remaining
  }

  // Random selection from candidates
  return candidates[Math.floor(Math.random() * candidates.length)]
}

function computeResults(
  answers: Map<string, number>,
  questions: DiagnosticQuestion[],
  elapsed: number,
  subject: string,
): DiagnosticResult {
  const topicMap = new Map<string, { correct: number; total: number }>()

  for (const [qid, a] of answers) {
    const q = questions.find(qq => qq.id === qid)
    if (!q) continue
    const prev = topicMap.get(q.topic) ?? { correct: 0, total: 0 }
    topicMap.set(q.topic, {
      correct: prev.correct + (a === q.correctIndex ? 1 : 0),
      total: prev.total + 1,
    })
  }

  const topicResults: TopicResult[] = Array.from(topicMap.entries()).map(([topic, s]) => ({
    topic,
    correct: s.correct,
    total: s.total,
    score: s.total > 0 ? s.correct / s.total : 0,
    level: getLevel(s.total > 0 ? s.correct / s.total : 0),
  }))

  topicResults.sort((a, b) => a.score - b.score)

  const strengths = topicResults.filter(t => t.level === 'strong').map(t => t.topic)
  const weaknesses = topicResults.filter(t => t.level === 'weak').map(t => t.topic)
  const recommendedTopics = topicResults.filter(t => t.level !== 'strong').map(t => t.topic)

  let totalCorrect = 0
  for (const [qid, a] of answers) {
    const q = questions.find(qq => qq.id === qid)
    if (q && a === q.correctIndex) totalCorrect++
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
  }
}

export default function DiagnosticTest(props: DiagnosticTestProps) {
  const maxQ = props.maxQuestions ?? Math.min(props.questions.length, 15)

  const [getAskedIds, setAskedIds] = createSignal(new Set<string>())
  const [getAnswers, setAnswers] = createSignal(new Map<string, number>())
  const [getSelected, setSelected] = createSignal<number | null>(null)
  const [getSubmitted, setSubmitted] = createSignal(false)
  const [getShowResults, setShowResults] = createSignal(false)
  const [getTopicScores, setTopicScores] = createSignal(
    new Map<string, { correct: number; total: number }>(),
  )
  const [getStartTime] = createSignal(Date.now())
  const [getElapsed, setElapsed] = createSignal(0)

  // Dynamic question selection: compute next question based on current scores
  const currentQuestion = createMemo(() => {
    return pickNextQuestion(props.questions, getAskedIds(), getTopicScores())
  })

  const progress = createMemo(() => getAskedIds().size)
  const isComplete = createMemo(() => progress() >= maxQ || currentQuestion() === null)

  createEffect(() => {
    if (getShowResults()) return
    const start = getStartTime()
    const interval = setInterval(() => setElapsed(Date.now() - start), 1000)
    onCleanup(() => clearInterval(interval))
  })

  const handleSelect = (index: number) => {
    if (!getSubmitted()) setSelected(index)
  }

  const handleRadioKeyDown = (e: KeyboardEvent) => {
    if (getSubmitted()) return
    const q = currentQuestion()
    if (!q) return
    const options = q.options
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault()
      setSelected(prev => (prev === null ? 0 : Math.min(prev + 1, options.length - 1)))
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault()
      setSelected(prev => (prev === null ? options.length - 1 : Math.max(prev - 1, 0)))
    } else if (e.key === 'Enter' && getSelected() !== null) {
      e.preventDefault()
      handleSubmit()
    }
  }

  const handleSubmit = () => {
    const sel = getSelected()
    const q = currentQuestion()
    if (sel === null || !q) return

    setSubmitted(true)
    const newAnswers = new Map(getAnswers())
    newAnswers.set(q.id, sel)
    setAnswers(newAnswers)

    const newAsked = new Set(getAskedIds())
    newAsked.add(q.id)
    setAskedIds(newAsked)

    const prev = getTopicScores().get(q.topic) ?? { correct: 0, total: 0 }
    setTopicScores(
      new Map(getTopicScores()).set(q.topic, {
        correct: prev.correct + (sel === q.correctIndex ? 1 : 0),
        total: prev.total + 1,
      }),
    )
  }

  const handleNext = () => {
    if (isComplete()) {
      const results = computeResults(getAnswers(), props.questions, getElapsed(), props.subject)
      setShowResults(true)
      props.onComplete(results)
      return
    }
    setSelected(null)
    setSubmitted(false)
  }

  const result = createMemo(() => {
    if (!getShowResults() || getAnswers().size === 0) return null
    return computeResults(getAnswers(), props.questions, getElapsed(), props.subject)
  })

  // --- Views ---

  if (props.questions.length === 0) {
    return (
      <div
        class="mx-auto my-6 max-w-[700px] rounded-xl border-2 border-emphasis-300 bg-surface p-6 text-center font-sans text-base"
        role="region"
        aria-label="Diagnostic test"
      >
        {t('diagnostic.no_questions')}
      </div>
    )
  }

  if (getShowResults() && result()) {
    const r = result() as NonNullable<ReturnType<typeof result>>
    return (
      <QuestionDialog
        open={getShowResults()}
        onOpenChange={open => {
          if (!open) {
            setShowResults(false)
            setSelected(null)
            setSubmitted(false)
            setAskedIds(new Set())
            setAnswers(new Map())
            setTopicScores(new Map())
            setElapsed(0)
          }
        }}
        title={`Results: ${r.subject}`}
      >
        <div class="mb-6 flex flex-wrap justify-center gap-3">
          <div class="min-w-[100px] rounded-lg border border-emphasis-200 bg-emphasis-100 px-6 py-4 text-center">
            <div class="font-bold text-2xl text-accent">{Math.round(r.overallScore * 100)}%</div>
            <div class="mt-1 text-emphasis-700 text-sm">{t('diagnostic.overall_score')}</div>
          </div>
          <div class="min-w-[100px] rounded-lg border border-emphasis-200 bg-emphasis-100 px-6 py-4 text-center">
            <div class="font-bold text-2xl text-accent">
              {r.totalCorrect}/{r.totalQuestions}
            </div>
            <div class="mt-1 text-emphasis-700 text-sm">{t('diagnostic.correct')}</div>
          </div>
          <div class="min-w-[100px] rounded-lg border border-emphasis-200 bg-emphasis-100 px-6 py-4 text-center">
            <div class="font-bold text-2xl text-accent">{formatTime(r.timeSpentMs)}</div>
            <div class="mt-1 text-emphasis-700 text-sm">{t('diagnostic.time')}</div>
          </div>
        </div>

        <h4>{t('diagnostic.topic_breakdown')}</h4>
        <div class="mb-5 flex flex-col gap-2" use:animate>
          <For each={r.topicResults}>
            {t => (
              <div class="flex items-center gap-3 rounded-md bg-emphasis-100 px-3 py-2 text-sm">
                <span class="flex-1 font-semibold">{t.topic}</span>
                <span
                  class="font-variant-numeric:tabular-nums"
                  style={{ color: getLevelColor(t.level) }}
                >
                  {Math.round(t.score * 100)}% ({t.correct}/{t.total})
                </span>
                <span class="font-semibold capitalize" style={{ color: getLevelColor(t.level) }}>
                  {t.level}
                </span>
              </div>
            )}
          </For>
        </div>

        <Show when={r.strengths.length > 0}>
          <div class="mb-4">
            <h4 class="mt-0 mb-2">{t('diagnostic.strengths')}</h4>
            <div class="flex flex-wrap gap-2" use:animate>
              <For each={r.strengths}>
                {s => (
                  <span class="inline-block rounded-full bg-success/15 px-3 py-1 font-semibold text-sm text-success">
                    {s}
                  </span>
                )}
              </For>
            </div>
          </div>
        </Show>

        <Show when={r.weaknesses.length > 0}>
          <div class="mb-4">
            <h4 class="mt-0 mb-2">{t('diagnostic.weaknesses')}</h4>
            <div class="flex flex-wrap gap-2" use:animate>
              <For each={r.weaknesses}>
                {w => (
                  <span class="inline-block rounded-full bg-error/15 px-3 py-1 font-semibold text-error text-sm">
                    {w}
                  </span>
                )}
              </For>
            </div>
          </div>
        </Show>

        <Show when={r.recommendedTopics.length > 0}>
          <div class="mb-4">
            <h4 class="mt-0 mb-2">{t('diagnostic.recommended')}</h4>
            <div class="flex flex-wrap gap-2" use:animate>
              <For each={r.recommendedTopics}>
                {t => (
                  <span class="inline-block rounded-full bg-warning/15 px-3 py-1 font-semibold text-sm text-warning">
                    {t}
                  </span>
                )}
              </For>
            </div>
          </div>
        </Show>
      </QuestionDialog>
    )
  }

  const q = currentQuestion()
  if (!q) return null

  return (
    <QuestionDialog
      open={true}
      onOpenChange={() => {}}
      title={`Question ${progress() + 1} of ${maxQ}`}
    >
      <div class="mb-4 flex items-center justify-between text-emphasis-700 text-sm">
        <span>{formatTime(getElapsed())}</span>
        <span class="font-variant-numeric:tabular-nums">
          {q.topic} - Difficulty {q.difficulty}
        </span>
      </div>

      <p class="mt-2 mb-5 text-lg leading-relaxed">{q.question}</p>

      <div
        class="mb-5 flex flex-col gap-2"
        role="radiogroup"
        aria-label="Answer options"
        onKeyDown={handleRadioKeyDown}
      >
        <For each={q.options}>
          {(opt, i) => (
            <button
              type="button"
              class={`flex cursor-pointer items-center gap-3 rounded-lg border-2 px-4 py-3 text-left text-base transition-all ${
                getSubmitted()
                  ? i() === q.correctIndex
                    ? 'border-success bg-success/10'
                    : getSelected() === i()
                      ? 'border-error bg-error/10'
                      : 'border-emphasis-200 bg-transparent'
                  : getSelected() === i()
                    ? 'border-accent bg-accent/5'
                    : 'border-emphasis-300 bg-transparent hover:border-accent'
              }`}
              onClick={() => handleSelect(i())}
              disabled={getSubmitted()}
              role="radio"
              aria-checked={getSelected() === i()}
            >
              <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emphasis-100 font-bold text-sm">
                {LABELS[i()]}
              </span>
              <span class="flex-1">{opt}</span>
            </button>
          )}
        </For>
      </div>

      <Show when={getSubmitted()}>
        <div class="mb-5 rounded-lg bg-emphasis-100 p-4 text-base leading-relaxed">
          <strong>Explanation:</strong>
          <div innerHTML={sanitizeHtml(q.explanation)} />
        </div>
      </Show>

      <div class="flex justify-center">
        <Show when={!getSubmitted()}>
          <button
            type="button"
            class="cursor-pointer rounded-lg border-none bg-primary px-6 py-2.5 font-semibold text-base text-white disabled:cursor-not-allowed disabled:opacity-50"
            disabled={getSelected() === null}
            onClick={handleSubmit}
          >
            {t('diagnostic.submit')}
          </button>
        </Show>
        <Show when={getSubmitted()}>
          <button
            type="button"
            class="cursor-pointer rounded-lg border-none bg-primary px-6 py-2.5 font-semibold text-base text-white"
            onClick={handleNext}
          >
            {isComplete() ? t('diagnostic.view_results') : t('diagnostic.next')}
          </button>
        </Show>
      </div>
    </QuestionDialog>
  )
}
