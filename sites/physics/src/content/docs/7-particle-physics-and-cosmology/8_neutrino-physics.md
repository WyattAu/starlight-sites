---

title: Neutrino Physics
tags:
  - Physics
  - University
description: "Neutrinos are produced and detected in flavour eigenstates But propagate As mass Comprehensive educational content coverage with definitions and practice proble"
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "physics", "url": "https://physics.wyattau.com"}, {"name": "7 Particle Physics And Cosmology", "url": "https://physics.wyattau.com/7-particle-physics-and-cosmology"}, {"name": "8_neutrino Physics", "url": "https://physics.wyattau.com/7-particle-physics-and-cosmology/8_neutrino-physics"}]
}
</script>

### 8.1 Neutrino Oscillations

Neutrinos are produced and detected in flavour eigenstates $(\nu_e, \nu_\mu, \nu_\tau)$But propagate
As mass eigenstates $(\nu_1, \nu_2, \nu_3)$ related by the **PMNS mixing matrix** $U$:

$$|\nu_\alpha\rangle = \sum_i U_{\alpha i}^* |\nu_i\rangle$$

As a neutrino of flavour $\alpha$ propagates, the mass eigenstates acquire different phases:
$\exp(-im_i^2 L/(2E))$Leading to oscillations.

**Two-flavour oscillation probability:**

$$P(\nu_\alpha \to \nu_\beta) = \sin^2(2\theta)\sin^2\left(\frac{\Delta m^2 L}{4E}\right)$$

Where $\Delta m^2 = m_2^2 - m_1^2$, $\theta$ is the mixing angle, $L$ is the distance, and $E$ is
the Energy.

**Evidence:** The Solar Neutrino Problem (deficit of $\nu_e$ from the Sun, resolved by
$\nu_e \to \nu_\mu, \nu_\tau$ oscillations) and atmospheric neutrino oscillations (Super-Kamiokande,
1998).

### 8.2 Neutrino Masses

Neutrino oscillations imply that neutrinos have mass, but the masses are extremely small:
$\sum m_\nu \lt 0.12$ eV (Planck 2018).

In the Standard Model, neutrinos are massless. Their masses require physics beyond the Standard
Model, most commonly via the **seesaw mechanism**:

$$m_\nu \sim \frac{m_D^2}{M}$$

Where $m_D$ is a Dirac mass and $M \gg m_D$ is the mass of a heavy right-handed neutrino.

<details>
<summary>Example 8.1: Atmospheric neutrino oscillation calculation</summary>

Atmospheric neutrinos are produced when cosmic rays strike the upper atmosphere, creating Pions that
decay: $\pi^+ \to \mu^+ + \nu_\mu$Followed by $\mu^+ \to e^+ + \bar{\nu}_\mu + \nu_e$.

Super-Kamiokande (1998) observed that upward-going muon neutrinos (travelling through the Earth,
$L \sim 10^4$ km) were significantly depleted relative to downward-going ones ($L \sim 10$ km),
while electron neutrinos showed no such deficit.

Using the two-flavour formula with the atmospheric parameters
$\Delta m^2_{32} \approx 2.5 \times 10^{-3}$ eV$^2$ and $\sin^2(2\theta_{23}) \approx 1$ (maximal
mixing):

For upward-going $\nu_\mu$ with $E = 1$ GeV and $L = 10\,000$ km:

$$\frac{\Delta m^2 L}{4E} = \frac{2.5 \times 10^{-3}\;\mathrm{eV}^2 \times 10^4\;\mathrm{km}{4 \times 1\;\mathrm{GeV}}}$$

Converting to natural units ($\hbar c = 1.973 \times 10^{-7}$ eV$\cdot$M): $L = 10^7$ m, so
$L/E = 10^7 / 10^9 = 10^{-2}$ eV$^{-1}$.

$$\frac{\Delta m^2 L}{4E} = \frac{2.5 \times 10^{-3} \times 10^{-2}}{4} = 6.25 \times 10^{-6}\;\mathrm{eV}^2\cdot\mathrm{eV}^{-1}$$

Wait --- we need to be more careful with units. Using the practical formula:

$$\frac{\Delta m^2 [\mathrm{eV}^2] \cdot L [\mathrm{km}]}{4E [\mathrm{GeV}]} = \frac{2.5 \times 10^{-3} \times 10^4}{4 \times 1} = \frac{25}{4} = 6.25\;\mathrm{rad}$$

$$P(\nu_\mu \to \nu_\mu) = 1 - \sin^2(2\theta_{23})\sin^2(6.25) = 1 - 1 \times \sin^2(6.25) \approx 1 - 0.018 \approx 0.98$$

Hmm, this gives almost no oscillation. Let me reconsider. Actually:

$$P(\nu_\mu \to \nu_\tau) = \sin^2(2\theta)\sin^2\left(\frac{\Delta m^2 L}{4E}\right) = \sin^2(6.25) \approx 0.018$$

This seems small. But at $E = 0.5$ GeV:

$$\frac{\Delta m^2 L}{4E} = \frac{25}{2} = 12.5\;\mathrm{rad}$$

$$\sin^2(12.5) \approx \sin^2(0.35) \approx 0.12$$

And at the first oscillation maximum,
$L/E = 2\pi/(\Delta m^2) = 2\pi/(2.5 \times 10^{-3}) \approx 2513$ km/GeV. For $E = 1$ GeV,
$L_{\mathrm{osc} \approx 2513}$ km, which is comparable to the Earth"s diameter ($\sim 12\,700$ km).
The observed deficit is an average over many oscillations and energies, Giving roughly
$\langle P\rangle \approx 1/2$ for maximal mixing, consistent with the Super-Kamiokande observation
of approximately half the expected upward-going $\nu_\mu$ flux.

</details>

### 8.3 Key Relationships

| Parameter          | Value (best fit)       | Experiment                      | Role                                    |
| ------------------ | ---------------------- | ------------------------------- | --------------------------------------- |
| $\Delta m^2_{21}$  | $7.5 \times 10^{-5}$ eV$^2$ | Solar (SNO, Borexino)     | Drives solar $\nu_e \to \nu_{\mu,\tau}$ |
| $\Delta m^2_{32}$  | $2.5 \times 10^{-3}$ eV$^2$ | Atmospheric (Super-K)     | Drives $\nu_\mu \to \nu_\tau$ oscillations |
| $\sin^2(2\theta_{12})$ | 0.86                   | Solar (SNO)                     | Solar mixing angle                       |
| $\sin^2(2\theta_{23})$ | 1.0 (maximal)           | Atmospheric (Super-K)           | Atmospheric mixing angle                 |
| $\sin^2(2\theta_{13})$ | 0.092                  | Reactor (Daya Bay, RENO, Double Chooz) | Non-zero, enables CP violation          |

### 8.4 Common Pitfalls

- **Confusing flavour and mass eigenstates.** Neutrinos are produced and detected as flavour eigenstates but propagate as mass eigenstates. **Fix:** The PMNS matrix $U$ relates the two bases; oscillations arise from phase differences between mass components.
- **Assuming all oscillations average to zero.** While fast oscillations average over energy and baseline, the survival probability for solar $\nu_e$ is $\approx 0.55$, not $0.5$, due to the MSW matter effect in the Sun. **Fix:** Matter effects modify the effective mixing angle at high densities.
- **Forgetting the practical unit conversion.** When using the oscillation formula $\Delta m^2 L / (4E)$ with $L$ in km and $E$ in GeV, the result is in radians directly: $\Delta m^2 [\mathrm{eV}^2] L [\mathrm{km}] / (4E [\mathrm{GeV}])$. **Fix:** Use $L/E$ in km/GeV for quick estimates.
- **Thinking neutrinos are massless in the Standard Model.** While the SM predicts massless neutrinos, oscillations prove they have mass. **Fix:** The seesaw mechanism extends the SM with heavy right-handed neutrinos.

### 8.5 Applications

- **Solar neutrino spectroscopy:** Precise measurement of solar neutrino fluxes (pp, $^7$Be, $^8$B) tests solar models and constrains the MSW effect transition between vacuum and matter-dominated oscillations.
- **Reactor neutrino monitoring:** Antineutrino detectors at nuclear reactors (Daya Bay, Double Chooz) measure $\theta_{13}$ and can monitor reactor power and fuel composition for non-proliferation.
- **Supernova neutrinos:** Core-collapse supernovae release $\sim 99\%$ of their gravitational binding energy as neutrinos. Detecting these (SN 1987A, $\sim 20$ events) tests models of stellar death and neutron star formation.
- **Neutrino telescopes:** IceCube and KM3NeT detect high-energy astrophysical neutrinos from blazars, gamma-ray bursts, and possibly dark matter annihilation.
- **Cosmology:** The sum of neutrino masses $\sum m_\nu < 0.12$ eV (Planck + BAO) affects structure formation; future surveys (Euclid, DESI) will tighten constraints and potentially determine the mass hierarchy.

### 8.6 Summary Table

| Neutrino source  | Typical energy | Baseline $L$      | Oscillation probed      | Key experiment        |
| ---------------- | -------------- | ----------------- | ----------------------- | --------------------- |
| Solar            | 0.1-10 MeV     | $1.5 \times 10^8$ km | $\Delta m^2_{21}$   | SNO, Borexino, Super-K |
| Atmospheric      | 0.1-100 GeV    | 10-10$^4$ km      | $\Delta m^2_{32}$       | Super-Kamiokande      |
| Reactor          | 1-10 MeV       | 0.1-100 km        | $\theta_{13}$, $\Delta m^2_{21}$ | Daya Bay, RENO, KamLAND |
| Accelerator      | 0.1-10 GeV     | 100-1000 km       | $\delta_{\rm CP}$       | T2K, NO$\nu$A, DUNE   |

### 8.7 Open Questions

- **Mass hierarchy:** Is the ordering $m_1 < m_2 < m_3$ (normal) or $m_3 < m_1 < m_2$ (inverted)? Future experiments like JUNO and DUNE aim to resolve this via matter effects in oscillation probabilities.
- **CP violation in the lepton sector:** The phase $\delta_{\rm CP}$ in the PMNS matrix determines whether neutrinos and antineutrinos oscillate differently. A non-zero $\delta_{\rm CP}$ could help explain the matter-antimatter asymmetry via leptogenesis.
- **Dirac vs. Majorana nature:** Are neutrinos their own antiparticles? Neutrinoless double-beta decay ($0\nu\beta\beta$) experiments search for this; a positive signal would prove the Majorana nature and fix the absolute mass scale.
- **Absolute mass scale:** Oscillations only measure mass-squared differences. KATRIN measures the electron neutrino mass via tritium beta decay, currently constraining $m_{\nu_e} < 0.8$ eV.


## Intuition

Neutrinos are the most mysterious particles in the Standard Model: nearly massless, electrically neutral, and interacting only through the weak force. They come in three flavors, and neutrino oscillations proved they have mass by showing flavors transform into each other during flight. This discovery shattered the Standard Model as originally formulated. Neutrino masses are so tiny that their origin may differ from other particles, possibly involving heavy right-handed neutrinos at energy scales far beyond accelerator reach. Understanding neutrino masses and mixing could explain why the universe contains more matter than antimatter.
## Cross-References

- **[The Standard Model](7-particle-physics-and-cosmology/1_the-standard-model.md)**: Neutrinos are fundamental fermions in the Standard Model, and their masses require extensions beyond the minimal framework.
- **[Conservation Laws and Symmetries](7-particle-physics-and-cosmology/2_conservation-laws-and-symmetries.md)**: Lepton family number conservation and its possible violation are central to understanding neutrino oscillations and Majorana mass.
- **[Beyond the Standard Model](7-particle-physics-and-cosmology/9_beyond-the-standard-model.md)**: The seesaw mechanism and neutrino mass generation are key motivations for physics beyond the Standard Model.
- **[Big Bang Cosmology](7-particle-physics-and-cosmology/7_big-bang-cosmology.md)**: Neutrino decoupling and the effective number of relativistic species affect Big Bang nucleosynthesis and the CMB.

- [Calculus](https://mathematics.wyattau.com/docs/calculus)
- [Linear Algebra](https://mathematics.wyattau.com/docs/linear-algebra)
