---
title: "Matrix operations"
description: "CBSE Class 12 mathematics: Matrix operations"
---

# Matrix operations

Study notes for CBSE Class 12 mathematics - Matrix operations.

## Key Concepts

- Matrix addition and scalar multiplication
- Matrix multiplication: $(AB)_{ij} = \sum_k a_{ik}b_{kj}$
- Determinant of a $2 \times 2$ matrix: $\det\begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc$
- Determinant of a $3 \times 3$ matrix using cofactor expansion
- Inverse of a matrix: $A^{-1} = \frac{1}{\det(A)}\text{adj}(A)$, exists only if $\det(A) \neq 0$
- Properties: $(AB)^{-1} = B^{-1}A^{-1}$, $(AB)^T = B^T A^T$

## Worked Example 1 — Matrix Multiplication

**Problem:** Given $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ and $B = \begin{pmatrix} 5 & 6 \\ 7 & 8 \end{pmatrix}$, find $AB$ and $BA$.

**Solution:**

$$AB = \begin{pmatrix} 1 \cdot 5 + 2 \cdot 7 & 1 \cdot 6 + 2 \cdot 8 \\ 3 \cdot 5 + 4 \cdot 7 & 3 \cdot 6 + 4 \cdot 8 \end{pmatrix} = \begin{pmatrix} 19 & 22 \\ 43 & 50 \end{pmatrix}$$

$$BA = \begin{pmatrix} 5 \cdot 1 + 6 \cdot 3 & 5 \cdot 2 + 6 \cdot 4 \\ 7 \cdot 1 + 8 \cdot 3 & 7 \cdot 2 + 8 \cdot 4 \end{pmatrix} = \begin{pmatrix} 23 & 34 \\ 31 & 46 \end{pmatrix}$$

Note: $AB \neq BA$ (matrix multiplication is not commutative).

## Worked Example 2 — Determinant and Inverse of a $3 \times 3$ Matrix

**Problem:** Find the determinant and inverse of $A = \begin{pmatrix} 1 & 2 & 3 \\ 0 & 1 & 4 \\ 5 & 6 & 0 \end{pmatrix}$.

**Solution:**

Determinant (expanding along first row):
$$\det(A) = 1\begin{vmatrix} 1 & 4 \\ 6 & 0 \end{vmatrix} - 2\begin{vmatrix} 0 & 4 \\ 5 & 0 \end{vmatrix} + 3\begin{vmatrix} 0 & 1 \\ 5 & 6 \end{vmatrix}$$
$$= 1(0 - 24) - 2(0 - 20) + 3(0 - 5) = -24 + 40 - 15 = 1$$

Cofactor matrix:
$$C = \begin{pmatrix} -24 & 20 & -5 \\ 18 & -15 & 4 \\ 5 & -4 & 1 \end{pmatrix}$$

Adjugate (transpose of cofactor matrix):
$$\text{adj}(A) = \begin{pmatrix} -24 & 18 & 5 \\ 20 & -15 & -4 \\ -5 & 4 & 1 \end{pmatrix}$$

Inverse:
$$A^{-1} = \frac{1}{\det(A)}\text{adj}(A) = \begin{pmatrix} -24 & 18 & 5 \\ 20 & -15 & -4 \\ -5 & 4 & 1 \end{pmatrix}$$

Verification: $AA^{-1} = I$ (identity matrix).

## Worked Example 3 — Solving a System Using Matrix Inverse

**Problem:** Solve the system:
$$x + 2y = 5$$
$$3x + 4y = 11$$

**Solution:**

In matrix form $AX = B$:
$$\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 5 \\ 11 \end{pmatrix}$$

Determinant: $\det(A) = 1 \cdot 4 - 2 \cdot 3 = -2$

$$A^{-1} = \frac{1}{-2}\begin{pmatrix} 4 & -2 \\ -3 & 1 \end{pmatrix} = \begin{pmatrix} -2 & 1 \\ 1.5 & -0.5 \end{pmatrix}$$

$$X = A^{-1}B = \begin{pmatrix} -2 & 1 \\ 1.5 & -0.5 \end{pmatrix}\begin{pmatrix} 5 \\ 11 \end{pmatrix} = \begin{pmatrix} -10 + 11 \\ 7.5 - 5.5 \end{pmatrix} = \begin{pmatrix} 1 \\ 2 \end{pmatrix}$$

So $x = 1$, $y = 2$.

## Practice Problems

1. If $A = \begin{pmatrix} 2 & 0 \\ 1 & 3 \end{pmatrix}$ and $B = \begin{pmatrix} 1 & 4 \\ 2 & 5 \end{pmatrix}$, find $AB$ and $BA$.
2. Find the determinant of $A = \begin{pmatrix} 3 & 1 \\ -2 & 4 \end{pmatrix}$ and hence find $A^{-1}$.
3. Using the matrix inverse method, solve: $2x + y = 7$, $x + 3y = 11$.

### Additional Practice Problems

4. If $A = \begin{pmatrix} 1 & 0 & 2 \\ 0 & 1 & 0 \\ 2 & 0 & 1 \end{pmatrix}$, find $\det(A)$ and determine whether $A^{-1}$ exists.
5. Show that if $A$ and $B$ are invertible matrices, then $(AB)^{-1} = B^{-1}A^{-1}$ using $A = \begin{pmatrix} 1 & 2 \\ 3 & 5 \end{pmatrix}$ and $B = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$.
