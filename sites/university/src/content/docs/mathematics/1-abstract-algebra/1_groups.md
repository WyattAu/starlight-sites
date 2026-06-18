---
title: Groups
tags:
  - Mathematics
  - University
description: ""$ are both identity elements. Then $e = e * e' = e'$. $\blacksquare$

**Proposition 1.9.** The inverse of each element is unique.

_Proof._ If $b$ and $c$ are both inverses of $a$Then
$b = b * e = b * (a * c) = (b * a) * c = e * c = c$. $\blacksquare$

**Proposition 1.10 (Cancellation Law).** If $a * b = a * c$Then $b = c$. Similarly, if
$b * a = c * a$Then $b = c$.

_Proof._ Multiply on the left by $a^{-1}$: $a^{-1} * (a * b) = a^{-1} * (a * c)$So
$(a^{-1} * a) * b = (a^{-1} * a) * c$Giving $e * b = e * c$I.e., $b = c$. $\blacksquare$

**Proposition 1.11.** $(a^{-1})^{-1} = a$ and $(a * b)^{-1} = b^{-1} * a^{-1}$.

### 1.6 Order of an Element

The **order** of an element $g \in G$Denoted $|g|$Is the smallest positive integer $n$ such that
$g^n = e$. If no such $n$ exists, $|g| = \infty$.

**Proposition 1.12.** $g^k = e$ if and only if $|g|$ divides $k$.

_Proof._ Write $k = q|g| + r$ with $0 \leq r \lt |g|$. Then
$e = g^k = g^{q|g| + r} = (g^{|g|})^q * g^r = e^q * g^r = g^r$. Since $r \lt |g|$ and $|g|$ is the
smallest positive exponent giving $e$We must have $r = 0$So $|g|$ divides $k$. Conversely, if $|g|$
divides $k$Say $k = m|g|$Then $g^k = (g^{|g|})^m = e^m = e$. $\blacksquare$

### 1.7 Subgroup Lattices

The **subgroup lattice** of $G$ is the set of all subgroups of $G$Partially ordered by inclusion,
Visualized as a Hasse diagram (edges connect each subgroup to its immediate supergroups).

**Example.** The subgroup lattice of $S_3$ (order $6$):

- $S_3$ (order $6$)
- $A_3 = \langle (1\ 2\ 3) \rangle$ (order $3$)
- $\{e\}$ (order $1$)
- $\langle (1\ 2) \rangle$ (order $2$)
- $\{e\}$
- $\langle (1\ 3) \rangle$ (order $2$)
- $\{e\}$
- $\langle (2\ 3) \rangle$ (order $2$)
- $\{e\}$

The only proper non-trivial normal subgroup is $A_3$ (it has index $2$).

**Example.** The subgroup lattice of $\mathbb{Z}/12\mathbb{Z}$:

- $\mathbb{Z}/12\mathbb{Z}$ (order $12$)
- $\langle 2 \rangle \cong \mathbb{Z}/6\mathbb{Z}$ (order $6$)
- $\langle 4 \rangle \cong \mathbb{Z}/3\mathbb{Z}$ (order $3$)
- $\{0\}$
- $\langle 6 \rangle \cong \mathbb{Z}/2\mathbb{Z}$ (order $2$)
- $\{0\}$
- $\langle 3 \rangle \cong \mathbb{Z}/4\mathbb{Z}$ (order $4$)
- $\langle 6 \rangle \cong \mathbb{Z}/2\mathbb{Z}$ (order $2$)
- $\{0\}$
- $\langle 4 \rangle \cong \mathbb{Z}/3\mathbb{Z}$ (order $3$)
- $\{0\}$
- $\langle 6 \rangle \cong \mathbb{Z}/2\mathbb{Z}$ (order $2$)
- $\{0\}$

By Theorem 2.4, every subgroup of $\mathbb{Z}/12\mathbb{Z}$ is cyclic, and there is exactly one
subgroup Of order $d$ for each divisor $d$ of $12$.

:::caution Common Pitfall Not every group of order $n$ has a subgroup of order $d$ for each divisor
$d$ of $n$. The converse of Lagrange's theorem is false. For example, $A_4$ has order $12$ but no
subgroup of order $6$. However, every subgroup of a _cyclic_ group of order $n$ has order dividing
$n$And for each divisor There is exactly one such subgroup.


:::
