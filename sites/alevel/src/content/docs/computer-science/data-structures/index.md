---
title: Data Structures
description: 'A-Level Computer Science Data Structures notes covering key definitions, core concepts, worked examples, and practice questions for study and revision.'
---


## Intuition

**This topic explores fundamental concepts that shape our understanding of the world.**

# Data Structures

Data structures are organised collections of data that enable efficient access, modification, and
storage. Choosing the right data structure is one of the most impactful decisions in algorithm
design — it determines the complexity of every operation your program performs.

## Topics Covered

### Arrays and Records

- **Static vs. dynamic arrays** — memory layout, indexing, and resizing costs
- **Records (tuples/structs)** — grouping heterogeneous data
- **2D arrays** — row-major and column-major order

### Linked Lists

- **Singly linked lists** — node structure, traversal, insertion, deletion ($O(n)$ search, $O(1)$
  insert/delete at head)
- **Doubly linked lists** — bidirectional traversal, trade-off with extra pointer storage
- **Comparison with arrays** — when to choose each structure

### Stacks and Queues

- **Stack (LIFO)** — push, pop, peek; call stacks, expression evaluation, bracket matching
- **Queue (FIFO)** — enqueue, dequeue, peek; buffering, BFS, scheduling
- **Circular queues** — avoiding wasted space in fixed-size implementations

### Trees

- **Binary trees** — node structure, traversal (in-order, pre-order, post-order)
- **Binary search trees** — insertion, search, deletion; average $O(\log n)$, worst-case $O(n)$
- **Balancing** — why unbalanced BSTs degrade to linked lists

### Graphs

- **Directed and undirected graphs** — vertices, edges, weights
- **Adjacency matrix** ($O(1)$ edge lookup, $O(n^2)$ space) vs. **adjacency list** ($O(n + e)$
  space)
- **Traversal** — DFS and BFS on graph structures

### Hash Tables

- **Hash functions** — mapping keys to indices
- **Collision resolution** — chaining vs. open addressing (linear probing)
- **Average $O(1)$ lookup** — and the worst-case scenarios that degrade it

## Study Tips

1. **Draw diagrams**. Data structures are visual. Sketch linked lists, trees, and graphs before
   reasoning about operations.
2. **Trace operations step by step**. Especially insertions and deletions in linked lists and
   trees, where pointer manipulation is error-prone.
3. **Know the complexity tables**. Memorise search, insert, and delete complexity for each
   structure. This is frequently tested.
4. **Understand trade-offs**. E.g., arrays give $O(1)$ random access but expensive insertion;
   linked lists give $O(1)$ insertion but no random access.
5. **Compare adjacency matrix and list** from memory. This is a common exam question.

## How to Use These Notes

Follow the sidebar order. Each page provides formal definitions, implementation patterns (in
pseudocode), worked traces, and exam-style questions. Master arrays and linked lists first, as all
other structures build on these foundations.

## Overview

This section provides comprehensive A-Level Computer Science content for Data Structures, covering all specification points with detailed explanations, worked examples, and practice questions.

## Content Structure

Each page in this section includes:

- **Definitions**: Clear, precise explanations of key concepts
- **Worked Examples**: Step-by-step solutions with annotations
- **Practice Questions**: Multiple-choice and structured questions with mark schemes
- **Common Pitfalls**: Errors to avoid and how to fix them
- **Exam Tips**: Strategies for maximising marks in this topic

## How to Use These Notes

1. Read the introductory page to understand the topic overview
2. Work through each sub-topic in order
3. Attempt the practice questions before checking solutions
4. Use the flashcards to revise key terminology
5. Complete the diagnostic test to identify remaining gaps

## Key Topics

- Core definitions and principles
- Application to examination-style questions
- Links to related topics across the specification
- Assessment objective alignment (AO1, AO2, AO3)

## Revision Strategies

- **Active Recall**: Test yourself regularly rather than re-reading notes
- **Spaced Practice**: Revisit this topic at increasing intervals
- **Interleaving**: Mix with other topics during revision sessions
- **Elaboration**: Explain concepts in your own words

## Exam Preparation

Focus on command word interpretation and mark scheme analysis. Practice timing yourself on questions to build speed and accuracy. Review examiner reports for this topic to understand common student errors.

## Overview

This landing page provides comprehensive coverage of Computer Science content for the Alevel qualification, with detailed explanations, worked examples, and practice questions aligned to the specification.

## Content Structure

This page includes:

- **Key Definitions**: Precise explanations of essential concepts
- **Core Concepts**: Detailed treatment of fundamental principles
- **Worked Examples**: Step-by-step solutions demonstrating application
- **Practice Questions**: Examination-style questions with mark schemes
- **Common Pitfalls**: Frequent errors and how to avoid them
- **Exam Tips**: Strategies for maximising marks

## How to Use This Content

1. Read through the introductory material to establish context
2. Study the definitions and core concepts carefully
3. Work through the worked examples, following each step
4. Attempt the practice questions independently
5. Review your answers against the provided solutions
6. Note any areas requiring further revision

## Key Concepts

- Foundational definitions and terminology
- Application of principles to examination contexts
- Connections to related topics within the specification
- Assessment objective alignment

## Revision Strategies

- **Active Recall**: Test yourself on the material rather than passively re-reading
- **Spaced Repetition**: Review this content at increasing intervals
- **Interleaving**: Mix this topic with others during study sessions
- **Elaborative Interrogation**: Ask yourself why each concept works

## Exam Preparation

Practise applying these concepts under timed conditions. Focus on understanding what each question is asking and how marks are allocated. Review examiner reports to learn from common mistakes made by other students.