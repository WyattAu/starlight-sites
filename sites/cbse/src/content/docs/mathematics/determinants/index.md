---


date: 2026-07-23T21:57:32+01:00
title: "Determinants | CBSE - Wyatt's Notes"
description: "\"itemListElement\": [{\"name\": \"Home\", \"url\": \"https://wyattau.com\"}, {\"name\": \"cbse\", \"url\": \"https://cbse.wyattau.com\"}, {\"name\": \"Mathematics\", \"url\":"
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "cbse", "url": "https://cbse.wyattau.com"}, {"name": "Mathematics", "url": "https://cbse.wyattau.com/mathematics"}, {"name": "Determinants", "url": "https://cbse.wyattau.com/mathematics/determinants"}, {"name": "Index", "url": "https://cbse.wyattau.com/mathematics/determinants/index"}]
}
</script>

<!-- Course Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Determinants",
  "description": "CBSE Class 12 mathematics: Determinants, properties, cofactor expansion, and worked examples.",
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

## Determinants

Determinants are scalar values associated with square matrices. They determine whether a matrix is invertible, represent area/volume scaling, and are used in Cramer's rule for solving linear systems.

## Key Concepts

- Determinant of a 2x2 matrix: $\det\begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc$
- Cofactor expansion along row $i$: $\det(A) = \sum_j (-1)^{i+j} a_{ij} M_{ij}$
- Properties: $\det(AB) = \det(A)\det(B)$, $\det(A^T) = \det(A)$
- $\det(kA) = k^n \det(A)$ for an $n \times n$ matrix
- Row operations: swapping rows changes sign, adding a multiple of one row to another doesn't change determinant
- Cramer's rule: $x_i = \frac{\det(A_i)}{\det(A)}$ where $A_i$ replaces column $i$ with the constant vector

## Worked Example 1 — 3x3 Determinant

**Problem:** Find the determinant of $A = \begin{pmatrix} 1 & 2 & 3 \\ 0 & 1 & 4 \\ 5 & 6 & 0 \end{pmatrix}$.

**Solution:**

Expand along the first row:
$$\det(A) = 1 \begin{vmatrix} 1 & 4 \\ 6 & 0 \end{vmatrix} - 2 \begin{vmatrix} 0 & 4 \\ 5 & 0 \end{vmatrix} + 3 \begin{vmatrix} 0 & 1 \\ 5 & 6 \end{vmatrix}$$

$$= 1(0 - 24) - 2(0 - 20) + 3(0 - 5)$$

$$= -24 + 40 - 15 = 1$$

**Common mistake:** Forgetting the $(-1)^{i+j}$ sign pattern. The signs alternate as $+, -, +, -, \ldots$

## Worked Example 2 — Cramer's Rule

**Problem:** Solve the system:
$$2x + 3y = 8$$
$$x - 2y = -3$$

**Solution:**

$$D = \begin{vmatrix} 2 & 3 \\ 1 & -2 \end{vmatrix} = 2(-2) - 3(1) = -7$$

$$D_x = \begin{vmatrix} 8 & 3 \\ -3 & -2 \end{vmatrix} = 8(-2) - 3(-3) = -16 + 9 = -7$$

$$D_y = \begin{vmatrix} 2 & 8 \\ 1 & -3 \end{vmatrix} = 2(-3) - 8(1) = -6 - 8 = -14$$

$$x = \frac{D_x}{D} = \frac{-7}{-7} = 1, \quad y = \frac{D_y}{D} = \frac{-14}{-7} = 2$$

**Common mistake:** Using Cramer's rule when $D = 0$. If the determinant is zero, the system has no unique solution.

## Worked Example 3 — Area Using Determinants

**Problem:** Find the area of the triangle with vertices $(1, 2)$, $(4, 5)$, and $(7, 1)$.

**Solution:**

$$\text{Area} = \frac{1}{2} \left| \begin{vmatrix} 1 & 2 & 1 \\ 4 & 5 & 1 \\ 7 & 1 & 1 \end{vmatrix} \right|$$

Expand along the first row:
$$= \frac{1}{2} |1(5 - 1) - 2(4 - 7) + 1(4 - 35)|$$

$$= \frac{1}{2} |4 + 6 - 31| = \frac{1}{2} |-21| = \frac{21}{2} = 10.5 \text{ square units}$$

**Common mistake:** Forgetting the absolute value. Area must be positive.

## Practice Problems

1. Find the determinant of $\begin{pmatrix} 3 & 1 & 2 \\ 0 & 4 & 1 \\ 1 & 0 & 5 \end{pmatrix}$.
2. Solve using Cramer's rule: $x + y = 5$, $2x - y = 1$.
3. Find the area of the triangle with vertices $(0, 0)$, $(3, 4)$, and $(6, 0)$.

## Why This Matters

Determinants are used in linear algebra, multivariable calculus (Jacobian), and physics (cross products, volume calculations). Understanding determinants is essential for solving linear systems, finding inverses, and computing eigenvalues.

## Common Exam Patterns

- Expand along the row or column with the most zeros to simplify calculations
- Use row operations to create zeros before expanding
- Remember: $\det(A^{-1}) = 1/\det(A)$
- For a triangular matrix, the determinant is the product of diagonal entries
- Practice with both numerical and symbolic determinants

## Key Formulas

- 2x2: $\begin{vmatrix} a & b \\ c & d \end{vmatrix} = ad - bc$
- 3x3 cofactor expansion: $\det(A) = a_{11}C_{11} + a_{12}C_{12} + a_{13}C_{13}$ (along first row)
- Cramer's rule: $x_i = \frac{D_i}{D}$
- Area of triangle: $\frac{1}{2} \left| \begin{vmatrix} x_1 & y_1 & 1 \\ x_2 & y_2 & 1 \\ x_3 & y_3 & 1 \end{vmatrix} \right|$
- Collinearity condition: $\begin{vmatrix} x_1 & y_1 & 1 \\ x_2 & y_2 & 1 \\ x_3 & y_3 & 1 \end{vmatrix} = 0$

## Worked Example 4 — Symbolic Determinant

**Problem:** Find $x$ if $\begin{vmatrix} 2 & x & 3 \\ 4 & 1 & 6 \\ 1 & 2 & 3 \end{vmatrix} = 0$.

**Solution:**

Expand along the first row:
$$2 \begin{vmatrix} 1 & 6 \\ 2 & 3 \end{vmatrix} - x \begin{vmatrix} 4 & 6 \\ 1 & 3 \end{vmatrix} + 3 \begin{vmatrix} 4 & 1 \\ 1 & 2 \end{vmatrix} = 0$$

$$2(3 - 12) - x(12 - 6) + 3(8 - 1) = 0$$

$$2(-9) - x(6) + 3(7) = 0$$

$$-18 - 6x + 21 = 0$$

$$3 - 6x = 0 \implies x = \frac{1}{2}$$

**Common mistake:** Sign errors in cofactor expansion. The signs alternate as $+, -, +$ along the first row.

## Worked Example 5 — Properties of Determinants

**Problem:** If $A$ is a $3 \times 3$ matrix with $\det(A) = 5$, find $\det(2A)$, $\det(A^{-1})$, and $\det(A^T A)$.

**Solution:**

For a $3 \times 3$ matrix:
$$\det(2A) = 2^3 \det(A) = 8 \times 5 = 40$$

$$\det(A^{-1}) = \frac{1}{\det(A)} = \frac{1}{5}$$

$$\det(A^T A) = \det(A^T) \det(A) = \det(A) \cdot \det(A) = 5 \times 5 = 25$$

**Common mistake:** Using $\det(kA) = k \det(A)$ instead of $\det(kA) = k^n \det(A)$ for an $n \times n$ matrix.

## Worked Example 6 — Solving System Using Cramer's Rule

**Problem:** Solve the system:
$$x + y + z = 6$$
$$2x + 3y + z = 14$$
$$3x - 2y + 4z = 5$$

**Solution:**

$$D = \begin{vmatrix} 1 & 1 & 1 \\ 2 & 3 & 1 \\ 3 & -2 & 4 \end{vmatrix} = 1(12+2) - 1(8-3) + 1(-4-9) = 14 - 5 - 13 = -4$$

$$D_x = \begin{vmatrix} 6 & 1 & 1 \\ 14 & 3 & 1 \\ 5 & -2 & 4 \end{vmatrix} = 6(12+2) - 1(56-5) + 1(-28-15) = 84 - 51 - 43 = -10$$

$$x = \frac{D_x}{D} = \frac{-10}{-4} = \frac{5}{2}$$

Similarly: $D_y = -8$, $y = 2$; $D_z = 2$, $z = -\frac{1}{2}$

**Common mistake:** When computing $D_x$, replace the first column (not row) with the constants.

## Exam Tips

1. Always expand along the row or column with the most zeros to save time
2. Use row operations to simplify before expanding: adding a multiple of one row to another doesn't change the determinant
3. For Cramer's rule, check that $D \neq 0$ before proceeding
4. Collinearity of three points $(x_1, y_1)$, $(x_2, y_2)$, $(x_3, y_3)$ is equivalent to the determinant being zero
5. Practice with matrices containing variables to build algebraic fluency

## Intuition

**A determinant measures how much a matrix stretches or squishes space:** Think of a 2×2 matrix as transforming a unit square into a parallelogram. The determinant is the signed area of that parallelogram — positive if orientation is preserved, negative if flipped, zero if the parallelogram collapses to a line or point. For 3×3, it's the signed volume of the transformed unit cube.

**Why it matters:** Determinants tell you whether a system of equations has a unique solution, whether a transformation is invertible, and how volumes change under linear maps. They appear in Jacobians for change of variables, cross products in physics, and eigenvalue problems in engineering.

**The key insight:** A zero determinant means the matrix collapses space to a lower dimension — information is lost, and the transformation cannot be reversed.

## Common Mistakes

**Forgetting that swapping rows changes the sign of the determinant.** When using row operations to simplify a determinant, swapping two rows multiplies the determinant by -1. Students often forget this sign change, leading to incorrect final values. Track the number of row swaps to determine the correct sign.

**Confusing det(kA) with k*det(A).** For an n x n matrix, det(kA) = k^n *det(A), not k* det(A). Each of the n rows is multiplied by k, so the determinant is multiplied by k^n. Students frequently write det(2A) = 2*det(A) instead of 2^n* det(A).

**Applying Cramer's rule without checking that det(A) != 0.** Cramer's rule requires the system to have a unique solution, which means the coefficient matrix must be non-singular. If det(A) = 0, the system has either no solution or infinitely many. Students sometimes proceed with Cramer's rule on singular systems, getting division by zero.

## Cross-References

- [Matrices](../matrices/index) -- Determinants are properties of square matrices, used to test invertibility and compute areas and volumes.
- [Calculus](../integrals/index) -- Jacobian determinants appear in change of variables for multiple integrals, connecting determinants to integration.
- [Linear Equations](../relations-functions/index) -- The determinant determines whether a system of linear equations has a unique solution.
