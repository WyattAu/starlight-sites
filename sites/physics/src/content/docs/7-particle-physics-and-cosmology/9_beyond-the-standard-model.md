---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "physics", "url": "https://physics.wyattau.com"}, {"name": "7 Particle Physics And Cosmology", "url": "https://physics.wyattau.com/7-particle-physics-and-cosmology"}, {"name": "9_beyond The Standard Model", "url": "https://physics.wyattau.com/7-particle-physics-and-cosmology/9_beyond-the-standard-model"}]
}
</script>
title: Beyond the Standard Model
tags:
  - Physics
  - University
description: "Supersymmetry relates fermions and bosons: every SM particle has a superpartner  Comprehensive educational content coverage with definitions and practice proble"
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "physics", "url": "https://physics.wyattau.com"}, {"name": "7 Particle Physics And Cosmology", "url": "https://physics.wyattau.com/7-particle-physics-and-cosmology"}, {"name": "9_beyond The Standard Model", "url": "https://physics.wyattau.com/7-particle-physics-and-cosmology/9_beyond-the-standard-model"}]
}
</script>

### 9.1 Supersymmetry (SUSY)

Supersymmetry relates fermions and bosons: every SM particle has a superpartner differing by Half a
unit of spin.

- Squarks ($\tilde{q}$), sleptons ($\tilde{l}$): scalar partners of quarks and leptons.
- Gluinos ($\tilde{g}$): fermionic partners of gluons.
- Neutralinos, charginos: partners of the Higgs and gauge bosons.

**Motivations:**

1. Solves the hierarchy problem by cancelling quadratic divergences in the Higgs mass.
2. Provides a dark matter candidate (lightest supersymmetric particle, LSP).
3. Enables gauge coupling unification.
4. Arises from string theory.

**Status:** No SUSY particles have been observed at the LHC (as of 2026). If SUSY exists, the
Superpartners must be heavier than $\sim 2$ TeV, requiring either fine-tuning or an extended model
(e.g., split SUSY).

### 9.1.1 The Hierarchy Problem

The **hierarchy problem** is the puzzle of why the Higgs mass ($m_H \sim 125$ GeV) is so much
Smaller than the Planck scale ($M_{\mathrm{Pl} \sim 10^{19}}$ GeV).

**The problem.** In quantum field theory, the Higgs mass receives quadratically divergent Radiative
corrections from virtual particles. For a fermion loop (e.g., top quark):

$$\delta m_H^2 = -\frac{\lvert y_t\rvert^2}{8\pi^2}\Lambda^2 + \mathrm{finite}$$

Where $\Lambda$ is the ultraviolet cutoff. If $\Lambda \sim M_{\mathrm{Pl}}$Then
$\delta m_H^2 \sim 10^{38}$ GeV$^2$Requiring an incredible fine-tuning of the bare mass To cancel
this and yield $m_H^2 \sim 10^4$ GeV$^2$.

**SUSY solution.** Each fermion loop contribution $-\lvert y_t\rvert^2\Lambda^2/(8\pi^2)$ is
Cancelled by the corresponding scalar (stop) loop contribution
$+\lvert y_t\rvert^2\Lambda^2/(8\pi^2)$ Because bosonic and fermionic loops contribute with opposite
signs. This cancellation is exact When SUSY is unbroken. With SUSY broken at the TeV scale, the
residual correction is only:

$$\delta m_H^2 \sim \frac{\lvert y_t\rvert^2}{8\pi^2}m_{\mathrm{SUSY}^2 \sim (100\;\mathrm{GeV})^2}$$

Which is of the same order as $m_H^2$Eliminating the fine-tuning.

### 9.1.2 R-Parity

SUSY models impose **R-parity**, a discrete symmetry defined as:

$$R = (-1)^{3(B-L)+2s}$$

All SM particles have $R = +1$And all superpartners have $R = -1$. R-parity conservation has Two
important consequences:

1. **The lightest supersymmetric particle (LSP) is stable**, since there is no lighter $R = -1$
   particle for it to decay into. If the LSP is electrically neutral and weakly interacting, it is
   an excellent dark matter candidate.
2. **Superpartners are produced in pairs**, making their detection at colliders more challenging
   (missing energy signatures from the escaping LSPs).

### 9.2 Grand Unified Theories (GUTs)

GUTs unify the SM gauge groups into a single simple group. The simplest is **SU(5)**:

$$\mathrm{SU}(3)_C \times \mathrm{SU}(2)_L \times \mathrm{U}(1)_Y \subset \mathrm{SU}(5)$$

**Predictions of minimal SU(5):**

- $\sin^2\theta_W = 3/8$ at the GUT scale (reasonable).
- Proton decay: $p \to e^+ + \pi^0$ with lifetime $\tau_p \sim 10^{30\pm 1}$ years. Current limit:
  $\tau_p \gt 1.6 \times 10^{34}$ years (Super-Kamiokande), ruling out minimal SU(5).
- Charge quantisation: $Q(\mathrm{proton}) + Q(\mathrm{electron}) = 0$.

**Charge quantisation in SU(5).** One of the elegant features of SU(5) is that it explains why
Electric charge is quantised. In the SM, the values of the electric charges are inputs. In SU(5),
Each generation of fermions fits into a $\bar{\mathbf{5}} \oplus \mathbf{10}$ representation:

$$\bar{\mathbf{5}}: \quad \begin{pmatrix} \bar{d}_r \\ \bar{d}_g \\ \bar{d}_b \\ e^- \\ \nu_e \end{pmatrix}, \qquad \mathbf{10}: \quad \begin{pmatrix} 0 & u_r & u_g & u_b & \bar{e}^+ \\ -u_r & 0 & d_r & d_g & \bar{d}_b \\ -u_g & -d_r & 0 & d_b & \bar{d}_g \\ -u_b & -d_g & -d_b & 0 & \bar{d}_r \\ -e^+ & d_b & d_g & d_r & 0 \end{pmatrix}$$

The fact that quarks and leptons sit in the same multiplet of a simple gauge group Explains why the
proton charge exactly cancels the electron charge.

### 9.3 String Theory

String theory replaces point particles with one-dimensional objects (strings). The different
Vibrational modes of the string correspond to different particles.

**Key features:**

- includes gravity (the graviton arises as a closed string excitation).
- Requires extra spatial dimensions (10 for superstring theory, 11 for M-theory).
- The extra dimensions are compactified, leading to a vast "landscape" of possible vacua.

**Status:** No experimental evidence. The Planck length ($\sim 10^{-35}$ m) is far below current
Experimental reach.

**Key concepts.**

1. **Five consistent superstring theories:** Type I, Type IIA, Type IIB, Heterotic-O(32), and
   Heterotic-E$_8 \times$ E$_8$. These are related by dualities (S-duality, T-duality) and are
   believed to be different limits of a single underlying theory, **M-theory**, in 11 dimensions.

2. **Compactification.** The six extra spatial dimensions must be compactified on a small manifold
   (Calabi--Yau manifold) to recover four-dimensional physics. The choice of compactification
   determines the particle content and coupling constants of the effective four-dimensional theory.

3. **Brane world scenarios.** In some string theory constructions, our four-dimensional universe is
   a "brane" embedded in a higher-dimensional "bulk." Standard Model particles are confined to the
   brane, while gravity can propagate into the bulk. This can lead to observable signatures such as
   deviations from Newton"s law at short distances or the production of Kaluza--Klein gravitons at
   colliders.

4. **AdS/CFT correspondence.** String theory in anti-de Sitter space is equivalent to a conformal
   field theory on its boundary. This holographic duality has found applications in QCD (quark-gluon
   plasma), condensed matter physics, and quantum information theory.

### 9.4 Quantum Gravity

The reconciliation of general relativity with quantum mechanics remains the central unsolved problem
In theoretical physics.

**Approaches:**

- **String theory:** As above.
- **Loop quantum gravity (LQG):** Quantises spacetime geometry directly. Predicts discrete area and
  volume spectra.
- **Causal set theory:** Spacetime is fundamentally discrete.
- **Asymptotic safety:** The renormalisation group flow of gravity has a non-trivial fixed point.

No approach has been experimentally verified or gained universal acceptance.

### 9.5 Experimental Frontiers

Several experiments are probing physics beyond the Standard Model:

| Experiment               | Facility           | Goal                                    |
| ------------------------ | ------------------ | --------------------------------------- |
| ATLAS/CMS                | LHC (CERN)         | Direct production of BSM particles      |
| Belle II                 | KEK (Japan)        | Study $B$-meson decays, CP violation    |
| DUNE                     | Fermilab/SDC       | Neutrino oscillations, proton decay     |
| Hyper-Kamiokande         | Japan              | Neutrino physics, proton decay          |
| LZ/XENONnT               | Underground labs   | Direct dark matter detection            |
| LIGO/Virgo/KAGRA         | Interferometers    | Gravitational waves, primordial BH      |
| CMB-S4                   | Atacama/South Pole | CMB $B$-mode polarisation               |
| Euclid                   | Space telescope    | Dark energy, modified gravity           |
| Future Circular Collider | CERN (proposed)    | Precision Higgs, new physics at 100 TeV |

## Intuition

The Standard Model is remarkably successful but leaves major questions unanswered: what is dark matter, why is there more matter than antimatter, and why are the forces so different in strength. Supersymmetry proposes that every particle has a heavier partner, solving the hierarchy problem and potentially providing a dark matter candidate. Grand unification tries to merge the three forces into one at high energy, requiring new physics to make the coupling constants meet. String theory replaces point particles with vibrating strings, naturally incorporating gravity but requiring extra dimensions. The hierarchy problem is the puzzle of why the Higgs mass is so much lighter than the Planck scale, suggesting unknown symmetry or dynamics at work.

### 9.5 Common Mistakes

**Mistake 1: Assuming that supersymmetry has been experimentally confirmed.**
Supersymmetry is a theoretical extension of the Standard Model, but no supersymmetric particles have been observed at the LHC. Do not assume that SUSY is a established fact; it remains a hypothesis.

**Mistake 2: Confusing the hierarchy problem with the cosmological constant problem.**
The hierarchy problem is the puzzle of why the Higgs mass is so much smaller than the Planck scale. The cosmological constant problem is the puzzle of why the observed vacuum energy density is so much smaller than theoretical predictions. These are distinct problems, though both involve fine-tuning.

**Mistake 3: Assuming that dark matter must be a supersymmetric particle.**
While the lightest supersymmetric particle (LSP) is a dark matter candidate, dark matter could be something else entirely (such as an axion or a sterile neutrino). Do not assume that dark matter must be a SUSY particle.

**Mistake 4: Forgetting that grand unification requires new physics.**
The running gauge couplings of the Standard Model do not meet at a single point, suggesting that new physics is needed for grand unification. SUSY can help achieve unification, but other mechanisms are also possible. Do not assume that grand unification is automatic.

**Mistake 5: Assuming that string theory is the only approach to quantum gravity.**
String theory is one approach to quantum gravity, but there are other approaches (such as loop quantum gravity, causal dynamical triangulations, and asymptotic safety). Do not assume that string theory is the only viable theory of quantum gravity.

## Cross-References

- **[The Standard Model](7-particle-physics-and-cosmology/1_the-standard-model.md)**: The hierarchy problem and gauge coupling unification are motivations for extending the Standard Model.
- **[The Higgs Mechanism](7-particle-physics-and-cosmology/4_the-higgs-mechanism.md)**: Supersymmetry solves the hierarchy problem by cancelling quadratic divergences in the Higgs mass.
- **[Running Coupling Constants](7-particle-physics-and-cosmology/6_running-coupling-constants.md)**: Gauge coupling unification requires new physics beyond the Standard Model, such as supersymmetry.
- **[Big Bang Cosmology](7-particle-physics-and-cosmology/7_big-bang-cosmology.md)**: Dark matter candidates and inflation models are extensions to the cosmological framework motivated by BSM physics.
