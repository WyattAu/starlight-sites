---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "haskell", "url": "https://haskell.wyattau.com"}, {"name": "Intro", "url": "https://haskell.wyattau.com/intro"}]
}
</script>
title: Haskell
description: "Introduction to Haskell notes."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "haskell", "url": "https://haskell.wyattau.com"}, {"name": "Intro", "url": "https://haskell.wyattau.com/intro"}]
}
</script>

## Haskell

Welcome to the Haskell notes. Haskell is a purely functional, lazily evaluated language with a strong static type system. Everything is an expression, side effects are managed through monads, and types are inferred unless you annotate them.

## Why This Matters

Haskell's approach to programming — purity, immutability, and referential transparency — forces you to think about program structure differently. Concepts learned in Haskell (monads, functors, type classes) directly transfer to other languages like Rust, Scala, and Kotlin. Understanding lazy evaluation helps you reason about performance and space leaks in any language.

## What You Will Learn

- **Pure functions**: Functions with no side effects, always returning the same output for the same input
- **Type classes**: Ad-hoc polymorphism through interface-like constraints on types
- **Monads**: Sequencing computations with effects (IO, state, errors) in a pure functional setting
- **Lazy evaluation**: Values are computed only when needed, enabling infinite data structures
- **Algebraic data types**: Modelling data precisely with sum and product types

## How to Get Started

Install GHCup (https://www.haskell.org/ghcup/) to get GHC (the compiler), Cabal, and Stack. Start GHCi (`ghc`) and experiment with basic functions, pattern matching, and list comprehensions. The "Learn You a Haskell" tutorial (free online) is an excellent first resource. Work through exercises — reading Haskell without writing it does not build intuition.

## Study Approach

Start with the basics: pure functions, pattern matching, and list operations. Then move to type classes and algebraic data types. Monads come last — they are a consequence of understanding functors and applicatives, not a starting point. Use GHCi constantly to verify your mental model against the compiler's type inference.

## Cross-References

- **[Abstract Algebra](/docs/university/mathematics/abstract-algebra)**: Groups, rings, and fields — the algebraic structures that inspire Haskell's type class hierarchy.
- **[Category Theory](/docs/university/mathematics/category-theory)**: Functors, natural transformations, and monads have their mathematical foundations here.

Browse the content using the sidebar navigation on the left.

## Intuition

**Haskell is a purely functional programming language:** In Haskell, functions have no side effects — the same input always produces the same output. This purity enables powerful reasoning about code and eliminates entire categories of bugs.

**Why it matters:** Haskell's type system catches errors at compile time that would be runtime bugs in other languages. It influences modern language design (Rust's Option, Swift's Result).

**The key insight:** Monads are not as mysterious as they sound — they are just a pattern for sequencing operations that have effects (like I/O or state) within a purely functional language.

## Quick Reference

```haskell
-- Basic functions
add :: Int -> Int -> Int
add x y = x + y

-- Pattern matching
factorial :: Integer -> Integer
factorial 0 = 1
factorial n = n * factorial (n - 1)

-- List operations
doubleAll :: [Int] -> [Int]
doubleAll = map (* 2)

-- Type classes
class Describable a where
  describe :: a -> String

-- Algebraic data types
data Shape = Circle Double | Rectangle Double Double

area :: Shape -> Double
area (Circle r) = pi * r * r
area (Rectangle w h) = w * h

-- Monadic IO
main :: IO ()
main = do
  name <- getLine
  putStrLn ("Hello, " ++ name ++ "!")
```

## Common Mistakes

**Confusing laziness with inefficiency:** Lazy evaluation delays computation until needed, which can save work (short-circuit evaluation, infinite data structures). But it can also cause space leaks when thunks accumulate. Strictness annotations (`BangPatterns`, `StrictData`) control this.

**Assuming all Haskell code is pure:** The IO monad allows side effects (I/O, state, exceptions). Haskell is pure by default, but `IO` is a deliberate escape hatch. Understanding which code is pure and which is effectful is essential for reasoning about correctness.

**Overcomplicating simple problems:** Haskell beginners often reach for complex abstractions (monad transformers, free monads) when simpler solutions exist. Start with plain functions and basic types. Only add abstraction when you have a concrete need.
