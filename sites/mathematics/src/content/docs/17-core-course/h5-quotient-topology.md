---
date: 2026-11-11T00:00:00+00:00
title: "H5: The Quotient Topology"
description: "Gluing as a construction: the circle from a glued interval, the torus from a square, the quotient topology defined so that maps out are exactly the maps that respect the gluing, the universal property as the classification tool, and the price paid: Hausdorff can fail, dissected through the line with two origins."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "17 Core Course", "url": "https://mathematics.wyattau.com/17-core-course"}, {"name": "H5: The Quotient Topology", "url": "https://mathematics.wyattau.com/17-core-course/h5-quotient-topology"}]
}
</script>

**The Defect.** Quotients already exist in this course twice: Stage C
built the integers as equivalence classes of pairs, and 1B built
quotient vector spaces. Both were *algebraic* quotients: the
structure carried forward was arithmetic. The geometric question is
younger and stranger. Take a strip of paper and glue its ends: you
see a circle. Take a square and glue opposite sides: a torus, a
cylinder, a Klein bottle depending on the twist. What is the
*definition* of the glued object, and when does the glued space
behave? The naive conjecture: gluing is harmless bookkeeping. The
reality: the quotient topology is defined exactly so that maps *out*
of it are continuous, and the price of that definition is that
gluing can destroy the separation you took for granted. Hausdorff is
not inherited.

**The One-Line Reveal.** <span class="wn-spoiler-inline" tabindex="0">The
quotient topology is the finest topology on the glued set making the
projection continuous, which says precisely: a map out of the glued
space is continuous exactly when the glued-together map underneath is;
compactness survives gluing, Hausdorff does not, and the line with
two origins is the standing counterexample that keeps every later
gluing honest.</span>

*The blur is deliberate: form your own reading of the page first, then
click it.*

**Scope.** Consumes 2A (topologies, continuity, compactness,
Hausdorff), Stage A (equivalence relations and their quotient sets),
and 2B (nothing beyond the metric analogy). One debt is paid forward:
the universal property here is the pattern that Stage J's manifold
gluing and Stage N's fibre bundles will reuse, and this page states
it once, formally. No new axioms; no new debts.

## 1. The Gluing Instinct, Made Concrete

**Ponder 1 (glue by hand).** Take the interval $[0, 1]$ and declare
$0$ and $1$ to be "the same point". Before any definition: what set
of points does the glued object contain? Write your answer as a set
of subsets of $[0, 1]$: which singletons survive, and which pair
stops being two points?

<details class="wn-spoiler">
<summary>Compare your construction</summary>
<div class="wn-spoiler-body">

The glued set contains: one point for each $t \in (0, 1)$ (the
singleton $\{t\}$ survives), and *one* point for the pair $\{0,
1\}$. So the glued set is the set of equivalence classes of the
relation $0 \sim 1$, everything else alone: exactly Stage A's
quotient construction, $(X / {\sim}) = \{[x] : x \in X\}$. What the
gluing adds beyond algebra is topology: which subsets of the glued
set count as open. That choice is the whole content of the
definition in Section 2, and there are wrong choices, which is why
the definition is not obvious.

</div>
</details>

**The gallery.** The same move, different relations: glue the ends
with a twist for the Möbius strip (a square's left edge to its right
edge, reversed); glue opposite sides of a square plainly for the
torus $\mathbb{R}^2 / \mathbb{Z}^2$; glue nothing for the identity
quotient. Each quotient set is easy; each *topology* is where care
begins.

:::note[Quick check]

1. Express the glued interval's point set as a quotient of
   equivalence classes.
2. Which singletons survive unglued?
3. State the relation defining the torus from $\mathbb{R}^2$.
4. Why is the quotient *set* the easy half of the construction?
5. Give one gluing that produces the cylinder rather than the torus.
6. How many points does the glued interval have in total?
7. Give the relation whose quotient produces the circle from
   $\mathbb{R}$.
8. State what the glued interval has in common with
   $\mathbb{R}/\mathbb{Z}$.

<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** $[0, 1] / (0 \sim 1)$: classes are $\{t\}$ for $0 < t < 1$
and $\{0, 1\}$ once. **2.** Every singleton except $\{0\}$ and
$\{1\}$. **3.** $(x, y) \sim (x + m, y + n)$ for integers $m, n$:
the classes of $\mathbb{Z}^2$ acting on the plane. **4.** The set
is Stage A's quotient construction; the new question is entirely
topological: which subsets are open. **5.** Glue only one pair of a
square's opposite sides: the square with its horizontal edges
identified is a cylinder.
**6.** Continuum many: one per $t \in (0, 1)$, plus the single class $\{0, 1\}$. **7.** $x \sim y$ when $x - y \in \mathbb{Z}$: integer translates name the same point. **8.** They are homeomorphic: sending the class of $t \in [0, 1]$ to the class of $t$ in $\mathbb{R}/\mathbb{Z}$ identifies both with the circle as a quotient of the line.

</div>
</details>

:::

## 2. The Quotient Topology and Its Universal Property

**Definition (quotient topology).** For $X$ a topological space and
$\sim$ an equivalence relation with projection $q: X \to X/{\sim}$,
the **quotient topology** on $X/{\sim}$ is the finest topology
making $q$ continuous: $U \subseteq X/{\sim}$ is open exactly when
$q^{-1}(U)$ is open in $X$.

**Ponder (attempt the universal property yourself).** Before reading
the theorem: a map $g$ from the glued interval to a circle sends
classes to points. Work out from the definition of continuity exactly
what condition on $g$ makes it continuous, in terms of the composed
map $g \circ q$ on the *unglued* interval.

<details class="wn-spoiler">
<summary>The condition you derived</summary>
<div class="wn-spoiler-body">

$g$ is continuous exactly when $g \circ q$ is continuous. Reasoning
from the definition: $g$ continuous means $g^{-1}(V)$ open in
$X/{\sim}$ for open $V$, which by the quotient topology's
definition means $(g \circ q)^{-1}(V)$ open in $X$, the continuity
of the composite. The quotient definition was *chosen* to make this
true, which is why it is called the universal property: the glued
space inherits exactly the maps that respect the gluing, no more
and no fewer.

</div>
</details>

**Theorem (universal property of the quotient).** $g: X/{\sim} \to
Y$ is continuous if and only if $g \circ q: X \to Y$ is continuous.
Moreover, if $g \circ q$ is constant on each class (which
continuity of a well-defined $g$ forces), the correspondence
between maps $X/{\sim} \to Y$ and maps $X \to Y$ respecting the
relation is a bijection.

*Proof.* Forward: given continuous $g$, the composite with the
continuous $q$ is continuous. Backward: given $g \circ q$
continuous and $V \subseteq Y$ open, $(g \circ q)^{-1}(V) =
q^{-1}(g^{-1}(V))$ is open; by the quotient topology's definition,
$g^{-1}(V)$ is open in $X/{\sim}$. Bijection: a map respecting the
relation determines exactly one map on classes; the universal
property says it is continuous exactly when the original is.
$\blacksquare$

:::note[Quick check]

1. State the quotient topology by its open sets.
2. State the universal property in one sentence.
3. In the glued interval, which maps $[0, 1] \to Y$ descend to maps
   of the glued space?
4. Why is the projection $q$ continuous by construction, and what
   does "finest" rule out?
5. Give the torus reading: which continuous maps
   $\mathbb{R}^2 \to Y$ descend to the torus?
6. Prove that $q$ maps saturated open sets to open sets, by the
   definition of the quotient topology.
7. State the continuity half of the universal property for the
   torus.
8. Give a non-example: a map on $[0, 1]$ that does not descend to
   the glued interval, and the reason.

<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** $U$ is open exactly when $q^{-1}(U)$ is open in $X$. **2.**
Maps out of the quotient are exactly the relation-respecting maps
out of the original, with matching continuity. **3.** Exactly the
continuous maps with $g(0) = g(1)$: constant on the one nontrivial
class. **4.** Preimages of opens are open by definition; "finest"
rules out extra open sets, which would break the iff in the
universal property by making too many $g$ continuous. **5.** Those
constant on each coset of $\mathbb{Z}^2$, that is, periodic with
integer periods in both coordinates.
**6.** $U$ saturated means $U = q^{-1}(q(U))$; if $U$ is open and saturated, $q(U)$ has open preimage $U$, so $q(U)$ is open by the quotient definition. **7.** $g$ on the torus is continuous exactly when its composite with the plane's projection is continuous on $\mathbb{R}^2$. **8.** $g(t) = t$: it sends the identified pair $0, 1$ to different values, so it is not constant on classes and no well-defined descended map exists.

</div>
</details>

:::

## 3. The Price: Hausdorff Can Fail

**Ponder (attempt the separation).** Build the **line with two
origins**: start with two copies of $\mathbb{R}$, $A$ and $B$, and
glue each $a \in A \setminus \{0_A\}$ to the matching $b \in B
\setminus \{0_B\}$. The two origins $0_A, 0_B$ stay unglued. Attempt
to separate them: can you find disjoint open sets, one around each
origin? Try before reading the dissection.

<details class="wn-spoiler">
<summary>The failed separation</summary>
<div class="wn-spoiler-body">

Any open set around $0_A$ contains, by the quotient topology, the
image of some interval $(-\varepsilon, \varepsilon) \subseteq A$;
un-gluing only removed the origin, so that image includes the
punctured intervals $(-\varepsilon, 0) \cup (0, \varepsilon)$ *as
seen from both copies*. Every open set around $0_B$ likewise
contains punctured intervals from the same shared points. Two open
sets, one around each origin, must both contain points of the
shared punctured line: they cannot be disjoint. The glued space is
not Hausdorff, although both copies were. This is the price: the
quotient topology is forced by the universal property, and the
universal property does not care about separation.

</div>
</details>

**Theorem (what survives and what does not).** The continuous image
of a compact space is compact; hence a quotient of a compact space
is compact. The quotient of a Hausdorff space need not be Hausdorff.

*Proof.* Quotient compactness: $q$ is continuous, and 2A's theorem
says the continuous image of compact is compact. The failure of
Hausdorff is Section 3's constructed space: two copies of
$\mathbb{R}$ are Hausdorff, the gluing produces a non-Hausdorff
quotient. $\blacksquare$

:::note[Quick check]

1. Why does every open set around $0_A$ contain punctured intervals
   from both copies?
2. State what survives gluing and what does not, with the theorem
   names.
3. In the line with two origins, are the two origins' neighbourhood
   structures identical away from the origin itself?
4. Which Stage A machinery is doing the work of "glue these pairs"?
5. Give one practical rule the counterexample teaches about later
   gluings.
6. Show that any two neighbourhoods of the two origins intersect,
   not just the small ones.
7. Which point of the glued interval's quotient could have caused a
   Hausdorff failure, and why does it not?
8. State one property the line with two origins shares with the
   ordinary line, and one it lacks.

<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** The quotient's opens are images of saturated opens; the
saturation of any interval around $0_A$ includes the punctured
neighbourhood, whose points are glued to their $B$-twins. **2.**
Compactness survives (continuous image of compact); Hausdorff does
not (the constructed counterexample). **3.** Yes: the two origins
have isomorphic punctured neighbourhoods, which is why no local
argument can separate them. **4.** Equivalence relations and their
quotient sets, Stage A Section 3. **5.** When gluing, check the
saturation of neighbourhoods around the glued seam: separation
failures announce themselves as neighbourhoods forced to share
points.
**6.** Every neighbourhood of either origin contains a punctured interval from the shared line; any two such neighbourhoods intersect there, whatever their size. **7.** The class $\{0, 1\}$: its two members have disjoint preimage-neighbourhoods $[0, \varepsilon)$ and $(1 - \varepsilon, 1]$, so the class separates cleanly from every other point, and the space stays Hausdorff. **8.** It shares the local structure (every point has interval neighbourhoods); it lacks Hausdorff separation between the two origins.

</div>
</details>

:::

## 4. Classification by Universal Property

**The torus, classified.** The universal property is not bookkeeping;
it is the tool that *identifies* glued spaces. The torus
$\mathbb{R}^2 / \mathbb{Z}^2$: a continuous map from the torus to $Y$
is exactly a continuous map $F: \mathbb{R}^2 \to Y$ that is
doubly periodic, $F(x + m, y + n) = F(x, y)$. Doubly periodic
functions on the plane are precisely functions on the torus; no new
definition is needed, and every theorem about plane-periodic
functions transfers.

**The pattern, named once.** This is the third universal property in
the course: the product (2A), the quotient vector space (1B), and
now the quotient topology all follow the same shape: the constructed
object is defined by the maps *into* or *out of* it. Stage F1 named
the shape; here it carries weight. Stage J's manifolds will be glued
from charts by exactly this pattern, and Stage N's fibre bundles are
quotient constructions whose price (the same non-Hausdorff traps)
must be checked the same way.

:::note[Quick check]

1. Restate doubly periodic functions as maps from the torus.
2. Name the three earlier universal properties this chapter's
   matches.
3. Why does a theorem about plane-periodic functions transfer to the
   torus without reproof?
4. What must be checked before declaring a glued space usable?
5. Which later stages will reuse this pattern?
6. Restate the universal property for maps *into* the quotient:
   what must a map $Y \to X/{\sim}$ look like?
7. Give the torus as a product of two glued intervals, and justify
   by the universal properties.
8. State the one-sentence moral of the line with two origins for
   later stages.

<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** Compose with $q$: a torus-map is exactly a doubly periodic
plane-map. **2.** The product's maps-in property (2A), the quotient
vector space's maps-out property (1B), and the categorical shape
named at F1. **3.** The universal property makes the function sets
identical with matching continuity: the theorem transfers through
the bijection. **4.** The saturation of neighbourhoods along the
seam: whether Hausdorff and any needed separation survive the
gluing. **5.** Stage J (charts glued into manifolds) and Stage N
(fibre bundles as quotient constructions).
**6.** No universal property constrains maps in: a map into the quotient is any map landing in the classes, checked for well-definedness and continuity on representatives by hand. **7.** $\mathbb{R}^2/\mathbb{Z}^2$ is homeomorphic to $(\mathbb{R}/\mathbb{Z}) \times (\mathbb{R}/\mathbb{Z})$: gluing the coordinates independently, and the product and quotient universal properties compose the homeomorphism both ways. **8.** After any gluing, test separation at the seam: saturation forces shared neighbourhoods, and Hausdorff is the first casualty.

</div>
</details>

:::

## Stage Gate

:::caution[Pass mark: four of five]
Before Stage I, answer these five without notes. A failed gate names
the section to reread (1: Section 1; 2: Section 2; 3: Section 3; 4:
Sections 4 and 5; 5: Section 5). Stage I is queued; its home is the
Course Map.

1. Express the glued interval as a quotient set, and state which
   singletons survive.
2. Define the quotient topology, and state the universal property.
3. Construct the line with two origins and prove it is not
   Hausdorff.
4. State what survives gluing and what does not, with proofs named.
5. Translate doubly periodic functions into torus maps, and name the
   pattern this instantiates.

<details class="wn-spoiler">
<summary>Gate answers</summary>
<div class="wn-spoiler-body">

**1.** $[0, 1]/(0 \sim 1)$; all singletons except $\{0\}$ and
$\{1\}$, which merge into $\{0, 1\}$. **2.** Opens are the sets
whose preimages under $q$ are open; $g$ out of the quotient is
continuous iff $g \circ q$ is. **3.** Glue two copies of
$\mathbb{R}$ away from their origins; any two neighbourhoods of the
two origins share punctured-line points, so they cannot be
disjoint. **4.** Compactness survives (continuous image of
compact); Hausdorff does not (the constructed counterexample).
**5.** Torus maps are exactly doubly periodic plane maps; the
pattern is the universal property, third of its line in this
course.

</div>
</details>

:::

## Problems

**Problems.** The quick checks tested recall. These chain several
results and require full written arguments.

1. Prove that the glued interval is compact and connected, citing
   the theorems that survive gluing and the continuous image
   theorem.
   *(Hint: compact: the image of compact under the continuous $q$;
   connected: an image of a connected space is connected, or run
   the separation-lifts argument through $q^{-1}$.)*
2. Prove that the quotient map $q$ is continuous and, when the
   relation's classes are all open (an **open relation**), an open
   map; conclude that for the glued interval, $q$ is closed too.
   *(Hint: openness of $q$ means images of opens are open, which
   for saturated opens is the definition; the interval's closed
   classes make $q$ closed by the compact-to-Hausdorff route or
   directly.)*
3. Show that the line with two origins, while not Hausdorff, is
   still a "good" space in the weaker sense: every point has a
   neighbourhood homeomorphic to an open interval. Which of 2A's
   theorems fail on it, and which survive?
   *(Hint: away from the origins it is an ordinary line; the
   failures are separation theorems, and compactness properties
   survive by the continuous-image theorem.)*
4. Classify: which continuous functions $[0, 1] \to \mathbb{R}$
   descend to the glued interval $[0, 1]/(0 \sim 1)$, and describe
   the descended functions as familiar objects.
   *(Hint: descend iff $g(0) = g(1)$; the descended functions are
   exactly the continuous functions on the circle, that is, the
   $1$-periodic continuous functions on the line composed with the
   covering.)*
5. Prove: the quotient of a connected space is connected, and the
   quotient of a path-connected space is path-connected, and
   conclude that the torus is both.
   *(Hint: the continuous image of connected is connected; a path
   in $X$ descends to a path in the quotient by the universal
   property, since paths are maps from $[0, 1]$.)*

## Where to Go Next

Stage H is complete: the canvas has its distances, its Baire engine,
its function-space compactness, and its gluing calculus. Stage I
(Measure) is queued; its home is the [Course
Map](/17-core-course/), where the sigma-algebras, the Lebesgue
integral, and the birth of probability are mapped as the next
construction the functional stages stand on.

**Next: the [Course Map](/17-core-course/), and Stage I beyond it.**
