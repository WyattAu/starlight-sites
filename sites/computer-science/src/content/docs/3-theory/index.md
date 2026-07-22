---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "computer-science", "url": "https://computer-science.wyattau.com"}, {"name": "3 Theory", "url": "https://computer-science.wyattau.com/3-theory"}, {"name": "Index", "url": "https://computer-science.wyattau.com/3-theory/index"}]
}
</script>

<!-- Course Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Theory",
  "description": "Theoretical computer science establishes the formal foundations of the discipline. It addresses fundamental questions about what can be computed, how",
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
title: Theory
description: "Theoretical computer science establishes the formal foundations of the discipline. It addresses fundamental questions about what can be computed, how"
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "computer-science", "url": "https://computer-science.wyattau.com"}, {"name": "3 Theory", "url": "https://computer-science.wyattau.com/3-theory"}, {"name": "Index", "url": "https://computer-science.wyattau.com/3-theory/index"}]
}
</script>

<!-- Course Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Theory",
  "description": "Theoretical computer science establishes the formal foundations of the discipline. It addresses fundamental questions about what can be computed, how",
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

# Theory

Theoretical computer science establishes the formal foundations of the discipline. It addresses fundamental questions about what can be computed, how efficiently computation can be performed, and what mathematical structures underpin computational processes. The three principal areas are automata theory, computability theory, and complexity theory.

## Intuition

**A factory with different machines:** Automata theory is like designing machines that recognise patterns — each machine type (finite, pushdown, Turing) has different tools: a finite machine has a simple checklist, a pushdown machine has a stack of sticky notes, and a Turing machine has an infinite scroll. The more powerful the tool, the more complex the patterns it can handle.

**Why it matters:** Automata theory underpins compiler design, protocol verification, and understanding what computers fundamentally can and cannot do. It sets the boundary between tractable and intractable computation.

**The key insight:** There is a strict hierarchy of computational power — adding memory transforms what's computable, and some problems are provably beyond any algorithm's reach.

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

## Cross-References

- **[Algorithms](../../1-algorithms/index.md):** Algorithm design and complexity theory.
- **[Databases](../../4-databases/index.md):** Query optimisation using automata theory.
- **[Computer Networks](../../3-computer-networks/index.md):** Protocol design based on formal languages.

## Common Mistakes

- **Confusing decidability with recognisability:** A language can be recognised by a Turing machine (the TM halts and accepts for strings in the language) without being decidable (the TM may loop forever on strings not in the language). The Halting Problem is the canonical example.
- **Assuming P ≠ NP without understanding the implications:** The P vs NP question is one of the biggest unsolved problems in mathematics. Claiming a proof without understanding the consequences for cryptography, optimisation, and complexity theory is a red flag.
- **Forgetting that reductions prove hardness, not easiness:** If problem A reduces to problem B, it means B is at least as hard as A. Students often confuse the direction: reducing A to B shows B is hard, not that A is easy.
- **Mixing up deterministic and non-deterministic automata:** Deterministic finite automata (DFA) have exactly one transition per state-symbol pair. Non-deterministic automata (NFA) can have multiple, and epsilon transitions. NFAs are exponentially more compact but accept the same regular languages as DFAs.
