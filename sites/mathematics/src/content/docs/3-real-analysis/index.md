---
title: Real Analysis
tags:
  - Mathematics
  - University
description: "Real analysis reconstructs the calculus on a rigorous foundation. Where the introductory calculus takes the real numbers, limits, and continuity as informal"
---

# Real Analysis

Real analysis reconstructs the calculus on a rigorous foundation. Where the
introductory calculus takes the real numbers, limits, and continuity as
informal notions, real analysis defines each precisely and proves the theorems
that justify the operations of differentiation and integration.

The development proceeds in the standard order: the completeness of the real
number system is established first, because every subsequent result (the
Monotone Convergence Theorem, the Bolzano-Weierstrass Theorem, the Extreme
Value Theorem) depends on it. Sequences and series are then treated rigorously,
followed by the topology of the real line, continuity, differentiability, and
finally the Riemann integral. The section closes with the uniform convergence
of sequences and series of functions, the condition under which limits commute
with integration and differentiation.

## Contents

1. [The Real Number System](1_the-real-number-system.md)
2. [Sequences and Limits](2_sequences-and-limits.md)
3. [Series](3_series.md)
4. [Continuity](4_continuity.md)
5. [Differentiability](5_differentiability.md)
6. [Riemann Integration](6_riemann-integration.md)
7. [Sequences and Series of Functions](7_sequences-and-series-of-functions.md)
8. [Problem Set](8_problem-set.md)

## Overview

University-level real analysis notes covering rigorous calculus, sequences, and integration.

## Topics Covered

- **Real Number System**: Completeness, Archimedean property, density of rationals
- **Sequences and Limits**: Convergence, monotone convergence, Bolzano-Weierstrass
- **Series**: Convergence tests, absolute convergence, power series
- **Continuity and Differentiability**: Limits, derivatives, mean value theorem

## Prerequisites

- Calculus (sequences, series, differentiation, integration)
- Basic logic and mathematical proofs
- Mathematical maturity

## How to Use These Notes

Start with the real number system to build foundational knowledge, then progress to sequences, series, and calculus. Each section includes worked examples and practice problems.

## Navigation

Use the sidebar to browse topics, or start with the introductory pages linked from the sidebar.

## Additional Resources

Each section includes:
- Detailed explanations of key concepts
- Worked examples with step-by-step solutions
- Practice problems with answers
- Common pitfalls and how to avoid them
- Connections to other areas of mathematics


## Intuition

Real analysis provides the rigorous foundation for calculus, replacing intuition with precise definitions. The key idea is the epsilon-delta definition of limits, which captures convergence without relying on infinitesimals. Sequences and series are the discrete scaffolding: convergence means the terms eventually settle down, and absolute convergence means they settle down regardless of order. The real numbers themselves are constructed to fill gaps in the rationals, ensuring every Cauchy sequence converges. This completeness is what makes analysis work, distinguishing the real line from the rationals and enabling continuous functions to have intermediate value and extreme value properties.
## Study Tips

1. **Master the definitions**: Real analysis requires precise understanding of limits and continuity
2. **Practise proofs**: Learn to write clear, rigorous proofs
3. **Draw diagrams**: Visualise sequences, series, and functions
4. **Learn standard examples**: Know the properties of common functions (polynomials, trigonometric, exponential)
5. **Connect to calculus**: Relate real analysis to the calculus you already know

### 3.1 Common Mistakes

**Mistake 1: Confusing pointwise convergence with uniform convergence**
Pointwise convergence requires $\lim_{n \to \infty} f_n(x) = f(x)$ for each $x$, while uniform convergence requires the same limit to hold uniformly across all $x$ simultaneously. A sequence of continuous functions can converge pointwise to a discontinuous function, but uniform convergence preserves continuity. Always verify the $\varepsilon$ does not depend on $x$.

**Mistake 2: Assuming completeness implies compactness**
A complete metric space need not be compact; compactness requires both completeness and total boundedness. For example, $\mathbb{R}$ is complete but not compact. Conversely, a compact subset of a metric space is always complete. Do not confuse these properties when constructing counterexamples.

**Mistake 3: Ignoring the Archimedean property in proofs**
Many proofs in real analysis implicitly rely on the Archimedean property (for any real $x$, there exists an integer $n > x$). For instance, showing that $\inf S = 0$ for $S = \{1/n : n \in \mathbb{N}\}$ requires it. Always check whether your argument needs this property or can proceed without it.

## Cross-References

- **[Linear Algebra](../../2-linear-algebra/index.md):** Metric spaces and normed spaces.
- **[Multivariable Calculus](../../4-multivariable-calculus/index.md):** Extensions to several variables.
- **[Measure Theory](../../10-measure-theory/index.md):** Lebesgue integration extending Riemann integration.
