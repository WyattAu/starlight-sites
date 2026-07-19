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

### Example 4: Logarithmic Equations

**Problem:** Solve $\log_2(x + 3) + \log_2(x - 1) = 5$.

**Solution:**

Step 1: Determine the domain. Both arguments must be positive:
$$x + 3 > 0 \implies x > -3$$
$$x - 1 > 0 \implies x > 1$$

Step 2: Combine logarithms:
$$\log_2[(x+3)(x-1)] = 5$$

Step 3: Convert to exponential form:
$$(x+3)(x-1) = 2^5 = 32$$

Step 4: Expand and solve:
$$x^2 + 2x - 3 = 32$$
$$x^2 + 2x - 35 = 0$$
$$(x+7)(x-5) = 0$$
$$x = -7 \quad \text{or} \quad x = 5$$

Step 5: Check domain: $x = -7$ fails $x > 1$, so reject. $x = 5$ satisfies $x > 1$.

**Answer:** $x = 5$

**Common mistake:** Forgetting to check the domain. Always verify that the solution satisfies the original logarithmic constraints.

### Example 5: Arithmetic and Geometric Sequences Combined

**Problem:** The first term of an arithmetic sequence is 5 and the common difference is 3. Find the sum of the first 20 terms.

**Solution:**

Step 1: Use the arithmetic series formula:
$$S_n = \frac{n}{2}[2a + (n-1)d]$$

Step 2: Substitute $n = 20$, $a = 5$, $d = 3$:
$$S_{20} = \frac{20}{2}[2(5) + 19(3)] = 10[10 + 57] = 10 \times 67 = 670$$

**Answer:** $S_{20} = 670$

**Common mistake:** Using the wrong formula. For arithmetic series, $S_n = \frac{n}{2}(2a + (n-1)d)$ or equivalently $S_n = \frac{n}{2}(a + l)$ where $l$ is the last term.

### Example 6: Matrix Determinant Properties

**Problem:** If $A$ is a $3 \times 3$ matrix with $\det(A) = 5$, find $\det(2A)$ and $\det(A^{-1})$.

**Solution:**

Step 1: For a scalar multiple of an $n \times n$ matrix:
$$\det(kA) = k^n \det(A)$$

Step 2: For $n = 3$ and $k = 2$:
$$\det(2A) = 2^3 \times 5 = 8 \times 5 = 40$$

Step 3: For the inverse:
$$\det(A^{-1}) = \frac{1}{\det(A)} = \frac{1}{5} = 0.2$$

**Answer:** $\det(2A) = 40$, $\det(A^{-1}) = 0.2$

**Common mistake:** Writing $\det(2A) = 2\det(A)$. For an $n \times n$ matrix, $\det(kA) = k^n \det(A)$ because each of the $n$ rows is multiplied by $k$.

## More Worked Examples

### Example 7: Quadratic Inequalities

**Problem:** Solve $x^2 - 5x + 6 < 0$.

**Solution:**

Step 1: Factor the quadratic:
$$x^2 - 5x + 6 = (x - 2)(x - 3)$$

Step 2: Find the roots: $x = 2$ and $x = 3$

Step 3: Since the coefficient of $x^2$ is positive, the parabola opens upward. The quadratic is negative between the roots.

Step 4: Solution: $2 < x < 3$

**Answer:** $x \in (2, 3)$

**Common mistake:** Forgetting that the inequality sign determines whether the solution is between or outside the roots. For $ax^2 + bx + c < 0$ with $a > 0$, the solution is between the roots.

### Example 8: Sum of an Infinite Geometric Series

**Problem:** Find the sum of the infinite series $1 + \frac{1}{3} + \frac{1}{9} + \frac{1}{27} + \ldots$

**Solution:**

Step 1: Identify $a = 1$, $r = \frac{1}{3}$

Step 2: Check $|r| < 1$: $\left|\frac{1}{3}\right| = \frac{1}{3} < 1$ (converges)

Step 3: Apply the infinite sum formula:
$$S_\infty = \frac{a}{1 - r} = \frac{1}{1 - \frac{1}{3}} = \frac{1}{\frac{2}{3}} = \frac{3}{2}$$

**Answer:** $S_\infty = \frac{3}{2}$

**Common mistake:** Using the formula when $|r| \geq 1$. The infinite geometric series only converges when $|r| < 1$.

### Example 9: Matrix Equation

**Problem:** Solve for $X$ if $\begin{pmatrix} 2 & 1 \\ 5 & 3 \end{pmatrix} X = \begin{pmatrix} 7 & 4 \\ 17 & 10 \end{pmatrix}$.

**Solution:**

Step 1: Let $A = \begin{pmatrix} 2 & 1 \\ 5 & 3 \end{pmatrix}$. We need $X = A^{-1} B$.

Step 2: Find $A^{-1}$:
$$\det(A) = 2 \times 3 - 1 \times 5 = 1$$
$$A^{-1} = \begin{pmatrix} 3 & -1 \\ -5 & 2 \end{pmatrix}$$

Step 3: Multiply:
$$X = \begin{pmatrix} 3 & -1 \\ -5 & 2 \end{pmatrix} \begin{pmatrix} 7 & 4 \\ 17 & 10 \end{pmatrix} = \begin{pmatrix} 21 - 17 & 12 - 10 \\ -35 + 34 & -20 + 20 \end{pmatrix} = \begin{pmatrix} 4 & 2 \\ -1 & 0 \end{pmatrix}$$

Step 4: Verify: $AX = \begin{pmatrix} 2 & 1 \\ 5 & 3 \end{pmatrix} \begin{pmatrix} 4 & 2 \\ -1 & 0 \end{pmatrix} = \begin{pmatrix} 7 & 4 \\ 17 & 10 \end{pmatrix}$ (correct)

**Answer:** $X = \begin{pmatrix} 4 & 2 \\ -1 & 0 \end{pmatrix}$

**Common mistake:** For matrix equations $AX = B$, multiply both sides by $A^{-1}$ on the left: $X = A^{-1}B$, not $X = BA^{-1}$. Matrix multiplication is not commutative.

### Example 10: Solving Quadratic Inequalities

**Problem:** Solve the inequality $2x^2 - 5x - 3 < 0$.

**Solution:**

Step 1: Factor the quadratic:
$$2x^2 - 5x - 3 = (2x + 1)(x - 3)$$

Step 2: Find the roots: $x = -\frac{1}{2}$ and $x = 3$

Step 3: Since the coefficient of $x^2$ is positive ($2 > 0$), the parabola opens upward. The quadratic is negative between the roots.

Step 4: Solution: $-\frac{1}{2} < x < 3$

**Answer:** $x \in \left(-\frac{1}{2}, 3\right)$

**Common mistake:** Forgetting that the inequality sign determines whether the solution is between or outside the roots. For $ax^2 + bx + c < 0$ with $a > 0$, the solution is between the roots. For $ax^2 + bx + c > 0$ with $a > 0$, the solution is outside the roots.

### Example 11: Logarithmic Equations with Different Bases

**Problem:** Solve $9^x - 4 \cdot 3^x + 3 = 0$.

**Solution:**

Step 1: Let $u = 3^x$ (note $u > 0$). Then $9^x = (3^2)^x = (3^x)^2 = u^2$.

Step 2: Substitute:
$$u^2 - 4u + 3 = 0$$

Step 3: Factor:
$$(u - 1)(u - 3) = 0$$

Step 4: $u = 1$ or $u = 3$

Step 5: Back-substitute:
- $3^x = 1 \implies x = 0$
- $3^x = 3 \implies x = 1$

Step 6: Both solutions are valid (both satisfy $u > 0$).

**Answer:** $x = 0$ or $x = 1$

**Common mistake:** Forgetting to check that the solutions satisfy the original domain constraints. Always substitute back to verify.

### Example 12: Matrix Eigenvalues (Extension)

**Problem:** Find the eigenvalues of $A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}$.

**Solution:**

Step 1: Set up the characteristic equation $\det(A - \lambda I) = 0$:
$$\det \begin{pmatrix} 4 - \lambda & 1 \\ 2 & 3 - \lambda \end{pmatrix} = 0$$

Step 2: Compute the determinant:
$$(4 - \lambda)(3 - \lambda) - (1)(2) = 0$$
$$12 - 7\lambda + \lambda^2 - 2 = 0$$
$$\lambda^2 - 7\lambda + 10 = 0$$

Step 3: Factor:
$$(\lambda - 5)(\lambda - 2) = 0$$

Step 4: Eigenvalues: $\lambda_1 = 5$ and $\lambda_2 = 2$

**Answer:** The eigenvalues are $\lambda = 5$ and $\lambda = 2$

**Common mistake:** The characteristic equation is $\det(A - \lambda I) = 0$, not $\det(A) - \lambda = 0$. The eigenvalues are the roots of the characteristic polynomial.

## Additional Exam Tips

5. For logarithmic equations, always check the domain after solving
6. When solving matrix equations, always verify your answer by multiplying back
7. The sum of an arithmetic series can also be written as $S_n = \frac{n}{2}(a + l)$ where $l$ is the last term
8. For geometric series with $|r| > 1$, the series diverges (no finite sum)
