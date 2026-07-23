---

title: Bounded Linear Operators
tags:
  - Mathematics
  - University
description: 'A linear operator between normed spaces is if there exists such that for all . T Comprehensive educational content coverage with definitions and practice proble'
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "11 Functional Analysis", "url": "https://mathematics.wyattau.com/11-functional-analysis"}, {"name": "3_bounded Linear Operators", "url": "https://mathematics.wyattau.com/11-functional-analysis/3_bounded-linear-operators"}]
}
</script>

### 3.1 Definitions

A linear operator $T : X \to Y$ between normed spaces is **bounded** if there exists $C \geq 0$ such
that $\|Tx\|_Y \leq C\|x\|_X$ for all $x \in X$. The **operator norm** is

$$\|T\| = \sup\{\|Tx\|_Y : \|x\|_X \leq 1\} = \sup\{\|Tx\|_Y : \|x\|_X = 1\}$$

**Proposition 3.1.** A linear operator is bounded if and only if it is continuous.

**Proposition 3.2.** $T$ is bounded if and only if it maps bounded sets to bounded sets.

The space $\mathcal{B}(X, Y)$ of all bounded linear operators from $X$ to $Y$ is a Banach space when
$Y$ is complete, with the operator norm.

### 3.2 Examples

**Example 1.** The identity operator $I : X \to X$ has $\|I\| = 1$.

**Example 2.** The zero operator $0 : X \to Y$ has $\|0\| = 0$.

**Example 3.** Let $T : \ell^2 \to \ell^2$ be defined by
$T(x_1, x_2, \ldots) = (0, x_1, x_2, \ldots)$ (right shift). Then $\|T\| = 1$.

**Example 4.** The multiplication operator $(M_g f)(x) = g(x)f(x)$ on $L^2$ is bounded with
$\|M_g\| = \|g\|_\infty$.

### 3.3 Dual Spaces

The **dual space** of $X$ is $X^* = \mathcal{B}(X, \mathbb{R})$ (or $\mathcal{B}(X, \mathbb{C})$),
the space of all bounded linear functionals.

**Theorem 3.3.** $X^*$ is always a Banach space.

**Theorem 3.4.** $(\ell^1)^* \cong \ell^\infty$ via $\varphi(x) = \sum x_n y_n$ for
$y \in \ell^\infty$.

**Theorem 3.5.** $(\ell^p)^* \cong \ell^q$ for $1 \leq p < \infty$ where $1/p + 1/q = 1$.

**Theorem 3.6.** $(c_0)^* \cong \ell^1$ where $c_0 = \{(x_n) : x_n \to 0\}$.

### 3.4 Annihilators and the Double Dual

Let $M$ be a subspace of a normed space $X$. The **annihilator** of $M$ is

$$M^\perp = \{\varphi \in X^* : \varphi(x) = 0 \text{ for all } x \in M\}$$

Let $N$ be a subspace of $X^*$. The **pre-annihilator** of $N$ is

$${}^\perp N = \{x \in X : \varphi(x) = 0 \text{ for all } \varphi \in N\}$$

**Proposition 3.7.** If $M \subseteq X$ is a subspace, then $M^\perp$ is a closed subspace of $X^*$.
If $N \subseteq X^*$ is a subspace, then ${}^\perp N$ is a closed subspace of $X$.

**Proposition 3.8.** For a subspace $M \subseteq X$, ${}^\perp(M^\perp) = \overline{M}$ (the closure
of $M$).

**Proposition 3.9.** For finite-dimensional subspaces $M \subseteq X$, $(X/M)^* \cong M^\perp$.

The **double dual** (or **bidual**) of $X$ is $X^{**} = (X^*)^*$. There is a natural embedding
$J : X \hookrightarrow X^{**}$ defined by $(Jx)(\varphi) = \varphi(x)$ for $\varphi \in X^*$. The
Hahn-Banach theorem guarantees that $J$ is an isometric embedding: $\|Jx\|_{X^{**}} = \|x\|_X$.

**Definition.** A normed space $X$ is **reflexive** if the canonical embedding $J : X \to X^{**}$ is
surjective, i.e., $J(X) = X^{**}$.

**Proposition 3.10.** Every reflexive space is a Banach space.

**Example.** $\ell^p$ is reflexive for $1 < p < \infty$ since
$(\ell^p)^{**} \cong (\ell^q)^* \cong \ell^p$.

**Example.** $L^p(\mu)$ is reflexive for $1 < p < \infty$.

**Example.** $\ell^1$, $\ell^\infty$, and $c_0$ are not reflexive. In particular,
$(\ell^1)^{**} \cong (\ell^\infty)^* \supsetneq \ell^1$, and
$(c_0)^{**} \cong \ell^\infty \supsetneq c_0$.

**Theorem 3.11.** A Banach space $X$ is reflexive if and only if its closed unit ball is weakly
compact.

**Theorem 3.12.** If $X$ is reflexive, then every bounded sequence has a weakly convergent
subsequence (Eberlein-Smulian theorem). In particular, every continuous linear functional achieves
its norm on the closed unit ball.

**Worked Example.** Show that $c_0$ is not reflexive. Since $(c_0)^* \cong \ell^1$ by Theorem 3.6,
and $(\ell^1)^* \cong \ell^\infty$ by Theorem 3.4, we have $(c_0)^{**} \cong \ell^\infty$. The
canonical embedding $J : c_0 \hookrightarrow \ell^\infty$ is the inclusion map. Since $\ell^\infty$
contains bounded sequences that do not converge to zero (e.g., the constant sequence
$(1, 1, 1, \ldots)$), $J$ is not surjective, so $c_0$ is not reflexive.

### 3.5 Key Relationships

- Boundedness and continuity are equivalent for linear operators between normed spaces.
- The operator norm is submultiplicative: $\|ST\| \leq \|S\|\|T\|$ for composable operators.
- Reflexivity implies the Banach space property but not conversely.
- The double dual $X^{**}$ is always reflexive when $X$ is a Banach space.

### 3.6 Common Pitfalls

- Assuming that every bounded linear functional on a subspace extends to the whole space without invoking the Hahn-Banach theorem. Extension requires the Hahn-Banach theorem and is not automatic.
- Confusing weak convergence with strong convergence. A sequence can converge weakly but not strongly (e.g., the standard basis in $\ell^2$).
- Forgetting that $\mathcal{B}(X,Y)$ is a Banach space only when $Y$ is complete. If $Y$ is not complete, the space of bounded operators need not be.
- Assuming reflexivity when only the canonical embedding is injective. Injectivity holds for all normed spaces by Hahn-Banach; reflexivity requires surjectivity.

### 3.7 Applications

- **Quantum mechanics:** Observables are modelled as self-adjoint bounded operators on Hilbert spaces.
- **Numerical analysis:** The spectral radius of an iteration matrix determines convergence of iterative methods.
- **Partial differential equations:** Bounded operators on Sobolev spaces encode weak formulations of PDEs.
- **Signal processing:** Bounded linear operators on $L^2$ spaces represent filters and transforms.

### 3.8 The Open Mapping Theorem

**Theorem 3.13 (Open Mapping Theorem).** If $X$ and $Y$ are Banach spaces and $T : X \to Y$ is a surjective bounded linear operator, then $T$ is an open map (it maps open sets to open sets).

**Corollary 3.14 (Bounded Inverse Theorem).** If $T : X \to Y$ is a bijective bounded linear operator between Banach spaces, then $T^{-1}$ is also bounded.

**Theorem 3.15 (Closed Graph Theorem).** A linear operator $T : X \to Y$ between Banach spaces is bounded if and only if its graph $\{(x, Tx) : x \in X\}$ is closed in $X \times Y$.

### 3.9 Worked Example: Unbounded Operator

## Cross-References

- **[Normed Spaces and Banach Spaces](./1_normed-spaces-and-banach-spaces.md)**: Defines the domain and codomain spaces for bounded linear operators and establishes the dual space framework.
- **[The Fundamental Theorems](./4_the-fundamental-theorems.md)**: Presents the Hahn-Banach, open mapping, and closed graph theorems that govern the behaviour of bounded operators between Banach spaces.
- **[Compact Operators](./5_compact-operators.md)**: Studies a subclass of bounded operators with finite-dimensional-like properties, crucial for spectral theory.

- [Quantum Mechanics](https://physics.wyattau.com/docs/quantum-mechanics)
- [Graph Theory](https://computer-science.wyattau.com/docs/graph-theory)
- [Classical Mechanics](https://physics.wyattau.com/docs/classical-mechanics)
- [Electromagnetism](https://physics.wyattau.com/docs/electromagnetism)

## Intuition

Bounded linear operators are the continuous linear maps between normed spaces — they do not blow up small inputs into large outputs. The operator norm measures the maximum stretching factor. The open mapping theorem says that surjective bounded operators between Banach spaces are automatically open maps, which implies the bounded inverse theorem: an invertible bounded operator has a bounded inverse. The closed graph theorem provides a practical test: a linear operator is bounded if and only if its graph is closed. These three results — open mapping, bounded inverse, and closed graph — are the fundamental theorems of functional analysis, guaranteeing that well-behaved operators behave as expected.

### 3.9 Worked Example: Unbounded Operator

**Problem.** Let $T : C[0,1] \to C[0,1]$ be defined by $(Tf)(x) = xf'(x)$. Show that $T$ is unbounded.

<details>
<summary>Solution</summary>

Consider the sequence $f_n(x) = x^n$. Then $\|f_n\|_\infty = 1$ for all $n \geq 1$.

$(Tf_n)(x) = x \cdot nx^{n-1} = nx^n$, so $\|Tf_n\|_\infty = n$.

Since $\|Tf_n\|/\|f_n\| = n \to \infty$ as $n \to \infty$, the operator $T$ is unbounded. $\blacksquare$

</details>

