---
title: Operating Systems
description: 'Topics in operating systems including process management, synchronisation, memory management, file systems, and virtualization.'
tags:
  - Computing
  - University
---

# Operating Systems

An operating system (OS) is system software that manages computer hardware and software resources and provides services for application programs. It acts as an intermediary between users and the computer hardware, allocating resources such as CPU time, memory, and I/O devices efficiently and fairly among competing processes.

## Intuition

**A hotel manager for your computer:** An OS is like a hotel manager — it分配s rooms (memory), manages guests (processes), handles check-in/check-out (scheduling), and ensures no guest wanders into another's room (protection). Without it, your computer would be chaos.

**Why it matters:** The OS is the invisible layer that makes your computer usable — it manages hardware so you don't have to write raw memory addresses or manually switch between programs. Understanding it explains why programs crash, why memory matters, and how virtualisation works.

**The key insight:** The OS abstracts away hardware complexity through layers of indirection — virtual memory, process abstraction, and file systems all create the illusion of infinite, safe, organised resources.

## Key Concepts

Process management involves scheduling algorithms that determine which process executes on the CPU at any given time, using metrics such as turnaround time and response time to evaluate performance. Synchronisation mechanisms, including semaphores and monitors, prevent race conditions when concurrent processes access shared resources. Memory management techniques such as paging and virtual memory enable programs to operate with addresses that exceed physical memory capacity.

## Contents

1. [Introduction to Operating Systems](1_introduction-to-operating-systems.md)
2. [Process Management](2_process-management.md)
3. [Synchronisation](3_synchronisation.md)
4. [Deadlocks](4_deadlocks.md)
5. [Memory Management](5_memory-management.md)
6. [File Systems](6_file-systems.md)
7. [I/O Systems](7_i-o-systems.md)
8. [Virtualization](8_virtualization.md)
9. [Security](9_security.md)
10. [Problem Set](10_problem-set.md)

## Overview

University-level operating systems notes covering processes, memory, file systems, and virtualisation.

## Topics Covered

- **Process Management**: Scheduling, threads, inter-process communication
- **Synchronisation**: Semaphores, monitors, condition variables
- **Memory Management**: Paging, segmentation, virtual memory
- **File Systems**: Implementation, performance, reliability

## Prerequisites

- Basic programming experience
- Computer architecture fundamentals
- Understanding of binary representation

## How to Use These Notes

Start with process management to understand the foundational concepts, then progress to memory and file systems. Each section includes worked examples and practice problems.

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

1. **Understand abstractions**: Focus on how the OS abstracts hardware complexity
2. **Practice visualisation**: Draw process states, memory layouts, and scheduling diagrams
3. **Learn synchronisation**: Master mutexes, semaphores, and condition variables
4. **Analyse trade-offs**: OS design always involves trade-offs (performance vs. fairness)
5. **Connect to real systems**: Study Linux/Unix internals to understand theoretical concepts

## Cross-References

- **[Systems](../../2-systems/index.md):** Computer architecture and hardware systems.
- **[Databases](../../4-databases/index.md):** Transaction management and concurrency control.
- **[Computer Networks](../../3-computer-networks/index.md):** Network I/O and protocol handling.
