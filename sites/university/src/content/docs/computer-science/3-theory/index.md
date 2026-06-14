---
title: Theory
description: 'Topics in theoretical computer science including automata, computability, and computational complexity.'
---

# Theory

Theoretical computer science establishes the formal foundations of the discipline. It addresses fundamental questions about what can be computed, how efficiently computation can be performed, and what mathematical structures underpin computational processes. The three principal areas are automata theory, computability theory, and complexity theory.

## Key Concepts

Automata theory studies abstract machines and the languages they recognise, progressing from finite automata (recognising regular languages) to pushdown automata (context-free languages) to Turing machines (recursively enumerable languages). Computability theory identifies problems that no algorithm can solve, such as the Halting Problem. Complexity theory classifies problems by the resources required to solve them, with the class $\text{P}$ containing problems solvable in polynomial time and $\text{NP}$ containing those whose solutions can be verified in polynomial time.

## Worked Example: The Halting Problem

The Halting Problem asks whether a given program $P$ will halt on input $w$. Suppose, for contradiction, that a decider $H(P, w)$ exists. Construct a program $D$ that calls $H$ on its own source code: if $H$ reports that $D$ halts, then $D$ enters an infinite loop; if $H$ reports that $D$ does not halt, then $D$ halts. This creates a contradiction, proving that no such decider $H$ can exist.
