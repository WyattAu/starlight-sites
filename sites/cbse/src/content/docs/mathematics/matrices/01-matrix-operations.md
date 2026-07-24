---

date: 2026-07-23T21:57:32+01:00
title: "Matrix operations"
description: "CBSE Class 12 mathematics: Matrix operations with multiplication, determinants, and inverse."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "cbse", "url": "https://cbse.wyattau.com"}, {"name": "Mathematics", "url": "https://cbse.wyattau.com/mathematics"}, {"name": "Matrices", "url": "https://cbse.wyattau.com/mathematics/matrices"}, {"name": "01 Matrix Operations", "url": "https://cbse.wyattau.com/mathematics/matrices/01-matrix-operations"}]
}
</script>

## Matrix operations

Study notes for CBSE Class 12 mathematics - Matrix operations.

## Key Concepts

- Matrix addition and scalar multiplication
- Matrix multiplication: $(AB)_{ij} = \sum_k a_{ik}b_{kj}$
- Determinant of a 2x2 matrix: $\det\begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc$
- Determinant of a 3x3 matrix using cofactor expansion
- Inverse of a matrix: $A^{-1} = \frac{1}{\det(A)}\text{adj}(A)$, exists only if $\det(A) \neq 0$
- Properties: $(AB)^{-1} = B^{-1}A^{-1}$, $(AB)^T = B^T A^T$
- Scalar multiplication: $kA$ multiplies every entry of $A$ by $k$
- A matrix is symmetric if $A^T = A$, skew-symmetric if $A^T = -A$

## Worked Example 1 — Matrix Multiplication

**Problem:** Given $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ and $B = \begin{pmatrix} 5 & 6 \\ 7 & 8 \end{pmatrix}$, find $AB$ and $BA$.

**Solution:**

$$AB = \begin{pmatrix} 1 \cdot 5 + 2 \cdot 7 & 1 \cdot 6 + 2 \cdot 8 \\ 3 \cdot 5 + 4 \cdot 7 & 3 \cdot 6 + 4 \cdot 8 \end{pmatrix} = \begin{pmatrix} 19 & 22 \\ 43 & 50 \end{pmatrix}$$

$$BA = \begin{pmatrix} 5 \cdot 1 + 6 \cdot 3 & 5 \cdot 2 + 6 \cdot 4 \\ 7 \cdot 1 + 8 \cdot 3 & 7 \cdot 2 + 8 \cdot 4 \end{pmatrix} = \begin{pmatrix} 23 & 34 \\ 31 & 46 \end{pmatrix}$$

Note: $AB \neq BA$ (matrix multiplication is not commutative).

## Worked Example 2 — Determinant and Inverse of a 3x3 Matrix

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

## Common Exam Patterns

- For 3x3 determinants, expand along the row or column with the most zeros
- Check that $\det(A) \neq 0$ before computing the inverse
- Matrix multiplication requires the number of columns in the first matrix to equal the number of rows in the second
- The adjugate matrix is the transpose of the cofactor matrix, not the cofactor matrix itself
- The identity matrix $I$ satisfies $AI = IA = A$ for any square matrix $A$
- A matrix multiplied by its inverse gives the identity: $AA^{-1} = A^{-1}A = I$

## Exam Tips

1. When computing cofactors, pay attention to the sign pattern: $\begin{pmatrix} + & - & + \\ - & + & - \\ + & - & + \end{pmatrix}$.
2. Verify your inverse by multiplying $AA^{-1}$ and confirming you get the identity matrix.
3. For a 2x2 matrix, the inverse is $\frac{1}{ad-bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$.
4. If $\det(A) = 0$, the matrix is singular and the system may have no solution or infinitely many solutions.
5. Practice expanding determinants along different rows to build speed and accuracy.
6. For a triangular matrix (upper or lower), the determinant is the product of diagonal entries.

## Intuition

Matrix operations are rules for combining grids of numbers. Multiplication is not just multiplying corresponding entries -- it is a dot-product process that combines rows of one matrix with columns of another, encoding how linear transformations compose. The determinant measures the scaling factor of a transformation: if it is zero, the transformation squashes space into a lower dimension, losing information and making the matrix impossible to invert. Finding an inverse is like asking "what transformation undoes this one?" The adjugate method is systematic but tedious; for 2x2 matrices there is a simple shortcut of swapping diagonal elements and negating off-diagonal ones.

## Common Mistakes

### Mistake 1: Assuming matrix multiplication is commutative

Matrix multiplication is NOT commutative: $AB \neq BA$ as a rule. Students often rearrange the order of matrices in products without realising this changes the result. For example, if $A$ is $2 \times 3$ and $B$ is $3 \times 2$, then $AB$ is $2 \times 2$ while $BA$ is $3 \times 3$ -- they are not even the same size. Always preserve the order of multiplication.

### Mistake 2: Forgetting the sign pattern when computing cofactors

The cofactor expansion of a determinant requires alternating signs: $\begin{pmatrix} + & - & + \\ - & + & - \\ + & - & + \end{pmatrix}$. Students often forget the negative signs on the off-diagonal positions, leading to incorrect determinants and inverses. A memory aid: the sign at position $(i,j)$ is $(-1)^{i+j}$.

### Mistake 3: Attempting to invert a singular matrix

A matrix has an inverse only if its determinant is non-zero. Students sometimes compute the adjugate and divide by zero, or write $A^{-1}$ without checking $\det(A)$. If $\det(A) = 0$, the matrix is singular and no inverse exists. Always check the determinant first before attempting to find the inverse.

## Cross-References

- [Matrices](/docs/cbse/mathematics/matrices) -- broader matrix theory and properties
- [Derivatives](/docs/cbse/mathematics/derivatives) -- calculus foundations
- [CBSE Physics](/docs/cbse/physics) -- vectors and coordinate transformations
