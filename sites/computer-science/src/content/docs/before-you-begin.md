---
date: 2026-10-18T00:00:00+01:00
title: "Before You Begin: The Abstractions CS Assumes You Already Have"
tags:
  - Computer Science
description: "The transition into university computer science: functions as reusable units, boolean logic, how a loop and a variable actually execute, and the first ideas of complexity -- every term defined before use, with the reasoning made explicit."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "computer-science", "url": "https://computer-science.wyattau.com"}, {"name": "computer-science", "url": "https://computer-science.wyattau.com/computer-science/before-you-begin"}]
}
</script>

School computing teaches a language. University computer science teaches what
the language *means*; what executes, what it costs, and how to reason about a
program without running it. The transition fails when a student can write code
that works but cannot say why it works, cannot predict how its cost grows, and
cannot prove anything about it.

This page rebuilds the four abstractions everything else assumes: functions as
reusable units, boolean logic as the algebra of decisions, execution as a state
machine you can trace by hand, and growth of cost as the first idea of
complexity. Every term is defined before use, and every claim is checkable by
hand-tracing the code shown.

## Intuition

A program is a precise description of a process; so precise that a machine can
follow it, and so precise that you can predict what it does without a machine.
That second ability is the subject. The skill is not syntax; syntax is
interchangeable. The skill is holding a small machine in your head: these
variables have these values, this loop runs this many times, this condition is
true on exactly these inputs. Everything on this page is practice at that.

## 1. Functions: naming a computation

**Definition.** A **function** takes inputs (**arguments**), performs a
computation, and returns exactly one output (**return value**). Calling a
function executes its body with the arguments bound to its parameters.

```
function square(n) {
    return n * n;
}
```

`square(4)` returns `16`. The point of a function is not brevity; it is that the
computation now has a *name*, can be reasoned about once instead of everywhere
it appears, and a bug in it is fixed in one place.

**Definition.** A **pure** function depends only on its arguments and has no
effect on anything else. `square` is pure. A function that prints, writes a
file, or modifies a global variable is **impure**.

**Why purity matters.** Pure functions can be reasoned about by substitution:
`square(4) + square(3)` can be replaced by `16 + 9`. Impure functions cannot -
each call may do something different. Tests, refactoring and optimisation all
get easier as functions get purer, and the university course will assume you
default to purity.

**Scope.** A variable defined inside a function exists only inside it. Two
functions can each have a variable called `total` without colliding; the names
live in separate scopes.

## 2. Boolean logic

**Definition.** A **boolean** expression evaluates to true or false. The three
operators: `and` (both), `or` (at least one; *inclusive*), `not` (negation).

<div class="table-wrap">

| `a` | `b` | `a and b` | `a or b` | `not a` |
| --- | --- | --------- | -------- | ------- |
| T   | T   | T         | T        | F       |
| T   | F   | F         | T        | F       |
| F   | T   | F         | T        | T       |
| F   | F   | F         | F        | T       |

</div>

**De Morgan's laws.**

```
not (a and b)  ==  (not a) or (not b)
not (a or b)   ==  (not a) and (not b)
```

*Proof by truth table.* The two sides agree on all four rows of combinations -
checking all four is the entire proof, and for a two-variable boolean expression
checking all four rows is a *complete* proof, not a sample. $\blacksquare$

**Short-circuit evaluation.** `a and b` does not evaluate `b` when `a` is false;
`a or b` does not evaluate `b` when `a` is true. This is load-bearing in real
code: `if (i < len(a) and a[i] == x)` is safe *because* short-circuiting
prevents `a[i]` from being evaluated when `i` is out of range. Reversing the
order breaks the program.

**The equivalence move.** "Not (it rained and it was cold)" equals "it did not
rain, or it was not cold". Translating between English and boolean algebra; in
both directions; is the skill every conditional statement you write depends on.

## 3. Execution: the machine you can trace

**Definition.** A **variable** is a name bound to a value; **assignment** rebinds
the name. A **loop** repeats a block while a condition holds.

Tracing is the core skill. Take this; a loop computing the sum of the first $n$
positive integers:

```
total = 0
i = 1
while i <= n:
    total = total + i
    i = i + 1
```

For `n = 4`, the trace is a table:

<div class="table-wrap">

| step | i | total |
| ---- | - | ----- |
| start | 1 | 0 |
| 1 | 2 | 1 |
| 2 | 3 | 3 |
| 3 | 4 | 6 |
| 4 | 5 | 10 |

</div>

The loop exits when `i` is 5, and `total` is 10; which is $\frac{n(n+1)}{2}$,
as the closed form predicts. **Tracing converts "I think this works" into "I
know what this does on this input."** The next step; proving it works on *all*
inputs; is induction, and the loop's variable `i` is exactly the induction
variable: `total` is $\frac{i(i-1)}{2}$ at the top of every iteration, which is
the invariant the mathematics site proves.

**What executes is not what you meant.** A common off-by-one: `while i < n`
versus `while i <= n` differ by one iteration; a trace table exposes the
difference immediately. Reading code is not enough; trace it.

## 4. Growth of cost: the first idea of complexity

**Definition.** The **running time** of a program on an input of size $n$ is the
number of elementary operations it executes, as a function of $n$.

Count operations in this search:

```
found = false
for i in 0 .. n-1:
    if a[i] == target: found = true
```

The comparison runs $n$ times; each iteration is a constant amount of work, so
the total is $n$ operations; **linear** in $n$.

Compare binary search on a sorted list: each step halves the remaining range, so
after $k$ steps $n/2^k$ remains, and the loop ends when $n/2^k < 1$, i.e.
$k > \log_2 n$; **logarithmic**.

**Definition (asymptotic notation, informally).** A program is $O(f(n))$ if its
running time is at most a constant times $f(n)$ for large $n$. Linear search is
$O(n)$; binary search is $O(\log n)$; the nested-pair loop over $n$ items is
$O(n^2)$.

**Why it is the first idea of complexity.** Constants do not matter at scale: an
$O(n \log n)$ algorithm beats an $O(n^2)$ one for large $n$ no matter how much
slower its constant factor, because $n\log n / n^2 = \log n / n \to 0$. The
difference between linear and quadratic search on a billion items is the
difference between a step and a lifetime; roughly $10^9$ operations against
$10^{18}$.

The university course will define $O(\cdot)$ with quantifiers; $\exists c, n_0 : \forall n > n_0, T(n) \leq c\,f(n)$; and prove the properties. What this page
asks is that you can count the iterations of the loops you write and say what
function of $n$ they are.

## 5. Self-test

1. Write the boolean expression for "x is between 1 and 10 inclusive", then its
   negation without `not` around the whole thing. (§2)
2. Trace the loop in §3 for `n = 3`. What is `total` at exit? (§3)
3. Why does `if (i <= len(a) and a[i] == x)` risk an error that
   `if (i < len(a) and a[i] == x)` does not? (§2)
4. An algorithm does $n^2/2 + 3n$ operations. Is it $O(n^2)$, $O(n)$, or both?
   What does "both" mean here? (§4)
5. How many times does the innermost statement run in a loop over $i$ from 1 to
   $n$ containing a loop over $j$ from 1 to $i$? (§4)

**Answers.**
(1) `x >= 1 and x <= 10`; negated by De Morgan:
`x < 1 or x > 10`.
(2) `total = 6`; the loop adds 1, then 2, then 3.
(3) When `i == len(a)`, the index `a[i]` is out of range; with `i < len(a)`
first, short-circuiting prevents the second test from running. Reversed, the
second test runs on an invalid index.
(4) $O(n^2)$; the definition only requires *at most* a constant times $n^2$
eventually, and $n^2/2 + 3n \leq n^2$ for $n \geq 6$. It is also $O(n^3)$:
big-O is an upper bound, not a tight one. The tight class here is $\Theta(n^2)$.
(5) $1 + 2 + \dots + n = \frac{n(n+1)}{2}$; the loop trace from §3, generalised.

## Where to go next

- [Algorithms and Data Structures](/algorithms-and-data-structures/); growth of cost, made a subject.
- [Computer Networks](/computer-networks/); the layered abstractions this page's "what executes" thinking generalises to.
- [Discrete Mathematics](/1-discrete-mathematics/); the logic of §2, with proofs.
