---
title: "Sequences and Series"
description: ""(0)x + \frac{f''(0)}{2!}x^2 + \frac{f'''(0)}{3!}x^3 + \cdots$$

### Standard Maclaurin Series

| Function           | Maclaurin Series                                                   | Radius of Convergence |
| :----------------- | :----------------------------------------------------------------- | :-------------------- |
| $e^x$              | $\displaystyle\sum_{n=0}^{\infty} \frac{x^n}{n!}$                  | $\infty$              |
| $\sin x$           | $\displaystyle\sum_{n=0}^{\infty} \frac{(-1)^n x^{2n+1}}{(2n+1)!}$ | $\infty$              |
| $\cos x$           | $\displaystyle\sum_{n=0}^{\infty} \frac{(-1)^n x^{2n}}{(2n)!}$     | $\infty$              |
| $\ln(1 + x)$       | $\displaystyle\sum_{n=1}^{\infty} \frac{(-1)^{n+1} x^n}{n}$        | $1$                   |
| $(1 + x)^n$        | $\displaystyle\sum_{k=0}^{\infty} \binom{n}{k}x^k$                 | $1$                   |
| $\dfrac{1}{1 - x}$ | $\displaystyle\sum_{n=0}^{\infty} x^n$                             | $1$                   |
| $\arctan x$        | $\displaystyle\sum_{n=0}^{\infty} \frac{(-1)^n x^{2n+1}}{2n+1}$    | $1$                   |

### Deriving Series

**Example.** Find the Maclaurin series of $e^x$.

$$f(0) = 1, \quad f'(0) = 1, \quad f''(0) = 1, \quad \ldots, \quad f^{(n)}(0) = 1$$

$$e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots = \sum_{n=0}^{\infty} \frac{x^n}{n!}$$

**Example.** Find the Maclaurin series of $\sin x$.

$$f(0) = 0, \quad f'(0) = 1, \quad f''(0) = 0, \quad f'''(0) = -1, \quad f^{(4)}(0) = 0, \quad \ldots$$

$$\sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} + \cdots = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n+1}}{(2n+1)!}$$

### Maclaurin Series from Known Series

**Example.** Find the Maclaurin series of $x^2 e^x$.

Since $e^x = \displaystyle\sum_{n=0}^{\infty} \frac{x^n}{n!}$Multiplying by $x^2$:

$$x^2 e^x = \sum_{n=0}^{\infty} \frac{x^{n+2}}{n!} = x^2 + x^3 + \frac{x^4}{2!} + \frac{x^5}{3!} + \cdots$$

**Example.** Find the Maclaurin series of $\dfrac{1}{1 + x^2}$.

$$\frac{1}{1 + x^2} = 1 - x^2 + x^4 - x^6 + \cdots = \sum_{n=0}^{\infty} (-1)^n x^{2n}$$

Integrating term by term gives the series for $\arctan x$:

$$\arctan x = x - \frac{x^3}{3} + \frac{x^5}{5} - \frac{x^7}{7} + \cdots$$

---

## Taylor Series

### Definition

The **Taylor series** of $f$ about $x = a$ is:

$$f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!}(x - a)^n$$

This reduces to the Maclaurin series when $a = 0$.

### Taylor Polynomial Approximation

The **$n$-th degree Taylor polynomial** of $f$ about $a$ is:

$$T_n(x) = \sum_{k=0}^{n} \frac{f^{(k)}(a)}{k!}(x - a)^k$$

### Lagrange Remainder

The error in approximating $f(x)$ by $T_n(x)$ is bounded by:

$$|R_n(x)| = \left|f(x) - T_n(x)\right| \le \frac{M|x - a|^{n+1}}{(n+1)!}$$

Where $M$ is an upper bound for $|f^{(n+1)}(t)|$ for all $t$ between $a$ and $x$.

**Example.** Approximate $\sqrt{e}$ using a 3rd degree Maclaurin polynomial and bound the error.

$T_3(x) = 1 + x + \dfrac{x^2}{2} + \dfrac{x^3}{6}$.

$T_3(0.5) = 1 + 0.5 + 0.125 + 0.020833\ldots = 1.64583\ldots$

True value: $e^{0.5} \approx 1.64872$.

For the error bound, $|f^{(4)}(t)| = e^t \le e^{0.5}$ for $0 \le t \le 0.5$:

$$|R_3(0.5)| \le \frac{e^{0.5} \cdot (0.5)^4}{24} \approx \frac{1.649 \cdot 0.0625}{24} \approx 0.0043$$

Actual error: $|1.64872 - 1.64583| \approx 0.0029$Which is within the bound.

---

## Proof by Induction

### Structure

**Mathematical induction** proves a statement $P(n)$ for all integers $n \ge n_0$:

1. **Base case:** Verify $P(n_0)$ is true.
2. **Inductive hypothesis:** Assume $P(k)$ is true for some arbitrary $k \ge n_0$.
3. **Inductive step:** Using the hypothesis, prove $P(k + 1)$ is true.
4. **Conclusion:** By the principle of mathematical induction, $P(n)$ is true for all $n \ge n_0$.

### Summation Proofs

**Example.** Prove that $\displaystyle\sum_{k=1}^{n} k^2 = \frac{n(n+1)(2n+1)}{6}$ for all
$n \in \mathbb{Z}^+$.

**Base case** ($n = 1$): $\dfrac{1 \cdot 2 \cdot 3}{6} = 1$. True.

**Inductive hypothesis:** Assume $\displaystyle\sum_{k=1}^{j} k^2 = \frac{j(j+1)(2j+1)}{6}$ for some
$j \ge 1$.

**Inductive step:**

$$\sum_{k=1}^{j+1} k^2 = \sum_{k=1}^{j} k^2 + (j+1)^2 = \frac{j(j+1)(2j+1)}{6} + (j+1)^2$$

$$= \frac{(j+1)}{6}\bigl[j(2j+1) + 6(j+1)\bigr] = \frac{(j+1)}{6}\bigl[2j^2 + 7j + 6\bigr]$$

$$= \frac{(j+1)(j+2)(2j+3)}{6}$$

This is the formula with $n = j + 1$. Hence $P(j+1)$ is true. By induction, the result holds for All
$n \in \mathbb{Z}^+$.

### Divisibility Proofs

**Example.** Prove that $3^n - 1$ is divisible by $2$ for all $n \in \mathbb{N}$.

**Base case** ($n = 0$): $3^0 - 1 = 0$Which is divisible by $2$. True.

**Inductive hypothesis:** $3^k - 1 = 2m$ for some $m \in \mathbb{Z}$.

**Inductive step:**

$$3^{k+1} - 1 = 3 \cdot 3^k - 1 = 3(2m + 1) - 1 = 6m + 3 - 1 = 6m + 2 = 2(3m + 1)$$

This is divisible by $2$. By induction, the result holds.

### Inequality Proofs

**Example.** Prove that $2^n \gt n$ for all $n \in \mathbb{Z}^+$.

**Base case** ($n = 1$): $2^1 = 2 \gt 1$. True.

**Inductive hypothesis:** $2^k \gt k$ for some $k \ge 1$.

**Inductive step:**

$$2^{k+1} = 2 \cdot 2^k \gt 2k \ge k + 1$$

(The last inequality holds since $k \ge 1$.) Therefore $2^{k+1} \gt k + 1$. By induction,
$2^n \gt n$ For all positive integers $n$.

:::caution Common Pitfall

The inductive step must genuinely use the inductive hypothesis. Proving $P(k+1)$ independently Of
$P(k)$ is not a valid induction argument. Always make it explicit where the hypothesis is used.

---

## Additional Worked Examples

**Worked Example: Convergence of a Series by Ratio Test**

Determine whether $\displaystyle\sum_{n=1}^{\infty} \frac{n!}{10^n}$ converges or diverges.

<details>
<summary>Solution</summary>

Apply the ratio test:

$$L = \lim_{n \to \infty} \frac{(n+1)! / 10^{n+1}}{n! / 10^n} = \lim_{n \to \infty} \frac{(n+1)! \cdot 10^n}{n! \cdot 10^{n+1}} = \lim_{n \to \infty} \frac{n+1}{10} = \infty$$

Since $L \gt 1$The series diverges by the ratio test.

</details>

**Worked Example: Maclaurin Series of a Composite Function**

Find the Maclaurin series of $f(x) = e^{-x^2}$ up to the term in $x^6$And use it to approximate
$\displaystyle\int_0^{0.5} e^{-x^2}\,dx$.

<details>
<summary>Solution</summary>

Substitute $-x^2$ into the Maclaurin series for $e^u$:

$$e^{-x^2} = 1 + (-x^2) + \frac{(-x^2)^2}{2!} + \frac{(-x^2)^3}{3!} + \cdots = 1 - x^2 + \frac{x^4}{2} - \frac{x^6}{6} + \cdots$$

Integrate term by term from $0$ to $0.5$:

$$\int_0^{0.5} e^{-x^2}\,dx \approx \int_0^{0.5} \left(1 - x^2 + \frac{x^4}{2} - \frac{x^6}{6}\right)dx$$

$$= \left[x - \frac{x^3}{3} + \frac{x^5}{10} - \frac{x^7}{42}\right]_0^{0.5}$$

$$= 0.5 - \frac{0.125}{3} + \frac{0.03125}{10} - \frac{0.0078125}{42}$$

$$= 0.5 - 0.041667 + 0.003125 - 0.000186 \approx 0.4613$$

The actual value of the error function at $0.5$ gives approximately $0.4613$Confirming the accuracy
Of this approximation.

</details>

**Worked Example: General Binomial Expansion to Find a Coefficient**

Find the coefficient of $x^4$ in the expansion of $(1 - 2x)^{-3}$.

<details>
<summary>Solution</summary>

$$(1 + x)^n = 1 + nx + \frac{n(n-1)}{2!}x^2 + \frac{n(n-1)(n-2)}{3!}x^3 + \frac{n(n-1)(n-2)(n-3)}{4!}x^4 + \cdots$$

Here $n = -3$ and we substitute $x \to -2x$:

$$(1 - 2x)^{-3} = 1 + (-3)(-2x) + \frac{(-3)(-4)}{2!}(-2x)^2 + \frac{(-3)(-4)(-5)}{3!}(-2x)^3 + \frac{(-3)(-4)(-5)(-6)}{4!}(-2x)^4 + \cdots$$

The $x^4$ coefficient:

$$\frac{(-3)(-4)(-5)(-6)}{24} \cdot (-2)^4 = \frac{360}{24} \cdot 16 = 15 \cdot 16 = 240$$

So the coefficient of $x^4$ is $240$.

</details>

**Worked Example: Induction Proof Involving Summation**

Prove by induction that $\displaystyle\sum_{k=1}^{n} k \cdot 2^{k-1} = (n - 1) \cdot 2^n + 1$ for
all $n \in \mathbb{Z}^+$.

<details>
<summary>Solution</summary>

**Base case** ($n = 1$): LHS $= 1 \cdot 2^0 = 1$. RHS $= (1 - 1) \cdot 2^1 + 1 = 1$. True.

**Inductive hypothesis:** Assume
$\displaystyle\sum_{k=1}^{j} k \cdot 2^{k-1} = (j - 1) \cdot 2^j + 1$ for some $j \ge 1$.

**Inductive step:**

$$\sum_{k=1}^{j+1} k \cdot 2^{k-1} = \sum_{k=1}^{j} k \cdot 2^{k-1} + (j+1) \cdot 2^j$$

$$= (j - 1) \cdot 2^j + 1 + (j+1) \cdot 2^j \quad \mathrm{(by\ hypothesis)}$$

$$= \bigl[(j-1) + (j+1)\bigr] 2^j + 1 = 2j \cdot 2^j + 1 = j \cdot 2^{j+1} + 1$$

$$= (j + 1 - 1) \cdot 2^{j+1} + 1$$

This is the formula with $n = j + 1$. By induction, the result holds for all $n \in \mathbb{Z}^+$.

</details>

**Worked Example: Taylor Series Error Bound**

Use a second degree Taylor polynomial of $\ln(1 + x)$ about $x = 0$ to approximate $\ln(1.2)$. Bound
The error.

<details>
<summary>Solution</summary>

$$f(x) = \ln(1 + x), \quad f'(x) = \frac{1}{1+x}, \quad f''(x) = \frac{-1}{(1+x)^2}, \quad f'''(x) = \frac{2}{(1+x)^3}$$

$$T_2(x) = f(0) + f'(0)x + \frac{f''(0)}{2}x^2 = 0 + x - \frac{x^2}{2}$$

$$T_2(0.2) = 0.2 - \frac{0.04}{2} = 0.2 - 0.02 = 0.18$$

True value: $\ln(1.2) \approx 0.1823$.

For the error bound on $[0, 0.2]$: $|f'''(t)| = \dfrac{2}{(1+t)^3} \le 2$ for $0 \le t \le 0.2$.

$$|R_2(0.2)| \le \frac{2 \cdot (0.2)^3}{6} = \frac{2 \cdot 0.008}{6} \approx 0.00267$$

Actual error: $|0.1823 - 0.18| = 0.0023$Which is within the bound.

</details>

---

## Common Pitfalls

1. **Misidentifying the first term in sigma notation.** $\sum_{k=0}^{n}$ has $n + 1$ terms, while
   $\sum_{k=1}^{n}$ has $n$ terms. Confusing the starting index leads to off-by-one errors in sums.

2. **Applying the infinite sum formula when $|r| \ge 1$.** The formula
   $S_{\infty} = \dfrac{a_1}{1 - r}$ is valid **only** when $|r| \lt 1$. For $|r| \ge 1$ the series
   diverges and the formula is meaningless.

3. **Computing the wrong term number.** The $n$-th term of a geometric sequence is $a_1 r^{n-1}$Not
   $a_1 r^n$. Similarly, the $n$-th term of an arithmetic sequence is $a_1 + (n-1)d$Not $a_1 + nd$.

4. **Using the ratio test when $L = 1$.** The ratio test is inconclusive when $L = 1$. The series
   $\sum \dfrac{1}{n}$ diverges and $\sum \dfrac{1}{n^2}$ converges, yet both give $L = 1$.

5. **Weak base case in induction.** The base case must match the claim. If the statement starts at
   $n = 1$Proving it for $n = 0$ is not sufficient unless the domain is specified to include $0$.

6. **Neglecting the alternating sign in the general binomial expansion.** When $n$ is not a positive
   integer, the series is infinite and the sign of each coefficient depends on the value of $n$.
   Substituting $x \to ax$ also changes the sign of odd powers when $a \lt 0$.

7. **Confusing the Lagrange remainder with the actual error.** The remainder bound
   $|R_n(x)| \le
 \dfrac{M|x-a|^{n+1}}{(n+1)!}$ gives an **upper bound**, not the exact error. The
   actual error may be much smaller.

8. **Forgetting convergence conditions for Maclaurin series.** Each standard Maclaurin series has a
   specific radius of convergence. The series for $\ln(1+x)$ only converges for $-1 \lt x \le 1$;
   using it outside this interval gives incorrect results.

---

## Exam-Style Problems

1. Find the sum of the infinite geometric series $8 - 4 + 2 - 1 + \cdots$ and express the repeating
   decimal $0.\overline{27}$ as a fraction in lowest terms.

2. Use the ratio test to determine the convergence of
   $\displaystyle\sum_{n=1}^{\infty} \frac{3^n}{n!}$.

3. Find the coefficient of $x^5$ in the expansion of $(1 + 3x)^{-2}$.

4. Prove by induction that $\displaystyle\sum_{k=1}^{n} \frac{1}{k(k+1)} = \frac{n}{n+1}$ for all
   $n \in \mathbb{Z}^+$.

5. Find the Maclaurin series of $\dfrac{x}{1 + x^2}$ up to $x^7$ and state the radius of
   convergence.

6. Use a third degree Maclaurin polynomial of $\cos x$ to approximate $\cos(0.3)$. Bound the error
   using the Lagrange remainder.

7. An arithmetic sequence has first term $5$ and common difference $3$. A geometric sequence has
   first term $2$ and common ratio $2$. Find the smallest $n$ for which the $n$-th term of the
   geometric sequence exceeds the $n$-th term of the arithmetic sequence.

8. Determine whether $\displaystyle\sum_{n=1}^{\infty} \frac{(-1)^n}{\sqrt{n}}$ converges
   absolutely, converges conditionally, or diverges.

---

## Cross-References

- **Differentiation** is needed to derive Maclaurin and Taylor series: see
  [Differentiation](2_differentiation)
- **Integration** connects to term-by-term integration of power series: see
  [Integration](3_integration-techniques)
- **Differential equations** use series expansions as solution methods: see
  [Differential Equations](5_differential-equations)
- **Proof and reasoning** techniques including induction: see
  [Proof](../1-number-and-algebra/3_proof-and-logic)

## Summary

This topic covers the mathematical techniques and concepts related to sequences and series,
including key theorems, methods, and problem-solving approaches.

**Key concepts include:**

- arithmetic and geometric sequences
- series and sigma notation
- recurrence relations
- convergence tests
- mathematical induction

Regular practice with a variety of question types is essential to build fluency and confidence in
applying these mathematical techniques.

:::
