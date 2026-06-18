---
title: Problem Set
tags:
  - Mathematics
  - University
description: ""$ (the derivative). Find the matrix of $T$ with respect to the basis
$\mathcal{B} = \{1, x, x^2\}$And determine $\ker(T)$ and $\mathrm{im}(T)$.

<details>
<summary>Solution</summary>

$T(1) = 0 = 0 \cdot 1 + 0 \cdot x + 0 \cdot x^2$So coordinates are
$\begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}$.

$T(x) = 1 = 1 \cdot 1 + 0 \cdot x + 0 \cdot x^2$So coordinates are
$\begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}$.

$T(x^2) = 2x = 0 \cdot 1 + 2 \cdot x + 0 \cdot x^2$So coordinates are
$\begin{pmatrix} 0 \\ 2 \\ 0 \end{pmatrix}$.

$$[T]_{\mathcal{B}} = \begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 2 \\ 0 & 0 & 0 \end{pmatrix}$$

$\ker(T) = \{p : p' = 0\} = \mathrm{span}\{1\}$So $\dim(\ker(T)) = 1$.

$\mathrm{im}(T) = \{p' : p \in \mathcal{P}_2\} = \mathrm{span}\{1, x\}$So
$\dim(\mathrm{im}(T)) = 2$.

Verify: $\dim(\ker(T)) + \dim(\mathrm{im}(T)) = 1 + 2 = 3 = \dim(\mathcal{P}_2)$. $\blacksquare$

_If you get this wrong, revise: Section 6.2 (Matrix Representation) and Section 6.4 (Rank-Nullity)._

</details>

## Common Pitfalls

- **Confusing linear independence and span.** Linear independence means no non-trivial linear
  combination equals zero; span is the set of all linear combinations. **Fix:**
  $\{v_1, \ldots, v_n\}$ is linearly independent iff the equation $\sum c_i v_i = 0$ implies all
  $c_i = 0$.
- **Wrong determinant interpretation.** $\det(A) = 0$ means $A$ is singular (non-invertible);
  $\det(A) \neq 0$ means $A$ is invertible. **Fix:** A matrix is invertible iff its determinant is
  non-zero.
- **Confusing eigenvalues and eigenvectors.** An eigenvalue $\lambda$ satisfies
  $\det(A - \lambda I) = 0$; eigenvectors are the non-zero solutions of $(A - \lambda I)v = 0$.
  **Fix:** Find eigenvalues from the characteristic polynomial; then find eigenvectors by solving
  $(A - \lambda I)v = 0$.

## Worked Examples

### Example 1: Determinant and invertibility

**Problem.** Find the determinant of
$A = \begin{pmatrix} 1 & 2 & 3 \\ 0 & 1 & 4 \\ 5 & 6 & 0 \end{pmatrix}$ and determine if $A$ is
invertible.

**Solution.** $\det(A) = 1(0 - 24) - 2(0 - 20) + 3(0 - 5) = -24 + 40 - 15 = 1 \neq 0$.

Since $\det(A) \neq 0$, $A$ is invertible. $\blacksquare$

### Example 2: Eigenvalues and eigenvectors

**Problem.** Find the eigenvalues and eigenvectors of
$A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}$.

**Solution.**
$\det(A - \lambda I) = (4-\lambda)(3-\lambda) - 2 = \lambda^2 - 7\lambda + 10 = (\lambda - 5)(\lambda - 2) = 0$.

Eigenvalues: $\lambda_1 = 5$, $\lambda_2 = 2$.

For $\lambda_1 = 5$:
$(A - 5I)v = 0 \implies \begin{pmatrix} -1 & 1 \\ 2 & -2 \end{pmatrix}v = 0 \implies v_1 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$.

For $\lambda_2 = 2$:
$(A - 2I)v = 0 \implies \begin{pmatrix} 2 & 1 \\ 2 & 1 \end{pmatrix}v = 0 \implies v_2 = \begin{pmatrix} 1 \\ -2 \end{pmatrix}$.

$\blacksquare$

## Summary

- A matrix is invertible iff $\det(A) \neq 0$; equivalent to having linearly independent
  rows/columns.
- Eigenvalues: roots of the characteristic polynomial $\det(A - \lambda I) = 0$.
- Eigenvectors: non-zero vectors in $\ker(A - \lambda I)$.
- The spectral theorem: a real symmetric matrix has an orthonormal eigenbasis and can be
  diagonalised.

## Cross-References

| Topic                      | Site        | Link                                                                  |
| -------------------------- | ----------- | --------------------------------------------------------------------- |
| Linear Algebra (Overview)  | WyattsNotes | [View](/docs/university/mathematics/linear-algebra)                   |
| Abstract Algebra           | WyattsNotes | [View](/docs/university/mathematics/abstract-algebra)                 |
| Multivariable Calculus     | WyattsNotes | [View](/docs/university/mathematics/multivariable-calculus)           |
| Linear Algebra — MIT 18.06 | MIT OCW     | [View](https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/) |

