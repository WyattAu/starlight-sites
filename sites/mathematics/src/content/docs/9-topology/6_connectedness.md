---

date: 2026-07-23T21:57:32+01:00
title: "Connectedness"
tags:
  - University Maths
description: "Connectedness and path-connectedness, with the fundamental theorem for subsets of R proved in full, the topologist's sine curve dissected, products handled by the pencil lemma and the dense-slice argument, and the Cantor set analysed: compact, perfect, uncountable, and totally disconnected."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "9 Topology", "url": "https://mathematics.wyattau.com/9-topology"}, {"name": "6_connectedness", "url": "https://mathematics.wyattau.com/9-topology/6_connectedness"}]
}
</script>

### 6.1 Connected and Disconnected Spaces

**Definition.** A topological space $X$ is **disconnected** if there exist nonempty disjoint open
sets $U, V$ with $X = U \cup V$. Such a pair $\{U, V\}$ is called a **separation** of $X$.

$X$ is **connected** if it is not disconnected.

Equivalently, $X$ is connected if and only if the only clopen subsets of $X$ are $\emptyset$ and
$X$.

**Proof of the equivalence.** If $X = U \cup V$ is a separation, then $U = X \setminus V$ is both
open and closed, and neither $\emptyset$ nor $X$. Conversely, if $C \subseteq X$ is clopen with
$C \notin \{\emptyset, X\}$, then $U = C$ and $V = X \setminus C$ are nonempty disjoint open sets
with $U \cup V = X$; a separation. $\blacksquare$

Equivalently again, $X$ is connected if and only if every continuous map $h : X \to \{0, 1\}$ into
the two-point space *with the discrete topology* is constant: preimages of $\{0\}$ and $\{1\}$ are
clopen in $X$, so a non-constant $h$ is a nontrivial clopen set, and conversely. This formulation -
connectedness as the statement that there are no non-constant maps into the discrete two-point
space; is the one that makes the proofs below short.

**Example 6.1.** $[0, 1]$ is connected. $[0, 1) \cup (2, 3]$ is disconnected (with the subspace
topology from $\mathbb{R}$).

**Example 6.2.** $\mathbb{Q}$ with the subspace topology from $\mathbb{R}$ is totally disconnected:
the only connected subsets are singletons.

**Proof.** Let $A \subseteq \mathbb{Q}$ be connected. As a subset of $\mathbb{R}$ (same subspace
topology), $A$ is an interval by Theorem 6.1. If $A$ contained two points $a < b$, it would contain
every $c$ with $a < c < b$; including irrational $c$, contradicting $A \subseteq \mathbb{Q}$. So $A$
is a singleton. $\blacksquare$

### 6.2 Connected Subsets of $\mathbb{R}$

**Theorem 6.1.** A subset of $\mathbb{R}$ (with the standard topology) is connected if and only if
it is an interval.

(Here an **interval** is any set $I \subseteq \mathbb{R}$ with the property: if $a, b \in I$ and
$a < c < b$, then $c \in I$.)

**Proof.** *($\Leftarrow$) Intervals are connected.* Let $I$ be an interval and suppose
$I = U \cup V$ with $U, V$ nonempty, disjoint, and open in $I$. Pick $a \in U$ and $b \in V$;
swap the names if necessary so that $a < b$. Since $[a, b] \subseteq I$ (interval property), define

$$
c = \sup \{ x \in [a, b] : [a, x] \subseteq U \}.
$$

The set is nonempty: $U$ is open in $I$ and contains $a$, so $[a, a + \delta) \subseteq U$ for some
$\delta > 0$. Hence $a < c \leq b$, and $[a, c) \subseteq U$ by definition of the supremum. Since
$c \in [a, b] \subseteq I$, the point $c$ lies in $U$ or in $V$.

If $c \in U$: openness of $U$ in $I$ gives $\varepsilon > 0$ with
$(c - \varepsilon, c + \varepsilon) \cap I \subseteq U$. Then $[a, c + \varepsilon/2] \subseteq U$
(the segment $[a, c)$ from the supremum, the segment $(c - \varepsilon, c + \varepsilon/2]$ from
openness, both inside $I$), contradicting $c$ as an upper bound for the set.

So $c \in V$. Openness of $V$ in $I$ gives $\varepsilon > 0$ with
$(c - \varepsilon, c + \varepsilon) \cap I \subseteq V$. Choose $x$ with
$\max(a, c - \varepsilon) < x < c$; possible since $c > a$. Then $x \in [a, c) \subseteq U$ and
$x \in (c - \varepsilon, c) \subseteq V$, contradicting $U \cap V = \emptyset$.

*($\Rightarrow$) Connected sets are intervals.* Contrapositive: if $I$ is not an interval, there
are $a < c < b$ with $a, b \in I$ and $c \notin I$. Then

$$
U = I \cap (-\infty, c), \qquad V = I \cap (c, \infty)
$$

are open in $I$, nonempty ($a \in U$, $b \in V$), disjoint, and cover $I$ (as $c \notin I$). So $I$
is disconnected. $\blacksquare$

This theorem is why the intermediate value theorem exists and why $\mathbb{Q}$ is dust: connected
subsets of $\mathbb{Q}$, being connected subsets of $\mathbb{R}$, are intervals; but an interval
containing two distinct rationals contains the irrationals between them, which $\mathbb{Q}$ does
not. So the only connected subsets of $\mathbb{Q}$ are singletons (Example 6.2).

### 6.3 Path-Connectedness

**Definition.** A space $X$ is **path-connected** if for any two points $x, y \in X$, there exists a
continuous function $\gamma : [0, 1] \to X$ with $\gamma(0) = x$ and $\gamma(1) = y$.

**Proposition 6.1.** Every path-connected space is connected. The converse is false.

**Proof.** Let $X$ be path-connected and fix a point $x_0 \in X$. For each $x \in X$ choose a path
$\gamma_x : [0, 1] \to X$ from $x_0$ to $x$. Its image is connected (Proposition 6.4 below, applied
to the connected interval $[0, 1]$), and all the images contain $x_0$. So

$$
X = \bigcup_{x \in X} \gamma_x([0, 1])
$$

is a union of connected sets with a common point; connected by the pencil lemma (Proposition 6.1.1
below). $\blacksquare$

**Proposition 6.1.1 (Pencil lemma).** If $\{C_\alpha\}$ is a family of connected subsets of $X$
with $\bigcap_\alpha C_\alpha \neq \emptyset$, then $\bigcup_\alpha C_\alpha$ is connected.

**Proof.** Let $C = \bigcup_\alpha C_\alpha$ and pick $p \in \bigcap_\alpha C_\alpha$. Let
$h : C \to \{0, 1\}$ be continuous into the discrete two-point space. For each $\alpha$, the sets
$h^{-1}(0) \cap C_\alpha$ and $h^{-1}(1) \cap C_\alpha$ are disjoint clopen subsets of $C_\alpha$
covering it; connectedness of $C_\alpha$ forces one of them empty, so $h$ is constant on each
$C_\alpha$. The constants all agree; each equals $h(p)$. So $h$ is constant on $C$, and $C$ is
connected by the two-point characterisation. $\blacksquare$

**Example 6.3 (Topologist's sine curve).** Let

$$
S = \{(x, \sin(1/x)) : 0 < x \leq 1\} \cup \{(0, y) : -1 \leq y \leq 1\} \subseteq \mathbb{R}^2.
$$

$S$ is connected but not path-connected.

**Proof that $S$ is connected.** Write $A$ for the graph part and $V$ for the vertical segment.
The set $A$ is the image of the interval $(0, 1]$; connected by Theorem 6.1; under the continuous
map $x \mapsto (x, \sin(1/x))$, so $A$ is connected (Proposition 6.4). We claim
$\overline{A} = S$, after which Proposition 6.7 (closures of connected sets are connected) finishes
the proof.

$\overline{A} \subseteq S$: if $(x_n, \sin(1/x_n)) \to (x_0, y_0)$ with $x_n > 0$, then either
$x_0 > 0$; in which case continuity of $\sin(1/x)$ at $x_0$ forces
$y_0 = \sin(1/x_0)$, so the limit is in $A$; or $x_0 = 0$, in which case $|\sin(1/x_n)| \leq 1$
forces $y_0 \in [-1, 1]$, so the limit is in $V$.

$S \subseteq \overline{A}$: take $(0, y) \in V$ and any ball $B$ around it of radius
$\varepsilon$ and $x$-reach $\delta$. Since $1/t$ runs over a full period of $\sin$ as $t$ runs over
any interval $(0, \delta)$; choose $t$ with $1/t = \arcsin(y) + 2\pi k$ for a sufficiently large
integer $k$; there is $x \in (0, \delta)$ with $\sin(1/x)$ within $\varepsilon$ of $y$. So
$B \cap A \neq \emptyset$, and $(0, y) \in \overline{A}$.

**Proof that $S$ is not path-connected.** Suppose $\gamma : [0, 1] \to S$ is a continuous path with
$\gamma(0) \in V$ and $\gamma(1) \in A$; write $\pi_x, \pi_y$ for the coordinate projections, which
are continuous. The set

$$
C = \gamma^{-1}(V) = (\pi_x \circ \gamma)^{-1}(\{0\})
$$

is closed (as $V$ is closed and $\gamma$ continuous) and nonempty ($0 \in C$). Let
$b = \sup C \in C$; then $\gamma(b) \in V$, say $\gamma(b) = (0, y_b)$, while $\gamma(t) \in A$ for
all $t > b$.

Take $\delta = 1/3$ and consider the rectangle
$U = (-\eta, \eta) \times (y_b - \delta, y_b + \delta) \subseteq \mathbb{R}^2$, a neighbourhood of
$(0, y_b)$. By continuity of $\gamma$ there is $\eta' > 0$ with
$\gamma((b, b + \eta')) \subseteq U \cap S$. Now $\pi_x \circ \gamma$ is continuous, and the image
of the connected interval $(b, b + \eta')$ is a connected subset of $\mathbb{R}$; an interval, by
Theorem 6.1; containing positive values (points of $(b, b+\eta')$ map into $A$, whose
$x$-coordinates are positive) and with infimum $0$ (as $t \to b^+$, $\pi_x(\gamma(t)) \to \pi_x(\gamma(b)) = 0$).
Hence the image contains all of $(0, x_1]$ for some $x_1 > 0$. So for every $x^* \in (0, x_1]$ there
is $t^* \in (b, b + \eta')$ with $(\pi_x \circ \gamma)(t^*) = x^*$.

Choose $x^* \in (0, x_1)$ with $\sin(1/x^*) \notin (y_b - \delta, y_b + \delta)$; possible because
$1/x$ runs over a full period of $\sin$ on $(1/x_1, \infty)$, so $\sin$ attains values outside any
interval of length $2\delta = 2/3 < 2$. For the corresponding $t^*$:
$\gamma(t^*) = (x^*, \sin(1/x^*))$ has $\pi_y(\gamma(t^*)) \notin (y_b - \delta, y_b + \delta)$,
so $\gamma(t^*) \notin U$; contradicting $\gamma((b, b+\eta')) \subseteq U$. So no such path
exists, and $S$ is not path-connected. $\blacksquare$

The moral: connectedness passes to closures (Proposition 6.7), but path-connectedness does not -
no path can traverse the infinitely many oscillations and still be continuous at the vertical
segment.

**Example 6.4.** $\mathbb{R}^n$ is path-connected for all $n \geq 1$: any two points are joined by
the straight-line path $\gamma(t) = (1-t)p + tq$, continuous as each coordinate is polynomial in
$t$. The same paths work in any convex subset of $\mathbb{R}^n$.

### 6.4 Components

**Definition.** A **connected component** of $X$ is a maximal connected subset of $X$. The connected
components of $X$ form a partition of $X$.

**Proposition 6.2.** Connected components are closed. They need not be open; in a locally
connected space they are always open.

**Proof.** Let $C$ be a component of $X$; a maximal connected subset. By Proposition 6.7,
$\overline{C}$ is connected; it contains $C$, so maximality of $C$ forces $\overline{C} = C$. So
components are closed; in *every* topological space, no separation axioms required.

For openness: if $X$ is locally connected, let $x \in C$ and let $U$ be any open neighbourhood of
$x$. Local connectedness gives a connected open neighbourhood $V$ of $x$ with $V \subseteq U$. Now
$C \cup V$ is connected (pencil lemma: $C$ and $V$ share the point $x$) and contains $C$, so by
maximality $C \cup V \subseteq C$, i.e. $V \subseteq C$. Thus every neighbourhood $U$ of $x$
contains a neighbourhood $V$ of $x$ lying in $C$, which makes $C$ open. $\blacksquare$

Without local connectedness, components can fail to be open: the components of $\mathbb{Q}$ are
singletons (Example 6.2), and no singleton is open in $\mathbb{Q}$.

**Definition.** A **path component** of $X$ is a maximal path-connected subset. Path components also
partition $X$, and each path component is contained in a connected component.

### 6.5 Local Connectedness

**Definition.** $X$ is **locally connected** if for every $x \in X$ and every open neighbourhood $U$
of $x$, there exists a connected open neighbourhood $V$ of $x$ with $V \subseteq U$.

**Proposition 6.3.** Every open subset of $\mathbb{R}^n$ is locally connected.

**Proof.** Let $U \subseteq \mathbb{R}^n$ be open, $x \in U$, and let $N$ be any neighbourhood of
$x$ in $U$. Openness gives $\varepsilon > 0$ with $B(x, \varepsilon) \subseteq U$; shrinking along
the neighbourhood $N$, there is $\delta > 0$ with $B(x, \delta) \subseteq N \cap U$. The open ball
$B(x, \delta)$ is convex; the straight-line segment between two of its points stays inside it, by
the triangle inequality $|(1-t)p + tq - x| \leq (1-t)|p - x| + t|q - x| < \delta$; hence
path-connected (linear paths), hence connected. So $B(x, \delta)$ is the required connected open
neighbourhood of $x$ inside $N$. $\blacksquare$

**Example 6.5.** The topologist's sine curve is connected but not locally connected.

**Proof that $S$ is not locally connected.** Let $p = (0, y) \in V$ and consider the basic
neighbourhood $N = B(p, \varepsilon) \cap S$ with $\varepsilon < 1$. The set of $x$-coordinates of
graph points in the ball,

$$
E = \{ x \in (0, 1] : x^2 + (\sin(1/x) - y)^2 < \varepsilon^2 \},
$$

meets the condition periodically: as $x \to 0^+$, the value $1/x$ sweeps through infinitely many
full periods of $\sin$, so $E$ has infinitely many connected components accumulating at $0$. Choose
a boundary point $x_1 \in (0, 1)$ between two components of $E$, with $E$ on both sides: then no
point of $N$ has $x$-coordinate $x_1$ (graph points at $x_1$ sit on the boundary of the ball, and
vertical-segment points have $x = 0$). Hence

$$
N = \bigl(N \cap \{\pi_x < x_1\}\bigr) \cup \bigl(N \cap \{\pi_x > x_1\}\bigr)
$$

splits $N$ into two nonempty, disjoint, open subsets; the first contains $(0, y) \in V$, the second
contains the component of $E$ above $x_1$. So $N$ is disconnected. Since every neighbourhood of $p$
in $S$ contains such an $N$, no neighbourhood of $p$ is connected: $S$ is not locally connected at
any point of $V$. $\blacksquare$

### 6.6 Properties of Connected Spaces

**Proposition 6.4.** The continuous image of a connected space is connected. Therefore connectedness
is a topological invariant.

**Proof.** If $f : X \to Y$ is continuous and $X$ is connected, suppose $f(X) = U \cup V$ with
$U, V$ open and disjoint in $f(X)$. Then $f^{-1}(U)$ and $f^{-1}(V)$ are open, disjoint, and cover
$X$, contradicting connectedness. $\blacksquare$

**Proposition 6.5 (Intermediate Value Theorem).** If $f : X \to \mathbb{R}$ is continuous and $X$ is
connected, then $f$ attains every value between any two of its values. This generalises the classical
IVT from $\mathbb{R}$ to any connected space.

**Proof.** $f(X)$ is connected (Proposition 6.4) and is a subset of $\mathbb{R}$, so by Theorem 6.1
it is an interval. An interval containing two values contains every value between them. The
classical IVT is the case $X = [a, b]$, connected by Theorem 6.1. $\blacksquare$

**Proposition 6.6 (Products).** The product of connected spaces is connected (with the product
topology), for finite and even arbitrary index sets.

**Proof.** *Two factors.* Fix $(x_0, y_0) \in X \times Y$. For each $y \in Y$ consider

$$
T_y = (\{x_0\} \times Y) \cup (X \times \{y\}).
$$

The two pieces are homeomorphic to $Y$ and $X$ respectively, hence connected, and they share the
point $(x_0, y)$. By the pencil lemma, $T_y$ is connected. Every $T_y$ contains the common set
$\{x_0\} \times Y \ni (x_0, y_0)$, and $X \times Y = \bigcup_y T_y$ since $(x, y) \in X \times \{y\} \subseteq T_y$.
The pencil lemma once more: $X \times Y$ is connected.

*Arbitrary products.* Let $P = \prod_{i \in I} X_i$ with each $X_i$ connected, and fix
$a = (a_i) \in P$. Let $D$ be the set of points agreeing with $a$ in all but finitely many
coordinates, and for a finite $F \subseteq I$ let

$$
D_F = \{ x \in P : x_i = a_i \text{ for } i \notin F \} \cong \prod_{i \in F} X_i,
$$

which is connected by repeated application of the two-factor case. Each $D_F$ contains $a$, so
$D = \bigcup_F D_F$ is connected by the pencil lemma. And $D$ is dense in $P$: a basic open set
$\prod_i U_i$ (with $U_i = X_i$ for all $i$ outside some finite $F$) meets $D_F$; pick any point of
$\prod_{i \in F} U_i$ in the restricted coordinates and $a$ elsewhere. So
$D \subseteq P \subseteq \overline{D}$, and $P$ is connected by Proposition 6.7. $\blacksquare$

Note where the two factors are used: the pencil lemma welds the slices to a common spine, and the
closure argument promotes finite support to arbitrary support. Neither step needs any separation
axioms.

**Proposition 6.7 (Closure).** If $A \subseteq X$ is connected, then any set $B$ with
$A \subseteq B \subseteq \overline{A}$ is connected. In particular, the closure of a connected set is
connected.

**Proof.** Let $h : B \to \{0, 1\}$ be continuous into the discrete two-point space; by the
two-point characterisation it suffices to show $h$ is constant. The restriction $h|_A$ is constant
(say $0$), since $A$ is connected. The set $h^{-1}(0)$ is closed in $B$ (preimage of the closed -
indeed clopen; subset $\{0\}$ of the discrete space) and contains $A$, so it contains
$\overline{A} \cap B = B$: every point of $B$ is a limit point of $A$, and $h$ is $0$ on all of
$A$, so by continuity $h$ is $0$ on all of $B$. Hence $h$ is constant, and $B$ is connected. $\blacksquare$

### 6.7 Total Disconnectedness and the Cantor Set

**Definition.** A space is **totally disconnected** if its only connected subsets are singletons.
Examples include $\mathbb{Q}$ (with the subspace topology from $\mathbb{R}$) and the Cantor set $C$.

**Proposition 6.8.** The Cantor set $C$ is totally disconnected, compact, uncountable, and perfect
(every point is a limit point). It is homeomorphic to $\{0, 1\}^{\mathbb{N}}$ with the product
topology.

**Proof.** Write $C = \bigcap_{n=0}^{\infty} C_n$, where $C_0 = [0, 1]$ and $C_{n+1}$ deletes the
open middle third of each interval of $C_n$. Equivalently, $C$ is the set of reals in $[0, 1]$
admitting a base-3 (ternary) expansion using only the digits $0$ and $2$: surviving stage $n$ means
the first $n$ ternary digits can be chosen in $\{0, 2\}$, and the nested intersection is exactly
those $x$ with such an expansion (the ambiguous case, a trailing digit $1$, corresponds to an
endpoint that also has an all-$\{0,2\}$ expansion, e.g. $1/3 = 0.1_3 = 0.0222\ldots_3$).

*Compact.* Each $C_n$ is a finite union of closed intervals, hence closed, and $C$ is an
intersection of closed sets, hence closed and bounded in $\mathbb{R}$; compact by Heine--Borel.

*Perfect.* The endpoints of the deleted middle thirds belong to every $C_n$; an endpoint of a gap
at stage $n$ is an endpoint of a retained interval at every later stage; so they lie in $C$. Now
let $x \in C$ and $\varepsilon > 0$. Choose $n$ with $3^{-n} < \varepsilon$; then $x$ lies in some
stage-$n$ interval $J$ of length $3^{-n}$. The two endpoints of $J$ are in $C$, and at least one of
them differs from $x$, giving a point of $C$ within $\varepsilon$ of $x$. So every point of $C$ is
a limit point of $C$.

*Uncountable.* Define $\varphi : \{0, 1\}^{\mathbb{N}} \to C$ by
$\varphi((a_n)) = \sum_{n=1}^{\infty} 2 a_n 3^{-n}$. This is the ternary digit map, and it is a
bijection: *injective*, because if the sequences first differ at index $k$, then

$$
|\varphi(a) - \varphi(b)| \geq 2 \cdot 3^{-k} - \sum_{n > k} 2 \cdot 3^{-n} = 2 \cdot 3^{-k} - 3^{-k} = 3^{-k} > 0,
$$

so no two sequences map to the same point (the usual expansion ambiguity never arises for digits
restricted to $\{0, 2\}$); *surjective*, because every point of $C$ has a ternary expansion with
digits only $0$ and $2$, and that expansion is the required preimage. So
$|C| = |\{0, 1\}^{\mathbb{N}}| = |\mathcal{P}(\mathbb{N})|$, uncountable by Cantor's theorem.

*Homeomorphism.* The map $\varphi$ is continuous: if two sequences agree on the first $N$ digits,
their images differ by at most $\sum_{n > N} 2 \cdot 3^{-n} = 3^{-N}$, which is exactly convergence
in the product topology (a basic open set restricts finitely many coordinates). A continuous
bijection from the compact space $\{0,1\}^{\mathbb{N}}$ (a product of finite discrete spaces) to the
Hausdorff space $C \subseteq \mathbb{R}$ is a homeomorphism; the criterion proved in the compactness
page. So $C \cong \{0, 1\}^{\mathbb{N}}$.

*Total disconnectedness.* Let $A \subseteq C$ be connected. As a subset of $\mathbb{R}$, $A$ is an
interval (Theorem 6.1). But $C$ contains no interval of positive length: the total length of $C_n$
is $(2/3)^n$, which tends to $0$, while $A \subseteq C \subseteq C_n$ for every $n$. An interval of
positive length cannot fit inside sets of arbitrarily small total length, so $A$ is a single point. $\blacksquare$

The digit map is the structural insight: the Cantor set is *exactly* the countable product of
two-point spaces, with the middle-thirds construction supplying the embedding into $[0,1]$.

### 6.8 Worked Example: Proving Disconnectedness

**Problem.** Show that $\operatorname{GL}(2, \mathbb{R})$ (the set of $2 \times 2$ invertible real
matrices with the subspace topology from $\mathbb{R}^4$) is disconnected.

<details>
<summary>Solution</summary>

The determinant map $\det : \operatorname{GL}(2, \mathbb{R}) \to \mathbb{R}\setminus\{0\}$ is
continuous (it is a polynomial in the matrix entries). The image is $\mathbb{R}\setminus\{0\}$, which
is disconnected (separated by $0$). Since the continuous image of a connected space must be connected,
$\operatorname{GL}(2, \mathbb{R})$ cannot be connected.

In fact, $\operatorname{GL}(2, \mathbb{R})$ has exactly two connected components: matrices with
positive determinant and matrices with negative determinant.

$\blacksquare$

</details>

### 6.9 Worked Example: Path-Connectedness of $\mathbb{R}^n \setminus \{0\}$

**Problem.** For which $n$ is $\mathbb{R}^n \setminus \{0\}$ path-connected?

<details>
<summary>Solution</summary>

For $n \geq 2$, any two points $p, q \neq 0$ can be joined by a path avoiding the origin. For
example, if $p$ and $q$ are not antipodal, use the straight line segment; if they are antipodal
($q = -p$), take a path through a third point. Thus $\mathbb{R}^n \setminus \{0\}$ is path-connected
for $n \geq 2$.

For $n = 1$, $\mathbb{R} \setminus \{0\} = (-\infty, 0) \cup (0, \infty)$ is disconnected (and hence
not path-connected).

$\blacksquare$

</details>

### 6.10 Intuition: What Does Connectedness Mean?

Connectedness asks whether a space comes in separate pieces. A connected space cannot be split into two non-empty open sets that are disjoint, which means there is no "gap" that separates it. Intuitively, you can travel between any two points without leaving the space. The intermediate value theorem is the most familiar consequence: a continuous function on a connected domain must take every value between its endpoints.

Path-connectedness is a stronger and more intuitive version: a path-connected space has a continuous path between every pair of points. Every path-connected space is connected, but the converse fails for exotic spaces like the topologist's sine curve, which is connected but has no continuous path crossing the oscillating part. In $\mathbb{R}^n$, connected subsets are exactly the intervals and their higher-dimensional analogues. Connectedness is the topological tool for proving that certain configurations are impossible: if you can show a space is disconnected, you have proven that it splits into distinct parts that cannot be continuously deformed into each other.

### 6.11 Common Mistakes

**Mistake 1: Assuming that connected implies path-connected.**
Every path-connected space is connected, but the converse is false. The topologist's sine curve is a classic example of a connected space that is not path-connected. Do not assume that a space is path-connected just because it is connected.

**Mistake 2: Confusing connectedness with convexity.**
Convexity is a geometric property that implies path-connectedness (and hence connectedness) in $\mathbb{R}^n$, but connectedness does not imply convexity. For example, the unit circle $S^1$ is connected but not convex. A set can be connected without being convex.

**Mistake 3: Forgetting that the continuous image of a connected set is connected.**
If $f: X \to Y$ is continuous and $X$ is connected, then $f(X)$ is connected. This property is often used to prove that certain sets are connected, but it is not an "if and only if" statement. The preimage of a connected set under a continuous map need not be connected.

**Mistake 4: Assuming that a disconnected set can be written as a union of disjoint open sets in the ambient space.**
A set $A$ is disconnected if it can be written as $A = (U \cap A) \cup (V \cap A)$ where $U$ and $V$ are disjoint open sets in the ambient space. The sets $U$ and $V$ are open in the ambient space, not necessarily in $A$. Do not confuse the subspace topology with the ambient topology.

**Mistake 5: Confusing total disconnectedness with disconnectedness.**
A space is totally disconnected if its only connected subsets are singletons. A space can be disconnected without being totally disconnected. For example, $[0, 1] \cup [2, 3]$ is disconnected but not totally disconnected, since $[0, 1]$ and $[2, 3]$ are connected subsets.

## Cross-References

- **[Compactness](/9-topology/5_compactness/)**: Compactness and connectedness are both fundamental topological properties that characterize space structure.
- **[Topological Spaces](/9-topology/2_topological-spaces/)**: Topological spaces provide the framework for defining connectedness through separation properties.
- **[Continuity and Homeomorphisms](/9-topology/4_continuity-and-homeomorphisms/)**: Continuous functions preserve connectedness, and homeomorphisms preserve all topological invariants.

- [Quantum Mechanics](https://physics.wyattau.com/5-quantum-mechanics/)
- [Graph Theory](https://computer-science.wyattau.com/docs/graph-theory)
- [Classical Mechanics](https://physics.wyattau.com/1-classical-mechanics/)
- [Electromagnetism](https://physics.wyattau.com/3-electromagnetism/)
