---
title: "Diagnostic Test: Performance Tuning"
description: "Self-assessment quiz on performance tuning"
sidebar_position: 60
tableOfContents: false
---

# Diagnostic Test: Performance Tuning

10 multiple-choice questions covering CPU tuning, memory management, I/O optimization, network tuning, and profiling tools. Select the best answer for each question, then check your score using the answer key below.

---

**Question 1.** What does IPC stand for in CPU performance analysis?

(A) Instructions Per Cache
(B) Instructions Per Cycle
(C) Internal Processing Core
(D) Inter-Process Communication

---

**Question 2.** Which Linux command reports per-core frequency and power consumption?

(A) top
(B) vmstat
(C) turbostat
(D) iostat

---

**Question 3.** What is the typical L1 data cache latency?

(A) ~1 nanosecond
(B) ~3 nanoseconds
(C) ~8 nanoseconds
(D) ~60 nanoseconds

---

**Question 4.** In NUMA terminology, what does "local DRAM" mean?

(A) RAM physically attached to the same socket as the accessing CPU
(B) RAM on a different socket
(C) RAM cached in L3
(D) Virtual memory on disk

---

**Question 5.** What does the performance governor do on Linux?

(A) Sets the CPU to minimum frequency
(B) Sets the CPU to maximum frequency at all times
(C) Dynamically adjusts frequency based on load
(D) Disables turbo boost

---

**Question 6.** What is the primary purpose of CPU affinity (pinning)?

(A) To lock the CPU frequency
(B) To bind a process to specific cores, reducing cache migration overhead
(C) To increase the number of logical cores
(D) To disable hyper-threading

---

**Question 7.** Which profiling tool uses hardware performance counters to measure cache misses?

(A) strace
(B) perf stat
(C) netstat
(D) df

---

**Question 8.** What is the main advantage of io_uring over traditional AIO?

(A) Hardware acceleration
(B) Shared ring buffers eliminating per-request syscall overhead
(C) Built-in encryption
(D) Automatic load balancing

---

**Question 9.** False sharing in multi-threaded programs occurs when:

(A) Two threads share the same variable
(B) Different variables on the same cache line are modified by different cores
(C) Two threads run on the same core
(D) A cache line is shared between L1 and L2

---

**Question 10.** What does increasing the TCP receive buffer size primarily improve?

(A) Latency for short connections
(B) Throughput for high-bandwidth, high-latency links
(C) CPU usage
(D) Packet loss rate

---

## Answer Key

| Question | Correct Answer |
|----------|---------------|
| 1        | B             |
| 2        | C             |
| 3        | A             |
| 4        | A             |
| 5        | B             |
| 6        | B             |
| 7        | B             |
| 8        | B             |
| 9        | B             |
| 10       | B             |

**Scoring:** Count your correct answers out of 10. A score of 8 or above indicates strong mastery of performance tuning fundamentals. Review the explanations in the practice problems for any questions you answered incorrectly.

## Intuition

**Performance diagnosis is systematic problem-solving:** Identifying the bottleneck requires measuring resource utilisation, analysing bottlenecks, and understanding how changes affect the overall system.

**Why it matters:** Efficient systems save money, improve user experience, and enable scaling.

**The key insight:** Optimising code that is not the bottleneck wastes effort — always identify the constraint before attempting to improve it.

## Common Mistakes

**Confusing latency with throughput:** Latency is the time for a single operation. Throughput is operations per second. Optimising for one may hurt the other. Batch processing increases throughput but may increase latency.

**Over-optimising without measuring:** Micro-optimisations add complexity. Measure whether the optimisation actually helps before adding it. Profiling tools show where time is actually spent.

**Ignoring caching opportunities:** Repeated expensive computations, database queries, or API calls are prime candidates for caching. But caching introduces complexity (invalidation, stale data). Cache strategically.
## Cross-References

- **[Site Home](../../):** Main landing page for tuning notes.
- **[Practice](../../practice-*.mdx):** Practice problems for revision.
