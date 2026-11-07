---
date: 2026-11-07T00:00:00+00:00
title: "Level 3D: Orientation, Integration, and Stokes"
description: "Manifolds with boundary, orientation with the outward-first boundary convention proved well defined, integration of forms via oriented charts and partitions of unity, the local Stokes theorem proved by Fubini and the fundamental theorem of calculus, and the generalised Stokes theorem with the classical Green, divergence, and Stokes theorems as corollaries."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "17 Core Course", "url": "https://mathematics.wyattau.com/17-core-course"}, {"name": "Level 3D: Integration and Stokes", "url": "https://mathematics.wyattau.com/17-core-course/3d-stokes"}]
}
</script>

**The Defect.** The integral theorems of multivariable calculus arrive as
three or four unrelated memorised identities: the fundamental theorem of
line integrals, Green's theorem, the divergence theorem, and the classical
Stokes theorem, each with its own notation for the same boundary-versus-
interior bookkeeping. They are one theorem. The language that reveals this
is [Level 3C](/17-core-course/3c-forms/)'s exterior derivative plus the
integration theory built here, and the proof of the unification is, at
bottom, the one-variable fundamental theorem of calculus applied $n$ times.

**The One-Line Reveal.** Integrating an $n$-form over an oriented region
means integrating its coefficient function in an oriented chart; $d$ is the
unique operator for which the fundamental theorem of calculus survives the
change of viewpoint; Stokes says the two copies of that theorem, one inside
and one on the boundary, are the same statement in every coordinate system
at once.

**Scope.** From [Level 3C](/17-core-course/3c-forms/): the exterior
derivative, $d^2 = 0$, graded Leibniz, and pullback commutation (Theorem
3.1). From [Level 1B](/17-core-course/1b-linear-algebra/): determinants and
their signs. Three inputs from analysis are declared, all standard and
pointed at the [Real Analysis track](/3-real-analysis/) and any
multivariable analysis text: **Fubini's theorem** (multiple integrals
compute as iterated integrals), the **change-of-variables formula**
(replacement of variables in a multiple integral contributes the absolute
value of the Jacobian determinant), and the **existence of smooth partitions
of unity** on second-countable smooth manifolds subordinate to any open
cover (a countable family $\{\rho_i\}$ of smooth functions, $0 \leq \rho_i
\leq 1$, each with support inside one member of the cover, locally finitely
many nonzero, with $\sum_i \rho_i = 1$; construction via the standard
smooth bump $t \mapsto e^{-1/t}$, proved in Tu's book). The one-variable
fundamental theorem of calculus is carried from 3C. Everything else is
proved.

## 1. Manifolds with Boundary

**Definition.** Let $\mathbb{H}^n = \{x \in \mathbb{R}^n : x_n \geq 0\}$,
the **upper half-space**, whose **interior** is $\{x_n > 0\}$ and whose
**boundary** is $\{x_n = 0\}$. A smooth map on a subset of $\mathbb{H}^n$
means a map that extends to a smooth map on an open subset of
$\mathbb{R}^n$ containing it. A **manifold with boundary** of dimension $n$
is a second countable Hausdorff space $M$ with an atlas of homeomorphisms
$\varphi: U \to \varphi(U)$ from open sets of $M$ onto open subsets of
$\mathbb{H}^n$, with smoothly compatible transitions: each transition
$\psi \circ \varphi^{-1}$ extends to a smooth map on an open subset of
$\mathbb{R}^n$, with smoothly extendable inverse, that carries the boundary
hyperplane $\{x_n = 0\}$ into itself.

**Remark (why the boundary clause is in the definition).** For the
boundary of $M$ to be a well-defined subset, independent of the chart used
to look at it, transitions must respect the boundary hyperplane. For
atlases arising from level sets and most geometric constructions this is
automatic; proving it automatic for *every* extendable transition is the
classical **invariance of domain** theorem (a homeomorphism between open
subsets of $\mathbb{R}^n$ cannot send a boundary point of $\mathbb{H}^n$ to
an interior point), which belongs to algebraic topology and is outside this
course. Building the clause into the compatibility definition keeps every
statement below proved. $\blacksquare$

**Definition.** The **boundary** $\partial M$ is the set of points $p$ whose
charts map $p$ into $\{x_n = 0\}$; the clause above makes this independent
of the chart (if one chart sends $p$ to the boundary hyperplane, the
transition to any other chart keeps it there). $\partial M$ carries an
$(n-1)$-dimensional manifold structure (without boundary): the restrictions
of the charts to $\partial M$, landing in $\{x_n = 0\} \cong
\mathbb{R}^{n-1}$, form an atlas with the restricted transitions. The
**interior** is $M \setminus \partial M$. Smooth maps between manifolds
with boundary, their differentials, and forms are defined exactly as in
[3A](/17-core-course/3a-manifolds/), [3B](/17-core-course/3b-tangent-space/)
and [3C](/17-core-course/3c-forms/): all chart representations are now
smooth maps on subsets of half-spaces, i.e. extendable ones, and [3C
Section 3](/17-core-course/3c-forms/)'s pullback and commutation theorems
apply verbatim, since the chain rule underlies them and extends to the
boundary (both the representation and its extension restrict to the same
map on the half-space part).


**Quick check.**

1. What is the half-space and where is its boundary?
2. What does smooth on a subset of the half-space mean?
3. Which compatibility clause keeps the boundary well defined?
4. What manifold is the boundary?
5. Which deep theorem would make the boundary clause automatic?

*Answers:* **1.** The set of points with nonnegative last coordinate; the hyperplane where it is zero. **2.** Extendable to a smooth map on an open subset of the full space. **3.** Transitions carry the boundary hyperplane into itself. **4.** An (n minus 1)-dimensional manifold with the restricted charts. **5.** Invariance of domain (algebraic topology; outside this course).


## 2. Orientation

**Definition.** An **orientation** of an $n$-dimensional vector space $V$ is
a choice of one of the two connected components of its set of ordered bases,
two bases $(v_1, \dots, v_n)$ and $(w_1, \dots, w_n)$ being **equivalent**
when the change-of-basis matrix has positive determinant. By 1B
(Theorem 4.8 and Corollary 4.9), this is an equivalence relation with
exactly two classes, and a basis $(e_i)$ is declared positive once and for
all, making $\det$ the sign detector: a basis $(w_i)$ is positive iff the
matrix with columns $w_i$ (in the $(e_i)$ coordinates) has positive
determinant. An **oriented manifold** is a manifold that admits an atlas in
which every transition map has Jacobian determinant positive at every point
of its domain; the tangent spaces are then oriented by declaring, in each
chart of such an atlas, the transport of the standard basis to be positive.
This is well defined: two charts of the atlas transport $T_pM$ to bases
differing by the transition's change-of-basis matrix, whose determinant is
positive by hypothesis, so the two transports carry the same orientation
(1B). A chart of such an atlas is itself called **positively oriented**.

**Lemma 2.1 (transitions map outward vectors to outward vectors).** Let
$T$ be a transition of a manifold-with-boundary's charts, defined (with
its smooth extension, also written $T$) near $q \in \{x_n = 0\}$, with
smooth extension $S = T^{-1}$ near $T(q)$. If $v \in \mathbb{R}^n$ has
$v_n < 0$, then $(dT_q v)_n < 0$.

**Proof.** The compatibility clause gives: $T$ and $S$ carry the boundary
hyperplane to the boundary hyperplane; and, being homeomorphisms of their
domains, they carry interior points ($x_n > 0$) to interior points ($y_n >
0$) and exterior points ($x_n < 0$) to exterior points ($y_n < 0$): a
bijection maps the complement of a set to the complement of its image, and
the boundary hyperplane is carried onto the boundary hyperplane. Let
$c(t) = q + tv$ for small $t \geq 0$, so $c_n(t) < 0$ for $t > 0$ and
$c(t) \to q$. Then $T(c(t))$ is exterior for every small $t > 0$, so
$T_n(c(t)) < 0$, and the one-sided derivative satisfies
$(dT_q v)_n = \frac{d}{dt} T_n(c(t))\big|_{t=0} = \lim_{t \to 0^+}
T_n(c(t))/t \leq 0$.

Next, $dT_q$ carries the boundary tangent hyperplane $H_0 = \{v_n = 0\}$
into $\{w_n = 0\}$: for $\xi$ with $\xi_n = 0$, the curve $q + t\xi$ stays
in $\{x_n = 0\}$, so $T(q + t\xi)$ stays in $\{y_n = 0\}$, and
differentiating at $t = 0$ gives $(dT_q \xi)_n = 0$. The differential
$dT_q$ is invertible ($S \circ T = \operatorname{id}$, so
$dS_{T(q)} \circ dT_q = I$ by the chain rule), and an invertible linear
map carrying an $(n-1)$-dimensional subspace *into* an $(n-1)$-dimensional
subspace carries it *onto* (the image is a subspace of dimension $n-1$
inside an $(n-1)$-dimensional subspace). Hence $v \notin H_0$ maps outside
$\{w_n = 0\}$: $(dT_q v)_n \neq 0$. Combined with the inequality:
$(dT_q v)_n < 0$. $\blacksquare$

**Definition (boundary orientation).** At $p \in \partial M$, a tangent
vector $v \in T_pM$ is **outward** if in some (by Lemma 2.1, any) chart
$d\varphi_p(v)$ has negative last coordinate; **inward** if positive.
Since $d\varphi_p$ is an isomorphism and outward vectors exist (any vector
mapping to a negative multiple of $e_n$), the outward vectors form an open
half of $T_pM \setminus \{0\}$. A basis $(w_1, \dots, w_{n-1})$ of
$T_p\partial M$ is **positively oriented** (in the boundary orientation)
if, for any outward vector $n_p$, the basis $(n_p, w_1, \dots, w_{n-1})$ of
$T_pM$ is positively oriented in the ambient orientation of $T_pM$.

**Lemma 2.2 (the boundary orientation is well defined).** The definition
does not depend on the choice of outward vector $n_p$.

**Proof.** Let $n_p, n_p'$ be two outward vectors; write $n_p' = c\, n_p +
u$ with $u$ in the boundary hyperplane $H = \{v : (d\varphi_p v)_n = 0\} =
T_p\partial M$ (possible: both have negative last coordinate under
$d\varphi_p$, so $d\varphi_p(n_p') - c\, d\varphi_p(n_p)$ has zero last
coordinate for suitable $c$; concretely $c = (n_p')_n / (n_p)_n > 0$ after
transport). The change-of-basis matrix from $(n_p, w_1, \dots, w_{n-1})$ to
$(n_p', w_1, \dots, w_{n-1})$ is triangular in the chart coordinates, with
diagonal entries $c$ (once) and $1$ ($n-1$ times): its determinant is $c >
0$. So the two ambient bases have the same orientation sign (determinants
differ by a positive factor, 1B), and the boundary basis is positively
oriented with respect to one outward vector iff with respect to the other.
$\blacksquare$


**Quick check.**

1. What is an orientation of a vector space?
2. What makes an atlas oriented?
3. Define the outward vectors at a boundary point.
4. State the outward-first boundary orientation.
5. Why is it independent of the chosen outward vector?

*Answers:* **1.** One of the two classes of bases under positive-determinant equivalence. **2.** Every transition has positive Jacobian determinant. **3.** Those mapping to negative last coordinate in one (hence any, Lemma 2.1) chart. **4.** The outward vector followed by the boundary basis is positively oriented in the ambient tangent space. **5.** The change-of-basis between two outward vectors is triangular with positive determinant (Lemma 2.2).


## 3. Integration of Forms

**Definition (chart integral).** Let $M$ be an oriented $n$-manifold with
boundary, and let $\omega$ be a smooth $n$-form whose support is compact
and contained in one chart domain $U$, with the chart $\varphi: U \to
\varphi(U) \subseteq \mathbb{H}^n$ positively oriented (transition
Jacobians positive, and this chart's own orientation matching the ambient:
$\varphi$ is positively oriented if its differential carries the standard
basis of $\mathbb{R}^n$ to a positively oriented basis of $T_pM$; an
atlas is oriented precisely when all its transitions are
positive-Jacobian, so one positive chart makes all charts of that atlas
positive). Writing $\omega_\varphi = a\, dx^1 \wedge \cdots \wedge dx^n$
in that chart (a top form has a single coefficient, by 3C's Proposition
1.2), define

$$
\int_M \omega := \int_{\varphi(U)} a(x)\, dx,
$$

an ordinary multiple integral of a compactly supported continuous function
(declared input). The integral over $\partial M$ of an $(n-1)$-form
supported in a boundary chart is defined likewise, using the boundary
orientation of Section 2 and the identification $\{x_n = 0\} \cong
\mathbb{R}^{n-1}$.

**Proposition 3.1 (the chart integral is well defined).** If $\omega$ is
supported in two positively oriented chart domains $U_1 \cap U_2 \supseteq
\operatorname{supp}\omega$, the two chart integrals agree.

**Proof.** The two expressions are related by the transition $T = \psi
\circ \varphi^{-1}$: the coefficient functions satisfy $b = (a \circ T^{-1})
\cdot \det(dT^{-1})$ (the top-form transformation rule, 3C Section 3:
$(\psi\circ\varphi^{-1})^*$ of $a\,dx^1 \wedge \cdots \wedge dx^n$ is
$(a \circ T^{-1}) \det(dT^{-1}) dy^1 \wedge \cdots \wedge dy^n$, the
wedge of the pulled-back differentials producing exactly the determinant
of the Jacobian, by the definition of the determinant as the alternating
top form, 1B Section 4). Since both charts are positively oriented and the
transition is orientation-compatible, $\det(dT^{-1}) > 0$ on the support's
image, and the change-of-variables formula (declared input) gives

$$
\int_{\psi(U_2)} b(y)\, dy = \int_{\varphi(U_1)} b(T(x))\, \big|\det
dT(x)\big|\, dx = \int_{\varphi(U_1)} a(x)\, dx,
$$

using $|\det dT| = \det dT > 0$ where $T$ is defined and orientation
preserving. $\blacksquare$

**Definition (global integral).** Let $\omega$ be a compactly supported
smooth $n$-form on the oriented $M$. Choose a partition of unity
$\{\rho_i\}$ (declared input) subordinate to positively oriented chart
domains $\{U_i\}$, and define

$$
\int_M \omega := \sum_i \int_M \rho_i\, \omega,
$$

each term being a chart integral by the definition above (the support of
$\rho_i \omega$ is compact in $U_i$). The sum is finite over the support
of $\omega$ (local finiteness of the partition).

**Proposition 3.2 (independence of the partition).** The value does not
depend on the partition of unity chosen.

**Proof.** Let $\{\rho_i\}$ and $\{\sigma_j\}$ be two partitions. Then
$\omega = \sum_i \rho_i \omega = \sum_j \sigma_j \omega$, and each $\rho_i
\omega = \sum_j \rho_i \sigma_j \omega$ with $\rho_i \sigma_j \omega$
supported in $U_i \cap U_j$. Summing over $j$ and using Proposition 3.1 to
convert each piece to the common chart over $U_i$:

$$
\sum_i \int \rho_i \omega = \sum_{i,j} \int \rho_i \sigma_j \omega =
\sum_j \sum_i \int \rho_i \sigma_j \omega = \sum_j \int \sigma_j \omega,
$$

the rearrangement being legitimate because locally only finitely many
terms are nonzero (local finiteness), so all sums are finite over the
support of $\omega$. $\blacksquare$


**Quick check.**

1. When is the integral of a form a chart integral?
2. What makes two chart integrals agree?
3. What is a partition of unity?
4. Why is the global integral partition-independent?
5. Which three analysis facts are declared for integration?

*Answers:* **1.** The support is compact inside one positively oriented chart domain. **2.** The change-of-variables formula with positive Jacobian (Proposition 3.1). **3.** A locally finite smooth family between zero and one, supports in chart domains, summing to one. **4.** Refine both partitions through the pairwise products and apply Proposition 3.1 (Proposition 3.2). **5.** Fubini; the change-of-variables formula; existence of smooth partitions of unity.


## 4. The Local Stokes Theorem

This is the analytic heart of the whole enterprise: everything else is
assembly.

**Theorem 4.1 (Stokes on the half-space).** Let $\omega$ be a smooth
$(n-1)$-form on (an open set of) $\mathbb{H}^n$, with compact support. Then

$$
\int_{\mathbb{H}^n} d\omega = \int_{\partial \mathbb{H}^n} \omega,
$$

where the left integral is over the half-space with its standard
orientation and the right over the boundary hyperplane with the
outward-first boundary orientation.

**Proof.** Expand $\omega = \sum_{I \text{ inc., } |I| = n-1} a_I\, dx^I$.
By linearity of $d$ and of the integral, treat one summand, $a\, dx^I$.
Then $d(a\, dx^I) = da \wedge dx^I = \sum_{j} \partial_j a\, dx^j \wedge
dx^I$, and by Lemma 1.1 of 3C: if $j \in I$, the term is zero. The only
surviving terms have $j \notin I$; since $|I| = n-1$, there is exactly one
such $j$, namely $j = n$, and

$$
dx^n \wedge dx^I = \operatorname{sgn}(\sigma)\, dx^1 \wedge \cdots \wedge
dx^n
$$

where $\sigma$ is the sorting permutation of $(j_0) \concat I$ into
increasing order (Lemma 1.1 of 3C). Hence

$$
\int_{\mathbb{H}^n} d(a\, dx^I) = \operatorname{sgn}(\sigma)
\int_{\mathbb{H}^n} \frac{\partial a}{\partial x_{j_0}}\, dx.
$$

By Fubini (declared input), this multiple integral is the iterated integral
integrating over $x_{j_0}$ first, where $j_0$ is the unique index in
$\{1, \dots, n\} \setminus I$:

$$
\operatorname{sgn}(\sigma) \int_{\mathbb{R}^{n-1}} \int_{I_{j_0}}
\frac{\partial a}{\partial x_{j_0}}\, dx_{j_0}\, \widehat{dx_{j_0}}\,,
$$

where $I_{j_0} = [0, \infty)$ if $j_0 = n$ and $(-\infty, \infty)$
otherwise, and the sign $\operatorname{sgn}(\sigma)$ is the insertion sign
of $j_0$ into $I$: moving $j_0$ from the front to its sorted slot crosses
exactly $\#\{i \in I : i < j_0\}$ elements, so
$\operatorname{sgn}(\sigma) = (-1)^{\#\{i \in I: i < j_0\}}$. If $j_0 \neq
n$, the inner integral runs over all of $\mathbb{R}$ and the fundamental
theorem of calculus evaluates it at two endpoints, both killed by the
compact support of $a$: the term contributes nothing. Only $j_0 = n$
survives, and there the insertion sign is $(-1)^{n-1}$ (no element of $I$
exceeds $n$), the interval is $[0, \infty)$, and the fundamental theorem
gives

$$
\int_0^\infty \frac{\partial a}{\partial x_n}(x', x_n)\, dx_n = \lim_{R
\to \infty} a(x', R) - a(x', 0) = -\, a(x', 0).
$$

So

$$
\int_{\mathbb{H}^n} d(a\, dx^I) = (-1)^{n-1} (-1) \int_{\mathbb{R}^{n-1}}
a(x', 0)\, dx' = (-1)^n \int_{\{x_n = 0\}} a(x', 0)\, dx'.
$$

Now the right side of the theorem for this summand. The boundary
restriction of $a\, dx^I$ to $\{x_n = 0\}$: for boundary tangent vectors
$w_1, \dots, w_{n-1}$ (last coordinate zero), $dx^I(w_1, \dots, w_{n-1}) =
\det\big(\delta\big)$ is the minor of their first $n-1$ coordinates, i.e.
the $(n-1)$-dimensional volume sign detector $dx'$. Which multiple of the
boundary's oriented volume form is it? By the outward-first convention,
$(w_1, \dots, w_{n-1})$ is positively oriented on the boundary iff
$(-e_n, w_1, \dots, w_{n-1})$ is positively oriented in $\mathbb{R}^n$,
i.e. iff $\det[-e_n \mid w] < 0$. Expanding that determinant along the
first column: $\det[-e_n \mid w] = (-1) \cdot (-1)^{n+1} dx^I(w) = (-1)^n
dx^I(w)$. So positivity on the boundary means $(-1)^n dx^I(w) > 0$: the
boundary's oriented volume form is $(-1)^n dx'$. Therefore

$$
\int_{\partial \mathbb{H}^n} a\, dx^I = (-1)^n \int_{\{x_n = 0\}} a(x',
0)\, dx',
$$

which equals the left side computed above. Summing over $I$ finishes the
proof. $\blacksquare$

**Sign audit (where mistakes classically hide).** Three signs entered: the
insertion sign $(-1)^{n-1}$ (3C, Lemma 1.1), the fundamental theorem's
minus sign ($\int \partial_n a = -a(\cdot, 0)$), and the boundary
orientation's $(-1)^n$. They combine to match exactly; a proof of Stokes
whose signs "come out right" without this audit is not a proof.


**Quick check.**

1. State the local Stokes theorem.
2. Which summands of the exterior derivative die on the half-space, and why?
3. Name the three signs in the surviving term.
4. Why does the fundamental theorem of calculus appear in the proof?
5. How many terms survive for a single basis summand?

*Answers:* **1.** The integral of the derivative over the half-space equals the integral of the form over its boundary (Theorem 4.1). **2.** A missing index other than the last: the compactly supported derivative integrates to zero over the whole line. **3.** The insertion sign; the fundamental theorem's minus; the boundary orientation's sign. **4.** Fubini reduces the integral to the last-coordinate antiderivative evaluated at the boundary. **5.** Exactly one: the term whose missing index is the last coordinate.


## 5. The Generalised Stokes Theorem

**Theorem 5.1 (Stokes).** Let $M$ be a compact oriented $n$-manifold with
boundary, and let $\omega$ be a smooth $(n-1)$-form on $M$. Then

$$
\int_M d\omega = \int_{\partial M} \omega.
$$

**Proof.** Choose a partition of unity $\{\rho_i\}$ subordinate to
positively oriented charts $\{(U_i, \varphi_i)\}$, where the $U_i$ are
chosen as in Section 1: each $\varphi_i(U_i)$ lies in $\mathbb{H}^n$, and
for charts meeting $\partial M$ the boundary hyperplane part corresponds
to $\partial M$ (charts not meeting the boundary can use
$\mathbb{R}^n$-modelled domains, which are $\mathbb{H}^n$ with the
boundary hyperplane avoided; we take them modelled in $\{x_n > 0\}$'s
opens, so no boundary face survives locally). Since $\omega = \sum_i \rho_i
\omega$ and $d$ is linear,

$$
\int_M d\omega = \sum_i \int_M d(\rho_i \omega).
$$

Each $\rho_i \omega$ has compact support inside the chart domain $U_i$.
The chart representation of $\int_M d(\rho_i\omega)$ is, by the definition
of Section 3 and 3C's Theorem 3.2 ($d$ read in charts is $d$), the integral
over $\varphi_i(U_i) \subseteq \mathbb{H}^n$ of $d(\text{representation})$.
Theorem 4.1 applies (the representation of $\rho_i\omega$ is a compactly
supported $(n-1)$-form on $\mathbb{H}^n$):

$$
\int_{\varphi_i(U_i)} d\big((\rho_i\omega)_{\varphi_i}\big) =
\int_{\partial\mathbb{H}^n} (\rho_i\omega)_{\varphi_i}\big|_{\{x_n = 0\}}.
$$

For a chart $U_i$ not meeting $\partial M$, the support of $\rho_i \omega$
is compact *inside the interior* $\{x_n > 0\}$, so its trace on $\{x_n =
0\}$ is identically zero and the boundary integral vanishes. For a chart
meeting $\partial M$, the trace on $\{x_n = 0\}$ is exactly the chart
representation of $\rho_i \omega|_{\partial M}$, and the two orientation
conventions agree point for point: Section 2's outward-first boundary
orientation is *defined* as the transport of the half-space convention of
Theorem 4.1, so the integral of the trace with the boundary orientation is
$\int_{\partial M} \rho_i \omega$ (Proposition 3.1's mechanism, with the
boundary chart identifications). Summing over $i$:

$$
\int_M d\omega = \sum_i \int_{\partial M} \rho_i\, \omega = \int_{\partial
M} \omega,
$$

the last equality being Proposition 3.2's independence argument run on
$\partial M$ (locally finitely many nonzero terms). $\blacksquare$

**Corollary 5.2 (no boundary).** If $M$ is a compact oriented manifold
*without* boundary (in particular any compact oriented manifold in the
sense of 3A), then $\int_M d\omega = 0$ for every $(n-1)$-form $\omega$.

**Proof.** $\partial M = \emptyset$ and the boundary integral is zero by
definition. $\blacksquare$


**Quick check.**

1. State the generalised Stokes theorem.
2. How does the partition of unity assemble its proof?
3. Why do interior charts contribute zero boundary terms?
4. What does Corollary 5.2 say?
5. Why is the boundary orientation convention essential to the assembly?

*Answers:* **1.** The integral of the derivative over M equals the integral of the form over the boundary (Theorem 5.1). **2.** The form is the sum of the cut-off pieces; apply the local statement to each and sum. **3.** Their supports miss the boundary hyperplane, so the trace vanishes. **4.** A compact oriented manifold without boundary has zero integral of every exact top form. **5.** The local statement uses the half-space convention; Section 2 defines the boundary orientation as its transport, so the signs agree.


## 6. The Classical Theorems as Coordinates of Stokes

**The fundamental theorem of calculus (one dimension).** For $M = [a, b]$,
oriented by increasing $t$, and a smooth function $f$: Stokes with $\omega =
f$ (a 0-form) gives $\int_{[a,b]} df = \int_{\{b\}} f - \int_{\{a\}} f$;
the right side is $f(b) - f(a)$ (the point orientation of $\{b\}$ is
positive: outward is $+1$; of $\{a\}$ negative: outward is $-1$), and $df =
f'\,dt$, so $\int_a^b f'(t)\, dt = f(b) - f(a)$. $\blacksquare$

**Green's theorem (two dimensions).** For a compact oriented planar region
$M$ with boundary, and $\omega = P\, dx + Q\, dy$: the graded Leibniz rule
(Theorem 2.3 of 3C) gives $d\omega = dP \wedge dx + dQ \wedge dy = (\partial_y
P)\, dy \wedge dx + (\partial_x Q)\, dx \wedge dy = (\partial_x Q -
\partial_y P)\, dx \wedge dy$ (using $dy \wedge dx = -\, dx \wedge dy$).
Stokes reads

$$
\int_M \Big( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}
\Big)\, dx\, dy = \int_{\partial M} (P\, dx + Q\, dy),
$$

the circulation of $(P, Q)$ around $\partial M$ equals the integral of the
scalar curl over $M$. $\blacksquare$

**The divergence theorem (three dimensions).** For a compact oriented
region $M \subseteq \mathbb{R}^3$ and the flux form $\omega = F_1\, dy
\wedge dz - F_2\, dx \wedge dz + F_3\, dx \wedge dy$ (the signs being the
3C self-test's insertion rule at work), the exterior derivative computes
$d\omega = (\partial_x F_1 + \partial_y F_2 + \partial_z F_3)\, dx \wedge
dy \wedge dz = (\operatorname{div} F)\, dV$, and Stokes reads $\int_M
\operatorname{div} F\, dV = \int_{\partial M} \omega$: flux through the
boundary equals the integral of the divergence inside. $\blacksquare$

**The classical Stokes theorem (surfaces).** For an oriented surface $S$
with boundary in $\mathbb{R}^3$ and $\omega = P\, dx + Q\, dy + R\, dz$:
$d\omega = (\partial_y R - \partial_z Q)\, dy \wedge dz + (\partial_z P -
\partial_x R)\, dz \wedge dx + (\partial_x Q - \partial_y P)\, dx \wedge
dy$ (each term by 3C's insertion rules), whose coefficient vector is
$\operatorname{curl}(P, Q, R)$; Stokes reads $\int_S \operatorname{curl}
\cdot \nu\, dA = \int_{\partial S} P\, dx + Q\, dy + R\, dz$ with $\nu$ the
orientation normal. $\blacksquare$

One theorem, four costumes.


**Quick check.**

1. Which theorem is Stokes in one dimension?
2. What 2-form is the derivative of (P dx plus Q dy)?
3. What 3-form is the derivative of the flux form?
4. What does the classical Stokes theorem equate?
5. Which corollary covers the boundaryless case?

*Answers:* **1.** The fundamental theorem of calculus. **2.** The difference of the partials, times the area form. **3.** The divergence, times the volume form. **4.** The surface integral of the curl against the circulation of the boundary. **5.** Corollary 5.2.


## 7. Problems

1. Prove that a transition of a manifold-with-boundary restricts to a
   transition of the boundary atlases, and conclude $\partial M$ is an
   $(n-1)$-manifold. (§1 – the boundary clause makes the restricted
   transitions land in $\{x_n = 0\} \cong \mathbb{R}^{n-1}$; smooth
   extendability survives restriction.)
2. Prove that the outward vectors at $p \in \partial M$ are exactly the
   vectors $v$ with $(d\varphi_p v)_n < 0$, independently of the chart,
   citing Lemma 2.1 in both directions. (§2 – the transition and its
   inverse.)
3. Prove that the boundary orientation of the boundary of the boundary is
   zero-dimensional and empty... instead: prove that $\partial(\partial M)
   = \emptyset$ in the sense that $\partial M$ is a manifold without
   boundary. (§1 – boundary charts of $\partial M$ land in $\{x_n = 0\}
   \cong \mathbb{R}^{n-1}$, whose points all have neighbourhoods in
   $\mathbb{R}^{n-1}$.)
4. Work out the sign of $dx^2 \wedge dx^1 \wedge dx^3$ as a multiple of
   $dx^1 \wedge dx^2 \wedge dx^3$, two ways: by Lemma 1.1 of 3C and by
   graded commutativity. (§2, 3C – one transposition; $(-1)^{1 \cdot 2} =
   +1$ for the two-past-one check confirms the method.)
5. Verify the divergence-form computation $d(F_1\, dy \wedge dz - F_2\, dx
   \wedge dz + F_3\, dx \wedge dy) = (\operatorname{div} F)\, dx \wedge dy
   \wedge dz$ term by term. (§6, 3C – each $dF_i$ lands in the slot the
   omitted differential leaves open, with the sign visible in the
   insertion rule.)
6. Prove that the integral over a point of a 0-form is the value of the
   form at the point if the point is positively oriented, and its negative
   otherwise. (§3, §6 – a point manifold with boundary has boundary the
   point itself, oriented outward-first.)
7. Prove that the chart integral of Section 3 extends to forms supported
   in finitely many disjoint chart domains, and prove additivity:
   $\int_M \omega + \eta = \int_M (\omega + \eta)$ for forms supported in
   disjoint chart domains. (§3 – linearity of the coefficient integrals;
   disjointness keeps the supports in separate charts so no double
   counting arises.)

**Problems.** The quick checks above tested recall. These chain several results and require
full written arguments; hints are included where the jump is large.

8. Prove that the boundary of $[0, 1]^2$ consists of its four edges, and
   write each edge's outward-first orientation explicitly. (Outward is
   $(0, -1)$ on the bottom, $(0, 1)$ on the top, $(-1, 0)$ on the left,
   $(1, 0)$ on the right; transport each through Lemma 2.1's convention.)
9. Check that for $n = 2$ the boundary orientation of $\partial \mathbb{H}^2$
   is $+dx$: take $w = e_x$ and verify $(-e_y, e_x)$ has positive
   determinant. (The determinant of the columns is $0 \cdot 0 - 1 \cdot (-1) = 1$.)
10. Compute $\int_{[0,1]^2} d(x y^2\, dy)$ directly and via Stokes, and
    confirm the two agree. (Direct: $d = y^2\, dx \wedge dy$, integral
    $1/3$. Stokes: only the right edge contributes, giving $\int_0^1 y^2 dy
    = 1/3$; the left edge carries $x = 0$.)

### The One-Line Reveal (for this page)

The entire page follows from one computation: *the fundamental theorem of
calculus applied to the coefficient of $dx^I$ in the $x_n$ direction.*
Orientation converts "signed volume" into a well-defined number, Fubini and
the change-of-variables formula make that number independent of the chart,
and the partition of unity then lets the same one-variable theorem run
simultaneously in every chart, with the boundary collecting exactly one
term per chart: that assembly is the generalised Stokes theorem, and the
classical theorems are its coordinate expansions.

### Where to go next

- [The Core Course hub](/17-core-course/) – Level 4 (measure and
  integration after Schilling, on the way to $L^p$ duality) and Level 5
  (complex analysis through forms; de Rham cohomology with Bott and Tu;
  algebra with Aluffi) complete the course. Under construction.
- [Level 3C: Differential Forms](/17-core-course/3c-forms/) – the exterior
  derivative, graded Leibniz, and pullback commutation that this page's
  proof assembles.
- Michael Spivak, *Calculus on Manifolds*, and Loring Tu, *An Introduction
  to Manifolds* ([Springer](https://link.springer.com/book/10.1007/978-1-4419-4000-6))
  – the two classical treatments; Spivak proves Stokes over chains with the
  same local-to-global architecture, Tu over manifolds with boundary.
