---
title: Summary of Key Theorems
tags:
  - Mathematics
  - University
description: "| Theorem | Statement | | -------------------- | --------------------------------------------------------------------------------------------------- | |"
---

| Theorem              | Statement                                                                                           |
| -------------------- | --------------------------------------------------------------------------------------------------- |
| Hahn-Banach          | Bounded functionals extend preserving norm                                                          |
| Open Mapping         | Surjective bounded operator between Banach spaces is open                                           |
| Closed Graph         | A linear operator between Banach spaces is bounded iff its graph is closed                          |
| Uniform Boundedness  | Pointwise-bounded family of operators is uniformly bounded                                          |
| Riesz Representation | Every functional on a Hilbert space is given by inner product                                       |
| Spectral Theorem     | Compact self-adjoint operators have orthonormal eigenbasis                                          |
| Fredholm Alternative | For compact $T$ and $\lambda \neq 0$: either $\lambda I - T$ is invertible or has nontrivial kernel |
| Banach-Alaoglu       | Closed unit ball of $X^*$ is weak\*-compact                                                         |

### Hahn-Banach Theorem

**Statement.** Let $X$ be a normed vector space and $Y \subseteq X$ a subspace. If
$f : Y \to \mathbb{R}$ is a bounded linear functional, then there exists an extension
$F : X \to \mathbb{R}$ such that $F|_Y = f$ and $\|F\| = \|f\|$.

**Intuition.** The theorem guarantees that we can extend linear functionals from a subspace
to the whole space without increasing the norm. This is fundamental for duality theory.

**Corollaries.** For any nonzero $x \in X$ there exists $f \in X^*$ with $\|f\| = 1$ and
$f(x) = \|x\|$. The natural embedding $X \to X^{**}$ is isometric.

### Open Mapping Theorem

**Statement.** If $T : X \to Y$ is a bounded surjective linear operator between Banach
spaces, then $T$ is an open map (the image of every open set is open).

**Intuition.** Surjectivity plus completeness forces the operator to be well-behaved
topologically. A key consequence is that a bijective bounded linear operator has a bounded
inverse.

**Corollary (Inverse Mapping Theorem).** If $T : X \to Y$ is a bijective bounded linear
operator between Banach spaces, then $T^{-1}$ is bounded.

### Closed Graph Theorem

**Statement.** Let $T : X \to Y$ be a linear operator between Banach spaces. Then $T$ is
bounded if and only if its graph $\Gamma(T) = \{(x, Tx) : x \in \mathrm{dom}(T)\}$ is closed
in $X \times Y$.

**Intuition.** This theorem provides a powerful way to prove boundedness: instead of
checking continuity directly, one checks that whenever $x_n \to x$ and $Tx_n \to y$,
then $y = Tx$.

**Common Pitfall.** The domain and codomain must both be Banach spaces. A linear operator
$T : C[0,1] \to C[0,1]$ defined by $Tf = f''$ has a closed graph in $C[0,1] \times C[0,1]$,
but its domain $C^2[0,1]$ is not complete under the sup norm. The theorem does not apply.

### Uniform Boundedness Principle

**Statement (Banach-Steinhaus).** Let $\{T_\alpha\}_{\alpha \in A}$ be a family of bounded
linear operators from a Banach space $X$ to a normed space $Y$. If $\sup_\alpha \|T_\alpha x\|
< \infty$ for each $x \in X$, then $\sup_\alpha \|T_\alpha\| < \infty$.

**Intuition.** Pointwise boundedness implies uniform boundedness. This is a consequence of
the Baire category theorem and is often used to prove that certain operators are unbounded.

**Application.** If a sequence of bounded operators converges pointwise, the limit operator
is bounded and the sequence is uniformly bounded in norm.

### Riesz Representation Theorem

**Statement.** Let $H$ be a Hilbert space. For every bounded linear functional $f : H \to
\mathbb{R}$, there exists a unique vector $y \in H$ such that $f(x) = \langle x, y \rangle$
for all $x \in H$, and $\|f\| = \|y\|$.

**Intuition.** In a Hilbert space, the dual space is isometrically isomorphic to the space
itself. Every functional is just an inner product with some vector.

**Consequence.** The map $y \mapsto \langle \cdot, y \rangle$ is an isometric isomorphism
$H \cong H^*$, so Hilbert spaces are self-dual.

### Spectral Theorem

**Statement.** If $T : H \to H$ is a compact self-adjoint operator on a Hilbert space $H$,
then there exists an orthonormal basis of $H$ consisting of eigenvectors of $T$. The
corresponding eigenvalues are real and converge to zero.

**Intuition.** Compact self-adjoint operators are diagonalisable: they behave like
infinite-dimensional symmetric matrices. This generalises the finite-dimensional spectral
theorem.

**Application.** Sturm-Liouville problems, integral equations with symmetric kernels, and
the quantum mechanical position and momentum operators all involve spectral decompositions.

### Fredholm Alternative

**Statement.** Let $T : X \to X$ be a compact operator on a Banach space $X$. For any
nonzero $\lambda \in \mathbb{C}$, either $\lambda I - T$ is invertible with bounded inverse,
or $\lambda$ is an eigenvalue of $T$ with finite multiplicity.

**Intuition.** For compact perturbations of the identity, the only possible obstructions
to invertibility are eigenvalues. The null space and range have complementary dimensions.

**Application.** This theorem is essential for solving integral equations of the second
kind: $f - \lambda K f = g$, where $K$ is a compact integral operator.

### Banach-Alaoglu Theorem

**Statement.** The closed unit ball of the dual space $X^*$ of a normed space $X$ is
compact in the weak\* topology.

**Intuition.** Even though the unit ball in an infinite-dimensional space is never
compact in the norm topology, it becomes compact in the weak\* topology. This provides
a powerful existence principle for optimisation problems.

**Application.** Existence of minimisers in the calculus of variations: every bounded
sequence in the dual has a weak\* convergent subsequence.

### Connections Between Theorems

These six core theorems are deeply interrelated. The Hahn-Banach, Open Mapping, Closed
Graph, and Uniform Boundedness principles are often called the **four pillars of functional
analysis**. All rely on the Baire category theorem and completeness.

The Riesz Representation and Spectral theorems are specific to Hilbert spaces, where
the geometry of inner products provides stronger structure. The Fredholm Alternative
bridges compact operator theory with spectral theory. Banach-Alaoglu uses weak\* topology
to recover compactness lost in infinite dimensions.

### Practice Problems

1. Let $X = C[0,1]$ and $f(x) = x(0)$. Use the Hahn-Banach theorem to extend $f$ to a
   functional on $L^\infty[0,1]$ with the same norm.
2. Suppose $T : X \to Y$ is a linear operator between Banach spaces with closed graph.
   Show that $T$ is bounded. Why is the converse trivial?
3. Give an example of a family of operators $\{T_n\}$ such that $\|T_n x\|$ is bounded
   for each $x$ but $\|T_n\| \to \infty$.
4. Verify that the operator $(Tf)(x) = \int_0^1 \sin(xy) f(y)\,dy$ on $L^2[0,1]$ is
   compact and self-adjoint. What does the spectral theorem tell you about its eigenfunctions?

### Key Synopsis

The six core theorems of functional analysis give the subject its power: extension of
functionals (Hahn-Banach), stability of surjectivity (Open Mapping), automatic continuity
from graph closure (Closed Graph), uniform bounds from pointwise bounds (Uniform
Boundedness), concrete dual representation (Riesz), and diagonalisation of compact
operators (Spectral).
