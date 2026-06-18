---
title: Coordinate Geometry
description: ""(a, b)$. The midpoint $M\!\left(\dfrac{1+a}{2}, \dfrac{5+b}{2}\right)$
lies on the line:

$$3\!\left(\frac{1+a}{2}\right) - \frac{5+b}{2} + 1 = 0$$

$$3(1+a) - (5+b) + 2 = 0 \implies 3a - b = 0 \quad (1)$$

The slope of $PP'$ is perpendicular to the line (slope $3$):

$$\frac{b - 5}{a - 1} \cdot 3 = -1 \implies 3b - 15 = -(a - 1) \implies a + 3b = 16 \quad (2)$$

From (1): $b = 3a$. Substituting into (2): $a + 9a = 16 \implies a = \dfrac{8}{5}$.

$$b = 3 \cdot \frac{8}{5} = \frac{24}{5}$$

Reflection: $P'\!\left(\dfrac{8}{5}, \dfrac{24}{5}\right)$.

</details>

**Worked Example 12: Circle through three points**

Find the equation of the circle through $P(0, 1)$, $Q(2, 3)$And $R(4, 1)$.

<details>
<summary>Solution</summary>

$P(0, 1)$ and $R(4, 1)$ share the same $y$-coordinate, so the centre lies on their perpendicular
bisector $x = 2$.

$P(0, 1)$ and $Q(2, 3)$ have midpoint $(1, 2)$ and segment slope $1$. Their perpendicular bisector
has slope $-1$ through $(1, 2)$: $y - 2 = -(x - 1) \implies y = -x + 3$.

Intersecting with $x = 2$: $y = 1$. Centre: $(2, 1)$.

$$r^2 = (2-0)^2 + (1-1)^2 = 4$$

Equation: $(x - 2)^2 + (y - 1)^2 = 4$Or $x^2 + y^2 - 4x - 2y + 1 = 0$.

Verification: $(4-2)^2 + (1-1)^2 = 4 = r^2$. Correct.

</details>

---

## Additional Common Pitfalls

1. **Sign error in the section formula.** The point dividing $AB$ in ratio $m:n$ (from $A$ towards
   $B$) has $x$-coordinate $\dfrac{nx_1 + mx_2}{m+n}$Not $\dfrac{mx_1 + nx_2}{m+n}$. The weight of
   $A$ is $n$Not $m$.

2. **Dropping the absolute value in point-to-line distance.** The formula
   $\dfrac{|Ax_0 + By_0 + C|}{\sqrt{A^2 + B^2}}$ always yields a non-negative result. Omitting the
   absolute value can produce a negative "distance".

3. **Failing to normalise parallel lines.** Before using the distance-between-parallel-lines formula
   $d = \dfrac{|C_2 - C_1|}{\sqrt{A^2 + B^2}}$Ensure both equations have identical $A$ and $B$
   coefficients. If one equation is a scalar multiple of the other, rescale first.

4. **Assuming two circles always intersect.** Two circles with centres $O_1$, $O_2$ and radii $r_1$,
   $r_2$ intersect at two points only when $|r_1 - r_2| \lt d \lt r_1 + r_2$Where $d$ is the
   distance between centres.

5. **Undefined slope of vertical lines.** The line $x = a$ has no defined slope. Never assign a
   numerical value such as $\infty$ to it; state that the slope is undefined.

6. **Stopping at the midpoint for perpendicular bisectors.** The perpendicular bisector of $AB$
   requires both the midpoint and the perpendicular slope. A common mistake is to find the midpoint
   and stop.

7. **Confusing the tangent formula for circles not at the origin.** The shortcut
   $x_1 x + y_1 y = r^2$ only applies when the circle is $x^2 + y^2 = r^2$. For
   $(x-a)^2 + (y-b)^2 = r^2$Use the general formula $(x_1-a)(x-a) + (y_1-b)(y-b) = r^2$.

8. **Arithmetic errors in the shoelace formula.** Always list vertices in consistent order
   (clockwise or anticlockwise). Mixing the order gives the wrong area or its negative.

---

## Exam-Style Problems

**Problem 1.** The points $A(-2, 3)$, $B(4, 7)$And $C(k, -1)$ form a triangle with area $30$. Find
the possible values of $k$.

<details>
<summary>Solution</summary>

$$\frac{1}{2}\left|(-2)(7 - (-1)) + 4((-1) - 3) + k(3 - 7)\right| = 30$$

$$\frac{1}{2}|-16 - 16 - 4k| = 30 \implies |-32 - 4k| = 60$$

Case 1: $-32 - 4k = 60 \implies 4k = -92 \implies k = -23$.

Case 2: $-32 - 4k = -60 \implies 4k = 28 \implies k = 7$.

Answer: $k = -23$ or $k = 7$.

</details>

**Problem 2.** The line $y = \dfrac{3}{4}x + c$ is tangent to $(x - 1)^2 + (y - 2)^2 = 25$. Find
$c$.

<details>
<summary>Solution</summary>

Rewrite the line as $3x - 4y + 4c = 0$. The distance from the centre $(1, 2)$ to this line equals
the radius $5$:

$$\frac{|3(1) - 4(2) + 4c|}{\sqrt{9 + 16}} = 5 \implies \frac{|4c - 5|}{5} = 5 \implies |4c - 5| = 25$$

Case 1: $4c - 5 = 25 \implies c = 7.5$.

Case 2: $4c - 5 = -25 \implies c = -5$.

Answer: $c = 7.5$ or $c = -5$.

</details>

**Problem 3.** Find the equation of the circle passing through $A(2, 3)$ and $B(6, 1)$ with its
centre on the $x$-axis.

<details>
<summary>Solution</summary>

Let the centre be $C(h, 0)$. Then $CA^2 = CB^2$:

$$(h-2)^2 + 9 = (h-6)^2 + 1$$

$$h^2 - 4h + 13 = h^2 - 12h + 37 \implies 8h = 24 \implies h = 3$$

$$r^2 = (3-2)^2 + (0-3)^2 = 1 + 9 = 10$$

Equation: $(x - 3)^2 + y^2 = 10$.

</details>

**Problem 4.** The line $3x + 4y - 12 = 0$ cuts the coordinate axes at $A$ and $B$. Find the
equation of the circle with $AB$ as diameter.

<details>
<summary>Solution</summary>

$A$: set $y = 0$Giving $x = 4$. So $A(4, 0)$.

$B$: set $x = 0$Giving $y = 3$. So $B(0, 3)$.

Centre (midpoint of $AB$): $\left(\dfrac{4+0}{2}, \dfrac{0+3}{2}\right) = (2,\; 1.5)$.

$$r = \frac{AB}{2} = \frac{\sqrt{16 + 9}}{2} = \frac{5}{2}$$

Equation: $(x - 2)^2 + \!\left(y - \dfrac{3}{2}\right)^2 = \dfrac{25}{4}$.

Expanding: $x^2 + y^2 - 4x - 3y = 0$.

</details>

**Problem 5.** Determine whether the triangle with vertices $P(1, 2)$, $Q(5, 5)$And $R(8, 1)$ is
right-angled.

<details>
<summary>Solution</summary>

Calculate the slopes of the three sides:

$$m_{PQ} = \frac{5-2}{5-1} = \frac{3}{4}, \quad m_{QR} = \frac{1-5}{8-5} = -\frac{4}{3}$$

$$m_{PQ} \cdot m_{QR} = \frac{3}{4} \cdot \left(-\frac{4}{3}\right) = -1$$

Since the product is $-1$, $PQ \perp QR$. The triangle is right-angled at $Q$.

Verification by Pythagoras: $PQ^2 = 25$$QR^2 = 25$$PR^2 = 49 + 1 = 50$. Indeed $25 + 25 = 50$.

</details>

**Problem 6.** Find the equation of the perpendicular bisector of the segment joining $(-1, 5)$ and
$(3, -1)$And verify that $(1, 2)$ lies on it.

<details>
<summary>Solution</summary>

Midpoint: $\left(\dfrac{-1+3}{2}, \dfrac{5+(-1)}{2}\right) = (1, 2)$.

Slope of segment: $\dfrac{-1-5}{3-(-1)} = \dfrac{-6}{4} = -\dfrac{3}{2}$.

Perpendicular slope: $\dfrac{2}{3}$.

Equation through $(1, 2)$:
$y - 2 = \dfrac{2}{3}(x - 1) \implies 3y - 6 = 2x - 2 \implies 2x - 3y + 4 = 0$.

Verification: $2(1) - 3(2) + 4 = 2 - 6 + 4 = 0$. Confirmed.

</details>

**Problem 7.** A point $P$ moves so that its distance from $A(3, 1)$ is always twice its distance
from $B(-1, 4)$. Find the equation of the locus of $P$.

<details>
<summary>Solution</summary>

Let $P = (x, y)$. Then $PA = 2 \cdot PB$:

$$\sqrt{(x-3)^2 + (y-1)^2} = 2\sqrt{(x+1)^2 + (y-4)^2}$$

Squaring both sides:

$$(x-3)^2 + (y-1)^2 = 4\!\left[(x+1)^2 + (y-4)^2\right]$$

$$x^2 - 6x + 9 + y^2 - 2y + 1 = 4(x^2 + 2x + 1 + y^2 - 8y + 16)$$

$$x^2 - 6x + y^2 - 2y + 10 = 4x^2 + 8x + 4y^2 - 32y + 68$$

$$3x^2 + 3y^2 + 14x - 30y + 58 = 0$$

Dividing by $3$: $x^2 + y^2 + \dfrac{14}{3}x - 10y + \dfrac{58}{3} = 0$.

This is the equation of a circle (Apollonius circle).

</details>

**Problem 8.** Two circles $C_1: x^2 + y^2 + 4x - 6y + 9 = 0$ and
$C_2: x^2 + y^2 - 2x + 2y - 14 = 0$ intersect at $A$ and $B$. Find the equation of their common
chord $AB$.

<details>
<summary>Solution</summary>

The common chord is found by subtracting the two circle equations:

$$(x^2 + y^2 + 4x - 6y + 9) - (x^2 + y^2 - 2x + 2y - 14) = 0$$

$$6x - 8y + 23 = 0$$

The equation of the common chord is $6x - 8y + 23 = 0$.

</details>

---

## Cross-References

- **Quadratics:** The discriminant is used to determine the nature of circle-line intersections. See
  [Quadratics](3_quadratics.mdx).
- **Functions:** Transformations of graphs apply equally to circles and lines. See
  [Functions Advanced](2_functions-advanced.md).
- **Trigonometry:** The angle between two lines uses the tangent formula, which connects to
  trigonometric identities.

For the A-Level treatment of this topic, see
[Coordinates and Geometry](https://alevel.wyattau.com/docs/maths/pure-mathematics/coordinates-and-geometry).

---

:::tip Tip Ready to test your understanding of **Coordinate Geometry**? The contains the hardest
questions within the DSE specification for this topic, each with a full worked solution.

**Unit tests** probe edge cases and common misconceptions. **Integration tests** combine Coordinate
Geometry with other DSE mathematics topics to test synthesis under exam conditions.

See for instructions on
self-marking and building a personal test matrix.

---

| Topic                 | Site    | Link                                                                                                            |
| --------------------- | ------- | --------------------------------------------------------------------------------------------------------------- |
| [Coordinate Geometry] | A-Level | [View](https://alevel-maths-physics.wyattau.com/docs/alevel/maths/pure-mathematics/04-coordinates-and-geometry) |
| [Coordinate Geometry] | DSE     | [View](https://dse.wyattau.com/docs/dse/maths/compulsory/9_coordinate-geometry)                                 |

## DSE Exam Technique

### Showing Working

For coordinate geometry problems in DSE Paper 1:

1. Write the formula before substituting (e.g., distance formula, midpoint formula, gradient
   formula).
2. For circle equations, show the completing-the-square steps.
3. For intersection problems, show the substitution and the resulting quadratic.
4. When finding tangents, state that the tangent is perpendicular to the radius.
5. For locus problems, start with "Let $P = (x, y)$" and derive the equation step by step.

### Significant Figures

Length and distance answers to 3 significant figures unless exact forms are possible. Coordinate
values involving square roots should be left in exact form.

### Common DSE Question Types

1. **Finding equations of circles** from given conditions (centre and radius, three points,
   diameter).
2. **Circle-line intersection** (tangent condition using discriminant or distance formula).
3. **Locus problems** (equidistant from points, ratio of distances).
4. **Area of triangle** using coordinate formula or shoelace formula.
5. **Perpendicular bisector** and reflection problems.

---

## Additional Worked Examples

**Worked Example 13: Equation of a circle tangent to both axes**

Find the equation of the circle in the first quadrant that is tangent to both coordinate axes and
has radius $3$.

<details>
<summary>Solution</summary>

Since the circle is in the first quadrant and tangent to both axes, the centre is at
$(r, r) = (3, 3)$.

Equation: $(x - 3)^2 + (y - 3)^2 = 9$.

Expanding: $x^2 + y^2 - 6x - 6y + 9 = 0$.

</details>

**Worked Example 14: Intersection of two circles**

Find the points of intersection of $x^2 + y^2 = 5$ and $x^2 + y^2 - 4x - 2y + 1 = 0$.

<details>
<summary>Solution</summary>

Subtract the second equation from the first:

$$5 - (-4x - 2y + 1) = 0 \implies 4x + 2y - 6 = 0 \implies 2x + y = 3 \implies y = 3 - 2x$$

Substituting into $x^2 + y^2 = 5$:

$$x^2 + (3 - 2x)^2 = 5 \implies x^2 + 9 - 12x + 4x^2 = 5 \implies 5x^2 - 12x + 4 = 0$$

$$(5x - 2)(x - 2) = 0 \implies x = \frac{2}{5} \;\text{or}\; x = 2$$

$x = \dfrac{2}{5} \implies y = 3 - \dfrac{4}{5} = \dfrac{11}{5}$. Point:
$\left(\dfrac{2}{5}, \dfrac{11}{5}\right)$.

$x = 2 \implies y = 3 - 4 = -1$. Point: $(2, -1)$.

</details>

**Worked Example 15: Shortest distance from a point to a circle**

Find the shortest distance from $P(5, 3)$ to the circle $x^2 + y^2 - 4x + 2y - 4 = 0$.

<details>
<summary>Solution</summary>

Centre: $(2, -1)$, $r^2 = 4 + 1 + 4 = 9 \implies r = 3$.

Distance from $P$ to centre: $d = \sqrt{(5-2)^2 + (3-(-1))^2} = \sqrt{9 + 16} = 5$.

Shortest distance from $P$ to the circle: $d - r = 5 - 3 = 2$.

</details>

**Worked Example 16: Locus - equidistant from two points**

Find the equation of the locus of points equidistant from $A(1, 3)$ and $B(5, 7)$.

<details>
<summary>Solution</summary>

Let $P = (x, y)$. Then $PA = PB$:

$$\sqrt{(x-1)^2 + (y-3)^2} = \sqrt{(x-5)^2 + (y-7)^2}$$

Squaring:

$$(x-1)^2 + (y-3)^2 = (x-5)^2 + (y-7)^2$$

$$x^2 - 2x + 1 + y^2 - 6y + 9 = x^2 - 10x + 25 + y^2 - 14y + 49$$

$$8x + 8y = 64 \implies x + y = 8$$

This is the perpendicular bisector of $AB$As expected.

</details>

---

## DSE Exam-Style Questions

**DSE Practice 1.** The line $y = mx + 1$ is tangent to the circle $x^2 + y^2 = 4$. Find the
possible values of $m$.

<details>
<summary>Solution</summary>

Substitute $y = mx + 1$ into $x^2 + y^2 = 4$:

$$x^2 + (mx + 1)^2 = 4 \implies (1 + m^2)x^2 + 2mx - 3 = 0$$

For tangency: $\Delta = 0$:

$$4m^2 + 12(1 + m^2) = 0 \implies 4m^2 + 12 + 12m^2 = 0 \implies 16m^2 + 12 = 0$$

$m^2 = -\dfrac{12}{16} = -\dfrac{3}{4} < 0$.

No real values of $m$ satisfy this condition. The line $y = mx + 1$ is never tangent to
$x^2 + y^2 = 4$.

Wait -- let me recheck.
$\Delta = (2m)^2 - 4(1 + m^2)(-3) = 4m^2 + 12(1 + m^2) = 4m^2 + 12 + 12m^2 = 16m^2 + 12 > 0$ for all
real $m$. This means the line always intersects the circle at two points, never tangent.

Actually, the distance from the centre $(0,0)$ to the line $mx - y + 1 = 0$ is:

$$d = \frac{|1|}{\sqrt{m^2 + 1}} = \frac{1}{\sqrt{m^2 + 1}}$$

For tangency: $d = r = 2$I.e.,
$\dfrac{1}{\sqrt{m^2 + 1}} = 2 \implies \sqrt{m^2 + 1} = \dfrac{1}{2} \implies m^2 + 1 = \dfrac{1}{4} \implies m^2 = -\dfrac{3}{4}$.

No real solution. Confirmed: the line is never tangent to the circle.

</details>

**DSE Practice 2.** A circle touches the $y$-axis at $(0, 3)$ and passes through $(2, 1)$. Find its
equation.

<details>
<summary>Solution</summary>

Since the circle touches the $y$-axis at $(0, 3)$The centre lies on the horizontal line $y = 3$So
the centre is $C(r, 3)$ where $r$ is the radius.

Equation: $(x - r)^2 + (y - 3)^2 = r^2$.

Substituting $(2, 1)$:
$(2 - r)^2 + (1 - 3)^2 = r^2 \implies 4 - 4r + r^2 + 4 = r^2 \implies 8 - 4r = 0 \implies r = 2$.

Centre: $(2, 3)$Radius: $2$.

Equation: $(x - 2)^2 + (y - 3)^2 = 4$Or $x^2 + y^2 - 4x - 6y + 9 = 0$.

</details>

**DSE Practice 3.** Find the equation of the circle passing through $(1, 0)$, $(0, 1)$And $(-1, 0)$.

<details>
<summary>Solution</summary>

General form: $x^2 + y^2 + Dx + Ey + F = 0$.

$(1, 0)$: $1 + D + F = 0 \quad \text{(i)}$.

$(0, 1)$: $1 + E + F = 0 \quad \text{(ii)}$.

$(-1, 0)$: $1 - D + F = 0 \quad \text{(iii)}$.

(i) - (iii): $2D = 0 \implies D = 0$.

From (i): $F = -1$.

From (ii): $E = 0$.

Equation: $x^2 + y^2 - 1 = 0$I.e., $x^2 + y^2 = 1$ (the unit circle).

</details>

**DSE Practice 4.** The line $\ell$ passes through $A(2, 1)$ and $B(6, k)$. If the distance from the
origin to $\ell$ is $\dfrac{6\sqrt{5}}{5}$Find $k$.

<details>
<summary>Solution</summary>

Gradient of $\ell$: $m = \dfrac{k - 1}{4}$.

Equation:
$y - 1 = \dfrac{k-1}{4}(x - 2) \implies (k-1)x - 4y + (4 - 2k + 4) = 0 \implies (k-1)x - 4y + (8 - 2k) = 0$.

Distance from $(0, 0)$ to $\ell$:

$$\frac{|8 - 2k|}{\sqrt{(k-1)^2 + 16}} = \frac{6\sqrt{5}}{5}$$

Squaring:

$$\frac{(8 - 2k)^2}{k^2 - 2k + 17} = \frac{36}{5}$$

$$5(4 - k)^2 = 36(k^2 - 2k + 17)$$

$$5(k^2 - 8k + 16) = 36k^2 - 72k + 612$$

$$5k^2 - 40k + 80 = 36k^2 - 72k + 612$$

$$31k^2 - 32k + 532 = 0$$

$\Delta = 1024 - 4(31)(532) = 1024 - 65968 < 0$.

No real solution for $k$. Let me recheck the algebra.

Actually, let me recompute. The line through $(2,1)$ and $(6,k)$: using the two-point form:

$$\frac{y - 1}{k - 1} = \frac{x - 2}{4} \implies 4(y - 1) = (k - 1)(x - 2)$$

$$(k-1)x - 4y - 2(k-1) + 4 = 0 \implies (k-1)x - 4y - 2k + 6 = 0$$

Distance from $(0,0)$:

$$\frac{|6 - 2k|}{\sqrt{(k-1)^2 + 16}} = \frac{6\sqrt{5}}{5}$$

$$25(6 - 2k)^2 = 36(k^2 - 2k + 17)$$

$$25(4k^2 - 24k + 36) = 36k^2 - 72k + 612$$

$$100k^2 - 600k + 900 = 36k^2 - 72k + 612$$

$$64k^2 - 528k + 288 = 0 \implies 8k^2 - 66k + 36 = 0 \implies 4k^2 - 33k + 18 = 0$$

$$(4k - 3)(k - 6) = 0 \implies k = \frac{3}{4} \;\text{or}\; k = 6$$

</details>

**DSE Practice 5.** Find the coordinates of the points on the circle $x^2 + y^2 = 13$ where the
tangent is parallel to the line $2x + 3y = 7$.

<details>
<summary>Solution</summary>

The gradient of $2x + 3y = 7$ is $m = -\dfrac{2}{3}$.

The tangent at $(x_1, y_1)$ on $x^2 + y^2 = 13$ is $x_1 x + y_1 y = 13$With gradient
$m = -\dfrac{x_1}{y_1}$.

Setting equal:
$-\dfrac{x_1}{y_1} = -\dfrac{2}{3} \implies 3x_1 = 2y_1 \implies y_1 = \dfrac{3}{2}x_1$.

Substituting into $x_1^2 + y_1^2 = 13$:

$$x_1^2 + \frac{9}{4}x_1^2 = 13 \implies \frac{13}{4}x_1^2 = 13 \implies x_1^2 = 4 \implies x_1 = \pm 2$$

$x_1 = 2 \implies y_1 = 3$. $x_1 = -2 \implies y_1 = -3$.

Points: $(2, 3)$ and $(-2, -3)$.

</details>

## Worked Examples

### Example 1: Equation of a perpendicular line

**Problem.** Find the equation of the line through $(3, -1)$ perpendicular to $2x + 3y = 6$.

**Solution.** Rearranging: $y = -\frac{2}{3}x + 2$, so $m_1 = -\frac{2}{3}$.

Perpendicular gradient: $m_2 = \frac{3}{2}$.

$$y + 1 = \frac{3}{2}(x - 3) \implies y = \frac{3}{2}x - \frac{9}{2} - 1 = \frac{3}{2}x - \frac{11}{2}$$

Or: $3x - 2y = 11$.

$\blacksquare$

### Example 2: Intersection and distance

**Problem.** Find the point of intersection of $x - 2y = 4$ and $3x + y = 7$, and its distance from
the origin.

**Solution.** From the first: $x = 2y + 4$. Substituting:
$3(2y+4) + y = 7 \implies 7y + 12 = 7 \implies y = -\frac{5}{7}$.

$x = 2\left(-\frac{5}{7}\right) + 4 = \frac{18}{7}$.

Intersection: $\left(\frac{18}{7}, -\frac{5}{7}\right)$.

Distance from origin:
$\sqrt{\left(\frac{18}{7}\right)^2 + \left(\frac{5}{7}\right)^2} = \frac{\sqrt{324+25}}{7} = \frac{\sqrt{349}}{7}$.

$\blacksquare$

## Summary

- Line through $(x_1, y_1)$ with gradient $m$: $y - y_1 = m(x - x_1)$.
- Parallel lines: $m_1 = m_2$; perpendicular lines: $m_1 m_2 = -1$.
- Distance from $(x_0, y_0)$ to $ax + by + c = 0$: $d = \frac{|ax_0 + by_0 + c|}{\sqrt{a^2 + b^2}}$.
- Intersection: solve the system of two linear equations simultaneously. | [Coordinate Geometry] |
  A-Level |
  [View](https://alevel-maths-physics.wyattau.com/docs/alevel/maths/pure-mathematics/04-coordinates-and-geometry)
  | | [Coordinate Geometry] | DSE |
  [View](https://dse.wyattau.com/docs/dse/maths/compulsory/9_coordinate-geometry) |

:::
