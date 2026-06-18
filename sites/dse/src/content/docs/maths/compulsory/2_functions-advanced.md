---
title: Functions (Advanced)
description: ""$f$ of $g$ of $x$".

5. **Transformation order errors.** For $y = af(kx + b) + c$Apply from inside out: horizontal shift
   by $-b$Horizontal stretch by $1/k$Vertical stretch by $a$Vertical shift by $c$. Mixing up this
   order is a very common mistake.

6. **Ignoring the range when checking invertibility.** Even if $f$ is one-to-one on its domain, the
   codomain must equal the range for $f$ to be bijective. In DSE problems, the codomain is assumed
   to be the range unless stated otherwise.

7. **Forgetting that $f \circ g$ and $g \circ f$ differ.** , $f \circ g \neq g \circ f$. Always
   compute each separately and check domains independently.

8. **Piecewise function boundary values.** At the boundary between two pieces, always check which
   expression applies. If the definition uses $\leq$ for one piece and $\lt$ for the next, the
   boundary point belongs to the $\leq$ piece.

---

## Exam-Style Problems

**Problem 1.** Let $f(x) = \dfrac{2x + 3}{x - 1}$ ($x \neq 1$) and $g(x) = \sqrt{x + 2}$. Find
$(f \circ g)(x)$ and its domain.

<details>
<summary>Solution</summary>

$$(f \circ g)(x) = f(\sqrt{x+2}) = \frac{2\sqrt{x+2} + 3}{\sqrt{x+2} - 1}$$

$\mathrm{dom}(g) = [-2, \infty)$. $\mathrm{dom}(f) = \mathbb{R} \setminus \{1\}$.

Need $\sqrt{x+2} \neq 1 \implies x + 2 \neq 1 \implies x \neq -1$.

$\mathrm{dom}(f \circ g) = [-2, -1) \cup (-1, \infty)$.

</details>

**Problem 2.** Find the inverse of $f(x) = \dfrac{2x - 1}{x + 3}$ ($x \neq -3$). Hence determine
whether $f(x) = f^{-1}(x)$ has any real solutions.

<details>
<summary>Solution</summary>

Set $y = \dfrac{2x-1}{x+3}$: $y(x+3) = 2x-1 \implies xy + 3y = 2x - 1 \implies x(y-2) = -1 - 3y$.

$$f^{-1}(x) = \frac{-1-3x}{x-2} = \frac{3x+1}{2-x}$$

For $f(x) = f^{-1}(x)$:

$$\frac{2x-1}{x+3} = \frac{3x+1}{2-x}$$

$$(2x-1)(2-x) = (3x+1)(x+3)$$

$$4x - 2x^2 - 2 + x = 3x^2 + 9x + x + 3$$

$$-2x^2 + 5x - 2 = 3x^2 + 10x + 3$$

$$-5x^2 - 5x - 5 = 0 \implies x^2 + x + 1 = 0$$

$\Delta = 1 - 4 = -3 \lt 0$. No real solutions.

</details>

**Problem 3.** The function $f$ is defined by $f(x) = x^2 + 4x$ for $x \geq -2$. Find $f^{-1}(5)$.

<details>
<summary>Solution</summary>

$f(x) = (x+2)^2 - 4$. Since $x \geq -2$ and the vertex is at $x = -2$, $f$ is strictly increasing.

Range: $[-4, \infty)$. Since $5 \geq -4$, $f^{-1}(5)$ exists.

Set $(x+2)^2 - 4 = 5 \implies (x+2)^2 = 9 \implies x + 2 = 3$ (positive root).

$$x = 1$$

$f^{-1}(5) = 1$. Verification: $f(1) = 1 + 4 = 5$. Correct.

</details>

**Problem 4.** Describe fully the sequence of transformations mapping $y = x^2$ to
$y = 2(3-x)^2 + 1$.

<details>
<summary>Solution</summary>

$y = 2(3-x)^2 + 1 = 2[-(x-3)]^2 + 1 = 2(x-3)^2 + 1$.

1. **Translate** right by $3$ units: $y = (x-3)^2$.
2. **Vertical stretch** by factor $2$: $y = 2(x-3)^2$.
3. **Translate** up by $1$ unit: $y = 2(x-3)^2 + 1$.

The vertex moves from $(0, 0)$ to $(3, 1)$. The parabola opens upward in both cases.

</details>

**Problem 5.** Let $f(x) = \dfrac{1}{x+1}$ ($x \neq -1$) and $g(x) = x^2$. Find
$(f \circ g \circ f)(x)$ and its domain.

<details>
<summary>Solution</summary>

First, $(g \circ f)(x) = g(f(x)) = \left(\dfrac{1}{x+1}\right)^2 = \dfrac{1}{(x+1)^2}$.

Then:

$$(f \circ g \circ f)(x) = f\!\left(\frac{1}{(x+1)^2}\right) = \frac{1}{\dfrac{1}{(x+1)^2} + 1} = \frac{(x+1)^2}{(x+1)^2 + 1} = \frac{(x+1)^2}{x^2 + 2x + 2}$$

Domain: need $x + 1 \neq 0 \implies x \neq -1$And $\dfrac{1}{(x+1)^2} + 1 \neq 0$.

Since $\dfrac{1}{(x+1)^2} \geq 0$ for all $x \neq -1$The second expression is always at least
$1 > 0$.

$\mathrm{dom}(f \circ g \circ f) = \mathbb{R} \setminus \{-1\}$.

</details>

**Problem 6.** Given $f(x) = |2x - 1| + |x + 3|$Find the minimum value of $f$.

<details>
<summary>Solution</summary>

Critical points: $2x - 1 = 0 \implies x = \dfrac{1}{2}$And $x + 3 = 0 \implies x = -3$.

For $x \lt -3$: $f(x) = -(2x-1) + -(x+3) = -3x - 2$ (decreasing as $x$ increases).

For $-3 \leq x \lt \dfrac{1}{2}$: $f(x) = -(2x-1) + (x+3) = -x + 4$ (decreasing).

For $x \geq \dfrac{1}{2}$: $f(x) = (2x-1) + (x+3) = 3x + 2$ (increasing).

The minimum occurs at the transition from decreasing to increasing, i.e., at $x = \dfrac{1}{2}$:

$$f\!\left(\frac{1}{2}\right) = 3\!\left(\frac{1}{2}\right) + 2 = \frac{7}{2}$$

Minimum value: $\dfrac{7}{2}$Attained at $x = \dfrac{1}{2}$.

</details>

**Problem 7.** If $f(x) = \dfrac{x}{x^2 + 1}$Find the range of $f$.

<details>
<summary>Solution</summary>

Let $y = \dfrac{x}{x^2 + 1}$. Then $yx^2 + y = x \implies yx^2 - x + y = 0$.

For real $x$This quadratic in $x$ must have $\Delta \geq 0$:

$$\Delta = 1 - 4y^2 \geq 0 \implies y^2 \leq \frac{1}{4} \implies -\frac{1}{2} \leq y \leq \frac{1}{2}$$

When $y = \dfrac{1}{2}$:
$\dfrac{1}{2}x^2 - x + \dfrac{1}{2} = 0 \implies (x-1)^2 = 0 \implies x = 1$. Attainable.

When $y = -\dfrac{1}{2}$:
$\dfrac{1}{2}x^2 + x + \dfrac{1}{2} = 0 \implies (x+1)^2 = 0 \implies x = -1$. Attainable.

Range: $\left[-\dfrac{1}{2},\; \dfrac{1}{2}\right]$.

</details>

**Problem 8.** If $f(x) = 2x - 1$ and $g(x) = x + 3$Find the linear function $h(x)$ such that
$(f \circ h)(x) = (g \circ f)(x)$ for all $x$.

<details>
<summary>Solution</summary>

$(g \circ f)(x) = g(2x - 1) = 2x - 1 + 3 = 2x + 2$.

$(f \circ h)(x) = f(h(x)) = 2h(x) - 1$.

Setting equal: $2h(x) - 1 = 2x + 2 \implies h(x) = x + \dfrac{3}{2}$.

Verification: $(f \circ h)(x) = 2\!\left(x + \dfrac{3}{2}\right) - 1 = 2x + 2$. Correct.

</details>

---

## Cross-References

- **Basic Functions:** Foundational definitions and notation are in [Functions](1_functions.mdx).
- **Quadratics:** Quadratic functions feature heavily in inverse function problems. See
  [Quadratics](3_quadratics.mdx).
- **Inequalities:** Domain restrictions often involve solving inequalities. See the inequalities
  notes.
- **Coordinate Geometry:** Graphical interpretations of functions and transformations. See
  [Coordinate Geometry](9_coordinate-geometry.md).

---

:::tip Diagnostic Test Ready to test your understanding of **Functions (Advanced)**? The contains the hardest questions within
the DSE specification for this topic, each with a full worked solution.

**Unit tests** probe edge cases and common misconceptions. **Integration tests** combine Functions
(Advanced) with other DSE mathematics topics to test synthesis under exam conditions.

See for instructions on
self-marking and building a personal test matrix.

---

## DSE Exam Technique

### Showing Working

For function problems in DSE Paper 1:

1. When finding the domain of a composite function, explicitly state $\mathrm{dom}(g)$ and the
   condition $g(x) \in \mathrm{dom}(f)$.
2. When finding an inverse, write $y = f(x)$Solve for $x$And then interchange.
3. When checking invertibility, verify that the function is one-to-one (strictly increasing or
   decreasing on the domain).
4. For transformation problems, identify the sequence of transformations from inside out.

### Significant Figures

Coordinate answers should be exact where possible. Decimal answers to 3 significant figures.

### Common DSE Question Types

1. **Domain of composite functions** (especially with square roots and rational functions).
2. **Finding inverse functions** (restricted quadratics, rational functions).
3. **Transformation of points** (tracking specific points through a series of transformations).
4. **Self-inverse verification** (show $f^{-1} = f$).
5. **Range finding** (using the discriminant method for rational functions).

---

## Additional Worked Examples

**Worked Example 13: Domain with nested functions**

Let $f(x) = \dfrac{1}{\sqrt{x - 2}}$ and $g(x) = x^2 + 1$. Find $\mathrm{dom}(f \circ g)$ and
$\mathrm{dom}(g \circ f)$.

<details>
<summary>Solution</summary>

$\mathrm{dom}(f) = (2, \infty)$ (need $x - 2 > 0$). $\mathrm{dom}(g) = \mathbb{R}$.

**$f \circ g$:** Need $g(x) \in \mathrm{dom}(f)$I.e., $x^2 + 1 > 2 \implies x^2 > 1 \implies x < -1$
or $x > 1$.

$\mathrm{dom}(f \circ g) = (-\infty, -1) \cup (1, \infty)$.

**$g \circ f$:** Need $x \in \mathrm{dom}(f) = (2, \infty)$.

$\mathrm{dom}(g \circ f) = (2, \infty)$.

</details>

**Worked Example 14: Inverse of a restricted rational function**

Let $f(x) = \dfrac{2x}{x - 3}$ for $x > 3$. Find $f^{-1}$.

<details>
<summary>Solution</summary>

First, check one-to-one: $f(x) = 2 + \dfrac{6}{x - 3}$. For $x > 3$, $x - 3 > 0$So
$\dfrac{6}{x-3} > 0$ and is strictly decreasing. Therefore $f$ is strictly decreasing and hence
one-to-one on $(3, \infty)$.

Set $y = \dfrac{2x}{x - 3}$:

$$y(x - 3) = 2x \implies yx - 3y = 2x \implies x(y - 2) = 3y$$

$$x = \frac{3y}{y - 2}$$

$$f^{-1}(x) = \frac{3x}{x - 2}$$

To find the domain of $f^{-1}$: since $\mathrm{range}(f)$ must equal $\mathrm{dom}(f^{-1})$.

As $x \to 3^+$$f(x) \to +\infty$. As $x \to +\infty$$f(x) \to 2^+$.

$\mathrm{range}(f) = (2, \infty)$So $\mathrm{dom}(f^{-1}) = (2, \infty)$.

</details>

**Worked Example 15: Even and odd functions**

Determine whether $f(x) = \dfrac{x}{x^2 + 1}$ is even, odd, or neither.

<details>
<summary>Solution</summary>

$$f(-x) = \frac{-x}{(-x)^2 + 1} = \frac{-x}{x^2 + 1} = -f(x)$$

Since $f(-x) = -f(x)$ for all real $x$, $f$ is an odd function.

</details>

**Worked Example 16: Range using discriminant**

Find the range of $f(x) = \dfrac{x^2 - x + 1}{x^2 + x + 1}$.

<details>
<summary>Solution</summary>

Let $y = \dfrac{x^2 - x + 1}{x^2 + x + 1}$. Since
$x^2 + x + 1 = \left(x + \dfrac{1}{2}\right)^2 + \dfrac{3}{4} > 0$ for all $x$:

$$y(x^2 + x + 1) = x^2 - x + 1 \implies (y - 1)x^2 + (y + 1)x + (y - 1) = 0$$

For real $x$, $\Delta \geq 0$:

$$(y + 1)^2 - 4(y - 1)^2 \geq 0 \implies (y + 1 - 2y + 2)(y + 1 + 2y - 2) \geq 0$$

$$(-y + 3)(3y - 1) \geq 0 \implies (y - 3)(3y - 1) \leq 0 \implies \frac{1}{3} \leq y \leq 3$$

Range: $\left[\dfrac{1}{3},\; 3\right]$.

</details>

---

## DSE Exam-Style Questions

**DSE Practice 1.** Let $f(x) = \dfrac{3x - 1}{x + 2}$ and $g(x) = \dfrac{x + 1}{x - 1}$. Find
$(g \circ f)(2)$.

<details>
<summary>Solution</summary>

$f(2) = \dfrac{6 - 1}{2 + 2} = \dfrac{5}{4}$.

$(g \circ f)(2) = g\!\left(\dfrac{5}{4}\right) = \dfrac{5/4 + 1}{5/4 - 1} = \dfrac{9/4}{1/4} = 9$.

</details>

**DSE Practice 2.** The function $f$ is defined by $f(x) = 2x^2 - 8x + 5$ for $x \geq 2$. Find the
range of $f$ and the value of $x$ for which $f(x) = 1$.

<details>
<summary>Solution</summary>

$f(x) = 2(x - 2)^2 - 3$. Since $x \geq 2$ and the vertex is at $x = 2$: range is $[-3, \infty)$.

$2(x - 2)^2 - 3 = 1 \implies (x - 2)^2 = 2 \implies x = 2 + \sqrt{2}$ (positive root since
$x \geq 2$).

</details>

**DSE Practice 3.** The graph of $y = f(x)$ passes through $(0, -1)$ and has a local maximum at
$(3, 4)$. Find the coordinates of the corresponding points on $y = -f(2x + 1) + 3$.

<details>
<summary>Solution</summary>

For $(0, -1)$: $2x + 1 = 0 \implies x = -\dfrac{1}{2}$. $y = -(-1) + 3 = 4$. Point:
$\left(-\dfrac{1}{2},\; 4\right)$.

For the maximum at $(3, 4)$: $2x + 1 = 3 \implies x = 1$. $y = -(4) + 3 = -1$. The maximum becomes a
minimum at $\left(1,\; -1\right)$.

</details>

**DSE Practice 4.** Let $f(x) = x^3 - 3x$. Show that $f$ is not one-to-one on $\mathbb{R}$But is
one-to-one on $[1, \infty)$. Find $f^{-1}(0)$.

<details>
<summary>Solution</summary>

$f(0) = 0$$f(\sqrt{3}) = 3\sqrt{3} - 3\sqrt{3} = 0$$f(-\sqrt{3}) = 0$. Since $f$ takes the same
value at three different points, it is not one-to-one on $\mathbb{R}$.

For $x \geq 1$: $f"(x) = 3x^2 - 3 = 3(x^2 - 1) \geq 0$ (with equality only at $x = 1$). So $f$ is
strictly increasing on $[1, \infty)$ and hence one-to-one.

$f^{-1}(0)$: solve $x^3 - 3x = 0 \implies x(x^2 - 3) = 0$. On $[1, \infty)$: $x = \sqrt{3}$. So
$f^{-1}(0) = \sqrt{3}$.

</details>

**DSE Practice 5.** Let $h(x) = f(x) + g(x)$ where $f(x) = x^2$ and $g(x) = \dfrac{1}{x - 1}$. Find
the domain of $h$.

<details>
<summary>Solution</summary>

$\mathrm{dom}(f) = \mathbb{R}$$\mathrm{dom}(g) = \mathbb{R} \setminus \{1\}$.

$\mathrm{dom}(h) = \mathrm{dom}(f) \cap \mathrm{dom}(g) = \mathbb{R} \setminus \{1\}$.

</details>

**DSE Practice 6.** Given $f(x) = \dfrac{x}{x + 1}$ for $x \neq -1$Find $f^{-1}$ and solve
$f(x) = f^{-1}(x)$.

<details>
<summary>Solution</summary>

$y = \dfrac{x}{x + 1} \implies y(x + 1) = x \implies yx + y = x \implies x(1 - y) = -y \implies x = \dfrac{y}{y - 1}$.

$f^{-1}(x) = \dfrac{x}{x - 1}$.

$f(x) = f^{-1}(x)$: $\dfrac{x}{x + 1} = \dfrac{x}{x - 1}$.

If $x = 0$: both sides equal $0$. So $x = 0$ is a solution.

If $x \neq 0$:
$\dfrac{1}{x + 1} = \dfrac{1}{x - 1} \implies x - 1 = x + 1 \implies -1 = 1$Contradiction.

Solution: $x = 0$.

</details>

## Worked Examples

### Example 1: Modulus equation

**Problem.** Solve $|2x - 3| = x + 1$.

**Solution.** We require $x + 1 \geq 0$, i.e. $x \geq -1$.

Case 1: $2x - 3 = x + 1 \implies x = 4$. Check: $|8-3| = 5 = 4+1$. ✓

Case 2: $2x - 3 = -(x + 1) \implies 2x - 3 = -x - 1 \implies 3x = 2 \implies x = \tfrac{2}{3}$.
Check: $|\tfrac{4}{3}-3| = \tfrac{5}{3} = \tfrac{2}{3}+1$. ✓

Solutions: $x = \tfrac{2}{3}$ or $x = 4$.

$\blacksquare$

### Example 2: Rational function inequality

**Problem.** Solve $\dfrac{x^2 - 4}{x - 2} > 0$.

**Solution.** For $x \neq 2$: $\dfrac{x^2-4}{x-2} = x + 2$.

We need $x + 2 > 0$ and $x \neq 2$, giving $x > -2$ with $x \neq 2$.

Solution: $(-2,\, 2) \cup (2,\, \infty)$.

$\blacksquare$

## Summary

- Modulus equations $|f(x)| = a$: split into $f(x) = a$ and $f(x) = -a$; verify solutions in the
  original equation.
- Modulus inequalities: $|f(x)| < a \Leftrightarrow -a < f(x) < a$;
  $|f(x)| > a \Leftrightarrow f(x) < -a$ or $f(x) > a$.
- Rational functions: state domain restrictions before simplifying; cancelled factors indicate
  holes, not asymptotes.
- Use sign charts for rational inequalities; include or exclude endpoints based on strictness.

:::

## Related Topics

- [Linear Algebra: Vector Spaces](https://university.wyattau.com/mathematics/linear-algebra/) — Generalisation of functions to vector-space morphisms.
- [Real Analysis: Continuity](https://university.wyattau.com/mathematics/3-real-analysis/4_continuity/) — Rigorous epsilon-delta definition of the continuity studied informally here.
