---
date: 2026-11-11T00:00:00+00:00
title: "2B: Completeness, Baire, and Metrisation"
description: "Completeness lifted from the line to any space that wants it: Cauchy sequences as the portable test, the Cantor intersection theorem, nowhere dense sets and the Baire category theorem proved by a point the reader builds, the classic corollaries named with their payees, and the metrisability question: which topologies come from a distance."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "17 Core Course", "url": "https://mathematics.wyattau.com/17-core-course"}, {"name": "2B: Completeness, Baire, and Metrisation", "url": "https://mathematics.wyattau.com/17-core-course/2b-completeness-and-metrisation"}]
}
</script>

**The Defect.** Stage G spent completeness in its home territory, the
line: Cauchy sequences converge, so Picard's iterates have a limit
and differential equations have solutions. But Picard's iterates were
not numbers. They were *functions*, living in a space of continuous
functions on an interval, and the proof quietly treated that space as
if it were complete too. The naive conjecture: completeness is a fact
about the real line, inherited by anything built on it. The repair:
completeness is a *property a space may or may not have*, portable to
any space with a distance; the line merely introduced it. Once lifted,
it pays again and again: the Baire category theorem, the engine behind
existence proofs across the functional stages, is completeness spent
at second order.

**The One-Line Reveal.** <span class="wn-spoiler-inline" tabindex="0">A
metric space is complete when its Cauchy sequences converge, the same
contract as Stage G's with points of any kind; complete spaces cannot
be a countable union of nowhere dense sets (Baire), which is how
existence proofs win; and the converse question, which topologies come
from a distance, has the clean three-condition answer called
metrisability.</span>

*The blur is deliberate: form your own reading of the page first, then
click it.*

**Scope.** Consumes Stage G (the Cauchy contract, uniform convergence)
and 2A (open sets, continuity, compactness, connectedness). One
constructive centrepiece: the proof that $\mathcal{C}[0,1]$, the space
of continuous functions under the sup-norm distance, is complete,
which is exactly the licence Section 9 of Stage G borrowed. Baire's
theorem is proved in full; its great corollaries are named, with the
functional stages booked as payees. Metrisation closes the stage as a
question answered with one theorem stated and its proof honestly
declared. No new axioms; no new debts.

## 1. Completeness as a Portable Property

**Ponder 1 (invent the portable test).** Stage G's Cauchy contract was
written for numbers: for every $\varepsilon > 0$ there is $N$ with
$|a_k - a_j| < \varepsilon$ for $k, j \geq N$. The absolute value did
two jobs: it measured *distance between points* and it produced
*numbers* to compare against $\varepsilon$. In a space whose points
are functions, what must replace the absolute value, and which of the
two jobs survives?

<details class="wn-spoiler">
<summary>Compare your construction</summary>
<div class="wn-spoiler-body">

The replacement is a **metric**: a distance $d(x, y) \geq 0$
satisfying $d(x, y) = 0$ exactly when $x = y$, symmetry $d(x, y) =
d(y, x)$, and the triangle inequality $d(x, z) \leq d(x, y) + d(y,
z)$. Only the first job survives: the distance produces a *number*
$d(x, y)$, and the contract compares that number against
$\varepsilon$. In the space of continuous functions on $[0, 1]$, the
natural distance between functions $f, g$ is the sup-norm $d(f, g) :=
\sup_{t} |f(t) - g(t)|$: the largest gap between their graphs. Your
Cauchy contract then reads: functions whose pairwise gaps eventually
stay under every tolerance. Whether they *converge* (to a function in
the space, uniformly) is precisely the completeness question.

</div>
</details>

**Definition (complete metric space).** A metric space $(X, d)$ is
**complete** when every Cauchy sequence of points of $X$ converges to
a point of $X$.

**Theorem (instances).** $\mathbb{R}^n$ with its Euclidean distance is
complete; every closed subset of a complete space is complete in the
inherited distance; and $\mathcal{C}[0, 1]$ with the sup-norm is
complete.

*Proof.* $\mathbb{R}^n$: a Cauchy sequence in $\mathbb{R}^n$ is
Cauchy coordinate by coordinate (each coordinate is dominated by the
full distance), and each coordinate converges in $\mathbb{R}$ by
Stage G; the limit vector is the limit. Closed subset: a Cauchy
sequence in the subset converges in the ambient space (completeness),
and the limit lies in the subset because the subset is closed (2A:
closed sets contain their limit points). $\mathcal{C}[0, 1]$: let
$f_k$ be Cauchy in the sup-norm. For each $t$, $|f_k(t) - f_j(t)|
\leq d(f_k, f_j)$, so the *number* sequences $f_k(t)$ are Cauchy and
converge to some $f(t)$. The Cauchy contract is *uniform in $t$*:
past $N$, $\sup |f_k - f_j| < \varepsilon$; letting $j \to \infty$
gives $\sup |f_k - f| \leq \varepsilon$, so $f_k \to f$ *uniformly*.
Uniform limits of continuous functions are continuous (Stage G
Section 2's exchange theorem, spent at last), so $f \in
\mathcal{C}[0, 1]$. $\blacksquare$

*In words:* the sup-norm's Cauchy contract is exactly uniform
convergence wearing a distance; the exchange theorem that Stage G
flagged as needing uniformity is what keeps the limit inside the
space, and that is the whole proof that the function space is
complete.

**The counterexample instance.** $\mathbb{Q}$ is not complete: the
sequence $1, 1.4, 1.41, 1.414, \ldots$ of decimal truncations of
$\sqrt{2}$ is Cauchy in $\mathbb{Q}$ (each term agrees with the next
to within a decimal place) and converges in $\mathbb{R}$ to a point
Stage C proved is not rational. Incompleteness is not exotic; it is
the normal condition of a space whose points were chosen carelessly.
Completeness says: your space already contains the objects your
Cauchy sequences describe.

:::note[Quick check]

1. State the three metric axioms.
2. State the Cauchy contract for a metric space, and say what the
   metric replaced.
3. Why does a Cauchy sequence in $\mathbb{R}^n$ converge coordinate
   by coordinate?
4. Where does closedness enter the proof that a closed subset of a
   complete space is complete?
5. Recite the sup-norm Cauchy contract for $\mathcal{C}[0, 1]$ in one
   sentence, and name the Stage G theorem that closes the proof.
6. Prove that $d(x, y) = |x - y|$ on $\mathbb{R}$ satisfies the
   triangle inequality.
7. A sequence converges. Prove it is Cauchy, and explain why the
   converse needs completeness.
8. Give the distance on $\mathbb{R}^n$ and verify symmetry.

<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** Nonnegativity with $d = 0$ iff equal; symmetry; the triangle
inequality. **2.** For every $\varepsilon > 0$ there is $N$ with
$d(x_k, x_j) < \varepsilon$ for $k, j \geq N$; the metric replaced
the absolute value's measuring job. **3.** $|a_k^{(i)} - a_j^{(i)}|
\leq d(a_k, a_j)$: each coordinate sequence is Cauchy in
$\mathbb{R}$, hence converges; the vector of limits is the limit.
**4.** Completeness of the ambient space hands over a limit point;
closedness is what guarantees the limit actually lies in the subset.
**5.** For every $\varepsilon$ there is $N$ with $\sup_t |f_k(t) -
f_j(t)| < \varepsilon$ for $k, j \geq N$; Stage G's theorem that
uniform limits of continuous functions are continuous closes it.
**6.** $d(x, z) = |x - z| \leq |x - y| + |y - z| = d(x, y) + d(y, z)$ by the ordinary triangle inequality for absolute value. **7.** Given $\varepsilon$, convergence gives $N$ with $|a_k - L| < \varepsilon/2$ for $k \geq N$; then $|a_k - a_j| \leq |a_k - L| + |L - a_j| < \varepsilon$. The converse is exactly the completeness axiom: Cauchy need not converge in a holed space like $\mathbb{Q}$. **8.** $d(x, y) := \sqrt{\sum_i (x_i - y_i)^2}$; swapping $x$ and $y$ squares the same differences, so $d(x, y) = d(y, x)$.

</div>
</details>

:::

## 2. Nested Intervals: Completeness Doing Visible Work

**Ponder (attempt the intersection).** In $\mathbb{R}$, take closed
intervals $I_1 \supseteq I_2 \supseteq I_3 \supseteq \cdots$, with
lengths tending to $0$: $I_k = [0, 1/k]$. What is $\bigcap_k I_k$?
Now take the same nested family in $\mathbb{Q}$, intervals chosen
around $\sqrt{2}$ with rational endpoints, lengths tending to $0$.
Attempt the intersection there before reading the theorem.

<details class="wn-spoiler">
<summary>The two answers</summary>
<div class="wn-spoiler-body">

In $\mathbb{R}$ the intersection is exactly $\{0\}$: nested closed
bounded intervals with lengths tending to zero have one common point.
In $\mathbb{Q}$ the family around $\sqrt{2}$ has *empty*
intersection: the one point every interval shares is irrational, and
the space does not contain it. Nested closed sets with diameters
tending to zero can miss if the space has holes. Completeness is
precisely the guarantee that they cannot miss: this is the visible,
geometric form of "Cauchy sequences converge".

</div>
</details>

**Theorem (Cantor's intersection theorem).** In a complete metric
space, nested nonempty closed sets $F_1 \supseteq F_2 \supseteq
\cdots$ whose diameters tend to $0$ have intersection exactly one
point.

*Proof.* Choose $x_k \in F_k$. For $j \geq k$: $x_j \in F_j
\subseteq F_k$, so $d(x_k, x_j) \leq \mathrm{diam}(F_k) \to 0$:
$(x_k)$ is Cauchy. Completeness gives $x^* = \lim x_k$; each $F_k$
is closed and contains the tail from $k$ on, so $x^* \in F_k$ for
every $k$. Uniqueness: two common points would be joined by a
distance at most every diameter, hence $0$. $\blacksquare$

:::note[Quick check]

1. Why does $x_j \in F_j \subseteq F_k$ make the sequence Cauchy?
2. Where does completeness enter, and where does closedness?
3. Construct the empty rational intersection explicitly: nested
   rational intervals around $\sqrt{2}$ with diameters tending to
   zero.
4. What does the theorem become in a complete space of functions
   with the sup-norm?
5. Which Stage D construction is this theorem's ancestor?
6. Prove that a Cauchy sequence is bounded, in any metric space.
7. Construct two disjoint closed sets in $\mathbb{R}$ with distance
   zero between them, and reconcile with Cantor's theorem.
8. State the diameter of a set, and compute it for $[0, 1] \times
   \{3\}$ in $\mathbb{R}^2$.

<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** For $j, k \geq K$ both points sit in $F_K$, whose diameter is
a bound on their distance; diameters tend to $0$, so the Cauchy
contract holds. **2.** Completeness produces the limit $x^*$;
closedness of each $F_k$ keeps the limit inside that $F_k$.
**3.** Take $F_k := [\lfloor 10^k \sqrt{2} \rfloor / 10^k,
\lceil 10^k \sqrt{2} \rceil / 10^k]$ intersected with
$\mathbb{Q}$: nested rational intervals, diameters $10^{-k}$,
common point only $\sqrt{2}$, which is not rational. **4.** Nested
closed sets of functions with sup-diameters tending to zero share
exactly one function; convergence is uniform. **5.** Stage D's
nested-interval construction of the reals from rationals; here the
construction is a *theorem* because completeness is assumed.
**6.** The contract with $\varepsilon = 1$ bounds every tail pair; the finite head is bounded by the maximum of finitely many pairwise distances. **7.** $A := \{1, 2, 3, \ldots\}$ and $B := \{n + 1/n : n \geq 2\}$: both closed (discrete), no shared points, yet $d(n, n + 1/n) = 1/n \to 0$. No conflict: Cantor needs *nested* sets whose diameters vanish, not nearby disjoint ones. **8.** $\mathrm{diam}(S) := \sup_{x, y \in S} d(x, y)$; for $[0, 1] \times \{3\}$ it is $1$ (the second coordinate never varies).

</div>
</details>

:::

## 3. Nowhere Dense Sets and the Baire Category Theorem

**Ponder (attempt the escape).** In $\mathbb{R}$, the integers are
scattered: every interval contains a subinterval avoiding them
entirely. The rationals are the opposite: every interval contains a
rational. Now attempt the countable version: given countably many
scattered closed sets (say, the integers, then twice the integers,
then three times them, and so on), can you build an interval
avoiding *all of them at once*? Describe your construction step by
step before reading the theorem.

<details class="wn-spoiler">
<summary>The escape construction</summary>
<div class="wn-spoiler-body">

Step by step: start with a closed interval $\overline{B}_1$. The
first scattered set does not fill it, so choose a smaller closed
interval $\overline{B}_2 \subseteq \overline{B}_1$ avoiding set one.
The second scattered set does not fill $\overline{B}_2$, so choose
$\overline{B}_3 \subseteq \overline{B}_2$ avoiding set two. Repeat
forever; the nested intersection (Section 2's theorem, which needs
completeness) delivers a point lying in every $\overline{B}_k$,
hence avoiding every one of the countably many scattered sets. The
construction is the proof; the only input is that the intersection
cannot miss, which is completeness.

</div>
</details>

**Definition (nowhere dense).** A set $A$ is **nowhere dense** when
its closure has empty interior: no open interval sits inside
$\overline{A}$. A set is **meagre** when it is a countable union of
nowhere dense sets.

**Theorem (Baire category).** A complete metric space is not
meagre: no countable family of nowhere dense sets covers it.

*Proof.* Let $A_1, A_2, \ldots$ be nowhere dense and $X$ complete,
nonempty. Pick a closed ball $\overline{B}_1$ of radius at most $1$
(a point exists, so a small ball around it exists). Since
$\overline{A_1}$ has empty interior, it does not fill $\overline{B}_1$'s
interior: choose a closed ball $\overline{B}_2 \subseteq
\overline{B}_1$ of radius at most $1/2$ avoiding $A_1$. Continue:
$\overline{B}_{k+1} \subseteq \overline{B}_k$, radius $2^{-k}$,
avoiding $A_k$. The nested closed balls have diameters tending to
$0$, so Cantor's intersection theorem hands over a point $x^*$ in
every $\overline{B}_k$; then $x^* \notin A_k$ for every $k$: a point
of $X$ outside every $A_k$. No countable family covers $X$.
$\blacksquare$

*In words:* completeness is what turns "step by step I can dodge each
set" into "there is a single point that dodges them all at once".
Baire is completeness spent at second order, and it is the engine of
existence proofs: to show *some* object has a property, cover the
space by the sets of objects lacking it and show each is nowhere
dense.

**The classic corollaries, honestly scoped.** This engine proves: the
set of real numbers with bounded decimal partial quotients is
meagre; there exist continuous functions on $[0, 1]$ that are
nowhere differentiable (the meagreness of the differentiable ones is
the engine; the full measure-theoretic polish is Stage I's); and on
the functional side, the uniform boundedness principle, the first of
the four pillars of functional analysis (Stage M, booked as payee).
Each is Baire plus bookkeeping; none needs anything else.

:::note[Quick check]

1. Define nowhere dense, and give one set that is dense but meagre.
2. State Baire's theorem, and where completeness enters its proof.
3. Why must the escaping balls be chosen *closed*?
4. What does "second order" mean in the claim that Baire spends
   completeness at second order?
5. Name the three corollaries and their payees.
6. Prove that a closed ball in a complete space is complete.
7. Give two dense meagre sets whose union is dense and meagre, and
   state the general principle.
8. Why does Baire need the sets to be *countably* many? What fails
   for two sets?

<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** Closure with empty interior; $\mathbb{Q}$ is dense and
meagre (a countable union of singletons, each nowhere dense).
**2.** No countable family of nowhere dense sets covers a complete
metric space; completeness runs Cantor's intersection theorem on
the escaping nested balls. **3.** Cantor's intersection theorem
needs closedness; open nested balls can shrink onto a missing
boundary point. **4.** First order: Cauchy sequences converge
(Stage G). Second order: countably many successive dodges compose
into one point dodging everything (Baire). **5.** Nowhere
differentiable continuous functions (Stage I polishes the
statement); the uniform boundedness principle (Stage M); and
Baire's own number-theoretic instances (none needed).
**6.** A closed ball is a closed subset of a complete space, and 2B Section 1's closed-subset theorem applies directly. **7.** $\mathbb{Q}$ and the irrationals are both dense; $\mathbb{Q}$ is meagre and the irrationals contain a meagre... more precisely: $\mathbb{Q}$ is a countable union of singletons (nowhere dense), and any countable union of meagre sets is meagre by regrouping the unions. **8.** Nothing fails: finitely many nowhere dense sets are a fortiori countable, and Baire covers that case; the theorem's power is exactly the countable statement, which is what diagonal and iteration arguments consume.

</div>
</details>

:::

## 4. Metrisation: Which Topologies Come From a Distance

2A defined continuity, compactness, and connectedness through open
sets alone, with no distance anywhere. A topology that comes from a
metric inherits everything Sections 1 to 3 proved, so the classifying
question: which topologies arise from some metric?

**Definition (metrisable).** A topology $\tau$ on $X$ is
**metrisable** when some metric $d$ on $X$ generates exactly $\tau$:
the open $d$-balls are precisely $\tau$'s open sets.

**The three counting/separation conditions.** A metrisable space must
be: **Hausdorff** (distinct points sit in disjoint open sets: metric
spaces separate points by ball radii); **first countable** (each
point has a countable neighbourhood basis: the balls of radius
$1/k$); and, for the classical positive theorem, **regular** with a
**countable base** (points and closed sets separate, and the whole
topology is generated by countably many open sets).

**Theorem (Urysohn metrisation, stated).** Every Hausdorff, regular,
second countable space is metrisable.

*Honest scope.* The proof embeds the space into a countable product
of intervals and pulls the metric back, and it runs through the
Urysohn lemma on separating closed sets by continuous functions; the
embedding technique is Stage M's territory, and the course declares
the theorem here rather than build it. What this stage *does*
certify is the necessity direction, the three conditions above, each
with a one-line metric-space proof, and the payoff: on metrisable
ground, every completeness tool of this stage is legal, and the
function spaces of Stage M all live there.

:::note[Quick check]

1. Define metrisable.
2. Give the metric proof that metrisable implies Hausdorff.
3. Give the countable neighbourhood basis of a point in a metric
   space.
4. State Urysohn's theorem with all three hypotheses.
5. Why does metrisability matter for everything this stage proved?
6. Show the lower-limit topology's failure of second countability
   needs a diagonal argument, and state the contradiction in one
   line.
7. Is every metric space Hausdorff? Prove or give the one-line
   reason.
8. State what metrisability licenses for this chapter's theorems.

<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** Some metric's open balls generate exactly the given topology.
**2.** Distinct $x \neq y$ have $d(x, y) = r > 0$; the balls of
radius $r/2$ around each are disjoint and open. **3.** The balls
$B(x, 1/k)$, $k = 1, 2, 3, \ldots$: every neighbourhood of $x$
contains one of them. **4.** Hausdorff + regular + second countable
implies metrisable. **5.** Completeness, Cantor intersection, and
Baire were proved for metric spaces; metrisability is the licence
that transfers them to a space built topologically.
**6.** A countable base list $B_1, B_2, \ldots$ is beaten by the point $x :=$ the diagonal choice $\min_k (x_k + \epsilon_k)$-style construction: $[x, x + \delta)$ contains no listed member with $x \notin B_k$ chosen inside $[x_k, x)$. **7.** Yes: distinct $x \neq y$ have $r := d(x, y) > 0$, and the balls of radius $r/2$ are disjoint opens. **8.** Once a topology is metrisable, completeness, Cantor intersection, and Baire (all proved for metrics) apply to it directly.

</div>
</details>

:::

## Stage Gate

:::caution[Pass mark: four of five]
Before the next chapter, answer these five without notes. A failed
gate names the section to reread (1: Section 1; 2: Section 2; 3:
Section 3; 4: Sections 4 and 5; 5: Section 5).

1. State the metric axioms and the Cauchy contract for a metric
   space.
2. Prove that $\mathcal{C}[0, 1]$ with the sup-norm is complete,
   naming the Stage G theorem that closes it.
3. State Cantor's intersection theorem, and give the rational
   counterexample when completeness fails.
4. State Baire's theorem, and sketch the escaping-ball construction.
5. State the three necessary conditions for metrisability and
   Urysohn's theorem.

<details class="wn-spoiler">
<summary>Gate answers</summary>
<div class="wn-spoiler-body">

**1.** Nonnegativity with equality iff identical, symmetry, triangle
inequality; Cauchy: for every $\varepsilon$ there is $N$ with
$d(x_k, x_j) < \varepsilon$ for $k, j \geq N$. **2.** Sup-norm
Cauchy contract is uniform pointwise Cauchyness; limits assemble
into a function; uniform limits of continuous functions are
continuous (Stage G), so the limit stays in the space. **3.** Nested
nonempty closed sets with diameters tending to zero share exactly
one point; the rational nested intervals around $\sqrt{2}$ share
none. **4.** A complete metric space is not a countable union of
nowhere dense sets; dodge each set with a closed ball of half the
radius and run Cantor. **5.** Hausdorff, first countable (for
necessity), and for Urysohn's positive theorem Hausdorff + regular +
second countable implies metrisable (declared, embedding proof at
Stage M).

</div>
</details>

:::

## Problems

**Problems.** The quick checks tested recall. These chain several
results and require full written arguments.

1. Prove that $\mathbb{Q}$ is not complete by the Baire route:
   singletons are nowhere dense, so $\mathbb{Q}$ is meagre; then
   argue directly that a complete space cannot equal a countable
   union of singletons of its own points when it is uncountable, and
   reconcile the two arguments. Which one uses uncountability?
   *(Hint: Baire rules out covering a complete space meagrely, but
   $\mathbb{Q}$ is the space being covered by its own points; the
   direct argument is Cantor's diagonal in metric clothing. The two
   reconcile because $\mathbb{Q}$ is not complete.)*
2. Prove: in a complete metric space, the intersection of nested
   *nonempty compact* sets is nonempty, even without the diameter
   condition, and show the diameter condition cannot be dropped for
   closed sets by constructing nested closed sets with empty
   intersection in $\mathbb{R}$.
   *(Hint: compactness hands over the finite-intersection property;
   the closed counterexample is $F_k := [k, \infty)$.)*
3. Prove that a meagre set in a complete metric space has empty
   interior. Conclude that $\mathbb{R}$ cannot be a countable union
   of Cantor sets (each Cantor set is closed with empty interior).
   *(Hint: if a meagre set contained an open ball, that ball would
   be covered by countably many nowhere dense sets, contradicting
   Baire on the ball, which is complete as a closed subspace.)*
4. Prove that $\mathbb{R}^\mathbb{N}$, the space of all real
   sequences, with the distance $d(x, y) := \sum_k 2^{-k}
   \min(1, |x_k - y_k|)$, is a complete metric space, and verify all
   three metric axioms.
   *(Hint: the min bounds each term's contribution; convergence in
   this distance is coordinatewise; a Cauchy sequence converges
   coordinate by coordinate and the tail sum makes the coordinate
   convergence uniform in the weighting.)*
5. Show that the topology on $\mathbb{R}$ generated by the half-open
   intervals $[a, b)$ (the lower-limit topology) is Hausdorff and
   first countable but strictly finer than the standard topology,
   and state which metrisability condition the classical theorem
   demands that you cannot verify here.
   *(Hint: $[a, b)$ separates points as well as balls do; the basis
   $[x, x + 1/k)$ is countable at each $x$; $[0, 1)$ is open in the
   lower-limit topology but not in the standard one. Second
   countability is the condition this problem leaves open; it fails,
   but the proof is H4's diagonal technique.)*

## Where to Go Next

Completeness is now a portable property and Baire its spending
engine. The next chapter turns to the question of what makes an
infinite-dimensional space tractable: **H4: Approximation and
compactness in function spaces**, where the Weierstrass approximation
theorem is proved by construction and the Arzelà-Ascoli theorem
explains when sequences of functions have workable subsequences.

**Next: [H4: Approximation and Compactness](/17-core-course/h4-approximation-and-compactness/).**
