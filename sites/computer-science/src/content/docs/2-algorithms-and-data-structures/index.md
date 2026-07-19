---
title: Algorithms and Data Structures
description: "Algorithms and data structures form the core of practical computer science. An algorithm is a step-by-step procedure for solving a problem, while a data"
tags:
  - Computing
  - University
---

# Algorithms and Data Structures

Algorithms and data structures form the core of practical computer science. An algorithm is a step-by-step procedure for solving a problem, while a data structure is an organised format for storing and manipulating data. The choice of data structure directly affects the efficiency of the algorithms that operate on it, making the study of both topics inseparable.

## Key Concepts

Algorithm analysis uses big-$O$ notation to describe how running time or memory requirements grow with input size. Fundamental data structures include arrays, linked lists, stacks, queues, trees, and hash tables, each with different trade-offs in access time, insertion cost, and memory overhead. Sorting algorithms range from simple quadratic methods to efficient $O(n \log n)$ algorithms such as merge sort and quicksort.

## Contents

1. [Algorithm Analysis](1_algorithm-analysis.md)
2. [Fundamental Data Structures](2_fundamental-data-structures.md)
3. [Sorting Algorithms](3_sorting-algorithms.md)
4. [Graph Algorithms](4_graph-algorithms.md)
5. [Dynamic Programming](5_dynamic-programming.md)
6. [Advanced Topics](6_advanced-topics.md)
7. [Problem Set](7_problem-set.md)

## Overview

University-level algorithms and data structures notes covering analysis, design, and implementation.

## Topics Covered

- **Algorithm Analysis**: Time complexity, space complexity, recurrence relations
- **Data Structures**: Arrays, linked lists, trees, hash tables, heaps
- **Sorting and Searching**: Comparison-based and non-comparison-based methods
- **Dynamic Programming**: Optimal substructure, memoisation, tabulation

## Prerequisites

- Discrete mathematics (logic, proofs, graphs)
- Basic programming experience
- Mathematical maturity

## How to Use These Notes

Start with algorithm analysis to understand complexity, then progress to data structures and advanced algorithms. Each section includes worked examples and practice problems.

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
2. **Implement algorithms**: Code and test algorithms yourself, not just read about them
3. **Analyse complexity**: Practice deriving time and space complexity for new algorithms
4. **Learn the patterns**: Recognise common algorithm design paradigms (divide-and-conquer, dynamic programming)
5. **Connect to applications**: Relate algorithms to real-world problems and data structures

## Common Mistakes

**Confusing time complexity with space complexity.** Big-O notation describes either time or space, but they are not interchangeable. An algorithm with $O(n)$ time may use $O(n^2)$ space, and vice versa. Always specify which resource you are analysing, and consider both when comparing algorithms.

**Ignoring constant factors in practice.** Asymptotic analysis hides constant factors that matter for small inputs. An $O(n^2)$ algorithm with small constants can outperform an $O(n \log n)$ algorithm with large constants for typical input sizes. Profile your code before assuming asymptotic superiority.

**Overlooking worst-case vs average-case trade-offs.** Quicksort has $O(n^2)$ worst-case but $O(n \log n)$ average-case; mergesort guarantees $O(n \log n)$ but uses $O(n)$ space. Choosing an algorithm requires considering the expected input distribution, not just the asymptotic bound.
