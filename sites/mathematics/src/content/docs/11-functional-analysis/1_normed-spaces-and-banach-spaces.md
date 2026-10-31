---

date: 2026-07-23T21:57:32+01:00
title: Normed Spaces and Banach Spaces
tags:
  - Mathematics
  - University
description: "Normed and Banach spaces from the axioms up: completeness of the sequence and function spaces proved, norm equivalence in finite dimensions, Riesz's lemma and the non-compactness of the unit ball, quotient and dual spaces, Hölder and Minkowski from Young's inequality, and Banach--Alaoglu via Tychonoff."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "11 Functional Analysis", "url": "https://mathematics.wyattau.com/11-functional-analysis"}, {"name": "1_normed Spaces And Banach Spaces", "url": "https://mathematics.wyattau.com/11-functional-analysis/1_normed-spaces-and-banach-spaces"}]
}
</script>

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

**Proof.** First, $\ell^p$ *is* a normed space: positive definiteness and homogeneity are immediate,
and the triangle inequality is Minkowski's inequality, proved in §1.8 below.

Let $1 \leq p < \infty$ and let $(x^{(k)})$ be a Cauchy sequence in $\ell^p$, where
$x^{(k)} = (x^{(k)}_1, x^{(k)}_2, \dots)$. For each coordinate $i$,

$$
|x^{(k)}_i - x^{(m)}_i| \leq \|x^{(k)} - x^{(m)}\|_p,
$$

so $(x^{(k)}_i)_k$ is Cauchy in $\mathbb{F}$ and converges; define $x_i = \lim_k x^{(k)}_i$ and
$x = (x_i)$.

Given $\varepsilon > 0$, choose $K$ with $\|x^{(k)} - x^{(m)}\|_p \leq \varepsilon$ for all
$k, m \geq K$. For any finite $N$ and $k, m \geq K$,

$$
\sum_{i=1}^{N} |x^{(k)}_i - x^{(m)}_i|^p \leq \varepsilon^p.
$$

The sum is finite, so we may let $m \to \infty$ inside it:
$\sum_{i=1}^{N} |x^{(k)}_i - x_i|^p \leq \varepsilon^p$. This holds for every $N$; take the
supremum over $N$ to get $\|x^{(k)} - x\|_p \leq \varepsilon$ for all $k \geq K$. The case
$p = \infty$ is identical with sums replaced by suprema. In particular $x^{(k)} - x \in \ell^p$, so
$x = x^{(k)} - (x^{(k)} - x) \in \ell^p$, and $x^{(k)} \to x$ in norm. $\blacksquare$

Note the mechanism, which recurs throughout functional analysis: *Cauchy in norm forces coordinatewise
convergence; the candidate limit is then shown to lie in the space and to be the norm limit, by
letting a finite partial sum absorb the limit.*

**Theorem 1.2.** $L^p(\mu)$ is a Banach space for $1 \leq p \leq \infty$.

**Proof.** The norm axioms again reduce to Minkowski (the integral version, proved identically to
§1.8 with sums replaced by integrals; see the $L^p$ page in the measure theory track). For
completeness, let $(f_n)$ be Cauchy in $L^p$, $1 \leq p < \infty$. Extract a subsequence with

$$
\|g_{k+1} - g_k\|_p < 2^{-k}, \qquad g_k = f_{n_k}.
$$

Let $h = \sum_{k=1}^{\infty} |g_{k+1} - g_k|$, a function in $[0, \infty]$. By monotone convergence
and Minkowski,

$$
\|h\|_p \leq \sum_{k=1}^{\infty} \|g_{k+1} - g_k\|_p < \sum_{k=1}^{\infty} 2^{-k} = 1,
$$

so $h$ is finite almost everywhere. On the full-measure set $\{h < \infty\}$, the telescoping series
$\sum_k (g_{k+1}(x) - g_k(x))$ converges absolutely, hence converges; define

$$
g = g_1 + \sum_{k=1}^{\infty} (g_{k+1} - g_k) \quad \text{a.e.},
$$

and set $g = 0$ on the null set where the series diverges. Then $|g - g_1| \leq h$ gives
$g \in L^p$, and for each $k$,

$$
|g - g_k| \leq \sum_{j \geq k} |g_{j+1} - g_j| \quad \text{a.e.}, \qquad
\|g - g_k\|_p \leq \sum_{j \geq k} 2^{-j} \to 0.
$$

So the subsequence converges in $L^p$ to $g$. Finally, a Cauchy sequence with a convergent
subsequence converges: $\|f_n - g\|_p \leq \|f_n - f_{n_k}\|_p + \|f_{n_k} - g\|_p$, choosing $k$
with $n_k$ large. The case $p = \infty$ is simpler: Cauchy in $\|\cdot\|_\infty$ is uniform Cauchy,
and a uniform limit of essentially bounded measurable functions is essentially bounded. $\blacksquare$

**Theorem 1.3.** $(C[a, b], \|\cdot\|_\infty)$ is a Banach space, but $(C[a, b], \|\cdot\|_1)$ is
not.

**Proof.** *Supremum norm.* Let $(f_n)$ be Cauchy in $\|\cdot\|_\infty$. For each fixed $x$, the
real sequence $(f_n(x))$ satisfies $|f_n(x) - f_m(x)| \leq \|f_n - f_m\|_\infty$, so it is Cauchy;
define $f(x) = \lim_n f_n(x)$. Given $\varepsilon > 0$, choose $N$ with
$|f_n(x) - f_m(x)| < \varepsilon$ for all $x$ and all $n, m \geq N$; holding $n$ and $x$ fixed and
letting $m \to \infty$ gives $|f_n(x) - f(x)| \leq \varepsilon$ for *all* $x$; the convergence is
uniform. A uniform limit of continuous functions is continuous: given $x_0$ and $\varepsilon$,
pick $n$ with $\|f_n - f\|_\infty \leq \varepsilon$ and use the continuity of $f_n$ at $x_0$ in the
$\varepsilon/3$ bound

$$
|f(x) - f(x_0)| \leq |f(x) - f_n(x)| + |f_n(x) - f_n(x_0)| + |f_n(x_0) - f(x_0)|.
$$

So $f \in C[a, b]$ and $f_n \to f$ in $\|\cdot\|_\infty$.

*$L^1$ norm.* Not complete; the explicit Cauchy sequence converging to a discontinuous limit is
constructed in Practice Problem 1 below. $\blacksquare$

### 1.3 Finite-Dimensional Normed Spaces

**Theorem 1.4.** All norms on a finite-dimensional vector space are equivalent.

**Proof.** Let $X$ have dimension $n$ with basis $e_1, \dots, e_n$, and let
$\|\cdot\|_\bullet$ be the auxiliary norm $\bigl\|\sum_i a_i e_i\bigr\|_\bullet = \sum_i |a_i|$.
It suffices to show every norm $\|\cdot\|$ on $X$ is equivalent to $\|\cdot\|_\bullet$: equivalence
of norms is transitive, and both inequalities below compose.

*Upper bound.* For $x = \sum_i a_i e_i$,

$$
\|x\| = \Bigl\| \sum_i a_i e_i \Bigr\| \leq \sum_i |a_i| \|e_i\| \leq \Bigl(\max_i \|e_i\|\Bigr) \|x\|_\bullet.
$$

*Lower bound.* By the upper bound, $\bigl| \|x\| - \|y\| \bigr| \leq \|x - y\| \leq C\|x - y\|_\bullet$,
so $a \mapsto \bigl\|\sum_i a_i e_i\bigr\|$ is continuous as a function on $\mathbb{F}^n$ with the
$\|\cdot\|_\bullet$ metric. The set $S = \{a : \|a\|_\bullet = 1\}$ is compact (closed and bounded
in finite dimensions; Heine--Borel), and the function is strictly positive on $S$: if
$\bigl\|\sum a_i e_i\bigr\| = 0$ then $\sum a_i e_i = 0$ (positive definiteness), so all $a_i = 0$
(basis), contradicting $\|a\|_\bullet = 1$. A continuous function on a compact set attains its
infimum, so $m = \min_S \|\cdot\| > 0$. For $x \neq 0$ the vector $x / \|x\|_\bullet$ lies on $S$, so

$$
\frac{\|x\|}{\|x\|_\bullet} \geq m \implies \|x\| \geq m \|x\|_\bullet.
$$

$\blacksquare$

**Corollary 1.5.** Every finite-dimensional normed space is a Banach space.

**Proof.** Let $X$ be finite-dimensional. A $\|\cdot\|$-Cauchy sequence is
$\|\cdot\|_\bullet$-Cauchy by Theorem 1.4, i.e. each coordinate is Cauchy in $\mathbb{F}$, hence
convergent ($\mathbb{R}$ and $\mathbb{C}$ are complete). Convergence in
$\|\cdot\|_\bullet$ implies convergence in $\|\cdot\|$, again by Theorem 1.4. $\blacksquare$

One consequence used constantly: every finite-dimensional subspace of a normed space is *closed*,
being complete in its own right (a complete subspace of a metric space is closed; its complement
is open, since a point at distance zero from it is its limit point).

**Theorem 1.6 (Riesz's Lemma).** Let $X$ be a normed space and $Y$ a proper closed subspace. For
every $0 < \theta < 1$, there exists $x \in X$ with $\|x\| = 1$ and $d(x, Y) \geq \theta$.

**Proof.** Pick any $x_0 \in X \setminus Y$. Since $Y$ is closed, $X \setminus Y$ is open, so some
ball around $x_0$ misses $Y$ and $\alpha := d(x_0, Y) > 0$. Choose $y_0 \in Y$ with
$\|x_0 - y_0\| \leq \alpha / \theta$; possible since $\theta < 1$ makes $\alpha/\theta > \alpha$.
Set

$$
x = \frac{x_0 - y_0}{\|x_0 - y_0\|}, \qquad \text{so } \|x\| = 1.
$$

For any $y \in Y$,

$$
\|x - y\| = \frac{1}{\|x_0 - y_0\|} \Bigl\| (x_0 - y_0) - \|x_0 - y_0\|\, y \Bigr\|
= \frac{1}{\|x_0 - y_0\|} \Bigl\| x_0 - \bigl(y_0 + \|x_0 - y_0\|\, y\bigr) \Bigr\|,
$$

and $y_0 + \|x_0 - y_0\| y \in Y$ (a subspace absorbs scaling and addition), so the last quantity
is at least $\alpha / \|x_0 - y_0\| \geq \theta$. $\blacksquare$

**Corollary 1.7.** The closed unit ball of a normed space is compact if and only if the space is
finite-dimensional.

**Proof.** *($\Leftarrow$)* If $X$ is finite-dimensional, fix a linear isomorphism with
$\mathbb{F}^n$. By Theorem 1.4 the closed unit ball is closed in, and contained in a multiple of,
the Euclidean unit ball under this identification; closed and bounded in
$\mathbb{F}^n$; hence compact by Heine--Borel.

*($\Rightarrow$)* Contrapositive. Suppose $X$ is infinite-dimensional and build a sequence in the
unit ball with no Cauchy subsequence. Pick $x_1$ with $\|x_1\| = 1$. Inductively, having chosen
$x_1, \dots, x_n$, let $Y_n = \operatorname{span}\{x_1, \dots, x_n\}$; a finite-dimensional
subspace, hence closed (Corollary 1.5), and proper (as $X$ is infinite-dimensional). Riesz's lemma
with $\theta = 1/2$ produces $x_{n+1}$ with $\|x_{n+1}\| = 1$ and $d(x_{n+1}, Y_n) \geq 1/2$.

For $i < j$ the point $x_i$ lies in $Y_{j-1}$, so
$\|x_j - x_i\| \geq d(x_j, Y_{j-1}) \geq 1/2$. No subsequence is Cauchy, so the closed unit ball is
not (sequentially) compact; and in a metric space compactness and sequential compactness
coincide. $\blacksquare$

This corollary is the first taste of what makes infinite dimensions genuinely different: in
finite dimensions, closed and bounded is compact; in infinite dimensions it never is.

### 1.4 Quotient Spaces

Let $X$ be a normed space and $Y \subseteq X$ a closed subspace. The **quotient space** $X / Y$
consists of equivalence classes $[x] = x + Y$ with the **quotient norm**:

$$
\|[x]\|_{X/Y} = \inf_{y \in Y} \|x - y\|
$$

**Theorem 1.8.** If $X$ is a Banach space and $Y$ is a closed subspace, then $X/Y$ is a Banach space.

**Proof.** *The quotient norm is a norm.* Homogeneity and positivity of the infimum are clear, and
the triangle inequality follows since for any $y, y' \in Y$,

$$
\|[x + x']\| \leq \|x + x' - y - y'\| \leq \|x - y\| + \|x' - y'\|,
$$

so taking infima over $y$ and $y'$ separately gives
$\|[x+x']\| \leq \|[x]\| + \|[x']\|$. Finally, $\|[x]\| = 0$ means $x$ is a limit of points of $Y$,
i.e. $x \in \overline{Y} = Y$ (closedness is exactly what is used here), so $[x] = 0$.

*Completeness.* Let $([x_n])$ be Cauchy in $X/Y$. Extract a subsequence with
$\|[x_{n_{k+1}}] - [x_{n_k}]\| < 2^{-k}$. Since
$\|[x_{n_{k+1}}] - [x_{n_k}]\| = d(x_{n_{k+1}} - x_{n_k},\, Y)$, choose $y_{k+1} \in Y$ with

$$
\|x_{n_{k+1}} - x_{n_k} - y_{k+1}\| < 2^{-k}.
$$

Now define $z_1 = x_{n_1}$ and inductively $z_{k+1} = z_k + (x_{n_{k+1}} - x_{n_k} - y_{k+1})$.
The increments are absolutely summable, so $(z_k)$ converges in the Banach space $X$; write the
limit as $z$. Passing to quotients, the recursion telescopes:

$$
[z_{k+1}] = [z_k] + [x_{n_{k+1}} - x_{n_k} - y_{k+1}] = [z_k] + [x_{n_{k+1}}] - [x_{n_k}]
\implies [z_k] = [x_{n_k}],
$$

the last step by induction from $[z_1] = [x_{n_1}]$. Hence

$$
\|[x_{n_k}] - [z]\| = \|[z_k] - [z]\| \leq \|z_k - z\| \to 0,
$$

so the subsequence converges, and a Cauchy sequence with a convergent subsequence converges, as in
Theorem 1.2. $\blacksquare$

**Proposition 1.9.** The quotient map $\pi : X \to X/Y$, $\pi(x) = [x]$, is a bounded linear operator
with $\|\pi\| = 1$ (for $Y$ a proper closed subspace).

**Proof.** Linearity is inherited from the vector space quotient. Since $0 \in Y$,
$\|[x]\| = d(x, Y) \leq \|x\|$, so $\|\pi\| \leq 1$. Conversely, Riesz's lemma provides, for every
$\theta < 1$, a unit vector $x$ with $\|x\| = 1$ and $\|[x]\| = d(x, Y) \geq \theta$; so
$\|\pi\| \geq \theta$ for all $\theta < 1$, whence $\|\pi\| \geq 1$. Combining: $\|\pi\| = 1$.

Note the sup is generally *not attained*: Riesz's lemma gives $d(x, Y) \geq \theta$ for each
$\theta < 1$ but not necessarily $= 1$. In finite dimensions the unit sphere is compact and the
sup *is* attained; in infinite dimensions it can genuinely fail to be. $\blacksquare$

### 1.5 Dual Spaces

The **dual space** $X^*$ of a normed space $X$ is the space of all bounded linear functionals
$f : X \to \mathbb{F}$, equipped with the operator norm:

$$
\|f\| = \sup_{\|x\| \leq 1} |f(x)|
$$

**Theorem 1.10.** The dual space $X^*$ is always a Banach space, regardless of whether $X$ is
complete.

**Proof.** *Linearity of the candidate limit.* Let $(f_n)$ be Cauchy in the operator norm. For each
fixed $x$, $|f_n(x) - f_m(x)| \leq \|f_n - f_m\| \|x\|$, so $(f_n(x))$ is Cauchy in $\mathbb{F}$;
define $f(x) = \lim_n f_n(x)$. Taking limits in the linearity identity
$f_n(\alpha x + \beta y) = \alpha f_n(x) + \beta f_n(y)$ gives linearity of $f$.

*Boundedness.* Cauchy sequences are bounded in norm: $\|f_n\| \leq C$ for all $n$. So
$|f_n(x)| \leq C\|x\|$ for every $n$ and $x$; let $n \to \infty$: $|f(x)| \leq C\|x\|$, so
$\|f\| \leq C$.

*Convergence in norm.* Given $\varepsilon > 0$, choose $N$ with $\|f_n - f_m\| \leq \varepsilon$
for $n, m \geq N$. Fix $n \geq N$ and $x$ with $\|x\| \leq 1$. Then for every $m \geq N$,

$$
|f(x) - f_n(x)| \leq |f(x) - f_m(x)| + |f_m(x) - f_n(x)| \leq |f(x) - f_m(x)| + \varepsilon.
$$

Let $m \to \infty$: the first term tends to $0$, giving $|f(x) - f_n(x)| \leq \varepsilon$ for all
$\|x\| \leq 1$. Taking the supremum over such $x$: $\|f - f_n\| \leq \varepsilon$. $\blacksquare$

Note where completeness of $X$ would have been used; nowhere. The dual is complete because the
*scalar field* is, and the operator norm controls convergence uniformly on the unit ball.

**Examples of dual spaces:**

- $(\ell^p)^* \cong \ell^q$ where $1/p + 1/q = 1$ for $1 \leq p < \infty$.
- $(c_0)^* \cong \ell^1$, where $c_0$ is the space of sequences converging to $0$.
- $(L^p(\mu))^* \cong L^q(\mu)$ for $1 \leq p < \infty$ and $1/p + 1/q = 1$.

### 1.6 The Completion of a Normed Space

**Theorem 1.11.** Every normed space $X$ has a **completion**: a Banach space $\tilde{X}$ and an
isometric embedding $i : X \to \tilde{X}$ with dense image. The completion is unique up to
isometric isomorphism.

**Proof.** *Construction.* Let $\mathcal{C}$ be the set of Cauchy sequences in $X$, with
$(x_n) \sim (y_n)$ iff $\|x_n - y_n\| \to 0$ (an equivalence relation; check transitivity via the
$\varepsilon/2$ argument). Set $\tilde{X} = \mathcal{C}/{\sim}$ and define

$$
\|[(x_n)]\| = \lim_{n \to \infty} \|x_n\|.
$$

The limit exists because $|\,\|x_n\| - \|x_m\|\,| \leq \|x_n - x_m\|$ (reverse triangle inequality)
makes $(\|x_n\|)$ Cauchy in $\mathbb{F}$. It is well defined: replacing $(x_n)$ by an equivalent
sequence changes each $\|x_n\|$ by at most $\|x_n - y_n\| \to 0$. The norm axioms pass to the limit
from each coordinate.

*The embedding.* $i(x) = [(x, x, x, \dots)]$ is linear, and
$\|i(x)\| = \lim_n \|x\| = \|x\|$: isometric. Its image is dense: given $\xi = [(x_n)] \in \tilde{X}$
and $\varepsilon > 0$, pick $N$ with $\|x_n - x_m\| < \varepsilon$ for $n, m \geq N$; then

$$
\|\xi - i(x_N)\| = \lim_{n \to \infty} \|x_n - x_N\| \leq \varepsilon.
$$

*Completeness.* Let $(\xi_k)$ be Cauchy in $\tilde{X}$. Choose representatives $x^{(k)} \in X$ with
$\|\xi_k - i(x^{(k)})\| < 1/k$ (density). Then for $k, l$ large,

$$
\|x^{(k)} - x^{(l)}\| \leq \|x^{(k)} - \xi_k\|_{\text{via } i} + \|\xi_k - \xi_l\| + \|\xi_l - x^{(l)}\| \to 0,
$$

so $(x^{(k)})$ is Cauchy in $X$; let $\xi = [(x^{(k)})] \in \tilde{X}$. A three-term estimate with
the same ingredients gives $\|\xi_k - \xi\| \to 0$. So $\tilde{X}$ is complete.

*Uniqueness.* Given two completions $i : X \to \tilde{X}$ and $j : X \to \bar{X}$, define
$\Phi$ on the dense subspace $i(X)$ by $\Phi(i(x)) = j(x)$. On $i(X)$, $\Phi$ is isometric:

$$
\|\Phi(i(x)) - \Phi(i(x'))\| = \|j(x) - j(x')\| = \|x - x'\| = \|i(x) - i(x')\|.
$$

An isometry on a dense subspace of a metric space extends uniquely to an isometry on the whole
space (the extension sends $z \mapsto \lim \Phi(z_n)$ along any sequence in the subspace converging
to $z$; well defined by isometry and Cauchy). The extension $\Phi : \tilde{X} \to \bar{X}$ is
surjective: its image is complete; being isometric to a complete space; hence closed in
$\bar{X}$, and it contains the dense set $j(X)$. $\blacksquare$

**Example.** The completion of $(C[a, b], \|\cdot\|_1)$ is $L^1[a, b]$.

### 1.7 Infinite-Dimensional Normed Spaces

Infinite-dimensional normed spaces have properties that contrast sharply with finite-dimensional
ones:

- The closed unit ball is not compact (Riesz's lemma).
- There exist discontinuous linear operators (requires the axiom of choice).
- Not every linear subspace is closed.
- The weak topology differs from the norm topology.

### 1.8 Hölder and Minkowski Inequalities

**Lemma 1.12.0 (Young's inequality).** For $1 < p < \infty$ and $1/p + 1/q = 1$, all $a, b \geq 0$:

$$
ab \leq \frac{a^p}{p} + \frac{b^q}{q}.
$$

**Proof.** If $a = 0$ or $b = 0$ both sides vanish. Otherwise fix $b$ and minimise
$\varphi(a) = a^p/p + b^q/q - ab$ over $a \geq 0$. Then $\varphi'(a) = a^{p-1} - b$, which vanishes
at $a = b^{1/(p-1)} = b^{q/p}$, and $\varphi''(a) = (p-1)a^{p-2} > 0$, so this is the global
minimum (with $\varphi(0) = b^q/q > 0$ confirming the boundary is worse). The value there:

$$
\varphi(b^{q/p}) = \frac{b^{qp/p}}{p} + \frac{b^q}{q} - b^{q/p} b
= b^q \Bigl( \frac{1}{p} + \frac{1}{q} \Bigr) - b^{q/p + 1} = b^q - b^{q/p + 1}.
$$

Since $q/p + 1 = q(1/p + 1/q) = q$, the minimum is $b^q - b^q = 0$. So $\varphi(a) \geq 0$
everywhere. $\blacksquare$

**Theorem 1.12 (Hölder's Inequality).** For $1 \leq p, q \leq \infty$ with $1/p + 1/q = 1$:

$$
\sum_{n=1}^\infty |x_n y_n| \leq \|x\|_p \|y\|_q.
$$

**Proof.** *Case $1 < p < \infty$.* If $\|x\|_p = 0$ or $\|y\|_q = 0$ the inequality is trivial.
Otherwise normalise: $\hat{x} = x / \|x\|_p$ and $\hat{y} = y / \|y\|_q$ satisfy
$\|\hat{x}\|_p = \|\hat{y}\|_q = 1$, and both sides scale by the same factor
$\|x\|_p \|y\|_q$, so it suffices to prove $\sum |\hat{x}_n \hat{y}_n| \leq 1$.

For every $N$ and every $n \leq N$, Young's inequality with $a = |\hat{x}_n|$, $b = |\hat{y}_n|$
gives $|\hat{x}_n \hat{y}_n| \leq |\hat{x}_n|^p / p + |\hat{y}_n|^q / q$. Summing over $n \leq N$:

$$
\sum_{n=1}^{N} |\hat{x}_n \hat{y}_n| \leq \frac{1}{p} \sum_{n=1}^{N} |\hat{x}_n|^p + \frac{1}{q} \sum_{n=1}^{N} |\hat{y}_n|^q \leq \frac{1}{p} + \frac{1}{q} = 1.
$$

The partial sums are increasing and bounded, so the full series converges with sum $\leq 1$.

*Case $p = 1$, $q = \infty$:* $|x_n y_n| \leq |x_n| \|y\|_\infty$ termwise, then sum.
*Case $p = \infty$ symmetrically.* $\blacksquare$

**Theorem 1.13 (Minkowski's Inequality).** For $1 \leq p \leq \infty$:

$$
\|x + y\|_p \leq \|x\|_p + \|y\|_p.
$$

**Proof.** $p = 1$ is the ordinary triangle inequality in $\mathbb{F}$, summed; $p = \infty$ is the
supremum version. Let $1 < p < \infty$ and $q$ its conjugate. The case $x + y = 0$ is trivial;
otherwise expand:

$$
\|x + y\|_p^p = \sum_n |x_n + y_n|^p \leq \sum_n |x_n| |x_n + y_n|^{p-1} + \sum_n |y_n| |x_n + y_n|^{p-1}.
$$

Apply Hölder to each sum. Since $(p-1)q = p$, the Hölder factor for the second argument is

$$
\Bigl( \sum_n |x_n + y_n|^{(p-1)q} \Bigr)^{1/q} = \Bigl( \sum_n |x_n + y_n|^{p} \Bigr)^{1/q} = \|x + y\|_p^{p/q},
$$

so

$$
\|x + y\|_p^p \leq \bigl( \|x\|_p + \|y\|_p \bigr) \|x + y\|_p^{p/q}.
$$

If $\|x + y\|_p > 0$, divide both sides by $\|x + y\|_p^{p/q}$; the exponent satisfies
$p - p/q = p(1 - 1/q) = 1$, leaving $\|x + y\|_p \leq \|x\|_p + \|y\|_p$. $\blacksquare$

These inequalities prove that $\ell^p$ and $L^p$ are normed spaces. The integral versions follow
by the identical arguments with sums replaced by integrals; see the $L^p$ page in the measure
theory track, where the completeness of $L^p$ is also treated.

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

The dual space $X^*$ carries the **weak-\* topology** $\sigma(X^*, X)$, the coarsest topology
making all evaluation maps $x \mapsto f(x)$ continuous.

**Theorem 1.14 (Banach-Alaoglu).** The closed unit ball of $X^*$ is compact in the weak-*
topology.

**Proof.** Let $B = \{f \in X^* : \|f\| \leq 1\}$. For each $x \in X$ let
$D_x = \{z \in \mathbb{F} : |z| \leq \|x\|\}$, a closed disc; compact by Heine--Borel in
$\mathbb{F} \cong \mathbb{R}$ or $\mathbb{R}^2$. Consider the product
$P = \prod_{x \in X} D_x$ and the map

$$
\Phi : B \to P, \qquad \Phi(f) = \bigl( f(x) \bigr)_{x \in X}.
$$

The weak-\* topology on $B$ is exactly the subspace topology inherited from $P$: both are initial
topologies for the same family of coordinate maps $f \mapsto f(x)$. So $B$ is compact iff $\Phi(B)$
is compact as a subspace of $P$.

$P$ is compact by Tychonoff's theorem (Theorem 8.4 in the topology track). And $\Phi(B)$ is
closed in $P$: a point $(z_x) \in P$ lies in $\Phi(B)$ iff

$$
z_{x + y} = z_x + z_y \ \text{for all } x, y, \qquad z_{\alpha x} = \alpha z_x \ \text{for all } \alpha, x,
$$

and each of these conditions is closed; the map $(z_\bullet) \mapsto z_{x+y} - z_x - z_y$ is a
finite combination of coordinate projections, hence continuous, and the condition is the preimage
of $\{0\}$. (Positivity of the norm needs no separate condition: $|z_x| \leq \|x\|$ is built into
$D_x$, and it reproduces $\|f\| \leq 1$ by taking suprema.) A closed subset of a compact space is
compact, so $\Phi(B)$; hence $B$; is compact. $\blacksquare$

### 1.11 Separable Normed Spaces

A normed space is **separable** if it contains a countable dense subset.

**Examples:** $\ell^p$ is separable for $1 \leq p < \infty$. $\ell^\infty$ is not separable.
$C[a, b]$ is separable (polynomials with rational coefficients are dense).

**Theorem 1.15.** If $X^*$ is separable, then $X$ is separable. The converse does not hold:
$\ell^1$ is separable but $(\ell^1)^* \cong \ell^\infty$ is not.

**Proof.** Let $\{f_n\}$ be a countable dense subset of the unit sphere
$\{f \in X^* : \|f\| = 1\}$; separability of $X^*$ gives a countable dense set in all of $X^*$,
and intersecting with spheres (or normalising) yields one in the sphere. For each $n$ pick
$x_n$ with $\|x_n\| = 1$ and $|f_n(x_n)| \geq 1/2$ (the unit norm is a supremum, so values
arbitrarily close to $1$ are attained).

Claim: the rational span $D$ of $\{x_n\}$ is dense in $X$. $D$ is countable. Suppose not dense;
then some $y \in X$ and $\delta > 0$ have $d(y, \operatorname{span}\{x_n\}) \geq \delta$. The
distance functional extends: by Hahn--Banach (Theorem 1.3 of the fundamental-theorems page) there
is $f \in X^*$ with $\|f\| = 1$, $f|_{\operatorname{span}\{x_n\}} = 0$, and $f(y) = \delta$.

Density of $\{f_n\}$ in the sphere gives a subsequence $f_{n_k} \to f$ in operator norm. But for
every $k$,

$$
\frac{1}{2} \leq |f_{n_k}(x_{n_k})| = |f_{n_k}(x_{n_k}) - f(x_{n_k})| \leq \|f_{n_k} - f\|,
$$

since $f(x_{n_k}) = 0$. The right side tends to $0$; contradiction. So $D$ is dense and $X$ is
separable. $\blacksquare$

### 1.12 Reflexive Spaces

A Banach space $X$ is **reflexive** if the natural embedding $J : X \to X^{**}$ defined by
$J(x)(f) = f(x)$ is surjective.

**Examples:** $\ell^p$ is reflexive for $1 < p < \infty$. $\ell^1$ and $\ell^\infty$ are not
reflexive. Every finite-dimensional space is reflexive.

**Theorem 1.16.** A Banach space is reflexive if and only if its closed unit ball is weakly
compact.

**Proof.** *($\Leftarrow$)* Suppose $B_X$ is weakly compact. The canonical embedding
$J : X \to X^{**}$ is weak-to-weak-\* continuous: for each $f \in X^*$, the composition
$J(\cdot)(f) = f(\cdot)$ is weakly continuous by definition of $\sigma(X, X^*)$. Moreover the
weak-\* topology of $X^{**}$ restricted to $J(X)$ *is* the weak topology of $X$ transported by
$J$; both are initial topologies for the same set of functionals, $\{f : f \in X^*\}$.

By Goldstine's theorem (a consequence of Hahn--Banach; see the fundamental-theorems page),
$J(B_X)$ is weak-\* dense in $B_{X^{**}}$. As a weakly compact set, $J(B_X)$ is compact in the
subspace topology; which is the weak-\* topology just identified; and a compact subset of a
Hausdorff space is closed in the ambient space. So $J(B_X)$ is weak-\* closed, and closed *and*
dense in $B_{X^{**}}$ forces $J(B_X) = B_{X^{**}}$. Scaling: every $x^{**} \in X^{**}$ with
$x^{**} \neq 0$ is a multiple of a point of $B_{X^{**}} = J(B_X)$, so $J$ is surjective.

*($\Rightarrow$)* Suppose $J$ is surjective. Since $J$ is an isometry
($\|J(x)\| = \sup_{\|f\| \leq 1} |f(x)| = \|x\|$ by the Hahn--Banach corollary on norming
functionals), $J(B_X) = B_{X^{**}}$. Banach--Alaoglu (Theorem 1.14) makes $B_{X^{**}}$ compact in
$\sigma(X^{**}, X^*)$. And $J$ is a homeomorphism between $(X, \sigma(X, X^*))$ and its image
with the weak-\* subspace topology; continuous, injective, and open onto the image, because the
coordinate functionals agree. Compactness is a property of the topology on a set, not of the
ambient space, so $B_X$ is weakly compact. $\blacksquare$

**Problem 5.** Show that $c_0$ (sequences converging to 0 with sup norm) is not reflexive.

**Problem 6.** Prove that $\ell^p$ for $1 < p < \infty$ is reflexive using the fact that
$(\ell^p)^{**} \cong \ell^p$ via the natural embedding.

## Cross-References

- **[$L^p$ Spaces](/10-measure-theory/7_l-p-spaces/)**: Provides concrete examples of Banach spaces that are fundamental throughout analysis, with the completeness result proved here.
- **[Inner Product Spaces and Hilbert Spaces](/11-functional-analysis/2_inner-product-spaces-and-hilbert-spaces/)**: Specialises the normed space theory to spaces where the norm comes from an inner product, enabling orthogonal projections.
- **[Bounded Linear Operators](/11-functional-analysis/3_bounded-linear-operators/)**: Develops the theory of continuous linear maps between normed spaces, building on the dual space concept.

- [Quantum Mechanics](https://physics.wyattau.com/5-quantum-mechanics/)
- [Graph Theory](https://computer-science.wyattau.com/docs/graph-theory)
- [Classical Mechanics](https://physics.wyattau.com/1-classical-mechanics/)
- [Electromagnetism](https://physics.wyattau.com/3-electromagnetism/)

## Intuition

Functional analysis extends linear algebra to infinite dimensions. A normed space is a vector space where you can measure the "size" of vectors, and a Banach space is one where Cauchy sequences converge, the space has no "holes." Think of it as doing linear algebra with functions instead of finite arrays. The dual space contains all continuous linear functionals: machines that take in a vector and return a number. Boundedness and continuity coincide for linear maps, a fact that fails in nonlinear settings. The key challenge of infinite dimensions is that bounded sequences need not have convergent subsequences, compactness becomes a rare and precious property, requiring special conditions like reflexivity.

### 1.13 Common Mistakes

**Mistake 1: Confusing a norm with a metric**
A norm $\|\cdot\|$ on a vector space induces a metric $d(x, y) = \|x - y\|$, but not every metric comes from a norm. The discrete metric $d(x, y) = 1$ for $x \neq y$ is not induced by any norm because norms are homogeneous ($\|\alpha x\| = |\alpha|\|x\|$), which the discrete metric violates. Always verify that a metric is translation-invariant and homogeneous before assuming it comes from a norm.

**Mistake 2: Assuming bounded linear operators are automatically continuous**
In the context of linear operators, boundedness and continuity are equivalent for linear maps between normed spaces. However, students sometimes confuse bounded linear functionals with bounded sets. A bounded linear functional $f \in X^*$ satisfies $\|f(x)\| \leq C\|x\|$ for some constant $C$, not that $f(X)$ is a bounded set.

**Mistake 3: Forgetting that $(C[a,b], \|\cdot\|_1)$ is not complete**
The space of continuous functions with the $L^1$-norm is not a Banach space because Cauchy sequences can converge to discontinuous functions. Only $(C[a,b], \|\cdot\|_\infty)$ is complete. When completeness is required, always verify the norm, not just the underlying set.
