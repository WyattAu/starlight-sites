---

date: 2026-07-23T21:57:32+01:00
title: "Memory Management | Computer Science"
tags:
  - Computing
  - University
description: "Memory divided into fixed-size partitions at boot. Internal fragmentation. Comprehensive educational content coverage with definitions and practice problems."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "computer-science", "url": "https://computer-science.wyattau.com"}, {"name": "5 Operating Systems", "url": "https://computer-science.wyattau.com/5-operating-systems"}, {"name": "5_memory Management", "url": "https://computer-science.wyattau.com/5-operating-systems/5_memory-management"}]
}
</script>

## Intuition

Memory management answers: **how do you give every process its own address space while sharing limited physical RAM?** The solution is virtual memory — each process sees a private, contiguous address space that maps to scattered physical pages. This provides isolation (one process can't corrupt another) and enables overcommitment (using more total memory than physically available).

**Paging intuition:** Physical memory is divided into fixed-size frames; virtual memory into pages of the same size. A page table maps each virtual page to a physical frame. When a process accesses a page not currently in RAM, a page fault occurs and the OS loads it from disk. This is slow (milliseconds vs nanoseconds for RAM), so the OS tries to keep frequently-used pages in memory.

**Replacement algorithm intuition:** When physical memory is full, the OS must evict a page. LRU (Least Recently Used) approximates the principle that recently-used pages will be used again. The working set model tracks which pages a process actively uses — if its working set doesn't fit in RAM, the process thrashes (spends more time paging than computing).

### 5.1 Contiguous Memory Allocation

**Fixed partitioning.** Memory divided into fixed-size partitions at boot. Internal fragmentation.

**Variable partitioning.** Partitions created dynamically. External fragmentation.

**Allocation strategies:**

| Strategy  | Description                                 |
| --------- | ------------------------------------------- |
| First-fit | Allocate the first hole large enough        |
| Best-fit  | Allocate the smallest hole large enough     |
| Worst-fit | Allocate the largest hole                   |
| Next-fit  | Continue searching from the last allocation |

**Theorem 5.1.** First-fit and best-fit have roughly equivalent utilisation; first-fit is faster.

### 5.2 Paging

Divide physical memory into fixed-size **frames** and logical memory into same-size **pages**. A
**page table** maps page numbers to frame numbers.

$$\mathrm{physical} address = \mathrm{PT}[p] \times F + f$$

Where $\mathrm{PT}[p]$ is the frame number for page $p$ and $F$ is the frame size.

**Page table entry fields:**

| Field         | Purpose                             |
| ------------- | ----------------------------------- |
| Frame number  | Physical frame containing this page |
| Valid bit     | Page is in memory (1) or not (0)    |
| Dirty bit     | Page has been modified              |
| Reference bit | Page accessed recently              |
| Protection    | Read/write/execute permissions      |

**Multi-level page tables.** A single page table for a 64-bit address space is infeasible. A
Two-level scheme uses a **page directory** indexed by the outer page number, pointing to inner Page
tables:

$$\mathrm{Address}:  \underbrace{p_1}_{\mathrm{outer} \mid \underbrace{p_2}_{\mathrm{inner} \mid \underbrace{d}_{\mathrm{offset}}}}$$

X86-64 with 48-bit virtual addresses uses four-level page tables.

**Inverted page table.** One entry per physical frame (not per virtual page). Reduces memory
Overhead but makes searching for a specific virtual page expensive; solved by hashing.

### 5.3 Segmentation

Segments divide the address space into logical units (code, data, stack, heap). Each segment has a
**base** and **limit**:

$$\mathrm{physical} address = \mathrm{base} + \mathrm{offset}, \quad \mathrm{if}  \mathrm{offset} \lt \mathrm{limit}$$

_Advantages:_ Reflects program structure; supports sharing individual segments. _Disadvantages:_
External fragmentation (variable-size segments).

<details>
<summary>Worked Example 5.1 — Segmented Address Translation</summary>

A process has three segments with the following segment table:

| Segment | Base  | Limit |
| ------- | ----- | ----- |
| Code    | 4096  | 2048  |
| Data    | 12288 | 4096  |
| Stack   | 20480 | 2048  |

Translate logical address (segment = 1, offset = 1500):

1. Check: offset $1500 \lt$ limit $4096$. Valid.
2. Physical address = base + offset = $12288 + 1500 = 13788$.

Translate (segment = 2, offset = 2500):

1. Check: offset $2500 \lt$ limit $2048$. **Invalid**. Segmentation fault.

</details>

### 5.4 Segmented Paging

Combine segmentation and paging: the segment offset is divided into page number and page offset.

$$\mathrm{Address}:  \underbrace{s}_{\mathrm{segment} \mid \underbrace{p}_{\mathrm{page} \mid \underbrace{d}_{\mathrm{offset}}}}$$

Used by x86 (segmentation + paging).

### 5.5 Virtual Memory

Virtual memory allows processes to use more memory than physically available by keeping only active
Pages in RAM; the rest reside on disk (swap space).

**Demand paging.** Pages loaded on access, not at process start.

**Page fault handling:**

1. CPU generates logical address; page table entry has valid bit = 0.
2. Trap to OS page fault handler.
3. Find a free frame (possibly evicting a victim page).
4. Read the page from disk into the frame.
5. Update page table entry (valid bit = 1, frame number).
6. Restart the faulting instruction.

**Effective access time (EAT):**

$$\mathrm{EAT} = (1 - p) \times \mathrm{ma} + p \times \mathrm{pf}$$

Where $p$ = page fault rate, $\mathrm{ma}$ = memory access time, $\mathrm{pf}$ = page fault service
Time.

For $p = 0.001$, $\mathrm{ma} = 100$ ns, $\mathrm{pf} = 8$ ms:

$$\mathrm{EAT} = 0.999 \times 100 + 0.001 \times 8\,000\,000 = 8.1 \; \mu\mathrm{s}$$

This is roughly $80\times$ slower than pure memory access, illustrating why a low page fault rate Is
critical.

### 5.6 Translation Lookaside Buffer (TLB)

A **TLB** is a hardware cache of recently used page table entries, avoiding an extra memory access
Per translation.

$$\mathrm{EAT} = h \times (\mathrm{TLB} + \mathrm{ma}) + (1 - h) \times (\mathrm{TLB} + \mathrm{ma} + \mathrm{ma})$$

Where $h$ is the TLB hit ratio.

For $h = 0.99$, $\mathrm{TLB} = 2$ ns, $\mathrm{ma} = 100$ ns:

$$\mathrm{EAT} = 0.99 \times 102 + 0.01 \times 202 = 103 \; \mathrm{ns}$$

**TLB coherence.** When the OS modifies a page table entry, it must invalidate the corresponding TLB
entry. On x86-64: `invlpg` for single-entry invalidation, or reload `CR3` to flush the entire TLB.

<details>
<summary>Worked Example 5.2 — TLB + Page Fault EAT Calculation</summary>

A system with TLB access time = 2 ns, memory access time = 100 ns, page fault service time = 8 ms,
TLB hit ratio = 0.80, and page fault rate = 0.0005.

_Case 1: TLB hit, no page fault_ ($0.80 \times 0.9995 = 0.7996$): Time =
$\mathrm{TLB} + \mathrm{ma} = 2 + 100 = 102$ ns.

_Case 2: TLB miss, no page fault_ ($0.20 \times 0.9995 = 0.1999$): Time =
$\mathrm{TLB} + 2 \times \mathrm{ma} = 2 + 200 = 202$ ns.

_Case 3: Page fault_ ($0.0005$): Time =
$\mathrm{TLB} + \mathrm{ma} + \mathrm{pf} = 2 + 100 + 8 \times 10^6 = 8000002$ ns.

$$\mathrm{EAT} = 0.7996 \times 102 + 0.1999 \times 202 + 0.0005 \times 8\,000\,102$$
$$\mathrm{EAT} = 81.56 + 40.38 + 4000.05 = 4121.99 \;\mathrm{ns} \approx 4.12 \;\mu\mathrm{s}$$

This is roughly $41\times$ slower than pure memory access, driven almost entirely by the page fault
Component.

</details>

### 5.7 Page Replacement Algorithms

When physical memory is full, a victim page must be selected for eviction.

**Optimal (OPT/MIN).** Replace the page not used for the longest time in the future. Provably
Optimal but requires future knowledge; used only as a benchmark.

**Theorem 5.2 (Belady"s Optimality).** OPT yields the fewest page faults for any reference string.

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

:::caution
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
## Cross-References

- [Process Management](./2_process_management) -- Each process has its own address space managed by the operating system's memory management subsystem.
- [Virtualization](./8_virtualization) -- Memory virtualization extends basic memory management to support multiple virtual machines.
- [File Systems](./6_file-systems) -- Memory-mapped files blur the boundary between memory management and file system operations.

- [Discrete Mathematics](https://mathematics.wyattau.com/docs/discrete-mathematics)
- [Algorithm Implementation](https://programming.wyattau.com/docs/algorithms)

## Common Mistakes

1. **Confusing virtual addresses with physical addresses.** Processes always see virtual addresses. The MMU translates them to physical addresses using page tables. A virtual address 0x7fff0000 in one process maps to a completely different physical frame than the same virtual address in another process.

2. **Believing LRU is always optimal.** LRU is a practical approximation but not optimal for all access patterns. Sequential scans of large files can evict the entire working set from memory (Bélády's anomaly for FIFO, and LRU thrashing under scan patterns). Optimal replacement is theoretically best but requires future knowledge.

3. **Confusing thrashing with poor algorithm choice.** Thrashing occurs when the total working set of all processes exceeds physical memory, not because a page replacement algorithm is "bad." Adding more frames or reducing the number of concurrent processes is the correct fix, not switching algorithms.

4. **Ignoring the cost of page faults.** A single page fault requires a disk access (milliseconds), which is orders of magnitude slower than a memory access (nanoseconds). Code that triggers frequent page faults — e.g., iterating over a large array with poor locality — will be dramatically slower than code with good spatial and temporal locality.

5. **Assuming `fork()` is expensive without COW.** Without copy-on-write, `fork()` would need to copy every page of the parent's address space, making it O(n) in the number of pages. With COW, only modified pages are copied, making `fork()` followed by `exec()` extremely cheap since the child's pages are never actually copied.
