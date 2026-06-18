---
title: Further Algebra
description: ""t have $\gamma\delta$ directly, $b = -13 + \gamma\delta$.

$a = 2$ and $b$ depends on $\gamma\delta$ (which requires further information to determine).

</details>

<hr />

**Problem 8.** Prove by induction that $\displaystyle\sum_{r=1}^{n} r(r+1) = \frac{n(n+1)(n+2)}{3}$
For all $n \in \mathbb{Z}^+$.

<details>
<summary>Hint</summary>

Base case: $n = 1$. Inductive step: assume for $n = k$ and add the $(k+1)$-th term.

</details>

<details>
<summary>Answer</summary>

_Base case ($n = 1$):_ $1 \times 2 = 2 = \dfrac◆LB◆1 \times 2 \times 3◆RB◆◆LB◆3◆RB◆ = 2$. ✓

_Inductive step._ Assume $\displaystyle\sum_{r=1}^{k} r(r+1) = \frac{k(k+1)(k+2)}{3}$. Then:

$$\sum_{r=1}^{k+1} r(r+1) = \frac{k(k+1)(k+2)}{3} + (k+1)(k+2)$$

$$= \frac{(k+1)(k+2)[k + 3]}{3} = \frac{(k+1)(k+2)(k+3)}{3}$$

✓ $\square$

</details>

<hr />

**Problem 9.** Express $\dfrac{x^2 + 3x + 2}{(x^2 + 2x + 3)^2}$ in partial fractions.

<details>
<summary>Hint</summary>

Use the form $\dfrac{Ax + B}{x^2 + 2x + 3} + \dfrac{Cx + D}{(x^2 + 2x + 3)^2}$.

</details>

<details>
<summary>Answer</summary>

$$x^2 + 3x + 2 = (Ax + B)(x^2 + 2x + 3) + Cx + D$$

$$= Ax^3 + (2A + B)x^2 + (3A + 2B + C)x + (3B + D)$$

Comparing coefficients:

- $x^3$: $A = 0$
- $x^2$: $B = 1$
- $x^1$: $2 + C = 3 \implies C = 1$
- $x^0$: $3 + D = 2 \implies D = -1$

$$\frac{x^2 + 3x + 2}{(x^2 + 2x + 3)^2} = \frac{1}{x^2 + 2x + 3} + \frac{x - 1}{(x^2 + 2x + 3)^2}$$

</details>

<hr />

**Problem 10.** The cubic equation $x^3 + px^2 + qx + r = 0$ has roots $\alpha, \beta, \gamma$ where
$\beta = 2\alpha$ and $\gamma = 3\alpha$. Express $p$, $q$And $r$ in terms of $\alpha$And hence Find
the roots when $p = -6$.

<details>
<summary>Hint</summary>

Substitute the root relationships into $\alpha + \beta + \gamma = -p$
$\alpha\beta + \alpha\gamma + \beta\gamma = q$And $\alpha\beta\gamma = -r$.

</details>

<details>
<summary>Answer</summary>

$\alpha + 2\alpha + 3\alpha = 6\alpha = -p$So $p = -6\alpha$.

$\alpha(2\alpha) + \alpha(3\alpha) + (2\alpha)(3\alpha) = 2\alpha^2 + 3\alpha^2 + 6\alpha^2 = 11\alpha^2 = q$.

$\alpha(2\alpha)(3\alpha) = 6\alpha^3 = -r$So $r = -6\alpha^3$.

When $p = -6$: $-6\alpha = -6 \implies \alpha = 1$.

Then $q = 11$, $r = -6$And the roots are $1, 2, 3$.

Verification: $(x-1)(x-2)(x-3) = x^3 - 6x^2 + 11x - 6$. ✓

</details>


---

## 8. Advanced Worked Examples

### Example 8.1: Using the binomial theorem with negative and fractional indices

**Problem.** Find the coefficient of $x^4$ in the expansion of $(1 - 2x)^{-1/2}$ up to and including
The term in $x^4$.

**Solution.** Using the general binomial expansion for $|x| < \dfrac{1}{2}$:

$$(1+y)^n = 1 + ny + \frac{n(n-1)}{2!}y^2 + \frac{n(n-1)(n-2)}{3!}y^3 + \frac{n(n-1)(n-2)(n-3)}{4!}y^4 + \cdots$$

With $n = -\dfrac{1}{2}$ and $y = -2x$:

$$(1-2x)^{-1/2} = 1 + \left(-\frac{1}{2}\right)(-2x) + \frac◆LB◆\left(-\frac{1}{2}\right)\left(-\frac{3}{2}\right)◆RB◆◆LB◆2◆RB◆(-2x)^2 + \cdots$$

$$= 1 + x + \frac{3}{8}(4x^2) + \cdots = 1 + x + \frac{3}{2}x^2 + \cdots$$

The $x^4$ coefficient:
$\dfrac◆LB◆\left(-\frac{1}{2}\right)\left(-\frac{3}{2}\right)\left(-\frac{5}{2}\right)\left(-\frac{7}{2}\right)◆RB◆◆LB◆24◆RB◆(16) = \dfrac{105}{16} \cdot \dfrac{16}{24} = \dfrac{105}{24} = \boxed{\dfrac{35}{8}}$.

### Example 8.2: Roots of a cubic with a substitution

**Problem.** The cubic equation $x^3 - 3x^2 + 4 = 0$ has roots $\alpha, \beta, \gamma$. Find the
Value of $\alpha^2 + \beta^2 + \gamma^2$.

**Solution.** By Vieta's formulae: $\alpha + \beta + \gamma = 3$ and
$\alpha\beta + \beta\gamma + \gamma\alpha = 0$.

$$\alpha^2 + \beta^2 + \gamma^2 = (\alpha+\beta+\gamma)^2 - 2(\alpha\beta+\beta\gamma+\gamma\alpha) = 9 - 0 = \boxed{9}$$

### Example 8.3: Telescoping series via partial fractions

**Problem.** Find $\displaystyle\sum_{r=1}^{n} \frac{1}{r(r+1)}$ and deduce
$\displaystyle\sum_{r=1}^{\infty} \frac{1}{r(r+1)}$.

**Solution.** $\dfrac{1}{r(r+1)} = \dfrac{1}{r} - \dfrac{1}{r+1}$.

$$\sum_{r=1}^{n} \frac{1}{r(r+1)} = \left(1 - \frac{1}{2}\right) + \left(\frac{1}{2} - \frac{1}{3}\right) + \cdots + \left(\frac{1}{n} - \frac{1}{n+1}\right) = 1 - \frac{1}{n+1} = \frac{n}{n+1}$$

As $n \to \infty$: $\displaystyle\sum_{r=1}^{\infty} \frac{1}{r(r+1)} = \boxed{1}$.

### Example 8.4: Proof by induction on a binomial coefficient identity

**Problem.** Prove by induction that $\displaystyle\sum_{r=1}^{n} r^2 = \frac{n(n+1)(2n+1)}{6}$.

**Solution.** **Base case** ($n=1$): LHS $= 1$RHS $= \dfrac◆LB◆1 \cdot 2 \cdot 3◆RB◆◆LB◆6◆RB◆ = 1$.
✓

**Inductive hypothesis:** Assume $\displaystyle\sum_{r=1}^{k} r^2 = \frac{k(k+1)(2k+1)}{6}$.

**Inductive step:** $\displaystyle\sum_{r=1}^{k+1} r^2 = \frac{k(k+1)(2k+1)}{6} + (k+1)^2$

$$= \frac{k(k+1)(2k+1) + 6(k+1)^2}{6} = \frac{(k+1)[k(2k+1) + 6(k+1)]}{6}$$

$$= \frac{(k+1)(2k^2 + k + 6k + 6)}{6} = \frac{(k+1)(2k^2 + 7k + 6)}{6} = \frac{(k+1)(k+2)(2k+3)}{6}$$

This is the required form with $n = k+1$. $\blacksquare$

### Example 8.5: Method of differences with rational expressions

**Problem.** Find $\displaystyle\sum_{r=1}^{n} \frac{1}{(2r-1)(2r+1)}$.

**Solution.**
$\dfrac{1}{(2r-1)(2r+1)} = \dfrac{1}{2}\!\left(\dfrac{1}{2r-1} - \dfrac{1}{2r+1}\right)$.

$$\sum_{r=1}^{n} \frac{1}{(2r-1)(2r+1)} = \frac{1}{2}\left[\left(\frac{1}{1} - \frac{1}{3}\right) + \left(\frac{1}{3} - \frac{1}{5}\right) + \cdots + \left(\frac{1}{2n-1} - \frac{1}{2n+1}\right)\right]$$

$$= \frac{1}{2}\left(1 - \frac{1}{2n+1}\right) = \boxed{\frac{n}{2n+1}}$$

### Example 8.6: Manipulating series with a given recurrence

**Problem.** Given $u_1 = 1$ and $u_{n+1} = \dfrac{u_n}{u_n + 1}$Find
$\displaystyle\sum_{r=1}^{n} u_r$.

**Solution.** Write $u_r$ in closed form. From the recurrence:
$\dfrac{1}{u_{n+1}} = \dfrac{u_n + 1}{u_n} = 1 + \dfrac{1}{u_n}$.

Let $v_n = \dfrac{1}{u_n}$. Then $v_{n+1} = 1 + v_n$So $v_n = v_1 + (n-1)$.

Since $v_1 = \dfrac{1}{u_1} = 1$: $v_n = n$So $u_n = \dfrac{1}{n}$.

$$\sum_{r=1}^{n} u_r = \sum_{r=1}^{n} \frac{1}{r} = H_n$$

The $n$-th harmonic number. No simpler closed form exists.

### Example 8.7: Simultaneous equations via matrices

**Problem.** Solve the system $x + 2y - z = 3$$2x - y + z = 4$$3x + y + 2z = 7$.

**Solution.** In matrix form $\mathbf{M}\mathbf{x} = \mathbf{b}$:

$$\mathbf{M} = \begin{pmatrix}1&2&-1\\2&-1&1\\3&1&2\end{pmatrix}$$

$\det(\mathbf{M}) = 1(2-1) - 2(4-3) + (-1)(2+3) = 1 - 2 - 5 = -6 \neq 0$So the system has a unique
Solution.

Using Cramer's rule:
$x = \dfrac◆LB◆\det\begin{pmatrix}3&2&-1\\4&-1&1\\7&1&2\end{pmatrix}◆RB◆◆LB◆-6◆RB◆ = \dfrac{-6+16-11}{-6} = \dfrac{-1}{-6} = \dfrac{1}{6}$.

Similarly: $y = \dfrac{5}{3}$ and $z = \dfrac{1}{6}$.

---

## 9. Common Pitfalls

| Pitfall                                                                                         | Correct Approach                                                                                                     |
| ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Forgetting the condition $\|x\| < 1$ for binomial expansions                                    | Always state the convergence condition explicitly                                                                    |
| Confusing $\displaystyle\sum_{r=1}^{n} r^3$ with $\left(\displaystyle\sum_{r=1}^{n} r\right)^3$ | $\sum r^3 = \dfrac{n^2(n+1)^2}{4}$; they happen to be equal but the reasoning is different                           |
| Splitting partial fractions incorrectly for method of differences                               | Always check by recombining: $\dfrac{A}{r} + \dfrac{B}{r+1} = \dfrac{A(r+1) + Br}{r(r+1)}$                           |
| Assuming Vieta's formulae give $\alpha\beta\gamma = -d/a$ without checking the sign             | For $ax^3+bx^2+cx+d=0$: $\alpha+\beta+\gamma=-b/a$$\alpha\beta+\beta\gamma+\gamma\alpha=c/a$$\alpha\beta\gamma=-d/a$ |
| Skipping the base case in induction proofs                                                      | The base case is essential — without it the induction chain is unanchored                                            |

---

## 10. Additional Exam-Style Questions

### Question 8

The binomial expansion of $(1 + ax)^{-2}$In ascending powers of $x$ up to and including the term In
$x^3$Is $1 - 4x + 12x^2 + bx^3$. Find the values of $a$ and $b$.

<details>
<summary>Solution</summary>

$(1+ax)^{-2} = 1 + (-2)(ax) + \dfrac{(-2)(-3)}{2}(ax)^2 + \dfrac{(-2)(-3)(-4)}{6}(ax)^3 + \cdots$

$= 1 - 2ax + 3a^2x^2 - 4a^3x^3 + \cdots$

Comparing: $-2a = -4 \implies a = 2$. Then $b = -4(8) = -32$.

$\boxed{a = 2, \; b = -32}$

</details>

### Question 9

**Prove by induction** that $7^n - 1$ is divisible by $6$ for all positive integers $n$.

<details>
<summary>Solution</summary>

**Base case** ($n=1$): $7^1 - 1 = 6$Divisible by 6. ✓

**Inductive hypothesis:** $7^k - 1 = 6m$ for some integer $m$.

**Inductive step:** $7^{k+1} - 1 = 7 \cdot 7^k - 1 = 7(6m + 1) - 1 = 42m + 6 = 6(7m + 1)$.

This is divisible by 6. $\blacksquare$

</details>

### Question 10

Find $\displaystyle\sum_{r=1}^{n} \frac{2}{r(r+2)}$.

<details>
<summary>Solution</summary>

$\dfrac{2}{r(r+2)} = \dfrac{1}{r} - \dfrac{1}{r+2}$.

$$\sum_{r=1}^{n} \frac{2}{r(r+2)} = \left(1 - \frac{1}{3}\right) + \left(\frac{1}{2} - \frac{1}{4}\right) + \left(\frac{1}{3} - \frac{1}{5}\right) + \cdots + \left(\frac{1}{n} - \frac{1}{n+2}\right)$$

Terms $\dfrac{1}{3}$ to $\dfrac{1}{n}$ cancel, leaving:

$$= 1 + \frac{1}{2} - \frac{1}{n+1} - \frac{1}{n+2} = \frac{3}{2} - \frac{2n+3}{(n+1)(n+2)} = \frac{3(n+1)(n+2) - 2(2n+3)}{2(n+1)(n+2)}$$

$$= \frac{3n^2 + 9n + 6 - 4n - 6}{2(n+1)(n+2)} = \boxed{\frac{3n^2 + 5n}{2(n+1)(n+2)}}$$

</details>

### Question 11

The equation $x^3 + px^2 + qx + r = 0$ has roots $\alpha, 2\alpha, 3\alpha$. Find $p:q:r$.

<details>
<summary>Solution</summary>

$\alpha + 2\alpha + 3\alpha = -p \implies p = -6\alpha$.

$\alpha(2\alpha) + 2\alpha(3\alpha) + 3\alpha(\alpha) = q \implies 2\alpha^2 + 6\alpha^2 + 3\alpha^2 = 11\alpha^2 = q$.

$\alpha(2\alpha)(3\alpha) = -r \implies 6\alpha^3 = -r$.

$p:q:r = -6\alpha : 11\alpha^2 : -6\alpha^3 = -6 : 11\alpha : -6\alpha^2$.

For specific values, if $\alpha = 1$: $p:q:r = -6:11:-6$Giving
$(x-1)(x-2)(x-3) = x^3 - 6x^2 + 11x - 6$.

</details>

### Question 12

Use the Maclaurin expansion of $(1+x)^{1/2}$ to find $\sqrt{1.02}$ correct to 6 decimal places.

<details>
<summary>Solution</summary>

$(1+x)^{1/2} = 1 + \dfrac{1}{2}x - \dfrac{1}{8}x^2 + \dfrac{1}{16}x^3 - \dfrac{5}{128}x^4 + \cdots$

With $x = 0.02$:

$\sqrt{1.02} = 1 + 0.01 - \dfrac{0.0004}{8} + \dfrac{0.000008}{16} - \dfrac{5(0.02)^4}{128} + \cdots$

$= 1 + 0.01 - 0.00005 + 0.0000005 - 0.000000005 + \cdots = 1.009950495...$

$\boxed{\sqrt{1.02} \approx 1.009950}$

</details>

---

## 11. Connections to Other Topics

### 11.1 Further algebra and complex numbers

The roots of unity and De Moivre's theorem connect algebra to complex numbers. See
[Complex Numbers](/docs/alevel/further-maths/pure-mathematics/further-complex-numbers).

### 11.2 Algebra and matrices

Vieta's formulae are closely related to the characteristic equation of a matrix: the sum of
Eigenvalues equals the trace, and the product equals the determinant. See
[Matrices](/docs/alevel/further-maths/pure-mathematics/further-matrices).

### 11.3 Series and calculus

The binomial expansion and Maclaurin series are both infinite series representations of functions,
Used extensively in integration and differentiation. See
[Maclaurin and Taylor Series](/docs/alevel/further-maths/pure-mathematics/maclaurin-taylor-series).

---

## 12. Key Formulae Summary

| Topic                 | Key Formula                                                                                  |
| --------------------- | -------------------------------------------------------------------------------------------- |
| General binomial      | $(1+x)^n = \displaystyle\sum_{k=0}^{\infty} \binom{n}{k}x^k$ for $\|x\| < 1$                 |
| Method of differences | Decompose $\dfrac{P(r)}{Q(r)}$ into partial fractions that telescope                         |
| Induction             | Base case $\to$ assume $P(k)$ $\to$ prove $P(k+1)$                                           |
| Vieta's (cubic)       | $\alpha+\beta+\gamma=-b/a$$\alpha\beta+\beta\gamma+\gamma\alpha=c/a$$\alpha\beta\gamma=-d/a$ |
| Sum of squares        | $\displaystyle\sum_{r=1}^{n} r^2 = \dfrac{n(n+1)(2n+1)}{6}$                                  |
| Sum of cubes          | $\displaystyle\sum_{r=1}^{n} r^3 = \dfrac{n^2(n+1)^2}{4}$                                    |
| Harmonic sum          | $H_n = \displaystyle\sum_{r=1}^{n} \dfrac{1}{r} \approx \ln n + \gamma$                      |

---

## 13. Further Exam-Style Questions

### Question 13

**Prove by induction** that $3^n > n^3$ for all integers $n \geq 4$.

<details>
<summary>Solution</summary>

**Base case** ($n=4$): $3^4 = 81 > 64 = 4^3$. ✓

**Inductive hypothesis:** $3^k > k^3$ for $k \geq 4$.

**Inductive step:** $3^{k+1} = 3 \cdot 3^k > 3k^3$.

We need $3k^3 > (k+1)^3 = k^3 + 3k^2 + 3k + 1$.

$2k^3 - 3k^2 - 3k - 1 > 0$ for $k \geq 4$.

At $k=4$: $128-48-12-1 = 67 > 0$. ✓

For $k > 4$: $2k^3$ grows faster than $3k^2 + 3k + 1$So the inequality holds. $\blacksquare$

</details>

### Question 14

Find the coefficient of $x^3$ in the expansion of $\dfrac{1}{(1-2x)(1+x)}$.

<details>
<summary>Solution</summary>

Partial fractions: $\dfrac{1}{(1-2x)(1+x)} = \dfrac{A}{1-2x} + \dfrac{B}{1+x}$.

$1 = A(1+x) + B(1-2x)$. $x=-1$: $1 = 3A \implies A = 1/3$. $x=1/2$:
$1 = \dfrac{3B}{2} \implies B = 2/3$.

$\dfrac{1}{3}\sum (2x)^n + \dfrac{2}{3}\sum (-x)^n$.

$x^3$ coefficient: $\dfrac{1}{3} \cdot 8 + \dfrac{2}{3}(-1) = \dfrac{8-2}{3} = \boxed{2}$.

</details>

### Question 15

The roots of $x^3 + px + q = 0$ are $\alpha, \beta, \gamma$. Express $\alpha^3 + \beta^3 + \gamma^3$
In terms of $p$ and $q$.

<details>
<summary>Solution</summary>

Since $\alpha$ is a root: $\alpha^3 = -p\alpha - q$. Similarly for $\beta, \gamma$.

$\alpha^3 + \beta^3 + \gamma^3 = -p(\alpha+\beta+\gamma) - 3q$.

For $x^3 + px + q = 0$ (no $x^2$ term): $\alpha+\beta+\gamma = 0$.

$\alpha^3 + \beta^3 + \gamma^3 = \boxed{-3q}$.

</details>

---

## 14. Advanced Topics

### 14.1 The general binomial theorem for any index

For $|x| < 1$ and any real $n$:

$$(1+x)^n = \sum_{k=0}^{\infty} \binom{n}{k}x^k = 1 + nx + \frac{n(n-1)}{2!}x^2 + \frac{n(n-1)(n-2)}{3!}x^3 + \cdots$$

When $n$ is a positive integer, this terminates at $k = n$. Otherwise, it is an infinite series.

### 14.2 Summation by parts (discrete integration by parts)

Analogous to integration by parts:

$$\sum_{r=a}^{b} u_r \Delta v_r = [u_r v_r]_a^{b+1} - \sum_{r=a}^{b} (\Delta u_r) v_{r+1}$$

Where $\Delta f(r) = f(r+1) - f(r)$ is the forward difference operator.

### 14.3 Generating functions

A generating function for a sequence $\{a_n\}$ is $G(x) = \displaystyle\sum_{n=0}^{\infty} a_n x^n$.

Examples:

- $1, 1, 1, \ldots$: $G(x) = \dfrac{1}{1-x}$
- $1, 2, 3, \ldots$: $G(x) = \dfrac{1}{(1-x)^2}$
- $1, 3, 6, 10, \ldots$ (triangular): $G(x) = \dfrac{1}{(1-x)^3}$

### 14.4 Relationship between binomial coefficients and Pascal's triangle

$\binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k}$ (Pascal's identity).

This is the basis of Pascal's triangle and is proved combinatorially: choosing $k$ objects from $n$
Either includes or excludes a specific object.

---

## 15. Further Exam-Style Questions

### Question 16

Find $\displaystyle\sum_{r=1}^{n} r(r+1)(r+2)$.

<details>
<summary>Solution</summary>

$r(r+1)(r+2) = \dfrac{1}{4}[r(r+1)(r+2)(r+3) - (r-1)r(r+1)(r+2)]$.

This telescopes: $\displaystyle\sum_{r=1}^{n} r(r+1)(r+2) = \dfrac{1}{4}n(n+1)(n+2)(n+3)$.

$\boxed{\displaystyle\sum_{r=1}^{n} r(r+1)(r+2) = \frac{n(n+1)(n+2)(n+3)}{4}}$

</details>

### Question 17

**Prove that** $\binom{2n}{n} = \displaystyle\sum_{k=0}^{n} \binom{n}{k}^2$.

<details>
<summary>Solution</summary>

Consider choosing $n$ people from a group of $n$ men and $n$ women.

LHS: $\binom{2n}{n}$ chooses any $n$ from $2n$.

RHS: choosing $k$ men and $n-k$ women for each $k$ gives
$\displaystyle\sum_{k=0}^{n} \binom{n}{k}\binom{n}{n-k} = \sum_{k=0}^{n} \binom{n}{k}^2$.

Since $\binom{n}{n-k} = \binom{n}{k}$The identity follows. $\blacksquare$

</details>

### Question 18

**Prove by induction** that
$\displaystyle\sum_{r=1}^{n} \frac{1}{r(r+1)(r+2)} = \frac{n(n+3)}{4(n+1)(n+2)}$.

<details>
<summary>Solution</summary>

$\dfrac{1}{r(r+1)(r+2)} = \dfrac{1}{2}\!\left(\dfrac{1}{r(r+1)} - \dfrac{1}{(r+1)(r+2)}\right)$.

This telescopes:
$\dfrac{1}{2}\!\left(\dfrac{1}{2} - \dfrac{1}{(n+1)(n+2)}\right) = \dfrac{(n+1)(n+2)-2}{4(n+1)(n+2)} = \dfrac{n^2+3n}{4(n+1)(n+2)} = \dfrac{n(n+3)}{4(n+1)(n+2)}$.
$\blacksquare$

</details>

