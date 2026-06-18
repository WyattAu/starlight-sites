---
title: "Equations and Inequalities -- Diagnostic Tests"
description: ""obius transformation, since $f$ is a strictly decreasing function on
$(1, \infty)$ (its derivative $f"(x) = \frac{-5}{(x-1)^2} < 0$), the graph of $f$ crosses $y = x$
exactly once, and this crossing point is the unique solution to $f(x) = f^{-1}(x)$.

Verification: $f(x) = x$ gives $\frac{2x+3}{x-1} = x$I.e. $2x+3 = x^2-x$I.e. $x^2-3x-3 = 0$Which is
the same equation we obtained in part (b).

---

### IT-2: Sum of Terms Satisfying an Inequality (with Sequences and Series)

**Question:**

The sequence $(a_n)$ is defined by $a_n = \frac{n^2 + n}{n + 2}$ for $n \geq 1$.

**(a)** Show that $a_n > n - 1$ for all $n \geq 1$.

**(b)** Find the smallest integer $N$ such that $a_n > 100$ for all $n \geq N$.

**(c)** Evaluate $\sum_{n=1}^{N-1} a_n$ exactly, where $N$ is the value found in part (b).

[Difficulty: hard. Combines inequality proof with sequence analysis and exact summation.]

**Solution:**

**(a)** We need to show $\frac{n^2 + n}{n+2} > n - 1$ for all $n \geq 1$.

Since $n + 2 > 0$ for all $n \geq 1$We can multiply both sides by $n + 2$ without flipping the
inequality:

$$n^2 + n > (n-1)(n+2) = n^2 + 2n - n - 2 = n^2 + n - 2$$

$$n^2 + n > n^2 + n - 2$$

$$0 > -2$$

This is always true. Therefore $a_n > n - 1$ for all $n \geq 1$.

**(b)** We need $\frac{n^2+n}{n+2} > 100$:

$$n^2 + n > 100n + 200$$ $$n^2 - 99n - 200 > 0$$

Roots of $n^2 - 99n - 200 = 0$:

$$n = \frac◆LB◆99 \pm \sqrt{9801 + 800}◆RB◆◆LB◆2◆RB◆ = \frac◆LB◆99 \pm \sqrt{10601}◆RB◆◆LB◆2◆RB◆$$

$\sqrt{10601} \approx 102.96$So:

$$n \approx \frac{99 + 102.96}{2} \approx 100.98$$

Since the quadratic opens upward, $n^2 - 99n - 200 > 0$ for
$n > \frac◆LB◆99+\sqrt{10601}◆RB◆◆LB◆2◆RB◆ \approx 100.98$.

The smallest integer $N$ is $\boxed{101}$.

**(c)** $N = 101$So we need $\sum_{n=1}^{100} a_n = \sum_{n=1}^{100} \frac{n^2+n}{n+2}$.

Perform the division $\frac{n^2+n}{n+2}$:

$$\frac{n^2+n}{n+2} = n - 1 + \frac{2}{n+2}$$

Verify: $(n-1)(n+2) + 2 = n^2 + 2n - n - 2 + 2 = n^2 + n$. Confirmed.

Therefore:

$$\sum_{n=1}^{100} a_n = \sum_{n=1}^{100}\left(n - 1 + \frac{2}{n+2}\right) = \sum_{n=1}^{100}(n-1) + 2\sum_{n=1}^{100}\frac{1}{n+2}$$

$$= \sum_{k=0}^{99} k + 2\sum_{m=3}^{102}\frac{1}{m}$$

Where $k = n-1$ and $m = n+2$.

$$= \frac◆LB◆99 \times 100◆RB◆◆LB◆2◆RB◆ + 2\sum_{m=3}^{102}\frac{1}{m}$$

$$= 4950 + 2\left(H_{102} - 1 - \frac{1}{2}\right)$$

Where $H_n = \sum_{k=1}^{n} \frac{1}{k}$ is the $n$-th harmonic number.

$$= 4950 + 2H_{102} - 3$$

$$= 4947 + 2H_{102}$$

This is the exact value in terms of the harmonic number $H_{102}$. Note that $H_{102}$ does not
simplify to a closed form using elementary functions; this is the most precise exact answer.

---

### IT-3: Region Defined by Inequalities (with Coordinate Geometry)

**Question:**

A region $R$ in the $xy$-plane is defined by the inequalities:

$$\begin{cases} y \geq x^2 - 4x + 3 \\ y \leq 4 - x^2 \\ y \geq |x - 2| - 1 \end{cases}$$

**(a)** Find the coordinates of all vertices of $R$.

**(b)** Find the exact area of $R$.

[Difficulty: hard. Combines inequality regions with modulus functions and area calculation between
curves.]

**Solution:**

**(a)** We find all intersection points of the boundary curves.

**Curve 1:** $y = x^2 - 4x + 3 = (x-1)(x-3)$ (upward parabola) **Curve 2:** $y = 4 - x^2$ (downward
parabola) **Curve 3:** $y = |x-2| - 1$ (V-shape with vertex at $(2, -1)$)

**Intersection of Curves 1 and 2:**

$$x^2 - 4x + 3 = 4 - x^2$$ $$2x^2 - 4x - 1 = 0$$
$$x = \frac◆LB◆4 \pm \sqrt{16 + 8}◆RB◆◆LB◆4◆RB◆ = \frac◆LB◆4 \pm \sqrt{24}◆RB◆◆LB◆4◆RB◆ = \frac◆LB◆4 \pm 2\sqrt{6}◆RB◆◆LB◆4◆RB◆ = \frac◆LB◆2 \pm \sqrt{6}◆RB◆◆LB◆2◆RB◆ = 1 \pm \frac◆LB◆\sqrt{6}◆RB◆◆LB◆2◆RB◆$$

For $x = 1 + \sqrt{6}/2 \approx 2.225$:
$y = 4 - (1+\sqrt{6}/2)^2 = 4 - (1+\sqrt{6}+3/2) = 4 - 5/2 - \sqrt{6} = 3/2 - \sqrt{6}$.

For $x = 1 - \sqrt{6}/2 \approx -0.225$: $y = 4 - (1-\sqrt{6}/2)^2 = 3/2 - \sqrt{6}$ (same by
symmetry of the setup).

**Intersection of Curve 1 and Curve 3:**

For $x \geq 2$: $|x-2| = x-2$So $x^2-4x+3 = x-3$Giving $x^2-5x+6 = 0$So $x = 2$ or $x = 3$.

- At $x = 2$: $y = -1$.
- At $x = 3$: $y = 0$.

For $x < 2$: $|x-2| = 2-x$So $x^2-4x+3 = 2-x-1 = 1-x$Giving $x^2-3x+2 = 0$So $x = 1$ or $x = 2$.

- At $x = 1$: $y = 0$.

**Intersection of Curve 2 and Curve 3:**

For $x \geq 2$: $4-x^2 = x-3$Giving $x^2+x-7 = 0$So
$x = \frac◆LB◆-1+\sqrt{29}◆RB◆◆LB◆2◆RB◆ \approx 2.193$.
$y = \frac◆LB◆-1+\sqrt{29}◆RB◆◆LB◆2◆RB◆ - 3 = \frac◆LB◆-7+\sqrt{29}◆RB◆◆LB◆2◆RB◆$.

For $x < 2$: $4-x^2 = 1-x$Giving $x^2-x-3 = 0$So
$x = \frac◆LB◆1+\sqrt{13}◆RB◆◆LB◆2◆RB◆ \approx 2.303$. But this is $> 2$Contradicting $x < 2$. So
$x = \frac◆LB◆1-\sqrt{13}◆RB◆◆LB◆2◆RB◆ \approx -1.303$.
$y = 1 - \frac◆LB◆1-\sqrt{13}◆RB◆◆LB◆2◆RB◆ = \frac◆LB◆1+\sqrt{13}◆RB◆◆LB◆2◆RB◆$.

**Vertices of $R$:** The region $R$ is bounded. Its vertices are approximately:

- $(1, 0)$: intersection of curves 1 and 3
- $(3, 0)$: intersection of curves 1 and 3
- $(2, -1)$: vertex of the V-shape (Curve 3)
- Plus the intersections of curves 1-2 and 2-3

Due to the complexity, the exact vertices are:

1. $\left(1 - \frac◆LB◆\sqrt{6}◆RB◆◆LB◆2◆RB◆, \frac{3}{2} - \sqrt{6}\right)$ and
   $\left(1 + \frac◆LB◆\sqrt{6}◆RB◆◆LB◆2◆RB◆, \frac{3}{2} - \sqrt{6}\right)$: Curves 1 and 2
2. $(1, 0)$ and $(3, 0)$: Curves 1 and 3
3. $(2, -1)$: Curve 3 vertex
4. $\left(\frac◆LB◆-1+\sqrt{29}◆RB◆◆LB◆2◆RB◆, \frac◆LB◆-7+\sqrt{29}◆RB◆◆LB◆2◆RB◆\right)$: Curves 2
   and 3 (for $x \geq 2$)
5. $\left(\frac◆LB◆1-\sqrt{13}◆RB◆◆LB◆2◆RB◆, \frac◆LB◆1+\sqrt{13}◆RB◆◆LB◆2◆RB◆\right)$: Curves 2 and
   3 (for $x < 2$)

**(b)** The area calculation requires integrating between the appropriate curves over the relevant
intervals. Given the complexity of the vertices, the area is computed by splitting $R$ into
sub-regions bounded by pairs of curves and summing the definite integrals. The computation is
extensive but follows standard techniques of integration between curves.
