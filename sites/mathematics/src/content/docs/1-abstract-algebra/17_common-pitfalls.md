---
title: Common Pitfalls
tags:
  - Mathematics
  - University
description: "only ideal containing ). This is a common source of confusion when checking whet Comprehensive educational content coverage with definitions and practice proble"
---

<aside class="starlight-aside starlight-aside--caution">
$\langle (1\ 2) \rangle \leq S_3$ is not normal since
$(1\ 3)(1\ 2)(1\ 3)^{-1} = (2\ 3) \notin \langle (1\ 2) \rangle$. Always verify the condition
$gHg^{-1} = H$ for all $g \in G$.
</aside>
<aside aria-label="Common Pitfall The converse of Lagrange"s theorem is false . For example, $A_4$ has order" class="starlight-aside starlight-aside--caution"><p class="starlight-aside__title" aria-hidden="true"><svg class="starlight-aside__icon" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L1 21h22L12 2Zm0 4l7.53 14H4.47L12 6Zm-1 5v4h2v-4h-2Zm0 6v2h2v-2h-2Z"/></svg>Common Pitfall The converse of Lagrange"s theorem is false . For example, $A_4$ has order</p>
$12$ but no Subgroup of order $6$. However, the converse does hold for Sylow subgroups.
</aside>
<aside class="starlight-aside starlight-aside--caution">
only ideal containing $1$). This is a common source of confusion when checking whether a subset is
an ideal.
</aside>
<aside class="starlight-aside starlight-aside--caution">
$(2, x)$ is not principal, But $\mathbb{Z}[x]$ is a UFD (since $\mathbb{Z}$ is a UFD).
</aside>
<aside class="starlight-aside starlight-aside--caution">
polynomial is a subgroup Of $S_n$ (acting on the roots), but it may be a proper subgroup. For
example, the Galois group of $x^3 - 2$ over $\mathbb{Q}$ is $S_3$But the Galois group of
$x^3 - 3x + 1$ over $\mathbb{Q}$ is $A_3 \cong \mathbb{Z}/3\mathbb{Z}$ (the discriminant is a
square).
</aside>
<aside class="starlight-aside starlight-aside--caution">
$\overline{\mathbb{Q}}/\mathbb{Q}$ (algebraic closure of $\mathbb{Q}$) is algebraic but
infinite-dimensional.
</aside>
<aside class="starlight-aside starlight-aside--caution">
actually a homomorphism And correctly identify the kernel. A common mistake is to forget that the
kernel must be a normal Subgroup (not just any subgroup). Also, the isomorphism is
$G/\ker(\phi) \cong \mathrm{im}(\phi)$ Not $G/\ker(\phi) \cong H$ (unless $\phi$ is surjective).
</aside>
<aside class="starlight-aside starlight-aside--caution">
example, $Z(S_n) = \{e\}$ For all $n \geq 3$. However, for $p$-groups, the center is always
non-trivial (Theorem 6.5). Do not confuse the center with the centralizer $C_G(x)$ of a single
element.
</aside>
<aside class="starlight-aside starlight-aside--caution">
$n_p \equiv 1 \pmod{p}$ AND $n_p$ divides $m$ (where $|G| = p^n m$). Both conditions must be checked
simultaneously. For example, if $|G| = 12 = 2^2 \cdot 3$Then $n_3 \equiv 1 \pmod{3}$ and $n_3$
divides $4$ Giving $n_3 = 1$ or $4$ (not $7$Even though $7 \equiv 1 \pmod{3}$).
</aside>
<aside class="starlight-aside starlight-aside--caution">
simultaneously. In particular, $p^2$ Must NOT divide the constant term $a_0$. If $p^2$ divides
$a_0$Eisenstein does not apply. In such cases, try the substitution $x \mapsto x + c$ for various
constants $c$Or use Reduction modulo a prime.
</aside>
<aside class="starlight-aside starlight-aside--caution">
not just a prime ideal. For example, $(0)$ is prime in $\mathbb{Z}[x]$ but not maximal, so
$\mathbb{Z}[x]$ is an integral Domain but not a field. Every maximal ideal is prime, but not
conversely.

</aside>
<aside class="starlight-aside starlight-aside--caution">
Galois. For a non-Galois Extension $E/F$The correspondence between intermediate fields and subgroups
of $\mathrm{Gal}(E/F)$ is not a bijection, and indices may not match. Always verify the Galois
Condition before applying the theorem.

</aside>
<aside class="starlight-aside starlight-aside--caution">
monomorphism need not be surjective. For example, $\mathbb{Z} \hookrightarrow \mathbb{Q}$ is
injective but not an isomorphism. Check surjectivity separately when claiming a map is an
Isomorphism.

</aside>
<aside class="starlight-aside starlight-aside--caution">
one normalises the other. That is, $HN$ is a subgroup of $G$ if and only if $HN = NH$. For normal
subgroups this reduces to checking closure, but in the product set may fail to be closed
under the group operation.

</aside>
<aside class="starlight-aside starlight-aside--caution">
The ring $\mathbb{Z}/6\mathbb{Z}$ viewed as a module over itself has basis $\{1\}$, but also
$\{5\}$ since $5$ is a unit. Uniqueness of basis holds only over division rings (vector spaces).

</aside>
<aside class="starlight-aside starlight-aside--caution">
$\phi : R \to S$ is surjective and $a \in R$ is not a zero divisor, $\phi(a)$ might be a zero
divisor in $S$. For example, the map $\mathbb{Z} \to \mathbb{Z}/6\mathbb{Z}$ sends $2$ (a non-zero
divisor) to $\bar{2}$ (a zero divisor since $\bar{2} \cdot \bar{3} = \bar{0}$).

</aside>
<aside class="starlight-aside starlight-aside--caution">
ideal of $R$ and $J$ an ideal of $R$ with $I \subseteq J$. The quotient $R/I$ modulo $J/I$ is
isomorphic to $R/J$, but forgetting the containment hypothesis leads to nonsensical results.

</aside>
<aside class="starlight-aside starlight-aside--caution">
over that field. For example, $x^4 + 1$ has no roots in $\mathbb{R}$, but it factors as
$(x^2 + \sqrt{2}x + 1)(x^2 - \sqrt{2}x + 1)$ over $\mathbb{R}$. For degrees $\geq 4$, absence
of roots is necessary but not sufficient for irreducibility.

</aside>
<aside class="starlight-aside starlight-aside--caution">
semi-direct product $G \rtimes H$. In a direct product, both subgroups are normal and the product
is commutative. In a semi-direct product, only one factor is normal, and the group structure
involves an action of one factor on the other. For example, $D_{2n} \cong \mathbb{Z}_n \rtimes
\mathbb{Z}_2$ is not isomorphic to $\mathbb{Z}_n \times \mathbb{Z}_2$ (the latter is abelian).

</aside>
<aside class="starlight-aside starlight-aside--caution">
families (cyclic groups of prime order, alternating groups $A_n$ for $n \geq 5$, Lie-type groups)
and 26 sporadic groups. Students often forget that $\mathbb{Z}_p$ (cyclic of prime order) is
simple, or mistakenly think $S_n$ is simple for $n \geq 5$ (it has $A_n$ as a proper normal
subgroup).

</aside>
<aside class="starlight-aside starlight-aside--caution">
cosets $r + I$, not elements of $R$. The condition $r + I = s + I$ means $r - s \in I$, not
$r = s$. A common error is to treat elements of $\mathbb{Z}/n\mathbb{Z}$ as integers $0,\ldots,n-1$
and forget that arithmetic is modulo $n$.

</aside>
<aside class="starlight-aside starlight-aside--caution">
$\mathbb{Q}(\sqrt[3]{2})/\mathbb{Q}$ is algebraic (degree 3) but is not a splitting field for
$x^3 - 2$ because the other two roots $\omega\sqrt[3]{2}$ and $\omega^2\sqrt[3]{2}$ are not in the
field. A splitting field must contain all roots of the polynomial.

</aside>
<aside class="starlight-aside starlight-aside--caution">
multiplicative identity in the group of units. $\mathbb{Z}_n$ has characteristic $n$, but the
order of $1$ in the additive group is $n$, while in the multiplicative group of units $U(n)$,
the order of $1$ is $1$ (since $1$ is the identity).

</aside>