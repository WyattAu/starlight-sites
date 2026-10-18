---

date: 2026-07-23T21:57:32+01:00
title: "Weak and Weak* Convergence"
tags:
  - Mathematics
  - University
description: "A sequence in a normed space to (written Comprehensive educational content coverage with definitions, worked examples, and practice problems."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "11 Functional Analysis", "url": "https://mathematics.wyattau.com/11-functional-analysis"}, {"name": "6_weak And Weak Convergence", "url": "https://mathematics.wyattau.com/11-functional-analysis/6_weak-and-weak-convergence"}]
}
</script>

### 6.1 Weak Convergence

A sequence $\{x_n\}$ in a normed space $X$ **converges weakly** to $x$ (written
$x_n \rightharpoonup x$) if $\varphi(x_n) \to \varphi(x)$ for every $\varphi \in X^*$.

**Proposition 6.1.** If $x_n \to x$ in norm, then $x_n \rightharpoonup x$ (strong convergence
implies weak convergence).

**Proposition 6.2.** If $x_n \rightharpoonup x$ is weakly convergent, then
$\sup_n \|x_n\| < \infty$.

**Theorem 6.3.** In a Hilbert space $H$, $x_n \rightharpoonup x$ if and only if
$\langle x_n, y\rangle \to \langle x, y\rangle$ for every $y \in H$.

### 6.2 Weak\* Convergence

A sequence $\{\varphi_n\} \subseteq X^*$ **converges weak\*** to $\varphi$ (written
$\varphi_n \overset{w^*}{\to} \varphi$) if $\varphi_n(x) \to \varphi(x)$ for every $x \in X$.

**Theorem 6.4 (Banach-Alaoglu).** The closed unit ball of $X^*$ is weak\*-compact.

### 6.3 Weak Convergence in Specific Spaces

**Theorem 6.5.** In $\ell^p$ ($1 < p < \infty$), $x_n \rightharpoonup x$ if and only if $x_n$ is
bounded and $x_n(i) \to x(i)$ for each coordinate $i$.

**Example.** In $\ell^2$, the standard basis vectors $e_n$ converge weakly to $0$ but not in norm:
$\|e_n\| = 1$ for all $n$, but $\langle e_n, y\rangle = y_n \to 0$ for every $y \in \ell^2$.

### 6.4 Relationships Between Convergence Types

**Proposition 6.6 (Weak vs. Weak\*).** In a normed space $X$:

- If $X$ is reflexive, then weak and weak\* convergence on $X^*$ coincide.
- For non-reflexive spaces, weak convergence on $X^*$ implies weak\* convergence, but the converse fails.

**Proposition 6.7 (Uniqueness of Limits).** Weak limits and weak\* limits are unique when they exist.

**Proposition 6.8 (Weak Convergence in $L^p$).** For $1 \leq p < \infty$, a sequence $f_n \rightharpoonup f$
in $L^p(\mu)$ if and only if $\int f_n g\, d\mu \to \int f g\, d\mu$ for every $g \in L^q(\mu)$,
where $1/p + 1/q = 1$. For $p = \infty$, weak\* convergence is often more useful: $f_n \overset{w^*}{\to} f$
in $L^\infty$ if $\int f_n g \to \int f g$ for every $g \in L^1$.

### 6.5 Mazur's Lemma

**Lemma 6.9 (Mazur).** Let $X$ be a normed space and $x_n \rightharpoonup x$. Then there exists a
sequence of convex combinations $y_n = \sum_{k=n}^{N_n} \lambda_k x_k$ (with $\lambda_k \geq 0$,
$\sum \lambda_k = 1$) such that $y_n \to x$ in norm.

**Corollary 6.10.** If $C \subseteq X$ is convex, then $C$ is weakly closed if and only if it is
strongly closed.

**Corollary 6.11.** If $x_n \rightharpoonup x$, then $\|x\| \leq \liminf_{n\to\infty} \|x_n\|$.
This is the weak lower semicontinuity of the norm.

### 6.6 Weak Sequential Compactness

**Theorem 6.12 (Eberlein-Smulian).** In a Banach space, a set is weakly compact if and only if it
is weakly sequentially compact. That is, $A \subseteq X$ is weakly compact iff every sequence in $A$
has a weakly convergent subsequence with limit in $A$.

**Theorem 6.13 (Kakutani).** A Banach space $X$ is reflexive if and only if the closed unit ball
$B_X$ is weakly compact (equivalently, weakly sequentially compact).

**Corollary 6.14.** In a reflexive Banach space, every bounded sequence has a weakly convergent
subsequence.

**Example.** $L^p(\mu)$ for $1 < p < \infty$ is reflexive, so every bounded sequence in $L^p$ has a
weakly convergent subsequence. $L^1(\mu)$ is not reflexive: the sequence $f_n = n\chi_{[0,1/n]}$ on
$[0,1]$ is bounded in $L^1$ but has no weakly convergent subsequence.

### 6.7 Weak Convergence and Operators

**Proposition 6.15.** If $T : X \to Y$ is a bounded linear operator and $x_n \rightharpoonup x$ in
$X$, then $T x_n \rightharpoonup T x$ in $Y$. That is, bounded linear operators are weakly continuous.

**Proposition 6.16.** If $T : X \to Y$ is a compact operator and $x_n \rightharpoonup x$ in $X$,
then $T x_n \to T x$ in norm. Compact operators map weakly convergent sequences to strongly
convergent sequences.

**Example.** In $L^2([0,1])$, the integral operator $(Tf)(x) = \int_0^1 K(x, y) f(y)\, dy$ with
$K \in L^2([0,1]^2)$ is compact. If $f_n \rightharpoonup f$, then $T f_n \to T f$ in $L^2$.

#**Example.** In $L^2([0,1])$, the integral operator $(Tf)(x) = \int_0^1 K(x, y) f(y)\, dy$ with
$K \in L^2([0,1]^2)$ is compact. If $f_n \rightharpoonup f$, then $T f_n \to T f$ in $L^2$.

## Proofs

The four results this page needs proved are the ones its applications rest on:
the lower semicontinuity of the norm, Mazur's lemma, the $\ell^p$ criterion and
the compact-operator upgrade. Banach–Alaoglu's proof is structured but uses
Tychonoff, and the page says so rather than hiding it.

**Proposition 6.2 (weakly convergent sequences are bounded).** If
$x_n \rightharpoonup x$, then $\sup_n \|x_n\| < \infty$.

*Proof.* For each $n$, $\varphi(x_n) \to \varphi(x)$ for every
$\varphi \in X^*$, so $\sup_n |\varphi(x_n)| < \infty$ for each *fixed*
$\varphi$. The family $\{x_n\} \subseteq X \subseteq X^{**}$ is therefore
pointwise bounded as a family of functionals on $X^*$, and
[the uniform boundedness principle](/11-functional-analysis/4_the-fundamental-theorems/)
— page 4's Theorem 4.11, with $X^*$ in the role of the complete space — gives
$\sup_n \|x_n\| = \sup_n \|(x_n)^{**}\| < \infty$. $\blacksquare$

Note the proof's direction: weak convergence is convergence in the weak*
topology of the canonical image of $X$ in $X^{**}$, and Banach–Steinhaus needs
the *domain* complete — which $X^*$ is. The application of the theorem to $X$
itself is the interesting twist, and it is why completeness of $X$ is not needed
for this proposition.

**Corollary 6.11 (weak lower semicontinuity of the norm).** If
$x_n \rightharpoonup x$ then $\|x\| \leq \liminf_n \|x_n\|$.

*Proof.* By [Hahn–Banach's norm-attaining corollary
4.4](/11-functional-analysis/4_the-fundamental-theorems/), for each $x \neq 0$
there is $\varphi_x \in X^*$ with $\|\varphi_x\| = 1$ and
$\varphi_x(x) = \|x\|$. Fix such $\varphi_x$ once; weak convergence gives
$\varphi_x(x_n) \to \varphi_x(x) = \|x\|$, and

$$
\|x\| = |\varphi_x(x)| = \lim_n |\varphi_x(x_n)|
\leq \liminf_n \|\varphi_x\|\,\|x_n\| = \liminf_n \|x_n\|.
$$

$\blacksquare$

The inequality is the reason norm is not weakly continuous: weak convergence
preserves nothing of the norm except that it cannot drop in the limit. The
standard example $e_n \rightharpoonup 0$ in $\ell^2$ shows the drop: norms stay
$1$ while the weak limit has norm $0$.

**Lemma 6.9 (Mazur).** If $x_n \rightharpoonup x$, then some sequence of convex
combinations of the $x_n$ converges to $x$ in norm.

*Proof.* For each $N$, let $C_N = \overline{\operatorname{conv}}\{x_m : m \geq N\}$
— closed, convex, non-empty. *Claim:* $x \in C_N$ for every $N$.

Suppose not: $x \notin C_N$ for some $N$. Since $C_N$ is closed, convex and $x$
is a positive distance outside it, the geometric form of Hahn–Banach — the
separation theorem — gives $\varphi \in X^*$ and a real $c$ with

$$
\operatorname{Re}\varphi(x) > c \;\geq\; \operatorname{Re}\varphi(y)
\quad\text{for all } y \in C_N.
$$

But weak convergence gives $\operatorname{Re}\varphi(x_m) \to \operatorname{Re}\varphi(x)$, so for all large $m \geq N$,
$\operatorname{Re}\varphi(x_m) > c$ — and since $C_N$ is *convex*, every convex
combination $y$ of those tail elements satisfies
$\operatorname{Re}\varphi(y) > c$ too. That contradicts
$\operatorname{Re}\varphi(y) \leq c$ on $C_N$. So $x \in C_N$ for every $N$.

Now choose $y_N \in C_N$ with $\|y_N - x\| < 1/N$. Each $y_N$ is a convex
combination of $\{x_m : m \geq N\}$ — finitely many of them, with non-negative
coefficients summing to one — and $y_N \to x$ in norm. $\blacksquare$

**Corollary 6.10 (norm-closed convex implies weakly closed).** A convex subset
of a Banach space is weakly closed iff it is norm-closed.

*Proof.* Weakly closed implies norm-closed always: the weak topology is
weaker, so it has fewer closed sets — the content is the converse for convex
$C$. Let $x_n \in C$ with $x_n \rightharpoonup x$; Mazur's lemma gives convex
combinations $y_N \in C$ with $y_N \to x$ in norm, and $C$ norm-closed forces
$x \in C$. So $C$ contains its weak limits. $\blacksquare$

This corollary is the technical heart of the direct method in the calculus of
variations, in the applications section below: it is what lets a variational
argument, which naturally produces *weak* limits, still land in the constraint
set — provided the constraint set is convex. Non-convex constraint sets are
where weak convergence arguments fail, and the failure is structural.

**Theorem 6.5 (the $\ell^p$ criterion).** For $1 < p < \infty$,
$x_n \rightharpoonup x$ in $\ell^p$ iff $\sup_n \|x_n\|_p < \infty$ and
$x_n(i) \to x(i)$ for every coordinate $i$.

*Proof.* ($\Rightarrow$) Boundedness is Proposition 6.2. Coordinate functionals
$\eta_i(y) = y(i)$ are bounded on $\ell^p$ with $\|\eta_i\| = 1$, so weak
convergence gives $x_n(i) = \eta_i(x_n) \to \eta_i(x) = x(i)$.

($\Leftarrow$) Let $y \in \ell^q$ with $1/p + 1/q = 1$; by Hölder,

$$
\left|\sum_i (x_n(i) - x(i))\, y(i)\right|
\leq \sum_{i \leq N} |x_n(i) - x(i)|\,|y(i)|
+ \sup_n \|x_n - x\|_p \,\Big(\sum_{i > N} |y(i)|^q\Big)^{1/q}.
$$

The tail $\sum_{i>N}|y(i)|^q \to 0$ as $N \to \infty$ because $y \in \ell^q$,
so choosing $N$ large makes the second term $\leq \epsilon \cdot M$ with
$M = \sup_n\|x_n - x\|_p < \infty$ by Proposition 6.2. On the finite head, the
convergence $x_n(i) \to x(i)$ coordinate by coordinate is a finite sum, so it
tends to zero. Given $\epsilon$, choose $N$ for the tail, then $n_0$ for the
head. $\blacksquare$

The proof's two halves are the general template for every weak-convergence
criterion on a sequence space: a *density* argument on the finite head and a
*tail* estimate controlled by boundedness. The same split proves the $L^p$
criterion of Proposition 6.8 with dense simple functions in place of finitely
supported sequences.

**Theorem 6.4 (Banach–Alaoglu).** The closed unit ball of $X^*$ is weak*
compact.

*Proof structure.* Map $\varphi \in \{ \varphi : \|\varphi\| \leq 1\}$ to the
tuple $\big(\varphi(x)\big)_{x \in X}$ in the product
$\prod_{x \in X} \bar D_x$, where $\bar D_x = \{z \in \mathbb{C} : |z| \leq \|x\|\}$ is a closed disc. Each disc is compact; Tychonoff makes the product
compact; and the unit ball's image is closed in the product topology because
linearity $\varphi(x + y) = \varphi(x) + \varphi(y)$ and the bound
$|\varphi(x)| \leq \|x\|$ are conditions on finitely many coordinates, each
closed. A closed subset of a compact product is compact. The product topology
restricted to this image is exactly the weak* topology, and the map is injective
(functionals are their coordinates). $\blacksquare$

Where Tychonoff is used, and what it costs: the product of compact spaces is
compact is equivalent to the ultrafilter lemma, strictly weaker than the full
axiom of choice but not provable in ZF. For *separable* $X$ there is a
diagonal-sequence proof that avoids Tychonoff entirely — which is why
Banach–Alaoglu for separable spaces is elementary while the general statement
is not.

## 6.8 Applications

**Application 1: Calculus of Variations.** Weak convergence is central to the direct method in the
calculus of variations. To minimize a functional $I$ over a space $X$, one takes a minimizing
sequence $x_n$ with $I(x_n) \to \inf I$. If $I$ is weakly lower semicontinuous and the sequence
is bounded, weak compactness gives a convergent subsequence whose limit is the minimizer.

**Application 2: PDE Theory.** Weak solutions of PDEs are often obtained by constructing
approximate solutions and extracting a weakly convergent subsequence. The existence theory for
elliptic PDEs via the Lax-Milgram theorem relies on weak convergence in Hilbert spaces.

**Application 3: Ergodic Theory.** Von Neumann's mean ergodic theorem states that if $T$ is a
unitary operator on a Hilbert space $H$, then $\frac{1}{n}\sum_{k=0}^{n-1} T^k x$ converges weakly
to the projection of $x$ onto the subspace of $T$-invariant vectors.

### 6.9 Worked Examples

**Problem 1.** Show that $e_n \rightharpoonup 0$ in $\ell^2$ but not in $\ell^1$.

*Solution.* For $\ell^2$: $\langle e_n, y\rangle = y_n \to 0$ for any $y \in \ell^2$ since
$\sum y_n^2 < \infty$ implies $y_n \to 0$. For $\ell^1$: $\ell^1$ has dual $\ell^\infty$. Take
$\varphi \in (\ell^1)^*$ corresponding to $(1, 1, 1, \ldots) \in \ell^\infty$. Then
$\varphi(e_n) = 1 \not\to 0$, so $e_n$ does not converge weakly to $0$ in $\ell^1$. $\blacksquare$

**Problem 2.** Let $f_n(x) = \sin(nx)$ in $L^2([0, 2\pi])$. Show $f_n \rightharpoonup 0$.

*Solution.* For any $g \in L^2$, the Riemann-Lebesgue lemma gives
$\int_0^{2\pi} \sin(nx) g(x)\, dx \to 0$. Hence $\langle f_n, g\rangle \to 0$, so
$f_n \rightharpoonup 0$. Note that $\|f_n\|_2 = \sqrt{\pi}$, so $f_n$ does not converge strongly. $\blacksquare$

## Cross-References

- **[Normed Spaces and Banach Spaces](/11-functional-analysis/1_normed-spaces-and-banach-spaces/)**: Defines the dual spaces and weak topologies that underpin the notions of weak and weak* convergence.
- **[Bounded Linear Operators](/11-functional-analysis/3_bounded-linear-operators/)**: Bounded operators are weakly continuous, and compact operators upgrade weak convergence to strong convergence.
- **[Compact Operators](/11-functional-analysis/5_compact-operators/)**: Compact operators map weakly convergent sequences to strongly convergent sequences, connecting the two convergence modes.

- [Quantum Mechanics](https://physics.wyattau.com/5-quantum-mechanics/)
- [Graph Theory](https://computer-science.wyattau.com/docs/graph-theory)
- [Classical Mechanics](https://physics.wyattau.com/1-classical-mechanics/)
- [Electromagnetism](https://physics.wyattau.com/3-electromagnetism/)

## Intuition

Weak convergence generalises the idea of convergence beyond the strong topology. In infinite dimensions, bounded sequences need not converge in norm, but they may converge weakly: a sequence converges weakly if every continuous linear functional applied to it produces a convergent sequence of numbers. This is a weaker requirement, like asking whether all measurements stabilise rather than whether the object itself stabilises. The Banach-Alaoglu theorem guarantees that bounded sets in dual spaces are weak-star compact, providing the existence of convergent subsequences. Weak convergence is the natural mode of convergence in the calculus of variations and in PDE theory, where direct methods extract weakly convergent subsequences from minimising sequences.

## Common Mistakes

**Mistake 1: Assuming weak convergence implies norm convergence**
Weak convergence is strictly weaker than norm convergence. The standard basis vectors $e_n$ in $\ell^2$ converge weakly to $0$ but $\|e_n\| = 1$ for all $n$. Students often try to pass limits inside norms or integrals under weak convergence, which is invalid without additional compactness or weak lower semicontinuity arguments.

**Mistake 2: Confusing weak convergence with weak\* convergence**
Weak convergence $x_n \rightharpoonup x$ requires testing against all functionals in $X^*$, while weak\* convergence $\varphi_n \xrightarrow{w^*} \varphi$ only tests against elements of $X \subseteq X^{**}$. In reflexive spaces these coincide, but in non-reflexive spaces like $L^1$ or $\ell^1$ they differ. The Banach-Alaoglu theorem gives weak\* compactness, not weak compactness.

**Mistake 3: Forgetting that weakly convergent sequences are bounded**
If $x_n \rightharpoonup x$, then $\sup_n \|x_n\| < \infty$ (uniform boundedness principle). Students sometimes work with weakly convergent sequences without first verifying boundedness, which is a necessary hypothesis for many theorems including Mazur's lemma and the Eberlein-Smulian theorem.
2. Show that if $x_n \rightharpoonup x$ and $\varphi \in X^*$, then $\varphi(x_n) \to \varphi(x)$.
3. Prove that in a finite-dimensional space, weak convergence is equivalent to norm convergence.
4. Show that $L^\infty([0,1])$ is not reflexive by finding a bounded sequence with no weakly
   convergent subsequence.
5. Let $T : X \to Y$ be compact. Prove that if $x_n \rightharpoonup 0$, then $T x_n \to 0$.

