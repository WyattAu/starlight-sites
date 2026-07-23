---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "8 Probability And Statistics", "url": "https://mathematics.wyattau.com/8-probability-and-statistics"}, {"name": "Index", "url": "https://mathematics.wyattau.com/8-probability-and-statistics/index"}]
}
</script>

<!-- Course Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Probability Theory",
  "description": "'UNIVERSITY Mathematics notes: Probability Theory. Comprehensive study material with definitions, examples, and assessment tools.'",
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
title: Probability Theory
description: 'UNIVERSITY Mathematics notes: Probability Theory. Comprehensive study material with definitions, examples, and assessment tools.'
tags:
  - Mathematics
  - University
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "8 Probability And Statistics", "url": "https://mathematics.wyattau.com/8-probability-and-statistics"}, {"name": "Index", "url": "https://mathematics.wyattau.com/8-probability-and-statistics/index"}]
}
</script>

<!-- Course Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Probability Theory",
  "description": "'UNIVERSITY Mathematics notes: Probability Theory. Comprehensive study material with definitions, examples, and assessment tools.'",
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

## Probability Theory

## Contents

1. [Probability Spaces](1_probability-spaces.md)
2. [Random Variables](2_random-variables.md)
3. [Joint Distributions and Independence](3_joint-distributions-and-independence.md)
4. [Limit Theorems](4_limit-theorems.md)
5. [Transformations and Convolutions](5_transformations-and-convolutions.md)

## Overview

University-level probability theory notes covering probability spaces, random variables, and limit theorems.

## Topics Covered

- **Probability Spaces**: Sigma-algebras, measures, conditional probability
- **Random Variables**: Discrete and continuous distributions, expectation, variance
- **Joint Distributions**: Independence, covariance, correlation
- **Limit Theorems**: Law of large numbers, central limit theorem

## Prerequisites

- Real analysis (sequences, series, integration)
- Basic set theory and logic
- Mathematical proofs and logic

## How to Use These Notes

Start with probability spaces to build foundational knowledge, then progress to random variables and limit theorems. Each section includes worked examples and practice problems.

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

Probability Theory is the mathematics of uncertainty. Imagine you have a coin that might be biased, but you do not know which way. Probability theory gives you the tools to quantify that uncertainty, update your beliefs as evidence arrives, and make predictions that are optimal given what you know. A probability space is the stage on which random phenomena perform: the sample space lists all possible outcomes, the sigma-algebra defines which events you can measure, and the probability measure assigns likelihoods. Random variables translate raw outcomes into numbers you can compute with. The great limit theorems reveal that randomness becomes predictable in the aggregate: the law of large numbers says averages stabilise, and the central limit theorem explains why the bell curve appears everywhere.

## Study Tips

1. **Master the definitions**: Probability theory requires precise understanding of measures and distributions
2. **Practise proofs**: Learn to write clear, rigorous proofs
3. **Draw diagrams**: Visualise distributions and random variables
4. **Learn standard examples**: Know the properties of common distributions (normal, binomial, Poisson)
5. **Connect to applications**: Relate probability theory to statistics, finance, and physics

## See Also
- [Classical Mechanics](https://physics.wyattau.com/docs/classical-mechanics)
- [Electromagnetism](https://physics.wyattau.com/docs/electromagnetism)
- [Statistical Learning](https://machine-learning.wyattau.com/docs/statistical-learning)
- [Statistical Mechanics](https://physics.wyattau.com/docs/statistical-mechanics)

## Common Mistakes

**Mistake 1: Assuming independence from correlation**
Two random variables can be uncorrelated yet dependent. For example, if $X$ is uniformly distributed on $[-1, 1]$ and $Y = X^2$, then $\text{Cov}(X, Y) = 0$ but $Y$ is completely determined by $X$. Independence requires zero covariance for jointly Gaussian variables, but not in general.

**Mistake 2: Confusing the law of large numbers with the central limit theorem**
The law of large numbers says the sample mean converges to the population mean as the sample size grows. The central limit theorem says the standardized sum converges to a normal distribution. These are different results: the LLN gives pointwise convergence while the CLT gives distributional convergence.

**Mistake 3: Misapplying Bayes' theorem by ignoring the prior**
Bayes' theorem requires a prior probability distribution, not just the likelihood. Students often compute $P(A|B) = P(B|A)P(A)/P(B)$ but forget to specify or update the prior $P(A)$. Without a well-defined prior, Bayesian inference reduces to computing conditional probabilities rather than performing full posterior updates.
