---
title: "Algebra and Functions -- Diagnostic Tests"
description: ""(x) = 0$:

$$f'(x) = 3x^2 - 3$$ $$3x^2 - 3 = 0$$ $$x^2 = 1$$ $$x = 1 \text{ or } x = -1$$

At $x = 1$: $y = 1 - 3 + 1 = -1$. Point: $(1, -1)$. At $x = -1$: $y = -1 + 3 + 1 = 3$. Point:
$(-1, 3)$.

Using the second derivative $f''(x) = 6x$:

At $x = 1$: $f''(1) = 6 > 0$, so $(1, -1)$ is a **local minimum**. At $x = -1$: $f''(-1) = -6 < 0$,
so $(-1, 3)$ is a **local maximum**.

---

## Integration Tests

### IT-1: Functions and Quadratic Applications

**Question:**

(a) The revenue $R$ (in pounds) from selling $x$ items is given by $R(x) = -2x^2 + 80x$, and the
cost is given by $C(x) = 15x + 200$. Find the number of items that maximises profit and calculate
the maximum profit.

(b) A ball is thrown upwards and its height $h$ metres after $t$ seconds is given by
$h(t) = -5t^2 + 20t + 1$. Find the maximum height reached and the time at which the ball hits the
ground.

(c) Given $f(x) = 2x + 1$ and $g(x) = \frac{1}{x}$ for $x \neq 0$, solve the equation
$fg(x) = g(x) + 3$.

(d) The function $y = x^2 + px + q$ has a turning point at $(2, -3)$. Find the values of $p$ and
$q$.

**Solution:**

(a) Profit $P(x) = R(x) - C(x) = -2x^2 + 80x - 15x - 200 = -2x^2 + 65x - 200$.

Maximum profit occurs at the vertex: $x = -\frac{b}{2a} = -\frac{65}{-4} = 16.25$.

Since we cannot sell a fraction of an item, check $x = 16$ and $x = 17$:

$P(16) = -2(256) + 65(16) - 200 = -512 + 1040 - 200 = 328$
$P(17) = -2(289) + 65(17) - 200 = -578 + 1105 - 200 = 327$

Maximum profit is $\pounds 328$ when 16 items are sold.

(b) Maximum height at the vertex: $t = -\frac{20}{2(-5)} = 2$ seconds.

$h(2) = -5(4) + 20(2) + 1 = -20 + 40 + 1 = 21$ metres.

The ball hits the ground when $h = 0$: $-5t^2 + 20t + 1 = 0$, so $5t^2 - 20t - 1 = 0$.

$$t = \frac{20 \pm \sqrt{400 + 20}}{10} = \frac{20 \pm \sqrt{420}}{10} = \frac{20 \pm 20.49}{10}$$

Taking the positive root: $t = \frac{40.49}{10} \approx 4.05$ seconds.

(c) $fg(x) = f(g(x)) = f\left(\frac{1}{x}\right) = 2\left(\frac{1}{x}\right) + 1 = \frac{2}{x} + 1$.

$$\frac{2}{x} + 1 = \frac{1}{x} + 3$$ $$\frac{1}{x} = 2$$ $$x = \frac{1}{2}$$

(d) At the turning point, $f'(x) = 2x + p = 0$ when $x = 2$: $2(2) + p = 0$, so $p = -4$.

Substituting $x = 2, y = -3$: $-3 = 4 - 8 + q$, so $q = 1$.

The equation is $y = x^2 - 4x + 1$.

---

### IT-2: Advanced Function Analysis

**Question:**

(a) The function $f(x) = x^2 - 6x + 5$ is defined on the domain $x \geq 3$. Find $f^{-1}(x)$ and
state its domain.

(b) Solve the inequality $x^2 - 5x + 6 > 0$.

(c) The graph of $y = f(x)$ passes through the points $(0, 2)$, $(2, 6)$, and $(4, 2)$. Sketch a
possible graph and determine whether $f$ could be a quadratic function. Explain your reasoning.

(d) A function is defined by $f(x) = ax^3 + bx^2 + cx + d$. Given that $f(0) = 4$, $f(1) = 2$,
$f(2) = 6$, and $f(3) = 28$, find the values of $a$, $b$, $c$, and $d$.

**Solution:**

(a) Completing the square: $f(x) = x^2 - 6x + 5 = (x - 3)^2 - 4$.

Since the domain is $x \geq 3$, $f(x) \geq -4$ (range). Let $y = (x - 3)^2 - 4$:

$$y + 4 = (x - 3)^2$$ $$x - 3 = \sqrt{y + 4}$$ (taking positive root since $x \geq 3$)
$$x = 3 + \sqrt{y + 4}$$

$f^{-1}(x) = 3 + \sqrt{x + 4}$.

Domain of $f^{-1}$: $x \geq -4$ (which is the range of $f$).

(b) $x^2 - 5x + 6 > 0$. Factorising: $(x - 2)(x - 3) > 0$.

The quadratic is positive when $x < 2$ or $x > 3$. So the solution is
$x \in (-\infty, 2) \cup (3, \infty)$.

(c) If $f$ is quadratic, its graph is a parabola. A parabola is symmetric about its axis of
symmetry. The points $(0, 2)$ and $(4, 2)$ are symmetric about $x = 2$, which is consistent. The
turning point would be at $x = 2$ with $y = 6$ (maximum, since the parabola opens downward). The
quadratic $f(x) = -a(x - 2)^2 + 6$: using $(0, 2)$: $2 = -4a + 6$, so $a = 1$. Thus
$f(x) = -(x - 2)^2 + 6 = -x^2 + 4x + 2$. Yes, this could be a quadratic function.

(d) From $f(0) = 4$: $d = 4$.

From $f(1) = 2$: $a + b + c + 4 = 2$, so $a + b + c = -2$ ... (1) From $f(2) = 6$:
$8a + 4b + 2c + 4 = 6$, so $8a + 4b + 2c = 2$, i.e., $4a + 2b + c = 1$ ... (2) From $f(3) = 28$:
$27a + 9b + 3c + 4 = 28$, so $27a + 9b + 3c = 24$, i.e., $9a + 3b + c = 8$ ... (3)

Subtract (1) from (2): $3a + b = 3$ ... (4) Subtract (2) from (3): $5a + b = 7$ ... (5) Subtract (4)
from (5): $2a = 4$, so $a = 2$.

From (4): $b = 3 - 6 = -3$. From (1): $c = -2 - 2 + 3 = -1$.

$f(x) = 2x^3 - 3x^2 - x + 4$.

## Summary

The key principles covered in this topic are linked in the sub-pages above. Focus on understanding
the definitions, applying the formulas or frameworks, and evaluating strengths and limitations of
each approach.

## Worked Examples

Worked examples demonstrating the application of key concepts are covered in the detailed sub-pages
linked above.

## Common Pitfalls

- Forgetting to consider the domain when finding inverse functions, especially for restricted
  quadratics and square root functions.
- Applying transformations in the wrong order: horizontal transformations must be applied before
  vertical transformations.
- Sign errors when completing the square or when solving quadratic inequalities (forgetting to
  reverse the inequality when multiplying by a negative value).
$$
- Confusing composite function notation: $fg(x)$ means $f(g(x))$, applying $g$ first, then $f$.
