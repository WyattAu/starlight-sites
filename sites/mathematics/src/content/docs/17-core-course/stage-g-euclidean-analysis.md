---
date: 2026-11-11T00:00:00+00:00
title: "Stage G: Euclidean Analysis"
description: "Calculus rebuilt on the completed line: sequences by the shrinking-target game, series and the exchange of limits, the derivative as best linear approximation, the chain rule and Clairaut, the inverse function theorem, the elementary functions defined by power series, integration with the fundamental theorem, and the contraction principle delivering existence for differential equations."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "17 Core Course", "url": "https://mathematics.wyattau.com/17-core-course"}, {"name": "Stage G: Euclidean Analysis", "url": "https://mathematics.wyattau.com/17-core-course/stage-g-euclidean-analysis"}]
}
</script>

**The Defect.** The line is complete (Stage D), algebra is classified
(Stage F), and still nothing moves. School calculus said
"derivative = slope" and "integral = area", taught as rules for
polynomials, and hid three holes the size of the subject. First:
"slope at a point" presupposes a limit, and "limit" was never defined,
only gestured at with arrows. Second: the school rules silently
exchange limits with everything in sight, and some exchanges are
false. Third: the elementary functions, $\exp$, $\sin$, $\cos$, were
imported from applications as given objects with given properties,
when they should be *constructed* and their properties *proved*. The
naive conjecture: analysis is a bag of tricks. The repair: one
definition (the limit as a contract), one idea (the derivative as the
best linear approximation), one engine (the contraction principle),
and every school rule becomes a theorem with hypotheses.

**The One-Line Reveal.** <span class="wn-spoiler-inline" tabindex="0">A
limit is a contract (for every tolerance, eventually within it), a
derivative is the unique affine map that approximates a function to
first order at a point, integrals are limits of sums that completeness
guarantees exist, and the contraction principle iterates a
self-improving guess into a fixed point, which is how differential
equations are proved to have solutions at all.</span>

*The blur is deliberate: form your own reading of the page first, then
click it.*

**Scope.** Consumes Stage D (completeness: every limit theorem here is
D2 spent), Stage F (linear maps, norms, determinants for the inverse
function theorem), and Stage C (the rationals' density for
approximation arguments). Two uses are flagged forward-honestly: the
extreme and intermediate value theorems are *stated* here and *proved*
at H2 (compactness), and the mean value theorem stands on the extreme
value theorem. Formal witnesses pause for this page: the real number
system itself is past core Lean's built-ins. No new axioms; no new
debts.

## 1. Convergence of Sequences: the Contract

**Ponder 1 (invent the definition).** Before reading the definition:
"a sequence $a_1, a_2, a_3, \ldots$ converges to $L$" should mean the
terms approach $L$ and stay there. Invent this precisely. Your
definition must survive this attack: "the terms get close to $L$" is
satisfied by $0.9, 0.99, 0.999, \ldots$ relative to $1$, but also,
vacuously, by any sequence all of whose terms *happen* to equal $L$
twice. Closeness is not enough. What is?

<details class="wn-spoiler">
<summary>Compare your construction</summary>
<div class="wn-spoiler-body">

The missing ingredient is *permanence*: closeness that holds forever
after some point, not just sometimes. And closeness must be testable
at every tolerance, not one fixed accuracy. Put together: for every
tolerance $\varepsilon > 0$ there is a starting index $N$ such that
all terms from $N$ onward satisfy $|a_k - L| < \varepsilon$. This is
a contract: the challenger names any tolerance, however small, and
the definition must answer with a threshold beyond which the sequence
keeps the promise. If your definition quantified "there exists a
tolerance" instead of "for every", the attack beats it: one lucky
accuracy is not convergence.

</div>
</details>

**Definition (convergence).** $a_k \to L$ when: for every
$\varepsilon > 0$ there exists $N$ such that for all $k \geq N$,
$|a_k - L| < \varepsilon$. The sequence **converges** if some $L$
works, and then $L$ is the **limit**, written $\lim a_k$. A sequence
with no limit **diverges**.

**Theorem (the limit is unique).** A sequence has at most one limit.

*Proof.* Suppose $a_k \to L$ and $a_k \to M$ with $L \neq M$; set
$\varepsilon := |L - M|/2 > 0$. The contracts give $N_1, N_2$; past
both, $|a_k - L| < \varepsilon$ and $|a_k - M| < \varepsilon$, so by
the triangle inequality $|L - M| \leq |L - a_k| + |a_k - M| <
2\varepsilon = |L - M|$: contradiction. $\blacksquare$

**Theorem (limit laws).** If $a_k \to a$ and $b_k \to b$, then $a_k + b_k \to a + b$, $a_k b_k \to ab$, and, if $b \neq 0$, $a_k / b_k
\to a/b$.

*Proof.* For the sum: $|(a_k + b_k) - (a + b)| \leq |a_k - a| +
|b_k - b|$; make each summand's tail small. For the product:
$|a_k b_k - ab| = |a_k (b_k - b) + b(a_k - a)| \leq |a_k|
\,|b_k - b| + |b|\,|a_k - a|$; convergent sequences are bounded
(take $\varepsilon = 1$ in the contract, bound the finite head by
the maximum of finitely many numbers), so $|a_k|$ is bounded and
both terms die. Quotients: subtract $a/b$ and divide, with $|b_k|$
bounded away from $0$ past some index. $\blacksquare$

**Theorem (completeness, spent).** A nondecreasing sequence bounded
above converges; more generally every Cauchy sequence (one whose
terms eventually all agree with each other: for every $\varepsilon >
0$ there is $N$ with $|a_k - a_j| < \varepsilon$ for $k, j \geq N$)
converges in $\mathbb{R}$.

*Proof.* For the nondecreasing bounded case: the set of values has a
supremum $L$ (Stage D's completeness), and the terms climb toward it
without passing it; formally, for every $\varepsilon$, $L -
\varepsilon$ is not an upper bound, so some $a_N > L - \varepsilon$,
and nondecreasingness keeps every later term in $(L - \varepsilon,
L]$. The Cauchy case reduces to this one: a Cauchy sequence is
bounded, and a bounded sequence has a convergent subsequence whose
limit is shown to drag the whole sequence with it (Problem 2).
$\blacksquare$

:::note[Quick check]

1. State the convergence contract, with both quantifiers in order.
2. Why does "for every $\varepsilon$ there exists $N$" beat "the
   terms get arbitrarily close sometimes"?
3. Prove that $a_k = 1/k$ converges to $0$ by exhibiting $N$ for a
   given $\varepsilon$.
4. Show $a_k = (-1)^k$ diverges using the uniqueness theorem.
5. State the Cauchy contract, and how it differs from convergence's.
6. Prove: $a_k \to a$ implies $|a_k| \to |a|$.
7. Show the contract is satisfied for $a_k = (-1)^k / k$, and name
   the limit.
8. Prove a convergent sequence is bounded.

<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** For every $\varepsilon > 0$ there exists $N$ such that for
all $k \geq N$: $|a_k - L| < \varepsilon$. **2.** The contract
demands a *uniform threshold past which closeness never fails*;
intermittent closeness satisfies no threshold. **3.** Given
$\varepsilon$, take $N > 1/\varepsilon$: then $1/k < \varepsilon$
for all $k \geq N$. **4.** If it converged to $L$, odd terms force
$|L + 1| \leq \varepsilon$ for every $\varepsilon$, so $L = -1$;
even terms force $L = 1$; uniqueness forbids both. **5.** Cauchy:
for every $\varepsilon$ there is $N$ with $|a_k - a_j| <
\varepsilon$ for all $k, j \geq N$; no candidate limit is
mentioned, which is why completeness is needed to turn it into
convergence.
**6.** The reverse triangle inequality gives $||a_k| - |a|| \leq |a_k - a|$, which dies by the contract. **7.** The limit is $0$: given $\varepsilon$, take $N > 1/\varepsilon$; every later term satisfies $|a_k| = 1/k < \varepsilon$. **8.** The contract with $\varepsilon = 1$ bounds the tail by $|a_N| + 1$; the finite head is bounded by the maximum of finitely many numbers.

</div>
</details>

:::

## 2. Series and the Exchange of Limits

**Definition (series).** The series $\sum_{k=1}^{\infty} c_k$ is the
limit, if it exists, of its partial sums $s_n := c_1 + \dots + c_n$.
The geometric series closes honestly now: $\sum x^k$ converges to
$1/(1 - x)$ for $|x| < 1$ (Stage B's finite identity plus Section 1's
limit laws, Problem 1), and diverges at $|x| \geq 1$.

**Theorem (comparison).** If $0 \leq c_k \leq d_k$ and $\sum d_k$
converges, then $\sum c_k$ converges.

*Proof.* The partial sums of $\sum c_k$ are nondecreasing and
bounded above by the limit of $\sum d_k$'s partial sums: Section 1's
completeness applies. $\blacksquare$

**Theorem (the ratio test).** If $c_k > 0$ and $c_{k+1}/c_k \leq r
< 1$ for all large $k$, then $\sum c_k$ converges.

*Proof.* Past the threshold, $c_{N + j} \leq r^j c_N$, and
$\sum r^j$ is geometric with ratio $r < 1$: comparison.
$\blacksquare$

**The monster (the exchange that fails).** Limits and infinite
processes do not commute automatically, and one example inoculates
against every future accident. Consider $f_k(x) := x^k$ on $[0, 1]$.
Each $f_k$ is continuous, and pointwise $f_k(x) \to f(x)$ where $f(x)
= 0$ for $x \in [0, 1)$ and $f(1) = 1$: the limit of continuous
functions is discontinuous. Continuity failed to survive the limit.
The diagnosis: near $x = 1$ the convergence is *slow*, and the
failure is uniformity. **Uniform convergence** demands: for every
$\varepsilon$ there is $N$ working for *all* $x$ at once. The
exchange theorems (limit of continuous functions is continuous;
integrals of limits are limits of integrals; derivatives commute with
limits) all hold under uniform convergence and can fail without it;
each is proved by one $\varepsilon/3$-style argument in Problem 3.

**Ponder (the autopsy).** In the failing example, exactly where does
the pointwise-only contract allow the damage?

<details class="wn-spoiler">
<summary>The autopsy</summary>
<div class="wn-spoiler-body">

The pointwise contract hands each $x < 1$ its own private $N(x)$, and
$N(x)$ blows up as $x \to 1$: there is no single $N$ serving all $x$
at tolerance $\varepsilon = 1/2$, because $\sup_x |x^k| = 1$ for
every $k$. Continuity of the limit fails at exactly the point where
the private thresholds diverge. This is the shape of every exchange
failure: the contract is satisfied locally but not uniformly, and the
theorem that would be exchanged needs one threshold, not a field of
them. (Forward-honesty marker: the full theory of uniformity is H4's
territory; this section supplies the definition and the vigilance.)

</div>
</details>

:::note[Quick check]

1. Define the series and its sum, and evaluate the geometric series
   at $x = 1/3$.
2. State the comparison theorem and name the completeness fact it
   consumes.
3. Show $\sum 1/k^2$ converges (which test, against what?).
4. Give the pointwise limit of $f_k(x) = x^k$ on $[0, 1]$ and state
   why the limit is discontinuous.
5. State uniform convergence, and what it adds to the pointwise
   contract.
6. Prove the harmonic series diverges by grouping terms in blocks
   $[2^m, 2^{m+1})$.
7. Where do the limit laws enter the geometric series' evaluation?
8. Why is $x^k$ on $[0, 1]$ the standard counterexample to
   exchanging limit and continuity?

<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** Limit of partial sums; $\sum_{k \geq 0} (1/3)^k = 1/(1 -
1/3) = 3/2$. **2.** Pointwise domination by a convergent
nonnegative series forces convergence; it consumes the
nondecreasing-bounded case of completeness. **3.** Comparison
against $\sum 1/(k(k-1))$-style telescoping bounds, or $1/k^2 \leq
1/(k(k-1))$ for $k \geq 2$; alternatively $1/k^2 \leq 1/k$ is
useless (the harmonic series diverges by Problem 4). **4.** $f(x) =
0$ on $[0, 1)$, $f(1) = 1$: a jump at $1$. **5.** One threshold $N$
must serve every $x$ simultaneously at each tolerance; pointwise
allows a private threshold per point.
**6.** Each block's sum is at least its last term $2^{-(m+1)}$ times its length $2^m$, which is $1/2$: the partial sums exceed $m/2$ and are unbounded. **7.** The partial-sum identity $s_n = (1 - x^n)/(1 - x)$ needs $x^n \to 0$ (the contract) and passage to the limit in a quotient with nonvanishing denominator. **8.** Each $f_k$ is continuous, the pointwise limit exists, and the limit is discontinuous: continuity failed to survive a non-uniform limit, which is exactly the exchange the theorem forbids.

</div>
</details>

:::

## 3. Continuity in Several Variables

**Definition (continuity).** A function $f: \mathbb{R}^n \to
\mathbb{R}^m$ is **continuous at** $p$ when $f(x) \to f(p)$ whenever
$x \to p$ (the limit contract with the distance $\|x - p\|$ doing
the measuring); $f$ is **continuous** when it is continuous
everywhere.

**Theorem (the sequential test).** $f$ is continuous at $p$ exactly
when, for every sequence $x_k \to p$, the images satisfy $f(x_k) \to
f(p)$.

*Proof.* The epsilon-contract for $f(x) \to f(p)$ says: every ball
around $f(p)$ contains $f$ of a whole ball around $p$. The sequence
condition fails exactly when some sequence sneaks into the
$p$-ball while its images flee the $f(p)$-ball, which is precisely
the epsilon-contract failing (Problem 5 runs both directions).
$\blacksquare$

**The monster (coordinatewise fails).** For $n = 2$, let $g(x, y) :=
\dfrac{xy}{x^2 + y^2}$ for $(x, y) \neq (0, 0)$, $g(0, 0) := 0$.
Approach the origin along the $x$-axis: $g(t, 0) = 0 \to 0$. Along
the diagonal $x = y$: $g(t, t) = 1/2 \to 1/2$. Every line through
the origin gives its own answer, and two of them already disagree,
so $\lim_{(x,y) \to 0} g$ does not exist and $g$ is discontinuous at
the origin, *even though* $g$ is continuous in each coordinate
separately: for fixed $x$, $y \mapsto g(x, y)$ is a rational function
continuous wherever defined. Coordinatewise continuity is not
continuity.

:::note[Quick check]

1. State continuity at a point as a limit contract.
2. State the sequential test.
3. In the monster $g$, compute the limit along $y = 2x$ and compare
   with the diagonal.
4. Where does $g$'s coordinatewise continuity hold, and what does
   the example prove?
5. Give the multivariable limit laws (sums, products, compositions
   with continuous functions).
6. Prove $f(x, y) = xy$ is continuous at the origin by the
   contract.
7. Compute the monster $g$ along the parabola $y = x^2$ and compare
   with the earlier paths.
8. State the composition law for continuous functions.

<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** For every $\varepsilon > 0$ there is $\delta > 0$ such that
$\|x - p\| < \delta$ implies $\|f(x) - f(p)\| < \varepsilon$.
**2.** Continuous at $p$ iff $x_k \to p$ implies $f(x_k) \to
f(p)$. **3.** $g(t, 2t) = 2t^2/(5t^2) = 2/5$: a third value, after
$0$ and $1/2$; the full limit cannot exist. **4.** Everywhere on
its domain except the origin (fixed $x \neq 0$ gives a continuous
rational function; the axes give $0$); it proves that separate
coordinate continuity does not give joint continuity. **5.** Sums
and products by the limit laws per coordinate; composition: if $f$
is continuous at $p$ and $g$ continuous at $f(p)$, then $g \circ f$
is continuous at $p$ (sequential test, one line).
**6.** $|xy| \leq (x^2 + y^2)/2 = \|(x, y)\|^2 / 2$; given $\varepsilon$, take $\delta := \sqrt{\varepsilon}$: then $|f| < \varepsilon/2 < \varepsilon$ inside the ball. **7.** $g(t, t^2) = t^3/(t^2 + t^4) = t/(1 + t^2) \to 0$: a third path value, after $0$ (axes) and $1/2$ (diagonal); any one disagreement already kills the limit. **8.** If $f$ is continuous at $p$ and $g$ is continuous at $f(p)$, then $g \circ f$ is continuous at $p$: one line with the sequential test.

</div>
</details>

:::

## 4. The Derivative in Several Variables

**Ponder (invent the definition).** In one variable, "derivative =
slope" lives on the line: the graph near a point looks like a line
with that slope. In several variables there is no single slope to
read off. Invent the object that replaces the line: what is the best
linear-scale description of $f$ near $p$, and in what sense is it
"best"?

<details class="wn-spoiler">
<summary>Compare your construction</summary>
<div class="wn-spoiler-body">

The replacement for "the tangent line" is the **best affine map**: a
linear map $L: \mathbb{R}^n \to \mathbb{R}^m$ such that
$$f(p + h) = f(p) + L h + r(h), \qquad \frac{\|r(h)\|}{\|h\|} \to 0
\text{ as } h \to 0.$$
the error is not merely small (adding the zero map also gives small
error); it is small *relative to the step size*: first-order
accurate. "Best" means exactly this: any other linear candidate
differs from $L$ by an error that is only first-order, so $L$ is
unique once the first-order accuracy is demanded (Problem 1). The
matrix of $L$ is the **Jacobian** of $f$ at $p$, written $Df(p)$.

</div>
</details>

**Definition (differentiable).** $f$ is **differentiable at $p$**
when such an $L$ exists; its matrix is $Df(p)$, whose $(i, j)$
entry is the partial derivative $\partial f_i / \partial x_j (p)$
when the coordinates are standard (take $h$ along the $j$-th
coordinate axis: the definition collapses to the one-variable
derivative of $f_i$ in that direction).

**The monster (partials exist, differentiability fails).** The same
$g$ from Section 3 has $\partial g / \partial x (0, 0) = 0$ and
$\partial g / \partial y (0, 0) = 0$ (each coordinate slice is
identically $0$ near the origin along the axes), so if $g$ were
differentiable its Jacobian would be the zero map, forcing $g(h) /
\|h\| \to 0$; but along the diagonal $g(t, t)/\|(t,t)\| = (1/2)/
(\sqrt{2}\,|t|)$, which diverges. Partial derivatives all exist
without differentiability: the coordinate slices sample only $n$
directions out of infinitely many.

:::note[Quick check]

1. State differentiability at $p$ with the error term made explicit.
2. Prove uniqueness of the approximating linear map.
3. Compute the Jacobian of $f(x, y) = (xy, x + y)$ at $(1, 2)$.
4. Why does the existence of all partials not give
   differentiability, by the monster?
5. What does differentiability at $p$ imply about continuity at $p$,
   and why?
6. Compute both partial derivatives of $f(x, y) = (x^2 y, y^3)$
   at the origin.
7. Why is the zero map the only candidate Jacobian for the monster
   $g$ at the origin, and what refutes it?
8. State what differentiability implies, and what it does not,
   about partial derivatives.

<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** There is a linear $L$ with $f(p + h) = f(p) + Lh + r(h)$ and
$\|r(h)\| / \|h\| \to 0$ as $h \to 0$. **2.** If $L_1, L_2$ both
work, their difference $M = L_1 - L_2$ satisfies $\|Mh\| \leq
\|r_1(h)\| + \|r_2(h)\| = o(\|h\|)$; scaling $h$ down any fixed
direction forces $Mh = 0$ for every direction, so $M = 0$. **3.**
$Df = \begin{pmatrix} y & x \\ 1 & 1 \end{pmatrix}$, so at $(1,
2)$: $\begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$. **4.** Partials
sample axis directions only; differentiability demands first-order
accuracy in *every* direction, and $g$'s diagonal behaviour refutes
it. **5.** Continuity: $f(p + h) - f(p) = Lh + r(h) \to 0$ since
$\|Lh\| \leq \|L\| \|h\|$ and $r$ is $o(\|h\|)$.
**6.** $\partial f / \partial x = (2xy, 0)$, which is $(0, 0)$ at the origin; $\partial f / \partial y = (x^2, 3y^2)$, also $(0, 0)$: the Jacobian is the zero matrix. **7.** Both coordinate slices of $g$ vanish on the axes, so both partials are $0$ and differentiability would force the zero Jacobian, demanding $g(h)/\|h\| \to 0$; the diagonal divergence refutes it. **8.** Differentiable at $p$ implies continuous at $p$ (the linear and error terms both vanish); continuity implies nothing about whether partial derivatives exist.

</div>
</details>

:::

## 5. The Chain Rule, Partials, and Clairaut

**Theorem (chain rule).** If $f$ is differentiable at $p$ and $g$
is differentiable at $f(p)$, then $g \circ f$ is differentiable at
$p$ with $D(g \circ f)(p) = Dg(f(p)) \circ Df(p)$: the Jacobians
compose as linear maps.

*Proof.* Write the two first-order expansions and compose them:
$(g \circ f)(p + h) = g(f(p) + Df(p) h + r(h)) = g(f(p)) + Dg(f(p))
(Df(p) h + r(h)) + s(Df(p) h + r(h))$ with $\|r(h)\|/\|h\| \to 0$
and $\|s(k)\|/\|k\| \to 0$. The total error is
$Dg(f(p)) r(h) + s(Df(p) h + r(h))$; the first term is $o(\|h\|)$
since $Dg(f(p))$ is a fixed linear map, and the second is
$o(\|Df(p) h + r(h)\|) \leq o(\|h\|)$ because $\|Df(p)h\| \leq
\|Df(p)\| \|h\|$ and $r$ is smaller still. $\blacksquare$

*In words:* first-order errors compose by linear-algebra bookkeeping,
and the remainder terms stay negligible because linear maps scale
errors by a fixed constant, never amplifying them superlinearly.

**Theorem ($C^1$ implies differentiable).** If all partial
derivatives of $f$ exist and are continuous near $p$, then $f$ is
differentiable at $p$.

*Proof sketch.* Split the path from $p$ to $p + h$ into $n$
coordinate steps, apply the one-variable mean value theorem to each
step (the MVT is stated below with its debt flagged), and add: the
result is $Df(p) h$ plus a sum of terms each carrying a factor
$\to$ the difference between a partial derivative at an
intermediate point and at $p$, which the continuity of the partials
makes small. The full write-up is Problem 4. $\blacksquare$

**Theorem (MVT and Clairaut).** The one-variable **mean value
theorem**: a function continuous on $[a, b]$ and differentiable on
$(a, b)$ has some $c$ with $f(b) - f(a) = f'(c)(b - a)$. (Statement
here; its proof via Rolle's theorem, which turns the conclusion into
the extreme value theorem's work, is H2, where compactness is
built. Forward-honesty marker: this theorem is consumed below, not
proved here.) And **Clairaut's theorem**: if both second partials
of $f$ exist and are continuous near $p$, then
$\frac{\partial^2 f}{\partial x \partial y}(p) =
\frac{\partial^2 f}{\partial y \partial x}(p)$: the mixed partials
agree.

*Proof (Clairaut).* Apply the MVT twice to the finite difference
$\Delta := f(p + h e_1 + k e_2) - f(p + h e_1) - f(p + k e_2) +
f(p)$: once in the $e_1$-direction at two $e_2$-offsets, once in
$e_2$; comparison gives $\Delta = h k \, \partial^2 f / \partial y
\partial x (\text{some point}) = h k \, \partial^2 f / \partial x
\partial y (\text{some other point})$. Divide by $hk$, send $h, k
\to 0$, and continuity of the second partials makes both sides
converge to their respective mixed partials at $p$; the shared
middle expression forces equality. $\blacksquare$

:::note[Quick check]

1. State the chain rule in matrix form.
2. Where do the two remainder terms in the chain rule proof get
   their $o(\|h\|)$ estimates?
3. State the $C^1$-differentiability theorem, and name the tool its
   proof borrows per coordinate step.
4. State the MVT's hypotheses, and which stage owns its proof.
5. State Clairaut, and the role continuity of the second partials
   plays.
6. Compute $D(g \circ f)'$ at $t = 1$ for $g(t) = (t, t^2)$ and
   $f(x, y) = xy$.
7. State Clairaut's hypotheses precisely.
8. Why must $Df(p)$ be a bounded (linear) map in the chain rule's
   error estimate?

<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** $D(g \circ f)(p) = Dg(f(p)) \, Df(p)$, matrix product in
this order. **2.** $Dg(f(p)) r(h)$: fixed linear map applied to an
$o(\|h\|)$ term; the $s$-term: its argument is $O(\|h\|)$ and $s$
is $o$ of its argument. **3.** Continuous partials near $p$ give
differentiability at $p$; each coordinate step borrows the one
variable MVT. **4.** Continuous on $[a,b]$, differentiable on
$(a,b)$; H2 owns the proof (via Rolle and the extreme value
theorem). **5.** Continuous second partials commute; continuity is
what lets the MVT's intermediate points converge to $p$ carrying
their second-partial values with them.
**6.** $Dg(1) = (1, 2)^T$ and $Df(1, 1) = (y, x) = (1, 1)$; the chain rule gives $(1, 1) \cdot (1, 2)^T = 3$. **7.** Both second partials exist and are continuous near the point; then the two mixed partials are equal at the point. **8.** The estimate $\|Df(p) h\| \leq \|Df(p)\| \, \|h\|$ needs a bounded operator; without it, the composed remainder would not stay first-order small.

</div>
</details>

:::

## 6. The Inverse Function Theorem

**The question, made concrete.** The polar-to-cartesian map and the
map $(x, y) \mapsto (e^x \cos y, e^x \sin y)$ are locally
invertible, while $(x, y) \mapsto (x^2, y)$ is not (its first
coordinate folds the line, and no neighbourhood of a point on the
fold is injective). What data about $Df(p)$ decides whether $f$ is
invertible near $p$, with a differentiable inverse?

**Theorem (inverse function theorem).** Let $f: \mathbb{R}^n \to
\mathbb{R}^n$ be $C^1$ near $p$. If $\det Df(p) \neq 0$, then there
are neighbourhoods $U$ of $p$ and $W$ of $f(p)$ such that $f: U \to
W$ is a bijection, its inverse is $C^1$, and
$D(f^{-1})(f(p)) = (Df(p))^{-1}$: the inverse's Jacobian is the
inverse matrix.

*Proof sketch.* The engine is the contraction mapping principle
(Section 9): rewriting $y = f(x)$ as the fixed-point problem $x =
x + A(y - f(x))$ with $A := (Df(p))^{-1}$, the update map is a
contraction on a small ball around $p$, because $Df$'s continuity
makes $I - A \, Df(x)$ uniformly small near $p$. Each $y \in W$ has
exactly one fixed point, giving the local inverse; differentiating
the identity $f^{-1}(f(x)) = x$ by the chain rule gives the inverse
Jacobian. The full write-up is staged across Problem 5 and Section
9. $\blacksquare$

*In words:* where the Jacobian is invertible, the function is locally
a small wobble away from its own linearisation, and invertible
linear maps stay invertible under small wobbles, carrying their
differentiable inverses with them.

:::note[Quick check]

1. State the theorem's hypothesis and conclusion.
2. Compute $Df(p)^{-1}$ for $f(x, y) = (e^x \cos y, e^x \sin y)$ at
   $p = (0, 0)$.
3. Why does $\det Df(p) = 0$ genuinely kill local invertibility, in
   the example $(x, y) \mapsto (x^2, y)$?
4. What role does $C^1$ (not mere differentiability at one point)
   play in the proof sketch?
5. State the inverse's Jacobian formula.
6. Compute $\det Df$ for $f(x, y) = (x^2, y)$ at $(1, 0)$ and
   $(0, 0)$, and state where local invertibility holds.
7. State the inverse Jacobian formula and its one-dimensional
   reading.
8. Name the two theorems the inverse function theorem's proof
   rests on.

<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** $\det Df(p) \neq 0$ with $f$ of class $C^1$ near $p$ gives
local bijection onto a neighbourhood of $f(p)$, with $C^1$ inverse
whose Jacobian is the inverse matrix. **2.** $Df(0, 0) =
\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$, so the inverse is
itself. **3.** $x \mapsto x^2$ has $D = 0$ at the origin, and the
folding means two inputs share one output near $0$: no local
injectivity, hence no inverse. **4.** The contraction estimate needs
$Df$ to stay close to $Df(p)$ on a whole neighbourhood, which is
continuity of the derivative, not just its existence at $p$. **5.**
$D(f^{-1})(q) = (Df(f^{-1}(q)))^{-1}$.
**6.** $\det Df = 2x$: it is $2$ at $(1, 0)$, where the map is locally invertible, and $0$ at $(0, 0)$, the fold where two inputs share one output. **7.** $D(f^{-1})(q) = (Df(f^{-1}(q)))^{-1}$; in one variable, the inverse's derivative is the reciprocal of the derivative at the preimage. **8.** The contraction mapping principle (Section 9) for the local inverse's existence, and the chain rule for its Jacobian.

</div>
</details>

:::

## 7. The Elementary Functions via Power Series

**The construction.** On the completed line, define the exponential
function by its power series, the limit of polynomials whose
existence is Section 2's convergence theory spent:

$$
\exp(x) := \sum_{k=0}^{\infty} \frac{x^k}{k!},
$$

which converges for every real $x$ (the ratio test: the ratio of
successive terms is $x/(k+1) \to 0 < 1$). Then $\sin x := \sum
(-1)^k x^{2k+1}/(2k+1)!$ and $\cos x := \sum (-1)^k x^{2k}/(2k)!$,
convergent for every $x$ by the same test. These definitions, not
imports, are the functions; every property is now a theorem.

**Theorem (the exponential law).** $\exp(a + b) = \exp(a)
\exp(b)$ for all $a, b$.

*Proof.* Multiply the two series term by term and collect by total
degree (Cauchy's product theorem, whose uniform-convergence proof
is Problem 3): the coefficient of $x^n$ in the product is
$\sum_{j=0}^{n} \frac{a^j}{j!} \frac{b^{n-j}}{(n-j)!} =
\frac{1}{n!} \sum_j \binom{n}{j} a^j b^{n-j} = \frac{(a + b)^n}{n!}$
by Stage B's binomial law. The series thus multiply exactly as the
school rule says. $\blacksquare$

**Theorem (differential characterisation).** $\exp' = \exp$,
$\cos' = -\sin$, $\sin' = \cos$ (term-by-term differentiation of
power series, justified by uniform convergence of the derived series
on bounded intervals); $\sin^2 + \cos^2 = 1$ (differentiate the left
side: it is constant, and its value at $0$ is $1$).

**Definition ($\pi$ and periodicity).** Let $\pi := 2 \inf\{t > 0 :
\cos t = 0\}$ (the set is nonempty because $\cos 2 < 0$ by direct
series comparison, and the infimum exists by completeness). Then
$\sin(\pi/2) = 1$, and the addition laws $\sin(a + b) = \sin a \cos
b + \cos a \sin b$ (expand $\exp(i(a+b))$ and take real and
imaginary parts) yield periodicity: $\cos(x + \pi) = -\cos x$ and
$\sin(x + 2\pi) = \sin x$. The elementary functions are now
constructed objects with proved behaviour, and the school tables are
theorems.

:::note[Quick check]

1. Why does $\sum x^k / k!$ converge for every $x$?
2. State the coefficient of $x^n$ in the Cauchy product, and which
   Stage B theorem evaluates the sum.
3. Derive $\exp' = \exp$ from the series.
4. Prove $\sin^2 + \cos^2 = 1$ by the derivative trick, including
   the constant's value.
5. State how $\pi$ is defined and which completeness fact the
   definition consumes.
6. Sum the exponential series through $k = 7$ and state
   $\exp(1)$ to two decimal places.
7. Derive $\cos' = -\sin$ term by term.
8. Prove $\sin^2 + \cos^2 = 1$ from a vanishing derivative plus
   one value.

<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** Ratio test: $\frac{|x|^{k+1}}{(k+1)!} \frac{k!}{|x|^k} =
\frac{|x|}{k+1} \to 0 < 1$. **2.** $\frac{1}{n!} \sum_j
\binom{n}{j} a^j b^{n-j}$; the binomial law evaluates it as
$(a+b)^n / n!$. **3.** Differentiate term by term (justified on
bounded intervals by uniform convergence of the derived series):
$\frac{d}{dx} \sum x^k/k! = \sum_{k \geq 1} x^{k-1}/(k-1)! =
\exp(x)$. **4.** The derivative of $\sin^2 + \cos^2$ is $2 \sin
\cos - 2 \cos \sin = 0$, so it is constant; at $0$ it is $0 + 1 =
1$. **5.** $\pi := 2 \inf\{t > 0 : \cos t = 0\}$; the infimum
exists by completeness (D2), with nonemptiness checked by the
series bound $\cos 2 < 0$.
**6.** $1 + 1 + 1/2 + 1/6 + 1/24 + 1/120 + 1/720 + 1/5040 = 2.71825\ldots$: $\exp(1) \approx 2.72$. **7.** Differentiating $(-1)^k x^{2k+1}/(2k+1)!$ term by term gives $(-1)^k x^{2k}/(2k)!$: exactly the cosine series with matching signs. **8.** The derivative of $\sin^2 + \cos^2$ is $0$, so the function is constant (the mean value theorem's zero-derivative case), and at $0$ the value is $1$.

</div>
</details>

:::

## 8. Integration and the Fundamental Theorem

**Ponder (invent the integral).** "Area under the curve" is not a
definition until area is. For a continuous $f$ on $[a, b]$: invent
the number from below and from above, and say why the two
constructions must agree. (Hint: Stage D gave you the tool for
forcing two quantities to meet.)

<details class="wn-spoiler">
<summary>Compare your construction</summary>
<div class="wn-spoiler-body">

Lower sums: chop $[a, b]$ into subintervals, take the infimum of $f$
on each, sum the rectangle areas; the supremum over all chopplings
is the **lower integral**. Upper sums: dual construction with the
supremum, giving the **upper integral**; lower $\leq$ upper always.
They agree for continuous $f$ because continuity is *uniform* on a
closed interval (the Heine-Cantor theorem, whose proof spends
compactness and is H2's: forward-honesty marker, stated here, proved
there): for every $\varepsilon$ there is a chopping fine enough that
sup and inf on each piece differ by less than
$\varepsilon/(b-a)$, squeezing the two integrals together. The
common value is $\int_a^b f$.

</div>
</details>

**Theorem (the fundamental theorem of calculus).** Let $f$ be
continuous on $[a, b]$. Define $F(x) := \int_a^x f$. Then $F$ is
differentiable with $F' = f$. Conversely, if $G$ is any
differentiable function on $[a, b]$ with $G' = f$ (continuous),
then $\int_a^b f = G(b) - G(a)$.

*Proof.* First part: the difference quotient is $\frac{1}{h}
\int_x^{x+h} f$, which the MVT-shaped estimate $\big| \frac{1}{h}
\int_x^{x+h} f - f(x) \big| \leq \sup_{t \in [x, x+h]} |f(t) -
f(x)|$ pushes to $0$ by continuity of $f$ at $x$. Second part: let
$H := G - F$; then $H' = f - f = 0$ on $[a, b]$, so $H$ is constant
by the MVT (H2's, as flagged), and $H(b) = H(a)$ rearranges to the
claim. $\blacksquare$

*In words:* area accumulation and differentiation undo each other:
the first part says the running area has instantaneous rate equal to
the height; the second says any antiderivative differs from the
running area by a constant, which is the school evaluation rule with
its licence finally printed.

:::note[Quick check]

1. Define lower and upper integrals, and state which theorem makes
   them meet for continuous integrands.
2. State the two halves of the fundamental theorem.
3. In the first half's proof, what estimate drives the difference
   quotient to $f(x)$?
4. Why does the second half need the MVT, and where is that proof
   actually located in the course?
5. Compute $\int_0^1 x^2$ from the definition as the limit of
   Riemann-style lower sums (Stage B's sum identity is available).
6. Why can a lower integral never exceed the upper integral?
7. State the evaluation rule for $\int_0^1 x^2$ from the
   fundamental theorem, and verify it.
8. Name the theorem that makes upper and lower sums meet for
   continuous integrands, and the stage that proves it.

<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** Supremum of lower sums and infimum of upper sums over all
chopplings; uniform continuity (Heine-Cantor, proved at H2) makes
them equal for continuous $f$. **2.** $F(x) = \int_a^x f$ satisfies
$F' = f$; and any antiderivative $G$ of continuous $f$ obeys
$\int_a^b f = G(b) - G(a)$. **3.** The height estimate: $\big|
\frac{1}{h} \int_x^{x+h} f - f(x) \big| \leq \sup_{[x, x+h]} |f -
f(x)| \to 0$ by continuity at $x$. **4.** It needs that zero
derivative forces constancy, which is the MVT's work, proved at H2
from the extreme value theorem. **5.** Equal subdivisions give
lower sum $\frac{1}{n} \sum_{j} ((j-1)/n)^2 = \frac{(n-1)n(2n-1)}{6
n^3} \to 1/3$, via Stage B's sum-of-squares identity.
**6.** For any chopping, the lower sum is at most the corresponding upper sum; the supremum over all lower chopplings therefore cannot exceed the infimum over all upper chopplings. **7.** $G(x) = x^3/3$ has $G' = x^2$, so $\int_0^1 x^2 = G(1) - G(0) = 1/3$. **8.** Heine-Cantor (uniform continuity on a closed bounded interval); proved at H2, where compactness is built.

</div>
</details>

:::

## 9. The Contraction Principle and Existence for ODEs

**Ponder 1 (play the iteration game).** Take the map $T(x) := \cos
x$ on $[0, 1]$ and iterate from any starting guess: $x_1 = T(x_0)$,
$x_2 = T(x_1)$, and so on. Convince yourself the iterates converge
to a point the map leaves fixed, and identify the mechanism that
shrinks the gaps: what does $T$ do to distances?

<details class="wn-spoiler">
<summary>The mechanism</summary>
<div class="wn-spoiler-body">

$T$ is a **contraction**: it multiplies every distance by at most a
factor $q < 1$ (here, by the MVT, $|T(x) - T(y)| = |\cos c|
\,|x - y|$ for some $c$, and $|\cos| \leq \sin 1 < 1$ on $[0,
1]$). Each application shrinks the gap between successive iterates
geometrically, the total path length is a geometric series (Section
2), the iterates are Cauchy, completeness (Section 1) hands over the
limit $L$, and continuity of $T$ turns the recursion into $L =
T(L)$: a fixed point. If your mechanism was "the values look
stable", push on it: stability needs a reason, and the reason is the
distance contract $d(Tx, Ty) \leq q \, d(x, y)$.

</div>
</details>

**Theorem (contraction mapping principle).** Let $X$ be a nonempty
complete metric space (a set with a distance satisfying the triangle
inequality, in which Cauchy sequences converge: $\mathbb{R}^n$ and
closed subsets thereof qualify) and $T: X \to X$ a contraction with
factor $q < 1$: $d(Tx, Ty) \leq q \, d(x, y)$ for all $x, y$. Then
$T$ has exactly one fixed point $x^*$, and iteration from any start
converges to it with the error bound $d(x_k, x^*) \leq q^k d(x_0,
x^*)$.

*Proof.* Iterating the contract: $d(x_{k+1}, x_k) \leq q^k
d(x_1, x_0)$, so the tail lengths are dominated by a geometric
series and $(x_k)$ is Cauchy; completeness gives $x^* = \lim x_k$;
continuity of contractions turns $x_{k+1} = T(x_k)$ into $x^* =
T(x^*)$. Uniqueness: two fixed points $x^*, y^*$ obey $d(x^*, y^*)
= d(Tx^*, Ty^*) \leq q \, d(x^*, y^*)$, forcing $d = 0$. The error
bound is the same contract iterated from $x_k$.
$\blacksquare$

**Theorem (Picard-Lindelof, local existence and uniqueness).** Let
$f: \mathbb{R} \times \mathbb{R}^n \to \mathbb{R}^n$ be continuous
and Lipschitz in its second argument near $(t_0, y_0)$: on some box
$|t - t_0| \leq \alpha$, $\|y - y_0\| \leq \beta$, there is $K$ with
$\|f(t, y_1) - f(t, y_2)\| \leq K \|y_1 - y_2\|$. Then for some
$h > 0$ the initial value problem
$$
y' = f(t, y), \qquad y(t_0) = y_0
$$
has exactly one solution on $[t_0 - h, t_0 + h]$.

*Proof.* A solution of the initial value problem is exactly a fixed
point of the integral operator $\Phi(y)(t) := y_0 + \int_{t_0}^{t}
f(s, y(s)) \, ds$ (the fundamental theorem of calculus, Section 8,
runs backwards). On the space of continuous functions on
$[t_0 - h, t_0 + h]$ with values in the box, given the sup norm,
two iterates obey $\|\Phi(y_1) - \Phi(y_2)\| \leq h K
\|y_1 - y_2\|$ by the Lipschitz contract and the integral's
monotonicity; choosing $h < 1/K$ and small enough that $\Phi$ maps
the box into itself makes $\Phi$ a contraction. Section 9's
principle delivers one fixed point: one solution, locally, and
uniquely. $\blacksquare$

*In words:* a differential equation restated as an integral equation
is a self-improving-guess machine: each application of $\Phi$ is a
better approximation, the contraction factor guarantees the guesses
converge geometrically, and completeness of the function space
cashes the limit in. Existence theorems for differential equations
are, at bottom, this one paragraph.

:::note[Quick check]

1. State the contraction contract, and give the fixed-point
   uniqueness line.
2. Where do the geometric series and completeness each enter the
   proof?
3. Restate the initial value problem as a fixed-point problem.
4. Which two earlier theorems does the Picard argument consume?
5. Compute the error bound after $10$ iterations for $q = 1/2$
   starting distance $1$ from the fixed point.
6. Write the uniqueness line of the fixed-point proof in full.
7. Why is a contraction automatically continuous?
8. In the Picard argument, state the two constraints on $h$ and
   why each is needed.

<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** $d(Tx, Ty) \leq q \, d(x, y)$ with $q < 1$; uniqueness: $d
= d(Tx^*, Ty^*) \leq q d$ forces $d = 0$. **2.** The geometric
series bounds the total iteration path (Cauchy-ness);
completeness supplies the limit that becomes the fixed point.
**3.** $y = \Phi(y)$ with $\Phi(y)(t) = y_0 + \int_{t_0}^{t}
f(s, y(s)) ds$: fixed points of $\Phi$ are exactly the solutions
of $y' = f(t, y)$, $y(t_0) = y_0$. **4.** The fundamental theorem
of calculus (to equate the integral equation with the differential
one) and the contraction mapping principle (to win the fixed
point). **5.** $q^{10} = 2^{-10} < 10^{-3}$: within a thousandth
after ten applications.
**6.** $d(x^*, y^*) = d(Tx^*, Ty^*) \leq q \, d(x^*, y^*)$ with $q < 1$ forces $d(x^*, y^*) = 0$: the fixed points coincide. **7.** The contract gives $\|Tx - Ty\| \leq q \, \|x - y\|$; given $\varepsilon$, $\|x - y\| < \varepsilon / q$ suffices. **8.** $h < 1/K$ makes $\Phi$ a contraction, and $h$ small enough keeps the iterates inside the box so $\Phi$ maps the space into itself; both fail the proof without the other.

</div>
</details>

:::

## Stage Gate

:::caution[Pass mark: four of five]
Before Level 2 (Topology), answer these five without notes. A failed
gate names the section to reread (1: Section 1; 2: Sections 2 and 7;
3: Sections 3 and 4; 4: Sections 5 and 6; 5: Sections 8 and 9).
1. State the convergence contract with both quantifiers, and prove
   uniqueness of the limit.
2. Define uniform convergence, and give the standard example where
   its absence breaks continuity of the limit.
3. Define differentiability in several variables, and give the
   example with all partials existing yet no differentiability.
4. State the chain rule and the inverse function theorem's
   hypothesis.
5. State the fundamental theorem of calculus, and name the engine
   behind existence for differential equations.

<details class="wn-spoiler">
<summary>Gate answers</summary>
<div class="wn-spoiler-body">

**1.** For every $\varepsilon > 0$ there is $N$ such that $k \geq
N$ gives $|a_k - L| < \varepsilon$; two limits $L \neq M$ are split
by the tolerance $|L - M|/2$ into a contradiction via the triangle
inequality. **2.** One threshold $N$ serving all points at once at
each tolerance; $x^k$ on $[0, 1]$ converges pointwise to a
discontinuous limit. **3.** $f(p + h) = f(p) + Lh + r(h)$ with
$\|r(h)\|/\|h\| \to 0$; $xy/(x^2 + y^2)$ has both partials at the
origin yet diverges along the diagonal. **4.** $D(g \circ f)(p) =
Dg(f(p)) Df(p)$; the inverse function theorem demands $C^1$ near
$p$ and $\det Df(p) \neq 0$. **5.** $F(x) := \int_a^x f$ has $F' =
f$, and $\int_a^b f = G(b) - G(a)$ for antiderivatives $G$; the
engine is the contraction mapping principle applied to the integral
operator.

</div>
</details>

:::

## Problems

**Problems.** The quick checks tested recall. These chain several
results and require full written arguments.

1. Prove the geometric series identity $\sum_{k=0}^{n-1} x^k =
   (1 - x^n)/(1 - x)$ for $x \neq 1$ from Stage B's finite
   identity, then take the $n \to \infty$ limit with Section 1's
   laws to evaluate $\sum x^k$ for $|x| < 1$.
   *(Hint: the finite identity was Stage B's geometric sum; the
   limit argument needs $x^n \to 0$ for $|x| < 1$, which is the
   squeeze against $|x|^n \leq |x|^N |x|^{n - N}$-style splitting or
   directly the contract with $N > \log \varepsilon / \log |x|$.)*
2. Prove: every Cauchy sequence in $\mathbb{R}$ converges, by
   extracting a convergent subsequence (boundedness plus a
   monotone subsequence via the peak-point argument) and showing the
   full sequence follows it.
   *(Hint: Cauchy gives boundedness; the peak argument gives a
   nondecreasing or strictly decreasing subsequence; Section 1's
   completeness converges it; the Cauchy contract with the
   subsequence's index pushes every late term within
   $\varepsilon/2$ of a subsequence term within $\varepsilon/2$ of
   the limit.)*
3. Prove: if $f_k \to f$ uniformly on $[a, b]$ and each $f_k$ is
   continuous, then $f$ is continuous, by the $\varepsilon/3$
   argument.
   *(Hint: $\|f(x) - f(y)\| \leq \|f(x) - f_k(x)\| + \|f_k(x) -
   f_k(y)\| + \|f_k(y) - f(y)\|$; choose $k$ by uniformity to kill
   the outer terms uniformly in $x, y$, then continuity of $f_k$
   for the middle.)*
4. Write out the $C^1$-implies-differentiable proof in full for $n
   = 2$: split the step $h = (h_1, h_2)$ into two coordinate moves,
   apply the MVT to each, and assemble the first-order expansion
   with the remainder bounded via continuity of the partials.
   *(Hint: $f(p + h) - f(p) = [f(p + (h_1, h_2)) - f(p + (0,
   h_2))] + [f(p + (0, h_2)) - f(p)]$; the MVT converts each
   bracket into a partial derivative at an intermediate point times
   the corresponding component; add and subtract the values at $p$
   to expose the error.)*
5. Carry out the inverse function theorem's fixed-point reduction
   for $f(x, y) = (e^x \cos y, e^x \sin y)$ near $(0, 0)$: write
   the update map $x \mapsto x + A(y - f(x))$, verify the
   contraction estimate on a small enough ball, and identify $h$ in
   terms of the Lipschitz constants involved.
   *(Hint: $A = I$ here; the estimate needs $\|Df(z) - Df(p)\|$
   uniformly small for $z$ near $p$, which continuity of the
   entries of $Df$ supplies; the contraction factor is essentially
   that supremum.)*

:::
## Where to Go Next

The calculus of several variables now stands on proved ground: limits
as contracts, derivatives as best linear approximations, integrals as
limits of sums, the elementary functions as constructed series, and
differential equations proved solvable. The course next widens the
canvas itself: **Level 2: Topology**, where distance steps aside and
continuity, compactness, and connectedness are studied on any space
that supports them, paying the debts this stage flagged to H2.

**Next: [Level 2: Topology](/17-core-course/2a-topology/).**
