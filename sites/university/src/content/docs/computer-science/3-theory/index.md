---
title: Theory
description: 'Theoretical computer science establishes the formal foundations of the discipline. It addresses fundamental questions about what can be computed, how...'
---

# Theory

Theoretical computer science establishes the formal foundations of the discipline. It addresses fundamental questions about what can be computed, how efficiently computation can be performed, and what mathematical structures underpin computational processes. The three principal areas are automata theory, computability theory, and complexity theory.

## Key Concepts

Automata theory studies abstract machines and the languages they recognise, progressing from finite automata (recognising regular languages) to pushdown automata (context-free languages) to Turing machines (recursively enumerable languages). Computability theory identifies problems that no algorithm can solve, such as the Halting Problem. Complexity theory classifies problems by the resources required to solve them, with the class $\text{P}$ containing problems solvable in polynomial time and $\text{NP}$ containing those whose solutions can be verified in polynomial time.

## Worked Example: The Halting Problem

The Halting Problem asks whether a given program $P$ will halt on input $w$. Suppose, for contradiction, that a decider $H(P, w)$ exists. Construct a program $D$ that calls $H$ on its own source code: if $H$ reports that $D$ halts, then $D$ enters an infinite loop; if $H$ reports that $D$ does not halt, then $D$ halts. This creates a contradiction, proving that no such decider $H$ can exist.

## Overview

University-level theoretical computer science notes covering automata, computability, and complexity.

## Topics Covered

- **Automata Theory**: Finite automata, pushdown automata, Turing machines
- **Computability Theory**: Decidability, reductions, the Halting Problem
- **Complexity Theory**: P, NP, NP-completeness, space complexity
- **Formal Languages**: Regular expressions, context-free grammars, Chomsky hierarchy

## Prerequisites

- Discrete mathematics and logic
- Mathematical proofs and induction
- Basic programming experience

## How to Use These Notes

Start with automata theory to build foundational knowledge, then progress to computability and complexity. Each section includes worked examples and practice problems.

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

1. **Master formalism**: Theoretical CS requires precise mathematical language
2. **Practice reductions**: Learn to reduce problems to prove hardness
3. **Draw automata**: Visualise state machines and their transitions
4. **Learn the hierarchy**: Understand the relationships between complexity classes
5. **Connect to practice**: Relate theory to practical applications (compilers, cryptography)
