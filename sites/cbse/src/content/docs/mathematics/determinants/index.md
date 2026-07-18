---
title: "Determinants"
description: "CBSE Class 12 mathematics: Determinants, properties, cofactor expansion, and worked examples."
---

# Determinants

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
