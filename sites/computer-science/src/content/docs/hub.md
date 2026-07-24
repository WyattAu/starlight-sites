---
title: "Complete Computer Science Study Guide"
description: "Comprehensive hub for computer science theory: Algorithms, Data Structures, Theory of Computation, Databases, Operating Systems, and Networks. Foundations, practice, and cross-disciplinary connections."
date: 2026-07-24
tags:
  - study-guide
  - hub
  - computer-science
categories:
  - hub
---

## Complete Computer Science Study Guide

Computer science is the study of computation — what can be computed, how efficiently it can be done, and how systems are designed to solve problems. University-level computer science builds a foundation of algorithms, data structures, formal languages, systems design, and mathematical reasoning. This hub brings together every core area of computer science into a structured study plan.

Whether you are preparing for exams, building your theoretical foundation, or exploring how different areas connect, the guides below give you the depth and breadth to master the discipline.

## Algorithms

Algorithms are the step-by-step procedures that solve computational problems. The study of algorithms is central to computer science, providing the tools to analyse efficiency, correctness, and optimality.

### Sorting and Searching

Sorting algorithms — quicksort, mergesort, heapsort, and radix sort — illustrate fundamental design paradigms including divide-and-conquer, priority queues, and comparison-based lower bounds. Searching algorithms — binary search, hash-based lookup, and tree traversal — demonstrate how data organisation affects access time.

Key concepts include:

- **Comparison-based sorting** has an O(n log n) lower bound
- **Divide-and-conquer** recursion and the master theorem for analysing recurrence relations
- **Stability** in sorting and its importance for maintaining relative order of equal elements
- **Amortised analysis** for understanding the average-case cost of sequences of operations

### Graph Algorithms

Graphs model relationships between entities. Graph algorithms solve problems in networking, scheduling, social analysis, and geographic systems. Core algorithms include:

- **Breadth-first search (BFS)** and **depth-first search (DFS)** for traversal and connectivity
- **Dijkstra's algorithm** and **Bellman-Ford** for shortest paths
- **Minimum spanning trees** using Kruskal's and Prim's algorithms
- **Topological sorting** for directed acyclic graphs
- **Network flow** using the Ford-Fulkerson method and max-flow min-cut theorem

### Dynamic Programming

Dynamic programming solves problems by breaking them into overlapping subproblems and combining their solutions. It is one of the most powerful algorithmic techniques, applicable to optimisation, counting, and sequence analysis problems.

Key principles include:

- **Optimal substructure** — the optimal solution contains optimal solutions to subproblems
- **Overlapping subproblems** — the same subproblems are solved repeatedly
- **Memoisation** (top-down) versus **tabulation** (bottom-up)
- **Reconstruction** of solutions, not just optimal values

### Greedy Algorithms

Greedy algorithms make locally optimal choices at each step. They work when the problem exhibits optimal substructure and the greedy choice property. Examples include Huffman coding, activity selection, and Kruskal's algorithm.

### Complexity and Lower Bounds

Understanding algorithm efficiency requires knowledge of complexity theory. You will analyse time and space complexity using Big-O, Big-Omega, and Big-Theta notation, and prove lower bounds for comparison-based algorithms.

Read the full guide: [Algorithms Study Guide](/1-algorithms).

## Data Structures

Data structures organise information for efficient storage, retrieval, and manipulation. Choosing the right data structure is often the difference between an efficient solution and a slow one.

### Arrays and Linked Lists

Arrays provide O(1) random access but O(n) insertion and deletion. Linked lists provide O(1) insertion and deletion at known positions but O(n) access time. Understanding these trade-offs informs design decisions throughout software engineering.

### Stacks and Queues

Stacks (LIFO) and queues (FIFO) are fundamental abstract data types. Applications include expression evaluation, function call management, breadth-first search, and scheduling algorithms.

### Trees

Trees are hierarchical data structures with a root node and child nodes. Key variants include:

- **Binary search trees (BSTs)** for ordered data with O(log n) average-case operations
- **AVL trees** and **red-black trees** for guaranteed O(log n) worst-case performance
- **B-trees** for database indexing and file systems
- **Heaps** for priority queue operations
- **Tries** for string storage and prefix-based lookup

### Hash Tables

Hash tables provide O(1) average-case lookup, insertion, and deletion through hash functions that map keys to array indices. Key topics include:

- **Hash function design** and collision resolution strategies (chaining, open addressing)
- **Load factor** and rehashing
- **Universal hashing** for worst-case guarantees
- **Applications** in databases, caches, and symbol tables

### Graph Representations

Graphs can be represented as adjacency matrices or adjacency lists, each with different space and time trade-offs. Understanding these representations is essential for implementing graph algorithms efficiently.

Read the full guide: [Data Structures Study Guide](/2-algorithms-and-data-structures).

## Theory of Computation

The theory of computation addresses the fundamental question: what can be computed, and what are the limits of computation?

### Automata Theory

Automata are abstract machines that recognise patterns in strings. You will study:

- **Finite automata (DFA and NFA)** for recognising regular languages
- **Regular expressions** and their equivalence with finite automata
- **Pumping lemma** for proving languages are not regular
- **Context-free grammars** and **pushdown automata** for recognising context-free languages
- **Chomsky hierarchy** classifying languages by computational power

### Computability Theory

Computability theory identifies what problems can and cannot be solved by algorithms:

- **Turing machines** as the formal model of computation
- **Decidable and undecidable languages**
- **The Halting Problem** — a fundamental undecidable problem
- **Reduction** for proving undecidability
- **Recursive and recursively enumerable languages**

### Computational Complexity

Computational complexity classifies problems by the resources required to solve them:

- **P** — problems solvable in polynomial time
- **NP** — problems verifiable in polynomial time
- **NP-completeness** and the Cook-Levin theorem
- **NP-hard problems** and approximation algorithms
- **Space complexity** and PSPACE

The P vs NP problem, one of the Millennium Prize Problems, asks whether every problem whose solution can be quickly verified can also be quickly solved.

Read the full guide: [Theory of Computation Study Guide](/6-theory-of-computation).

## Databases

Databases store, organise, and retrieve data efficiently. Understanding database theory and design is essential for building reliable software systems.

### Relational Model

The relational model organises data into tables (relations) with rows (tuples) and columns (attributes). Key concepts include:

- **Functional dependencies** and **normalisation** (1NF through BCNF)
- **Keys** (primary, foreign, composite) and **integrity constraints**
- **Relational algebra** and **relational calculus** as formal query languages
- **Schema design** and the principles of good database design

### SQL

SQL is the standard language for querying and manipulating relational data. You will study:

- **DDL** (CREATE, ALTER, DROP) for schema definition
- **DML** (SELECT, INSERT, UPDATE, DELETE) for data manipulation
- **Joins**, **aggregation**, **subqueries**, and **views**
- **Transactions** and **ACID properties** (Atomicity, Consistency, Isolation, Durability)
- **Indexing** and query optimisation

### NoSQL

NoSQL databases address limitations of the relational model for certain workloads:

- **Document databases** (MongoDB) for flexible, JSON-like data
- **Key-value stores** (Redis) for high-performance caching
- **Column-family stores** (Cassandra) for distributed, high-write workloads
- **Graph databases** (Neo4j) for highly connected data

### Transaction Management

Transaction management ensures data integrity in concurrent and failure-prone environments. Topics include concurrency control (two-phase locking, timestamp ordering), recovery (write-ahead logging, checkpoints), and distributed transactions.

Read the full guide: [Databases Study Guide](/4-databases).

## Operating Systems

Operating systems manage hardware resources and provide abstractions that make software development practical. They sit between hardware and applications, handling process management, memory management, file systems, and I/O.

### Process and Thread Management

- **Processes** and **threads** as units of execution
- **Process scheduling** algorithms (round-robin, priority, multilevel feedback)
- **Context switching** and the role of the kernel
- **Inter-process communication** (pipes, shared memory, message passing)
- **Synchronisation** primitives (mutexes, semaphores, monitors)
- **Deadlock** detection, prevention, and avoidance

### Memory Management

- **Virtual memory** and address translation through page tables
- **Paging** and **segmentation**
- **Page replacement algorithms** (FIFO, LRU, clock algorithm)
- **Thrashing** and working set models
- **Memory allocation** strategies (first fit, best fit, buddy system)

### File Systems

- **File organisation** and directory structures
- **Disk scheduling** algorithms (FCFS, SSTF, SCAN)
- **Journaling** and crash recovery
- **Distributed file systems** (NFS, HDFS)

### I/O and Devices

- **Device drivers** and interrupt handling
- **Buffering** and caching strategies
- **DMA** (Direct Memory Access) for efficient data transfer

Read the full guide: [Operating Systems Study Guide](/5-operating-systems).

## Computer Networks

Computer networks enable communication between devices across distances. Understanding networking protocols and architecture is essential for building distributed systems and web applications.

### Network Models

- **OSI model** and **TCP/IP model** — layered architectures that organise network functionality
- **Physical layer** — signals, encoding, and transmission media
- **Data link layer** — framing, error detection, and Ethernet
- **Network layer** — IP addressing, routing, and fragmentation
- **Transport layer** — TCP (reliable, ordered) versus UDP (fast, connectionless)
- **Application layer** — HTTP, DNS, SMTP, and other protocols

### Routing and Switching

- **Routing algorithms** (distance vector, link state)
- **BGP** for inter-domain routing
- **ARP** for address resolution
- **Switching** and VLANs for local network management

### Network Security

- **Cryptography** fundamentals (symmetric and asymmetric encryption, hashing)
- **TLS/SSL** for secure communication
- **Firewalls** and intrusion detection systems
- **Common attacks** (DDoS, man-in-the-middle, DNS spoofing)

### Distributed Systems

- **Client-server** and **peer-to-peer** architectures
- **Consistency models** and the CAP theorem
- **Replication** and fault tolerance
- **RPC** and service-oriented architecture

Read the full guide: [Computer Networks Study Guide](/3-computer-networks).

## Cross-Disciplinary Connections

Computer science is deeply interconnected with mathematics and programming:

- **[Mathematics](https://mathematics.wyattau.com)** — Discrete mathematics, probability, linear algebra, and logic provide the mathematical foundation for algorithms, complexity theory, and machine learning.
- **[Programming](https://programming.wyattau.com)** — Programming languages are the tools through which algorithms and systems are implemented. Understanding language design, compilers, and paradigms deepens your CS knowledge.
- **[Databases](https://databases.wyattau.com)** — Specialised database resources covering SQL, NoSQL, and data modelling.
- **[Networking](https://networking.wyattau.com)** — Extended networking resources and protocol analysis.
- **[AP Resources](https://ap.wyattau.com)** — AP Computer Science A and Principles provide a bridge from secondary school to university-level study.
- **[Languages](https://languages.wyattau.com)** — Programming language comparisons to help you choose the right tool for each task.

## Frequently Asked Questions

### What is the most important area of computer science?

All areas are important, but algorithms and data structures form the foundation. Efficient algorithms underpin every system, from search engines to operating systems. Theory of computation provides the intellectual framework for understanding what is and is not possible. Systems knowledge (operating systems, networks, databases) enables you to build practical, reliable software. A well-rounded computer scientist draws from all these areas.

### How do I get better at algorithms?

Practice is the most important factor. Work through problems on platforms like LeetCode, HackerRank, or Codeforces, but also study the theory. Understand why an algorithm works, not just how to implement it. Read CLRS (Introduction to Algorithms) or similar textbooks. Analyse the time and space complexity of every solution you write. Review solutions you did not find independently.

### Is theory of computation practical?

Yes. Automata theory underpins compiler design, text processing, and pattern matching. Complexity theory guides you in choosing appropriate algorithms and understanding computational limits. The Halting Problem and undecidability inform software verification and debugging strategies. Even if you never explicitly use a Turing machine in production code, the theoretical framework shapes your thinking about computational problems.

### How much mathematics does computer science require?

Computer science requires substantial mathematics, particularly discrete mathematics (logic, set theory, graph theory, combinatorics), probability, linear algebra, and calculus. Algorithms and complexity theory require mathematical proof techniques. If you are uncomfortable with proofs, start with discrete mathematics and build from there.

### What is the difference between computer science and programming?

Programming is the practice of writing code to solve problems. Computer science is the study of computation, including algorithms, theory, systems, and the principles underlying software design. Programming is a tool that computer scientists use, but computer science encompasses much more — including problems that cannot be solved by any program.

### How do I prepare for a computer science degree?

Strengthen your mathematics foundations, particularly discrete mathematics and algebra. Learn at least one programming language well. Study basic data structures and algorithms. Familiarise yourself with a Unix-based operating system. Read introductory CS textbooks to preview the breadth of the discipline. Practice problem-solving and logical reasoning.

### Which programming language should I learn first?

Python is often recommended for beginners due to its simple syntax and readability. However, the best language depends on your goals. Java is excellent for understanding object-oriented programming and is widely used in university courses. C provides a deep understanding of how computers work at a low level. See our [Programming Language Comparison Guide](https://languages.wyattau.com) for a detailed analysis.

### How do CS theory topics connect to real-world software?

Algorithms power search engines, routing systems, and recommendation engines. Data structures underpin databases, compilers, and operating systems. Automata theory drives regex engines and network protocol design. Complexity theory informs decisions about when to use approximation algorithms or heuristics. Networking principles enable the internet and distributed systems you build every day.
