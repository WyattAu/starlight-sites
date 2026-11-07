---
date: 2026-11-07T00:00:00+00:00
title: "Level 2: Topology – The Canvas"
description: "Point-set topology from the baseline: continuity, connectedness, and compactness proved from the open-set axioms, with the intermediate value and extreme value theorems derived as theorems about spaces rather than formulas about functions."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "17 Core Course", "url": "https://mathematics.wyattau.com/17-core-course"}, {"name": "Level 2: Topology", "url": "https://mathematics.wyattau.com/17-core-course/2a-topology"}]
}
</script>

**The Defect.** Continuity is first met as an $\varepsilon$–$\delta$ manipulation
on intervals of real numbers. The definition works, but it hides what
continuity actually *depends on*: not distances, but which sets count as
neighbourhoods. Topology isolates exactly that data. The reward is that the
two deepest facts of elementary analysis, the intermediate value theorem and
the extreme value theorem, stop being consequences of formulas and become
consequences of *space itself*: the interval is connected, and it is compact.

**The One-Line Reveal.** A topology is a declaration of which sets count as
"neighbourhoods"; a continuous map is one whose declared neighbourhoods pull
back to declared neighbourhoods; and every theorem of this level follows from
two properties a space may have: connectedness (it cannot be split) and
compactness (every cover admits a finite sublist).

**Scope.** Level 1 supplied the language (categories, universal properties,
quotients by relations). This level needs exactly two inputs from analysis,
both stated explicitly and proved in the [Real Analysis
track](/3-real-analysis/):

1. **The completeness axiom**: every nonempty set of real numbers bounded
   above has a least upper bound $\sup S$, characterised by (i) $s \leq \sup
   S$ for all $s \in S$, and (ii) if $c < \sup S$, then some $s \in S$ has
   $c < s$.
2. **Elementary-calculus continuity**: the standard functions ($\sin$, $\cos$,
   $\tan$, $\arctan$) are continuous on their domains, and their
   bijection properties are as trigonometry describes. Where these enter, the
   entry is flagged.

Everything else is proved here.

## 1. Metric Spaces and the Idea of a Topology

**Definition.** A **metric** on a set $X$ is a function $d: X \times X \to
[0, \infty)$ with $d(x, y) = 0$ iff $x = y$, $d(x, y) = d(y, x)$, and the
**triangle inequality** $d(x, z) \leq d(x, y) + d(y, z)$. The pair $(X, d)$
is a **metric space**. The **open ball** of radius $r > 0$ around $x$ is
$B(x, r) = \{y \in X : d(x, y) < r\}$. Euclidean space $\mathbb{R}^n$ carries
$d(u, v) = \sqrt{\sum_i (u_i - v_i)^2}$; the triangle inequality for this $d$
is proved in the Real Analysis track and used freely here.

**Definition.** A subset $U \subseteq X$ of a metric space is **open** if for
every $x \in U$ there is $r > 0$ with $B(x, r) \subseteq U$.

**Proposition 1.1.** Every open ball is an open set.

**Proof.** Let $y \in B(x, r)$, so $d(x, y) < r$. Put $\varepsilon = r -
d(x, y) > 0$. For any $z \in B(y, \varepsilon)$, the triangle inequality
gives $d(x, z) \leq d(x, y) + d(y, z) < d(x, y) + \varepsilon = r$, so
$z \in B(x, r)$. Hence $B(y, \varepsilon) \subseteq B(x, r)$: every point of
the ball has a ball around it inside the ball. $\blacksquare$

**Proposition 1.2.** Arbitrary unions of open sets are open, and finite
intersections of open sets are open. Both can fail for infinite
intersections.

**Proof.** *Unions.* Let $U = \bigcup_\alpha U_\alpha$ with each $U_\alpha$
open, and let $x \in U$. Then $x \in U_\alpha$ for some $\alpha$, and some
ball $B(x, r) \subseteq U_\alpha \subseteq U$: so $U$ is open.
*Finite intersections.* Let $x \in U_1 \cap \cdots \cap U_n$; for each $i$
there is $r_i > 0$ with $B(x, r_i) \subseteq U_i$, and
$B(x, \min_i r_i)$ is contained in every $U_i$, hence in the intersection.
*Failure for infinite intersections:* $\bigcap_{n \geq 1} (-1/n, 1/n) =
\{0\}$ in $\mathbb{R}$ (a real number in every $(-1/n, 1/n)$ satisfies
$|t| < 1/n$ for all $n$, forcing $t = 0$ by the Archimedean property,
Lemma 6.0 below), and $\{0\}$ is not open: no ball around $0$ fits inside a
single point. $\blacksquare$

The two properties just proved are the ones the theorems of analysis
actually consume. We promote them to a definition.

**Lemma 1.3 (generated topologies).** For any set $X$ and any collection
$\mathcal{S}$ of subsets of $X$, there is a smallest topology containing
$\mathcal{S}$: the intersection of all topologies on $X$ that contain
$\mathcal{S}$.

**Proof.** An intersection of topologies is a topology (each axiom is an
"every member has..." or "any union/finite intersection of members is a
member" statement, checked member-wise over the intersection). The
intersection is over a nonempty family: the power set of $X$, containing
$\mathcal{S}$, is itself a topology. Being the intersection of all
containing topologies, it is contained in each of them, hence smallest.
$\blacksquare$

**Definition.** A **topology** on a set $X$ is a collection $\mathcal{T}$ of
subsets (the **open sets**) with $\emptyset, X \in \mathcal{T}$, closed under
arbitrary unions and finite intersections. A **topological space** is a set
with a topology. A metric space yields a topology by taking as open sets all
unions of open balls (Definition above, justified by Propositions 1.1 and
1.2).

**Examples.**

- **Metric topologies**: $\mathbb{R}$, $\mathbb{R}^n$ as above.
- **Discrete**: every subset open. Axioms are immediate.
- **Indiscrete**: only $\emptyset$ and $X$ open. Immediate.
- **Cofinite**: a subset is open if it is empty or its complement is finite.
  Unions: the complement of a union is an intersection of complements; a
  finite intersection of finite sets is finite, so every union of cofinite
  sets is cofinite. Finite intersections: the complement of a finite
  intersection is a finite union of finite complements, finite. $\blacksquare$

## 2. Continuity and Homeomorphism

**Definition.** For a function $f: X \to Y$ and a subset $B \subseteq Y$, the
**preimage** is $f^{-1}(B) = \{x \in X : f(x) \in B\}$ (no inverse function
is required; $f^{-1}$ here is set-valued bookkeeping). The function $f$
between topological spaces is **continuous** if $f^{-1}(U)$ is open in $X$
for every open $U \subseteq Y$.

**Theorem 2.1 (composition).** If $f: X \to Y$ and $g: Y \to Z$ are
continuous, then $g \circ f: X \to Z$ is continuous.

**Proof.** For $U \subseteq Z$ open, $(g \circ f)^{-1}(U) = f^{-1}(g^{-1}(U))$
(set-chase an element: $x$ maps into $U$ iff $f(x)$ maps into $U$).
$g^{-1}(U)$ is open in $Y$ by continuity of $g$, and its preimage under $f$
is open in $X$ by continuity of $f$. $\blacksquare$

**Theorem 2.2 ($\varepsilon$–$\delta$ is topology).** For $f: X \to Y$
between metric spaces, the following are equivalent: (i) $f$ is continuous
by the open-preimage definition; (ii) for every $x \in X$ and $\varepsilon >
0$ there is $\delta > 0$ with $d(x, x') < \delta \implies d(f(x), f(x')) <
\varepsilon$.

**Proof.** (i) $\implies$ (ii): the ball $B(f(x), \varepsilon)$ is open
(Proposition 1.1), so $f^{-1}(B(f(x), \varepsilon))$ is an open set
containing $x$; being open, it contains some ball $B(x, \delta)$, and points
of that ball map into $B(f(x), \varepsilon)$, which is (ii).
(ii) $\implies$ (i): let $U \subseteq Y$ open and $x \in f^{-1}(U)$. Then
$f(x) \in U$, and openness of $U$ gives an $\varepsilon$-ball around
$f(x)$ inside $U$. Item (ii) supplies a $\delta$-ball around $x$ mapping into
it, so $B(x, \delta) \subseteq f^{-1}(U)$. Every point of $f^{-1}(U)$ has a
ball inside $f^{-1}(U)$: it is open. $\blacksquare$

**Definition.** A **homeomorphism** is a continuous bijection $f: X \to Y$
whose inverse $f^{-1}: Y \to X$ is also continuous. Spaces related by a
homeomorphism are **homeomorphic**; a property preserved by homeomorphisms
is a **topological invariant**.

**Example (affine homeomorphisms).** Any two nonempty open intervals $(a,b)$,
$(c,d)$ of $\mathbb{R}$ are homeomorphic. The affine map $f(t) = \frac{d-c}{b-a}
(t - a) + c$ is a bijection $(a, b) \to (c, d)$ (solve for $t$), and it is
continuous with continuous inverse: the preimage of an interval $(u, v)$
under an affine map is an interval (reversed if the slope is negative, still
open), and general open sets are unions of intervals whose preimages are
unions of intervals. $\blacksquare$

**Example ($(0,1) \cong \mathbb{R}$).** The map $t \mapsto
\tan\!\big(\pi(t - \tfrac{1}{2})\big)$ is a continuous bijection $(0, 1) \to
\mathbb{R}$ with continuous inverse $s \mapsto \tfrac{1}{\pi}\arctan(s) +
\tfrac{1}{2}$. Continuity of $\tan$ and $\arctan$ on their domains and the
bijection property are the elementary-calculus inputs from the Scope. So the
whole real line is, topologically, a finite interval. $\blacksquare$

## 3. Closed Sets, Interior, Closure

**Definition.** A subset $F \subseteq X$ is **closed** if its complement
$X \setminus F$ is open. The **interior** $A^{\circ}$ of $A$ is the union of
all open sets contained in $A$; the **closure** $\overline{A}$ is the
intersection of all closed sets containing $A$. A **neighbourhood** of $x$
is an open set containing $x$.

**Proposition 3.1.** Arbitrary intersections of closed sets are closed, and
finite unions of closed sets are closed; $\overline{A}$ is the smallest
closed set containing $A$, and $A^{\circ}$ is the largest open set contained
in $A$.

**Proof.** By De Morgan's laws, complements convert intersections of closed
sets into unions of open sets and finite unions into finite intersections, so
Proposition 1.2's axioms convert directly. The closure of $A$ is a closed
set containing $A$ (every set in the intersection contains $A$), and any
closed $F \supseteq A$ participates in that intersection, so $\overline{A}
\subseteq F$. Interior is dual. $\blacksquare$

**Proposition 3.2 (closure via neighbourhoods).** $x \in \overline{A}$ if and
only if every neighbourhood of $x$ meets $A$.

**Proof.** ($\implies$) If some neighbourhood $N$ of $x$ missed $A$, then $A
\subseteq X \setminus N$, and $X \setminus N$ is closed; so $\overline{A}
\subseteq X \setminus N$, excluding $x \in N$: contradiction.
($\Longleftarrow$) If $x \notin \overline{A}$, then $N := X \setminus
\overline{A}$ is an open neighbourhood of $x$ (Proposition 3.1, $\overline{A}$
closed) disjoint from $A \subseteq \overline{A}$. $\blacksquare$

**Example.** $\overline{(0, 1)} = [0, 1]$ in $\mathbb{R}$. Every point of
$[0, 1]$: a neighbourhood of $0$ contains $(-\varepsilon, \varepsilon)$ for
some $\varepsilon > 0$, which meets $(0, 1)$ in $(0, \min(\varepsilon, 1))$;
similarly at $1$ and inside; Proposition 3.2 puts all of $[0,1]$ in the
closure. Every point $x \notin [0, 1]$ has a ball around it (of radius the
distance to $[0,1]$, positive because $x$ lies outside the closed interval
$[0,1]$) disjoint from $(0,1)$. $\blacksquare$

**Definition.** $x$ is a **limit point** of $A$ if every neighbourhood of $x$
meets $A$ in some point *other than $x$ itself*; points of $A$ that are not
limit points of $A$ are **isolated**.

## 4. Subspaces and Products

**Definition (subspace).** For $A \subseteq X$, the **subspace topology** on
$A$ has open sets exactly the intersections $A \cap U$ with $U$ open in $X$
(axioms: check each against the corresponding axiom in $X$).

**Proposition 4.1 (characteristic property of the subspace).** A map $g: Y
\to A$ is continuous into $A$ if and only if the composite $Y \to A
\hookrightarrow X$ is continuous into $X$.

**Proof.** ($\implies$) For $U$ open in $X$, the preimage of $A \cap U$ under
$g$ is open in $Y$ (subspace definition, $A \cap U$ is open in $A$), and that
same set is the preimage of $U$ under the composite. ($\Longleftarrow$) For
$V$ open in $A$, write $V = A \cap U$ with $U$ open in $X$; then
$g^{-1}(V) = g^{-1}(U)$, open by the composite's continuity.
$\blacksquare$

**Definition (product).** For spaces $X, Z$, a **box** is a subset
$U \times V$ with $U$ open in $X$ and $V$ open in $Z$. Boxes are closed
under finite intersections ($(U \times V) \cap (U' \times V') = (U \cap U')
\times (V \cap V')$), so the unions of boxes form a topology (unions of
unions are unions), and it is the smallest topology in which every box is
open: that is the **product topology** on $X \times Z$.

**Proposition 4.2 (characteristic property of the product).** The projections
$\pi_X: X \times Z \to X$, $\pi_Z$ are continuous, and a map $f = (f_1, f_2):
Y \to X \times Z$ is continuous if and only if both components $f_1 = \pi_X
\circ f$ and $f_2 = \pi_Z \circ f$ are continuous.

**Proof.** $\pi_X^{-1}(U) = U \times Z$ is a box, so $\pi_X$ is continuous;
similarly $\pi_Z$. ($\implies$) $f_1$ and $f_2$ are compositions of
continuous maps (Theorem 2.1). ($\Longleftarrow$) Let $W \subseteq X \times
Z$ be open; by definition $W = \bigcup_\alpha (U_\alpha \times V_\alpha)$,
and

$$
f^{-1}(W) = \bigcup_\alpha f^{-1}(U_\alpha \times V_\alpha) = \bigcup_\alpha
\big(f_1^{-1}(U_\alpha) \cap f_2^{-1}(V_\alpha)\big),
$$

a union of finite intersections of open sets: open. $\blacksquare$

This is a universal property in the sense of [Level
1A](/17-core-course/1a-categories/): a map *into* a product is exactly a
pair of maps into the factors, with continuity requiring nothing extra. The
product is the categorical product in $\mathbf{Top}$.

## 5. Hausdorff Spaces

**Definition.** A space $X$ is **Hausdorff** if for any two distinct points
$x \neq y$ there are disjoint open sets $U \ni x$ and $V \ni y$.

**Proposition 5.1.** Every metric space is Hausdorff, and in a Hausdorff
space every singleton $\{x\}$ is closed and limits of sequences are unique.

**Proof.** *Hausdorff:* for $x \neq y$ put $r = d(x, y) / 2 > 0$. If $z$ lay
in $B(x, r) \cap B(y, r)$, the triangle inequality would give
$d(x, y) \leq d(x, z) + d(z, y) < r + r = d(x, y)$, a contradiction; so the
balls are disjoint. *Singletons closed:* for $y \neq x$, the Hausdorff pair
$(U_y, V_y)$ for $(y, x)$ has $x \notin U_y$, so $X \setminus \{x\} =
\bigcup_{y \neq x} U_y$ is open. *Limits:* say $x_n \to x$ when every
neighbourhood of $x$ contains all but finitely many $x_n$. If $x_n \to x$
and $x_n \to y$ with $x \neq y$, the disjoint neighbourhoods $U \ni x$,
$V \ni y$ each contain a tail; but two tails of one sequence overlap, and the
overlap lies in $U \cap V = \emptyset$: contradiction. $\blacksquare$

## 6. Connectedness

**Definition.** A **separation** of a space $X$ is a pair of disjoint
nonempty open sets $A, B \subseteq X$ with $A \cup B = X$. $X$ is
**connected** if no separation exists; otherwise **disconnected**.

**Lemma 6.0 (Archimedean property).** For every real number $c$ there is a
natural number $n > c$.

**Proof.** If $\mathbb{N}$ had an upper bound $b$, the completeness axiom
would give $s = \sup \mathbb{N}$; by property (ii), some $n \in \mathbb{N}$
has $n > s - 1$, and then $n + 1 \in \mathbb{N}$ exceeds $s$, contradicting
that $s$ is an upper bound. $\blacksquare$

**Theorem 6.1 (the interval is connected).** Every closed bounded interval
$[a, b]$ is connected (a one-point interval is trivially so; assume $a < b$).

**Proof.** Suppose $[a, b] = A \cup B$, a separation, and swap the names so
$a \in A$. Write $A = [a,b] \cap A'$ with $A'$ open in $\mathbb{R}$; then
$[a, a + \varepsilon') \subseteq A$ for some $\varepsilon' > 0$, so the set

$$
C = \{t \in [a, b] : [a, t] \subseteq A\}
$$

contains points greater than $a$. $C$ is bounded above by $b$; let $s = \sup
C$ (completeness axiom), so $a < s \leq b$. First, every point $t < s$ lies
in $A$: the sup property (ii) gives $u \in C$ with $t < u$, and $[a, t]
\subseteq [a, u] \subseteq A$. Now if $s \in B$, openness of $B$ gives
$(s - \varepsilon, s] \subseteq B$ for some $\varepsilon > 0$; but the point
$s - \varepsilon/2 < s$ lies in $A$ by the previous paragraph, contradicting
disjointness. So $s \in A$. Openness of $A$ gives $(s - \varepsilon, s +
\varepsilon) \cap [a, b] \subseteq A$ for some $\varepsilon > 0$. If $s <
b$, take $\varepsilon' = \min(\varepsilon/2, (b - s)/2) > 0$: then $[a, s +
\varepsilon'] \subseteq A$, so $s + \varepsilon' \in C$, contradicting $s =
\sup C$. Hence $s = b$, and the first paragraph with the present paragraph
gives $[a, b] \subseteq A$, so $B = \emptyset$: no separation exists.
$\blacksquare$

**Theorem 6.2 (images of connected sets).** If $f: X \to Y$ is continuous and
$X$ is connected, then $f(X)$ is connected in its subspace topology.

**Proof.** Suppose $f(X) = A \cup B$ is a separation (both open in
$f(X)$, disjoint, nonempty). Write $A = f(X) \cap A'$ with $A'$ open in $Y$.
Then $f^{-1}(A) = f^{-1}(A')$ is open in $X$, and likewise $f^{-1}(B)$; they
are disjoint (disjointness of $A$ and $B$), nonempty (surjectivity onto
$f(X)$), and their union is $X$: a separation of the connected $X$.
$\blacksquare$

**Corollary 6.3 (every interval is connected).** Open, half-open, bounded or
unbounded intervals of $\mathbb{R}$ are connected.

**Proof.** Given a separation $(A, B)$ of an interval $I$, pick $a \in A$,
$b \in B$, swap so $a < b$; then $[a, b] \subseteq I$, and $A \cap [a,b]$,
$B \cap [a,b]$ are disjoint nonempty open (in $[a,b]$) sets covering
$[a,b]$, contradicting Theorem 6.1. $\blacksquare$

**Corollary 6.4 (intermediate value theorem).** If $f: [a, b] \to
\mathbb{R}$ is continuous and $c$ lies strictly between $f(a)$ and $f(b)$,
then $f(x) = c$ for some $x \in [a, b]$.

**Proof.** Suppose not. Then $A = f^{-1}((-\infty, c))$ and $B =
f^{-1}((c, \infty))$ are open (Theorem 2.2 renders continuity as
open-preimages, and half-lines are open in $\mathbb{R}$), disjoint, and cover
$[a, b]$ (no point maps to $c$); they are nonempty because $f(a) < c <
f(b)$ places $a$ in $A$ and $b$ in $B$ up to swapping. That is a separation
of the connected interval $[a, b]$: contradiction. $\blacksquare$

**Lemma 6.5 ($\sqrt{2}$ is irrational).**

**Proof.** Suppose $\sqrt{2} = p/q$ in lowest terms. Squaring: $p^2 = 2q^2$,
so $p^2$ is even, hence $p$ is even (odd $p$ makes $p^2$ odd); write $p = 2r$.
Then $2r^2 = q^2$, so $q$ is even too. Both even contradicts lowest terms.
$\blacksquare$

**Proposition 6.6 ($\mathbb{Q}$ is disconnected).** The rationals with the
subspace topology of $\mathbb{R}$ are disconnected.

**Proof.** Let $\alpha = \sqrt{2}$, which is not rational (Lemma 6.5) and
satisfies $1 < \alpha < 2$. The sets $A = \mathbb{Q} \cap (-\infty, \alpha)$
and $B = \mathbb{Q} \cap (\alpha, \infty)$ are open in the subspace
$\mathbb{Q}$; they are nonempty ($0 \in A$, $1 \in B$), disjoint, and their
union is $\mathbb{Q}$ (no rational equals $\alpha$). $\blacksquare$

This is the first crack in the arithmetic line: connectedness is a property
of *completed* space. It distinguishes $\mathbb{R}$ from $\mathbb{Q}$
topologically, before any measure or limit theory.

## 7. Compactness

**Definition.** An **open cover** of $X$ is a collection of open sets with
$X \subseteq \bigcup_\alpha U_\alpha$. A **finite subcover** is a finite
subcollection that still covers. $X$ is **compact** if every open cover has a
finite subcover.

**Theorem 7.1 (Heine–Borel for the interval).** $[a, b]$ is compact.

**Proof.** Let $\mathcal{U}$ be an open cover of $[a, b]$. Say $t \in [a,b]$
is *good* if $[a, t]$ admits a finite subcover from $\mathcal{U}$, and let
$C$ be the set of good points. $C$ contains $a$ (a member of $\mathcal{U}$
covers $a$, and $\{U\}$ covers $[a, a]$), and is bounded above by $b$; let
$s = \sup C$ (completeness axiom), so $a \leq s \leq b$.

First, $s \in C$. Choose $U \in \mathcal{U}$ with $s \in U$; openness gives
$(s - \varepsilon, s + \varepsilon) \subseteq U$ for some $\varepsilon > 0$.
Since $s - \varepsilon/2 < s = \sup C$, the sup property supplies
$t \in C$ with $t > s - \varepsilon/2$; the finite cover of $[a, t]$, plus
the single set $U$, covers $[a, t] \cup (s - \varepsilon, s + \varepsilon)
\supseteq [a, s]$. So $s$ is good.

Now if $s < b$, shrink $\varepsilon$ so that $s + \varepsilon/2 \leq b$; the
same finite cover plus $U$ covers $[a, s] \cup (s - \varepsilon, s +
\varepsilon) \supseteq [a, s + \varepsilon/2]$, making the point $s +
\varepsilon/2$ good, contradicting $s = \sup C$. Hence $s = b \in C$: the
finite subcover covers $[a, b]$. $\blacksquare$

**Theorem 7.2 (constructions).** (i) A closed subset of a compact space is
compact. (ii) A continuous image of a compact space is compact. (iii) A
compact subset of a Hausdorff space is closed. (iv) A compact subset of
$\mathbb{R}$ is closed and bounded, and conversely every closed bounded
subset of $\mathbb{R}$ is compact.

**Proof.** (i) Let $K \subseteq X$ be closed, $X$ compact, and $\mathcal{V}$
an open cover of $K$ by opens of $X$. Then $\mathcal{V} \cup \{X \setminus
K\}$ covers $X$ ($X \setminus K$ is open); a finite subcover of $X$ minus
the member $X \setminus K$ is a finite subcover of $K$.

(ii) Let $f: X \to Y$ be continuous, $X$ compact, and $\mathcal{V}$ an open
cover of $f(X)$ by opens of $Y$. The preimages $f^{-1}(V)$ cover $X$ and are
open (continuity); a finite subcover $f^{-1}(V_1), \dots, f^{-1}(V_n)$ makes
$V_1, \dots, V_n$ cover $f(X)$ (surjectivity onto the image).

(iii) Let $K \subseteq X$ be compact, $X$ Hausdorff, $y \notin K$. For each
$x \in K$, the Hausdorff property supplies disjoint open $U_x \ni y$ and
$V_x \ni x$. The sets $\{V_x\}_{x \in K}$ cover $K$; compactness gives a
finite sublist $V_{x_1}, \dots, V_{x_n}$. Then $U = U_{x_1} \cap \cdots \cap
U_{x_n}$ is an open neighbourhood of $y$ disjoint from every $V_{x_i}$, hence
from their union, which contains $K$. So every $y \notin K$ has a
neighbourhood avoiding $K$: the complement of $K$ is open.

(iv) If $K \subseteq \mathbb{R}$ is compact, the cover $\{(-n, n)\}_{n \in
\mathbb{N}}$ has a finite subcover, exhibiting a bound; closedness is (iii)
with $\mathbb{R}$ Hausdorff (Proposition 5.1). Conversely, if $K$ is closed
and bounded, then $K \subseteq [-R, R]$ for some $R > 0$, which is compact
by Theorem 7.1 (an affine homeomorphism carries $[a,b]$ to $[-1, 1]$ and
homeomorphisms preserve compactness: (ii) applied to the homeomorphism and
its inverse), and (i) makes $K$ compact. $\blacksquare$

**Corollary 7.3 (extreme value theorem).** A continuous $f: [a, b] \to
\mathbb{R}$ attains a maximum and a minimum value.

**Proof.** The image $f([a, b])$ is compact (Theorem 7.2 ii, Theorem 7.1),
hence closed and bounded in $\mathbb{R}$ (Theorem 7.2 iv). Let $M = \sup
f([a,b])$, which exists by boundedness. If $M$ were not attained, the
complement of the image would be an open set containing $M$, so an
$\varepsilon$-ball around $M$ would miss the image; but the sup property
(ii) gives a value $v > M - \varepsilon/2$ with $v \leq M < M +
\varepsilon/2$, placing a point of the image inside that ball:
contradiction. So $f(x) = M$ for some $x$. For the minimum, apply the same
argument to $-f$, which is continuous (the preimage of an open interval
$(u, v)$ under $y \mapsto -y$ is the open interval $(-v, -u)$).
$\blacksquare$

**Example (a continuous bijection need not be a homeomorphism).** Let
$S^1 = \{(u, v) \in \mathbb{R}^2 : u^2 + v^2 = 1\}$ with its subspace
topology, and let $w: [0, 2\pi) \to S^1$, $w(t) = (\cos t, \sin t)$. Then
$w$ is a continuous bijection that is not a homeomorphism. This example is
the reason the definition of homeomorphism insists on the inverse.

*Proof.* Continuity: $\cos$ and $\sin$ are continuous (elementary-calculus
input from the Scope), so $w$ is continuous as a map into
$\mathbb{R} \times \mathbb{R}$ (Proposition 4.2, reading $S^1 \subseteq
\mathbb{R} \times \mathbb{R}$), and into $S^1$ by the characteristic property
of the subspace (Proposition 4.1). Bijectivity: surjective by trigonometry
(every point of the circle is reached at some angle in $[0, 2\pi)$), and
injective because angles in $[0, 2\pi)$ with equal cosine *and* equal sine
are equal (again trigonometry). Not a homeomorphism: the full map
$W: [0, 2\pi] \to S^1$ on the closed interval is continuous and surjective,
so $S^1$ is compact (Theorems 7.1 and 7.2 ii). If the inverse of $w$ were
continuous, then $[0, 2\pi)$ would be the continuous image of the compact
$S^1$, hence compact (Theorem 7.2 ii). But $[0, 2\pi)$ is not compact: the
cover $\{(-1, 2\pi - 1/n) \cap [0, 2\pi)\}_{n \in \mathbb{N}}$ (each member
open in the subspace) has no finite subcover, since a finite subcollection's
largest member is $(-1, 2\pi - 1/N)$, and the point $2\pi - 1/(2N)$ lies in
$[0, 2\pi)$ above $2\pi - 1/N$ (the Archimedean property, Lemma 6.0, applied
to the positive number $1/(2\pi - t)$ when checking that the cover covers).
So no such homeomorphism exists. $\blacksquare$

**Invariants.** Theorems 6.2 and 7.2(ii) say connectedness and compactness
pass along continuous surjections; applying this to a homeomorphism in both
directions, both properties are topological invariants. Connectedness
separates $\mathbb{R}$ from $\mathbb{Q}$ (Proposition 6.6); compactness
separates $[0, 2\pi]$ from $[0, 2\pi)$.

## 8. Self-test

1. Prove that $\mathbb{R}$ with the cofinite topology is connected. (§1, §6
   – two disjoint nonempty cofinite sets would have complements whose union
   is all of $\mathbb{R}$, making $\mathbb{R}$ finite.)
2. Give an infinite family of open subsets of $\mathbb{R}$ whose
   intersection is not open, and prove your claim. (§1 –
   $\bigcap_n (-1/n, 1/n) = \{0\}$, using the Archimedean property.)
3. Prove the $(ii) \implies (i)$ direction of Theorem 2.2 without looking.
   (§2 – the $\delta$-ball provided at each point of $f^{-1}(U)$ shows it is
   open.)
4. Prove that the product of two discrete spaces is discrete. (§4 –
   singletons $\{x\} \times \{z\}$ are boxes, and every subset is a union of
   singletons.)
5. Prove that $\mathbb{R}$ is not compact. (§7 – the cover $\{(-n, n)\}$ has
   no finite subcover: a finite subcollection has a largest $N$, and the
   point $N + 1$ escapes.)
6. Prove that $\{1/n : n \in \mathbb{N}\} \cup \{0\}$ is compact. (§7 –
   prove it is closed (for $y > 0$ off the set, only finitely many $1/n$
   exceed $y/2$, by the Archimedean property, so the nearest one gives a
   separating ball) and bounded, then quote the converse in Theorem
   7.2(iv).)
7. Prove that $S^1$ is connected. (§6, §7 – it is the continuous image of
   the connected interval $[0, 2\pi]$ under the wrap map $W$, by Theorems
   6.2 and 7.1.)

### The One-Line Reveal (for this page)

The entire page follows from one shift: *neighbourhood structure, not
distance, is what continuity and the great theorems use.* Once "open" is
axiomatised, the intermediate value theorem is what connectedness of the
interval says, the extreme value theorem is what compactness of the interval
says, and the wrap map shows precisely why the inverse in a homeomorphism is
part of the definition.

### Where to go next

- [The Core Course hub](/17-core-course/) – Level 3 (manifolds, after Loring
  Tu) linearises everything on this page: tangent spaces make the canvas
  locally linear, and differential forms rebuild integration on it. Under
  construction.
- [Real Analysis](/3-real-analysis/) – where the two declared inputs of this
  page (the completeness axiom and the continuity of the elementary
  functions) are actually proved.
- [Topology: A Categorical Approach](https://topology.mitpress.mit.edu/) –
  Bradley, Bryson and Terilla's book, free and open access from MIT Press;
  its Chapter 2 covers this page's material with the categorical accent that
  Level 1A supplied.
