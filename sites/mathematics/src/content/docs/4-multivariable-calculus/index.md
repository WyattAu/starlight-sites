---


date: 2026-07-23T21:57:32+01:00
title: Multivariable Calculus
tags:
  - Mathematics
  - University
description: "Multivariable calculus extends the differential and integral calculus to functions of several real variables. The partial derivative generalises the"
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "4 Multivariable Calculus", "url": "https://mathematics.wyattau.com/4-multivariable-calculus"}, {"name": "Index", "url": "https://mathematics.wyattau.com/4-multivariable-calculus/index"}]
}
</script>

<!-- Course Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Multivariable Calculus",
  "description": "Multivariable calculus extends the differential and integral calculus to functions of several real variables. The partial derivative generalises the",
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

## Multivariable Calculus

Multivariable calculus extends the differential and integral calculus to
functions of several real variables. The partial derivative generalises the
ordinary derivative; the multiple integral generalises the definite integral;
and the three integral theorems of vector calculus (Green, Stokes, and the
Divergence Theorem) connect the local, differential behaviour of a field to its
global, integral behaviour.

The central objects are scalar and vector fields on subsets of Euclidean space,
and the central tools are the gradient, divergence, curl, Jacobian, and
Hessian. Each is defined precisely, its coordinate expression is derived, and
its geometric meaning is stated. The treatment is coordinate-aware: where a
result holds independent of the choice of coordinates, that invariance is
proved rather than assumed.

## Contents

1. [Partial Derivatives](1_partial-derivatives.md)
2. [Multiple Integrals](2_multiple-integrals.md)
3. [Vector Calculus](3_vector-calculus.md)
4. [Optimization](4_optimization.md)
5. [Curves and Surfaces](5_curves-and-surfaces.md)
6. [Problem Set](6_problem-set.md)

## Overview

University-level multivariable calculus notes covering partial derivatives, vector calculus, and optimisation.

## Topics Covered

- **Partial Derivatives**: Chain rule, gradient, directional derivatives
- **Multiple Integrals**: Double and triple integrals, change of variables
- **Vector Calculus**: Green"s theorem, Stokes' theorem, divergence theorem
- **Optimisation**: Local extrema, Lagrange multipliers, Hessian

## Prerequisites

- Single-variable calculus (differentiation, integration)
- Linear algebra (vectors, matrices)
- Basic topology (open sets, continuity)
- Mathematical proofs and logic

## How to Use These Notes

Start with partial derivatives to build foundational knowledge, then progress to vector calculus and optimisation. Each section includes worked examples and practice problems.

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

Multivariable calculus extends single-variable ideas to higher dimensions, where functions map vectors to scalars or vectors. The gradient points in the direction of steepest ascent, like a compass pointing uphill. Divergence measures how much a vector field spreads out from a point, like air flowing from a source. Curl measures rotation, like water swirling around a drain. The fundamental theorems of calculus generalize: the line integral of a gradient field depends only on endpoints, and the flux of a curl through a surface equals the circulation around its boundary. These are the language of physics.
## Study Tips

1. **Master the definitions**: Multivariable calculus requires precise understanding of derivatives and integrals
2. **Practise proofs**: Learn to write clear, rigorous proofs
3. **Draw diagrams**: Visualise surfaces, curves, and vector fields
4. **Learn standard examples**: Know the properties of common surfaces (planes, spheres, paraboloids)
5. **Connect to physics**: Relate multivariable calculus to electromagnetism and fluid dynamics

### 4.1 Common Mistakes

**Mistake 1: Confusing the gradient with the directional derivative**
The gradient $\nabla f$ is a vector, while the directional derivative $D_{\mathbf{u}} f = \nabla f \cdot \mathbf{u}$ is a scalar. Students often write $\nabla f$ when they mean $D_{\mathbf{u}} f$ or vice versa. The gradient points in the direction of steepest ascent; the directional derivative gives the rate of change in a specific direction.

**Mistake 2: Applying the chain rule incorrectly for multivariable functions**
When $z = f(x, y)$ with $x = g(t)$ and $y = h(t)$, the chain rule is $\frac{dz}{dt} = \frac{\partial f}{\partial x}\frac{dx}{dt} + \frac{\partial f}{\partial y}\frac{dy}{dt}$. A common error is omitting one of the partial derivative terms or treating partial derivatives like ordinary derivatives. Always account for every path through which the variable depends on $t$.

**Mistake 3: Misidentifying critical points in multivariable optimisation**
Setting $\nabla f = \mathbf{0}$ is necessary but not sufficient. The Hessian matrix must be checked: positive definite means local minimum, negative definite means local maximum, and indefinite means saddle point. A zero determinant of the Hessian means the test is inconclusive and further analysis is required.

## Cross-References

- **[Linear Algebra](../../2-linear-algebra/index.md):** Jacobians and Hessians as matrices.
- **[Real Analysis](../../3-real-analysis/index.md):** Foundational analysis for multivariable calculus.
- **[Ordinary Differential Equations](../../5-ordinary-differential-equations/index.md):** Systems of ODEs using multivariable calculus.

- [Quantum Mechanics](https://physics.wyattau.com/docs/quantum-mechanics)
- [Graph Theory](https://computer-science.wyattau.com/docs/graph-theory)
- [Classical Mechanics](https://physics.wyattau.com/docs/classical-mechanics)
- [Electromagnetism](https://physics.wyattau.com/docs/electromagnetism)
- [Statistical Learning](https://machine-learning.wyattau.com/docs/statistical-learning)
- [Statistical Mechanics](https://physics.wyattau.com/docs/statistical-mechanics)
