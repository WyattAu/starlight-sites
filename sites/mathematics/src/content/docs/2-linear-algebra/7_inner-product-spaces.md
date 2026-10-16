---

date: 2026-07-23T21:57:32+01:00
title: "Inner Product Spaces"
tags:
  - Mathematics
  - University
description: "Inner product spaces: the axioms, the norm they induce, orthogonality, the Gram-Schmidt process, orthogonal projection and why it is the closest point, least squares approximation, and the L^2 case. An inner product is the extra structure that gives a vector space lengths, angles and a notion of perpendicular. With recall prompts, counterexamples by name and interleaving problems. Tier U."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "2 Linear Algebra", "url": "https://mathematics.wyattau.com/2-linear-algebra"}, {"name": "7_inner Product Spaces", "url": "https://mathematics.wyattau.com/2-linear-algebra/7_inner-product-spaces"}]
}
</script>

## Recall prompts

Attempt these from memory *before* reading.

- State the three defining properties of an inner product.
- Why is the conjugate symmetry
  $\langle u, v\rangle = \overline{\langle v, u\rangle}$ rather than plain
  symmetry?
- Write the norm induced by an inner product.
- State the Cauchy-Schwarz inequality. What does it let you define?
- What is the orthogonal complement of a subspace?

Check your answers against the text. Prompt 2 is the one that matters for
quantum mechanics: without the conjugate, a complex vector space could not have
$\langle v, v\rangle \ge 0$.

## Motivation: an inner product is the structure you have to *add*

A vector space has no lengths and no angles. You cannot ask whether two vectors
are perpendicular, because nothing in the eight axioms mentions geometry. That
is not an oversight -- it is what makes the definition apply to so many things.

An inner product is the extra structure that supplies all of it. Given one,
you get:

- a **norm**, $\lVert v\rVert = \sqrt{\langle v, v\rangle}$;
- **angles**, through the Cauchy-Schwarz inequality
  $\lvert\langle u,v\rangle\rvert \le \lVert u\rVert\lVert v\rVert$, which
  makes $\cos\theta = \frac{\langle u,v\rangle}{\lVert u\rVert\lVert v\rVert}$
  well defined;
- **orthogonality**, $\langle u, v\rangle = 0$;
- and, most usefully, the ability to *decompose* a vector into independent
  pieces.

**Why the conjugate matters.** Over $\mathbb{R}$ symmetry is enough. Over
$\mathbb{C}$, plain symmetry would force $\langle v, v\rangle$ to be complex,
and then $\lVert v\rVert$ has no meaning. Requiring conjugate symmetry makes
$\langle v,v\rangle$ real, so positivity can be stated, and it is the reason
quantum mechanical inner products are $\langle\phi|\psi\rangle$ rather than
$\langle\psi|\phi\rangle$.

**Orthogonal projection is why any of this is practical.** Given a subspace,
every vector splits uniquely into a piece inside it and a piece perpendicular
to it. The inside piece is the *best approximation* the subspace can offer --
and "best approximation given a subspace" is precisely what least squares asks.
The entire theory of fitting data to a model is an orthogonal projection.

### 7.1 Definition of an Inner Product

An **inner product** on a vector space $V$ over $F$ (where $F = \mathbb{R}$ or $\mathbb{C}$) is a
Function $\langle \cdot, \cdot \rangle : V \times V \to F$ satisfying:

1. **Conjugate symmetry**:
   $\langle \mathbf{u}, \mathbf{v} \rangle = \overline{\langle \mathbf{v}, \mathbf{u} \rangle}$
2. **Linearity in the first argument**:
   $\langle \alpha\mathbf{u} + \beta\mathbf{w}, \mathbf{v} \rangle = \alpha\langle \mathbf{u}, \mathbf{v} \rangle + \beta\langle \mathbf{w}, \mathbf{v} \rangle$
3. **Positive definiteness**: $\langle \mathbf{v}, \mathbf{v} \rangle \geq 0$ with equality iff
   $\mathbf{v} = \mathbf{0}$

A vector space equipped with an inner product is called an **inner product space**.

**Example.** The standard inner product on $\mathbb{R}^n$ is
$\langle \mathbf{x}, \mathbf{y} \rangle = \sum_{i=1}^n x_i y_i$. On $\mathbb{C}^n$
$\langle \mathbf{x}, \mathbf{y} \rangle = \sum_{i=1}^n x_i \overline{y_i}$.

**Example.** On $C[a,b]$ The $L^2$ inner product is $\langle f, g \rangle = \int_a^b f(x)g(x)\,dx$.

### 7.2 Norms

Every inner product induces a **norm**:

$$
\lVert \mathbf{v} \rVert = \sqrt{\langle \mathbf{v}, \mathbf{v} \rangle}
$$

**Theorem 7.1 (Cauchy--Schwarz Inequality).** For all $\mathbf{u}, \mathbf{v} \in V$

$$
\lvert\langle \mathbf{u}, \mathbf{v} \rangle\rvert \leq \lVert \mathbf{u} \rVert \, \lVert \mathbf{v} \rVert
$$

With equality if and only if $\mathbf{u}$ and $\mathbf{v}$ are linearly dependent.

_Proof._ If $\mathbf{v} = \mathbf{0}$ Both sides are 0 and the result holds. Assume
$\mathbf{v} \neq \mathbf{0}$. For any $t \in \mathbb{R}$ (or $\mathbb{C}$), positive definiteness
gives

$$
0 \leq \langle \mathbf{u} - t\mathbf{v}, \mathbf{u} - t\mathbf{v} \rangle = \langle \mathbf{u}, \mathbf{u} \rangle - t\langle \mathbf{v}, \mathbf{u} \rangle - \overline{t}\langle \mathbf{u}, \mathbf{v} \rangle + \lvert t \rvert^2 \langle \mathbf{v}, \mathbf{v} \rangle
$$

Set $t = \frac{\langle \mathbf{u}, \mathbf{v} \rangle}{\langle \mathbf{v}, \mathbf{v} \rangle}$ (the
value that minimises the right side):

$$
0 \leq \lVert \mathbf{u} \rVert^2 - \frac{\lvert\langle \mathbf{u}, \mathbf{v} \rangle\rvert^2}{\lVert \mathbf{v} \rVert^2}
$$

Rearranging:
$\lvert\langle \mathbf{u}, \mathbf{v} \rangle\rvert^2 \leq \lVert \mathbf{u} \rVert^2 \lVert \mathbf{v} \rVert^2$.
Taking square roots gives the result. Equality holds iff $\mathbf{u} - t\mathbf{v} = \mathbf{0}$
I.e., $\mathbf{u}$ and $\mathbf{v}$ are linearly dependent. $\blacksquare$

**Theorem 7.2 (Triangle Inequality).**

$$
\lVert \mathbf{u} + \mathbf{v} \rVert \leq \lVert \mathbf{u} \rVert + \lVert \mathbf{v} \rVert
$$

_Proof._

$$
\lVert \mathbf{u} + \mathbf{v} \rVert^2 = \langle \mathbf{u} + \mathbf{v}, \mathbf{u} + \mathbf{v} \rangle = \lVert \mathbf{u} \rVert^2 + 2\,\mathrm{Re}\langle \mathbf{u}, \mathbf{v} \rangle + \lVert \mathbf{v} \rVert^2
$$

By Cauchy--Schwarz,
$\mathrm{Re}\langle \mathbf{u}, \mathbf{v} \rangle \leq \lvert\langle \mathbf{u}, \mathbf{v} \rangle\rvert \leq \lVert \mathbf{u} \rVert \lVert \mathbf{v} \rVert$ So

$$
\lVert \mathbf{u} + \mathbf{v} \rVert^2 \leq \lVert \mathbf{u} \rVert^2 + 2\lVert \mathbf{u} \rVert \lVert \mathbf{v} \rVert + \lVert \mathbf{v} \rVert^2 = (\lVert \mathbf{u} \rVert + \lVert \mathbf{v} \rVert)^2
$$

Taking square roots gives the result. $\blacksquare$

### 7.3 Orthogonality

Two vectors $\mathbf{u}, \mathbf{v}$ are **orthogonal** if
$\langle \mathbf{u}, \mathbf{v} \rangle = 0$. We write $\mathbf{u} \perp \mathbf{v}$.

An **orthonormal set** $\{e_1, \ldots, e_k\}$ satisfies $\langle e_i, e_j \rangle = \delta_{ij}$.

**Theorem 7.3 (Pythagorean Theorem).** If $\mathbf{u} \perp \mathbf{v}$ Then

$$
\lVert \mathbf{u} + \mathbf{v} \rVert^2 = \lVert \mathbf{u} \rVert^2 + \lVert \mathbf{v} \rVert^2
$$

_Proof._
$\lVert \mathbf{u} + \mathbf{v} \rVert^2 = \lVert \mathbf{u} \rVert^2 + 2\langle \mathbf{u}, \mathbf{v} \rangle + \lVert \mathbf{v} \rVert^2 = \lVert \mathbf{u} \rVert^2 + \lVert \mathbf{v} \rVert^2$.
$\blacksquare$

**Proposition 7.4.** Every orthonormal set is linearly independent.

_Proof._ If $\sum_{i=1}^k \alpha_i e_i = \mathbf{0}$ Then taking the inner product with $e_j$:
$\alpha_j = \langle \sum \alpha_i e_i, e_j \rangle = \langle \mathbf{0}, e_j \rangle = 0$ for each
$j$. $\blacksquare$

### 7.4 Gram--Schmidt Process

The **Gram--Schmidt process** converts a linearly independent set
$\{\mathbf{v}_1, \ldots, \mathbf{v}_n\}$ into an orthonormal set $\{e_1, \ldots, e_n\}$:

$$
\mathbf{u}_1 = \mathbf{v}_1, \quad e_1 = \frac{\mathbf{u}_1}{\lVert \mathbf{u}_1 \rVert}
$$

$$
\mathbf{u}_k = \mathbf{v}_k - \sum_{i=1}^{k-1} \langle \mathbf{v}_k, e_i \rangle e_i, \quad e_k = \frac{\mathbf{u}_k}{\lVert \mathbf{u}_k \rVert}
$$

**Proposition 7.5.** At each step,
$\mathrm{span}\{e_1, \ldots, e_k\} = \mathrm{span}\{\mathbf{v}_1, \ldots, \mathbf{v}_k\}$.

_Proof._ By construction, $\mathbf{u}_k$ is $\mathbf{v}_k$ minus its projection onto
$\mathrm{span}\{e_1, \ldots, e_{k-1}\} = \mathrm{span}\{\mathbf{v}_1, \ldots, \mathbf{v}_{k-1}\}$.
So $\mathbf{u}_k \in \mathrm{span}\{\mathbf{v}_1, \ldots, \mathbf{v}_k\}$ and
$\mathbf{v}_k = \mathbf{u}_k + \sum_{i=1}^{k-1}\langle \mathbf{v}_k, e_i \rangle e_i \in \mathrm{span}\{\mathbf{u}_1, \ldots, \mathbf{u}_k\}$.
Since each $e_i$ is a scalar multiple of $\mathbf{u}_i$ The spans coincide. $\blacksquare$

### 7.5 Orthogonal Projection

The **orthogonal projection** of $\mathbf{v}$ onto a subspace $W$ with orthonormal basis
$\{e_1, \ldots, e_k\}$ is

$$
\mathrm{proj_W}(\mathbf{v}) = \sum_{i=1}^k \langle \mathbf{v}, e_i \rangle e_i
$$

**Theorem 7.6 (Best Approximation).** Among all vectors in $W$ The orthogonal projection
$\mathrm{proj_W}(\mathbf{v})$ minimises the distance to $\mathbf{v}$:

$$
\lVert \mathbf{v} - \mathrm{proj_W}(\mathbf{v}) \rVert \leq \lVert \mathbf{v} - \mathbf{w} \rVert \quad \mathrm{for}~all~ \mathbf{w} \in W
$$

_Proof._ For any $\mathbf{w} \in W$ Write
$\mathbf{v} - \mathbf{w} = (\mathbf{v} - \mathrm{proj_W}(\mathbf{v})) + (\mathrm{proj_W}(\mathbf{v}) - \mathbf{w})$.
The first term is orthogonal to $W$ (hence to the second term, which lies in $W$), so by the
Pythagorean theorem:

$$
\lVert \mathbf{v} - \mathbf{w} \rVert^2 = \lVert \mathbf{v} - \mathrm{proj_W}(\mathbf{v}) \rVert^2 + \lVert \mathrm{proj_W}(\mathbf{v}) - \mathbf{w} \rVert^2 \geq \lVert \mathbf{v} - \mathrm{proj_W}(\mathbf{v}) \rVert^2
$$

With equality iff $\mathbf{w} = \mathrm{proj_W}(\mathbf{v})$. $\blacksquare$

### 7.6 Least Squares Approximation

A fundamental application of orthogonal projection is fitting functions to data. Given a subspace
$W$ of an inner product space $V$ and a target $\mathbf{v} \in V$ The best approximation in $W$ Is
the orthogonal projection $\mathrm{proj_W}(\mathbf{v})$.

### 7.7 Worked Example: Gram--Schmidt

**Problem.** Apply the Gram--Schmidt process to $\mathbf{v}_1 = (1, 1, 0)$
$\mathbf{v}_2 = (1, 0, 1)$, $\mathbf{v}_3 = (0, 1, 1)$ in $\mathbb{R}^3$ with the standard inner
Product.

<details>
<summary>Solution</summary>

$\mathbf{u}_1 = \mathbf{v}_1 = (1, 1, 0)$, $\lVert \mathbf{u}_1 \rVert = \sqrt{2}$,
$e_1 = \frac{1}{\sqrt{2}}(1, 1, 0)$.

$\mathbf{u}_2 = \mathbf{v}_2 - \langle \mathbf{v}_2, e_1 \rangle e_1 = (1, 0, 1) - \frac{1}{\sqrt{2}} \cdot \frac{1}{\sqrt{2}}(1, 1, 0) = (1, 0, 1) - \frac{1}{2}(1, 1, 0) = (\frac{1}{2}, -\frac{1}{2}, 1)$

$\lVert \mathbf{u}_2 \rVert = \sqrt{1/4 + 1/4 + 1} = \sqrt{3/2}$,
$e_2 = \frac{1}{\sqrt{3/2}}(\frac{1}{2}, -\frac{1}{2}, 1) = \frac{1}{\sqrt{6}}(1, -1, 2)$.

$\mathbf{u}_3 = \mathbf{v}_3 - \langle \mathbf{v}_3, e_1 \rangle e_1 - \langle \mathbf{v}_3, e_2 \rangle e_2$

$\langle \mathbf{v}_3, e_1 \rangle = \frac{1}{\sqrt{2}}(0 + 1 + 0) = \frac{1}{\sqrt{2}}$

$\langle \mathbf{v}_3, e_2 \rangle = \frac{1}{\sqrt{6}}(0 - 1 + 2) = \frac{1}{\sqrt{6}}$

$\mathbf{u}_3 = (0, 1, 1) - \frac{1}{\sqrt{2}} \cdot \frac{1}{\sqrt{2}}(1, 1, 0) - \frac{1}{\sqrt{6}} \cdot \frac{1}{\sqrt{6}}(1, -1, 2) = (0, 1, 1) - \frac{1}{2}(1, 1, 0) - \frac{1}{6}(1, -1, 2)$

$= (-\frac{1}{2} - \frac{1}{6}, 1 - \frac{1}{2} + \frac{1}{6}, 1 - \frac{1}{3}) = (-\frac{2}{3}, \frac{2}{3}, \frac{2}{3})$

$\lVert \mathbf{u}_3 \rVert = \sqrt{4/9 + 4/9 + 4/9} = \sqrt{4/3} = 2/\sqrt{3}$,
$e_3 = \frac{\sqrt{3}}{2}(-\frac{2}{3}, \frac{2}{3}, \frac{2}{3}) = \frac{1}{\sqrt{3}}(-1, 1, 1)$.

**Verification:** $\langle e_1, e_2 \rangle = \frac{1}{\sqrt{12}}(1 - 1 + 0) = 0$. $\checkmark$
$\langle e_1, e_3 \rangle = \frac{1}{\sqrt{6}}(-1 + 1 + 0) = 0$. $\checkmark$
$\langle e_2, e_3 \rangle = \frac{1}{\sqrt{18}}(-1 - 1 + 2) = 0$. $\checkmark$

The orthonormal basis is
$\left\{\frac{1}{\sqrt{2}}(1,1,0),\ \frac{1}{\sqrt{6}}(1,-1,2),\ \frac{1}{\sqrt{3}}(-1,1,1)\right\}$.
$\blacksquare$

</details>

:::caution
the input vectors are Linearly dependent, one of the $\mathbf{u}_k$ will be the zero vector, and the
process will fail (attempting to divide by zero in the normalisation step).

### 7.8 Worked Example: Orthogonal Projection onto a Plane

**Problem.** Find the orthogonal projection of $\mathbf{v} = (3, -1, 2)$ onto the plane $W$ spanned
by $(1, 0, 1)$ and $(0, 1, 1)$ in $\mathbb{R}^3$ with the standard inner product. Also find the
distance from $\mathbf{v}$ to $W$.

<details>
<summary>Solution</summary>

First, apply Gram--Schmidt to obtain an orthonormal basis for $W$.

$\mathbf{u}_1 = (1, 0, 1)$, $\lVert \mathbf{u}_1 \rVert = \sqrt{2}$,
$e_1 = \frac{1}{\sqrt{2}}(1, 0, 1)$.

$\mathbf{u}_2 = (0, 1, 1) - \langle (0,1,1), e_1 \rangle e_1 = (0, 1, 1) - \frac{1}{\sqrt{2}} \cdot \frac{1}{\sqrt{2}}(1, 0, 1) = (0, 1, 1) - \frac{1}{2}(1, 0, 1) = (-\frac{1}{2}, 1, \frac{1}{2})$.

$\lVert \mathbf{u}_2 \rVert = \sqrt{1/4 + 1 + 1/4} = \sqrt{3/2}$,
$e_2 = \frac{1}{\sqrt{6}}(-1, 2, 1)$.

Now compute the projection:

$\langle \mathbf{v}, e_1 \rangle = \frac{1}{\sqrt{2}}(3 + 0 + 2) = \frac{5}{\sqrt{2}}$

$\langle \mathbf{v}, e_2 \rangle = \frac{1}{\sqrt{6}}(-3 - 2 + 2) = \frac{-3}{\sqrt{6}}$

$\mathrm{proj_W}(\mathbf{v}) = \frac{5}{\sqrt{2}} \cdot \frac{1}{\sqrt{2}}(1, 0, 1) + \frac{-3}{\sqrt{6}} \cdot \frac{1}{\sqrt{6}}(-1, 2, 1)$

$= \frac{5}{2}(1, 0, 1) + \frac{-3}{6}(-1, 2, 1) = (\frac{5}{2}, 0, \frac{5}{2}) + (\frac{1}{2}, -1, -\frac{1}{2}) = (3, -1, 2)$

The residual is $\mathbf{v} - \mathrm{proj_W}(\mathbf{v}) = (0, 0, 0)$ So the distance is 0. This
means $\mathbf{v} \in W$ itself. Indeed,
$\mathbf{v} = 3(1, 0, 1) - (0, 1, 1) \in \mathrm{span}\{(1,0,1), (0,1,1)\}$. $\blacksquare$

</details>

### 7.9 Worked Example: $L^2$ Least Squares Approximation

**Problem.** Find the constant function $c$ (i.e., the best approximation by a degree-0 polynomial)
That minimises $\int_0^1 (e^x - c)^2\,dx$.

<details>
<summary>Solution</summary>

We want the orthogonal projection of $f(x) = e^x$ onto the subspace $W = \mathrm{span}\{1\}$ in the
$L^2[0,1]$ inner product space. The orthonormal basis for $W$ is $e_1 = 1$ (since
$\lVert 1 \rVert^2 = \int_0^1 1\,dx = 1$).

$\mathrm{proj_W}(f) = \langle f, 1 \rangle \cdot 1 = \left(\int_0^1 e^x\,dx\right) \cdot 1 = (e - 1) \cdot 1$

So the best constant approximation is $c = e - 1 \approx 1.718$.

**Verification:** The error is $e^x - (e-1)$. Expanding $e^x$ as a Taylor series around $x = 1/2$:
The constant term is $e^{1/2} \approx 1.649$ But our answer $e - 1 \approx 1.718$ is the
$L^2$-optimal constant, not the Taylor approximation. The two optimisation criteria differ.
$\blacksquare$

</details>

### 7.10 Intuition: Why Do Inner Products Matter?

An inner product generalises the familiar dot product to abstract vector spaces, including function spaces. It gives you two crucial pieces of information: the length of a vector (via the induced norm) and the angle between vectors (via the inner product value). Without an inner product, you can measure linear structure but not geometric structure.

The Cauchy-Schwarz inequality is the foundation: it says the "correlation" between two vectors is bounded by their lengths, just as the cosine of an angle is bounded between negative one and one. Orthogonal projection is the geometric operation of finding the closest point in a subspace, which generalises the idea of "shadow" from physical light to arbitrary dimensions. The Gram-Schmidt process is the systematic way to build an orthonormal basis, analogous to aligning coordinate axes with the principal directions of your data. In function spaces like $L^2$, the inner product measures how similar two functions are, which is the basis of Fourier analysis and signal processing.

### 7.11 Common Pitfalls

- **The Cauchy--Schwarz inequality is not the triangle inequality.** Cauchy--Schwarz bounds the
  inner product by the product of norms; the triangle inequality bounds the norm of a sum by the sum
  of norms. They are related (the triangle inequality follows from Cauchy--Schwarz) but distinct.
- **Gram--Schmidt is numerically unstable.** For floating-point computation, modified Gram--Schmidt
  or Householder reflections are preferred.
- **Orthogonal projection decomposes $\mathbf{v}$ uniquely.**
  $\mathbf{v} = \mathrm{proj_W}(\mathbf{v}) + \mathbf{v}^\perp$ where
  $\mathbf{v}^\perp \in W^\perp$. This decomposition is unique and is called the **orthogonal
  decomposition**.

---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "2 Linear Algebra", "url": "https://mathematics.wyattau.com/2-linear-algebra"}, {"name": "7_inner Product Spaces", "url": "https://mathematics.wyattau.com/2-linear-algebra/7_inner-product-spaces"}]
}
</script>

## Counterexamples worth knowing by name

| Claim | True? | Counterexample |
| ----- | ----- | -------------- |
| Every norm comes from an inner product | no | the $\ell^1$ and $\ell^\infty$ norms on $\mathbb{R}^2$ do not; only the $\ell^2$ norm does |
| Orthogonal vectors are independent | no | only if they are *non-zero*; $\langle 0, v\rangle = 0$ for every $v$ |
| An orthogonal set is automatically a basis | no | it must also span; orthogonality gives independence for free but not spanning |
| Cauchy-Schwarz is a special case of something stronger | yes | it is the case $k=2$ of Hölder's inequality, and the proof technique is the same |
| Gram-Schmidt changes the span | no | it produces an orthonormal basis *for the same space* at every step |
| The orthogonal projection is the closest point | yes | and this is a theorem, not a definition -- it is what makes least squares meaningful |
| Inner products are unique | no | $\langle u,v\rangle = u^Tv$ and $\langle u,v\rangle = 2u^Tv$ both satisfy the axioms |
| Two vectors with zero inner product must have zero length | no | $\langle (1,0), (0,1)\rangle = 0$ and both have length one |

The first row is the one that shapes functional analysis. A norm comes from an
inner product exactly when it satisfies the parallelogram law, and spaces whose
norms fail that -- $\ell^1$, $\ell^\infty$, $C[0,1]$ with the sup norm -- are
the ones where orthogonal projection and least squares stop working. That is
why $L^2$ is the Hilbert space that appears in quantum mechanics rather than
$L^p$ for other $p$.

## Where the research frontier is

- **Hilbert spaces.** Completing an inner product space gives a Hilbert space,
  and everything finite-dimensional carries over except compactness of the unit
  ball. That is the boundary crossed on the [functional analysis
  track](/11-functional-analysis/1_normed-spaces-and-banach-spaces/).
- **Numerical stability of Gram-Schmidt.** The classical algorithm is
  numerically unstable and the modified version is not; why, and what that
  costs, is an active question in numerical analysis.
- **Frames.** Generalising bases to overcomplete spanning sets, which is what
  makes robust signal representation possible; the theory is still developing.
- **Reproducing kernel Hilbert spaces.** Inner products on spaces of functions,
  which is the mathematical foundation of Gaussian processes and kernel methods
  in machine learning.
- **Quantum information.** The geometry of the Bloch sphere is inner-product
  geometry, and distinguishing quantum states is a question about how their
  inner products behave.

## Interleaving problems

Mix these with [Eigenvalues and
Eigenvectors](/2-linear-algebra/5_eigenvalues-and-eigenvectors/), [Vectors and
Vector Spaces](/2-linear-algebra/1_vectors-and-vector-spaces/), [Quantum
Operators](https://physics.wyattau.com/5-quantum-mechanics/4_operators-and-observables/), [Inner Product
and Hilbert
Spaces](/11-functional-analysis/2_inner-product-spaces-and-hilbert-spaces/) and
[Spectral Theory](/12-graduate-analysis/1_spectral-theory-of-self-adjoint-operators/).

1. (Axioms.) Show that $\langle u, v\rangle = u^T \begin{pmatrix} 2 & 0 \\ 0 &
   1 \end{pmatrix} v$ satisfies the inner product axioms on $\mathbb{R}^2$,
   and find the unit circle under the norm it induces.
2. (Norms.) Show that the $\ell^1$ norm on $\mathbb{R}^2$ fails the
   parallelogram law, and conclude that it does not come from an inner
   product.
3. (Gram-Schmidt.) Apply Gram-Schmidt to $\{(1,1,0), (1,0,1), (0,1,1)\}$ in
   $\mathbb{R}^3$, and verify the result is orthonormal. Then explain why the
   third vector changes when the first is rescaled.
4. (Least squares.) Show that the least-squares solution of $Ax = b$ solves the
   normal equations $A^TAx = A^Tb$, by writing $b$ as its projection onto the
   column space plus an orthogonal remainder.
5. (Quantum mechanics.) Show that the Born rule
   $P(a_n) = |\langle a_n|\psi\rangle|^2$ is a statement about orthogonal
   projection, and explain why probabilities must be projection norms rather
   than inner products.
6. (Spectral theory.) Show that a self-adjoint operator has orthogonal
   eigenvectors for distinct eigenvalues, using the inner product rather than
   determinants. That is the finite-dimensional seed of the spectral theorem.

## Cross-References

- **[Eigenvalues and Eigenvectors](/2-linear-algebra/5_eigenvalues-and-eigenvectors/)**: The spectral theorem for symmetric matrices guarantees an orthonormal eigenbasis, which is an inner product space concept.
- **[Vectors and Vector Spaces](/2-linear-algebra/1_vectors-and-vector-spaces/)**: Inner product spaces are vector spaces equipped with an inner product that generalises the dot product.
- **[Singular Value Decomposition](/2-linear-algebra/8_singular-value-decomposition/)**: The SVD decomposes a matrix using orthonormal bases derived from inner products on $A^T A$ and $AA^T$.
:::

- [Quantum Mechanics](https://physics.wyattau.com/5-quantum-mechanics/)
- [Graph Theory](https://computer-science.wyattau.com/docs/graph-theory)
