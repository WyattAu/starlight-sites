---
date: 2026-10-18T00:00:00+01:00
title: "Before You Begin: Reading the C++ in These Courses"
tags:
  - C++
description: "The C++ the numerical courses assume: compilation as a step, static types, references versus values, the STL, and why systems code is written in C++ at all -- every term defined before it is used, with the Python intuitions named and upgraded."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "cpp", "url": "https://cpp.wyattau.com"}, {"name": "cpp", "url": "https://cpp.wyattau.com/cpp/before-you-begin"}]
}
</script>

The numerical courses on this network check their theorems in Python and prove
their performance claims in C++. The C++ listings; a Monte Carlo estimator, a
kernel trick timing, a Metropolis–Hastings inner loop; assume you can read a
program that is *compiled*, *statically typed*, and *explicit about memory*.
This page builds those three assumptions from a Python starting point,
defining every term before it is used.

The prerequisite is school algebra and one scripting language; Python is the
assumed one, since the analysis courses use it. Nothing else is assumed.

## Intuition

Python is interpreted: the runtime reads your code line by line at execution
time, checks types as it goes, and manages memory for you. C++ is *compiled*:
a separate program (the compiler) translates your code into machine
instructions before anything runs, and the translation is where types are
checked, memory is assigned, and performance is decided.

That one difference; a translation step before execution; explains every
other difference on this page. Compiled code runs orders of magnitude faster
because the expensive decisions were made at compile time; static types exist
because the compiler needs to know sizes and layouts to generate instructions;
and explicit memory management exists because the compiler cannot read your
mind about when a value stops being needed. The ML course's performance claims
are C++ claims, and reading them requires this model.

## 1. Compilation: the step Python does not have

**Definition.** **Compilation** translates source code into machine code; the
CPU's native instructions; producing an executable file.

```
# Python: run directly
python antithetic.py

# C++: compile first, then run
c++ -O3 -std=c++20 antithetic.cpp -o antithetic
./antithetic
```

The flags matter and are worth knowing on sight: `-O3` asks the compiler to
*optimise aggressively* (an unoptimised build can be 10–50× slower; the
performance comparisons in the ML course are all `-O3`), and `-std=c++20`
selects the language standard. `-o antithetic` names the output executable.

**Definition.** The **compiler** is the program that performs the translation;
the errors it reports; "type mismatch", "undeclared identifier", "undefined
reference"; are caught *before the program exists*. This is why static types
are an error-detection win, not just a bookkeeping chore.

**Definition.** The **standard library (STL)** ships with the compiler:
containers (`std::vector`, `std::map`), algorithms (`std::sort`,
`std::accumulate`), mathematical functions (`std::sqrt`, `std::exp`), and
random-number generation (`std::mt19937_64`). The listings in the ML course use
`std::vector` where Python uses lists and `std::mt19937_64` where NumPy uses a
seeded generator.

## 2. Static types

**Definition.** A **static type** is a type fixed at compile time: every
variable, function argument, and return value declares or implies its type, and
the compiler rejects anything that violates it.

```cpp
double area(double radius) {
    return 3.14159265358979 * radius * radius;
}
```

`double` is the double-precision floating-point type; the C++ counterpart of
Python's `float`, and the type every numerical computation in the courses uses.
The function's signature states: takes one `double`, returns one `double`.

**Contrast with Python.** Python's `def area(radius)` accepts anything, and
fails at runtime if the operation is undefined. C++'s version rejects the wrong
type *at compile time*. The ML courses' Python examples rely on dynamic typing
for brevity; their C++ examples rely on static typing for guarantees; and the
performance difference comes from the compiler knowing every type and size in
advance.

**The `auto` keyword.** `auto x = std::sqrt(2.0);` tells the compiler to infer
the type from the initialiser; `double` here. Use it when the type is obvious
from the right-hand side; declare it explicitly when the type is the point.

## 3. References versus values

**Definition.** By default, C++ passes arguments **by value**: the function
receives a *copy*. A **reference** (`double&` or `const double&`) passes the
original object instead; no copy.

```cpp
double sum_by_value(std::vector<double> v);        // copies the vector
double sum_by_ref(const std::vector<double>& v);   // reads the original
```

For a vector of ten million elements, the by-value version copies every
element on every call; the copy alone can dominate the running time. The
`const&` form reads the caller's vector directly: same semantics, no copy.

**The pitfall this prevents.** A reference means changes inside the function
*are visible to the caller*. That is a feature when intended (output
parameters) and a bug when accidental (modifying an input you meant to copy).
The ML listings use `const&` for anything larger than a couple of machine
words, precisely so the reader can see at a glance that the input is not
modified.

**Definition.** A **pointer** (`double*`) holds the *address* of an object
rather than the object. References are pointers with better ergonomics and no
null state; raw pointers appear in the listings only where the STL does not
already own the memory.

## 4. The listings' idiom

The C++ listings in the ML course share a shape, and reading it once makes
every listing legible:

```cpp
#include <bits/stdc++.h>          // one include, for the listings' brevity
int main() {
    std::mt19937_64 rng(2026);    // seeded 64-bit Mersenne Twister
    std::normal_distribution<double> propose(0.0, 1.2);
    // ... the algorithm's inner loop, in a plain for over a large count ...
}
```

- `std::mt19937_64 rng(2026)`; the seeded generator, the same reproducibility
  principle as NumPy's `default_rng(2026)`. The seed is the claim's
  reproducibility, not decoration.
- `std::uniform_real_distribution<double> U(0.0, 1.0)`; a distribution object:
  call `U(rng)` to draw. Separating the engine from the distribution is what
  lets the courses swap distributions without touching the engine.
- `std::printf("...%.3e\n", value)`; the scientific-format print, where
  `%.3e` is mantissa-plus-exponent to three digits. The listings print
  standard errors in exactly this format.
- `-O3` in the build line; because the comparisons being made are
  *performance* comparisons, and an unoptimised build would measure the
  compiler's indifference rather than the algorithm.

## 5. Self-test

1. What does `c++ -O3 -std=c++20 x.cpp -o x` do, and what are the `-O3` and
   `-std=c++20` parts for? (§1)
2. Why does the compiler reject `area("hello")` for the `area` function of §2,
   while Python's `area("hello")` fails only at runtime; and only if that line
   executes? (§2)
3. A function takes a `std::vector<double>` by value and the vector has ten
   million elements. What is copied, and what would `const&` change? (§3)
4. What does `std::mt19937_64 rng(2026)` guarantee about the sequence of draws
   from `rng`? (§4)
5. In `printf("%.3e\n", se)`, what does `%.3e` produce for `se = 0.0006912`?
   (§4)

**Answers.**
(1) Compiles `x.cpp` into the executable `x`, with aggressive optimisation
(`-O3`) under the C++20 language standard (`-std=c++20`).
(2) The compiler knows `area` takes a `double` and `"hello"` is a
`const char*`/string; a compile-time type error. Python fails at runtime, and
only if that line runs.
(3) All ten million elements, copied element by element. `const&` would read
the caller's vector directly; same values, no copy, and a visible guarantee
that the function does not modify it.
(4) The same deterministic sequence of draws on every run and every machine
with the same standard library implementation; which is why the listings'
results are reproducible.
(5) `6.912e-04`; mantissa to three significant digits, times ten to a power of
ten.

## Where to go next

- [The C++ Track](/); compilation model, toolchain, concurrency, and the rest.
- [Measure-Theoretic Probability](https://machine-learning.wyattau.com/1-probabilistic-machine-learning/1_measure-theoretic-probability/) -
  the Monte Carlo experiments whose C++ implementations this page prepares you
  to read.
- [Gaussian Processes](https://machine-learning.wyattau.com/1-probabilistic-machine-learning/9_gaussian-processes/) -
  the kernel-trick timing, where the memory-layout claim is a C++ claim.
