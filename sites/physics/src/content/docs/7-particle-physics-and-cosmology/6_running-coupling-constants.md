---

date: 2026-07-23T21:57:32+01:00
title: Running Coupling Constants
tags:
  - Physics
  - University
description: 'The strong coupling depends on the energy scale : Comprehensive educational content coverage with definitions, worked examples, and practice problems.'
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "physics", "url": "https://physics.wyattau.com"}, {"name": "7 Particle Physics And Cosmology", "url": "https://physics.wyattau.com/7-particle-physics-and-cosmology"}, {"name": "6_running Coupling Constants", "url": "https://physics.wyattau.com/7-particle-physics-and-cosmology/6_running-coupling-constants"}]
}
</script>

### 6.1 Asymptotic Freedom and Confinement

The strong coupling $\alpha_s$ depends on the energy scale $\mu$:

$$\alpha_s(\mu) = \frac{\alpha_s(\mu_0)}{1 + \frac{\alpha_s(\mu_0)}{12\pi}(33 - 2n_f)\ln(\mu^2/\mu_0^2)}$$

Where $n_f$ is the number of active quark flavours.

- **Asymptotic freedom:** For $n_f \lt 17$, $\alpha_s$ decreases at high energies. Quarks behave as
  nearly free particles at short distances.
- **Confinement:** At low energies, $\alpha_s$ becomes large, and perturbation theory breaks down.
  Quarks are confined into hadrons.

The electromagnetic coupling also runs (but increases at high energies):

$$\alpha(\mu) = \frac{\alpha(\mu_0)}{1 - \frac{\alpha(\mu_0)}{3\pi}\ln(\mu^2/\mu_0^2)}$$

### 6.2 Beta Functions

The running of coupling constants is governed by the **beta function**:

$$\beta(g) \equiv \mu\frac{dg}{d\mu}$$

At one-loop order:

**QED:**

$$\beta_{\mathrm{QED}(e) = \frac{e^3}{12\pi^2} \quad \Rightarrow \quad \beta_{\mathrm{QED}(\alpha) = \frac{2\alpha^2}{3\pi} \gt 0}}$$

The positive beta function means the electromagnetic coupling **increases** with energy
(antiscreening).

**QCD:**

$$\beta_{\mathrm{QCD}(g_s) = -\frac{g_s^3}{16\pi^2}\left(\frac{11}{3}C_A - \frac{4}{3}T_F n_f\right)}$$

For SU(3), $C_A = N = 3$ and $T_F = 1/2$:

$$\beta_{\mathrm{QCD}(g_s) = -\frac{g_s^3}{16\pi^2}\left(11 - \frac{2n_f}{3}\right)}$$

The negative sign (for $n_f \lt 33/2$) means the strong coupling **decreases** with energy: This is
**asymptotic freedom** (Gross, Wilczek, and Politzer, Nobel Prize 2004).

**Interpretation.** The gluon self-interaction (the $C_A$ term) dominates over fermion screening
(the $n_f$ term) for the physically relevant number of flavours. Gluons carry colour charge and
Therefore antiscreen, leading to the coupling decreasing at short distances.

### 6.3 Grand Unification and the Unification Scale

If the three gauge couplings are extrapolated to very high energies, they approximately meet at
$\mu \sim 10^{15}$ GeV (in the Minimal Supersymmetric Standard Model), suggesting unification into a
Simple group such as SU(5) or SO(10).

<details>
<summary>Example 6.1: Estimating the unification scale</summary>

At one loop, the coupling at scale $\mu$ is:

$$\alpha_i^{-1}(\mu) = \alpha_i^{-1}(\mu_0) - \frac{b_i}{2\pi}\ln\left(\frac{\mu}{\mu_0}\right)$$

Where $b_i$ are the one-loop beta function coefficients and $\mu_0 = m_Z \approx 91.2$ GeV.

For the SM, the coefficients are:

- $b_1 = -41/(10\pi)$ for $\mathrm{U}(1)_Y$ (properly normalised)
- $b_2 = -19/(6\pi)$ for $\mathrm{SU}(2)_L$
- $b_3 = -7/\pi$ for $\mathrm{SU}(3)_C$

At the unification scale $M_{\mathrm{GUT}}$All three couplings are equal:
$\alpha_1^{-1}(M_{\mathrm{GUT}) = \alpha_2^{-1}(M_{\mathrm{GUT}) = \alpha_3^{-1}(M_{\mathrm{GUT})}}}$.

Setting $\alpha_1^{-1} = \alpha_2^{-1}$:

$$\alpha_1^{-1}(m_Z) - \alpha_2^{-1}(m_Z) = \frac{b_2 - b_1}{2\pi}\ln\left(\frac{M_{\mathrm{GUT}}{m_Z}\right)}$$

With $\alpha_1^{-1}(m_Z) \approx 59.0$, $\alpha_2^{-1}(m_Z) \approx 29.6$:

$$59.0 - 29.6 = \frac{b_2 - b_1}{2\pi}\ln\left(\frac{M_{\mathrm{GUT}}{m_Z}\right)}$$

This gives $M_{\mathrm{GUT} \sim 10^{13}}$--$10^{16}$ GeV depending on the precise Coefficients and
the inclusion of threshold corrections. In the MSSM, the modified beta Coefficients give a much
cleaner unification at $M_{\mathrm{GUT} \sim 2 \times 10^{16}}$ GeV.

</details>

<aside class="starlight-aside starlight-aside--caution">
extrapolated using SM beta Functions. The three lines form a rough triangle. It is only in
supersymmetric extensions (MSSM) That the additional superpartner contributions to the beta
functions bring the three couplings to Near-convergence. This convergence is often cited as indirect
evidence for supersymmetry.

</aside>
### 6.4 Key Relationships

- The beta function encodes how a coupling changes with energy scale.
- A negative beta function means asymptotic freedom; a positive one means screening.
- The running of $\alpha_s$ is measured precisely at $e^+e^-$ colliders and deep inelastic scattering.
- The Landau pole in QED marks the scale where perturbation theory breaks down.

### 6.5 Common Pitfalls

- Confusing the sign convention: $\beta(g) > 0$ means the coupling increases with energy.
- Assuming that asymptotic freedom implies confinement automatically. They are related but distinct phenomena.
- Forgetting that the number of active flavours $n_f$ depends on the energy scale relative to quark masses.
- Using the one-loop formula far beyond its validity range where higher-order corrections are significant.

### 6.6 Applications

- **Collider physics:** Precision measurements of $\alpha_s$ at the Z pole and LHC constrain the Standard Model.
- **Lattice QCD:** Numerical simulations compute $\alpha_s$ non-perturbatively from first principles.
- **Cosmology:** The running of couplings affects primordial nucleosynthesis and baryogenesis models.
- **Dark matter searches:** The scale dependence of $\alpha_s$ influences the calculation of hadronic backgrounds.

### 6.7 Worked Example: Estimating $\alpha_s$ at Different Scales

**Problem.** Given $\alpha_s(m_Z) = 0.118$ at $\mu_0 = m_Z = 91.2$ GeV, estimate $\alpha_s$ at $\mu = 1$ TeV.

<details>
<summary>Solution</summary>

At one loop with $n_f = 5$ active flavours:

$\alpha_s(\mu) = \frac{\alpha_s(\mu_0)}{1 + \frac{\alpha_s(\mu_0)}{12\pi}(33 - 2n_f)\ln(\mu^2/\mu_0^2)}$

$= \frac{0.118}{1 + \frac{0.118}{12\pi}(33 - 10)\ln(1000^2/91.2^2)}$

$= \frac{0.118}{1 + \frac{0.118}{37.70}(23)(4.80)}$

$= \frac{0.118}{1 + 0.0352}$

$= \frac{0.118}{1.0352} = 0.114$.

The coupling decreases from 0.118 to 0.114, consistent with asymptotic freedom. $\blacksquare$

</details>


## Intuition

Coupling constants are not truly constant: they change with energy scale through a process called renormalization group running. At low energies, the electromagnetic force appears weak, but at high energies, it strengthens. Meanwhile, the strong force weakens at high energies, a phenomenon called asymptotic freedom. This means that at extremely high energies, all three gauge forces may converge toward similar strengths, suggesting a unified origin. The running is logarithmic, so changes are gradual, but over the vast energy range from atomic to GUT scales, the effect is dramatic. This running is one of the strongest pieces of evidence for grand unification.
## Cross-References

- **[The Standard Model](7-particle-physics-and-cosmology/1_the-standard-model.md)**: The three gauge couplings of the Standard Model run with energy according to the renormalisation group equations.
- **[Group Theory in Particle Physics](7-particle-physics-and-cosmology/5_group-theory-in-particle-physics.md)**: The beta function coefficients depend on the group-theoretic factors of SU(3), SU(2), and U(1).
- **[Beyond the Standard Model](7-particle-physics-and-cosmology/9_beyond-the-standard-model.md)**: Gauge coupling unification requires new physics such as supersymmetry to bring the three couplings to convergence.
- **[Advanced Topics in Particle Physics](7-particle-physics-and-cosmology/11_advanced-topics-in-particle-physics.md)**: Deep inelastic scattering and the DGLAP equations measure the running of the strong coupling constant.

- [Calculus](https://mathematics.wyattau.com/docs/calculus)
- [Linear Algebra](https://mathematics.wyattau.com/docs/linear-algebra)
- [Vector Calculus](https://mathematics.wyattau.com/docs/vector-calculus)
