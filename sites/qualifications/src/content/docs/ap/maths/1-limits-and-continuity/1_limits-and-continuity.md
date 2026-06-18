---
title: Limits and Continuity
description: ""restrict delta" technique: bound each factor separately.
3. If $f$ involves roots, rationalise and use the fact that $\sqrt{x} + \sqrt{a} \ge \sqrt{a}$.
4. Choose $\delta = \min(\mathrm{bound, \epsilon / \mathrm{constant)$ to handle both the restriction
   and the $\epsilon$ requirement.

## Continuity (CED Unit 1)

A function $f$ is **continuous at $a$** if all three conditions hold:

1. $f(a)$ is defined
2. $\displaystyle\lim_{x \to a} f(x)$ exists
3. $\displaystyle\lim_{x \to a} f(x) = f(a)$

**Theorem.** Every polynomial function is continuous everywhere. Every rational function is
Continuous on its domain.

**Theorem (Continuity of compositions).** If $g$ is continuous at $a$ and $f$ is continuous at
$g(a)$Then $f \circ g$ is continuous at $a$.

This theorem justifies statements like "$\sqrt{x^2 + 1}$ is continuous everywhere" -- $x^2 + 1$ is a
Polynomial (continuous everywhere) and $\sqrt{x}$ is continuous at all positive values (and
$x^2 + 1 \ge 1 \gt 0$).

### Types of Discontinuities

| Type                     | Description                                                            | Example                                          |
| ------------------------ | ---------------------------------------------------------------------- | ------------------------------------------------ |
| Removable                | Limit exists but $f(a)$ is undefined or $f(a) \ne \lim_{x \to a} f(x)$ | $f(x) = \frac{x^2 - 1}{x - 1}$ at $x=1$          |
| Jump (Non-removable)     | One-sided limits exist but are not equal                               | $f(x) = \lfloor x \rfloor$                       |
| Infinite (Non-removable) | Function approaches $\pm\infty$                                        | $f(x) = \frac{1}{x}$ at $x = 0$                  |
| Oscillating              | Function oscillates without approaching a single value                 | $f(x) = \sin\!\left(\frac{1}{x}\right)$ at $x=0$ |

### Intermediate Value Theorem (IVT)

If $f$ is continuous on $[a, b]$ and $k$ is any number between $f(a)$ and $f(b)$Then there exists At
least one $c \in (a, b)$ such that $f(c) = k$.

:::
:::info[Example]

Show that $f(x) = x^3 + x - 1$ has a root in $(0, 1)$.

$f(0) = -1 \lt 0$ and $f(1) = 1 \gt 0$.

Since $f$ is continuous on $[0, 1]$ and $0$ is between $f(0)$ and $f(1)$By the IVT there exists
$c \in (0, 1)$ such that $f(c) = 0$.


**Application of IVT to bisection.** The IVT motivates the bisection method for root-finding: if
$f(a)$ and $f(b)$ have opposite signs, a root exists in $(a, b)$. Halving the interval and checking
Signs converges to the root.

:::
:::info[Example]

Show that $f(x) = e^x - 3 - x$ has at least one root in $(1, 2)$.

$f(1) = e - 4 \approx -1.282 \lt 0$ and $f(2) = e^2 - 5 \approx 2.389 \gt 0$.

Since $f$ is continuous (as a sum of continuous functions) on $[1, 2]$By the IVT there exists
$c \in (1, 2)$ such that $f(c) = 0$. $\blacksquare$


**Corollary of the IVT.** If $f$ is continuous on $[a, b]$ and $f(a) \cdot f(b) \lt 0$Then $f$ has
At least one zero in $(a, b)$.

### Extreme Value Theorem

If $f$ is continuous on a closed interval $[a, b]$Then $f$ attains both an absolute maximum and an
Absolute minimum on $[a, b]$.

:::caution The EVT requires continuity on a **closed** interval. The function $f(x) = \frac{1}{x}$
On $(0, 1)$ has no maximum, despite being continuous.
:::

### Boundedness Theorem

If $f$ is continuous on a closed interval $[a, b]$Then $f$ is bounded on $[a, b]$ -- that is, There
exist real numbers $m$ and $M$ such that $m \le f(x) \le M$ for all $x \in [a, b]$.

This follows directly from the EVT: the absolute minimum and maximum serve as the bounds.

## Asymptotes and Limits at Infinity

### Vertical Asymptotes

If $\displaystyle\lim_{x \to a^+} f(x) = \pm\infty$ or
$\displaystyle\lim_{x \to a^-} f(x) = \pm\infty$Then $x = a$ is a vertical asymptote.

For rational functions $\frac{P(x)}{Q(x)}$Vertical asymptotes occur at zeros of $Q(x)$ that are Not
also zeros of $P(x)$ (after cancellation).

### Horizontal Asymptotes

- If $\displaystyle\lim_{x \to \pm\infty} f(x) = L$Then $y = L$ is a horizontal asymptote.
- A function can have at most two horizontal asymptotes (one as $x \to \infty$One as
  $x \to -\infty$).

### Oblique (Slant) Asymptotes

If $\deg P = \deg Q + 1$ in a rational function, perform polynomial long division. The quotient
(excluding remainder) gives the slant asymptote.

:::info[Example]

Find the asymptotes of $\displaystyle f(x) = \frac{2x^2 + 3x - 1}{x + 1}$.

**Vertical asymptote:** Set denominator to zero: $x + 1 = 0 \implies x = -1$.

**Slant asymptote:** Perform long division:

$$
\frac{2x^2 + 3x - 1}{x + 1} = 2x + 1 - \frac{2}{x + 1}
$$

The slant asymptote is $y = 2x + 1$.


:::
:::info[Example]

Find the horizontal asymptotes of $\displaystyle f(x) = \frac{3e^x}{e^x + 1}$.

As $x \to \infty$: Divide numerator and denominator by $e^x$:

$$
\frac{3}{1 + e^{-x}} \to \frac{3}{1 + 0} = 3
$$

As $x \to -\infty$: Divide numerator and denominator by $e^x$:

$$
\frac{3e^x}{e^x + 1} \to \frac{0}{0 + 1} = 0
$$

Horizontal asymptotes: $y = 3$ (as $x \to \infty$) and $y = 0$ (as $x \to -\infty$).


## L"Hopital's Rule (CED BC and AB Unit 1.15)

If $\displaystyle\lim_{x \to a} \frac{f(x)}{g(x)}$ produces the indeterminate form $\frac{0}{0}$ or
$\frac{\pm\infty}{\pm\infty}$And $f$ and $g$ are differentiable near $a$ with $g'(x) \ne 0$ near
$a$Then:

$$
\lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)}
$$

Provided the limit on the right exists.

**When to use L'Hopital's Rule.** It applies ONLY to $\frac{0}{0}$ or $\frac{\pm\infty}{\pm\infty}$
Forms. Using it on a determinate form (e.g., $\frac{3}{5}$) is an error.

**When L'Hopital's Rule fails.** If the limit $\displaystyle\lim_{x \to a} \frac{f'(x)}{g'(x)}$ does
Not exist, this does NOT mean the original limit does not exist. L'Hopital's Rule only gives a
Conclusion when the right-hand limit exists (or is $\pm\infty$).

:::
:::info[Example]

Find $\displaystyle\lim_{x \to 0} \frac{e^x - 1}{x}$.

Direct substitution gives $\frac{0}{0}$. Apply L'Hopital's Rule:

$$
\lim_{x \to 0} \frac{e^x - 1}{x} = \lim_{x \to 0} \frac{e^x}{1} = 1
$$


:::
:::info[Example]

Find $\displaystyle\lim_{x \to 0} \frac{1 - \cos x}{x^2}$.

Direct substitution gives $\frac{0}{0}$:

$$
\lim_{x \to 0} \frac{1 - \cos x}{x^2} = \lim_{x \to 0} \frac{\sin x}{2x} = \lim_{x \to 0} \frac{\cos x}{2} = \frac{1}{2}
$$

Note that we applied L'Hopital's Rule twice, since the second attempt still gave $\frac{0}{0}$.


:::
:::info[Example]

Find $\displaystyle\lim_{x \to \infty} \frac{\ln x}{\sqrt{x}}$.

This is $\frac{\infty}{\infty}$. Apply L'Hopital's Rule:

$$
\lim_{x \to \infty} \frac{1/x}{1/(2\sqrt{x})} = \lim_{x \to \infty} \frac{2\sqrt{x}}{x} = \lim_{x \to \infty} \frac{2}{\sqrt{x}} = 0
$$


:::
:::info[Example]

Find $\displaystyle\lim_{x \to 0} \frac{x - \sin x}{x^3}$.

Direct substitution gives $\frac{0}{0}$. Apply L'Hopital's Rule three times:

$$
\lim_{x \to 0} \frac{x - \sin x}{x^3} = \lim_{x \to 0} \frac{1 - \cos x}{3x^2} = \lim_{x \to 0} \frac{\sin x}{6x} = \lim_{x \to 0} \frac{\cos x}{6} = \frac{1}{6}
$$


:::
:::info[Example]

Find $\displaystyle\lim_{x \to 0^+} x \ln x$.

This has the form $0 \cdot (-\infty)$Which is indeterminate. Rewrite as a quotient:

$$
X \ln x = \frac{\ln x}{1/x}
$$

Now it is $\frac{-\infty}{\infty}$. Apply L'Hopital's Rule:

$$
\lim_{x \to 0^+} \frac{\ln x}{1/x} = \lim_{x \to 0^+} \frac{1/x}{-1/x^2} = \lim_{x \to 0^+} (-x) = 0
$$


## Limits of Piecewise Functions

:::
:::info[Example]

Let $f(x) = \begin{cases} x^2 + 1 & x \lt 2 \\ 3x - 1 & x \ge 2 \end{cases}$.

Find $\displaystyle\lim_{x \to 2} f(x)$ and determine if $f$ is continuous at $x = 2$.

Left-hand limit: $\displaystyle\lim_{x \to 2^-} f(x) = \lim_{x \to 2^-} (x^2 + 1) = 5$.

Right-hand limit: $\displaystyle\lim_{x \to 2^+} f(x) = \lim_{x \to 2^+} (3x - 1) = 5$.

Since both one-sided limits equal 5: $\displaystyle\lim_{x \to 2} f(x) = 5$.

Check continuity: $f(2) = 3(2) - 1 = 5 = \lim_{x \to 2} f(x)$.

Therefore, $f$ is continuous at $x = 2$.


:::
:::info[Example]

Let $g(x) = \begin{cases} \frac{x^2 - 4}{x - 2} & x \neq 2 \\ k & x = 2 \end{cases}$.

Find $k$ such that $g$ is continuous at $x = 2$.

$\displaystyle\lim_{x \to 2} \frac{x^2 - 4}{x - 2} = \lim_{x \to 2} \frac{(x-2)(x+2)}{x-2} = 4$.

For continuity: $k = g(2) = 4$.


:::
:::info[Example]

Let $h(x) = \begin{cases} x^2 + bx + 1 & x \le 0 \\ 2x + 3 & x \gt 0 \end{cases}$.

Find $b$ such that $h$ is continuous at $x = 0$.

Left-hand limit: $\displaystyle\lim_{x \to 0^-} h(x) = 0 + 0 + 1 = 1$.

Right-hand limit: $\displaystyle\lim_{x \to 0^+} h(x) = 3$.

For continuity: $1 = 3$Which is impossible. No value of $b$ makes $h$ continuous at $x = 0$.

This example demonstrates that continuity at a junction point of a piecewise function is not always
Achievable -- on whether the one-sided limits can be made to agree.


## Common Pitfalls

1. **Confusing the value of a function at a point with its limit.** The limit at $a$ does not depend
   on $f(a)$ at all. A function can have a limit at a point where it is undefined.
2. **Assuming
   $\displaystyle\lim_{x \to a} \frac{f(x)}{g(x)} = \frac{\lim_{x \to a} f(x)}{\lim_{x \to a} g(x)}$
   when the denominator limit is zero.** This is invalid when the denominator limit is zero.
3. **Forgetting to check both one-sided limits** for piecewise functions and absolute values.
4. **Misapplying L'Hopital's Rule** when the limit is not in indeterminate form. Always verify
   $\frac{0}{0}$ or $\frac{\pm\infty}{\pm\infty}$ before applying.
5. **Claiming a limit exists when only one-sided limits are checked.** Both must agree.
6. **Using thousands separators in math mode.** Write $1000000$ in math expressions, not
   $1,000,000$.
7. **Using angle brackets in math mode.** Use $\lt$ and $\gt$ commands instead of `<` and `>`.
8. **Forgetting the EVT requires a closed interval.** Open intervals do not guarantee maxima/minima.
9. **Assuming L'Hopital's Rule always works.** If $\displaystyle\lim \frac{f'(x)}{g'(x)}$ does not
   exist, you cannot conclude anything about the original limit. Try algebraic methods instead.
10. **Applying the product rule for limits to indeterminate products.** The limit
    $\displaystyle\lim_{x \to 0^+} x \ln x$ is not $0 \cdot (-\infty) = 0$; it requires rewriting as
    a quotient and applying L'Hopital's Rule.
11. **Forgetting the "restrict delta" step** in epsilon-delta proofs for nonlinear functions. You
    must bound $|x - a|$ before bounding the other factors.

## Practice Questions

1. Find $\displaystyle\lim_{x \to 1} \frac{x^3 - 1}{x - 1}$ by factoring.

2. Prove using the epsilon-delta definition that $\displaystyle\lim_{x \to 4} \sqrt{x} = 2$.

3. Determine all points of discontinuity for $f(x) = \frac{x^2 + x - 6}{x^2 - 9}$ and classify each.

4. Find the horizontal and vertical asymptotes of
   $\displaystyle f(x) = \frac{3x^2 - 2x + 1}{x^2 - 4}$.

5. Use L'Hopital's Rule to find $\displaystyle\lim_{x \to \infty} \frac{\ln x}{\sqrt{x}}$.

6. Let $f(x) = \begin{cases} \frac{x^2 - 9}{x - 3} & x \ne 3 \\ k & x = 3 \end{cases}$. Find the
   value of $k$ that makes $f$ continuous at $x = 3$.

7. Use the squeeze theorem to find $\displaystyle\lim_{x \to 0} x \cos\!\left(\frac{1}{x}\right)$.

8. Given $f(x) = x^3 - 3x + 1$Use the IVT to show there is at least one root in the interval
   $(1, 2)$.

9. Find $\displaystyle\lim_{x \to 0} \frac{\tan x}{x}$.

10. Find $\displaystyle\lim_{x \to 1} \frac{\sqrt{x} - 1}{\sqrt[3]{x} - 1}$.

11. Classify each discontinuity of $\displaystyle f(x) = \frac{x^2 - x}{x^2 - 1}$.

12. Use the IVT to prove that $f(x) = e^x - 3 - x$ has at least one root in the interval $(1, 2)$.

13. Find $\displaystyle\lim_{x \to 0} \frac{e^x - 1 - x}{x^2}$.

14. Prove that $\displaystyle\lim_{x \to 3} \frac{1}{x} = \frac{1}{3}$ using the epsilon-delta
    definition.

15. Find the value of $c$ such that
    $f(x) = \begin{cases} cx^2 + 2x & x \lt 1 \\ 3x - 1 & x \ge 1 \end{cases}$ is continuous at
    $x = 1$.

16. Evaluate $\displaystyle\lim_{x \to 0} \frac{\sin^2 x}{x^2}$.

17. Find $\displaystyle\lim_{x \to \infty} \left(\sqrt{x^2 + x} - x\right)$.

18. Determine whether $\displaystyle\lim_{x \to 0} \frac{1}{x^2}\sin\!\left(\frac{1}{x}\right)$
    exists.

## Practice Problems

<details>
<summary>Question 1: Epsilon-delta proof</summary>

Using the epsilon-delta definition, prove that $\displaystyle\lim_{x \to 2} (3x - 1) = 5$.

</details>

<details>
<summary>Answer</summary>

We need to show: for every $\epsilon \gt 0$There exists a $\delta \gt 0$ such that if
$0 \lt |x - 2| \lt \delta$Then $|(3x - 1) - 5| \lt \epsilon$.

$|(3x - 1) - 5| = |3x - 6| = 3|x - 2|$.

We need $3|x - 2| \lt \epsilon$So $|x - 2| \lt \epsilon/3$.

Choose $\delta = \epsilon/3$. Then if $0 \lt |x - 2| \lt \delta$:

$|(3x - 1) - 5| = 3|x - 2| \lt 3\delta = 3(\epsilon/3) = \epsilon$.

Therefore, $\displaystyle\lim_{x \to 2} (3x - 1) = 5$.

</details>

<details>
<summary>Question 2: Limits involving trigonometric functions</summary>

Evaluate $\displaystyle\lim_{x \to 0} \frac{1 - \cos x}{x \sin x}$.

</details>

<details>
<summary>Answer</summary>

Multiply numerator and denominator by $1 + \cos x$:

$\displaystyle\lim_{x \to 0} \frac{(1 - \cos x)(1 + \cos x)}{x \sin x(1 + \cos x)} = \lim_{x \to 0} \frac{\sin^2 x}{x \sin x(1 + \cos x)}$

$= \lim_{x \to 0} \frac{\sin x}{x(1 + \cos x)} = \lim_{x \to 0} \frac{\sin x}{x} \cdot \frac{1}{1 + \cos x} = 1 \cdot \frac{1}{1 + 1} = \frac{1}{2}$.

</details>

<details>
<summary>Question 3: Continuity of a piecewise function</summary>

Determine whether the following function is continuous at $x = 1$:

$$f(x) = \begin{cases} \frac{x^2 - 1}{x - 1} & \mathrm{if  x \ne 1 \\ 4 & \mathrm{if  x = 1 \end{cases}$$

</details>

<details>
<summary>Answer</summary>

Check three conditions:

1. $f(1) = 4$ (defined).
2. $\displaystyle\lim_{x \to 1} f(x) = \lim_{x \to 1} \frac{x^2 - 1}{x - 1} = \lim_{x \to 1} \frac{(x-1)(x+1)}{x-1} = \lim_{x \to 1} (x + 1) = 2$.
3. $\lim_{x \to 1} f(x) = 2 \ne f(1) = 4$.

Since the limit does not equal the function value, $f$ is NOT continuous at $x = 1$. To make it
Continuous, $f(1)$ should be redefined as $2$.

</details>

<details>
<summary>Question 4: Intermediate Value Theorem application</summary>

Prove that the equation $x^5 - 5x + 1 = 0$ has at least one root in the interval $(0, 1)$.

</details>

<details>
<summary>Answer</summary>

Let $f(x) = x^5 - 5x + 1$. This is a polynomial, so it is continuous everywhere.

$f(0) = 0 - 0 + 1 = 1 \gt 0$.

$f(1) = 1 - 5 + 1 = -3 \lt 0$.

Since $f$ is continuous on $[0, 1]$ and $f(0) \gt 0$ and $f(1) \lt 0$By the Intermediate Value
Theorem, there exists at least one $c \in (0, 1)$ such that $f(c) = 0$.

</details>

<details>
<summary>Question 5: Squeeze theorem</summary>

Evaluate $\displaystyle\lim_{x \to 0} x^2 \sin\!\left(\frac{1}{x}\right)$.

</details>

<details>
<summary>Answer</summary>

Since $-1 \le \sin\!\left(\frac{1}{x}\right) \le 1$ for all $x \ne 0$:

$-x^2 \le x^2 \sin\!\left(\frac{1}{x}\right) \le x^2$.

$\displaystyle\lim_{x \to 0} (-x^2) = 0$ and $\displaystyle\lim_{x \to 0} x^2 = 0$.

By the Squeeze Theorem: $\displaystyle\lim_{x \to 0} x^2 \sin\!\left(\frac{1}{x}\right) = 0$.

</details>

---

:::tip Tip Ready to test your understanding of **Limits and Continuity**? The contains the
hardest questions within the AP specification for this topic, each with a full worked solution.

**Unit tests** probe edge cases and common misconceptions. **Integration tests** combine Limits and
Continuity with other AP Calculus topics to test synthesis under exam conditions.

See for instructions
on self-marking and building a personal test matrix.

## Summary

This topic covers the mathematical techniques and concepts related to limits and continuity,
including key theorems, methods, and problem-solving approaches.

**Key concepts include:**

- quadratic equations and the discriminant
- simultaneous equations
- polynomial division and the factor theorem
- partial fractions
- binomial expansion

Regular practice with a variety of question types is essential to build fluency and confidence in
applying these mathematical techniques.

## Worked Examples

Worked examples demonstrating the application of key concepts are covered in the detailed sub-pages
linked above.

:::
