---
date: 2026-11-11T00:00:00+00:00
title: "F9: Canonical Forms"
description: "The chapter where diagonalisation's fine print is honoured: the rotation and the shift that have no eigenbasis, triangularisation over C with Stage E's fundamental theorem finally spent, Cayley-Hamilton as four lines, the kernel-ladder construction of Jordan blocks, and the rational canonical form that answers what remains when even C is refused."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "17 Core Course", "url": "https://mathematics.wyattau.com/17-core-course"}, {"name": "F9: Canonical Forms", "url": "https://mathematics.wyattau.com/17-core-course/f9-canonical-forms"}]
}
</script>

**The Defect.** The spectral theorem promised that a good operator
reveals itself as pure stretching along an eigenbasis. Then two
operators walk in and break the promise. The ninety-degree rotation of
the plane stretches nothing: no direction survives a quarter turn, so
it has no eigenvector at all. The shift on triples, $(x, y, z) \mapsto
(0, x, y)$, has eigenvalue $0$ and nothing else, and a nonzero
operator with only one eigenvalue cannot be diagonalised, since a
diagonal operator with one eigenvalue is its scalar multiple and this
one is not zero. The naive conjecture: without an eigenbasis an
operator is unclassifiable chaos. The repair is the exact opposite of
chaos: over $\mathbb{C}$ every operator triangularises, every operator
satisfies its own characteristic polynomial, and every operator is a
direct sum of Jordan blocks, shapes as rigid as a barcode. The only
input is the fundamental theorem of algebra, declared in Stage E, and
this chapter is where the course finally spends it.

**The One-Line Reveal.** <span class="wn-spoiler-inline" tabindex="0">When
the eigenbasis fails, the fallbacks are rigid and finite: always
triangularise over $\mathbb{C}$, always satisfy your own polynomial
(Cayley-Hamilton), and decompose into Jordan blocks whose sizes are
read off a basis-free kernel ladder; refusing $\mathbb{C}$ costs the
Jordan form and buys the rational canonical form, and nothing wilder
ever appears.</span>

*The blur is deliberate: form your own reading of the page first, then
click it.*

**Scope.** Consumes 1B through 1D (vector spaces, dimension, quotients,
determinants as alternating forms, eigenstructure, the spectral
theorem) and Stage E (the fundamental theorem of algebra, declared,
whose spending is this chapter's engine). Formal witnesses pause for
this page: matrix-scale machinery is past core Lean's built-ins, on
the same honest terms as Stages D and E. No new axioms; no new debts.
One old debt is *partially paid*: Stage E's FTA declaration funds
Sections 2 through 5, with the full discharge still booked to Stage K.

## 1. Where Diagonalisation Fails

**Instance 1 (the quarter turn).** Let $R$ be the ninety-degree
rotation of the plane, with matrix
$R = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$ on the standard
basis. Its characteristic polynomial is $x^2 + 1$. Over $\mathbb{R}$
this polynomial has no root, so $R$ has no eigenvector: indeed a
quarter turn carries every direction somewhere new. Over
$\mathbb{C}$ the story changes completely: $x^2 + 1 = (x - i)(x + i)$,
and $R$ has eigenvectors $(1, -i)$ and $(1, i)$ with eigenvalues $i$
and $-i$. Failure and success are the same operator seen over two
fields.

**Instance 2 (the shift).** Let $S$ act on triples by $S(x, y, z) =
(0, x, y)$, the matrix
$S = \begin{pmatrix} 0 & 0 & 0 \\ 1 & 0 & 0 \\ 0 & 1 & 0 \end{pmatrix}$.
Then $S^3 = 0$ while $S \neq 0$ and $S^2 \neq 0$: a **nilpotent**
operator. Its only eigenvalue is $0$ (compute: $Sv = \lambda v$
forces $\lambda^3 v = S^3 v = 0$, so $\lambda = 0$). If $S$ were
diagonalisable, a diagonal operator with the single eigenvalue $0$
would be the zero operator, and $S$ is not zero. So the shift is not
diagonalisable over *any* field. No change of scenery rescues it;
something subtler than a basis of eigenvectors is needed.

**Ponder (attempt the classification yourself).** Before reading on:
a nonzero nilpotent operator cannot be diagonalised, as the shift
shows. Invent the next-best description. What is the simplest family
of matrices that contains the shift's shape, is closed under nothing
but reading, and has zero diagonal but nonzero superdiagonal?

<details class="wn-spoiler">
<summary>Compare your construction</summary>
<div class="wn-spoiler-body">

The natural candidate: matrices that are zero except possibly just
*above* the diagonal, like the shift itself
$\begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{pmatrix}$,
the transpose shape of $S$. These **Jordan blocks** have exactly one
eigenvalue (the diagonal value), are never diagonalisable when the
size exceeds one, and compose so predictably that their powers are
readable by eye. The classification claim of this chapter: over
$\mathbb{C}$, *every* operator is a direct sum of exactly these
shapes. If your construction drifted toward triangular matrices
generally, you were on the way to Section 2; the blocks are the
irreducible pieces left after the eigenvalue part is peeled off.

</div>
</details>

:::note[Quick check]

1. Compute the characteristic polynomial of the quarter-turn $R$, and
   state why it has no real root.
2. Show the shift $S$ satisfies $S^3 = 0$ by computing $S^2$.
3. Why does "only eigenvalue $0$, not the zero operator" refute
   diagonalisability?
4. Over $\mathbb{C}$, diagonalise $R$: give eigenvalues and one
   eigenvector.
5. Which operator, $R$ or $S$, is rescued by enlarging the field, and
   why is the other unrescuable?
6. Give the eigenvector for eigenvalue $-i$, and verify
   $R v = -i v$ on it.
7. Prove $S^2 \neq 0$ by evaluating at one well-chosen vector.
8. Which of the two instances changes if the field is
   $\mathbb{C}$ from the start, and what does that locate the
   failure in?

<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** $x^2 + 1$ (trace $0$, determinant $1$); its roots $\pm i$ are
nonreal, so no real eigenvalue. **2.** $S^2(x, y, z) = S(0, x, y) =
(0, 0, x)$, and $S^3(x, y, z) = (0, 0, 0)$: the triple feeds down one
slot per application. **3.** A diagonalisable operator with sole
eigenvalue $\lambda$ is conjugate to $\lambda I$, which *is*
$\lambda I$; with $\lambda = 0$ that is the zero operator, but $S
\neq 0$. **4.** Eigenvalues $i$ and $-i$; $(1, -i)$ has $R(1, -i) =
(i, 1) = i(1, -i)$. **5.** $R$: enlarging to $\mathbb{C}$ splits
$x^2 + 1$. The shift is unrescuable because its failure is structural
(nonzero nilpotent), not arithmetic (missing roots).
**6.** $(1, i)$: $R(1, i) = (-i, 1)$ and $-i(1, i) = (-i, -i^2) = (-i, 1)$: matches. **7.** $S^2(1, 0, 0) = (0, 1, 0) \neq 0$, so $S^2$ is not the zero operator. **8.** Only the rotation changes ($x^2 + 1$ splits over $\mathbb{C}$); the shift's failure is structural rather than arithmetic, so no field enlargement touches it.

</div>
</details>

:::

## 2. Triangularisation over C: Always Possible

**Theorem (triangularisation).** Let $T$ be an operator on a finite
dimensional complex vector space $V$. Then $V$ has a basis in which
$T$'s matrix is upper triangular: the matrix of $T(v_j)$ has zeros
below row $j$.

*Proof.* Induction on $\dim V$. If $\dim V = 1$ every matrix is
triangular. For $\dim V = n > 1$: the characteristic polynomial of
$T$ is a complex polynomial of degree $n$, and the fundamental
theorem of algebra (Stage E, spent at last) gives it a root
$\lambda_1$. The root is an eigenvalue: there is a $v_1 \neq 0$ with
$T v_1 = \lambda_1 v_1$ (the characteristic polynomial's roots are
exactly the eigenvalues, 1C's equivalence). Extend $v_1$ to a basis
$v_1, w_2, \ldots, w_n$. In this basis $T$'s first column is
$(\lambda_1, 0, \ldots, 0)^T$, and $T$ descends to an operator
$\bar{T}$ on the quotient $V / \langle v_1 \rangle$ (1D's quotient
construction: $T$ maps the span of $v_1$ into itself, which is
exactly what a well-defined descent needs). The quotient has
dimension $n - 1$, so the induction hypothesis hands $\bar{T}$ a
triangularising basis of cosets; lifting each coset's representative
to $V$ extends the basis so that $T$'s matrix reads triangular
(first row and column already arranged). $\blacksquare$

*In words:* find one eigenvector (the FTA guarantees at least one),
peel it off, and run the same argument on what is left; the quotient
construction from Stage C and 1D is what "what is left" means
rigorously. The FTA is the only analytic input, and it enters exactly
once.

**Corollary (what triangularity buys).** In a triangularising basis:
the eigenvalues of $T$ are exactly the diagonal entries; $T$ is
invertible exactly when no diagonal entry vanishes; and $\det T$ is
the product of the diagonal entries (1C's determinant-as-alternating-
form applied to a triangular matrix).

:::note[Quick check]

1. Which theorem guarantees the eigenvalue that starts the induction?
2. Why does $T$ descend to the quotient $V / \langle v_1 \rangle$?
3. Where exactly does the induction hypothesis get applied, and to
   what space?
4. State the three things the corollary reads off a triangular matrix.
5. Does triangularisation hold over $\mathbb{R}$ for every operator?
   Give the counterexample from Section 1.
6. Why does the induction's base case cost nothing at dimension
   one?
7. In the triangularising basis, what is the matrix's first column,
   and why?
8. Prove: an upper triangular matrix's diagonal entries are exactly
   its eigenvalues.

<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** The fundamental theorem of algebra: the characteristic
polynomial splits over $\mathbb{C}$, so it has a root, and roots are
eigenvalues. **2.** Because $\langle v_1 \rangle$ is $T$-invariant:
$T v_1 = \lambda_1 v_1$ stays in the span, so the class of $T v$
depends only on the class of $v$. **3.** To the quotient operator
$\bar{T}$ on $V / \langle v_1 \rangle$, of dimension $n - 1$; its
triangularising basis is lifted representatives. **4.** Eigenvalues
are the diagonal entries; invertibility is nonvanishing of the
diagonal; the determinant is the product of the diagonal. **5.**
No: the quarter turn has no real eigenvalue to start the induction
with; over $\mathbb{R}$ its triangularisation is impossible.
**6.** With a single entry there is no subdiagonal to fill: every $1 \times 1$ matrix is already upper triangular. **7.** $(\lambda_1, 0, \ldots, 0)^T$: the first basis vector is the eigenvector and $T v_1 = \lambda_1 v_1$ fixes the column. **8.** $xI - M$ is upper triangular with determinant $\prod_j (x - m_{jj})$ (the triangular determinant), whose roots are the diagonal entries, and those roots are the eigenvalues.

</div>
</details>

:::

## 3. Cayley-Hamilton in Four Lines

**Theorem (Cayley-Hamilton).** Every operator $T$ on a finite
dimensional complex vector space satisfies its characteristic
polynomial: if $p(x) = \det(xI - T)$, then $p(T) = 0$.

*Proof.* Triangularise: in the basis of Section 2, $T$ is upper
triangular with diagonal $\lambda_1, \ldots, \lambda_n$, and $p(x) =
\prod_{i} (x - \lambda_i)$ (determinant of a triangular matrix).
Each factor $T - \lambda_i I$ is upper triangular, so the product
$p(T) = \prod_i (T - \lambda_i I)$ is upper triangular, and its
diagonal entry $j$ is the product of the factors' diagonal entries
at $j$, namely $\prod_i (\lambda_j - \lambda_i)$, which contains the
factor $i = j$: zero. So $p(T)$ is upper triangular with zero
diagonal, a *strictly* triangular matrix. For such a matrix $M$:
$M e_k$ lies in the span of $e_1, \ldots, e_{k-1}$, so $M^2 e_k$
lies in the span of $e_1, \ldots, e_{k-2}$, and for every power $j$
the vector $M^j e_k$ lies in the span of the first $k - j$ basis
vectors (each application pushes the span one notch lower); at $j =
n$ the span is empty, so $M^n e_k = 0$ for every $k$, that is $M^n =
0 = p(T)$. $\blacksquare$

*In words:* put $T$ in triangular form, feed the polynomial factors
in one at a time, and watch the diagonal die at the $i = j$ factor;
whatever survives is strictly triangular, and strict triangularity
pushes every vector down the basis one notch per power, into
oblivion by step $n$.

**Corollary (the minimal polynomial's degree).** The minimal
polynomial of $T$ (the monic polynomial of least degree that $T$
satisfies) exists and divides the characteristic polynomial; in
particular $\deg m_T \leq n$.

*Proof.* The set of polynomials satisfied by $T$ is closed under
subtraction and contains $p$; among its nonzero members choose one
of least degree (well-ordering on degrees), normalise it monic:
that is $m_T$. Any polynomial satisfied by $T$ is $m_T$ times a
remainder of smaller degree, and the remainder is also satisfied by
$T$, so by minimality the remainder is $0$: divisibility.
$\blacksquare$

:::note[Quick check]

1. Why is $p(T)$ upper triangular, and why is its diagonal zero?
2. State the one-notch-per-power argument that kills a strictly
   triangular matrix.
3. For the shift $S$ of Section 1, state its characteristic
   polynomial and verify Cayley-Hamilton by hand.
4. Prove: the minimal polynomial divides every polynomial that $T$
   satisfies.
5. An operator satisfies $T^2 = T$ (an idempotent, 1C's projection).
   What are the only possible eigenvalues, and what does the minimal
   polynomial look like?
6. Why does $p(T)$'s diagonal entry $j$ always contain a zero
   factor?
7. State the minimal polynomial of the quarter turn $R$.
8. Prove: a minimal polynomial of degree one forces $T$ to be a
   scalar multiple of the identity.

<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** Upper triangulars are closed under multiplication (1C), and
each diagonal entry of a product is the product of the diagonals;
entry $j$ includes the factor $\lambda_j - \lambda_j = 0$. **2.**
$M e_k$ lives in $\mathrm{span}(e_1, \ldots, e_{k-1})$, each power
pushes one notch lower, and after $n$ powers the allowable span is
empty. **3.** $p(x) = x^3$; indeed $S^3 = 0$ was computed in Section
1. **4.** Division with remainder: $f = q m_T + r$ with $\deg r <
\deg m_T$; then $r(T) = f(T) - q(T)m_T(T) = 0$, so minimality of
$\deg m_T$ forces $r = 0$. **5.** Eigenvalues satisfy $\lambda^2 =
\lambda$: only $0$ and $1$; the minimal polynomial divides $x^2 -
x$ and is $(x - 0)$ or $(x - 1)$ (scalar cases) or the full $x^2 -
x = x(x-1)$ (genuine projection).
**6.** Entry $j$ of the product's diagonal is $\prod_i (\lambda_j - \lambda_i)$, and the factor with $i = j$ is $\lambda_j - \lambda_j = 0$. **7.** $x^2 + 1$: it kills $R$, and no linear polynomial does, since $R$ is not a scalar operator. **8.** $m_T(x) = x - \lambda$ and $m_T(T) = 0$ read directly as $T = \lambda I$.

</div>
</details>

:::

## 4. The Kernel Ladder and Nilpotent Blocks

The classification begins with the case that Section 1 showed to be
irreducible: nilpotent operators. The tool is a ladder of subspaces
that can be read off without choosing anything.

**Definition (the kernel ladder).** For an operator $N$ on $V$:
$\ker N^0 = \{0\} \subseteq \ker N \subseteq \ker N^2 \subseteq
\dots$ Each inclusion holds ($N^k v = 0$ implies $N^{k+1} v = 0$),
so the dimensions $\beta_k := \dim \ker N^k$ form a nondecreasing
sequence of integers, bounded by $\dim V$: it stabilises.

**Ponder (read the shift's ladder first).** For the shift $S$ on
triples, compute $\beta_0, \beta_1, \beta_2, \beta_3$ before reading
the general theorem. What shape do the jumps
$\beta_k - \beta_{k-1}$ trace?

<details class="wn-spoiler">
<summary>The ladder of the shift</summary>
<div class="wn-spoiler-body">

$\beta_0 = 0$; $\beta_1 = \dim \ker S = 1$ (only $(0, 0, 0)$... more
precisely the vectors with $S(x,y,z) = (0,x,y) = 0$, that is $x = y
= 0$: the $z$-axis); $\beta_2 = \dim \ker S^2 = 2$ (also $y = 0$:
the $(x = 0)$-plane); $\beta_3 = 3$ (everything, since $S^3 = 0$).
The jumps are $1, 1, 1$: three blocks of size one? No, wait: the
jump sequence counts blocks of size at least $k$, so jumps $(1, 1,
1)$ mean one block of size $3$. The single Jordan block of size $3$
is exactly the shift. If your first reading said "three blocks of
size one", note that would force $S = 0$, which is false: the jumps
count how many blocks *survive* to height $k$, not their sizes
directly; the sizes are the *differences of consecutive jumps*.

</div>
</details>

**Theorem (nilpotent canonical form).** Let $N$ be nilpotent on $V$,
with $\dim V = n$ and ladder jumps $w_k := \beta_k - \beta_{k-1}$
(where $\beta_0 = 0$). Then $V$ has a basis in which $N$'s matrix
is a direct sum of Jordan blocks $J_1 \oplus J_2 \oplus \dots \oplus
J_m$ with the following rigidity: the number of blocks of size
*exactly* $s$ is $w_s - w_{s+1}$, and this count does not depend on
any choice of basis.

*Proof sketch (construction; the full induction is Problem 3).*
Build a basis from the top of the ladder down: choose a basis of a
complement to $\ker N^{h-1}$ inside $\ker N^h$ (where $h$ is the
height where the ladder stabilises), apply $N$ to each chosen vector
repeatedly to string out chains $v, Nv, N^2 v, \ldots$, and collect
the chains. Each chain is $N$-invariant and, read backwards, is a
Jordan block: the matrix of $N$ on the chain basis is zero except
for ones on the subdiagonal (or superdiagonal, by reading order).
The count claim: a chain of length $s$ contributes one vector to
each jump $w_1, \ldots, w_s$ and none above, so the number of chains
of length at least $k$ is $w_k$; subtracting, chains of length
exactly $s$ number $w_s - w_{s+1}$. Since the ladder dimensions are
defined without any basis, the counts are basis-free.
$\blacksquare$

**The rigidity, in a table.** For $n = 5$ with ladder $\beta = (0, 3,
5, 5, \ldots)$: jumps $w_1 = 3$, $w_2 = 2$, $w_3 = 0$; blocks of
size $1$: $w_1 - w_2 = 1$; of size $2$: $w_2 - w_3 = 2$; total $1
\times 1 + 2 \times 2 = 5$ dimensions, check:

| Block size | Count ($w_s - w_{s+1}$) | Contribution to $\dim V$ |
|---|---|---|
| $1$ | $3 - 2 = 1$ | $1$ |
| $2$ | $2 - 0 = 2$ | $4$ |
| $3$ or more | $0$ | $0$ |

:::note[Quick check]

1. Why is the ladder sequence eventually constant?
2. Compute the ladder jumps of a single nilpotent block of size $4$,
   and verify the count formula gives exactly one block of size 4.
3. Prove: a nilpotent operator is diagonalisable exactly when it is
   zero.
4. Two nilpotent operators on a 5-space have ladders $(0, 3, 5)$ and
   $(0, 2, 4, 5)$. Without any further computation, are they
   similar?
5. Where in the construction does nilpotency get used, as against
   mere triangularity?
6. Why is the jump sequence nonincreasing, in terms of what each
   jump counts?
7. Compute the ladder of the direct sum of a size-3 block and a
   size-1 block.
8. State what "basis-free" means for the block counts, and why it
   makes them similarity invariants.

<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** The dimensions $\beta_k$ are nondecreasing integers bounded
by $n$, and a nondecreasing bounded integer sequence stabilises
(Stage B's well-ordering on the first stabilising index). **2.**
$\beta = (0, 1, 2, 3, 4)$, jumps $(1, 1, 1, 1)$, so blocks of size
exactly $4$: $w_4 - w_5 = 1 - 0 = 1$, all others zero. **3.** A
diagonal nilpotent has all diagonal entries $0$ (the only nilpotent
scalar is $0$), hence is the zero matrix; conversely zero is
diagonal. **4.** No. First ladder: jumps $(3, 2)$, so blocks of
size exactly $1$ number $3 - 2 = 1$ and of size exactly $2$ number
$2 - 0 = 2$: multiset $(2, 2, 1)$. Second ladder: jumps $(2, 2,
1)$, so blocks number $2 - 2 = 0$ of size $1$, $2 - 1 = 1$ of size
$2$, and $1$ of size $3$: multiset $(3, 2)$. Different multisets,
so not similar, and the ladders alone decided it. **5.** Nilpotency
is what makes the ladder reach $V$ in finitely many steps and what
makes each chain terminate; a merely triangular operator has no
such forcing.
**6.** $w_k$ counts blocks of size at least $k$; every block counted at height $k + 1$ was already counted at height $k$, so $w_{k+1} \leq w_k$. **7.** $\beta = (0, 2, 3, 3)$: jumps $(2, 1, 0)$, so blocks of size exactly $2$ number $2 - 1 = 1$ and of size exactly $1$ number $1 - 0 = 1$: multiset $(2, 1)$. **8.** The $\beta_k$ are dimensions of intrinsically defined subspaces (kernels of powers of the operator), unchanged by any change of basis; similar operators therefore have identical ladders and identical counts.

</div>
</details>

:::

## 5. Jordan Normal Form: the Whole Classification

**Theorem (Jordan normal form, over $\mathbb{C}$).** Let $T$ be an
operator on a finite dimensional complex vector space $V$. Then $V$
decomposes as a direct sum of **generalised eigenspaces**
$V_\lambda := \ker (T - \lambda I)^{n}$ over the distinct
eigenvalues $\lambda$, and on each $V_\lambda$ the operator $T -
\lambda I$ is nilpotent. Consequently $V$ has a basis in which

$$
[T] \;=\; J_{s_1}(\lambda_1) \oplus J_{s_2}(\lambda_2) \oplus \dots
\oplus J_{s_m}(\lambda_m),
$$

a direct sum of Jordan blocks $J_s(\lambda) := \lambda I_s + N_s$
(the $s \times s$ block with $\lambda$ on the diagonal, ones on the
superdiagonal, zeros elsewhere). The multiset of pairs
$(\lambda, s)$ is determined by $T$: two operators are similar
exactly when their block multisets agree.

*Proof.* By triangularisation each characteristic root $\lambda$ is
an eigenvalue, and the characteristic polynomial splits completely
(FTA). Consider $V_\lambda = \ker(T - \lambda I)^n$. The spaces
$V_\lambda$ for distinct $\lambda$ intersect only in $0$ (a vector in
two of them is killed by two coprime polynomials in $T$, whose
Bezout combination, Stage C's identity transported to polynomials,
is the identity operator, so the vector is $0$), and the dimension
count (Problem 4) shows the sum of the $\dim V_\lambda$ is $n$, so
$V$ is their direct sum. On $V_\lambda$, the operator $N_\lambda :=
T - \lambda I$ satisfies $N_\lambda^n = 0$: it is nilpotent, and
Section 4's theorem gives the Jordan block decomposition of
$N_\lambda$, hence of $T = \lambda I + N_\lambda$ on that piece.
Concatenating the bases gives the displayed form. Uniqueness: the
number of blocks of size exactly $s$ for eigenvalue $\lambda$ is
read from the ladder of $(T - \lambda I)|_{V_\lambda}$, which is
defined without a basis; similar operators have identical ladders.
$\blacksquare$

**The landscape, once and for all.** The classification is now a
table you can carry:

| Field of scalars | Canonical shape | What drives it |
|---|---|---|
| $\mathbb{C}$ | Jordan blocks $J_s(\lambda)$ | FTA: every polynomial splits |
| $\mathbb{R}$ | Jordan blocks for real eigenvalues, plus $2 \times 2$ rotation blocks for conjugate pairs $a \pm bi$ | the real analogue of splitting: pairs packaged as planar rotations |
| any field | rational canonical form (companion blocks, Section 6) | invariant factors; no splitting assumed |

:::note[Quick check]

1. Define the generalised eigenspace $V_\lambda$, and distinguish it
   from the eigenspace.
2. Which theorem of Stage C is transported to polynomials to prove
   the $V_\lambda$ intersect only in $0$?
3. A $4 \times 4$ complex operator has characteristic polynomial
   $(x - 2)^3 (x + 1)$ and is not diagonalisable. What are the
   possible block multisets?
4. Why does similarity preserve the ladder, hence the block counts?
5. Where does the proof use that the field is $\mathbb{C}$, exactly?
6. Compute the Jordan form of an operator with characteristic
   polynomial $(x - 2)^3 (x + 1)$ that is diagonalisable.
7. Why does equality of block multisets decide similarity in both
   directions?
8. Which single theorem, if it failed, breaks Section 5's proof
   first?

<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** $V_\lambda = \ker (T - \lambda I)^n$: all vectors eventually
killed by $T - \lambda I$; the eigenspace is the first rung $\ker
(T - \lambda I)$ only. **2.** Bezout's identity: coprime
polynomials $f, g$ have $f u + g v = 1$, and plugging $T$ into that
identity kills any vector lying in both kernels. **3.** Block sizes
for $\lambda = 2$ must sum to $3$ without being $(1, 1, 1)$ (that
would diagonalise): so $(2, 1)$ or $(3)$, paired with one block
$J_1(-1)$; two possibilities. **4.** The ladder $\dim \ker (T -
\lambda)^k$ is invariantly defined; similarity conjugates the
operators and preserves kernel dimensions; the counts $w_s -
w_{s+1}$ read off it are therefore similarity invariants. **5.** In
the claim that the characteristic polynomial splits (FTA), which
delivers enough eigenvalues for triangularisation and for the
generalised eigenspaces to cover $V$.
**6.** Blocks $J_1(2) \oplus J_1(2) \oplus J_1(2) \oplus J_1(-1)$: the diagonal matrix $\mathrm{diag}(2, 2, 2, -1)$. **7.** Similar operators have equal ladders, hence equal multisets; conversely, equal multisets identify the block decompositions block by block and exhibit the conjugating basis change. **8.** The fundamental theorem of algebra: without splitting, the generalised eigenspaces need not cover $V$.

</div>
</details>

:::

## 6. What Remains Without C: the Rational Canonical Form

The honest question a working mathematician asks: everything above
spent the FTA. Over a field where polynomials do not split (like
$\mathbb{R}$, or a finite field), what survives?

**The construction instinct, run one last time.** An operator $T$
on $V$ makes $V$ into a module over the polynomial ring: $f$ acts
as $f(T)$. The classification of finitely generated modules over
the polynomial ring then hands back the canonical form, with the
companion matrix of a monic polynomial $x^s + a_{s-1} x^{s-1} +
\dots + a_0$,

$$
C(f) \;=\; \begin{pmatrix}
0 & 0 & \cdots & 0 & -a_0 \\
1 & 0 & \cdots & 0 & -a_1 \\
0 & 1 & \cdots & 0 & -a_2 \\
\vdots & & \ddots & & \vdots \\
0 & 0 & \cdots & 1 & -a_{s-1}
\end{pmatrix},
$$

as the block shape (its characteristic polynomial is exactly $f$;
verify for the $2 \times 2$ case in Problem 5). The **rational
canonical form** states: $V$ has a basis in which $T$ is a direct
sum of companion blocks $C(f_1) \oplus \dots \oplus C(f_m)$ with
$f_1 \mid f_2 \mid \dots \mid f_m$, and this list of invariant
factors determines $T$ up to similarity.

**Honest scope.** The module-theoretic engine behind that statement
(structure theorem for modules over a principal ideal ring) is
beyond this page, and the course declares the result rather than
building it: the declaration is recorded in the course map, with
Stage K as the payee where polynomial rings are studied properly.
What this page *did* prove is the complex half in full, and the
nilpotent case in full, which are the two load-bearing special
cases. Over $\mathbb{R}$ the practical answer needs no new theory:
real Jordan form packages each conjugate pair $a \pm bi$ as a
rotation-scaling block $\begin{pmatrix} a & -b \\ b & a
\end{pmatrix}$, which is the quarter turn of Section 1 wearing a
scaling factor.

:::note[Quick check]

1. Verify the $2 \times 2$ companion block of $x^2 + a_1 x + a_0$
   has characteristic polynomial $x^2 + a_1 x + a_0$.
2. What is the rational canonical form of the quarter turn $R$?
3. Why does the rational form not contradict the Jordan form over
   $\mathbb{C}$? (What is the relation of the two decompositions?)
4. State the invariant-factor divisibility condition, and what it
   rules out.
5. Which stage is named as the payee for the module theory declared
   here?
6. Verify that $C(x - a)$ is the $1 \times 1$ block with entry
   $a$, and state its characteristic polynomial.
7. State the rational canonical form of a nilpotent block of size
   three.
8. What is the rational form of the quarter turn over
   $\mathbb{R}$, and how does $\mathbb{C}$ read the same
   operator?

<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** $\det(xI - C) = x(x + a_1) + a_0 = x^2 + a_1 x + a_0$
(expand the $2 \times 2$ determinant). **2.** The single companion
block $C(x^2 + 1)$, whose matrix is $\begin{pmatrix} 0 & -1 \\ 1 &
0 \end{pmatrix}$: the quarter turn is already in rational canonical
form. **3.** Over $\mathbb{C}$ the invariant factors split into
linear pieces, and the companion blocks split into Jordan blocks
along the roots: the Jordan form is the refinement of the rational
one, not a rival. **4.** $f_1 \mid f_2 \mid \dots \mid f_m$; it
rules out orderings where a later factor fails to divide an earlier
one (the list is unique only up to this canonical arrangement).
**5.** Stage K, where polynomial rings and their modules are built.
**6.** $C(x - a) = (a)$, the companion of a degree-one polynomial is the scalar itself; its characteristic polynomial is $x - a$. **7.** The single companion block $C(x^3)$: the invariant factor list is just $x^3$, and the block is the shift of Section 1. **8.** $C(x^2 + 1)$; over $\mathbb{C}$ the same operator splits into $J_1(i) \oplus J_1(-i)$: the rational block is the complex pair packaged.

</div>
</details>

:::

## Stage Gate

:::caution[Pass mark: four of five]
Before Stage G, answer these five without notes. A failed gate names
the section to reread (1: Section 1; 2: Section 2; 3: Section 3; 4:
Section 4; 5: Sections 5 and 6).
1. Give the two canonical counterexamples to diagonalisability and
   the reason each fails.
2. State triangularisation, and name the one analytic input its
   proof consumes.
3. Prove Cayley-Hamilton from triangularisation in outline.
4. Define the kernel ladder, and state what the jump differences
   count.
5. State Jordan normal form over $\mathbb{C}$, and what the rational
   canonical form replaces it with over a general field.

<details class="wn-spoiler">
<summary>Gate answers</summary>
<div class="wn-spoiler-body">

**1.** The quarter turn (no real eigenvalue: rescued by
$\mathbb{C}$) and the nonzero shift (nonzero nilpotent: unrescuable,
since a diagonal operator with one eigenvalue is scalar). **2.**
Every complex operator has an upper triangular matrix in some basis;
the input is the fundamental theorem of algebra, spent exactly once
to start the induction. **3.** Triangularise; $p(T)$ is upper
triangular with zero diagonal (the $i = j$ factor); strictly
triangular matrices die by $n$ powers (one notch per power). **4.**
$\ker N^0 \subseteq \ker N \subseteq \ker N^2 \subseteq \dots$;
jumps $w_k = \dim \ker N^k - \dim \ker N^{k-1}$; blocks of size
exactly $s$ number $w_s - w_{s+1}$, basis-free. **5.** Every
complex operator is a direct sum of blocks $J_s(\lambda) = \lambda
I + N_s$ with a basis-free block multiset; over a general field the
rational canonical form (companion blocks with divisible invariant
factors) replaces it, declared here with Stage K as payee.

</div>
</details>

:::

## Problems

**Problems.** The quick checks tested recall. These chain several
results and require full written arguments.

1. Prove that the eigenvectors of $R$ for $i$ and $-i$ are linearly
   independent over $\mathbb{C}$, and conclude $R$ is diagonalisable
   over $\mathbb{C}$ by writing the change-of-basis matrix
   explicitly.
   *(Hint: eigenvectors for distinct eigenvalues are independent
   (1C); independence of two nonproportional vectors in dimension 2
   is a basis.)*
2. Prove that a strictly upper triangular $n \times n$ matrix $M$
   satisfies $M^n = 0$, by the one-notch argument made precise:
   show $\mathrm{span}(e_1, \ldots, e_j)$ is $M$-invariant in the
   right direction and induct on the power.
   *(Hint: prove by induction on $j$ that $M^j e_k$ lies in
   $\mathrm{span}(e_1, \ldots, e_{k-j})$ for $k > j$, and is $0$ for
   $k \leq j$.)*
3. Carry out the nilpotent block construction in full for the ladder
   $\beta = (0, 2, 4, 5)$ on a 5-space: determine the block sizes,
   exhibit a chain basis by choosing vectors in the right
   complements, and write the chains explicitly.
   *(Hint: jumps $w = (2, 2, 1)$ give one block of size $3$ and one
   of size $2$; start with a basis of a complement to $\ker N^2$
   inside $\ker N^3$, string each choice down by applying $N$, then
   fill the size-$2$ chain from a complement to $\ker N$ inside
   $\ker N^2$.)*
4. Prove the dimension count used in Section 5: for distinct
   eigenvalues, $\sum_\lambda \dim V_\lambda = n$, by showing the
   sum of the $V_\lambda$ is direct and computing the dimension of
   the sum via the polynomial Bezout argument repeatedly.
   *(Hint: coprimality of $(x - \lambda)^n$ over distinct $\lambda$
   lets you project onto each $V_\lambda$ with an idempotent built
   from Bezout; the projections' images sum to all of $V$ since the
   combined Bezout identity is $1$.)*
5. Compute the rational canonical form of the operator on
   $\mathbb{R}^3$ with matrix
   $\begin{pmatrix} 0 & -1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 2
   \end{pmatrix}$ (a rotation in a plane plus a stretch), over
   $\mathbb{R}$ and over $\mathbb{C}$; explain how the two answers
   are two readings of one operator.
   *(Hint: the plane and the line are $T$-invariant; over
   $\mathbb{R}$ the blocks are $C(x^2 + 1) \oplus C(x - 2)$; over
   $\mathbb{C}$ the plane splits into two $1 \times 1$ Jordan blocks
   at $\pm i$.)*

:::
## Where to Go Next

The algebra of finite dimensions is now closed: whatever an operator
does, a finite table of rigid shapes describes it exactly. The course
turns from structure to motion: Stage G (Euclidean analysis) builds
the calculus of several variables, from convergent sequences through
the derivative as best linear approximation to the existence theorem
for differential equations, discharging the multivariable debts the
later stages have been leaning on.

**Next: [Stage G: Euclidean Analysis](/17-core-course/stage-g-euclidean-analysis/).**
