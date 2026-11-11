---
date: 2026-11-12T00:00:00+00:00
title: "Stage I: Measure"
description: "The machinery of size: sigma-algebras built from the question of which sets can be measured, the Lebesgue integral via Caratheodory's outer measure with the Dirichlet function as the killer instance, the convergence ladder, L^p spaces and their completeness, Fubini-Tonelli, Radon-Nikodym and the birth of probability, Fourier series, and the laws of large numbers with the central limit theorem declared."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "17 Core Course", "url": "https://mathematics.wyattau.com/17-core-course"}, {"name": "Stage I: Measure", "url": "https://mathematics.wyattau.com/17-core-course/stage-i-measure"}]
}
</script>

**The Defect.** The Riemann integral (G8) integrates continuous
functions well, and that is where its empire ends. Ask it to
integrate the function that is $1$ on the rationals of $[0, 1]$ and
$0$ on the irrationals, and it refuses: every interval, however
small, contains both kinds of point, so no lower sum climbs above
zero and no upper sum drops below one. Yet this function is as
simple as functions come, and its integral *should* be the measure
of the rationals times one. The naive conjecture: make the sums
finer. The repair is deeper: change what "the size of a set" means.
Riemann chopped the *domain* into intervals; the new theory assigns
a size to sets first (a measure), then integrates by weighing the
function's level sets. The result integrates the unintegrable,
converges under far weaker hypotheses, and becomes the language of
probability.

**The One-Line Reveal.** <span class="wn-spoiler-inline" tabindex="0">Measure
a set's size with a countably additive function on a sigma-algebra
(the Borel sets come free from open sets); build the integral from
simple functions as a supremum; the convergence ladder (almost
everywhere, in measure, in L^p) replaces pointwise bookkeeping,
Fubini says double integrals commute, Radon-Nikodym makes densities
and therefore probability, and Fourier plus the limit laws close the
stage.</span>

*The blur is deliberate: form your own reading of the page first, then
click it.*

**Scope.** Consumes Stage H (completeness, Baire, compactness) and
Stage G (the Riemann integral it replaces, uniform convergence). The
constructive centrepiece is Carathéodory's outer-measure argument
(Section 2), proved in full; the monotone and dominated convergence
theorems are proved via Fatou's lemma; the deep structure theorems
(Riesz-Fischer duality, Fubini's construction, Radon-Nikodym, the
central limit theorem) are stated with engines named and payees
booked at Stage M and Stage K. Formal witnesses pause: measures are
far past core Lean.

## 1. Sigma-Algebras: the Sets Worth Measuring

**Ponder 1 (invent the measurable family).** You want a function
$\mu$ assigning a "size" to subsets of $[0, 1]$: $\mu([0, 1]) = 1$,
$\mu(\emptyset) = 0$, intervals get their length. Which operations
on measurable sets must keep measurable sets measurable, if a
counting argument on disjoint pieces is to work? Attempt the list
before reading the definition.

<details class="wn-spoiler">
<summary>Compare your construction</summary>
<div class="wn-spoiler-body">

Counting arguments need: the union of *countably many* measurable
disjoint sets to be measurable (so its measure can be the sum), the
complement to be measurable (so "the rest of the space" is a set),
and therefore countable intersections too (De Morgan, Stage A's
laws). The family stable under complements and countable unions is
a **sigma-algebra**: contains $\emptyset$, closed under complements
and countable unions. Note the countable, not merely finite: the
whole point is to measure limits of constructions, and finite
stability would strand every infinite operation.

</div>
</details>

**Definition (sigma-algebra, measure).** A **sigma-algebra** on $X$
is a family $\Sigma \subseteq \mathcal{P}(X)$ containing $X$, closed
under complements and countable unions. A **measure** is $\mu:
\Sigma \to [0, \infty]$ with $\mu(\emptyset) = 0$ and countable
additivity: for pairwise disjoint $A_k$, $\mu(\bigcup_k A_k) =
\sum_k \mu(A_k)$.

**Definition (Borel sets, Lebesgue measure).** The **Borel
sigma-algebra** on $\mathbb{R}^n$ is the smallest sigma-algebra
containing the open sets. **Lebesgue measure** $\lambda$ assigns
intervals their length; its existence on all Borel sets is Section
2's theorem, the constructive centrepiece of this stage.

**The killer instance, resolved early.** The Dirichlet function
$D = \mathbf{1}_{\mathbb{Q} \cap [0, 1]}$ is Lebesgue integrable
the moment the rationals are measurable with measure zero
(countable set, countably many singletons, each of measure zero:
the union has measure zero by countable additivity), and its
integral is $1 \cdot 0 = 0$. Riemann's refusal was a statement
about Riemann, not about the function.

:::note[Quick check]

1. State the sigma-algebra axioms, and where countable additivity
   of a measure gets used on them.
2. Why is the power set of $X$ a sigma-algebra, and why is it not
   the interesting one on $\mathbb{R}$?
3. What is the Borel sigma-algebra, and from which starting family?
4. Compute the measure of $\mathbb{Q} \cap [0, 1]$ and of the
   irrationals in $[0, 1]$, once Lebesgue measure exists.
5. Why does the Dirichlet function integrate to zero?
6. Prove that the intersection of two sigma-algebras on $X$ is
   a sigma-algebra.
7. Give a measure on the power set of $\{a, b, c\}$ and compute
   its total mass.
8. Prove that countable additivity implies finite additivity.

<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** Contains the whole space; closed under complements; closed
under countable unions. Countable additivity turns a union of
disjoint measurable pieces into a sum of sizes, which is how every
computation below proceeds. **2.** It satisfies the axioms by construction; on $\mathbb{R}$ it is too large: the classical
Vitali-style constructions produce nonmeasurable sets, and the
Borel sigma-algebra is the workable core. **3.** The smallest
sigma-algebra containing the opens: intersections and complements
of opens included, built as the closure under the sigma-operations.
**4.** Zero and one: countably many singletons sum to zero, and
the complement of a measure-zero set inside $[0, 1]$ carries the
full measure one. **5.** It is the indicator of a measure-zero
set; the integral weighs level sets by their measure.
**6.** $X$ is in both; a complement in the intersection lies in each, hence in the intersection; countable unions likewise: each sigma-algebra contains the union, so their intersection does. **7.** $\mu(A) := |A|$ (counting measure): total mass $3$. **8.** Pad a finite disjoint family with copies of $\emptyset$ (measure zero) to make it countable; the countable sum of zeros plus the real terms equals the finite sum.

</div>
</details>

:::

## 2. Outer Measure and Carathéodory: the Constructive Core

**Ponder (attempt the construction).** Invent the size of a strange
set $A \subseteq \mathbb{R}$: you may cover it by countably many
intervals and add their lengths. One cover overestimates; what
should the set's size be, given infinitely many covers? Then attempt
the harder half: your construction assigns sizes to *all* sets, but
countable additivity fails for some. What property must a set have
for the construction to behave?

<details class="wn-spoiler">
<summary>The construction and the test</summary>
<div class="wn-spoiler-body">

The size is the infimum over all covers:
$\lambda^*(A) := \inf \{\sum_k \ell(I_k) : A \subseteq
\bigcup_k I_k\}$, the **outer measure**. It is defined everywhere
and subadditive ($\lambda^*(A \cup B) \leq \lambda^*(A) +
\lambda^*(B)$), but not additive on all sets. Carathéodory's test:
call $A$ **measurable** when for *every* test set $E$, $\lambda^*(E)
= \lambda^*(E \cap A) + \lambda^*(E \setminus A)$: cutting any set
by $A$ never creates or destroys size. The measurable sets form a
sigma-algebra, and outer measure restricted to them is a genuine
countably additive measure. The test is the definition's entire
content: measurability is not a property you see, it is the property
that makes the arithmetic work.

</div>
</details>

**Theorem (Carathéodory).** The measurable sets form a sigma-algebra
containing every open set, and $\lambda^*$ restricted to them is
countably additive: this is Lebesgue measure.

*Proof shape.* Sigma-closure is two complements-and-unions chases
from the test's definition (Problem 1 runs them). Intervals are
measurable by direct computation, so all opens (countable unions of
intervals) are measurable. Countable additivity is the deep half:
for disjoint measurable $A_k$ and any $E$, the test applied in
sequence telescopes $\lambda^*(E) \geq \sum_k \lambda^*(E \cap
A_k) + \lambda^*(E \setminus \bigcup A_k)$, and applying the
inequality with $E := \bigcup A_k$ and subadditivity the other way
closes equality. $\blacksquare$

*In words:* outer measure prices every set by the cheapest interval
cover; measurability is the audit that the price is honest under
cutting; Carathéodory says the audited sets are closed under
everything you need, and the audit-free price is a real measure.
The Borel sets pass the audit, and the intervals price honestly.

:::note[Quick check]

1. Define outer measure, and compute $\lambda^*$ of a single point
   and of $\mathbb{Q} \cap [0, 1]$.
2. State Carathéodory's measurable-set test.
3. Why do opens pass the audit?
4. Name the two inequalities whose combination gives countable
   additivity.
5. What does "the audit-free price is a real measure" say in
   symbols?
6. Compute $\lambda^*$ of $[0, 1]$ by covers, and of a two-point
   set.
7. Prove outer measure is monotone: $A \subseteq B$ implies
   $\lambda^*(A) \leq \lambda^*(B)$.
8. Verify the interval $(0, 1)$ passes Carathéodory's test for the
   test set $E := [0, 2]$.

<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** The infimum of total interval length over countable covers;
a point is covered by intervals of arbitrary small length
($\lambda^* = 0$), and so is the rationals in $[0, 1]$ (countably
many points). **2.** For every $E$:
$\lambda^*(E) = \lambda^*(E \cap A) + \lambda^*(E \setminus A)$.
**3.** Intervals pass by direct computation, and the measurable
sets are closed under countable unions, which the audit's structure
provides. **4.** Superadditivity from the telescoped test, and
subadditivity of outer measure. **5.** $\lambda := \lambda^*|_\Sigma$
satisfies the measure axioms on the sigma-algebra of audited sets.
**6.** $[0, 1]$ is covered by itself at length $1$ and cannot be covered for less (compactness of honest covers), so $\lambda^* = 1$; a two-point set is covered by intervals of total length under any $\varepsilon$, so $\lambda^* = 0$. **7.** Every cover of $B$ is a cover of $A$, so $A$'s infimum runs over a larger family: $\lambda^*(A) \leq \lambda^*(B)$. **8.** $\lambda^*(E) = 2$; $E \cap (0, 1) = (0, 1)$ has outer measure $1$ and $E \setminus (0, 1) = \{0\} \cup [1, 2]$ has outer measure $1$; $1 + 1 = 2$: the test holds.

</div>
</details>

:::

## 3. The Integral, and the Convergence Ladder

**Definition (integral).** A **simple function** is a finite linear
combination of indicators of measurable sets. For simple $s \geq 0$,
$\int s := \sum_k a_k \mu(A_k)$. For measurable $f \geq 0$:
$\int f := \sup \{\int s : 0 \leq s \leq f, s \text{ simple}\}$,
with general $f$ split into positive and negative parts.

**Theorem (monotone convergence).** For $0 \leq f_1 \leq f_2 \leq
\cdots$ measurable: $\int \lim f_k = \lim \int f_k$ (both sides may
be infinite).

*Proof sketch.* Monotonicity gives $\lim \int f_k \leq \int \lim
f_k$; the reverse is the content: any simple $s \leq \lim f_k$
forced below level $c$ is eventually below $f_k$ on a large-measure
piece, and the tail argument closes the gap (Problem 2 finishes
it). $\blacksquare$

**The killer instance, computed.** $\int D = \sup \{\int s : s \leq
D\}$; the only simple functions below $D$ vanish off a subset of
the rationals, a measure-zero set, so every $\int s = 0$: the
supremum is $0$, as promised.

**Definition (the convergence ladder).** $f_k \to f$: **almost
everywhere** (a.e.) when off a measure-zero set; **in measure**
when $\mu(|f_k - f| > \varepsilon) \to 0$; **in $L^1$** when
$\int |f_k - f| \to 0$.

**Theorem (dominated convergence).** If $f_k \to f$ a.e. and
$|f_k| \leq g$ with $\int g < \infty$, then $\int |f_k - f| \to 0$.

*Proof shape.* Fatou's lemma ($\int \liminf \leq \liminf \int$,
proved from monotone convergence applied to tails) applied to $g -
f_k$ and $g + f_k$ squeezes both sides; the domination is what
makes the tails integrable. $\blacksquare$

**The ladder's traffic rules.** Uniform implies a.e. and in measure;
a.e. plus domination implies $L^1$ implies in measure; in measure
has a subsequence converging a.e. (the Riesz thread, Problem 3).
Counterexamples flow the other way: $t^k$ converges a.e. but not
uniformly and not in $L^1$ (each $\int |t^k - \mathbf{1}_{\{1\}}|$
stays $1 - 1/(k+1)$), the ladder's standing specimen.

:::note[Quick check]

1. Define the integral of a simple function, and of a general
   nonnegative one.
2. State monotone convergence, and what theorem it generalises from
   Stage G.
3. Compute $\int D$ and say which inequality made it possible.
4. Order the ladder's modes by implication, and give the standing
   counterexample.
5. State dominated convergence, and what lemma proves it.
6. Compute $\int \mathbf{1}_{\text{irrationals}}$ on $[0, 1]$.
7. Prove the integral is monotone: $f \leq g$ implies $\int f
   \leq \int g$.
8. Give a sequence converging in measure but not almost everywhere,
   the running-boxes construction.

<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** $\int (\sum a_k \mathbf{1}_{A_k}) = \sum a_k \mu(A_k)$;
then the supremum over simple functions below. **2.** $\int \lim
f_k = \lim \int f_k$ for increasing nonnegative sequences; it
generalises Stage G's infinite sums as suprema of partial sums.
**3.** Zero, by the supremum over simple functions below the
indicator of a measure-zero set. **4.** Uniform implies the rest;
a.e. plus domination implies $L^1$ implies in measure; in measure
has an a.e.-convergent subsequence. Specimen: $t^k$, a.e. yes,
uniform and $L^1$ no. **5.** A.e. convergence plus an integrable
dominator gives $L^1$ convergence; Fatou's lemma proves it.
**6.** The irrationals' complement has measure zero, so the indicator equals $1$ almost everywhere and its integral is $1$ (every simple function below it can be raised on a full-measure piece). **7.** Every simple $s \leq f$ satisfies $s \leq g$, so the supremum defining $\int f$ is taken over a subfamily of the one defining $\int g$. **8.** Slide a box of width $1/n$ across $[0, 1]$ repeatedly: $\mu(\text{box at stage } k) \to 0$ gives convergence in measure, while every point is covered infinitely often, so pointwise limits fail everywhere.

</div>
</details>

:::

## 4. L^p Spaces: Norms and Completeness

**Definition.** For $1 \leq p < \infty$: $L^p := $ (measurable $f$
with $\int |f|^p < \infty$) modulo a.e.-equality, with
$\|f\|_p := (\int |f|^p)^{1/p}$; $L^\infty$ uses the essential
supremum.

**Theorem (Hölder, Minkowski).** For $1/p + 1/q = 1$: $\int |fg|
\leq \|f\|_p \|g\|_q$; and $\|f + g\|_p \leq \|f\|_p + \|g\|_p$:
$L^p$ is a normed space.

*Proof shape.* Hölder from Young's inequality $ab \leq a^p/p +
b^q/q$ (one-variable calculus, Stage G's derivative minimisation);
Minkowski from Hölder applied to the split $(|f| + |g|)^p \leq
|f|(|f| + |g|)^{p-1} + |g|(|f| + |g|)^{p-1}$. $\blacksquare$

**Theorem (Riesz-Fischer).** $L^p$ is complete: every Cauchy
sequence in $\| \cdot \|_p$ converges in $L^p$.

*Proof shape.* From a Cauchy sequence extract a rapidly Cauchy
subsequence ($\|f_{k+1} - f_k\|_p < 2^{-k}$); the monotone
convergence theorem shows the series $\sum (f_{k+1} - f_k)$
converges absolutely a.e., its sum is the limit, and domination by
the geometric tail puts the whole sequence in $L^p$; completeness
of the real line at each point does the pointwise assembly, the
same shape as 2B's function-space completeness with integrals in
place of suprema. $\blacksquare$

**The duality statement, declared.** For $1 < p < \infty$, every
continuous linear functional on $L^p$ is integration against a
unique $L^q$ function: $(L^p)^* \cong L^q$. The proof needs the
radon-nikodym theorem of Section 5 and uniform convexity tools; the
course declares it with Stage M as payee, where it becomes the
first of the four pillars.

:::note[Quick check]

1. Why identify functions equal almost everywhere?
2. State Hölder with the conjugate exponent.
3. Derive Minkowski from Hölder in one line.
4. What does rapidly Cauchy mean, and why extract it?
5. State the duality theorem and its payee.
6. Compute $\|\mathbf{1}_{[0, 1]}\|_p$ for every $p$.
7. Prove $\|f\|_1 = 0$ implies $f = 0$ a.e.
8. State the $q = \infty$ reading of Hölder.

<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** The integral cannot see measure-zero differences
($\int |f - g| = 0$), so without the identification $\| \cdot \|_p$
is a seminorm and Cauchy sequences converge to the wrong object.
**2.** $\int |fg| \leq \|f\|_p \|g\|_q$ when $1/p + 1/q = 1$.
**3.** $\|f + g\|_p^p \leq \|f\|_p \|f+g\|_p^{p-1} +
\|g\|_p\|f+g\|_p^{p-1}$; divide by $\|f+g\|_p^{p-1}$. **4.** A
subsequence with $\sum_k \|f_{k+1} - f_k\|_p < \infty$; extracted
because Cauchy alone does not give a summable tail, and summability
is what the monotone convergence step consumes. **5.** $(L^p)^*
\cong L^q$ for $1 < p < \infty$; Stage M.
**6.** $(\int \mathbf{1}_{[0,1]}^p)^{1/p} = 1^{1/p} = 1$ for every finite $p$: the indicator's norm is independent of $p$. **7.** $\int |f| = 0$ with $|f| \geq 0$ forces $|f| = 0$ off a null set: otherwise the set $\{|f| > 1/n\}$ would have positive measure for some $n$, contributing a positive integral. **8.** $|\int f g| \leq \|f\|_1 \|g\|_\infty$: $|g|$ is bounded by its essential supremum almost everywhere, so it factors out of the integral.

</div>
</details>

:::

## 5. Product Measures, Fubini-Tonelli, and Change of Variables

**Definition (product measure).** For measures $\mu$ on $X$ and $\nu$
on $Y$, the product $\mu \otimes \nu$ is the measure on $X \times Y$
with $(\mu \otimes \nu)(A \times B) = \mu(A)\nu(B)$, extended to
the product sigma-algebra.

**Theorem (Tonelli, Fubini).** For nonnegative measurable $f$:
$\int_X \int_Y f = \int_Y \int_X f = \int_{X \times Y} f$ (Tonelli,
no hypotheses beyond measurability). For integrable $f$ (absolute
integrability), the same for signed $f$, and $f$'s slices are
integrable for almost every slice (Fubini).

*Honest scope.* The construction runs through monotone classes and
is Stage M's warm-up; the course states the theorems here, proves
the easy direction (Tonelli for indicators is one line from
product-measure's definition, then linearity), and books the full
construction as Problem 5 with the machinery named. The
**change-of-variables formula** ($\int g(\phi(x))
|\det D\phi(x)|\, dx$ under a diffeomorphism $\phi$) is stated with
Stage G's inverse function theorem as its engine and the full proof
deferred to Stage J, where diffeomorphisms are native.

:::note[Quick check]

1. Define the product measure on rectangles, and name the
   sigma-algebra it lives on.
2. State Tonelli, and why it has no integrability hypothesis.
3. What does Fubini add over Tonelli?
4. Where does absolute integrability enter Fubini's proof route?
5. State the change-of-variables formula and the Stage G theorem it
   stands on.
6. Verify $(\lambda \otimes \lambda)((0, 1) \times (0, 2)) = 2$
   from the rectangle definition.
7. State Tonelli's line for indicators, and prove it in one line.
8. Compute $\int_0^1 \int_0^1 x y \, dy \, dx$ two ways.

<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** $(\mu \otimes \nu)(A \times B) = \mu(A) \nu(B)$ on the
product sigma-algebra, generated by measurable rectangles. **2.**
Nonnegative measurable $f$ may be integrated in either order with
equal results (possibly infinite); infinity is an acceptable
outcome, so no finiteness needed. **3.** The signed case: integrable
$f$ may be reordered and sliced, and slices are integrable almost
everywhere. **4.** Tonelli applied to $|f|$ certifies
$\int |f| < \infty$ first; only then may the signed splittings
commute. **5.** $\int g(\phi(x)) |\det D\phi(x)| dx = \int g(u) du$
under a diffeomorphism; Stage G's inverse function theorem.
**6.** The rectangle has product measure $\lambda((0,1)) \cdot \lambda((0,2)) = 1 \cdot 2 = 2$. **7.** $\int_X \int_Y \mathbf{1}_{A \times B} = \mu(A)\nu(B) = \int_{X \times Y} \mathbf{1}_{A \times B}$: the product-measure definition read as an integral identity, then extended by linearity and monotone convergence. **8.** Inner integral gives $x/2$, outer gives $1/4$; swapping the order gives $y/2$ then $1/4$: equal, as Fubini demands.

</div>
</details>

:::

## 6. Radon-Nikodym and the Birth of Probability

**Definition (probability space).** A **probability space** is a
measure space with total mass $1$; a **random variable** is a
measurable function to $\mathbb{R}$; **expectation** is $\mathbb{E}[X]
:= \int X$.

**Theorem (Radon-Nikodym, stated).** If $\nu \ll \mu$ ($\mu(A) = 0$
implies $\nu(A) = 0$), there is a measurable $f \geq 0$ with $\nu(A)
= \int_A f \, d\mu$ for all $A$: $\nu$ has **density** $f = d\nu/d\mu$
with respect to $\mu$.

*Honest scope.* The proof (a maximal-function argument or the Hilbert-space route) is Stage M's opening move; the course declares
the theorem and spends it. Its spending: a probability measure on
$\mathbb{R}$ with density against Lebesgue measure *is* that density
(think of the bell curve); **conditional expectation** $\mathbb{E}[X
\mid \Sigma']$ is the $L^2$-projection onto the $\Sigma'$-measurable
functions, the geometric fact that probability inherits from Stage
M's Hilbert spaces; and **regular conditional distributions** are
the reason the phrase "given the past" has a theorem behind it.

:::note[Quick check]

1. Define a probability space, random variable, and expectation.
2. State absolute continuity of measures, and the density theorem.
3. Compute the density relating "mass $2$ on $[0, 1]$" to Lebesgue.
4. Define conditional expectation geometrically.
5. Why does probability prefer the Lebesgue theory to Riemann's?
6. Compute $\mathbb{E}[2 \cdot \mathbf{1}_{[0, 1/2]}]$ under
   Lebesgue measure on $[0, 1]$.
7. Show a density integrates to its total mass, and state the
   normalisation a probability density must satisfy.
8. Define variance, and compute it for the fair die.

<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** Total mass one; measurable function to $\mathbb{R}$;
expectation is the integral. **2.** $\nu \ll \mu$: null for $\mu$
implies null for $\nu$; then $\nu = f \mu$ for some $f \geq 0$.
**3.** Density $2 \cdot \mathbf{1}_{[0, 1]}$: mass two times the
indicator. **4.** $\mathbb{E}[X \mid \Sigma']$ is the
$\Sigma'$-measurable function whose integral against every bounded
$\Sigma'$-measurable test equals $X$'s: the $L^2$-projection.
**5.** Limit theorems (Section 7's) need dominated and monotone
convergence over arbitrary measurable events, not interval sums;
Riemann's theory has no bridge to countable operations.
**6.** $\mathbb{E} = \int 2 \cdot \mathbf{1}_{[0, 1/2]} = 2 \cdot (1/2) = 1$. **7.** $\nu(A) = \int_A f$: taking $A$ to be the whole space, $\nu(X) = \int f$; a probability density must satisfy $f \geq 0$ and $\int f = 1$. **8.** $\mathrm{Var}(X) := \mathbb{E}[(X - \mathbb{E}[X])^2]$; for the fair die, $\mathbb{E}[X] = 3.5$ and $\mathrm{Var} = 35/12$.

</div>
</details>

:::

## 7. Fourier Series and the Fourier Transform

**Definition.** For $f$ integrable on $[-\pi, \pi]$:
$\hat{f}(n) := \frac{1}{2\pi} \int f(t) e^{-int} dt$, and the
**Fourier series** is $\sum_n \hat{f}(n) e^{int}$.

**Theorem (L² convergence, stated).** For $f \in L^2$ on the
circle: the Fourier series converges to $f$ in $L^2$, and **Parseval**
holds: $\frac{1}{2\pi}\int |f|^2 = \sum_n |\hat{f}(n)|^2$. The
engine is the density of trigonometric polynomials (the complex
cousin of Stage H's Weierstrass) and the geometry of $L^2$ (Stage
M's Hilbert space). For continuous $f$, pointwise convergence at
every point needs more: **Dirichlet's theorem** gives it for
piecewise-smooth $f$, and du Bois-Reymond's construction shows
continuous $f$ whose series diverges somewhere, which is the honest
boundary of the classical theory.

**The transform.** For $f \in L^1(\mathbb{R})$:
$\hat{f}(\xi) := \int f(t) e^{-i t \xi} dt$. Its inversion,
Plancherel, and the shift-differentiation identities are stated
with Stage M as payee; the single identity worth carrying now:
differentiation becomes multiplication, $\widehat{f'}(\xi) = i\xi
\hat{f}(\xi)$ (one integration by parts, G8 spent), which is why
the transform turns differential equations into algebra.

:::note[Quick check]

1. Define Fourier coefficients and the series.
2. State Parseval, and name the two engines behind it.
3. What does Dirichlet's theorem give, and what does du
   Bois-Reymond forbid?
4. Prove $\widehat{f'}(\xi) = i \xi \hat{f}(\xi)$ by integration by
   parts (state the boundary term's vanishing).
5. Why does the transform turn calculus into algebra?
6. Compute the $n = 0$ Fourier coefficient of any integrable $f$,
   and interpret it.
7. Which functions have all Fourier coefficients except $n = 0$
   equal to zero, and what theorem does the answer lean on?
8. State the shift identity for Fourier coefficients under $t
   \mapsto t + a$.

<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** $\hat{f}(n) = \frac{1}{2\pi} \int f e^{-int}$; the series
$\sum \hat{f}(n) e^{int}$. **2.** $\frac{1}{2\pi} \int |f|^2 =
\sum |\hat{f}(n)|^2$; engines: density of trigonometric polynomials
and $L^2$ geometry. **3.** Pointwise convergence for piecewise
smooth $f$; some continuous $f$ have divergent series somewhere.
**4.** $\int f' e^{-int\xi} = [f e^{-it\xi}]_{-\infty}^{\infty} +
i\xi \int f e^{-it\xi}$: the boundary term vanishes for decaying
$f$, leaving $i\xi \hat{f}(\xi)$. **5.** Derivatives become
multiplications by the frequency variable: differential operators
act on coefficients, not on functions.
**6.** $\hat{f}(0) = \frac{1}{2\pi} \int f$: the average of $f$ over the circle. **7.** The constants: uniqueness of Fourier series says a function whose coefficients all vanish equals zero in $L^2$, so only its average survives. **8.** The coefficients of $t \mapsto f(t + a)$ are $e^{ina} \hat{f}(n)$: a shift multiplies each coefficient by a unit complex number of modulus one.

</div>
</details>

:::

## 8. The Laws of Large Numbers and the Central Limit Theorem

**Ponder (attempt the theorem).** Flip a fair coin $n$ times; the
fraction of heads concentrates near $1/2$ as $n$ grows. Attempt the
proof with the barest tools before reading: what inequality
controls the probability that the fraction strays from $1/2$, given
only the second moment?

<details class="wn-spoiler">
<summary>The Chebyshev route</summary>
<div class="wn-spoiler-body">

Markov's inequality: $P(X \geq a) \leq \mathbb{E}[X]/a$ for
nonnegative $X$ (one line: $\mathbb{E}[X] \geq a \cdot
P(X \geq a)$). Apply to $(X - \mu)^2$ for Chebyshev: $P(|X - \mu|
\geq a) \leq \mathrm{Var}(X)/a^2$. For the $n$-flip frequency
$S_n/n$ with variance $1/(4n)$: $P(|S_n/n - 1/2| \geq a) \leq
1/(4 n a^2) \to 0$. That is the **weak law of large numbers**
proved in three lines, and the entire trick is that independence
made the variance *add*, so the variance of the average dies like
$1/n$.

</div>
</details>

**Theorem (weak law).** For independent identically distributed
$X_k$ with mean $\mu$ and finite variance: the sample mean converges
in measure (in probability) to $\mu$, via Chebyshev exactly as
above.

**Theorem (strong law, stated).** The sample mean converges almost
everywhere to $\mu$. The proof needs the convergence-ladder's full
strength (a Borel-Cantelli lemma from Section 1's sigma-algebra
arithmetic, plus a variance summability trick) and is booked as
Problem 5's guided assembly; nothing beyond this stage is needed,
only care.

**Theorem (central limit theorem, declared).** For independent
identically distributed $X_k$ with mean $\mu$, variance
$\sigma^2$: the rescaled sum $(\sum_k X_k - n\mu)/(\sigma
\sqrt{n})$ converges in distribution to the standard normal. The
engine is the **characteristic function** $\varphi_X(t) :=
\mathbb{E}[e^{itX}]$, whose continuity theorem and Lévy's
continuity method live in Stage K's complex analysis: the
exponential $e^{itX}$ is Stage G's constructed exponential, but its
rigidity theorems are complex. The course declares the theorem with
Stage K booked as payee, the same ledger that Stage E opened for
the fundamental theorem of algebra.

:::note[Quick check]

1. Prove Markov's inequality in one line.
2. Derive Chebyshev from Markov.
3. Prove the weak law for the $n$-flip frequency, with the variance
   computation.
4. Where does independence enter the variance computation?
5. State the central limit theorem and name the payee stage for its
   proof.
6. Apply Chebyshev to bound $P(|X - \mu| \geq 3\sigma)$.
7. Compute the variance of the average of $n$ independent
   variance-$\sigma^2$ variables.
8. State which convergence mode the weak law delivers.

<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** $\mathbb{E}[X] \geq \mathbb{E}[X \cdot \mathbf{1}_{X \geq
a}] \geq a \cdot P(X \geq a)$. **2.** Apply Markov to $(X -
\mu)^2$ at level $a^2$. **3.** $\mathrm{Var}(S_n/n) =
\mathrm{Var}(X_1)/(n)$ for the fair coin ($= 1/(4n)$), so
$P(|S_n/n - 1/2| \geq a) \leq 1/(4na^2) \to 0$: convergence in
probability. **4.** Independence kills the cross terms: $\mathrm{
Var}(\sum X_k) = \sum \mathrm{Var}(X_k)$, which is why averages
tighten. **5.** Rescaled sums converge in distribution to the
standard normal; Stage K pays, via characteristic functions and
Lévy continuity.
**6.** Chebyshev at level $3\sigma$: $P \leq \mathrm{Var}/(9\sigma^2) = 1/9$: about eleven percent, whatever the distribution's shape. **7.** $\mathrm{Var}(\bar{X}_n) = \sigma^2/n$: independence kills cross terms, and the division by $n$ squares. **8.** Convergence in measure, which for probability spaces is called convergence in probability.

</div>
</details>

:::

## Stage Gate

:::caution[Pass mark: four of five]
Before Stage J, answer these five without notes. A failed gate names
the section to reread (1: Section 1; 2: Section 2; 3: Section 3; 4:
Sections 4 and 5; 5: Sections 6 through 8).

1. State the sigma-algebra axioms and the measure axioms, and
   compute the measure of the rationals.
2. State Carathéodory's test and what it delivers.
3. Define the Lebesgue integral via simple functions, and state
   monotone and dominated convergence.
4. State Hölder and the $L^p$ completeness theorem, and Tonelli
   versus Fubini.
5. State Radon-Nikodym, the weak law with its proof engine, and the
   central limit theorem with its payee.

<details class="wn-spoiler">
<summary>Gate answers</summary>
<div class="wn-spoiler-body">

**1.** Whole space, complements, countable unions; null at
$\emptyset$, countably additive on disjoint sets; the rationals
have measure zero (countably many singletons). **2.** $\lambda^*(E)
= \lambda^*(E \cap A) + \lambda^*(E \setminus A)$ for all $E$;
delivers a sigma-algebra of audited sets on which outer measure is
countably additive. **3.** Supremum of simple integrals below;
monotone: $\int \lim = \lim \int$ for increasing nonnegatives;
dominated: a.e. convergence plus integrable dominator gives $L^1$
convergence. **4.** $\int |fg| \leq \|f\|_p\|g\|_q$; $L^p$ is
complete (Riesz-Fischer); Tonelli commutes nonnegative integrals,
Fubini needs absolute integrability. **5.** $\nu \ll \mu$ gives
$\nu = f\mu$; weak law by Chebyshev with variance dying like
$1/n$; CLT: rescaled sums converge to the standard normal, paid at
Stage K.

</div>
</details>

:::

## Problems

**Problems.** The quick checks tested recall. These chain several
results and require full written arguments.

1. Run the sigma-closure chases: prove that the measurable sets are
   closed under complements and countable unions, directly from
   Carathéodory's test.
   *(Hint: for complements, swap the roles of $E \cap A$ and $E
   \setminus A$ in the test; for countable unions, apply the test
   sequentially and telescope, then discard a nonnegative tail.)*
2. Finish the monotone convergence proof: given simple $s \leq
   \lim f_k$ and $c < \int s$, show the sets $E_k := \{f_k \geq (1 - \varepsilon) s\}$ climb to the whole space, and conclude
   $\lim \int f_k \geq (1 - \varepsilon) \int s$.
   *(Hint: if $x \in \lim f_k$'s support has $s(x) > 0$, some $f_k$
   exceeds $(1 - \varepsilon)s(x)$ there; the sets climb, their
   measures converge by continuity from below, itself a monotone
   convergence for indicators.)*
3. Prove the Riesz thread: convergence in measure has a
   subsequence converging almost everywhere.
   *(Hint: choose $k_j$ with $\mu(|f_{k_j} - f| < 2^{-j})$ by the
   contract; the Borel-Cantelli style union bound shows the
   exceptions after $j$ are eventually summable, so off a null set
   the subsequence converges pointwise.)*
4. Prove the boundary term's vanishing in Section 7's
   differentiation identity for $f \in L^1$ with $f'$ integrable
   and $f \to 0$ at infinity, and conclude the transform identity.
   *(Hint: integrate $f'$ against a compactly supported exponential,
   integrate by parts on the compact support where the boundary
   terms are exactly zero, then pass to the limit by dominated
   convergence.)*
5. Assemble the strong law on the variance-summable hypothesis: for
   independent $X_k$ with $\sum_k \mathrm{Var}(X_k)/k^2 <
   \infty$, prove $S_n/n \to \mu$ almost everywhere, via
   Chebyshev on the dyadic blocks and a Borel-Cantelli union.
   *(Hint: apply Chebyshev to the block averages over $n \in
   [2^m, 2^{m+1})$, where the variance bound is summable in $m$;
   Borel-Cantelli turns the summable probabilities into an
   eventually-always event, off a null set.)*

## Where to Go Next

Measure turned size into a theorem and probability into a language.
The course returns to geometry with these tools loaded: **Level 3A:
Smooth Manifolds** (Stage J's opening chapters) glues charts into
spaces where integration over curved worlds finally makes sense, and
Stage J's later chapters spend the change-of-variables formula on
curvature itself.

**Next: [Level 3A: Smooth Manifolds](/17-core-course/3a-manifolds/).**
