---
title: Mathematics
description: "Introduction to mathematics notes."
---

# Mathematics

Welcome to the mathematics notes. These notes cover proof-based undergraduate mathematics, from foundational algebraic structures to advanced analysis and geometry.

## Why This Matters

Mathematics is the language of science and engineering. Abstract algebra provides the algebraic foundations (groups, rings, fields), real analysis builds rigorous calculus, linear algebra handles vector spaces and transformations, and topology generalises continuity and convergence. These subjects interconnect deeply — linear algebra appears in functional analysis, group theory underpins symmetry in physics, and measure theory extends integration beyond Riemann's limitations. Understanding these connections is what transforms computation into understanding.

## What You Will Find

- **Abstract Algebra**: Groups, rings, fields, and their homomorphisms — the algebraic structures underlying symmetry and number theory. From the cyclic group ℤ/nℤ to the Monster group, abstract algebra reveals the architecture of mathematical objects.
- **Real Analysis**: Rigorous treatment of limits, continuity, differentiation, and integration on the real line. The ε-δ framework provides the logical foundation for all of calculus.
- **Linear Algebra**: Vector spaces, linear maps, eigenvalues, and inner product spaces. Linear algebra is the most widely applied area of mathematics, from data science to quantum mechanics.
- **Multivariable Calculus**: Partial derivatives, gradient, multiple integrals, and vector calculus theorems. Green's, Stokes', and Gauss' theorems unify differential and integral calculus.
- **Complex Analysis**: Analytic functions, contour integration, and the residue theorem. Complex analysis is the most elegant branch of analysis — differentiability once implies infinite differentiability.
- **Differential Geometry**: Manifolds, curvature, and geometric structures on smooth spaces. Differential geometry connects calculus to geometry, enabling the study of curved spaces.
- **Functional Analysis**: Infinite-dimensional vector spaces, bounded operators, and spectral theory. Functional analysis extends linear algebra to function spaces, underpinning quantum mechanics and PDE theory.

## Core Concepts

| Area | Central Object | Key Result | Application |
|------|---------------|------------|-------------|
| Abstract Algebra | Group $(G, \cdot)$ | Lagrange's Theorem | Symmetry, cryptography |
| Real Analysis | $\varepsilon$-$\delta$ limit | Bolzano-Weierstrass | Rigorous calculus |
| Linear Algebra | Vector space $V$ | Spectral Theorem | Data science, quantum |
| Complex Analysis | Analytic function $f: \mathbb{C} \to \mathbb{C}$ | Cauchy's Integral Theorem | Contour integration |
| Differential Geometry | Smooth manifold $M$ | Gauss-Bonnet Theorem | General relativity |
| Functional Analysis | Banach/Hilbert space | Hahn-Banach Theorem | PDE theory, quantum |

## Proof Techniques

| Technique | When to Use | Example |
|-----------|-------------|---------|
| Direct proof | Implication $P \Rightarrow Q$ | "If $n$ is even, then $n^2$ is even" |
| Contrapositive | Easier to prove $\neg Q \Rightarrow \neg P$ | "If $n^2$ is odd, then $n$ is odd" |
| Contradiction | Assume $\neg P$, derive contradiction | Irrationality of $\sqrt{2}$ |
| Induction | Statement about natural numbers | $\sum_{i=1}^n i = \frac{n(n+1)}{2}$ |
| Construction | Existence proof | "There exist infinitely many primes" |

## How to Use These Notes

Start with the introductory pages for each topic. Each section includes:
- Detailed definitions and theorems
- Worked examples with step-by-step solutions
- Practice problems with answers
- Common pitfalls and how to avoid them
- Connections to other areas of mathematics

Mathematics is cumulative — each topic builds on previous ones. If you encounter unfamiliar material, check the prerequisites and review foundational concepts first.

## Cross-References

- **[Abstract Algebra](/docs/university/mathematics/abstract-algebra)**: Groups, rings, and fields form the algebraic foundation for many areas of modern mathematics.
- **[Real Analysis](/docs/university/mathematics/real-analysis)**: Rigorous treatment of limits, continuity, and integration underpins calculus and its extensions.
- **[Linear Algebra](/docs/university/mathematics/linear-algebra)**: Vector spaces and linear maps are used throughout mathematics, physics, and engineering.
- **[Topology](/docs/university/mathematics/topology)**: Topological spaces generalise notions of closeness and continuity beyond metric spaces.

## Common Mistakes

**Assuming mathematics is about memorising formulas:** These notes are proof-based — understanding why a theorem is true matters more than knowing the statement. Memorising the spectral theorem without understanding its proof leaves you unable to apply it in novel situations.

**Confusing "obvious" with "proven":** In proof-based mathematics, intuition can be misleading. The statement "every continuous function is differentiable" seems plausible until you encounter the Weierstrass function. Always write out the full proof rather than relying on intuition alone.

**Neglecting the role of counterexamples:** A single counterexample disproves a universal claim. Knowing classic counterexamples (the topologist's sine curve, the Cantor set, pathological algebraic structures) is as important as knowing theorems. They sharpen your understanding of where definitions and theorems apply.

## Intuition

Mathematics is not about memorising formulas or computing answers — it's about building a network of ideas that connect to each other in logically airtight ways. The reason proof-based mathematics feels fundamentally different from computational mathematics is that it's asking a different question. Computational maths asks "what is the answer?" Proof-based maths asks "why must this be true, and what would have to change for it to be false?" This shift in perspective is what transforms a collection of facts into genuine understanding. When you prove a theorem, you're not just verifying a result — you're building a bridge between what you already know and something new, and that bridge must hold weight from every possible direction.

The interconnectedness of mathematical subjects is not a coincidence — it reflects deep structural parallels. Groups describe symmetry, vector spaces describe linear structure, topological spaces describe continuity, and measure spaces describe size. These aren't separate topics; they're different lenses on the same fundamental questions about mathematical objects and their relationships. Understanding why the spectral theorem matters in linear algebra, why compactness matters in analysis, and why the isomorphism theorems matter in algebra — and how they all connect — is what transforms computation into mathematical maturity.

The proof techniques themselves are not arbitrary logical exercises. Direct proof builds a chain from assumptions to conclusion. Proof by contradiction exploits the fact that if a statement isn't true, assuming it's true must create a logical impossibility. Induction captures the idea that if something holds for a base case and each step preserves it, it holds for all natural numbers. Each technique is a tool for attacking a different kind of problem, and learning to recognise which technique to reach for is the core skill of mathematical reasoning.

