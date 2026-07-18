---
title: "Matrices"
description: "CBSE Class 12 mathematics: Matrices with operations, determinants, and worked examples."
---

# Matrices

Matrices are rectangular arrays of numbers used to represent linear transformations, solve systems of equations, and more. This topic covers operations, transpose, inverse, and determinants.

## Key Concepts

- Matrix addition: $(A + B)_{ij} = A_{ij} + B_{ij}$
- Matrix multiplication: $(AB)_{ij} = \sum_k A_{ik}B_{kj}$
- Transpose: $(A^T)_{ij} = A_{ji}$
- Inverse: $A A^{-1} = I$ (exists only if $\det(A) \neq 0$)
- Determinant of 2×2: $\det\begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc$
- For a system $AX = B$: $X = A^{-1}B$ if $A$ is invertible

## Worked Example 1 — Matrix Multiplication

**Problem:** If $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ and $B = \begin{pmatrix} 5 & 6 \\ 7 & 8 \end{pmatrix}$, find $AB$.

**Solution:**

$$AB = \begin{pmatrix} 1 \cdot 5 + 2 \cdot 7 & 1 \cdot 6 + 2 \cdot 8 \\ 3 \cdot 5 + 4 \cdot 7 & 3 \cdot 6 + 4 \cdot 8 \end{pmatrix} = \begin{pmatrix} 19 & 22 \\ 43 & 50 \end{pmatrix}$$

**Common mistake:** Assuming $AB = BA$. Matrix multiplication is not commutative. In general, $AB \neq BA$.

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

## Practice Problems

1. Find $AB$ and $BA$ for $A = \begin{pmatrix} 2 & 0 \\ 1 & 3 \end{pmatrix}$ and $B = \begin{pmatrix} 1 & 1 \\ 0 & 2 \end{pmatrix}$. Are they equal?
2. Find the inverse of $\begin{pmatrix} 3 & 1 \\ 5 & 2 \end{pmatrix}$.
3. Solve the system $2x + y = 7$, $x + 3y = 11$ using matrix inversion.

## Common Exam Patterns

- Always check if the determinant is zero before finding the inverse
- Remember that matrix multiplication is not commutative
- For 2×2 matrices, the inverse formula is straightforward
- Practice solving systems using both matrix method and elimination
