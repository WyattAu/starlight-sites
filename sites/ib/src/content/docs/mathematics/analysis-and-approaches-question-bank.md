---
title: Analysis and Approaches Question Bank
tags:
  - maths
  - ib
description: ""s product-moment correlation coefficient $r$. [3 marks] (b) Comment on the
> strength and direction of the correlation. [1 mark]

**Mark Scheme:**

$\bar{x} = 6$, $\bar{y} = 64$

$\sum x^2 = 220$, $\sum y^2 = 21600$, $\sum xy = 2100$, $n = 5$

$S_{xx} = 220 - 5(36) = 40$ $S_{yy} = 21600 - 5(4096) = 21600 - 20480 = 1120$
$S_{xy} = 2100 - 5(6)(64) = 2100 - 1920 = 180$

$r = \frac{180}{\sqrt{40 \times 1120}} = \frac{180}{\sqrt{44800}} = \frac{180}{211.7} \approx \mathbf{0.851}$

(b) Strong positive linear correlation — as study hours increase, test scores tend to increase. ✓

| Part | Marks | Key Method                                     |
| ---- | ----- | ---------------------------------------------- |
| (a)  | 3     | Compute $S_{xx}$, $S_{yy}$, $S_{xy}$, then $r$ |
| (b)  | 1     | Interpret magnitude and sign of $r$            |

`hard` — 4 marks total

---

### Q11 — Combinatorics (HL)

> A committee of 4 people is to be selected from 7 men and 5 women. The committee must contain at
> least 2 women. In how many ways can this be done? [4 marks]

**Mark Scheme:**

Total people = 12. Need at least 2 women.

Case 1: 2 women, 2 men: $\binom{5}{2}\binom{7}{2} = 10 \times 21 = 210$

Case 2: 3 women, 1 man: $\binom{5}{3}\binom{7}{1} = 10 \times 7 = 70$

Case 3: 4 women, 0 men: $\binom{5}{4}\binom{7}{0} = 5 \times 1 = 5$

Total $= 210 + 70 + 5 = \mathbf{285}$ ✓

| Part | Marks | Key Method                                            |
| ---- | ----- | ----------------------------------------------------- |
| —    | 4     | Split into cases by number of women, sum combinations |

`hard` — 4 marks total

---

## Calculus

### Q12 — Differentiation from First Principles

> Use the definition of the derivative to show that the derivative of $f(x) = x^2$ is $f'(x) = 2x$.
> [4 marks]

**Mark Scheme:**

$f'(x) = \lim_{h \to 0} \frac{(x + h)^2 - x^2}{h}$

$= \lim_{h \to 0} \frac{x^2 + 2xh + h^2 - x^2}{h}$

$= \lim_{h \to 0} \frac{2xh + h^2}{h}$

$= \lim_{h \to 0}(2x + h) = \mathbf{2x}$ ✓

| Part | Marks | Key Method                             |
| ---- | ----- | -------------------------------------- |
| —    | 4     | Expand, factor out $h$, evaluate limit |

`medium` — 4 marks total

---

### Q13 — Integration — Area Under a Curve

> Find the area enclosed by the curve $y = x^2 - 4x + 3$, the x-axis, and the lines $x = 1$ and
> $x = 4$. [5 marks]

**Mark Scheme:**

First find where the curve crosses the x-axis between $x = 1$ and $x = 4$:
$x^2 - 4x + 3 = 0 \Rightarrow (x-1)(x-3) = 0 \Rightarrow x = 1, 3$

The curve is below the x-axis for $1 < x < 3$ and above for $3 < x < 4$.

Area $= \int_1^3 |x^2 - 4x + 3|\,dx + \int_3^4 (x^2 - 4x + 3)\,dx$

$\int (x^2 - 4x + 3)\,dx = \frac{x^3}{3} - 2x^2 + 3x$

First part (area = negative of integral):
$-\left[\frac{x^3}{3} - 2x^2 + 3x\right]_1^3 = -\left[\left(9 - 18 + 9\right) - \left(\frac{1}{3} - 2 + 3\right)\right] = -(0 - \frac{4}{3}) = \frac{4}{3}$

Second part:
$\left[\frac{x^3}{3} - 2x^2 + 3x\right]_3^4 = \left(\frac{64}{3} - 32 + 12\right) - 0 = \frac{64}{3} - 20 = \frac{4}{3}$

Total area $= \frac{4}{3} + \frac{4}{3} = \mathbf{\frac{8}{3}}$ ✓

| Part | Marks | Key Method                                                           |
| ---- | ----- | -------------------------------------------------------------------- |
| —    | 5     | Find roots, split integral at roots, integrate, take absolute values |

`hard` — 5 marks total

---

### Q14 — Optimisation (HL)

> A rectangular box with a square base has a volume of $500\text{ cm}^3$. The material for the base
> costs $0.10/\text{cm}^2$ and the material for the sides costs $0.05/\text{cm}^2$. Find the
> dimensions that minimise the total cost. [6 marks]

**Mark Scheme:**

Let base side length = $x$ cm, height = $h$ cm.

Volume: $x^2 h = 500 \Rightarrow h = \frac{500}{x^2}$

Base area = $x^2$. Side area = $4xh = 4x \cdot \frac{500}{x^2} = \frac{2000}{x}$.

Cost: $C = 0.10x^2 + 0.05 \times \frac{2000}{x} = 0.10x^2 + \frac{100}{x}$

$\frac{dC}{dx} = 0.20x - \frac{100}{x^2}$

Set to zero:
$0.20x = \frac{100}{x^2} \Rightarrow 0.20x^3 = 100 \Rightarrow x^3 = 500 \Rightarrow x = \sqrt[3]{500} \approx \mathbf{7.94 \text{ cm}}$

$h = \frac{500}{500^{2/3}} = 500^{1/3} \approx \mathbf{7.94 \text{ cm}}$

$\frac{d^2C}{dx^2} = 0.20 + \frac{200}{x^3} > 0$ for all $x > 0$, confirming a minimum. ✓

| Part | Marks | Key Method                                           |
| ---- | ----- | ---------------------------------------------------- |
| —    | 6     | Express cost function, differentiate, verify minimum |

`hard` — 6 marks total

---

### Q15 — Kinematics

> A particle moves in a straight line with velocity $v(t) = 3t^2 - 8t + 4$ m/s. (a) Find when the
> particle is at rest. [2 marks] (b) Find the total distance travelled in the first 3 seconds. [4
> marks]

**Mark Scheme:**

(a) At rest: $v = 0$:
$3t^2 - 8t + 4 = 0 \Rightarrow (3t - 2)(t - 2) = 0 \Rightarrow t = \frac{2}{3}$ s and $t = 2$ s. ✓

(b) Displacement: $s(t) = \int v\,dt = t^3 - 4t^2 + 4t + C$

$s(0) = 0$ (take starting position as origin), so $C = 0$.

Check direction changes:

- $0 < t < \frac{2}{3}$: $v > 0$ (moving right)
- $\frac{2}{3} < t < 2$: $v < 0$ (moving left)
- $t > 2$: $v > 0$ (moving right)

$s\left(\frac{2}{3}\right) = \left(\frac{2}{3}\right)^3 - 4\left(\frac{2}{3}\right)^2 + 4\left(\frac{2}{3}\right) = \frac{8}{27} - \frac{16}{9} + \frac{8}{3} = \frac{40}{27}$

$s(2) = 8 - 16 + 8 = 0$

$s(3) = 27 - 36 + 12 = 3$

Distance $= |s(\frac{2}{3}) - s(0)| + |s(2) - s(\frac{2}{3})| + |s(3) - s(2)|$
$= \frac{40}{27} + \frac{40}{27} + 3 = \frac{80}{27} + 3 = \frac{161}{27} \approx \mathbf{5.96 \text{ m}}$
✓

| Part | Marks | Key Method                                                 |
| ---- | ----- | ---------------------------------------------------------- |
| (a)  | 2     | Factor quadratic for $v = 0$                               |
| (b)  | 4     | Integrate, find turning points, sum absolute displacements |

`hard` — 6 marks total

---

## Summary

| Topic                      | Questions | Total Marks | Difficulty Range |
| -------------------------- | --------- | ----------- | ---------------- |
| Algebra and Functions      | Q1–Q4     | 17          | medium–hard      |
| Geometry and Trigonometry  | Q5–Q7     | 10          | easy–medium      |
| Statistics and Probability | Q8–Q11    | 16          | medium–hard      |
| Calculus                   | Q12–Q15   | 20          | medium–hard      |
| **Total**                  | **15**    | **63**      |                  |

## Worked Examples

Worked examples demonstrating the application of key concepts are covered in the detailed sub-pages
linked above.

## Common Pitfalls

- Confusing terminology or concepts that appear similar but have distinct meanings.
- Overlooking key assumptions or boundary conditions that limit applicability.
