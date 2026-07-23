---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "computer-science", "url": "https://computer-science.wyattau.com"}, {"name": "1 Discrete Mathematics", "url": "https://computer-science.wyattau.com/1-discrete-mathematics"}, {"name": "Index", "url": "https://computer-science.wyattau.com/1-discrete-mathematics/index"}]
}
</script>

<!-- Course Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Discrete Mathematics",
  "description": "Discrete mathematics provides the mathematical foundations required throughout computer science. Unlike continuous mathematics, which studies quantities",
  "provider": {
    "@type": "Organization",
    "name": "Wyatt's Notes",
    "url": "https://computer-science.wyattau.com"
  },
  "url": "https://computer-science.wyattau.com",
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
title: Discrete Mathematics
description: "Discrete mathematics provides the mathematical foundations required throughout computer science. Unlike continuous mathematics, which studies quantities"
tags:
  - Computing
  - University
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "computer-science", "url": "https://computer-science.wyattau.com"}, {"name": "1 Discrete Mathematics", "url": "https://computer-science.wyattau.com/1-discrete-mathematics"}, {"name": "Index", "url": "https://computer-science.wyattau.com/1-discrete-mathematics/index"}]
}
</script>

<!-- Course Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Discrete Mathematics",
  "description": "Discrete mathematics provides the mathematical foundations required throughout computer science. Unlike continuous mathematics, which studies quantities",
  "provider": {
    "@type": "Organization",
    "name": "Wyatt's Notes",
    "url": "https://computer-science.wyattau.com"
  },
  "url": "https://computer-science.wyattau.com",
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

## Discrete Mathematics

Discrete mathematics provides the mathematical foundations required throughout computer science. Unlike continuous mathematics, which studies quantities that vary smoothly, discrete mathematics concerns structures that are distinct and separated, such as integers, graphs, and logical propositions. Mastery of these concepts is essential for reasoning about algorithms, data structures, and computational systems.

## Key Concepts

The major topics include propositional and predicate logic, which formalise reasoning; set theory, relations, and functions, which describe mathematical structures; proof techniques such as induction and contradiction, which establish the validity of propositions; combinatorics, which counts and analyses discrete configurations; and graph theory, which models pairwise relationships between objects.

## Contents

1. [Propositional and Predicate Logic](1_propositional-and-predicate-logic.md)
2. [Sets, Relations, and Functions](2_sets-relations-and-functions.md)
3. [Proof Techniques](3_proof-techniques.md)
4. [Combinatorics](4_combinatorics.md)
5. [Graph Theory](5_graph-theory.md)
6. [Recurrence Relations](6_recurrence-relations.md)
7. [Problem Set](7_problem-set.md)

## Overview

University-level discrete mathematics notes covering logic, sets, proofs, combinatorics, and graphs.

## Topics Covered

- **Logic and Proofs**: Propositional logic, predicate logic, proof techniques
- **Sets and Relations**: Set operations, relations, functions, equivalence relations
- **Combinatorics**: Counting principles, permutations, combinations, generating functions
- **Graph Theory**: Paths, cycles, trees, planarity, graph colouring

## Prerequisites

- Basic mathematical maturity
- Familiarity with mathematical notation
- No prior programming experience required

## How to Use These Notes

Start with logic and proofs to build foundational reasoning skills, then progress to combinatorics and graph theory. Each section includes worked examples and practice problems.

## Navigation

Use the sidebar to browse topics, or start with the introductory pages linked from the sidebar.

## Additional Resources

Each section includes:
- Detailed explanations of key concepts
- Worked examples with step-by-step solutions
- Practice problems with answers
- Common pitfalls and how to avoid them
- Connections to other areas of computer science

## Study Tips

1. **Master proofs first**: Induction and contradiction are essential for all topics
2. **Practice counting**: Combinatorics requires practice to recognise patterns
3. **Draw graphs**: Visualise graph problems to find solutions
4. **Learn standard examples**: Know the properties of common graphs (complete, bipartite, planar)
5. **Connect to algorithms**: Discrete math is the language of algorithm analysis

## Common Mistakes

**Confusing "necessary" with "sufficient" conditions.** Students often treat "if and only if" as directly "if," leading to incorrect proofs. For example, a graph being connected is necessary for having an Euler circuit, but not sufficient (all vertices must also have even degree).

**Overlooking edge cases in definitions.** When proving a relation is an equivalence relation, students frequently forget to verify reflexivity for all elements, or assume symmetry implies reflexivity. Every property must be checked explicitly for the given set.

**Treating discrete structures as continuous.** Applying calculus intuition to discrete objects leads to errors. For example, the Pigeonhole Principle has no continuous analogue, and counting arguments require careful attention to whether items are distinguishable.

## Cross-References

- **[Algorithms](../../1-algorithms/index.md):** Algorithm design techniques that build on discrete math foundations.
- **[Mathematics](../../mathematics/src/content/docs/index.mdx):** University-level mathematics including abstract algebra and number theory.

- [Discrete Mathematics](https://mathematics.wyattau.com/docs/discrete-mathematics)
- [Algorithm Implementation](https://programming.wyattau.com/docs/algorithms)

## Intuition

Discrete mathematics is the mathematics of things that come in distinct, countable chunks — integers, graphs, logical propositions, finite sets — as opposed to the continuous quantities studied in calculus. Computer science is inherently discrete: computers store integers, process finite strings, traverse graphs, and evaluate logical conditions. You cannot run a program on the real number line; you run it on a finite set of bits. This is why discrete math is the foundational language of computer science — it provides the precise vocabulary for reasoning about algorithms, data structures, and computational complexity.

Logic and proofs are the bedrock. Propositional logic lets you reason about Boolean conditions (if statements, circuit design). Predicate logic lets you quantify over elements (for all x, there exists y). Proof by induction is the tool for establishing statements about all natural numbers — and it's the reasoning behind loop invariants, recursive algorithm correctness, and the analysis of recursive data structures. Without the ability to prove things, you can only hope your code works; with proofs, you can *know* it works.

Graphs model relationships between objects — social networks, computer networks, dependency graphs, state machines. Combinatorics counts the possible configurations — how many ways to arrange items, how many paths exist, how to optimise allocation. These aren't abstract exercises; they're the tools for analysing algorithm complexity (how many comparisons does sorting require?), designing efficient data structures (hash tables, trees), and solving practical optimisation problems (shortest paths, network flow, scheduling). When you understand why a hash table has O(1) average lookup or why Dijkstra's algorithm finds shortest paths, you're applying discrete mathematics.

