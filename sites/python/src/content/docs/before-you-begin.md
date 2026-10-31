---
date: 2026-10-18T00:00:00+01:00
title: "Before You Begin: Python for the Courses Here"
tags:
  - Python
description: "The Python the courses on this site assume: types and duck typing, functions and scope, the list-comprehension mental model, NumPy arrays as vectorised mathematics rather than loops, and plotting -- every term defined before use, every example checkable by hand."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "python", "url": "https://python.wyattau.com"}, {"name": "python", "url": "https://python.wyattau.com/python/before-you-begin"}]
}
</script>

Python is the analysis language of the numerical courses on this network — the
machine-learning course's every numerical claim is checked in Python — and the
code assumes a specific mental model: arrays as vectors, operations as
mathematics applied to whole arrays, and functions as the unit of reuse. This
page builds that model from the ground up, defining every term before use.

The prerequisite is school-level algebra — you should be comfortable with
functions $f(x)$, coordinates, and summation notation $\sum$. No programming
background is assumed.

## Intuition

A Python program is a list of definitions and actions, executed top to bottom.
Variables are *names bound to values* — not boxes — and the binding can be
rebound at any time. The two skills this page builds are reading an expression
from the inside out, and predicting a loop's behaviour by tracing a table. Both
are checkable by hand, which is how you should practise: predict, then run.

The NumPy section changes the model: where a Python loop applies an operation
element by element, a NumPy *vectorised* operation applies it to the whole array
at once — in optimised compiled code, a hundred times faster. The ML courses'
Monte Carlo experiments are vectorised for exactly that reason.

## 1. Values, names, and types

**Definition.** A **value** is a piece of data — a number, a string of
characters, a list. A **name** (variable) is a label bound to a value by
**assignment**.

```python
x = 5              # x is bound to the integer 5
name = "Ada"       # a string
temperatures = [36.6, 37.1, 36.9]   # a list of floats
```

**Types.** Every value has one: `int` (integers), `float` (real numbers, to
finite precision), `str` (text), `bool` (`True`/`False`), `list` (ordered
sequences). The `type(x)` function returns it, and the distinction matters: `1 +
1` is `2` but `"1" + "1"` is `"11"` — string concatenation, because `+` on
strings means *join*.

**Definition.** A **function** takes arguments, performs a computation, and
returns a value.

```python
def area(radius):
    """Return the area of a circle of the given radius."""
    return 3.14159 * radius ** 2
```

The `def` keyword defines it; `return` produces the result. The triple-quoted
string is the docstring — the function's own documentation, readable by
`help(area)`. Everything the courses define is written this way, and reading the
docstring before the body is the habit that makes unfamiliar code navigable.

**Control flow.**

```python
for x in [1, 2, 3]:        # loop over each element in turn
    print(x * x)

if x > 2:                  # branch on a condition
    print("big")
else:
    print("small")
```

The `for` loop iterates over a *sequence* — a list, a string (character by
character), a range. The `range(n)` object produces `0, 1, \dots, n-1`; the
`range(a, b)` object produces $a, a+1, \dots, b-1$ — the upper bound excluded,
which is the convention every later page follows when indexing.

## 2. List comprehensions: the mental model

**Definition.** A **list comprehension** builds a list from another list by an
expression and an optional condition:

```python
squares = [x * x for x in range(10)]            # squares of 0..9
evens_squared = [x * x for x in range(10) if x % 2 == 0]
```

Read the second from the inside out: "for each x in range(10), if x is even,
collect x squared". The comprehension is the *definition* of the list — it
states what the list contains, not the steps to build it — and it replaces the
imperative loop-plus-append pattern in every case.

**Comprehensions are the model for NumPy operations.** `[x * x for x in xs]`
applies squaring element by element in interpreted Python; the NumPy equivalent
`np.array(xs) ** 2` does the same thing in compiled code. The mental model —
one operation, applied to every element — transfers exactly.

## 3. NumPy: arrays as vectors

**Definition.** A **NumPy array** is an $n$-dimensional grid of numbers, all of
the same type, with operations applied elementwise.

```python
import numpy as np

xs = np.array([1.0, 2.0, 3.0, 4.0])
print(xs * 2)             # [2. 4. 6. 8.]   every element doubled
print(xs ** 2)            # [ 1.  4.  9. 16.]
print(xs + np.array([10, 20, 30, 40]))  # elementwise addition
```

No loop appears, yet every element is transformed — **vectorisation**. The
statistical functions the courses use are array-level:

```python
print(xs.mean(), xs.std(), xs.sum())    # the three workhorses
rng = np.random.default_rng(2026)       # a seeded generator: reproducible
coin_flips = rng.random(10000) < 0.5    # ten thousand fair coin flips
print(coin_flips.mean())                # ~0.5 -- and the SE shrinks as 1/sqrt(n)
```

The seed matters and is a principle, not a convenience: a seeded generator
makes every experiment *reproducible*, so a claim checked once stays checked.
The ML courses seed every random experiment for exactly that reason.

**Why vectorise.** A Python loop over ten million elements takes seconds of
interpreted overhead per operation; the same operation on a NumPy array runs in
compiled C at memory speed. The machine-learning course's Monte Carlo
experiments — 200,000 risk estimates, 4,096-step sample paths — are only
practical vectorised, and the array notation also matches the mathematics:
$\mathbb{E}[f(X)]$ *is* `f(xs).mean()`, one expression, no loop to miswrite.

## 4. Plotting: the claim's evidence

Matplotlib is the plotting library, and the courses use it to make claims
visible:

```python
import matplotlib.pyplot as plt

n = np.arange(1, 500)
sample_se = 1.0 / np.sqrt(n)            # the standard error shrinks as n^{-1/2}
plt.plot(n, sample_se, label="1/sqrt(n)")
plt.xlabel("sample size n"); plt.ylabel("standard error")
plt.legend(); plt.savefig("se.png")
```

The plot is the evidence for the claim "standard error shrinks as $n^{-1/2}$" —
and the same pattern (generate, aggregate, plot) is how the ML courses' Monte
Carlo experiments justify their theorems. Learning to produce the picture is
learning to check the theorem.

## 5. Self-test

1. What is `[x % 3 for x in range(7)]`? (§2)
2. What does `type(3 / 2)` return in Python 3, and why? (§1)
3. Write a function `median3(a, b, c)` returning the median of three numbers,
   using `sorted` and indexing. (§1)
4. Given `xs = np.array([2.0, 4.0, 4.0, 4.0, 5.0, 5.0, 7.0, 9.0])`, compute the
   mean and standard deviation with NumPy. (§3)
5. Why does the course seed its random number generators? (§3)
6. What is `list(range(3, 8))`? (§1)

**Answers.**
(1) `[0, 1, 2, 0, 1, 2, 0]` — remainders on division by 3.
(2) `float` — Python 3's `/` is true division, always producing a float;
`//` is integer division.
(3) `def median3(a, b, c): return sorted([a, b, c])[1]` — sorting places the
median at index 1.
(4) `xs.mean()` = 5.0; `xs.std()` ≈ 2.138 (population standard deviation — the
default divides by $n$; `ddof=1` gives the sample version dividing by $n-1$).
(5) Reproducibility: a seeded generator replays the same sequence, so a claim
checked once stays checked and a bug can be reproduced exactly.
(6) `[3, 4, 5, 6, 7]` — the upper bound excluded.

## Where to go next

- [The Python Track](/) — the language in full.
- [Measure-Theoretic Probability](https://machine-learning.wyattau.com/1-probabilistic-machine-learning/1_measure-theoretic-probability/) —
  the theory whose Monte Carlo checks this page's NumPy idioms implement.
- [Probabilistic Machine Learning](https://machine-learning.wyattau.com/1-probabilistic-machine-learning/) —
  the course whose examples assume exactly the idioms built here.
