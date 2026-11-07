---
date: 2026-11-07T00:00:00+00:00
title: "Level 3A: Smooth Manifolds – Charts and Atlases"
description: "Smooth manifolds from the baseline: differentiability in Euclidean space, charts and atlases, the locality argument that makes smooth compatibility work, the maximal-atlas theorem with uniqueness proved, the stereographic atlas on the sphere, and smooth maps between manifolds."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "17 Core Course", "url": "https://mathematics.wyattau.com/17-core-course"}, {"name": "Level 3A: Smooth Manifolds", "url": "https://mathematics.wyattau.com/17-core-course/3a-manifolds"}]
}
</script>

**The Defect.** "A manifold is a space that locally looks like $\mathbb{R}^n$."
Every mathematician repeats this sentence, and almost every first exposure
leaves "looks like" unexamined. Looking like $\mathbb{R}^n$ *topologically* is
[Level 2](/17-core-course/2a-topology/)'s business (homeomorphisms). But
calculus needs more: it needs "looks like" up to a change of coordinates
preserving differentiability. Charts, atlases, and compatibility are the
precise answer, and this page proves that the answer is coherent: every atlas
generates exactly one maximal one, smoothly (the proof hides a subtlety about
locality that most introductions gloss over, and we do not gloss over it).

**The One-Line Reveal.** A smooth manifold is a topological space equipped
with a *maximal consistent family of coordinate systems*: consistency means
every change of coordinates between overlapping charts is a smooth
bijection with smooth inverse, and maximality means nothing that is
consistent with the family is left out.

**Scope.** From [Level 1B](/17-core-course/1b-linear-algebra/): linear maps,
rank–nullity. From [Level 2](/17-core-course/2a-topology/): the topological
manifold ingredients (Hausdorff, second countability once defined, subspace
and product topologies with their characteristic properties). Two inputs
from multivariable analysis are used as *stated*, because their proofs
belong to a multivariable analysis course; everything geometric below is
proved from them:

1. **Chain rule**: if $g: \mathbb{R}^n \to \mathbb{R}^m$ is differentiable at
   $a$ and $f: \mathbb{R}^m \to \mathbb{R}^k$ is differentiable at $g(a)$,
   then $f \circ g$ is differentiable at $a$ with
   $(f \circ g)'(a) = f'(g(a)) \circ g'(a)$.
2. **Inverse function theorem**: if $f: \mathbb{R}^n \to \mathbb{R}^n$ is
   continuously differentiable on an open set and $f'(a)$ is an invertible
   linear map, then $f$ restricts to a bijection $A \to B$ between open
   neighbourhoods of $a$ and $f(a)$, the inverse is differentiable, and
   $(f^{-1})'(f(a)) = (f'(a))^{-1}$.

Also assumed from set theory: $\mathbb{Q}$ is countable and dense in
$\mathbb{R}$ (the density is proved in the [Real Analysis
track](/3-real-analysis/)). Nothing else is assumed: in particular the
smoothness of polynomial and rational functions is *proved* in Section 1,
which is why the sphere example needs no calculus at all.

## 1. Differentiability in Euclidean Space

**Definition.** A map $f: \mathbb{R}^n \to \mathbb{R}^m$ is
**differentiable at** $a \in \mathbb{R}^n$ if there is a linear map $L:
\mathbb{R}^n \to \mathbb{R}^m$ with

$$
\lim_{h \to 0} \frac{\big\| f(a + h) - f(a) - Lh \big\|}{\|h\|} = 0.
$$

Then $L$ is unique (shown below) and is written $f'(a)$, the **(total)
derivative** of $f$ at $a$. The map is **smooth** (or $C^\infty$) on an open
set $U$ if it is differentiable at every point of $U$ and the assignments
$a \mapsto f'(a)$ are again differentiable, and so on through all orders;
for this page, differentiability at every point of the domain (the $C^1$
layer) is all the machinery that is ever invoked, and we use "smooth" for
it, flagging nowhere that the higher orders ride along under the same
chain rule.

**Proposition 1.1 (uniqueness; partials determine the derivative).** The
linear map $L$ in the definition, if it exists, is unique; its $(i, j)$
matrix entry is $\partial f_i / \partial x_j\,(a)$, so a differentiable map
has all partial derivatives, and they assemble into the **Jacobian matrix**
of $f'(a)$.

**Proof.** If $L_1, L_2$ both satisfy the definition, then
$\|(L_1 - L_2)h\| \leq \|f(a+h) - f(a) - L_1 h\| + \|f(a+h) - f(a) - L_2 h\|
= o(\|h\|)$. For any fixed $v$, put $h = tv$ and let $t \to 0$:
$\|(L_1 - L_2)v\| \leq o(|t|)/|t| \to 0$, so $(L_1 - L_2)v = 0$ for all $v$,
and $L_1 = L_2$. For the entries, put $h = t e_j$ in the definition applied
to the $i$-th component:

$$
\frac{f_i(a + t e_j) - f_i(a)}{t} - (L e_j)_i = \frac{o(|t|)}{|t|} \to 0,
$$

so $\partial f_i / \partial x_j (a) = \lim_{t \to 0} (f_i(a + t e_j) -
f_i(a))/t = (L e_j)_i$. $\blacksquare$

**Caution (partials do not a derivative make).** The converse of Proposition
1.1 fails. Let $f(x, y) = x^2 y / (x^4 + y^2)$ for $(x, y) \neq (0, 0)$ and
$f(0, 0) = 0$. Both partials at the origin vanish (on either axis the
function is identically $0$). Yet $f$ is not differentiable at the origin:
the derivative would have to be the zero map (Proposition 1.1), requiring
$f(h)/\|h\| \to 0$; but along $h = (t, t^2)$ we get $f(h) = t^4/(t^4 + t^4)
= 1/2$ while $\|h\| \to 0$, so $f(h)/\|h\| \to \infty$. Stronger still,
*every* directional derivative at the origin exists and is $0$ (for fixed
$h$, $f(th) = t\, h_1^2 h_2 / (t^2 h_1^4 + h_2^2) \to 0$ when $h_2 \neq 0$,
and is $0$ when $h_2 = 0$), and the function is still not differentiable.
$\blacksquare$

**Proposition 1.2 (algebra of derivatives).** Sums and scalar multiples of
differentiable maps are differentiable, with the obvious derivatives. If
$g, h: \mathbb{R}^n \to \mathbb{R}$ are differentiable at $a$, the product
$gh$ is differentiable at $a$ with derivative $h(a) g'(a) + g(a) h'(a)$. If
$g$ is differentiable at $a$ with $g(a) \neq 0$, the reciprocal $1/g$ is
differentiable at $a$ with derivative $-g'(a)/g(a)^2$, and $1/g$ is
continuous at $a$.

**Proof.** Sums and scalars are immediate from linearity of the definition.
*Product:* expand

$$
(g h)(a{+}h) - (g h)(a) - \big(h(a) g'(a) + g(a) h'(a)\big) h
= \Delta_g \, h(a) + g(a)\, \Delta_h + \Delta_g \Delta_h,
$$

with $\Delta_g = g(a{+}h) - g(a) - g'(a)h = o(\|h\|)$ and $\Delta_h$ likewise.
Dividing by $\|h\|$: the first term dies because $\Delta_g = o(\|h\|)$ and
$h(a)$ is a constant; the third dies as $o(\|h\|) \cdot o(\|h\|)$; and the
middle dies since $g(a)$ is a constant. (For vector-valued factors, apply
componentwise.)

*Reciprocal:* with everything evaluated at $a$ and $a{+}h$, a direct
computation gives

$$
\frac{1}{g(a{+}h)} - \frac{1}{g(a)} + \frac{g'(a)\,h}{g(a)^2}
= \frac{-\Delta_g \; g(a) + g'(a) h\, \big(g(a{+}h) - g(a)\big)}
{g(a{+}h)\, g(a)^2}.
$$

Since $g$ is continuous at $a$ (differentiability implies continuity, the
definition with $Lh$ subtracted), $g(a{+}h) \to g(a) \neq 0$, so the
denominator stays bounded away from $0$ near $h = 0$; the numerator is
$o(\|h\|)$ plus (bounded linear in $h$) times $o(1)$: divided by $\|h\|$ it
tends to $0$. Continuity of $1/g$ at $a$ is the same computation with the
derivative term dropped. $\blacksquare$

**Corollary 1.3 (polynomials and rational functions are smooth).** Every
polynomial map $\mathbb{R}^n \to \mathbb{R}$ is smooth; every rational
function is smooth on the open set where its denominator is nonzero.

**Proof.** Each coordinate function $u_i$ is linear, hence differentiable
with derivative itself (the definition's error term is identically $0$). A
monomial is a finite product of coordinate functions, smooth by repeated
application of the product rule (Proposition 1.2); polynomials are sums of
monomials. A rational function is a quotient of polynomials; on its domain
the denominator never vanishes, and the reciprocal rule applies.
$\blacksquare$

**Lemma 1.4 (pairing lemma).** If $g: \mathbb{R}^n \to \mathbb{R}^k$ and
$h: \mathbb{R}^m \to \mathbb{R}^{\ell}$ are differentiable at the relevant
points, then $(g, h)(x, y) = (g(x), h(y))$ is differentiable at $(a, b)$
with derivative the block map $(u, v) \mapsto (g'(a)u,\, h'(b)v)$.

**Proof.** $\|(g,h)(a{+}u, b{+}v) - (g,h)(a,b) - (g'(a)u, h'(b)v)\|^2 =
\|g(a{+}u) - g(a) - g'(a)u\|^2 + \|h(b{+}v) - h(b) - h'(b)v\|^2$ (squares
separate the coordinates), and each term is $o(\|(u,v)\|^2)$ by the
differentiability of $g$ and $h$. $\blacksquare$

**Lemma 1.5 (smoothness is local).** If a map is differentiable at every
point of an open set $U$, then it is differentiable at every point of any
open subset of $U$. Conversely, if each point of an open set has *some*
neighbourhood on which the map is differentiable at every point, then the
map is differentiable at every point of the set.

**Proof.** Differentiability at $a$ is a statement about the values of $f$
on arbitrarily small neighbourhoods of $a$: restricting the domain to a
smaller open set changes nothing at interior points. Both directions are
this one remark. $\blacksquare$

## 2. Topological Manifolds

**Definition.** A **base** for a topology on $X$ is a collection
$\mathcal{B}$ of open sets such that every open set is a union of members of
$\mathcal{B}$. The space is **second countable** if it has a *countable*
base.

**Proposition 2.1.** $\mathbb{R}^n$ is second countable; every subspace of a
second countable space is second countable; every subspace of a Hausdorff
space is Hausdorff.

**Proof.** *$\mathbb{R}^n$:* the balls $B(q, r)$ with $q \in \mathbb{Q}^n$
and $r \in \mathbb{Q}$, $r > 0$, form a countable collection
($\mathbb{Q}^n$ is countable by finite products of countables). They base
the topology: given an open $U$ and $x \in U$, some ball $B(x, \varepsilon)
\subseteq U$; by density of $\mathbb{Q}$ pick $q \in \mathbb{Q}^n$ with
$\|x - q\| < \varepsilon/3$ and a rational $r$ with $\|x - q\| < r <
2\varepsilon/3$; then $x \in B(q, r)$ and $B(q, r) \subseteq B(x,
\varepsilon)$ (for $z \in B(q, r)$: $\|z - x\| \leq \|z - q\| + \|q - x\| <
r + \varepsilon/3 < \varepsilon$), so every point of $U$ is covered by
members inside $U$: $U$ is a union of such balls.
*Subspaces:* if $\mathcal{B}$ is a countable base of $X$ and $S \subseteq
X$, then $\{B \cap S : B \in \mathcal{B}\}$ is a countable base of $S$ (an
open set of $S$ is $S \cap W'$ with $W' = \bigcup B_i$, and $S \cap W' =
\bigcup (B_i \cap S)$).
*Hausdorff subspaces:* for $x \neq y$ in $S$, the separating opens $U \ni
x$, $V \ni y$ in $X$ intersect $S$ in disjoint opens of the subspace.
$\blacksquare$

**Definition.** A **topological manifold** of dimension $n$ is a Hausdorff,
second countable space in which every point has an open neighbourhood
homeomorphic to an open subset of $\mathbb{R}^n$.

**Example (the model case).** $\mathbb{R}^n$ itself: Hausdorff and second
countable (Propositions 5.1 and 2.1 of Level 2 and Proposition 2.1 above),
and the identity map is a chart. $\blacksquare$

**Example (a non-manifold: the line with two origins).** Let $M = (\mathbb{R}
\setminus \{0\}) \cup \{p, q\}$, where $p \neq q$ are two extra points, and
declare the following collection $\mathcal{B}$ of subsets to be a base: all
sets $N(t, \varepsilon) = (t - \varepsilon, t + \varepsilon) \setminus \{0\}$
for $t \neq 0$; the sets $P(\varepsilon) = \{p\} \cup \big((-\varepsilon, 0)
\cup (0, \varepsilon)\big)$; and the sets $Q(\varepsilon)$ defined likewise
with $q$. (Base check: pairwise intersections of members are unions of
members — intervals meet in intervals, $P(\varepsilon) \cap P(\delta) =
P(\min)$, and a punctured interval meets a punctured interval in punctured
intervals, each point of which carries a small ball avoiding $0$.) With the
topology $\mathcal{B}$ generates, every point of $M$ has a Euclidean
neighbourhood: $t \neq 0$ has $N(t, \varepsilon) \cong (t - \varepsilon, t +
\varepsilon)$, and $p$ has $\varphi: P(\varepsilon) \to (-\varepsilon,
\varepsilon)$, $\varphi(p) = 0$, $\varphi(s) = s$ — a homeomorphism (the
preimage of any interval is a member of $\mathcal{B}$ or a union of them),
and likewise for $q$. But $M$ is not Hausdorff: $P(\varepsilon) \ni p$ and
$Q(\delta) \ni q$ always intersect, in $(-\min(\varepsilon, \delta), 0) \cup
(0, \min(\varepsilon, \delta))$. So the Hausdorff clause in the definition
is not decoration. $\blacksquare$

**Proposition 2.2 (open submanifolds).** An open subset of an
$n$-dimensional topological manifold is an $n$-dimensional topological
manifold.

**Proof.** Hausdorff and second countable pass to subspaces (Proposition
2.1). If $\varphi: U \to \varphi(U)$ is a chart and $W \subseteq U$ is open
in the manifold, then $W$ is open in $U$ (the subspace topologies of the
open $U$ agree), so $\varphi(W)$ is open in $\varphi(U)$, hence open in
$\mathbb{R}^n$, and $\varphi|_W: W \to \varphi(W)$ is a homeomorphism:
charts cover $W$. $\blacksquare$

## 3. Charts, Atlases, and the Maximal Atlas

**Definition.** A **chart** of a topological manifold $M$ is a homeomorphism
$\varphi: U \to \varphi(U)$ from an open $U \subseteq M$ onto an open subset
of $\mathbb{R}^n$. An **atlas** is a set of charts whose domains cover $M$.
For two charts $(U, \varphi)$ and $(V, \psi)$, the **transition map** is

$$
\psi \circ \varphi^{-1}: \varphi(U \cap V) \to \psi(U \cap V),
$$

defined on an open subset of $\mathbb{R}^n$ (the image of the open $U \cap V$
under the homeomorphism $\varphi$). The charts are **smoothly compatible**
if both transition directions are smooth (all derivatives existing at every
point of their open domains, Section 1). An atlas is a **smooth atlas** if
its charts are pairwise smoothly compatible.

**Definition.** A smooth atlas $\mathcal{A}$ is **maximal** if no strictly
larger atlas containing it is smooth. A **smooth structure** on $M$ is a
maximal smooth atlas, and $M$ together with one is a **smooth manifold**.

Nothing yet guarantees maximal atlases exist or are unique; the next two
results supply both. The heart is that smooth compatibility is *not*
transitive for arbitrary triples of charts (a counterexample follows the
proof), but transitivity *does* hold through a common atlas, locally.

**Proposition 3.1 (transitivity through a common atlas).** Let
$\mathcal{A}$ be a smooth atlas and let $(U, \varphi)$, $(V, \psi)$ be two
charts, each smoothly compatible with *every* chart of $\mathcal{A}$. Then
$(U, \varphi)$ and $(V, \psi)$ are smoothly compatible with each other.

**Proof.** Let $y \in \varphi(U \cap V)$, and let $p = \varphi^{-1}(y) \in U
\cap V$. Choose a chart $(W, \theta) \in \mathcal{A}$ with $p \in W$ (the
domains of $\mathcal{A}$ cover $M$). The set $\varphi(U \cap V \cap W)$ is
an open neighbourhood of $y$ (image of an open set under the homeomorphism
$\varphi$), and on it,

$$
\psi \circ \varphi^{-1} = (\psi \circ \theta^{-1}) \circ (\theta \circ
\varphi^{-1}),
$$

where the right side is defined: $\theta \circ \varphi^{-1}$ carries
$\varphi(U \cap V \cap W)$ into $\theta(U \cap V \cap W) \subseteq
\theta(W \cap V)$, whose image under $\psi \circ \theta^{-1}$ lies in
$\psi(U \cap V)$; both factors are smooth (each chart is compatible with
every chart of $\mathcal{A}$), and by the chain rule the composition is
smooth at $y$. The same argument with the roles of $\varphi$ and $\psi$
exchanged handles the inverse transition. Since $y \in \varphi(U \cap V)$
was arbitrary, both transition maps are differentiable at every point of
their domains (Lemma 1.5): the charts are smoothly compatible.
$\blacksquare$

**Why raw transitivity fails.** On the topological manifold $\mathbb{R}$,
let $\psi$ be the identity chart on $(0, 1)$, $\varphi$ the identity chart
on $(0, 3)$, and let $\theta: (0, 3) \to (1/4,\, 4)$ be $\theta(t) = t +
\frac{1}{4}|t - 1|^3$. Then $\theta$ is a homeomorphism onto its (open)
image: it is continuous and strictly increasing, since its derivative is
$1 - \frac{3}{4}(t - 1)^2 \geq \frac{1}{4} > 0$, and a continuous strictly
monotone map on an interval has a continuous inverse (the inverse is
monotone on an interval, and the one-line $\varepsilon$–$\delta$
bookkeeping is standard). It is smoothly compatible with $\psi$: on the
overlap $(0, 1)$ the transition $t \mapsto \theta^{-1}(t)$ is smooth,
because $\theta$ is smooth there (a polynomial in $t$) with derivative
never zero, so the inverse function theorem gives a smooth inverse. And
$\varphi$ is trivially compatible with $\psi$ (both are restrictions of the
identity). But $\varphi$ and $\theta$ are *not* compatible: the transition
$\theta \circ \varphi^{-1} = \theta$ is twice but not three times
differentiable at $t = 1$ ($|t-1|^3$ has a third derivative that jumps
there). The failure in Proposition 3.1's proof is exactly the point $p =
1$: no chart of the atlas $\{\psi\}$ contains it. Transitivity through a
*covering* atlas repairs this. $\blacksquare$

**Theorem 3.2 (existence and uniqueness of the maximal atlas).** Every
smooth atlas $\mathcal{A}$ on $M$ is contained in exactly one maximal smooth
atlas, namely

$$
\operatorname{Max}(\mathcal{A}) = \{\,\text{charts smoothly compatible with
every chart of } \mathcal{A}\,\}.
$$

**Proof.** *It is an atlas:* it contains $\mathcal{A}$ (each chart of
$\mathcal{A}$ is compatible with every chart of $\mathcal{A}$), so its
domains cover $M$. *It is smooth:* any two of its members are compatible
with each other by Proposition 3.1 (with the common atlas $\mathcal{A}$).
*It is maximal:* if a chart $(U, \varphi)$ is smoothly compatible with every
chart of $\operatorname{Max}(\mathcal{A})$, then in particular with every
chart of $\mathcal{A} \subseteq \operatorname{Max}(\mathcal{A})$, so it
already lies in $\operatorname{Max}(\mathcal{A})$ by definition; hence no
chart can be adjoined.
*It is unique:* let $\mathcal{A}_1$ be any maximal smooth atlas containing
$\mathcal{A}$. Every chart of $\mathcal{A}_1$ is compatible with every chart
of $\mathcal{A}$ (pairwise compatibility inside $\mathcal{A}_1$, which
contains $\mathcal{A}$), so $\mathcal{A}_1 \subseteq
\operatorname{Max}(\mathcal{A})$ by definition of the latter. Conversely,
take $\varphi \in \operatorname{Max}(\mathcal{A})$ and any
$\theta \in \mathcal{A}_1$: both are compatible with every chart of
$\mathcal{A}$, so Proposition 3.1 (common atlas $\mathcal{A}$) makes them
compatible with each other. Hence $\mathcal{A}_1 \cup \{\varphi\}$ is a
smooth atlas, and maximality of $\mathcal{A}_1$ forces $\varphi \in
\mathcal{A}_1$. So $\operatorname{Max}(\mathcal{A}) \subseteq
\mathcal{A}_1$, and the two are equal. $\blacksquare$

**The One-Line Reveal.** The maximal atlas is *defined* into existence:
"compatible with everything in sight" is self-closing, and Proposition 3.1
is what makes the resulting family pairwise consistent. Uniqueness is the
same proposition run in the other direction.

**Definition.** A **smooth manifold** is a topological manifold with a
smooth structure; charts of the maximal atlas are **admissible**. A subset
is open in the manifold exactly when it is open in the underlying topology:
the smooth structure adds no topology.

## 4. Examples

**Example (the sphere, entirely by algebra).** Let

$$
S^n = \{(u_1, \dots, u_{n+1}) \in \mathbb{R}^{n+1} : u_1^2 + \cdots +
u_{n+1}^2 = 1\}
$$

with its subspace topology, where $\mathbb{R}^{n+1}$ carries the product
topology of [Level 2, Section 4](/17-core-course/2a-topology/). Let $N =
(0, \dots, 0, 1)$ and $S = (0, \dots, 0, -1)$ be the poles. Define the
**stereographic projections**

$$
\varphi_N: S^n \setminus \{N\} \to \mathbb{R}^n, \qquad
\varphi_N(u) = \frac{(u_1, \dots, u_n)}{1 - u_{n+1}},
$$

$$
\varphi_S: S^n \setminus \{S\} \to \mathbb{R}^n, \qquad
\varphi_S(u) = \frac{(u_1, \dots, u_n)}{1 + u_{n+1}}.
$$

*They are well defined:* $1 - u_{n+1} = 0$ on the sphere only at $N$
($u_{n+1} = 1$ forces all other coordinates to $0$), and likewise $1 +
u_{n+1} = 0$ only at $S$. *They are mutual inverses as maps to and from the
sphere:* the inverse of $\varphi_N$ is

$$
\psi_N(y) = \left(\frac{2y}{\|y\|^2 + 1},\; \frac{\|y\|^2 - 1}{\|y\|^2 +
1}\right),
$$

and the verification is pure algebra. For $u \in S^n \setminus \{N\}$ put
$y = \varphi_N(u) = u'/(1 - u_{n+1})$ with $u' = (u_1, \dots, u_n)$. On the
sphere $\|u'\|^2 = 1 - u_{n+1}^2 = (1 - u_{n+1})(1 + u_{n+1})$, so

$$
\|y\|^2 + 1 = \frac{(1 - u_{n+1})(1 + u_{n+1}) + (1 - u_{n+1})^2}{(1 -
u_{n+1})^2} = \frac{2}{1 - u_{n+1}},
$$

and therefore $\frac{2y}{\|y\|^2 + 1} = u'$ and $\frac{\|y\|^2 -
1}{\|y\|^2 + 1} = \frac{(1 - u_{n+1})(1 + u_{n+1}) - (1 - u_{n+1})^2}{2(1 -
u_{n+1})} = u_{n+1}$: the composite recovers $u$. The composite
$\varphi_N \circ \psi_N$ is the identity by the same identity read backwards
($1 - u_{n+1} = 2/(\|y\|^2 + 1)$ for $u = \psi_N(y)$). The same formulas
with poles swapped handle $\varphi_S$. *They are homeomorphisms:* both
directions are continuous (Corollary 1.3: rational functions, with
denominators bounded away from $0$), and continuous mutual inverses are
homeomorphisms. *$S^n$ is a topological manifold:* it is Hausdorff and
second countable as a subspace of $\mathbb{R}^{n+1}$ (Proposition 2.1), and
the two chart domains $S^n \setminus \{N\}$, $S^n \setminus \{S\}$ cover it.
*It is a smooth manifold:* the transition map

$$
\varphi_S \circ \psi_N(y) = \frac{2y/(\|y\|^2 + 1)}{1 + (\|y\|^2 - 1)/(\|y\|^2 + 1)}
= \frac{y}{\|y\|^2},
$$

(using $1 + u_{n+1} = 2\|y\|^2/(\|y\|^2 + 1)$ for $u = \psi_N(y)$) is smooth
on $\mathbb{R}^n \setminus \{0\}$, which is exactly
$\varphi_N(U_N \cap U_S)$, and it is its own inverse, so the inverse
transition is the same smooth map. The atlas
$\{(\,S^n \setminus \{N\}, \varphi_N),\, (S^n \setminus \{S\},
\varphi_S)\,\}$ is smooth, and Theorem 3.2 gives the maximal one. Note what
did *not* happen: no trigonometry, no limits beyond Section 1's algebra.
$\blacksquare$

**Theorem 4.1 (products).** If $M, N$ are smooth manifolds of dimensions
$m, n$, then $M \times N$ with the product topology is a smooth manifold of
dimension $m + n$, with product charts $(U \times V, \varphi \times \psi)$.

**Proof.** *Topology.* $M \times N$ is Hausdorff: for $(x, y) \neq (x',
y')$, one coordinate differs, say $x \neq x'$, and disjoint neighbourhoods
$U \ni x$, $U' \ni x'$ separate the points as boxes $U \times N$,
$U' \times N$. Second countable: if $\mathcal{B}_M, \mathcal{B}_N$ are
countable bases, the boxes $\{B \times C\}$ over them are countable and base
the product (Level 2, Section 4: product opens are unions of boxes, and each
box's factors are unions of base members).
*Charts.* For charts $(U, \varphi)$ of $M$ and $(V, \psi)$ of $N$, the
product map $\varphi \times \psi: U \times V \to \varphi(U) \times
\psi(V)$ is a homeomorphism between open sets (product of homeomorphisms,
with target open in $\mathbb{R}^{m+n} = \mathbb{R}^m \times \mathbb{R}^n$),
and such charts cover $M \times N$.
*Compatibility.* The transition between $(U_\alpha \times V_\alpha,
\varphi_\alpha \times \psi_\alpha)$ and $(U_\beta \times V_\beta,
\varphi_\beta \times \psi_\beta)$ is

$$
(\varphi_\beta \circ \varphi_\alpha^{-1}) \;\times\; (\psi_\beta \circ
\psi_\alpha^{-1}),
$$

since composing and inverting act coordinatewise; it is smooth by the
pairing lemma (Lemma 1.4) applied to the two smooth transition maps. So the
product charts form a smooth atlas, and Theorem 3.2 extends it.
$\blacksquare$

## 5. Smooth Maps Between Manifolds

**Definition.** A map $f: M \to N$ of smooth manifolds is **smooth at** $p
\in M$ if there exist an admissible chart $(U, \varphi)$ of $M$ at $p$ and
an admissible chart $(V, \psi)$ of $N$ at $f(p)$ such that

1. $f(U) \subseteq V$, and
2. the **chart representation** $\psi \circ f \circ \varphi^{-1}:
   \varphi(U) \to \psi(V)$ is smooth on the open set $\varphi(U)$.

The map is **smooth** if it is smooth at every point. Note the asymmetry
with the topological definition of continuity: smoothness demands a chart
around $p$ whose entire image under $f$ sits inside the target chart. The
demand is satisfiable precisely because $U$ may be shrunk, and the next two
propositions show the notion is well defined and implies continuity.

**Proposition 5.1 (smoothness implies continuity).** A map that is smooth
at $p$ is continuous at $p$.

**Proof.** With $U, \varphi, V, \psi$ as in the definition, $f$ factors
near $p$ as $f = \psi^{-1} \circ (\psi \circ f \circ \varphi^{-1}) \circ
\varphi$ on $U$: for $x \in U$, $f(x) = \psi^{-1}\big((\psi \circ f \circ
\varphi^{-1})(\varphi(x))\big)$, since $\varphi(x) \in \varphi(U)$ and the
representation takes values in $\psi(V)$. The right side is a composition
of continuous maps ($\varphi$ and $\psi^{-1}$ are homeomorphisms; the
middle is smooth on an open set, hence continuous), so $f$ is continuous
at $p$. $\blacksquare$

**Proposition 5.2 (well-definedness).** If $f$ is smooth at $p$ via one
pair of charts, then for every admissible chart $(U_2, \varphi_2)$ at $p$
and $(V_2, \psi_2)$ at $f(p)$ there is an open $U' \subseteq U_2$
containing $p$ with $f(U') \subseteq V_2$ and $\psi_2 \circ f \circ
\varphi_2^{-1}$ smooth on $\varphi_2(U')$: the definition does not depend
on the charts used.

**Proof.** Let $(U_1, \varphi_1)$, $(V_1, \psi_1)$ witness smoothness. By
Proposition 5.1, $f$ is continuous at $p$, so $U' := U_1 \cap U_2 \cap
f^{-1}(V_2)$ is an open neighbourhood of $p$ (a preimage of the open
$V_2$ under a map continuous at $p$, intersected with two open sets).
Restricting $U_1$ to $U'$ leaves a legitimate chart (a homeomorphism onto
an open subset) and satisfies the definition's demands. Now on
$\varphi_2(U')$,

$$
\psi_2 \circ f \circ \varphi_2^{-1} = (\psi_2 \circ \psi_1^{-1}) \circ
(\psi_1 \circ f \circ \varphi_1^{-1}) \circ (\varphi_1 \circ \varphi_2^{-1}),
$$

and the composite is defined at every point of $\varphi_2(U')$: for $x \in
U'$ we have $f(x) \in V_1$ (since $x \in U_1$ and $f(U_1) \subseteq V_1$)
and $f(x) \in V_2$, so the middle factor is applied at $\varphi_1(x)$, the
outer factor at $\psi_1(f(x)) \in \psi_1(V_1 \cap V_2)$ (exactly the
domain of the transition $\psi_2 \circ \psi_1^{-1}$), and the inner factor
at $\varphi_2(x) \in \varphi_2(U_1 \cap U_2)$. Each factor is smooth on
its open domain (transitions by admissibility, the middle by hypothesis),
so the chain rule makes the composition smooth on the open
$\varphi_2(U')$. $\blacksquare$

**Proposition 5.3 (closure properties).** Smooth maps are continuous.
Compositions of smooth maps are smooth. Identity maps are smooth. Affine
maps are smooth, with derivative the linear part.

**Proof.** Continuity is Proposition 5.1 at each point. *Composition:* let
$f: M \to N$ be smooth at $p$ and $g: N \to P$ smooth at $f(p)$, witnessed
by charts $(U_1, \varphi_1)$, $(V_1, \psi_1)$ for $f$ and $(U_2,
\varphi_2)$, $(V_2, \psi_2)$ for $g$ (so $f(U_1) \subseteq V_1$ and
$g(U_2) \subseteq V_2$). By Proposition 5.2 applied to $f$ with the target
chart $(U_2, \varphi_2)$ of $N$, there is an open $U' \subseteq U_1 \cap
U_2$ containing $p$ with $f(U') \subseteq U_2$ and $\varphi_N$-representation
$\varphi_2 \circ f \circ \varphi_1^{-1}$ smooth on $\varphi_1(U')$. Then
the representation of $g \circ f$ through $(U_1, \varphi_1)$ and $(V_2,
\psi_2)$ is

$$
\psi_2 \circ g \circ f \circ \varphi_1^{-1}
= (\psi_2 \circ g \circ \varphi_2^{-1}) \circ (\varphi_2 \circ f \circ
\varphi_1^{-1}),
$$

defined on $\varphi_1(U')$ (for $x \in U'$: $f(x) \in U_2$, so the inner
factor applies and lands in $\varphi_2(U_2)$, where the outer factor is
smooth and takes values in $\psi_2(V_2)$), and smooth by the chain rule.
*Identity:* the representation through any chart $(U, \varphi)$ is
$\varphi \circ \operatorname{id} \circ \varphi^{-1}$, the identity of the
open set $\varphi(U)$: linear, so smooth by the affine case below.
*Affine maps:* for $F(x) = Lx + b$, the error in the derivative definition
is $\|F(a + h) - F(a) - Lh\| = 0$ identically, so $F'(a) = L$ at every
point. $\blacksquare$

**Definition.** A **diffeomorphism** $f: M \to N$ is a bijection that is
smooth with smooth inverse; the manifolds are then **diffeomorphic**, which
is the smooth analogue of homeomorphism.

**Theorem 5.4 (dimension is a diffeomorphism invariant).** If diffeomorphic
smooth manifolds have dimensions $n$ and $m$, then $n = m$.

**Proof.** Let $f: M \to N$ be a diffeomorphism, $p \in M$, and pick charts
$(U, \varphi)$ at $p$ and $(V, \psi)$ at $f(p)$, shrinking $U$ so that
$f(U) \subseteq V$ (possible by Proposition 5.1's continuity). The chart
representation $F = \psi \circ f \circ \varphi^{-1}$ is then a
diffeomorphism between the open subsets $\varphi(U) \subseteq
\mathbb{R}^n$ and $\psi(f(U)) \subseteq \mathbb{R}^m$: it is smooth by
hypothesis, bijective (with inverse $\varphi \circ f^{-1} \circ \psi^{-1}$,
which is smooth by the same transition-composition argument as Proposition
5.2 applied to $f^{-1}$, whose chart representations are smooth by the
definition of a diffeomorphism). Fix $x \in \varphi(U)$. The chain rule
applied to $F^{-1} \circ F = \operatorname{id}$ and $F \circ F^{-1} =
\operatorname{id}$ gives, for $A = F'(x)$ ($m \times n$) and $B =
(F^{-1})'(F(x))$ ($n \times m$): $BA = I_n$ and $AB = I_m$. Then
$\operatorname{im}(AB) = \mathbb{R}^m \subseteq \operatorname{im} A$, so $A$
is surjective, and by rank–nullity ([Level 1B, Theorem
1.6](/17-core-course/1b-linear-algebra/)) $m \leq n$; symmetrically $BA =
I_n$ makes $B$ surjective and gives $n \leq m$. Hence $n = m$.
$\blacksquare$

This is why the definition of a manifold fixes one dimension $n$ per
component and never needs to defend it: the inverse function theorem plus
rank–nullity make the dimension unforgeable.

## 6. Self-test

1. Prove that the line with two origins is not Hausdorff, and conclude
   which clause of the manifold definition rules it out. (§2 – any two
   neighbourhoods of the two origins contain a common punctured interval.)
2. Verify $\psi_N(\varphi_N(u)) = u$ for the stereographic chart, doing
   every algebraic step. (§4 – the key identity is $\|u'\|^2 = (1 -
   u_{n+1})(1 + u_{n+1})$ on the sphere.)
3. Prove that the open interval $(a, b)$ is a smooth manifold of dimension
   1. (§2, §4 – subspace of Hausdorff second countable $\mathbb{R}$;
   identity chart.)
4. Prove that every directional derivative of the Caution function at the
   origin exists and equals $0$, and that the function is nevertheless not
   differentiable there. (§1 – the counterexample in full.)
5. Prove the special case of Proposition 3.1 in which the point $p$ lies in
   all three chart domains. (§3 – the composition of the two transition
   maps, by the chain rule.)
6. Show that the atlas $\{\operatorname{id}_{\mathbb{R}}\}$ and the atlas
   $\{t \mapsto t^3\}$ on $\mathbb{R}$ generate different maximal atlases.
   (§3 – the transition between the two charts is $t \mapsto t^3$ with
   inverse $t \mapsto t^{1/3}$, not differentiable at $0$; Proposition 3.1
   does not force compatibility because... check: does it? Apply the
   proposition and see why it does not apply.)
7. Prove that a diffeomorphism $f: M \to N$ restricts, for every open
   $U \subseteq M$, to a diffeomorphism $U \to f(U)$. (§5, §2 – $f(U)$ is
   open by continuity, and charts restrict as in Proposition 2.2.)

### The One-Line Reveal (for this page)

The entire page follows from one decision: *a manifold's smoothness is not a
property of the space but a choice of coordinate bookkeeping, made coherent
by requiring all coordinate changes to be smooth.* The coherence proof is
local (Proposition 3.1 plus Lemma 1.5), which is precisely why the naive
transitivity claim fails and why the maximal atlas still works: consistency
only ever needs to be checked through charts you already trust.

### Where to go next

- [The Core Course hub](/17-core-course/) – Level 3B (tangent spaces as
  derivations, the derivative of a smooth map, and the inverse function
  theorem on manifolds) builds directly on the chart machinery of this
  page. Under construction.
- [Level 2: Topology](/17-core-course/2a-topology/) – the Hausdorff,
  second-countable, subspace and product theorems used throughout this
  page, with proofs.
- [An Introduction to Manifolds](https://link.springer.com/book/10.1007/978-1-4419-4000-6)
  – Loring Tu's book, whose Chapters 1–2 develop this page's material with
  the worked details of multivariable calculus assumed here as input.
