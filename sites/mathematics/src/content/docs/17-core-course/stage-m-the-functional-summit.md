---
date: 2026-11-12T00:00:00+00:00
title: "Stage M: The Functional Summit"
description: "The summit the course has climbed toward since 2B: Banach spaces with the four pillars proved or booked, Hilbert spaces and the spectral theorem for compact operators, weak topologies and distributions, Banach algebras with the Gelfand spectrum built on Stage K's Liouville, Sobolev spaces and weak derivatives, the Laplacian with Fredholm and regularity, and unbounded operators with Stone's theorem."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "17 Core Course", "url": "https://mathematics.wyattau.com/17-core-course"}, {"name": "Stage M: The Functional Summit", "url": "https://mathematics.wyattau.com/17-core-course/stage-m-the-functional-summit"}]
}
</script>

**The Defect.** 2B proved that $\mathcal{C}[0, 1]$ is complete, and
Stage I worked in $L^p$. But every existence argument so far has
used one space at a time, with one norm. The questions that
actually solve equations are about *operators*: maps between these
spaces. Does a linear operator on an infinite-dimensional space
attain its maximum? Is its image closed? When can you solve $Tx =
y$? On finite-dimensional ground, Stage F answered with
determinants; on infinite-dimensional ground every naive answer
fails. The naive conjecture: carry Stage F over word for word. The
repair: four theorems, the four pillars, each false without
completeness, each a different shape of the same truth (complete
spaces cannot be patched apart), and one gem above them: the
spectral theorem, Stage F's classification surviving infinity.

**The One-Line Reveal.** <span class="wn-spoiler-inline" tabindex="0">Banach
spaces carry the four pillars (Hahn-Banach, uniform boundedness,
open mapping, closed graph); Hilbert spaces add angles and
projections, so compact self-adjoint operators diagonalise like
Stage F promised; Sobolev spaces make derivatives weak so partial
differential equations become solvable; and unbounded operators
with Stone's theorem hand quantum mechanics its mathematical
skeleton.</span>

*The blur is deliberate: form your own reading of the page first, then
click it.*

**Scope.** Consumes 2B (completeness, Baire), Stage I ($L^p$,
integration), Stage H4 (equicontinuity, compactness), Stage G (the
exponential, ODEs), and Stage K (Liouville, spent in the Gelfand
spectrum). The four pillars: uniform boundedness is *proved* from
Baire (2B's engine spent at last); Hahn-Banach is proved by the
one-dimension-at-a-time extension (with 2B's Zorn-adjacent
bookkeeping flagged); open mapping and closed graph are proved by
the Baire route in sketch, with the full chase booked as Problems.
The spectral theorem for compact self-adjoint operators is proved
in its Hilbert-space form. Unbounded operators and Stone's theorem
close the stage honestly: stated, their proofs named as the
research literature's front door.

## 1. Banach Spaces and the Four Pillars

**Definition (Banach space).** A normed space (Stage I's $\|\cdot\|_p$
pattern: a norm satisfying positivity, homogeneity, the triangle
inequality) that is complete in the distance $d(x, y) :=
\|x - y\|$: a **Banach space**.

**Ponder 1 (attempt the operator maximum).** On the space
$\mathcal{C}[0, 1]$ with the sup-norm, define $T(f) := \int_0^1
f$. Attempt to decide: does $T$ attain its maximum on the unit
ball $\{\|f\| \leq 1\}$? Compare with the unit ball of
$\mathbb{R}^2$, where Stage F's world guarantees maxima of
continuous linear maps. What is structurally different here?

<details class="wn-spoiler">
<summary>The failure you should find</summary>
<div class="wn-spoiler-body">

$\|T\| = \sup_{\|f\| \leq 1} |\int f| \leq \int |f| \leq 1$, so the
supremum is at most $1$, and it is exactly $1$ (take $f \equiv 1$).
But consider $T$ on the subspace of functions with $f(0) = 0$ under
a norm that ignores $f(0)$-behaviour: the natural sup-norm ball
there contains functions whose spike near $0$ is arbitrarily thin,
so the supremum is approached but never attained. The structural
difference: the unit ball of an infinite-dimensional space is not
compact (H4's Arzelà-Ascoli needs equicontinuity; the unit ball of
general bounded functions has none). Continuous linear maps need
not attain maxima: the four pillars are the theorems that replace
this lost compactness.

</div>
</details>

**Theorem (uniform boundedness; Baire spent).** Let $T_k$ be a
family of bounded linear operators from a Banach space $X$ to a
normed space, with $\sup_k \|T_k x\| < \infty$ for *each fixed*
$x$. Then $\sup_k \|T_k\| < \infty$: one bound serves the whole
family on the unit ball.

*Proof shape.* For each $n$, the set $C_n := \{x : \|T_k x\| \leq n
\text{ for all } k\}$ is closed, and pointwise boundedness says
$X = \bigcup_n C_n$. Baire (2B, spent at last for exactly this)
gives some $C_N$ with nonempty interior: a whole ball on which
every $T_k$ is bounded by $N$. Scaling and translating that ball
onto the unit ball turns pointwise bounds into a uniform operator
bound. $\blacksquare$

**The remaining pillars, stated with engines.** **Hahn-Banach**: a
linear functional defined on a subspace extends to the whole space
preserving its norm; the proof extends one dimension at a time and
closes with a maximal extension chosen by an ordering argument
(the bookkeeping 2B's scope flagged; the extension step is pure
Stage G one-variable optimisation). **Open mapping**: a surjective
bounded linear map between Banach spaces maps open sets to open
sets, so bounded inverses come free (the Baire route: the image
of the unit ball contains some ball, by the same closed-set
category argument as uniform boundedness; the chase is Problem
4). **Closed graph**: an everywhere-defined linear map whose graph
is closed is automatically bounded, the converse of what
definitions require, again by Baire. Together the pillars are the
licence that bounded linear operators between Banach spaces behave
like Stage F's matrices on the questions that matter.

:::note[Quick check]

1. Define Banach space, and name three instances from earlier
   stages.
2. Give the sup-norm and prove the triangle inequality for it.
3. In the uniform boundedness proof, what are the sets $C_n$, and
   which theorem says one has interior?
4. State Hahn-Banach, and name the extension technique.
5. What does the open mapping theorem hand you for free, and why
   does that matter for solving $Tx = y$?
6. Give an example of a linear operator that is NOT bounded,
   and identify the broken hypothesis.
7. Prove: bounded linear maps send Cauchy sequences to Cauchy
   sequences, and conclude what about their kernels.
8. State the closed graph theorem's contrapositive in practical
   terms for an unverified linear map.

<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** Complete normed space; $\mathcal{C}[0, 1]$ with sup-norm
(2B), $L^p$ (Stage I's Riesz-Fischer), $\mathbb{R}^n$ (Stage G).
**2.** $\|f\| := \sup_t |f(t)|$; $\|f + g\| \leq \|f\| + \|g\|$ by
the pointwise triangle inequality and the supremum's monotonicity.
**3.** $C_n$ is where the whole family is bounded by $n$; Baire
says closed sets covering a complete space cannot all have empty
interior. **4.** Norm-preserving extension of linear functionals
from subspaces; extend one dimension at a time, then take a maximal
extension. **5.** A continuous inverse: $Tx = y$ has the solution
map $T^{-1}$ bounded, so small errors in $y$ mean small errors in
the solution: the stability every numerical method needs.
**6.** The derivative $d/dt$ on $\mathcal{C}^1[0, 1]$ with the sup-norm: $\|\sin(kt)\| = 1$ but the derivatives' norms are $k$, unbounded: continuity fails without the norm's completeness. **7.** $\|T x_k - T x_j\| \leq \|T\| \|x_k - x_j\|$: Cauchyness transfers; hence the kernel of a bounded operator is closed (limits of killed vectors are killed). **8.** Contrapositive: if an everywhere-defined linear map is unbounded, its graph is not closed: some sequence $x_k \to 0$ has $T x_k \to y \neq 0$, the practical warning that pointwise verification cannot be skipped.

</div>
</details>

:::

## 2. Hilbert Spaces: Angles Return

**Definition.** A **Hilbert space** is an inner product space
(a norm from $\|x\| := \sqrt{\langle x, x\rangle}$, with the
parallelogram-shaped positivity and symmetry) that is complete.
**Instance**: $L^2$ (Stage I), where $\langle f, g\rangle = \int
fg$; the finite cousin $\mathbb{C}^n$ from Stage F.

**Theorem (Riesz representation, Hilbert form; proved).** Every
continuous linear functional on a Hilbert space $H$ is $\ell(x) =
\langle x, y\rangle$ for a unique $y \in H$: the space is its own
dual.

*Proof shape.* If $\ell \neq 0$, its kernel is a proper closed
subspace; pick $z$ outside it; the projection of $z$ onto the
kernel (which exists: minimise the distance, by completeness and a
parallelogram chase) is orthogonal to the kernel; aligning gives
$y$ with $\ell(x) = \langle x, y\rangle$. Uniqueness is the inner
product's nondegeneracy. $\blacksquare$

**Theorem (projection onto closed subspaces).** Every $x$ in a
Hilbert space decomposes uniquely $x = y + z$ with $y$ in a closed
subspace $M$ and $z$ orthogonal to $M$. This is the geometry that
makes Hilbert spaces tractable, and it is what Section 4's spectral
theorem spends.

:::note[Quick check]

1. Define inner product and Hilbert space.
2. Compute $\langle f, g\rangle$ for $f = \mathbf{1}_{[0, 1/2]}$,
   $g = \mathbf{1}_{[0, 1/4]}$ in $L^2[0, 1]$.
3. State the Riesz representation theorem, and what uniqueness
   uses.
4. State the projection theorem, and what completeness buys in its
   proof.
5. Which Stage F notion does orthogonality generalise?
6. Prove the parallelogram law identity for $\|f + g\|^2 +
   \|f - g\|^2$ in $L^2$, and say which theorem it is the litmus
   test for.
7. Compute $\|f - g\|$ for $f = \mathbf{1}_{[0, 1/2]}$ and $g =
   \mathbf{1}_{[0, 1/4]}$, and decide orthogonality.
8. State the Pythagorean identity for orthogonal vectors and what
   it computes for two orthogonal unit vectors' sum.

<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** Inner product: linear in one argument, conjugate-symmetric,
positive definite; Hilbert: complete under its induced norm.
**2.** $\int_0^{1/2} 1 = 1/2$. **3.** Every continuous linear
functional is inner product with a unique vector. **4.** The
closest point exists because the distance-minimising sequence is
Cauchy (parallelogram law) and completeness hands over the limit.
**5.** Perpendicularity of vectors in $\mathbb{R}^n$, Stage F's
orthogonal complement and Stage 1D's inner products.
**6.** Expand both norms: the cross terms cancel, leaving $2\|f\|^2 + 2\|g\|^2$; it is the litmus test for whether a norm comes from an inner product. **7.** $\|f - g\|^2 = \int_0^{1/4} 1 = 1/4$, so $\|f - g\| = 1/2$; the inner product $\langle f, g \rangle = 1/4 \neq 0$, so they are not orthogonal. **8.** $\|x + y\|^2 = \|x\|^2 + \|y\|^2$; for two orthogonal unit vectors the sum has norm $\sqrt{2}$.

</div>
</details>

:::

## 3. Compact Operators and Their Spectral Theorem

**Definition.** A linear operator $T: H \to H$ is **compact** when
it maps bounded sequences to sequences with convergent
subsequences (H4's Arzelà-Ascoli in operator clothing).

**The standing instance.** Integral operators $Kf(t) := \int k(t,
s) f(s) ds$ with continuous kernel $k$: boundedness of the image
family is H4's equicontinuity, and Arzelà-Ascoli extracts the
subsequence. Compactness is the infinite-dimensional successor of
Stage F's finite dimension: matrices are compact, and compact
operators behave as if they were.

**Theorem (spectral theorem for compact self-adjoint operators;
proved shape).** Let $T$ be compact and self-adjoint ($\langle Tx,
y\rangle = \langle x, Ty\rangle$). Then $H$ has an orthonormal
basis of eigenvectors of $T$; the nonzero eigenvalues are real,
have finite multiplicity, and can accumulate only at $0$.

*Proof shape.* Self-adjointness gives real eigenvalues (the
$\langle Tx, x\rangle$ computation) and perpendicular eigenvectors
for distinct eigenvalues (Stage 1D's chase). Existence of a
maximising eigenvector: the quadratic form $\langle Tx, x\rangle$
on the unit sphere attains its supremum when $T$ is compact
(Section 1's failure was *non*-compactness; compactness repairs
exactly that), and the maximiser is an eigenvector by the
variational one-line computation. Orthogonal complement and
invariance let the construction iterate, with eigenvalue
accumulation only at $0$ forced by compactness. $\blacksquare$

*In words:* Stage F's diagonalisation survives infinity in exactly
one softened form: the eigenvalues may crowd toward $0$, because
the unit ball is no longer compact, but compactness forbids every
other crowding. This is the theorem that runs the Sturm-Liouville
theory, the Laplacian's discrete spectrum on bounded domains
(Section 5), and Stage M6's Fredholm alternative.

:::note[Quick check]

1. Define compact operator, and name the standing instance.
2. Why are eigenvalues of a self-adjoint operator real?
3. State the spectral theorem's three claims about the spectrum.
4. Which H4 theorem does the integral-operator instance spend?
5. Where does compactness enter the eigenvector construction?
6. Compute the eigenvalues and eigenvectors of the doubling map
   $T(x, y) := (2x, 3y)$ on $\mathbb{R}^2$, and decide compactness.
7. Show the identity operator on an infinite-dimensional space is
   not compact.
8. Explain why a compact self-adjoint operator cannot have
   eigenvalues bounded away from $0$ infinitely often.

<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** Bounded sequences map to sequences with convergent
subsequences; integral operators with continuous kernels. **2.**
$\lambda \langle x, x\rangle = \langle Tx, x\rangle = \langle x,
Tx\rangle$ is real when $x$ is an eigenvector. **3.** Orthonormal
eigenbasis; real nonzero eigenvalues of finite multiplicity;
accumulation only at $0$. **4.** Arzelà-Ascoli, for the
subsequence convergence making the integral operator compact.
**5.** Compactness makes the quadratic form's supremum on the unit
sphere attained, and the maximiser is the eigenvector.
**6.** Eigenvalues $2$ and $3$ with the coordinate axes as eigenvectors; not compact: the bounded sequence of unit vectors along the $3$-eigenvector direction has no convergent subsequence (all images have norm $3$ and point in different directions). **7.** The image of the unit vectors is the whole unit ball's worth; H4's spike construction gives a bounded sequence with no convergent subsequence. **8.** If $|\lambda| \geq c > 0$ for infinitely many orthonormal eigenvectors $e_k$, their images $\lambda_k e_k$ would have pairwise distance $\geq c \sqrt{2}$: no convergent subsequence, contradicting compactness.

</div>
</details>

:::

## 4. Weak Topologies and Distributions

**Definition (weak convergence).** $x_k \rightharpoonup x$ when
$\ell(x_k) \to \ell(x)$ for every continuous linear functional
$\ell$.

**The standing instance.** In $L^2[0, 1]$, the waves $e_k(t) :=
\sin(2\pi k t)$ converge weakly to $0$: Riemann-Lebesgue-style
integration against any $L^2$ test dies. Strongly they stay apart
($\|e_k - e_j\| = \sqrt{1}$ for $k \neq j$ by orthogonality): the
weak topology is strictly coarser, and the unit ball of an
infinite-dimensional space is weak-compact only in this coarser
sense (the Banach-Alaoglu theorem, stated, its proof booked to the
research literature).

**Definition (distribution).** A **distribution** is a continuous
linear functional on $\mathcal{C}^{\infty}_c$, the smooth compactly
supported test functions, under the test topology. The
**distributional derivative** is defined by moving the derivative
onto the test function: $\langle D T, \varphi\rangle := -\langle
T, \varphi'\rangle$ (Stage G's integration by parts, spent, with
the boundary terms dying because $\varphi$ vanishes at the
boundary).

**Why distributions exist.** Stage G's Section 4 monster
($|x|$-style corners) is not classically differentiable at $0$;
its distributional derivative is the sign function, perfectly
honest. The derivative operation extends to every continuous
function and beyond, and Section 5's Sobolev spaces are exactly
the functions whose distributional derivatives remain integrable.

:::note[Quick check]

1. Define weak convergence, and give the sine-wave instance.
2. Why is weak convergence strictly coarser than strong in
   $L^2$?
3. Define a distribution as a functional, and the space it acts
   on.
4. Define the distributional derivative, and say which theorem
   moves the derivative onto the test function.
5. Compute the distributional derivative of $|x|$ on $(-1, 1)$.
6. Prove that weak limits are unique.
7. Compute the distributional derivative of a step function that
   jumps from $0$ to $1$ at $t = 1/2$.
8. Explain why distributions make every continuous function
   infinitely differentiable in the distributional sense.

<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** Against every continuous linear functional; the sine waves
against every $L^2$ test function die to $0$. **2.** The waves are
pairwise orthogonal, so $\|e_k - e_j\| = 1$: no strong convergence,
while weak convergence to $0$ holds. **3.** A continuous linear
functional on the smooth compactly supported test functions.
**4.** $\langle DT, \varphi\rangle = -\langle T,
\varphi'\rangle$; Stage G's integration by parts. **5.** Its
distributional derivative is the sign function: integrate by parts
away from $0$ and the corner contributes nothing once tests
vanish at the boundary.
**6.** If $x_k \rightharpoonup x$ and $\rightharpoonup y$, every functional $\ell$ has $\ell(x) = \lim \ell(x_k) = \ell(y)$; the functionals separate points (Hahn-Banach), so $x = y$. **7.** $\langle DT, \varphi \rangle = -\int \mathbf{1}_{[1/2, \infty)} \varphi' = \varphi(1/2)$ by the fundamental theorem of calculus with the boundary split: the derivative is the delta mass at the jump. **8.** The derivative definition $\langle DT, \varphi \rangle = -\langle T, \varphi' \rangle$ applies to any functional on test functions, and $\varphi'$ is again a test function: differentiating never leaves the class, so the chain can continue forever.

</div>
</details>

:::

## 5. Sobolev Spaces: Weak Derivatives as a Home

**Definition.** For $k \geq 0$, the **Sobolev space** $H^k$ is the
closure, in the norm $\|f\|_{H^k}^2 := \sum_{j \leq k}
\|D^j f\|_{L^2}^2$ (derivatives distributional), of the smooth
functions: the functions whose weak derivatives up to order $k$
live in $L^2$.

**Theorem (completeness).** $H^k$ is a Hilbert space. The proof is
Stage I's Riesz-Fischer run one more time with derivative tails
included (Problem 2).

**Why the space matters: the instance.** The equation $-u'' = f$ on
$[0, 1]$ with boundary conditions has no classical solution for
arbitrary $f \in L^2$: the second derivative of a continuous
function need not exist. But in the weak sense, a unique $u \in
H^1_0$ always exists, by Stage M2's projection geometry applied to
the operator's energy form (the Lax-Milgram theorem, stated: the
same projection argument with a coercive form, its proof booked as
Problem 4). The Sobolev space is the *home* the equation's
solutions actually live in.

:::note[Quick check]

1. Define $H^k$ and its norm.
2. Why are smooth functions dense in $H^k$ by definition?
3. Give the instance of a function in $H^1$ but not $H^2$ near
   $0$.
4. State Lax-Milgram's role for $-u'' = f$.
5. What does "weak" buy that classical derivatives cannot?
6. Prove that constants lie in every $H^k$.
7. Compute the $H^1$ norm of $f(t) = t$ on $[0, 1]$.
8. State why the weak solution of $-u'' = f$ with $u(0) = u(1) =
   0$ automatically satisfies the boundary conditions.

<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** Functions with distributional derivatives up to order $k$
in $L^2$, normed by the sum of squared derivative norms. **2.**
$H^k$ is defined as their closure under the norm. **3.** $|x|$ on
$(-1, 1)$: one weak derivative (sign function) in $L^2$, second
distributional derivative the delta mass, not a function: in
$H^1$, not $H^2$. **4.** Lax-Milgram guarantees the unique weak
solution from coercivity of the energy form. **5.** Solutions
exist in the weak class for data where classical solutions do not
exist at all, and regularity theory (Section 6) then improves
them.
**6.** All distributional derivatives of a constant vanish, and the constant is in $L^2$ on bounded domains: every $\|D^j\|$ term beyond order $0$ is zero. **7.** $\|f\|^2 = \int_0^1 t^2 = 1/3$ and $\|f'\|^2 = \int_0^1 1 = 1$, so $\|f\|_{H^1}^2 = 4/3$. **8.** The space $H^1_0$ is the closure of smooth functions vanishing at the endpoints, so its members inherit the boundary values in the trace sense: the solution space carries the conditions.

</div>
</details>

:::

## 6. The Laplacian, Fredholm, and Regularity

**Definition.** The **Laplacian** $\Delta u := \sum_i
\partial^2 u / \partial x_i^2$; the **Poisson equation** $-\Delta u
= f$ is the master equation of potential theory, heat flow at
steady state, and electrostatics.

**Theorem (Fredholm alternative; stated with engine).** For the
Laplacian with Dirichlet boundary conditions on a bounded domain,
either $-\Delta u = f$ has a unique solution for the given $f$, or
the homogeneous equation has a nonzero solution; and the equation
is solvable exactly when $f$ is orthogonal to the homogeneous
solutions. The engine: the inverse of $-\Delta$ (built by Stage
I's integration against the Green's function) is compact and
self-adjoint on $L^2$ (H4's equicontinuity again), so Section 3's
spectral theorem applies, and the alternative is its eigenbasis
bookkeeping.

**Theorem (elliptic regularity; declared with engine).** Weak
solutions of $-\Delta u = f$ are automatically smoother than their
data: if $f \in L^2$, then $u \in H^2$; if $f$ is smooth, so is
$u$. The engine is the Laplacian's translation structure: the
difference quotient technique (Stage G Section 5's method, run
inside the equation) promotes weak solutions one derivative at a
time. The full chase is the research literature's gateway chapter;
the course states the theorem and spends its consequence: the weak
solution from Section 5's Lax-Milgram is, in truth, classical
where the data allows.

:::note[Quick check]

1. Define the Laplacian and the Poisson equation.
2. State the Fredholm alternative for $-\Delta u = f$.
3. Which two theorems of this page make the inverse compact?
4. What does elliptic regularity conclude about Section 5's weak
   solutions?
5. Why is the Laplacian's theory the model for all elliptic
   equations?
6. Compute $\Delta f$ for $f(x, y) := x^2 + y^2$, and decide
   whether it is harmonic ($\Delta f = 0$).
7. State the Fredholm alternative's dichotomy for the equation
   $\lambda u - \Delta u = f$ in terms of $\lambda$'s position
   among the eigenvalues.
8. Why does regularity need the equation, not just the solution's
   smoothness assumptions?

<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** $\Delta u = \sum_i u_{x_i x_i}$; Poisson: $-\Delta u = f$
with boundary conditions. **2.** Unique solvability, or solvability
exactly for $f$ orthogonal to the homogeneous solutions: the
alternative. **3.** The Green's-function inverse is compact
(H4's equicontinuity on the integral operator) and self-adjoint
(symmetry of the Green's function), so the spectral theorem runs.
**4.** They are smoother than their data: $L^2$ data gives $H^2$
solutions, smooth data gives smooth solutions. **5.** Its weak
theory is the template: every uniformly elliptic operator repeats
the same projection-plus-regularity architecture.
**6.** $\Delta f = 2 + 2 = 4$: not harmonic; it is the model of a Poisson source. **7.** If $\lambda$ is not a Dirichlet eigenvalue, unique solvability for every $f$; if $\lambda$ equals one, solvability exactly for $f$ orthogonal to that eigenspace: the alternative is the spectral bookkeeping. **8.** The bootstrap derives smoothness from the equation: weak solutions satisfy the differentiated equations, and each differentiation round promotes the solution a stage, using the data's smoothness as fuel.

</div>
</details>

:::

## 7. Unbounded Operators and Stone's Theorem

**The instance that breaks the rules.** The differentiation
operator $D := d/dt$ on $L^2[0, 1]$ is not bounded: the functions
$f_k(t) := \sin(2\pi k t)$ have $\|f_k\| = 1$ but $\|D f_k\| =
2\pi k \to \infty$. Stage F's world required boundedness for
continuity; the derivative is the most important operator in
analysis and it is not continuous. The repair: unbounded operators
come with **domains** (the subspace where they are defined), and
their theory is the geometry of these domains: symmetry
($\langle Dx, y\rangle = \langle x, Dy\rangle$ on the common
domain), self-adjointness (the domains of $D$ and its adjoint
agree exactly), and the spectral theorem in its hardest and most
general form.

**Theorem (spectral theorem, general form; stated).** Every
self-adjoint operator admits a projection-valued measure $E$ with
$A = \int \lambda \, dE(\lambda)$: Stage M3's distributions
promoted to operator-valued measures, and the ordinary spectral
theorem recovered when the measure is purely atomic. The proof is
the summit's last ascent; the course states it with the research
route named (via Cayley transforms to bounded operators, where
Section 3's theorem applies).

**Theorem (Stone's theorem; stated).** The strongly continuous
one-parameter unitary groups $U_t$ (Stage G's exponentials made
operator-valued) are exactly the maps $U_t = e^{itA}$ for a
self-adjoint $A$, its infinitesimal generator. The proof engine is
Stage G's ODE theory run on the Hilbert-space level, with the
domain bookkeeping that unboundedness demands. This theorem is the
mathematical form of quantum mechanics' time evolution: states
evolve by a unitary group, energy is its self-adjoint generator.

:::note[Quick check]

1. Compute $\|D f_k\|$ for the sine waves, and conclude about
   boundedness.
2. What extra structure must an unbounded operator carry that a
   bounded one does not?
3. Define self-adjointness for unbounded operators.
4. State Stone's theorem, and name the physics it underwrites.
5. Which Stage G construction generalises to the operator-valued
   setting?
6. Compute the domain question for $D = d/dt$ on $L^2[0, 1]$:
   which functions lie in it?
7. State why self-adjointness is stronger than symmetry for
   unbounded operators.
8. Give the generator reading of the translation group: for $U_t f
   (t) := f(t + s)$-style shifts on $L^2(\mathbb{R})$, what is the
   infinitesimal generator?

<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** $2\pi k$ on unit-norm functions: unbounded; the derivative
is not continuous on $L^2$. **2.** A domain: the subspace where
the operator is defined, which is proper. **3.** Symmetry on the
common domain plus the domains of $D$ and $D^*$ coinciding.
**4.** Continuous unitary groups are exactly $e^{itA}$ with $A$
self-adjoint; quantum time evolution. **5.** The exponential:
Stage G's power series promoted to operators on the domain.
**6.** Exactly the absolutely continuous functions with derivative in $L^2$: the domain is a proper dense subspace, not all of $L^2$. **7.** Symmetry asks $\langle Dx, y \rangle = \langle x, Dy \rangle$ where both sides are defined; self-adjointness additionally demands the domains of $D$ and $D^*$ coincide: the operator cannot be extended further. **8.** The generator is $d/dt$ with its natural domain: $U_s = e^{isD}$, and Stone's theorem certifies $D$ self-adjoint because the shifts are unitary for every real $s$.

</div>
</details>

:::

## Stage Gate

:::caution[Pass mark: four of five]
Before Stage N, answer these five without notes. A failed gate names
the section to reread (1: Section 1; 2: Section 2; 3: Section 3; 4:
Sections 4 and 5; 5: Sections 6 and 7).

1. State the four pillars, and prove uniform boundedness from
   Baire.
2. State the Riesz representation theorem for Hilbert spaces and
   the projection theorem.
3. State the spectral theorem for compact self-adjoint operators
   with its three spectral claims.
4. Define weak convergence and distributions, and compute the
   distributional derivative of $|x|$.
5. State the Fredholm alternative and Stone's theorem.

<details class="wn-spoiler">
<summary>Gate answers</summary>
<div class="wn-spoiler-body">

**1.** Hahn-Banach, uniform boundedness, open mapping, closed
graph; $C_n := \{$all operators bounded by $n$ at $x\}$ covers $X$
by pointwise boundedness, Baire gives interior, scaling promotes it
to a uniform operator bound. **2.** $(L^2)^* = L^2$ via $\ell(x) =
\langle x, y\rangle$; every $x$ splits into a closed-subspace part
and an orthogonal part. **3.** Compact self-adjoint operators have
an orthonormal eigenbasis, real nonzero eigenvalues of finite
multiplicity, accumulating only at $0$. **4.** Against every
continuous linear functional; distributions act on smooth
compactly supported tests; $(|x|)' = \mathrm{sign}$
distributionally. **5.** Unique solvability or orthogonality to
homogeneous solutions; continuous unitary groups are $e^{itA}$
with $A$ self-adjoint.

</div>
</details>

:::

## Problems

**Problems.** The quick checks tested recall. These chain several
results and require full written arguments.

1. Prove that the sup-norm unit ball of $\mathcal{C}[0, 1]$ is not
   compact, by the spike construction: functions that are $0$
   except for a triangle of height $1$ at a moving point.
   *(Hint: pairwise distances are $1$; no subsequence is Cauchy;
   Arzelà-Ascoli fails because the family is not equicontinuous.)*
2. Prove that a bounded operator with a bounded inverse maps
   open sets to open sets, and reconcile with the open mapping
   theorem: what does the theorem add when the inverse's
   boundedness is not known?
   *(Hint: boundedness of $T^{-1}$ is exactly openness; the open
   mapping theorem is the surjectivity result that guarantees such
   an inverse exists and is bounded.)*
3. Prove that eigenvectors of a self-adjoint operator for distinct
   eigenvalues are orthogonal, and that all eigenvalues are real,
   completing the steps the spectral theorem's proof sketches.
   *(Hint: the inner-product computation on both sides of $Tx =
   \lambda x$, conjugating the second factor.)*
4. Prove that the delta "function" is not a distribution induced by
   any locally integrable function: no $f \in L^1$ satisfies
   $\int f \varphi = \varphi(0)$ for all test functions.
   *(Hint: choose test functions $\varphi_n$ shrinking to $0$ off
   smaller and smaller neighbourhoods of $0$ with $\varphi_n(0) =
   1$; then $\int f \varphi_n \to 0$ by dominated convergence while
   the right side stays $1$.)*
5. Assemble the Lax-Milgram theorem for the special case of
   $-u'' = f$ on $[0, 1]$: define the bilinear form $a(u, v) :=
   \int u' v'$ on $H^1_0$, prove coercivity $a(u, u) \geq \|u\|_{L^2}^2$
   (Stage B's Poincaré-style inequality $\|u\|_{L^2} \leq \|u'\|_{L^2}$
   for functions vanishing at an endpoint, via Stage G's
   fundamental theorem), and conclude the unique weak solution.
   *(Hint: Riesz representation applied to $v \mapsto \int f v$
   on the Hilbert space $H^1_0$ with the derivative inner product
   hands over the solution; the inequality comes from writing $u(t)
   = \int_0^t u'$ and Cauchy-Schwarz.)*

## Where to Go Next

The summit is reached: the four pillars, the spectral theorem, the
weak machinery, and the equation-solving architecture all stand on
the foundations the course built from logic upward. **Stage N
(Topology and geometry at research level)** is queued; its home is
the [Course Map](/17-core-course/): the fundamental group, homology,
de Rham cohomology closing Stage J's Stokes arc, fibre bundles, and
Riemannian geometry with Gauss-Bonnet.

**Next: the [Course Map](/17-core-course/), and Stage N beyond it.**
