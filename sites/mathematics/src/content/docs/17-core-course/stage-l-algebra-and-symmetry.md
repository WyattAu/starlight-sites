---
date: 2026-11-12T00:00:00+00:00
title: "Stage L: Algebra and Symmetry"
description: "Symmetry as algebra: groups through the categorical lens with the reader's own symmetries as instances, rings and modules completing the algebraic atlas, Galois theory reading the symmetry of polynomial equations and closing the compass-and-straightedge questions, Lie groups as symmetry that is also space, and the geometry capstone: the fifth postulate, its collapse, and symmetry as geometry."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "17 Core Course", "url": "https://mathematics.wyattau.com/17-core-course"}, {"name": "Stage L: Algebra and Symmetry", "url": "https://mathematics.wyattau.com/17-core-course/stage-l-algebra-and-symmetry"}]
}
</script>

**The Defect.** The course has used algebra piecemeal: Stage C built
$\mathbb{Z}$ and $\mathbb{Z}/n$, Stage F built vector spaces and
operators, Stage K built polynomials and their roots. What was never
built is the *study of structure itself*: why the same arguments
work for symmetries of a triangle, roots of unity, and invertible
matrices. The naive conjecture: algebra is the study of symbols and
rules. The repair: algebra is the study of *symmetry*, and a group
is the shape of any set of reversible actions. The deepest
application closes a two-thousand-year question: why no compass and
straightedge can trisect the angle, measured precisely, by reading
the symmetries of a polynomial's roots.

**The One-Line Reveal.** <span class="wn-spoiler-inline" tabindex="0">A
group is reversible symmetry, a ring is two operations distributing,
a module is a vector space over a ring, Galois theory pairs
subgroups with intermediate fields so that an equation's solvability
is its symmetry's structure, Lie groups are symmetry that is also a
manifold, and the fifth postulate's collapse shows that changing the
axioms changes the geometry, with each geometry's own symmetry
group.</span>

*The blur is deliberate: form your own reading of the page first, then
click it.*

**Scope.** Consumes Stage F1 (categories, universal properties),
Stage C (congruence classes: the first quotient construction), Stage
K (polynomials and their roots, the FTA), Stage J (manifolds, for
Lie groups). Galois's theorem is proved for the solvability
statement's shape; the trisection and doubling results follow via
the degree arithmetic proved here. The classification of finite
simple groups is named with its scale honestly stated. No new
axioms; no new debts.

## 1. Groups: Symmetry Through the Categorical Lens

**Ponder 1 (collect the symmetries).** List the rotations of an
equilateral triangle that leave it occupying the same footprint.
Then answer: when you perform two rotations in a row, is the result
on your list? Is there a rotation that undoes each one? What does
your list have in common with the invertible $2 \times 2$ matrices
of Stage F, under matrix multiplication?

<details class="wn-spoiler">
<summary>The inventory</summary>
<div class="wn-spoiler-body">

Three rotations ($0°$, $120°$, $240°$) and three flips through the
angle bisectors: six symmetries. Composing two list members stays on
the list (closure); the identity rotation undoes nothing done; each
member has an undo (inverses). The same three properties hold for
invertible matrices under multiplication: identity, inverses,
closure. And associativity holds in both. That four-part structure,
a set with an associative composition, an identity, and inverses,
is a **group**: the shape of every collection of reversible
actions.

</div>
</details>

**Definition (group).** A **group** is a set $G$ with a composition
$G \times G \to G$ that is associative, has an identity element,
and gives every element an inverse. A **homomorphism** is a map
$G \to H$ preserving composition; an **isomorphism** is a
bijective homomorphism (its inverse is then automatically a
homomorphism, Problem 1).

**Theorem (cyclic groups).** The powers of one element form a
subgroup; if $g^k = e$ for some minimal $k > 0$, the element has
**order** $k$, and its powers form a copy of $\mathbb{Z}/k$ (Stage
C's classes, met again as a group).

*Proof.* Closure: $g^a g^b = g^{a+b}$; identity: $g^0 = e$;
inverses: $g^a g^{k - a} = g^k = e$. Associativity is inherited
from the ambient composition. The map $[j] \mapsto g^j$ from
$\mathbb{Z}/k$ is well-defined (minimal $k$ makes $g^{j + k} =
g^j$), a homomorphism, and bijective onto the powers.
$\blacksquare$

**The categorical reading.** A group is a category with one object
in which every morphism is an isomorphism (F1's vocabulary); a
group action on a set $X$ is a homomorphism into the symmetries of
$X$. **Lagrange's theorem** (stated; proof is Problem 3's counting
argument): the subgroups of a finite group partition it into
equal-size cosets, so every subgroup's size divides the group's.

:::note[Quick check]

1. State the group axioms.
2. List the six symmetries of the equilateral triangle and name the
   group.
3. Prove the identity and inverses of a group are unique.
4. What is a homomorphism, and what does it preserve?
5. State Lagrange's theorem, and what it says about orders of
   elements.
6. Compute the composition of two flips of the equilateral
   triangle, and name the result.
7. Prove: every element satisfying $g^2 = e$ is its own inverse.
8. Give a homomorphism from $\mathbb{Z}/3$ into $D_3$, and its
   image.

<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** Associativity, identity, inverses (composition closure into
the set). **2.** Three rotations and three flips: the dihedral
group $D_3$, of order six, isomorphic to $\mathbb{Z}/3$ joined with
a flip. **3.** Two identities $e, e'$ compose to $e e' = e$ and $e'
e = e'$, so $e = e'$; inverses likewise cancel from both sides.
**4.** $f(gh) = f(g) f(h)$: compositions correspond. **5.** Every
subgroup's order divides the group's; consequently every element's
order divides the group's order.
**6.** Two flips compose to a rotation: a flip through one bisector then through another is the rotation by $120°$ or $240°$. **7.** $g g = e$ means $g$ undoes itself: multiply both sides by $g^{-1}$ (which exists) and use associativity to get $g = g^{-1}$. **8.** Map $[j]$ to the rotation by $120° j$: compositions correspond, and the image is the three-rotation subgroup.

</div>
</details>

:::

## 2. Rings and Modules: the Algebraic Atlas

**Definition (ring, module).** A **ring** is a set with addition
and multiplication: addition is a commutative group, multiplication
is associative with identity, and distributivity ties them. A
**module over a ring** $R$ is the vector-space construction with
$R$'s scalars (F2 with a ring in place of a field).

**The standing instances.** $\mathbb{Z}$: the ring whose ideals
(Problem 4) are exactly the $d\mathbb{Z}$, by Stage C's division
with remainder. $\mathbb{Z}/n$: the quotient ring; its units
theorem (Stage C Section 5) is the model for every units question.
$R[x]$: polynomials over any ring, Stage E's formal objects
generalised. $\mathbb{Z}^n$ as a $\mathbb{Z}$-module: the lattice,
Stage N's homology's home turf.

**Theorem (ideals and quotients).** The kernel of a ring
homomorphism is an **ideal** (closed under addition and under
multiplication by anything from the ring); ideals quotient exactly
as subgroups do; and $\mathbb{Z}/d\mathbb{Z}$ is the quotient of
$\mathbb{Z}$ by the ideal it generates.

*Proof shape.* Kernels: $f$ kills $a + b$ if it kills both, and
kills $ra$ by $f(ra) = f(r) f(a) = 0$. The quotient ring's
operations are well-defined exactly when the ideal absorbs
representative differences, which is the ideal's defining
property; the algebraic quotient and Stage C's congruence classes
are the same construction. $\blacksquare$

:::note[Quick check]

1. State the ring axioms, and name the two operations' roles.
2. Define a module, and give the lattice instance.
3. What is an ideal, and why does a kernel form one?
4. Which Stage C object is a quotient ring, and by which ideal?
5. State the units theorem for $\mathbb{Z}/p$ from Stage C.
6. Decide whether $2$ is a unit in $\mathbb{Z}/6$ and in
   $\mathbb{Z}/7$.
7. Prove the ideals of $\mathbb{Z}$ are exactly $d\mathbb{Z}$.
8. Is $\mathbb{Q}$ a free $\mathbb{Z}$-module? State the
   obstruction.

<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** Addition forms a commutative group; multiplication is
associative with identity; distributivity links them. **2.** An
abelian group with $R$-scalar multiplication satisfying the
distributive and identity laws; $\mathbb{Z}^n$ with integer
scalars. **3.** An additive subgroup closed under multiplication
by arbitrary ring elements; kernels absorb representative
differences by $f(ra) = 0$. **4.** $\mathbb{Z}/n$, quotient by
$n\mathbb{Z}$. **5.** For prime $p$, every nonzero class has a
multiplicative inverse; composite moduli have nonzero non-units.
**6.** In $\mathbb{Z}/6$: $2 \times 3 = 6 = 0$, and no multiple of $2$ lands on $1$: not a unit. In $\mathbb{Z}/7$: $2 \times 4 = 8 = 1$: a unit with inverse $4$. **7.** Given an ideal $I$ with a smallest positive member $d$ (well-ordering), division with remainder writes every member as $qd + r$ with $r$ in $I$ and $0 \leq r < d$; minimality forces $r = 0$, so $I = d\mathbb{Z}$. **8.** No: any two rationals are $\mathbb{Z}$-dependent ($p/q$ and $p'/q'$ satisfy $q' p' - q p = 0$ scaled), so no linearly independent generating set exists; divisibility is the obstruction.

</div>
</details>

:::

## 3. Galois Theory: the Symmetry of Equations

**Ponder (attempt the reading).** The roots of $x^2 - 2$ are $\pm
\sqrt{2}$; any symmetry of the equation swaps them. The roots of $x^4 - 2$ are the four fourth roots of two; attempt the full swap-table:
which swaps respect the arithmetic relations among the roots?

<details class="wn-spoiler">
<summary>The swap table</summary>
<div class="wn-spoiler-body">

The roots are $r, ir, -r, -ir$ with $r = \sqrt[4]{2}$. A symmetry
must send $r$ to another root and must respect multiplication: once
$r$'s image $ir^j$ is chosen, the images of $ir, -r, -ir$ are
forced (multiply by $i$ four times cycles them). Four symmetries,
one for each choice: the swap table is a copy of $\mathbb{Z}/4$.
The equation's solvability question becomes: can the roots be
built from the coefficients by a tower of operations whose
symmetries are built the same way? Galois makes "tower" and
"built the same way" exact.

</div>
</details>

**Definition (Galois group).** For a polynomial over a field $K$
containing all its roots in a larger field $L$, the **Galois
group** is the group of symmetries of $L$ fixing $K$ pointwise and
permuting the roots.

**Theorem (the Galois correspondence, stated).** Intermediate
fields $K \subseteq F \subseteq L$ correspond one-to-one with
subgroups of the Galois group, reversing containment, and degrees
match index: $[L : F] = $ the subgroup's size. The proof is the
art theorem of the subject (an orbit-stabiliser counting plus
linear-algebra chase); the course proves the counting direction in
Problem 3 and books the converse's fine print at Stage M's
machinery.

**Theorem (solvability and the compass).** An equation is
solvable by radicals exactly when its Galois group has a tower of
subgroups with cyclic quotients (abelian ones suffice). The
general quintic's group has no such tower: **no formula in radicals
exists** (Abel-Ruffini, stated; the group-theoretic half is
Problem 4). And the degree arithmetic closes the classical
questions: a constructible length has degree a power of two over
the rationals, so trisecting the angle and doubling the cube are
impossible, because both reduce to solving cubics of degree three,
and three is not a power of two.

*Proof shape (the degree arithmetic).* Constructible points are
built by intersecting lines and circles, whose coordinates are
rational functions and square roots of previous coordinates: each
step at most doubles the degree. A length of degree $3$ over the
rationals (the trisection of $60°$ requires solving $8x^3 - 6x =
1$, irreducible of degree $3$ by Stage K's tools) cannot be built
by halving degrees. $\blacksquare$

:::note[Quick check]

1. Define the Galois group of a polynomial.
2. State the correspondence, and which way containment reverses.
3. What does solvable-by-radicals mean in group terms?
4. Why must constructible lengths have power-of-two degree?
5. State the two classical impossibilities and the degree that
   kills each.
6. Compute the Galois group of $x^2 - 3$ over $\mathbb{Q}$.
7. The roots of $x^4 - 2$ are $r, ir, -r, -ir$ with $r =
   \sqrt[4]{2}$: confirm that choosing $r \mapsto i^j r$ forces the
   images of the other three, so the Galois group is $\mathbb{Z}/4$.
8. State the tower law: what happens to degrees along a tower of
   fields?

<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** The field symmetries fixing the base field and permuting
the roots. **2.** Intermediate fields correspond to subgroups,
containment reversed, degrees matched to indices. **3.** The
Galois group has a tower of subgroups with cyclic (abelian)
successive quotients. **4.** Each construction step multiplies
degrees by at most $2$: lines and circles meet in rational
functions and square roots. **5.** Trisecting $60°$ needs
$8x^3 - 6x = 1$, degree three; doubling the cube needs $x^3 = 2$,
degree three: neither three is a power of two.
**6.** The nontrivial symmetry $\sqrt{3} \mapsto -\sqrt{3}$: the group is $\mathbb{Z}/2$. **7.** Choosing $r \mapsto i^j r$ forces $ir \mapsto i^{j+1} r$, and four choices wrap around: the four symmetries compose exactly as $\mathbb{Z}/4$ composes. **8.** Degrees multiply along towers: $[L : K] = [L : F][F : K]$ for $K \subseteq F \subseteq L$; this is the counting that powers the constructibility arithmetic.

</div>
</details>

:::

## 4. Lie Groups: Symmetry That Is Also Space

**Definition.** A **Lie group** is a group that is also a smooth
manifold (Stage J), with composition and inversion smooth.

**The standing instances.** The circle $S^1$ under angle addition:
Stage D-G's $e^{i\theta}$, a group and a manifold. The invertible
matrices $GL_n(\mathbb{R})$: an open set of Stage F's matrix space,
smooth composition. The rotations $SO(3)$: the symmetry group of
space itself.

**Theorem (the tangent space at the identity is a Lie algebra,
stated).** The tangent space $T_e G$ carries a bracket $[,]$
measuring the failure of the group's directions to commute, and
this bracket determines much of the group: the **exponential map**
$\exp: T_e G \to G$ (Stage G's exponential, generalised) produces
one-parameter subgroups, and for connected groups whose loops all
contract (the property Stage N names loop-contraction) it determines the
group. The proof engine is Stage J's
flows and Stage G's ODE existence; the full structure theory is
Stage M's summit territory, declared here.

:::note[Quick check]

1. Define a Lie group.
2. Give the three standing instances with their smooth structures.
3. What lives at the identity's tangent space?
4. What does the exponential map produce, and from which Stage G
   theorem?
5. Name the stage where Lie groups become the summit's language.
6. Show $SO(2)$ is a circle, via the matrix's columns.
7. What is the Lie algebra of the circle group, and what is its
   bracket?
8. Explain the bracket as the failure to commute, for matrix
   groups.

<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** A group object in the manifold category: group operations
smooth. **2.** $S^1$ by angle addition; $GL_n(\mathbb{R})$ as an
open subset of matrix space; $SO(3)$ as rotations of space.
**3.** The Lie algebra: tangent vectors with the commutator
bracket. **4.** One-parameter subgroups; Stage G's ODE existence
theorem runs the flow. **5.** Stage M, the functional summit.
**6.** The columns of a rotation matrix are orthonormal: the first column runs over the unit circle and the second is determined as its quarter turn; so $SO(2)$ is the circle $S^1$. **7.** The tangent line at the identity, one-dimensional, with zero bracket: the circle's directions all commute, which is why the circle is the abelian specimen. **8.** $[U, V] := UV - VU$: zero exactly when the group directions commute; the bracket measures the infinitesimal non-commutation.

</div>
</details>

:::

## 5. The Geometry Capstone: the Fifth Postulate

**Ponder (attempt the parallel postulate's collapse).** Euclid's
fifth: through a point not on a line, exactly one parallel line.
Attempt to prove it from the other axioms along historical lines:
drop a perpendicular and chase angles. Where does every attempt
secretly assume what it is trying to prove?

<details class="wn-spoiler">
<summary>The two-thousand-year investigation</summary>
<div class="wn-spoiler-body">

Every attempted proof smuggled in an equivalent form: that angles
sum to two right angles, that similar triangles of every size
exist, that distance behaves additively along lines. The
eighteenth and nineteenth centuries flipped the method: assume the
negation and chase consequences expecting a contradiction. No
contradiction arrived. Lobachevskii and Bolyai built the
hyperbolic plane; Riemann built the spherical cousin; and the
resolution is the theorema egregium's world: the three geometries
are the three sign choices of curvature, each as consistent as the
others, each with its own symmetry group.

</div>
</details>

**The three geometries, one table.** The parallel postulate is a
curvature statement:

| Geometry | Curvature | Through a point | Angle sum | Symmetry group |
|---|---|---|---|---|
| Euclidean | $K = 0$ | exactly one parallel | two right angles | the Euclidean motions |
| Spherical | $K > 0$ | none (great circles meet) | more than two right angles | the rotations $SO(3)$ |
| Hyperbolic | $K < 0$ | infinitely many | fewer than two right angles | the hyperbolic motions $PSL_2(\mathbb{R})$ |

**Theorem (consistency, stated).** The hyperbolic plane admits a
model inside the Euclidean plane (the Poincaré disk) in which all
of Euclid's axioms except the fifth hold, and the fifth fails: any
inconsistency in hyperbolic geometry would be an inconsistency of
Euclidean geometry itself.

*Honest scope.* The Poincaré model's distance function and the
verification of the axioms are a chapter of Stage N; the course
states the model and the relative-consistency conclusion here,
because the *philosophical* payoff is the stage capstone: axioms
are choices, and each choice's geometry has its own symmetry
group, read by Stage L's own first section. The measurement
bridge: Stage J's curvature and Stage I's integration give the
hyperbolic plane its angle-of-parallelism formula, declared here
and computed at Stage N.

:::note[Quick check]

1. State the fifth postulate in its through-a-point form.
2. Name the three geometries with their curvature signs and
   parallel counts.
3. What is the Poincaré disk's role in the consistency argument?
4. Which stage's curvature machinery classifies the three
   geometries?
5. What does each geometry's symmetry group have to do with Stage
   L's first section?
6. Which geometry has triangle angle sums above two right
   angles, and by what quantity?
7. Why can the Euclidean plane not be isometric to the sphere?
8. State the hyperbolic parallel count and the curvature sign.

<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** Through a point off a line, exactly one parallel line.
**2.** Euclidean $K = 0$ (one parallel), spherical $K > 0$ (none),
hyperbolic $K < 0$ (infinitely many). **3.** It is a model inside
Euclidean geometry satisfying all axioms but the fifth: relative
consistency. **4.** Stage J's: the three geometries are the three
curvature signs. **5.** Each geometry's motions form a group, and
the geometry is its symmetry: the group lens of Section 1 applied
to whole spaces.
**6.** The sphere: angle sums exceed $2\pi$ by exactly $K$ times the triangle's area (Gauss's relation), the excess that Euclidean triangles lack. **7.** Isometries preserve curvature; the plane has $K = 0$ everywhere and the sphere $K = 1/R^2 > 0$: no distance-preserving correspondence exists. **8.** Infinitely many parallels through a point off a line, in every direction's worth: the signature of $K < 0$.

</div>
</details>

:::

## Stage Gate

:::caution[Pass mark: four of five]
Before Stage M, answer these five without notes. A failed gate names
the section to reread (1: Section 1; 2: Section 2; 3: Section 3; 4:
Section 4; 5: Section 5).

1. State the group axioms and Lagrange's theorem.
2. Define ring, ideal, and module, with the standing instances.
3. Define the Galois group, state the correspondence, and give the
   degree arithmetic that kills the trisection.
4. Define a Lie group, and say what lives at the identity's tangent
   space.
5. State the fifth postulate's three fates and the consistency
   argument.

<details class="wn-spoiler">
<summary>Gate answers</summary>
<div class="wn-spoiler-body">

**1.** Associativity, identity, inverses; subgroup orders divide
the group's. **2.** Addition a commutative group, associative
multiplication with identity, distributivity; ideal: additive
subgroup absorbing multiplication; module: vector-space construction
over a ring. **3.** Field symmetries fixing the base and permuting
roots; intermediate fields correspond to subgroups; construction
steps at most double degree, so degree-three equations are
unconstructible. **4.** A group that is a smooth manifold with
smooth operations; the Lie algebra with its bracket. **5.** One
parallel ($K = 0$), none ($K > 0$), infinitely many ($K < 0$); the
Poincaré model makes hyperbolic geometry relatively consistent.

</div>
</details>

:::

## Problems

**Problems.** The quick checks tested recall. These chain several
results and require full written arguments.

1. Prove that the inverse of a group isomorphism is a homomorphism,
   and that homomorphisms preserve identity and inverses.
   *(Hint: $f(e) f(g) = f(g)$ and cancellation; inverses: $f(g)
   f(g^{-1}) = f(e)$.)*
2. Prove that the units of $\mathbb{Z}/n$ form a group under
   multiplication, and compute its order for $n = 12$.
   *(Hint: closure by Bézout: products of invertible classes are
   invertible; $\{1, 5, 7, 11\}$, four units.)*
3. Prove Lagrange's theorem by the coset-counting argument: the
   cosets of a subgroup partition the group, and all have the
   subgroup's size.
   *(Hint: cosets are the equivalence classes of $x \sim y$ when
   $x = yh$; each coset maps bijectively to $H$ by right
   translation.)*
4. Prove that $x^3 - 2$ is irreducible over $\mathbb{Q}$ (Stage K's
   factorisation tools), conclude $[\mathbb{Q}(\sqrt[3]{2}):
   \mathbb{Q}] = 3$, and assemble the doubling-the-cube
   impossibility.
   *(Hint: no rational root exists by the rational-root test, and
   degree three without a root is irreducible; constructible
   degrees are powers of two, and three is not.)*
5. Verify the Poincaré disk's distance formula shrinks near the
   boundary circle, and explain how this delivers infinitely many
   parallels through an interior point to a boundary-avoiding
   geodesic.
   *(Hint: $d(u, v) :=$ the arc-length in the disk metric
   $\frac{2 |dz|}{1 - |z|^2}$ blows up at the boundary, so boundary
   points are infinitely far; geodesics are diameters and
   boundary-orthogonal arcs, and through an interior point many
   such arcs miss a given one.)*

## Where to Go Next

Symmetry is now algebra, equations are now read through their
groups, and the geometries are now choices with their own motion
groups. **Stage M (The functional summit)** is queued; its home is
the [Course Map](/17-core-course/): Banach and Hilbert spaces,
where 2B's completeness and Stage I's $L^p$ meet their final
structure, and where the four pillars the course has been naming
since 2B are proved.

**Next: the [Course Map](/17-core-course/), and Stage M beyond it.**
