---

date: 2026-07-23T21:57:32+01:00
title: Inner Product Spaces and Hilbert Spaces
tags:
  - Mathematics
  - University
description: "Inner product spaces and Hilbert spaces with every structural theorem proved: Cauchy--Schwarz with its equality case, the parallelogram law and polarisation identity, existence and uniqueness of orthogonal projections via minimisation, Bessel and Parseval, and the Riesz representation theorem with the norm identity verified."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "11 Functional Analysis", "url": "https://mathematics.wyattau.com/11-functional-analysis"}, {"name": "2_inner Product Spaces And Hilbert Spaces", "url": "https://mathematics.wyattau.com/11-functional-analysis/2_inner-product-spaces-and-hilbert-spaces"}]
}
</script>

### 2.1 Inner Product Spaces

An **inner product space** is a vector space $H$ with an inner product
$\langle \cdot, \cdot \rangle : H \times H \to \mathbb{C}$ satisfying:

1. $\langle x, x\rangle \geq 0$ with equality iff $x = 0$.
2. $\langle x, y\rangle = \overline{\langle y, x\rangle}$.
3. $\langle \alpha x + \beta y, z\rangle = \alpha\langle x, z\rangle + \beta\langle y, z\rangle$.

Every inner product induces a norm: $\|x\| = \sqrt{\langle x, x\rangle}$. That this really is a
norm follows from the properties below: homogeneity is immediate from axiom 3, and the triangle
inequality is Cauchy--Schwarz (Theorem 2.4):

$$
\|x + y\|^2 = \|x\|^2 + \langle x, y \rangle + \langle y, x \rangle + \|y\|^2 \leq \|x\|^2 + 2\|x\|\|y\| + \|y\|^2 = (\|x\| + \|y\|)^2.
$$

So every inner product space is a normed space in the sense of the previous page.

**Example 1.** $\mathbb{C}^n$ with $\langle x, y\rangle = \sum_{i=1}^n x_i \overline{y_i}$.

**Example 2.** $L^2(\mu)$ with $\langle f, g\rangle = \int f \overline{g}\, d\mu$.

**Example 3.** $\ell^2$ with $\langle x, y\rangle = \sum_{i=1}^\infty x_i \overline{y_i}$.

### 2.2 Orthogonality

Vectors $x, y \in H$ are **orthogonal** (written $x \perp y$) if $\langle x, y\rangle = 0$.

**Theorem 2.1 (Pythagorean Theorem).** If $x \perp y$, then $\|x + y\|^2 = \|x\|^2 + \|y\|^2$.

**Proof.** Expand and apply $\langle x, y \rangle = \overline{\langle y, x \rangle} = 0$:

$$
\|x+y\|^2 = \langle x + y, x + y \rangle = \|x\|^2 + \langle x, y \rangle + \langle y, x \rangle + \|y\|^2.
$$

$\blacksquare$

**Theorem 2.2 (Parallelogram Law).** In any inner product space:

$$
\|x + y\|^2 + \|x - y\|^2 = 2\|x\|^2 + 2\|y\|^2
$$

**Proof.** Expand both terms; all cross terms cancel:

$$
\begin{aligned}
\|x+y\|^2 &= \|x\|^2 + \langle x, y\rangle + \langle y, x\rangle + \|y\|^2, \\
\|x-y\|^2 &= \|x\|^2 - \langle x, y\rangle - \langle y, x\rangle + \|y\|^2.
\end{aligned}
$$

Adding, the $\pm(\langle x, y\rangle + \langle y, x\rangle)$ terms cancel. $\blacksquare$

This identity is *characteristic*: a norm comes from an inner product if and only if it satisfies
the parallelogram law; the polarisation identity reconstructs the inner product from the norm, so
any inner-product norm must obey the law, and conversely Jordan and von Neumann showed the law is
sufficient.

**Theorem 2.3 (Polarization Identity).** In a complex inner product space:

$$
\langle x, y\rangle = \frac{1}{4}\left(\|x + y\|^2 - \|x - y\|^2 + i\|x + iy\|^2 - i\|x - iy\|^2\right)
$$

**Proof.** With the abbreviation $Q(z) = \|z\|^2 = \langle z, z \rangle$, expand each term and
cancel: $\|x+y\|^2 - \|x-y\|^2 = 2\langle x, y \rangle + 2\langle y, x \rangle$, and

$$
\|x+iy\|^2 - \|x-iy\|^2 = 2i\langle y, x\rangle - 2i\langle x, y\rangle,
$$

using $\langle x, \pm iy \rangle = \mp i \langle x, y \rangle$ (conjugate-linearity in the second
argument). So the bracket equals

$$
2\langle x, y\rangle + 2\langle y, x\rangle + i\left(2i\langle y, x\rangle - 2i\langle x, y\rangle\right)
= 2\langle x, y\rangle + 2\langle y, x\rangle - 2\langle y, x\rangle + 2\langle x, y\rangle = 4\langle x, y\rangle.
$$

$\blacksquare$

**Theorem 2.4 (Cauchy-Schwarz Inequality).** $|\langle x, y\rangle| \leq \|x\| \cdot \|y\|$ with
equality iff $x$ and $y$ are linearly dependent.

**Proof.** The case $y = 0$ is trivial. For $y \neq 0$, consider the quadratic in $t \in \mathbb{C}$,

$$
0 \leq \|x - t y\|^2 = \|x\|^2 - \bar{t}\langle x, y\rangle - t\langle y, x\rangle + |t|^2 \|y\|^2,
$$

which follows from conjugate-linearity in the second argument. Choose
$t = \langle y, x \rangle / \|y\|^2$, so that $\bar{t} = \langle x, y \rangle / \|y\|^2$; then the
middle terms combine and

$$
0 \leq \|x - ty\|^2 = \|x\|^2 - 2\frac{|\langle x, y \rangle|^2}{\|y\|^2} + \frac{|\langle x, y \rangle|^2}{\|y\|^2} = \|x\|^2 - \frac{|\langle x, y \rangle|^2}{\|y\|^2},
$$

which is the inequality after rearranging (and taking square roots).

*Equality.* If $x$ and $y$ are linearly dependent, $x = \lambda y$, both sides equal
$|\lambda| \|y\|^2$. Conversely, equality forces $\|x - ty\|^2 = 0$ at the chosen $t$, i.e.
$x = ty$. $\blacksquare$

### 2.3 Hilbert Spaces

A **Hilbert space** is a complete inner product space.

**Theorem 2.5 (Orthogonal Projection).** Let $M$ be a closed subspace of a Hilbert space $H$. For
every $x \in H$, there exists a unique $y \in M$ (the **orthogonal projection** of $x$ onto $M$)
such that $x - y \perp M$. We write $y = P_M(x)$.

**Proof.** *Existence.* Let $d = \inf_{m \in M} \|x - m\|$, the distance from $x$ to $M$. Choose
$m_n \in M$ with $\|x - m_n\| \to d$. Apply the parallelogram law to the vectors
$x - m_n$ and $x - m_k$; using $u + v = 2x - m_n - m_k$ and $u - v = m_k - m_n$:

$$
\|2x - m_n - m_k\|^2 + \|m_k - m_n\|^2 = 2\|x - m_n\|^2 + 2\|x - m_k\|^2.
$$

Divide by $2$ and use $\|x - \tfrac{m_n + m_k}{2}\| \geq d$ (the midpoint is in $M$):

$$
\|m_k - m_n\|^2 = 2\|x - m_n\|^2 + 2\|x - m_k\|^2 - 4\Bigl\| x - \frac{m_n + m_k}{2} \Bigr\|^2 \leq 2\|x - m_n\|^2 + 2\|x - m_k\|^2 - 4d^2.
$$

The right side tends to $0$ as $n, k \to \infty$, so $(m_n)$ is Cauchy. Since $H$ is complete and
$M$ is closed, $m_n \to y \in M$. By continuity of the norm, $\|x - y\| = d$.

*Orthogonality.* For $m \in M$ and $\lambda \in \mathbb{C}$, the point $y + \lambda m \in M$, so

$$
d^2 \leq \|x - y - \lambda m\|^2 = \|x - y\|^2 - \bar{\lambda}\langle x - y, m \rangle - \lambda \langle m, x - y \rangle + |\lambda|^2 \|m\|^2.
$$

This holds for all $\lambda$; a quadratic with minimum at $\lambda = 0$ has vanishing linear term,
so $\langle x - y, m \rangle = 0$ (take $\lambda = \varepsilon \overline{\langle x-y, m\rangle}$
with $\varepsilon > 0$ and let $\varepsilon \to 0^+$ if a direct argument is preferred). So
$x - y \perp M$.

*Uniqueness.* If $y, y' \in M$ both work, then $x - y \perp M$ and $x - y' \perp M$, so their
difference $y - y' \in M$ is orthogonal to every element of $M$; including itself:
$\|y - y'\|^2 = \langle y - y', y - y' \rangle = 0$. $\blacksquare$

**Theorem 2.6 (Orthogonal Decomposition).** If $M$ is a closed subspace of $H$, then
$H = M \oplus M^\perp$, where $M^\perp = \{x \in H : x \perp M\}$.

**Proof.** Let $x \in H$. Set $y = P_M(x) \in M$ and $z = x - y$. Then $z \perp M$ by Theorem 2.5,
so $z \in M^\perp$ and $x = y + z$: the sum $M + M^\perp$ is all of $H$. For the directness, if
$w \in M \cap M^\perp$ then $\langle w, w \rangle = 0$, so $w = 0$. So the decomposition
$x = P_M(x) + (x - P_M(x))$ is unique. $\blacksquare$

One fact worth recording from the proof: $M^\perp$ is always a closed subspace; an intersection
of kernels of the continuous maps $x \mapsto \langle x, m \rangle$; even when $M$ itself is not
closed. And a remark for later pages: the operator $P_M$ is linear, self-adjoint, and idempotent,
with $P_M^2 = P_M = $ the identity on $M$; these projections are the building blocks of the
spectral theory developed later in this track.

### 2.4 Orthonormal Bases

A set $\{e_i\}_{i \in I} \subseteq H$ is an **orthonormal system** if
$\langle e_i, e_j\rangle = \delta_{ij}$.

**Theorem 2.7 (Bessel's Inequality).** If $\{e_i\}_{i=1}^n$ is an orthonormal set, then
$\sum_{i=1}^n |\langle x, e_i\rangle|^2 \leq \|x\|^2$.

**Proof.** Let $s = \sum_{i=1}^n \langle x, e_i \rangle e_i$ and set $w = x - s \perp s$; indeed
$\langle w, e_j \rangle = \langle x, e_j \rangle - \sum_i \langle x, e_i \rangle \langle e_i, e_j \rangle = \langle x, e_j \rangle - \langle x, e_j \rangle = 0$
for each $j$, so $w$ is orthogonal to each $e_i$, hence to their span $s$. Pythagoras:

$$
\|x\|^2 = \|s\|^2 + \|w\|^2 \geq \|s\|^2 = \sum_{i=1}^n |\langle x, e_i \rangle|^2,
$$

where $\|s\|^2 = \langle s, s \rangle = \sum_{i,j} \langle x, e_i \rangle \overline{\langle x, e_j \rangle} \langle e_i, e_j \rangle = \sum_i |\langle x, e_i \rangle|^2$
by orthonormality. $\blacksquare$

**Theorem 2.8.** A Hilbert space is separable if and only if it admits a countable orthonormal
basis.

**Proof.** *($\Leftarrow$)* If $\{e_n\}$ is a countable orthonormal basis in the sense that
$\overline{\operatorname{span}}\{e_n\} = H$, then the set of finite linear combinations with
rational-complex coefficients (rational real and imaginary parts) is countable and dense in the
span, hence in $H$.

*($\Rightarrow$)* Let $\{e_i\}_{i \in I}$ be an orthonormal basis. For distinct $i, j$ the open
balls $B(e_i, 1/2)$ and $B(e_j, 1/2)$ are disjoint; $\|e_i - e_j\| = \sqrt{2} > 1$ by Pythagoras.
A dense set must meet every one of these disjoint balls, so it has at least as many points as $I$;
separability forces $I$ countable. $\blacksquare$

**Theorem 2.9 (Parseval's Identity).** If $\{e_n\}$ is an orthonormal basis for $H$, then for every
$x \in H$:

$$
\|x\|^2 = \sum_{n=1}^{\infty} |\langle x, e_n\rangle|^2 \quad \text{and} \quad x = \sum_{n=1}^{\infty} \langle x, e_n\rangle e_n
$$

**Proof.** For each $N$, let $s_N = \sum_{n=1}^N \langle x, e_n \rangle e_n$ (the Fourier partial
sum). The argument of Bessel's theorem shows $x - s_N \perp s_N$, so

$$
\|x\|^2 = \|s_N\|^2 + \|x - s_N\|^2 = \sum_{n=1}^N |\langle x, e_n \rangle|^2 + \|x - s_N\|^2. \tag{$*$}
$$

By Bessel, $\sum_{n=1}^{\infty} |\langle x, e_n \rangle|^2 \leq \|x\|^2$, so the increasing partial
sums of squared coefficients are bounded and converge to some $\ell \leq \|x\|^2$.

It remains to show $\|x - s_N\| \to 0$; then $(*)$ with $N \to \infty$ gives Parseval's identity
$\|x\|^2 = \ell$ and convergence of $s_N$ to $x$ at once. Suppose not; then some $\varepsilon > 0$
and a subsequence have $\|x - s_{N_k}\| \geq \varepsilon$. But $\{e_n\}$ is an orthonormal
*basis*: $\overline{\operatorname{span}}\{e_n\} = H$, so there is $v \in \operatorname{span}\{e_1, \dots, e_M\}$
with $\|x - v\| < \varepsilon/2$. Choose $N_k > M$. The key property of the Fourier partial sum:
$s_N$ is the *best approximation* to $x$ in $\operatorname{span}\{e_1, \dots, e_N\}$; indeed
$x - s_N$ is orthogonal to that span, so for any $u$ in it, Pythagoras on $x - u = (x - s_N) + (s_N - u)$
gives $\|x - u\|^2 = \|x - s_N\|^2 + \|s_N - u\|^2 \geq \|x - s_N\|^2$. Applying this with
$u = v$ (valid since $N_k > M$):

$$
\varepsilon \leq \|x - s_{N_k}\| \leq \|x - v\| < \frac{\varepsilon}{2},
$$

a contradiction. $\blacksquare$

### 2.5 Riesz Representation Theorem

**Theorem 2.10 (Riesz Representation).** Let $H$ be a Hilbert space. For every bounded linear
functional $\varphi \in H^*$, there exists a unique $y \in H$ such that
$\varphi(x) = \langle x, y\rangle$ for all $x \in H$. Moreover, $\|\varphi\|_{H^*} = \|y\|_H$.

**Proof.** If $\varphi = 0$, take $y = 0$ (and uniqueness below forces it). Otherwise let
$M = \ker(\varphi)$; a closed subspace, being the kernel of a continuous map, and proper since
$\varphi \neq 0$. Pick $z \in M^\perp$ with $\|z\| = 1$: it exists because $M \subsetneq H$, so
$M^\perp \neq \{0\}$ (else $H = M \oplus \{0\} = M$ by Theorem 2.6), and normalise.

Every $x \in H$ decomposes as $x = x_0 + \alpha z$ with $x_0 \in M$ and
$\alpha = \langle x, z \rangle$ (Theorem 2.6), so

$$
\varphi(x) = \varphi(x_0) + \alpha \varphi(z) = \alpha \varphi(z) = \varphi(z) \langle x, z \rangle.
$$

Set $y = \overline{\varphi(z)}\, z$. Then for every $x$, using conjugate-linearity in the second
argument and $\|z\| = 1$:

$$
\langle x, y \rangle = \langle x, \overline{\varphi(z)}\, z \rangle = \varphi(z) \langle x, z \rangle = \varphi(x).
$$

*Norm identity.* Cauchy--Schwarz gives $\|\varphi\| = \sup_{\|x\| \leq 1} |\langle x, y \rangle| \leq \|y\|$.
Conversely, evaluate at $x = y/\|y\|$ (assuming $y \neq 0$):
$\varphi(y/\|y\|) = \langle y/\|y\|, y \rangle = \|y\|$, so $\|\varphi\| \geq \|y\|$. Hence
$\|\varphi\| = \|y\|$; with the trivial reading when $y = 0$.

*Uniqueness.* If $\langle x, y \rangle = \langle x, y' \rangle$ for all $x$, then
$\langle x, y - y' \rangle = 0$ for all $x$; take $x = y - y'$ and get $\|y - y'\|^2 = 0$. $\blacksquare$

**Corollary 2.11.** Every Hilbert space is isometrically isomorphic to its dual: $H \cong H^*$
(anti-linearly).

**Proof.** Define $\Phi : H \to H^*$ by $\Phi(y) = \varphi_y$ where
$\varphi_y(x) = \langle x, y \rangle$. By Theorem 2.10, $\Phi$ is bijective and isometric:
$\|\varphi_y\| = \|y\|$. It is *anti-linear*; $\Phi(\alpha y + \beta y') = \bar{\alpha}\Phi(y) + \bar{\beta}\Phi(y')$: because of the conjugate-linearity of the inner product in its second argument, which is the
structural price of the isomorphism. $\blacksquare$

### 2.6 Key Relationships

<div class="table-wrap">

| Structure        | Axioms added                           | Completeness? |
| ---------------- | -------------------------------------- | ------------- |
| Inner product space | Vector space + inner product           | Not required  |
| Hilbert space    | Inner product space + completeness     | Yes           |
| Banach space     | Normed vector space + completeness     | Norm may not come from inner product |

</div>

Every Hilbert space is a Banach space, but the converse fails: $L^p$ for $p \neq 2$ is Banach but
not Hilbert. The parallelogram law characterises normed spaces whose norm comes from an inner
product.

## Cross-References

- **[Normed Spaces and Banach Spaces](/11-functional-analysis/1_normed-spaces-and-banach-spaces/)**: Provides the general framework of normed vector spaces that inner product spaces specialise with additional geometric structure.
- **[Bounded Linear Operators](/11-functional-analysis/3_bounded-linear-operators/)**: Develops the theory of continuous linear maps on Hilbert spaces, where the adjoint operator plays a central role.
- **[Compact Operators](/11-functional-analysis/5_compact-operators/)**: Uses the spectral theorem for compact self-adjoint operators on Hilbert spaces to decompose operators via orthonormal bases.

- [Quantum Mechanics](https://physics.wyattau.com/5-quantum-mechanics/)
- [Graph Theory](https://computer-science.wyattau.com/docs/graph-theory)
- [Statistical Learning](https://machine-learning.wyattau.com/docs/statistical-learning)
- [Statistical Mechanics](https://physics.wyattau.com/docs/statistical-mechanics)

## Intuition

Inner product spaces generalise the dot product to abstract vector spaces, enabling notions of angle and orthogonality. An inner product measures how aligned two vectors are, with zero indicating perpendicularity. The Cauchy-Schwarz inequality bounds this alignment, and the parallelogram law characterises exactly which norms arise from inner products. Hilbert spaces are complete inner product spaces, and the Riesz representation theorem guarantees that every continuous linear functional on a Hilbert space is itself given by an inner product. This self-referential structure, where a space is isometrically isomorphic to its dual, is what makes Hilbert spaces the natural home for quantum states, Fourier series, and least-squares approximation.

### 2.7 Common Pitfalls

- **Assuming every Cauchy sequence converges in an inner product space.** Completeness is an extra
  requirement. For example, $C([0,1])$ with the $L^2$ inner product is not complete.
- **Confusing orthogonality with linear independence.** Orthogonal vectors are always linearly
  independent, but linearly independent vectors need not be orthogonal.
- **Forgetting that $M^\perp$ is closed even when $M$ is not.** The orthogonal complement is always
  a closed subspace, regardless of whether $M$ itself is closed.
- **Assuming $\langle x, y\rangle = \langle y, x\rangle$ in complex spaces.** Conjugate symmetry
  means $\langle x, y\rangle = \overline{\langle y, x\rangle}$, not equality.

### 2.8 Applications

- **Quantum mechanics:** States are vectors in a Hilbert space; observables are self-adjoint
  operators; inner products give probability amplitudes.
- **Signal processing:** $L^2(\mathbb{R})$ is the space of finite-energy signals; orthonormal bases
  (Fourier, wavelet) enable efficient compression and denoising.
- **Machine learning:** Kernel methods map data into a reproducing kernel Hilbert space (RKHS) where
  inner products correspond to kernel evaluations.
- **Numerical analysis:** The Galerkin method projects PDE solutions onto finite-dimensional
  subspaces using orthogonal projection.

### 2.9 Worked Examples

**Problem 1.** Let $H = L^2([0,1])$ with inner product $\langle f,g\rangle = \int_0^1 f(x)\overline{g(x)}\,dx$.
Show that $\{e^{2\pi i n x}\}_{n\in\mathbb{Z}}$ is an orthonormal system.

**Solution.** $\langle e^{2\pi i n x}, e^{2\pi i m x}\rangle = \int_0^1 e^{2\pi i (n-m)x}\,dx = \delta_{nm}$
by orthogonality of complex exponentials. So the system is orthonormal. Completeness (that it forms
a basis) is the statement of the Fourier series convergence theorem. $\blacksquare$

**Problem 2.** Let $M = \{f \in L^2([0,1]) : \int_0^1 f(x)\,dx = 0\}$. Find $M^\perp$.

**Solution.** $M^\perp = \{g \in L^2([0,1]) : \langle f,g\rangle = 0 \text{ for all } f \in M\}$.
The constant function $h(x) = c$ satisfies $\langle f, h\rangle = c\int_0^1 f = 0$ for all $f \in M$.
Conversely, if $g \in M^\perp$, write $g = \bar{g} + c$ where $\bar{g} \in M$ and $c = \int_0^1 g$.
Then $0 = \langle \bar{g}, g\rangle = \|\bar{g}\|^2 + c\int \bar{g} = \|\bar{g}\|^2$, so $\bar{g}=0$
and $g$ is constant. Hence $M^\perp$ is the 1-dimensional space of constant functions. $\blacksquare$

