/**
 * Wyatt's Notes Account Client
 *
 * Client-side library for user authentication and progress sync.
 * Stores auth token in localStorage and provides sync methods
 * for flashcard progress, diagnostic results, and practice attempts.
 *
 * Usage:
 *   import { account } from '../utils/account'
 *
 *   // Register
 *   await account.register('email@example.com', 'password123')
 *
 *   // Login
 *   await account.login('email@example.com', 'password123')
 *
 *   // Sync flashcard progress
 *   await account.saveFlashcards('math-deck', deckData)
 *
 *   // Load flashcard progress
 *   const progress = await account.getFlashcards()
 */

const API_BASE = 'https://wyattsnotes-account.wyatt-au.workers.dev'
const TOKEN_KEY = 'wyattsnotes-auth-token'
const USER_KEY = 'wyattsnotes-user'

export interface User {
  id: string
  email: string
  displayName: string | null
  createdAt?: number
}

export interface FlashcardProgress {
  cardStates: Record<string, unknown>
  reviewHistory: unknown[]
  lastStudyDate: number | null
  streak: number
  updatedAt: number
}

export interface DiagnosticResult {
  id: string
  subject: string
  totalQuestions: number
  totalCorrect: number
  overallScore: number
  topicResults: unknown[]
  strengths: string[]
  weaknesses: string[]
  timeSpentMs: number | null
  completedAt: number
}

class AccountClient {
  private token: string | null = null
  private user: User | null = null

  constructor() {
    if (typeof window !== 'undefined') {
      this.token = localStorage.getItem(TOKEN_KEY)
      const userStr = localStorage.getItem(USER_KEY)
      if (userStr) {
        try {
          this.user = JSON.parse(userStr)
        } catch {
          localStorage.removeItem(USER_KEY)
        }
      }
    }
  }

  private async request(path: string, options: RequestInit = {}): Promise<unknown> {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...((options.headers as Record<string, string>) || {}),
    }

    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`
    }

    const response = await fetch(`${API_BASE}${path}`, {
      ...options,
      headers,
    })

    const data = await response.json() as { error?: string }

    if (!response.ok) {
      throw new Error(data.error || `Request failed: ${response.status}`)
    }

    return data
  }

  get isLoggedIn(): boolean {
    return this.token !== null && this.user !== null
  }

  get currentUser(): User | null {
    return this.user
  }

  async register(email: string, password: string, displayName?: string): Promise<User> {
    const data = await this.request('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({ email, password, displayName }),
    }) as { user: User; token: string }

    this.token = data.token
    this.user = data.user

    if (typeof window !== 'undefined') {
      localStorage.setItem(TOKEN_KEY, data.token)
      localStorage.setItem(USER_KEY, JSON.stringify(data.user))
    }

    return data.user
  }

  async login(email: string, password: string): Promise<User> {
    const data = await this.request('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    }) as { user: User; token: string }

    this.token = data.token
    this.user = data.user

    if (typeof window !== 'undefined') {
      localStorage.setItem(TOKEN_KEY, data.token)
      localStorage.setItem(USER_KEY, JSON.stringify(data.user))
    }

    return data.user
  }

  async logout(): Promise<void> {
    try {
      await this.request('/api/auth/logout', { method: 'POST' })
    } catch {
      // Ignore errors on logout
    }

    this.token = null
    this.user = null

    if (typeof window !== 'undefined') {
      localStorage.removeItem(TOKEN_KEY)
      localStorage.removeItem(USER_KEY)
    }
  }

  async getMe(): Promise<User> {
    const data = await this.request('/api/auth/me') as { user: User }
    this.user = data.user
    if (typeof window !== 'undefined') {
      localStorage.setItem(USER_KEY, JSON.stringify(data.user))
    }
    return data.user
  }

  // --- Flashcard progress ---

  async getFlashcards(): Promise<Record<string, FlashcardProgress>> {
    if (!this.isLoggedIn) return {}
    const data = await this.request('/api/progress/flashcards') as { progress: Record<string, FlashcardProgress> }
    return data.progress
  }

  async saveFlashcards(deckId: string, deckData: {
    cardStates: Record<string, unknown>
    reviewHistory: unknown[]
    lastStudyDate: number | null
    streak: number
  }): Promise<void> {
    if (!this.isLoggedIn) return
    await this.request(`/api/progress/flashcards/${encodeURIComponent(deckId)}`, {
      method: 'PUT',
      body: JSON.stringify(deckData),
    })
  }

  async deleteFlashcards(deckId: string): Promise<void> {
    if (!this.isLoggedIn) return
    await this.request(`/api/progress/flashcards/${encodeURIComponent(deckId)}`, {
      method: 'DELETE',
    })
  }

  // --- Diagnostic results ---

  async getDiagnostics(): Promise<DiagnosticResult[]> {
    if (!this.isLoggedIn) return []
    const data = await this.request('/api/progress/diagnostics') as { diagnostics: DiagnosticResult[] }
    return data.diagnostics
  }

  async saveDiagnostic(result: {
    subject: string
    totalQuestions: number
    totalCorrect: number
    overallScore: number
    topicResults: unknown[]
    strengths: string[]
    weaknesses: string[]
    timeSpentMs: number | null
  }): Promise<string> {
    if (!this.isLoggedIn) return ''
    const data = await this.request('/api/progress/diagnostics', {
      method: 'POST',
      body: JSON.stringify(result),
    }) as { id: string }
    return data.id
  }

  // --- Practice attempts ---

  async getPracticeAttempts(setId: string): Promise<unknown[]> {
    if (!this.isLoggedIn) return []
    const data = await this.request(`/api/progress/practice/${encodeURIComponent(setId)}`) as { attempts: unknown[] }
    return data.attempts
  }

  async savePracticeAttempt(attempt: {
    problemSet: string
    questionIndex: number
    selectedAnswer: number
    isCorrect: boolean
    timeSpentMs?: number
  }): Promise<void> {
    if (!this.isLoggedIn) return
    await this.request('/api/progress/practice', {
      method: 'POST',
      body: JSON.stringify(attempt),
    })
  }
}

export const account = new AccountClient()
