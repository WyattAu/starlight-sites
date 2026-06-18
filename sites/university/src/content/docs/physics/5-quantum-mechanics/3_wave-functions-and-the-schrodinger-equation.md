---
title: Wave Functions and the Schrodinger Equation
tags:
  - Physics
  - University
description: ""s time-ordered
exponential:

$$\hat{U}(t, t_0) = \mathcal{T}\exp\!\left(-\frac{i}{\hbar}\int_{t_0}^{t}\hat{H}(t')\,dt'\right)$$

Where $\mathcal{T}$ denotes time ordering (later times appear to the left).

For a time-dependent Hamiltonian, the evolution operator satisfies
$i\hbar\,\partial\hat{U}/\partial t = \hat{H}(t)\hat{U}$ With $\hat{U}(t_0, t_0) = \hat{I}$.
Unitarity still holds: $d(\hat{U}^\dagger\hat{U})/dt = 0$ since $\hat{H}(t) = \hat{H}^\dagger(t)$.

### 3.6 Normalisation of Wave Functions

A physically valid wave function must satisfy $\int |\psi|^2\,dx = 1$. This determines the
normalisation Constant.

**Example 3.1.** Normalise the wave function $\psi(x) = Ae^{-\alpha|x|}$ for
$-\infty \lt x \lt \infty$ Where $\alpha \gt 0$.

<details>
<summary>Solution</summary>

$$\int_{-\infty}^{\infty} |A|^2 e^{-2\alpha|x|}\,dx = 2|A|^2 \int_0^{\infty} e^{-2\alpha x}\,dx = 2|A|^2 \cdot \frac{1}{2\alpha} = \frac{|A|^2}{\alpha} = 1$$

Therefore $|A| = \sqrt{\alpha}$And we choose $A = \sqrt{\alpha}$:

$$\psi(x) = \sqrt{\alpha}\,e^{-\alpha|x|}$$

To find $\langle x \rangle$:

$$\langle x \rangle = \alpha \int_{-\infty}^{\infty} x\,e^{-2\alpha|x|}\,dx = 0$$

By symmetry (the integrand is odd). For $\langle x^2 \rangle$:

$$\langle x^2 \rangle = 2\alpha \int_0^{\infty} x^2 e^{-2\alpha x}\,dx = 2\alpha \cdot \frac{2}{(2\alpha)^3} = \frac{1}{2\alpha^2}$$

So $\Delta x = \sqrt{\langle x^2 \rangle - \langle x \rangle^2} = 1/(\sqrt{2}\,\alpha)$.

The uncertainty product for this state is $\sigma_x\,\sigma_p = \hbar/(2\sqrt{2})$Which is larger
Than the minimum $\hbar/2$Showing this is not a minimum-uncertainty state.

</details>

**Example 3.2.** Normalise $\psi(x) = Axe^{-\alpha x^2}$ for $-\infty \lt x \lt \infty$.

<details>
<summary>Solution</summary>

$$\int_{-\infty}^{\infty} |A|^2 x^2 e^{-2\alpha x^2}\,dx = |A|^2 \cdot \frac{1}{4\alpha}\sqrt{\frac{\pi}{2\alpha}} = 1$$

Using the Gaussian integral
$\int_{-\infty}^{\infty} x^2 e^{-ax^2}\,dx = \frac{1}{2a}\sqrt{\frac{\pi}{a}}$. Therefore:

$$A = 2\sqrt{\alpha}\left(\frac{2\alpha}{\pi}\right)^{1/4}$$

</details>

### 3.7 Time-Dependent Perturbation Theory

When the Hamiltonian has a time-dependent perturbation, $\hat{H}(t) = \hat{H}_0 + \hat{V}(t)$The
Transition probability from initial state $|i\rangle$ to final state $|f\rangle$ (with
$E_i \neq E_f$) is computed in the interaction picture.

**First-order transition amplitude.** If the system starts in $|i\rangle$ at $t = 0$The probability
Amplitude for being in $|f\rangle$ at time $t$ is, to first order:

$$c_f(t) = -\frac{i}{\hbar}\int_0^t \langle f | \hat{V}(t') | i \rangle\, e^{i\omega_{fi}t'}\,dt'$$

Where $\omega_{fi} = (E_f - E_i)/\hbar$ is the Bohr frequency.

**Constant perturbation.** If $\hat{V}(t) = \hat{V}_0$ (constant) for $0 \lt t \lt T$:

$$c_f(T) = -\frac{i}{\hbar}V_{fi}\int_0^T e^{i\omega_{fi}t'}\,dt' = -\frac{V_{fi}}{\hbar\omega_{fi}}\!\left(e^{i\omega_{fi}T} - 1\right)$$

The transition probability is:

$$P_{i \to f}(T) = \frac{|V_{fi}|^2}{\hbar^2}\,\frac{\sin^2(\omega_{fi}T/2)}{(\omega_{fi}/2)^2}$$

This function is sharply peaked around $\omega_{fi} = 0$ (resonance), with width
$\Delta\omega \sim 2\pi/T$.

**Interpretation.** As $T \to \infty$The function
$\sin^2(\omega_{fi}T/2)/(\omega_{fi}/2)^2 \to 2\pi T\,\delta(\omega_{fi})$ So transitions occur only
when energy is conserved ($E_f = E_i$). For finite $T$Energy conservation Is approximate to within
$\Delta E \sim \hbar/T$A manifestation of the time-energy uncertainty Relation.

**Fermi's Golden Rule.** For a transition to a continuum of final states with density of states
$\rho(E_f)$The transition **rate** (probability per unit time) is:

$$\Gamma_{i \to f} = \frac{2\pi}{\hbar}|\langle f | \hat{V} | i \rangle|^2\,\rho(E_f)$$

This is one of the most important results in quantum mechanics, with applications to spontaneous
Emission, scattering theory, and condensed matter physics.

**Sudden and adiabatic approximations.**

- **Sudden approximation.** If the Hamiltonian changes rapidly compared to the system's natural
  timescale $\sim \hbar/\Delta E$The state does not have time to adjust:
  $|\psi_{\mathrm{after}\rangle = |\psi_{\mathrm{before}\rangle}}$. The probability of finding the
  system in the new $n$-th eigenstate is
  $P_n = |\langle n_{\mathrm{new}|\psi_{\mathrm{before}\rangle|^2}}$.

- **Adiabatic theorem.** If the Hamiltonian changes slowly enough (specifically, if
  $|\langle m|\partial\hat{H}/\partial t|n\rangle|/(\hbar\omega_{mn}^2) \ll 1$ for all $m \neq n$),
  the system remains in an instantaneous eigenstate without transitions. The adiabatic condition
  requires the rate of change to be much slower than the energy gap divided by $\hbar$.

**Harmonic perturbation.** For a sinusoidal perturbation
$\hat{V}(t) = \hat{V}_1\,e^{-i\omega t} + \hat{V}_1^\dagger\,e^{i\omega t}$ The first-order
transition rate from $|i\rangle$ to $|f\rangle$ is significant only when
$\omega \approx \omega_{fi}$ (absorption) or $\omega \approx -\omega_{fi}$ (stimulated emission).
The transition probability for Resonant absorption ($\omega \approx \omega_{fi}$) is:

$$P_{i\to f}(t) = \frac{|\langle f|\hat{V}_1|i\rangle|^2}{\hbar^2}\,\frac{\sin^2((\omega - \omega_{fi})t/2)}{(\omega - \omega_{fi})^2/4}$$

In the long-time limit, this reduces to Fermi's Golden Rule with the replacement
$V_{fi} \to \langle f|\hat{V}_1|i\rangle$.

