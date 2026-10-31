---
date: 2026-07-23T21:57:32+01:00
title: The Fundamental Theorems
tags:
  - University Maths
description: "Baire category, Hahn-Banach, the open mapping theorem, the closed graph theorem and uniform boundedness: full proofs of the four results that make infinite-dimensional analysis work, and why all four come from one idea."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "11 Functional Analysis", "url": "https://mathematics.wyattau.com/11-functional-analysis"}, {"name": "4_the Fundamental Theorems", "url": "https://mathematics.wyattau.com/11-functional-analysis/4_the-fundamental-theorems"}]
}
</script>

Infinite-dimensional analysis fails in ways finite-dimensional analysis does
not. A linear functional on every finite-dimensional space is automatically
continuous; on an infinite-dimensional normed space it need not be. A linear
operator between finite-dimensional spaces is automatically bounded, and on
infinite-dimensional ones it need not be. Compactness, closedness and
continuity come apart in ways that have no finite-dimensional analogue.

The four theorems in this section are the repairs. Each one says that a
plausible pathology cannot occur, provided the spaces are **complete**:

- an everywhere-defined linear functional on a Banach space is bounded;
- a surjective bounded operator between Banach spaces is open;
- an everywhere-defined linear operator between Banach spaces with a closed
  graph is bounded;
- a pointwise bounded family of bounded operators is uniformly bounded.

Completeness is not decoration. Every one of these is false on an incomplete
space, and section 4.9 shows why: the proofs all consume the same ingredient,
Baire's theorem, which is a theorem about complete metric spaces and nothing
else.

## Intuition

The shared idea is this. Completeness means a convergent Cauchy sequence lands
somewhere in the space. Baire's theorem turns that single property into: *a
complete space cannot be a countable union of thin sets.* Once you have that,
the three Baire-based theorems below all follow from the same three moves --
assume a pathology, write the space as a countable union of closed sets, invoke
Baire to find one with interior, and use the interior to bootstrap a uniform
estimate out of a pointwise one.

This is the standard "principle of uniform boundedness" pattern, and seeing it
three times in a row is the point of the section. What makes it feel like a trick
the first time and like a tool the third time is that the pointwise-to-uniform
gap is exactly what completeness closes.

## 4.1 The Baire Category Theorem

**Definition.** A subset $A$ of a topological space is **nowhere dense** if its
closure has empty interior. A space is **meagre** (or of first category) if it is
a countable union of nowhere dense sets.

**Theorem 4.1 (Baire Category Theorem).** A complete metric space is not meagre
in itself. Equivalently, if $\{F_n\}_{n \geq 1}$ are closed subsets of a
complete metric space and their interiors are dense, then
$\bigcap_n F_n$ is dense -- and in particular nonempty.

*Proof.* Let $(x_n)$ be a Cauchy sequence and suppose all $F_n$ are closed with
dense interior. Define

$$
N_0 = \emptyset, \qquad N_n = \{x : d(x, \{x_1, \dots, x_{n-1}\}) \leq 2^{-n}\}.
$$

Each $N_n$ is closed, and $N_n$ has empty interior: $N_{n-1}^\circ$ is dense and
disjoint from $N_n$, because a point of $N_n$ is within $2^{-n}$ of some
$x_{n-1}$, so a small ball about any point of $N_{n-1}^\circ$ avoids $N_n$. Hence
$N_n$ is nowhere dense.

Since $X$ is complete and not meagre, $X \neq \bigcup_n N_n$, so there is
$y \in X \setminus \bigcup_n N_n$. As $y \notin N_1$ there is $x_1 \in F_1$ with
$d(y, x_1) < 1/2$. Having $x_1, \dots, x_{n-1}$ with $d(x_{n-1}, y) < 2^{-(n-1)}$
and $y \notin N_n$, there is $x_n \in F_n$ with $d(x_n, y) < 2^{-n}$. So
$(x_n)$ is Cauchy and lies in $F_n$ for all $n$.

For each $n$, $F_n$ is closed and contains all $x_m$ for $m \geq n$, so
$F_n \ni \lim_{m\to\infty} x_m = y$. Completeness is used precisely here, and
nowhere else. Hence $y \in \bigcap_n F_n$. $\blacksquare$

That completeness is load-bearing is not a rhetorical point: an incomplete metric
space *can* be meagre in itself. $\mathbb{Q} \subset \mathbb{R}$ is a countable
union of singletons, each nowhere dense. So Baire fails, and with it the open
mapping theorem. This is why "Banach" appears in every hypothesis below.

## 4.2 Hahn-Banach

**Theorem 4.2 (Hahn-Banach, analytic form).** Let $X$ be a real vector space and
$p : X \to \mathbb{R}$ sublinear, meaning $p(x+y) \leq p(x) + p(y)$ and
$p(tx) = tp(x)$ for $t \geq 0$. Let $M \leq X$ be a subspace and
$f : M \to \mathbb{R}$ linear with $f(m) \leq p(m)$ for all $m \in M$. Then there
is a linear $F : X \to \mathbb{R}$ with $F|_M = f$ and $F(x) \leq p(x)$ for all
$x \in X$.

*Proof (one-dimensional extension, then Zorn).* Given $x_0 \notin M$, we seek
$\alpha \in \mathbb{R}$ so that $F(m + \lambda x_0) = f(m) + \lambda\alpha$ stays
below $p$ on all of $M + \mathbb{R}x_0$. The constraint
$f(m) + \lambda\alpha \leq p(m + \lambda x_0)$ must hold for every $m \in M$ and
every $\lambda \in \mathbb{R}$, so

$$
\lambda > 0:\quad \alpha \leq \frac{p(m + \lambda x_0) - f(m)}{\lambda},
\qquad
\lambda < 0:\quad \alpha \geq \frac{p(m + \lambda x_0) - f(m)}{\lambda},
$$

the inequality flipping when dividing by a negative number. Hence we need
$\alpha \in [a, b]$ where

$$
a = \sup_{\substack{m \in M \\ \lambda < 0}} \frac{p(m + \lambda x_0) - f(m)}{\lambda},
\qquad
b = \inf_{\substack{m \in M \\ \lambda > 0}} \frac{p(m + \lambda x_0) - f(m)}{\lambda}.
$$

Sublinearity gives $a \leq b$. To see it, fix $\lambda > 0$ and write
$\lambda = \lambda' + \lambda''$ with $\lambda', \lambda'' > 0$. By sublinearity of
$p$ and linearity of $f$,

$$
f(\lambda'' x_0) = f(m + \lambda x_0) - f(m + \lambda' x_0) + f(m)
\leq p(m + \lambda x_0) - f(m + \lambda' x_0) + f(m).
$$

Dividing by $\lambda'' > 0$, the $\lambda''$-quotient is at most $b$ by definition,
and the $\lambda'$-quotient is at least $a$. Since $a \leq \frac{p(m+\lambda x_0) - f(m)}{\lambda} - \frac{f(m+\lambda'x_0)-f(m)}{\lambda''}$
and the right-hand term is at most $b$, we get $a \leq b$. Choose
$\alpha \in [a,b]$; then $F$ on $M + \mathbb{R}x_0$ is linear and bounded above by
$p$.

Order the set of pairs $(N, F)$ where $N$ is a subspace with $M \leq N \leq X$ and
$F$ is linear on $N$ with $F|_M = f$ and $F \leq p$ on $N$, ordered by extension.
This set is inductive by the one-dimensional step. By Zorn there is a maximal
element $(N, F)$. If $N \neq X$, pick $x_0 \in X \setminus N$; the one-dimensional
step produces a strictly larger element, a contradiction. So $N = X$. $\blacksquare$

**Theorem 4.3 (Hahn-Banach, normed form).** If $M \leq X$ is a subspace of a
normed space and $f \in M^*$, then $f$ extends to $F \in X^*$ with
$\|F\| = \|f\|$.

*Proof.* Apply 4.2 with $p(x) = \|f\|\,\|x\|$. Then $f(m) \leq |f(m)| \leq \|f\|\,\|m\| = p(m)$, so the hypothesis holds, and we get $F \leq p$. Applying the
same to $-f$ gives $-F \leq p$, so $|F(x)| \leq p(x) = \|f\|\,\|x\|$, i.e.
$\|F\| \leq \|f\|$. Since $F$ extends $f$, $\|f\| \leq \|F\|$, hence
$\|F\| = \|f\|$. $\blacksquare$

**Corollary 4.4 (separating functionals).** For $x_0 \neq 0$ there is
$\varphi \in X^*$ with $\|\varphi\| = 1$ and $\varphi(x_0) = \|x_0\|$.

*Proof.* Let $M = \mathbb{R}x_0$ and $f(\lambda x_0) = \lambda\|x_0\|$. Then
$f \leq \|\cdot\|$ on $M$ and $\|f\| = 1$; extend. $\blacksquare$

**Consequence.** $X^*$ separates points, so $\{0\}$ is the only vector annihilated
by every $\varphi \in X^*$. Equivalently, the canonical embedding
$J : X \to X^{**}$, $Jx(\varphi) = \varphi(x)$, is injective. Recall from
[Bounded Linear Operators](/11-functional-analysis/3_bounded-linear-operators/)
that $J$ is an isometry, so it is also a homeomorphism onto its image. For a
Hilbert space $J$ is *onto* -- that is the Riesz representation theorem. For a
general Banach space it is onto only for **reflexive** spaces, and the Hahn-Banach
corollary is exactly the "one half" that always holds.

### Banach limits

Hahn-Banach builds the objects the theory needs. On $\ell^\infty$ consider

$$
L = \lim_{n \to \sup} s_n, \qquad s_n = x_1 + \dots + x_n
$$

where $\lim_{n\to\sup}$ means $\limsup$. This is bounded: $|s_n| \leq n\|x\|_\infty$,
and $|L| \leq \limsup |s_n|$ is finite but not $\leq \|x\|_\infty$, so $L$ does not
yet dominate $\|\cdot\|_\infty$ and Hahn-Banach cannot be applied directly to it.

The fix is to define the *limiting set* $A = \{y : y_1 \geq 0,\ y_{n+1} \geq y_n - 1, \ \liminf (y_1 + \dots + y_n) \geq 0\}$ in a larger space, show $A$ is convex and
does not absorb $n$, and apply Hahn-Banach to obtain $\varphi$ dominated by
$\|\cdot\|_\infty$ and dominating $L$. Then
$\mathrm{LIM}(x) = \varphi(L(x))$ extends the ordinary limit, is linear,
satisfies $\mathrm{LIM}(x) = \mathrm{LIM}(Sx)$ for the shift $S$, and is positive.
Such an object cannot be a multiple of the usual limit: it agrees with the limit
on convergent sequences yet is non-zero on others, which is possible precisely
because $\ell^\infty$ has no continuous extension of the limit functional. That
non-uniqueness is the phenomenon Banach limits were invented to exhibit.

## 4.3 The Open Mapping Theorem

**Theorem 4.5 (Open Mapping, surjective form).** Let $X, Y$ be Banach spaces and
$T \in \mathcal{B}(X, Y)$ surjective. Then there is $C > 0$ with

$$
B_Y(0, 1) \subseteq T(B_X(0, C))
$$

**Theorem 4.6 (Open Mapping).** Under the same hypotheses $T$ maps open sets to
open sets.

*Proof.* Set $Y_n = \overline{T(B_X(0, 1/n))}$ for $n \geq 1$. Surjectivity gives
$Y = T(X) \subseteq \bigcup_n Y_n$.

Each $Y_n$ is closed: if $y_k \to y$ with $y_k \in Y_n$ and $y_k = \lim_j T(x_{k,j})$
for $x_{k,j} \in B_X(0, 1/n)$, then $(x_{k,j})_{j}$ is Cauchy, so $X$ being complete
gives $x_{k,j} \to x_k$ with $\|x_k\| \leq 1/n$ and $T(x_k) = y_k$. Hence
$x_k \to x$ with $x \in \overline{B_X(0,1/n)}$ and $Tx = y$, so $y \in Y_n$.

By Baire, some $Y_n$ has nonempty interior: $Y_m - Y_m \subseteq Y_{2m}$, so
$Y_n - Y_n$ contains $Y_n - y_0$ for $y_0 \in Y_n^\circ$, and $Y_n - y_0$ contains a
ball $B_Y(y_0, \delta)$ with $y_0 \in Y_n$. Thus $B_Y(0, \delta) \subseteq Y_n - Y_n \subseteq Y_{2n}$.

Write $u = a - b$ with $a, b \in Y_{2n}$, so
$\|a\|, \|b\| \leq 1/(2n)$ and $a - b = Tx$ for some $x \in B_X(0, 1/n)$. Given
$y$ with $\|y\| < \delta/2^{k}$ for some $k$, choose $a_1, b_1 \in Y_{4n}$ with
$y = a_1 - b_1$ and $\|a_1\|, \|b_1\| < 1/(4n)$, so $y = Tx_1$ with
$\|x_1\| < 1/(2n)$. Then $y/2 = (a_1 - b_1)/2$, and

$$
\frac{y}{2} = \Big(a_1 - \frac{a_1}{2}\Big) + \Big(\frac{a_1}{2} - b_1\Big)
= Tx_2 + Tx_3
$$

with $a_1 - a_1/2 = a_1/2 \in Y_{4n} \subseteq Y_{2n}$ and
$a_1/2 - b_1 = (a_1 - 2b_1)/2 \in Y_{2n}$ because $a_1 \in Y_{4n} \subseteq Y_{2n}$
and $2b_1 \in Y_{2n}$, so $a_1 - 2b_1 \in Y_{2n}$. Thus $y/2 = Tx'$ with
$\|x'\| < 1/n$. Applying this $k$ times, $y = Tx$ with $\|x\| < 2^k/n$.

Since $\|y\| < \delta/2^k$ and $\|x\| < 2^k/n$, we get $\|x\| < 2\delta^{-1}\|y\|$.
Taking $C = 2/\delta$ gives $B_Y(0,1) \subseteq T(B_X(0, C))$. This is 4.5.

For 4.6, let $U \subseteq X$ be open and $u_0 \in U$. With $r = d(u_0, X \setminus U) > 0$,
$u_0 + B_X(0, r) \subseteq U$, so $T(u_0) + T(B_X(0, r)) \subseteq T(U)$. For $C$ as
above, $B_Y(0, r/C) \subseteq T(B_X(0, r))$, so $T(U)$ contains a ball about
$T(u_0)$, i.e. $T(U)$ is open. $\blacksquare$

**Corollary 4.7 (Bounded Inverse).** If $T \in \mathcal{B}(X, Y)$ is bijective and
$X, Y$ are Banach, then $T^{-1} \in \mathcal{B}(Y, X)$.

*Proof.* By 4.6, $T$ is open. So $T^{-1}$ is continuous at $0$, hence everywhere;
and linear. Its norm is $\|T^{-1}\| = \sup_{\|y\| \leq 1}\|T^{-1}y\| \leq C < \infty$. $\blacksquare$

### Equivalent norms, correctly stated

**Theorem 4.8.** Let $X$ be a vector space that is Banach under **both** norms
$\|\cdot\|_1$ and $\|\cdot\|_2$. Suppose for some $C > 0$,
$\|x\|_1 \leq C\|x\|_2$ for all $x \in X$. Then $\|x\|_2 \leq C'\|x\|_1$ for some
$C' > 0$; the norms are equivalent.

*Proof.* Let $I : (X, \|\cdot\|_2) \to (X, \|\cdot\|_1)$ be the identity. It is
linear and bijective, and $\|Ix\|_1 \leq C\|Ix\|_2$, so $I \in \mathcal{B}(X_2, X_1)$.
Both spaces are Banach, so 4.7 gives $I^{-1} \in \mathcal{B}(X_1, X_2)$ with
$\|I^{-1}\| = C' < \infty$. Then $\|x\|_2 \leq C'\|x\|_1$. $\blacksquare$

The completeness hypothesis on *both* norms is essential, and it is easy to
misread the theorem as saying that one domination suffices. It does not. If $X$
is complete under only $\|\cdot\|_1$, one inequality gives a continuous
bijection whose inverse may be discontinuous -- the canonical embedding of $c_0$
into $\ell^\infty$, or the identity from $\ell^1$ to $c_0$, are the standard
examples. Equivalence requires both directions, and it is completeness that
produces the second one.

## 4.4 The Closed Graph Theorem

**Theorem 4.9 (Closed Graph).** Let $X, Y$ be Banach spaces and $T : X \to Y$
linear (no boundedness assumed). Then $T$ is bounded if and only if its graph
$\Gamma(T) = \{(x, Tx)\}$ is closed in $X \times Y$.

*Proof ($\Rightarrow$).* A continuous map has closed graph when the codomain is
Hausdorff: if $(x_n, Tx_n) \to (x, y)$ then $Tx_n \to Tx$ by continuity and also
$\to y$, so $y = Tx$.

($\Leftarrow$) Suppose $\Gamma(T)$ is closed. The naive route -- restricting $T$ to
$\{x : Tx \in \overline{B_Y(0,1)}\}$ and recursing -- is circular, because the
recursive instance is a closed graph theorem in its own right. The way out is to
make the restricted domain complete.

Let $X_0 = \{x \in X : Tx \in \overline{B_Y(0,1)}\}$, a subspace, and let
$\overline{X_0}$ be its closure in $X$ (so $\overline{X_0}$ is Banach). Define
$\hat{T} : \overline{X_0} \to Y$ on the closure by $x_k \to x \in \overline{X_0}$
implies $\hat{T}x = \lim Tx_k$. This limit exists: $Tx_k$ is Cauchy in $Y$, and $Y$
is complete; and it is independent of the approximating sequence, since if
$x_k \to x$ and $y_k \to x$ then $(x_k - y_k) \to 0$, so $T(x_k - y_k) \to 0$ by
continuity of $T$, and $\lim Tx_k = \lim Ty_k$. So $\hat{T}$ is well defined and
continuous, and it extends $T$ on $X_0$. It is surjective, because $T$ is
surjective and every $y \in Y$ has $Tx = y$ for some $x$, hence $y \in T(\overline{X_0})$.

Both $\overline{X_0}$ and $Y$ are Banach, so 4.5 gives $C$ with
$B_Y(0,1) \subseteq \hat{T}(B_{\overline{X_0}}(0, C))$. Since
$B_X(0, C) \subseteq B_{\overline{X_0}}(0, C)$, we get $B_Y(0,1) \subseteq T(B_X(0, C))$ and therefore $\|Tx\| \leq C\|x\|$ for $x \in X_0$.

Finally, $X = \bigcup_{n\geq 1} nX_0$: for any $x \in X$ take $n > 1/\|x\|$, so
$x/n \in B_X(0,1) \subseteq X_0$ and $x \in nX_0$. A vector space cannot be a
finite union of proper subspaces -- pick the largest index $n$ with $nX_0 \neq X$
and a point outside it, and it lies in none of the others -- so $X_0 = X$. Hence
$\|Tx\| \leq C\|x\|$ on all of $X$. $\blacksquare$

**Theorem 4.10 (Closed Range).** For $T \in \mathcal{B}(X, Y)$ with $X, Y$
Banach, these are equivalent: (i) $R(T)$ is closed in $Y$; (ii) $R(T^*)$ is closed
in $X^*$; (iii) there is $c>0$ such that every $y \in R(T)$ has $x$ with $Tx = y$
and $\|x\| \leq c\|y\|$.

*Proof sketch.* (iii) $\Rightarrow$ (i) is immediate from the estimate. For
(i) $\Rightarrow$ (iii), $T$ is open onto $R(T)$, giving (iii) with the norm of
$R(T)$; for (ii) $\Rightarrow$ (i), apply the open mapping theorem to $T^*$
between $X^*$ and $R(T^*)^\perp$ and use $\overline{R(T^*)} = (T(X))^\perp$. $\blacksquare$

## 4.5 The Uniform Boundedness Principle

**Theorem 4.11 (Banach-Steinhaus).** Let $X$ be a Banach space, $Y$ a normed
space, and $\{T_\alpha\}_{\alpha \in A} \subseteq \mathcal{B}(X, Y)$ with
$\sup_\alpha \|T_\alpha x\| < \infty$ for each $x \in X$. Then
$\sup_\alpha \|T_\alpha\| < \infty$.

*Proof.* Let $E_n = \{x \in X : \sup_\alpha \|T_\alpha x\| \leq n\}$. By hypothesis
$X = \bigcup_{n\geq1} E_n$. Each $E_n$ is closed: if $x_k \to x$ with $x_k \in E_n$
then $T_\alpha x_k \to T_\alpha x$ for each $\alpha$, so $\|T_\alpha x\| \leq n$.

By Baire, some $E_n$ has nonempty interior, so $B_X(x_0, r) \subseteq E_n$ for
some $x_0$ and $r > 0$. Given $x \in B_X(0, r)$, both $x_0 + x$ and $x_0$ lie in
$E_n$, so by linearity

$$
\|T_\alpha x\| = \|T_\alpha(x_0 + x) - T_\alpha x_0\| \leq n + n = 2n
$$

for every $\alpha$. Rescaling, $\|T_\alpha\| \leq \frac{2n}{r}$. $\blacksquare$

This is the Baire pattern in its purest form, and it is worth being explicit about
where each hypothesis is used. Pointwise boundedness gives the cover
$X = \bigcup_n E_n$; linearity makes each $E_n$ closed; completeness gives Baire;
Baire gives an interior point; and the interior is what turns a bound that may
depend on $x$ into one that does not.

**Corollary 4.12 (Resonance Theorem).** If $\{T_n\} \subseteq \mathcal{B}(X, Y)$
and $\lim_n T_n x$ exists for every $x \in X$, then $T x = \lim_n T_n x$ defines
$T \in \mathcal{B}(X, Y)$.

*Proof.* A convergent sequence is bounded, so $\sup_n \|T_n x\| < \infty$ for each
$x$, and 4.11 applies to give $\sup_n \|T_n\| = C$. Then $T$ is linear (interchange
limits and finite sums) and

$$
\|Tx - T_n x\| = \lim_{m\to\infty} \|T_m x - T_n x\| \leq \limsup_{m\to\infty} 2C\|x\| = 0,
$$

so $\|Tx\| \leq C\|x\|$, i.e. $T \in \mathcal{B}(X,Y)$. $\blacksquare$

### Applications

**Fourier series diverge for some continuous functions.** Let
$S_n f$ be the $n$-th partial sum operator on $C[-\pi,\pi]$. If every continuous
$f$ had $\|S_n f\|_\infty$ bounded for each fixed $f$, 4.11 would give
$\sup_n \|S_n\| < \infty$. But $S_n f = \frac{1}{2\pi}\int_{-\pi}^{\pi} f(t) D_n(t)\,dt$
with $D_n(t) = \sum_{k=-n}^n e^{ikt}$, so

$$
\|S_n\| = \frac{1}{2\pi}\int_{-\pi}^{\pi}|D_n(t)|\,dt \sim \frac{2}{\pi}\log n \to \infty.
$$

So $\sup_n \|S_n\| = \infty$, and by contraposition some $f \in C[-\pi,\pi]$ has
$\sup_n \|S_n f\|_\infty = \infty$: a continuous function whose Fourier series
diverges. This is the classical existence proof, and it is worth noticing what it
needed -- no explicit bad function, only the failure of a uniform bound that the
theorem makes unavoidable.

**Weakly bounded implies norm bounded.** For a single family,
$\sup_\alpha |\langle T_\alpha x, y\rangle| < \infty$ for all $x, y$ implies
$\sup_\alpha \|T_\alpha\| < \infty$. Weak convergence is weaker than norm
convergence at the level of sequences, but for *families* the two notions of
boundedness coincide on a Banach domain. That contrast is the content of
[Weak and Weak* Convergence](/11-functional-analysis/6_weak-and-weak-convergence/).

**Higher derivatives are unbounded, and nowhere-differentiable functions are
generic.** Let $D^n : C^1[0,1] \to C[0,1]$, $D^n f = f^{(n)}$. With the norm
$\|f\|_\infty$ on $C^1[0,1]$, each $D^n$ is unbounded: take
$f(x) = x^n / n!$, so $\|f\|_\infty = 1/n!$ while $\|D^n f\|_\infty = 1$. The
operator norms blow up like $n!$. This is a fact about the *domain*, not the
operator -- on $C^1$ with $\|f\|_\infty + \|f'\|_\infty$, $D$ is bounded with
norm $1$. Which norm you equip a space with is part of specifying an operator.

The same Baire argument that proves uniform boundedness produces the classical
consequence. Let $E_n$ be the set of continuous $f$ that are not differentiable
on any interval of length $> 1/n$. Each $E_n$ is closed, and each is dense: a
polynomial plus a small multiple of the Weierstrass nowhere-differentiable
function stays inside $E_n$ while being arbitrarily close to the polynomial. Baire
gives $\bigcap_n E_n$ dense, so nowhere-differentiable continuous functions are
residual -- generic, not exotic.

## 4.6 How the Four Theorems Relate

They are not four independent facts.

- **Hahn-Banach is the odd one out:** it needs no Baire and no completeness.
  Its content is that $X^*$ is large enough to separate points.
- **Open mapping, closed graph and uniform boundedness are all Baire**, and all
  three share the skeleton: write the space as a countable union of closed sets
  indexed by a bound, let Baire select a set with interior, and use the interior
  to upgrade a pointwise estimate to a uniform one.
- **Closed graph is derived from open mapping** in 4.4, by completing the domain
  and then showing the domain was already everything.
- **Hahn-Banach + the open mapping theorem give the closed range theorem**, and
  Hahn-Banach + reflexivity give the Riesz representation theorem.

The one-line summary: **completeness plus Baire is what stops a pointwise
statement from being a uniform one, and the three Baire-based theorems are three
faces of that single fact.**

## 4.7 Applications in Partial Differential Equations

**Weak solutions of the Dirichlet problem.** Let $\Omega$ be bounded. The operator
$A : H^1_0(\Omega) \to H^{-1}(\Omega)$, $Au = -\Delta u$ with zero trace, is
bounded, and the form $a(u, v) = \int_\Omega \nabla u \cdot \nabla v$ is continuous
and coercive on $H^1_0(\Omega)$:

$$
a(v, v) = \|\nabla v\|_2^2 \geq \lambda \|v\|_2^2
$$

with $\lambda > 0$ by Poincare. The Lax-Milgram lemma -- which is Hahn-Banach for
coercivity plus the Hilbert-space geometry -- gives a unique $u \in H^1_0(\Omega)$
with $a(u,v) = \langle f, v\rangle$ for every $v$. Existence, uniqueness and
continuous dependence on $f$ all come from the functional-analytic theorems, not
from regularity estimates on $\Delta$.

**Neumann series.** If $T \in \mathcal{B}(X)$ with $\|T\| < 1$, then $I - T$ is
invertible with

$$
(I-T)^{-1} = \sum_{n=0}^{\infty} T^n,
$$

because the series converges in operator norm (so $\|S - T^n S\| \to 0$ by
comparing geometric series) and $I - T$ is injective: $(I-T)x = 0$ gives
$x = Tx$, so $\|x\| \leq \|T\|\|x\| < \|x\|$ unless $x = 0$; surjectivity then
follows from 4.7. This is the resolvent of a bounded operator off the closed unit
disc, and it is what makes spectral theory for bounded operators work.

**Compactness of the embedding.** In finite dimensions every bounded set is
compact. The failure of that in infinite dimensions -- the unit ball of
$\ell^2$ has no convergent subsequence -- is what makes compactness arguments,
and hence the Arzela-Ascoli and Rellich-Kondrachov theorems, carry real content
here. The repairs are exactly the theorems above: a weakly convergent sequence
that is bounded has a weakly convergent subsequence in a separable reflexive
space, and the boundedness comes from uniform boundedness applied to the
evaluation functionals.

## 4.8 Practice Problems

**Problem 1.** Let $M$ be a closed subspace of a Hilbert space $H$. Show that
$H = M \oplus M^\perp$ and that $P x = x - P_{M^\perp} x$ is the orthogonal
projection, with $\|P\| = 1$ if $M \neq \{0\}$.

**Problem 2.** Show that $T^{-1}$ is bounded whenever $T$ is a bijective bounded
operator between Banach spaces. Do not cite the open mapping theorem; prove it,
and identify where completeness of *both* spaces is used.

**Problem 3.** Let $f_n \in X^*$ and suppose $\lim_n f_n(x)$ exists for every
$x \in X$. Show the limit functional is bounded. Which theorem applies, and what
would fail if $X$ were only a normed space?

**Problem 4.** Show the differentiation operator $D : C^1[0,1] \to C[0,1]$, $Df = f'$
is unbounded when $C^1[0,1]$ carries $\|\cdot\|_\infty$, and bounded when it
carries $\|f\|_\infty + \|f'\|_\infty$. What does this say about why a domain is
part of an operator's definition?

**Problem 5.** Prove that if $T \in \mathcal{B}(X, X)$ with $\|T\| < 1$ then $I - T$
is invertible, constructing the inverse explicitly.

**Problem 6.** Show the closed graph theorem follows from the open mapping
theorem and the bounded inverse theorem.

**Problem 7.** Prove that if $T : X \to Y$ is linear between Banach spaces and
$x_n \to 0$ with $Tx_n \to y$ forces $y = 0$, then $T$ is bounded.

**Problem 8 (important).** Someone claims: "for any closed subspace $M$ of a
Banach space $X$, the quotient map $\pi : X \to X/M$ has an isometric right
inverse." Find the flaw. The claim *is* true when $X$ is a Hilbert space (Problem
1), so the argument is to identify exactly which step uses Hilbert structure, and
then to give an example of a Banach space with a closed subspace admitting no
complement at all.

## Key Relationships

- **All three Baire-based theorems are one theorem applied three times**, each following the pattern: assume a pathology, cover the space by level sets of a bound, get interior from Baire, upgrade pointwise to uniform.
- **Completeness is necessary and not decorative.** $\mathbb{Q}$ is meagre in itself, so Baire fails there and so does the open mapping theorem.
- **Hahn-Banach needs neither** Baire nor completeness, and is the only one of the four that holds on a bare vector space with a sublinear gauge.
- **Closed graph follows from open mapping** by completing the domain, then showing the domain was everything.
- **A bijective bounded operator between Banach spaces has a bounded inverse.** Drop completeness on either side and this fails, which is the standard way to exhibit incomplete spaces.
- **One norm dominating another is not equivalence** unless both norms make the space Banach.

## Common Pitfalls

- **Confusing Hahn-Banach with the open mapping theorem.** Hahn-Banach extends
  functionals from subspaces while preserving the norm; the open mapping theorem
  is about surjectivity of operators and openness of images. Extension versus
  mapping. Substituting one for the other is the most common confusion in the
  subject.
- **Applying the open mapping theorem without checking hypotheses.** Both spaces
  must be Banach and $T$ must be surjective. The identity from an incomplete
  normed space to its completion is bijective and continuous but not open.
- **Reading uniform boundedness as pointwise boundedness.** UBP's hypothesis is
  $\sup_\alpha \|T_\alpha x\| < \infty$ for *each* $x$, with the bound allowed to
  depend on $x$; the conclusion is a bound independent of $x$. That gap is the
  content of the theorem, and it needs $X$ Banach.
- **Assuming one norm inequality gives equivalence.** It gives continuity in one
  direction only. Equivalence needs both, and completeness is what manufactures
  the second from the first.
- **Claiming every closed subspace of a Banach space has a complement.** True for
  Hilbert spaces via orthogonal complements; false in general. See Problem 8.
- **Proving the closed graph theorem by recursion on the graph.** It is circular:
  the recursive step needs the theorem. Complete the domain and use openness, then
  argue the domain was everything.
- **Believing completeness is technical.** Every Baire-based theorem above is
  false on an incomplete space. $\mathbb{Q}$ shows the mechanism in one line.

## Cross-References

- **[Normed Spaces and Banach Spaces](/11-functional-analysis/1_normed-spaces-and-banach-spaces/)** -- completeness, and the fact that finite-dimensional spaces are automatically complete.
- **[Bounded Linear Operators](/11-functional-analysis/3_bounded-linear-operators/)** -- $\mathcal{B}(X,Y)$, operator norm, and the unbounded operators these theorems exclude.
- **[Compact Operators](/11-functional-analysis/5_compact-operators/)** -- the Fredholm alternative, which uses the bounded inverse theorem.
- **[Weak and Weak* Convergence](/11-functional-analysis/6_weak-and-weak-convergence/)** -- Banach-Alaoglu, a weak*-compactness statement, and the weak/norm boundedness contrast from uniform boundedness.
- **[Sequences and Limits](/3-real-analysis/2_sequences-and-limits/)** -- Cauchy sequences and completeness.
- **[Homomorphisms and Isomorphism Theorems](/1-abstract-algebra/5_homomorphisms-and-isomorphism-theorems/)** -- quotients, which is what $X/M$ in Problem 8 is.
- [Classical Mechanics](https://physics.wyattau.com/1-classical-mechanics/)
