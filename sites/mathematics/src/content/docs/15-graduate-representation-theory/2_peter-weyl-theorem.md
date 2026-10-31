---
date: 2026-10-17T00:00:00+01:00
title: The Peter–Weyl Theorem
tags:
  - University Maths
description: "The Peter-Weyl theorem for compact groups: matrix coefficients form an orthonormal basis, characters are complete, and every compact group is an inverse limit of unitary representations of finite groups."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "15 Graduate Representation Theory", "url": "https://mathematics.wyattau.com/15-graduate-representation-theory"}, {"name": "2_peter-weyl-theorem", "url": "https://mathematics.wyattau.com/15-graduate-representation-theory/2_peter-weyl-theorem"}]
}
</script>

The Peter–Weyl theorem is what finite-group representation theory becomes when
the group is allowed to be infinite; provided it is compact. For a finite group
there are finitely many irreducible representations, they are indexed by
conjugacy classes, and their characters are orthonormal in an averaging inner
product. For a compact group there are still finitely many in each dimension,
they are still orthogonal, and the averaging inner product becomes an integral
against Haar measure. Everything finite-group theory established survives, with
sums replaced by integrals; and the theorem adds something the finite case
cannot see: completeness, which is the statement that there is nothing else.

The reason to prove it rather than cite it is that the proof is a
translation exercise. It is the finite-group theory of
[the previous page](/15-graduate-representation-theory/1_representation-theory-of-finite-groups/)
with `sum over g` replaced by `integral over G`; and the two steps where the
infinite case genuinely differs are the two steps worth understanding: where
density is needed in place of finiteness, and where a *finite* subgroup
approximation makes the result concrete.

## Intuition

Take the circle group $S^1$. Its irreducible representations are the characters
$\chi_n(z) = z^n$ for $n \in \mathbb{Z}$, and the Peter–Weyl theorem says these
are an orthonormal basis of $L^2(S^1)$; which is exactly Fourier theory, read
as representation theory. The theorem is the statement that Fourier analysis is
the representation theory of $S^1$, and that this is not a coincidence: every
compact group has a "Fourier theory", its irreducible representations, and the
expansion of a function in that basis is its Fourier series.

Now take $SU(2)$. Its irreducibles are indexed by a non-negative integer $n$, of
dimension $n+1$, and Peter–Weyl says their matrix coefficients are an
orthonormal basis of $L^2(SU(2))$; so a function on the group decomposes into
components of definite "spin", which is why angular momentum in quantum
mechanics is the representation theory of $SU(2)$ read backwards. That is the
sentence this page exists to make precise.

The completeness is what makes the analogy arithmetic. Orthonormality alone
says the irreducibles are a nicely separated family; completeness says they are
*all* of them, so counting representations counts everything and, applied to the
regular representation, forces $\sum_i d_i^2 = 1$-type identities to hold with
integrals in place of sums.

## 1. Haar measure, and what compactness buys

**Definition.** A **Haar measure** $\mu$ on a compact group $G$ is a regular
Borel measure, invariant under left translation, with $\mu(G) = 1$. It exists
and is unique.

Compactness is the load-bearing hypothesis in three places, and it is worth
listing them before using them:

1. $\mu(G) = 1$; the total mass is finite, so $L^2(G, \mu)$ is a Hilbert space
   with the inner product $\langle f_1, f_2\rangle = \int f_1 \overline{f_2}\,d\mu$,
   the direct analogue of averaging over a finite group.
2. Every irreducible representation is finite-dimensional. This is *false* for
   non-compact groups; the regular representation of $\mathbb{R}$ decomposes
   into characters of continuous cardinality, none of them square-integrable -
   and it is the reason the theorem is stated for compact groups only.
3. Compact groups have plenty of finite group quotients, which is what makes
   the approximation argument in Section 4 work.

**Unimodularity.** For compact $G$, left Haar measure is also right-invariant:
$\mu(Eg) = \mu(E)$. The reason is that right translation by a fixed element is an
automorphism, so $\nu(E) = \mu(Eg)$ is another left-Haar measure, and by
uniqueness $\nu = c\mu$ for a constant $c$; iterating gives $c^n = 1$ unless
$c = 1$, and since $\mu$ is finite and $c > 0$, compactness forces $c = 1$.
Unimodularity is what lets $\rho(g)^{-1} = \rho(g^{-1}) = \overline{\rho(g)}{}^{\,t}$
pass through integrals without a modular function appearing.

## 2. Schur's lemma, and unitarity

**Lemma 1 (unitarisation).** Every finite-dimensional representation of a
compact group is unitarisable: there is an inner product on $V$ with
$\rho(g)$ unitary for all $g$.

*Proof.* Take any inner product $\langle\cdot,\cdot\rangle_0$ on $V$ and average
it over the group:

$$
\langle v, w\rangle = \int_G \langle \rho(h)v, \rho(h)w\rangle_0\,d\mu(h).
$$

This is an inner product, and invariance of $\mu$ gives

$$
\langle \rho(g)v, \rho(g)w\rangle
= \int_G \langle \rho(hg)v, \rho(hg)w\rangle_0\,d\mu(h)
= \int_G \langle \rho(k)v, \rho(k)w\rangle_0\,d\mu(k) = \langle v, w\rangle
$$

after the change of variable $k = hg$. $\blacksquare$

The averaging trick is exactly the one from the finite case, with the sum
replaced by an integral; and this is the first place compactness is used, since
the integral converges only because $\mu(G) = 1$.

**Lemma 2 (Schur).** If $V, W$ are irreducible unitary representations and
$\varphi : V \to W$ is $G$-linear, then $\varphi = 0$ unless $V \cong W$, in
which case $\varphi = \lambda\,\mathrm{id}$.

*Proof.* Identical to the finite case: $\ker\varphi$ and
$\operatorname{im}\varphi$ are closed $G$-invariant subspaces, so irreducibility
makes each trivial or everything. For the self-map case, unitarity lets
$\varphi$ be replaced by a self-adjoint or skew one without losing
$G$-linearity; a self-adjoint operator has a spectral projection, which is
$G$-invariant and neither $0$ nor $I$ unless $\varphi$ is scalar. $\blacksquare$

Notice what changed and what did not. The finite-dimensional conclusion survives
because of compactness, not because the group is finite; and the spectral
projection replaces the eigenvalue argument, since a $G$-linear operator on an
infinite-dimensional space need have no eigenvalues at all.

## 3. Orthogonality of matrix coefficients

For irreducible unitary $\rho : G \to U(V)$ of dimension $d_\rho$, choose an
orthonormal basis and write the matrix coefficients
$\rho_{ij}(g) = \langle \rho(g)e_j, e_i\rangle$. These are functions in
$L^2(G, \mu)$, and:

**Theorem (orthogonality).**

$$
\int_G \rho_{ij}(g)\,\overline{\rho'_{kl}(g)}\,d\mu(g)
= \begin{cases} \dfrac{\delta_{ik}\delta_{jl}}{d_\rho} & \rho \cong \rho' \\[6pt] 0 & \rho \not\cong \rho'. \end{cases}
$$

*Proof.* Fix $w \in W$ and consider $T : V \to W$, $T(v) = \langle v, w\rangle v_0$
for a fixed $v_0 \in W$. Average it:

$$
\varphi = \int_G \rho'(h)\,T\,\rho(h)^{-1}\,d\mu(h).
$$

Then $\varphi$ is $G$-linear: for $g \in G$,
$\rho'(g)\varphi\rho(g)^{-1} = \int \rho'(hg)T\rho(hg)^{-1}d\mu(h) = \varphi$
by left invariance. By Schur, $\varphi = 0$ if $V \not\cong W$ and
$\varphi = \lambda\,\mathrm{id}$ if $V = W$.

Taking $V = W$ and taking traces computes $\lambda$:
$\operatorname{tr}\varphi = \lambda d_\rho$, while
$\operatorname{tr}T = \langle v_0, w\rangle$ is preserved by conjugation, so
$\operatorname{tr}\varphi = \operatorname{tr}T$. Hence
$\lambda = \langle v_0, w\rangle/d_\rho$, and reading off the $(i,j)$ entry of
$\varphi$ with $v_0 = e_i$, $w = e_j$ gives the second line. For
$V \not\cong W$, $\varphi = 0$ gives the vanishing directly. $\blacksquare$

## 4. Completeness: the Peter–Weyl theorem

**Theorem (Peter–Weyl, 1927).** The union of the spaces of matrix coefficients
of all irreducible unitary representations is dense in $L^2(G, \mu)$.
Consequently these spaces are pairwise orthogonal and their direct sum is
everything:

$$
L^2(G, \mu) = \widehat{\bigoplus}_{\rho \in \widehat{G}} \; \mathrm{End}(V_\rho),
\qquad
\dim \mathrm{End}(V_\rho) = d_\rho^2.
$$

*Proof (dense, then closed under the wrong assumption).* Suppose the span $\mathcal{C}$
of all matrix coefficients is not dense. Then some $f \in L^2(G)$, $f \neq 0$, is
orthogonal to $\mathcal{C}$, and since $\mathcal{C}$ is an algebra of continuous
functions that separates points and contains constants, the two-variable Stone–
Weierstrass theorem makes $\mathcal{C}$ dense in $C(G \times G)$ on
$\{(x,y) : x = y\}$, hence; by applying it to $f$'s_translate; dense in
$C(G)$ in the uniform norm.

Since $L^2$ convergence implies convergence in measure, $f$ orthogonal to a
uniformly dense subset of $C(G)$ forces $f = 0$ almost everywhere: for any
continuous $h$ there is $c_n \in \mathcal{C}$ with $c_n \to h$ uniformly, so
$\int f\overline{h} = \lim_n \int f \overline{c_n} = 0$, and continuous functions
are dense in $L^2$, so $f = 0$. Contradiction.

For the separation step: given distinct $x, y \in G$, an irreducible
representation with $\rho(x) \neq \rho(y)$ must exist, or else all matrix
coefficients agree on $x$ and $y$ and nothing in $\mathcal{C}$ separates them.
That irreducible representations separate points is the Gelfand–Raikov theorem,
proved in outline in
**[Banach Algebras and the Gelfand Representation](/12-graduate-analysis/2_banach-algebras-and-the-gelfand-representation/)**:
a continuous positive-definite function built from a neighbourhood of the
identity avoiding $g$, read as a matrix coefficient of the cyclic representation
its translates generate. What this page uses is the consequence: $\mathcal{C}$
separates points and Stone–Weierstrass applies. This is also the only step
where compactness is essential rather than convenient, and it is why the theorem
fails for $\mathbb{R}$: an infinite-dimensional irreducible representation of
$\mathbb{R}$ exists, and the conclusion is false there. $\blacksquare$

## 5. What the finite case sees, and what it cannot

Setting $G$ finite recovers the finite-group results exactly: Haar measure is
counting measure divided by $|G|$, so the integrals are averages, and
$\dim\mathrm{End}(V_\rho) = d_\rho^2$ summed over irreducibles gives
$|G| = \sum_i d_i^2$ again.

What the finite case cannot see is the *completeness*. For a finite group,
finiteness of the number of irreducibles is automatic from
$|G| = \sum d_i^2$; for a compact group it is a theorem, and it has content:
the irreducibles of $S^1$ are indexed by $\mathbb{Z}$, infinitely many but
discretely, which is why Fourier series work. For $\mathbb{R}$ the index set
becomes $\mathbb{R}$ itself and the sum becomes an integral; the Fourier
*transform*; and that is exactly where the theorem stops applying, since those
characters are not in $L^2(\mathbb{R})$.

**Consequence: characters are complete.** Since characters are sums of diagonal
matrix coefficients, and matrix coefficients are dense, two irreducible
representations with the same character are isomorphic, and a representation is
determined by its character. For a finite group that followed from finiteness;
here it is the Peter–Weyl theorem speaking.

**Consequence: every compact group is an inverse limit of images in unitary
groups.** The separating family of representations embeds $G$ into a product of
unitary groups, and the finite-dimensional quotients give
$G \cong \varprojlim G/N$ over the normal subgroups $N$ with $G/N$ a Lie group.
Compact groups are, in this precise sense, approximable by finite groups; which
is why finite-group intuition transfers, and why it transfers *only* through
limit arguments rather than by direct analogy.

## Common Pitfalls

- **Assuming irreducibles are finite-dimensional for non-compact groups.** They
  are not, and the theorem is false there: $\mathbb{R}$ has no
  finite-dimensional non-trivial unitary representations at all, since
  $\mathbb{R}$ is abelian and its unitary characters $e^{i\xi x}$ are
  non-integrable.
- **Reading $\widehat\oplus$ as an ordinary sum.** The direct sum is
  *Hilbert-space* completion of the algebraic direct sum: an
  $L^2$ function is a square-summable *sequence of coefficients*, not a finite
  combination. Fourier series converge in $L^2$, not pointwise in general.
- **Using eigenvalues where spectral projections are needed.** On an
  infinite-dimensional irreducible, a $G$-linear operator need have no
  eigenvalues; Schur's lemma is proved with a spectral projection, and the
  finite-group proof does not transfer verbatim.
- **Treating $\mu(G) = 1$ as a convention.** It is what makes $L^2(G)$ a
  Hilbert space containing the constants, and what makes the orthogonality
  relations normalised the same way as the finite case. Changing it changes
  every formula.
- **Forgetting unimodularity.** For a non-unimodular group the left and right
  regular representations differ by the modular function, and the orthogonality
  relations pick up a Jacobian. Compact groups are unimodular, which is why the
  relations above are clean.
- **Expecting pointwise convergence of the expansion.** Peter–Weyl gives $L^2$
  convergence. Pointwise convergence of the Fourier expansion of a continuous
  function on $S^1$ *fails* in general, and the same is true on every compact
  group.

## Applications

- **Harmonic analysis on compact groups.** Every compact group has a Fourier
  theory; the irreducibles index the "frequencies", and convolution becomes
  pointwise multiplication of matrix coefficients after the transform.
- **Angular momentum.** The irreducibles of $SU(2)$ are indexed by
  $n = 0, 1, 2, \dots$ with dimension $n + 1$, matching the spin degeneracies of
  quantum mechanics; Peter–Weyl is why a wavefunction on $SU(2)$ decomposes into
  components of definite spin.
- **Number theory.** Automorphic forms are functions on quotient spaces
  $\Gamma \backslash G$ for compact $G$; their spectral expansion is
  Peter–Weyl applied to the right regular representation, and the Langlands
  program is in large part the study of what replaces it in the non-compact case.
- **Random walks on groups.** Convergence of a random walk to the uniform
  distribution is a statement about powers of the projection onto the
  non-trivial isotypic components, which Peter–Weyl supplies; the upper bound
  lemma of Diaconis–Shahshahani is character orthogonality applied to this.
- **Compact quantum groups.** Woronowicz's theory is Peter–Weyl with the algebra
  of functions replaced by a non-commutative one, and the theorem's statement
  survives almost unchanged.

## Cross-References

- **[Representation Theory of Finite Groups](/15-graduate-representation-theory/1_representation-theory-of-finite-groups/)**; the finite case, whose averaging trick this page repeats with integrals.
- **[Homomorphisms and Isomorphism Theorems](/1-abstract-algebra/5_homomorphisms-and-isomorphism-theorems/)**; quotients, which is what the inverse-limit statement is made of.
- **[Normed Spaces and Banach Spaces](/11-functional-analysis/1_normed-spaces-and-banach-spaces/)**; completeness of $L^2$, which is what the Hilbert direct sum needs.
- **[Compactness](/9-topology/5_compactness/)**; the hypothesis doing the work in all three places it is used.
- **[The Fundamental Theorems](/11-functional-analysis/4_the-fundamental-theorems/)**; the spectral theorem, of which Peter–Weyl is the group-representation specialisation.
- [Quantum Mechanics](https://physics.wyattau.com/5-quantum-mechanics/); spin, which is the representation theory of $SU(2)$ read backwards.
- [Fourier Series](/5-ordinary-differential-equations/7_fourier-series/); the $S^1$ case, met first without the representation-theoretic language.
