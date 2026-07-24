---


date: 2026-07-23T21:57:32+01:00
title: Systems
description: 'Topics in computer systems including operating systems, computer architecture, concurrency, and networking fundamentals.'
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "computer-science", "url": "https://computer-science.wyattau.com"}, {"name": "2 Systems", "url": "https://computer-science.wyattau.com/2-systems"}, {"name": "Index", "url": "https://computer-science.wyattau.com/2-systems/index"}]
}
</script>

<!-- Course Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Systems",
  "description": "'Topics in computer systems including operating systems, computer architecture, concurrency, and networking fundamentals.'",
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

## Systems

Computer systems encompasses the hardware and software infrastructure that enables computation. This includes the design of processors and memory hierarchies, the management of processes and resources by operating systems, and the communication protocols that connect distributed systems. Understanding systems is essential for building efficient and reliable software.

## Intuition

**A city infrastructure:** Systems are like a city's infrastructure — the OS is the city council allocating resources, the architecture is the road network, concurrency is managing traffic at intersections, and networking connects cities together. Without coordination, chaos ensues.

**Why it matters:** Every application runs on a system. Understanding how memory is managed, how processes share resources, and how networks transmit data is essential for building reliable, efficient software.

**The key insight:** Systems are built on layers of abstraction — each layer hides complexity from the one above, enabling you to reason about high-level problems without drowning in hardware details.

## Key Concepts

A central theme in systems is the abstraction of hardware complexity through layered software. The operating system provides process management, memory management, and file system abstractions. Concurrency introduces challenges such as race conditions and deadlocks, which require synchronisation primitives like mutexes and semaphores to resolve.

## Worked Example: Process Scheduling

Consider a set of processes with burst times: $P_1 = 6$, $P_2 = 8$, $P_3 = 4$, $P_4 = 2$. Using the Shortest Job First (SJF) scheduling algorithm, processes are executed in order of increasing burst time: $P_4 \rightarrow P_3 \rightarrow P_1 \rightarrow P_2$. The average waiting time is calculated as $(0 + 2 + 6 + 12) / 4 = 5$ time units, which is optimal for this set of processes under non-preemptive scheduling.

## Overview

University-level computer systems notes covering operating systems, architecture, and networking.

## Topics Covered

- **Operating Systems**: Process management, memory management, file systems
- **Computer Architecture**: Pipelining, cache design, instruction sets
- **Concurrency**: Threads, synchronisation, deadlock prevention
- **Networking**: Protocols, routing, distributed systems

## Prerequisites

- Basic programming experience
- Discrete mathematics
- Understanding of binary representation

## How to Use These Notes

Start with operating systems fundamentals, then progress to architecture and networking. Each section includes worked examples and practice problems.

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

1. **Understand abstractions**: Focus on how layers of software abstract hardware complexity
2. **Practice visualisation**: Draw process states, memory layouts, and network diagrams
3. **Learn synchronisation**: Master mutexes, semaphores, and condition variables
4. **Analyse trade-offs**: Systems design always involves trade-offs (speed vs. space, simplicity vs. performance)
5. **Connect to real systems**: Study Linux/Unix internals to understand theoretical concepts

## Cross-References

- **[Operating Systems](../../5-operating-systems/index.md):** Deep dive into process management, memory, and synchronisation.
- **[Databases](../../4-databases/index.md):** Transaction management and concurrency control.
- **[Computer Networks](../../3-computer-networks/index.md):** Network architecture and protocol design.

- [Discrete Mathematics](https://mathematics.wyattau.com/docs/discrete-mathematics)
- [Algorithm Implementation](https://programming.wyattau.com/docs/algorithms)

## Common Mistakes

- **Confusing processes with threads:** A process has its own address space; threads share the address space within a process. Forgetting this distinction leads to incorrect assumptions about memory isolation and the cost of context switching.
- **Ignoring deadlock conditions:** Deadlock requires all four conditions (mutual exclusion, hold-and-wait, no preemption, circular wait). Students often focus on mutual exclusion while ignoring the other three, leading to incomplete deadlock prevention strategies.
- **Assuming virtual memory eliminates performance concerns:** Virtual memory provides abstraction but not free performance. Page faults are expensive (100x slower than cache hits), and thrashing occurs when the working set exceeds physical memory. Memory locality still matters.
- **Confusing caching with buffering:** Caching stores frequently accessed data for faster retrieval; buffering accumulates data before batch processing. Using a cache where a buffer is needed (or vice versa) leads to incorrect performance analysis.
