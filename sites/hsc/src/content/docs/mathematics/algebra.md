---
title: "Algebra"
description: "HSC mathematics: Algebra"
---

# Algebra

HSC mathematics study notes - Algebra

## Key Concepts

### Quadratic Equations

The general form is $ax^2 + bx + c = 0$ where $a \neq 0$.

**Quadratic Formula:**
$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

**Discriminant $\Delta = b^2 - 4ac$:**
- $\Delta > 0$: two distinct real roots
- $\Delta = 0$: one repeated real root
- $\Delta < 0$: no real roots

**Sum and product of roots:**
$$x_1 + x_2 = -\frac{b}{a}, \quad x_1 \cdot x_2 = \frac{c}{a}$$

### Sequences and Series

**Arithmetic:** $T_n = a + (n-1)d$, $S_n = \frac{n}{2}(2a + (n-1)d)$

**Geometric:** $T_n = ar^{n-1}$, $S_n = \frac{a(r^n - 1)}{r - 1}$ ($r \neq 1$)

**Infinite geometric series:** $S_\infty = \frac{a}{1 - r}$ when $|r| < 1$

### Logarithms

**Properties:**
$$\log_a(MN) = \log_a M + \log_a N$$
$$\log_a \frac{M}{N} = \log_a M - \log_a N$$
$$\log_a M^n = n \log_a M$$

**Change of base:** $\log_a b = \frac{\log_c b}{\log_c a}$

### Matrices

**Addition:** $(A + B)_{ij} = A_{ij} + B_{ij}$

**Multiplication:** $(AB)_{ij} = \sum_k A_{ik} B_{kj}$

**Determinant (2x2):** $\det \begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc$

**Inverse (2x2):** $\begin{pmatrix} a & b \\ c & d \end{pmatrix}^{-1} = \frac{1}{ad - bc} \begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$

## Worked Examples

### Example 1: Quadratic Equations

**Problem:** Solve $2x^2 - 7x + 3 = 0$.

**Solution:**

Step 1: Identify $a = 2$, $b = -7$, $c = 3$

Step 2: Calculate the discriminant:
$$\Delta = (-7)^2 - 4(2)(3) = 49 - 24 = 25$$

Step 3: Apply the quadratic formula:
$$x = \frac{7 \pm \sqrt{25}}{4} = \frac{7 \pm 5}{4}$$

Step 4: $x = 3$ or $x = \frac{1}{2}$

**Answer:** $x = 3$ or $x = \frac{1}{2}$

### Example 2: Geometric Series

**Problem:** Find the sum of the first 8 terms of the geometric series $3 + 6 + 12 + \ldots$

**Solution:**

Step 1: Identify $a = 3$, $r = \frac{6}{3} = 2$, $n = 8$

Step 2: Apply the sum formula:
$$S_8 = \frac{3(2^8 - 1)}{2 - 1} = \frac{3(256 - 1)}{1} = 3 \times 255 = 765$$

**Answer:** $S_8 = 765$

### Example 3: Matrix Operations

**Problem:** Find the inverse of $A = \begin{pmatrix} 3 & 1 \\ 5 & 2 \end{pmatrix}$.

**Solution:**

Step 1: Calculate the determinant:
$$\det(A) = (3)(2) - (1)(5) = 6 - 5 = 1$$

Step 2: Apply the inverse formula:
$$A^{-1} = \frac{1}{1} \begin{pmatrix} 2 & -1 \\ -5 & 3 \end{pmatrix} = \begin{pmatrix} 2 & -1 \\ -5 & 3 \end{pmatrix}$$

Step 3: Verify: $AA^{-1} = \begin{pmatrix} 3 & 1 \\ 5 & 2 \end{pmatrix} \begin{pmatrix} 2 & -1 \\ -5 & 3 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$

**Answer:** $A^{-1} = \begin{pmatrix} 2 & -1 \\ -5 & 3 \end{pmatrix}$

## Exam Tips

1. Always check the discriminant before solving quadratics
2. For geometric series, verify $|r| < 1$ before using the infinite sum formula
3. Matrix multiplication is not commutative: $AB \neq BA$ in general
4. When finding matrix inverses, always verify your answer

## Practice Problems

1. Solve $x^2 - 5x + 6 = 0$ using the quadratic formula
2. Find the sum of the first 10 terms of $5 + 15 + 45 + \ldots$
3. Find the inverse of $\begin{pmatrix} 2 & 3 \\ 1 & 4 \end{pmatrix}$
