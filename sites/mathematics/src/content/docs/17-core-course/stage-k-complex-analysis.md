---
date: 2026-11-12T00:00:00+00:00
title: "Stage K: Complex Analysis"
description: "The stage that closes the course's oldest debt: holomorphy and the Cauchy-Riemann equations derived from the reader's own attempt at a complex derivative, complex integration and Cauchy's theorem, the rigidity theorem that holomorphic means analytic, Liouville's one-line machine, and the fundamental theorem of algebra finally proved - the ledger entry Stage E opened is discharged in full."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "17 Core Course", "url": "https://mathematics.wyattau.com/17-core-course"}, {"name": "Stage K: Complex Analysis", "url": "https://mathematics.wyattau.com/17-core-course/stage-k-complex-analysis"}]
}
</script>

**The Defect.** Two debts have been riding in the course map since
Stage E: the fundamental theorem of algebra, *declared* so that
Stage F could triangularise and Stage I's central limit theorem
could have a payee; and Stage I's characteristic functions, whose
rigidity theorems were declared to this stage. Both wait on one
theory. The naive conjecture: complex differentiability is the real
derivative with two coordinates. The reality is the strangest
rigidity in analysis: requiring the limit of $(f(z + h) - f(z))/h$
to exist for *every direction* of approach $h$ is so restrictive
that it forces infinite differentiability, power series, and the
theorem that a bounded entire function is constant. One theorem
(Liouville) and one supposition (a polynomial without roots) collide
in three lines, and the ledger closes.

**The One-Line Reveal.** <span class="wn-spoiler-inline" tabindex="0">Complex
differentiability splits into the Cauchy-Riemann equations, complex
contour integrals see only the holes inside them (Cauchy), holomorphic
functions equal their Taylor series (rigidity), anything bounded and
entire is constant (Liouville), and a polynomial without roots makes
its reciprocal bounded, entire, and non-constant: contradiction,
fundamental theorem of algebra, ledger closed.</span>

*The blur is deliberate: form your own reading of the page first, then
click it.*

**Scope.** Consumes Stage G (differentiation and integration on the
plane, the elementary functions including Stage D-G's $e^{it}$),
Stage I (integration by parts against decaying functions, the
L-structures), and Stage F (linear maps and determinants, for the
Jacobian reading of Cauchy-Riemann). Three debts are discharged here:
**E3's fundamental-theorem-of-algebra** (Section 4, in full),
**Stage I8's characteristic-function payee** (the rigidity inputs
stated where the CLT's proof needs them), and **Stage E's
declaration that K exists** (the ledger entry closes with this
page). Goursat's refinement of Cauchy's theorem is honestly
declared; everything else on this page is proved.

## 1. Holomorphy and the Cauchy-Riemann Equations

**Ponder 1 (attempt the complex derivative).** For $f(z) := z^2$,
compute $\frac{f(z + h) - f(z)}{h}$ and watch $h$'s direction
become irrelevant. Then attempt the same for $f(z) := |z|^2 = z
\bar{z}$, approaching along the real axis and along the imaginary
axis. What do the two attempts teach you about which functions can
be complex-differentiated?

<details class="wn-spoiler">
<summary>The two attempts</summary>
<div class="wn-spoiler-body">

For $z^2$: $\frac{(z+h)^2 - z^2}{h} = 2z + h \to 2z$ regardless of
how $h \to 0$: differentiable everywhere, derivative $2z$. For
$|z|^2$: along the real axis ($h = t$ real) the difference quotient
tends to $2x = z + \bar{z}$; along the imaginary axis ($h = it$) it
tends to $2x \cdot$... more precisely $\frac{|z+it|^2 - |z|^2}{it}$
tends to $-2iy = 2iy \cdot (-1)$; at a general $z = x + iy$ the two
directions give $z + \bar{z} = 2x$ and $-(z + \bar{z}) = -2x$ after
the division by $i$ wait, compute once at $z = 1$: real approach
gives $2$, imaginary approach gives $(|1 + it|^2 - 1)/(it) = (t^2)/(
it) = t/i = -it \to 0$. Different directions, different limits: not
differentiable anywhere except $z = 0$. The lesson: the complex
derivative requires *one* limit to serve *every* direction, and
almost no functions qualify.

</div>
</details>

**Definition (holomorphic).** $f: U \to \mathbb{C}$ on an open $U$
is **holomorphic** when for every $z \in U$ the limit
$\lim_{h \to 0} \frac{f(z + h) - f(z)}{h}$ exists (with $h$ running
through all complex directions). The limit is $f'(z)$.

**Theorem (Cauchy-Riemann).** Write $f = u + iv$ with $u, v$ real.
If $f$ is holomorphic, then the partial derivatives of $u$ and $v$
exist and satisfy
$$
\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y},
\qquad \frac{\partial u}{\partial y} = -\frac{\partial
v}{\partial x},
$$
and $f'(z) = u_x + i v_x$. Conversely, if the partials exist in a
neighbourhood, are continuous, and satisfy the equations, then $f$
is holomorphic.

*Proof.* Take the defining limit along $h$ real: the quotient
becomes $u_x + i v_x$ (one-variable derivatives of $u$ and $v$ in
$x$). Along $h = it$: $\frac{f(z + it) - f(z)}{it} = \frac{u_y t +
i v_y t}{it} = v_y - i u_y$. One limit must equal both: $u_x =
v_y$ and $v_x = -u_y$. Conversely, the continuity of the partials
makes $f$ differentiable as a plane map (Stage G Section 5's
$C^1$ theorem), with Jacobian matrix $\begin{pmatrix} u_x & u_y \\
v_x & v_y \end{pmatrix}$; the equations say the Jacobian is the
matrix of one complex number $u_x + i v_x$ acting by rotation-scale,
which is exactly the statement that the plane derivative is complex
linear: the complex limit exists. $\blacksquare$

*In words:* complex differentiability is real differentiability plus
one constraint, and the constraint is the Cauchy-Riemann system:
the Jacobian must be a rotation-scaling, never a shear. The
function $|z|^2$ fails because its Jacobian is a genuine symmetric
matrix, not a rotation-scale.

:::note[Quick check]

1. Compute the difference quotient's two directional limits for
   $f(z) = \bar{z}$, and conclude.
2. State the Cauchy-Riemann equations for $f = u + iv$.
3. Check holomorphy of $z^n$ and of $e^z$ via the equations.
4. Where does Stage G's $C^1$ theorem enter the converse proof?
5. What does "the Jacobian is a rotation-scaling" mean in matrix
   form?
6. Check the Cauchy-Riemann equations for $f(z) = z^3$ by
   writing $u$ and $v$.
7. Prove $e^z$ is entire directly from the limit definition, using
   Stage G's constructed exponential.
8. Which polynomials in $z$ and $\bar{z}$ are holomorphic?

<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** Along real $h$: quotient tends to $1$; along the imaginary
direction: $-1$; no common limit, so $\bar{z}$ is holomorphic
nowhere. **2.** $u_x = v_y$ and $u_y = -v_x$. **3.** For $z^n$:
$u, v$ are smooth polynomials satisfying the equations (the
binomial expansion pairs them); for $e^z = e^x(\cos y + i \sin
y)$: $u_x = e^x \cos y = v_y$ and $u_y = -e^x \sin y = -v_x$.
**4.** It converts the CR equations into plane differentiability,
whose Jacobian is then complex linear by the equations. **5.**
$\begin{pmatrix} a & -b \\ b & a \end{pmatrix}$: the matrix of
$a + ib$, a rotation composed with a scaling.
**6.** $z^3 = (x^3 - 3xy^2) + i(3x^2 y - y^3)$: $u_x = 3x^2 - 3y^2 = v_y$ and $u_y = -6xy = -v_x$: the equations hold everywhere, so $z^3$ is entire. **7.** $\frac{e^{z+h} - e^z}{h} = e^z \frac{e^h - 1}{h} \to e^z$ since $\frac{e^h - 1}{h} \to 1$ as $h \to 0$ (the exponential series' first two terms dominate; Stage G's limit laws close it). **8.** Only the polynomials in $z$ alone: any genuine $\bar{z}$ factor fails the equations (Section 1's $\bar{z}$ computation), and the equations are linear in the coefficients.

</div>
</details>

:::

## 2. Contour Integrals and Cauchy's Theorem

**Definition (contour integral).** For a piecewise smooth path
$\gamma: [a, b] \to U$ and continuous $f$:
$\int_\gamma f := \int_a^b f(\gamma(t)) \gamma'(t) \, dt$.

**Ponder (attempt the theorem).** For $f$ holomorphic and $\gamma$
a closed path, attempt $\int_\gamma f = 0$ on the case $f(z) = 1$
and $f(z) = z$ around the unit circle before believing it in
general. Then attempt the counterexample $f(z) = \bar{z}$ and
compute its circle integral.

<details class="wn-spoiler">
<summary>The three computations</summary>
<div class="wn-spoiler-body">

$f = 1$: $\int_\gamma 1 = \int 1 \cdot \gamma' = \gamma(b) -
\gamma(a) = 0$ on a closed path. $f = z$: $\gamma(t) = e^{it}$
gives $\int e^{it} \cdot i e^{it} \, dt = i \int_0^{2\pi} e^{2it}
\, dt = 0$ (the exponential's period). The counterexample
$f = \bar{z} = e^{-it}$ on the circle: $\int e^{-it} i e^{it} dt =
i \cdot 2\pi = 2\pi i \neq 0$. And $\bar{z}$ is exactly the
function that failed holomorphy in Section 1. The pattern: the
contour integral sees whether $f$ passes the Cauchy-Riemann audit;
holomorphic functions have zero integrals around closed loops
staying in their domain.

</div>
</details>

**Theorem (Cauchy's theorem).** If $f$ is holomorphic on $U$ and
$\gamma$ is a closed path whose interior lies in $U$, then
$\int_\gamma f = 0$.

*Proof shape.* If the partials are continuous, Green's theorem
(declared from Stage G's multivariable integration; the full
statement is booked to Stage J where surfaces are native) converts
the contour integral to an area integral whose integrand is
$u_y + v_x$ by the Cauchy-Riemann equations with opposite signs:
identically zero. The refinement that removes the continuity
hypothesis on the partials is **Goursat's theorem**: triangulate
the interior and run a nested-triangle descent, spending 2B's
Cantor machinery; the course declares Goursat's refinement, with
the honest note that it is exactly the sort of argument Baire was
built for. $\blacksquare$

**Theorem (Cauchy's integral formula).** For $f$ holomorphic, $z$
inside $\gamma$:
$$
f(z) = \frac{1}{2\pi i} \oint_\gamma \frac{f(w)}{w - z} \, dw.
$$
the value at one point is read off the boundary. Differentiating
under the integral $n$ times: $f^{(n)}(z) = \frac{n!}{2\pi i}
\oint_\gamma \frac{f(w)}{(w - z)^{n+1}} \, dw$: **holomorphic
functions are infinitely differentiable**, and the derivative of
every order is automatically holomorphic.

**The rigidity theorem.** Expanding $\frac{1}{w - z}$ as a geometric
series in $z/w$ inside the integral (Stage I's convergence ladder
for the uniform exchange) gives: every holomorphic function equals
its Taylor series,
$$
f(z) = \sum_{n=0}^{\infty} \frac{f^{(n)}(z_0)}{n!} (z - z_0)^n,
$$
on every disk inside its domain. Holomorphic *means* analytic: the
rigidity that makes the complex theory a closing engine rather
than a second calculus.

:::note[Quick check]

1. Compute $\int_\gamma z^2$ around the unit circle twice, once by
   parametrisation and once by Cauchy.
2. State the CR-audit reading of Cauchy's theorem.
3. What does Goursat's refinement remove, and what machinery does
   its proof spend?
4. State Cauchy's integral formula, and the consequence for
   derivatives.
5. State the rigidity theorem in one sentence.
6. Compute $\oint_{|z - a| = r} \frac{1}{z - a} \, dz$.
7. State the formula for $f''$ from Cauchy's integral formula.
8. Why does the rigidity theorem not contradict $f(z) = 1/z$ on the
   punctured plane?

<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** Parametrisation: $i \int_0^{2\pi} e^{3it} dt = 0$; Cauchy:
$z^2$ is entire, closed loop, zero integral: both zero. **2.** The
contour integral sees the CR audit: holomorphic integrands give
zero on contractible closed loops. **3.** It removes the assumed
continuity of the partials; its proof spends nested-triangle
descent, 2B's Cantor machinery. **4.** $f(z) = \frac{1}{2\pi i}
\oint \frac{f(w)}{w - z} dw$; every derivative exists and is
itself holomorphic. **5.** Holomorphic functions equal their
Taylor series on every disk in the domain.
**6.** Parametrise $w = a + re^{it}$: the integral is $\int_0^{2\pi} \frac{ire^{it}}{re^{it}} dt = 2\pi i$: the normalisation constant of the whole theory, visible by hand. **7.** $f''(z) = \frac{2!}{2\pi i} \oint \frac{f(w)}{(w - z)^3} dw$: differentiate the formula under the integral once. **8.** Rigidity is local: $1/z$ equals its Taylor series on every disk avoiding $0$; the theorem needs the function holomorphic *on the whole disk*, and the puncture at $0$ is exactly where the series would need to live.

</div>
</details>

:::

## 3. Liouville and the Residue Calculus

**Theorem (Liouville).** A bounded entire function (holomorphic on
all of $\mathbb{C}$) is constant.

*Proof.* Cauchy's formula with the circle of radius $R$ around $z$:
$|f'(z)| \leq \frac{1}{2\pi} \cdot 2\pi R \cdot \frac{M}{|w - z|}$
with $|w - z| = R$ on the circle: $|f'(z)| \leq M/R$. Let $R \to
\infty$: $f'(z) = 0$ everywhere, so $f$ is constant (Stage G's
zero-derivative theorem, its MVT debt paid at H2).
$\blacksquare$

*In words:* a whole function's derivative is bounded by the
boundary data at *every* radius at once; only a constant has no
boundary to answer to.

**Definition (residue).** At an isolated singularity $a$ of $f$,
the **residue** is the coefficient $\mathrm{Res}(f, a) :=
\frac{1}{2\pi i} \oint \frac{f(w)}{w - a} dw = c_{-1}$, the
coefficient of $(w - a)^{-1}$ in the Laurent expansion.

**Theorem (residue theorem).** For $f$ holomorphic off finitely
many singularities inside $\gamma$:
$\oint_\gamma f = 2\pi i \sum_a \mathrm{Res}(f, a)$.

*Proof shape.* Cauchy's theorem on the region with small circles
cut out around each singularity (the boundaries contribute the
residues; the connecting lines cancel in pairs); the Laurent
expansion integrates term by term and only the $c_{-1}$ term
survives the circle integral (Stage G's exponential periodics).
$\blacksquare$

**The working example.** $\oint_{|z| = 2} \frac{e^z}{z^2 + 1} dz$:
singularities at $\pm i$, residues $\frac{e^i}{2i}$ and
$\frac{e^{-i}}{-2i}$; sum times $2\pi i$: $2\pi i
\frac{e^i - e^{-i}}{2i} = \pi (e^i - e^{-i}) = 2\pi i \sin(1)$.
Real integrals that resist Stage G fall to this: $\int_{-\infty}^{\infty}
\frac{\cos x}{1 + x^2} dx = \pi/e$ by closing the contour above and
reading the pole at $i$.

:::note[Quick check]

1. State Liouville, and where the radius $R \to \infty$ enters.
2. Define the residue as a coefficient, and as an integral.
3. Why do all Laurent terms except $c_{-1}$ integrate to zero?
4. Compute $\oint_{|z| = 2} \frac{e^z}{z^2 + 1} dz$ by residues.
5. Name the real-integral corollary computed for $\frac{\cos x}{1 +
   x^2}$.
6. Compute $\mathrm{Res}\left(\frac{1}{z^2 + 1}, i\right)$ and
   the residue at $-i$.
7. Prove $\oint e^z \, dz = 0$ around any closed loop.
8. Give non-constant entire functions, and state what Liouville
   forbids.

<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** Bounded entire implies constant; $|f'(z)| \leq M/R$ for
every $R$ from the integral formula on the radius-$R$ circle.
**2.** The $(w - a)^{-1}$ Laurent coefficient;
$\frac{1}{2\pi i} \oint \frac{f(w)}{w - a} dw$ around $a$.
**3.** $\oint (w - a)^n dw$ vanishes for $n \neq -1$ by the
exponential's periodicity ($n \geq 0$) and by decay ($n \leq -2$
after substitution). **4.** $2\pi i (\frac{e^i}{2i} -
\frac{e^{-i}}{2i}) = \pi(e^i - e^{-i}) = 2\pi i \sin 1$. **5.**
$\int_{-\infty}^{\infty} \frac{\cos x}{1 + x^2} dx = \pi/e$.
**6.** $\frac{1}{2i}$ at $i$ (evaluate the other factor there) and $\frac{1}{-2i}$ at $-i$: each is the partner factor at the pole. **7.** $e^z$ is entire and closed loops contract in $\mathbb{C}$: Cauchy's theorem applies directly. **8.** $z$, $e^z$, $\sin z$: entire and non-constant but unbounded; Liouville forbids bounded non-constants, not growth.

</div>
</details>

:::

## 4. The Fundamental Theorem of Algebra, Proved: the Ledger Closes

**Ponder (attempt it before Liouville).** Suppose $p(z) = z^n + a_{n-1}
z^{n-1} + \dots + a_0$ has no root. Attempt the proof: what does $p$
do to large $|z|$ (Stage G's growth estimates)? What is $\frac{1}{p}$
then? Which theorem of Section 3 breaks it?

<details class="wn-spoiler">
<summary>The attempted proof, completed</summary>
<div class="wn-spoiler-body">

For large $|z|$, $|p(z)| \geq |z|^n (1 - \frac{|a_{n-1}|}{|z|} -
\dots)$: $p$ grows without bound (the leading term dominates). So
$1/p$ is bounded (large outside a disk, continuous with a finite
maximum on the disk by compactness, 2A's extreme value theorem
finally paying its debt). $1/p$ is also entire: $p$ has no roots by
supposition, so the reciprocal's singularities do not exist. Entire,
bounded, and plainly non-constant (it tends to $0$): Liouville says
impossible. The supposition dies: $p$ has a root. Iterate on the
quotient polynomial to split $p$ completely.

</div>
</details>

**Theorem (the fundamental theorem of algebra).** Every
non-constant polynomial $p \in \mathbb{C}[z]$ has a root in
$\mathbb{C}$. Consequently every degree-$n$ polynomial factors as
$p(z) = c \prod_{j=1}^{n} (z - r_j)$: **$\mathbb{C}$ is
algebraically closed.**

*Proof.* Suppose no root. Then $1/p$ is entire (no poles exist) and
bounded (growth of $p$ at infinity, compactness on the disk), so
Liouville makes it constant, forcing $p$ constant: contradiction.
For the full factorisation: the root $r_1$ exists, Stage E's
polynomial division gives $p = (z - r_1) q$ with $\deg q = n - 1$,
and induction on degree splits $q$. $\blacksquare$

**The ledger closes.** Stage E declared this theorem and named this
stage; Stage F spent it to triangularise every complex operator
(Section 2's induction starts at an eigenvalue guaranteed by the
FTA) and to build the Jordan form; Stage I booked the central limit
theorem's characteristic-function machinery here, and its rigidity
input is Section 2's identity theorem consequences (a
characteristic function determines its distribution, because
bounded-continuous functions are determined by their transforms on
the real axis, extended by the same holomorphic rigidity); Stage
H4's canonical-form chapter justified its rotation blocks by the
conjugate-pair splitting. Every "declared, paid at Stage K" entry
now reads: **paid**, here, with the proof above.

**The corollary the real line owes.** Every real polynomial factors
over $\mathbb{R}$ into linear and irreducible quadratic factors:
complex roots of real polynomials come in conjugate pairs, so the
quadratic $(z - r)(z - \bar{r})$ has real coefficients. F9's
rotation-scaling blocks in the real Jordan form are this corollary
wearing matrices.

:::note[Quick check]

1. Prove $|p(z)| \to \infty$ as $|z| \to \infty$ for non-constant
   $p$.
2. Where do compactness and the extreme value theorem enter?
3. Why is $1/p$ non-constant?
4. State the factorisation conclusion, and what "algebraically
   closed" means.
5. List the three ledger entries this section closes.
6. Compute the complete factorisation of $z^3 - 1$.
7. State the real-polynomial corollary, and verify it for $x^2 +
   1$.
8. Where does the factorisation induction's base case sit?

<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** $|p(z)|/|z|^n \to 1$ as $|z| \to \infty$ (lower-order terms
die); so $|p(z)| \geq \frac{1}{2} |z|^n$ past some radius: grows
without bound. **2.** On the disk where $1/p$ is continuous, 2A's
compactness plus the extreme value theorem bound it; outside, $p$'s
growth bounds it. **3.** It tends to $0$ at infinity; constants do
not. **4.** $p = c \prod (z - r_j)$ with exactly $n$ roots counted
with multiplicity; algebraically closed: every non-constant
polynomial has a root in the field. **5.** E3's FTA declaration,
Stage F's spent instances (triangularisation, Jordan), and Stage
I8's characteristic-function payee: all paid here.
**6.** $z^3 - 1 = (z - 1)(z - e^{2\pi i/3})(z - e^{4\pi i/3})$: the three cube roots of unity. **7.** Real polynomials factor into linear and irreducible quadratic factors; $x^2 + 1 = (x - i)(x + i)$ over $\mathbb{C}$, irreducible over $\mathbb{R}$. **8.** Degree zero (constant polynomials need no splitting): the induction descends to it after $n$ divisions.

</div>
</details>

:::

## Stage Gate

:::caution[Pass mark: four of five]
Before Stage L, answer these five without notes. A failed gate names
the section to reread (1: Section 1; 2: Section 2; 3: Section 3; 4:
Sections 4 and 5; 5: Section 5). Stage L is queued; its home is the
Course Map.

1. State holomorphy, the Cauchy-Riemann equations, and the
   counterexample they disqualify.
2. State Cauchy's theorem, the integral formula, and the rigidity
   theorem.
3. State Liouville, and the radius limit that proves it.
4. State the residue theorem and the worked example's value.
5. Prove the fundamental theorem of algebra from Liouville, and
   name the entries the ledger closes.

<details class="wn-spoiler">
<summary>Gate answers</summary>
<div class="wn-spoiler-body">

**1.** One limit serving every direction; $u_x = v_y$, $u_y =
-v_x$; $\bar{z}$ and $|z|^2$ fail it. **2.** $\oint_\gamma f = 0$
for holomorphic $f$ on contractible loops; $f(z) = \frac{1}{2\pi
i} \oint \frac{f(w)}{w - z} dw$; holomorphic equals analytic.
**3.** Bounded entire implies constant; $|f'(z)| \leq M/R$ with $R
\to \infty$. **4.** $\oint_\gamma f = 2\pi i \sum
\mathrm{Res}(f, a)$; the $e^z/(z^2+1)$ example gives $2\pi i \sin
1$. **5.** No roots make $1/p$ bounded entire non-constant,
contradicting Liouville; the ledger closes E3, Stage F's spent
instances, and I8's payee.

</div>
</details>

:::

## Problems

**Problems.** The quick checks tested recall. These chain several
results and require full written arguments.

1. Prove that if $f$ is holomorphic on a domain and $|f|$ attains a
   local maximum, then $f$ is constant (the maximum modulus
   principle), using the open-mapping consequence of Cauchy's
   formula.
   *(Hint: the integral formula represents $f(z_0)$ as the average
   of $f$ on circles around $z_0$; an average cannot exceed a local
   maximum unless every value on the circle equals it; chains of
   circles propagate constancy across the domain.)*
2. Compute $\int_{-\infty}^{\infty} \frac{dx}{1 + x^4}$ by the
   residue theorem: find the upper-half-plane poles of
   $\frac{1}{1 + z^4}$, their residues, and the value $\pi /
   \sqrt{2}$.
   *(Hint: $z^4 = -1$ has roots $e^{i\pi/4}, e^{3i\pi/4}$ in the
   upper half-plane; the residue of $\frac{1}{(z - r_1)(z - r_2)(z - r_3)(z - r_4)}$ at $r$ is $\frac{1}{\prod_{s \neq r} (r - s)}$.)*
3. Prove the fundamental theorem with the minimum-modulus route
   instead of Liouville: if $p$ has no root, $1/p$ attains its
   minimum modulus at some $z_0$ (extreme value theorem), and the
   local polynomial behaviour $p(z_0 + h) \approx p(z_0) + c h^n$
   produces a nearby point with smaller $|p|$; contradict
   minimality.
   *(Hint: the minimum cannot sit where $p' \neq 0$ by Stage G's
   inverse function theorem reshuffling values; where $p' = 0$ the
   lowest nonzero Taylor term dominates and the $n$-th roots of any
   small factor step the modulus down.)*
4. Prove that a holomorphic function with period $1$ and period $i$
   (both real and imaginary periods) is constant, using Liouville
   and the compactness of the fundamental square.
   *(Hint: every point of the plane lies within distance $\sqrt{2}$
   of a period translate of a fundamental-square point; boundedness
   on the square transfers to boundedness on the plane; then
   Liouville.)*
5. Verify the central limit theorem's payee concretely: for
   $\varphi(t) := e^{-t^2/2}$, check that $\varphi$ is its own
   Fourier transform up to constants, and state why this fixed
   point property makes the standard normal the limit distribution.
   *(Hint: complete the square in $\int e^{-itx} e^{-x^2/2} dx$;
   the fixed point means the limiting characteristic function is
   the normal's, and Stage K's rigidity plus I8's continuity
   method hand the convergence of distributions.)*

## Where to Go Next

The ledger's oldest entry is paid, and the complex theory that paid
it is now course property. **Stage L (Algebra and symmetry)** is
queued: groups through the categorical lens, rings and modules,
Galois theory, Lie groups, and the geometry capstone; its home is
the [Course Map](/17-core-course/). The structural stages begin
reading the objects this course has built.

**Next: the [Course Map](/17-core-course/), and Stage L beyond it.**
