---
title: Memory Management
tags:
  - Computing
  - University
description: ""s Optimality).** OPT yields the fewest page faults for any reference string.

_Proof._ If OPT replaces page $x$ (used furthest in future) and another algorithm replaces page $y$
(used sooner), the other algorithm faults at least once more by the time $y$ is next Referenced.
$\blacksquare$

**First-In, First-Out (FIFO).** Replace the oldest page. Simple but may evict heavily used pages.
Suffers from **Belady's anomaly**: increasing frames can increase faults.

**Example of Belady's anomaly.** Reference string: 1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5. With 3
Frames: 9 faults. With 4 frames: 10 faults.

**Least Recently Used (LRU).** Replace the page not used for the longest time. Approximates OPT
Well. Does **not** suffer from Belady's anomaly.

**Theorem 5.3.** LRU is a **stack algorithm**: the set of pages in $n+1$ frames is a superset of the
Set in $n$ frames, for any reference string.

_Proof._ When adding a frame, LRU keeps the $n$ most recently used pages (same as before) plus the
New frame. No page in the $n$-frame set can be more recently used than a page outside it, so the
$n+1$ set must contain the $n$-frame set. $\blacksquare$

**Clock (Second Chance).** Pages in a circular list with a reference bit. On replacement:

1. If reference bit is 0, replace the page.
2. If reference bit is 1, clear it and advance.

Approximates LRU with $O(1)$ per operation.

**LFU (Least Frequently Used).** Replace the page with the smallest access count. May fail to adapt
To changing access patterns.

**Approximating LRU in practice.** Most OSes use a variant of Clock. Linux uses an LRU-like
Approximation with **active** and **inactive** lists: pages on the active list are protected; pages
Not accessed are demoted to the inactive list; eviction targets the inactive list.

<details>
<summary>Worked Example 5.3 — Optimal Page Replacement</summary>

Reference string: 7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2, 1, 2, 0, 1, 7, 0, 1. Three frames.

| Ref | Frame 1 | Frame 2 | Frame 3 | Fault? | Victim                       |
| --- | ------- | ------- | ------- | ------ | ---------------------------- |
| 7   | 7       |         |         | Yes    | —                            |
| 0   | 7       | 0       |         | Yes    | —                            |
| 1   | 7       | 0       | 1       | Yes    | —                            |
| 2   | 2       | 0       | 1       | Yes    | 7 (used at 18)               |
| 0   | 2       | 0       | 1       | No     | —                            |
| 3   | 2       | 3       | 1       | Yes    | 0 (used at 10)               |
| 0   | 2       | 3       | 0       | Yes    | 1 (used at 14)               |
| 4   | 2       | 4       | 0       | Yes    | 3 (used at 11)               |
| 2   | 2       | 4       | 0       | No     | —                            |
| 3   | 3       | 4       | 0       | Yes    | 2 (used at 13)               |
| 0   | 3       | 4       | 0       | No     | —                            |
| 3   | 3       | 4       | 0       | No     | —                            |
| 2   | 2       | 4       | 0       | Yes    | 3 (used at 11, already past) |
| 1   | 2       | 1       | 0       | Yes    | 4 (used at $\infty$)         |
| 2   | 2       | 1       | 0       | No     | —                            |
| 0   | 2       | 1       | 0       | No     | —                            |
| 1   | 2       | 1       | 0       | No     | —                            |
| 7   | 7       | 1       | 0       | Yes    | 2 (used at 13, already past) |
| 0   | 7       | 1       | 0       | No     | —                            |
| 1   | 7       | 1       | 0       | No     | —                            |

Total page faults: **9**. This is the theoretical minimum.

</details>

<details>
<summary>Worked Example 5.4 — LRU Page Replacement</summary>

Same reference string, three frames. LRU replaces the page whose last use was furthest in the past.

| Ref | F1  | F2  | F3  | Fault? | Victim (least recent) |
| --- | --- | --- | --- | ------ | --------------------- |
| 7   | 7   |     |     | Yes    | —                     |
| 0   | 7   | 0   |     | Yes    | —                     |
| 1   | 7   | 0   | 1   | Yes    | —                     |
| 2   | 2   | 0   | 1   | Yes    | 7                     |
| 0   | 2   | 0   | 1   | No     | —                     |
| 3   | 2   | 3   | 1   | Yes    | 0                     |
| 0   | 0   | 3   | 1   | Yes    | 2                     |
| 4   | 0   | 4   | 1   | Yes    | 3                     |
| 2   | 0   | 4   | 2   | Yes    | 1                     |
| 3   | 3   | 4   | 2   | Yes    | 0                     |
| 0   | 3   | 0   | 2   | Yes    | 4                     |
| 3   | 3   | 0   | 2   | No     | —                     |
| 2   | 3   | 0   | 2   | No     | —                     |
| 1   | 1   | 0   | 2   | Yes    | 3                     |
| 2   | 1   | 0   | 2   | No     | —                     |
| 0   | 1   | 0   | 2   | No     | —                     |
| 1   | 1   | 0   | 2   | No     | —                     |
| 7   | 1   | 0   | 7   | Yes    | 2                     |
| 0   | 1   | 0   | 7   | No     | —                     |
| 1   | 1   | 0   | 7   | No     | —                     |

Total page faults: **12**. LRU produces 33% more faults than optimal, but does not require future
Knowledge.

</details>

<details>
<summary>Worked Example 5.5 — Clock (Second Chance) Replacement</summary>

Same reference string, three frames. Clock hand starts at frame 0. R = reference bit.

| Ref | State (R bits)    | Fault? | Action                                                                                             |
| --- | ----------------- | ------ | -------------------------------------------------------------------------------------------------- |
| 7   | [7,R] [-] [-]     | Yes    | Load 7 into F0                                                                                     |
| 0   | [7,R] [0,R] [-]   | Yes    | Load 0 into F1                                                                                     |
| 1   | [7,R] [0,R] [1,R] | Yes    | Load 1 into F2                                                                                     |
| 2   | [2,R] [0,R] [1,R] | Yes    | F0: R=1, clear, advance; F1: R=1, clear, advance; F2: R=1, clear, advance; F0: R=0, replace with 2 |
| 0   | [2,R] [0,R] [1,R] | No     | Set R on F1                                                                                        |
| 3   | [2,R] [3,R] [1,R] | Yes    | F0: R=1, clear, advance; F1: R=1, clear, advance; F2: R=1, clear, advance; F0: R=0, replace with 3 |
| 0   | [0,R] [3,R] [1,R] | Yes    | F0: R=0, replace with 0                                                                            |
| 4   | [0,R] [4,R] [1,R] | Yes    | F0: R=1, clear, advance; F1: R=0, replace with 4                                                   |
| 2   | [2,R] [4,R] [1,R] | Yes    | F0: R=0, replace with 2                                                                            |
| 3   | [2,R] [3,R] [1,R] | Yes    | F0: R=1, clear, advance; F1: R=0, replace with 3                                                   |
| 0   | [0,R] [3,R] [1,R] | Yes    | F0: R=0, replace with 0                                                                            |
| 3   | [0,R] [3,R] [1,R] | No     | Set R on F1                                                                                        |
| 2   | [2,R] [3,R] [1,R] | Yes    | F0: R=0, replace with 2                                                                            |
| 1   | [2,R] [3,R] [1,R] | No     | Set R on F2                                                                                        |
| 2   | [2,R] [3,R] [1,R] | No     | Set R on F0                                                                                        |
| 0   | [2,R] [0,R] [1,R] | Yes    | F0: R=1, clear, advance; F1: R=1, clear, advance; F2: R=1, clear, advance; F0: R=0, replace with 0 |
| 1   | [0,R] [1,R] [1,R] | No     | Set R on F2                                                                                        |
| 7   | [7,R] [1,R] [1,R] | Yes    | F0: R=0, replace with 7                                                                            |
| 0   | [7,R] [0,R] [1,R] | Yes    | F0: R=1, clear, advance; F1: R=0, replace with 0                                                   |
| 1   | [7,R] [0,R] [1,R] | No     | Set R on F2                                                                                        |

Total page faults: **15**. Clock performs worse than LRU here but requires only $O(1)$ per operation
And no global ordering of references.

</details>

:::caution Common Pitfall Belady's anomaly applies to FIFO but **not** to LRU or Optimal. Adding
more memory does not always Reduce page faults for non-stack algorithms.

### 5.8 Thrashing

**Thrashing** occurs when a process spends more time paging than executing. This happens when the
Total working set of all active processes exceeds physical memory.

**Working set model.** $W(t, \Delta)$ is the set of pages referenced in the last $\Delta$
references. If $\sum W_i \gt$ available frames, thrashing occurs.

**Solutions:**

1. **Working set strategy:** Admit a process only if its working set fits.
2. **Page fault frequency (PFF):** Adjust resident set size based on observed fault rate.
3. **Local replacement:** Restrict eviction to the process's own frames.

<details>
<summary>Worked Example 5.6 — Thrashing Analysis</summary>

A system has 64 frames of physical memory. Four processes with the following working set sizes
($\Delta = 5$ references):

| Process   | Working Set Size |
| --------- | ---------------- |
| $P_1$     | 15               |
| $P_2$     | 20               |
| $P_3$     | 18               |
| $P_4$     | 25               |
| **Total** | **78**           |

Total working set = 78 frames, but only 64 available. Thrashing occurs.

_Solution 1 (working set admission):_ Suspend $P_4$ (largest working set). Remaining:
$15 + 20 + 18 = 53 \leq 64$. Thrashing eliminated.

_Solution 2 (PFF):_ If $P_3$'s page fault rate exceeds the upper threshold, increase its resident
Set size by stealing frames from $P_4$. If $P_4$'s fault rate drops below the lower threshold,
Decrease its allocation.

</details>

**Theorem 5.4.** If the sum of all working sets exceeds the number of physical frames, at least one
Process must thrash.

_Proof._ By the pigeonhole principle, if $\sum_{i=1}^{n} \lvert W_i \rvert \gt F$ where $F$ is the
Total number of frames, at least one process cannot hold its entire working set in memory. That
Process will repeatedly evict pages it needs, causing its page fault rate to dominate its execution
Time. $\blacksquare$

### 5.9 Copy-on-Write (COW)

**Copy-on-Write** is an optimisation for `fork()`. Instead of copying all pages, parent and child
Share physical frames (marked read-only). On a write to a shared page, a fault triggers a copy of
Just that page.

- `fork()` becomes nearly $O(1)$ instead of $O(n)$ where $n$ is the number of pages.
- If the child immediately calls `exec()`No copies are ever made.


:::
