---


date: 2026-07-23T21:57:32+01:00
title: Algorithms
description: "The study of algorithms is central to computer science. An algorithm is a finite, well-defined sequence of instructions that solves a computational problem."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "computer-science", "url": "https://computer-science.wyattau.com"}, {"name": "1 Algorithms", "url": "https://computer-science.wyattau.com/1-algorithms"}, {"name": "Index", "url": "https://computer-science.wyattau.com/1-algorithms/index"}]
}
</script>

<!-- Course Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Algorithms",
  "description": "The study of algorithms is central to computer science. An algorithm is a finite, well-defined sequence of instructions that solves a computational problem.",
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

## Algorithms

The study of algorithms is central to computer science. An algorithm is a finite, well-defined sequence of instructions that solves a computational problem. The analysis of algorithms concerns their correctness and efficiency, measured in terms of time complexity (how the number of operations grows with input size) and space complexity (how memory usage grows).

## Intuition

**A recipe for solving problems:** An algorithm is like a recipe — it tells you exactly what steps to take, in what order, and when to stop. The better the recipe (algorithm), the faster you get dinner (solution), especially when cooking for a large group (big inputs).

**Why it matters:** Algorithms determine whether a problem is solvable in seconds or centuries. Choosing the right algorithm can turn an intractable problem into a routine task — this is the difference between a search engine returning results instantly and one that takes days.

**The key insight:** Efficiency is about growth rates, not absolute speed — understanding how running time scales with input size lets you predict performance on problems you've never seen before.

## Key Concepts

Efficiency is expressed using asymptotic notation. Big-$O$ notation provides an upper bound on growth rate: for example, binary search runs in $O(\log n)$ time because it halves the search space at each step. Big-$\Omega$ provides a lower bound, and big-$\Theta$ provides a tight bound when both upper and lower bounds coincide.

## Worked Example: Analysing Merge Sort

Merge sort divides an array of $n$ elements into two halves, recursively sorts each half, and merges the results. The recurrence relation is $T(n) = 2T(n/2) + O(n)$, which solves to $T(n) = O(n \log n)$. This makes merge sort significantly more efficient than naive sorting algorithms such as bubble sort, which runs in $O(n^2)$ time, for large input sizes.

## Overview

University-level algorithm design and analysis notes covering complexity, paradigms, and advanced topics.

## Topics Covered

- **Complexity Analysis**: Big-O, recurrences, amortised analysis
- **Divide and Conquer**: Merge sort, quicksort, dynamic programming
- **Graph Algorithms**: BFS, DFS, shortest paths, minimum spanning trees
- **Advanced Topics**: NP-completeness, approximation algorithms, randomised algorithms

## Prerequisites

- Discrete mathematics (proofs, logic)
- Basic programming experience
- Mathematical maturity

## How to Use These Notes

Start with complexity analysis to build foundational knowledge, then progress to algorithm design paradigms. Each section includes worked examples and practice problems.

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

1. **Master the basics**: Ensure you understand asymptotic notation before moving to advanced topics
2. **Practice algorithms**: Implement and test algorithms yourself, not just read about them
3. **Analyse complexity**: Practice deriving time and space complexity for new algorithms
4. **Learn the patterns**: Recognise common algorithm design paradigms (divide-and-conquer, dynamic programming)
5. **Connect to applications**: Relate algorithms to real-world problems and data structures

## Cross-References

- **[Algorithm Analysis](../2-algorithms-and-data-structures/1_algorithm-analysis):** Formal complexity analysis for the algorithms studied here.
- **[Discrete Mathematics](../../../../../typescript/src/content/docs/index):** Graph theory and combinatorics foundations for algorithm design.

- [Discrete Mathematics](https://mathematics.wyattau.com/docs/discrete-mathematics)
- [Algorithm Implementation](https://programming.wyattau.com/docs/algorithms)

## Common Mistakes

- **Confusing time complexity with space complexity:** An algorithm can be fast but use a lot of memory (e.g., storing all permutations) or slow but memory-efficient. Always analyse both dimensions and state which one you are optimising.
- **Misapplying Big-O notation:** $O(n)$ describes an upper bound, not an exact growth rate. Saying "this algorithm is $O(n^2)$" does not mean it always takes quadratic time — it could be faster. Use $\Theta(n)$ when you mean tight bound.
- **Assuming a greedy algorithm is optimal:** Greedy algorithms work for matroids and certain optimisation problems but fail for many others (e.g., knapsack, Huffman coding requires a proof of correctness). Always prove or cite why a greedy strategy works.
- **Forgetting that recursion depth matters:** Recursive algorithms can cause stack overflow for deep recursions. Convert to iteration or use tail-call optimisation (where the language supports it) for problems with recursion depth exceeding a few thousand.
