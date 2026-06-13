---
template: splash
title: Programming Languages
description: 'Programming language notes covering syntax, paradigms, concurrency, and best practices across multiple languages.'
hero:
  tagline: Comparative programming language notes. Covers syntax, paradigms, concurrency models, and best practices across 11 languages to help you choose the right tool for the job.
  actions:
    - text: Browse Notes
      link: /dart/01-intro/
      icon: right-arrow
      variant: primary
---

## Languages Covered

| Language | Paradigm | Typing | Concurrency Model | Best For |
|----------|----------|--------|-------------------|----------|
| [Dart](/dart/01-intro/) | Object-oriented, Functional | Static | Isolates (async/await) | Flutter apps, client-side |
| [Elixir](/elixir/) | Functional | Dynamic | Actor model (processes) | Distributed systems, web |
| [Go](/go/) | Procedural, Concurrent | Static | Goroutines + channels | Systems, microservices |
| [Haskell](/haskell/) | Purely functional | Static | Green threads (GHC RTS) | Research, correctness |
| [Java](/java/) | Object-oriented | Static | Threads + virtual threads | Enterprise, Android |
| [Kotlin](/kotlin/) | Object-oriented, Functional | Static | Coroutines | Android, server-side |
| [Python](/python/) | Multi-paradigm | Dynamic | asyncio + GIL | Scripting, data science |
| [Ruby](/ruby/) | Object-oriented | Dynamic | Fibers, GIL | Web (Rails), scripting |
| [Rust](/rust/) | Multi-paradigm | Static | async/await + Send/Sync | Systems, WebAssembly |
| [Swift](/swift/) | Object-oriented, Functional | Static | async/await, actors | iOS/macOS, server-side |
| [TypeScript](/typescript/) | Multi-paradigm | Static (erased) | Event loop (Node.js) | Web, full-stack |

## Language Families

### Systems Languages
**Go, Rust** — compiled, memory-safe (Rust) or garbage-collected (Go), designed for performance-critical infrastructure.

### Enterprise Languages
**Java, Kotlin** — JVM-based, strong static typing, mature ecosystems, extensive tooling.

### Functional Languages
**Haskell, Elixir** — emphasis on pure functions, immutability, and algebraic types. Haskell is statically typed; Elixir runs on the Erlang VM.

### Scripting Languages
**Python, Ruby, TypeScript** — dynamic typing (TypeScript adds optional static types), rapid prototyping, large package ecosystems.

### Mobile-First Languages
**Dart, Swift, Kotlin** — designed for or heavily used in mobile app development with platform-specific tooling.

## How to Use These Notes

1. **Compare across languages** — each language page covers syntax, type system, concurrency, and standard library
2. **Focus on paradigms** — understanding the paradigm (OOP, functional, concurrent) transfers across languages
3. **Implement the same program** — write a small project in 2-3 languages to feel the differences
4. **Read the "Common Pitfalls" section** — each language page highlights mistakes learners frequently make

## Study Strategy

- **Learn one language deeply first** — breadth comes after depth; master one before comparing
- **Understand the type system** — static vs dynamic, strong vs weak typing affects everything
- **Study concurrency early** — concurrency models differ drastically between languages
- **Read other people's code** — open source projects reveal idiomatic patterns
- **Build something real** — tutorials teach syntax; projects teach engineering
