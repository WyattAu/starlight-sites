---
title: Thermodynamic Response Functions
tags:
  - Physics
  - University
description: ""before" and "after" states are the same
(same $N$, $V$, $E$), so $\Delta S = 0$. Without the $1/N!$ factor, we would get the same non-zero
result for mixing identical gases — Gibbs" paradox.

</details>

<details>
<summary>Problem 2: Ising Model Phase Diagram</summary>

Consider the mean-field Ising model on a square lattice ($z = 4$).

(a) Find the magnetization $m$ as a function of reduced temperature $t = T/T_c^{\text{MF}}$ in zero
field.

(b) Find the susceptibility $\chi$ on both sides of $T_c$.

(c) Calculate the specific heat jump at $T_c$.

**Solution:**

(a) The self-consistency equation is $m = \tanh(4\beta Jm) = \tanh(m/t)$ since
$T_c^{\text{MF} = 4J/k_B}$.

For $t < 1$: $m$ satisfies $m = \tanh(m/t)$. For small $m/t$:

$$m \approx \frac{m}{t} - \frac{1}{3}\left(\frac{m}{t}\right)^3 \implies m = \sqrt{3(1-t)}\, t \approx \sqrt{3}\,(1-t)^{1/2} \text{ near}  T_c$$

(b) From the Landau analysis: $\chi \propto |T - T_c|^{-1}$I.e., $\gamma = 1$.

Explicitly: $\chi^{-1} = k_B T(1 - t^{-1}\text{sech}^2(m/t))$. Near $T_c$: $\chi \sim 1/(T - T_c)$.

(c) The specific heat jump is:

$$\Delta C = \frac{3Nk_B}{2} = 1.5\, Nk_B$$

(derived from the mean-field free energy $f = \frac{1}{2}k_BT_c m^2 + \frac{1}{4}k_BT_c m^4$ near
$T_c$.)

</details>

<details>
<summary>Problem 3: Photon Gas and Blackbody Radiation</summary>

Photons are massless bosons with zero chemical potential ($\mu = 0$).

(a) Show that the Planck distribution for the photon number in mode $\omega$ is
$\langle n_\omega \rangle = 1/(e^{\beta\hbar\omega} - 1)$.

(b) Derive the Stefan--Boltzmann law for the total energy density: $u = aT^4$ where
$a = \pi^2k_B^4/(15\hbar^3 c^3)$.

(c) The cosmic microwave background has $T = 2.725$ K. Calculate the photon energy density and
number density.

**Solution:**

(a) For bosons with $\mu = 0$: $\langle n \rangle = 1/(e^{\beta\epsilon} - 1)$. With
$\epsilon = \hbar\omega$: $\langle n_\omega \rangle = 1/(e^{\beta\hbar\omega} - 1)$.

(b) Density of photon states in 3D: $g(\omega) = V\omega^2/(\pi^2 c^3)$ (2 polarizations).

$$u = \frac{1}{V}\int_0^\infty \hbar\omega\,\langle n_\omega \rangle\, g(\omega)\, d\omega = \frac{\hbar}{\pi^2 c^3}\int_0^\infty \frac{\omega^3}{e^{\beta\hbar\omega} - 1}\, d\omega$$

With $x = \beta\hbar\omega$:

$$u = \frac{(k_BT)^4}{\pi^2\hbar^3 c^3}\int_0^\infty \frac{x^3}{e^x - 1}\, dx = \frac{(k_BT)^4}{\pi^2\hbar^3 c^3}\cdot\frac{\pi^4}{15} = \frac{\pi^2 k_B^4}{15\hbar^3 c^3}\, T^4$$

(c) $u = aT^4$ with $a = 7.566 \times 10^{-16}$ J$\cdot$m$^{-3}$, $\cdot$K$^{-4}$:

$$u = 7.566 \times 10^{-16} \times (2.725)^4 = 7.566 \times 10^{-16} \times 55.15 = 4.17 \times 10^{-14} \text{ J/m}^3$$

Number density:

$$n_\gamma = \frac{2\zeta(3)}{\pi^2}\left(\frac{k_BT}{\hbar c}\right)^3 = \frac{2 \times 1.202}{\pi^2}\left(\frac{1.38 \times 10^{-23} \times 2.725}{1.055 \times 10^{-34} \times 3 \times 10^8}\right)^3$$

$$= 0.244 \times (1.193 \times 10^3)^3 \approx 0.244 \times 1.698 \times 10^9 \approx 4.14 \times 10^8 \text{ m}^{-3}$$

</details>

<details>
<summary>Problem 4: Chemical Equilibrium</summary>

For the dissociation reaction $\text{H_2} \rightleftharpoons 2\text{H}$The equilibrium constant is:

$$K(T) = \frac{n_H^2}{n_{H_2}} = \left(\frac{m_H k_B T}{2\pi\hbar^2}\right)^{3/2}\frac{(j_H + 1)^2}{2j_{H_2} + 1}\frac{1}{Z_{\text{rot}Z_{\text{vib}}e^{-D/(k_BT)}}}$$

Where $D = 4.52$ eV is the dissociation energy, $j_H = 1/2$, $j_{H_2} = 1$.

(a) At $T = 3000$ K, estimate the fraction of hydrogen that is dissociated.

(b) How does the degree of dissociation change with temperature and pressure?

**Solution:**

(a) At $T = 3000$ K, $k_BT = 0.259$ eV, so $D/(k_BT) = 17.5$Giving
$e^{-17.5} \approx 2.5 \times 10^{-8}$.

The translational factor:
$(m_H k_B T / 2\pi\hbar^2)^{3/2} \approx (2.5 \times 10^{30})^{3/2} \times (3000)^{3/2} \approx 10^{35}$
m$^{-3}$.

With rotational and vibrational partition functions at this temperature, $K \sim 10^{27}$ m$^{-3}$
(very rough estimate).

For a gas at $P = 1$ atm, $n_{\text{total} = P/(k_BT) \approx 2.4 \times 10^{25}}$ m$^{-3}$. Setting
$n_{H_2} \approx n_{\text{total}/2}$:

$$n_H = \sqrt{K \cdot n_{H_2}} \sim \sqrt{10^{27} \times 10^{25}} \sim 10^{26}$$

This suggests nearly complete dissociation at 3000 K and 1 atm (consistent with the known behavior
of hydrogen at these temperatures).

(b) Increasing temperature exponentially increases dissociation (via $e^{-D/(k_BT)}$). Increasing
pressure (at fixed $T$) _decreases_ dissociation because the reaction produces 2 moles from 1 mole
($\Delta n > 0$), so Le Chatelier's principle shifts equilibrium toward H$_2$.

</details>

<details>
<summary>Problem 5: Grand Canonical Ensemble</summary>

Consider a system in the grand canonical ensemble with chemical potential $\mu$Temperature $T$And
volume $V$.

(a) Derive the relation between the average particle number fluctuations and the isothermal
compressibility:

$$\frac{\langle N^2 \rangle - \langle N \rangle^2}{\langle N \rangle} = n k_B T \kappa_T$$

Where $n = N/V$.

(b) Evaluate this for an ideal gas and show $\langle(\Delta N)^2\rangle = \langle N \rangle$.

(c) For a Fermi gas at $T = 0$Show $\langle(\Delta N)^2\rangle = 0$ and explain physically.

**Solution:**

(a) In the grand canonical ensemble:

$$\langle N \rangle = \frac{1}{\beta}\frac{\partial \ln \mathcal{Z}}{\partial \mu}$$

$$\langle(\Delta N)^2\rangle = \langle N^2 \rangle - \langle N \rangle^2 = \frac{1}{\beta}\frac{\partial \langle N \rangle}{\partial \mu} = \frac{1}{\beta}\frac{\partial}{\partial\mu}\left(\frac{PV}{k_BT}\right) = V\frac{\partial P}{\partial \mu}$$

Using $d\mu = -s\,dT + v\,dP$ at constant $T$: $(\partial\mu/\partial P)_T = v = 1/n$.

$$\langle(\Delta N)^2\rangle = \frac{V}{(\partial\mu/\partial P)_T} = nV = \langle N \rangle \cdot nk_B T \kappa_T$$

Wait, more carefully:

$$\langle(\Delta N)^2\rangle = k_BT \frac{\partial \langle N \rangle}{\partial \mu} = k_BT V \frac{\partial n}{\partial \mu} = k_BT V \frac{\partial n}{\partial P}\frac{\partial P}{\partial \mu}$$

Since $(\partial P/\partial \mu)_T = n$ (from $dG = -SdT + VdP + \mu dN$Or $P = nk_BT$ for ideal
gas):

$$\frac{\langle(\Delta N)^2\rangle}{\langle N \rangle} = k_BT \frac{\partial n}{\partial P} = nk_B T\kappa_T$$

Where $\kappa_T = -\frac{1}{V}(\partial V/\partial P)_T = \frac{1}{n}(\partial n/\partial P)_T$.

(b) For ideal gas: $\kappa_T = 1/P = 1/(nk_BT)$So:

$$\frac{\langle(\Delta N)^2\rangle}{\langle N \rangle} = nk_BT \cdot \frac{1}{nk_BT} = 1 \implies \langle(\Delta N)^2\rangle = \langle N \rangle$$

This is the standard Poisson .../4-statistics-and-probability/2_statistics result for
non-interacting particles.

(c) At $T = 0$The Fermi gas is in its ground state with exactly $N$ particles filling all states up
to $\epsilon_F$. There are no particle number fluctuations: $\langle(\Delta N)^2\rangle = 0$.
Physically, this is because adding or removing a particle costs a finite energy $\epsilon_F$So the
chemical potential is infinitely sharp.

</details>

