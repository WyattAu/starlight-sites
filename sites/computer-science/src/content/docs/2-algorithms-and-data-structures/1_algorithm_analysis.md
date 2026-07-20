---
title: Algorithm Analysis
description: Methods for analyzing algorithm efficiency including asymptotic notation, amortized analysis, and space-time trade-offs.
---

## Intuition

Algorithm analysis determines efficiency without implementation. Asymptotic notation (O, Omega, Theta) describes growth rates. Amortized analysis averages cost over operations. Space-time trade-offs balance memory against speed. The Master theorem solves divide-and-conquer recurrences. These techniques let you compare algorithms objectively and predict performance at scale.

## Asymptotic Notation

Big-O notation describes the upper bound of an algorithm's growth rate. It answers: "In the worst case, how fast does the running time grow as input size increases?"

- **O(1)** — Constant time: array access, hash table lookup
- **O(log n)** — Logarithmic: binary search
- **O(n)** — Linear: single loop through data
- **O(n log n)** — Linearithmic: efficient sorting (merge sort, heap sort)
- **O(n²)** — Quadratic: nested loops (bubble sort, selection sort)
- **O(2ⁿ)** — Exponential: brute-force subsets

**Key insight:** Only the dominant term matters. O(3n² + 5n + 100) = O(n²). Constants are dropped because Big-O describes growth *rate*, not exact runtime.

## Amortized Analysis

Some operations are occasionally expensive but cheap on average. Amortized analysis averages the cost over a sequence of operations:

- **Dynamic array resizing:** Appending is O(1) amortized, even though occasional resizing is O(n)
- **Splay tree operations:** Any single operation can be O(n), but a sequence of m operations is O(m log n)
- **Union-Find with path compression:** Nearly O(1) per operation after initialization

## Space-Time Trade-offs

Using more memory can make an algorithm faster, and vice versa:

- **Precomputation tables:** Trade space for speed (lookup tables for trigonometric functions)
- **Bloom filters:** Trade accuracy for space (probabilistic membership testing)
- **In-place algorithms:** Trade speed for space (in-place sorts use O(1) extra space)

## Common Mistakes

**Confusing Big-O with exact running time:** Big-O describes growth rate, not exact time. O(n²) could be 1000n² or 0.001n² — both are O(n²). Don't assume O(n²) is always slower than O(n).

**Forgetting that space complexity matters:** An algorithm with O(1) space may be preferred over O(n) space even if time complexity is similar. Memory is a finite resource.

**Assuming all sorting algorithms have the same complexity:** Bubble sort is O(n²). Merge sort is O(n log n). Quick sort is O(n log n) average but O(n²) worst case. Know the differences.

## Cross-References

- [[1-algorithms/data-structures]] - Data structure operations
- [[1-algorithms/algorithm_design]] - Design for efficiency
- [[1-algorithms/complexity_theory]] - Complexity classes
- [[1-discrete-mathematics/6_recurrence-relations]] - Recurrence solutions
