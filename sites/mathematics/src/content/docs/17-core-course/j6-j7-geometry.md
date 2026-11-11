---
date: 2026-11-12T00:00:00+00:00
title: "J6-J7: Submanifolds and Curvature"
description: "The geometry chapters that finish Stage J: submanifolds as regular level sets with the implicit function theorem spent, immersions and embeddings distinguished, then the moving-frame construction that makes curvature computable, geodesics as straightest paths, and Gauss's theorema egregium stated with its engine named."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "17 Core Course", "url": "https://mathematics.wyattau.com/17-core-course"}, {"name": "J6-J7: Submanifolds and Curvature", "url": "https://mathematics.wyattau.com/17-core-course/j6-j7-geometry"}]
}
</script>

**The Defect.** 3A-3D defined manifolds by charts and integrated
forms over them, but never said where manifolds *live*: the sphere
and the torus appeared as examples, yet nothing in the course
decides whether a given equation like $x^2 + y^2 + z^2 = 1$ cuts
out a manifold. And once a surface sits in space, its curvature is
something you can see with your eyes, yet the chart-based calculus
of 3C never computed it. The naive conjecture: manifolds are given
by nice equations, and curvature is a number you read off a picture.
The repair: the implicit function theorem (Stage G's inverse
function theorem wearing its other hat) turns regular level sets
into manifolds, and the moving-frame construction turns curvature
into the failure of second derivatives to commute in a rotating
coordinate system.

**The One-Line Reveal.** <span class="wn-spoiler-inline" tabindex="0">A
regular level set of a smooth map is a manifold, with tangent space
the kernel of the derivative (the implicit function theorem says
so); a geodesic is the path whose acceleration is purely normal,
and curvature is the price of comparing directions along that path:
Gauss's theorem says the price you compute from outside is really a
fact of the surface itself.</span>

*The blur is deliberate: form your own reading of the page first, then
click it.*

**Scope.** Consumes Stage G (the inverse and implicit function
theorems, the chain rule), 3A-3D (charts, tangent spaces, forms,
Stokes), and Stage F (linear maps, determinants). The connection and
curvature constructions are given in the concrete moving-frame form
on surfaces; the coordinate-freecovariant-derivative machinery is
named with Stage N as payee. No new axioms; no new debts.

## 1. Submanifolds: Equations That Cut Out Manifolds

**Ponder 1 (attempt the cut).** Which of these level sets are
manifolds near the given point: the circle $x^2 + y^2 = 1$ at
$(1, 0)$; the figure-eight curve $y^2 = x^2 (1 - x^2)$ at the
origin; the sphere $x^2 + y^2 + z^2 = 1$ at $(0, 0, 1)$? Attempt a
rule that decides, using only the derivative of the defining map.

<details class="wn-spoiler">
<summary>The rule you are building</summary>
<div class="wn-spoiler-body">

The circle at $(1, 0)$: the derivative of $g(x, y) := x^2 + y^2$ is
$(2, 0)$ there, nonzero, and the level set locally looks like the
vertical line $x = 1$ slid by the theorem: a manifold. The figure
eight at the origin: the derivative of $y^2 - x^2 + x^4$ vanishes
at the crossing, and indeed the set is two curves meeting: not a
manifold there. The sphere at the north pole: the derivative is
$(0, 0, 2)$, nonzero, manifold. The pattern: when the derivative of
the defining map is nonzero *on the level set* (the level is
**regular**), the set is locally a graph, hence a manifold. The
crossing fails exactly because the derivative dies at the
self-intersection.

</div>
</details>

**Definition (regular level set, submanifold).** For $g: \mathbb{R}^n
\to \mathbb{R}^m$ smooth and $c \in \mathbb{R}^m$, the level set
$M_c := \{x : g(x) = c\}$ is **regular** at $x$ when $Dg(x)$ is
surjective. If $M_c$ is regular at every point, $M_c$ is a
submanifold of dimension $n - m$.

**Theorem (implicit function theorem, level-set form).** If $M_c$
is regular at $x_0$, then a neighbourhood of $x_0$ in $M_c$ is the
graph of a smooth function over $n - m$ of the coordinates, and the
tangent space is $\ker Dg(x_0)$.

*Proof shape.* Surjectivity of $Dg(x_0)$ lets Stage G's inverse
function theorem run on the extended map $\Phi(x) := (g(x), x')$
(with $x'$ the $n - m$ complementary coordinates): its derivative
is invertible, so $\Phi$ is locally invertible with smooth inverse.
In the new coordinates, $M_c$ is exactly the set $\{y = c\}$: a
coordinate plane, whose graph form and tangent space $T_{x_0} M_c
= \ker Dg(x_0)$ are read off directly. $\blacksquare$

*In words:* the inverse function theorem flattens the level set
into a coordinate plane; being a manifold is never assumed, it is
theorem output. The tangent space is the kernel: the directions the
equation's derivative cannot see.

:::note[Quick check]

1. State the regularity condition, and the dimension formula.
2. Prove the circle is a regular level set, and give its tangent
   space at $(1, 0)$.
3. Why does the figure eight fail at the crossing?
4. State the implicit function theorem's role in one sentence.
5. Give the tangent plane of the sphere at the north pole via the
   kernel.
6. Decide whether the hyperbola $xy = 1$ is a regular level set,
   and give the tangent line at $(1, 1)$.
7. Prove the level set $\{x = c\}$ of the coordinate function is a
   flat submanifold of dimension $n - 1$.
8. Give the dimension of the sphere $S^2$ in $\mathbb{R}^3$ by the
   formula, and state the tangent plane at a general point
   $(a, b, c)$.

<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** $Dg(x)$ surjective on the level set; dimension $n - m$.
**2.** $g = x^2 + y^2$, level $1$: $Dg = (2x, 2y) = (2, 0) \neq 0$
at $(1, 0)$; tangent space $\ker (2, 0) = $ the vertical direction
$\\{v : v_x = 0\\}$. **3.** The derivative of the defining map
vanishes at the crossing, so regularity fails exactly where the
branches meet. **4.** It flattens a regular level set into a
coordinate plane by locally inverting an extended map. **5.** $Dg
= (0, 0, 2)$ at the north pole; the kernel is $\{(v_1, v_2, 0)\}$:
the horizontal plane.
**6.** $g = xy$: $\nabla g = (y, x) = (1, 1)$ at $(1, 1)$, nonzero, so regular; the tangent line is $\ker (1, 1)$, the line through $(1, 1)$ in direction $(1, -1)$. **7.** $g := x_1$ has $\nabla g$ the first unit vector, never zero, so every level $\{x_1 = c\}$ is regular of dimension $n - 1$: a hyperplane. **8.** $n = 3$, $m = 1$: dimension $2$; the tangent plane at $(a, b, c)$ is $\ker (a, b, c)$, the set of $(h_1, h_2, h_3)$ with $a h_1 + b h_2 + c h_3 = 0$.

</div>
</details>

:::

## 2. Immersions and Embeddings

**Definition.** A smooth map $F: M \to N$ between manifolds is an
**immersion** when $dF$ is injective at every point; an
**embedding** when it is an immersion and a homeomorphism onto its
image.

**The distinction, by instance.** The figure eight *is* the image of
an immersion: $t \mapsto (\sin t, \sin t \cos t)$-style maps send
the line onto it with injective derivative everywhere, but the
map is not injective on the point set near the crossing times, and
the image is not a submanifold. The circle embeds in the plane; the
figure eight is immersed but not embedded. The distinction: an
immersion folds locally correctly; an embedding does not come back
to touch itself.

:::note[Quick check]

1. Define immersion and embedding.
2. Why is the figure eight the image of an immersion but not an
   embedding?
3. Give the tautological embedding of a graph $\{ (x, f(x)) \}$.
4. What does the immersion condition say about $dF$ at each point?
5. Which theorem certifies that embedded images inherit manifold
   structure?
6. Prove the map $t \mapsto (\cos t, \sin t)$ is an immersion
   and an embedding onto the circle.
7. Give an immersion of the line into the plane that is not an
   embedding, and say what fails.
8. Why does an injective immersion from a compact manifold
   automatically give an embedding?

<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** Immersion: $dF$ injective everywhere; embedding: immersion
plus homeomorphism onto the image. **2.** The derivative is
injective along each branch, but the map returns to the crossing
point, so it is not a homeomorphism onto its image. **3.** $x
\mapsto (x, f(x))$ from $\\{x\\}$-space into $\\{(x, y)\\}$-space:
its derivative is injective and the map is a homeomorphism onto
the graph. **4.** No nonzero tangent vector collapses: the image
tangent spaces have the domain's dimension. **5.** The implicit
function theorem, via the local graph form.
**6.** The derivative $(-\sin t, \cos t)$ is never zero, so an immersion; the map is injective as a point map and its inverse (angle reading) is continuous: an embedding onto the circle. **7.** The figure-eight parametrisation: the derivative is injective along the line, but two times map to the crossing point, so the point map is not injective and the image is not a submanifold. **8.** A continuous injection from a compact space to a Hausdorff space is a homeomorphism onto its image (2A): the immersion condition plus compactness closes the embedding definition.

</div>
</details>

:::

## 3. Moving Frames and Curvature

**Ponder (attempt the computation).** Walk along the unit circle
with constant speed: your acceleration vector points toward the
centre, magnitude $1$. Walk along a bigger circle of radius $R$:
the inward acceleration is $1/R$. Attempt the generalisation:
acceleration decomposes into a part along your motion (speeding up)
and a part perpendicular (turning). What should "curvature" be for
a plane curve, reading the acceleration?

<details class="wn-spoiler">
<summary>The construction</summary>
<div class="wn-spoiler-body">

Parametrise by arc length, so speed is one and the acceleration is
entirely perpendicular. Then the acceleration's magnitude is the
**curvature** $\kappa$: the rate at which the unit tangent vector
$T$ rotates. For the circle of radius $R$ traversed at unit speed,
$T$ rotates by $2\pi$ over length $2\pi R$, so $\kappa = 1/R$: the
eye's answer, computed. The curvature is the price of staying on
the curve: how hard the path pulls your steering wheel.

</div>
</details>

**Theorem (the moving frame on a surface).** Let $S$ be a surface in
$\mathbb{R}^3$ with unit normal field $N$. For a tangent vector
field $V$ on $S$, define the **covariant derivative** by
projecting the ambient derivative onto the tangent plane:
$$
\nabla_U V := (U V_{\text{ambient}})^{\text{tangent part}}.
$$
the **shape operator** $s(U) := -\nabla_U N$ measures how the normal
tips as you slide along $U$; its determinant is the **Gaussian
curvature** $K$.

**Theorem (geodesics).** A curve $\gamma$ on $S$ is a **geodesic**
when $\nabla_{\gamma'} \gamma' = 0$: its acceleration is purely
normal, with no tangential part. On the sphere, the great circles
are geodesics; on a flat plane, the straight lines.

**Theorem (Gauss's theorema egregium, stated).** The Gaussian
curvature $K$ is intrinsic: it can be computed from measurements
made entirely within the surface, without reference to the ambient
space. Proof engine: the Gaussian and mean curvatures come from the
shape operator, and Gauss's computation shows $K$ survives the
removal of the ambient data through the algebra of the second
fundamental form; the course states the theorem and books the
coordinate-free proof at Stage N, where connections are defined
without ambient space at all. The famous consequence: a flat sheet
of paper can be rolled into a cylinder ($K = 0$ preserved) but
never onto a sphere ($K = 1$ there), without stretching.

:::note[Quick check]

1. Define the covariant derivative by projection.
2. Define the shape operator, and where Gaussian curvature comes
   from.
3. Define a geodesic, and give the sphere's geodesics.
4. State the theorema egregium, and the paper-and-cylinder
   consequence.
5. Why can paper roll onto a cylinder but not onto a sphere?
6. Compute the curvature of a straight line traversed at unit
   speed.
7. Prove the unit-speed circle's curvature is $1/R$ by the
   tangent-rotation count.
8. Explain why the sphere's great circles are its geodesics, using
   the symmetry of the normal field.

<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** The ambient derivative of $V$ along $U$, with its normal
component discarded. **2.** $s(U) = -\nabla_U N$; $K$ is its
determinant. **3.** $\nabla_{\gamma'} \gamma' = 0$: no tangential
acceleration; great circles. **4.** $K$ is computable from within
the surface; rolling preserves $K = 0$, so a sphere ($K = 1$) is
unreachable without stretching. **5.** Rolling is an isometry and
isometries preserve intrinsic curvature; the sphere's curvature
differs, so no rolling or folding gets there.
**6.** The tangent never rotates: $T$ is constant, so $T' = 0$ and $\kappa = 0$: zero price of staying on the path. **7.** Over one lap of length $2\pi R$ the unit tangent turns by $2\pi$, so the rotation rate is $2\pi / 2\pi R = 1/R$: exactly the acceleration's magnitude at unit speed. **8.** The sphere's rotations are isometries carrying one great circle to any other and preserving the geodesic equation, and a meridian satisfies $\nabla_{\gamma'} \gamma' = 0$ by direct computation of the projected acceleration.

</div>
</details>

:::

## Stage Gate

:::caution[Pass mark: four of five]
Before Stage K's complex analysis or the next queued stage, answer
these five without notes. A failed gate names the section to reread
(1: Section 1; 2: Section 2; 3: Section 3; 4: Sections 4 and 5; 5:
Section 5).

1. Define regular level set, and state the dimension formula.
2. State the implicit function theorem's level-set form and the
   tangent space.
3. Distinguish immersion from embedding with the figure eight.
4. Define covariant derivative, shape operator, and Gaussian
   curvature.
5. Define geodesic, state the theorema egregium, and give the
   paper consequence.

<details class="wn-spoiler">
<summary>Gate answers</summary>
<div class="wn-spoiler-body">

**1.** $Dg$ surjective on $\{g = c\}$; dimension $n - m$. **2.**
Regular level sets are locally graphs over $n - m$ coordinates
(flattened by inverting the extended map); $T_x M = \ker Dg(x)$.
**3.** Immersion: $dF$ injective; embedding: immersion plus
homeomorphism onto image; the figure eight is immersed, not
embedded (it returns to touch itself). **4.** $\nabla_U V$ is the
tangent projection of the ambient derivative; $s(U) = -\nabla_U
N$; $K = \det s$. **5.** $\nabla_{\gamma'} \gamma' = 0$ (great
circles on spheres); $K$ is intrinsic; paper ($K = 0$) rolls into
cylinders but never onto spheres ($K = 1$) without stretching.

</div>
</details>

:::

## Problems

**Problems.** The quick checks tested recall. These chain several
results and require full written arguments.

1. Decide for each equation whether its level set is a regular
   submanifold, at which points, and of what dimension: the torus
   $((x^2 + y^2) - R)^2 + z^2 = r^2$ in $\mathbb{R}^3$; the cone
   $z^2 = x^2 + y^2$ at the origin and away from it.
   *(Hint: compute $\nabla g$ on each level set; the torus's
   gradient never vanishes when $r < R$; the cone's gradient dies
   only at the apex.)*
2. Prove that the sphere's geodesics are exactly the great circles,
   by the symmetry argument: great circles exist through any two
   nearby points in any direction, and uniqueness of geodesics
   (from the contraction engine of G9 on the sphere's chart
   equations) forces the identification.
   *(Hint: rotations of the sphere are isometries, and isometries
   carry geodesics to geodesics; carry a meridian to any great
   circle.)*
3. Compute the Gaussian curvature of the sphere of radius $R$ from
   the shape operator: show $s(U) = U / R$ (up to sign) for every
   tangent $U$, so $K = 1/R^2$ everywhere.
   *(Hint: the outward normal at $p$ is $p/R$; differentiate along
   a tangent curve: $\nabla_U N = U/R$; then $s(U) = -U/R$ and the
   determinant is $(\pm 1/R)^2$.)*
4. Prove that the graph of a smooth function $f: \mathbb{R}^2 \to
   \mathbb{R}$ is a regular level set (of $g(x, y, z) := z -
   f(x, y)$), and compute its tangent plane at $(x_0, y_0,
   f(x_0, y_0))$ from the kernel.
   *(Hint: $\nabla g = (-f_x, -f_y, 1)$ never vanishes; the kernel
   is $\{(h_1, h_2, f_x h_1 + f_y h_2)\}$, the plane spanned by
   $(1, 0, f_x)$ and $(0, 1, f_y)$.)*
5. Prove that an isometry between surfaces preserves Gaussian
   curvature at corresponding points, in the rolling-paper
   direction: if $F: S_1 \to S_2$ preserves lengths of curves, then
   $K_1 = K_2 \circ F$, and conclude the cylinder-versus-sphere
   impossibility.
   *(Hint: isometries preserve the lengths and angles of tangent
   vectors, hence geodesics and the intrinsic measurement of
   triangles; Gauss's theorem makes $K$ intrinsic, so the equality
   transports; the cylinder has $K = 0$ and the sphere $K = 1/R^2
   \neq 0$.)*

## Where to Go Next

Stage J is complete: charts, tangent spaces, forms, Stokes, and now
the submanifolds and curvature that give the canvas its shape. The
next stage in the frozen order is **Stage K: Complex Analysis**,
where the fundamental theorem of algebra's ledger entry is paid.

**Next: [Stage K: Complex Analysis](/17-core-course/stage-k-complex-analysis/).**
