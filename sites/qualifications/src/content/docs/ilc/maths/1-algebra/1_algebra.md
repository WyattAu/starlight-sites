---
title: Algebra
description: ""s Theorem (HL)

For $z = r(\cos\theta + i\sin\theta)$ and $n \in \mathbb{Z}$:

$$
Z^n = r^n(\cos n\theta + i\sin n\theta)
$$

**Proof by induction for positive integers.** Base case $n = 1$: trivial. Inductive step: assume
True for $n = k$. Then
$z^{k+1} = z^k \cdot z = r^k(\cos k\theta + i\sin k\theta) \cdot r(\cos\theta + i\sin\theta)$.
Expanding using addition formulae gives $r^{k+1}(\cos(k+1)\theta + i\sin(k+1)\theta)$.

**Example:** Express $(\sqrt{3} + i)^4$ in the form $a + bi$.

First find modulus and argument: $r = 2$, $\theta = \frac{\pi}{6}$.

$$
(\sqrt{3} + i)^4 = 2^4\left(\cos\frac{4\pi}{6} + i\sin\frac{4\pi}{6}\right) = 16\left(\cos\frac{2\pi}{3} + i\sin\frac{2\pi}{3}\right) = 16\left(-\frac{1}{2} + i\frac{\sqrt{3}}{2}\right) = -8 + 8\sqrt{3}\,i
$$

**Example (HL):** Express $z = 1 - i\sqrt{3}$ in polar form and hence find $z^5$.

$r = \sqrt{1 + 3} = 2$. Since $a = 1 > 0$ and $b = -\sqrt{3} < 0$The point is in the fourth
Quadrant.

$$
\theta = -\frac{\pi}{3}, \quad z = 2e^{-\pi i/3}
$$

$$
Z^5 = 2^5 e^{-5\pi i/3} = 32\left(\cos\frac{-5\pi}{3} + i\sin\frac{-5\pi}{3}\right) = 32\left(\frac{1}{2} - i\frac{\sqrt{3}}{2}\right) = 16 - 16\sqrt{3}\,i
$$

### Roots of Unity (HL)

The $n$Th roots of unity are the solutions to $z^n = 1$.

$$
Z_k = \cos\frac{2k\pi}{n} + i\sin\frac{2k\pi}{n}, \quad k = 0, 1, 2, \ldots, n-1
$$

These lie on the unit circle in the complex plane, equally spaced at angles of $\frac{2\pi}{n}$.

**Properties:**

- The sum of all $n$Th roots of unity is $0$.
- The product of all $n$Th roots of unity is $(-1)^{n-1}$.
- The $n$Th roots of any complex number $w = re^{i\theta}$ are
  $\sqrt[n]{r}\, e^{i(\theta + 2k\pi)/n}$ for $k = 0, 1, \ldots, n-1$.

**Example:** Find the cube roots of unity.

For $z^3 = 1$: $z_k = \cos\frac{2k\pi}{3} + i\sin\frac{2k\pi}{3}$, $k = 0, 1, 2$.

$$
Z_0 = 1, \quad z_1 = -\frac{1}{2} + i\frac{\sqrt{3}}{2}, \quad z_2 = -\frac{1}{2} - i\frac{\sqrt{3}}{2}
$$

Note: $1 + z_1 + z_2 = 0$.

**Example (HL):** Find all complex numbers $z$ such that $z^4 = 16$.

The four fourth roots of $16 = 16e^{0i}$ are:

$$
Z_k = 2\,e^{2k\pi i/4}, \quad k = 0, 1, 2, 3
$$

$$
Z_0 = 2, \quad z_1 = 2i, \quad z_2 = -2, \quad z_3 = -2i
$$

## Matrices (HL)

### Definitions

A matrix $A$ of order $m \times n$ has $m$ rows and $n$ columns.

### Operations

**Addition:** Add corresponding elements (matrices must be the same order).

**Scalar multiplication:** Multiply every element by the scalar.

**Matrix multiplication:** If $A$ is $m \times p$ and $B$ is $p \times n$Then $AB$ is $m \times n$.

The $(i, j)$ entry of $AB$ is:

$$
(AB)_{ij} = \sum_{k=1}^{p} a_{ik}b_{kj}
$$

### Determinant and Inverse of a $2 \times 2$ Matrix

For $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$:

$$
\det(A) = ad - bc
$$

If $\det(A) \neq 0$:

$$
A^{-1} = \frac{1}{ad - bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}
$$

### Determinant of a $3 \times 3$ Matrix (HL)

For $A = \begin{pmatrix} a & b & c \\ d & e & f \\ g & h & k \end{pmatrix}$:

$$
\det(A) = a(ek - fh) - b(dk - fg) + c(dh - eg)
$$

### Solving Systems Using Matrices (HL)

For $AX = B$ where $A$ is invertible:

$$
X = A^{-1}B
$$

**Example:** Solve:

$$
\begin{cases}
2x + y = 5 \\
X - y = 1
\end{cases}
$$

$$
\begin{pmatrix} 2 & 1 \\ 1 & -1 \end{pmatrix}\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 5 \\ 1 \end{pmatrix}
$$

$$
\det(A) = -2 - 1 = -3
$$

$$
A^{-1} = \frac{1}{-3}\begin{pmatrix} -1 & -1 \\ -1 & 2 \end{pmatrix} = \begin{pmatrix} \frac{1}{3} & \frac{1}{3} \\ \frac{1}{3} & -\frac{2}{3} \end{pmatrix}
$$

$$
\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} \frac{1}{3} & \frac{1}{3} \\ \frac{1}{3} & -\frac{2}{3} \end{pmatrix}\begin{pmatrix} 5 \\ 1 \end{pmatrix} = \begin{pmatrix} 2 \\ 1 \end{pmatrix}
$$

## Proof by Induction (HL)

### Method

1. **Base case:** Show the statement holds for $n = 1$ (or the smallest relevant value).
2. **Inductive hypothesis:** Assume the statement holds for $n = k$.
3. **Inductive step:** Show that if it holds for $n = k$It also holds for $n = k + 1$.
4. **Conclusion:** By the principle of mathematical induction, the statement holds for all
   $n \geq 1$.

**Why induction works.** The base case anchors the chain at $n = 1$. The inductive step shows that
If any link in the chain holds, the next one does too. Together, they prove that every link holds.

**Example:** Prove by induction that $\sum_{r=1}^{n} r^2 = \frac{n(n+1)(2n+1)}{6}$.

**Base case** ($n = 1$): LHS $= 1$RHS $= \frac{1 \cdot 2 \cdot 3}{6} = 1$. True.

**Inductive hypothesis:** Assume $\sum_{r=1}^{k} r^2 = \frac{k(k+1)(2k+1)}{6}$.

**Inductive step:**

$$
\sum_{r=1}^{k+1} r^2 = \frac{k(k+1)(2k+1)}{6} + (k+1)^2
$$

$$
= \frac{k(k+1)(2k+1) + 6(k+1)^2}{6}
$$

$$
= \frac{(k+1)[k(2k+1) + 6(k+1)]}{6}
$$

$$
= \frac{(k+1)(2k^2 + 7k + 6)}{6}
$$

$$
= \frac{(k+1)(k+2)(2k+3)}{6}
$$

$$
= \frac{(k+1)((k+1)+1)(2(k+1)+1)}{6}
$$

This matches the formula with $n = k + 1$. By induction, the result holds for all $n \ge 1$.

**Example:** Prove that $\sum_{r=1}^{n} r^3 = \frac{n^2(n+1)^2}{4}$.

**Base case** ($n = 1$): LHS $= 1$RHS $= \frac{1 \cdot 4}{4} = 1$. True.

**Inductive hypothesis:** Assume $\sum_{r=1}^{k} r^3 = \frac{k^2(k+1)^2}{4}$.

**Inductive step:**

$$
\sum_{r=1}^{k+1} r^3 = \frac{k^2(k+1)^2}{4} + (k+1)^3
$$

$$
= \frac{k^2(k+1)^2 + 4(k+1)^3}{4}
$$

$$
= \frac{(k+1)^2[k^2 + 4(k+1)]}{4}
$$

$$
= \frac{(k+1)^2(k^2 + 4k + 4)}{4}
$$

$$
= \frac{(k+1)^2(k+2)^2}{4}
$$

$$
= \frac{(k+1)^2((k+1)+1)^2}{4}
$$

By induction, the result holds for all $n \ge 1$.

## Long Division of Polynomials (HL)

To divide $P(x)$ by $(x - a)$Use either long division or synthetic division. The result gives:

$$
P(x) = (x - a)Q(x) + R
$$

Where $Q(x)$ is the quotient and $R$ is the remainder. By the **Remainder Theorem**, $R = P(a)$.

**Factor Theorem:** $(x - a)$ is a factor of $P(x)$ if and only if $P(a) = 0$.

**Example:** Factorise $x^3 - 3x + 2$.

Try $P(1) = 1 - 3 + 2 = 0$So $(x - 1)$ is a factor.

Dividing: $x^3 - 3x + 2 = (x - 1)(x^2 + x - 2) = (x - 1)(x + 2)(x - 1) = (x - 1)^2(x + 2)$.

**Example (HL):** When $P(x) = x^3 + 2x^2 - 5x - 6$ is divided by $(x - 1)$The remainder is
$P(1) = 1 + 2 - 5 - 6 = -8$.

### Polynomial Inequalities (HL)

**Example:** Solve $(x - 1)^2(x + 2) \gt 0$.

The critical values are $x = -2$ and $x = 1$ (double root).

Sign chart:

| Interval  | $x < -2$ | $-2 < x < 1$ | $x > 1$  |
| --------- | -------- | ------------ | -------- |
| $(x+2)$   | Negative | Positive     | Positive |
| $(x-1)^2$ | Positive | Positive     | Positive |
| Product   | Negative | Positive     | Positive |

Solution: $x < -2$ or $x > 1$I.e., $x \in (-\infty, -2) \cup (1, \infty)$.

Note that $x = -1$ is not a solution (the product equals zero, not positive). And $x = 1$ is not a
Solution despite being a root, because the factor is squared.

## Worked Examples

See the examples integrated throughout the sections above.

## Common Pitfalls

1. **Sign errors** in factorisation and expansion -- always double-check by expanding back.
2. **Forgetting to reverse the inequality** when multiplying/dividing by a negative number.
3. **Confusing the discriminant conditions** for real vs. Complex roots. $\Delta < 0$ means two
   complex conjugate roots, not "no roots."
4. **De Moivre's theorem** requires the argument to be in radians.
5. **Matrix multiplication is not commutative:** $AB \neq BA$ .
6. **Induction base case** -- always state and verify it explicitly. A proof without a base case is
   like a chain with no anchor.
7. **Domain restrictions on logarithms** -- $\log_a(x)$ is only defined for $x > 0$.
8. **Forgetting absolute values** in the quadratic formula when $\Delta < 0$:
   $x = \frac{-b \pm i\sqrt{|\Delta|}}{2a}$.
9. **Confusing the argument quadrant.** For $z = -1 + i$ (second quadrant),
   $\arg(z) = \frac{3\pi}{4}$Not $\arctan(-1)$.

## Practice Questions

### Ordinary Level

1. Expand $(3x - 2)(2x + 5)$.
2. Factorise $x^2 - 7x + 12$.
3. Solve $4x - 7 = 2x + 9$.
4. Solve $x^2 - 5x + 6 = 0$ by factorisation.
5. Solve $2x^2 + x - 3 = 0$ using the quadratic formula.

### Higher Level

1. Prove by induction that $\sum_{r=1}^{n} r^3 = \frac{n^2(n+1)^2}{4}$.
2. Express $z = 1 - i\sqrt{3}$ in polar form and hence find $z^5$.
3. Find the modulus and argument of $\frac{1 + i}{1 - i}$.
4. Find the values of $k$ for which $kx^2 + 4x + k = 0$ has equal roots.
5. Given $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ and
   $B = \begin{pmatrix} 0 & -1 \\ 2 & 3 \end{pmatrix}$Find $AB - BA$.
6. Find all complex numbers $z$ such that $z^4 = 16$.
7. Solve the inequality $x^2 - 2x - 15 \gt 0$.
8. Factorise $x^4 - 1$ completely.
9. Find the remainder when $P(x) = 2x^3 - 3x^2 + 5x - 7$ is divided by $(x + 2)$.
10. Solve $|3x - 1| \le 8$.
11. Find the modulus and argument of $z = \frac{3 + 4i}{1 - 2i}$.
12. Prove by induction that $3^n \ge 2^n + n$ for all $n \ge 1$.
13. Express $\frac{2x + 1}{(x+1)(x-2)}$ in partial fractions.
14. Solve $z^3 = -27$ and plot all solutions on an Argand diagram.
15. Find the quadratic equation whose roots are $2 + \sqrt{3}$ and $2 - \sqrt{3}$.

### Extended Practice

16. Given $z = 2 + 3i$ and $w = 1 - 4i$Find $z\bar{w}$ and $|z/w|$.
17. Solve the simultaneous equations $x + iy + iz = 0$ and $x - 2y + iz = 1 + i$ for real $x$ and
    $y$.
18. Prove by induction that
    $\frac{1}{1 \times 2} + \frac{1}{2 \times 3} + \cdots + \frac{1}{n(n+1)} = \frac{n}{n+1}$.
19. Find the matrix $A$ such that
    $A\begin{pmatrix} 1 \\ 2 \end{pmatrix} = \begin{pmatrix} 5 \\ 3 \end{pmatrix}$ and
    $A\begin{pmatrix} 3 \\ 1 \end{pmatrix} = \begin{pmatrix} 7 \\ 7 \end{pmatrix}$.
20. Express $\frac{3x^2 - x + 2}{(x-1)(x^2 + 1)}$ in partial fractions.
21. Find all complex numbers $z$ satisfying $|z - 2i| = |z + 2|$ and interpret geometrically.
22. Prove that if a quadratic equation with rational coefficients has one irrational root
    $a + b\sqrt{c}$ (where $b \neq 0$), then $a - b\sqrt{c}$ is also a root.

## Summary

This topic covers the mathematical techniques and concepts related to algebra, including key
theorems, methods, and problem-solving approaches.

**Key concepts include:**

- quadratic equations and the discriminant
- simultaneous equations
- polynomial division and the factor theorem
- partial fractions
- binomial expansion

Regular practice with a variety of question types is essential to build fluency and confidence in
applying these mathematical techniques.

:::
