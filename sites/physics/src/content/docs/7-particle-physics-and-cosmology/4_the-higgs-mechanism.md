---

title: The Higgs Mechanism
tags:
  - Physics
  - University
description: "The Higgs mechanism gives mass to the and bosons while preserving gauge invariance. The Key idea: a scalar field acquires a non-zero , spontaneously"
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "physics", "url": "https://physics.wyattau.com"}, {"name": "7 Particle Physics And Cosmology", "url": "https://physics.wyattau.com/7-particle-physics-and-cosmology"}, {"name": "4_the Higgs Mechanism", "url": "https://physics.wyattau.com/7-particle-physics-and-cosmology/4_the-higgs-mechanism"}]
}
</script>

### 4.1 Spontaneous Symmetry Breaking

The Higgs mechanism gives mass to the $W^\pm$ and $Z^0$ bosons while preserving gauge invariance.
The Key idea: a scalar field acquires a non-zero **vacuum expectation value (VEV)**, spontaneously
Breaking the electroweak symmetry.

**The Higgs potential:**

$$V(\phi) = \mu^2 \phi^\dagger\phi + \lambda(\phi^\dagger\phi)^2$$

With $\mu^2 \lt 0$ and $\lambda \gt 0$. This is the **Mexican hat** potential: the minimum is at
$|\phi| = v/\sqrt{2}$ where $v = \sqrt{-\mu^2/\lambda}$.

### 4.2 Worked Example: Mexican Hat Potential Analysis

<details>
<summary>Example 4.1: Detailed analysis of spontaneous symmetry breaking</summary>

Consider the complex scalar field $\phi = (\phi_1 + i\phi_2)/\sqrt{2}$ with the potential:

$$V(\phi) = \mu^2\lvert\phi\rvert^2 + \lambda\lvert\phi\rvert^4$$

With $\mu^2 \lt 0$, $\lambda \gt 0$.

**Step 1: Find the minimum.** Setting $\partial V/\partial\phi_i = 0$:

$$\frac{\partial V}{\partial\phi_1} = \phi_1(\mu^2 + \lambda(\phi_1^2 + \phi_2^2)) = 0$$
$$\frac{\partial V}{\partial\phi_2} = \phi_2(\mu^2 + \lambda(\phi_1^2 + \phi_2^2)) = 0$$

The solutions are:

- $\phi_1 = \phi_2 = 0$: This is a **local maximum** since $V"' = \mu^2 \lt 0$.
- $\phi_1^2 + \phi_2^2 = -\mu^2/\lambda \equiv v^2$: This is the circle of minima.

The VEV is $v = \sqrt{-\mu^2/\lambda}$. The symmetry is $\mathrm{U}(1)$ (phase rotations
$\phi \to e^{i\alpha}\phi$), which has a continuous set of degenerate ground states.

**Step 2: Expand around the vacuum.** Choose the vacuum $\langle\phi\rangle = v/\sqrt{2}$ by Fixing
the gauge. Parameterise:

$$\phi(x) = \frac{1}{\sqrt{2}}(v + h(x))$$

Where $h(x)$ is a real scalar field (the "Higgs field" fluctuation).

**Step 3: Compute the physical mass.** Substituting into the potential:

$$V = \mu^2 \cdot \frac{1}{2}(v + h)^2 + \lambda \cdot \frac{1}{4}(v + h)^4$$

Expanding and keeping terms through quadratic order in $h$:

$$V = \underbrace{\frac{\mu^2 v^2}{2} + \frac{\lambda v^4}{4}}_{\mathrm{constant} + \underbrace{(\mu^2 v + \lambda v^3)}_{= 0}\,h + \underbrace{\left(\frac{\mu^2}{2} + \frac{3\lambda v^2}{2}\right)}_{m_h^2/2}\,h^2 + \cdots}$$

Using $v^2 = -\mu^2/\lambda$The coefficient of $h$ vanishes (as required at the minimum) And:

$$m_h^2 = \mu^2 + 3\lambda v^2 = -\lambda v^2 + 3\lambda v^2 = 2\lambda v^2$$

The physical Higgs mass is $m_h = v\sqrt{2\lambda}$.

**Step 4: Goldstone boson.** The original complex field had two real degrees of freedom. After
symmetry breaking, one ($h$) becomes a massive particle. The other (the phase Fluctuation) is the
**Goldstone boson** --- a massless mode corresponding to motion Along the circle of degenerate
minima. In gauge theory, this Goldstone boson is "eaten" By the gauge field to become its
longitudinal polarisation. $\blacksquare$

</details>

### 4.3 Mass Generation for Gauge Bosons

The Higgs field is an SU(2) doublet:

$$\phi = \begin{pmatrix} \phi^+ \\ \phi^0 \end{pmatrix}, \quad \langle\phi\rangle_0 = \frac{1}{\sqrt{2}}\begin{pmatrix} 0 \\ v \end{pmatrix}$$

Where $v \approx 246$ GeV.

Expanding around the VEV, the kinetic term $|D_\mu\phi|^2$ (with $D_\mu$ the covariant derivative)
Produces mass terms:

$$m_W = \frac{1}{2}gv, \quad m_Z = \frac{1}{2}\sqrt{g^2 + g'^2}\,v, \quad m_\gamma = 0$$

Where $g$ and $g'$ are the SU(2) and U(1) coupling constants.

**Proof of the mass relation.** The covariant derivative is:

$$D_\mu = \partial_\mu - ig\frac{\tau^a}{2}W^a_\mu - ig'\frac{Y}{2}B_\mu$$

The kinetic term $|D_\mu\phi|^2$ evaluated at the VEV gives:

$$\lvert D_\mu\langle\phi\rangle_0\rvert^2 = \frac{v^2}{8}\left[g^2(W^1_\mu)^2 + g^2(W^2_\mu)^2 + (gW^3_\mu - g'B_\mu)^2\right]$$

Identifying $W^\pm_\mu = (W^1_\mu \mp iW^2_\mu)/\sqrt{2}$The first two terms give:

$$\frac{1}{2}\left(\frac{gv}{2}\right)^2 W^+_\mu W^{-\mu} \implies m_W = \frac{gv}{2}$$

The last term, after the rotation to $Z^0$ and $A$Gives:

$$m_Z = \frac{v}{2}\sqrt{g^2 + g'^2}, \quad m_\gamma = 0 \quad \blacksquare$$

The ratio:

$$\frac{m_W}{m_Z} = \cos\theta_W$$

Defines the **Weinberg angle** $\theta_W \approx 28.7^\circ$.

### 4.4 Fermion Masses and Yukawa Couplings

Fermions acquire mass through Yukawa couplings to the Higgs field:

$$\mathcal{L}_{\mathrm{Yukawa} = -y_f \bar{\psi}_L \phi \psi_R + \mathrm{h}.c.}$$

After symmetry breaking, this gives $m_f = y_f v/\sqrt{2}$. The Yukawa couplings $y_f$ are free
Parameters of the Standard Model, not predicted by the theory.

<details>
<summary>Example 4.2: Yukawa coupling of the top quark</summary>

The top quark has mass $m_t \approx 173$ GeV/$c^2$. The Yukawa coupling is:

$$y_t = \frac{\sqrt{2}\,m_t}{v} = \frac{\sqrt{2} \times 173\;\mathrm{GeV}{246\;\mathrm{GeV} \approx 0.994}}$$

This is remarkably close to 1 --- the top quark has the largest Yukawa coupling of all Fermions and
is the only fermion with a coupling of order unity. For comparison:

- Electron: $y_e = m_e\sqrt{2}/v \approx 2.9 \times 10^{-6}$
- Muon: $y_\mu \approx 6.1 \times 10^{-4}$
- Bottom quark: $y_b \approx 0.024$

The enormous range of Yukawa couplings (over five orders of magnitude) is the **flavour Problem**
and remains unexplained within the Standard Model.

</details>

### 4.5 Physical Higgs Boson

After gauge fixing (unitary gauge), the four degrees of freedom of the Higgs doublet become:

- Three **Goldstone bosons** absorbed by $W^\pm$ and $Z^0$ (giving them their longitudinal
  polarisation states).
- One **physical scalar** particle $H$ with mass $m_H = \sqrt{2\lambda}\,v \approx 125$ GeV/$c^2$.

The Higgs boson was discovered at the LHC by ATLAS and CMS on July 4, 2012, with $m_H \approx 125$
GeV/$c^2$. The discovery confirmed the mechanism of electroweak symmetry Breaking and earned the
2013 Nobel Prize for Englert and Higgs.

## Intuition

The Higgs mechanism explains how particles acquire mass without breaking gauge invariance. The Higgs field has a Mexican-hat shaped potential with a minimum away from zero, so the vacuum state picks a particular direction in field space. This spontaneous symmetry breaking gives mass to the W and Z bosons while keeping the photon massless. Fermions acquire mass through Yukawa coupling to the Higgs field, like a drag force that depends on how strongly they interact with the vacuum condensate. The Higgs boson is the observable excitation of this field, detectable as a resonance in particle collisions. Most of the mass of everyday matter comes from QCD binding energy, not the Higgs directly.

### 4.6 Common Mistakes

**Mistake 1: Assuming that the Higgs field gives mass to all particles.**
The Higgs field gives mass to the $W^\pm$ and $Z^0$ bosons and to fermions via Yukawa couplings. However, most of the mass of protons and neutrons comes from the strong interaction energy (QCD binding energy), not from the Higgs mechanism. Do not assume that the Higgs field is responsible for all mass.

**Mistake 2: Confusing spontaneous symmetry breaking with explicit symmetry breaking.**
Spontaneous symmetry breaking occurs when the Lagrangian is symmetric but the vacuum state is not. Explicit symmetry breaking occurs when the Lagrangian itself is not symmetric. The Higgs mechanism involves spontaneous symmetry breaking, not explicit breaking.

**Mistake 3: Forgetting that the Higgs mechanism preserves gauge invariance.**
The Higgs mechanism gives mass to gauge bosons while preserving gauge invariance. This is achieved by the Higgs field acquiring a non-zero VEV, which breaks the symmetry spontaneously. Gauge invariance is not violated; it is hidden in the vacuum state.

**Mistake 4: Assuming that the Higgs boson is the Higgs field.**
The Higgs boson is an excitation of the Higgs field, not the field itself. The Higgs field permeates all of space and has a non-zero VEV. The Higgs boson is a particle that can be created and detected in experiments.

**Mistake 5: Confusing the Higgs mechanism with the Anderson-Higgs mechanism.**
The Higgs mechanism in particle physics is a relativistic generalisation of the Anderson-Higgs mechanism in condensed matter physics. The condensed matter version describes the Higgs mechanism for superconductivity, while the particle physics version describes electroweak symmetry breaking. Do not confuse the two contexts.

## Cross-References

- **[The Standard Model](7-particle-physics-and-cosmology/1_the-standard-model.md)**: The Higgs mechanism explains how the W and Z bosons acquire mass within the electroweak sector of the Standard Model.
- **[Conservation Laws and Symmetries](7-particle-physics-and-cosmology/2_conservation-laws-and-symmetries.md)**: Spontaneous symmetry breaking preserves the underlying gauge invariance while breaking the symmetry of the vacuum state.
- **[Group Theory in Particle Physics](7-particle-physics-and-cosmology/5_group-theory-in-particle-physics.md)**: The Higgs doublet transforms under SU(2) x U(1), and the Goldstone bosons correspond to broken generators of the gauge group.
- **[Beyond the Standard Model](7-particle-physics-and-cosmology/9_beyond-the-standard-model.md)**: Extensions to the Higgs sector, such as supersymmetry and two-Higgs-doublet models, address the hierarchy problem.

- [Calculus](https://mathematics.wyattau.com/docs/calculus)
- [Linear Algebra](https://mathematics.wyattau.com/docs/linear-algebra)
