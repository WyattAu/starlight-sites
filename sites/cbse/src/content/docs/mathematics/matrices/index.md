---


date: 2026-07-23T21:57:32+01:00
title: "Matrices | CBSE - Wyatt's Notes"
description: "\"itemListElement\": [{\"name\": \"Home\", \"url\": \"https://wyattau.com\"}, {\"name\": \"cbse\", \"url\": \"https://cbse.wyattau.com\"}, {\"name\": \"Mathematics\", \"url\":"
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "cbse", "url": "https://cbse.wyattau.com"}, {"name": "Mathematics", "url": "https://cbse.wyattau.com/mathematics"}, {"name": "Matrices", "url": "https://cbse.wyattau.com/mathematics/matrices"}, {"name": "Index", "url": "https://cbse.wyattau.com/mathematics/matrices/index"}]
}
</script>

<!-- Course Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Matrices",
  "description": "CBSE Class 12 mathematics: Matrices with operations, determinants, inverse, and worked examples.",
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

## Matrices

Matrices are rectangular arrays of numbers used to represent linear transformations, solve systems of equations, and more. This topic covers operations, transpose, inverse, and determinants.

## Key Concepts

- Matrix addition: $(A + B)_{ij} = A_{ij} + B_{ij}$
- Scalar multiplication: $(\lambda A)_{ij} = \lambda A_{ij}$
- Matrix multiplication: $(AB)_{ij} = \sum_k A_{ik}B_{kj}$
- Transpose: $(A^T)_{ij} = A_{ji}$
- Inverse: $A A^{-1} = I$ (exists only if $\det(A) \neq 0$)
- Determinant of 2x2: $\det\begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc$
- For a system $AX = B$: $X = A^{-1}B$ if $A$ is invertible
- Properties: $(AB)^T = B^T A^T$, $(AB)^{-1} = B^{-1}A^{-1}$, $(A^T)^{-1} = (A^{-1})^T$
- A square matrix is singular if $\det(A) = 0$ and non-singular if $\det(A) \neq 0$

## Worked Example 1 — Matrix Multiplication

**Problem:** If $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ and $B = \begin{pmatrix} 5 & 6 \\ 7 & 8 \end{pmatrix}$, find $AB$.

**Solution:**

$$AB = \begin{pmatrix} 1 \cdot 5 + 2 \cdot 7 & 1 \cdot 6 + 2 \cdot 8 \\ 3 \cdot 5 + 4 \cdot 7 & 3 \cdot 6 + 4 \cdot 8 \end{pmatrix} = \begin{pmatrix} 19 & 22 \\ 43 & 50 \end{pmatrix}$$

**Common mistake:** Assuming $AB = BA$. Matrix multiplication is not commutative. as a rule, $AB \neq BA$.

## Worked Example 2 — Finding the Inverse

**Problem:** Find the inverse of $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$.

**Solution:**

$$\det(A) = 1 \cdot 4 - 2 \cdot 3 = 4 - 6 = -2$$

Since $\det(A) \neq 0$, the inverse exists:

$$A^{-1} = \frac{1}{\det(A)} \begin{pmatrix} 4 & -2 \\ -3 & 1 \end{pmatrix} = \frac{1}{-2} \begin{pmatrix} 4 & -2 \\ -3 & 1 \end{pmatrix} = \begin{pmatrix} -2 & 1 \\ 1.5 & -0.5 \end{pmatrix}$$

**Common mistake:** Forgetting the negative sign when computing the determinant. The formula is $ad - bc$, not $bc - ad$.

## Worked Example 3 — Solving a System Using Matrices

**Problem:** Solve the system:
$$x + 2y = 5$$
$$3x + 4y = 11$$

**Solution:**

Write as $AX = B$:
$$\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 5 \\ 11 \end{pmatrix}$$

Using the inverse from Example 2:
$$\begin{pmatrix} x \\ y \end{pmatrix} = A^{-1}B = \begin{pmatrix} -2 & 1 \\ 1.5 & -0.5 \end{pmatrix} \begin{pmatrix} 5 \\ 11 \end{pmatrix}$$

$$x = -2(5) + 1(11) = 1, \quad y = 1.5(5) - 0.5(11) = 2$$

**Common mistake:** Not checking if the determinant is zero before finding the inverse. If $\det(A) = 0$, the matrix is singular and has no inverse.

## Worked Example 4 — Properties of Transpose

**Problem:** If $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ and $B = \begin{pmatrix} 5 & 6 \\ 7 & 8 \end{pmatrix}$, verify that $(AB)^T = B^T A^T$.

**Solution:**

From Example 1: $AB = \begin{pmatrix} 19 & 22 \\ 43 & 50 \end{pmatrix}$, so $(AB)^T = \begin{pmatrix} 19 & 43 \\ 22 & 50 \end{pmatrix}$.

$B^T = \begin{pmatrix} 5 & 7 \\ 6 & 8 \end{pmatrix}$ and $A^T = \begin{pmatrix} 1 & 3 \\ 2 & 4 \end{pmatrix}$.

$$B^T A^T = \begin{pmatrix} 5 & 7 \\ 6 & 8 \end{pmatrix}\begin{pmatrix} 1 & 3 \\ 2 & 4 \end{pmatrix} = \begin{pmatrix} 5+14 & 15+28 \\ 6+16 & 18+32 \end{pmatrix} = \begin{pmatrix} 19 & 43 \\ 22 & 50 \end{pmatrix}$$

Thus $(AB)^T = B^T A^T$.

**Common mistake:** Writing $(AB)^T = A^T B^T$. The correct identity reverses the order: $(AB)^T = B^T A^T$.

## Practice Problems

1. Find $AB$ and $BA$ for $A = \begin{pmatrix} 2 & 0 \\ 1 & 3 \end{pmatrix}$ and $B = \begin{pmatrix} 1 & 1 \\ 0 & 2 \end{pmatrix}$. Are they equal?
2. Find the inverse of $\begin{pmatrix} 3 & 1 \\ 5 & 2 \end{pmatrix}$.
3. Solve the system $2x + y = 7$, $x + 3y = 11$ using matrix inversion.
4. Verify that $(A + B)^T = A^T + B^T$ for the matrices given in Example 1.
5. Find a $2 \times 2$ matrix $A$ such that $A^2 = I$ (an involutory matrix).

## Common Exam Patterns

- Always check if the determinant is zero before finding the inverse
- Remember that matrix multiplication is not commutative
- For 2x2 matrices, the inverse formula is straightforward
- Practice solving systems using both matrix method and elimination
- The transpose of a product reverses the order: $(AB)^T = B^T A^T$
- A matrix with $\det(A) = 0$ is singular and cannot be inverted

## Exam Tips

1. Write out the full multiplication step by step to avoid arithmetic errors.
2. For the inverse of a 2x2 matrix, swap the diagonal elements and negate the off-diagonal elements, then divide by the determinant.
3. When solving $AX = B$, always verify your answer by computing $AX$ and checking it equals $B$.
4. For systems with three or more equations, the matrix method is efficient but requires careful arithmetic.
5. Remember that $(A + B)(A - B) = A^2 - B^2$ only if $AB = BA$.

## Intuition

Matrices are rectangular arrays that compactly represent systems of linear equations and transformations. Adding matrices is straightforward entry-by-entry, but multiplication follows a row-column dot product that encodes how multiple linear relationships interact. The transpose flips rows and columns, and for products the order reverses: (AB)^T = B^T A^T. The determinant is the key to invertibility -- a zero determinant means the transformation collapses space, making it impossible to reverse. Solving AX = B with matrices is like solving a puzzle: if A is invertible, you can isolate X by multiplying both sides by A inverse.

## Cross-References

- [Matrix Operations](01-matrix-operations) -- multiplication, determinant, and inverse
- [Types of Relations](../relations-functions/01-types-of-relations) -- set theory foundations
- [CBSE Physics](../../../../../../ib/src/content/docs/physics/physics) -- vectors and coordinate systems

## Common Mistakes

**Assuming matrix multiplication is commutative.** as a rule, AB != BA for matrices. Students often write AB = BA without checking, which leads to incorrect solutions for matrix equations. Always preserve the order of multiplication when manipulating matrix equations.

**Forgetting that (AB)^-1 = B^-1 A^-1 (reversed order).** The inverse of a product reverses the order: (AB)^-1 = B^-1 A^-1. Students often write (AB)^-1 = A^-1 B^-1, which is incorrect. The same reversal applies to transposes: (AB)^T = B^T A^T.

**Confusing the conditions for matrix inverse existence.** A matrix has an inverse only if its determinant is non-zero (non-singular). Students sometimes attempt to find the inverse of a singular matrix, which is impossible. Always check det(A) != 0 before computing A^-1.
