---
title: "Relations and Functions"
description: "CBSE Class 12 mathematics: Relations, functions, types of relations, and worked examples."
---

# Relations and Functions

Relations and functions form the foundation of higher mathematics. This topic covers types of relations, types of functions, composition, and invertibility.

## Key Concepts

- Relation $R$ from set $A$ to set $B$ is a subset of $A \times B$
- Domain of $R$: $\text{dom}(R) = \{a \in A : (a, b) \in R \text{ for some } b \in B\}$
- Range of $R$: $\text{ran}(R) = \{b \in B : (a, b) \in R \text{ for some } a \in A\}$
- Reflexive: $(a, a) \in R$ for all $a \in A$
- Symmetric: $(a, b) \in R \implies (b, a) \in R$
- Transitive: $(a, b) \in R$ and $(b, c) \in R \implies (a, c) \in R$
- Equivalence relation: reflexive, symmetric, and transitive
- Function $f: A \to B$ is injective (one-to-one): $f(a_1) = f(a_2) \implies a_1 = a_2$
- Function $f: A \to B$ is surjective (onto): for every $b \in B$, there exists $a \in A$ with $f(a) = b$
- Bijective function: both injective and surjective

## Worked Example 1 — Types of Relations

**Problem:** Let $A = \{1, 2, 3, 4\}$ and $R = \{(1, 1), (2, 2), (3, 3), (4, 4), (1, 2), (2, 1), (2, 3), (3, 2)\}$. Determine if $R$ is reflexive, symmetric, and transitive.

**Solution:**

**Reflexive:** Check if $(a, a) \in R$ for all $a \in A$:
$(1,1), (2,2), (3,3), (4,4) \in R$. Yes, $R$ is reflexive.

**Symmetric:** Check if $(a, b) \in R \implies (b, a) \in R$:
$(1,2) \in R$ and $(2,1) \in R$. $(2,3) \in R$ and $(3,2) \in R$. Yes, $R$ is symmetric.

**Transitive:** Check if $(a, b) \in R$ and $(b, c) \in R \implies (a, c) \in R$:
$(1,2) \in R$ and $(2,3) \in R$, but $(1,3) \notin R$. No, $R$ is not transitive.

**Common mistake:** Assuming that if a relation is reflexive and symmetric, it must be transitive. Always check all three properties.

## Worked Example 2 — Injective and Surjective Functions

**Problem:** Determine whether $f: \mathbb{R} \to \mathbb{R}$ defined by $f(x) = x^2 + 1$ is injective, surjective, or bijective.

**Solution:**

**Injective:** Suppose $f(a) = f(b)$:
$$a^2 + 1 = b^2 + 1 \implies a^2 = b^2 \implies a = \pm b$$

Since $a$ and $b$ could have opposite signs (e.g., $f(1) = f(-1) = 2$), $f$ is not injective.

**Surjective:** Is every $y \in \mathbb{R}$ in the range? For $y = 0$: $x^2 + 1 = 0 \implies x^2 = -1$, which has no real solution. So $f$ is not surjective.

Since $f$ is neither injective nor surjective, it is not bijective.

**Common mistake:** Forgetting that $x^2 = a$ has solutions $x = \pm\sqrt{a}$, which breaks injectivity.

## Worked Example 3 — Composition of Functions

**Problem:** If $f(x) = 2x + 3$ and $g(x) = x^2$, find $(f \circ g)(x)$ and $(g \circ f)(x)$.

**Solution:**

$$(f \circ g)(x) = f(g(x)) = f(x^2) = 2x^2 + 3$$

$$(g \circ f)(x) = g(f(x)) = g(2x + 3) = (2x + 3)^2 = 4x^2 + 12x + 9$$

Note that $f \circ g \neq g \circ f$ in general.

**Common mistake:** Computing $g(f(x))$ as $g(x) \cdot f(x)$ instead of substituting $f(x)$ into $g$.

## Practice Problems

1. Let $A = \{1, 2, 3\}$ and $R = \{(1, 2), (2, 3), (1, 3)\}$. Is $R$ transitive?
2. Show that $f: \mathbb{R} \to \mathbb{R}$ defined by $f(x) = 2x - 5$ is bijective.
3. Find $(f \circ f)(x)$ if $f(x) = 3x - 1$.

## Why This Matters

Relations and functions are the language of mathematics. Every equation, mapping, and transformation in higher mathematics is expressed through functions. Understanding injectivity and surjectivity is essential for calculus, linear algebra, and abstract mathematics.

## Common Exam Patterns

- Equivalence relations partition a set into equivalence classes
- A function is invertible if and only if it is bijective
- Composition is not commutative: $f \circ g \neq g \circ f$
- The number of functions from a set of $m$ elements to a set of $n$ elements is $n^m$
- Practice identifying domain and range from graphs and equations
