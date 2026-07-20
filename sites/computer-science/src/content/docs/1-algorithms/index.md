---
title: Algorithms
description: "The study of algorithms is central to computer science. An algorithm is a finite, well-defined sequence of instructions that solves a computational problem."
---

# Algorithms

The study of algorithms is central to computer science. An algorithm is a finite, well-defined sequence of instructions that solves a computational problem. The analysis of algorithms concerns their correctness and efficiency, measured in terms of time complexity (how the number of operations grows with input size) and space complexity (how memory usage grows).

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

- **[Algorithm Analysis](../../2-algorithms-and-data-structures/1_algorithm-analysis.md):** Formal complexity analysis for the algorithms studied here.
- **[Discrete Mathematics](../../mathematics/src/content/docs/1-abstract-algebra/index.md):** Graph theory and combinatorics foundations for algorithm design.
