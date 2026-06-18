---
title: "Inequalities -- Diagnostic Tests"
description: "" the axis). So at a double root, the expression equals zero, and the inequality
   direction determines whether to include or exclude it.

5. **Not checking the domain before squaring.** When solving $\sqrt{f(x)} > g(x)$You must first
   establish that $f(x) \geq 0$ and $g(x) \geq 0$ before squaring both sides. Squaring an inequality
   where one side is negative gives incorrect results.

---

## DSE Exam-Style Questions

### DSE-1

Find the range of values of $x$ for which:

(a) $x^2 - 5x + 6 < 0$ (2 marks) (b) $2x^2 + 3x - 2 \geq 0$ (3 marks) (c) Both inequalities in (a)
and (b) are satisfied simultaneously. (2 marks)

**Solution:**

(a) $(x - 2)(x - 3) < 0 \implies 2 < x < 3$I.e. $x \in (2,\; 3)$.

(b) $(2x - 1)(x + 2) \geq 0$.

Critical values: $x = \dfrac{1}{2}$ and $x = -2$.

Opens upward: $x \leq -2$ or $x \geq \dfrac{1}{2}$I.e.
$x \in (-\infty,\; -2] \cup \left[\dfrac{1}{2},\; \infty\right)$.

(c) Intersection of $(2,\; 3)$ and $(-\infty,\; -2] \cup \left[\dfrac{1}{2},\; \infty\right)$:

$(2,\; 3) \cap \left[\dfrac{1}{2},\; \infty\right) = (2,\; 3)$.

Solution: $x \in (2,\; 3)$.

---

### DSE-2

Find the range of values of $k$ for which the equation $x^2 + 2kx + k^2 + 3 = 0$ has:

(a) Two distinct real roots. (2 marks) (b) No real roots. (1 mark) (c) Real roots that are both
positive. (4 marks)

**Solution:**

(a) $\Delta = (2k)^2 - 4(k^2 + 3) = 4k^2 - 4k^2 - 12 = -12 < 0$ for all $k$.

There are NEVER two distinct real roots. The answer is: no such value of $k$ exists.

(b) $\Delta < 0$ for all $k$So there are no real roots for all values of $k$.

(c) Since the equation never has real roots, there is no value of $k$ for which both roots are
positive.

---

### DSE-3

Solve the inequality $\dfrac{x^2 - 4x + 3}{x^2 - 9} \leq 0$. (5 marks)

**Solution:**

$$\frac{(x-1)(x-3)}{(x-3)(x+3)} = \frac{x - 1}{x + 3}$$

Provided $x \neq 3$ (makes denominator zero in original) and $x \neq -3$.

$\dfrac{x - 1}{x + 3} \leq 0$.

Critical values: $x = -3$ (excluded) and $x = 1$ (included).

Sign chart:

| Interval     | Test     | Sign |
| ------------ | -------- | ---- |
| $x < -3$     | $x = -4$ | $+$  |
| $-3 < x < 1$ | $x = 0$  | $-$  |
| $x > 1$      | $x = 2$  | $+$  |

Including $x = 1$Excluding $x = -3$ and $x = 3$.

Solution: $x \in (-3,\; 1] \cup (3,\; \infty)$? No -- checking: for
$x > 3$, $\dfrac{x-1}{x+3} > 0$Which does not satisfy $\leq 0$.

Correct solution: $x \in (-3,\; 1]$.

---

### DSE-4

Solve $|x - 3| > |2x + 1|$. (4 marks)

**Solution:**

Square both sides (both sides are non-negative after taking absolute value):

$$(x - 3)^2 > (2x + 1)^2$$

$$x^2 - 6x + 9 > 4x^2 + 4x + 1$$

$$0 > 3x^2 + 10x - 8$$

$$3x^2 + 10x - 8 < 0$$

$$(3x - 2)(x + 4) < 0$$

$$-4 < x < \frac{2}{3}$$

Solution: $x \in \left(-4,\; \dfrac{2}{3}\right)$.

---

### DSE-5

Find the range of values of $x$ for which both $\dfrac{x}{x - 2} > 0$ and $x^2 - 4x + 3 < 0$ are
satisfied. (5 marks)

**Solution:**

First inequality: $\dfrac{x}{x - 2} > 0$.

Critical values: $x = 0$ and $x = 2$.

Sign chart: positive for $x < 0$ and $x > 2$.

Solution: $x \in (-\infty,\; 0) \cup (2,\; \infty)$.

Second inequality: $(x - 1)(x - 3) < 0 \implies 1 < x < 3$.

Solution: $x \in (1,\; 3)$.

Intersection: $((-\infty,\; 0) \cup (2,\; \infty)) \cap (1,\; 3) = (2,\; 3)$.

Solution: $x \in (2,\; 3)$.
