---
title: Haskell
description: "Introduction to Haskell notes."
---

# Haskell

Welcome to the Haskell notes. Haskell is a purely functional, lazily evaluated language with a strong static type system. Everything is an expression, side effects are managed through monads, and types are inferred unless you annotate them.

## Why This Matters

Haskell's approach to programming — purity, immutability, and referential transparency — forces you to think about program structure differently. Concepts learned in Haskell (monads, functors, type classes) directly transfer to other languages like Rust, Scala, and Kotlin. Understanding lazy evaluation helps you reason about performance and space leaks in any language.

## What You Will Learn

- **Pure functions**: Functions with no side effects, always returning the same output for the same input
- **Type classes**: Ad-hoc polymorphism through interface-like constraints on types
- **Monads**: Sequencing computations with effects (IO, state, errors) in a pure functional setting
- **Lazy evaluation**: Values are computed only when needed, enabling infinite data structures
- **Algebraic data types**: Modelling data precisely with sum and product types

## Cross-References

- **[Abstract Algebra](/docs/university/mathematics/abstract-algebra)**: Groups, rings, and fields — the algebraic structures that inspire Haskell's type class hierarchy.
- **[Category Theory](/docs/university/mathematics/category-theory)**: Functors, natural transformations, and monads have their mathematical foundations here.

Browse the content using the sidebar navigation on the left.

## Common Mistakes

**Confusing laziness with inefficiency:** Lazy evaluation delays computation until needed, which can save work (short-circuit evaluation, infinite data structures). But it can also cause space leaks when thunks accumulate. Strictness annotations (`BangPatterns`, `StrictData`) control this.

**Assuming all Haskell code is pure:** The IO monad allows side effects (I/O, state, exceptions). Haskell is pure by default, but `IO` is a deliberate escape hatch. Understanding which code is pure and which is effectful is essential for reasoning about correctness.

**Overcomplicating simple problems:** Haskell beginners often reach for complex abstractions (monad transformers, free monads) when simpler solutions exist. Start with plain functions and basic types. Only add abstraction when you have a concrete need.
