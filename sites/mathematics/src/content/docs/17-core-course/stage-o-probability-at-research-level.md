---
date: 2026-11-12T00:00:00+00:00
title: "Stage O: Probability at Research Level"
description: "The final stage: martingales and optional stopping proved with the sigma-algebra machinery of Stage I, Brownian motion constructed and its pathologies dissected, the Ito calculus with the quadratic variation that makes the correction term necessary, stochastic differential equations with Feynman-Kac linking paths to partial differential equations, and Girsanov's theorem with the martingale representation result."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "17 Core Course", "url": "https://mathematics.wyattau.com/17-core-course"}, {"name": "Stage O: Probability at Research Level", "url": "https://mathematics.wyattau.com/17-core-course/stage-o-probability-at-research-level"}]
}
</script>

**The Defect.** Stage I built probability as measure theory: sigma-
algebras, expectation, the laws of large numbers. But every random
experiment there was fixed in advance: the sequence $X_1, X_2,
\ldots$ existed whole, and time never touched it. Real randomness
unfolds: information arrives, expectations are revised, and the
question is never "what is the average" but "what should I believe
*now*, knowing what I know *now*". The naive conjecture: conditional
expectations are just averages conditioned on more data. The
repair: conditional expectation as a projection in $L^2$ (Stage
M2's geometry), martingales as the rigorous form of a fair game,
Brownian motion as the object whose paths are continuous but
nowhere differentiable, and the Itô calculus as the new chain
rule that the corrected quadratic variation forces.

**The One-Line Reveal.** <span class="wn-spoiler-inline" tabindex="0">A
martingale is a process whose future expectation given the present
is the present (the $L^2$-projection reading); Brownian motion is
the universal scaling limit of independent steps, continuous with
quadratic variation equal to time; Itô's formula adds the half
second-derivative term that ordinary calculus lacks; Feynman-Kac
solves partial differential equations by running random paths; and
Girsanov changes the probability measure itself.</span>

*The blur is deliberate: form your own reading of the page first, then
click it.*

**Scope.** Consumes Stage I (sigma-algebras, conditional
expectation's projection definition, $L^p$, the laws of large
numbers), Stage M (Hilbert projections, Stone's theorem for the
generator reading), and Stage G (the fundamental theorem for the
integral form of SDEs). The constructive centrepiece is Itô's
formula, proved for the special case the quadratic-variation
computation supports; the martingale representation and Girsanov
theorems are stated with engines named. No new axioms; no new
debts.

## 1. Martingales and Optional Stopping

**Definition.** A **filtration** is an increasing family of
sigma-algebras $\mathcal{F}_t$ (the information available at time
$t$); a process is **adapted** when $X_t$ is $\mathcal{F}_t$-
measurable. A process is a **martingale** when it is adapted,
integrable, and $\mathbb{E}[X_t \mid \mathcal{F}_s] = X_s$ for $s
\leq t$: the present is the best prediction of the future.

**Ponder 1 (read the definition as a fair game).** A gambler's
fortune $X_t$ after $t$ rounds of a fair game: attempt to explain,
from the conditional-expectation definition alone, why no betting
strategy based on the past can improve the expected fortune.
Where exactly does "based on the past" enter?

<details class="wn-spoiler">
<summary>The no-strategy reading</summary>
<div class="wn-spoiler-body">

A strategy is a rule choosing the stake at round $t$ from the
information $\mathcal{F}_{t-1}$: it is an adapted process. The
expected gain of round $t$ given the past is
$\mathbb{E}[X_t - X_{t-1} \mid \mathcal{F}_{t-1}] =
\mathbb{E}[X_t \mid \mathcal{F}_{t-1}] - X_{t-1} = 0$: the
martingale property says every conditional expected gain is zero,
so no function of the past changes the expectation. "Based on the
past" enters through adaptedness: a strategy using the future is
not adapted, is not a strategy anyone can execute, and the
definition's scope excludes it by construction.

</div>
</details>

**Theorem (optional stopping; stated with its gate).** If $T$ is a
bounded stopping time (a time whose occurrence is decidable from
$\mathcal{F}_T$'s past) and $X$ is a martingale, then
$\mathbb{E}[X_T] = \mathbb{E}[X_0]$: the fair game stays fair even
when you choose when to walk away.

*Proof shape.* A bounded stopping time $T \leq N$ admits the
decomposition of $X_T$ as a sum of adapted increments, and the
martingale property kills each conditional expectation in turn:
the telescoping chase is Problem 2. The gate matters: unbounded or
ill-behaved stopping times break the conclusion (the classic
doubling-strategy paradox), and the repair theorems (uniform
integrability, the hypotheses of Stage I's convergence ladder)
are the honest hypotheses. $\blacksquare$

:::note[Quick check]

1. Define filtration, adapted process, and martingale.
2. Prove the zero-conditional-gain reading of the martingale
   property for one step.
3. Define a stopping time, and give one example that is one and
   one that is not.
4. State optional stopping with its gate hypothesis.
5. What breaks in the doubling strategy, and which hypothesis
   fails?
6. Prove that a constant process is a martingale for any
   filtration.
7. Show that if $X$ and $Y$ are martingales, so is $aX + bY$ for
   constants $a, b$.
8. State the tower property $\mathbb{E}[\mathbb{E}[X \mid
   \mathcal{F}_t] \mid \mathcal{F}_s] = \mathbb{E}[X \mid
   \mathcal{F}_s]$ for $s \leq t$, and use it to prove that
   $\mathbb{E}[X_t \mid \mathcal{F}_s] = X_s$ extends to all
   later times at once.

<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** Increasing sigma-algebras; $X_t$ measurable in its own
information; $\mathbb{E}[X_t \mid \mathcal{F}_s] = X_s$ for $s
\leq t$. **2.** $\mathbb{E}[X_t - X_{t-1} \mid \mathcal{F}_{t-1}]
= \mathbb{E}[X_t \mid \mathcal{F}_{t-1}] - X_{t-1} = 0$: the
definition with $s = t-1$. **3.** A stopping time: decidable from
the past ("the first time the fortune reaches $100$"); not one:
"the last time it reaches $100$" (needs the future). **4.**
Bounded $T$, martingale $X$: $\mathbb{E}[X_T] = \mathbb{E}[X_0]$.
**5.** The doubling strategy's expected fortune involves an
unbounded stopping time and unbounded stakes: integrability and
boundedness fail, and the optional stopping conclusion does not
apply.
**6.** $\mathbb{E}[c \mid \mathcal{F}_t] = c$ for every $t$ (the conditional expectation of a constant is the constant): adapted and martingale. **7.** Conditional expectation is linear: $\mathbb{E}[aX_t + bY_t \mid \mathcal{F}_s] = a X_s + b Y_s$. **8.** The tower property is Stage I's iterated-projection identity (M2's projection geometry); applying it collapses the nested conditioning to the earliest sigma-algebra, which is exactly the martingale definition for every horizon.

</div>
</details>

:::

## 2. Brownian Motion: Construction and Pathologies

**Definition.** **Brownian motion** $B_t$ is a process with
continuous paths, $B_0 = 0$, independent increments, and
$B_t - B_s \sim$ normal with mean $0$ and variance $t - s$.

**Ponder 1 (attempt the construction).** Stage G9's contraction
method built solutions as limits of approximations. Attempt a
Brownian construction in that shape: what should the
approximations be, and on what space does the fixed-point or
limit argument run?

<details class="wn-spoiler">
<summary>The construction's shape</summary>
<div class="wn-spoiler-body">

Take a complete probability space rich enough to carry
countably many independent normals (Stage I's product-space
construction); at each dyadic time mesh, interpolate linearly
between the accumulated coin-flip positions; the mesh refines and
the continuity moduli tighten by the Kolmogorov criterion
(Stage I's Borel-Cantelli machinery bounds the increments'
probability), so a uniform limit of continuous paths exists: the
limit is the Brownian motion. The space being iterated on is a
function space, so 2B and H4's completeness and compactness are
the engines, exactly as in Picard's theorem.

</div>
</details>

**Theorem (the pathologies).** Almost every Brownian path is
continuous but nowhere differentiable; it has quadratic variation
$\sum (B_{t_{j+1}} - B_{t_j})^2 \to t$ along any refining
partition.

*Proof shape.* Nowhere differentiability: the increment
contraction bound shows $|B_{t+h} - B_t| \geq c\sqrt{h}$
infinitely often at every $t$, while differentiability would
force $O(h)$ increments: contradiction off a null set (the
Borel-Cantelli union bound, Stage I's). Quadratic variation: each
squared increment has expectation the mesh length, variances sum
by independence, and Stage I's laws give the convergence in
$L^2$: the sum of squares converges to elapsed *time*, not to
zero as it would for any differentiable curve.
$\blacksquare$

:::note[Quick check]

1. Define Brownian motion with all defining properties.
2. Which stage's theorems run the limit-of-approximations
   construction, and on which space?
3. State the nowhere-differentiability result and the increment
   scale that forces it.
4. Define quadratic variation, and state Brownian motion's.
5. What would the quadratic variation be for a differentiable
   path, and why does that mark the difference?
6. Compute $\mathbb{E}[B_t]$ and $\mathrm{Var}(B_t)$ from the
   definition.
7. Why is the Brownian scaling $B_t \sim \sqrt{t}$ times a
   standard normal the natural one for independent increments?
8. Give the heuristic for why the nowhere-differentiability scale
   is $\sqrt{h}$ rather than $h$.

<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** Continuous paths from $B_0 = 0$, independent increments,
normal increments with variance the elapsed time. **2.** 2B/H4's
completeness and compactness on a function space; Kolmogorov's
criterion tightens the continuity moduli. **3.** Almost every
path is nowhere differentiable; increments scale like
$\sqrt{h}$, too large for any derivative. **4.** The limit of
$\sum (B_{t_{j+1}} - B_{t_j})^2$ over refining partitions; it is
$t$. **5.** For differentiable paths the sum tends to $0$ (each
increment is $O(h)$, its square $O(h^2)$, the total
$O(h)$): the nonzero limit is the signature of roughness.
**6.** Mean zero and variance $t$: normal with variance the elapsed time, by definition. **7.** Independent increments add variances, and variances add like the elapsed time: $B_{t+h} - B_t$ has variance $h$, so the natural magnitude is $\sqrt{h}$. **8.** The increment over $h$ is of size $\sqrt{h}$, so the difference quotient $\Delta B / h$ is of size $1/\sqrt{h}$, which diverges: no derivative survives.

</div>
</details>

:::

## 3. The Itô Calculus

**Ponder 1 (attempt the chain rule and watch it fail).** Try
ordinary calculus on $f(B_t)$ with $f(x) := x^2$: write $f(B_t) =
\int f'(B_s) dB_s$-style and attempt to match increments. The
quadratic variation is $t$, not $0$: which term of the
second-order Taylor expansion refuses to die?

<details class="wn-spoiler">
<summary>The surviving term</summary>
<div class="wn-spoiler-body">

Taylor: $\Delta f(B) = f'(B)\Delta B + \frac{1}{2} f''(B)
(\Delta B)^2 + \cdots$. For ordinary calculus $(\Delta B)^2$ is
$O(\Delta t^2)$ and dies. For Brownian motion the quadratic
variation says $(\Delta B)^2$ accumulates to $\Delta t$: the
second-order term survives at first order. Itô's formula for
$f(x) = x^2$ reads $B_t^2 = 2\int_0^t B_s dB_s + t$: an extra
time-integral that classical calculus never had. That extra term
is the Itô correction, and it is not a defect: it is the honest
record of the path's roughness.

</div>
</details>

**Theorem (Itô's formula; proved for $C^2$ functions).** For
twice continuously differentiable $f$:
$$
f(B_t) = f(B_0) + \int_0^t f'(B_s) \, dB_s + \frac{1}{2} \int_0^t
f''(B_s) \, ds.
$$

*Proof shape.* Taylor-expand on each partition interval, sum, and
take limits: the first-order term converges to the Itô integral
(defined exactly as the limit of these sums in $L^2$), the
second-order terms converge to the time integral by the quadratic
variation's $\sum (\Delta B)^2 \to t$ (each surviving term
becomes a Riemann sum for $\int f''/2$), and the higher orders die
by the increment scaling. The full $L^2$ chase is Problem 4.
$\blacksquare$

:::note[Quick check]

1. State Itô's formula, and identify the correction term.
2. Apply Itô's formula to $f(x) = x^2$ and recover the identity
   for $B_t^2$.
3. Why does the correction term die in ordinary calculus?
4. Define the Itô integral as a limit, and say in which sense it
   converges.
5. Compute $\int_0^t B_s \, dB_s$ and connect to Section 1's
   quadratic variation.
6. Apply Itô's formula to $f(x) = e^{\sigma x}$ and write the
   SDE that $e^{\sigma B_t}$ satisfies.
7. Why does Itô's formula need $f$ twice differentiable while
   ordinary calculus needs it once?
8. State the Itô isometry and what it guarantees about the
   integral's size.

<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** $f(B_t) = f(B_0) + \int f'(B_s) dB_s + \frac{1}{2} \int
f''(B_s) ds$: the extra half-second-derivative time integral.
**2.** $f' = 2x$, $f'' = 2$: $B_t^2 = 2\int B_s dB_s + t$.
**3.** Ordinary increments square to second order
($O(\Delta t^2)$), total $O(\Delta t) \to 0$; Brownian increments
square to first order because quadratic variation is $t$. **4.**
The $L^2$ limit of Riemann-style sums $\sum f(B_{t_j})
(B_{t_{j+1}} - B_{t_j})$ over refining partitions. **5.**
$\int_0^t B_s dB_s = \frac{1}{2}(B_t^2 - t)$: rearranging Itô's
identity, the correction term is exactly Section 1's quadratic
variation.
**6.** $f' = \sigma f$, $f'' = \sigma^2 f$: $df = \sigma f \, dB + \frac{1}{2} \sigma^2 f \, dt$: a geometric-Brownian SDE with drift $\frac{1}{2} \sigma^2$. **7.** The quadratic variation survives the second-order Taylor term, so the $f''$ term persists at first order: once-differentiable calculus never sees it. **8.** $\mathbb{E}[(\int H dB)^2] = \mathbb{E}[\int H^2]$: the integral's mean square is the mean square of the integrand, which is what makes the construction converge in $L^2$.

</div>
</details>

:::

## 4. Stochastic Differential Equations and Feynman-Kac

**Definition.** A **stochastic differential equation** (SDE) is
$dX_t = b(X_t) dt + \sigma(X_t) dB_t$: drift $b$ plus noise
coefficient $\sigma$ multiplying Brownian increments, read in
integral form $X_t = X_0 + \int b(X_s) ds + \int \sigma(X_s)
dB_s$.

**Theorem (existence and uniqueness; proved shape).** If $b$ and
$\sigma$ are Lipschitz, the SDE has exactly one solution
(continuous, adapted). The proof is Picard iteration (Stage G9)
run in the space of continuous adapted processes with the
sup-norm: the stochastic integral's isometry $\mathbb{E}[(\int
\sigma \, dB)^2] = \mathbb{E}\int \sigma^2$ (Stage I's
construction) makes the noise part a contraction. $\blacksquare$

**Theorem (Feynman-Kac; stated).** The solution $u(t, x) :=
\mathbb{E}[e^{-\int_0^t V(B_s) ds} \, \varphi(B_t) \mid B_0 = x]$
of the averaged-over-paths formula solves the partial
differential equation $\partial_t u = \frac{1}{2} u_{xx} - V u$
with $u(0, x) = \varphi(x)$; Itô's formula applied to the
process $u(t, B_t)$ is the whole proof. The consequence: **every
parabolic partial differential equation is a statement about
random paths**, and conversely: Stage M6's equations and Stage
O's paths are two readings of one object.

:::note[Quick check]

1. Write the SDE in integral form, and name the two coefficient
   functions.
2. Which Stage G theorem is the contraction template, and on what
   space does it run here?
3. State the stochastic isometry that makes the noise part
   contractive.
4. State Feynman-Kac, and what applying Itô's formula to $u(t,
   B_t)$ proves.
5. What does the Feynman-Kac dictionary say Stage M6's equations
   are?
6. Identify the drift and diffusion of the Ornstein-Uhlenbeck
   SDE $dX_t = -\lambda X_t dt + \sigma dB_t$.
7. Why does Feynman-Kac's $V$ term carry a minus sign in
   $\partial_t u = \frac{1}{2} u_{xx} - V u$?
8. State what happens to the Feynman-Kac expectation when $V \equiv
   0$, and name the underlying theorem.

<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** $X_t = X_0 + \int_0^t b(X_s) ds + \int_0^t \sigma(X_s)
dB_s$; drift $b$ and diffusion coefficient $\sigma$. **2.** Stage
G9's Picard contraction, run on continuous adapted processes with
the sup-norm in expectation. **3.** The Itô isometry:
$\mathbb{E}[(\int \sigma \, dB)^2] = \mathbb{E}[\int
\sigma^2]$. **4.** That $u$ solves $\partial_t u = \frac{1}{2}
u_{xx} - Vu$: the PDE is the martingale statement in disguise.
**5.** Solutions of parabolic PDEs are expectations over random
paths: analysis and probability are one subject read twice.
**6.** Drift $b(x) = -\lambda x$ (pulling toward zero) and constant diffusion $\sigma$: the mean-reverting specimen. **7.** The exponential discount $e^{-\int V}$ weights long-surviving paths less; in the PDE it enters as the subtraction, the potential's killing rate. **8.** With $V = 0$ the expectation is $\mathbb{E}[\varphi(x + B_t)]$, the heat semigroup applied to $\varphi$: Stage G's heat equation, the $V$-free core of Feynman-Kac.

</div>
</details>

:::

## 5. Girsanov and Martingale Representation

**Theorem (martingale representation; stated).** Every square-
integrable martingale adapted to Brownian motion's filtration is
$M_t = M_0 + \int_0^t H_s \, dB_s$ for a unique adapted square-
integrable $H$: every martingale is a betting strategy on the
Brownian coin, and the strategy is unique.

*Honest scope.* The proof runs through Stage M2's Hilbert-space
isometry (the Itô isometry identifies the integral operators with
an isometry between $L^2$ spaces of integrands and of
martingales) and books the fine print to the research literature.

**Theorem (Girsanov; stated).** Under a new probability measure
whose density (Stage I's Radon-Nikodym derivative) is the
exponential martingale built from an adapted process $\theta_s$,
the process $B_t - \int_0^t \theta_s ds$ becomes Brownian motion:
a drift can be manufactured by changing the measure, not the
paths.

*Honest scope.* The density's martingale property is Section 1's
exponential martingale certified by Stage G9's boundedness gates;
the theorem's conclusion changes expectations, not the set of
paths. The consequence that made the theorem famous: in pricing,
the choice of measure converts any drift into the risk-neutral
one, and the price is the expectation under the measure where the
discounted asset is a martingale (Section 1's fair game), tying
the stage back to its own definition.

:::note[Quick check]

1. State martingale representation, and the uniqueness claim.
2. What is the exponential martingale's role in Girsanov?
3. What does Girsanov change: the paths, or the probabilities?
4. State the risk-neutral reading of a martingale measure.
5. Which earlier stage's theorem is the density's martingale
   certificate?
6. Compute the exponential martingale $\mathcal{E}_t :=
   \exp(\sigma B_t - \sigma^2 t / 2)$'s value at $t = 0$, and
   state its martingale property in expectation form.
7. Under the Girsanov-measure shift with $\theta \equiv 1$, what
   does the process $B_t - t$ become?
8. State the risk-neutral pricing sentence in martingale language.

<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** Every Brownian-adapted square-integrable martingale is an
Itô integral with a unique integrand $H$. **2.** Its density
defines the new measure under which the drifted process is
Brownian. **3.** The probabilities: the paths are the same
functions, their likelihoods change. **4.** The measure under
which the discounted asset has zero conditional drift: Section
1's fair game. **5.** Stage G9's contraction boundedness gates
(the exponential martingale's certification is the boundedness
bookkeeping of the Picard argument).
**6.** $\mathcal{E}_0 = 1$; martingale: $\mathbb{E}[\mathcal{E}_t \mid \mathcal{F}_s] = \mathcal{E}_s$, Section 1's fair game in continuous dress. **7.** A standard Brownian motion: the drift $t$ is removed by the measure change with $\theta = 1$. **8.** The discounted asset price is a martingale under the chosen measure: no strategy adapted to the filtration beats the risk-free rate.

</div>
</details>

:::

## Stage Gate

:::caution[Pass mark: four of five]
Before the Course Map's remaining frontier, answer these five
without notes. A failed gate names the section to reread (1:
Section 1; 2: Section 2; 3: Section 3; 4: Section 4; 5: Section 5).

1. Define martingale via conditional expectation, and prove the
   zero-conditional-gain reading.
2. Define Brownian motion, and state its two pathologies.
3. State Itô's formula, and explain where the correction term
   comes from.
4. Write the SDE's integral form, and state existence-uniqueness
   with its engine.
5. State Feynman-Kac, martingale representation, and Girsanov.

<details class="wn-spoiler">
<summary>Gate answers</summary>
<div class="wn-spoiler-body">

**1.** Adapted, integrable,
$\mathbb{E}[X_t \mid \mathcal{F}_s] = X_s$; the step reading:
$\mathbb{E}[X_t - X_{t-1} \mid \mathcal{F}_{t-1}] = 0$. **2.**
Continuous paths, independent normal increments with variance
elapsed time; paths are continuous nowhere differentiable, with
quadratic variation $t$. **3.** $f(B_t) = f(B_0) + \int f' dB +
\frac{1}{2} \int f'' ds$; the correction is the quadratic
variation surviving as time. **4.** $X_t = X_0 + \int b(X_s) ds +
\int \sigma(X_s) dB_s$; Lipschitz coefficients give a unique
continuous adapted solution by Picard in the adapted-process
space. **5.** Feynman-Kac: the averaged path functional solves
$\partial_t u = \frac{1}{2} u_{xx} - Vu$; representation: every
Brownian martingale is an Itô integral with unique integrand;
Girsanov: an exponential-martingale measure turns drifted
processes Brownian.

</div>
</details>

:::

## Problems

**Problems.** The quick checks tested recall. These chain several
results and require full written arguments.

1. Prove that the stopped process $X^T_t := X_{t \wedge T}$ is a
   martingale when $X$ is and $T$ is a bounded stopping time, by
   the optional-stopping decomposition.
   *(Hint: $X_{t \wedge T} = X_0 + \sum_{j} (X_{j \wedge T} -
   X_{j-1 \wedge T}) \cdot \mathbf{1}_{T \geq j}$-style telescoping;
   each increment's conditional expectation vanishes because the
   indicator is adapted.)*
2. Prove the Kolmogorov continuity step: if $\mathbb{E}[|B_t -
   B_s|^4] \leq C |t - s|^2$, then almost every path is
   Hölder-$1/4$ continuous, via the Borel-Cantelli union over
   dyadic meshes.
   *(Hint: sum the fourth-moment bounds over the dyadic pairs at
   each scale; the total is finite, so Borel-Cantelli leaves
   finitely many violations per pair of scales, and the Hölder
   constant absorbs them.)*
3. Compute the Itô differential of $f(B_t, t) := e^{\sigma B_t -
   \sigma^2 t / 2}$ and verify it has zero drift: the exponential
   martingale of Section 5.
   *(Hint: Itô's formula gives $df = \sigma f \, dB + (\sigma^2
   f/2 - \sigma^2 f/2) dt$: the second-derivative term cancels
   the time term exactly.)*
4. Solve the Ornstein-Uhlenbeck SDE $dX_t = -\lambda X_t dt +
   \sigma dB_t$ by the integrating-factor method: multiply by
   $e^{\lambda t}$, apply Itô's product rule (Problem 3's
   exponential as the factor), and read off the explicit solution.
   *(Hint: $d(e^{\lambda t} X_t) = \lambda e^{\lambda t} X_t dt +
   e^{\lambda t} dX_t$; the drift cancels, leaving an integrable
   Brownian term: $X_t = e^{-\lambda t} X_0 + \sigma
   \int_0^t e^{-\lambda (t - s)} dB_s$.)*
5. Prove that the solution of the heat equation $\partial_t u =
   \frac{1}{2} u_{xx}$ with initial data $\varphi$ is
   $u(t, x) = \mathbb{E}[\varphi(x + B_t)]$, by applying Itô's
   formula to $\varphi(x + B_t)$ and matching the terms with the
   PDE, in the reverse direction of Section 4's Feynman-Kac.
   *(Hint: Itô on $f(t, x) = \varphi(x + B_t)$ treats $t$ as a
   parameter; the $dt$ term is $0$ for the shifted function, so
   instead run Itô on $u(t, x + B_t)$ with $u$ the claimed
   solution and match drift against the PDE.)*

## Where to Go Next

The course closes its loop. Stage A taught what a proof is; Stage O
proves theorems about randomness whose very paths are unprovable
objects of Stage A's naive imagination. Every debt in the ledger is
paid, every declared theorem now has its stage, and the map at the
hub records the whole route: the [Course Map](/17-core-course/) is
the complete journey, and the reader who walked it holds every
tool the later literature assumes.

**Next: the [Course Map](/17-core-course/), the completed journey.**
