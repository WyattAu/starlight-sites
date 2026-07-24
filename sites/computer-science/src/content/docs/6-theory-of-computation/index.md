---


date: 2026-07-23T21:57:32+01:00
title: Theory of Computation
description: 'Topics in the theory of computation including automata, formal languages, Turing machines, and computational complexity.'
tags:
  - Computing
  - University
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "computer-science", "url": "https://computer-science.wyattau.com"}, {"name": "6 Theory Of Computation", "url": "https://computer-science.wyattau.com/6-theory-of-computation"}, {"name": "Index", "url": "https://computer-science.wyattau.com/6-theory-of-computation/index"}]
}
</script>

<!-- Course Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Theory of Computation",
  "description": "'Topics in the theory of computation including automata, formal languages, Turing machines, and computational complexity.'",
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

## Theory of Computation

The theory of computation addresses the fundamental question of what can be computed and how efficiently computation can be carried out. It provides the mathematical framework for classifying computational problems by their inherent difficulty and for understanding the capabilities and limitations of different models of computation.

## Intuition

**Drawing lines in the sand:** Theory of computation draws boundaries — it separates what any computer can solve from what no computer can solve, and what's easy from what's hard. It's like discovering that some puzzles are solvable, some are impossible, and most are somewhere in between.

**Why it matters:** Complexity theory tells you whether to keep searching for a fast algorithm or accept that exponential time is the best you'll get. This guides real engineering decisions — from cryptography (we rely on factoring being hard) to AI planning (we accept approximations for NP-hard problems).

**The key insight:** Not all problems are created equal — there are provable hierarchies of difficulty, and knowing where a problem sits tells you what approaches are worth pursuing.

## Key Concepts

The Chomsky hierarchy classifies formal languages by the type of automaton that recognises them: regular languages (finite automata), context-free languages (pushdown automata), context-sensitive languages (linear-bounded automata), and recursively enumerable languages (Turing machines). Decidability theory identifies problems for which no algorithm can always produce a correct answer, while complexity theory partitions decidable problems into classes such as $\text{P}$, $\text{NP}$, and $\text{PSPACE}$ based on resource bounds.

## Contents

1. [Introduction](1_introduction.md)
2. [Regular Languages](2_regular-languages.md)
3. [Context-Free Languages](3_context-free-languages.md)
4. [Turing Machines](4_turing-machines.md)
5. [Decidability](5_decidability.md)
6. [Complexity Theory](6_complexity-theory.md)
7. [Problem Set](7_problem-set.md)

## Overview

University-level theory of computation notes covering automata, languages, and complexity.

## Topics Covered

- **Automata Theory**: Finite automata, pushdown automata, Turing machines
- **Formal Languages**: Regular expressions, context-free grammars, Chomsky hierarchy
- **Computability**: Decidability, reductions, the Halting Problem
- **Complexity Theory**: P, NP, NP-completeness, space complexity

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

## Cross-References

- **[Algorithms](../../1-algorithms/index.md):** Algorithm design and complexity analysis.
- **[Discrete Mathematics](../../1-discrete-mathematics/index.md):** Mathematical foundations for formal languages.

- [Discrete Mathematics](https://mathematics.wyattau.com/docs/discrete-mathematics)
- [Algorithm Implementation](https://programming.wyattau.com/docs/algorithms)

## Common Mistakes

1. **Confusing recognisability with decidability.** A language is decidable if a Turing machine halts on every input (accepting or rejecting). A language is merely recognisable if the TM halts on accepted inputs but may loop forever on rejected inputs. The halting problem is recognisable but not decidable — this distinction is fundamental.

2. **Applying pumping lemmas in the wrong direction.** The pumping lemma says "if a language is regular, then it has property X." To prove a language is not regular, you show it lacks property X (proof by contradiction). Using the pumping lemma to prove a language *is* regular is invalid — closure properties are the correct tool for that.

3. **Assuming P ≠ NP is proven.** Despite widespread belief, P vs. NP remains one of the most important open problems in computer science. You cannot use "it's NP-complete" as a justification for why something cannot be solved efficiently unless you assume P ≠ NP, which is unproven.

4. **Treating all undecidable problems as equally hard.** Undecidable problems have degrees of unsolvability under Turing reductions. The halting problem is strictly easier than the Halting Problem relative to an oracle for the halting problem (the Turing jump). Not all undecidable problems are reducible to each other via many-one reductions.

5. **Confusing time complexity with space complexity.** A problem may be solvable in polynomial time but require exponential space, or vice versa. Savitch's theorem shows that NSPACE(s) ⊆ DSPACE(s²), collapsing the space hierarchy, but no such collapse is known for time. These are fundamentally different resources.
