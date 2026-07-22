---

<!-- Course Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Relations and Functions",
  "description": "CBSE Class 12 mathematics: Relations, functions, types of relations, and worked examples.",
  "provider": {
    "@type": "Organization",
    "name": "Wyatt's Notes",
    "url": "https://cbse.wyattau.com"
  },
  "url": "https://cbse.wyattau.com",
  "educationalLevel": "Secondary",
  "inLanguage": "en",
  "isAccessibleForFree": true,
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "online",
    "courseWorkload": "PT1H"
  }
}
</script>
title: "Relations and Functions"
description: "CBSE Class 12 mathematics: Relations, functions, types of relations, and worked examples."
---

<!-- Course Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Relations and Functions",
  "description": "CBSE Class 12 mathematics: Relations, functions, types of relations, and worked examples.",
  "provider": {
    "@type": "Organization",
    "name": "Wyatt's Notes",
    "url": "https://cbse.wyattau.com"
  },
  "url": "https://cbse.wyattau.com",
  "educationalLevel": "Secondary",
  "inLanguage": "en",
  "isAccessibleForFree": true,
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "online",
    "courseWorkload": "PT1H"
  }
}
</script>

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

## Key Formulas

- Number of relations from $A$ to $B$: $2^{|A| \times |B|}$
- Number of functions from $A$ to $B$: $|B|^{|A|}$
- Number of one-one functions from $A$ to $B$: $P(|B|, |A|) = \frac{|B|!}{(|B|-|A|)!}$ (when $|B| \geq |A|$)
- Composition: $(f \circ g)(x) = f(g(x))$
- Inverse: if $f(x) = y$, then $f^{-1}(y) = x$

## Worked Example 4 — Equivalence Relation from Partition

**Problem:** Let $A = \{1, 2, 3, 4, 5, 6\}$. Define $R$ on $A$ by $aRb$ if $a$ and $b$ leave the same remainder when divided by 3. Show that $R$ is an equivalence relation and find the equivalence classes.

**Solution:**

Remainders when divided by 3: $1 \equiv 1$, $2 \equiv 2$, $3 \equiv 0$, $4 \equiv 1$, $5 \equiv 2$, $6 \equiv 0$.

**Reflexive:** $a$ and $a$ leave the same remainder. Yes.

**Symmetric:** If $a$ and $b$ leave the same remainder, then $b$ and $a$ leave the same remainder. Yes.

**Transitive:** If $a$ and $b$ leave the same remainder, and $b$ and $c$ leave the same remainder, then $a$ and $c$ leave the same remainder. Yes.

Equivalence classes:
- Remainder 0: $\{3, 6\}$
- Remainder 1: $\{1, 4\}$
- Remainder 2: $\{2, 5\}$

**Common mistake:** Forgetting that equivalence classes partition the set. Each element belongs to exactly one class.

## Worked Example 5 — Injective Function with Restricted Domain

**Problem:** Determine whether $f: \mathbb{Z}^+ \to \mathbb{Z}^+$ defined by $f(n) = 2n + 1$ is injective, surjective, or bijective.

**Solution:**

**Injective:** Suppose $f(a) = f(b)$:
$$2a + 1 = 2b + 1 \implies a = b$$
Yes, $f$ is injective.

**Surjective:** Is every positive integer in the range? For $f(n) = 2n + 1$, the range is $\{3, 5, 7, 9, ...\}$ (odd numbers greater than or equal to 3). So $1$ and $2$ are not in the range. No, $f$ is not surjective.

Since $f$ is injective but not surjective, it is not bijective.

**Common mistake:** Confusing the codomain with the range. The codomain is $\mathbb{Z}^+$, but the range is only the odd numbers $\geq 3$.

## Worked Example 6 — Inverse Function

**Problem:** Find the inverse of $f: \mathbb{R} \to \mathbb{R}$ defined by $f(x) = \frac{2x + 3}{x - 1}$, $x \neq 1$.

**Solution:**

Let $y = \frac{2x + 3}{x - 1}$.

Solve for $x$:
$$y(x - 1) = 2x + 3$$
$$xy - y = 2x + 3$$
$$xy - 2x = y + 3$$
$$x(y - 2) = y + 3$$
$$x = \frac{y + 3}{y - 2}$$

Therefore:
$$f^{-1}(x) = \frac{x + 3}{x - 2}, \quad x \neq 2$$

**Common mistake:** Forgetting to specify the domain of the inverse function. The domain of $f^{-1}$ is $\mathbb{R} \setminus \{2\}$.

## Exam Tips

1. To check transitivity, look for counterexamples: find $(a, b) \in R$ and $(b, c) \in R$ where $(a, c) \notin R$
2. For injectivity, assume $f(a) = f(b)$ and show $a = b$. If you get $a = \pm b$, the function is not injective.
3. For surjectivity, try to solve $f(x) = y$ for arbitrary $y$ in the codomain
4. Composition order matters: $(f \circ g)(x) = f(g(x))$, not $g(f(x))$
5. A function has an inverse if and only if it is bijective; to find it, solve $y = f(x)$ for $x$

## Intuition

**A function is a machine with strict rules:** Picture a vending machine — you put in a specific coin (input), and you always get the same snack (output). A function is the same: same input always produces same output. Injective means no two different coins give the same snack. Surjective means every snack in the display can be obtained. Bijective means it's a perfect one-to-one correspondence.

**Why it matters:** Functions are the language of mathematics itself — every equation, mapping, and transformation is expressed through functions. Understanding injectivity and surjectivity determines whether you can invert a function, solve equations uniquely, and define meaningful compositions.

**The key insight:** Composition is not commutative because it's about the order of operations — putting on socks then shoes is fundamentally different from shoes then socks.

## Common Mistakes

### Mistake 1: Confusing composition order

Function composition is not commutative: $(f \circ g)(x) = f(g(x))$ is generally not equal to $(g \circ f)(x) = g(f(x))$. Students often compute $g(f(x))$ when the question asks for $f(g(x))$, or assume the order does not matter. Always write out the substitution explicitly: for $f \circ g$, plug $g(x)$ into $f$, not the other way around.

### Mistake 2: Assuming a relation that is reflexive and symmetric must be transitive

A relation can be reflexive and symmetric without being transitive. For example, on $\{1, 2, 3\}$, the relation $\{(1,1), (2,2), (3,3), (1,2), (2,1), (2,3), (3,2)\}$ is reflexive and symmetric but not transitive because $(1,2)$ and $(2,3)$ are in $R$ while $(1,3)$ is not. Always check all three properties independently.

### Mistake 3: Forgetting that composition is not the same as multiplication

Students sometimes compute $(f \circ g)(x)$ as $f(x) \cdot g(x)$ instead of $f(g(x))$. Composition means substituting the entire function $g(x)$ into $f$ as the input variable. For example, if $f(x) = 2x + 3$ and $g(x) = x^2$, then $(f \circ g)(x) = 2x^2 + 3$, not $(2x + 3)(x^2)$.

## Cross-References

- [Inverse Trigonometric Functions](../-inverse-trig/index) -- Inverse trigonometric functions are specific examples of inverse functions, requiring understanding of bijectivity.
- [Matrices](../matrices/index) -- Linear transformations are functions from vectors to vectors, extending function theory to matrix algebra.
- [Calculus](../derivatives/index) -- Derivatives measure rates of change of functions, connecting function theory to differential calculus.
