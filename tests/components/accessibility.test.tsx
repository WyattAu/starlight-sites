import { render, screen } from '@solidjs/testing-library'
import axe from 'axe-core'
import { describe, expect, it } from 'vitest'
import type { DiagnosticQuestion } from '../../shared/components/DiagnosticTest'
import DiagnosticTest from '../../shared/components/DiagnosticTest'
import type { Flashcard } from '../../shared/components/FlashcardDeck'
import FlashcardDeck from '../../shared/components/FlashcardDeck'
import type { PracticeQuestionData } from '../../shared/components/PracticeProblem'
import PracticeProblem from '../../shared/components/PracticeProblem'

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {}
  return {
    getItem: (key: string) => store[key] ?? null,
    setItem: (key: string, value: string) => {
      store[key] = value
    },
    removeItem: (key: string) => {
      delete store[key]
    },
    clear: () => {
      store = {}
    },
    get length() {
      return Object.keys(store).length
    },
    key: (index: number) => Object.keys(store)[index] ?? null,
  }
})()
vi.stubGlobal('localStorage', localStorageMock)

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})

const mockCards: Flashcard[] = [
  { id: '1', front: 'What is 2+2?', back: '4', tags: ['math'] },
  { id: '2', front: 'What is 3+3?', back: '6', tags: ['math'] },
]

const mockDiagnosticQuestions: DiagnosticQuestion[] = [
  {
    id: 'q1',
    topic: 'Algebra',
    difficulty: 2,
    question: 'What is 2 + 2?',
    options: ['3', '4', '5', '6'],
    correctIndex: 1,
    explanation: '2 + 2 = 4',
  },
]

const mockPracticeQuestions: PracticeQuestionData[] = [
  {
    question: 'What is 2 + 2?',
    options: ['3', '4', '5', '6'],
    correctAnswer: 1,
    explanation: '2 + 2 = 4',
    difficulty: 'easy',
  },
]

async function runAxe(container: Element): Promise<axe.AxeResults> {
  // axe-core needs a proper document context
  const results = await axe.run(container as axe.ElementContext, {
    rules: {
      'color-contrast': { enabled: false }, // Skip in jsdom (no real rendering)
    },
  })
  return results
}

describe('Accessibility Tests', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  describe('FlashcardDeck', () => {
    it('should have no critical violations with cards', async () => {
      const { container } = render(() => (
        <FlashcardDeck cards={mockCards} deckId="test" title="Math Flashcards" />
      ))
      const results = await runAxe(container)
      const critical = results.violations.filter(
        v => v.impact === 'critical' || v.impact === 'serious',
      )
      expect(critical).toHaveLength(0)
    })

    it('should have no critical violations in empty state', async () => {
      const { container } = render(() => <FlashcardDeck cards={[]} deckId="test" />)
      const results = await runAxe(container)
      const critical = results.violations.filter(
        v => v.impact === 'critical' || v.impact === 'serious',
      )
      expect(critical).toHaveLength(0)
    })

    it('should have proper ARIA labels', () => {
      render(() => <FlashcardDeck cards={mockCards} deckId="test" title="Math Flashcards" />)
      expect(screen.getByRole('region', { name: 'Flashcard deck: Math Flashcards' })).toBeTruthy()
    })
  })

  describe('DiagnosticTest', () => {
    it('should have no critical violations', async () => {
      const { container } = render(() => (
        <DiagnosticTest subject="Math" questions={mockDiagnosticQuestions} onComplete={vi.fn()} />
      ))
      const results = await runAxe(container)
      const critical = results.violations.filter(
        v => v.impact === 'critical' || v.impact === 'serious',
      )
      expect(critical).toHaveLength(0)
    })

    it('should have proper ARIA labels', () => {
      render(() => (
        <DiagnosticTest subject="Math" questions={mockDiagnosticQuestions} onComplete={vi.fn()} />
      ))
      expect(screen.getByRole('dialog')).toBeTruthy()
    })
  })

  describe('PracticeProblem', () => {
    it('should have no critical violations', async () => {
      const { container } = render(() => <PracticeProblem questions={mockPracticeQuestions} />)
      const results = await runAxe(container)
      const critical = results.violations.filter(
        v => v.impact === 'critical' || v.impact === 'serious',
      )
      expect(critical).toHaveLength(0)
    })
  })
})
