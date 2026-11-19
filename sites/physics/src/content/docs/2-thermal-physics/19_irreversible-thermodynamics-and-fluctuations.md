---

date: 2026-07-23T21:57:32+01:00
title: Irreversible Thermodynamics and Fluctuations
tags:
  - Physics
  - University
description: "The classical fluctuation-dissipation theorem relates the autocorrelation function of a fluctuating variable to the linear response function."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "physics", "url": "https://physics.wyattau.com"}, {"name": "2 Thermal Physics", "url": "https://physics.wyattau.com/2-thermal-physics"}, {"name": "19_irreversible Thermodynamics And Fluctuations", "url": "https://physics.wyattau.com/2-thermal-physics/19_irreversible-thermodynamics-and-fluctuations"}]
}
</script>

**History.** The linear-response synthesis is the Green-Kubo formalism of the 1950s, named for Murray S. Green and Ryogo Kubo, who turned the fluctuation-dissipation theorem into a recipe: every transport coefficient is a time integral of an equilibrium correlation function. The modern chapter came four decades later: Denis Evans and colleagues derived the first fluctuation theorem in 1993, Christopher Jarzynski published his equality in 1997, and Gavin Crooks strengthened it to the full forward-reverse relation in 1999, results that quantify how often a small system appears to run the second law backwards, confirmed in single-molecule experiments within a few years.

**Ponder (attempt the reading).** The time-domain statement says the response function is a derivative of an equilibrium correlation: $\chi(t) = \frac{1}{k_B T} \frac{d}{dt} \langle A(t) A(0) \rangle$. Attempt to read the Brownian example against it: the velocity correlation $\langle v(t) v(0) \rangle = \frac{k_B T}{m} e^{-t/\tau}$ must encode the mobility. Attempt to extract the Einstein relation from it.

<details class="wn-spoiler">
<summary>The resolution</summary>
<div class="wn-spoiler-body">

Differentiate the exponential correlation: $\chi(t) = -\frac{1}{\tau} \langle v(t) v(0)\rangle / k_B T$ up to sign conventions. Integrating the response over the drive gives the velocity gained per unit force, $\mu = \tau/m$: the mobility is the correlation's memory time. With charge $e$, $\mu = e\tau/m$, and pairing with $\langle v^2 \rangle = k_B T/m$ yields Einstein's $D = \mu k_B T$: the diffusion constant and the mobility are one correlation function viewed twice.

</div>
</details>

### 19.1 Fluctuation-Dissipation in the Time Domain

The classical fluctuation-dissipation theorem relates the autocorrelation function of a fluctuating
variable to the linear response function:

$$
\chi(t) = \frac{1}{k_BT}\frac{d}{dt}\langle A(t)A(0)\rangle
$$

For example, the velocity autocorrelation function of a Brownian particle:

$$
\langle v(t)v(0)\rangle = \frac{k_BT}{m}e^{-t/\tau}
$$

Gives the mobility $\mu = e\tau/m$ (Einstein relation).

### 19.2 Johnson--Nyquist Noise Spectrum

The voltage noise spectrum across a resistor $R$ at temperature $T$:

$$
S_V(f) = 4k_BTR
$$

This is **white noise** (frequency-independent up to $f \sim k_BT/h$).

The voltage fluctuation in bandwidth $\Delta f$:

$$
\langle V^2 \rangle = 4k_BTR\,\Delta f
$$

### 19.3 Jarzynski Equality

The **Jarzynski equality** (1997) connects non-equilibrium work to equilibrium free energy
differences:

$$
\langle e^{-\beta W}\rangle = e^{-\beta\Delta F}
$$

Where the average is over many realisations of a process that drives the system from equilibrium
state $A$ to equilibrium state $B$ in time $\tau$.

**Consequences:**

- By Jensen's inequality: $\langle W \rangle \geq \Delta F$ (the average work is never less than the
  free energy change).
- For quasi-static processes: $\langle W \rangle = \Delta F$ and the distribution of $W$ is a delta
  function.
- For fast (far-from-equilibrium) processes: $\langle W \rangle > \Delta F$ But the exponential
  average still equals $e^{-\beta\Delta F}$.

This remarkable result has been verified experimentally in single-molecule pulling experiments (RNA,
DNA hairpins) using optical tweezers.

**Ponder (attempt the crossing).** Crooks relates entire work distributions: $P_F(W)/P_R(-W) = e^{\beta(W - \Delta F)}$. Attempt to locate the boundary point where neither direction is favoured, and to explain what microscopic ingredient forces the ratio to be exactly exponential.

<details class="wn-spoiler">
<summary>The resolution</summary>
<div class="wn-spoiler-body">

The ratio equals 1 at $W = \Delta F$: realisations doing exactly the free-energy difference are equally likely forward and backward. Below $\Delta F$ (transient second-law violations) the reverse process dominates; above it, the forward does. The exponential form is forced by microscopic reversibility: detailed balance fixes each path's probability ratio to $e^{\beta W}$, and folding in the equilibrium endpoints contributes the $-\beta\Delta F$. Integrating Crooks over $W$ with the Jarzynski kernel recovers the equality as a corollary.

</div>
</details>

### 19.4 Crooks Fluctuation Theorem

The **Crooks theorem** (1999) relates the work distributions for forward and reverse processes:

$$
\frac{P_F(W)}{P_R(-W)} = e^{\beta(W - \Delta F)}
$$

Where $P_F(W)$ is the probability distribution of work for the forward process and $P_R(W)$ for the
reverse process.

This implies the Jarzynski equality as a special case:

$$
\int P_F(W)\,e^{-\beta W}\,dW = \int P_R(-W)\,e^{-\beta\Delta F}\,dW = e^{-\beta\Delta F}
$$

<details>
<summary>Worked Example 19.1: Jarzynski Equality for a Two-Level System</summary>

Consider a two-level system with $\epsilon_1 = 0$ and $\epsilon_2 = \epsilon$ Initially in
equilibrium at inverse temperature $\beta$.

The free energy: $F = -k_BT\ln Z = -k_BT\ln(1 + e^{-\beta\epsilon})$.

Now the energy gap is suddenly changed from $\epsilon$ to $\epsilon"$. The work done is:

$$
W = \begin{cases} 0 & \text{with} prob.  p_1 = 1/Z \\ \epsilon' - \epsilon & \text{with} prob.  p_2 = e^{-\beta\epsilon}/Z \end{cases}
$$

The Jarzynski average:

$$
\langle e^{-\beta W}\rangle = p_1 \cdot e^0 + p_2 \cdot e^{-\beta(\epsilon' - \epsilon)} = \frac{1}{Z} + \frac{e^{-\beta\epsilon'}}{Z} = \frac{1 + e^{-\beta\epsilon'}}{Z}
$$

The new free energy: $F' = -k_BT\ln(1 + e^{-\beta\epsilon'})$.

$$
e^{-\beta\Delta F} = e^{-\beta(F' - F)} = e^{-\beta F'}e^{\beta F} = (1 + e^{-\beta\epsilon'})\frac{1}{Z} = \langle e^{-\beta W}\rangle \quad \checkmark
$$

The Jarzynski equality is verified exactly for this two-level system, even though the process is far
from equilibrium (sudden quench).

</details>

### 19.5 Key Relationships

<div class="table-wrap">

| Theorem              | Statement                                                                     | Connection to equilibrium                      |
| -------------------- | ----------------------------------------------------------------------------- | ---------------------------------------------- |
| Fluctuation-dissip.  | $\chi(t) = \frac{1}{k_BT}\frac{d}{dt}\langle A(t)A(0)\rangle$                 | Response $\leftrightarrow$ equilibrium fluctuations |
| Johnson-Nyquist      | $S_V(f) = 4k_BTR$                                                             | Voltage noise $\leftrightarrow$ resistance      |
| Einstein relation    | $D = \mu k_BT$                                                                | Diffusion $\leftrightarrow$ mobility            |
| Jarzynski equality   | $\langle e^{-\beta W}\rangle = e^{-\beta\Delta F}$                            | Non-equilibrium work $\leftrightarrow$ free energy |
| Crooks theorem       | $P_F(W)/P_R(-W) = e^{\beta(W - \Delta F)}$                                    | Forward/reverse work distributions              |

</div>

The fluctuation-dissipation theorem unifies these: the Einstein relation and Johnson-Nyquist formula are special cases of the FDT applied to Brownian motion and electrical circuits, respectively.

### 19.6 Common Pitfalls

- **Applying the FDT only to equilibrium systems.** The standard FDT assumes the system is in thermal equilibrium. **Fix:** For non-equilibrium steady states, use generalised fluctuation-dissipation relations that include additional correlation terms.
- **Confusing white noise with infinite power.** Johnson-Nyquist noise is white only up to $f \sim k_BT/h \approx 6$ THz at 300 K; above this, quantum effects cut off the spectrum. **Fix:** Use $S_V(f) = 4k_BTR \cdot [\hbar f/(k_BT)]/[\exp(\hbar f/k_BT) - 1]$ for the quantum-corrected spectrum.
- **Assuming Jarzynski equality only applies to slow processes.** The equality holds for arbitrarily fast (even instantaneous) processes. **Fix:** The work distribution for a fast process has large tails, but the exponential average still equals $e^{-\beta\Delta F}$, verify with the two-level example.
- **Forgetting to take the exponential average in experiments.** The average $\langle e^{-\beta W}\rangle$ is dominated by rare trajectories with negative work, requiring many samples to converge. **Fix:** Use Bennett's acceptance ratio or Hummer-Szabo estimator for better convergence.

### 19.7 Applications

- **Single-molecule biophysics:** Optical tweezers measure the work needed to unfold RNA/DNA hairpins; the Jarzynski equality extracts the folding free energy without requiring reversible pulling.
- **Nanoscale heat transfer:** The FDT predicts thermal noise in nanomechanical resonators (cantilevers, membranes), limiting force sensitivity in AFM and gravitational-wave detectors.
- **Circuit design:** Johnson-Nyquist noise sets the fundamental noise floor in amplifiers and receivers; cryogenic cooling reduces $S_V$ linearly with $T$.
- **Molecular dynamics:** The Crooks theorem is used to compute free energy differences from non-equilibrium pulling simulations, avoiding expensive equilibrium sampling.
- **Brownian ratchets:** Fluctuation theorems constrain the efficiency of molecular motors and information-driven devices (Maxwell's demon).

### 19.8 Summary Table

<div class="table-wrap">

| Concept                 | Type                | Domain                 | Key formula                                    |
| ----------------------- | ------------------- | ---------------------- | ---------------------------------------------- |
| Fluctuation-dissipation | General theorem     | Near equilibrium       | $\chi''(\omega) = \frac{\omega}{2k_BT}S_A(\omega)$ |
| Johnson-Nyquist noise   | Specific application | Electrical circuits    | $S_V = 4k_BTR$                                 |
| Einstein relation       | Specific application | Brownian motion        | $D = \mu k_BT$                                 |
| Jarzynski equality      | Non-equilibrium     | Any driving protocol   | $\langle e^{-\beta W}\rangle = e^{-\beta\Delta F}$ |
| Crooks theorem          | Non-equilibrium     | Forward/reverse pairs  | $P_F(W)/P_R(-W) = e^{\beta(W - \Delta F)}$     |

</div>

## Intuition

Irreversible thermodynamics describes systems that are driven away from equilibrium and eventually settle into a steady state. The Onsager relations reveal a deep symmetry: the way a temperature gradient drives particle flow is mathematically related to how a concentration gradient drives heat flow. Entropy production is always positive in irreversible processes, providing an arrow of time. Fluctuation theorems extend these ideas to small systems where thermal noise dominates, showing that entropy-decreasing fluctuations are possible but exponentially unlikely. These frameworks connect microscopic randomness to macroscopic irreversibility, explaining why heat flows from hot to cold and why perpetual motion machines are impossible.

### 19.9 Worked Example: Johnson-Nyquist Noise in an RC Circuit

**Problem.** A $10$ k$\Omega$ resistor at $T = 300$ K is connected to a $1$ nF capacitor. Compute the RMS voltage fluctuation across the capacitor and the noise power in a $1$ MHz bandwidth.

**Solution.** The voltage noise spectral density is $S_V(f) = 4k_BTR = 4(1.38\times10^{-23})(300)(10^4) \approx 1.66\times10^{-16}$ V$^2$/Hz. In a $\Delta f = 1$ MHz bandwidth:

$$
\langle V^2\rangle = S_V\,\Delta f \approx 1.66\times10^{-16} \times 10^6 = 1.66\times10^{-10}\;\mathrm{V}^2
$$

$$
V_{\rm rms} = \sqrt{1.66\times10^{-10}} \approx 1.29\times10^{-5}\;\mathrm{V} = 12.9\;\mu\mathrm{V}
$$

The RC low-pass filter ($f_c = 1/(2\pi RC) \approx 16$ kHz) limits the effective bandwidth if the capacitor is considered, but at $f \ll f_c$ the full $1$ MHz bandwidth applies. This illustrates why sensitive electronics are cryogenically cooled: reducing $T$ from 300 K to 4 K reduces $V_{\rm rms}$ by $\sqrt{300/4} \approx 8.7\times$.

$\blacksquare$

:::note[Quick check]

1. State the time-domain fluctuation-dissipation theorem for the response function.
2. Extract the Einstein relation from the Brownian velocity correlation $\langle v(t) v(0) \rangle = (k_B T/m) e^{-t/\tau}$.
3. State the Johnson-Nyquist spectrum and the frequency range of its whiteness.
4. Write the Jarzynski equality and define its average.
5. Derive the second law from Jarzynski's equality in one line, and give the quasi-static limit.
6. Where was the equality verified experimentally, and on what systems?
7. Write the Crooks fluctuation theorem.
8. Show how Crooks implies Jarzynski, and locate the crossing point of the two work distributions.

<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** $\chi(t) = \frac{1}{k_B T} \frac{d}{dt} \langle A(t) A(0) \rangle$: the response is a derivative of an equilibrium autocorrelation. **2.** Differentiating the correlation and integrating the response gives mobility $\mu = e\tau/m$: the memory time of the correlation is the mobility, and with $\langle v^2 \rangle = k_B T/m$ it becomes $D = \mu k_B T$. **3.** $S_V(f) = 4 k_B T R$, white (frequency-independent) up to $f \sim k_B T/h$; the variance in a bandwidth is $\langle V^2 \rangle = 4 k_B T R \Delta f$. **4.** $\langle e^{-\beta W} \rangle = e^{-\beta \Delta F}$, averaged over many realisations of a drive taking the system from equilibrium $A$ to equilibrium $B$. **5.** Jensen: $\langle e^{-\beta W} \rangle \ge e^{-\beta \langle W \rangle}$ gives $\langle W \rangle \ge \Delta F$. Quasi-static driving collapses the work distribution to a delta at $\Delta F$. **6.** Single-molecule pulling experiments (RNA, DNA hairpins) with optical tweezers: far-from-equilibrium pulls still satisfy the equality. **7.** $P_F(W)/P_R(-W) = e^{\beta (W - \Delta F)}$: the entire forward distribution against the reversed backward distribution. **8.** Multiply $P_F(W) e^{-\beta W}$ by $e^{-\beta\Delta F}$ rewritten via the theorem and integrate: $\int P_F(W) e^{-\beta W} dW = e^{-\beta \Delta F} \int P_R(-W) dW = e^{-\beta \Delta F}$. The crossing sits at $W = \Delta F$, where the ratio is 1.

</div>
</details>

:::

## Cross-References

- [Thermodynamic Response Functions](/2-thermal-physics/17_thermodynamic-response-functions/) -- The fluctuation-dissipation theorem relates the response functions (susceptibility, compressibility) to equilibrium fluctuations.
- [Ising Model and Mean-Field Theory](/2-thermal-physics/12_ising-model-and-mean-field-theory/) -- Near $T_c$, the susceptibility divergence in the Ising model is a manifestation of the fluctuation-dissipation relation.
- [The Debye Model of Solids](/2-thermal-physics/16_the-debye-model-of-solids/) -- Phonon thermal conductivity in the Debye model is an irreversible transport process governed by the same fluctuation principles.

- [Calculus](https://mathematics.wyattau.com/docs/calculus)
- [Linear Algebra](https://mathematics.wyattau.com/2-linear-algebra/)
- [Vector Calculus](https://mathematics.wyattau.com/docs/vector-calculus)
- [Quantum Computing](https://computer-science.wyattau.com/docs/quantum-computing)

## Related in this track

- [Bose-Einstein Condensation](/2-thermal-physics/5_bose-einstein-condensation/)
- [Classical Limit and the Maxwell-Boltzmann Distribution](/2-thermal-physics/7_classical-limit-and-the-maxwell-boltzmann-distribution/)
- [Common Pitfalls](/2-thermal-physics/8_common-pitfalls/)
- [Fermi Gas at Finite Temperature](/2-thermal-physics/4_fermi-gas-at-finite-temperature/)
