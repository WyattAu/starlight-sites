---
title: Advanced Topics in Cosmology
tags:
  - Physics
  - University
description: ""dovich (SZ) effect from hot electrons in the cluster:

$$\frac{\Delta T}{T}\bigg|_{\text{SZ} = -2\int \frac{k_B T_e}{m_e c^2}\, n_e \sigma_T\, dl}$$

For a typical cluster with $k_BT_e \sim 5$ keV, $n_e \sim 10^3$ m$^{-3}$, $l \sim 1$ Mpc:

$$y = \frac{k_BT_e}{m_e c^2} n_e \sigma_T l = \frac{5 \times 10^3 \times 1.602 \times 10^{-16}}{9.109 \times 10^{-31} \times 9 \times 10^{16}} \times 10^3 \times 6.65 \times 10^{-29} \times 3.086 \times 10^{22}$$

$$= 8.8 \times 10^{-2} \times 10^3 \times 6.65 \times 10^{-29} \times 3.086 \times 10^{22} \approx 1.8 \times 10^{-4}$$

The SZ effect ($\Delta T/T \approx -2y$ at low frequency) gives a temperature decrement of
$\sim 3.6 \times 10^{-4}$Significantly larger than the primary CMB anisotropy.

</details>

<details>
<summary>Worked Example 12.2: Neutrino Mass from Seesaw Mechanism</summary>

The type-I seesaw mechanism adds three right-handed neutrinos $N_R$ with Majorana mass $M$. The
light neutrino mass matrix:

$$m_\nu \approx -m_D M^{-1} m_D^T$$

For a single generation with $m_D \sim 173$ GeV (top Yukawa-scale Dirac mass) and $M = 10^{15}$ GeV:

$$m_\nu \sim \frac{(173\ \text{GeV})^2}{10^{15}\ \text{GeV} = \frac{2.99 \times 10^4}{10^{15}}\ \text{GeV} = 3.0 \times 10^{-11}\ \text{GeV} = 0.030\ \text{eV}}$$

This is in the right ballpark for atmospheric neutrino oscillations
($\Delta m_{32}^2 \approx 2.5 \times 10^{-3}$ eV$^2$Giving $m_3 \sim 0.05$ eV).

For three degenerate right-handed neutrinos with $M \sim 10^{14}$ GeV:

$$m_\nu \sim 0.3\ \text{eV}$$

This is at the upper edge of the cosmological bound $\sum m_\nu < 0.12$ eV, showing that the seesaw
with $M \sim 10^{14}$--$10^{15}$ GeV explains the tiny neutrino masses.

</details>

## Common Pitfalls (Additional)

1. **Parton model is not QCD:** The naive parton model assumes free, non-interacting partons inside
   the proton. Real QCD predicts that partons interact via gluon exchange, leading to scaling
   violations (logarithmic $Q^2$ dependence of structure functions). The DGLAP equations describe
   this evolution; ignoring them is valid only at leading order and moderate $Q^2$.

2. **CKM phase vs. PMNS phase:** CP violation in the quark sector (CKM matrix) and the lepton sector
   (PMNS matrix) are independent. The CKM phase is known with good precision, but the PMNS phase is
   poorly constrained. Even if the CKM phase were zero, CP violation would still exist in the lepton
   sector --- and vice versa.

3. **$\Lambda$CDM is a model, not a theory:** The $\Lambda$CDM concordance model (flat universe with
   cold dark matter and a cosmological constant) fits all current data remarkably well, but it has
   no theoretical explanation for the values of $\Omega_\Lambda$, $\Omega_{\text{DM}}$Or the initial
   conditions (inflation potential). These are inputs, not outputs.

4. **GUT-scale proton decay is experimentally excluded:** Minimal SU(5) predicted
   $\tau_p \sim 10^{30\pm1}$ years, but Super-Kamiokande sets $\tau_p > 1.6 \times 10^{34}$ years.
   This rules out minimal SU(5) but not all GUTs --- supersymmetric GUTs or SO(10) can have longer
   proton lifetimes.

5. **Inflation is not a specific model:** Inflation is a paradigm (exponential expansion solving the
   horizon, flatness, and monopole problems) supported by the near-scale-invariant CMB power
   spectrum. There are hundreds of specific inflation models (single-field, multi-field, hilltop,
   plateau, hybrid, eternal, etc.), and current data cannot distinguish between them.

## Problems (Additional)

<details>
<summary>Problem 19: DGLAP Evolution and Scaling Violations</summary>

The quark distribution function $q(x, Q^2)$ evolves according to the DGLAP equation. At leading
order:

$$\frac{\partial q(x, Q^2)}{\partial \ln Q^2} = \frac{\alpha_s(Q^2)}{2\pi}\int_x^1 \frac{dz}{z}\, P_{qq}(z)\, q\!\left(\frac{x}{z}, Q^2\right)$$

(a) Show that the number sum rule $\int_0^1 q(x, Q^2)\,dx$ is independent of $Q^2$.

(b) Using $P_{qq}(z) = C_F\left[\frac{1+z^2}{(1-z)_+}\right]$ where $(1-z)_+$ is the plus
prescription, and the leading-order running
$\alpha_s(Q^2) = \alpha_s(Q_0^2)/(1 + b_0\alpha_s(Q_0^2)\ln(Q^2/Q_0^2)/2\pi)$Show that the average
momentum fraction $\langle x \rangle_q$ decreases with $Q^2$.

**Solution:**

(a) Integrating both sides over $x$:

$$\int_0^1 dx\,\frac{\partial q}{\partial \ln Q^2} = \frac{\alpha_s}{2\pi}\int_0^1 dx\int_x^1 \frac{dz}{z}\, P_{qq}(z)\, q\!\left(\frac{x}{z}\right)$$

Change variables $y = x/z$, $x = yz$, $dx = z\,dy$:

$$= \frac{\alpha_s}{2\pi}\int_0^1 dz\, P_{qq}(z)\int_0^1 dy\, q(y) = \frac{\alpha_s}{2\pi}\left[\int_0^1 P_{qq}(z)\,dz\right]\left[\int_0^1 q(y)\,dy\right]$$

The integral of the splitting function $\int_0^1 P_{qq}(z)\,dz = 0$ (the plus prescription ensures
this), so the RHS vanishes. Therefore $\partial/\partial(\ln Q^2) \int_0^1 q(x)\,dx = 0$.

(b) Multiply the DGLAP equation by $x$ and integrate:

$$\frac{\partial}{\partial\ln Q^2}\int_0^1 xq(x)\,dx = \frac{\alpha_s}{2\pi}\int_0^1 dz\, P_{qq}(z)\int_0^1 yz\, q(y)\,z\,dy$$

Wait, more carefully. With $x = yz$:

$$= \frac{\alpha_s}{2\pi}\int_0^1 dz\, z\, P_{qq}(z)\int_0^1 y\, q(y)\, dy$$

The first moment of $P_{qq}$ is $\int_0^1 z\,P_{qq}(z)\,dz = -A_q < 0$ (the quark loses momentum to
gluons). Since $\alpha_s > 0$:

$$\frac{\partial\langle x\rangle_q}{\partial\ln Q^2} = \frac{\alpha_s}{2\pi}(-A_q)\langle x\rangle_q < 0$$

The quark momentum fraction decreases with $Q^2$ because quarks radiate gluons.

</details>

<details>
<summary>Problem 20: QGP Temperature and Debye Screening</summary>

(a) Estimate the initial temperature of the QGP produced in Pb--Pb collisions at the LHC, given that
$\sim 1600$ charged particles per unit rapidity are produced and the Bjorken energy density estimate
gives $\epsilon = \frac{1}{\tau_0 A_T}\frac{dE_T}{dy}$ with $\tau_0 = 1$ fm/c and
$A_T = \pi(7.1\ \text{fm})^2$.

(b) Calculate the Debye screening mass $m_D$ at this temperature and estimate the screening length.

**Solution:**

(a) The transverse energy per unit rapidity is roughly
$dE_T/dy \sim 1600 \times 0.5\ \text{GeV} \sim 800$ GeV (each charged particle carries $\sim 0.5$
GeV of $E_T$ on average).

$$\epsilon = \frac{800\ \text{GeV}{(1\ \text{fm}/c) \times \pi \times (7.1\ \text{fm})^2} = \frac{800 \times 1.602 \times 10^{-10}\ \text{J}{10^{-15}\,\text{s} \times \pi \times 5.04 \times 10^{-30}\,\text{m}^2}}}$$

$$= \frac{1.28 \times 10^{-7}}{1.58 \times 10^{-44}} = 8.1 \times 10^{36}\ \text{J}/m^3$$

Using the Stefan--Boltzmann relation for an ideal QGP with $N_f = 2.5$ effective flavours (including
gluons):

$$\epsilon = \frac{\pi^2}{30}\left(2 \times 8 + \frac{7}{4} \times 2 \times 2.5 \times 2\right)T^4 = \frac{\pi^2}{30}(16 + 35)T^4 = \frac{\pi^2}{30} \times 51\, T^4$$

$$T = \left(\frac{30\epsilon}{51\pi^2 k_B^4}\right)^{1/4}$$

In natural units ($\epsilon$ in GeV/fm$^3$):

$$\epsilon \approx \frac{800}{\pi \times 50.4}\ \text{GeV}/fm^3 \approx 5.0\ \text{GeV}/fm^3$$

$$T = \left(\frac{5.0 \times 30}{51\pi^2}\right)^{1/4}\ \text{GeV} \approx (0.94)^{1/4}\ \text{GeV} \approx 0.985\ \text{GeV} \times 197\ \text{MeV}/fm^{1/4}$$

Actually, using $\epsilon = a_{\text{QGP} T^4}$ with $a_{\text{QGP} \approx 47.5\pi^2/30}$:

$$T \approx \left(\frac{5.0}{15.6}\right)^{1/4} \approx 0.79^{1/4} \approx 0.94\ \text{GeV}^{1/4}$$

This gives $T \approx 300$--$400$ MeV, consistent with LHC measurements.

(b) The Debye screening mass in QCD:

$$m_D^2 = g_s^2 T^2\left(\frac{N_c}{3} + \frac{N_f}{6}\right) = g_s^2 T^2\left(1 + \frac{N_f}{6}\right)$$

With $N_c = 3$, $N_f = 3$, $g_s^2/(4\pi) = \alpha_s \approx 0.3$ at $T \sim 300$ MeV:

$$m_D^2 = 4\pi \times 0.3 \times (0.3\ \text{GeV})^2 \times (1 + 0.5) = 3.77 \times 0.09 \times 1.5 = 0.509\ \text{GeV}^2$$

$$m_D \approx 0.71\ \text{GeV}, \quad \lambda_D = 1/m_D \approx 0.28\ \text{fm}$$

This screening length ($\sim 0.3$ fm) is much shorter than the typical hadron size ($\sim 1$ fm),
confirming that colour forces are screened in the QGP and quarkonium states are dissociated.

</details>

