---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "9 Topology", "url": "https://mathematics.wyattau.com/9-topology"}, {"name": "Index", "url": "https://mathematics.wyattau.com/9-topology/index"}]
}
</script>

<!-- Course Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Topology",
  "description": "'Topology: comprehensive educational content notes with precise definitions, worked examples, common pitfalls, and practice problems.'",
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
title: Topology
tags:
  - University Maths
description: 'Topology: comprehensive educational content notes with precise definitions, worked examples, common pitfalls, and practice problems.'
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "9 Topology", "url": "https://mathematics.wyattau.com/9-topology"}, {"name": "Index", "url": "https://mathematics.wyattau.com/9-topology/index"}]
}
</script>

<!-- Course Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Topology",
  "description": "'Topology: comprehensive educational content notes with precise definitions, worked examples, common pitfalls, and practice problems.'",
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

# Topology

## Contents

1. [Introduction to Topology](1_introduction-to-topology.md)
2. [Topological Spaces](2_topological-spaces.md)
3. [Closed Sets, Closure, Interior, and Boundary](3_closed-sets-closure-interior-and-boundary.md)
4. [Continuity and Homeomorphisms](4_continuity-and-homeomorphisms.md)
5. [Compactness](5_compactness.md)
6. [Connectedness](6_connectedness.md)
7. [Metric Spaces](7_metric-spaces.md)
8. [Separation Axioms](8_separation-axioms.md)
9. [Introduction to Algebraic Topology](9_introduction-to-algebraic-topology.md)
10. [Common Pitfalls](10_common-pitfalls.md)
11. [Summary](11_summary.md)

## Overview

University-level topology notes covering topological spaces, compactness, and connectedness.

## Topics Covered

- **Topological Spaces**: Definitions, bases, subbases, continuity. A topology on a set X is a collection of open sets satisfying the axioms: ∅ and X are open, arbitrary unions of open sets are open, finite intersections of open sets are open.
- **Compactness**: Open covers, Heine-Borel theorem, Tychonoff theorem. Compactness is the topological analogue of finiteness — many results that hold for finite sets extend to compact spaces.
- **Connectedness**: Path connectedness, components, local connectedness. A space is connected if it cannot be written as a union of two disjoint non-empty open sets. Path connectedness is stronger: any two points can be joined by a continuous path.
- **Algebraic Topology**: Fundamental group, homology, Euler characteristic. These invariants classify spaces up to homeomorphism by associating algebraic objects (groups, numbers) to topological spaces.

## Prerequisites

- Real analysis (sequences, continuity, metric spaces). You should be comfortable with ε-δ arguments and convergence.
- Basic set theory and logic. Familiarity with unions, intersections, complements, and proof techniques.
- Mathematical proofs and logic. Topology is proof-based — you will write many proofs.

## How to Use These Notes

Start with topological spaces to build foundational knowledge, then progress to compactness and connectedness. Each section includes worked examples and practice problems. The key to learning topology is to work through proofs yourself — reading proofs is not enough.

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

Topology is the study of properties preserved under continuous deformation. Imagine stretching a rubber sheet without tearing or gluing: a coffee mug can become a donut because they share the same topological structure. The key insight is that topology abstracts away metric details like distance and angle, focusing instead on connectivity, holes, and boundaries. This abstraction makes topological results remarkably general, applying to shapes in any dimension and even to abstract spaces like function spaces. The fundamental group captures one-dimensional holes by counting how many ways loops can wind around obstacles, turning geometric questions into algebraic computations.
## Study Tips

1. **Master the definitions**: Topology requires precise understanding of open sets and continuity. Misremembering a definition leads to incorrect proofs.
2. **Practise proofs**: Learn to write clear, rigorous proofs. Topology is an excellent training ground for mathematical reasoning.
3. **Draw diagrams**: Visualise topological spaces and their properties. Pictures help build intuition, even when proofs must be rigorous.
4. **Learn standard examples**: Know the properties of common spaces (metric spaces, product spaces, quotient spaces). These serve as test cases for general theorems.
5. **Connect to analysis**: Relate topology to real analysis and geometry. Topological concepts generalise metric space concepts.

## Cross-References

- **[Real Analysis](../../3-real-analysis/index.md):** Metric spaces and topological spaces; every metric space induces a topology.
- **[Abstract Algebra](../../1-abstract-algebra/index.md):** Topological groups and algebraic topology; group theory underpins homology and fundamental groups.
- **[Differential Geometry](../../12-differential-geometry/index.md):** Smooth manifolds as topological spaces; differential geometry adds calculus to topology.
