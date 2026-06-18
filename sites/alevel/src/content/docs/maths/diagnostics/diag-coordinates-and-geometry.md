---
title: "Coordinates and Geometry -- Diagnostic Tests"
description: "" = 3$) and $x = 1$ ($D' = 8$), no root. Between $x = 3$ ($D' = -6$) and $x = 4$
($D' = 128-192+60+3 = -1$), and $x = 5$ ($D' = 250-300+75+3=28$), so a root between $x = 4$ and
$x = 5$.

Actually, let me check $x = \frac{3}{2}$:
$\frac{27}{4} - 27 + \frac{45}{2} + 3 = 6.75 - 27 + 22.5 + 3 = 5.25$. Between $x = 1$ ($8$) and
$x = 3$ ($-6$), a root near $x = 2$: $16 - 48 + 30 + 3 = 1$. At $x = 2.1$:
$18.522 - 52.92 + 31.5 + 3 = 0.102$. At $x = 2.12$: $19.08... - 53.95... + 31.8 + 3 = -0.06...$.

Root near $x \approx 2.11$.

The exact solution requires the cubic formula. For the closest point, we accept the numerical
approximation. At $x \approx 2.11$: $y \approx 4.45 - 8.44 + 7 = 3.01$.

The closest point is approximately $(2.11, 3.01)$.

---

### IT-2: Vector Method for a Geometry Problem (with Vectors)

**Question:**

In triangle $ABC$The point $D$ lies on $BC$ such that $BD : DC = 2 : 1$. The point $E$ is the
midpoint of $AC$. The lines $AD$ and $BE$ intersect at point $F$.

Using position vectors with origin at $A$And taking $\overrightarrow{AB} = \mathbf{b}$ and
$\overrightarrow{AC} = \mathbf{c}$:

**(a)** Find the position vector of $F$ in terms of $\mathbf{b}$ and $\mathbf{c}$.

**(b)** Find the ratio $AF : FD$.

**(c)** If $|\mathbf{b}| = 5$, $|\mathbf{c}| = 7$And $\mathbf{b} \cdot \mathbf{c} = 15$Find
$|\overrightarrow{AF}|$.

[Difficulty: hard. Tests vector methods for concurrency problems and application of the dot
product.]

**Solution:**

**(a)** Express all points in terms of $\mathbf{b}$ and $\mathbf{c}$:

- $\overrightarrow{OB} = \mathbf{b}$, $\overrightarrow{OC} = \mathbf{c}$ (since origin is at $A$)
- $\overrightarrow{OD} = \overrightarrow{OB} + \frac{2}{3}\overrightarrow{BC} = \mathbf{b} + \frac{2}{3}(\mathbf{c} - \mathbf{b}) = \frac{1}{3}\mathbf{b} + \frac{2}{3}\mathbf{c}$
- $\overrightarrow{OE} = \frac{1}{2}\mathbf{c}$

Point $F$ lies on $AD$:
$\overrightarrow{OF} = \overrightarrow{OA} + s\overrightarrow{AD} = s\left(\frac{1}{3}\mathbf{b} + \frac{2}{3}\mathbf{c}\right)$
for some $0 \leq s \leq 1$.

Point $F$ also lies on $BE$:
$\overrightarrow{OF} = \overrightarrow{OB} + t\overrightarrow{BE} = \mathbf{b} + t\left(\frac{1}{2}\mathbf{c} - \mathbf{b}\right) = (1-t)\mathbf{b} + \frac{t}{2}\mathbf{c}$
for some $0 \leq t \leq 1$.

Equating coefficients of $\mathbf{b}$ and $\mathbf{c}$:

$$\frac{s}{3} = 1 - t \quad \text{and} \quad \frac{2s}{3} = \frac{t}{2}$$

From the second equation: $t = \frac{4s}{3}$.

Substituting into the first: $\frac{s}{3} = 1 - \frac{4s}{3}$Giving $\frac{5s}{3} = 1$So
$s = \frac{3}{5}$.

$$\overrightarrow{OF} = \frac{3}{5}\left(\frac{1}{3}\mathbf{b} + \frac{2}{3}\mathbf{c}\right) = \frac{1}{5}\mathbf{b} + \frac{2}{5}\mathbf{c}$$

**(b)** $AF : FD$. Since $s = 3/5$Point $F$ divides $AD$ in the ratio
$s : (1-s) = 3/5 : 2/5 = 3 : 2$.

So $AF : FD = 3 : 2$.

**(c)**

$$\overrightarrow{AF} = \frac{1}{5}\mathbf{b} + \frac{2}{5}\mathbf{c}$$

$$|\overrightarrow{AF}|^2 = \left(\frac{1}{5}\mathbf{b} + \frac{2}{5}\mathbf{c}\right) \cdot \left(\frac{1}{5}\mathbf{b} + \frac{2}{5}\mathbf{c}\right)$$

$$= \frac{1}{25}|\mathbf{b}|^2 + \frac{4}{25}\mathbf{b}\cdot\mathbf{c} + \frac{4}{25}|\mathbf{c}|^2$$

$$= \frac{1}{25}(25) + \frac{4}{25}(15) + \frac{4}{25}(49)$$

$$= 1 + \frac{60}{25} + \frac{196}{25}$$

$$= 1 + \frac{256}{25} = \frac{281}{25}$$

$$|\overrightarrow{AF}| = \frac◆LB◆\sqrt{281}◆RB◆◆LB◆5◆RB◆$$

---

### IT-3: Parametric Curve via Function Composition (with Functions)

**Question:**

A curve is defined parametrically by:

$$x = t^2 - 2t, \quad y = (t^2 - 2t)^2 - 2(t^2 - 2t)$$

For $t \in \mathbb{R}$.

**(a)** Show that $y = x^2 - 2x$ and hence identify the curve as a standard form.

**(b)** Find the coordinates of the turning points of the curve and determine their nature.

**(c)** The curve is translated so that its minimum point moves to the origin. Find the equation of
the translated curve in the form $y = ax^2 + bx + c$.

[Difficulty: hard. Tests recognition of function composition in parametric equations and completing
the square.]

**Solution:**

**(a)** Let $f(t) = t^2 - 2t = (t-1)^2 - 1$.

Then $x = f(t)$ and $y = f(f(t)) = f(x)$.

Therefore $y = x^2 - 2x = (x-1)^2 - 1$.

This is a parabola with vertex at $(1, -1)$Opening upward.

**(b)** $y = x^2 - 2x$. Since $x = (t-1)^2 - 1 \geq -1$ for all $t$The domain of the curve is
$x \geq -1$.

$\frac{dy}{dx} = 2x - 2$. Setting this to zero: $x = 1$.

At $x = 1$: $y = 1 - 2 = -1$. This is the vertex.

$\frac{d^2y}{dx^2} = 2 > 0$Confirming a minimum at $(1, -1)$.

The turning point is $(1, -1)$Which is a minimum.

Note: there are no other turning points. The curve is a standard parabola restricted to $x \geq -1$.

At $x = -1$ (when $t = 1$): $y = 1 + 2 = 3$. This is an endpoint of the parametric curve, not a
turning point of the parabola itself.

**(c)** The translation moves $(1, -1)$ to $(0, 0)$. The translation vector is $(-1, 1)$.

Let $X = x - 1$ and $Y = y + 1$. Then $y = (x-1)^2 - 1$ becomes $Y - 1 = X^2 - 1$I.e.:

$$Y = X^2$$

In terms of the original variables (after translation, using $x$ and $y$ for the new coordinates):

$$y = x^2$$

So $a = 1$, $b = 0$, $c = 0$.
