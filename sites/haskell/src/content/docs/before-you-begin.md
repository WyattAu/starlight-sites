takes for granted; statements, mutation, loops, order of execution; and the
follows in order, and each instruction can change the world; reassign a
The consequences cascade. No reassignment means no loop counters; loops become
may run anything lazily or in parallel; and cannot break your program by doing
so. No mutation means a value, once computed, never changes; which is why
definition composes them. There is no `result` variable being reassigned; the
apply. Haskell checks types at compile time; a program that type-checks cannot
arrow. If you call `square "hello"`, the program does not compile; the error
Read `->` as right-associative: `Integer -> (Integer -> Integer)`; `add` takes
`add 1` is a legal expression; a function waiting for one more integer. No
variable depends on *when* you look; after how many loop iterations, after
arguments. That property; **referential transparency**; is what makes the
`foldr` is the deep one: `foldr f z [x1, x2, x3]` = `f x1 (f x2 (f x3 z))`; it
from §3 *is* `foldr (+) 0`, and `map f` is `foldr (\x acc -> f x : acc) []` -
**Type variables.** `map`'s signature uses `a` and `b`; type *variables*,
Input, output, randomness and state are still possible; through the `IO` type:
`getLine` has type `IO String`; an *action* that, when executed, produces a
separation is what makes the compiler's guarantees meaningful; and it is why
4. Why does `map (\x -> x + 1) [1, 2, 3]` return `[2, 3, 4]`; what are `map`'s
`24`. (2) `Int -> Int -> Int`; or, read curried, `Int -> (Int -> Int)`.
(3) `productList [] = 1; productList (x:xs) = x * productList xs`; base case 1
`(\x -> x + 1)`; an anonymous function, a lambda; and the list `[1, 2, 3]`.
`1 - (2 - 3)` = `1 - (-1)` = `2`. Note this is *not* `-(1 + 2 + 3)`; `foldr
- [The Haskell Track](/); the language itself, from types to monads.
- [Bounded Linear Operators](https://mathematics.wyattau.com/11-functional-analysis/3_bounded-linear-operators/) -
- [Introduction to Algebraic Topology](https://mathematics.wyattau.com/9-topology/9_introduction-to-algebraic-topology/) -