---

date: 2026-07-23T21:57:32+01:00
title: Vectors and Vector Spaces
tags:
  - Mathematics
  - University
description: 'A over a field ( or ) is a set equipped With two operations: Comprehensive educational content coverage with definitions and practice problems.'
------:::note[Historical Context]
The vector space was introduced by Giuseppe Peano (1888), building on Grassmann's Ausdehnungslehre (1844). The modern axiomatic approach was established by Banach (1920). Every vector space has a basis (proved via Zorn's Lemma, 1935). Vector spaces connect to representation theory, where groups act on vector spaces.
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "2 Linear Algebra", "url": "https://mathematics.wyattau.com/2-linear-algebra"}, {"name": "1_vectors And Vector Spaces", "url": "https://mathematics.wyattau.com/2-linear-algebra/1_vectors-and-vector-spaces"}]
}
</script>

### 1.1 Definition of a Vector Space

A **vector space** over a field $F$ ( $\mathbb{R}$ or $\mathbb{C}$) is a set $V$ equipped With two
operations:

1. **Vector addition**: $+ : V \times V \to V$
2. **Scalar multiplication**: $\cdot : F \times V \to V$

Satisfying the following axioms for all $\mathbf{u}, \mathbf{v}, \mathbf{w} \in V$ and all
$\alpha, \beta \in F$:

1. **Commutativity**: $\mathbf{u} + \mathbf{v} = \mathbf{v} + \mathbf{u}$
2. **Associativity of addition**:
   $(\mathbf{u} + \mathbf{v}) + \mathbf{w} = \mathbf{u} + (\mathbf{v} + \mathbf{w})$
3. **Additive identity**: There exists $\mathbf{0} \in V$ such that
   $\mathbf{v} + \mathbf{0} = \mathbf{v}$
4. **Additive inverse**: For each $\mathbf{v}$There exists $-\mathbf{v}$ such that
   $\mathbf{v} + (-\mathbf{v}) = \mathbf{0}$
5. **Compatibility of scalar multiplication**: $\alpha(\beta \mathbf{v}) = (\alpha\beta)\mathbf{v}$
6. **Identity element of scalar multiplication**: $1 \cdot \mathbf{v} = \mathbf{v}$
7. **Distributivity over vector addition**:
   $\alpha(\mathbf{u} + \mathbf{v}) = \alpha\mathbf{u} + \alpha\mathbf{v}$
8. **Distributivity over scalar addition**:
   $(\alpha + \beta)\mathbf{v} = \alpha\mathbf{v} + \beta\mathbf{v}$

_Intuition._ The abstract definition captures the algebraic structure shared by diverse objects:
Geometric arrows, polynomials, functions, matrices. The axioms encode exactly what we need for
Linear combinations to behave reasonably.

### 1.2 Examples

**Example 1.** $\mathbb{R}^n$ with component-wise addition and scalar multiplication is a vector
space Over $\mathbb{R}$.

**Example 2.** The set $\mathcal{P}_n$ of all polynomials of degree at most $n$ with real
coefficients, With the usual polynomial addition and scalar multiplication, is a vector space over
$\mathbb{R}$. Its dimension is $n + 1$With standard basis $\{1, x, x^2, \ldots, x^n\}$.

**Example 3.** The set $C[a,b]$ of all continuous real-valued functions on $[a,b]$With point-wise
Addition and scalar multiplication, is a vector space over $\mathbb{R}$. This space is
Infinite-dimensional.

**Example 4.** The set $\mathcal{M}_{m \times n}(\mathbb{R})$ of all $m \times n$ real matrices is a
Vector space over $\mathbb{R}$.

**Example 5 (Function spaces).** The set $\mathcal{F}(\mathbb{R}, \mathbb{R})$ of all functions
$f : \mathbb{R} \to \mathbb{R}$ is a vector space over $\mathbb{R}$ under point-wise addition
$(f + g)(x) = f(x) + g(x)$ and scalar multiplication $(\alpha f)(x) = \alpha \cdot f(x)$. The spaces
$C^k(\mathbb{R})$ of $k$-times continuously differentiable functions and $L^2[a,b]$ of
square-integrable functions are important subspaces of $\mathcal{F}(\mathbb{R}, \mathbb{R})$.

**Example 6 (Sequence spaces).** The set $\ell^2$ of all real sequences $(a_1, a_2, a_3, \ldots)$
With $\sum_{n=1}^{\infty} a_n^2 \lt \infty$ is a vector space over $\mathbb{R}$. This is the
Infinite-dimensional analogue of $\mathbb{R}^n$ and is fundamental in functional analysis.

### 1.3 Subspaces

A **subspace** $W$ of a vector space $V$ is a subset $W \subseteq V$ that is itself a vector space
Under the same operations.

**Theorem 1.1 (Subspace Criterion).** A non-empty subset $W \subseteq V$ is a subspace if and only
If for all $\mathbf{u}, \mathbf{v} \in W$ and all $\alpha \in F$:

1. $\mathbf{u} + \mathbf{v} \in W$ (closed under addition)
2. $\alpha \mathbf{u} \in W$ (closed under scalar multiplication)

_Proof._ If $W$ is a subspace, closure is immediate from the definition. Conversely, if $W$ is
Non-empty and closed under both operations, pick $\mathbf{u} \in W$. Then
$-\mathbf{u} = (-1)\mathbf{u} \in W$ By closure under scalar multiplication, and
$\mathbf{u} + (-\mathbf{u}) = \mathbf{0} \in W$ by closure Under addition. The remaining axioms are
inherited from $V$. $\blacksquare$

**Proposition 1.2 (Closure under Linear Combinations).** If $W$ is a subspace of $V$ Then $W$ is
Closed under all finite linear combinations: for all $\mathbf{v}_1, \ldots, \mathbf{v}_k \in W$ and
All $\alpha_1, \ldots, \alpha_k \in F$

$$\alpha_1 \mathbf{v}_1 + \alpha_2 \mathbf{v}_2 + \cdots + \alpha_k \mathbf{v}_k \in W$$

_Proof._ We proceed by induction on $k$. For $k = 1$, $\alpha_1 \mathbf{v}_1 \in W$ by closure under
Scalar multiplication. Assume the result holds for $k - 1$ vectors. Then

$$\alpha_1 \mathbf{v}_1 + \cdots + \alpha_k \mathbf{v}_k = (\alpha_1 \mathbf{v}_1 + \cdots + \alpha_{k-1} \mathbf{v}_{k-1}) + \alpha_k \mathbf{v}_k$$

By the inductive hypothesis,
$\alpha_1 \mathbf{v}_1 + \cdots + \alpha_{k-1} \mathbf{v}_{k-1} \in W$ And
$\alpha_k \mathbf{v}_k \in W$ by closure under scalar multiplication. Their sum is in $W$ by Closure
under addition. $\blacksquare$

**Example 7.** The set of all solutions to the homogeneous equation $A\mathbf{x} = \mathbf{0}$ forms
a Subspace of $\mathbb{R}^n$Called the **null space** of $A$.

### 1.4 Worked Example: Verifying Subspace Criteria

**Problem.** Determine whether each of the following subsets of $\mathbb{R}^3$ is a subspace.

(a) $W_1 = \{(x, y, z) \in \mathbb{R}^3 : x + 2y - z = 0\}$

(b) $W_2 = \{(x, y, z) \in \mathbb{R}^3 : x^2 + y^2 = 1\}$

(c) $W_3 = \{(x, y, z) \in \mathbb{R}^3 : x = 0 \mathrm{~and~} y = z\}$

<details>
<summary>Solution</summary>

**(a)** Let $\mathbf{u} = (x_1, y_1, z_1)$ and $\mathbf{v} = (x_2, y_2, z_2)$ be in $W_1$ So
$x_1 + 2y_1 - z_1 = 0$ and $x_2 + 2y_2 - z_2 = 0$. Then

$$(x_1 + x_2) + 2(y_1 + y_2) - (z_1 + z_2) = (x_1 + 2y_1 - z_1) + (x_2 + 2y_2 - z_2) = 0 + 0 = 0$$

So $\mathbf{u} + \mathbf{v} \in W_1$. For $\alpha \in \mathbb{R}$

$$(\alpha x_1) + 2(\alpha y_1) - (\alpha z_1) = \alpha(x_1 + 2y_1 - z_1) = \alpha \cdot 0 = 0$$

So $\alpha \mathbf{u} \in W_1$. Since $W_1$ is non-empty (e.g., $\mathbf{0} \in W_1$), it is a
subspace.

**(b)** $W_2$ is not a subspace. For instance, $(1, 0, 0) \in W_2$ since $1^2 + 0^2 = 1$ But
$2 \cdot (1, 0, 0) = (2, 0, 0) \notin W_2$ since $2^2 + 0^2 = 4 \neq 1$. So $W_2$ is not closed
Under scalar multiplication.

**(c)** Let $\mathbf{u} = (0, a, a)$ and $\mathbf{v} = (0, b, b)$ be in $W_3$. Then
$\mathbf{u} + \mathbf{v} = (0, a + b, a + b) \in W_3$ and
$\alpha \mathbf{u} = (0, \alpha a, \alpha a) \in W_3$. Since $(0, 0, 0) \in W_3$It is a non-empty
subspace.

$\blacksquare$

</details>

### 1.5 Worked Example: Sum and Intersection of Subspaces

**Problem.** Let $U = \{(x, y, z) \in \mathbb{R}^3 : z = 0\}$ (the $xy$-plane) and
$W = \{(x, y, z) \in \mathbb{R}^3 : x = 0\}$ (the $yz$-plane). Find $U + W$ and $U \cap W$ And
verify the dimension formula.

<details>
<summary>Solution</summary>

$U$ has basis $\{(1, 0, 0), (0, 1, 0)\}$ and $\dim(U) = 2$. $W$ has basis $\{(0, 1, 0), (0, 0, 1)\}$
and $\dim(W) = 2$.

$U \cap W = \{(x, y, z) : z = 0 \mathrm{~and~} x = 0\} = \{(0, y, 0) : y \in \mathbb{R}\}$ Which has
basis $\{(0, 1, 0)\}$ and dimension 1.

$U + W = \mathrm{span}\{(1,0,0), (0,1,0), (0,1,0), (0,0,1)\} = \mathrm{span}\{(1,0,0), (0,1,0), (0,0,1)\} = \mathbb{R}^3$
So $\dim(U + W) = 3$.

Verify: $\dim(U + W) = \dim(U) + \dim(W) - \dim(U \cap W) = 2 + 2 - 1 = 3$. $\checkmark$
$\blacksquare$

</details>

### 1.6 Intuition: What Does a Vector Space Capture Geometrically?

The eight axioms of a vector space are not arbitrary rules; they encode exactly the algebraic
structure needed for the notion of "linear combination" to be meaningful. When you write
$\alpha \mathbf{u} + \beta \mathbf{v}$, you are performing two geometric operations: stretching
($\alpha \mathbf{u}$) and then adding ($+ \beta \mathbf{v}$). The axioms guarantee that this
operation behaves as your geometric intuition demands:

- **Commutativity** ($\mathbf{u} + \mathbf{v} = \mathbf{v} + \mathbf{u}$) means that the order in
  which you place two arrows head-to-tail does not matter. Geometrically, the parallelogram rule
  gives the same diagonal regardless of which side you traverse first.
- **Associativity** ($(\mathbf{u} + \mathbf{v}) + \mathbf{w} = \mathbf{u} + (\mathbf{v} + \mathbf{w})$)
  means that when adding three vectors, the grouping is irrelevant. You can slide parentheses freely
  without changing the result.
- **Additive identity** ($\mathbf{0}$) means there exists a "do nothing" element: adding the zero
  vector leaves any vector unchanged, just as a displacement of zero does not move you.
- **Additive inverse** ($-\mathbf{v}$) means every displacement can be undone. If $\mathbf{v}$ moves
  you from $A$ to $B$, then $-\mathbf{v}$ moves you back from $B$ to $A$.
- **Distributivity** ($\alpha(\mathbf{u} + \mathbf{v}) = \alpha\mathbf{u} + \alpha\mathbf{v}$) means
  scaling distributes over addition: stretching the diagonal of a parallelogram is the same as
  stretching each side and then forming the diagonal.

The power of the abstract definition is that it applies to objects that have no obvious geometric
meaning as arrows. The set of $2 \times 2$ matrices, the set of polynomials of degree $\leq 3$, and
the set of continuous functions on $[0,1]$ all satisfy the same axioms. This means that any theorem
proved using only the vector space axioms (such as the dimension formula or the rank-nullity theorem)
automatically applies to all these seemingly unrelated objects.

**Connection to other areas.** Vector spaces are the stage on which linear algebra, functional
analysis, and quantum mechanics are performed. In quantum mechanics, the state of a physical system
is a vector in a complex Hilbert space (a complete inner product vector space), and observables are
linear operators on that space. The superposition principle in physics is precisely the statement
that linear combinations of state vectors are again valid states.

### 1.7 Worked Example: Infinite-Dimensional Vector Space

**Problem.** Let $V = C[0,1]$ be the vector space of continuous functions on $[0,1]$. Show that the
subset $W = \{f \in C[0,1] : f(0) = 0\}$ is a subspace of $V$.

<details>
<summary>Solution</summary>

We verify the subspace criterion.

**Non-empty:** The zero function $\mathbf{0}(x) = 0$ satisfies $\mathbf{0}(0) = 0$, so
$\mathbf{0} \in W$.

**Closure under addition:** Let $f, g \in W$, so $f(0) = 0$ and $g(0) = 0$. Then
$(f + g)(0) = f(0) + g(0) = 0 + 0 = 0$, so $f + g \in W$.

**Closure under scalar multiplication:** Let $f \in W$ and $\alpha \in \mathbb{R}$. Then
$(\alpha f)(0) = \alpha \cdot f(0) = \alpha \cdot 0 = 0$, so $\alpha f \in W$.

By the subspace criterion, $W$ is a subspace of $V$.

**Geometric intuition:** $W$ is the subspace of functions that "start at the origin." In the
infinite-dimensional space $C[0,1]$, this is a closed hyperplane (codimension 1 subspace). The
complementary subspace consists of constant functions: every $f \in C[0,1]$ can be written uniquely
as $f = (f - f(0)) + f(0)$, where $f - f(0) \in W$ and $f(0)$ is a constant function.
$\blacksquare$

</details>

### 1.8 Worked Example: Null Space as a Subspace

**Problem.** Let $A = \begin{pmatrix} 1 & 2 & -1 \\ 2 & 4 & -2 \end{pmatrix}$. Find a basis for
$\mathrm{null}(A)$ and verify it is a subspace of $\mathbb{R}^3$.

<details>
<summary>Solution</summary>

Row-reduce $A$:

$$\begin{pmatrix} 1 & 2 & -1 \\ 2 & 4 & -2 \end{pmatrix} \xrightarrow{R_2 - 2R_1} \begin{pmatrix} 1 & 2 & -1 \\ 0 & 0 & 0 \end{pmatrix}$$

The RREF has one pivot (column 1). The free variables are $x_2$ and $x_3$. Setting $x_2 = s$,
$x_3 = t$: $x_1 = -2s + t$.

$$\mathrm{null}(A) = \left\{ s\begin{pmatrix} -2 \\ 1 \\ 0 \end{pmatrix} + t\begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix} : s, t \in \mathbb{R} \right\}$$

A basis is $\{(-2, 1, 0)^T, (1, 0, 1)^T\}$ and $\dim(\mathrm{null}(A)) = 2$.

**Verification that null(A) is a subspace:** This follows from the general theorem that the null
space of any matrix is a subspace. Geometrically, $\mathrm{null}(A)$ is the set of all vectors
$\mathbf{x}$ such that $A\mathbf{x} = \mathbf{0}$, i.e., the vectors that $A$ "collapses" to the
origin. Since $A$ is a linear map, the preimage of the origin is always a subspace. This is a
consequence of the fact that linear maps send subspaces to subspaces, and the inverse image of a
subspace under a linear map is a subspace.

**Dimension check:** By rank-nullity, $\mathrm{rank}(A) + \mathrm{nullity}(A) = 3$. Since
$\mathrm{rank}(A) = 1$ (one pivot), $\mathrm{nullity}(A) = 2$, consistent with our basis.
$\blacksquare$

</details>

### 1.9 Common Pitfalls

- **The empty set is not a vector space.** The subspace criterion requires the subset to be
  non-empty. The trivial subspace $\{\mathbf{0}\}$ is the smallest subspace of any vector space.
- **Non-homogeneous conditions do not define subspaces.** The set of solutions to
  $A\mathbf{x} = \mathbf{b}$ with $\mathbf{b} \neq \mathbf{0}$ is not a subspace (it is an affine
  subspace, or coset of the null space). For example, $\{(x, y) : x + y = 1\}$ is a line in
  $\mathbb{R}^2$ that does not pass through the origin.
- **Closure must hold for _all_ scalars.** A set that is closed under addition and multiplication by
  positive scalars is not necessarily a subspace; it must also be closed under multiplication by
  $-1$. For example, the first quadrant $\{(x, y) : x \geq 0, y \geq 0\}$ is closed under addition
  and positive scalar multiplication, but $(-1) \cdot (1, 1) = (-1, -1)$ is not in the first
  quadrant.
- **Do not confuse the field with the vector space.** $\mathbb{R}$ is a field, but it is also a
  vector space over itself (of dimension 1). $\mathbb{R}^2$ is a vector space over $\mathbb{R}$ (of
  dimension 2), but it is _not_ a field (you cannot multiply arbitrary pairs of vectors).
- **Dimension is a property of the space, not the embedding.** The polynomial space
  $\mathcal{P}_3(\mathbb{R})$ has dimension 4, even though its elements are "logically" embedded in
  $C(\mathbb{R})$, which is infinite-dimensional. The dimension depends on the vector space structure,
  not on how the space sits inside a larger space.

---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "2 Linear Algebra", "url": "https://mathematics.wyattau.com/2-linear-algebra"}, {"name": "1_vectors And Vector Spaces", "url": "https://mathematics.wyattau.com/2-linear-algebra/1_vectors-and-vector-spaces"}]
}
</script>

### Intuition

A vector space is any collection of objects that can be added together and scaled by numbers in the same way that arrows in space can. The power of the abstraction is that it applies far beyond geometry. Polynomials behave like vectors: you can add two polynomials and multiply one by a scalar. Functions behave like vectors: you can add two functions pointwise and multiply one by a constant. Even sequences of numbers form vector spaces. The axioms are directly the rules that make "linear combinations" meaningful -- they guarantee that scaling and adding behave the way your geometric intuition expects.

The connection to function spaces is where the abstraction pays off most. In quantum mechanics, the state of a particle is a vector in an infinite-dimensional function space (a Hilbert space). The Schrodinger equation is a linear operator acting on these vectors, and solving it is structurally identical to solving a system of linear equations -- except the "matrix" is replaced by a differential operator and the "vector" is a wavefunction. This is why linear algebra is the language of quantum theory: the superposition principle is literally the closure of a vector space under linear combinations.

---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "2 Linear Algebra", "url": "https://mathematics.wyattau.com/2-linear-algebra"}, {"name": "1_vectors And Vector Spaces", "url": "https://mathematics.wyattau.com/2-linear-algebra/1_vectors-and-vector-spaces"}]
}
</script>

:::tip
<strong>Research Connections</strong>
Vector spaces are the foundation of quantum computing: qubits exist in a 2-dimensional complex vector space, and quantum gates are unitary linear transformations. Google's quantum supremacy experiment (2019, Sycamore processor) demonstrated a computation in a 53-qubit vector space that would take classical supercomputers ~10,000 years. Current research includes: quantum error correction (surface codes on stabiliser codes), topological quantum computing (Majorana fermions), and the intersection of linear algebra with machine learning (neural network weight spaces, kernel methods, dimensionality reduction via SVD/PCA).
:::

## Cross-References

- **[Linear Independence, Span, Basis, and Dimension](2_linear-independence-span-basis-and-dimension.md)**: Basis and dimension are defined in terms of linear independence and span of vector space elements.
- **[Matrices](3_matrices.md)**: Matrices represent linear transformations between finite-dimensional vector spaces.
- **[Linear Transformations](6_linear-transformations.mdx)**: Linear transformations are maps between vector spaces that preserve linear structure.
- [Quantum Mechanics](https://physics.wyattau.com/docs/quantum-mechanics)
- [Graph Theory](https://computer-science.wyattau.com/docs/graph-theory)
