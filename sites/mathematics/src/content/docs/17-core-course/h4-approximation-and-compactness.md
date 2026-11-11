---
date: 2026-11-11T00:00:00+00:00
title: "H4: Approximation and Compactness"
description: "What makes a space of functions tractable: the failure x^n that defines equicontinuity, the Arzelà-Ascoli theorem proved by a diagonal subsequence, Bernstein polynomials proving Weierstrass approximation constructively with Stage B's binomial law, and what compactness buys for existence proofs."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "17 Core Course", "url": "https://mathematics.wyattau.com/17-core-course"}, {"name": "H4: Approximation and Compactness", "url": "https://mathematics.wyattau.com/17-core-course/h4-approximation-and-compactness"}]
}
</script>

**The Defect.** $\mathcal{C}[0, 1]$ is complete (2B), so Cauchy
sequences of functions converge. But most of the sequences analysis
hands you are not Cauchy; they are merely infinite, and the working
question is whether some *subsequence* converges. On the line the
answer was free: bounded sequence, extract a convergent subsequence
(Bolzano-Weierstrass). In a space of functions the same claim is
false, and the false version is seductive: the sequence $x^k$ is
bounded in the sup-norm, yet no subsequence converges uniformly.
The naive conjecture: boundedness is enough. The repair is one new
idea, equicontinuity, and one theorem, Arzelà-Ascoli, that turns
boundedness plus equicontinuity into convergent subsequences. Its
sibling, Weierstrass approximation, then lands as a bonus proved by
construction: every continuous function is uniformly approachable by
polynomials, and the approaching polynomials have explicit names.

**The One-Line Reveal.** <span class="wn-spoiler-inline" tabindex="0">Bounded
plus *equally gentle* is the compactness criterion in function
spaces (Arzelà-Ascoli, proved by a diagonal argument through a
countable dense set); and every continuous function on a closed
interval is uniformly approximated by its own Bernstein polynomials,
whose convergence is Stage B's binomial law wearing analysis
clothing.</span>

*The blur is deliberate: form your own reading of the page first, then
click it.*

**Scope.** Consumes 2B (completeness of $\mathcal{C}[0,1]$), Stage G
(uniform convergence, the exchange theorem), and Stage B (the binomial
law, spent in the Bernstein proof). Compactness is used in its
sequential form on $[0, 1]$; the function-space compactness that
Arzelà-Ascoli delivers is stated in the same sequential terms, and
the open-cover translation is named for 2A's framework. No new
axioms; no new debts.

## 1. The Failure That Defines Equicontinuity

**Ponder 1 (dissect the failure first).** The functions $f_k(t) :=
t^k$ on $[0, 1]$ satisfy $\sup |f_k| = 1$: the sequence is bounded in
the sup-norm. Pointwise, $f_k(t) \to f(t)$ with $f(t) = 0$ on $[0,
1)$ and $f(1) = 1$ (Stage G's exchange monster). Attempt the
subsequence question before reading on: could *some* subsequence
converge uniformly? The limit of a uniformly convergent subsequence
must equal the pointwise limit, and uniform limits of continuous
functions are continuous. What does that chain force?

<details class="wn-spoiler">
<summary>The dissection</summary>
<div class="wn-spoiler-body">

Any uniformly convergent subsequence must converge to the pointwise
limit $f$, and $f$ is discontinuous; but uniform limits of continuous
functions are continuous (Stage G). So *no* subsequence converges
uniformly, despite boundedness. The diagnosis: the failure lives near
$t = 1$, where each $f_k$ is steep; the sequence is bounded but its
members are not *equally gentle*. Each $f_k$ alone is continuous
(gentleness at a scale depending on $k$), and as $k$ grows the scale
shrinks to nothing. A common gentleness scale across the whole
sequence is exactly what is missing, and it is the definition the
theorem needs.

</div>
</details>

**Definition (equicontinuity).** A family $\mathcal{F}$ of functions
on a metric space is **equicontinuous** when: for every $\varepsilon > 0$ there is $\delta > 0$ such that $d(x, y) < \delta$ implies
$|f(x) - f(y)| < \varepsilon$ for *every* $f \in \mathcal{F}$. The
one $\delta$ serves all members.

:::note[Quick check]

1. State the failure chain: why does no subsequence of $t^k$
   converge uniformly?
2. Define equicontinuity, and say what one quantity serves all
   members.
3. Is a single continuous function, as a one-element family,
   equicontinuous?
4. Show $\{t^k\}$ is not equicontinuous by computing at which pair
   the common $\delta$ fails.
5. Which Stage G theorem does the failure chain consume?
6. Prove the family $\{\sin(t + k)\}$ is equicontinuous.
7. State Lipschitz's relation to equicontinuity.
8. Show a uniformly convergent family of continuous functions is
   equicontinuous.

<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** A uniform limit must equal the pointwise limit $f$; $f$ is
discontinuous; uniform limits of continuous functions are
continuous; contradiction. **2.** One $\delta$ answers every
$\varepsilon$ *simultaneously for all members of the family*.
**3.** Yes: continuity provides a $\delta$ per $\varepsilon$, and
with one member there is nobody else to serve. **4.** At $x = 1 -
\delta/2^{1/k}$-style points: for any $\delta$, pick $k$ with the
$[0, 1 - \delta]$-to-$[0,1]$ jump visible; concretely $f_k(1) -
f_k(1 - 1/k) = 1 - (1 - 1/k)^k \to 1 - e^{-1} \approx 0.632$, which
no common $\delta$ with $\varepsilon < 0.6$ survives. **5.** The
theorem that uniform limits of continuous functions are continuous.
**6.** $|\sin(t + k) - \sin(s + k)| \leq |t - s|$ for every $k$ by the mean-value bound $|\cos| \leq 1$: one $\delta = \varepsilon$ serves the whole family. **7.** One Lipschitz constant $L$ gives equicontinuity with $\delta = \varepsilon / L$: the Lipschitz inequality holds identically for every member. **8.** Finitely many members up to the convergence threshold handle $\delta$ individually; the tail members are within $\varepsilon/3$ of the limit, whose own continuity supplies the middle $\delta$.

</div>
</details>

:::

## 2. Arzelà-Ascoli: the Compactness Criterion

**Theorem (Arzelà-Ascoli, sequential form).** Let $f_1, f_2, \ldots$
be functions on $[0, 1]$ that are uniformly bounded (one constant
$M$ with $|f_k(t)| \leq M$ for all $k, t$) and equicontinuous. Then
some subsequence converges uniformly.

*Proof.* Take a countable dense set in $[0, 1]$: the rationals in
$[0, 1]$, listed as $q_1, q_2, \ldots$. Extract subsequences in
stages, one per rational. Stage one: $(f_k(q_1))$ is a bounded
number sequence, so a subsequence makes it converge; call it the
$f^{(1)}$ family. Stage two: the $f^{(1)}$ values at $q_2$ are
bounded, so extract a sub-subsequence $f^{(2)}$ converging there
too; and so on, the $f^{(j)}$ stage converging at $q_1, \ldots,
q_j$. The **diagonal** family $g_k := f^{(k)}_k$ differs from
$f^{(j)}$ in only finitely many early members, so it converges at
*every* rational $q_j$. It remains to promote rational-point
convergence to uniform convergence: given $\varepsilon$, equicontinuity
gives $\delta$; finitely many rationals $q_1, \ldots, q_m$ hit every
point within $\delta$ (density plus finiteness of the cover by
$\delta$-balls); past some $N$, the diagonal family's values agree
at each of the $m$ rationals within $\varepsilon/3$; then for any
$t$, pick $q_j$ within $\delta$ of $t$ and chain
$|g_k(t) - g_N(t)| \leq |g_k(t) - g_k(q_j)| + |g_k(q_j) - g_N(q_j)| + |g_N(q_j) - g_N(t)| < \varepsilon/3 + \varepsilon/3 +
\varepsilon/3$. Uniform convergence, with the sup-norm Cauchy
contract; $\mathcal{C}[0,1]$'s completeness (2B) adds that the limit
is continuous. $\blacksquare$

*In words:* the diagonal is bookkeeping, but the promotion step is
the content: one $\delta$ serving the whole family is exactly what
lets finitely many rational witnesses carry every point of the
interval. Equicontinuity is the price of compactness in infinite
dimensions, and it is not negotiable, as Section 1's monster showed.

:::note[Quick check]

1. Why must subsequences be extracted one rational at a time,
   rather than handling all rationals at once?
2. Why does the diagonal family $g_k = f^{(k)}_k$ converge at every
   rational?
3. Where do equicontinuity and density each enter the promotion
   step?
4. Where does the completeness of $\mathcal{C}[0,1]$ enter?
5. State the monster's role: what does it rule out about the
   theorem?
6. Why must the dense set be countable for the diagonal argument?
7. Where is Bolzano-Weierstrass used, and on what space?
8. State the subsequence-of-subsequence bookkeeping in one sentence.

<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** One number sequence converges by Bolzano-Weierstrass on
$[0, 1]$; infinitely many at once is not a number sequence. Each
stage passes a convergent sub-subsequence forward. **2.** For fixed
$q_j$, the diagonal family agrees with stage $f^{(j)}$ from member
$j$ onward (a finite head), and that stage converges at $q_j$.
**3.** Equicontinuity converts closeness of *points* into closeness
of *values* uniformly across the family; density reduces all points
to finitely many rational witnesses. **4.** It guarantees the
uniform limit is continuous, so the subsequence converges *inside*
$\mathcal{C}[0, 1]$. **5.** Boundedness alone is insufficient: the
hypotheses cannot be weakened to boundedness, and the theorem's
equicontinuity clause is load-bearing.
**6.** The construction extracts one subsequence per base point, and passing through infinitely many stages requires the stages to be countable; the diagonal is indexed by the same countable list. **7.** At each extraction stage, Bolzano-Weierstrass runs on the bounded number sequence of values at that stage's rational, in $\mathbb{R}$. **8.** The $k$-th diagonal member sits in stage $k$, and for fixed $q_j$ the diagonal agrees with stage $j$ from member $j$ on, so it inherits that stage's convergence at $q_j$.

</div>
</details>

:::

## 3. Bernstein Polynomials: Weierstrass by Construction

**The question.** How well can polynomials approximate an arbitrary
continuous function? The answer: arbitrarily well, uniformly; and the
constructive proof is worth writing out because the approximating
polynomials have formulas.

**Ponder (invent the approximation).** A continuous $f$ on $[0, 1]$
can be sampled: $f$ at $k/n$ for $k = 0, \ldots, n$. A naïve
approximant interpolates these samples. Why does interpolation fail
to converge uniformly for general continuous $f$, and what property
do polynomials have that interpolation lacks? Attempt an answer
before reading Bernstein's construction.

<details class="wn-spoiler">
<summary>Why interpolation fails, and the fix</summary>
<div class="wn-spoiler-body">

Interpolating polynomials must pass *exactly* through the samples,
and forcing exactness at many points creates violent oscillation
between them (the classic Runge phenomenon); degree grows and the
error between nodes can grow with it. The fix is to *approximate
instead of interpolate*: blend the sampled values with weights that
are nonnegative and sum to one, so the approximant never overshoots
beyond the sampled range. Bernstein's weights are the binomial
probabilities: the value at $t$ is the average of $f$ at $k/n$
weighted by $B(n, k) t^k (1 - t)^{n-k}$, Stage B's binomial
coefficient reading as "the chance of $k$ successes in $n$ coin
flips landing at $t$".

</div>
</details>

**Definition (Bernstein polynomials).** For $f \in \mathcal{C}[0,
1]$:
$$
B_n(f)(t) := \sum_{k=0}^{n} f\!\left(\frac{k}{n}\right) B(n, k)\, t^k
(1 - t)^{n-k}.
$$

**Theorem (Weierstrass approximation, Bernstein's proof).** For
every continuous $f$ on $[0, 1]$, $B_n(f) \to f$ uniformly.

*Proof sketch (the complete chase is Problem 3).* Two properties of
the weights carry everything: they are nonnegative and sum to one
($\sum_k B(n,k) t^k (1-t)^{n-k} = (t + (1-t))^n = 1$, the binomial
law), and they concentrate: for $t$ fixed, the mass sits at $k
\approx nt$ (the binomial distribution's concentration). The
uniform-continuity of $f$ on $[0,1]$ (2B's flagged theorem: a
continuous function on a compact interval is uniformly continuous)
gives $\delta$; splitting the sum into $|k/n - t| < \delta$ and its
complement, the inner part is within $\varepsilon$ of $f(t)$ by
continuity, and the outer part is killed by the concentration
estimate $\sum_{|k/n - t| \geq \delta} B(n,k) t^k (1-t)^{n-k} \leq
\frac{1}{4 n \delta^2}$ (an instance of the variance bound, provable
from Stage B's sums). Outside contributions vanish uniformly in $t$
as $n \to \infty$. $\blacksquare$

*In words:* $B_n(f)(t)$ is the expected value of $f$ evaluated at a
random coin-flip frequency near $t$; concentration makes the random
frequency hug $t$, and uniform continuity of $f$ converts that into
uniform closeness of the expected value to $f(t)$.

:::note[Quick check]

1. Compute $B_1(f)$ and $B_2(f)$ for $f(t) = t^2$; where does each
   miss the graph, and how does the miss shrink as $n$ grows?
2. Verify the weights sum to one, naming the theorem used.
3. Where does uniform (not mere pointwise) continuity of $f$ enter?
4. What does the concentration estimate bound, and by what kind of
   quantity?
5. Why does the theorem close the earlier question about
   $\mathcal{C}[0,1]$ being "too big"?
6. Compute $B_n(1)$ for any $n$.
7. Prove $B_n(f)(0) = f(0)$ and $B_n(f)(1) = f(1)$ for every $n$.
8. State what happens to $B_n(f)$ when $f$ itself is a polynomial of
   degree at most $n$.

<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** $B_1(f)(t) = f(0)(1-t) + f(1)t = t$, missing the graph by $t(1-t)$; $B_2(f)(t) = 0 \cdot (1-t)^2 + 2 \cdot \frac{1}{4} \cdot t(1-t) + t^2 = \frac{t}{2} + \frac{t^2}{2}$, missing by $\frac{t(1-t)}{2}$: the miss halves, and in general $B_n(t^2) = t^2 + \frac{t(1-t)}{n}$, so the error dies like $1/n$.
**2.** $(t + (1-t))^n = \sum_k B(n,k) t^k (1-t)^{n-k} = 1$: Stage
B's binomial law. **3.** One $\delta$ must serve every $t$
simultaneously, since the concentration estimate is uniform in $t$;
pointwise continuity would give a different $\delta$ per point and
no uniform conclusion. **4.** The total binomial mass outside the
$|k/n - t| < \delta$ window, bounded by a constant times $1/n$.
**5.** The space of polynomials is dense in $\mathcal{C}[0, 1]$:
every continuous function is a uniform limit of polynomials, so
statements proved for polynomials pass to all continuous functions.
**6.** $B_n(1)(t) = \sum_k B(n,k) t^k (1-t)^{n-k} = 1$: the constant function one is reproduced exactly, by the binomial law. **7.** At $t = 0$ only the $k = 0$ term survives, giving $f(0)$; at $t = 1$ only the $k = n$ term survives, giving $f(1)$: the approximant interpolates the endpoints. **8.** If $f$ has degree at most $1$, $B_n(f) = f$ exactly; for higher degrees the approximants have degree at most $n$ and converge to $f$, never oscillating away as interpolants do.

</div>
</details>

:::

## 4. What Compactness Buys

**The working corollaries, honestly scoped.** Arzelà-Ascoli is the
engine behind existence proofs where no contraction is available: the
**Peano theorem** (the initial value problem $y' = f(t, y)$ with
merely continuous $f$ has *some* solution: Euler polygon iterates are
equicontinuous and bounded, Arzelà-Ascoli extracts a uniformly
convergent subsequence, and the limit solves the equation), stated
here, its proof assembled from pieces the course owns, booked as
Problem 5; and the **Schauder fixed point theorem** (a continuous
self-map of a convex compact set has a fixed point), named with the
functional stage as payee.

:::note[Quick check]

1. State Peano's theorem and compare its hypothesis with Picard's.
2. Why are Euler polygons equicontinuous when slopes are uniformly
   bounded?
3. State Schauder's theorem, and name its stage.
4. Which of the two existence engines (Picard, Peano) gives
   uniqueness?
5. What does Weierstrass approximation add to the function-space
   toolkit that completeness alone does not?
6. State the price each existence engine pays: what does Picard
   need that Peano does not, and vice versa?
7. Why does density of polynomials make function-space arguments
   easier?
8. Give one theorem about polynomials that transports to continuous
   functions by Weierstrass, and name the transport step.

<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** Peano: $f$ merely continuous gives existence of a solution;
Picard: $f$ Lipschitz gives existence *and uniqueness*; Peano
trades uniqueness for a weaker hypothesis. **2.** Every segment's
slope is bounded by one constant $M$, so any two points within
$\delta = \varepsilon/M$ on the same or adjacent segments have
values within $\varepsilon$: one $\delta$ for the whole family.
**3.** A continuous self-map of a convex compact set in a
normed space has a fixed point; Stage M (functional analysis).
**4.** Picard (the contraction is unique); Peano solutions can
branch. **5.** Density of polynomials: a dense, well-understood
subclass; statements can be proved on polynomials and transported
by uniform approximation.
**6.** Picard needs Lipschitz (a quantitative contract) and buys uniqueness; Peano needs only continuity and buys existence without uniqueness. **7.** A dense subclass lets you prove statements for the well-understood members and transport by uniform approximation, provided the statement is preserved under uniform limits. **8.** The intermediate value theorem, first proved for polynomials with rational coefficients, transports to all continuous functions; the transport step is uniform convergence plus closure of the property under uniform limits.

</div>
</details>

:::

## Stage Gate

:::caution[Pass mark: four of five]
Before the next chapter, answer these five without notes. A failed
gate names the section to reread (1: Section 1; 2: Section 2; 3:
Section 3; 4: Sections 4 and 5; 5: Section 5).

1. Give the $t^k$ failure chain and the definition it forces.
2. State Arzelà-Ascoli, and identify the diagonal argument's role.
3. Where do equicontinuity and density enter the promotion step?
4. Define Bernstein polynomials, and name the Stage B theorem their
   proof spends.
5. State Peano versus Picard, and what Weierstrass approximation
   adds.

<details class="wn-spoiler">
<summary>Gate answers</summary>
<div class="wn-spoiler-body">

**1.** $t^k$ is bounded but no subsequence converges uniformly (the
uniform limit would be the discontinuous pointwise limit); the
forced definition is equicontinuity: one $\delta$ serves all
members. **2.** Uniformly bounded + equicontinuous implies a
uniformly convergent subsequence; the diagonal walks stages
extracted per rational. **3.** Equicontinuity converts point
closeness to value closeness family-wide; density reduces the
interval to finitely many rational witnesses. **4.** $B_n(f)(t) =
\sum_k f(k/n) B(n,k) t^k (1-t)^{n-k}$; the binomial law gives both
the weights' sum and their concentration. **5.** Peano: continuous
$f$ yields existence; Picard: Lipschitz $f$ yields existence and
uniqueness; Weierstrass adds polynomial density, a
proof-on-polynomials-then-transport strategy.

</div>
</details>

:::

## Problems

**Problems.** The quick checks tested recall. These chain several
results and require full written arguments.

1. Prove that $\{f_k\}$ with $f_k(t) = \sin(kt)$ is uniformly
   bounded but not equicontinuous at any scale, by showing the
   common-$\delta$ contract fails uniformly in $k$.
   *(Hint: at $x, y$ separated by roughly $\pi/(2k)$, $f_k$ swings
   its full range; one $\delta$ cannot serve all $k$.)*
2. Prove: the family $\{t^k : k \geq 1\} \cup \{0\}$ on $[0, 1]$,
   with the constant zero function adjoined, is compact in the
   sup-norm's sequential sense, and identify where each member of
   the family lives relative to the pointwise limit.
   *(Hint: every sequence drawn from a finite family has a
   convergent subsequence without any work; the work is sequences drawn from the
   $t^k$ tail, which either escape to the pointwise discontinuity or
   settle; the answer exposes that adding one limit point repairs
   sequential compactness.)*
3. Carry out the concentration estimate: prove $\sum_{|k/n - t|
   \geq \delta} B(n, k) t^k (1 - t)^{n-k} \leq \frac{1}{4 n
   \delta^2}$ using Stage B's binomial sums applied to $(k - nt)^2$
   weighting, and conclude the Weierstrass theorem.
   *(Hint: multiply the binomial identity by $k$ and by $k^2$ to get
   the mean $nt$ and the variance $nt(1-t) \leq n/4$; then run the
   Chebyshev-style split.)*
4. Prove that $B_n(f) \to f$ for $f(t) = t^2$ *by hand*: compute
   $B_n(t^2)$ explicitly via the mean and variance of the binomial
   distribution, and show the sup-norm error is at most $1/(4n)$.
   *(Hint: the mean of $k/n$ is $t$; the variance is $t(1-t)/n$;
   the identity $B_n(t^2)(t) = t^2 + t(1-t)/n$ follows from the
   second-moment calculation.)*
5. Assemble the Peanø existence proof from the pieces: given $y' =
   f(t, y)$, $f$ continuous on a box, define the Euler polygons
   with step $1/n$, show they are uniformly bounded and
   equicontinuous, extract a uniformly convergent subsequence, and
   prove the limit solves the integral equation $y(t) = y_0 +
   \int_{t_0}^t f(s, y(s)) ds$.
   *(Hint: the discretised equation passes to the limit because $f$
   is uniformly continuous on the box and the polygons' corners
   approximate the argument $y(s)$ within the convergence tolerance;
   the fundamental theorem of calculus converts the limit of
   difference quotients into the integral form.)*

## Where to Go Next

Function spaces are now tractable: subsequences extractable,
polynomials dense. The next chapter faces the price of the century's
boldest construction: **H5: The quotient topology, gluing and its
price**, where the circle is born from a glued interval, Hausdorff
can fail, and the universal property becomes the classification tool.

**Next: [H5: The Quotient Topology](/17-core-course/h5-quotient-topology/).**
