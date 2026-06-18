---
title: "Functions and Equations -- Diagnostic Tests"
description: ""undoes"
$f$Not $1/f$.

**(c)** For $x \neq 2$:

$$f(f^{-1}(x)) = f\!\left(\frac{x + 3}{x - 2}\right) = \frac{2 \cdot \frac{x+3}{x-2} + 3}{\frac{x+3}{x-2} - 1} = \frac{\frac{2x + 6 + 3x - 6}{x - 2}}{\frac{x + 3 - (x - 2)}{x - 2}} = \frac{5x}{5} = x$$

Verified.

---

### UT-3: Function Transformation Order

**Question:**

The graph of $y = f(x)$ passes through the point $(2, 5)$. After the transformation
$y = -2f(x - 1) + 3$The graph passes through the point $(a, b)$.

Find the values of $a$ and $b$.

A student reasons: "We translate left by 1, so $a = 1$. Then stretch vertically by 2 and translate
up by 3, so $b = 2 \times 5 + 3 = 13$."

**(a)** Identify the error in the student"s reasoning.

**(b)** Find the correct values of $a$ and $b$.

[Difficulty: hard. Tests the counterintuitive nature of horizontal transformations.]

**Solution:**

**(a)** The student's error is in the horizontal transformation. The transformation $f(x - 1)$
shifts the graph to the **right** by 1 (not left). The student said "translate left by 1" and set
$a = 2 - 1 = 1$But the correct calculation would give $a = 2 + 1 = 3$.

**(b)** For $y = -2f(x - 1) + 3$:

- The transformation $f(x - 1)$ shifts right by 1, so the input changes: $x = 2$ requires
  $x - 1 = 2$I.e., $x = 3$. So $a = 3$.
- At the original point, $f(2) = 5$. The vertical stretch by $-2$ (reflection in $x$-axis then
  stretch by 2) gives $-2 \times 5 = -10$. Then translate up by 3: $b = -10 + 3 = -7$.

The point $(2, 5)$ maps to $(3, -7)$.

---

## Integration Tests

> Tests synthesis of functions and equations with other topics.

### IT-1: Iteration and Fixed Points (with Sequences)

**Question:**

The function $f$ is defined by $f(x) = \dfrac{2x + 3}{x + 2}$.

**(a)** Find the fixed points of $f$ (values where $f(x) = x$).

**(b)** Show that $f(f(x)) = x$ for all $x \neq -2$And hence state $f^{-1}(x)$.

[Difficulty: hard. Combines function iteration with inverse function identification.]

**Solution:**

**(a)** Solve $f(x) = x$:

$$\frac{2x + 3}{x + 2} = x \implies 2x + 3 = x^2 + 2x \implies x^2 = 3 \implies x = \sqrt{3} \text{ or } x = -\sqrt{3}$$

The fixed points are $x = \sqrt{3}$ and $x = -\sqrt{3}$.

**(b)**

$$f(f(x)) = f\!\left(\frac{2x + 3}{x + 2}\right) = \frac{2 \cdot \frac{2x+3}{x+2} + 3}{\frac{2x+3}{x+2} + 2}$$

$$= \frac{\frac{4x + 6 + 3x + 6}{x + 2}}{\frac{2x + 3 + 2x + 4}{x + 2}} = \frac{7x + 12}{4x + 7}$$

This should equal $x$:

$$\frac{7x + 12}{4x + 7} = x \implies 7x + 12 = 4x^2 + 7x \implies 4x^2 = 12 \implies x^2 = 3$$

This is not identically equal to $x$Confirming that $f$ is not self-inverse.

Since $f$ is a Mobius transformation with $ad - bc = 2 \cdot 2 - 1 \cdot 3 = 1 \neq 0$It is
invertible. The inverse is:

$$f^{-1}(x) = \frac{2x - 3}{-x + 2} = \frac{2x - 3}{2 - x}, \quad x \neq 2$$

We can verify:
$f(f^{-1}(x)) = \frac{2 \cdot \frac{2x-3}{2-x} + 3}{\frac{2x-3}{2-x} + 2} = \frac{\frac{2(2x-3) + 3(2-x)}{2-x}}{\frac{(2x-3) + 2(2-x)}{2-x}} = \frac{4x-6+6-3x}{2x-3+4-2x} = \frac{x}{1} = x$.

So $f^{-1}(x) = \dfrac{2x - 3}{2 - x}$ with domain $x \neq 2$.
