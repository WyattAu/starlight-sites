---
date: 2026-11-07T00:00:00+00:00
title: "Level 3B: Tangent Spaces – Derivations and the Differential"
description: "The tangent space built with no arrows in sight: derivations on the algebra of germs, Hadamard's lemma, the chart isomorphisms and the change-of-basis law, the differential as a Jacobian, the manifold chain rule, and the inverse function theorem on manifolds."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "17 Core Course", "url": "https://mathematics.wyattau.com/17-core-course"}, {"name": "Level 3B: Tangent Spaces", "url": "https://mathematics.wyattau.com/17-core-course/3b-tangent-space"}]
}
</script>

**The Defect.** The picture-book definition of a tangent vector is "an arrow
that touches the surface at a point". On an embedded surface in $\mathbb{R}^3$
that picture works; on an abstract manifold there is no ambient space for the
arrow to live in, and the definition collapses. The repair is one of the great
relabellings of mathematics: a tangent vector is not an object that points, it
is an *operator that differentiates*. This page builds that operator
rigorously, proves it carries exactly the information the arrow carried, and
harvests three payoffs: the change-of-basis law, the chain rule on manifolds,
and the inverse function theorem on manifolds.

**The One-Line Reveal.** A tangent vector at $p$ is a linear map that eats
smooth functions and returns numbers, satisfying the Leibniz product rule at
$p$: everything else (coordinates, the Jacobian, velocities) is the shadow of
that single definition under transport by charts.

**Scope.** From [Level 3A](/17-core-course/3a-manifolds/): smooth manifolds,
charts, admissible atlases, smooth maps and their chart representations,
smoothness implies continuity (Proposition 5.1), compositions (Proposition
5.3), the Euclidean derivative with its algebra (Propositions 1.1 and 1.2).
Two further inputs are declared, in addition to 3A's chain rule and inverse
function theorem: the **fundamental theorem of calculus** and
**differentiation under the integral sign** for one-variable integrals of
smooth functions (both proved in the [Real Analysis
track](/3-real-analysis/)); both are used inside the proof of Hadamard's
lemma, whose statement is given there in full. Everything else is proved
here. One word of calibration: from this page on, "smooth" means
differentiable of *all* orders; 3A's definitions and theorems apply verbatim
in the $C^\infty$ category, since the chain rule and inverse function theorem
are standardly stated there.

## 1. Germs and Derivations in Euclidean Space

**Definition.** Let $a \in \mathbb{R}^n$. Two smooth functions defined on
(arbitrary open) neighbourhoods of $a$ are **equivalent as germs** if they
agree on some neighbourhood of $a$. A **germ at $a$** is an equivalence
class; $[f]$ denotes the germ of $f$. Pointwise addition, multiplication, and
scalar multiplication of representatives make the set of germs into a
commutative ring $C^\infty_a(\mathbb{R}^n)$: if $f_1$ agrees with $f_2$ and
$g_1$ with $g_2$ near $a$, then $f_1 + g_1$ agrees with $f_2 + g_2$ and $f_1
g_1$ with $f_2 g_2$ near $a$, so the operations do not depend on the chosen
representatives. The **value** of a germ at $a$ is the common value of its
representatives at $a$, written $[f](a)$; it is well defined for the same
reason.

**Definition.** A **derivation at $a$** is a map $D: C^\infty_a(\mathbb{R}^n)
\to \mathbb{R}$ that is linear and satisfies the Leibniz rule at $a$:

$$
D([f][g]) = D([f])\, [g](a) + [f](a)\, D([g]).
$$

**Lemma 1.1 (constants die).** $D([c]) = 0$ for every constant germ.

**Proof.** $D([1]) = D([1] \cdot [1]) = D([1])\,[1](a) + [1](a)\,D([1]) =
2D([1])$, so $D([1]) = 0$; and $[c] = c[1]$ with $D$ linear.
$\blacksquare$

**Lemma 1.2 (Hadamard's lemma).** Let $f$ be smooth on an open $U
\subseteq \mathbb{R}^n$, let $a \in U$, and let $B$ be an open ball around
$a$ with $B \subseteq U$. Then there are smooth functions $g_1, \dots, g_n:
B \to \mathbb{R}$ with

$$
f(x) = f(a) + \sum_{i=1}^n (x_i - a_i)\, g_i(x) \quad \text{for all } x \in
B, \qquad g_i(a) = \frac{\partial f}{\partial x_i}(a).
$$

**Proof.** For $x \in B$ the segment $a + t(x - a)$, $t \in [0, 1]$, lies in
$B$ (balls are convex). Define

$$
g_i(x) = \int_0^1 \frac{\partial f}{\partial x_i}\big(a + t(x-a)\big)\, dt.
$$

First, $g_i(a) = \int_0^1 \partial_i f(a)\, dt = \partial_i f(a)$. Second,
the identity: the one-variable function $h(t) = f(a + t(x-a))$ is
differentiable on $[0, 1]$ with $h'(t) = \sum_i \partial_i f(a + t(x-a))
(x_i - a_i)$ (the chain rule composed with the affine path, with partials
extracted from the Jacobian by 3A's Proposition 1.1). The fundamental
theorem of calculus (the declared input) gives $h(1) - h(0) = \int_0^1
h'(t)\, dt$, that is,

$$
f(x) - f(a) = \sum_{i=1}^n (x_i - a_i) \int_0^1 \partial_i f\big(a +
t(x-a)\big)\, dt = \sum_{i=1}^n (x_i - a_i)\, g_i(x).
$$

Third, $g_i$ is smooth in $x$: differentiation under the integral sign (the
other declared input) gives $\partial_j g_i(x) = \int_0^1 \partial_j
\partial_i f(a + t(x-a))\, dt$, and since $f$ is smooth of all orders this
proceeds inductively through every order. $\blacksquare$

**Theorem 1.3 (derivations are directional differentiation).** For every
derivation $D$ at $a$ there is a unique vector $v = (v_1, \dots, v_n) \in
\mathbb{R}^n$, namely $v_i = D([x_i])$, such that

$$
D([f]) = \sum_{i=1}^n v_i\, \frac{\partial f}{\partial x_i}(a)
$$

for every germ $[f]$. Conversely, every $v \in \mathbb{R}^n$ defines a
derivation by that formula.

**Proof.** *Well-definedness of the converse first.* The number $\partial_i
f(a)$ depends only on the germ: two representatives agree on a
neighbourhood of $a$, so their $i$-th partials at $a$ agree (partials use
values arbitrarily near $a$). Linearity is linearity of partials; the
Leibniz rule is the product rule for partials, which follows from 3A's
Propositions 1.1 and 1.2 (the product of differentiable maps is
differentiable, so the product's Jacobian entry is $\partial_i(fg)(a) =
\partial_i f(a)\, g(a) + f(a)\, \partial_i g(a)$).
*Now let $D$ be a derivation.* Put $v_i = D([x_i])$. Take a representative
$f$ of a germ and restrict attention to a ball $B$ around $a$ inside its
domain; Hadamard's lemma (Lemma 1.2) gives smooth $g_i$ on $B$ with $f =
f(a) + \sum_i (x_i - a_i) g_i$ on $B$, so as *germs*:

$$
[f] = [f(a)] + \sum_{i=1}^n [x_i - a_i]\,[g_i].
$$

Apply $D$ and use linearity, Lemma 1.1, and the Leibniz rule:

$$
D([f]) = D([f(a)]) + \sum_{i=1}^n \Big( D([x_i - a_i])\, g_i(a) + [x_i -
a_i](a)\, D([g_i]) \Big).
$$

The constant term dies (Lemma 1.1); $D([x_i - a_i]) = D([x_i]) - a_i
D([1]) = v_i$; and $[x_i - a_i](a) = 0$. So $D([f]) = \sum_i v_i\,
\partial_i f(a)$: the formula holds, and it plainly determines $D$ from $v$,
giving uniqueness. $\blacksquare$

**Notation.** The derivation given by $v = e_i$ is written $\frac{\partial}{\partial
x_i}\big|_a$: it acts by $\frac{\partial}{\partial x_i}\big|_a [f] =
\partial_i f(a)$. Theorem 1.3 says these $n$ operators form a basis of the
space of derivations.

## 2. The Tangent Space of a Manifold

**Definition.** A function $f: M \to \mathbb{R}$ on a smooth manifold is
**smooth** if it is smooth in the sense of [Level 3A, Section
5](/17-core-course/3a-manifolds/), with $\mathbb{R}$ carrying its standard
smooth structure. The **germ algebra** $C^\infty_p(M)$ at $p \in M$ is the
ring of germs at $p$ of smooth functions defined on neighbourhoods of $p$,
with pointwise operations (well defined exactly as in Section 1).

**Definition.** The **tangent space** of $M$ at $p$ is

$$
T_pM = \{ X: C^\infty_p(M) \to \mathbb{R} \mid X \text{ linear, } X([fg]) =
X([f])\,[g](p) + [f](p)\,X([g]) \},
$$

the vector space of derivations at $p$, with pointwise operations: $(X +
Y)([f]) = X([f]) + Y([f])$ and $(\lambda X)([f]) = \lambda X([f])$. Each
$X + Y$ and $\lambda X$ is again a derivation (the Leibniz rule is
pointwise), so $T_pM$ is a vector space. Its elements are **tangent
vectors** at $p$.

**Theorem 2.1 (charts identify the tangent space with $\mathbb{R}^n$).** Let
$(U, \varphi)$ be an admissible chart with $p \in U$. Then the transport map

$$
T_pM \to \mathbb{R}^n, \qquad X \mapsto \big(X([\,x_1 \circ \varphi\,]),
\dots, X([\,x_n \circ \varphi\,])\big),
$$

(where $x_1, \dots, x_n$ are the coordinate functions of $\mathbb{R}^n$, so
$x_i \circ \varphi$ is a smooth function on $U$) is a linear isomorphism. In
particular $\dim T_pM = n$, and $T_pM$ admits the basis

$$
\frac{\partial}{\partial x^i}\Big|_p : [f] \mapsto \frac{\partial
(f \circ \varphi^{-1})}{\partial x_i}\big(\varphi(p)\big), \qquad i = 1,
\dots, n,
$$

whose transport is the standard basis of $\mathbb{R}^n$.

**Proof.** *Chart maps are smooth.* The chart $\varphi: U \to \varphi(U)$
and its inverse $\varphi^{-1}: \varphi(U) \to U$ are smooth maps of
manifolds ($U$ and $\varphi(U)$ carry the open-submanifold structures of
3A's Proposition 2.2, and the chart representation of $\varphi^{-1}$
through the chart $\varphi$ itself is the identity of the open set
$\varphi(U)$).

*Germ transport is an algebra isomorphism.* Composition with $\varphi^{-1}$
carries germs at $p$ to germs at $\varphi(p)$: a smooth $f$ on a
neighbourhood of $p$ gives the smooth $f \circ \varphi^{-1}$ on the open
neighbourhood $\varphi(U)$ of $\varphi(p)$ (a composition of smooth maps,
3A's Proposition 5.3); if $f$ and $g$ agree near $p$ then $f \circ
\varphi^{-1}$ and $g \circ \varphi^{-1}$ agree near $\varphi(p)$
(continuity of $\varphi^{-1}$), so the transport is well defined on germs;
it is an algebra homomorphism ($(fg) \circ \varphi^{-1} = (f \circ
\varphi^{-1})(g \circ \varphi^{-1})$ pointwise); and it is bijective with
inverse $[h] \mapsto [h \circ \varphi]$: the composites
$(h \circ \varphi) \circ \varphi^{-1}$ and $(f \circ \varphi^{-1}) \circ
\varphi$ recover $h$ near $\varphi(p)$ and $f$ near $p$ respectively.
In the same way, composition with $\varphi$ is an algebra isomorphism
$C^\infty_{\varphi(p)}(\mathbb{R}^n) \to C^\infty_p(M)$.

*The basis derivations.* For $v \in \mathbb{R}^n$ define

$$
X^{\varphi}_v([f]) = \sum_{i=1}^n v_i\, \frac{\partial (f \circ
\varphi^{-1})}{\partial x_i}\big(\varphi(p)\big), \qquad
\frac{\partial}{\partial x^i}\Big|_p := X^{\varphi}_{e_i}.
$$

Each $X^{\varphi}_v$ is a derivation at $p$: linearity is clear, and the
Leibniz rule transports, since $(fg) \circ \varphi^{-1} = (f \circ
\varphi^{-1})(g \circ \varphi^{-1})$ and the Euclidean derivation
$\sum_i v_i \partial_i$ satisfies the Leibniz rule at $\varphi(p)$
(Theorem 1.3's converse). The map $v \mapsto X^{\varphi}_v$ is linear, and
injective: evaluate on the coordinate germs $[x_j \circ \varphi]$, whose
transported representative $(x_j \circ \varphi) \circ \varphi^{-1} = x_j$
has partials $\partial_i x_j = \delta_{ij}$ at $\varphi(p)$, giving
$X^{\varphi}_v([x_j \circ \varphi]) = v_j$. So the transport map of the
theorem, applied to $X^{\varphi}_v$, returns exactly $v$; and the basis
claim holds: the transport of $X^{\varphi}_{e_i}$ is $e_i$.

*Surjectivity.* Given $X \in T_pM$, define $Y$ on Euclidean germs by
$Y([h]) = X([h \circ \varphi])$ (well defined: representatives agreeing
near $\varphi(p)$ compose with $\varphi$ to functions agreeing near $p$).
$Y$ is a derivation at $\varphi(p)$ (the Leibniz rule transports exactly as
above), so Theorem 1.3 supplies $v \in \mathbb{R}^n$ with $v_i = Y([x_i]) =
X([x_i \circ \varphi])$ and $Y([h]) = \sum_i v_i\, \partial_i
h(\varphi(p))$ for every germ $[h]$. Now for an arbitrary $[f] \in
C^\infty_p(M)$, take $h = [f \circ \varphi^{-1}]$, so that $[f] = [h \circ
\varphi]$:

$$
X([f]) = Y([h]) = \sum_{i=1}^n v_i\, \partial_i \big(f \circ
\varphi^{-1}\big)(\varphi(p)) = X^{\varphi}_v([f]).
$$

So $X = X^{\varphi}_v$: the transport is surjective, hence a linear
isomorphism, and $\dim T_pM = n$. $\blacksquare$

**Theorem 2.2 (the change-of-basis law).** Let $(U, \varphi)$ and $(V,
\psi)$ be two admissible charts at $p$. Then

$$
\frac{\partial}{\partial x^i}\Big|_p = \sum_{j=1}^n \frac{\partial
(\psi \circ \varphi^{-1})_j}{\partial x_i}\big(\varphi(p)\big)
\, \frac{\partial}{\partial y^j}\Big|_p ,
$$

where $y^1, \dots, y^n$ are the coordinates of the $\psi$-chart.

**Proof.** Both sides are derivations, and a derivation is determined by
its values on germs (Theorem 1.3's uniqueness); so evaluate on an arbitrary
$[f] \in C^\infty_p(M)$. The right side gives $\sum_j \partial_i(\psi \circ
\varphi^{-1})_j (\varphi(p)) \cdot \partial_j (f \circ \psi^{-1})
(\psi(p))$. By the Euclidean chain rule applied to the smooth composition
$(f \circ \psi^{-1}) \circ (\psi \circ \varphi^{-1}) = f \circ
\varphi^{-1}$, this equals

$$
\frac{\partial (f \circ \psi^{-1} \circ \psi \circ \varphi^{-1})}{\partial
x_i}\big(\varphi(p)\big) = \frac{\partial (f \circ \varphi^{-1})}{\partial
x_i}\big(\varphi(p)\big),
$$

which is the left side's value. $\blacksquare$

This is the classical "tangent vectors transform covariantly" formula, now
a theorem rather than a slogan. Its practical content: the basis
$\frac{\partial}{\partial x^i}$ changes by the *Jacobian of the transition
map*, which is why the same physical direction acquires different
coordinate descriptions in different charts.

## 3. The Differential

**Definition.** For a smooth map $f: M \to N$ and $p \in M$, the
**differential** of $f$ at $p$ is

$$
df_p: T_pM \to T_{f(p)}N, \qquad df_p(X)([g]) = X\big([\,g \circ f\,]\big),
$$

for $[g] \in C^\infty_{f(p)}(N)$.

**Proposition 3.1 (the differential is well defined).** $[g \circ f]$ is a
germ at $f(p)$; the definition does not depend on the representative $g$;
and $df_p(X)$ is a derivation. Hence $df_p$ is a linear map between tangent
spaces.

**Proof.** $g$ is defined and smooth on some neighbourhood $W$ of $f(p)$;
then $g \circ f$ is defined on $f^{-1}(W)$, which contains a neighbourhood
of $p$ (Proposition 5.1 of 3A: $f$ is continuous at $p$), and is smooth
there (composition, Proposition 5.3 of 3A): so $[g \circ f]$ is a germ at
$p$'s image point, i.e. at $f(p)$. If $g$ and $g'$ agree near $f(p)$, then
$g \circ f$ and $g' \circ f$ agree near $p$ (again continuity of $f$), so
the germs agree and $X$ takes the same value. Leibniz for $df_p(X)$ is
Leibniz for $X$ applied to $(g_1 g_2) \circ f = (g_1 \circ f)(g_2 \circ f)$.
Linearity of $df_p$ is linearity of $X$ pointwise. $\blacksquare$

**Theorem 3.2 (the differential in charts is the Jacobian).** Let $(U,
\varphi)$ and $(V, \psi)$ be charts at $p$ and $f(p)$ with $f(U) \subseteq
V$, and let $F = \psi \circ f \circ \varphi^{-1}: \varphi(U) \to \psi(V)$ be
the chart representation. For $X = \sum_i v_i \frac{\partial}{\partial x^i}
\big|_p$:

$$
df_p(X) = \sum_{j=1}^m \Big( \sum_{i=1}^n v_i\, \frac{\partial F_j}{\partial
x_i}\big(\varphi(p)\big) \Big) \frac{\partial}{\partial y^j}\Big|_{f(p)} :
$$

the matrix of $df_p$ in the chart bases is the Jacobian matrix of $F$ at
$\varphi(p)$.

**Proof.** Both sides are derivations at $f(p)$; evaluate on the coordinate
germs $[y^j \circ \psi]$. The right side contributes its own $j$-th
coefficient. The left side:

$$
df_p(X)\big([\,y^j \circ \psi\,]\big) = X\big([\,y^j \circ \psi \circ
f\,]\big) = \sum_{i=1}^n v_i\, \frac{\partial\, (y^j \circ \psi \circ f
\circ \varphi^{-1})}{\partial x_i}\big(\varphi(p)\big)
= \sum_{i=1}^n v_i\, \frac{\partial F_j}{\partial x_i}\big(\varphi(p)\big),
$$

since $y^j \circ \psi \circ f \circ \varphi^{-1} = y^j \circ F = F_j$.
$\blacksquare$

**Theorem 3.3 (the chain rule on manifolds).** For smooth maps $f: M \to N$
and $g: N \to P$, and $p \in M$:

$$
d(g \circ f)_p = dg_{f(p)} \circ df_p.
$$

**Proof.** Both sides are linear maps $T_pM \to T_{g(f(p))}P$; evaluate on
$X \in T_pM$ and an arbitrary germ $[h] \in C^\infty_{g(f(p))}(P)$:

$$
d(g \circ f)_p(X)([h]) = X\big([\,h \circ g \circ f\,]\big)
= df_p(X)\big([\,h \circ g\,]\big) = dg_{f(p)}\big(df_p(X)\big)([h]),
$$

the middle step being the definition of $df_p$ applied to the germ of $h
\circ g$ at $f(p)$ (a legitimate germ: $h$ is defined near $g(f(p))$, so $h
\circ g$ is defined near $f(p)$ and smooth there). $\blacksquare$

**Example (velocities).** A smooth curve is a smooth map $\gamma: (a, b) \to
M$ from an interval of $\mathbb{R}$. Its **velocity** at $t$ is
$d\gamma_t(\frac{d}{dt}\big|_t)$, where $\frac{d}{dt}\big|_t$ is the standard
basis derivation of $T_t\mathbb{R}$: acting on a germ $[f]$, it returns
$\frac{d(f \circ \gamma)}{dt}(t)$. In a chart $(U, \varphi)$, the
coordinates of the velocity are $\frac{d(\varphi \circ \gamma)_j}{dt}(t)$
by Theorem 3.2 (with the one-variable Jacobian a column of ordinary
derivatives), which is exactly the derivative of the coordinate
description of the curve: the abstract definition returns the familiar
one, chart by chart. $\blacksquare$

## 4. The Inverse Function Theorem on Manifolds

**Theorem 4.1 (local diffeomorphisms).** Let $f: M \to N$ be a smooth map of
$n$-dimensional manifolds, and let $df_p: T_pM \to T_{f(p)}N$ be a linear
isomorphism for some $p$. Then $f$ restricts to a diffeomorphism from an
open neighbourhood of $p$ onto an open neighbourhood of $f(p)$.

**Proof.** Choose charts $(U_1, \varphi)$ at $p$ and $(V, \psi)$ at
$f(p)$, and shrink $U_1$ (Proposition 5.1 of 3A makes $f$ continuous, so
$f^{-1}(V)$ is an open neighbourhood of $p$) so that $U := U_1 \cap
f^{-1}(V)$ satisfies $f(U) \subseteq V$. The chart representation $F =
\psi \circ f \circ \varphi^{-1}: \varphi(U) \to \psi(V)$ is smooth between
open subsets of $\mathbb{R}^n$. By Theorem 3.2, the Jacobian matrix of $F$
at $\varphi(p)$ is the matrix of $df_p$ in the chart bases, which is
invertible (an isomorphism between $n$-dimensional spaces has an invertible
matrix in any bases; the bases here are the chart transports of
Theorem 2.1). The Euclidean inverse function theorem (declared in 3A's
Scope) applies: there are open $A \ni \varphi(p)$ and $B \ni F(\varphi(p))$
with $F|_A: A \to B$ a diffeomorphism. Shrink once more: $U' := U \cap
\varphi^{-1}(A)$ is an open neighbourhood of $p$, and

$$
f\big|_{U'} = \psi^{-1} \circ F|_A \circ \varphi\big|_{U'}
$$

is a composition of smooth maps with smooth inverses (the outer maps are
chart maps, smooth with smooth inverses on their images; the middle is the
Euclidean diffeomorphism), hence by 3A's composition propositions a
diffeomorphism from the open $U'$ onto $f(U') = \psi^{-1}\big(F(A \cap
\varphi(U))\big)$, which is open: $A \cap \varphi(U)$ is open in $A$, and
$F|_A$ is a homeomorphism of $A$ onto the open set $B$, so the image is
open in $B$ and hence in $\mathbb{R}^n$, containing $f(p)$.
$\blacksquare$

**Example (what the tangent space of the model space is).** For $M =
\mathbb{R}^n$ with its standard structure and the identity chart, Theorem
2.1's transport is $\Sigma_v \mapsto v$ and the differential of a smooth $f:
\mathbb{R}^n \to \mathbb{R}^n$ at $p$, read through the transports, is
exactly the Euclidean derivative $f'(p)$: Theorem 3.2's Jacobian matrix *is*
the matrix of $f'(p)$ by 3A's Proposition 1.1. The manifold definitions
recover the Euclidean ones verbatim, which is the consistency check any new
definition must pass. $\blacksquare$

## 5. Self-test

1. Prove that a derivation $D$ at $a$ satisfies $D([f]) = 0$ for every germ
   $[f]$ with $[f](a) = 0$ and vanishing first partials at $a$. (§1 – write
   $f = f(a) + \sum (x_i - a_i) g_i$ by Hadamard and watch every term die.)
2. Compute $T_0\mathbb{R}$ explicitly: write the basis derivation
   $\frac{d}{dt}\big|_0$ acting on an arbitrary germ, and verify the
   transport of Theorem 2.1 is the identity. (§1, §2 – the chart is the
   identity.)
3. Prove that $df_p(X)$ is independent of the representative $g$ of the
   target germ. (§3 – if $g$ and $g'$ agree near $f(p)$, then $g \circ f$
   and $g' \circ f$ agree near $p$, because $f$ is continuous at $p$ by
   3A's Proposition 5.1.)
4. Verify the change-of-basis law (Theorem 2.2) for the two stereographic
   charts of the circle $S^1$, at a point where both charts apply.
   (§2, 3A §4 – the transition is $t \mapsto 1/t$, with derivative
   $-1/t^2$; the law says the basis derivations transform by exactly that
   Jacobian entry.)
5. Prove that the differential of a constant map is the zero map. (§3 –
   $[g \circ c] = [g(c_0)]$ is a constant germ, and derivations kill
   constant germs by Lemma 1.1.)
6. Prove that a local diffeomorphism is an open map. (§4 – each point of
   the domain has a neighbourhood mapped diffeomorphically onto an open
   set; images of those neighbourhoods cover the image and are open.)
7. Prove that $d(\operatorname{id}_M)_p = \operatorname{id}_{T_pM}$.
   (§3 – act on $X$ and a germ $[g]$: $X([g]) = X([g])$.)

### The One-Line Reveal (for this page)

The entire page follows from one identification: *differentiating is an
algebraic operation*. Once derivations are recognized as the algebraic
shadow of directional differentiation (Theorem 1.3, powered by Hadamard's
lemma), they can be defined on any smooth manifold where no ambient arrow
exists, and every classical object (basis vectors, the Jacobian, the chain
rule, the inverse function theorem) re-emerges as a theorem about the
transport of that shadow along charts.

### Where to go next

- [The Core Course hub](/17-core-course/) – Level 3C (differential forms
  and the generalised Stokes theorem) is where the tangent and cotangent
  machinery starts paying rent. Under construction.
- [Level 3A: Smooth Manifolds](/17-core-course/3a-manifolds/) – the charts,
  smooth maps, and the Euclidean inverse function theorem used throughout
  this page.
- [An Introduction to Manifolds](https://link.springer.com/book/10.1007/978-1-4419-4000-6)
  – Loring Tu's Chapter 3, whose derivation-based treatment of the tangent
  space this page follows, with the germ bookkeeping made explicit.
