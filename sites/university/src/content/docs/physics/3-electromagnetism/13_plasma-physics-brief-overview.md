---
title: "Plasma Physics: Brief Overview"
tags:
  - Physics
  - University
description: ""s law

**Problem.** A uniformly charged sphere of radius $R$ has total charge $Q$. Find $E$ inside and
outside.

**Solution.** Outside ($r > R$):
$\oint E \cdot dA = Q/\varepsilon_0 \implies E \cdot 4\pi r^2 = Q/\varepsilon_0 \implies E = \frac{Q}{4\pi\varepsilon_0 r^2}$.
Inside ($r < R$): enclosed charge $= Q(r/R)^3$. $E = \frac{Qr}{4\pi\varepsilon_0 R^3}$.

$\blacksquare$

### Example 2: Poynting vector

**Problem.** An EM wave has $E_0 = 100 \mathrm{ V/m}$ in vacuum. Find the average Poynting vector
magnitude.

**Solution.**
${\langle S \rangle = \frac{E_0^2}{2\mu_0 c} = \frac{100^2}{2 \times 4\pi \times 10^{-7} \times 3 \times 10^8} = \frac{10000}{754} \approx 13.3 \mathrm{ W/m}^2}$.

$\blacksquare$

## Common Pitfalls

- **Confusing Gauss's law applications.** Gauss’s law is most useful for systems with high symmetry
  (spherical, cylindrical, planar). **Fix:** Choose a Gaussian surface matching the symmetry; the
  flux through the surface equals the enclosed charge divided by $\varepsilon_0$.
- **Wrong Maxwell equation sign.** Faraday's law has a negative sign:
  $\nabla \times \vec{E} = -\frac{\partial \vec{B}}{\partial t}$. **Fix:** The minus sign reflects
  Lenz's law — the induced EMF opposes the change in flux.
- **Confusing $\vec{D}$ and $\vec{E}$, $\vec{H}$ and $\vec{B}$.**
  $\vec{D} = \varepsilon_0\vec{E} + \vec{P}$; $\vec{H} = \vec{B}/\mu_0 - \vec{M}$. **Fix:** In
  vacuum: $\vec{D} = \varepsilon_0\vec{E}$, $\vec{H} = \vec{B}/\mu_0$.

## Summary

- Maxwell's equations: Gauss’s law, Gauss's law for magnetism, Faraday’s law, Ampère-Maxwell law.
- Gauss's law: $\oint \vec{E} \cdot d\vec{A} = Q_{\text{enc}}/\varepsilon_0$.
- EM waves: $E_0 = cB_0$; $c = 1/\sqrt{\mu_0\varepsilon_0}$; Poynting vector
  $\vec{S} = \vec{E} \times \vec{H}/\mu_0$.
- Boundary conditions: tangential $E$ and normal $B$ are continuous across interfaces.

## Cross-References

| Topic              | Site       | Link                                                                                                          |
| ------------------ | ---------- | ------------------------------------------------------------------------------------------------------------- |
| [Electromagnetism] | A-Level    | [View](https://alevel-maths-physics.wyattau.com/docs/alevel/physics/fields/03-electromagnetism-unification)   |
| [Electromagnetism] | IB         | [View](https://ib.wyattau.com/docs/ib/physics/4-fields/4_induction)                                           |
| [Electromagnetism] | DSE        | [View](https://dse.wyattau.com/docs/dse/physics/3-electricity-and-magnetism/3_magnetism-and-electromagnetism) |
| [Electromagnetism] | University | [View](https://university.wyattau.com/docs/physics/3-electromagnetism/1_electromagnetism)                     |

