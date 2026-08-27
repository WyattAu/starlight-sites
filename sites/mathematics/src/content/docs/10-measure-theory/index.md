---
sources:
  - text: Spivak - Calculus

sources:
  - text: Spivak - Calculus

sources:
  - text: Spivak - Calculus
date: 2026-07-23T21:57:32+01:00
sources:
  - text: Spivak - Calculus
title: "Measure Theory | Mathematics - Wyatt's Notes"
sources:
  - text: Spivak - Calculus
tags:
sources:
  - text: Spivak - Calculus
  - Mathematics
sources:
  - text: Spivak - Calculus
  - University
sources:
  - text: Spivak - Calculus
description: "Measure Theory: comprehensive educational content notes with precise definitions, worked examples, common pitfalls, and practice problems."
sources:
  - text: Spivak - Calculus
---
sources:
  - text: Spivak - Calculus

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "10 Measure Theory", "url": "https://mathematics.wyattau.com/10-measure-theory"}, {"name": "Index", "url": "https://mathematics.wyattau.com/10-measure-theory/index"}]
}
</script>

<!-- Course Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Measure Theory",
  "description": "Measure Theory: comprehensive educational content notes with precise definitions, worked examples, common pitfalls, and practice problems.",
  "provider": {
    "@type": "Organization",
    "name": "Wyatt's Notes",
    "url": "https://mathematics.wyattau.com"
  },
  "url": "https://mathematics.wyattau.com",
  "educationalLevel": "Secondary",
  "inLanguage": "en",
  "isAccessibleForFree": true,
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "online",
    "courseWorkload": "PT1H"
  }
}
</script>

## Measure Theory

## Contents

1. [Sigma-Algebras and Measurable Spaces](1_sigma-algebras-and-measurable-spaces)
2. [Measures](2_measures)
3. [Lebesgue Outer Measure and Caratheodory Extension](3_lebesgue-outer-measure-and-caratheodory-extension)
4. [Lebesgue Measurable Sets and Non-Measurable Sets](4_lebesgue-measurable-sets-and-non-measurable-sets)
5. [Measurable Functions](5_measurable-functions)
6. [Lebesgue Integration](6_lebesgue-integration)
7. [$L^p$ Spaces](7_l-p-spaces)
8. [Fubini and Tonelli Theorems](8_fubini-and-tonelli-theorems)
9. [Radon-Nikodym Derivative and Lebesgue Decomposition](9_radon-nikodym-derivative-and-lebesgue-decomposition)
10. [Summary of Key Results](10_summary-of-key-results)

## Overview

University-level measure theory notes covering sigma-algebras, measures, and Lebesgue integration.

## Topics Covered

- **Sigma-Algebras and Measures**: Definitions, properties, measurable spaces
- **Lebesgue Measure**: Outer measure, Caratheodory extension, non-measurable sets
- **Lebesgue Integration**: Convergence theorems, Fatou"s lemma, dominated convergence
- **Lp Spaces**: Norms, completeness, dual spaces

## Prerequisites

- Real analysis (sequences, series, continuity, differentiation)
- Basic topology (open sets, compactness)
- Mathematical proofs and logic

## How to Use These Notes

Start with sigma-algebras and measures to build foundational knowledge, then progress to Lebesgue integration and Lp spaces. Each section includes worked examples and practice problems.

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

Measure theory provides the rigorous foundation for integration and probability. A measure assigns sizes to sets, generalising length, area, and volume. Sigma-algebras specify which sets can be measured: they are collections closed under complements and countable unions, large enough to contain all open sets yet small enough to avoid paradoxical constructions. Lebesgue measure extends the intuitive notion of length to a vast class of subsets of the real line. The power of measure theory lies in its convergence theorems: the monotone convergence theorem and dominated convergence theorem justify passing limits inside integrals, operations that fail spectacularly for the Riemann integral. Measure theory thus transforms integration from a computational tool into a flexible framework for analysis.

## Study Tips

1. **Master the definitions**: Measure theory requires precise understanding of sigma-algebras and measures
2. **Practise proofs**: Learn to write clear, rigorous proofs
3. **Draw diagrams**: Visualise measurable sets and functions
4. **Learn standard examples**: Know the properties of Lebesgue measure and integration
5. **Connect to analysis**: Relate measure theory to real analysis and probability

## Common Mistakes

**Mistake 1: Assuming every subset of $\mathbb{R}$ is Lebesgue measurable**
Not all subsets of $\mathbb{R}$ are measurable. The Vitali construction produces a non-measurable set using the axiom of choice. Students sometimes assume that any set they can define is automatically measurable, which leads to paradoxes when computing outer measures or applying the Lebesgue differentiation theorem.

**Mistake 2: Confusing the Borel sigma-algebra with the Lebesgue sigma-algebra**
The Borel sigma-algebra is generated by open sets, while the Lebesgue sigma-algebra is its completion with respect to Lebesgue measure. The Lebesgue sigma-algebra is strictly larger: it contains all subsets of Borel null sets. Students often assume these are the same, which matters when discussing completeness of measure spaces.

**Mistake 3: Assuming that pointwise convergence of measurable functions implies $L^p$ convergence**
Pointwise convergence does not imply convergence in $L^p$ without a dominating function (Dominated Convergence Theorem) or monotonicity (Monotone Convergence Theorem). The sequence $f_n = n\chi_{(0,1/n)}$ converges pointwise to $0$ but $\int f_n = 1$ for all $n$.

## Cross-References

- **[Real Analysis](../../../../../typescript/src/content/docs/index):** Foundational analysis concepts extended by measure theory.
- **[Functional Analysis](../../../../../typescript/src/content/docs/index):** L^p spaces and operator theory built on measure.
- **[Probability and Statistics](../../../../../typescript/src/content/docs/index):** Measure-theoretic probability foundations.

- [Classical Mechanics](https://physics.wyattau.com/docs/classical-mechanics)
- [Electromagnetism](https://physics.wyattau.com/docs/electromagnetism)
- [Statistical Learning](https://machine-learning.wyattau.com/docs/statistical-learning)
- [Statistical Mechanics](https://physics.wyattau.com/docs/statistical-mechanics)
