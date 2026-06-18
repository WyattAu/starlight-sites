---
title: Vectors in 3D
description: ""$ satisfies:

$$P' = P - 2D\hat{\mathbf{n}}$$

Where $D = \dfrac◆LB◆1+2+3-6◆RB◆◆LB◆\sqrt{3}◆RB◆ = 0$ and
$\hat{\mathbf{n}} = \dfrac◆LB◆1◆RB◆◆LB◆\sqrt{3}◆RB◆(1, 1, 1)$.

Since $D = 0$The point $P$ lies on the plane, so its reflection is itself: $P' = (1, 2, 3)$.

Let me use a point not on the plane. The reflection of $Q(0, 0, 0)$:

$$D = \frac◆LB◆0 + 0 + 0 - 6◆RB◆◆LB◆\sqrt{3}◆RB◆ = -2\sqrt{3}$$

$$Q' = (0, 0, 0) - 2(-2\sqrt{3})\frac◆LB◆1◆RB◆◆LB◆\sqrt{3}◆RB◆(1, 1, 1) = (0, 0, 0) + 4(1, 1, 1) = (4, 4, 4)$$

Check: the midpoint of $Q$ and $Q'$ is $(2, 2, 2)$Which satisfies $2+2+2 = 6$. Correct.

### Example 11.2: Angle between a line and a plane

**Problem.** Find the acute angle between the line $\mathbf{r} = (1, -1, 2) + \lambda(3, 0, -1)$ and
The plane $x - 2y + 2z = 5$.

**Solution.** $\mathbf{d} = (3, 0, -1)$$\mathbf{n} = (1, -2, 2)$.

$$\sin\phi = \frac◆LB◆|\mathbf{d}\cdot\mathbf{n}|◆RB◆◆LB◆|\mathbf{d}||\mathbf{n}|◆RB◆ = \frac◆LB◆|3 + 0 - 2|◆RB◆◆LB◆\sqrt{10}\sqrt{9}◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆3\sqrt{10}◆RB◆$$

$$\phi = \arcsin\!\left(\frac◆LB◆1◆RB◆◆LB◆3\sqrt{10}◆RB◆\right) \approx 6.1^\circ$$

### Example 11.3: Volume of a tetrahedron using the scalar triple product

**Problem.** Find the volume of the tetrahedron with vertices $O(0,0,0)$$A(1,0,0)$$B(0,2,0)$
$C(0,0,3)$.

**Solution.** $\overrightarrow{OA} = (1,0,0)$$\overrightarrow{OB} = (0,2,0)$
$\overrightarrow{OC} = (0,0,3)$.

$$V = |\overrightarrow{OA}\cdot(\overrightarrow{OB}\times\overrightarrow{OC})| = \left|\begin{vmatrix}1&0&0\\0&2&0\\0&0&3\end{vmatrix}\right| = |6| = 6$$

This equals $\frac{1}{6} \times 1 \times 2 \times 3 = 1$Confirming the standard formula.

### Example 11.4: Shortest distance using calculus

**Problem.** Find the shortest distance between the lines
$\mathbf{r}_1 = (1, 0, 0) + \lambda(1, 1, 0)$ and $\mathbf{r}_2 = (0, 1, 0) + \mu(0, 1, 1)$.

**Solution.** $\mathbf{d}_1 = (1, 1, 0)$$\mathbf{d}_2 = (0, 1, 1)$.

These are not parallel (not scalar multiples), so the lines are either intersecting or skew.

$\mathbf{d}_1 \times \mathbf{d}_2 = (1\cdot 1 - 0\cdot 1, 0\cdot 0 - 1\cdot 1, 1\cdot 1 - 1\cdot 0) = (1, -1, 1)$.

Check intersection: $1+\lambda = 0$ and $1+\lambda = 1+\mu$ and $\lambda = \mu$.

From the first: $\lambda = -1$. From the second: $0 = 1 + (-1) = 0$. From the third: $-1 = -1$.
Consistent! The lines intersect, so the shortest distance is $0$.

### Example 11.5: Finding the equation of a plane from three points

**Problem.** Find the equation of the plane through $P(1, 1, 0)$$Q(2, 0, 1)$$R(0, 1, 1)$.

**Solution.** $\overrightarrow{PQ} = (1, -1, 1)$$\overrightarrow{PR} = (-1, 0, 1)$.

$$\mathbf{n} = \overrightarrow{PQ}\times\overrightarrow{PR} = \begin{pmatrix}(-1)(1) - (1)(0)\\(1)(-1) - (1)(1)\\(1)(0) - (-1)(-1)\end{pmatrix} = \begin{pmatrix}-1\\-2\\-1\end{pmatrix}$$

$\mathbf{r}\cdot\mathbf{n} = (1)(-1) + (1)(-2) + (0)(-1) = -3$.

Equation: $-x - 2y - z = -3$I.e., $\boxed{x + 2y + z = 3}$.

### Example 11.6: Verifying coplanarity

**Problem.** Determine whether the points $A(1, 0, 1)$$B(2, 1, 3)$$C(3, 1, 4)$$D(0, -1, -1)$ Are
coplanar.

**Solution.** $\overrightarrow{AB} = (1, 1, 2)$$\overrightarrow{AC} = (2, 1, 3)$
$\overrightarrow{AD} = (-1, -1, -2)$.

$$\overrightarrow{AB}\times\overrightarrow{AC} = \begin{pmatrix}(1)(3)-(2)(1)\\(2)(2)-(1)(3)\\(1)(1)-(1)(2)\end{pmatrix} = \begin{pmatrix}1\\1\\-1\end{pmatrix}$$

$$(\overrightarrow{AB}\times\overrightarrow{AC})\cdot\overrightarrow{AD} = 1(-1) + 1(-1) + (-1)(-2) = -1 - 1 + 2 = 0$$

Since the scalar triple product is zero, the four points are coplanar. $\blacksquare$

### Example 11.7: Projection of a vector onto a plane

**Problem.** Find the projection of the vector $\mathbf{a} = (2, 1, -1)$ onto the plane
$x + y + z = 1$.

**Solution.** The unit normal is $\hat{\mathbf{n}} = \dfrac◆LB◆1◆RB◆◆LB◆\sqrt{3}◆RB◆(1, 1, 1)$.

The projection of $\mathbf{a}$ onto the normal direction:

$$\text{proj}_{\mathbf{n}}\,\mathbf{a} = (\mathbf{a}\cdot\hat{\mathbf{n}})\hat{\mathbf{n}} = \frac{2+1-1}{3}(1,1,1) = \frac{2}{3}(1,1,1)$$

The projection onto the plane (i.e., the component parallel to the plane):

$$\mathbf{a}_{\parallel} = \mathbf{a} - \text{proj}_{\mathbf{n}}\,\mathbf{a} = (2, 1, -1) - \frac{2}{3}(1, 1, 1) = \left(\frac{4}{3}, \frac{1}{3}, -\frac{5}{3}\right)$$

### Example 11.8: Vector product proof of the sine rule

**Problem.** Using the vector product, prove that
$|\mathbf{a}\times\mathbf{b}| = |\mathbf{a}||\mathbf{b}|\sin\theta$.

**Solution.** See Section 4.3 of this document. The proof uses the identity:

$$|\mathbf{a}\times\mathbf{b}|^2 = |\mathbf{a}|^2|\mathbf{b}|^2 - (\mathbf{a}\cdot\mathbf{b})^2$$

Substituting $\mathbf{a}\cdot\mathbf{b} = |\mathbf{a}||\mathbf{b}|\cos\theta$:

$$= |\mathbf{a}|^2|\mathbf{b}|^2(1 - \cos^2\theta) = |\mathbf{a}|^2|\mathbf{b}|^2\sin^2\theta$$

Taking square roots gives the result.

---

## 12. Connections to Other Topics

### 12.1 Vectors and matrices

The cross product $\mathbf{a}\times\mathbf{b}$ can be computed as a $3 \times 3$ determinant. See
[Matrices](/docs/alevel/further-maths/pure-mathematics/further-matrices).

### 12.2 Vectors and mechanics

Vector methods are essential in mechanics for resolving forces, moments, and angular momentum. The
Moment of a force $\mathbf{F}$ about point $O$ is $\mathbf{r}\times\mathbf{F}$. See
[Projectile Motion](/docs/alevel/further-maths/further-mechanics/projectile-motion).

### 12.3 Planes and coordinate geometry

The equation of a plane and the distance formula connect vectors to 3D coordinate geometry. See
[Polar Coordinates](/docs/alevel/further-maths/pure-mathematics/polar-coordinates).

---

## 13. Additional Exam-Style Questions

### Question 11

The lines $L_1$ and $L_2$ are given by:

$L_1$:
$\mathbf{r} = \begin{pmatrix}1\\2\\-1\end{pmatrix} + \lambda\begin{pmatrix}2\\-1\\1\end{pmatrix}$

$L_2$: $\mathbf{r} = \begin{pmatrix}3\\1\\1\end{pmatrix} + \mu\begin{pmatrix}1\\-1\\-1\end{pmatrix}$

Find the shortest distance between $L_1$ and $L_2$.

<details>
<summary>Solution</summary>

$\mathbf{d}_1 = (2,-1,1)$$\mathbf{d}_2 = (1,-1,-1)$.

$\mathbf{d}_1\times\mathbf{d}_2 = \begin{pmatrix}(-1)(-1)-(1)(-1)\\(1)(1)-(2)(-1)\\(2)(-1)-(-1)(1)\end{pmatrix} = \begin{pmatrix}2\\3\\-3\end{pmatrix}$

$|\mathbf{d}_1\times\mathbf{d}_2| = \sqrt{4+9+9} = \sqrt{22}$.

$\mathbf{a}_2 - \mathbf{a}_1 = (2, -1, 2)$.

$(\mathbf{a}_2-\mathbf{a}_1)\cdot(\mathbf{d}_1\times\mathbf{d}_2) = 4 - 3 - 6 = -5$.

$D = \dfrac◆LB◆|-5|◆RB◆◆LB◆\sqrt{22}◆RB◆ = \dfrac◆LB◆5◆RB◆◆LB◆\sqrt{22}◆RB◆ = \dfrac◆LB◆5\sqrt{22}◆RB◆◆LB◆22◆RB◆$.

</details>

### Question 12

Find the volume of the parallelepiped with edges $\mathbf{a} = (2, 0, 1)$$\mathbf{b} = (1, 3, 0)$
$\mathbf{c} = (0, -1, 2)$.

<details>
<summary>Solution</summary>

$$V = |\mathbf{a}\cdot(\mathbf{b}\times\mathbf{c})| = \left|\det\begin{pmatrix}2&0&1\\1&3&0\\0&-1&2\end{pmatrix}\right|$$

$= |2(6-0) - 0 + 1(-1-0)| = |12 - 1| = 11$.

</details>

### Question 13

**Prove that** the points equidistant from two fixed points lie on the perpendicular bisector plane
Of the segment joining them.

<details>
<summary>Solution</summary>

Let the fixed points be $A$ and $B$ with position vectors $\mathbf{a}$ and $\mathbf{b}$. A point $P$
Is equidistant from $A$ and $B$ when:

$$|\mathbf{p} - \mathbf{a}| = |\mathbf{p} - \mathbf{b}|$$

Squaring:
$(\mathbf{p}-\mathbf{a})\cdot(\mathbf{p}-\mathbf{a}) = (\mathbf{p}-\mathbf{b})\cdot(\mathbf{p}-\mathbf{b})$

$$|\mathbf{p}|^2 - 2\mathbf{a}\cdot\mathbf{p} + |\mathbf{a}|^2 = |\mathbf{p}|^2 - 2\mathbf{b}\cdot\mathbf{p} + |\mathbf{b}|^2$$

$$2(\mathbf{b} - \mathbf{a})\cdot\mathbf{p} = |\mathbf{b}|^2 - |\mathbf{a}|^2$$

This is the equation of a plane with normal $\mathbf{b} - \mathbf{a}$ (perpendicular to $AB$), which
Passes through the midpoint $\dfrac◆LB◆\mathbf{a}+\mathbf{b}◆RB◆◆LB◆2◆RB◆$. This is the
Perpendicular bisector. $\blacksquare$

</details>

### Question 14

Find the equation of the plane containing the line $L: \mathbf{r} = (1, 0, 2) + \lambda(1, 2, -1)$
And the point $P(3, 1, 4)$.

<details>
<summary>Solution</summary>

The direction of $L$ is $\mathbf{d} = (1, 2, -1)$. Two vectors in the plane are
$\overrightarrow{PQ} = (1, 0, 2) - (3, 1, 4) = (-2, -1, -2)$ (wait, $Q$ should be on $L$Not $P$).

Actually, the point on $L$ at $\lambda = 0$ is $(1, 0, 2)$. Vectors in the plane:
$\overrightarrow{PQ} = (1-3, 0-1, 2-4) = (-2, -1, -2)$ and $\mathbf{d} = (1, 2, -1)$.

$$\mathbf{n} = (-2,-1,-2)\times(1,2,-1) = \begin{pmatrix}(-1)(-1)-(-2)(2)\\(-2)(1)-(-2)(-1)\\(-2)(2)-(-1)(1)\end{pmatrix} = \begin{pmatrix}1+4\\-2-2\\-4+1\end{pmatrix} = \begin{pmatrix}5\\-4\\-3\end{pmatrix}$$

$\mathbf{r}\cdot\mathbf{n} = (1)(5) + (0)(-4) + (2)(-3) = 5 - 6 = -1$.

Equation: $5x - 4y - 3z = -1$.

Verify: $(3)(-4) - 4(1) - 3(4) = -15 - 4 - 12 = -31 \neq -1$. Let me recheck.

Using point $P(3, 1, 4)$: $5(3) - 4(1) - 3(4) = 15 - 4 - 12 = -1$. Correct.

</details>

### Question 15

**Prove that**
$\mathbf{a}\times(\mathbf{b}\times\mathbf{c}) = \mathbf{b}\times(\mathbf{c}\times\mathbf{a}) = \mathbf{c}\times(\mathbf{a}\times\mathbf{b})$.

<details>
<summary>Solution</summary>

This is the cyclic permutation property of the scalar triple product. In determinant form:

$$\det\begin{pmatrix}a_1&a_2&a_3\\b_1&b_2&b_3\\c_1&c_2&c_3\end{pmatrix} = \det\begin{pmatrix}b_1&b_2&b_3\\c_1&c_2&c_3\\a_1&a_2&a_3\end{pmatrix} = \det\begin{pmatrix}c_1&c_2&c_3\\a_1&a_2&a_3\\b_1&b_2&b_3\end{pmatrix}$$

Each equality follows from the fact that swapping two rows of a determinant changes its sign, and
Two swaps return to the original sign. $\blacksquare$

</details>

---

## 14. Connections to Other Topics

### 14.1 Vectors and matrices

The cross product and scalar triple product can be expressed as determinants. See
[Matrices](/docs/alevel/further-maths/pure-mathematics/further-matrices).

### 14.2 Vectors and mechanics

Vector methods are essential for resolving forces, computing moments
($\mathbf{M} = \mathbf{r} \times \mathbf{F}$), and angular momentum. See
[Projectile Motion](/docs/alevel/further-maths/further-mechanics/projectile-motion).

### 14.3 Planes and coordinate geometry

The equation of a plane connects vectors to 3D geometry. See
[Polar Coordinates](/docs/alevel/further-maths/pure-mathematics/polar-coordinates) for parametric
Representations of curves.

---

## 15. Key Results Summary

| Result                   | Formula                                                                                                                       |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- | -------- | -------------------------------- | ---------------------------------- | ------------- | ----- |
| Scalar product           | $\mathbf{a}\cdot\mathbf{b} =                                                                                                  | \mathbf{a}                                                           |          | \mathbf{b}                       | \cos\theta = a_1b_1+a_2b_2+a_3b_3$ |
| Vector product           | $\mathbf{a}\times\mathbf{b} = \begin{pmatrix}a_2b_3-a_3b_2\\a_3b_1-a_1b_3\\a_1b_2-a_2b_1\end{pmatrix}$                        |
| Scalar triple product    | $[\mathbf{a},\mathbf{b},\mathbf{c}] = \mathbf{a}\cdot(\mathbf{b}\times\mathbf{c}) = \det(\mathbf{a}\;\mathbf{b}\;\mathbf{c})$ |
| Distance: point to plane | $D = \dfrac◆LB◆                                                                                                               | \mathbf{a}\cdot\mathbf{n} - d                                        | ◆RB◆◆LB◆ | \mathbf{n}                       | ◆RB◆$                              |
| Distance: skew lines     | $D = \dfrac◆LB◆                                                                                                               | (\mathbf{a}\_2-\mathbf{a}\_1)\cdot(\mathbf{d}\_1\times\mathbf{d}\_2) | ◆RB◆◆LB◆ | \mathbf{d}\_1\times\mathbf{d}\_2 | ◆RB◆$                              |
| Angle: line to plane     | $\sin\phi = \dfrac◆LB◆                                                                                                        | \mathbf{d}\cdot\mathbf{n}                                            | ◆RB◆◆LB◆ | \mathbf{d}                       |                                    | \mathbf{n}    | ◆RB◆$ |
| Angle: two planes        | $\cos\theta = \dfrac◆LB◆                                                                                                      | \mathbf{n}\_1\cdot\mathbf{n}\_2                                      | ◆RB◆◆LB◆ | \mathbf{n}\_1                    |                                    | \mathbf{n}\_2 | ◆RB◆$ |
| Volume of tetrahedron    | $V = \dfrac{1}{6}                                                                                                             | [\mathbf{a},\mathbf{b},\mathbf{c}]                                   | $        |
| Reflection in plane      | $P' = P - 2D\hat{\mathbf{n}}$ where $D = \dfrac◆LB◆P\cdot\mathbf{n}-d◆RB◆◆LB◆                                                 | \mathbf{n}                                                           | ◆RB◆$    |

---

## 16. Further Exam-Style Questions

### Question 16

Find the equation of the plane that passes through the points $A(1,0,0)$$B(0,1,0)$$C(0,0,1)$ and
Verify that $D(1/3, 1/3, 1/3)$ lies on it.

<details>
<summary>Solution</summary>

$\overrightarrow{AB} = (-1,1,0)$$\overrightarrow{AC} = (-1,0,1)$.

$\mathbf{n} = \overrightarrow{AB}\times\overrightarrow{AC} = (1,1,1)$.

$\mathbf{r}\cdot\mathbf{n} = (1)(1)+(0)(1)+(0)(1) = 1$.

Equation: $\boxed{x+y+z = 1}$.

Check $D$: $\dfrac{1}{3}+\dfrac{1}{3}+\dfrac{1}{3} = 1$. ✓

</details>

### Question 17

**Prove that**
$\mathbf{a}\times(\mathbf{b}\times\mathbf{c}) = \mathbf{b}(\mathbf{a}\cdot\mathbf{c}) - \mathbf{c}(\mathbf{a}\cdot\mathbf{b})$
(the vector triple product expansion).

<details>
<summary>Solution</summary>

Let $\mathbf{a} = (a_1,a_2,a_3)$$\mathbf{b} = (b_1,b_2,b_3)$$\mathbf{c} = (c_1,c_2,c_3)$.

$\mathbf{b}\times\mathbf{c} = (b_2c_3-b_3c_2,\; b_3c_1-b_1c_3,\; b_1c_2-b_2c_1)$.

The first component of $\mathbf{a}\times(\mathbf{b}\times\mathbf{c})$:

$a_2(b_1c_2-b_2c_1) - a_3(b_3c_1-b_1c_3) = a_2b_1c_2-a_2b_2c_1-a_3b_3c_1+a_3b_1c_3$

$= b_1(a_2c_2+a_3c_3) - c_1(a_2b_2+a_3b_3)$

$= b_1(\mathbf{a}\cdot\mathbf{c}-a_1c_1) - c_1(\mathbf{a}\cdot\mathbf{b}-a_1b_1)$

$= b_1(\mathbf{a}\cdot\mathbf{c}) - c_1(\mathbf{a}\cdot\mathbf{b}) - a_1b_1c_1+a_1c_1b_1 = b_1(\mathbf{a}\cdot\mathbf{c})-c_1(\mathbf{a}\cdot\mathbf{b})$.

Similarly for the other two components. $\blacksquare$

</details>

### Question 18

Two lines are given by $\mathbf{r}_1 = (0,1,0)+\lambda(1,0,-1)$ and
$\mathbf{r}_2 = (0,0,1)+\mu(0,1,1)$. Determine whether they intersect, are parallel, or are skew.

<details>
<summary>Solution</summary>

$\mathbf{d}_1 = (1,0,-1)$$\mathbf{d}_2 = (0,1,1)$. Not parallel (not scalar multiples).

For intersection: $\lambda = 0$$1 = \mu$$-\lambda = 1+\mu$.

From $\lambda = 0$: $1 = \mu$ and $0 = 1+1 = 2$. Contradiction.

The lines are **skew**.

Distance:
$\mathbf{d}_1\times\mathbf{d}_2 = (0\cdot1-(-1)\cdot1,\; (-1)\cdot0-1\cdot1,\; 1\cdot1-0\cdot0) = (1,-1,1)$.

$|\mathbf{d}_1\times\mathbf{d}_2| = \sqrt{3}$.

$\mathbf{a}_2-\mathbf{a}_1 = (0,-1,1)$.
$(\mathbf{a}_2-\mathbf{a}_1)\cdot(\mathbf{d}_1\times\mathbf{d}_2) = 0+1+1 = 2$.

$D = \dfrac◆LB◆2◆RB◆◆LB◆\sqrt{3}◆RB◆ = \boxed{\dfrac◆LB◆2\sqrt{3}◆RB◆◆LB◆3◆RB◆}$.

</details>

---

## 17. Advanced Topics

### 17.1 Vector equations of planes

The equation of a plane can be written in three equivalent forms:

- Scalar product: $\mathbf{r}\cdot\mathbf{n} = d$
- Cartesian: $ax+by+cz = d$
- Parametric: $\mathbf{r} = \mathbf{a} + s\mathbf{b} + t\mathbf{c}$

### 17.2 The shortest distance between two skew lines — alternative derivation

The shortest distance between skew lines equals the perpendicular distance from any point on one
Line to the parallel plane containing the other line.

### 17.3 Triple vector product identity

The BAC-CAB rule:
$\mathbf{a}\times(\mathbf{b}\times\mathbf{c}) = \mathbf{b}(\mathbf{a}\cdot\mathbf{c}) - \mathbf{c}(\mathbf{a}\cdot\mathbf{b})$.

This identity is extensively used in mechanics (e.g., angular momentum, moments).

### 17.4 Applications in geometry

- **Coplanarity test:** $[\mathbf{a},\mathbf{b},\mathbf{c}] = 0 \iff$ the three vectors are
  coplanar.
- **Volume of parallelepiped:** $V = |[\mathbf{a},\mathbf{b},\mathbf{c}]|$.
- **Volume of tetrahedron:** $V = \dfrac{1}{6}|[\mathbf{a},\mathbf{b},\mathbf{c}]|$.

---

## 18. Further Exam-Style Questions

### Question 19

Find the angle between the planes $2x - y + z = 3$ and $x + y + 2z = 1$.

<details>
<summary>Solution</summary>

$\mathbf{n}_1 = (2,-1,1)$$\mathbf{n}_2 = (1,1,2)$.

$\cos\theta = \dfrac◆LB◆|2-1+2|◆RB◆◆LB◆\sqrt{6}\sqrt{6}◆RB◆ = \dfrac{3}{6} = \dfrac{1}{2}$.

$\boxed{\theta = 60°}$

</details>

### Question 20

**Prove that** the line of intersection of the planes $x+y+z=1$ and $2x-y+z=3$ is parallel to the
Vector $(2, 1, -3)$.

<details>
<summary>Solution</summary>

The direction of the line of intersection is
$\mathbf{n}_1 \times \mathbf{n}_2 = (1,1,1) \times (2,-1,1)$.

$= \begin{pmatrix}(1)(1)-(1)(-1)\\(1)(2)-(1)(1)\\(1)(-1)-(1)(2)\end{pmatrix} = (2, 1, -3)$.

Since the cross product gives $(2,1,-3)$The line is parallel to this vector. $\blacksquare$

</details>

---

## 19. Advanced Topics in 3D Vectors

### 19.1 Direction cosines

If $\mathbf{a}$ makes angles $\alpha, \beta, \gamma$ with the coordinate axes, then:

$\cos\alpha = \dfrac◆LB◆a_1◆RB◆◆LB◆|\mathbf{a}|◆RB◆$
$\cos\beta = \dfrac◆LB◆a_2◆RB◆◆LB◆|\mathbf{a}|◆RB◆$
$\cos\gamma = \dfrac◆LB◆a_3◆RB◆◆LB◆|\mathbf{a}|◆RB◆$

And $\cos^2\alpha + \cos^2\beta + \cos^2\gamma = 1$.

### 19.2 Triple vector product (BAC-CAB rule)

$\mathbf{a}\times(\mathbf{b}\times\mathbf{c}) = \mathbf{b}(\mathbf{a}\cdot\mathbf{c}) - \mathbf{c}(\mathbf{a}\cdot\mathbf{b})$

Note:
$(\mathbf{a}\times\mathbf{b})\times\mathbf{c} = \mathbf{b}(\mathbf{a}\cdot\mathbf{c}) - \mathbf{a}(\mathbf{b}\cdot\mathbf{c})$
(different!)

### 19.3 Shortest distance from a point to a line

The shortest distance from point $P$ (position vector $\mathbf{p}$) to the line
$\mathbf{r} = \mathbf{a} + \lambda\mathbf{d}$ is:

$$D = \frac◆LB◆|(\mathbf{p}-\mathbf{a})\times\mathbf{d}|◆RB◆◆LB◆|\mathbf{d}|◆RB◆$$

### 19.4 Vector planes — parametric form

A plane through point $\mathbf{a}$ spanned by vectors $\mathbf{b}$ and $\mathbf{c}$:

$$\mathbf{r} = \mathbf{a} + s\mathbf{b} + t\mathbf{c}$$

The normal is $\mathbf{n} = \mathbf{b}\times\mathbf{c}$.

---

## 20. Further Exam-Style Questions

### Question 21

Find the shortest distance from the point $P(1,2,3)$ to the line
$\mathbf{r} = (0,1,-1)+\lambda(1,1,0)$.

<details>
<summary>Solution</summary>

$\mathbf{p}-\mathbf{a} = (1,2,3)-(0,1,-1) = (1,1,4)$. $\mathbf{d} = (1,1,0)$.

$(\mathbf{p}-\mathbf{a})\times\mathbf{d} = \begin{pmatrix}1\cdot0-4\cdot1\\4\cdot1-1\cdot0\\1\cdot1-1\cdot1\end{pmatrix} = (-4, 4, 0)$.

$D = \dfrac◆LB◆|(-4,4,0)|◆RB◆◆LB◆|(1,1,0)|◆RB◆ = \dfrac◆LB◆\sqrt{32}◆RB◆◆LB◆\sqrt{2}◆RB◆ = \dfrac◆LB◆4\sqrt{2}◆RB◆◆LB◆\sqrt{2}◆RB◆ = \boxed{4}$.

</details>

### Question 22

**Prove that** the lines $\mathbf{r}_1 = (1,0,0)+\lambda(1,1,1)$ and
$\mathbf{r}_2 = (0,1,0)+\mu(1,-1,0)$ intersect and find the point of intersection.

<details>
<summary>Solution</summary>

$1+\lambda = \mu$$\lambda = 1-\mu$$\lambda = 0$.

From $\lambda = 0$: $\mu = 1$. Check: $1 = 1$ ✓, $0 = 0$ ✓, $0 = 0$ ✓.

The lines intersect at $\boxed{(1,0,0)}$.

</details>

## Common Pitfalls

1. Confusing position vectors with direction vectors — position vectors point from the origin.

2. Forgetting that the scalar product gives a scalar, not a vector.

3. Forgetting to check that solutions satisfy the original equation (especially with squaring both
   sides or dividing by variables).

4. Losing marks by not showing sufficient working — always write out each step, especially in proof
   questions.

5. Forgetting the $+c$ constant of integration in indefinite integrals, or misusing boundary
   conditions in definite integrals.

6. Incorrectly applying integration by parts by choosing $u$ and $\frac{dv}{dx}$ the wrong way
   around.

:::
