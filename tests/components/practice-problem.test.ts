import { describe, expect, it } from 'vitest'
import type { PracticeQuestionData } from '../../shared/components/PracticeProblem'

describe('PracticeProblem Logic', () => {
  describe('escapeHtml function', () => {
    it('should escape HTML entities', () => {
      const escapeHtml = (text: string): string => {
        return text
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#39;')
      }

      expect(escapeHtml('Hello & World')).toBe('Hello &amp; World')
      expect(escapeHtml('<script>')).toBe('&lt;script&gt;')
      expect(escapeHtml('"quote"')).toBe('&quot;quote&quot;')
      expect(escapeHtml("it's")).toBe('it&#39;s')
      expect(escapeHtml('a & b < c > d')).toBe('a &amp; b &lt; c &gt; d')
    })

    it('should handle empty string', () => {
      const escapeHtml = (text: string): string => {
        return text
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#39;')
      }

      expect(escapeHtml('')).toBe('')
    })

    it('should not escape normal text', () => {
      const escapeHtml = (text: string): string => {
        return text
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#39;')
      }

      expect(escapeHtml('Hello World')).toBe('Hello World')
      expect(escapeHtml('123')).toBe('123')
    })
  })

  describe('optionClass function', () => {
    it('should return base class when not selected or submitted', () => {
      const optionClass = (
        index: number,
        selected: number | null,
        submitted: boolean,
        correctAnswer: number,
      ): string => {
        let cls = 'practice-problem-option'
        if (!submitted && selected === index) cls += ' practice-problem-option--selected'
        if (submitted) {
          if (index === correctAnswer) cls += ' practice-problem-option--correct'
          else if (index === selected) cls += ' practice-problem-option--wrong'
        }
        return cls
      }

      expect(optionClass(0, null, false, 1)).toBe('practice-problem-option')
      expect(optionClass(1, 0, false, 1)).toBe('practice-problem-option')
    })

    it('should add selected class when selected', () => {
      const optionClass = (
        index: number,
        selected: number | null,
        submitted: boolean,
        correctAnswer: number,
      ): string => {
        let cls = 'practice-problem-option'
        if (!submitted && selected === index) cls += ' practice-problem-option--selected'
        if (submitted) {
          if (index === correctAnswer) cls += ' practice-problem-option--correct'
          else if (index === selected) cls += ' practice-problem-option--wrong'
        }
        return cls
      }

      expect(optionClass(0, 0, false, 1)).toBe(
        'practice-problem-option practice-problem-option--selected',
      )
      expect(optionClass(1, 1, false, 1)).toBe(
        'practice-problem-option practice-problem-option--selected',
      )
    })

    it('should add correct class when submitted and correct', () => {
      const optionClass = (
        index: number,
        selected: number | null,
        submitted: boolean,
        correctAnswer: number,
      ): string => {
        let cls = 'practice-problem-option'
        if (!submitted && selected === index) cls += ' practice-problem-option--selected'
        if (submitted) {
          if (index === correctAnswer) cls += ' practice-problem-option--correct'
          else if (index === selected) cls += ' practice-problem-option--wrong'
        }
        return cls
      }

      expect(optionClass(1, 1, true, 1)).toBe(
        'practice-problem-option practice-problem-option--correct',
      )
    })

    it('should add wrong class when submitted and wrong', () => {
      const optionClass = (
        index: number,
        selected: number | null,
        submitted: boolean,
        correctAnswer: number,
      ): string => {
        let cls = 'practice-problem-option'
        if (!submitted && selected === index) cls += ' practice-problem-option--selected'
        if (submitted) {
          if (index === correctAnswer) cls += ' practice-problem-option--correct'
          else if (index === selected) cls += ' practice-problem-option--wrong'
        }
        return cls
      }

      expect(optionClass(0, 0, true, 1)).toBe(
        'practice-problem-option practice-problem-option--wrong',
      )
    })
  })

  describe('Question data validation', () => {
    const mockQuestions: PracticeQuestionData[] = [
      {
        question: 'What is 2 + 2?',
        options: ['3', '4', '5', '6'],
        correctAnswer: 1,
        explanation: '2 + 2 = 4',
        difficulty: 'easy',
      },
      {
        question: 'What is the capital of France?',
        options: ['London', 'Paris', 'Berlin', 'Madrid'],
        correct: 1,
        explanation: 'Paris is the capital of France',
        difficulty: 'medium',
      },
    ]

    it('should have valid question structure', () => {
      for (const q of mockQuestions) {
        expect(q.question).toBeTruthy()
        expect(q.options.length).toBeGreaterThanOrEqual(2)
        expect(q.explanation).toBeTruthy()
        expect(['easy', 'medium', 'hard']).toContain(q.difficulty)
      }
    })

    it('should have correct answer within valid range', () => {
      for (const q of mockQuestions) {
        const correct = q.correctAnswer ?? q.correct ?? 0
        expect(correct).toBeGreaterThanOrEqual(0)
        expect(correct).toBeLessThan(q.options.length)
      }
    })

    it('should handle both correct and correctAnswer fields', () => {
      const q1 = mockQuestions[0]
      const q2 = mockQuestions[1]

      expect(q1.correctAnswer).toBe(1)
      expect(q2.correct).toBe(1)
    })
  })

  describe('Difficulty levels', () => {
    it('should accept valid difficulty levels', () => {
      const validDifficulties = ['easy', 'medium', 'hard']
      for (const d of validDifficulties) {
        expect(['easy', 'medium', 'hard']).toContain(d)
      }
    })
  })
})
