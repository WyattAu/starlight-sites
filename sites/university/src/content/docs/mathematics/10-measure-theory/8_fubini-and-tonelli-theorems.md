---
title: Fubini and Tonelli Theorems
tags:
  - Mathematics
  - University
description: ""s Theorem

**Theorem 8.2 (Tonelli).** If $f : X \times Y \to [0, \infty]$ is
$\mathcal{F} \otimes \mathcal{G}$-measurable, then:

$$\int_{X \times Y} f\, d(\mu \times \nu) = \int_X \left(\int_Y f(x, y)\, d\nu\right) d\mu = \int_Y \left(\int_X f(x, y)\, d\mu\right) d\nu$$

### 8.3 Fubini's Theorem

**Theorem 8.3 (Fubini).** If $f \in L^1(\mu \times \nu)$, then for a.e. $x \in X$,
$f(x, \cdot) \in L^1(\nu)$; for a.e. $y \in Y$, $f(\cdot, y) \in L^1(\mu)$; and

$$\int_{X \times Y} f\, d(\mu \times \nu) = \int_X \left(\int_Y f(x, y)\, d\nu\right) d\mu = \int_Y \left(\int_X f(x, y)\, d\mu\right) d\nu$$

**Caution.** The order of integration matters when $f$ is not integrable. For example, the function
$f(x, y) = (x^2 - y^2)/(x^2 + y^2)^2$ on $[0,1]^2$ has different iterated integrals.

### 8.4 Worked Example

**Problem.** Compute $\int_0^\infty \int_0^\infty e^{-(x^2 + y^2)}\, dy\, dx$ using Fubini-Tonelli.

_Solution._ By Tonelli's theorem (since $e^{-(x^2+y^2)} \geq 0$):

$$\int_0^\infty \int_0^\infty e^{-(x^2 + y^2)}\, dy\, dx = \int_0^\infty e^{-x^2}\, dx \cdot \int_0^\infty e^{-y^2}\, dy = \left(\frac{\sqrt{\pi}}{2}\right)^2 = \frac{\pi}{4}$$

$\blacksquare$

