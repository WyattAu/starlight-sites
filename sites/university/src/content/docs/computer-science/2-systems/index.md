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
