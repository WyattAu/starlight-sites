---
date: 2026-10-08T00:00:00.000Z
title: "Ricci Flow and Geometrisation"
description: "Ricci flow and geometrisation: the heat equation for curvature, Hamilton's theorem on positive Ricci curvature, Perelman's entropy and the Poincare conjecture, and where it goes at research level -- singularity analysis, Ricci solitons and the differentiable sphere theorem. Research tier building on Riemannian geometry and curvature."
tags:
  - Mathematics
  - University
  - Differential Geometry
  - Ricci Flow
categories:
  - Mathematics
---

## Ricci Flow and Geometrisation

**Tier: R (Research).** Builds on Riemannian geometry, curvature and geodesics.
The Ricci flow is a heat equation for curvature, and in twenty years it went
from Hamilton's proposal to a proof of the Poincare conjecture a century after
it was posed. This page covers the mechanism, the singularity problem that
makes it hard, and the research questions still open.

## Recall prompts

Attempt these from memory *before* reading.

- Define the Ricci curvature tensor and the scalar curvature. How do they
  relate to the Riemann tensor?
- State the heat equation. What does the heat equation do to a temperature
  distribution?
- State the uniformisation theorem for surfaces.
- What is a 3-manifold? What does "simply connected" mean?

## Motivation: a heat equation for geometry

The uniformisation theorem (1907) says every closed surface admits a metric of
constant Gaussian curvature: positive on the sphere, zero on the torus,
negative everywhere else. Every surface is geometrically one of three types.

The natural question for a century: **is the same true in three dimensions?**
The answer is no -- 3-manifolds admit eight model geometries, not three -- but
the stronger and more famous question is whether every simply connected
closed 3-manifold is the 3-sphere. That is the **Poincare conjecture**, posed
1904, open for 99 years.

Hamilton's idea (1982): the uniformisation theorem is proved by a *heat flow*
on metrics, so run a heat flow on metrics in three dimensions and see where it
converges. The flow is

$$
\frac{\partial}{\partial t} g(t) = -2 \operatorname{Ric}(g(t)),
$$

where $\operatorname{Ric}$ is the Ricci tensor. Positive curvature decreases
under the flow, exactly as heat diffuses from hot to cold.

**Why it is not just a heat equation.** The heat equation is parabolic because
the second derivative in space is elliptic. The Ricci flow is only *weakly
parabolic*: the operator has a kernel caused by the diffeomorphism invariance
of the equation -- pulling back by a diffeomorphism gives the same metric
geometrically but a different point in the space of metrics. DeTurck's trick
fixes the gauge and makes the flow parabolic, which is what gives short-time
existence and uniqueness.

## The mechanism

**In words.** Curvature measures how volumes deviate from Euclidean. Positive
Ricci curvature makes volumes grow more slowly than in Euclidean space, so the
flow shrinks them. The flow is designed so that the shrinking is fastest where
the curvature is largest, which is what lets it smooth out irregularities.

**As equations.** In local coordinates,

$$
\frac{\partial g_{ij}}{\partial t} = -2 R_{ij},
$$

and the scalar curvature satisfies

$$
\frac{\partial R}{\partial t} = \Delta R + 2|\operatorname{Ric}|^2,
$$

where $\Delta$ is the Laplace–Beltrami operator. That is a genuine heat
equation with a reaction term $2|\operatorname{Ric}|^2 \ge 0$ -- which is why
the flow focuses rather than merely diffuses.

**As a picture.**

```text
   a lumpy metric        under Ricci flow        a round metric
   ..............        ..................      ............
  .   /\   ___   .      .   ....   ____   .     .            .
 .   /  \ /   \  .  →   .  ....   ....   .  →   .     ....    .
 .   \__/ \___/  .      .   ....   ___   .      .            .
   ............          ..................      ............
  high curvature         curvature evening out   constant curvature
```

**Hamilton's theorem (A, 1982).** If a closed 3-manifold admits a metric with
positive Ricci curvature, then it admits a metric of constant positive
sectional curvature — i.e. it is a quotient of the 3-sphere.

That is the 3-dimensional analogue of the positive-curvature case of
uniformisation, and it was the first sign the flow could work.

## Proofs

Perelman's full argument is roughly a thousand pages and cannot be reproduced
here. Two results can, and they are not arbitrary choices: the first is the
opening step of Hamilton's theorem, and the second is the computation that made
Perelman's contribution possible. Both are self-contained.

**Theorem (maximum principle for the scalar curvature).** Let $g(t)$ flow by
Ricci flow on a closed manifold. If $R(\cdot, 0) \geq c > 0$ everywhere, then
$R(\cdot, t) \geq c$ for all $t$. More generally, if $R(\cdot, 0) \geq 0$ then
$R(\cdot, t) \geq 0$ for all $t$.

*Proof.* The evolution equation is
$\partial_t R = \Delta R + 2|\operatorname{Ric}|^2$, a heat equation with a
non-negative reaction term, so $R$ is a supersolution of the heat equation:
$\partial_t R - \Delta R \geq 0$.

Handle the constant case first, by a damping trick. Fix $\varepsilon > 0$ and put
$v = R - c - \varepsilon t$. Then $\partial_t v - \Delta v \geq \varepsilon > 0$.
Suppose $v$ becomes negative somewhere, and let $(x_0, t_0)$ be the first
space-time point where it does, in the sense that $v \geq 0$ on
$M \times [0, t_0)$ and $v(x_0, t_0) < 0$ at the earliest such time. At
$(x_0, t_0)$ the value is falling through zero, so $\partial_t v \leq 0$, and it
is a spatial minimum, so $\Delta v \geq 0$; hence

$$
\partial_t v - \Delta v \leq 0,
$$

contradicting $\partial_t v - \Delta v \geq \varepsilon$. Letting
$\varepsilon \to 0$ gives $R \geq c$; and for the weaker hypothesis take $c = 0$. $\blacksquare$

Two hypotheses are doing work, and neither is decoration. Closedness of $M$ is
what makes the spatial minimum exist and what kills the boundary term behind
$\Delta v \geq 0$ at a minimum. And the reaction term
$2|\operatorname{Ric}|^2 \geq 0$ is what makes the principle useful rather than
merely true: for a pure heat equation the maximum of a solution decays, so
positive curvature would diffuse away, while here the reaction term pushes $R$
upward, so positive scalar curvature is preserved and amplified. That
amplification is what lets Hamilton conclude, and it is the reason the flow was
designed with $-2\operatorname{Ric}$ rather than $+2\operatorname{Ric}$.

The rigidity clause -- that a metric with $R \geq 0$ everywhere and $R = 0$ at
one point splits off a factor, forcing constant curvature -- is where this
argument earns its "strong" prefix. It requires the equality case of the maximum
principle, which needs more machinery than the strict version and is not proved
here; saying so is part of saying what has been proved.

**Theorem ($\mathcal{F}$-monotonicity, Perelman 2002).** Let

$$
\mathcal{F}(g, f) = \int_M \left(R + |\nabla f|^2\right) e^{-f}\, dV,
$$

and flow the pair $(g, f)$ by $\partial_t g = -2\operatorname{Ric}$,
$\partial_t f = -\Delta f - R$. Then

$$
\frac{d}{dt}\mathcal{F} = 2\int_M \left|\operatorname{Ric} + \nabla^2 f\right|^2 e^{-f}\, dV \geq 0,
$$

with equality iff the metric is a gradient shrinking soliton.

*Proof.* Three variation formulas, each obtained by differentiating the standard
identities along the flow:

$$
\partial_t R = \Delta R + 2|\operatorname{Ric}|^2,
\qquad
\partial_t(dV) = -R\,dV,
\qquad
\partial_t|\nabla f|^2 = 2\langle\operatorname{Ric}(\nabla f), \nabla f\rangle + 2\langle\nabla f, \nabla(\partial_t f)\rangle.
$$

The first is the scalar curvature evolution already stated. The second is the
first variation of volume for the variation field $-\operatorname{Ric}$. The third
is the compatibility of the Levi-Civita connection with the flow. Differentiating
under the integral and substituting $\partial_t f = -\Delta f - R$:

$$
\frac{d}{dt}\mathcal{F}
= \int\Big(\partial_t R + \partial_t|\nabla f|^2\Big)e^{-f}dV
+ \int\big(R + |\nabla f|^2\big)e^{-f}\big(-\partial_t f - R\big)dV
$$

$$
= \int\Big(\Delta R + 2|\operatorname{Ric}|^2\Big)e^{-f}dV
+ 2\int\langle\operatorname{Ric}\nabla f, \nabla f\rangle e^{-f}dV
+ 2\int\langle\nabla f, \nabla(\Delta f + R)\rangle e^{-f}dV
+ \int\big(R + |\nabla f|^2\big)\Delta f\; e^{-f}dV,
$$

the $-R$ from $\partial_t dV$ cancelling the $-R$ from $-\partial_t f$. Three
integrations by parts. For the $\Delta R$ term, move the Laplacian onto $e^{-f}$:
$\int \Delta R\, e^{-f} = \int R\,\Delta e^{-f} = \int R(|\nabla f|^2 - \Delta f)e^{-f}$.
For the gradient term, move $\nabla$ onto $e^{-f}$ the same way. Collecting, all
the $R\Delta f$ and $|\nabla f|^2$ terms cancel in pairs, leaving

$$
\frac{d}{dt}\mathcal{F}
= \int\Big(2|\operatorname{Ric}|^2 + 2\langle\operatorname{Ric}, \nabla^2 f\rangle + 2|\nabla^2 f|^2\Big)e^{-f}dV
= 2\int|\operatorname{Ric} + \nabla^2 f|^2\, e^{-f}dV \geq 0.
$$

Equality forces $\operatorname{Ric} + \nabla^2 f$ to vanish as a $(0,2)$-tensor,
which under the normalisation $\int e^{-f}dV = (4\pi t)^{3/2}$ is the gradient
shrinking soliton equation. $\blacksquare$

**Why this is the pivot of the subject.** A flow can say nothing about its
singularities without a monotone quantity: monotonicity is a coordinate-free
measurement that can only increase, so it compares the geometry before a
singularity with the geometry after and rules out most ways of degenerating.
Perelman's $\mathcal{W}$ functional adds a scale parameter to $\mathcal{F}$ and
uses its monotonicity to prove *no local collapsing* -- that a region of small
volume cannot persist with bounded curvature. That is the step separating the
geometrisation theorem from everything before it, and the computation above is
its engine, written out.

## Singularity formation: why the problem is hard

The flow develops **singularities** in finite time. On a sphere, the metric
shrinks to a point in finite time $T$, with curvature blowing up like $1/(T-t)$
— and at $T$ you can rescale and the manifold *is* the round sphere, so the
flow has done its job.

On a general 3-manifold, singularities can be worse: necks can pinch, and the
topology can change. Two strategies:

- **Surgery (Hamilton–Perelman).** Cut out singular regions before they form,
  cap the holes, restart the flow. If the singular regions are precisely the
  pieces whose topology you understand, the flow is performing a topological
  decomposition of the manifold.
- **Ricci flow with bubbles.** Study the rescaled limits at singularities
  (blow-up analysis) and classify them: the **κ-solutions** and **ancient
  solutions**. This is Perelman's route.

**Perelman's contribution (R, 2002–03).** Three preprints on the arXiv. The key
insight is a monotone quantity — **Perelman's entropy**

$$
\mathcal{W}(g, f) = \int \left( R|\nabla f|^2 + \frac{f - 2n}{2(T-t)} \right)
(4\pi(T-t))^{-n/2} e^{-f}\, dV
$$

— which is non-decreasing under the coupled flow of the metric and the
function $f$. Monotonicity gives non-collapsing (a lower volume bound at
singularities), which is what makes the blow-up limits non-trivial and
classifiable.

From there: singular regions are either caps or round necks, surgery is
well-defined, and after finitely many surgeries the manifold is a union of
pieces each admitting a geometric structure. That proves the **Geometrisation
Conjecture** (Thurston), of which the Poincare conjecture is the simply
connected case: a simply connected manifold with a geometric structure and no
boundary must be the 3-sphere.

## Why the proof matters beyond the conjecture

<div class="table-wrap">

| Tool | What it gives | Where else it is used |
| ---- | ------------- | --------------------- |
| Perelman's reduced volume | non-collapsing at singularities | convergence of Ricci flow, Ricci solitons |
| κ-solutions | classification of blow-up limits | singularity analysis in any dimension |
| Surgery | topology change under flow | the proof structure for geometrisation |
| Pseudolocality | small-scale almost-Euclidean behaviour | regularity of the flow |

</div>

The pseudolocality theorem is the one with the widest application: it says that
even if the initial metric is very irregular, the flow is almost Euclidean on
small scales for a short time. That is the parabolic analogue of the local
regularity theory for the heat equation, and it is used everywhere Ricci flow
appears.

## Counterexamples

<div class="table-wrap">

| Claim | True? | Counterexample |
| ----- | ----- | -------------- |
| Ricci flow exists for all time | no | the round sphere shrinks to a point in finite time |
| Ricci flow preserves isometry class | no | it deforms the metric, only the diffeomorphism type is preserved |
| Ricci solitons are static | no | they shrink or expand by a diffeomorphism; the Gaussian soliton expands |
| Every 3-manifold admits positive Ricci curvature | no | Thurston's geometrisation gives eight geometries, most with non-positive curvature |
| Ricci flow smooths any metric in any dimension | no | higher dimensions admit worse singularities; the flow can develop non-spherical singularities |

</div>

## Where the research frontier is

- **Differentiable sphere theorem.** Does Ricci flow distinguish smooth
  structures on the sphere? In dimension 4 and above there are exotic spheres,
  and whether the flow can detect them is open.
- **Ricci solitons.** Fixed points of the flow up to scaling and
  diffeomorphism. Classifying them is ongoing, and the noncompact case is wide
  open. The Bryant soliton is the standard example of a steady soliton.
- **Ricci flow in higher dimensions.** Böhm constructed examples in dimensions
  5 and higher where the flow develops singularities of non-spherical type,
  and the surgery theory is dimension-dependent.
- **Kähler–Ricci flow.** The same flow restricted to Kähler manifolds, where it
  simplifies dramatically. The Yau–Tian–Donaldson conjecture relates the flow's
  long-time existence to algebro-geometric stability, and was proved in
  important cases by Chen–Donaldson–Sun.

### More counterexamples

<div class="table-wrap">

| Object | Looks like | Is actually |
| ------ | ---------- | ----------- |
| Ricci flow | a pure smoothing equation | weakly parabolic; the diffeomorphism kernel must be fixed |
| Singularities | always a shrinking sphere | necks pinch; the topology can change |
| Perelman's entropy | a technical tool | the monotone quantity that makes the whole proof work |
| Geometrisation | a 3-dimensional curiosity | the model for how geometric flows decompose manifolds |

</div>

## Recall prompts — attempt after reading

- State the Ricci flow equation. What does it do to positive Ricci curvature?
- Why is the flow only weakly parabolic, and what fixes it?
- What is Perelman's entropy, and what does its monotonicity give?
- State Hamilton's theorem for positive Ricci curvature in dimension 3.
- What does geometrisation assert, and how does Poincare follow?

## Interleaving problems

Mix these with material from [Curvature](/12-differential-geometry/7_curvature/),
[Geodesics](/12-differential-geometry/6_geodesics/), [Measure
Theory](/10-measure-theory/2_measures/), [Functional
Analysis](/11-functional-analysis/1_normed-spaces-and-banach-spaces/) and
[Stochastic Calculus](/14-graduate-stochastic-analysis/1_ito-integration-and-formula/).

1. (Curvature.) Show that on a surface, $\operatorname{Ric} = K g$ where $K$ is
   the Gaussian curvature, so the Ricci flow on surfaces is
   $\partial_t g = -2Kg$.
2. (Geodesics.) Show that the round sphere's metric shrinks under Ricci flow by
   a factor depending on time, and compute the finite extinction time.
3. (Measure theory.) Show that Perelman's entropy involves an integral against
   the measure $(4\pi(T-t))^{-n/2} e^{-f} dV$, and identify this as a
   conjugation of the heat kernel measure.
4. (Functional analysis.) Show the linearisation of the Ricci flow at the round
   sphere has a kernel consisting of infinitesimal diffeomorphisms, which is
   the origin of the weak parabolicity.
5. (Stochastic analysis.) The stochastic Ricci flow adds a noise term to the
   equation. Explain the regularity problem the noise introduces and why it is
   harder than for the stochastic heat equation.

## See Also

- [Curvature](/12-differential-geometry/7_curvature/) — the Ricci tensor and
  the scalar curvature
- [Geodesics](/12-differential-geometry/6_geodesics/) — the flow's geodesics
  and how they deform
- [The Gauss-Bonnet Theorem](/12-differential-geometry/8_the-gauss-bonnet-theorem/)
  — the 2-dimensional case of uniformisation
- [Functional Analysis](/11-functional-analysis/1_normed-spaces-and-banach-spaces/)
  — the PDE theory the flow needs
- [How to Use These Notes](/how-to-use/) — the method
