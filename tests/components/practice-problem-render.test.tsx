import { fireEvent, render, screen } from '@solidjs/testing-library'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import PracticeProblem from '../../shared/components/PracticeProblem'

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

describe('PracticeProblem Component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should render single problem', () => {
    render(() => (
      <PracticeProblem
        question="What is 2 + 2?"
        options={['3', '4', '5', '6']}
        correctAnswer={1}
        explanation="2 + 2 = 4"
        difficulty="easy"
      />
    ))
    expect(screen.getByText('What is 2 + 2?')).toBeTruthy()
  })

  it('should show difficulty badge', () => {
    render(() => (
      <PracticeProblem
        question="What is 2 + 2?"
        options={['3', '4', '5', '6']}
        correctAnswer={1}
        explanation="2 + 2 = 4"
        difficulty="easy"
      />
    ))
    expect(screen.getByText('easy')).toBeTruthy()
  })

  it('should have dialog', () => {
    render(() => (
      <PracticeProblem
        question="What is 2 + 2?"
        options={['3', '4', '5', '6']}
        correctAnswer={1}
        explanation="2 + 2 = 4"
        difficulty="easy"
      />
    ))
    expect(screen.getByRole('dialog')).toBeTruthy()
  })

  it('should have Submit button', () => {
    render(() => (
      <PracticeProblem
        question="What is 2 + 2?"
        options={['3', '4', '5', '6']}
        correctAnswer={1}
        explanation="2 + 2 = 4"
        difficulty="easy"
      />
    ))
    expect(screen.getByText('Submit')).toBeTruthy()
  })

  it('should select option via radio', async () => {
    render(() => (
      <PracticeProblem
        question="What is 2 + 2?"
        options={['3', '4', '5', '6']}
        correctAnswer={1}
        explanation="2 + 2 = 4"
        difficulty="easy"
      />
    ))
    const radios = screen.getAllByRole('radio')
    expect(radios.length).toBe(4)
    await fireEvent.click(radios[1])
    expect(radios[1].getAttribute('aria-checked')).toBe('true')
  })

  it('should enable Submit after selecting', async () => {
    render(() => (
      <PracticeProblem
        question="What is 2 + 2?"
        options={['3', '4', '5', '6']}
        correctAnswer={1}
        explanation="2 + 2 = 4"
        difficulty="easy"
      />
    ))
    const radios = screen.getAllByRole('radio')
    await fireEvent.click(radios[1])
    const submitBtn = screen.getByText('Submit')
    expect(submitBtn.hasAttribute('disabled')).toBe(false)
  })

  it('should render multiple problems', () => {
    render(() => (
      <PracticeProblem
        questions={[
          {
            question: 'What is 2 + 2?',
            options: ['3', '4'],
            correctAnswer: 1,
            explanation: '4',
            difficulty: 'easy',
          },
          {
            question: 'What is 3 + 3?',
            options: ['5', '6'],
            correctAnswer: 1,
            explanation: '6',
            difficulty: 'medium',
          },
        ]}
      />
    ))
    expect(screen.getByText('What is 2 + 2?')).toBeTruthy()
    expect(screen.getByText('What is 3 + 3?')).toBeTruthy()
  })
})
