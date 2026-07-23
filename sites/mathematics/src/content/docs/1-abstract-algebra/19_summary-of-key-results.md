---

title: Summary of Key Results
tags:
  - Mathematics
  - University
description: "The following table provides a quick reference for the major theorems and their  Comprehensive educational content coverage with definitions and practice proble"
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "1 Abstract Algebra", "url": "https://mathematics.wyattau.com/1-abstract-algebra"}, {"name": "19_summary Of Key Results", "url": "https://mathematics.wyattau.com/1-abstract-algebra/19_summary-of-key-results"}]
}
</script>

The following table provides a quick reference for the major theorems and their locations in this
document.

| Result                                                  | Location           |
| ------------------------------------------------------- | ------------------ |
| Subgroup Criterion                                      | Theorem 2.1        |
| Every subgroup of a cyclic group is cyclic              | Theorem 2.4        |
| Lagrange"s Theorem                                      | Theorem 3.3        |
| Fermat's Little Theorem                                 | Corollary 3.5      |
| Index 2 subgroups are normal                            | Corollary 3.7      |
| First Isomorphism Theorem                               | Theorem 5.3        |
| Correspondence Theorem                                  | Theorem 5.6        |
| $\mathrm{Inn}(G) \cong G/Z(G)$                          | Proposition 5.7    |
| Orbit-Stabilizer Theorem                                | Theorem 6.2        |
| Class Equation                                          | Theorem 6.4        |
| Center of $p$-group is non-trivial                      | Theorem 6.5        |
| Sylow's First Theorem                                   | Theorem 7.1        |
| Sylow's Second Theorem                                  | Theorem 7.2        |
| Sylow's Third Theorem                                   | Theorem 7.3        |
| Ring Isomorphism Theorem                                | Theorem 9.2        |
| Prime ideals and integral domains                       | Theorem 9.3        |
| Chinese Remainder Theorem                               | Theorem 9.5        |
| Eisenstein's Criterion                                  | Theorem 10.5       |
| Euclidean domain $\Rightarrow$ PID $\Rightarrow$ UFD    | Theorem 11.1, 11.3 |
| Tower Law for field extensions                          | Proposition 12.1   |
| Kronecker's Theorem                                     | Theorem 12.4       |
| Finite fields exist and are unique                      | Theorem 12.5       |
| Primitive Element Theorem                               | Theorem 12.8       |
| Fundamental Theorem of Galois Theory                    | Theorem 13.1       |
| Abel-Ruffini Theorem                                    | Corollary 13.3     |
| Cauchy's Theorem                                        | Theorem 14.1       |
| $A_n$ is simple for $n \geq 5$                          | Proposition 14.2   |
| Structure theorem for finitely generated abelian groups | Theorem 14.4       |

### Dependency Graph

The key dependencies among topics are:

- **Groups** $\to$ Subgroups $\to$ Lagrange's Theorem $\to$ Normal Subgroups $\to$ Quotient Groups
- **Homomorphisms** $\to$ Isomorphism Theorems $\to$ Correspondence Theorem
- **Group Actions** $\to$ Orbit-Stabilizer $\to$ Sylow Theorems $\to$ Applications
- **Rings** $\to$ Ideals $\to$ Quotient Rings $\to$ Prime/Maximal Ideals
- **Polynomial Rings** $\to$ Euclidean Domains $\to$ PIDs $\to$ UFDs
- **Field Extensions** $\to$ Algebraic Extensions $\to$ Splitting Fields $\to$ Galois Theory

Mastering the earlier topics is essential before proceeding to the later ones. The problem set
(Section 18) Is designed to test understanding across all these areas.

## Intuition

Abstract algebra distils the essence of mathematical structures into axioms. A group captures symmetry, a ring captures arithmetic, and a field captures both. The isomorphism theorems say that quotient structures are the only way to build new structures from old ones. Lagrange's theorem constrains subgroup sizes like a divisibility rule for symmetry. Galois theory is the crown jewel: it translates the solvability of polynomial equations into a question about group structure, explaining in one stroke why equations of degree five resist radical solutions.

## Common Pitfalls

- **Confusing groups, rings, and fields.** Group: one operation, inverses, identity. Ring: two
  operations (addition, multiplication). Field: ring where every non-zero element has a
  multiplicative inverse. **Fix:** $\mathbb{Z}$ is a ring but not a field ($2$ has no multiplicative
  inverse). $\mathbb{Q}$, $\mathbb{R}$, $\mathbb{C}$ are fields.
- **Wrong subgroup test.** A subset $H \leq G$ must contain the identity, be closed under the
  operation and inverses. **Fix:** For finite groups, it suffices to check closure: if $H$ is
  non-empty and closed, then $H \leq G$.
- **Confusing normal subgroups and general subgroups.** Normal subgroups satisfy $gHg^{-1} = H$ for
  all $g \in G$; they allow quotient group construction. **Fix:** Abelian groups: all subgroups are
  normal. Non-abelian: check $gH = Hg$ for all $g$.

## Worked Examples

### Example 1: Group verification

**Problem.** Show that $(\mathbb{Z}_n, +)$ is a group for any $n \in \mathbb{N}$.

**Solution.** (1) Closure: $[a] + [b] = [a + b \bmod n] \in \mathbb{Z}_n$. (2) Associativity:
inherited from $\mathbb{Z}$. (3) Identity: $[0]$. (4) Inverse: $[a]^{-1} = [-a] = [n - a]$.
Therefore $(\mathbb{Z}_n, +)$ is a group. $\blacksquare$

### Example 2: Lagrange's theorem

**Problem.** $G = S_3$ has order 6. A subgroup $H = \{e, (12)\}$ has order 2. Verify Lagrange's
theorem.

**Solution.** $|G| = 6$, $|H| = 2$. $2 \mid 6$, so Lagrange's theorem is satisfied: $|H|$ divides
$|G|$. The index $[G : H] = |G|/|H| = 3$, and the cosets are $H$, $(13)H = \{(13), (132)\}$,
$(23)H = \{(23), (123)\}$.

$\blacksquare$

## Summary

- Group: set with associative binary operation, identity, inverses. Abelian if commutative.
- Lagrange's theorem: $|H|$ divides $|G|$ for $H \leq G$; the index $[G:H] = |G|/|H|$.
- Cyclic group: generated by a single element $\langle g \rangle$; $\mathbb{Z}_n$ is cyclic.
- Ring: abelian group under $+$, monoid under $\times$, distributive laws. Field: ring where every
  non-zero element is invertible.

## Cross-References

| Topic                          | Site        | Link                                                      |
| ------------------------------ | ----------- | --------------------------------------------------------- |
| Abstract Algebra (Overview)    | WyattsNotes | [View](/docs/university/mathematics/abstract-algebra)     |
| Number Theory                  | WyattsNotes | [View](/docs/university/mathematics/number-theory)        |
| Linear Algebra                 | WyattsNotes | [View](/docs/university/mathematics/linear-algebra)       |
| Abstract Algebra — Harvard 122 | Harvard     | [View](https://people.math.harvard.edu/~elkies/M122.html) |

- [Classical Mechanics](https://physics.wyattau.com/docs/classical-mechanics)
- [Electromagnetism](https://physics.wyattau.com/docs/electromagnetism)

## Key Relationships

- **Extension degree and group order.** For a Galois extension $E/F$: $[E:F]=|\mathrm{Gal}(E/F)|$. This links field theory to group theory directly.
- **Normal subgroups and quotient groups.** $K/F$ is Galois $\iff$ $\mathrm{Gal}(E/K)\trianglelefteq\mathrm{Gal}(E/F)$, and in that case $\mathrm{Gal}(K/F)\cong\mathrm{Gal}(E/F)/\mathrm{Gal}(E/K)$.

### Group Theory Quick Reference

| Concept | Definition | Example |
|---------|-----------|---------|
| Group | Set with associative binary op, identity, inverses | $S_n$, $\mathbb{Z}_n$, $GL(n,\mathbb{R})$ |
| Subgroup | Subset closed under operation and inverses | $A_n \leq S_n$ |
| Normal subgroup | $gHg^{-1} = H$ for all $g \in G$ | $\langle (123) \rangle \trianglelefteq S_3$ |
| Quotient group | $G/N$ with coset multiplication | $\mathbb{Z}/n\mathbb{Z}$ |
| Homomorphism | $\phi(ab) = \phi(a)\phi(b)$ | $\det: GL(n,\mathbb{R}) \to \mathbb{R}^\times$ |
| Kernel | $\{g \in G : \phi(g) = e\}$ | $SL(n,\mathbb{R}) \trianglelefteq GL(n,\mathbb{R})$ |
| Group action | $G \times X \to X$ compatible with group op | $S_n$ acting on $\{1,\ldots,n\}$ |
| Orbit | $G \cdot x = \{gx : g \in G\}$ | Size divides $|G|$ |
| Stabilizer | $G_x = \{g \in G : gx = x\}$ | Subgroup of $G$ |

### Ring and Field Theory Quick Reference

| Concept | Definition | Example |
|---------|-----------|---------|
| Ring | Abelian group under $+$, monoid under $\times$, distributive | $\mathbb{Z}$, $\mathbb{Z}[x]$, $M_n(\mathbb{R})$ |
| Ideal | Additive subgroup closed under multiplication by ring elements | $n\mathbb{Z} \trianglelefteq \mathbb{Z}$ |
| Integral domain | No zero divisors | $\mathbb{Z}$, $\mathbb{Z}[x]$, $\mathbb{Q}$ |
| Field | Every non-zero element invertible | $\mathbb{Q}$, $\mathbb{R}$, $\mathbb{C}$, $\mathbb{F}_p$ |
| Euclidean domain | Has degree function for division algorithm | $\mathbb{Z}$, $F[x]$ |
| PID | Every ideal is principal | $\mathbb{Z}$, $F[x]$ |
| UFD | Unique factorisation into irreducibles | $\mathbb{Z}$, $\mathbb{Z}[x]$, $F[x]$ |

### Common Isomorphism Classes

| Group | Order | Structure |
|-------|-------|-----------|
| $\mathbb{Z}_n$ | $n$ | Cyclic |
| $S_n$ | $n!$ | Non-abelian for $n \geq 3$ |
| $A_n$ | $n!/2$ | Simple for $n \geq 5$ |
| $D_{2n}$ | $2n$ | Dihedral (symmetries of $n$-gon) |
| $Q_8$ | $8$ | Quaternion group |
| $\mathbb{Z}_2 \times \mathbb{Z}_2$ | $4$ | Klein four-group |

