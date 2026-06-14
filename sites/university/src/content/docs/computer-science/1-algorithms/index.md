---
title: Algorithms
description: 'Topics in algorithm design and analysis including complexity, sorting, graph algorithms, and dynamic programming.'
---

# Algorithms

The study of algorithms is central to computer science. An algorithm is a finite, well-defined sequence of instructions that solves a computational problem. The analysis of algorithms concerns their correctness and efficiency, typically measured in terms of time complexity (how the number of operations grows with input size) and space complexity (how memory usage grows).

## Key Concepts

Efficiency is expressed using asymptotic notation. Big-$O$ notation provides an upper bound on growth rate: for example, binary search runs in $O(\log n)$ time because it halves the search space at each step. Big-$\Omega$ provides a lower bound, and big-$\Theta$ provides a tight bound when both upper and lower bounds coincide.

## Worked Example: Analysing Merge Sort

Merge sort divides an array of $n$ elements into two halves, recursively sorts each half, and merges the results. The recurrence relation is $T(n) = 2T(n/2) + O(n)$, which solves to $T(n) = O(n \log n)$. This makes merge sort significantly more efficient than naive sorting algorithms such as bubble sort, which runs in $O(n^2)$ time, for large input sizes.
