---


date: 2026-07-23T21:57:32+01:00
title: Further Statistics
description: 'A-Level Further Maths Further Statistics notes covering key definitions, core concepts, worked examples, and practice questions for effective revision.'
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "alevel", "url": "https://alevel.wyattau.com"}, {"name": "Further Maths", "url": "https://alevel.wyattau.com/further-maths"}, {"name": "Further Statistics", "url": "https://alevel.wyattau.com/further-maths/further-statistics"}, {"name": "Index", "url": "https://alevel.wyattau.com/further-maths/further-statistics/index"}]
}
</script>

<!-- Course Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Further Statistics",
  "description": "'A-Level Further Maths Further Statistics notes covering key definitions, core concepts, worked examples, and practice questions for effective revision.'",
  "provider": {
    "@type": "Organization",
    "name": "Wyatt's Notes",
    "url": "https://alevel.wyattau.com"
  },
  "url": "https://alevel.wyattau.com",
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

## Intuition

**This topic explores fundamental concepts that shape our understanding of the world.**

## Further Statistics

Further Statistics extends the statistical methods from A-Level Mathematics, introducing continuous
probability distributions, more sophisticated hypothesis tests, and the chi-squared family of tests
for goodness of fit and independence.

## Topics Covered

### Poisson and Geometric Distributions

- **Poisson distribution** — $X \sim \text{Po}(\lambda)$; derivation as the limit of
  $\text{Bin}(n, p)$ as $n \to \infty$, $p \to 0$ with $np = \lambda$
- **Poisson properties** — mean $= \lambda$, variance $= \lambda$; additive property of independent
  Poissons
- **Geometric distribution** — $X \sim \text{Geo}(p)$; $P(X = x) = (1-p)^{x-1}p$; memoryless
  property
- **Hypothesis testing** — using Poisson and geometric distributions; critical regions, significance
  levels, $p$-values

### Exponential and Continuous Random Variables

- **Exponential distribution** — $X \sim \text{Exp}(\lambda)$; PDF $f(x) = \lambda e^{-\lambda x}$
  for $x \geq 0$; CDF $F(x) = 1 - e^{-\lambda x}$
- **Link to Poisson processes** — the waiting time between Poisson events follows an exponential
  distribution
- **Continuous random variables** — PDF, CDF, $E(X) = \int xf(x)\,dx$,
  $\text{Var}(X) = E(X^2) - [E(X)]^2$
- **Median and mode** — finding the median from the CDF; locating the mode from the PDF

### Chi-Squared Tests

- **Goodness of fit** — testing whether observed data follows a specified distribution;
  $\chi^2 = \sum \frac{(O_i - E_i)^2}{E_i}$
- **Contingency tables** — testing for independence between two categorical variables
- **Degrees of freedom** — calculating $\nu$ correctly; $\nu = k - 1$ for goodness of fit,
  $\nu = (r-1)(c-1)$ for contingency tables
- **Combining cells** — when expected frequencies are below 5
- **Interpretation** — what a significant result actually means in context

## Study Tips

1. **Know when to use each distribution**. Binomial for fixed trials, Poisson for rare events in a
   fixed interval, Geometric for "first success" problems, Exponential for continuous waiting times.
2. **Practise calculating expected frequencies**. For chi-squared tests, the expected values must
   be calculated correctly before you can compute the test statistic.
3. **Show all working in hypothesis tests**. State $H_0$ and $H_1$, calculate the test statistic,
   compare to critical value or find the $p$-value, state the conclusion in context.
4. **Understand the memoryless property** of both Geometric and Exponential distributions. It is a
   common exam topic that tests deep understanding.
5. **Check integration**. Continuous random variable problems require careful definite integration.
   Always verify bounds from the support of the distribution.

### Hypothesis Testing Workflow

Every hypothesis test follows the same five-step structure:

1. **State hypotheses** — $H_0$ (null: no effect/difference) and $H_1$ (alternative)
2. **Choose significance level** — $\alpha = 0.05$ or $0.01$
3. **Calculate the test statistic**. Using the appropriate distribution
4. **Determine the critical region or $p$-value**. Compare to $\alpha$
5. **State the conclusion in context**. Never just "reject $H_0$"; explain what this means for the
   real-world situation

### Distribution Selection Guide

| Scenario                            | Distribution           | Key Parameters              |
| ----------------------------------- | ---------------------- | --------------------------- |
| Counting events in a fixed interval | Poisson($\lambda$)     | Mean = Variance = $\lambda$ |
| First success in repeated trials    | Geometric($p$)         | $P(X=x) = (1-p)^{x-1}p$     |
| Continuous waiting time             | Exponential($\lambda$) | Mean = $\frac{1}{\lambda}$  |
| Testing goodness of fit             | $\chi^2$               | Degrees of freedom $\nu$    |

## How to Use These Notes

Follow the sidebar order. Each page provides formal distribution definitions, worked calculation
examples, and exam-style hypothesis testing problems. Start with Poisson and Geometric, then move to
continuous distributions, then chi-squared tests.

## Overview

This section provides comprehensive A-Level Further Maths content for Further Statistics, covering all specification points with detailed explanations, worked examples, and practice questions.

## Content Structure

Each page in this section includes:

- **Definitions**: Clear, precise explanations of key concepts
- **Worked Examples**: Step-by-step solutions with annotations
- **Practice Questions**: Multiple-choice and structured questions with mark schemes
- **Common Pitfalls**: Errors to avoid and how to fix them
- **Exam Tips**: Strategies for maximising marks in this topic

## How to Use These Notes

1. Read the introductory page to understand the topic overview
2. Work through each sub-topic in order
3. Attempt the practice questions before checking solutions
4. Use the flashcards to revise key terminology
5. Complete the diagnostic test to identify remaining gaps

## Key Topics

- Core definitions and principles
- Application to examination-style questions
- Links to related topics across the specification
- Assessment objective alignment (AO1, AO2, AO3)

## Revision Strategies

- **Active Recall**: Test yourself regularly rather than re-reading notes
- **Spaced Practice**: Revisit this topic at increasing intervals
- **Interleaving**: Mix with other topics during revision sessions
- **Elaboration**: Explain concepts in your own words

## Exam Preparation

Focus on command word interpretation and mark scheme analysis. Practice timing yourself on questions to build speed and accuracy. Review examiner reports for this topic to understand common student errors.

## See Also

- [Further Maths](..)
- [Poisson and Geometric Distributions](./01-poisson-and-geometric-distributions)
- [Exponential Distribution and Continuous Random Variables](./02-exponential-and-continuous-random-variables)
