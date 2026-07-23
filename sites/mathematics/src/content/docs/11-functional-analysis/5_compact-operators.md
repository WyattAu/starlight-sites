---

title: Compact Operators
tags:
  - Mathematics
  - University
description: 'A linear operator is if the image of the closed unit ball, , is relatively compa Comprehensive educational content coverage with definitions and practice proble'
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "11 Functional Analysis", "url": "https://mathematics.wyattau.com/11-functional-analysis"}, {"name": "5_compact Operators", "url": "https://mathematics.wyattau.com/11-functional-analysis/5_compact-operators"}]
}
</script>

### 5.1 Definition

A linear operator $T : X \to Y$ is **compact** if the image of the closed unit ball, $T(B_X)$, is
relatively compact (its closure is compact) in $Y$.

**Proposition 5.1.** Every compact operator is bounded. Every finite-rank operator is compact.

**Proposition 5.2.** If $T$ is compact and $S$ is bounded, then $TS$ and $ST$ are compact.

**Proposition 5.3.** If $T_n$ are compact and $T_n \to T$ in operator norm, then $T$ is compact.

### 5.2 Spectral Theory for Compact Operators

**Theorem 5.4 (Spectral Theorem for Compact Self-Adjoint Operators).** Let $T$ be a compact
self-adjoint operator on a Hilbert space $H$. Then:

1. All eigenvalues of $T$ are real.
2. Eigenvectors corresponding to distinct eigenvalues are orthogonal.
3. There exists an orthonormal basis of $H$ consisting of eigenvectors of $T$.
4. If $\{\lambda_n\}$ are the nonzero eigenvalues with orthonormal eigenvectors $\{e_n\}$, then
   $Tx = \sum_n \lambda_n \langle x, e_n\rangle e_n$.

**Corollary 5.5.** A compact self-adjoint operator on an infinite-dimensional Hilbert space has at
most countably many nonzero eigenvalues, and $0$ is the only possible accumulation point.

### 5.3 Spectral Theorem for Normal Operators

A bounded operator $T$ on a Hilbert space $H$ is **normal** if $T^*T = TT^*$, and **unitary** if
$T^*T = TT^* = I$.

**Proposition 5.6.** If $T$ is normal, then $\|Tx\| = \|T^*x\|$ for all $x \in H$.

**Proposition 5.7.** If $T$ is normal, then $\ker T = \ker T^*$ and eigenvectors corresponding to
distinct eigenvalues are orthogonal.

**Theorem 5.8 (Spectral Theorem for Normal Compact Operators).** Let $T$ be a compact normal
operator on a Hilbert space $H$. Then there exists an orthonormal basis of $H$ consisting of
eigenvectors of $T$, and the eigenvalues satisfy $|\lambda_n| \to 0$.

This generalises Theorem 5.4: self-adjoint operators are normal, and unitary operators are normal
(with eigenvalues on the unit circle in $\mathbb{C}$).

**Theorem 5.9 (Spectral Theorem for Bounded Normal Operators).** Let $T$ be a bounded normal
operator on $H$. There exists a unique projection-valued measure $E$ on the Borel subsets of
$\sigma(T) \subseteq \mathbb{C}$ such that

$$T = \int_{\sigma(T)} \lambda\, dE(\lambda)$$

This integral representation implies: if $f$ is a bounded Borel function on $\sigma(T)$, then
$f(T) = \int f(\lambda)\, dE(\lambda)$ defines a bounded normal operator satisfying the functional
calculus relations.

### 5.4 Fredholm Alternative

**Theorem 5.6 (Fredholm Alternative).** Let $T$ be a compact operator on a Banach space $X$ and
$\lambda \neq 0$. Then exactly one of the following holds:

1. $(\lambda I - T)$ is bijective (hence invertible by the bounded inverse theorem).
2. $(\lambda I - T)x = 0$ has a nontrivial solution (i.e., $\lambda$ is an eigenvalue of $T$).

### 5.5 Key Relationships

| Operator type       | Definition                        | Spectrum                          | Example                   |
| ------------------- | --------------------------------- | --------------------------------- | ------------------------- |
| Bounded             | $\|Tx\| \leq C\|x\|$              | Any compact set in $\mathbb{C}$  | Identity on $H$          |
| Compact             | $T(B_X)$ is relatively compact    | $\{0\} \cup \{\lambda_n\}$, $\lambda_n \to 0$ | Integral operator |
| Finite-rank         | $\dim T(H) < \infty$             | Finite set                        | Matrix                    |
| Self-adjoint        | $T^* = T$                         | Real                              | Schrodinger operator     |
| Normal              | $T^*T = TT^*$                     | Any compact set                   | Unitary, self-adjoint    |

## Cross-References

- **[Bounded Linear Operators](./3_bounded-linear-operators.md)**: Provides the framework of bounded linear maps between Banach spaces within which compact operators are defined.
- **[The Fundamental Theorems](./4_the-fundamental-theorems.md)**: The bounded inverse theorem and closed graph theorem are used in the Fredholm alternative for compact operators.
- **[Weak and Weak* Convergence](./6_weak-and-weak-convergence.md)**: Compact operators map weakly convergent sequences to strongly convergent sequences, linking these two modes of convergence.

- [Quantum Mechanics](https://physics.wyattau.com/docs/quantum-mechanics)
- [Graph Theory](https://computer-science.wyattau.com/docs/graph-theory)
- [Classical Mechanics](https://physics.wyattau.com/docs/classical-mechanics)
- [Electromagnetism](https://physics.wyattau.com/docs/electromagnetism)
- [Statistical Learning](https://machine-learning.wyattau.com/docs/statistical-learning)
- [Statistical Mechanics](https://physics.wyattau.com/docs/statistical-mechanics)

## Intuition

Compact operators are the infinite-dimensional analogue of finite matrices. In finite dimensions, the unit ball is compact and every bounded operator maps it to a relatively compact set. In infinite dimensions this fails, and compact operators are precisely those that restore this finite-dimensional behaviour: they squeeze the unit ball into a nearly finite-dimensional image. The spectral theorem for compact self-adjoint operators decomposes them as weighted sums of rank-one projections, with eigenvalues decaying to zero. The Fredholm alternative then says that for compact operators, solving a linear equation reduces to a finite-dimensional problem: either the homogeneous equation has only the trivial solution, or it has a finite-dimensional space of solutions.

### 5.6 Common Pitfalls

- **Assuming all bounded operators are compact.** The identity operator on an infinite-dimensional
  Hilbert space is bounded but not compact: $B_H$ is closed but not compact (since the unit ball is
  not compact in infinite dimensions).
- **Thinking finite-rank operators are the only compact operators.** The limit of finite-rank
  operators is compact, and on Hilbert spaces every compact operator is the norm limit of
  finite-rank operators. But there exist compact operators that are not themselves finite-rank.
- **Forgetting that $0$ is always in the spectrum of a compact operator on an infinite-dimensional
  space.** Even if $0$ is not an eigenvalue, it belongs to the spectrum (as an accumulation point
  of eigenvalues or as essential spectrum).
- **Confusing the Fredholm alternative with the Fredholm index.** The alternative deals with
  solvability of $(\lambda I - T)x = y$ for compact $T$. The Fredholm index
  $\text{ind}(T) = \dim\ker T - \text{codim}\ \text{ran}\ T$ applies to Fredholm operators more
  generally.

### 5.7 Worked Examples

**Problem 1.** Show that the Volterra operator $(Vf)(x) = \int_0^x f(t)\,dt$ on $C([0,1])$ is compact.

**Solution.** $V$ is bounded: $|(Vf)(x)| \leq \int_0^1 |f(t)|\,dt \leq \|f\|_\infty$. The image
$V(B_{C([0,1])})$ is equicontinuous (by the fundamental theorem of calculus, derivatives are
bounded by $\|f\|_\infty$), and uniformly bounded. By the Arzela-Ascoli theorem, it is relatively
compact in $C([0,1])$. Therefore $V$ is compact. $\blacksquare$

**Problem 2.** Let $T$ be a compact self-adjoint operator on $H$ with eigenvalues $\lambda_n \to 0$.
Show that $T$ has a maximum eigenvalue (in absolute value).

**Solution.** Since $\lambda_n \to 0$, the set $\{|\lambda_n|\}$ has a maximum (attained at some
finite index) if there are finitely many nonzero eigenvalues; otherwise, the maximum of $|\lambda_n|$
is attained at the first eigenvalue (since they converge to $0$). In either case,
$\max_n |\lambda_n| = \|T\|$ by the spectral radius formula for self-adjoint operators. $\blacksquare$

### 5.8 Applications

- **Integral equations:** Fredholm integral equations of the second kind $f - Kf = g$ are solved
  using the Fredholm alternative. Compact integral operators arise in potential theory and
  scattering.
- **Quantum mechanics:** Position and momentum operators are unbounded, but their resolvents
  $(H - z)^{-1}$ are often compact. The spectral theorem for compact operators underlies the
  solution of the Schrodinger equation for bound states.
- **Differential equations:** The inverse of a differential operator with compact resolvent (e.g.,
  $-\Delta + V$ on a bounded domain) is compact, ensuring discrete spectrum — the basis for
  Sturm-Liouville theory.
- **Signal processing:** The Karhunen-Loeve transform uses the spectral decomposition of compact
  covariance operators to find optimal bases for signal representation and compression (PCA).
