---
date: 2026-11-07T00:00:00+00:00
title: "Level 1D: Inner Products, Orthogonality, and the Spectral Theorem"
description: "The structure that gives geometry its measurements: inner products, Cauchy-Schwarz, Gram-Schmidt, orthogonal complements and best approximation, adjoints, and the real spectral theorem proved by complexification and induction."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "17 Core Course", "url": "https://mathematics.wyattau.com/17-core-course"}, {"name": "Level 1D: Inner Products", "url": "https://mathematics.wyattau.com/17-core-course/1d-inner-products"}]
}
</script>

**The Defect.** Orthogonality arrives in linear algebra courses as a row
operation (make the columns agree to zero) or as a picture of perpendicular
arrows. Both miss the point. The inner product is a *measurement structure*
added to a vector space: it defines length, angle, distance, and
perpendicularity from a single bilinear function. Once it exists, it picks
out the maps that respect the measurement (self-adjoint ones), and the
spectral theorem says those maps are exactly the ones diagonalisable in the
most rigid way possible: by an orthonormal basis. This page proves all of it,
ending at the theorem that powers principal component analysis, quantum
mechanics, and every least-squares fit ever computed.

**The One-Line Reveal.** An inner product is one bilinear function from which
length, angle, and distance are derived; the spectral theorem says the maps
that respect this measurement can be completely understood by eigenvalues,
provided the field is honest about complex numbers.

**Scope.** From [Level 1B](/17-core-course/1b-linear-algebra/): bases, basis
extension, rank-nullity. From [Level
1C](/17-core-course/1c-eigenthings/): eigenvalues, the characteristic
polynomial, triangularisation, and the declared fundamental theorem of
algebra, which this page re-uses exactly once (to know that the
complexified characteristic polynomial splits). The page works over
$\mathbb{R}$ as the primary field; the complex Hermitian variant is flagged
wherever it differs. No other inputs are declared: Cauchy-Schwarz,
Gram-Schmidt, and the spectral theorem are all proved here.

## 1. Inner Products and Norms

**Definition.** An **inner product** on a real vector space $V$ is a function
$\langle \cdot, \cdot \rangle: V \times V \to \mathbb{R}$ that is

1. **bilinear**: linear in each argument separately;
2. **symmetric**: $\langle u, v \rangle = \langle v, u \rangle$;
3. **positive definite**: $\langle v, v \rangle \geq 0$, with equality only
   for $v = 0$.

A vector space with an inner product is an **inner product space**.

**Example (the model).** On $\mathbb{R}^n$ with the standard basis,
$\langle u, v \rangle := \sum_i u_i v_i$. Bilinearity is bilinearity of the
coordinate functions (3A's Proposition 1.2 logic), symmetry is commutativity
of addition, and positive definiteness holds because $\sum_i v_i^2 \geq 0$
with equality iff every $v_i = 0$. $\blacksquare$

**Definition.** The **norm** of $v$ is $\|v\| := \sqrt{\langle v, v
\rangle}$. Vectors are **orthogonal**, written $v \perp w$, when $\langle v,
w \rangle = 0$.

**Lemma 1.1 (polarisation).** In a real inner product space,

$$
2\langle u, v \rangle = \|u + v\|^2 - \|u\|^2 - \|v\|^2.
$$

**Proof.** Bilinearity expands $\|u+v\|^2 = \langle u+v, u+v \rangle =
\|u\|^2 + \|v\|^2 + 2\langle u, v \rangle$; the symmetry of the inner
product makes the cross terms agree. $\blacksquare$

So the inner product is recoverable from the norm: length determines angle.
This is why "geometry from one bilinear function" is literal.

**Theorem 1.2 (Cauchy-Schwarz).** For all $u, v$:
$|\langle u, v \rangle| \leq \|u\| \, \|v\|$, with equality iff $u$ and $v$
are dependent.

**Proof.** If $v = 0$, both sides are zero and the dependent case holds. Let
$v \neq 0$ and consider, for each real $t$, the nonnegative number

$$
0 \leq \|u + t v\|^2 = \|u\|^2 + 2t \langle u, v \rangle + t^2 \|v\|^2
$$

(bilinearity plus Lemma 1.1's expansion). The right side is a quadratic
polynomial in $t$ with nonnegative value at every real $t$, so its
discriminant cannot be positive:

$$
(2 \langle u, v \rangle)^2 - 4 \|v\|^2 \|u\|^2 \leq 0
\implies |\langle u, v \rangle| \leq \|u\| \, \|v\|.
$$

Equality in the quadratic argument means the polynomial attains zero, i.e.
$u + t v = 0$ for its root $t$: dependence. Conversely, dependent vectors
attain equality: for $u = c v$ both sides equal $|c| \, \|v\|^2$.
$\blacksquare$

**Theorem 1.3 (triangle inequality).** $\|u + v\| \leq \|u\| + \|v\|$, with
equality iff one vector is a nonnegative multiple of the other.

**Proof.** Square the claim and expand by bilinearity:

$$
\|u + v\|^2 = \|u\|^2 + 2 \langle u, v \rangle + \|v\|^2 \leq \|u\|^2 + 2
\|u\|\,\|v\| + \|v\|^2 = (\|u\| + \|v\|)^2,
$$

where the middle step is Cauchy-Schwarz plus symmetry ($\langle u, v \rangle
\leq |\langle u, v \rangle|$). Taking square roots (all quantities
nonnegative) gives the inequality. Equality forces $\langle u, v \rangle =
\|u\|\|v\|$, the equality case of Cauchy-Schwarz with a nonnegative sign:
dependence with a nonnegative multiple. $\blacksquare$

So $\|v - w\|$ behaves as a distance, satisfying the triangle inequality:
inner product spaces are metric spaces (the Level 2 axioms), and the
geometry is honest.

**Quick check.**

1. State the three defining properties of an inner product.
2. Why is $\|cv\| = |c|\, \|v\|$?
3. State Cauchy-Schwarz and its equality case.
4. Which polynomial does the Cauchy-Schwarz proof analyse?
5. What does polarisation recover from the norm?

*Answers:* **1.** Bilinearity, symmetry, positive definiteness. **2.**
Bilinearity: $\langle cv, cv \rangle = c^2 \langle v, v \rangle$, and the
norm is the nonnegative square root. **3.** $|\langle u, v \rangle| \leq
\|u\|\|v\|$, with equality iff $u, v$ are dependent. **4.** $\|u + tv\|^2$
as a quadratic in $t$; nonnegativity forces a nonpositive discriminant.
**5.** The inner product: $2\langle u, v \rangle = \|u+v\|^2 - \|u\|^2 -
\|v\|^2$.

## 2. Orthogonality and Gram-Schmidt

**Lemma 2.1 (Pythagoras).** If $u \perp v$ then $\|u + v\|^2 = \|u\|^2 +
\|v\|^2$.

**Proof.** Expand by bilinearity; the cross term is $2\langle u, v \rangle =
0$. $\blacksquare$

**Lemma 2.2 (orthogonal families are independent).** A list of nonzero
pairwise orthogonal vectors is linearly independent.

**Proof.** Suppose $\sum_i c_i v_i = 0$ with the $v_i$ nonzero and pairwise
orthogonal. Apply $\langle \cdot, v_j \rangle$: every term $c_i \langle
v_i, v_j \rangle$ vanishes except $i = j$, where $\langle v_j, v_j \rangle
> 0$ (positive definiteness and $v_j \neq 0$). So $c_j \langle v_j, v_j
\rangle = 0$, forcing $c_j = 0$; for every $j$. $\blacksquare$

**Theorem 2.3 (Gram-Schmidt).** Let $w_1, \dots, w_k$ be linearly
independent vectors of an inner product space. Define inductively

$$
u_1 := w_1, \qquad u_i := w_i - \sum_{j < i} \frac{\langle w_i, u_j
\rangle}{\|u_j\|^2}\, u_j \quad (i = 2, \dots, k).
$$

Then $u_1, \dots, u_k$ are pairwise orthogonal, each $u_i \neq 0$, and
$\operatorname{span}(u_1, \dots, u_i) = \operatorname{span}(w_1, \dots,
w_i)$ for every $i$. Normalising $e_i := u_i / \|u_i\|$ yields an
**orthonormal** list (pairwise orthogonal unit vectors) with the same spans.

**Proof.** Induct on $i$. Assume $u_1, \dots, u_{i-1}$ are pairwise
orthogonal, nonzero, and span the same space as $w_1, \dots, w_{i-1}$. Then

$$
\langle u_i, u_m \rangle = \langle w_i, u_m \rangle - \sum_{j < i}
\frac{\langle w_i, u_j \rangle}{\|u_j\|^2} \langle u_j, u_m \rangle
$$

and for $m < i$ the only surviving summand is $j = m$, whose coefficient
$-\frac{\langle w_i, u_m \rangle}{\|u_m\|^2} \cdot \|u_m\|^2$ cancels the
first term exactly: $\langle u_i, u_m \rangle = 0$. So $u_i$ is orthogonal
to all earlier $u_m$. Also $u_i \neq 0$: otherwise $w_i$ would lie in
$\operatorname{span}(u_1, \dots, u_{i-1}) = \operatorname{span}(w_1,
\dots, w_{i-1})$, contradicting the independence of the $w$-list. The span
identity holds because each $u_j$ ($j < i$) is, by its own defining
induction, a combination of $w$'s of index at most $j$, and conversely $w_i$
is a combination of $u_j$'s of index at most $i$ (solve the definition for
$w_i$). Normalisation preserves orthogonality and nonzero spans.
$\blacksquare$

**Corollary 2.4.** Every finite-dimensional inner product space has an
orthonormal basis, and so does every subspace of one.

**Proof.** Take any basis (they exist: 1B, Theorem 1.2 for the spanned
space), run Gram-Schmidt, and normalise: an orthonormal basis. For a
subspace $W$: it is finitely spanned (1B, Theorem 1.6), so it has a basis by
1B, Theorem 1.2; Gram-Schmidt inside $W$ (the inner product restricts).
$\blacksquare$

**Theorem 2.5 (coordinate formula).** If $e_1, \dots, e_n$ is an orthonormal
basis, every $v \in V$ satisfies $v = \sum_i \langle v, e_i \rangle e_i$.

**Proof.** Both sides equal... write $v = \sum_i c_i e_i$ by the basis
property; applying $\langle \cdot, e_j \rangle$ gives $\langle v, e_j
\rangle = \sum_i c_i \langle e_i, e_j \rangle = c_j$ by orthonormality.
Substituting $c_j = \langle v, e_j \rangle$ into the expansion is the
claim. $\blacksquare$

This is Parseval's identity's engine: in an orthonormal basis, coordinates
*are* inner products. Measurement replaces bookkeeping.

**Quick check.**

1. State Pythagoras and where its proof uses orthogonality.
2. Why is a pairwise orthogonal family of nonzero vectors automatically
   independent?
3. What does Gram-Schmidt take in and produce?
4. Why is each $u_i$ in the construction nonzero?
5. In an orthonormal basis, what are the coordinates of $v$?

*Answers:* **1.** $\|u+v\|^2 = \|u\|^2 + \|v\|^2$; the cross term is the
inner product, which is zero. **2.** Testing against $v_j$ kills every other
coefficient by orthogonality and the last by positive definiteness
(Lemma 2.2). **3.** An independent list in; an orthonormal list out, with
the same successive spans. **4.** Otherwise $w_i$ would lie in the previous
span, contradicting independence. **5.** The inner products $\langle v, e_i
\rangle$ (Theorem 2.5).

## 3. Orthogonal Complements and Projection

**Definition.** For a subspace $W \subseteq V$, the **orthogonal
complement** is $W^\perp := \{v \in V : \langle v, w \rangle = 0 \text{ for
all } w \in W\}$, a subspace (linearity in the first argument).

**Theorem 3.1 (orthogonal decomposition).** $V = W \oplus W^\perp$: every
$v \in V$ decomposes uniquely as $v = w + w'$ with $w \in W$ and $w' \in
W^\perp$.

**Proof.** Take an orthonormal basis $e_1, \dots, e_r$ of $W$ (Corollary
2.4), define $w := \sum_{i \leq r} \langle v, e_i \rangle e_i$ and $w' := v
- w$. Then $w \in W$, and for each basis vector $e_j$ of $W$:
$\langle w', e_j \rangle = \langle v, e_j \rangle - \langle w, e_j \rangle
= \langle v, e_j \rangle - \langle v, e_j \rangle = 0$ (the inner product of
$w$ with $e_j$ picks out exactly the $j$-th coefficient, Theorem 2.5's
argument on the orthonormal list). Since the $e_j$ span $W$, linearity
gives $w' \in W^\perp$. Existence done. Uniqueness: if $v = w_1 + w_1' =
w_2 + w_2'$ with $w_1 - w_2 = w_2' - w_1'$ lying in both $W$ and
$W^\perp$, it is orthogonal to itself, so $\|w_1 - w_2\|^2 = 0$ and $w_1 =
w_2$, forcing $w_1' = w_2'$ too. $\blacksquare$

**Definition.** The map $p_W: V \to W$, $p_W(v) := w$ (the $W$-component of
Theorem 3.1's decomposition) is the **orthogonal projection** onto $W$.

**Theorem 3.2 (best approximation).** For every $v \in V$ and every $w \in
W$: $\|v - p_W(v)\| \leq \|v - w\|$, with equality iff $w = p_W(v)$. The
projection is linear.

**Proof.** Write $v - w = (v - p_W(v)) + (p_W(v) - w)$; the first summand
lies in $W^\perp$, the second in $W$. Pythagoras (Lemma 2.1) gives

$$
\|v - w\|^2 = \|v - p_W(v)\|^2 + \|p_W(v) - w\|^2 \geq \|v - p_W(v)\|^2,
$$

with equality iff $p_W(v) = w$. Linearity: the decomposition of $\alpha v_1
+ \beta v_2$ is the combination of the decompositions, by uniqueness.
$\blacksquare$

This theorem is why orthonormality matters beyond geometry: expanding a
signal in an orthonormal basis *is* best approximation, and the error is
exactly the part the basis cannot see.

**Quick check.**

1. Define $W^\perp$ and say why it is a subspace.
2. State the orthogonal decomposition theorem.
3. What is the orthogonal projection $p_W$?
4. Which lemma does the best-approximation inequality use, and where?
5. When does $\|v - w\| = \|v - p_W(v)\|$ for $w \in W$?

*Answers:* **1.** The vectors orthogonal to every element of $W$; it is a
kernel-like subspace by linearity. **2.** $V = W \oplus W^\perp$, unique
decomposition (Theorem 3.1). **3.** The unique $W$-component of $v$.
**4.** Pythagoras (Lemma 2.1) on the split $v - w = (v - p_W) + (p_W - w)$.
**5.** Exactly when $w = p_W(v)$ (the second Pythagoras summand vanishes).

## 4. Adjoints

**Definition.** For a linear map $T: V \to V$, the **adjoint** is a map
$T^*: V \to V$ with $\langle T u, v \rangle = \langle u, T^* v \rangle$ for
all $u, v$. $T$ is **self-adjoint** (or symmetric) when $T^* = T$.

**Theorem 4.1 (the adjoint exists, is unique, is linear).** In a
finite-dimensional inner product space, every linear $T$ has exactly one
adjoint, and it is linear. In an orthonormal basis, the matrix of $T^*$ is
the transpose of the matrix of $T$.

**Proof.** Let $e_1, \dots, e_n$ be an orthonormal basis and let $B$ be the
matrix of $T$. First note that orthonormality converts the inner product
into a dot product of coordinates: for $x = \sum_i x_i e_i$ and $y =
\sum_j y_j e_j$, bilinearity gives $\langle x, y \rangle = \sum_{i, j}
x_i y_j \langle e_i, e_j \rangle = \sum_i x_i y_i$ (the Kronecker deltas
of orthonormality). Define $T^*$ to be the linear map whose matrix is
$B^T$ (the transpose, defined entrywise). Then $\langle T u, v \rangle =
\sum_i (Tu)_i v_i = \sum_{i, j} B_{j i} u_j v_i$, while $\langle u, T^*
v \rangle = \sum_j u_j (B^T v)_j = \sum_{i, j} B_{j i} u_j v_i$: equal.
So this $T^*$ is an adjoint. For uniqueness: if $T^*_1$ and $T^*_2$ are
both adjoints, then for all $u, v$: $\langle u, (T^*_1 - T^*_2) v \rangle
= 0$; taking $u = (T^*_1 - T^*_2) v$ gives $\| (T^*_1 - T^*_2) v \|^2 =
0$, so $T^*_1 = T^*_2$. Linearity of $T^*$ follows from the defining
identity by applying it to combinations, or directly from the transpose's
linearity. $\blacksquare$

**Proposition 4.2 (matrix characterisation).** $T$ is self-adjoint iff its
matrix in every orthonormal basis is symmetric ($B = B^T$); in a
non-orthonormal basis this characterisation can fail, which is why the
definition is via the inner product.

**Proof.** In an orthonormal basis, $T^* = T$ translates to $B^T = B$ by
Theorem 4.1's computation. Conversely a symmetric matrix gives a
self-adjoint map by the same computation in reverse. $\blacksquare$

**Quick check.**

1. Define the adjoint of $T$.
2. What is the matrix of $T^*$ in an orthonormal basis?
3. Define self-adjoint.
4. Why must an adjoint be unique? (Which norm argument?)
5. Does "symmetric matrix" depend on the basis?

*Answers:* **1.** The unique linear $T^*$ with $\langle T u, v \rangle =
\langle u, T^* v \rangle$ for all $u, v$. **2.** The transpose of $T$'s
matrix (Theorem 4.1). **3.** $T^* = T$. **4.** If two adjoints differed,
their difference applied to some $v$ would be a nonzero vector orthogonal
to every vector, including itself: norm zero, contradiction. **5.** Not in
arbitrary bases; only in orthonormal ones (Proposition 4.2).

## 5. The Spectral Theorem

**Lemma 5.1 (self-adjoint eigenvalues are real; invariant complements).**
Let $T$ be self-adjoint. (i) Every complex eigenvalue of the complexified
$T$ is real. (ii) Eigenspaces of distinct eigenvalues are orthogonal, and
$E_\lambda^\perp$ is $T$-invariant for every eigenvalue $\lambda$.

**Proof.** (ii) first, over the real field: if $x \in E_\lambda$ and $y
\in E_\mu$ with $\lambda \neq \mu$, then $\lambda \langle x, y
\rangle = \langle T x, y \rangle = \langle x, T y \rangle = \mu
\langle x, y \rangle$, so $(\lambda - \mu) \langle x, y \rangle = 0$
and $\langle x, y \rangle = 0$. For the invariance of $E_\lambda^\perp$:
take $y \in E_\lambda^\perp$ and $x \in E_\lambda$; then $\langle T
y, x \rangle = \langle y, T x \rangle = \langle y, \lambda x
\rangle = \lambda \langle y, x \rangle = 0$. Since this holds for
every $x \in E_\lambda$, it holds for every vector of their span, which
is $E_\lambda$: so $T y \in E_\lambda^\perp$.

(i) requires the complexification, defined without tensor products: set
$V_\mathbb{C} := \{u + i v\}$ (formal pairs), with complex-scalar
multiplication and the **Hermitian form** $\langle u + i v, u' + i v'
\rangle := \langle u, u' \rangle + \langle v, v' \rangle + i(\langle
v, u' \rangle - \langle u, v' \rangle)$, which is linear in the first
argument and conjugate-linear in the second. Extend $T$ by $T_\mathbb{C}(u
+ i v) := T u + i\, T v$; the self-adjoint identity survives the
extension. If $T_\mathbb{C} v = \lambda v$ with $v \neq 0$, then

$$
\lambda \langle v, v \rangle = \langle T_\mathbb{C} v, v \rangle =
\langle v, T_\mathbb{C} v \rangle = \bar{\lambda}\, \langle v, v
\rangle,
$$

the last step being conjugate-linearity in the second slot, and $\langle
v, v \rangle > 0$ (it is $\|\operatorname{Re} v\|^2 +
\|\operatorname{Im} v\|^2$). So $\lambda = \bar{\lambda}$: real.
$\blacksquare$

**Theorem 5.2 (the real spectral theorem).** Let $T: V \to V$ be
self-adjoint on a finite-dimensional real inner product space. Then $V$ has
an orthonormal basis of eigenvectors of $T$, and the matrix of $T$ in that
basis is diagonal with real entries.

**Proof.** Induct on $n$. Consider the complexification $V_\mathbb{C} =
V \otimes \mathbb{C}$ with the extended map $T_\mathbb{C}$ (still
self-adjoint for the Hermitian extension). Its characteristic polynomial
$\chi_T$ splits by the fundamental theorem of algebra (the declared input,
as in 1C), so $T_\mathbb{C}$ has an eigenvector $v \neq 0$ with
eigenvalue $\lambda$; Lemma 5.1(i) shows $\lambda \in \mathbb{R}$.
Then $T_\mathbb{C} v = \lambda v$ with $\lambda$ real means the real
and imaginary parts of $v$ are eigenvectors of the real $T$ (real
eigenvalue, real matrix action), and at least one of them is nonzero: the
real $T$ has a real eigenvector $x \neq 0$ with $T x = \lambda x$.
Normalise it to a unit vector $e_1$. The line $L = \operatorname{span}(e_1)$
is $T$-invariant, so $T$ induces $\bar{T}$ on $L^\perp$ (Lemma 5.1(ii)'s
computation shows $L^\perp$ is $T$-invariant: for $y \perp e_1$,
$\langle T y, e_1 \rangle = \langle y, T e_1 \rangle = \lambda
\langle y, e_1 \rangle = 0$, and $\dim L^\perp = n - 1$ by Theorem
3.1's decomposition). The restriction $\bar{T} := T|_{L^\perp}$ is again
self-adjoint (the adjoint of a restriction to an invariant complement is
the restriction of the adjoint: the defining identity restricted to
$L^\perp \times L^\perp$). By the induction hypothesis, $L^\perp$ has
an orthonormal eigenbasis of $\bar{T}$; prefixing $e_1$ gives an
orthonormal list of $n$ eigenvectors of $T$, which are independent (Lemma
2.2) and span (count and rank-nullity): an orthonormal eigenbasis. In it,
$T$'s matrix is diagonal with the real eigenvalues.
$\blacksquare$

**Corollary 5.3.** A real symmetric $n \times n$ matrix $A$ can be written
$A = Q D Q^T$ with $Q$ orthogonal ($Q^T Q = I$) and $D$ diagonal real: the
principal axis decomposition. In particular $A$ is diagonalisable, all
eigenvalues are real, and $\det A$ is the product of the eigenvalues.

**Proof.** $A$ is the matrix of a self-adjoint endomorphism on
$\mathbb{R}^n$ with the dot product (Proposition 4.2). The spectral
theorem gives an orthonormal eigenbasis; the matrix $Q$ with those
eigenvectors as columns is orthogonal ($Q^T Q = I$: orthonormal columns)
and $A Q = Q D$, so $A = Q D Q^T$. $\blacksquare$

**Quick check.**

1. Why are a self-adjoint map's eigenvalues real?
2. State the Hermitian symmetry used in that proof.
3. Why is $E_\lambda^\perp$ invariant under a self-adjoint $T$?
4. What does the complexification buy in the spectral proof?
5. Write the principal axis decomposition of a symmetric matrix.

*Answers:* **1.** $\lambda \langle v, v \rangle = \langle v, T v
\rangle = \bar{\lambda} \langle v, v \rangle$ in the complexification,
so $\lambda$ equals its conjugate (Lemma 5.1). **2.** $\langle u, w
\rangle = \overline{\langle w, u \rangle}$. **3.** $\langle T y, x
\rangle = \langle y, T x \rangle = \lambda \langle y, x \rangle = 0$
for $x \in E_\lambda$, $y \perp E_\lambda$. **4.** It makes the
characteristic polynomial split (via the declared fundamental theorem of
algebra) while Lemma 5.1 pulls the eigenvalues back to the reals. **5.** $A
= Q D Q^T$ with $Q$ orthogonal, $D$ real diagonal (Corollary 5.3).

## 6. Problems

**Problems.** The quick checks above tested recall. These chain several
results and require full written arguments.

1. Prove the **parallelogram law**: $\|u + v\|^2 + \|u - v\|^2 = 2\|u\|^2 +
   2\|v\|^2$, and conclude that not every norm on $\mathbb{R}^2$ comes from
   an inner product (exhibit a norm violating it, e.g. the maximum norm).
   (Expand both squares by bilinearity; the cross terms cancel in the sum.
   For the converse failure: the maximum norm's unit ball has corners, and
   the parallelogram law fails on $(1,0)$, $(0,1)$.)
2. Prove that a vector orthogonal to a spanning list is zero. (Linearity of
   the inner product in the first argument.)
3. Prove that $\dim W + \dim W^\perp = \dim V$ in two ways: from the
   orthogonal decomposition (Theorem 3.1) and from rank-nullity applied to
   $p_W$.
4. Prove that $(W^\perp)^\perp = W$ for subspaces of a finite-dimensional
   inner product space. (The decomposition theorem applied twice; $W
   \subseteq (W^\perp)^\perp$ by symmetry of the real inner product, and
   dimensions match.)
5. Prove that the orthogonal projection $p_W$ is self-adjoint and satisfies
   $p_W^2 = p_W$. (Compute $\langle p_W u, v \rangle$ via the orthonormal
   basis formula, Theorem 2.5; and $p_W(p_W(v))$ is the $W$-component of a
   vector already in $W$.)
6. Prove that two self-adjoint maps commute iff their product is
   self-adjoint. ($(ST)^* = T^* S^* = TS$, proved from the defining
   identity twice; so $(ST)^* = ST$ iff $TS = ST$.)
7. Harder: prove that every subspace's orthogonal projection minimises
   distance *simultaneously* for all $v$: the map $w \mapsto \|v -
   w\|^2$ on $W$ is a convex quadratic with unique minimiser $p_W(v)$.
   (Write $w = p_W(v) + z$ with $z \in W$; expand by Pythagoras; the square
   of $\|z\|$ is the only variable term.)

### The One-Line Reveal (for this page)

The entire page follows from one function: the inner product defines length
(polarisation in reverse defines it back), orthogonality (its vanishing),
and thereby the decomposition $V = W \oplus W^\perp$ that turns every
subspace into coordinates. Adjoints are what the measurement does to maps;
self-adjoint maps are the ones the measurement cannot confuse; and the
spectral theorem is the induction that says their eigenspaces tile the
space orthogonally.

### Where to go next

- Level 1E: Canonical Forms – what remains when the map is *not*
  diagonalisable: Jordan form, rational canonical form, and the structure
  theorem. Under construction; the link lands here when it ships.
- [Level 1C: Eigenvectors](/17-core-course/1c-eigenthings/) – the
  eigenvalue machinery this page upgrades to orthonormal bases.
- [Linear Algebra Done Wrong](https://www.math.brown.edu/~treil/ladw/) –
  Treil's chapters on inner product spaces and spectral theory.
