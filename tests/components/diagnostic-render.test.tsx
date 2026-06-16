import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, fireEvent, screen } from '@solidjs/testing-library'
import DiagnosticTest from '../../shared/components/DiagnosticTest'
import type { DiagnosticQuestion } from '../../shared/components/DiagnosticTest'

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false, media: query, onchange: null,
    addListener: vi.fn(), removeListener: vi.fn(),
    addEventListener: vi.fn(), removeEventListener: vi.fn(), dispatchEvent: vi.fn(),
  })),
})

describe('DiagnosticTest Component', () => {
  const mockQuestions: DiagnosticQuestion[] = [
    { id: 'q1', topic: 'Algebra', difficulty: 2, question: 'What is 2 + 2?', options: ['3', '4', '5', '6'], correctIndex: 1, explanation: '2 + 2 = 4' },
    { id: 'q2', topic: 'Geometry', difficulty: 3, question: 'Area of circle?', options: ['pi*r', 'pi*r^2', '2*pi*r', 'pi*d^2'], correctIndex: 1, explanation: 'A = pi*r^2' },
  ]
  const mockOnComplete = vi.fn()

  beforeEach(() => { vi.clearAllMocks() })

  it('should render empty state', () => {
    render(() => <DiagnosticTest subject="Math" questions={[]} onComplete={mockOnComplete} />)
    expect(screen.getByText('No questions available.')).toBeTruthy()
  })

  it('should render with questions', () => {
    render(() => <DiagnosticTest subject="Math" questions={mockQuestions} onComplete={mockOnComplete} />)
    expect(screen.getByText(/Question/)).toBeTruthy()
  })

  it('should show radio group', () => {
    render(() => <DiagnosticTest subject="Math" questions={mockQuestions} onComplete={mockOnComplete} />)
    expect(screen.getByRole('radiogroup', { name: 'Answer options' })).toBeTruthy()
  })

  it('should have Submit button', () => {
    render(() => <DiagnosticTest subject="Math" questions={mockQuestions} onComplete={mockOnComplete} />)
    expect(screen.getByText('Submit')).toBeTruthy()
  })

  it('should have accessible region', () => {
    render(() => <DiagnosticTest subject="Math" questions={mockQuestions} onComplete={mockOnComplete} />)
    expect(screen.getByRole('region', { name: 'Diagnostic test: Math' })).toBeTruthy()
  })

  it('should have accessible empty state', () => {
    render(() => <DiagnosticTest subject="Math" questions={[]} onComplete={mockOnComplete} />)
    expect(screen.getByRole('region', { name: 'Diagnostic test' })).toBeTruthy()
  })

  it('should select option via radio button', async () => {
    render(() => <DiagnosticTest subject="Math" questions={mockQuestions} onComplete={mockOnComplete} />)
    const radios = screen.getAllByRole('radio')
    expect(radios.length).toBeGreaterThanOrEqual(4)
    await fireEvent.click(radios[0])
    expect(radios[0].getAttribute('aria-checked')).toBe('true')
  })

  it('should enable Submit after selecting option', async () => {
    render(() => <DiagnosticTest subject="Math" questions={mockQuestions} onComplete={mockOnComplete} />)
    const radios = screen.getAllByRole('radio')
    await fireEvent.click(radios[0])
    const submitBtn = screen.getByText('Submit')
    expect(submitBtn.hasAttribute('disabled')).toBe(false)
  })

  it('should show results after completing test', async () => {
    render(() => <DiagnosticTest subject="Math" questions={mockQuestions} onComplete={mockOnComplete} maxQuestions={1} />)
    const radios = screen.getAllByRole('radio')
    await fireEvent.click(radios[1])
    await fireEvent.click(screen.getByText('Submit'))
    await fireEvent.click(screen.getByText('View Results'))
    expect(mockOnComplete).toHaveBeenCalled()
  })
})
