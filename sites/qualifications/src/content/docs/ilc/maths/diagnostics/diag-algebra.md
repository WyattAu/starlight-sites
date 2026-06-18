---
title: "Algebra -- Diagnostic Tests"
description: ""s profits increase by $\pounds 5000$ each year. In the first year, profits are
$\pounds 20000$. In which year will the profits first exceed $\pounds 100000$?

(b) The half-life of a radioactive substance is 8 days. If a sample initially contains
$640\,\text{mg}$, calculate the amount remaining after 40 days.

(c) A geometric sequence has first term 3 and common ratio $r$. The sum of the first 4 terms is 255.
Find the value of $r$.

(d) The equation $x^2 + px + q = 0$ has roots $\alpha$ and $\beta$. Express the following in terms
of $p$ and $q$: (i) $\alpha^2 + \beta^2$, (ii) $\frac{1}{\alpha} + \frac{1}{\beta}$.

**Solution:**

(a) This is an arithmetic sequence with $a = 20000$ and $d = 5000$. We need $u_n > 100000$.

$$a + (n - 1)d > 100000$$ $$20000 + (n - 1)(5000) > 100000$$ $$(n - 1)(5000) > 80000$$
$$n - 1 > 16$$ $$n > 17$$

Profits first exceed $\pounds 100000$ in **year 18**.

(b) After 40 days, the number of half-lives elapsed $= 40 / 8 = 5$.

Remaining amount
$= 640 \times \left(\frac{1}{2}\right)^5 = 640 \times \frac{1}{32} = 20\,\text{mg}$.

(c) $S_4 = \frac{a(r^4 - 1)}{r - 1} = 255$. With $a = 3$:

$$\frac{3(r^4 - 1)}{r - 1} = 255$$

Since $r^4 - 1 = (r^2 - 1)(r^2 + 1) = (r - 1)(r + 1)(r^2 + 1)$:

$$\frac{3(r - 1)(r + 1)(r^2 + 1)}{r - 1} = 255$$ $$3(r + 1)(r^2 + 1) = 255$$
$$(r + 1)(r^2 + 1) = 85$$

Since 85 = $5 \times 17$, try $r + 1 = 5$: $r = 4$. Then $r^2 + 1 = 17$. So $5 \times 17 = 85$. This
works.

Therefore $r = 4$.

(d) By Vieta's formulas: $\alpha + \beta = -p$ and $\alpha\beta = q$.

(i) $\alpha^2 + \beta^2 = (\alpha + \beta)^2 - 2\alpha\beta = (-p)^2 - 2q = p^2 - 2q$.

(ii) $\frac{1}{\alpha} + \frac{1}{\beta} = \frac{\alpha + \beta}{\alpha\beta} = \frac{-p}{q}$.

---

### IT-2: Advanced Algebra and Problem Solving

**Question:**

(a) Find the values of $k$ for which the quadratic equation $x^2 + 2kx + k^2 + 8 = 0$ has: (i) two
distinct real roots, (ii) one repeated root, (iii) no real roots.

(b) Prove algebraically that the product of two consecutive even numbers is always even.

(c) The first three terms of a geometric sequence are $x$, $x + 4$, and $x + 12$. Find the value of
$x$ and the common ratio.

(d) A rectangle has length $(x + 5)\,\text{cm}$ and width $(x - 3)\,\text{cm}$. The area is
$75\,\text{cm}^2$. Find $x$ and hence the perimeter of the rectangle.

**Solution:**

(a) Discriminant $\Delta = b^2 - 4ac = (2k)^2 - 4(1)(k^2 + 8) = 4k^2 - 4k^2 - 32 = -32$.

Since $\Delta = -32 < 0$ for all values of $k$, the equation **always has no real roots** regardless
of the value of $k$.

(i) No value of $k$ gives two distinct real roots. (ii) No value of $k$ gives one repeated root.
(iii) All values of $k$ give no real roots.

(b) Let two consecutive even numbers be $2n$ and $2(n + 1)$, where $n$ is an integer.

Product $= 2n \times 2(n + 1) = 4n(n + 1)$.

Since $n$ and $n + 1$ are consecutive integers, one of them is always even, so $n(n + 1)$ is even.
Let $n(n + 1) = 2m$ for some integer $m$.

Product $= 4 \times 2m = 8m$, which is a multiple of 2 (even). Therefore, the product of two
consecutive even numbers is always even.

(c) For a geometric sequence, $\frac{u_2}{u_1} = \frac{u_3}{u_2}$:

$$\frac{x + 4}{x} = \frac{x + 12}{x + 4}$$

$$(x + 4)^2 = x(x + 12)$$ $$x^2 + 8x + 16 = x^2 + 12x$$ $$16 = 4x$$ $$x = 4$$

The terms are: $4, 8, 16$. Common ratio $r = 8/4 = 2$.

(d) Area $= (x + 5)(x - 3) = 75$

$$x^2 + 2x - 15 = 75$$ $$x^2 + 2x - 90 = 0$$ $$(x + 10)(x - 8) = 0$$

$x = 8$ (rejecting $x = -10$ since dimensions cannot be negative).

Length $= 8 + 5 = 13\,\text{cm}$. Width $= 8 - 3 = 5\,\text{cm}$.

Perimeter $= 2(13 + 5) = 2(18) = 36\,\text{cm}$.

## Summary

The key principles covered in this topic are linked in the sub-pages above. Focus on understanding
the definitions, applying the formulas or frameworks, and evaluating strengths and limitations of
each approach.

## Worked Examples

Worked examples demonstrating the application of key concepts are covered in the detailed sub-pages
linked above.

## Common Pitfalls

- Forgetting to check excluded values when solving equations with algebraic fractions (values that
  make denominators zero).
- Sign errors when expanding brackets with negative terms, particularly double negatives.
- Confusing the formula for arithmetic series sum ($S_n = \frac{n}{2}[2a + (n-1)d]$) with the
  geometric series sum.
- Applying the sum to infinity formula when $|r| \geq 1$ -- the sum to infinity only exists when
  $|r| < 1$.
- In proof questions, failing to define the variable (e.g., "let $n$ be an integer") at the start of
  the proof.
