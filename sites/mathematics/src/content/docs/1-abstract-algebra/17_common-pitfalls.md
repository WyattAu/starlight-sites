---
title: Common Pitfalls
tags:
  - Mathematics
  - University
description: "only ideal containing ). This is a common source of confusion when checking whet Comprehensive educational content coverage with definitions and practice proble"
---

:::caution Common Pitfall Not every subgroup is normal. For example,
$\langle (1\ 2) \rangle \leq S_3$ is not normal since
$(1\ 3)(1\ 2)(1\ 3)^{-1} = (2\ 3) \notin \langle (1\ 2) \rangle$. Always verify the condition
$gHg^{-1} = H$ for all $g \in G$.
:::

:::caution Common Pitfall The converse of Lagrange"s theorem is false . For example, $A_4$ has order
$12$ but no Subgroup of order $6$. However, the converse does hold for Sylow subgroups.
:::

:::caution Common Pitfall In ring theory, an ideal need not contain $1$ (in fact, $I = R$ is the
only ideal containing $1$). This is a common source of confusion when checking whether a subset is
an ideal.
:::

:::caution Common Pitfall Not every UFD is a PID. The classic example is $\mathbb{Z}[x]$: the ideal
$(2, x)$ is not principal, But $\mathbb{Z}[x]$ is a UFD (since $\mathbb{Z}$ is a UFD).
:::

:::caution Common Pitfall When computing Galois groups, the Galois group of the splitting field of a
polynomial is a subgroup Of $S_n$ (acting on the roots), but it may be a proper subgroup. For
example, the Galois group of $x^3 - 2$ over $\mathbb{Q}$ is $S_3$But the Galois group of
$x^3 - 3x + 1$ over $\mathbb{Q}$ is $A_3 \cong \mathbb{Z}/3\mathbb{Z}$ (the discriminant is a
square).
:::

:::caution Common Pitfall A field extension can be algebraic without being finite. For example,
$\overline{\mathbb{Q}}/\mathbb{Q}$ (algebraic closure of $\mathbb{Q}$) is algebraic but
infinite-dimensional.
:::

:::caution Common Pitfall When using the first isomorphism theorem, always verify that your map is
actually a homomorphism And correctly identify the kernel. A common mistake is to forget that the
kernel must be a normal Subgroup (not just any subgroup). Also, the isomorphism is
$G/\ker(\phi) \cong \mathrm{im}(\phi)$ Not $G/\ker(\phi) \cong H$ (unless $\phi$ is surjective).
:::

:::caution Common Pitfall The center $Z(G)$ can be trivial even for large non-abelian groups. For
example, $Z(S_n) = \{e\}$ For all $n \geq 3$. However, for $p$-groups, the center is always
non-trivial (Theorem 6.5). Do not confuse the center with the centralizer $C_G(x)$ of a single
element.
:::

:::caution Common Pitfall In the Sylow theorems, the number $n_p$ of Sylow $p$-subgroups satisfies
$n_p \equiv 1 \pmod{p}$ AND $n_p$ divides $m$ (where $|G| = p^n m$). Both conditions must be checked
simultaneously. For example, if $|G| = 12 = 2^2 \cdot 3$Then $n_3 \equiv 1 \pmod{3}$ and $n_3$
divides $4$ Giving $n_3 = 1$ or $4$ (not $7$Even though $7 \equiv 1 \pmod{3}$).
:::

:::caution Common Pitfall Eisenstein's criterion requires ALL three conditions to hold
simultaneously. In particular, $p^2$ Must NOT divide the constant term $a_0$. If $p^2$ divides
$a_0$Eisenstein does not apply. In such cases, try the substitution $x \mapsto x + c$ for various
constants $c$Or use Reduction modulo a prime.
:::

:::caution Common Pitfall A quotient ring $R/I$ is a field if and only if $I$ is a _maximal_ ideal,
not just a prime ideal. For example, $(0)$ is prime in $\mathbb{Z}[x]$ but not maximal, so
$\mathbb{Z}[x]$ is an integral Domain but not a field. Every maximal ideal is prime, but not
conversely.

:::
:::caution Common Pitfall The fundamental theorem of Galois theory requires the extension to be
Galois. For a non-Galois Extension $E/F$The correspondence between intermediate fields and subgroups
of $\mathrm{Gal}(E/F)$ is not a bijection, and indices may not match. Always verify the Galois
Condition before applying the theorem.

:::

:::caution Common Pitfall Not every injective homomorphism is an isomorphism. For infinite groups, a
monomorphism need not be surjective. For example, $\mathbb{Z} \hookrightarrow \mathbb{Q}$ is
injective but not an isomorphism. Check surjectivity separately when claiming a map is an
Isomorphism.

:::

:::caution Common Pitfall The product of two normal subgroups is not necessarily a subgroup unless
one normalises the other. That is, $HN$ is a subgroup of $G$ if and only if $HN = NH$. For normal
subgroups this reduces to checking closure, but in general the product set may fail to be closed
under the group operation.

:::

:::caution Common Pitfall In module theory, free modules over a ring need not have a unique basis.
The ring $\mathbb{Z}/6\mathbb{Z}$ viewed as a module over itself has basis $\{1\}$, but also
$\{5\}$ since $5$ is a unit. Uniqueness of basis holds only over division rings (vector spaces).

:::

:::caution Common Pitfall A surjective ring homomorphism need not preserve non-zero divisors. If
$\phi : R \to S$ is surjective and $a \in R$ is not a zero divisor, $\phi(a)$ might be a zero
divisor in $S$. For example, the map $\mathbb{Z} \to \mathbb{Z}/6\mathbb{Z}$ sends $2$ (a non-zero
divisor) to $\bar{2}$ (a zero divisor since $\bar{2} \cdot \bar{3} = \bar{0}$).

:::

:::caution Common Pitfall The lattice isomorphism theorem (fourth isomorphism) requires $I$ to be an
ideal of $R$ and $J$ an ideal of $R$ with $I \subseteq J$. The quotient $R/I$ modulo $J/I$ is
isomorphic to $R/J$, but forgetting the containment hypothesis leads to nonsensical results.

:::

:::caution Common Pitfall A polynomial having no roots in a field does not guarantee irreducibility
over that field. For example, $x^4 + 1$ has no roots in $\mathbb{R}$, but it factors as
$(x^2 + \sqrt{2}x + 1)(x^2 - \sqrt{2}x + 1)$ over $\mathbb{R}$. For degrees $\geq 4$, absence
of roots is necessary but not sufficient for irreducibility.

:::

:::caution Common Pitfall The direct product of groups $G \times H$ is not the same as the
semi-direct product $G \rtimes H$. In a direct product, both subgroups are normal and the product
is commutative. In a semi-direct product, only one factor is normal, and the group structure
involves an action of one factor on the other. For example, $D_{2n} \cong \mathbb{Z}_n \rtimes
\mathbb{Z}_2$ is not isomorphic to $\mathbb{Z}_n \times \mathbb{Z}_2$ (the latter is abelian).

:::

:::caution Common Pitfall The classification of finite simple groups includes several infinite
families (cyclic groups of prime order, alternating groups $A_n$ for $n \geq 5$, Lie-type groups)
and 26 sporadic groups. Students often forget that $\mathbb{Z}_p$ (cyclic of prime order) is
simple, or mistakenly think $S_n$ is simple for $n \geq 5$ (it has $A_n$ as a proper normal
subgroup).

:::

:::caution Common Pitfall When computing in quotient rings $R/I$, remember that elements are
cosets $r + I$, not elements of $R$. The condition $r + I = s + I$ means $r - s \in I$, not
$r = s$. A common error is to treat elements of $\mathbb{Z}/n\mathbb{Z}$ as integers $0,\ldots,n-1$
and forget that arithmetic is modulo $n$.

:::

:::caution Common Pitfall Not every algebraic extension is a splitting field. The extension
$\mathbb{Q}(\sqrt[3]{2})/\mathbb{Q}$ is algebraic (degree 3) but is not a splitting field for
$x^3 - 2$ because the other two roots $\omega\sqrt[3]{2}$ and $\omega^2\sqrt[3]{2}$ are not in the
field. A splitting field must contain all roots of the polynomial.

:::

:::caution Common Pitfall The characteristic of a ring is not the same as the order of the
multiplicative identity in the group of units. $\mathbb{Z}_n$ has characteristic $n$, but the
order of $1$ in the additive group is $n$, while in the multiplicative group of units $U(n)$,
the order of $1$ is $1$ (since $1$ is the identity).

:::