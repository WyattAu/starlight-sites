---
date: 2026-10-18T00:00:00+01:00
title: "Before You Begin: The Ideas Haskell Assumes"
tags:
  - Haskell
description: "The transition into Haskell and functional programming: expressions versus statements, types as contracts, immutability as a default, recursion as the loop, and higher-order functions -- every term defined before it is used, with the imperative intuitions named and replaced."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "haskell", "url": "https://haskell.wyattau.com"}, {"name": "haskell", "url": "https://haskell.wyattau.com/haskell/before-you-begin"}]
}
</script>

Haskell is not a new syntax for the same programming. It is a different model of
what a program *is*: not a sequence of commands that mutate state, but a single
expression whose value is computed by evaluating subexpressions. Every idea on
this page exists because that model removes something imperative programming
takes for granted; statements, mutation, loops, order of execution; and the
removal is what makes Haskell code reasonable-about: if a function is pure, you
can understand it by reading it, without simulating the machine.

The page is written for a reader who knows one imperative language. Each section
names the imperative habit, states the replacement, and shows the first
example. Terms are defined before use, and the self-test at the end tells you
whether to skip.

## Intuition

In an imperative language, a program is a list of instructions the machine
follows in order, and each instruction can change the world; reassign a
variable, print, write a file. In Haskell, a program *is* a value: an expression
evaluated by substituting definitions, the way mathematics evaluates
$f(2)$ by substituting $f(x) = x^2$. There is no "now" in the language; there is
only what each expression equals.

The consequences cascade. No reassignment means no loop counters; loops become
*recursion*. No order of evaluation among independent parts means the compiler
may run anything lazily or in parallel; and cannot break your program by doing
so. No mutation means a value, once computed, never changes; which is why
concurrent Haskell programs do not corrupt shared state. Each removal is a gain
in what you can *prove* about your code, and the removals are what the type
system tracks.

## 1. Expressions, not statements

**Definition.** An **expression** is code that produces a value. A **statement**
is code that performs an action. Imperative languages have both; Haskell has
expressions, and effects are values too (see §4).

In Python you might write:

```python
# Imperative: a statement sequence with mutation.
result = 0
for x in [1, 2, 3, 4]:
    if x % 2 == 0:
        result = result + x * 10
```

The Haskell version states what the result *is* rather than how to accumulate it:

```haskell
-- Haskell: one expression, built from standard functions.
result = sum (map (* 10) (filter even [1, 2, 3, 4]))
-- = sum (map (*10) [2,4]) = sum [20,40] = 60
```

Read the pipeline right to left: filter the evens, multiply each by ten, sum.
Every piece is a standard function, `map` and `filter` among them, and the
definition composes them. There is no `result` variable being reassigned; the
expression *equals* 60 the way $2 + 2$ equals 4.

## 2. Types as contracts

**Definition.** A **type** classifies values and determines which operations
apply. Haskell checks types at compile time; a program that type-checks cannot
"crash with a type error at runtime", because that class of error is
unrepresentable.

```haskell
square :: Integer -> Integer
square n = n * n
```

Read the signature aloud: `square` is a function *from* `Integer` *to*
`Integer`. The `::` separates the name from its type, `->` is the function
arrow. If you call `square "hello"`, the program does not compile; the error
is caught before the program exists.

**Function types with multiple arguments are curried.**

```haskell
add :: Integer -> Integer -> Integer
add x y = x + y
```

Read `->` as right-associative: `Integer -> (Integer -> Integer)`; `add` takes
one integer and returns a *function* that takes another. This is **currying**,
and it is why partial application is free:

```haskell
inc :: Integer -> Integer
inc = add 1        -- a new function: add 1 to its argument
```

`add 1` is a legal expression; a function waiting for one more integer. No
special syntax for partial application exists because every function already
takes one argument at a time.

## 3. Immutability and recursion

**Definition.** **Immutability** means a name bound to a value keeps that value.
`x = 5` does not create a box to update later; it is a *definition*, like the
$=$ of mathematics.

**Definition.** **Recursion** is a function calling itself on a smaller input,
with a base case that stops the recursion. Recursion replaces every loop.

```haskell
-- Sum a list. The base case is the empty list; the step peels one element.
sumList :: [Integer] -> Integer
sumList []     = 0
sumList (x:xs) = x + sumList xs
```

The `(x:xs)` pattern matches a non-empty list, binding `x` to the head and `xs`
to the rest. Tracing `sumList [1,2,3]`:

```
sumList (1:[2,3]) = 1 + sumList [2,3]
                  = 1 + (2 + sumList [3])
                  = 1 + (2 + (3 + sumList []))
                  = 1 + (2 + (3 + 0))
                  = 6
```

The definition is the proof: `sumList [] = 0` is the base case, and
`sumList (x:xs) = x + sumList xs` is the inductive step. A recursive Haskell
function is an induction proof in executable form, and the correspondence is why
[Haskell's own track](/) can state theorems about its functions rather than
merely running them.

**Why immutability removes a class of bugs.** In imperative code, the value of a
variable depends on *when* you look; after how many loop iterations, after
which branch. That temporal reasoning is the source of off-by-one errors, action
at a distance through shared state, and concurrency bugs. In Haskell, `x` means
the same thing everywhere in its scope; a function's output depends only on its
arguments. That property; **referential transparency**; is what makes the
compiler's laziness and parallelism safe, and it is why pure functions can be
tested in isolation.

## 4. Higher-order functions

**Definition.** A **higher-order function** takes functions as arguments or
returns them as results. Since functions are values, they are passed like any
other.

The three workhorses:

```haskell
map :: (a -> b) -> [a] -> [b]        -- apply f to every element
filter :: (a -> Bool) -> [a] -> [a]  -- keep elements satisfying p
foldr :: (a -> b -> b) -> b -> [a] -> b  -- combine from the right, with a base
```

`foldr` is the deep one: `foldr f z [x1, x2, x3]` = `f x1 (f x2 (f x3 z))`; it
replaces every `:` in the list with `f` and the `[]` with `z`. Then `sumList`
from §3 *is* `foldr (+) 0`, and `map f` is `foldr (\x acc -> f x : acc) []` -
many recursive functions over lists are folds in disguise, and recognising that
is what lets you stop writing the recursion by hand.

**Type variables.** `map`'s signature uses `a` and `b`; type *variables*,
instantiated at each use: `map square [1,2,3]` has `a = Integer`, `b =
Integer`; `map (== 'a') "hat"` has `a = Char`, `b = Bool`. Polymorphism is how
one definition serves infinitely many types, checked at compile time.

## 5. Purity and effects

**Definition.** A **pure** function returns the same value for the same
arguments and has no effect beyond computing it. Haskell functions are pure by
construction.

Input, output, randomness and state are still possible; through the `IO` type:

```haskell
main :: IO ()
main = do
    line <- getLine          -- IO String: an action producing a String
    putStrLn ("You typed: " ++ line)
```

`getLine` has type `IO String`; an *action* that, when executed, produces a
string. `main` composes actions with `do` notation. The type system separates
pure computation from effects: a function of type `Integer -> Integer` *cannot*
print, read files, or mutate anything, because the type forbids it. That
separation is what makes the compiler's guarantees meaningful; and it is why
the [rest of this track](/) spends its time on pure functions and types, with
`IO` confined to a thin outer layer.

## 6. Self-test

1. Evaluate `sum (map (* 2) (filter (> 2) [1, 2, 3, 4, 5]))`. (§1)
2. What is the type of `\x y -> x + y * 2` when used on `Int`s? (§2)
3. Write `productList :: [Integer] -> Integer` by recursion, with the base case
   and the pattern. (§3)
4. Why does `map (\x -> x + 1) [1, 2, 3]` return `[2, 3, 4]`; what are `map`'s
   two arguments here? (§4)
5. Why can the compiler reorder independent expressions without changing a
   pure program's meaning? (§3, §5)
6. `foldr (-) 0 [1, 2, 3]` evaluates to what? Trace it with the foldr
   expansion. (§4)

**Answers.**
(1) `filter (> 2)` keeps `[3, 4, 5]`; doubling gives `[6, 8, 10]`; the sum is
`24`. (2) `Int -> Int -> Int`; or, read curried, `Int -> (Int -> Int)`.
(3) `productList [] = 1; productList (x:xs) = x * productList xs`; base case 1
because multiplication's identity is 1. (4) `map`'s arguments are the function
`(\x -> x + 1)`; an anonymous function, a lambda; and the list `[1, 2, 3]`.
(5) Because a pure expression's value depends only on its subexpressions'
values: with no effects to reorder, any evaluation order yields the same value,
which is what referential transparency states. (6) `1 - (2 - (3 - 0))` =
`1 - (2 - 3)` = `1 - (-1)` = `2`. Note this is *not* `-(1 + 2 + 3)`; `foldr
(-)` is right-associative subtraction, and the trace makes that visible.

## Where to go next

- [The Haskell Track](/); the language itself, from types to monads.
- [Bounded Linear Operators](https://mathematics.wyattau.com/11-functional-analysis/3_bounded-linear-operators/) -
  the mathematics the type signatures mirror: maps between structured spaces.
- [Introduction to Algebraic Topology](https://mathematics.wyattau.com/9-topology/9_introduction-to-algebraic-topology/) -
  the algebraic structures (monoids, functors) that monads generalise.
