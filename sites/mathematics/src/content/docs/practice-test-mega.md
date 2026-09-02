---
title: "University Mathematics Practice Test — 30 Challenging Problems"
description: "30 university-level mathematics problems covering Calculus, Linear Algebra, Abstract Algebra, and Real Analysis. Problem-solving with detailed proofs and solutions."
date: 2026-07-24
tags:
  - mathematics
  - practice-test
  - university
  - undergraduate
categories:
  - practice-test
---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"name": "Home", "url": "https://mathematics.wyattau.com"},
    {"name": "Practice Test", "url": "https://mathematics.wyattau.com/practice-test-mega"}
  ]
}
</script>

## University Mathematics Practice Test — 30 Challenging Problems

This practice test covers 30 problems across four major domains of university mathematics: Multivariable Calculus, Linear Algebra, Abstract Algebra, and Real Analysis. Each problem requires rigorous reasoning, proof construction, and the application of fundamental theorems. Work through the problems with pen and paper before checking the solutions.

## Instructions

- **Time limit:** 120 minutes (4 minutes per problem)
- **Format:** Problem-solving — show all working and proofs
- **Marking:** 1 mark per problem, 30 marks total
- **Conditions:** Attempt without notes. Write complete, rigorous proofs.
- **After the test:** Check the solutions at the bottom. Study the proof techniques for any problems you got wrong.

| Domain | Problems | Marks |
| --- | --- | --- |
| Multivariable Calculus | P1–P8 | 8 |
| Linear Algebra | P9–P16 | 8 |
| Abstract Algebra | P17–P23 | 7 |
| Real Analysis | P24–P30 | 7 |
| **Total** | **30** | **30** |

---

## Multivariable Calculus (P1–P8)

### P1 — Multiple Integration

Evaluate the double integral:

$$\iint_D e^{x^2} \, dA$$

where $D$ is the region bounded by $y = 0$, $y = x$, and $x = 1$.

**Solution:**

The region $D$ is described by $0 \leq x \leq 1$ and $0 \leq y \leq x$. Since $e^{x^2}$ has no elementary antiderivative with respect to $x$, we must integrate with respect to $y$ first:

$$\int_0^1 \int_0^x e^{x^2} \, dy \, dx = \int_0^1 x \, e^{x^2} \, dx$$

Substituting $u = x^2$, $du = 2x \, dx$:

$$= \frac{1}{2} \int_0^1 e^u \, du = \frac{1}{2}(e - 1)$$

`medium` — 1 mark

---

### P2 — Gradient and Directional Derivatives

Find the directional derivative of $f(x,y,z) = x^2 y + yz^3$ at the point $(1,2,-1)$ in the direction of the vector $\mathbf{v} = 2\mathbf{i} - \mathbf{j} + 2\mathbf{k}$.

**Solution:**

The gradient is:

$$\nabla f = (2xy, \, x^2 + z^3, \, 3yz^2)$$

At $(1,2,-1)$:

$$\nabla f(1,2,-1) = (4, \, 1 - 1, \, 3 \cdot 2 \cdot 1) = (4, 0, 6)$$

The unit vector in the direction of $\mathbf{v}$ is:

$$\hat{\mathbf{v}} = \frac{1}{3}(2, -1, 2)$$

The directional derivative is:

$$D_{\hat{\mathbf{v}}} f = \nabla f \cdot \hat{\mathbf{v}} = \frac{1}{3}(8 + 0 + 12) = \frac{20}{3}$$

`medium` — 1 mark

---

### P3 — Line Integrals

Compute the line integral $\int_C \mathbf{F} \cdot d\mathbf{r}$ where $\mathbf{F} = (y, x, z)$ and $C$ is the helix $\mathbf{r}(t) = (\cos t, \sin t, t)$ for $0 \leq t \leq 2\pi$.

**Solution:**

$\mathbf{r}'(t) = (-\sin t, \cos t, 1)$.

$\mathbf{F}(\mathbf{r}(t)) = (\sin t, \cos t, t)$.

$$\mathbf{F} \cdot \mathbf{r}' = -\sin^2 t + \cos^2 t + t = \cos 2t + t$$

$$\int_0^{2\pi} (\cos 2t + t) \, dt = \left[\frac{\sin 2t}{2} + \frac{t^2}{2}\right]_0^{2\pi} = 2\pi^2$$

`medium` — 1 mark

---

### P4 — Surface Integrals

Find the flux of $\mathbf{F} = (x, y, z)$ across the portion of the sphere $x^2 + y^2 + z^2 = 4$ lying above the plane $z = 1$.

**Solution:**

Using the Divergence Theorem on the closed region bounded by the spherical cap and the disk $x^2 + y^2 \leq 3$ at $z = 1$:

$$\iiint_V (\nabla \cdot \mathbf{F}) \, dV = \iiint_V 3 \, dV = 3 \, \text{Vol}(V)$$

The volume of the spherical cap of height $h = 1$ from a sphere of radius $R = 2$:

$$V_{\text{cap}} = \frac{\pi h^2}{3}(3R - h) = \frac{\pi}{3}(6 - 1) = \frac{5\pi}{3}$$

The flux through the disk (normal $-\mathbf{k}$, $z = 1$):

$$\iint_{\text{disk}} \mathbf{F} \cdot (-\mathbf{k}) \, dA = -\iint_{\text{disk}} 1 \, dA = -3\pi$$

Therefore the flux through the spherical cap:

$$\Phi_{\text{cap}} = 3 \cdot \frac{5\pi}{3} - (-3\pi) = 5\pi + 3\pi = 8\pi$$

`hard` — 1 mark

---

### P5 — Green's Theorem

Use Green's Theorem to evaluate $\oint_C (xy \, dx + x^2 \, dy)$ where $C$ is the boundary of the region enclosed by $y = x$ and $y = x^2$.

**Solution:**

By Green's Theorem with $P = xy$, $Q = x^2$:

$$\oint_C P \, dx + Q \, dy = \iint_D \left(\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\right) dA = \iint_D (2x - x) \, dA = \iint_D x \, dA$$

The region is bounded by $y = x^2$ (below) and $y = x$ (above), with $0 \leq x \leq 1$:

$$\int_0^1 \int_{x^2}^x x \, dy \, dx = \int_0^1 x(x - x^2) \, dx = \int_0^1 (x^2 - x^3) \, dx = \frac{1}{3} - \frac{1}{4} = \frac{1}{12}$$

`medium` — 1 mark

---

### P6 — Stokes' Theorem

Verify Stokes' Theorem for $\mathbf{F} = (z, x, y)$ on the hemisphere $z = \sqrt{1 - x^2 - y^2}$ with boundary $C$ the unit circle in the $xy$-plane.

**Solution:**

On $C$: $\mathbf{r}(t) = (\cos t, \sin t, 0)$, $\mathbf{r}'(t) = (-\sin t, \cos t, 0)$.

$$\oint_C \mathbf{F} \cdot d\mathbf{r} = \int_0^{2\pi} (0 \cdot (-\sin t) + \cos t \cdot \cos t + \sin t \cdot 0) \, dt = \int_0^{2\pi} \cos^2 t \, dt = \pi$$

For the surface integral, $\nabla \times \mathbf{F} = (1, 1, 1)$. On the hemisphere with outward normal:

$$\iint_S (\nabla \times \mathbf{F}) \cdot d\mathbf{S} = \iint_S \frac{x + y + z}{\sqrt{1-x^2-y^2}} \cdot \frac{1}{\sqrt{1-x^2-y^2}} \, dA$$

By symmetry, $\iint x \, dA = \iint y \, dA = 0$, leaving:

$$\iint_D \frac{z}{z^2} \cdot z^2 \, dA = \iint_D 1 \, dA = \pi$$

Both integrals equal $\pi$, confirming Stokes' Theorem.

`hard` — 1 mark

---

### P7 — Taylor Series in Several Variables

Find the second-order Taylor expansion of $f(x,y) = e^{x}\cos(y)$ about the origin.

**Solution:**

At the origin: $f(0,0) = 1$.

First partials: $f_x = e^x \cos y$, $f_y = -e^x \sin y$. At $(0,0)$: $f_x = 1$, $f_y = 0$.

Second partials: $f_{xx} = e^x \cos y$, $f_{xy} = -e^x \sin y$, $f_{yy} = -e^x \cos y$. At $(0,0)$: $f_{xx} = 1$, $f_{xy} = 0$, $f_{yy} = -1$.

$$T_2(x,y) = 1 + x + \frac{1}{2}(x^2 - y^2) + \cdots$$

`easy` — 1 mark

---

### P8 — Lagrange Multipliers

Find the maximum and minimum values of $f(x,y,z) = x + 2y + 3z$ subject to $x^2 + y^2 + z^2 = 1$.

**Solution:**

$\nabla f = (1, 2, 3)$, $\nabla g = (2x, 2y, 2z)$ where $g = x^2 + y^2 + z^2 - 1$.

$\nabla f = \lambda \nabla g$ gives $1 = 2\lambda x$, $2 = 2\lambda y$, $3 = 2\lambda z$, so $x = 1/(2\lambda)$, $y = 2/(2\lambda)$, $z = 3/(2\lambda)$.

Substituting into the constraint:

$$\frac{1 + 4 + 9}{4\lambda^2} = 1 \implies \lambda = \pm\frac{\sqrt{14}}{2}$$

Maximum: $f = \frac{1}{2\lambda}(1 + 4 + 9) = \frac{14}{2\lambda} = \sqrt{14}$ at $(x,y,z) = \frac{1}{\sqrt{14}}(1,2,3)$.

Minimum: $f = -\sqrt{14}$ at $(x,y,z) = -\frac{1}{\sqrt{14}}(1,2,3)$.

`medium` — 1 mark

---

## Linear Algebra (P9–P16)

### P9 — Eigenvalues and Eigenvectors

Find the eigenvalues and eigenvectors of the matrix:

$$A = \begin{pmatrix} 3 & 1 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 5 \end{pmatrix}$$

**Solution:**

The characteristic polynomial is:

$$\det(A - \lambda I) = (3-\lambda)(2-\lambda)(5-\lambda) = 0$$

Eigenvalues: $\lambda_1 = 2$, $\lambda_2 = 3$, $\lambda_3 = 5$.

For $\lambda_1 = 2$: $(A - 2I)\mathbf{v} = 0$ gives $\mathbf{v}_1 = (1, -1, 0)^T$.

For $\lambda_2 = 3$: $(A - 3I)\mathbf{v} = 0$ gives $\mathbf{v}_2 = (1, 0, 0)^T$.

For $\lambda_3 = 5$: $(A - 5I)\mathbf{v} = 0$ gives $\mathbf{v}_3 = (0, 0, 1)^T$.

`easy` — 1 mark

---

### P10 — Diagonalisation

Determine whether the matrix $A = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}$ is diagonalisable.

**Solution:**

The characteristic polynomial is $(1-\lambda)^2 = 0$, giving a repeated eigenvalue $\lambda = 1$ with algebraic multiplicity 2.

$(A - I) = \begin{pmatrix} 0 & 2 \\ 0 & 0 \end{pmatrix}$. The null space is spanned by $(1, 0)^T$, so the geometric multiplicity is 1.

Since the geometric multiplicity (1) is less than the algebraic multiplicity (2), $A$ is **not diagonalisable**.

`easy` — 1 mark

---

### P11 — Inner Product Spaces

Let $V = P_2(\mathbb{R})$ with inner product $\langle f, g \rangle = \int_0^1 f(x)g(x) \, dx$. Apply the Gram-Schmidt process to the basis $\{1, x, x^2\}$.

**Solution:**

$e_1 = 1$.

$e_2 = x - \frac{\langle x, 1 \rangle}{\langle 1, 1 \rangle} \cdot 1 = x - \frac{1/2}{1} = x - \frac{1}{2}$.

$\langle x^2, 1 \rangle = \frac{1}{3}$, $\langle x^2, x - 1/2 \rangle = \int_0^1 x^2(x - 1/2) \, dx = \frac{1}{4} - \frac{1}{6} = \frac{1}{12}$.

$\langle x - 1/2, x - 1/2 \rangle = \int_0^1 (x - 1/2)^2 \, dx = \frac{1}{12}$.

$$e_3 = x^2 - \frac{1/3}{1} \cdot 1 - \frac{1/12}{1/12}\left(x - \frac{1}{2}\right) = x^2 - x + \frac{1}{6}$$

The orthogonal basis is $\left\{1, \, x - \frac{1}{2}, \, x^2 - x + \frac{1}{6}\right\}$.

`medium` — 1 mark

---

### P12 — Linear Transformations

Let $T: \mathbb{R}^3 \to \mathbb{R}^3$ be defined by $T(x,y,z) = (x + y, y + z, z + x)$. Find the rank and nullity of $T$.

**Solution:**

The matrix of $T$ relative to the standard basis is:

$$A = \begin{pmatrix} 1 & 1 & 0 \\ 0 & 1 & 1 \\ 1 & 0 & 1 \end{pmatrix}$$

Row reducing:

$$\begin{pmatrix} 1 & 1 & 0 \\ 0 & 1 & 1 \\ 0 & -1 & 1 \end{pmatrix} \to \begin{pmatrix} 1 & 1 & 0 \\ 0 & 1 & 1 \\ 0 & 0 & 2 \end{pmatrix}$$

The rank is 3 and the nullity is 0 (since $\det(A) = 2 \neq 0$). $T$ is invertible.

`easy` — 1 mark

---

### P13 — Quadratic Forms

Classify the quadratic form $Q(x,y,z) = x^2 + 4y^2 + z^2 + 2xy - 2xz$.

**Solution:**

The associated symmetric matrix is:

$$A = \begin{pmatrix} 1 & 1 & -1 \\ 1 & 4 & 0 \\ -1 & 0 & 1 \end{pmatrix}$$

Leading principal minors: $\Delta_1 = 1 > 0$, $\Delta_2 = 4 - 1 = 3 > 0$, $\Delta_3 = \det(A) = 1(4) - 1(1) + (-1)(4) = 4 - 1 - 4 = -1 < 0$.

By Sylvester's criterion, $A$ has signature $(2, 1)$: two positive eigenvalues and one negative eigenvalue. The quadratic form is **indefinite**.

`medium` — 1 mark

---

### P14 — Vector Spaces

Prove that the set of all $2 \times 2$ symmetric matrices forms a subspace of $M_{2 \times 2}(\mathbb{R})$, and find its dimension.

**Solution:**

Let $W = \{A \in M_{2 \times 2} : A^T = A\}$.

1. **Zero matrix:** $0^T = 0$, so $0 \in W$.

2. **Closure under addition:** If $A^T = A$ and $B^T = B$, then $(A+B)^T = A^T + B^T = A + B$, so $A + B \in W$.

3. **Closure under scalar multiplication:** $(cA)^T = cA^T = cA$, so $cA \in W$.

A general symmetric $2 \times 2$ matrix has the form $\begin{pmatrix} a & b \\ b & d \end{pmatrix}$, parameterised by $(a, b, d)$. The basis is:

$$\left\{\begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}, \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}, \begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}\right\}$$

The dimension is 3.

`medium` — 1 mark

---

### P15 — Spectral Theorem

State the Spectral Theorem for real symmetric matrices and sketch a proof outline.

**Solution:**

**Theorem:** If $A$ is a real symmetric matrix ($A = A^T$), then $A$ is orthogonally diagonalisable: there exists an orthogonal matrix $Q$ ($Q^T Q = I$) and a diagonal matrix $D$ such that $A = QDQ^T$.

**Proof outline:**

1. **Real eigenvalues:** The characteristic polynomial of $A$ has real coefficients, and since $A$ is symmetric, all eigenvalues are real (if $\lambda$ is complex with eigenvector $\mathbf{v}$, then $\bar{\lambda} = \lambda$ follows from $A = A^T$).

2. **Orthogonal eigenvectors:** If $\mathbf{v}_1$ and $\mathbf{v}_2$ are eigenvectors of $A$ with distinct eigenvalues $\lambda_1 \neq \lambda_2$, then $\mathbf{v}_1 \cdot \mathbf{v}_2 = 0$. This follows from $\lambda_1 \mathbf{v}_1 \cdot \mathbf{v}_2 = (A\mathbf{v}_1) \cdot \mathbf{v}_2 = \mathbf{v}_1 \cdot (A\mathbf{v}_2) = \lambda_2 \mathbf{v}_1 \cdot \mathbf{v}_2$.

3. **Orthonormal basis:** By induction on dimension, we can construct an orthonormal basis of eigenvectors, giving $A = QDQ^T$.

`hard` — 1 mark

---

### P16 — Jordan Normal Form

Find the Jordan normal form of $A = \begin{pmatrix} 2 & 1 & 0 \\ 0 & 2 & 1 \\ 0 & 0 & 2 \end{pmatrix}$ and compute $A^{10}$.

**Solution:**

$A$ already has the Jordan normal form $J = \begin{pmatrix} 2 & 1 & 0 \\ 0 & 2 & 1 \\ 0 & 0 & 2 \end{pmatrix}$ with eigenvalue $\lambda = 2$ of algebraic multiplicity 3 and geometric multiplicity 1.

We write $A = 2I + N$ where $N = \begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{pmatrix}$ is nilpotent ($N^3 = 0$).

Using the binomial theorem (valid since $2I$ and $N$ commute):

$$A^{10} = \sum_{k=0}^{2} \binom{10}{k} 2^{10-k} N^k = 2^{10}I + 10 \cdot 2^9 N + 45 \cdot 2^8 N^2$$

$$= \begin{pmatrix} 1024 & 0 & 0 \\ 0 & 1024 & 0 \\ 0 & 0 & 1024 \end{pmatrix} + \begin{pmatrix} 0 & 5120 & 0 \\ 0 & 0 & 5120 \\ 0 & 0 & 0 \end{pmatrix} + \begin{pmatrix} 0 & 0 & 11520 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}$$

$$A^{10} = \begin{pmatrix} 1024 & 5120 & 11520 \\ 0 & 1024 & 5120 \\ 0 & 0 & 1024 \end{pmatrix}$$

`hard` — 1 mark

---

## Abstract Algebra (P17–P23)

### P17 — Group Theory

Prove that every group of order 4 is abelian.

**Solution:**

Let $|G| = 4$. By Lagrange's theorem, every non-identity element has order 2 or 4.

**Case 1:** $G$ contains an element of order 4. Then $G = \langle a \rangle \cong \mathbb{Z}_4$, which is abelian.

**Case 2:** Every non-identity element has order 2. Then $g^2 = e$ for all $g \in G$, so $g = g^{-1}$. For any $a, b \in G$:

$$ab = (ab)^{-1} = b^{-1}a^{-1} = ba$$

Therefore $G$ is abelian. In fact, $G \cong \mathbb{Z}_2 \times \mathbb{Z}_2$ (the Klein four-group).

`medium` — 1 mark

---

### P18 — Ring Theory

Prove that in an integral domain, the cancellation law holds: if $ab = ac$ and $a \neq 0$, then $b = c$.

**Solution:**

Let $D$ be an integral domain and suppose $ab = ac$ with $a \neq 0$.

Then $ab - ac = 0$, so $a(b - c) = 0$.

Since $D$ is an integral domain, it has no zero divisors: if $xy = 0$ then $x = 0$ or $y = 0$.

Since $a \neq 0$, we must have $b - c = 0$, i.e., $b = c$.

`easy` — 1 mark

---

### P19 — Quotient Groups

Let $H$ be a subgroup of index 2 in a group $G$. Prove that $H$ is normal in $G$.

**Solution:**

Since $[G:H] = 2$, there are exactly two left cosets of $H$ in $G$: $H$ itself and $G \setminus H = aH$ for any $a \notin H$. Similarly, the right cosets are $H$ and $Ha = G \setminus H$.

For any $g \in G$:
- If $g \in H$, then $gH = H = Hg$.
- If $g \notin H$, then $gH = G \setminus H = Hg$.

In both cases, $gH = Hg$ for all $g \in G$, so $H \trianglelefteq G$.

`medium` — 1 mark

---

### P20 — Group Homomorphisms

Let $\phi: G \to H$ be a group homomorphism. Prove that $\ker(\phi)$ is a normal subgroup of $G$.

**Solution:**

1. **Subgroup:** $\phi(e_G) = e_H$, so $e_G \in \ker(\phi)$. If $a, b \in \ker(\phi)$, then $\phi(ab^{-1}) = \phi(a)\phi(b)^{-1} = e_H \cdot e_H = e_H$, so $ab^{-1} \in \ker(\phi)$.

2. **Normal:** For any $g \in G$ and $k \in \ker(\phi)$:

$$\phi(gkg^{-1}) = \phi(g)\phi(k)\phi(g)^{-1} = \phi(g) \cdot e_H \cdot \phi(g)^{-1} = e_H$$

So $gkg^{-1} \in \ker(\phi)$, proving $\ker(\phi) \trianglelefteq G$.

`medium` — 1 mark

---

### P21 — Polynomial Rings

Find the gcd of $f(x) = x^4 + 1$ and $g(x) = x^3 + x + 1$ in $\mathbb{F}_2[x]$ using the Euclidean algorithm.

**Solution:**

Working in $\mathbb{F}_2$ (where $-1 = 1$):

$x^4 + 1 = (x + 1)(x^3 + x + 1) + (x^2 + x + 1)$

$x^3 + x + 1 = x(x^2 + x + 1) + (x^2 + x + 1) + (x^2 + 1) = (x+1)(x^2+x+1) + x$

Wait, let me redo this more carefully:

Dividing $x^3 + x + 1$ by $x^2 + x + 1$:

$x^3 + x + 1 = x \cdot (x^2 + x + 1) + (x^2 + x + 1) + x^3 + x + 1 - x(x^2+x+1)$

$x(x^2+x+1) = x^3 + x^2 + x$

$x^3 + x + 1 - (x^3 + x^2 + x) = x^2 + 1$

So $x^3 + x + 1 = x(x^2 + x + 1) + (x^2 + 1)$.

Now dividing $x^2 + x + 1$ by $x^2 + 1$:

$x^2 + x + 1 = 1 \cdot (x^2 + 1) + x$

Dividing $x^2 + 1$ by $x$:

$x^2 + 1 = x \cdot x + 1$

Dividing $x$ by $1$:

$x = x \cdot 1 + 0$

The last nonzero remainder is $1$, so $\gcd(f, g) = 1$ — they are coprime.

`hard` — 1 mark

---

### P22 — Field Extensions

Find the degree $[\mathbb{Q}(\sqrt{2}, \sqrt{3}) : \mathbb{Q}]$ and construct a basis.

**Solution:**

We build the extension in stages:

$[\mathbb{Q}(\sqrt{2}) : \mathbb{Q}] = 2$ with basis $\{1, \sqrt{2}\}$, since $x^2 - 2$ is irreducible over $\mathbb{Q}$.

$[\mathbb{Q}(\sqrt{2}, \sqrt{3}) : \mathbb{Q}(\sqrt{2})] = 2$ with basis $\{1, \sqrt{3}\}$ over $\mathbb{Q}(\sqrt{2})$, since $\sqrt{3} \notin \mathbb{Q}(\sqrt{2})$ (if $\sqrt{3} = a + b\sqrt{2}$ then $3 = a^2 + 2b^2 + 2ab\sqrt{2}$, forcing $ab = 0$, which gives a contradiction).

By the tower law:

$$[\mathbb{Q}(\sqrt{2}, \sqrt{3}) : \mathbb{Q}] = [\mathbb{Q}(\sqrt{2}, \sqrt{3}) : \mathbb{Q}(\sqrt{2})] \cdot [\mathbb{Q}(\sqrt{2}) : \mathbb{Q}] = 2 \cdot 2 = 4$$

A basis is $\{1, \sqrt{2}, \sqrt{3}, \sqrt{6}\}$.

`medium` — 1 mark

---

### P23 — Sylow Theorems

Use the Sylow theorems to show that every group of order 15 is cyclic.

**Solution:**

$|G| = 15 = 3 \cdot 5$.

By Sylow's theorems:

- The number $n_5$ of Sylow 5-subgroups satisfies $n_5 \equiv 1 \pmod{5}$ and $n_5 \mid 3$. So $n_5 = 1$.
- The number $n_3$ of Sylow 3-subgroups satisfies $n_3 \equiv 1 \pmod{3}$ and $n_3 \mid 5$. So $n_3 = 1$.

Since both Sylow subgroups are unique, they are normal. Let $P \cong \mathbb{Z}_5$ and $Q \cong \mathbb{Z}_3$. Since $P \cap Q = \{e\}$ and $PQ = G$, we have $G \cong P \times Q \cong \mathbb{Z}_5 \times \mathbb{Z}_3 \cong \mathbb{Z}_{15}$ (since $\gcd(3,5) = 1$). Therefore $G$ is cyclic.

`medium` — 1 mark

---

## Real Analysis (P24–P30)

### P24 — Sequences and Limits

Prove that the sequence $a_n = \frac{n}{n+1}$ converges, and find its limit.

**Solution:**

**Claim:** $a_n \to 1$ as $n \to \infty$.

**Proof:** For any $\epsilon > 0$, choose $N > \frac{1}{\epsilon}$. For all $n > N$:

$$|a_n - 1| = \left|\frac{n}{n+1} - 1\right| = \frac{1}{n+1} < \frac{1}{n} < \frac{1}{N} < \epsilon$$

Therefore $\lim_{n \to \infty} a_n = 1$.

`easy` — 1 mark

---

### P25 — Series

Determine whether $\sum_{n=1}^{\infty} \frac{n^2}{2^n}$ converges.

**Solution:**

Apply the ratio test:

$$\frac{a_{n+1}}{a_n} = \frac{(n+1)^2}{2^{n+1}} \cdot \frac{2^n}{n^2} = \frac{1}{2}\left(\frac{n+1}{n}\right)^2 \to \frac{1}{2} < 1$$

Since the limit is less than 1, the series **converges** by the ratio test.

`easy` — 1 mark

---

### P26 — Continuity

Prove that $f(x) = x^2$ is continuous at $x = 3$ using the $\epsilon$-$\delta$ definition.

**Solution:**

We need: for every $\epsilon > 0$, there exists $\delta > 0$ such that $|x - 3| < \delta \implies |x^2 - 9| < \epsilon$.

$|x^2 - 9| = |x - 3| \cdot |x + 3|$.

If $|x - 3| < 1$, then $2 < x < 4$, so $|x + 3| < 7$.

Choose $\delta = \min\left(1, \frac{\epsilon}{7}\right)$. Then:

$$|x^2 - 9| = |x - 3| \cdot |x + 3| < \delta \cdot 7 \leq \epsilon$$

`medium` — 1 mark

---

### P27 — Uniform Convergence

Show that $f_n(x) = \frac{x}{n}$ converges pointwise but not uniformly on $\mathbb{R}$.

**Solution:**

**Pointwise convergence:** For each fixed $x \in \mathbb{R}$:

$$\lim_{n \to \infty} f_n(x) = \lim_{n \to \infty} \frac{x}{n} = 0$$

So $f_n \to f$ where $f(x) = 0$.

**Not uniform:** For uniform convergence, we need $\sup_{x \in \mathbb{R}} |f_n(x) - f(x)| \to 0$. But:

$$\sup_{x \in \mathbb{R}} \frac{|x|}{n} = \infty$$

for every $n$, so the convergence is not uniform on $\mathbb{R}$.

(Note: convergence is uniform on any bounded subset $[-M, M]$ since $\sup \frac{|x|}{n} = \frac{M}{n} \to 0$.)

`medium` — 1 mark

---

### P28 — Differentiation

State and prove the Mean Value Theorem.

**Solution:**

**Theorem:** If $f$ is continuous on $[a,b]$ and differentiable on $(a,b)$, then there exists $c \in (a,b)$ such that:

$$f'(c) = \frac{f(b) - f(a)}{b - a}$$

**Proof:** Define $g(x) = f(x) - f(a) - \frac{f(b)-f(a)}{b-a}(x-a)$. Then $g(a) = g(b) = 0$.

By Rolle's theorem (since $g$ is continuous on $[a,b]$, differentiable on $(a,b)$, and $g(a) = g(b)$), there exists $c \in (a,b)$ with $g'(c) = 0$.

$g'(c) = f'(c) - \frac{f(b)-f(a)}{b-a} = 0$, giving $f'(c) = \frac{f(b)-f(a)}{b-a}$.

`hard` — 1 mark

---

### P29 — Integration

Prove that if $f$ is Riemann integrable on $[a,b]$ and $f(x) \geq 0$ for all $x$, then $\int_a^b f(x) \, dx \geq 0$.

**Solution:**

For any partition $P = \{x_0, x_1, \ldots, x_n\}$ of $[a,b]$, the lower Darboux sum is:

$$L(f, P) = \sum_{i=1}^n m_i \Delta x_i$$

where $m_i = \inf_{x \in [x_{i-1}, x_i]} f(x)$. Since $f(x) \geq 0$ everywhere, $m_i \geq 0$ for all $i$, and $\Delta x_i > 0$, so $L(f, P) \geq 0$.

The Riemann integral is $\int_a^b f = \sup_P L(f, P) \geq 0$.

`medium` — 1 mark

---

### P30 — Compactness

Prove that a closed and bounded subset of $\mathbb{R}$ is compact (Heine-Borel theorem).

**Solution:**

**Theorem:** A subset $K \subseteq \mathbb{R}$ is compact if and only if it is closed and bounded.

**Proof ($\Rightarrow$):** If $K$ is compact, consider the open cover $\{(-n, n) : n \in \mathbb{N}\}$. This has a finite subcover $\{(-n_1, n_1), \ldots, (-n_k, n_k)\}$, so $K \subseteq (-N, N)$ where $N = \max(n_i)$. Thus $K$ is bounded.

To show $K$ is closed, suppose $x$ is a limit point of $K$ but $x \notin K$. For each $k \in \mathbb{N}$, the set $U_k = \mathbb{R} \setminus [x - 1/k, x + 1/k]$ is open. The family $\{U_k\}$ covers $K$ (since $x \notin K$, each point of $K$ is at positive distance from $x$). By compactness, $K \subseteq U_{k_1} \cup \cdots \cup U_{k_m} = \mathbb{R} \setminus [x - 1/N, x + 1/N]$ where $N = \max(k_i)$. But $x$ is a limit point, so $K \cap (x - 1/N, x + 1/N) \neq \emptyset$ — contradiction.

`hard` — 1 mark

---

## Answer Key

<details>
<summary>Click to reveal the answer key</summary>

### Multivariable Calculus

| Problem | Key Result |
| --- | --- |
| P1 | (e - 1)/2 |
| P2 | 20/3 |
| P3 | 2 pi^2 |
| P4 | 8 pi |
| P5 | 1/12 |
| P6 | Both integrals equal pi |
| P7 | 1 + x + (x^2 - y^2)/2 |
| P8 | Maximum: sqrt(14); Minimum: -sqrt(14) |

### Linear Algebra

| Problem | Key Result |
| --- | --- |
| P9 | lambda = 2, 3, 5 with eigenvectors (1,-1,0), (1,0,0), (0,0,1) |
| P10 | Not diagonalisable (geometric multiplicity < algebraic) |
| P11 | {1, x - 1/2, x^2 - x + 1/6} |
| P12 | Rank 3, nullity 0 |
| P13 | Indefinite (signature (2,1)) |
| P14 | Dimension 3 |
| P15 | A = QDQ^T with Q orthogonal |
| P16 | J with eigenvalue 2, A^10 = 2^10 I + 10*2^9 N + 45*2^8 N^2 |

### Abstract Algebra

| Problem | Key Result |
| --- | --- |
| P17 | All groups of order 4 are abelian |
| P18 | Cancellation follows from no zero divisors |
| P19 | Index 2 subgroups are always normal |
| P20 | Kernel is always normal |
| P21 | gcd = 1 (coprime) |
| P22 | Degree 4, basis {1, sqrt(2), sqrt(3), sqrt(6)} |
| P23 | G is cyclic (Z_15) |

### Real Analysis

| Problem | Key Result |
| --- | --- |
| P24 | Limit is 1 |
| P25 | Converges (ratio test) |
| P26 | delta = min(1, epsilon/7) |
| P27 | Pointwise yes, uniform no |
| P28 | MVT: f'(c) = (f(b) - f(a))/(b - a) |
| P29 | Integral is non-negative |
| P30 | Heine-Borel: closed and bounded iff compact |

</details>

---

## Difficulty Breakdown

| Difficulty | Count |
| --- | --- |
| Easy | 7 |
| Medium | 17 |
| Hard | 6 |

---

## Cross-References

- **[Multivariable Calculus](4-multivariable-calculus)** — Multiple integration, vector calculus, Green's/Stokes'/Divergence theorems
- **[Linear Algebra](2-linear-algebra)** — Eigenvalues, diagonalisation, inner products, quadratic forms
- **[Abstract Algebra](1-abstract-algebra)** — Groups, rings, fields, homomorphisms, Sylow theory
- **[Real Analysis](3-real-analysis)** — Sequences, series, continuity, differentiation, integration
- **[Linear Algebra Practice](practice-linear-algebra)** — Additional linear algebra exercises

---

## Tips for Using This Practice Test

1. **Write complete proofs.** University mathematics demands rigour — every claim must be justified.
2. **Check your work.** Verify dimensions, signs, and boundary cases. Dimensional analysis catches many errors.
3. **Study the proof techniques.** The solutions demonstrate key methods: induction, contradiction, construction, and the $\epsilon$-$\delta$ argument.
4. **Understand definitions.** Many problems test whether you can apply definitions precisely (e.g., uniform convergence, normal subgroups).
5. **Retake after one week.** Mathematics requires understanding, not memorisation. Spaced repetition builds lasting knowledge.

---

*Last updated: 24 July 2026*

*Written by Wyatt. For questions or feedback, visit [wyattau.com](https://wyattau.com).*
