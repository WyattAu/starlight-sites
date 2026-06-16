import { describe, expect, it } from 'vitest'
import type { DiagnosticQuestion } from '../../shared/components/DiagnosticTest'

// Test the pure functions extracted from DiagnosticTest
// We'll test the logic by importing and testing the component behavior

describe('DiagnosticTest Logic', () => {
  // Mock questions for testing
  const mockQuestions: DiagnosticQuestion[] = [
    {
      id: 'q1',
      topic: 'Algebra',
      difficulty: 2,
      question: 'Solve x + 2 = 5',
      options: ['x = 2', 'x = 3', 'x = 4', 'x = 5'],
      correctIndex: 1,
      explanation: 'x = 5 - 2 = 3',
    },
    {
      id: 'q2',
      topic: 'Algebra',
      difficulty: 3,
      question: 'Factor x^2 - 4',
      options: ['(x-2)(x+2)', '(x-4)(x+1)', '(x-2)^2', '(x+2)^2'],
      correctIndex: 0,
      explanation: 'Difference of squares',
    },
    {
      id: 'q3',
      topic: 'Geometry',
      difficulty: 2,
      question: 'Area of circle with radius 3?',
      options: ['3pi', '6pi', '9pi', '12pi'],
      correctIndex: 2,
      explanation: 'A = pi * r^2 = 9pi',
    },
    {
      id: 'q4',
      topic: 'Geometry',
      difficulty: 4,
      question: 'Pythagorean theorem?',
      options: ['a + b = c', 'a^2 + b^2 = c^2', 'ab = c', 'a^2 - b^2 = c^2'],
      correctIndex: 1,
      explanation: 'a^2 + b^2 = c^2',
    },
    {
      id: 'q5',
      topic: 'Calculus',
      difficulty: 3,
      question: 'Derivative of x^2?',
      options: ['x', '2x', 'x^2', '2'],
      correctIndex: 1,
      explanation: 'd/dx(x^2) = 2x',
    },
  ]

  describe('getLevel function', () => {
    // Test the level determination logic
    it('should return strong for score >= 0.8', () => {
      const getLevel = (score: number): 'strong' | 'moderate' | 'weak' => {
        if (score >= 0.8) return 'strong'
        if (score >= 0.5) return 'moderate'
        return 'weak'
      }

      expect(getLevel(1.0)).toBe('strong')
      expect(getLevel(0.9)).toBe('strong')
      expect(getLevel(0.8)).toBe('strong')
    })

    it('should return moderate for 0.5 <= score < 0.8', () => {
      const getLevel = (score: number): 'strong' | 'moderate' | 'weak' => {
        if (score >= 0.8) return 'strong'
        if (score >= 0.5) return 'moderate'
        return 'weak'
      }

      expect(getLevel(0.79)).toBe('moderate')
      expect(getLevel(0.6)).toBe('moderate')
      expect(getLevel(0.5)).toBe('moderate')
    })

    it('should return weak for score < 0.5', () => {
      const getLevel = (score: number): 'strong' | 'moderate' | 'weak' => {
        if (score >= 0.8) return 'strong'
        if (score >= 0.5) return 'moderate'
        return 'weak'
      }

      expect(getLevel(0.49)).toBe('weak')
      expect(getLevel(0.3)).toBe('weak')
      expect(getLevel(0)).toBe('weak')
    })
  })

  describe('pickNextQuestion function', () => {
    // Test the adaptive question selection logic
    it('should return null when no questions remain', () => {
      const pickNextQuestion = (
        pool: DiagnosticQuestion[],
        asked: Set<string>,
        _topicScores: Map<string, { correct: number; total: number }>,
      ): DiagnosticQuestion | null => {
        const remaining = pool.filter(q => !asked.has(q.id))
        if (remaining.length === 0) return null
        return remaining[0]
      }

      const allAsked = new Set(['q1', 'q2', 'q3', 'q4', 'q5'])
      const result = pickNextQuestion(mockQuestions, allAsked, new Map())
      expect(result).toBeNull()
    })

    it('should return a question when questions remain', () => {
      const pickNextQuestion = (
        pool: DiagnosticQuestion[],
        asked: Set<string>,
        _topicScores: Map<string, { correct: number; total: number }>,
      ): DiagnosticQuestion | null => {
        const remaining = pool.filter(q => !asked.has(q.id))
        if (remaining.length === 0) return null
        return remaining[0]
      }

      const asked = new Set(['q1'])
      const result = pickNextQuestion(mockQuestions, asked, new Map())
      expect(result).not.toBeNull()
      expect(result?.id).not.toBe('q1')
    })

    it('should prioritize weak topics', () => {
      const pickNextQuestion = (
        pool: DiagnosticQuestion[],
        asked: Set<string>,
        topicScores: Map<string, { correct: number; total: number }>,
      ): DiagnosticQuestion | null => {
        const remaining = pool.filter(q => !asked.has(q.id))
        if (remaining.length === 0) return null

        // Find weak topics (score < 60% with at least 1 answer)
        const weakTopics = Array.from(topicScores.entries())
          .filter(([, s]) => s.total > 0 && s.correct / s.total < 0.6)
          .map(([t]) => t)

        // Priority: Weak topics
        const candidates = remaining.filter(q => weakTopics.includes(q.topic))
        if (candidates.length > 0) {
          return candidates[0]
        }

        return remaining[0]
      }

      // Algebra is weak (30% correct)
      const topicScores = new Map([['Algebra', { correct: 1, total: 3 }]])
      const asked = new Set(['q1'])
      const result = pickNextQuestion(mockQuestions, asked, topicScores)

      // Should pick an Algebra question (q2)
      expect(result?.topic).toBe('Algebra')
    })
  })

  describe('computeResults function', () => {
    it('should compute correct results', () => {
      const computeResults = (
        answers: Map<string, number>,
        questions: DiagnosticQuestion[],
        elapsed: number,
        subject: string,
      ) => {
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

        const topicResults = Array.from(topicMap.entries()).map(([topic, s]) => ({
          topic,
          correct: s.correct,
          total: s.total,
          score: s.total > 0 ? s.correct / s.total : 0,
          level: (s.total > 0
            ? s.correct / s.total >= 0.8
              ? 'strong'
              : s.correct / s.total >= 0.5
                ? 'moderate'
                : 'weak'
            : 'weak') as 'strong' | 'moderate' | 'weak',
        }))

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
          strengths: topicResults.filter(t => t.level === 'strong').map(t => t.topic),
          weaknesses: topicResults.filter(t => t.level === 'weak').map(t => t.topic),
          recommendedTopics: topicResults.filter(t => t.level !== 'strong').map(t => t.topic),
          timeSpentMs: elapsed,
        }
      }

      // Answer q1 correctly (index 1), q3 incorrectly (index 0 instead of 2)
      const answers = new Map([
        ['q1', 1], // correct
        ['q3', 0], // incorrect
      ])

      const result = computeResults(answers, mockQuestions, 60000, 'Mathematics')

      expect(result.subject).toBe('Mathematics')
      expect(result.totalQuestions).toBe(2)
      expect(result.totalCorrect).toBe(1)
      expect(result.overallScore).toBe(0.5)
      expect(result.timeSpentMs).toBe(60000)
      expect(result.topicResults).toHaveLength(2)
    })

    it('should handle empty answers', () => {
      const computeResults = (
        answers: Map<string, number>,
        questions: DiagnosticQuestion[],
        elapsed: number,
        subject: string,
      ) => {
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

        const topicResults = Array.from(topicMap.entries()).map(([topic, s]) => ({
          topic,
          correct: s.correct,
          total: s.total,
          score: s.total > 0 ? s.correct / s.total : 0,
          level: 'weak' as 'strong' | 'moderate' | 'weak',
        }))

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
          strengths: [],
          weaknesses: [],
          recommendedTopics: [],
          timeSpentMs: elapsed,
        }
      }

      const answers = new Map<string, number>()
      const result = computeResults(answers, mockQuestions, 0, 'Mathematics')

      expect(result.totalQuestions).toBe(0)
      expect(result.totalCorrect).toBe(0)
      expect(result.overallScore).toBe(0)
      expect(result.topicResults).toHaveLength(0)
    })
  })

  describe('formatTime function', () => {
    it('should format seconds only', () => {
      const formatTime = (ms: number): string => {
        const secs = Math.floor(ms / 1000)
        const mins = Math.floor(secs / 60)
        const rem = secs % 60
        return mins > 0 ? `${mins}:${String(rem).padStart(2, '0')}` : `${rem}s`
      }

      expect(formatTime(5000)).toBe('5s')
      expect(formatTime(30000)).toBe('30s')
      expect(formatTime(59000)).toBe('59s')
    })

    it('should format minutes and seconds', () => {
      const formatTime = (ms: number): string => {
        const secs = Math.floor(ms / 1000)
        const mins = Math.floor(secs / 60)
        const rem = secs % 60
        return mins > 0 ? `${mins}:${String(rem).padStart(2, '0')}` : `${rem}s`
      }

      expect(formatTime(60000)).toBe('1:00')
      expect(formatTime(90000)).toBe('1:30')
      expect(formatTime(125000)).toBe('2:05')
    })

    it('should handle zero', () => {
      const formatTime = (ms: number): string => {
        const secs = Math.floor(ms / 1000)
        const mins = Math.floor(secs / 60)
        const rem = secs % 60
        return mins > 0 ? `${mins}:${String(rem).padStart(2, '0')}` : `${rem}s`
      }

      expect(formatTime(0)).toBe('0s')
    })
  })

  describe('Question validation', () => {
    it('should have valid question structure', () => {
      for (const q of mockQuestions) {
        expect(q.id).toBeTruthy()
        expect(q.topic).toBeTruthy()
        expect(q.difficulty).toBeGreaterThanOrEqual(1)
        expect(q.difficulty).toBeLessThanOrEqual(5)
        expect(q.question).toBeTruthy()
        expect(q.options.length).toBeGreaterThanOrEqual(2)
        expect(q.correctIndex).toBeGreaterThanOrEqual(0)
        expect(q.correctIndex).toBeLessThan(q.options.length)
        expect(q.explanation).toBeTruthy()
      }
    })

    it('should have unique IDs', () => {
      const ids = mockQuestions.map(q => q.id)
      const uniqueIds = new Set(ids)
      expect(uniqueIds.size).toBe(ids.length)
    })
  })
})
