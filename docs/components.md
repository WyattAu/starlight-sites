---
title: "Components"
description: "Complete component library documentation for Wyatt's Notes."
---

# Component Library

All components are built with SolidJS and use Kobalte primitives for accessibility.

## Core Components

### ActionButton

Consistent button component with 4 variants and 3 sizes.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | 'primary' \| 'secondary' \| 'danger' \| 'ghost' | 'primary' | Button style |
| size | 'sm' \| 'md' \| 'lg' | 'md' | Button size |
| icon | () => JSX.Element | - | Optional icon |
| children | string \| JSX.Element | - | Button content |
| onClick | () => void | - | Click handler |
| disabled | boolean | false | Disabled state |
| loading | boolean | false | Loading state |
| type | 'button' \| 'submit' \| 'reset' | 'button' | Button type |

**Usage:**
```tsx
<ActionButton variant="primary" size="md" onClick={handleSubmit}>
  Submit
</ActionButton>
```

### StatBox

Stat display component with highlight and color variants.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| label | string | - | Stat label |
| value | string \| number | - | Stat value |
| highlight | boolean | false | Highlighted state |
| color | 'default' \| 'success' \| 'warning' \| 'error' | 'default' | Color variant |
| icon | () => JSX.Element | - | Optional icon |

**Usage:**
```tsx
<StatBox label="Score" value={42} highlight={true} color="success" />
```

### Skeleton

Loading state placeholder with pulse/wave animations.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| width | string \| number | - | Custom width |
| height | string \| number | - | Custom height |
| variant | 'text' \| 'circular' \| 'rectangular' | 'text' | Shape variant |
| animation | 'pulse' \| 'wave' \| 'none' | 'pulse' | Animation type |

**SkeletonGroup:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| rows | number | 3 | Number of skeleton rows |

### SkipLink

Accessibility skip navigation link. Hidden by default, visible on focus.

```tsx
<SkipLink />
```

## Search Components

### SearchModal

Spotlight search with Cmd+K trigger.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| open | boolean | - | Modal visibility |
| onOpenChange | (open: boolean) => void | - | Visibility change handler |
| onSelect | (result: SearchResult) => void | - | Result selection handler |

**Keyboard shortcuts:**
- Cmd+K / Ctrl+K: Open modal
- Escape: Close modal
- ↑↓: Navigate results
- Enter: Select result

### Search

Legacy inline search (being replaced by SearchModal).

## Theme Components

### ThemePreview

Live theme preview with comparison.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| open | boolean | - | Modal visibility |
| onOpenChange | (open: boolean) => void | - | Visibility change handler |

Features: Side-by-side comparison, contrast ratio display, all 10 themes.

### ThemeCreator

Custom theme creator with WCAG validation.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| open | boolean | - | Modal visibility |
| onOpenChange | (open: boolean) => void | - | Visibility change handler |

Features: Color pickers, live preview, WCAG AA validation, export/import CSS.

## Layout Components

### SiteNavigator

Consolidated site navigator (replaces 3 duplicate implementations).

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| open | boolean | - | Modal visibility |
| onOpenChange | (open: boolean) => void | - | Visibility change handler |

Features: Search filter, category groups, keyboard navigation, responsive.

### EmbedContainer

Consistent embed layout for Desmos/PhET/etc.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| title | string | - | Embed title |
| source | string | - | Source attribution |
| sourceUrl | string | - | Source URL |
| width | number | - | Aspect ratio width |
| height | number | - | Aspect ratio height |
| children | () => JSX.Element | - | Embed content |

## Interactive Components

### FlashcardDeck

Full spaced-repetition flashcard system with SM-2 algorithm.

### DiagnosticTest

Adaptive diagnostic assessment with question selection.

### SettingsDialog

Reader settings panel with 11 controls.

### ReviewQueue

Multi-deck review queue aggregation.

### PracticeProblem

Multiple-choice practice questions.

## Utility Components

### ToastProvider

SolidJS toast notification wrapper.

### ErrorBoundary

SolidJS error boundary with fallback UI.

### LocaleSwitcher

Language switching dropdown with Kobalte Select.

### WasmWidget

WASM-based interactive widgets (Fourier, sine wave).
