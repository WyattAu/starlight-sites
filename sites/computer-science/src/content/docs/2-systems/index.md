---
title: Systems
description: 'Topics in computer systems including operating systems, computer architecture, concurrency, and networking fundamentals.'
---

# Systems

Computer systems encompasses the hardware and software infrastructure that enables computation. This includes the design of processors and memory hierarchies, the management of processes and resources by operating systems, and the communication protocols that connect distributed systems. Understanding systems is essential for building efficient and reliable software.

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
