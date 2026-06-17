# Component Storybook

**Last Updated:** 2026-06-17  
**Status:** Active

---

## Overview

This document serves as a living storybook for all shared SolidJS components in Wyatt's Notes. Each component is documented with:
- Props interface
- Usage examples
- Accessibility notes
- Testing coverage

---

## Components

### 1. FlashcardDeck

**Purpose:** Spaced repetition flashcard system with SM-2 algorithm

**Props:**
```typescript
interface FlashcardDeckProps {
  cards: Flashcard[]
  deckId: string
  title?: string
  description?: string
}

interface Flashcard {
  id: string
  front: string
  back: string
  tags: string[]
  difficulty?: 'easy' | 'medium' | 'hard'
}
```

**Usage:**
```tsx
<FlashcardDeck
  deckId="physics-mechanics"
  title="Classical Mechanics"
  cards={[
    {
      id: '1',
      front: 'What is Newton\'s second law?',
      back: 'F = ma',
      tags: ['mechanics', 'newton'],
      difficulty: 'easy'
    }
  ]}
/>
```

**Features:**
- SM-2 spaced repetition algorithm
- localStorage persistence
- Stats view with mastery breakdown
- Settings for export/import
- Keyboard shortcuts (1-4 for ratings)

**Accessibility:**
- ARIA labels for all interactive elements
- Keyboard navigation support
- Screen reader compatible

**Tests:** 11 tests passing

---

### 2. DiagnosticTest

**Purpose:** Adaptive diagnostic assessment with dynamic question selection

**Props:**
```typescript
interface DiagnosticTestProps {
  subject: string
  questions: DiagnosticQuestion[]
  onComplete: (results: DiagnosticResults) => void
  maxQuestions?: number
}

interface DiagnosticQuestion {
  id: string
  topic: string
  difficulty: number
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}
```

**Usage:**
```tsx
<DiagnosticTest
  subject="Mathematics"
  questions={questions}
  onComplete={(results) => console.log(results)}
  maxQuestions={10}
/>
```

**Features:**
- Adaptive question selection
- Topic-based scoring
- Strength/weakness analysis
- Review recommendations

**Accessibility:**
- Dialog with proper ARIA
- Radio group for options
- Keyboard navigation

**Tests:** 9 tests passing

---

### 3. PracticeProblem

**Purpose:** Multiple-choice practice questions with difficulty levels

**Props:**
```typescript
interface PracticeProblemProps {
  question?: string
  options?: string[]
  correctAnswer?: number
  explanation?: string
  difficulty?: Difficulty
  questions?: PracticeQuestionData[]
}

type Difficulty = 'easy' | 'medium' | 'hard'
```

**Usage:**
```tsx
<PracticeProblem
  questions={[
    {
      question: 'What is 2 + 2?',
      options: ['3', '4', '5', '6'],
      correctAnswer: 1,
      explanation: '2 + 2 = 4',
      difficulty: 'easy'
    }
  ]}
/>
```

**Features:**
- Single or multiple questions
- Difficulty indicators
- Immediate feedback
- Explanation display

**Accessibility:**
- Clear option labels
- Keyboard navigation
- Screen reader support

**Tests:** 7 tests passing

---

### 4. BaseDialog

**Purpose:** Accessible dialog component using Kobalte

**Props:**
```typescript
interface BaseDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: string
  children: JSX.Element
  size?: 'sm' | 'md' | 'lg'
}
```

**Usage:**
```tsx
<BaseDialog
  open={isOpen()}
  onOpenChange={setIsOpen}
  title="Settings"
  size="md"
>
  <p>Dialog content</p>
</BaseDialog>
```

**Features:**
- Focus trap
- Escape to close
- Backdrop click to close
- Portal rendering

**Accessibility:**
- ARIA dialog role
- Focus management
- Keyboard navigation

**Tests:** Indirect coverage via other components

---

### 5. LocaleSwitcher

**Purpose:** Language switching UI for i18n

**Props:**
```typescript
interface LocaleSwitcherProps {
  currentLocale?: string
  onLocaleChange?: (locale: string) => void
}
```

**Usage:**
```tsx
<LocaleSwitcher
  currentLocale="en"
  onLocaleChange={(locale) => setLocale(locale)}
/>
```

**Features:**
- Dropdown menu
- Enabled locale filtering
- Native language names

**Accessibility:**
- ARIA listbox
- Keyboard navigation
- Screen reader labels

**Tests:** No dedicated tests yet

---

### 6. ToastProvider

**Purpose:** Toast notification system using solid-sonner

**Usage:**
```tsx
// In root component
<ToastProvider>
  <App />
</ToastProvider>

// In any component
import { toast } from 'solid-sonner'

toast.success('Saved successfully!')
toast.error('Something went wrong')
```

**Features:**
- Multiple toast types (success, error, info)
- Auto-dismiss
- Queue management

**Accessibility:**
- ARIA live regions
- Screen reader announcements

**Tests:** No dedicated tests yet

---

## Utility Functions

### 1. animate.ts

**Purpose:** Auto-animate directive for SolidJS

**Usage:**
```tsx
import { animate } from '../utils/animate'

<div use:animate>List items</div>
```

### 2. jsonld.ts

**Purpose:** JSON-LD structured data generation

**Usage:**
```typescript
import { generateCourseSchema } from '../utils/jsonld'

const schema = generateCourseSchema({
  name: 'Physics',
  description: 'Classical mechanics'
})
```

### 3. sanitize.ts

**Purpose:** HTML sanitization using DOMPurify

**Usage:**
```typescript
import { sanitizeHtml } from '../utils/sanitize'

const clean = sanitizeHtml(userInput)
```

### 4. colors.ts

**Purpose:** Shared color constants

**Usage:**
```typescript
import { COLORS, DIFFICULTY_COLORS } from '../utils/colors'

const color = DIFFICULTY_COLORS.easy // '#2ecc71'
```

---

## Testing Strategy

### Unit Tests
- SM-2 algorithm
- Storage functions
- Color constants
- Sanitization

### Component Tests
- Rendering
- User interactions
- Accessibility
- Edge cases

### Integration Tests
- Component combinations
- State management
- Event handling

---

## Design Principles

1. **Accessibility First** — All components meet WCAG 2.1 AA
2. **Keyboard Navigation** — Full keyboard support
3. **Responsive Design** — Works on all screen sizes
4. **Themeable** — Uses CSS custom properties
5. **Composable** — Components work together

---

*This document should be updated when components are added, modified, or deprecated.*
