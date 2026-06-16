-- Wyatt's Notes Account API -- D1 Schema
-- Version: 1.0.0
-- Created: 2026-06-17

-- Users table
CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  display_name TEXT,
  created_at INTEGER NOT NULL DEFAULT (unixepoch()),
  updated_at INTEGER NOT NULL DEFAULT (unixepoch())
);

CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);

-- Flashcard deck progress
CREATE TABLE IF NOT EXISTS flashcard_progress (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  deck_id TEXT NOT NULL,
  card_states TEXT NOT NULL DEFAULT '{}',
  review_history TEXT NOT NULL DEFAULT '[]',
  last_study_date INTEGER,
  streak INTEGER NOT NULL DEFAULT 0,
  created_at INTEGER NOT NULL DEFAULT (unixepoch()),
  updated_at INTEGER NOT NULL DEFAULT (unixepoch()),
  UNIQUE(user_id, deck_id)
);

CREATE INDEX IF NOT EXISTS idx_flashcard_user ON flashcard_progress(user_id);

-- Diagnostic test results
CREATE TABLE IF NOT EXISTS diagnostic_results (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  subject TEXT NOT NULL,
  total_questions INTEGER NOT NULL,
  total_correct INTEGER NOT NULL,
  overall_score REAL NOT NULL,
  topic_results TEXT NOT NULL DEFAULT '[]',
  strengths TEXT NOT NULL DEFAULT '[]',
  weaknesses TEXT NOT NULL DEFAULT '[]',
  time_spent_ms INTEGER,
  completed_at INTEGER NOT NULL DEFAULT (unixepoch())
);

CREATE INDEX IF NOT EXISTS idx_diagnostic_user ON diagnostic_results(user_id);
CREATE INDEX IF NOT EXISTS idx_diagnostic_subject ON diagnostic_results(user_id, subject);

-- Practice problem attempts
CREATE TABLE IF NOT EXISTS practice_attempts (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  problem_set TEXT NOT NULL,
  question_index INTEGER NOT NULL,
  selected_answer INTEGER NOT NULL,
  is_correct INTEGER NOT NULL,
  time_spent_ms INTEGER,
  attempted_at INTEGER NOT NULL DEFAULT (unixepoch())
);

CREATE INDEX IF NOT EXISTS idx_practice_user ON practice_attempts(user_id);
CREATE INDEX IF NOT EXISTS idx_practice_set ON practice_attempts(user_id, problem_set);
