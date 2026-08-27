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
title: "Differential Geometry | Mathematics"
sources:
  - text: Spivak - Calculus
description: "Topics in differential geometry including manifolds, tangent spaces, differential forms, Riemannian geometry, and curvature."
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
---
sources:
  - text: Spivak - Calculus

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "12 Differential Geometry", "url": "https://mathematics.wyattau.com/12-differential-geometry"}, {"name": "Index", "url": "https://mathematics.wyattau.com/12-differential-geometry/index"}]
}
</script>

<!-- Course Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Differential Geometry",
  "description": "Topics in differential geometry including manifolds, tangent spaces, differential forms, Riemannian geometry, and curvature.",
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

## Differential Geometry

Differential geometry is the study of geometric properties of spaces that possess a smooth structure, allowing the tools of calculus to be applied. It provides the mathematical language for describing the curvature of surfaces and higher-dimensional manifolds, and has profound applications in physics (general relativity), engineering (computer vision), and pure mathematics.

## Key Concepts

A smooth manifold is a topological space that locally resembles Euclidean space $\mathbb{R}^n$ and admits a differentiable structure. Tangent spaces provide a linear approximation to the manifold at each point, enabling the definition of derivatives of maps between manifolds. Differential forms generalise the notion of functions and vectors, providing a unified framework for integration on manifolds through the exterior derivative and Stokes" theorem.

## Contents

1. [Smooth Manifolds](1_smooth-manifolds)
2. [Tangent Spaces and Tangent Bundles](2_tangent-spaces-and-tangent-bundles)
3. [Vector Fields and Flows](3_vector-fields-and-flows)
4. [Differential Forms](4_differential-forms)
5. [Riemannian Geometry](5_riemannian-geometry)
6. [Geodesics](6_geodesics)
7. [Curvature](7_curvature)
8. [The Gauss-Bonnet Theorem](8_the-gauss-bonnet-theorem)
9. [Applications](9_applications)
10. [Summary](10_summary)

## Overview

University-level differential geometry notes covering manifolds, forms, and Riemannian geometry.

## Topics Covered

- **Manifolds and Tangent Spaces**: Smooth structures, vector fields, flows
- **Differential Forms**: Exterior algebra, integration on manifolds
- **Riemannian Geometry**: Metrics, geodesics, curvature tensors
- **Curvature**: Gaussian curvature, sectional curvature, Ricci curvature

## Prerequisites

- Multivariable calculus (partial derivatives, Jacobians)
- Linear algebra (vector spaces, inner products)
- Basic topology (open sets, continuity)
- Mathematical proofs and logic

## How to Use These Notes

Start with smooth manifolds to build foundational knowledge, then progress to differential forms and Riemannian geometry. Each section includes worked examples and practice problems.

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

Differential geometry equips smooth manifolds with a notion of distance and angle through the metric tensor. Think of it as assigning a flexible, position-dependent ruler and protractor to space itself. The metric determines how to measure lengths of curves, angles between vectors, and volumes of regions. The Levi-Civita connection provides the notion of parallel transport, telling you how to compare vectors at different points. Geodesics are the straightest possible paths, generalising lines in flat space. The Riemann curvature tensor measures precisely how the geometry deviates from flatness: parallel-transporting a vector around a small loop returns it rotated by an amount determined by the curvature. These ideas form the mathematical backbone of general relativity.

## Common Mistakes

**Mistake 1: Confusing tangent vectors with points on the manifold**
Students often write $v \in M$ when they mean $v \in T_pM$. A tangent vector lives in the tangent space at a point, not on the manifold itself. The tangent bundle $TM$ is the correct space that pairs points with their tangent vectors.

**Mistake 2: Assuming coordinate expressions are basis-independent**
When writing $X = X^i \partial/\partial x^i$, the components $X^i$ depend on the choice of coordinates. Under a coordinate change, the components transform contravariantly. Students frequently forget that formulas written in one chart may look different in another.

**Mistake 3: Treating the differential as a linear map between tangent spaces of the same manifold**
The pushforward $df_p : T_pM \to T_{f(p)}N$ maps between tangent spaces of *different* manifolds when $f : M \to N$. A common error is writing $df_p : T_pM \to T_pM$, which only makes sense when $f$ is a self-map and even then is misleading.

## See Also

- [Quantum Mechanics](https://physics.wyattau.com/docs/quantum-mechanics)
- [Graph Theory](https://computer-science.wyattau.com/docs/graph-theory)
- [Classical Mechanics](https://physics.wyattau.com/docs/classical-mechanics)
- [Electromagnetism](https://physics.wyattau.com/docs/electromagnetism)

## Study Tips

1. **Master the definitions**: Differential geometry requires precise understanding of manifolds and forms
2. **Practise proofs**: Learn to write clear, rigorous proofs
3. **Draw diagrams**: Visualise manifolds, geodesics, and curvature
4. **Learn standard examples**: Know the properties of common manifolds (spheres, tori, projective planes)
5. **Connect to physics**: Relate differential geometry to general relativity and gauge theory
