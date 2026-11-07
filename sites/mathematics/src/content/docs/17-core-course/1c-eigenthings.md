---
date: 2026-11-07T00:00:00+00:00
title: "Level 1C: Eigenvectors, Diagonalisation, and Cayley–Hamilton"
description: "The eigenstructure of a linear endomorphism: the characteristic polynomial proved basis-independent, triangularisation over the complex numbers via the quotient universal property, algebraic versus geometric multiplicity, the diagonalisability criterion, and the Cayley–Hamilton theorem."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "17 Core Course", "url": "https://mathematics.wyattau.com/17-core-course"}, {"name": "Level 1C: Eigenvectors", "url": "https://mathematics.wyattau.com/17-core-course/1c-eigenthings"}]
}
</script>

**The Defect.** Taught first as a recipe, "find the eigenvalues" is a ritual of
characteristic polynomials and row games. What the ritual computes, why the
polynomial is the same in every basis, when the ritual fails (most square
matrices are *not* diagonalisable over the reals, and plenty are not
diagonalisable at all), and what Cayley–Hamilton actually says, are all left as
fog. This page rebuilds the ritual from [Level
1B](/17-core-course/1b-linear-algebra/)'s determinant and quotient machinery,
proves every claim, and isolates the one analytic input it needs.

**The One-Line Reveal.** An eigenvector is a one-dimensional invariant
subspace; every theorem of this page is the study of how an endomorphism's
invariant subspaces fit together, measured by the determinant.

**Scope.** From [Level 1B](/17-core-course/1b-linear-algebra/): determinants
and multiplicativity (Section 4), quotients and their universal property
(Section 3), the exchange lemma, rank–nullity. One input is declared: the
**fundamental theorem of algebra** (every nonconstant polynomial over
$\mathbb{C}$ has a complex root; proved in any algebra course, used here only
to guarantee that complex characteristic polynomials split). Everything else
is proved. No inner products appear on this page; the spectral theorem for
inner-product spaces is Level 1D's business.

## 1. Eigenvalues, Eigenvectors, Eigenspaces

**Definition.** Let $T: V \to V$ be a linear map (an **endomorphism**: from
now on the domain and codomain coincide, so matrices are square). A scalar
$\lambda \in k$ is an **eigenvalue** of $T$ if there exists $v \neq 0$
with $T v = \lambda v$; such a $v$ is an **eigenvector** for $\lambda$.
The **eigenspace** of $\lambda$ is $E_\lambda := \ker(T - \lambda
\operatorname{id})$.

**Proposition 1.1.** $E_\lambda$ is a subspace of $V$, and if $v_1 \in
E_{\lambda_1}, \dots, v_k \in E_{\lambda_k}$ with the $\lambda_i$
pairwise distinct and $v_1 + \cdots + v_k = 0$, then every $v_i = 0$: the
eigenspaces of distinct eigenvalues form a **direct** system.

**Proof.** $E_\lambda = \ker(T - \lambda\operatorname{id})$ is a kernel
of a linear map, hence a subspace. For directness, fix $i$ and apply the
operator $\prod_{j \neq i} (T - \lambda_j \operatorname{id})$ to both
sides of $v_1 + \cdots + v_k = 0$. Operators that are polynomials in $T$
commute with each other, so every $v_j$ with $j \neq i$ is killed (each
factor $T - \lambda_j \operatorname{id}$ annihilates $v_j$, and the order
of factors does not matter). What survives is
$\big(\prod_{j \neq i} (\lambda_i - \lambda_j)\big) v_i = 0$, and the
scalar is a product of nonzero field elements, hence nonzero; so $v_i = 0$.
$\blacksquare$

## 2. The Characteristic Polynomial

**Definition.** Let $B$ be the matrix of $T$ in a basis. The
**characteristic polynomial** of $T$ is

$$
\chi_T(t) := \det(t I - B) \in k[t].
$$

**Proposition 2.1 (well defined).** $\chi_T$ does not depend on the basis.

**Proof.** If $B'$ is the matrix in another basis, then $B' = S^{-1} B S$
for the change-of-basis matrix $S$ (the columnwise convention of 1B), and

$$
\det(tI - B') = \det\big(S^{-1}(tI - B)S\big) = \det(S^{-1}) \det(tI -
B) \det(S) = \det(tI - B),
$$

by multiplicativity of the determinant (1B, Theorem 4.8).
$\blacksquare$

**Proposition 2.2 (eigenvalues are exactly the roots).** $\lambda$ is an
eigenvalue of $T$ if and only if $\chi_T(\lambda) = 0$.

**Proof.** $\lambda$ is an eigenvalue iff $T v = \lambda v$ has a nonzero
solution iff $(T - \lambda\operatorname{id})v = 0$ has a nonzero solution
iff $T - \lambda \operatorname{id}$ is not invertible iff its matrix has
zero determinant (1B, Corollary 4.9). That determinant is
$\det(B - \lambda I) = (-1)^n \det(\lambda I - B) = (-1)^n
\chi_T(\lambda)$, and a scalar is zero iff its sign-flipped copy is zero.
$\blacksquare$

**Corollary 2.3.** Over $\mathbb{C}$, $\chi_T$ is monic of degree $n =
\dim V$ and splits into $n$ linear factors (fundamental theorem of algebra,
the declared input); so $T$ has at least one eigenvalue, and its eigenvalues,
counted with multiplicity, are the roots of $\chi_T$.

**Proof.** $\det(tI - B)$ expands as a monic degree-$n$ polynomial in $t$
(the identity term $\sigma = \operatorname{id}$ contributes $t^n$, and no
term has higher degree). Splitting is the fundamental theorem of algebra;
roots are eigenvalues by Proposition 2.2. $\blacksquare$

## 3. Triangularisation

**Theorem 3.1 (complex triangularisation).** Let $T: V \to V$ be an
endomorphism of a finite-dimensional complex vector space. Then $V$ has a
basis $e_1, \dots, e_n$ with

$$
T e_i \in \operatorname{span}(e_1, \dots, e_i) \qquad \text{for every }
i,
$$

that is, the matrix of $T$ in this basis is upper triangular.

**Proof.** Induct on $n$. For $n = 0$ or $1$ there is nothing to prove. For
$n \geq 2$: by Corollary 2.3, $T$ has an eigenvalue $\lambda_1$ with an
eigenvector $u \neq 0$. The line $L := \operatorname{span}(u)$ is
$T$-invariant ($T u = \lambda_1 u \in L$), so by the universal property of
the quotient (1B, Theorem 3.2) the map $\bar{T}: V/L \to V/L$,
$\bar{T}(v + L) = T v + L$, is a well-defined linear endomorphism of the
quotient, which has dimension $n - 1$ (rank–nullity applied to the quotient
map, 1B Theorem 1.7). By the induction hypothesis there is a basis
$\bar{w}_2, \dots, \bar{w}_n$ of $V/L$ with $\bar{T} \bar{w}_i \in
\operatorname{span}(\bar{w}_2, \dots, \bar{w}_i)$. Choose representatives
$w_i \in V$ of $\bar{w}_i$; then $u, w_2, \dots, w_n$ is a basis of $V$
($n$ vectors, spanning: $u$ plus representatives of a spanning list of the
quotient). And $T w_i + L = \bar{T} \bar{w}_i \in \operatorname{span}
(\bar{w}_2, \dots, \bar{w}_i)$ means $T w_i \in \operatorname{span}(u,
w_2, \dots, w_i)$: triangularity. $\blacksquare$

**Corollary 3.2.** In a triangularising basis, the diagonal entries
$d_1, \dots, d_n$ are the eigenvalues of $T$ and $\chi_T(t) = \prod_{i}
(t - d_i)$.

**Proof.** The determinant of a triangular matrix is the product of its
diagonal entries (1B, Problem 7), so $\chi_T(t) = \det(tI - B) = \prod_i
(t - d_i)$; roots are eigenvalues by Proposition 2.2. $\blacksquare$

## 4. Multiplicities and the Diagonalisability Criterion

**Definition.** The **algebraic multiplicity** of an eigenvalue $\lambda$
is its multiplicity as a root of $\chi_T$; the **geometric multiplicity**
is $\dim E_\lambda$.

**Lemma 4.1 (rank of a triangular matrix).** A triangular $n \times n$
matrix whose diagonal has $k$ nonzero entries has rank at least $k$.

**Proof.** Let $i_1 < \dots < i_k$ be the positions of the nonzero diagonal
entries, and let $M$ be the $k \times k$ submatrix on those rows and
columns. $M$ is triangular with nonzero diagonal, so $\det M \neq 0$ (1B,
Problem 7). A nonzero $k \times k$ minor certifies $k$ independent columns:
a vanishing combination of those columns restricted to those rows would be a
vanishing combination of the triangular matrix $M$'s columns, which are
independent by $\det M \neq 0$ and Lemma 1.3's logic. So the rank is at
least $k$. $\blacksquare$

**Theorem 4.2 (algebraic dominates geometric).** For every eigenvalue
$\lambda$: $\dim E_\lambda \leq$ the algebraic multiplicity of
$\lambda$.

**Proof.** Triangularise (Theorem 3.1) and let $m$ be the number of diagonal
entries equal to $\lambda$, which is the algebraic multiplicity
(Corollary 3.2). Then $T - \lambda\operatorname{id}$ is triangular with
diagonal entries $d_i - \lambda$: exactly $n - m$ of them are nonzero. By
Lemma 4.1, $\operatorname{rank}(T - \lambda \operatorname{id}) \geq n -
m$, and $E_\lambda = \ker(T - \lambda \operatorname{id})$, so rank–nullity
(1B, Theorem 1.7) gives $\dim E_\lambda = n - \operatorname{rank} \leq
m$. $\blacksquare$

**Theorem 4.3 (diagonalisability criterion).** $T$ admits a basis of
eigenvectors (equivalently: its matrix in some basis is diagonal) if and
only if (i) $\chi_T$ splits into linear factors over $k$ and (ii) algebraic
multiplicity equals geometric multiplicity for every eigenvalue.

**Proof.** ($\implies$) In a basis of eigenvectors the matrix is diagonal
with entries $\lambda_1, \dots, \lambda_n$, so $\chi_T(t) = \prod_i (t
- \lambda_i)$ splits, and for each distinct $\lambda$, the eigenspace
contains the span of $\lambda$'s basis vectors, so the geometric
multiplicity is at least the count; Theorem 4.2 caps it, so they are equal.
($\Longleftarrow$) Suppose (i) and (ii). The distinct eigenvalues
$\lambda_1, \dots, \lambda_r$ have $\dim E_{\lambda_i}$ equal to their
algebraic multiplicities, and (i) makes those multiplicities sum to $n$. By
Proposition 1.1 the sum $E_{\lambda_1} + \cdots + E_{\lambda_r}$ is
direct, so its dimension is the sum of the $\dim E_{\lambda_i} = n$:
the sum is all of $V$. Taking a basis of each eigenspace and concatenating
gives $n$ linearly independent eigenvectors spanning $V$: a basis of
eigenvectors, in which the matrix is diagonal. $\blacksquare$

## 5. Cayley–Hamilton

**Theorem 5.1 (Cayley–Hamilton).** Every endomorphism satisfies its own
characteristic polynomial: $\chi_T(T) = 0$ (the zero endomorphism).

**Proof.** Over $\mathbb{C}$ first (the general field case follows for the
splitting fields this course uses). Induct on $n = \dim V$. For $n = 0$,
$\chi_T$ is the empty product and $\chi_T(T)$ acts on the zero space. For
$n \geq 1$: pick an eigenvalue $\lambda_1$ with eigenvector $u$
(Corollary 2.3), let $L = \operatorname{span}(u)$, and let $\bar{T}$ be
the induced endomorphism of $V/L$ as in Theorem 3.1's proof. The
characteristic polynomials relate by $\chi_T(t) = (t - \lambda_1)
\chi_{\bar{T}}(t)$ (both sides are monic degree $n$ with the same roots
and multiplicities: $\lambda_1$ once plus $\bar{T}$'s roots, which are
$T$'s remaining eigenvalues by the quotient correspondence in Theorem 3.1's
proof). By the induction hypothesis, $\chi_{\bar{T}}(\bar{T}) = 0$.

Now write $\chi_{\bar{T}}(t) = t^{n-1} + c_{n-2} t^{n-2} + \cdots + c_0$
and substitute $T - \lambda_1 \operatorname{id}$ for $t$: collecting
powers shows

$$
\chi_{\bar{T}}(T) = Q \circ (T - \lambda_1 \operatorname{id})
$$

for a polynomial $Q$ in $T$ (each power $(T - \lambda_1
\operatorname{id})^j$ factors as $(T - \lambda_1 \operatorname{id})^{
j-1} \circ (T - \lambda_1 \operatorname{id})$). Crucially,
$(T - \lambda_1 \operatorname{id})$ maps all of $V$ into... it maps $v$
to $T v - \lambda_1 v$, and modulo $L$ this is $\bar{T} \bar{v}$: so
$Q(T) \circ (T - \lambda_1 \operatorname{id}) v = Q(T)\big($an element
whose class is $\bar{T}\bar{v}\big)$, and $Q(T)$ on $V$ induces $Q(\bar{T})$
on the quotient. For $v \in V$:

$$
\chi_{\bar{T}}(T) v = Q(T)\big((T - \lambda_1 \operatorname{id}) v\big),
$$

and $(T - \lambda_1 \operatorname{id}) v$ has class $\bar{T} \bar{v}$
in $V/L$, so applying $Q(T)$, which induces $Q(\bar{T})$, gives the class
$Q(\bar{T}) \bar{T} \bar{v} = \chi_{\bar{T}}(\bar{T}) \bar{v} = 0$ in
$V/L$ (induction hypothesis). So $\chi_{\bar{T}}(T) v \in L$ for every
$v$. Finally,

$$
\chi_T(T) v = (T - \lambda_1 \operatorname{id})\, \chi_{\bar{T}}(T) v
\in (T - \lambda_1 \operatorname{id})(L) = \{0\},
$$

because $L$ is $T$-invariant with $T|_L = \lambda_1 \operatorname{id}$.
So $\chi_T(T) = 0$. For real vector spaces, complexify or note that the
course's determinant machinery is unchanged over any field with $\chi_T$
splitting; the theorem holds over any field for which $\chi_T$ splits into
linear factors, which covers $\mathbb{C}$ completely and $\mathbb{R}$ for
real matrices viewed over $\mathbb{C}$. $\blacksquare$

**Corollary 5.2.** $T$ is invertible if and only if $\chi_T(0) \neq 0$;
indeed $\chi_T(0) = (-1)^n \det T$.

**Proof.** $\chi_T(0) = \det(0 \cdot I - B) = \det(-B) = (-1)^n \det B$
(1B, multilinearity of the determinant in rows), and $\det T \neq 0$ is
exactly invertibility (1B, Corollary 4.9). $\blacksquare$

**Quick check.**

1. Define an eigenvalue of $T$.
2. Why is $E_\lambda$ a subspace?
3. State the directness property of eigenspaces for distinct eigenvalues.
4. Which operator kills all but one eigenspace in Proposition 1.1's proof?
5. Must a real $2 \times 2$ rotation have a real eigenvalue?

*Answers:* **1.** A scalar $\lambda$ with $T v = \lambda v$ for some $v
\neq 0$. **2.** It is the kernel of the linear map $T - \lambda
\operatorname{id}$. **3.** The sum of eigenspaces for pairwise distinct
eigenvalues is direct. **4.** $\prod_{j \neq i} (T - \lambda_j
\operatorname{id})$. **5.** No: the rotation by a right angle has no real
eigenvalue (over $\mathbb{C}$ it has $\pm i$).

**Quick check.**

1. Define $\chi_T$ and state why it is basis-independent.
2. State the eigenvalue test in terms of $\chi_T$.
3. Which declared input guarantees roots over $\mathbb{C}$?
4. What is the degree and leading coefficient of $\chi_T$?
5. What is $\chi_T(t)$ when $T$ is the identity on an $n$-dimensional space?

*Answers:* **1.** $\chi_T(t) = \det(tI - B)$; another basis conjugates $B$
by $S$ and determinants cancel $\det S$ (Proposition 2.1). **2.** $\lambda$
is an eigenvalue iff $\chi_T(\lambda) = 0$ (Proposition 2.2). **3.** The
fundamental theorem of algebra (Corollary 2.3). **4.** Degree $n$, monic.
**5.** $(t - 1)^n$.

**Quick check.**

1. State the triangularisation theorem and name the declared input.
2. Which Level 1B structure does the induction step use?
3. What are the eigenvalues of a triangular matrix?
4. Why do the lifted quotient vectors give a basis of $V$?
5. What is $\chi_T(t)$ in a triangularising basis?

*Answers:* **1.** Over $\mathbb{C}$ every endomorphism is upper
triangular in some basis; the fundamental theorem of algebra.
**2.** The quotient $V/L$ and its universal property (1B, Theorem 3.2).
**3.** The diagonal entries (Corollary 3.2). **4.** $u$ plus lifts of a
basis of $V/L$: $n$ vectors spanning $V$ (rank–nullity). **5.** $\prod_i (t
- d_i)$.

**Quick check.**

1. Define the two multiplicities of an eigenvalue.
2. Which one dominates?
3. State the diagonalisability criterion.
4. Why is the sum of eigenspaces direct?
5. Give a non-diagonalisable $2 \times 2$ matrix.

*Answers:* **1.** Algebraic: multiplicity as a root of $\chi_T$;
geometric: $\dim E_\lambda$. **2.** The algebraic (Theorem 4.2).
**3.** $\chi_T$ splits and algebraic equals geometric for every eigenvalue
(Theorem 4.3). **4.** Proposition 1.1. **5.** The shear $\begin{pmatrix} 1
& 1 \\ 0 & 1 \end{pmatrix}$: $\chi = (t-1)^2$ but $E_1$ is
one-dimensional.

**Quick check.**

1. State Cayley–Hamilton.
2. What does $T$ invertible say about $\chi_T(0)$?
3. Where does the induction step evaluate $\chi_{\bar{T}}$?
4. What is $\chi_T(0)$ in terms of $\det T$?
5. Every complex endomorphism satisfies a monic polynomial of what degree?

*Answers:* **1.** $\chi_T(T) = 0$ (Theorem 5.1). **2.** $\chi_T(0) \neq
0$ (Corollary 5.2). **3.** On the quotient endomorphism $\bar{T}$ of $V/L$,
where the induction hypothesis applies. **4.** $\chi_T(0) = (-1)^n \det T$.
**5.** Degree $n$: its own characteristic polynomial.

## 6. Problems

**Problems.** The quick checks above tested recall. These chain several
results and require full written arguments; hints are included where the jump
is large.

1. Compute $\chi_T$ for the shear $T = \begin{pmatrix} 1 & 1 \\ 0 & 1
   \end{pmatrix}$ and prove $T$ is not diagonalisable. ($\chi = (t-1)^2$;
   $E_1 = \ker(T - I) = \operatorname{span}(e_1)$ has dimension $1 < 2 =
   $ algebraic multiplicity; Theorem 4.3 fails.)
2. Prove that if $\chi_T$ has $n$ distinct roots then $T$ is
   diagonalisable. (Distinct roots means every algebraic multiplicity is $1$,
   and $\dim E_\lambda \geq 1$ for each root, so Theorem 4.2 forces
   equality.)
3. Prove that $ST$ and $TS$ have the same characteristic polynomial, for any
   square matrices $S, T$. ($\det(tI - ST) = \det\big(S(tI - TS)S^{-1}
   \big) = \det(tI - TS)$, using multiplicativity and $S S^{-1} = I$ when
   $S$ is invertible; handle general $S$ by a density or continuity argument,
   or restrict to invertible $S$ as the classical statement assumes.)
4. Prove that an idempotent endomorphism ($T^2 = T$) is diagonalisable with
   eigenvalues contained in $\{0, 1\}$. (Every $v$ splits as $T v +
   (v - T v)$ with the first part in $E_1$ and the second in $E_0 = \ker
   T$; the splitting is direct because a vector in both is killed and fixed
   at once.)
5. Prove that a triangular matrix is invertible if and only if every diagonal
   entry is nonzero. (Determinant as the diagonal product, 1B Problem 7, plus
   Corollary 4.9.)
6. Prove Proposition 1.1 again by induction on $k$, using only the
   definition of independence and the operators $T - \lambda_j
   \operatorname{id}$. (Apply $(T - \lambda_k \operatorname{id})$ first;
   the result is a shorter vanishing combination of eigenvectors for the
   remaining distinct eigenvalues.)
7. Prove that if $T$ is triangularisable with distinct diagonal entries then
   every eigenspace is one-dimensional. (Two independent eigenvectors for
   $\lambda$ would give geometric multiplicity $2$ against algebraic
   multiplicity $1$, contradicting Theorem 4.2.)

### The One-Line Reveal (for this page)

The entire page follows from one construction: the flag of invariant
subspaces built one eigenvector at a time through the quotient universal
property. Triangularisation is that flag written in a basis; multiplicities
are counting in it; diagonalisability is the flag's pieces being eigenspace
direct; and Cayley–Hamilton is the induction hypothesis evaluated at the end
of the flag.

### Where to go next

- [Level 1D: Inner Products](/17-core-course/1d-inner-products/) – once
  lengths and angles exist, the symmetric spectral theorem upgrades
  diagonalisability to an orthonormal basis of eigenvectors. Under
  construction.
- [Level 1B: Linear Algebra Done Wrong](/17-core-course/1b-linear-algebra/) –
  the determinant, quotient, and rank–nullity machinery this page stands on.
- [Linear Algebra Done Wrong](https://www.math.brown.edu/~treil/ladw/) –
  Treil's Chapter on eigenvalues and eigenvectors, with the same
  determinant-first emphasis.
