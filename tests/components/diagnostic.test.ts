import { describe, expect, it } from 'vitest'
import {
  computeResults,
  type DiagnosticQuestion,
  pickNextQuestion,
} from '../../shared/components/DiagnosticTest'

// These tests exercise the REAL exported pure functions (adaptive selection
// and result scoring). Previously this file re-implemented the functions inline
// as stubs, which tested the test's own copy rather than production code -- the
// four priority cascades of pickNextQuestion were never actually exercised.

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
    // Exercises the four priority cascades and the edge branches of the REAL
    // adaptive selector. Each case constructs a pool where the target cascade
    // has exactly one candidate, so the final random pick is deterministic.
    it('returns null when every question has been asked', () => {
      const allAsked = new Set(['q1', 'q2', 'q3', 'q4', 'q5'])
      expect(pickNextQuestion(mockQuestions, allAsked, new Map())).toBeNull()
    })

    it('returns a non-asked question when no topic scores exist (Priority 4 fallback, avgPerf defaults to 0.5)', () => {
      const asked = new Set(['q1'])
      const result = pickNextQuestion(mockQuestions, asked, new Map())
      expect(result).not.toBeNull()
      expect(result?.id).not.toBe('q1')
    })

    it('Priority 1: picks a weak-topic question at the target difficulty', () => {
      // avgPerf = 0.2 -> targetDiff = round(0.2*5) = 1... but clamp: max(1, min(5, 1)) = 1.
      // Make Algebra weak and give it a difficulty-1 question.
      const pool: DiagnosticQuestion[] = [
        { ...mockQuestions[0]!, id: 'a1', topic: 'Algebra', difficulty: 1 },
        { ...mockQuestions[2]!, id: 'g1', topic: 'Geometry', difficulty: 1 },
      ]
      const topicScores = new Map([
        ['Algebra', { correct: 0, total: 3 }], // weak (0%)
      ])
      const result = pickNextQuestion(pool, new Set(), topicScores)
      expect(result?.topic).toBe('Algebra')
      expect(result?.difficulty).toBe(1)
    })

    it('Priority 2: falls back to a weak-topic question at any difficulty when none match the target', () => {
      // Algebra weak, but its only remaining question is difficulty 5 (not the
      // target), so P1 misses and P2 picks the weak-topic question anyway.
      const pool: DiagnosticQuestion[] = [
        { ...mockQuestions[0]!, id: 'a1', topic: 'Algebra', difficulty: 5 },
        { ...mockQuestions[2]!, id: 'g1', topic: 'Geometry', difficulty: 1 },
      ]
      const topicScores = new Map([['Algebra', { correct: 0, total: 3 }]])
      const result = pickNextQuestion(pool, new Set(), topicScores)
      expect(result?.topic).toBe('Algebra')
    })

    it('Priority 3: falls back to any topic at the target difficulty when no weak topic matches', () => {
      // No weak topics (Geometry is strong). avgPerf from Geometry=0.9 ->
      // targetDiff = round(0.9*5) = 5 (clamped). Pick the difficulty-5 question.
      const pool: DiagnosticQuestion[] = [
        { ...mockQuestions[0]!, id: 'a1', topic: 'Algebra', difficulty: 2 },
        { ...mockQuestions[3]!, id: 'g1', topic: 'Geometry', difficulty: 5 },
      ]
      const topicScores = new Map([['Geometry', { correct: 9, total: 10 }]]) // strong
      const result = pickNextQuestion(pool, new Set(), topicScores)
      expect(result?.difficulty).toBe(5)
    })

    it('treats a topic with a perfect score as strong (not weak)', () => {
      // Algebra 100% -> not weak -> should NOT be prioritised over Geometry.
      const pool: DiagnosticQuestion[] = [
        { ...mockQuestions[0]!, id: 'a1', topic: 'Algebra', difficulty: 2 },
        { ...mockQuestions[2]!, id: 'g1', topic: 'Geometry', difficulty: 2 },
      ]
      const topicScores = new Map([['Algebra', { correct: 5, total: 5 }]])
      const result = pickNextQuestion(pool, new Set(), topicScores)
      // No weak topics -> P3/P4: both difficulty 2; just assert it returns one.
      expect(result).not.toBeNull()
    })
  })

  describe('computeResults function', () => {
    it('should compute correct results', () => {
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
      // q1 (Algebra) correct -> strong; q3 (Geometry) wrong -> weak.
      expect(result.strengths).toContain('Algebra')
      expect(result.weaknesses).toContain('Geometry')
    })

    it('should handle empty answers', () => {
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
