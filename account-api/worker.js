/**
 * Wyatt's Notes Account API Worker
 *
 * Provides user authentication and progress sync for flashcards,
 * diagnostics, and practice problems. Uses Cloudflare D1 for storage
 * and KV for session tokens.
 *
 * Endpoints:
 *   POST /api/auth/register   - Create account
 *   POST /api/auth/login      - Login
 *   POST /api/auth/logout     - Logout
 *   GET  /api/auth/me         - Get current user
 *
 *   GET  /api/progress/flashcards           - Get all flashcard progress
 *   PUT  /api/progress/flashcards/:deckId   - Save flashcard deck progress
 *   DELETE /api/progress/flashcards/:deckId - Delete flashcard deck progress
 *
 *   GET  /api/progress/diagnostics          - Get diagnostic results
 *   POST /api/progress/diagnostics          - Save diagnostic result
 *
 *   GET  /api/progress/practice/:setId      - Get practice attempts for a set
 *   POST /api/progress/practice             - Save practice attempt
 *
 *   GET  /api/health                        - Health check
 */

// --- Crypto helpers (Web Crypto API, available in Workers) ---

async function hashPassword(password, salt) {
  const encoder = new TextEncoder()
  const data = encoder.encode(salt + password)
  const hash = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join('')
}

function generateId() {
  return crypto.randomUUID()
}

function generateToken() {
  const bytes = new Uint8Array(32)
  crypto.getRandomValues(bytes)
  return Array.from(bytes).map(b => b.toString(16).padStart(2, '0')).join('')
}

// --- CORS ---

function corsHeaders(origin, methods = 'GET, POST, PUT, DELETE, OPTIONS') {
  return {
    'Access-Control-Allow-Origin': origin || '*',
    'Access-Control-Allow-Methods': methods,
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Max-Age': '86400',
  }
}

function jsonResponse(data, status = 200, origin) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) },
  })
}

function errorResponse(message, status = 400, origin) {
  return jsonResponse({ error: message }, status, origin)
}

// --- Auth middleware ---

async function authenticate(request, env) {
  const authHeader = request.headers.get('Authorization')
  if (!authHeader?.startsWith('Bearer ')) {
    return null
  }
  const token = authHeader.slice(7)
  const userId = await env.SESSIONS.get(`session:${token}`)
  if (!userId) {
    return null
  }
  return userId
}

function requireAuth(request, env) {
  const origin = request.headers.get('Origin') || env.CORS_ORIGIN
  return authenticate(request, env).then(userId => {
    if (!userId) return { userId: null, error: errorResponse('Unauthorized', 401, origin) }
    return { userId, error: null }
  })
}

// --- Route handlers ---

async function handleRegister(request, env) {
  const origin = request.headers.get('Origin') || env.CORS_ORIGIN
  const { email, password, displayName } = await request.json()

  if (!email || !password) {
    return errorResponse('Email and password required', 400, origin)
  }
  if (password.length < 8) {
    return errorResponse('Password must be at least 8 characters', 400, origin)
  }

  // Check if user exists
  const existing = await env.DB.prepare('SELECT id FROM users WHERE email = ?').bind(email).first()
  if (existing) {
    return errorResponse('Email already registered', 409, origin)
  }

  const id = generateId()
  const salt = generateId()
  const passwordHash = await hashPassword(password, salt)

  await env.DB.prepare(
    'INSERT INTO users (id, email, password_hash, display_name) VALUES (?, ?, ?, ?)',
  ).bind(id, email, `${salt}:${passwordHash}`, displayName || null).run()

  // Create session
  const token = generateToken()
  const expiryHours = parseInt(env.TOKEN_EXPIRY_HOURS || '720')
  await env.SESSIONS.put(`session:${token}`, id, { expirationTtl: expiryHours * 3600 })

  return jsonResponse({
    user: { id, email, displayName: displayName || null },
    token,
  }, 201, origin)
}

async function handleLogin(request, env) {
  const origin = request.headers.get('Origin') || env.CORS_ORIGIN
  const { email, password } = await request.json()

  if (!email || !password) {
    return errorResponse('Email and password required', 400, origin)
  }

  const user = await env.DB.prepare(
    'SELECT id, email, password_hash, display_name FROM users WHERE email = ?',
  ).bind(email).first()

  if (!user) {
    return errorResponse('Invalid credentials', 401, origin)
  }

  const [salt, storedHash] = user.password_hash.split(':')
  const passwordHash = await hashPassword(password, salt)

  if (passwordHash !== storedHash) {
    return errorResponse('Invalid credentials', 401, origin)
  }

  const token = generateToken()
  const expiryHours = parseInt(env.TOKEN_EXPIRY_HOURS || '720')
  await env.SESSIONS.put(`session:${token}`, user.id, { expirationTtl: expiryHours * 3600 })

  return jsonResponse({
    user: { id: user.id, email: user.email, displayName: user.display_name },
    token,
  }, 200, origin)
}

async function handleLogout(request, env) {
  const origin = request.headers.get('Origin') || env.CORS_ORIGIN
  const authHeader = request.headers.get('Authorization')
  if (authHeader?.startsWith('Bearer ')) {
    const token = authHeader.slice(7)
    await env.SESSIONS.delete(`session:${token}`)
  }
  return jsonResponse({ ok: true }, 200, origin)
}

async function handleMe(request, env) {
  const origin = request.headers.get('Origin') || env.CORS_ORIGIN
  const { userId, error } = await requireAuth(request, env)
  if (error) return error

  const user = await env.DB.prepare(
    'SELECT id, email, display_name, created_at FROM users WHERE id = ?',
  ).bind(userId).first()

  if (!user) {
    return errorResponse('User not found', 404, origin)
  }

  return jsonResponse({
    user: {
      id: user.id,
      email: user.email,
      displayName: user.display_name,
      createdAt: user.created_at,
    },
  }, 200, origin)
}

// --- Flashcard progress ---

async function handleGetFlashcards(request, env) {
  const origin = request.headers.get('Origin') || env.CORS_ORIGIN
  const { userId, error } = await requireAuth(request, env)
  if (error) return error

  const results = await env.DB.prepare(
    'SELECT deck_id, card_states, review_history, last_study_date, streak, updated_at FROM flashcard_progress WHERE user_id = ?',
  ).bind(userId).all()

  const progress = {}
  for (const row of results.results) {
    progress[row.deck_id] = {
      cardStates: JSON.parse(row.card_states),
      reviewHistory: JSON.parse(row.review_history),
      lastStudyDate: row.last_study_date,
      streak: row.streak,
      updatedAt: row.updated_at,
    }
  }

  return jsonResponse({ progress }, 200, origin)
}

async function handleSaveFlashcard(request, env, deckId) {
  const origin = request.headers.get('Origin') || env.CORS_ORIGIN
  const { userId, error } = await requireAuth(request, env)
  if (error) return error

  const { cardStates, reviewHistory, lastStudyDate, streak } = await request.json()

  const id = generateId()
  await env.DB.prepare(
    `INSERT INTO flashcard_progress (id, user_id, deck_id, card_states, review_history, last_study_date, streak)
     VALUES (?, ?, ?, ?, ?, ?, ?)
     ON CONFLICT(user_id, deck_id) DO UPDATE SET
       card_states = excluded.card_states,
       review_history = excluded.review_history,
       last_study_date = excluded.last_study_date,
       streak = excluded.streak,
       updated_at = unixepoch()`,
  ).bind(
    id,
    userId,
    deckId,
    JSON.stringify(cardStates || {}),
    JSON.stringify(reviewHistory || []),
    lastStudyDate || null,
    streak || 0,
  ).run()

  return jsonResponse({ ok: true, updatedAt: Math.floor(Date.now() / 1000) }, 200, origin)
}

async function handleDeleteFlashcard(request, env, deckId) {
  const origin = request.headers.get('Origin') || env.CORS_ORIGIN
  const { userId, error } = await requireAuth(request, env)
  if (error) return error

  await env.DB.prepare(
    'DELETE FROM flashcard_progress WHERE user_id = ? AND deck_id = ?',
  ).bind(userId, deckId).run()

  return jsonResponse({ ok: true }, 200, origin)
}

// --- Diagnostic results ---

async function handleGetDiagnostics(request, env) {
  const origin = request.headers.get('Origin') || env.CORS_ORIGIN
  const { userId, error } = await requireAuth(request, env)
  if (error) return error

  const results = await env.DB.prepare(
    'SELECT id, subject, total_questions, total_correct, overall_score, topic_results, strengths, weaknesses, time_spent_ms, completed_at FROM diagnostic_results WHERE user_id = ? ORDER BY completed_at DESC LIMIT 50',
  ).bind(userId).all()

  const diagnostics = results.results.map(row => ({
    id: row.id,
    subject: row.subject,
    totalQuestions: row.total_questions,
    totalCorrect: row.total_correct,
    overallScore: row.overall_score,
    topicResults: JSON.parse(row.topic_results),
    strengths: JSON.parse(row.strengths),
    weaknesses: JSON.parse(row.weaknesses),
    timeSpentMs: row.time_spent_ms,
    completedAt: row.completed_at,
  }))

  return jsonResponse({ diagnostics }, 200, origin)
}

async function handleSaveDiagnostic(request, env) {
  const origin = request.headers.get('Origin') || env.CORS_ORIGIN
  const { userId, error } = await requireAuth(request, env)
  if (error) return error

  const body = await request.json()
  const id = generateId()

  await env.DB.prepare(
    `INSERT INTO diagnostic_results (id, user_id, subject, total_questions, total_correct, overall_score, topic_results, strengths, weaknesses, time_spent_ms)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
  ).bind(
    id,
    userId,
    body.subject,
    body.totalQuestions,
    body.totalCorrect,
    body.overallScore,
    JSON.stringify(body.topicResults || []),
    JSON.stringify(body.strengths || []),
    JSON.stringify(body.weaknesses || []),
    body.timeSpentMs || null,
  ).run()

  return jsonResponse({ id, completedAt: Math.floor(Date.now() / 1000) }, 201, origin)
}

// --- Practice attempts ---

async function handleGetPractice(request, env, setId) {
  const origin = request.headers.get('Origin') || env.CORS_ORIGIN
  const { userId, error } = await requireAuth(request, env)
  if (error) return error

  const results = await env.DB.prepare(
    'SELECT question_index, selected_answer, is_correct, time_spent_ms, attempted_at FROM practice_attempts WHERE user_id = ? AND problem_set = ? ORDER BY attempted_at DESC',
  ).bind(userId, setId).all()

  return jsonResponse({ attempts: results.results }, 200, origin)
}

async function handleSavePractice(request, env) {
  const origin = request.headers.get('Origin') || env.CORS_ORIGIN
  const { userId, error } = await requireAuth(request, env)
  if (error) return error

  const body = await request.json()
  const id = generateId()

  await env.DB.prepare(
    `INSERT INTO practice_attempts (id, user_id, problem_set, question_index, selected_answer, is_correct, time_spent_ms)
     VALUES (?, ?, ?, ?, ?, ?, ?)`,
  ).bind(
    id,
    userId,
    body.problemSet,
    body.questionIndex,
    body.selectedAnswer,
    body.isCorrect ? 1 : 0,
    body.timeSpentMs || null,
  ).run()

  return jsonResponse({ ok: true }, 201, origin)
}

// --- Router ---

async function handleRequest(request, env) {
  const url = new URL(request.url)
  const path = url.pathname
  const method = request.method

  // CORS preflight
  if (method === 'OPTIONS') {
    const origin = request.headers.get('Origin') || env.CORS_ORIGIN
    return new Response(null, { status: 204, headers: corsHeaders(origin) })
  }

  // Health check
  if (path === '/api/health') {
    return jsonResponse({ status: 'ok', service: 'wyattsnotes-account', version: '1.0.0' })
  }

  // Auth routes
  if (path === '/api/auth/register' && method === 'POST') {
    return handleRegister(request, env)
  }
  if (path === '/api/auth/login' && method === 'POST') {
    return handleLogin(request, env)
  }
  if (path === '/api/auth/logout' && method === 'POST') {
    return handleLogout(request, env)
  }
  if (path === '/api/auth/me' && method === 'GET') {
    return handleMe(request, env)
  }

  // Flashcard progress
  if (path === '/api/progress/flashcards' && method === 'GET') {
    return handleGetFlashcards(request, env)
  }
  const flashcardMatch = path.match(/^\/api\/progress\/flashcards\/(.+)$/)
  if (flashcardMatch && method === 'PUT') {
    return handleSaveFlashcard(request, env, flashcardMatch[1])
  }
  if (flashcardMatch && method === 'DELETE') {
    return handleDeleteFlashcard(request, env, flashcardMatch[1])
  }

  // Diagnostic results
  if (path === '/api/progress/diagnostics' && method === 'GET') {
    return handleGetDiagnostics(request, env)
  }
  if (path === '/api/progress/diagnostics' && method === 'POST') {
    return handleSaveDiagnostic(request, env)
  }

  // Practice attempts
  const practiceMatch = path.match(/^\/api\/progress\/practice\/(.+)$/)
  if (practiceMatch && method === 'GET') {
    return handleGetPractice(request, env, practiceMatch[1])
  }
  if (path === '/api/progress/practice' && method === 'POST') {
    return handleSavePractice(request, env)
  }

  // 404
  const origin = request.headers.get('Origin') || env.CORS_ORIGIN
  return errorResponse('Not found', 404, origin)
}

export default {
  fetch: handleRequest,
}
