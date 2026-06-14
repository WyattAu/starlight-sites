# ADR-002: SolidJS for Interactive Components

## Status

Accepted

## Context

Interactive components (flashcards, quizzes, diagnostic tests, graph embeds) require client-side JavaScript. Options:
- React (via @astrojs/react)
- SolidJS (via @astrojs/solid-js)
- Vanilla JS (script tags)
- Svelte

## Decision

Use SolidJS for all interactive components.

## Rationale

- **Bundle size**: SolidJS compiles to fine-grained reactivity without virtual DOM. ~1.5KB gzipped per component.
- **Performance**: No virtual DOM diffing. Direct DOM updates via signals.
- **Astro integration**: First-class @astrojs/solid-js integration with island hydration.
- **TypeScript**: Full type safety with solid-js primitives.
- **Familiarity**: Team has experience with SolidJS patterns.

## Consequences

- Positive: Minimal JS shipped per page (only hydrated components).
- Positive: Reactive signals for state management without external libraries.
- Negative: SolidJS ecosystem smaller than React.
- Negative: Some Starlight components assume React (not applicable to this project).

## Metrics

| Metric | SolidJS | React |
|--------|---------|-------|
| Bundle size (gzipped) | ~1.5KB | ~42KB |
| Hydration cost | Signal-based | VDOM diff |
| Learning curve | Moderate | Low |
