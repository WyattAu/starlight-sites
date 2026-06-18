---
title: Sorting Algorithms
tags:
  - Computing
  - University
description: ""s approximation:
$\log_2(n!) = n \log_2 n - n \log_2 e + O(\log n) = \Omega(n \log n)$. $\blacksquare$

### 3.5 Counting Sort

Counting sort sorts integers in $O(n + k)$ time where $k$ is the range of values.

**Algorithm:**

1. Count occurrences: $C[i] =$ number of elements equal to $i$.
2. Compute prefix sums: $C[i] =$ number of elements $\leq i$.
3. Place each element in its correct position (iterating backwards for stability).

**Theorem 3.9.** Counting sort runs in $O(n + k)$ time and $O(n + k)$ space, and is stable.

_Proof._ Step 1 takes $O(n)$ time. Step 2 takes $O(k)$ time. Step 3 takes $O(n)$ time. The output
array uses $O(n)$ space and the count array uses $O(k)$ space. Stability follows from iterating
backwards in step 3: the last occurrence of each value is placed first, preserving the order of
equal elements. $\blacksquare$

### 3.6 Radix Sort

Radix sort processes digits from least significant to most significant (LSD radix sort) using a
stable sort (e.g., counting sort) as a subroutine.

**Theorem 3.10.** LSD radix sort sorts $n$ integers with $d$ digits in base $b$ in $O(d(n + b))$
time.

_Proof._ We perform $d$ passes of counting sort, each taking $O(n + b)$ time. After the $i$-th pass,
the array is sorted by the $i$ least significant digits. By induction on $i$After $d$ passes the
array is fully sorted. $\blacksquare$

**Corollary 3.11.** For $d$-digit integers where $d = O(1)$ (e.g., 32-bit integers), radix sort runs
in $O(n)$ time.

<details>
<summary>Worked Example: Counting Sort Trace</summary>

Sort the array $[4, 2, 2, 8, 3, 3, 1]$ using counting sort.

Range of values: $[1, 8]$So $k = 8$.

**Step 1 — Count:** $C = [0, 1, 2, 2, 1, 0, 0, 0]$ (indices 1 through 8).

**Step 2 — Prefix sums:** $C = [0, 1, 3, 5, 6, 6, 6, 6]$.

**Step 3 — Place (iterate backwards):**

- $A[6] = 1$: $C[1] = 1$Place at position 0. $C[1] = 0$.
- $A[5] = 3$: $C[3] = 5$Place at position 4. $C[3] = 4$.
- $A[4] = 3$: $C[3] = 4$Place at position 3. $C[3] = 3$.
- $A[3] = 8$: $C[8] = 6$Place at position 5. $C[8] = 5$.
- $A[2] = 2$: $C[2] = 3$Place at position 2. $C[2] = 2$.
- $A[1] = 2$: $C[2] = 2$Place at position 1. $C[2] = 1$.
- $A[0] = 4$: $C[4] = 6$Place at position 5. $C[4] = 5$.

Result: $[1, 2, 2, 3, 3, 4, 8]$.

</details>

<details>
<summary>Worked Example: Radix Sort Trace</summary>

Sort the array $[170, 45, 75, 90, 802, 24, 2, 66]$ using LSD radix sort with base 10.

**Pass 1 (ones digit):** Sort by $0, 5, 5, 0, 2, 4, 2, 6$. After stable counting sort:
$[170, 90, 802, 2, 24, 45, 75, 66]$

**Pass 2 (tens digit):** Sort by $7, 9, 0, 0, 2, 4, 7, 6$. After stable counting sort:
$[802, 2, 24, 45, 66, 170, 75, 90]$

**Pass 3 (hundreds digit):** Sort by $8, 0, 0, 0, 0, 1, 0, 0$. After stable counting sort:
$[2, 24, 45, 66, 75, 90, 170, 802]$

Total: 3 passes, each $O(n + 10) = O(n)$. Total: $O(3n) = O(n)$.

</details>

### 3.7 External Sorting

**Problem.** Sort data that is too large to fit in main memory.

**Algorithm (External Merge Sort):**

1. Read chunks that fit in memory, sort each in memory, write sorted runs to disk.
2. Repeatedly merge runs using a $k$-way merge, reading/writing from disk.

**Theorem 3.12.** External merge sort with $M$ bytes of memory and $N$ bytes of data performs
$O\left(\frac{N}{M} \log_{k}\left(\frac{N}{M}\right)\right)$ passes, where $k$ is the merge fan-in.

_Proof._ The initial pass creates $N/M$ sorted runs of size $M$. Each merge pass combines $k$ runs
into 1, reducing the number of runs by a factor of $k$. After $\log_k(N/M)$ passes, a single sorted
run remains. Each pass reads and writes all $N$ bytes, so total I/O is $O(N \log_k(N/M))$.
$\blacksquare$

:::caution Common Pitfall The $O(n \log n)$ lower bound applies only to **comparison-based**
sorting. Non-comparison sorts Like radix sort can achieve $O(n)$ time for integers in a bounded
range. However, non-comparison sorts sacrifice generality: they depend on the structure of the keys
and cannot sort arbitrary objects.

### 3.8 Comparison of Sorting Algorithms

| Algorithm     | Best          | Average       | Worst         | Space       | Stable |
| ------------- | ------------- | ------------- | ------------- | ----------- | ------ |
| Merge Sort    | $O(n \log n)$ | $O(n \log n)$ | $O(n \log n)$ | $O(n)$      | Yes    |
| Quicksort     | $O(n \log n)$ | $O(n \log n)$ | $O(n^2)$      | $O(\log n)$ | No     |
| Heapsort      | $O(n \log n)$ | $O(n \log n)$ | $O(n \log n)$ | $O(1)$      | No     |
| Counting Sort | $O(n + k)$    | $O(n + k)$    | $O(n + k)$    | $O(n + k)$  | Yes    |
| Radix Sort    | $O(d(n+b))$   | $O(d(n+b))$   | $O(d(n+b))$   | $O(n + b)$  | Yes    |


:::
