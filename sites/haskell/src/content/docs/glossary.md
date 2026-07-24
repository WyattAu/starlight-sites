---
title: "Haskell Glossary — Key Terms and Definitions"
description: "Comprehensive glossary of Haskell programming concepts, including functional programming, type system, monads, type classes, and advanced patterns."
date: 2026-07-24
tags: [glossary]
---

## Haskell Fundamentals

**Haskell**: A purely functional programming language with a strong static type system, lazy evaluation, and purity by default.

**Pure Function**: A function that always returns the same output for the same input and has no side effects.

**Side Effect**: Any interaction with the outside world — I/O, mutable state, network requests. Isolated in the IO monad in Haskell.

**Lazy Evaluation**: Expressions are not evaluated until their values are needed. Enables infinite data structures and eliminates unnecessary computation.

**Strict Evaluation**: The opposite of laziness — expressions are evaluated immediately. Haskell can be made strict with `seq` or bang patterns.

**Expression**: Everything in Haskell is an expression that evaluates to a value. There are no statements.

**Do Notation**: Syntactic sugar for monadic chains, making IO and other monads look imperative.

```haskell
main = do
  name <- getLine
  putStrLn ("Hello, " ++ name)
```

## Type System

**Type Inference**: The compiler deduces the most general type for every expression without requiring annotations.

**Type Annotation**: Explicitly specifying a type: `add :: Int -> Int -> Int`.

**Type Signature**: The declaration of a function's type: `length :: [a] -> Int`.

**Parametric Polymorphism**: A function with type variables works for any type: `id :: a -> a`.

**Monomorphic Type**: A type with no type variables, fully specified: `Int`, `Bool`.

**Algebraic Data Type (ADT)**: A type defined by combining other types — sum types (alternatives) and product types (combinations).

**Sum Type**: A type with multiple constructors (OR): `data Shape = Circle Double | Rectangle Double Double`.

**Product Type**: A type with multiple fields (AND): `data Point = Point { x :: Double, y :: Double }`.

**Newtype**: Wraps an existing type with zero runtime overhead, creating a distinct type at compile time.

**Phantom Type**: A type parameter that doesn't appear in the type's constructors, used for compile-time safety.

## Type Classes

**Type Class**: Defines an interface for groups of types. Similar to interfaces but more powerful — supports ad-hoc polymorphism.

**Instance**: A type is an instance of a type class if it implements the class's methods.

**Deriving**: Automatically generating type class instances: `deriving (Eq, Show, Ord)`.

**Eq**: The type class for equality comparison, providing `==` and `/=`.

**Ord**: The type class for ordering, providing `<`, `>`, `compare`.

**Show**: The type class for string representation, providing `show`.

**Read**: The type class for parsing strings, providing `read`.

**Num**: The type class for numeric types, providing `+`, `-`, `*`.

**Functor**: A type class for types that can be mapped over: `fmap :: (a -> b) -> f a -> f b`.

**Applicative**: A type class between Functor and Monad, allowing functions in a context applied to values in a context.

**Monad**: A type class for sequencing computations with effects, providing `return` and `>>=` (bind).

**Foldable**: A type class for types that can be folded into a summary value.

**Traversable**: A type class for types that can be traversed while performing effects.

## Functions

**Function Application**: Applying a function to an argument with space: `f x`. Functions are left-associative.

**Infix Function**: A function called between its arguments: `x + y` instead of `(+) x y`.

**Partial Application**: Applying fewer arguments than a function takes, returning a new function: `map (+1)` applies `+1` to every element.

**Currying**: Every function takes exactly one argument and returns one result. Multi-argument functions are chains of single-argument functions.

**Higher-Order Function**: A function that takes or returns functions: `map`, `filter`, `fold`.

**Composition**: Combining functions with `(.)`: `(f . g) x = f (g x)`.

**Lambda**: Anonymous function: `\x -> x * 2`. Written with a backslash.

**Where Clause**: Defines local bindings at the end of a function definition.

**Let Expression**: Defines local bindings in an expression: `let x = 5 in x + 1`.

**Guard**: Conditional clauses in function definitions: `abs x | x >= 0 = x; x < 0 = -x`.

## Lists and Recursion

**List**: An immutable, homogeneous collection. Created with `[]` or `:` (cons): `1 : [2, 3]` produces `[1, 2, 3]`.

**List Comprehension**: Concise list creation: `[x^2 | x <- [1..10], even x]`.

**Head**: The first element of a list: `head [1,2,3]` returns `1`.

**Tail**: All elements except the first: `tail [1,2,3]` returns `[2,3]`.

**Pattern Matching**: Destructuring values based on their shape: `head (x:xs) = x`.

**Recursion**: A function calling itself. The primary looping mechanism in Haskell.

**Base Case**: The terminating condition for recursion.

**Infinite List**: A list with no end, enabled by laziness: `[1..]` produces all positive integers.

**Zip**: Combines two lists into a list of pairs: `zip [1,2] ['a','b']` returns `[(1,'a'),(2,'b')]`.

## Monads

**Monad Type Class**: `class Monad m where return :: a -> m a; (>>=) :: m a -> (a -> m b) -> m b`.

**Return (Pure)**: Wraps a value in a monadic context: `return 42 :: Maybe Int` gives `Just 42`.

**Bind (>>=)**: Chains monadic computations, threading the context through.

**IO Monad**: Describes side effects as values. Actions are descriptions, not executions — the runtime executes them.

**Maybe Monad**: Represents computations that might fail: `Just value` or `Nothing`.

**Either Monad**: Represents computations that might fail with an error message: `Right value` or `Left error`.

**State Monad**: Threads mutable state through pure computations.

**Reader Monad**: Provides read-only access to shared configuration.

**Writer Monad**: Accumulates output alongside a computation.

**Monad Transformer**: Stacks multiple monadic effects: `StateT s (ExceptT e IO) a`.

**Monad Fail**: A class for monads that can fail with a pattern match failure.

## Advanced Topics

**Applicative Functor**: Applying functions in a context: `pure f <*> x`. More general than Monad.

**Monoid**: A type with an associative binary operation and an identity element: `Sum`, `Product`, `Any`, `All`.

**Fold**: A function that reduces a structure to a single value: `foldr`, `foldl`, `foldMap`.

**Lens**: A composable accessor for focusing on parts of nested data structures.

**Arbitrary**: A type class for generating random values, used with QuickCheck for property-based testing.

**QuickCheck**: A testing framework that generates random test inputs to verify properties.

**GADT (Generalized Algebraic Data Type)**: An ADT where constructors can return different types.

**Type Family**: A type-level function associated with a type class.

**Kind**: The type of a type. `*` is the kind of concrete types; `* -> *` is the kind of type constructors.

## Related Terms

- See [Programming Glossary](/programming/glossary) for general programming concepts
- See [Rust Glossary](/rust/glossary) for language comparison
- See [Computer Science Glossary](/computer-science/glossary) for CS fundamentals
- See [Mathematics Glossary](/mathematics/glossary) for mathematical foundations
