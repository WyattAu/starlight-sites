---
title: Normal Subgroups and Quotient Groups
tags:
  - Mathematics
  - University
description: 'Normal Subgroups and Quotient Groups: comprehensive educational content notes with precise definitions, worked examples, common pitfalls, and practice problems.'
---

<aside class="starlight-aside starlight-aside--note">
<strong>Historical Context</strong>
The concept of normal subgroups was introduced by Évariste Galois in his 1830 letter to Augustin-Louis Cauchy, written the night before his fatal duel. Galois showed that a polynomial equation is solvable by radicals if and only if its Galois group has a composition series whose factors are all abelian — a result that connected group theory to the ancient problem of solving polynomial equations. The quotient group $G/N$ was formalised later by Camille Jordan (1870) in his *Traité des substitutions*. Emmy Noether's work in the 1920s-30s showed that normal subgroups correspond to congruence relations, connecting group theory to lattice theory and universal algebra. Today, normal subgroups are fundamental to the classification of finite simple groups — one of the great achievements of 20th-century mathematics.
</aside>
### 4.1 Normal Subgroups

A subgroup $N \leq G$ is **normal** (written $N \trianglelefteq G$) if $gNg^{-1} = N$ for all
$g \in G$ I.e., $gng^{-1} \in N$ for all $g \in G$ and all $n \in N$.

**Proposition 4.1.** Every subgroup of an abelian group is normal.

**Proposition 4.2.** The following are equivalent for $N \leq G$:

1. $N \trianglelefteq G$.
2. $gN = Ng$ for all $g \in G$ (left and right cosets coincide).
3. The product of two left cosets is again a left coset: $(aN)(bN) = (ab)N$.

_Proof of (1) $\Rightarrow$ (3)._ Let $a_1n_1 \in aN$ and $b_1 n_2 \in bN$. Then
$(a_1 n_1)(b_1 n_2) = a_1 b_1 (b_1^{-1} n_1 b_1) n_2$. Since $N$ is normal,
$b_1^{-1} n_1 b_1 \in N$So $(b_1^{-1} n_1 b_1) n_2 \in N$Giving $(a_1 n_1)(b_1 n_2) \in a_1 b_1 N$.
$\blacksquare$

### 4.2 The Quotient Group

When $N \trianglelefteq G$The set $G/N = \{gN : g \in G\}$ of cosets forms a group under

$$(aN)(bN) = (ab)N$$

Called the **quotient group** of $G$ by $N$.

**Theorem 4.3.** If $G$ is finite and $N \trianglelefteq G$Then $|G/N| = [G : N] = |G|/|N|$.

**Example.** $S_3 / A_3 \cong \mathbb{Z}/2\mathbb{Z}$.

**Example.** $\mathbb{Z}/n\mathbb{Z}$ is the quotient of $\mathbb{Z}$ by $n\mathbb{Z}$.

### 4.3 Worked Examples: Computing Quotient Groups

**Problem.** The quaternion group $Q_8 = \{1, -1, i, -i, j, -j, k, -k\}$ has center
$Z(Q_8) = \{1, -1\}$. Compute $Q_8 / Z(Q_8)$.

<details>
<summary>Solution</summary>

_Solution._ Since $|Q_8| = 8$ and $|Z(Q_8)| = 2$We have $|Q_8/Z(Q_8)| = 4$. The cosets are:

$$Z(Q_8) = \{1, -1\}, \quad iZ(Q_8) = \{i, -i\}, \quad jZ(Q_8) = \{j, -j\}, \quad kZ(Q_8) = \{k, -k\}$$

Multiplication in the quotient: $(iZ)(iZ) = i^2 Z = (-1)Z = Z$ (the identity coset). Similarly
$(jZ)(jZ) = Z$ and $(kZ)(kZ) = Z$. Also $(iZ)(jZ) = ijZ = kZ$ and $(jZ)(iZ) = jiZ = (-k)Z = kZ$
(since $-k \in kZ$). Every non-identity element has order $2$ And the group is abelian. Therefore
$Q_8 / Z(Q_8) \cong V_4 \cong \mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z}$. $\blacksquare$

</details>

**Problem.** Let $N = \langle (1\ 2)(3\ 4), (1\ 3)(2\ 4) \rangle \leq S_4$. Show that
$N \trianglelefteq S_4$ and identify $S_4/N$.

<details>
<summary>Solution</summary>

_Solution._ $N = \{e, (1\ 2)(3\ 4), (1\ 3)(2\ 4), (1\ 4)(2\ 3)\}$ is the Klein four-group $V_4$ With
$|N| = 4$. To verify $N \trianglelefteq S_4$Note that conjugation preserves cycle type. Each
non-identity element of $N$ is a product of two disjoint transpositions. Since $S_4$ acts
Transitively on such elements (any pair of disjoint transpositions can be mapped to any other by
relabeling), $N$ is closed under conjugation.

Thus $|S_4/N| = 24/4 = 6$. That $S_4/N$ is non-abelian (e.g., the images of $(1\ 2)$ and $(2\ 3)$ do
not commute), so $S_4/N \cong S_3$. $\blacksquare$

</details>

### 4.4 Worked Example: The First Isomorphism Theorem

**Problem.** Define $\phi : GL_2(\mathbb{R}) \to \mathbb{R}^*$ by $\phi(A) = \det(A)$. Identify
$\ker(\phi)$ and $GL_2(\mathbb{R})/\ker(\phi)$.

<details>
<summary>Solution</summary>

_Solution._ $\phi$ is a homomorphism since $\det(AB) = \det(A)\det(B)$. It is surjective: For any
$r \in \mathbb{R}^*$The matrix $\begin{pmatrix} r & 0 \\ 0 & 1 \end{pmatrix}$ has determinant $r$.

The kernel is $\ker(\phi) = \{A \in GL_2(\mathbb{R}) : \det(A) = 1\} = SL_2(\mathbb{R})$.

By the first isomorphism theorem (Theorem 5.3),
$GL_2(\mathbb{R})/SL_2(\mathbb{R}) \cong \mathbb{R}^*$. $\blacksquare$

</details>

**Problem.** Show that $\mathbb{C}^* / S^1 \cong \mathbb{R}^+$Where
$S^1 = \{z \in \mathbb{C}^* : |z| = 1\}$.

<details>
<summary>Solution</summary>

_Solution._ Define $\phi : \mathbb{C}^* \to \mathbb{R}^+$ by $\phi(z) = |z|$. This is a homomorphism
since $|zw| = |z||w|$. It is surjective since for any $r > 0$ $\phi(r) = r$. The kernel is
$\ker(\phi) = \{z \in \mathbb{C}^* : |z| = 1\} = S^1$The unit circle. By the first isomorphism
theorem, $\mathbb{C}^* / S^1 \cong \mathbb{R}^+$. $\blacksquare$

</details>


<aside class="starlight-aside starlight-aside--tip">
<strong>Research Connections</strong>
The classification of finite simple groups (completed 2004, ~10,000 pages across ~100 papers) is one of the great achievements of 20th-century mathematics. It states that every finite simple group is either cyclic, alternating, a Lie-type group, or one of 26 sporadic groups. The largest sporadic group, the Monster, has order ~8×10^53 and connects to string theory (Monstrous Moonshine, Conway-Norton 1979). Current research includes: finding new sporadic-like objects, computational group theory, and applications to coding theory and cryptography.
</aside>
### 4.5 Intuition: What Are Normal Subgroups and Quotients?

A normal subgroup is a subgroup that is invariant under conjugation: $gNg^{-1} = N$ for all $g \in G$. This means the subgroup "looks the same" from every perspective in the group. Normality is the algebraic condition that makes quotient groups possible: when $N$ is normal, the cosets $G/N$ inherit a group structure because the product of two cosets is well-defined.

The quotient group $G/N$ collapses all elements of $N$ to the identity, creating a simpler group that captures the "large-scale" structure of $G$ while ignoring the internal structure of $N$. The first isomorphism theorem says that $G/\ker(\phi) \cong \mathrm{im}(\phi)$: every homomorphism factors through its quotient. This means quotient groups are the natural objects that arise from homomorphisms. For example, $\mathbb{Z}/n\mathbb{Z}$ is the quotient that collapses all multiples of $n$ to zero, creating a finite cyclic group. The cosets of a normal subgroup partition the group into equal-sized pieces, and the quotient group describes how these pieces fit together.

### 4.6 Common Pitfalls

- **Forgetting to check all cosets.** When verifying normality via $gNg^{-1} \subseteq N$, you must check every $g \in G$, not just generators.
- **Confusing $G/N$ with $N/G$.** The quotient $G/N$ is defined only when $N \trianglelefteq G$; the notation is not symmetric.
- **Assuming all subgroups are normal.** In non-abelian groups, most subgroups are not normal. For instance, $\langle (1\ 2) \rangle$ is not normal in $S_3$.
- **Miscalculating coset products.** Always reduce representatives: $(aN)(bN) = (ab)N$, but $(ab)N$ may simplify further if $ab$ can be rewritten.

### 4.6 Key Relationships

| Concept | Condition | Consequence |
|---|---|---|
| $N \trianglelefteq G$ | $gNg^{-1} = N$ for all $g$ | $G/N$ is a group |
| $[G:N] = 2$ | Index 2 subgroup | $N$ is automatically normal |
| First Isomorphism Theorem | $\phi : G \to H$ homomorphism | $G/\ker(\phi) \cong \operatorname{im}(\phi)$ |
| Center $Z(G)$ | Commutes with everything | Always a normal subgroup |
| Commutator subgroup $[G,G]$ | Generated by $g_1 g_2 g_1^{-1} g_2^{-1}$ | Always normal; $G/[G,G]$ is abelian |

## Cross-References

- **[Lagrange's Theorem](3_lagrange-s-theorem.md)**: Lagrange's theorem constrains the index of a normal subgroup and the order of the quotient group.
- **[Homomorphisms and Isomorphism Theorems](5_homomorphisms-and-isomorphism-theorems.md)**: The first isomorphism theorem shows that every quotient group arises from a homomorphism.
- **[Groups](1_groups.md)**: The group axioms underpin the construction of normal subgroups and quotient groups.
