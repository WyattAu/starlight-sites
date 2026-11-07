---
date: 2026-11-07T00:00:00+00:00
title: "Level 3C: Differential Forms – The Exterior Derivative"
description: "Differential forms built from the determinant formula: the basis dx^I, the wedge product with associativity definitional, the exterior derivative with d^2 = 0 proved, the graded Leibniz rule, pullback-commutation, and the coordinate-independence of d on manifolds."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "17 Core Course", "url": "https://mathematics.wyattau.com/17-core-course"}, {"name": "Level 3C: Differential Forms", "url": "https://mathematics.wyattau.com/17-core-course/3c-forms"}]
}
</script>

**The Defect.** In multivariable calculus, the objects that integrate are
somehow "infinitesimal products of differentials": $dx$, $dx\,dy$, and the
cross product of normals. The rules for manipulating them are memorized as
formal moves, with no account of what the symbols denote. Differential forms
give the symbols referents: a $k$-form is a machine that eats $k$ vectors and
returns a signed $k$-dimensional volume, and every formal rule becomes a
theorem. This page builds the algebra; the next integrates it and proves
Stokes.

**The One-Line Reveal.** A differential form is a determinant evaluator: $dx^I$
applied to $k$ vectors returns the determinant of their $I$-coordinates, and
everything (wedge products, the exterior derivative, $d^2 = 0$, coordinate
independence) follows from properties of determinants.

**Scope.** From [Level 1B](/17-core-course/1b-linear-algebra/): determinants
as alternating forms (Section 4), exterior powers and their dimension
(Theorem 5.4), the dual basis (Section 2). From [Level
3A](/17-core-course/3a-manifolds/): smooth manifolds, charts, smooth maps,
the algebra of derivatives. From [Level
3B](/17-core-course/3b-tangent-space/): the chain rule in chart form.
One input is declared: **Clairaut's theorem** (if the second partial
derivatives of a smooth function are continuous, they are equal; proved in
the [Real Analysis track](/3-real-analysis/)). It is used in exactly two
places, both flagged. Everything else is proved.

## 1. Alternating Forms on Euclidean Space

**Definition.** An **alternating $k$-form** at a point $a \in \mathbb{R}^n$
is an alternating $k$-linear map $\omega: (\mathbb{R}^n)^k \to \mathbb{R}$
(1B, Section 4): linear in each argument, zero when two arguments coincide.
For $k = 0$ this is a scalar. A **$k$-form field** on an open set $U \subseteq
\mathbb{R}^n$ is an assignment $a \mapsto \omega(a)$ of an alternating
$k$-form at each $a$, smooth in $a$ in the sense made precise below.

**Definition (the basis forms).** For an index sequence $I = (i_1, \dots,
i_k)$ with entries in $\{1, \dots, n\}$, define the alternating $k$-form
$dx^I$ by the determinant formula (1B, Section 4):

$$
dx^I(v_1, \dots, v_k) = \det\big(x^{i_p}(v_q)\big)_{p, q = 1}^{k},
$$

the determinant of the matrix whose $(p, q)$ entry is the $i_p$-th
coordinate of $v_q$. The entries $x^i$ are the coordinate functionals, the
dual basis of the standard basis (1B, Theorem 2.1). Since matrices with two
equal rows have determinant zero and transposing rows negates the
determinant, each $dx^I$ is alternating. Write $dx^i := dx^{(i)}$, so
$dx^i(v) = v_i$.

**Lemma 1.1 (insertion rules).** For an index sequence $I$ of length $k$ and
an index $j$: if $j$ occurs in $I$, then $dx^j \wedge dx^I = 0$, where the
wedge is defined below; if $j$ does not occur in $I$, then

$$
dx^j \wedge dx^I = \operatorname{sgn}(\sigma_I^j)\; dx^{I \oplus j},
$$

where $I \oplus j$ is the increasing rearrangement of the sequence $(j,
i_1, \dots, i_k)$ and $\operatorname{sgn}(\sigma_I^j)$ is the sign of the
permutation that performs that rearrangement (Proposition 4.3 of 1B makes
the sign well defined).

**Proof.** The wedge is defined first on the basis symbols: for sequences $I$
of length $k$ and $J$ of length $l$,

$$
(dx^I \wedge dx^J)(v_1, \dots, v_{k+l}) := \det\big(x^{(I \concat
J)_p}(v_q)\big)_{p, q = 1}^{k + l},
$$

the same determinant formula applied to the concatenated index sequence $I
\concat J$. (Repeated indices make some two rows of the matrix equal, so
the determinant vanishes: the first half of Lemma 1.1 with $j \in I$ is
exactly this.) For the sign computation with $j \notin I$: both
$\operatorname{sgn}(\sigma_I^j)\, dx^{I \oplus j}$ and $dx^j \wedge dx^I$
are alternating $(k{+}1)$-forms, and Proposition 4.6 of 1B (determination
of alternating forms by their values on increasing tuples) says it suffices
to compare their values on the standard basis vectors. For an increasing
$(k{+}1)$-tuple $K$, the matrix $\big(x^{(j \concat I)_p}(e_{K_q})\big)$ is
a permutation matrix (its rows select distinct standard coordinates), and
its determinant is the sign of the row-permutation carrying $(j \concat I)$
to the increasing order, which is exactly
$\operatorname{sgn}(\sigma_I^j)$ when $K = I \oplus j$, and the matrix has a
zero row otherwise. Both sides of the claimed identity therefore agree on
every increasing tuple of standard basis vectors, and values on increasing
tuples determine an alternating form (Proposition 1.2 below), so the forms
are equal. $\blacksquare$

**Proposition 1.2 (coordinate basis).** Every alternating $k$-form $\omega$
at a point of $\mathbb{R}^n$ has a unique expression

$$
\omega = \sum_{I \text{ inc.}} \omega(e_I)\, dx^I,
$$

where $e_I = (e_{i_1}, \dots, e_{i_k})$ is the tuple of standard basis
vectors indexed by the increasing sequence $I$. Consequently the increasing
$dx^I$ form a basis of the space of alternating $k$-forms, and that space has
dimension $\binom{n}{k}$, matching 1B's exterior power dimension (Theorem
5.4).

**Proof.** *Evaluation.* For increasing $I$ and $J$:
$dx^J(e_I) = \det\big(\delta_{(J)_p, (I)_q}\big)$, which is $1$ if $J = I$
(the identity matrix) and $0$ otherwise (the index sets differing, some row
is zero).

*Spanning.* Expand each argument $v_q = \sum_i v_{i,q}\, e_i$ inside
$\omega(v_1, \dots, v_k)$ by multilinearity. Terms with a repeated basis
vector vanish by alternation. Terms with distinct indices sort into
increasing order by transpositions of arguments, each transposition
negating the value: $0 = \omega(\dots, v{+}w, \dots, v{+}w, \dots)$ expands
to $\omega(v, w) + \omega(w, v)$ (the argument of 1B's Lemma 4.4), so
swapping two arguments negates. The collected sign is $(-1)^m$ for the
sorting permutation, well defined by 1B's Proposition 4.3(i). Collecting
terms gives

$$
\omega(v_1, \dots, v_k) = \sum_{I \text{ inc.}} \omega(e_I)\,
dx^I(v_1, \dots, v_k).
$$

*Independence.* If $\sum_I a_I\, dx^I = 0$, evaluate at $e_J$: $a_J = 0$.
$\blacksquare$

**Definition (wedge of fields).** For each $k$ and $l$, the collections of
alternating $k$- and $l$-forms at a point are vector spaces (pointwise
operations), and by Proposition 1.2 every alternating $k$-form at a point
has a *unique* expression $\sum_I a_I\, dx^I$ over increasing $I$. For
fields $\omega = \sum_I a_I\,dx^I$ and $\eta = \sum_J b_J\,dx^J$ (finitely
supported coefficient functions), we define

$$
\omega \wedge \eta := \sum_{I, J} a_I\, b_J\; dx^I \wedge dx^J.
$$

Uniqueness of the basis expression makes the definition legitimate (the
same field cannot be expanded two ways and receive two wedges).

**Proposition 1.3 (the wedge is associative and graded commutative).** The
wedge of fields is bilinear; $(\omega \wedge \eta) \wedge \theta = \omega
\wedge (\eta \wedge \theta)$; and $\eta \wedge \omega = (-1)^{kl}\,
\omega \wedge \eta$ for a $k$-form $\omega$ and an $l$-form $\eta$. In
particular transposing $dx^I$ past $l$ factors of $dx^J$ contributes the
sign $(-1)^{kl}$.

**Proof.** Bilinearity is bilinearity of the coefficients in the definition.
*Associativity:* at the level of basis symbols, both $(dx^I \wedge dx^J)
\wedge dx^K$ and $dx^I \wedge (dx^J \wedge dx^K)$ are, by the definition,
the determinant formula applied to the single concatenated sequence $I
\concat J \concat K$; so they are equal as alternating maps, and the general
claim follows by expanding the fields in their bases (Proposition 1.2) and
using bilinearity. *Graded commutativity:* it suffices to check basis
symbols $dx^I \wedge dx^J = (-1)^{kl} dx^J \wedge dx^I$. Both sides are
alternating $(k{+}l)$-forms that vanish unless $I \cap J = \emptyset$
(Lemma 1.1, applied repeatedly). When $I \cap J = \emptyset$, evaluation on
the increasing tuple $(e_1, \dots, e_{k+l})$ gives, on both sides, the
determinant of a permutation matrix: the left side carries the permutation
sorting $I \concat J$ into increasing order, the right side the permutation
sorting $J \concat I$. These two permutations differ by a reversal of $k$
elements past $l$ elements, and the sign of that reversal is $(-1)^{kl}$
(it is the product of $kl$ adjacent transpositions, each of sign $-1$). By
Proposition 1.2 (values on increasing tuples determine), the alternating
forms agree. $\blacksquare$

**Definition (smoothness of fields).** A $k$-form field $\omega = \sum_I
a_I\, dx^I$ on $U$ is **smooth** if the coefficient functions $a_I$ are
smooth, and this does not depend on the choice of basis expansion (the
coefficients are unique at every point, so there is nothing to check). Write
$\Omega^k(U)$ for the vector space of smooth $k$-form fields on $U$, and
$\Omega^0(U) = C^\infty(U)$.

## 2. The Exterior Derivative

**Definition.** For a smooth function $a \in C^\infty(U)$, define

$$
da := \sum_{i=1}^n \frac{\partial a}{\partial x_i}\, dx^i.
$$

For $\omega = \sum_I a_I\, dx^I \in \Omega^k(U)$, define

$$
d\omega := \sum_I da_I \wedge dx^I = \sum_{I,\, j} \frac{\partial
a_I}{\partial x_j}\, dx^j \wedge dx^I,
$$

which is a $(k{+}1)$-form field by the insertion rules (Lemma 1.1). The
operator $d: \Omega^k(U) \to \Omega^{k+1}(U)$ is the **exterior
derivative**. On functions it reproduces Section 1's definition.

**Lemma 2.1 (the product rule).** For smooth $a, b$:
$d(ab) = a\, db + b\, da$.

**Proof.** $d(ab) = \sum_i \partial_i(ab)\, dx^i = \sum_i (\partial_i a)\, b
- a\, (\partial_i b)\, dx^i = b\, da + a\, db$ (ordinary product rule), and
scalars pull through the wedge. $\blacksquare$

**Theorem 2.2 ($d^2 = 0$).** For every smooth $k$-form field $\omega$, we
have $d(d\omega) = 0$.

**Proof.** By linearity of $d$ in the coefficients, it suffices to check
$d(da) = 0$ for a function $a$, since

$$
d(d\omega) = d\Big(\sum_I da_I \wedge dx^I\Big) = \sum_I d(da_I) \wedge
dx^I,
$$

the exterior derivative acting only on the coefficient functions. Now $da =
\sum_i \partial_i a\, dx^i$, so

$$
d(da) = \sum_{i, j} \frac{\partial^2 a}{\partial x_j \partial x_i}\,
dx^j \wedge dx^i.
$$

The diagonal terms vanish ($dx^i \wedge dx^i = 0$, Lemma 1.1). The
off-diagonal terms pair up: for $i \neq j$,

$$
\frac{\partial^2 a}{\partial x_j \partial x_i}\, dx^j \wedge dx^i +
\frac{\partial^2 a}{\partial x_i \partial x_j}\, dx^i \wedge dx^j
= \Big( \frac{\partial^2 a}{\partial x_j \partial x_i} -
\frac{\partial^2 a}{\partial x_i \partial x_j} \Big) dx^j \wedge dx^i = 0,
$$

using $dx^i \wedge dx^j = -\, dx^j \wedge dx^i$ (Proposition 1.2 with $k = l
= 1$) and Clairaut's theorem (the declared input) to equate the mixed
partials. $\blacksquare$

**Theorem 2.3 (the graded Leibniz rule).** For a $k$-form $\omega$ and an
$l$-form $\eta$:

$$
d(\omega \wedge \eta) = d\omega \wedge \eta + (-1)^k\, \omega \wedge
d\eta.
$$

**Proof.** By bilinearity, expand in the bases: $\omega = \sum_I a_I dx^I$,
$\eta = \sum_J b_J dx^J$. Then $\omega \wedge \eta = \sum_{I,J} a_I b_J\,
dx^I \wedge dx^J$, and

$$
d(\omega \wedge \eta) = \sum_{I,J} d(a_I b_J) \wedge dx^I \wedge dx^J
= \sum_{I,J} \big( b_J\, da_I + a_I\, db_J \big) \wedge dx^I \wedge dx^J,
$$

by Lemma 2.1. The first summand reorganizes by associativity (Proposition
1.2):

$$
\sum_{I,J} b_J\, da_I \wedge dx^I \wedge dx^J = \Big(\sum_I da_I \wedge
dx^I\Big) \wedge \Big(\sum_J b_J\, dx^J\Big) = d\omega \wedge \eta.
$$

The second summand needs $db_J$ carried *past* the $k$ factors of $dx^I$.
Transposing a 1-form past a single alternating factor negates (Proposition
1.2, graded commutativity with $k = l = 1$), so transposing past $k$ of them
contributes $(-1)^k$:

$$
a_I\, db_J \wedge dx^I \wedge dx^J = (-1)^k\, a_I\, dx^I \wedge db_J \wedge
dx^J,
$$

and summing gives $(-1)^k\, \omega \wedge d\eta$. $\blacksquare$

## 3. Pullbacks and Coordinate Independence

**Definition (pullback).** For a smooth map $f: U \to V$ between open sets
of Euclidean spaces and $\omega = \sum_J b_J\, dy^J \in \Omega^k(V)$, the
**pullback** is

$$
f^*\omega := \sum_J (b_J \circ f)\; df^{j_1} \wedge \cdots \wedge df^{j_k},
$$

where $f^{j} = y^j \circ f$ are the component functions and $df^j = \sum_i
\partial_i f^j\, dx^i$; the wedge is associativity-consistent (Proposition
1.2). For functions, $f^*b = b \circ f$. Pullback is linear in $\omega$ and
contravariantly compositional: $(g \circ f)^* = f^* \circ g^*$ (both sides
substitute $g(f(x))$ for $y$; a one-line pointwise check).

**Theorem 3.1 ($d$ commutes with pullback).** For every $k$-form $\omega$
on $V$: $d(f^*\omega) = f^*(d\omega)$.

**Proof.** By linearity, expand $\omega = \sum_J b_J\, dy^{j_1} \wedge
\cdots \wedge dy^{j_k}$ over increasing $J$. First,

$$
f^*(d\omega) = \sum_J f^*\Big( \sum_l \frac{\partial b_J}{\partial y_l}\,
dy^l \wedge dy^{j_1} \wedge \cdots \wedge dy^{j_k} \Big)
= \sum_{J,\, l} \Big(\frac{\partial b_J}{\partial y_l} \circ f\Big)\,
df^l \wedge df^{j_1} \wedge \cdots \wedge df^{j_k}.
$$

Second, by the graded Leibniz rule (Theorem 2.3) applied successively to the
product $(b_J \circ f)\, df^{j_1} \wedge \cdots \wedge df^{j_k}$, whose
first factor is a function:

$$
d(f^*\omega) = \sum_J d(b_J \circ f) \wedge df^{j_1} \wedge \cdots \wedge
df^{j_k} + (b_J \circ f) \sum_{s=1}^k \pm\, df^{j_1} \wedge \cdots \wedge
d(df^{j_s}) \wedge \cdots \wedge df^{j_k}.
$$

Every term of the second sum vanishes: $d(df^{j_s}) = d\big(\sum_i
\partial_i f^{j_s}\, dx^i\big) = \sum_{i, r} \partial_r \partial_i f^{j_s}\,
dx^r \wedge dx^i = 0$ by $d^2 = 0$ on functions (Theorem 2.2, Clairaut
again). For the first sum, the chain rule gives $\partial_i (b_J \circ f) =
\sum_l (\partial_l b_J \circ f)\, \partial_i f^l$, so

$$
d(b_J \circ f) = \sum_l \Big(\frac{\partial b_J}{\partial y_l} \circ
f\Big) df^l,
$$

and substituting shows $d(f^*\omega)$ equals the display for $f^*(d\omega)$.
$\blacksquare$

**Theorem 3.2 ($d$ is coordinate independent on manifolds).** Let $M$ be a
smooth manifold. A $k$-form field on $M$ is a collection of $k$-form fields
$\omega_\varphi$ on $\varphi(U)$, one for each admissible chart $(U,
\varphi)$, such that on overlaps the expressions correspond through the
transition maps: $\omega_\psi = (\psi \circ \varphi^{-1})^*\,
\omega_\varphi$ wherever both are defined. Then the charts' exterior
derivatives assemble: there is a unique operator $d_M: \Omega^k(M) \to
\Omega^{k+1}(M)$ with $(d_M\omega)_\psi = d(\omega_\psi)$ in every chart;
and it agrees with the Euclidean $d$ on chart representations.

**Proof.** *Consistency is exactly Theorem 3.1.* Let $T = \psi \circ
\varphi^{-1}$ be a transition. The compatibility condition gives
$\omega_\psi = T^* \omega_\varphi$ on $\psi(U \cap V)$. Applying $d$:

$$
d(\omega_\psi) = d(T^* \omega_\varphi) = T^*(d\omega_\varphi),
$$

by Theorem 3.1. So the $d$ of the $\psi$-representation equals the pullback
of the $d$ of the $\varphi$-representation, which is precisely the
compatibility condition for the family $\{d(\omega_\varphi)\}$ to be a
$(k{+}1)$-form field on $M$. *Existence:* on a chart domain, set
$(d_M\omega)_\varphi := d(\omega_\varphi)$; the computation just shown says
the pieces agree on overlaps, so they assemble into a globally defined
field. *Uniqueness:* any operator agreeing with the Euclidean $d$ on every
chart representation is pinned down on every chart domain, and chart domains
cover $M$. *Independence of the atlas:* admissible charts all belong to one
maximal atlas, and the pieces were checked across arbitrary transitions
between admissible charts. $\blacksquare$

**Remark (what $d$ is good for).** On functions, $df_p$ from [Level
3B](/17-core-course/3b-tangent-space/) evaluates on a tangent vector $X$ as
$X([f])$; the field $df$ of Theorem 3.2 is that object, varying smoothly
over $M$. On $n$-forms in $n$-dimensional space, $d$ produces exactly the
density that the next page integrates: applied to
$\omega = \sum_i (-1)^{i-1} F_i\, dx^1 \wedge \cdots \widehat{dx^i} \cdots
\wedge dx^n$, it yields $(\operatorname{div} F)\, dx^1 \wedge \cdots \wedge
dx^n$, a computation included as a self-test.

## 4. Self-test

1. Prove that $dx^I = 0$ as an alternating map whenever $I$ has a repeated
   index. (§1 – two rows of the determinant matrix coincide.)
2. Prove that the increasing families $\{dx^I\}$ are linearly independent
   as alternating maps, citing the exact theorem of Level 1B you use. (§1
   – 1B, Theorem 5.4: the exterior power has basis the increasing wedges;
   the $dx^I$ are that basis read through the duality of alternating maps
   and alternating multilinear forms.)
3. Compute $d(\omega \wedge \omega)$ for a 1-form $\omega$ two ways: by the
   graded Leibniz rule and by expanding $\omega$ in coordinates; confirm
   both give $0$. (§2 – $d\omega \wedge \omega - \omega \wedge d\omega$ and
   the fact that $\omega \wedge \omega = 0$ for odd-degree forms.)
4. Prove the claim of the Remark: for $F = (F_1, \dots, F_n)$ smooth and
   $\omega = \sum_i (-1)^{i-1} F_i\, dx^1 \wedge \cdots \widehat{dx^i}
   \cdots \wedge dx^n$, one has $d\omega = (\operatorname{div} F)\,
   dx^1 \wedge \cdots \wedge dx^n$. (§2, §1 – apply $d$ term by term; each
   $dF_i$ contributes $\partial_i F_i\, dx^i$ in the slot left open, and
   Lemma 1.1's insertion rule sorts the sign.)
5. Show that $d$ of a 0-form in one chart, read through a transition map,
   matches $d$ in the other chart, for $M = \mathbb{R}$ with charts $x$ and
   $y = x^3$. (§3 – $d_x$ of $a$ versus $d_y$ of $a \circ y^{-1}$; the
   chain rule closes the gap.)
6. Prove that if $\omega$ is closed ($d\omega = 0$) then so is every
   pullback $f^*\omega$. (§3, §2 – $d(f^*\omega) = f^*(d\omega) = f^*0 =
   0$.)

### The One-Line Reveal (for this page)

The entire page follows from one construction: *forms are determinant
evaluators, and $d$ is the unique operator that differentiates their
coefficients antisymmetrically.* Determinants give alternation for free
(associativity of the wedge becomes definitional), Clairaut's theorem kills
$d^2$, and the chain rule converts the two into the statement that $d$ means
the same thing in every coordinate system.

### Where to go next

- [Level 3D: Integration and Stokes](/17-core-course/3d-stokes/) –
  orientation, integration of forms, and the generalised Stokes theorem,
  where the exterior derivative of this page starts paying rent.
- [Level 3B: Tangent Spaces](/17-core-course/3b-tangent-space/) – the
  differential whose field-version is the $df$ of this page.
- [An Introduction to Manifolds](https://link.springer.com/book/10.1007/978-1-4419-4000-6)
  – Loring Tu's Chapters 3 and 6, which develop the exterior derivative and
  its coordinate independence with the same determinant-first emphasis.
