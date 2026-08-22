---

date: 2026-07-23T21:57:32+01:00
title: "Computer science - Wyatt's Notes"
description: "\"itemListElement\": [{\"name\": \"Home\", \"url\": \"https://wyattau.com\"}, {\"name\": \"computer-science\", \"url\": \"https://computer-science.wyattau.com\"}, {\"name\":"
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "computer-science", "url": "https://computer-science.wyattau.com"}, {"name": "Intro", "url": "https://computer-science.wyattau.com/intro"}]
}
</script>

Welcome to the computer-science notes.

## Intuition

**The science of what's computable:** Computer science isn't just about coding — it's the study of what can be computed, how efficiently, and how to apply computation to solve real problems. It spans from pure mathematics (what's possible) to practical engineering (how to build it).

**Why it matters:** Computer science underpins modern life — from the algorithms that power search engines to the protocols that secure your banking. Understanding it gives you the tools to build, debug, and improve the systems that run the world.

**The key insight:** Abstraction is the most powerful tool in computer science — by hiding complexity behind clean interfaces, we can build systems of extraordinary complexity that still work reliably.

## What Is Computer Science?

Computer science is the study of computation, information, and automation.
It spans theoretical disciplines such as algorithms, theory of computation, and
information theory, to applied disciplines including the design and implementation
of hardware and software. At its core, computer science asks what can be computed,
how efficiently it can be computed, and how computation can be applied to solve
real-world problems.

## Branches of Computer Science

The discipline is conventionally divided into several major branches.

**Theory of Computation** concerns itself with what problems are solvable and
how efficiently. It formalises the notion of computation through automata,
formal languages, and Turing machines, and classifies problems by their
computational complexity (P, NP, PSPACE, and beyond).

**Computer Systems** encompasses computer architecture, operating systems,
distributed systems, and networking. It addresses how computers are designed,
how they manage resources, and how they communicate.

**Artificial Intelligence** focuses on building systems that perform tasks
requiring human-like reasoning: learning from data, natural language
understanding, perception, and decision-making.

**Human--Computer Interaction** studies the design and evaluation of interfaces
between people and computers, drawing on cognitive science, design, and
usability engineering.

Other important areas include databases, software engineering, computer
graphics, computational biology, and cybersecurity.

## How to Use This Resource

This site is organised into three major sections:

1. **Algorithms and Data Structures** -- foundational material on algorithm
   design paradigms, complexity analysis, and standard data structures.
2. **Systems** -- distributed systems, networking, and systems-level topics.
3. **Theory** -- automata and formal languages, compiler construction, and
   cryptography.

Each section contains explanatory notes and a set of practice problems. The
practice problems use an interactive multiple-choice format. Attempt each
question before revealing the explanation.

## Prerequisites

A reasonable background in mathematics (discrete mathematics, basic
probability, and linear algebra) will be helpful. Some familiarity with at
least one programming language is assumed. No single advanced prerequisite
is required; concepts are introduced as needed.

## Recommended Path Through the Content

For a student beginning from first principles, the following order is
recommended:

- Start with **Algorithms and Data Structures**. Work through algorithm
  design, complexity theory, and data structures in sequence.
- Proceed to **Theory**, where automata and formal languages provide the
  mathematical foundation for both compilers and cryptography.
- Finish with **Systems**, which builds on theoretical understanding to
  address real-world distributed and networked systems.

Experienced students may follow alternative orderings based on interest.

## Learning Methodology

Each section follows a consistent structure:

1. **Expository notes** introduce the core concepts, definitions, and theorems.
   Work through these first to build a mental model of the topic.
2. **Practice problems** test understanding through multiple-choice questions.
   Each problem includes a question, four answer options, and a detailed
   explanation that discusses not only why the correct answer is right, but
   also why the other options are wrong.
3. **Cross-references** link related material across sections. For example,
   the complexity classes introduced in the algorithms section reappear in the
   cryptography section when discussing the hardness assumptions underlying
   RSA and Diffie--Hellman.

Active recall through practice problems is a more effective study strategy
than passive re-reading. Attempt each problem, commit to an answer, and only
then consult the explanation.

## Assessment and Self-Evaluation

Use the practice problems to gauge your understanding:

- **Easy** problems test recall of definitions and basic properties.
- **Medium** problems require applying concepts to concrete scenarios.
- **Hard** problems involve multi-step reasoning, proofs, or non-obvious
  connections between topics.

If you find a section consistently difficult, revisit the expository notes
and work through any referenced proofs or derivations by hand. Repetition
across days (spaced practice) is more effective than cramming.

## Key Terminology

| Term | Definition |
| ------ | ------------ |
| Algorithm | A finite, well-defined sequence of steps that solves a problem. |
| Complexity class | A set of problems sharing a resource bound (e.g. time or space). |
| Abstraction | A mechanism for hiding implementation details behind a clean interface. |
| Decidability | Whether a Turing machine halts on all inputs for a given problem. |
| Consistency model | A contract specifying what values a read may return in a distributed store. |
| Invariant | A property that holds throughout execution and is maintained by each operation. |

## See Also

- [Discrete Mathematics](https://mathematics.wyattau.com/docs/discrete-mathematics)
- [Algorithm Implementation](https://programming.wyattau.com/docs/algorithms)

## Common Mistakes

**Confusing complexity classes:** P is problems solvable in polynomial time. NP is problems verifiable in polynomial time. P ⊆ NP but it's unknown if P = NP. Don't assume they're the same.

**Forgetting that recursion has overhead:** Recursive calls use stack space. Very deep recursion can cause stack overflow. Consider iterative alternatives for large inputs.

**Mixing up determinism with randomness:** Deterministic algorithms produce the same output for the same input. Randomised algorithms use random choices. Don't assume all algorithms are deterministic.
