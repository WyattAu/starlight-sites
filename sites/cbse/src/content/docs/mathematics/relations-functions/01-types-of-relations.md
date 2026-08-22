---

date: 2026-07-23T21:57:32+01:00
title: "Types of relations"
description: "\"itemListElement\": [{\"name\": \"Home\", \"url\": \"https://wyattau.com\"}, {\"name\": \"cbse\", \"url\": \"https://cbse.wyattau.com\"}, {\"name\": \"Mathematics\", \"url\":"
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "cbse", "url": "https://cbse.wyattau.com"}, {"name": "Mathematics", "url": "https://cbse.wyattau.com/mathematics"}, {"name": "Relations Functions", "url": "https://cbse.wyattau.com/mathematics/relations-functions"}, {"name": "01 Types Of Relations", "url": "https://cbse.wyattau.com/mathematics/relations-functions/01-types-of-relations"}]
}
</script>

## Types of Relations

A relation $R$ from a set $A$ to a set $B$ is a subset of the Cartesian product $A \times B$. If $(a, b) \in R$, we write $aRb$ and say "$a$ is related to $b$ by $R$."

## Key Concepts

### Definition and Notation

Given sets $A$ and $B$, a relation $R \subseteq A \times B$ is a rule that assigns to each element $a \in A$ zero or more elements $b \in B$.

**Example:** Let $A = \{1, 2, 3\}$ and $B = \{2, 4, 6\}$. The relation "$a$ divides $b$" is:
$$R = \{(1,2), (1,4), (1,6), (2,2), (2,4), (2,6), (3,6)\}$$

### Types of Relations on a Set

A relation $R$ on a set $A$ (i.e., $R \subseteq A \times A$) can be:

**Reflexive:** $aRa$ for every $a \in A$.
$$\forall a \in A, \quad (a, a) \in R$$

**Symmetric:** If $aRb$ then $bRa$.
$$\forall a, b \in A, \quad (a, b) \in R \implies (b, a) \in R$$

**Transitive:** If $aRb$ and $bRc$, then $aRc$.
$$\forall a, b, c \in A, \quad (a, b) \in R \land (b, c) \in R \implies (a, c) \in R$$

### Equivalence Relations

A relation that is reflexive, symmetric, and transitive is called an **equivalence relation**. Equivalence relations partition a set into disjoint equivalence classes.

**Equivalence class of $a$:** $[a] = \{x \in A \mid xRa\}$

### Important Properties

- The identity relation $\{(a,a) \mid a \in A\}$ is reflexive, symmetric, and transitive.
- The empty relation $\emptyset$ is symmetric and transitive, but not reflexive (unless $A = \emptyset$).
- The universal relation $A \times A$ is reflexive, symmetric, and transitive.

## Worked Example 1 — Checking Properties

**Problem:** Let $A = \{1, 2, 3, 4\}$ and $R = \{(1,1), (2,2), (3,3), (4,4), (1,2), (2,1)\}$. Determine whether $R$ is reflexive, symmetric, and transitive.

**Solution:**

**Reflexive:** Check that $(a,a) \in R$ for all $a \in A$.

- $(1,1) \in R$, $(2,2) \in R$, $(3,3) \in R$, $(4,4) \in R$.
- All present. $R$ is reflexive.

**Symmetric:** Check that whenever $(a,b) \in R$, then $(b,a) \in R$.

- $(1,2) \in R$ and $(2,1) \in R$. OK.
- All diagonal pairs are symmetric by definition.
- $R$ is symmetric.

**Transitive:** Check that whenever $(a,b) \in R$ and $(b,c) \in R$, then $(a,c) \in R$.

- $(1,2) \in R$ and $(2,1) \in R$. Need $(1,1) \in R$. Present.
- $(2,1) \in R$ and $(1,2) \in R$. Need $(2,2) \in R$. Present.
- No other non-diagonal chains exist.
- $R$ is transitive.

**Answer:** $R$ is an equivalence relation.

**Common mistake:** Forgetting to check all pairs for transitivity. When $(a,b)$ and $(b,c)$ both belong to $R$, you must verify $(a,c)$ is also in $R$.

## Worked Example 2 — Relation Defined by a Rule

**Problem:** Let $R$ be defined on $\mathbb{Z}$ by $aRb$ if and only if $a - b$ is divisible by $3$. Show that $R$ is an equivalence relation and describe the equivalence classes.

**Solution:**

**Reflexive:** $a - a = 0 = 3 \times 0$, so $3 \mid (a - a)$. Thus $aRa$ for all $a \in \mathbb{Z}$.

**Symmetric:** If $aRb$, then $3 \mid (a - b)$, so $a - b = 3k$ for some integer $k$. Then $b - a = -3k = 3(-k)$, so $3 \mid (b - a)$, giving $bRa$.

**Transitive:** If $aRb$ and $bRc$, then $a - b = 3k$ and $b - c = 3m$ for integers $k, m$. Then:
$$a - c = (a - b) + (b - c) = 3k + 3m = 3(k + m)$$
So $3 \mid (a - c)$, giving $aRc$.

**Equivalence classes:**

- $[0] = \{\ldots, -6, -3, 0, 3, 6, \ldots\}$ (multiples of 3)
- $[1] = \{\ldots, -5, -2, 1, 4, 7, \ldots\}$ (numbers with remainder 1)
- $[2] = \{\ldots, -4, -1, 2, 5, 8, \ldots\}$ (numbers with remainder 2)

**Answer:** $R$ is an equivalence relation with three equivalence classes.

**Common mistake:** Confusing divisibility with equality. $a - b$ divisible by 3 does not mean $a = b$; it means $a$ and $b$ leave the same remainder when divided by 3.

## Worked Example 3 — Relation That Is Not an Equivalence Relation

**Problem:** Let $A = \{1, 2, 3\}$ and $R = \{(1,1), (2,2), (1,3), (3,1)\}$. Determine which properties $R$ satisfies.

**Solution:**

**Reflexive:** $(1,1) \in R$, $(2,2) \in R$, but $(3,3) \notin R$. Not reflexive.

**Symmetric:** $(1,3) \in R$ and $(3,1) \in R$. All pairs checked. Symmetric.

**Transitive:** $(1,3) \in R$ and $(3,1) \in R$. Need $(1,1) \in R$. Present. No other chains. Transitive.

**Answer:** $R$ is symmetric and transitive, but not reflexive (since $(3,3) \notin R$).

**Common mistake:** Assuming that symmetric and transitive implies reflexive. This is false. Reflexivity requires $(a,a) \in R$ for every element of $A$, not just for elements that appear in some pair.

## Practice Problems

1. Let $A = \{1, 2, 3, 4, 5, 6\}$. Define $R$ by $aRb$ if $a - b$ is even. Prove $R$ is an equivalence relation and find the equivalence classes.

2. Let $R$ be the relation on $\mathbb{R}$ defined by $xRy$ if $x \leq y$. Is $R$ reflexive? Symmetric? Transitive? Is it an equivalence relation?

3. Let $A = \{1, 2, 3, 4\}$ and $R = \{(1,2), (2,3), (1,3), (2,2), (3,3)\}$. Is $R$ transitive? Is it reflexive?

4. Define $R$ on the set of integers by $aRb$ if $a^2 = b^2$. Show that $R$ is an equivalence relation and find $[2]$.

5. Let $R$ be defined on $\mathbb{R}$ by $xRy$ if $|x - y| \leq 1$. Is $R$ reflexive? Symmetric? Transitive?

## Common Exam Patterns

- Check all three properties systematically: reflexive, symmetric, transitive
- For equivalence relations defined by modular arithmetic, the equivalence classes are residue classes
- Relations defined by inequalities ($\leq, <, \geq, >$) are in standard practice not symmetric
- The relation $a - b$ divisible by $n$ is always an equivalence relation on $\mathbb{Z}$
- Remember: reflexive requires $(a,a) \in R$ for every $a \in A$, not just for elements that appear in the relation

## Exam Tips

1. When checking transitivity, list all pairs $(a,b)$ and $(b,c)$ in $R$ and verify each $(a,c)$ is present.
2. To disprove a property, a single counterexample suffices.
3. Equivalence relations partition the set; use this to verify your answer by checking that equivalence classes are disjoint and their union is $A$.
4. The relation "$a$ divides $b$" on $\mathbb{Z}^+$ is reflexive and transitive, but not symmetric (since $2 \mid 4$ but $4 \nmid 2$).
5. The relation defined by $a^2 = b^2$ on $\mathbb{Z}$ is an equivalence class because $a^2 = b^2$ implies $|a| = |b|$, so $[2] = \{2, -2\}$.

## Intuition

Relations are rules that connect elements from one set to another. A relation on a set is like a social network where some pairs of people are connected. Reflexive means everyone is friends with themselves. Symmetric means if A is friends with B, then B is friends with A. Transitive means if A is friends with B and B is friends with C, then A is friends with C. When all three hold, you get an equivalence relation -- a perfect grouping system where the set splits into non-overlapping equivalence classes, like sorting numbers by their remainder when divided by n.

## Cross-References

- [Matrices](../../../../../../alevel/src/content/docs/further-maths/pure-mathematics/02-matrices) -- matrices as representations of relations
- [CBSE Mathematics](../../../../../../ib/src/content/docs/maths/maths) -- sets, functions, and algebra
- [CBSE Physics](../../../../../../ib/src/content/docs/physics/physics) -- symmetry and conservation laws

## Common Mistakes

- **Assuming reflexivity means $(a, a) \in R$ for some elements:** Reflexivity requires $(a, a) \in R$ for **every** element $a \in A$. A single missing pair $(a, a)$ breaks reflexivity.
- **Confusing symmetric with reflexive:** A relation can be symmetric without being reflexive (e.g., $aRb \Leftrightarrow a = b$ on a proper subset), and reflexive without being symmetric (e.g., $\leq$ on $\mathbb{R}$).
- **Forgetting that transitivity requires checking all triples:** Transitivity is not just about adjacent pairs. You must verify that for every $(a, b) \in R$ and $(b, c) \in R$, the pair $(a, c)$ is also in $R$.
- **Confusing equivalence relations with partial orders:** Equivalence relations are reflexive, symmetric, and transitive. Partial orders are reflexive, antisymmetric, and transitive. Symmetry and antisymmetry are mutually exclusive (except for equality).
