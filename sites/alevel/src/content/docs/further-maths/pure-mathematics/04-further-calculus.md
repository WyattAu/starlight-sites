---
title: Further Calculus
description: ""s rule for higher derivatives of a product

**Problem.** If $y = x^2 e^{3x}$Find $\dfrac{d^4 y}{dx^4}$.

**Solution.** We use Leibniz's rule:
$(uv)^{(n)} = \displaystyle\sum_{k=0}^{n} \binom{n}{k} u^{(k)} v^{(n-k)}$.

Let $u = x^2$ and $v = e^{3x}$.

- $u' = 2x$$u'' = 2$$u''' = 0$$u^{(4)} = 0$.
- $v^{(k)} = 3^k e^{3x}$ for all $k$.

$$\frac{d^4 y}{dx^4} = \binom{4}{0} x^2 \cdot 3^4 e^{3x} + \binom{4}{1} 2x \cdot 3^3 e^{3x} + \binom{4}{2} 2 \cdot 3^2 e^{3x} + 0 + 0$$

$$= 81x^2 e^{3x} + 4 \cdot 54x e^{3x} + 6 \cdot 18 e^{3x}$$

$$\boxed{= (81x^2 + 216x + 108)e^{3x}}$$

### Example 8.2: Reduction formula for $\int x^n e^x\,dx$

**Problem.** Establish and use a reduction formula for $I_n = \int x^n e^x\,dx$.

**Solution.** Using integration by parts with $u = x^n$$dv = e^x\,dx$:

$$I_n = x^n e^x - \int nx^{n-1} e^x\,dx = x^n e^x - nI_{n-1}$$

Therefore $\boxed{I_n = x^n e^x - nI_{n-1}}$ with $I_0 = e^x + C$.

To find $I_3$:

$I_1 = x e^x - e^x$$I_2 = x^2 e^x - 2x e^x + 2e^x$$I_3 = x^3 e^x - 3x^2 e^x + 6x e^x - 6e^x$.

$$\boxed{I_3 = (x^3 - 3x^2 + 6x - 6)e^x + C}$$

### Example 8.3: Improper integral convergence test

**Problem.** Determine whether $\displaystyle\int_0^1 \frac◆LB◆1◆RB◆◆LB◆\sqrt{x}◆RB◆\,dx$ converges,
And evaluate if it does.

**Solution.** The integrand is undefined at $x = 0$. Write:

$$\int_0^1 x^{-1/2}\,dx = \lim_{a \to 0^+} \int_a^1 x^{-1/2}\,dx = \lim_{a \to 0^+} \left[2x^{1/2}\right]_a^1 = \lim_{a \to 0^+} (2 - 2\sqrt{a}) = 2$$

Since the limit exists and is finite, the integral converges.
$\boxed{\displaystyle\int_0^1 \frac◆LB◆1◆RB◆◆LB◆\sqrt{x}◆RB◆\,dx = 2}$

### Example 8.4: Integration using the $t = \tan(x/2)$ substitution

**Problem.** Evaluate $\displaystyle\int_0^{\pi/2} \frac◆LB◆1◆RB◆◆LB◆1 + \sin x◆RB◆\,dx$ using the
Weierstrass substitution.

**Solution.** Let $t = \tan(x/2)$So $\sin x = \dfrac{2t}{1+t^2}$ and $dx = \dfrac{2\,dt}{1+t^2}$.

When $x = 0$: $t = 0$. When $x = \pi/2$: $t = 1$.

$$\int_0^1 \frac◆LB◆1◆RB◆◆LB◆1 + \frac{2t}{1+t^2}◆RB◆ \cdot \frac{2\,dt}{1+t^2} = \int_0^1 \frac{2\,dt}{(1+t^2) + 2t} = \int_0^1 \frac{2\,dt}{t^2 + 2t + 1} = \int_0^1 \frac{2\,dt}{(t+1)^2}$$

$$= \left[-\frac{2}{t+1}\right]_0^1 = -1 + 2 = \boxed{1}$$

### Example 8.5: Differentiation of parametric arc length

**Problem.** A curve is given by $x = t - \sin t$, $y = 1 - \cos t$ for $0 \leq t \leq 2\pi$. Find
The total arc length.

**Solution.** $\dfrac{dx}{dt} = 1 - \cos t$, $\dfrac{dy}{dt} = \sin t$.

$$s = \int_0^{2\pi} \sqrt◆LB◆(1-\cos t)^2 + \sin^2 t◆RB◆\,dt = \int_0^{2\pi} \sqrt◆LB◆1 - 2\cos t + \cos^2 t + \sin^2 t◆RB◆\,dt$$

$$= \int_0^{2\pi} \sqrt◆LB◆2 - 2\cos t◆RB◆\,dt = \int_0^{2\pi} \sqrt◆LB◆4\sin^2(t/2)◆RB◆\,dt = \int_0^{2\pi} 2|\sin(t/2)|\,dt$$

For $0 \leq t \leq 2\pi$, $\sin(t/2) \geq 0$So:

$$s = 2\int_0^{2\pi} \sin(t/2)\,dt = 2\left[-2\cos(t/2)\right]_0^{2\pi} = 2(2 + 2) = \boxed{8}$$

### Example 8.6: Taylor series approach to a difficult limit

**Problem.** Evaluate $\displaystyle\lim_{x \to 0} \frac◆LB◆x - \sin x◆RB◆◆LB◆x^3◆RB◆$.

**Solution.** Expand $\sin x$ as a Maclaurin series:

$$\sin x = x - \frac{x^3}{6} + \frac{x^5}{120} - \cdots$$

$$\frac◆LB◆x - \sin x◆RB◆◆LB◆x^3◆RB◆ = \frac◆LB◆x - \left(x - \frac{x^3}{6} + \frac{x^5}{120} - \cdots\right)◆RB◆◆LB◆x^3◆RB◆ = \frac◆LB◆\frac{x^3}{6} - \frac{x^5}{120} + \cdots◆RB◆◆LB◆x^3◆RB◆ = \frac{1}{6} - \frac{x^2}{120} + \cdots$$

Taking $x \to 0$:
$\boxed{\displaystyle\lim_{x \to 0} \frac◆LB◆x - \sin x◆RB◆◆LB◆x^3◆RB◆ = \frac{1}{6}}$

### Example 8.7: Integration involving inverse trigonometric functions

**Problem.** Evaluate $\displaystyle\int \arcsin x\,dx$.

**Solution.** Use integration by parts with $u = \arcsin x$, $dv = dx$:

$$du = \frac◆LB◆1◆RB◆◆LB◆\sqrt{1-x^2}◆RB◆\,dx, \quad v = x$$

$$\int \arcsin x\,dx = x\arcsin x - \int \frac◆LB◆x◆RB◆◆LB◆\sqrt{1-x^2}◆RB◆\,dx$$

For the second integral, let $w = 1 - x^2$, $dw = -2x\,dx$:

$$\int \frac◆LB◆x◆RB◆◆LB◆\sqrt{1-x^2}◆RB◆\,dx = -\sqrt{1-x^2}$$

$$\boxed{\int \arcsin x\,dx = x\arcsin x + \sqrt{1-x^2} + C}$$

---

## 9. Common Pitfalls

| Pitfall                                                                         | Correct Approach                                                                             |
| ------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | --------------------------------------------- | ----------------------------------------------- |
| Forgetting the chain rule when differentiating composite inverse trig functions | Always write $\dfrac{d}{dx}\!\left[\arcsin(u)\right] = \dfrac◆LB◆u'◆RB◆◆LB◆\sqrt{1-u^2}◆RB◆$ |
| Using $\ln                                                                      | x                                                                                            | $ before checking if the integral is improper | Check for discontinuities in the interval first |
| Forgetting $+C$ on every antiderivative                                         | Every indefinite integral needs an arbitrary constant                                        |
| Applying reduction formulae without checking the base case                      | Always state $I_0$ or $I_1$ explicitly                                                       |
| Confusing $\dfrac{d^n y}{dx^n}$ notation with $\left(\dfrac{dy}{dx}\right)^n$   | $\dfrac{d^n y}{dx^n}$ is the $n$-th derivative, not the $n$-th power                         |

---

## 10. Additional Exam-Style Questions

### Question 8

Using the substitution $u = e^x$Find $\displaystyle\int \frac{e^x}{e^{2x} + 1}\,dx$.

<details>
<summary>Solution</summary>

$u = e^x$, $du = e^x\,dx$.

$$\int \frac{du}{u^2 + 1} = \arctan u + C = \boxed{\arctan(e^x) + C}$$

</details>

### Question 9

The reduction formula $I_n = \displaystyle\int_0^{\pi/4} \tan^n x\,dx$ satisfies
$I_n = \dfrac{1}{n-1} - I_{n-2}$ for $n \geq 2$. Given $I_0 = \dfrac◆LB◆\pi◆RB◆◆LB◆4◆RB◆$ and
$I_1 = \dfrac{1}{2}\ln 2$Find $I_3$.

<details>
<summary>Solution</summary>

$I_3 = \dfrac{1}{2} - I_1 = \dfrac{1}{2} - \dfrac{1}{2}\ln 2 = \dfrac{1}{2}(1 - \ln 2)$.

To verify: $I_2 = \dfrac{1}{1} - I_0 = 1 - \dfrac◆LB◆\pi◆RB◆◆LB◆4◆RB◆$. Then
$I_3 = \dfrac{1}{2} - I_1 = \dfrac{1}{2} - \dfrac{1}{2}\ln 2$. Consistent.
$\boxed{I_3 = \dfrac{1}{2}(1 - \ln 2)}$

</details>

### Question 10

Find the area enclosed by the curve $x = t^2$, $y = t^3 - t$ for $-1 \leq t \leq 1$.

<details>
<summary>Solution</summary>

Using the parametric area formula $A = \displaystyle\int y\,\frac{dx}{dt}\,dt$:

$$A = \int_{-1}^{1} (t^3 - t)(2t)\,dt = 2\int_{-1}^{1} (t^4 - t^2)\,dt = 2\left[\frac{t^5}{5} - \frac{t^3}{3}\right]_{-1}^{1}$$

Since $t^5 - \frac{5}{3}t^3$ is odd (each term is odd), the integral from $-1$ to $1$ is zero.

$\boxed{A = 0}$ (the curve traces back over itself symmetrically).

</details>

### Question 11

**Prove that** $\dfrac{d}{dx}\!\left[\arctan x\right] = \dfrac{1}{1+x^2}$ from first principles
Using implicit differentiation.

<details>
<summary>Solution</summary>

Let $y = \arctan x$So $x = \tan y$. Differentiating implicitly with respect to $x$:

$$1 = \sec^2 y \cdot \frac{dy}{dx}$$

$$\frac{dy}{dx} = \cos^2 y = \frac◆LB◆1◆RB◆◆LB◆\sec^2 y◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆1 + \tan^2 y◆RB◆ = \frac{1}{1 + x^2}$$

$\blacksquare$

</details>

### Question 12

Evaluate $\displaystyle\int_0^1 \frac◆LB◆\ln x◆RB◆◆LB◆1+x◆RB◆\,dx$Expressing your answer in terms Of
$\displaystyle\sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n^2}$.

<details>
<summary>Solution</summary>

Expand $\dfrac{1}{1+x} = \displaystyle\sum_{n=0}^{\infty} (-1)^n x^n$ for $|x| < 1$:

$$\int_0^1 \ln x \sum_{n=0}^{\infty} (-1)^n x^n\,dx = \sum_{n=0}^{\infty} (-1)^n \int_0^1 x^n \ln x\,dx$$

Using integration by parts or the standard result
$\displaystyle\int_0^1 x^n \ln x\,dx = -\frac{1}{(n+1)^2}$:

$$= -\sum_{n=0}^{\infty} \frac{(-1)^n}{(n+1)^2} = -\sum_{n=1}^{\infty} \frac{(-1)^{n-1}}{n^2} = \sum_{n=1}^{\infty} \frac{(-1)^n}{n^2}$$

This equals $-\dfrac◆LB◆\pi^2◆RB◆◆LB◆12◆RB◆$.

</details>

---

## 11. Connections to Other Topics

### 11.1 Further calculus and differential equations

Integration techniques (substitution, parts, partial fractions) are essential tools for solving
Differential equations. See
[Differential Equations](/docs/alevel/further-maths/pure-mathematics/differential-equations).

### 11.2 Calculus and Maclaurin series

Taylor and Maclaurin expansions provide powerful tools for evaluating integrals that cannot be found
In closed form. See
[Maclaurin and Taylor Series](/docs/alevel/further-maths/pure-mathematics/maclaurin-taylor-series).

### 11.3 Calculus and mechanics

Arc length and area calculations are used extensively in mechanics for work-energy problems. See
[Circular Motion](/docs/alevel/further-maths/further-mechanics/further-circular-motion).

### 11.4 Calculus and hyperbolic functions

The inverse hyperbolic functions arise from integration:
$\displaystyle\int \frac◆LB◆dx◆RB◆◆LB◆\sqrt{x^2+a^2}◆RB◆ = \operatorname{arsinh}(x/a) + C$. See
[Hyperbolic Functions](/docs/alevel/further-maths/pure-mathematics/hyperbolic-functions).

---

## 12. Advanced Integration Techniques

### 12.1 Integration by parts — LIATE rule

When choosing $u$ and $dv$ for integration by parts, use the LIATE priority:

- **L**ogarithmic functions
- **I**nverse trigonometric functions
- **A**lgebraic functions (polynomials)
- **T**rigonometric functions
- **E**xponential functions

The function higher on the list should be chosen as $u$.

### 12.2 The Weierstrass substitution

For integrals involving rational functions of $\sin x$ and $\cos x$The substitution $t = \tan(x/2)$
converts them to rational functions of $t$:

$\sin x = \dfrac{2t}{1+t^2}$$\cos x = \dfrac{1-t^2}{1+t^2}$$dx = \dfrac{2\,dt}{1+t^2}$.

### 12.3 Recognising standard integral forms

| Form                                                          | Result                    |
| ------------------------------------------------------------- | ------------------------- | ---- | ---- |
| $\displaystyle\int \frac{f'(x)}{f(x)}\,dx$                    | $\ln                      | f(x) | + C$ |
| $\displaystyle\int \frac◆LB◆f'(x)◆RB◆◆LB◆\sqrt{f(x)}◆RB◆\,dx$ | $2\sqrt{f(x)} + C$        |
| $\displaystyle\int f(x) \cdot f'(x)\,dx$                      | $\dfrac{[f(x)]^2}{2} + C$ |

---

## 13. Summary of Key Results

| Result                       | Formula                                                                     |
| ---------------------------- | --------------------------------------------------------------------------- |
| Integration by parts         | $\displaystyle\int u\,dv = uv - \int v\,du$                                 |
| Reduction formula (by parts) | Express $I_n$ in terms of $I_{n-1}$ or $I_{n-2}$                            |
| Arc length (Cartesian)       | $s = \displaystyle\int_a^b \sqrt◆LB◆1+\left(\frac{dy}{dx}\right)^2◆RB◆\,dx$ |
| Arc length (parametric)      | $s = \displaystyle\int_\alpha^\beta \sqrt◆LB◆\dot{x}^2+\dot{y}^2◆RB◆\,dt$   |
| Area under parametric curve  | $A = \displaystyle\int y\frac{dx}{dt}\,dt$                                  |
| Surface of revolution        | $S = 2\pi\displaystyle\int_a^b y\sqrt{1+(y')^2}\,dx$                        |
| Derivative of $\arcsin x$    | $\dfrac◆LB◆1◆RB◆◆LB◆\sqrt{1-x^2}◆RB◆$                                       |
| Derivative of $\arctan x$    | $\dfrac{1}{1+x^2}$                                                          |
| Improper integral test       | $\displaystyle\int_a^\infty f(x)\,dx = \lim_{b\to\infty}\int_a^b f(x)\,dx$  |

---

## 14. Further Exam-Style Questions

### Question 13

Using integration by parts, evaluate $\displaystyle\int x^3 e^{-x}\,dx$.

<details>
<summary>Solution</summary>

Let $u = x^3$$dv = e^{-x}\,dx$. $du = 3x^2\,dx$$v = -e^{-x}$.

$\int x^3 e^{-x}\,dx = -x^3 e^{-x} + 3\int x^2 e^{-x}\,dx$.

Repeating:
$\int x^2 e^{-x}\,dx = -x^2 e^{-x} + 2\int xe^{-x}\,dx = -x^2 e^{-x} - 2xe^{-x} + 2\int e^{-x}\,dx$.

$= -x^2 e^{-x} - 2xe^{-x} - 2e^{-x}$.

Therefore: $\int x^3 e^{-x}\,dx = -x^3 e^{-x} - 3x^2 e^{-x} - 6xe^{-x} - 6e^{-x} + C$.

$\boxed{= -e^{-x}(x^3 + 3x^2 + 6x + 6) + C}$

</details>

### Question 14

Find the arc length of the curve $y = \ln(\cos x)$ from $x = 0$ to $x = \pi/4$.

<details>
<summary>Solution</summary>

$y' = -\tan x$. $1 + (y')^2 = 1 + \tan^2 x = \sec^2 x$.

$s = \displaystyle\int_0^{\pi/4} \sec x\,dx = [\ln|\sec x + \tan x|]_0^{\pi/4} = \ln(\sqrt{2}+1) - \ln(1) = \boxed{\ln(\sqrt{2}+1)}$.

</details>

### Question 15

**Prove that**
$\displaystyle\int_0^{\pi/2} \sin^n x\,dx = \dfrac{n-1}{n} \cdot \dfrac{n-3}{n-2} \cdots \times \begin{cases} 1 & n \text{ odd} \\ \dfrac◆LB◆\pi◆RB◆◆LB◆2◆RB◆ & n \text{ even}\end{cases}$
(Wallis' formula).

<details>
<summary>Solution</summary>

Let $I_n = \displaystyle\int_0^{\pi/2} \sin^n x\,dx$.

Integration by parts with $u = \sin^{n-1}x$$dv = \sin x\,dx$:

$I_n = [-\cos x \sin^{n-1}x]_0^{\pi/2} + (n-1)\displaystyle\int_0^{\pi/2} \cos^2 x \sin^{n-2}x\,dx$

$= 0 + (n-1)\displaystyle\int_0^{\pi/2} (1-\sin^2 x)\sin^{n-2}x\,dx = (n-1)(I_{n-2} - I_n)$.

$nI_n = (n-1)I_{n-2}$So $\boxed{I_n = \dfrac{n-1}{n}I_{n-2}}$.

Base cases: $I_0 = \pi/2$$I_1 = 1$.

For even $n$:
$I_n = \dfrac{n-1}{n} \cdot \dfrac{n-3}{n-2} \cdots \dfrac{1}{2} \cdot \dfrac◆LB◆\pi◆RB◆◆LB◆2◆RB◆$.

For odd $n$: $I_n = \dfrac{n-1}{n} \cdot \dfrac{n-3}{n-2} \cdots \dfrac{2}{3} \cdot 1$.
$\blacksquare$

</details>

---

## 15. Advanced Topics

### 15.1 The gamma function and factorial

The gamma function extends the factorial: $\Gamma(n) = (n-1)!$ for positive integers, and
$\Gamma(x) = \displaystyle\int_0^{\infty} t^{x-1}e^{-t}\,dt$ for $x > 0$.

Wallis' formula leads to the important result: $\Gamma(1/2) = \sqrt◆LB◆\pi◆RB◆$.

### 15.2 Frullani's integral

For suitable functions $f$:
$\displaystyle\int_0^{\infty} \frac{f(ax)-f(bx)}{x}\,dx = (f(0)-f(\infty))\ln\frac{b}{a}$.

Example: $\displaystyle\int_0^{\infty} \frac{e^{-ax}-e^{-bx}}{x}\,dx = \ln\frac{b}{a}$.

### 15.3 Differentiation under the integral sign

Leibniz's rule:
$\dfrac◆LB◆d◆RB◆◆LB◆d\alpha◆RB◆\displaystyle\int_a^b f(x,\alpha)\,dx = \int_a^b \frac◆LB◆\partial f◆RB◆◆LB◆\partial\alpha◆RB◆\,dx$.

This is a powerful technique for evaluating integrals that depend on a parameter.

### 15.4 Improper integrals — comparison test

If $0 \leq f(x) \leq g(x)$ for $x \geq a$ and $\displaystyle\int_a^{\infty} g(x)\,dx$ converges,
Then $\displaystyle\int_a^{\infty} f(x)\,dx$ also converges.

---

## 16. Further Exam-Style Questions

### Question 16

Evaluate $\displaystyle\int_0^{\infty} xe^{-x}\,dx$ and relate it to the mean of the exponential
Distribution.

<details>
<summary>Solution</summary>

Integration by parts with $u = x$$dv = e^{-x}\,dx$:

$= [-xe^{-x}]_0^{\infty} + \displaystyle\int_0^{\infty} e^{-x}\,dx = 0 + 1 = \boxed{1}$.

This equals $E(X)$ for $X \sim \mathrm{Exp}(1)$Confirming the result $E(X) = 1/\lambda$ with
$\lambda = 1$.

</details>

### Question 17

**Prove that** $\displaystyle\int_0^{\pi/2} \sin^2 x\cos^2 x\,dx = \frac◆LB◆\pi◆RB◆◆LB◆16◆RB◆$.

<details>
<summary>Solution</summary>

$\sin^2 x\cos^2 x = \dfrac◆LB◆\sin^2 2x◆RB◆◆LB◆4◆RB◆ = \dfrac◆LB◆1-\cos 4x◆RB◆◆LB◆8◆RB◆$.

$\displaystyle\int_0^{\pi/2} \frac◆LB◆1-\cos 4x◆RB◆◆LB◆8◆RB◆\,dx = \frac{1}{8}\!\left[x-\frac◆LB◆\sin 4x◆RB◆◆LB◆4◆RB◆\right]_0^{\pi/2} = \frac{1}{8}\cdot\frac◆LB◆\pi◆RB◆◆LB◆2◆RB◆ = \boxed{\dfrac◆LB◆\pi◆RB◆◆LB◆16◆RB◆}$.
$\blacksquare$

</details>

### Question 18

Use integration by parts twice to evaluate $\displaystyle\int e^x\cos x\,dx$.

<details>
<summary>Solution</summary>

$I = \displaystyle\int e^x\cos x\,dx = e^x\sin x - \int e^x\sin x\,dx = e^x\sin x - (-e^x\cos x + \int e^x\cos x\,dx)$.

$I = e^x\sin x + e^x\cos x - I$.

$2I = e^x(\sin x+\cos x)$.

$\boxed{I = \dfrac◆LB◆e^x(\sin x+\cos x)◆RB◆◆LB◆2◆RB◆ + C}$

</details>

---

## 17. Further Exam-Style Questions

### Question 19

Evaluate $\displaystyle\int_0^1 \frac{x^3}{1+x^2}\,dx$.

<details>
<summary>Solution</summary>

Let $u = 1+x^2$$du = 2x\,dx$. Note $x^2 = u-1$So
$x^3\,dx = x^2 \cdot x\,dx = (u-1)\cdot\dfrac{du}{2}$.

$\displaystyle\int_0^1 \frac{x^3}{1+x^2}\,dx = \frac{1}{2}\int_1^2 \frac{u-1}{u}\,du = \frac{1}{2}\int_1^2 \!\left(1-\frac{1}{u}\right)du$

$= \frac{1}{2}\Big[u-\ln u\Big]_1^2 = \frac{1}{2}(2-\ln 2 - 1) = \boxed{\frac{1}{2}(1-\ln 2)}$.

</details>

### Question 20

**Prove that** the function $F(x) = \displaystyle\int_0^x \frac{dt}{1+t^4}$ is increasing and
Bounded above.

<details>
<summary>Solution</summary>

$F'(x) = \dfrac{1}{1+x^4} > 0$ for all $x \geq 0$So $F$ is strictly increasing. ✓

$F(x) < F(\infty) = \displaystyle\int_0^{\infty} \frac{dt}{1+t^4} < \int_0^{\infty} \frac{dt}{1+t^2} = \frac◆LB◆\pi◆RB◆◆LB◆2◆RB◆$.
✓

Therefore $F$ is increasing and bounded above by $\pi/2$. $\blacksquare$

</details>

