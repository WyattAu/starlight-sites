---
date: 2026-10-08T00:00:00.000Z
title: "Representation Theory of Finite Groups"
description: "Representation theory of finite groups: irreducible representations, Schur's lemma, characters and orthogonality, the regular representation and the sum-of-squares theorem, and where it goes at research level -- modular representation theory, character degrees and the McKay correspondence. Research tier building on abstract algebra and linear algebra."
tags:
  - Mathematics
  - University
  - Representation Theory
  - Abstract Algebra
categories:
  - Mathematics
---

## Representation Theory of Finite Groups

**Tier: A (Advanced), reaching R.** Builds on group theory and linear algebra.
The subject turns abstract group structure into concrete linear algebra, and the
payoff is that questions about groups become questions about matrices --
where the tools are much sharper.

## Recall prompts

Attempt these from memory *before* reading.

- Define a representation of a group $G$ on a vector space $V$.
- What does it mean for a representation to be irreducible?
- State Schur's lemma.
- What is the character of a representation?
- How many irreducible representations does a finite group have?

## Motivation: why turn groups into matrices

An abstract group is a set with a multiplication table. That table is complete
and it is unusable: from the table alone, answering "is this group isomorphic to
that one?" or "does this group have a subgroup of order 12?" is genuinely hard.

A **representation** is a homomorphism $\rho : G \to GL(V)$ -- every group
element becomes an invertible matrix, and the multiplication table becomes
matrix multiplication. The point is not that matrices are familiar. The point is
that a representation *decomposes*, and the pieces into which it decomposes are
the irreducible representations. Group theory becomes a classification problem
about building blocks.

**The two results that make the subject work**, both due to Frobenius and
Schur around 1896–1901:

- There are finitely many irreducible representations, as many as there are
  conjugacy classes.
- Every representation is a direct sum of irreducibles.

So the irreducibles are *atoms*, and every representation has a unique
decomposition into them. That is the same shape as the spectral theorem -- a
decomposition into indecomposable pieces -- and the parallel is exact: for a
compact group, the Peter–Weyl theorem is the spectral theorem applied to the
regular representation.

## Definitions

**Definition (F).** A **representation** of $G$ on a complex vector space $V$
is a homomorphism $\rho : G \to GL(V)$. It is **irreducible** if the only
$G$-invariant subspaces are $\{0\}$ and $V$.

**Definition (F).** The **character** of $\rho$ is $\chi_\rho(g) =
\operatorname{tr}(\rho(g))$.

The character is a *class function*: it is constant on conjugacy classes,
because trace is invariant under conjugation. That is why characters are
recorded in tables indexed by conjugacy classes -- and why the number of
irreducibles equals the number of conjugacy classes.

## Schur's lemma, and why everything follows

**Theorem (U, Schur's Lemma).** Let $V, W$ be irreducible representations of
$G$ and $\varphi : V \to W$ a $G$-linear map.

1. If $V \not\cong W$ then $\varphi = 0$.
2. If $V = W$ then $\varphi$ is a scalar multiple of the identity.

*Proof idea.* $\ker \varphi$ and $\operatorname{im}\varphi$ are $G$-invariant,
so by irreducibility each is $0$ or everything. For (1), $\varphi$ cannot be
injective and surjective at once or it would be an isomorphism. For (2), $V$ is
finite-dimensional over $\mathbb{C}$ so $\varphi$ has an eigenvalue $\lambda$;
then $\varphi - \lambda I$ is $G$-linear with non-trivial kernel, so by
irreducibility it is zero. $\blacksquare$

**Why this lemma carries the subject.** Every major theorem -- orthogonality of
characters, the uniqueness of decomposition, the sum-of-squares formula -- is
proved by constructing a $G$-linear map and applying Schur's lemma. The proof
technique is: *build the averaging operator*

$$
\varphi = \frac{1}{|G|} \sum_{g \in G} \rho(g)\, T\, \rho(g)^{-1},
$$

which is $G$-linear for any linear $T$, then read off what Schur's lemma says
about it.

**Worked example (U).** For an irreducible $V$ and any $v, w \in V$, apply the
averaged rank-one operator $T(x) = \langle x, w\rangle v$. Schur's lemma gives
$\varphi = \lambda I$, and taking traces computes $\lambda = \langle v,
w\rangle / \dim V$. Rearranged:

$$
\frac{1}{|G|}\sum_{g \in G} \overline{\rho_{ii}(g)}\,\rho_{jj}(g)
= \frac{\delta_{ij}}{\dim V},
$$

which is the first orthogonality relation for matrix coefficients. Every
orthogonality relation in the subject comes from this one computation.

## Characters and the orthogonality relations

**Definition.** $\langle \chi, \psi \rangle = \frac{1}{|G|}\sum_{g} \chi(g)
\overline{\psi(g)}$.

**Theorem (U, orthogonality).** The irreducible characters are orthonormal:
$\langle \chi_i, \chi_j \rangle = \delta_{ij}$. Every character is a
non-negative integer combination of irreducible characters, and the
multiplicity of $\chi_i$ in $V$ is $\langle \chi_V, \chi_i \rangle$.

**Worked example (U, the character table of $S_3$).** $S_3$ has three conjugacy
classes: $e$, transpositions (3 of them), 3-cycles (2 of them). So there are
three irreducibles. The trivial and sign representations give two; the third is
found from $1^2 + 1^2 + d_3^2 = |S_3| = 6$, so $d_3 = 2$:

| | $e$ | (12) | (123) |
| --- | --- | ---- | ----- |
| trivial | 1 | 1 | 1 |
| sign | 1 | $-1$ | 1 |
| standard | 2 | 0 | $-1$ |

The standard representation is the action on $\mathbb{C}^3$ modulo the
diagonal, and it is where the symmetry of the three roots of a cubic lives --
which is exactly how Galois theory connects to representation theory.

> **Exercise.** Verify the orthogonality relations hold for this table, and
> compute $\langle \chi_{\text{reg}}, \chi_i \rangle$ for each irreducible,
> where $\chi_{\text{reg}}$ is the character of the regular representation.

## The regular representation and the sum-of-squares theorem

**Theorem (U).** The regular representation of $G$ decomposes as

$$
\mathbb{C}[G] \cong \bigoplus_i V_i^{\oplus d_i},
$$

with $d_i = \dim V_i$. Taking dimensions:

$$
|G| = \sum_i d_i^2.
$$

**Worked example (U).** For $S_3$: $1^2 + 1^2 + 2^2 = 6$ ✓. For the quaternion
group $Q_8$: four one-dimensional irreducibles and one two-dimensional, giving
$1 + 1 + 1 + 1 + 4 = 8$ ✓.

The sum-of-squares theorem is a hard constraint. It immediately rules out
candidate character tables before any representation is constructed, and it is
the first thing to check whenever a table is being built.

## Counterexamples

| Claim | True? | Counterexample |
| ----- | ----- | -------------- |
| Characters determine the representation | yes, over $\mathbb{C}$ | **false over $\mathbb{R}$**: the two complex conjugate 2-dimensional irreducibles of $Q_8$ have the same real character |
| Irreducible implies one-dimensional | no | the standard representation of $S_3$ is 2-dimensional and irreducible |
| $\chi(g)$ determines $g$ | no | $\chi(123) = \chi(132) = -1$ in $S_3$: characters are class functions |
| Subrepresentations always split | no, over $\mathbb{R}$ or $\mathbb{Z}$ | over $\mathbb{C}$ they do (complete reducibility); over fields of characteristic dividing $|G|$ they do not |

The last row is the research frontier. **Modular representation theory**
studies representations over fields whose characteristic divides $|G|$, where
Maschke's theorem fails, representations need not be semisimple, and the
classification becomes vastly harder. The decomposition matrix relating ordinary
and modular irreducibles is the central object, and Brauer theory is its
framework.

## Where the research frontier is

- **Modular representation theory.** Over a field of characteristic $p$
  dividing $|G|$, complete reducibility fails. The subject becomes the study of
  indecomposable modules, Brauer characters, and decomposition matrices. The
  **McKay correspondence** connects the irreducible representations of a finite
  subgroup of $SL(2,\mathbb{C})$ to the affine Dynkin diagrams — a bridge from
  representation theory to algebraic geometry that is still generating work.
- **Character degrees.** The set of irreducible character degrees strongly
  constrains the group: $G$ is solvable iff every character degree is coprime
  to its prime factors... the precise statement is the Itô–Michler theorem, and
  the converse directions of several such results are recent.
- **Categorification.** Khovanov homology categorifies the Jones polynomial;
  geometric representation theory categorifies the entire character theory.
  This is where representation theory meets topology.

## Counterexample section

| Object | Looks like | Is actually |
| ------ | ---------- | ----------- |
| $\chi_V = \chi_W$ implies $V \cong W$ | true over $\mathbb{C}$ | false over $\mathbb{R}$ |
| $d_i \mid |G|$ | true | but $|G|/\sum d_i^2 = 1$ is the only constraint the theorem gives |
| Every group of order $p^2$ is abelian | yes | and hence has only 1-dimensional irreducibles |
| Irreducible characters are linearly independent | yes | that is why the character table has no repeated rows |

## Recall prompts — attempt after reading

- State Schur's lemma in both parts.
- Why are characters class functions?
- State the sum-of-squares theorem and apply it to $Q_8$.
- What does Maschke's theorem say, and where does it fail?
- What is the McKay correspondence?

## Interleaving problems

Mix these with material from [Abstract
Algebra](/1-abstract-algebra/1_groups-and-subgroups/), [Linear
Algebra](/2-linear-algebra/1_vector-spaces-and-linear-maps/), [Spectral
Theory](/12-graduate-analysis/1_spectral-theory-of-self-adjoint-operators/) and
[Measure Theory](/10-measure-theory/2_measures/).

1. (Group theory.) Show that every group of order $p^2$ is abelian, and deduce
   that all its irreducibles are 1-dimensional.
2. (Linear algebra.) Prove that a finite group of unitary matrices is
   diagonalisable, using averaging over the group.
3. (Spectral theory.) Show that the left-regular representation of a compact
   group extends to a decomposition of $L^2(G)$, and connect to the
   Peter–Weyl theorem.
4. (Measure theory.) For a compact group with Haar measure, show the matrix
   coefficients of inequivalent irreducibles are orthogonal in $L^2(G)$.
5. (Research.) Show that the number of irreducible representations of a finite
   abelian group equals its order, and reconcile this with the sum-of-squares
   theorem.

## See Also

- [Groups and Subgroups](/1-abstract-algebra/1_groups-and-subgroups/) — the
  group theory background
- [Field Theory](/1-abstract-algebra/12_field-theory/) — where the
  characteristic comes from
- [Galois Theory Fundamentals](/1-abstract-algebra/13_galois-theory-fundamentals/)
  — the standard representation of $S_3$ and the cubic
- [Spectral Theory of Self-Adjoint Operators](/12-graduate-analysis/1_spectral-theory-of-self-adjoint-operators/)
  — the parallel decomposition theorem
- [How to Use These Notes](/how-to-use/) — the method
