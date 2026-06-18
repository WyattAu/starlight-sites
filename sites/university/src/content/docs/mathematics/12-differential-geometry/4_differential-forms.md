---
title: Differential Forms
tags:
  - Mathematics
  - University
description: "" Theorem

**Theorem 4.3 (Stokes' Theorem).** Let $M$ be an oriented $n$-dimensional manifold with boundary
$\partial M$ (with the induced orientation). If $\omega$ is a compactly supported $(n-1)$-form on
$M$, then:

$$\int_{\partial M} \omega = \int_M d\omega$$

**Special Cases:**

- **Fundamental Theorem of Calculus** ($n = 1$): $\int_a^b f'(x)\, dx = f(b) - f(a)$.
- **Green's Theorem** ($n = 2$):
  $\oint_{\partial D} P\, dx + Q\, dy = \iint_D \left(\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\right) dx\, dy$.
- **Classical Stokes' Theorem** ($n = 3$):
  $\oint_{\partial S} \mathbf{F} \cdot d\mathbf{r} = \iint_S (\nabla \times \mathbf{F}) \cdot d\mathbf{S}$.
- **Divergence Theorem** ($n = 3$):
  $\oint_{\partial V} \mathbf{F} \cdot d\mathbf{S} = \iiint_V (\nabla \cdot \mathbf{F})\, dV$.

