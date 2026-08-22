---

date: 2026-07-23T21:57:32+01:00
title: "The Fundamental Theorems | Mathematics"
tags:
  - Mathematics
  - University
description: 'Let be a real vector space, a sublinear functional ( and for ), and a linear functional on a subspace with for all . Then there exists a linear extension with and for all .'
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "11 Functional Analysis", "url": "https://mathematics.wyattau.com/11-functional-analysis"}, {"name": "4_the Fundamental Theorems", "url": "https://mathematics.wyattau.com/11-functional-analysis/4_the-fundamental-theorems"}]
}
</script>

### 4.1 Hahn-Banach Theorem

**Theorem 4.1 (Hahn-Banach, Analytic Form).** Let $X$ be a real vector space, $p : X \to \mathbb{R}$
a sublinear functional ($p(x + y) \leq p(x) + p(y)$ and $p(tx) = tp(x)$ for $t \geq 0$), and
$f : M \to \mathbb{R}$ a linear functional on a subspace $M \subseteq X$ with $f(x) \leq p(x)$ for
all $x \in M$. Then there exists a linear extension $F : X \to \mathbb{R}$ with $F|_M = f$ and
$F(x) \leq p(x)$ for all $x \in X$.

**Theorem 4.2 (Hahn-Banach, Normed Form).** Let $X$ be a normed space and $M \subseteq X$ a
subspace. Every bounded linear functional $f \in M^*$ extends to $F \in X^*$ with $\|F\| = \|f\|$.

**Corollary 4.3.** For every $x_0 \in X$, $x_0 \neq 0$, there exists $\varphi \in X^*$ with
$\|\varphi\| = 1$ and $\varphi(x_0) = \|x_0\|$.

### 4.2 Open Mapping Theorem

**Theorem 4.4 (Open Mapping Theorem).** If $T \in \mathcal{B}(X, Y)$ is a surjective bounded
operator between Banach spaces, then $T$ maps open sets to open sets.

**Corollary 4.5 (Bounded Inverse Theorem).** If $T \in \mathcal{B}(X, Y)$ is bijective and $X, Y$
are Banach, then $T^{-1} \in \mathcal{B}(Y, X)$.

### 4.3 Closed Graph Theorem

**Theorem 4.6 (Closed Graph Theorem).** Let $T : X \to Y$ be a linear operator between Banach
spaces. Then $T$ is bounded if and only if its graph $\Gamma(T) = \{(x, Tx) : x \in X\}$ is closed
in $X \times Y$.

### 4.4 Uniform Boundedness Principle

**Theorem 4.7 (Uniform Boundedness Principle / Banach-Steinhaus).** Let $X$ be a Banach space and
$\{T_\alpha\}_{\alpha \in A} \subseteq \mathcal{B}(X, Y)$ such that
$\sup_\alpha \|T_\alpha x\| < \infty$ for each $x \in X$. Then $\sup_\alpha \|T_\alpha\| < \infty$.

_Proof sketch._ Consider $E = \{x \in X : \sup_\alpha \|T_\alpha x\| \leq n\}$. By the hypothesis,
$X = \bigcup_n E_n$. By Baire category, some $E_n$ has nonempty interior. Rescaling shows
$\sup_\alpha \|T_\alpha\| < \infty$. $\blacksquare$

### 4.5 Applications of Hahn-Banach

**Application 1: Extension of linear functionals.** The Hahn-Banach theorem guarantees that the
dual space $X^*$ is rich enough to separate points: for any $x \neq 0$, there exists $f \in X^*$
with $f(x) \neq 0$.

**Application 2: Banach limits.** Hahn-Banach can be used to construct a Banach limit:
a translation-invariant linear functional $\mathrm{LIM} : \ell^\infty \to \mathbb{R}$ that extends
the ordinary limit.

**Application 3: Goldstine's theorem.** The unit ball of a Banach space $X$ is weak$*$-dense in
the unit ball of the bidual $X^{**}$, a consequence of the Hahn-Banach theorem.

### 4.6 Applications of the Open Mapping Theorem

**Application 1: Equivalent norms.** If $X$ is a Banach space under two norms $\|\cdot\|_1$ and
$\|\cdot\|_2$ and there exists $C > 0$ with $\|x\|_1 \leq C\|x\|_2$ for all $x$, then the norms are
equivalent.

**Application 2: Sum of Banach spaces.** If $X$ and $Y$ are closed subspaces of a Banach space $Z$
with $X \cap Y = \{0\}$ and $Z = X + Y$, then the sum is a topological direct sum if and only if
both $X$ and $Y$ are closed.

### 4.7 Applications of the Closed Graph Theorem

**Application.** If $T : X \to Y$ is a linear operator between Banach spaces with the property that
$x_n \to 0$ and $Tx_n \to y$ implies $y = 0$, then $T$ is bounded.

**Application: Hellinger-Toeplitz theorem.** If $T : H \to H$ is a linear operator on a Hilbert
space satisfying $\langle Tx, y\rangle = \langle x, Ty\rangle$ for all $x, y \in H$, then $T$ is
bounded.

### 4.8 Applications of the Uniform Boundedness Principle

**Application 1: Fourier series divergence.** There exists a continuous function on $[-\pi, \pi]$
whose Fourier series diverges at a point. The UBP shows that the set of partial sum operators
$\{S_n\}$ is not pointwise bounded on $C[-\pi, \pi]$.

**Application 2: Weak boundedness implies norm boundedness.** If a set of operators is bounded in
the weak operator topology, it is bounded in the operator norm.

### 4.9 The Baire Category Theorem

The fundamental theorems of functional analysis all rely on the **Baire category theorem**:

**Theorem 4.8 (Baire Category Theorem).** In a complete metric space, the intersection of countably
many dense open sets is dense. Equivalently, a complete metric space cannot be expressed as a
countable union of nowhere dense sets.

This is the key ingredient in the proofs of the open mapping theorem and the uniform boundedness
principle.

### 4.10 Practice Problems

**Problem 1.** Use the Hahn-Banach theorem to show that for any closed subspace $M \subseteq X$,
the quotient map $\pi : X \to X/M$ has an isometric right inverse.

**Problem 2.** Show that if $T : X \to Y$ is a bijective bounded operator between Banach spaces,
then $T^{-1}$ is bounded (without using the open mapping theorem, reconstruct the proof).

**Problem 3.** Let $\{f_n\}$ be a sequence in $X^*$ such that $\lim_{n\to\infty} f_n(x)$ exists for
every $x \in X$. Show that the limit functional $f(x) = \lim_n f_n(x)$ is bounded.

**Problem 4.** Show that the differentiation operator $D : C^1[0, 1] \to C[0, 1]$ defined by
$Df = f'$ is unbounded when $C^1[0, 1]$ is given the $\|\cdot\|_\infty$ norm.

### 4.11 The Resonance Theorem

The Uniform Boundedness Principle is also called the **Banach-Steinhaus theorem** or the
**Resonance theorem**. A common formulation is:

**Theorem 4.9 (Banach-Steinhaus).** If $\{T_n\} \subseteq \mathcal{B}(X, Y)$ and $\lim_{n\to\infty}
T_n x$ exists for every $x \in X$, then the limit $Tx = \lim_n T_n x$ defines a bounded linear
operator $T$.

### 4.12 The Closed Range Theorem

**Theorem 4.10 (Closed Range Theorem).** If $T : X \to Y$ is a bounded linear operator between
Banach spaces, then the following are equivalent:

1. The range $R(T)$ is closed in $Y$.
2. The range $R(T^*)$ is closed in $X^*$.
3. $T$ is **relatively open**: there exists $c > 0$ such that for every $y \in R(T)$, there
   exists $x$ with $Tx = y$ and $\|x\| \leq c\|y\|$.

### 4.13 Applications in Partial Differential Equations

**Application: Well-posedness of elliptic PDEs.** Consider the Dirichlet problem
$-\Delta u = f$ on $\Omega$ with $u|_{\partial\Omega} = 0$. The operator
$\Delta : H^1_0(\Omega) \to H^{-1}(\Omega)$ is bounded. By the Lax-Milgram lemma (a corollary
of Hahn-Banach and Riesz representation), there exists a unique weak solution for every $f$.

**Application: Fourier series.** The Uniform Boundedness Principle implies that there exist
continuous functions whose Fourier series diverge at a point, since the Dirichlet kernels
$D_n(t) = \sum_{k=-n}^n e^{ikt}$ have $\|D_n\|_1 \sim \log n \to \infty$ as $n \to \infty$.

### 4.14 Additional Practice Problems

**Problem 5.** Prove that if $X$ is a Banach space and $T : X \to X$ is a bounded linear operator
with $\|T\| < 1$, then $I - T$ is invertible (Von Neumann series). Use the open mapping theorem
or construct the inverse explicitly.

**Problem 6.** Show that the closed graph theorem is equivalent to the open mapping theorem
(given the bounded inverse theorem).

**Problem 7.** Let $X$ and $Y$ be Banach spaces and suppose $T : X \to Y$ is a linear operator.
Prove that if $x_n \to 0$ and $Tx_n \to y$ implies $y = 0$, then $T$ is bounded.

## Cross-References

- **[Bounded Linear Operators](./3_bounded-linear-operators.md)**: Defines the operator spaces and norms that the fundamental theorems operate on, including the open mapping and closed graph theorems.
- **[Compact Operators](./5_compact-operators.md)**: Applies the Fredholm alternative, which relies on the bounded inverse theorem established here.
- **[Weak and Weak* Convergence](./6_weak-and-weak-convergence.md)**: Uses the Banach-Alaoglu theorem, a consequence of Hahn-Banach, to establish weak* compactness of the dual unit ball.

- [Quantum Mechanics](https://physics.wyattau.com/docs/quantum-mechanics)
- [Graph Theory](https://computer-science.wyattau.com/docs/graph-theory)
- [Classical Mechanics](https://physics.wyattau.com/docs/classical-mechanics)
- [Electromagnetism](https://physics.wyattau.com/docs/electromagnetism)

## Intuition

The fundamental theorems of functional analysis establish the basic infrastructure of infinite-dimensional analysis. Hahn-Banach says you can always extend a bounded linear functional from a subspace to the whole space without losing control of its norm, ensuring the dual space is rich enough to separate points. The open mapping theorem states that surjective bounded operators between Banach spaces are automatically open, meaning approximate solutions to linear equations can be upgraded to exact ones. The uniform boundedness principle says that if a family of operators is pointwise bounded, it is uniformly bounded. These theorems all rely on the Baire category theorem, which captures the idea that complete spaces are too large to be filled by countably many thin sets.

### 4.15 Common Mistakes

**Mistake 1: Confusing the Hahn-Banach theorem with the open mapping theorem**
Hahn-Banach is about extending linear functionals from subspaces to the whole space while preserving boundedness. The open mapping theorem is about surjective operators between Banach spaces mapping open sets to open sets. They address completely different problems: extension versus mapping properties. Do not use one where the other is needed.

**Mistake 2: Assuming the open mapping theorem applies to all linear operators**
The open mapping theorem requires both the domain and codomain to be Banach spaces and the operator to be surjective. For example, the identity map from an incomplete normed space to its completion is bijective and continuous but not open (since the domain is not complete). Always verify the completeness hypothesis.

**Mistake 3: Misapplying the uniform boundedness principle**
The UBP requires pointwise boundedness ($\sup_\alpha \|T_\alpha x\| < \infty$ for each $x$) to conclude uniform boundedness ($\sup_\alpha \|T_\alpha\| < \infty$). Pointwise boundedness means the bound can depend on $x$; uniform boundedness means the bound is independent of $x$. The Baire category theorem is the key tool in the proof, and it requires the domain to be a complete metric space.
