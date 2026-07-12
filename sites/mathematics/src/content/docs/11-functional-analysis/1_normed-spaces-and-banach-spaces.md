---
title: Normed Spaces and Banach Spaces
tags:
  - Mathematics
  - University
description: 'A is a vector space over or together with a . Comprehensive educational content coverage with definitions, worked examples, and practice problems.'
---

### 1.1 Normed Spaces

A **normed space** is a vector space $X$ over $\mathbb{R}$ or $\mathbb{C}$ together with a **norm**
$\|\cdot\| : X \to [0, \infty)$ satisfying:

1. $\|x\| = 0 \iff x = 0$ (positive definiteness).
2. $\|\alpha x\| = |\alpha| \cdot \|x\|$ for all scalars $\alpha$ (homogeneity).
3. $\|x + y\| \leq \|x\| + \|y\|$ (triangle inequality).

A norm induces a metric $d(x, y) = \|x - y\|$, making $X$ a metric space.

**Example 1.** $(C[a, b], \|\cdot\|_\infty)$ with $\|f\|_\infty = \sup_{x \in [a,b]} |f(x)|$.

**Example 2.** $(C[a, b], \|\cdot\|_1)$ with $\|f\|_1 = \int_a^b |f(x)|\, dx$. This norm is weaker:
convergence in $\|\cdot\|_1$ does not imply pointwise convergence.

**Example 3.** $\ell^p = \{(x_n) : \sum |x_n|^p < \infty\}$ with $\|x\|_p = (\sum |x_n|^p)^{1/p}$
for $1 \leq p < \infty$.

**Example 4.** $\ell^\infty = \{(x_n) : \sup_n |x_n| < \infty\}$ with $\|x\|_\infty = \sup_n |x_n|$.

### 1.2 Banach Spaces

A **Banach space** is a complete normed space (every Cauchy sequence converges).

**Theorem 1.1.** $\ell^p$ is a Banach space for $1 \leq p \leq \infty$.

**Theorem 1.2.** $L^p(\mu)$ is a Banach space for $1 \leq p \leq \infty$.

**Theorem 1.3.** $(C[a, b], \|\cdot\|_\infty)$ is a Banach space, but $(C[a, b], \|\cdot\|_1)$ is
not (it is not complete: the limit of continuous functions in $L^1$-norm may be discontinuous).

### 1.3 Finite-Dimensional Normed Spaces

**Theorem 1.4.** All norms on a finite-dimensional vector space are equivalent.

**Corollary 1.5.** Every finite-dimensional normed space is a Banach space.

**Theorem 1.6 (Riesz's Lemma).** Let $X$ be a normed space and $Y$ a proper closed subspace. For
every $0 < \theta < 1$, there exists $x \in X$ with $\|x\| = 1$ and $d(x, Y) \geq \theta$.

**Corollary 1.7.** The closed unit ball of a normed space is compact if and only if the space is
finite-dimensional.

### 1.4 Quotient Spaces

Let $X$ be a normed space and $Y \subseteq X$ a closed subspace. The **quotient space** $X / Y$
consists of equivalence classes $[x] = x + Y$ with the **quotient norm**:

$$\|[x]\|_{X/Y} = \inf_{y \in Y} \|x - y\|$$

**Theorem 1.8.** If $X$ is a Banach space and $Y$ is a closed subspace, then $X/Y$ is a Banach space.

**Proposition 1.9.** The quotient map $\pi : X \to X/Y$, $\pi(x) = [x]$, is a bounded linear operator
with $\|\pi\| = 1$.

### 1.5 Dual Spaces

The **dual space** $X^*$ of a normed space $X$ is the space of all bounded linear functionals
$f : X \to \mathbb{F}$, equipped with the operator norm:

$$\|f\| = \sup_{\|x\| \leq 1} |f(x)|$$

**Theorem 1.10.** The dual space $X^*$ is always a Banach space, regardless of whether $X$ is
complete.

**Examples of dual spaces:**
- $(\ell^p)^* \cong \ell^q$ where $1/p + 1/q = 1$ for $1 \leq p < \infty$.
- $(c_0)^* \cong \ell^1$, where $c_0$ is the space of sequences converging to $0$.
- $(L^p(\mu))^* \cong L^q(\mu)$ for $1 \leq p < \infty$ and $1/p + 1/q = 1$.

### 1.6 The Completion of a Normed Space

**Theorem 1.11.** Every normed space $X$ has a **completion**: a Banach space $\tilde{X}$ and an
isometric embedding $i : X \to \tilde{X}$ with dense image. The completion is unique up to
isometric isomorphism.

_Proof sketch._ Take the set of Cauchy sequences in $X$, modulo the equivalence relation
$(x_n) \sim (y_n)$ if $\|x_n - y_n\| \to 0$. Define $\tilde{X}$ as this set with the norm
$\|[(x_n)]\| = \lim_{n\to\infty} \|x_n\|$. The map $i(x) = [(x, x, x, \ldots)]$ is an isometric
embedding. $\blacksquare$

**Example.** The completion of $(C[a, b], \|\cdot\|_1)$ is $L^1[a, b]$.

### 1.7 Infinite-Dimensional Normed Spaces

Infinite-dimensional normed spaces have properties that contrast sharply with finite-dimensional
ones:

- The closed unit ball is not compact (Riesz's lemma).
- There exist discontinuous linear operators (requires the axiom of choice).
- Not every linear subspace is closed.
- The weak topology differs from the norm topology.

### 1.8 Hölder and Minkowski Inequalities

**Theorem 1.12 (Hölder's Inequality).** For $1 \leq p, q \leq \infty$ with $1/p + 1/q = 1$:

$$\sum_{n=1}^\infty |x_n y_n| \leq \|x\|_p \|y\|_q$$

**Theorem 1.13 (Minkowski's Inequality).** For $1 \leq p \leq \infty$:

$$\|x + y\|_p \leq \|x\|_p + \|y\|_p$$

These inequalities prove that $\ell^p$ and $L^p$ are normed spaces.

### 1.9 Practice Problems

**Problem 1.** Show that $C[a, b]$ with $\|f\|_1 = \int_a^b |f(x)|\, dx$ is not complete.

_Solution._ Consider $f_n(x) = \begin{cases} 0 & a \leq x \leq (a+b)/2 - 1/n \\ \text{linear} & \text{in the transition} \\ 1 & (a+b)/2 + 1/n \leq x \leq b \end{cases}$. This is a Cauchy sequence in $\|\cdot\|_1$ but converges to the discontinuous step function. $\blacksquare$

**Problem 2.** Prove that $\ell^p \subset \ell^q$ for $1 \leq p < q \leq \infty$.

**Problem 3.** Show that $\|x\|_\infty = \lim_{p \to \infty} \|x\|_p$ for $x \in \ell^p \cap \ell^\infty$.

**Problem 4.** Prove that the dual of $c_0$ is $\ell^1$.

### 1.10 Weak Topologies

A normed space $X$ carries the **weak topology** $\sigma(X, X^*)$, the coarsest topology making
all $f \in X^*$ continuous. A sequence converges weakly ($x_n \rightharpoonup x$) if
$f(x_n) \to f(x)$ for every $f \in X^*$.

The dual space $X^*$ carries the **weak-* topology** $\sigma(X^*, X)$, the coarsest topology
making all evaluation maps $x \mapsto f(x)$ continuous.

**Theorem 1.14 (Banach-Alaoglu).** The closed unit ball of $X^*$ is compact in the weak-*
topology.

### 1.11 Separable Normed Spaces

A normed space is **separable** if it contains a countable dense subset.

**Examples:** $\ell^p$ is separable for $1 \leq p < \infty$. $\ell^\infty$ is not separable.
$C[a, b]$ is separable (polynomials with rational coefficients are dense).

**Theorem 1.15.** If $X^*$ is separable, then $X$ is separable. The converse does not hold:
$\ell^1$ is separable but $(\ell^1)^* \cong \ell^\infty$ is not.

### 1.12 Reflexive Spaces

A Banach space $X$ is **reflexive** if the natural embedding $J : X \to X^{**}$ defined by
$J(x)(f) = f(x)$ is surjective.

**Examples:** $\ell^p$ is reflexive for $1 < p < \infty$. $\ell^1$ and $\ell^\infty$ are not
reflexive. Every finite-dimensional space is reflexive.

**Theorem 1.16.** A Banach space is reflexive if and only if its closed unit ball is weakly
compact.

**Problem 5.** Show that $c_0$ (sequences converging to 0 with sup norm) is not reflexive.

**Problem 6.** Prove that $\ell^p$ for $1 < p < \infty$ is reflexive using the fact that
$(\ell^p)^{**} \cong \ell^p$ via the natural embedding.
