---

title: Wave Functions and the Schrodinger Equation
tags:
  - Physics
  - University
description: "In the position representation, the state is described by a Where is the probabi Comprehensive educational content coverage with definitions and practice proble"
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "physics", "url": "https://physics.wyattau.com"}, {"name": "5 Quantum Mechanics", "url": "https://physics.wyattau.com/5-quantum-mechanics"}, {"name": "3_wave Functions And The Schrodinger Equation", "url": "https://physics.wyattau.com/5-quantum-mechanics/3_wave-functions-and-the-schrodinger-equation"}]
}
</script>

### 3.1 Wave Functions

In the position representation, the state is described by a **wave function** $\psi(\mathbf{r}, t)$
Where $|\psi(\mathbf{r}, t)|^2$ is the probability density:

$$P(\mathbf{r} \in [\mathbf{r}, \mathbf{r} + d\mathbf{r}]) = |\psi(\mathbf{r}, t)|^2\, d^3\mathbf{r}$$

**Normalisation:** $\int_{-\infty}^{\infty} |\psi(\mathbf{r}, t)|^2\, d^3\mathbf{r} = 1$.

### 3.2 Time-Dependent Schrodinger Equation

$$i\hbar \frac{\partial \psi}{\partial t} = \hat{H}\psi = \left(-\frac{\hbar^2}{2m}\nabla^2 + V(\mathbf{r}, t)\right)\psi$$

### 3.3 Time-Independent Schrodinger Equation

For time-independent potentials $V(\mathbf{r})$Separate variables:
$\psi(\mathbf{r}, t) = \phi(\mathbf{r}) e^{-iEt/\hbar}$:

$$\hat{H}\phi = E\phi \quad \mathrm{i}.e., \quad -\frac{\hbar^2}{2m}\nabla^2\phi + V\phi = E\phi$$

This is an eigenvalue problem: $E$ is the energy eigenvalue, $\phi$ is the energy eigenstate.

**Properties of energy eigenstates:**

1. **Orthogonality.** If $\hat{H}\phi_n = E_n\phi_n$ and $\hat{H}\phi_m = E_m\phi_m$ with
   $E_n \neq E_m$ then $\int \phi_n^*\phi_m\,dx = 0$ (since $\hat{H}$ is Hermitian).

2. **Completeness.** The energy eigenstates form a complete basis: any state can be expanded as
   $\psi(x,0) = \sum_n c_n\phi_n(x)$ where $c_n = \int \phi_n^*(x)\psi(x,0)\,dx$.

3. **Stationary states.** If $\psi(x,0) = \phi_n(x)$Then $\psi(x,t) = \phi_n(x)e^{-iE_nt/\hbar}$.
   The probability density $|\psi|^2 = |\phi_n|^2$ is time-independent.

4. **Reality of $\phi$.** If $V(x)$ is real and there is no magnetic field, $\phi_n(x)$ can be
   chosen to be real. This is because if $\phi_n$ is a solution, so is $\phi_n^*$And degenerate
   solutions can be combined into real linear combinations.

### 3.4 Probability Current

The **probability current density** is

$$\mathbf{J} = \frac{\hbar}{2mi}(\psi^* \nabla\psi - \psi \nabla\psi^*)$$

It satisfies the continuity equation:
$\frac{\partial |\psi|^2}{\partial t} + \nabla \cdot \mathbf{J} = 0$ Expressing conservation of
probability.

_Derivation of the continuity equation._ Start with the Schrodinger equation and its complex
conjugate:

$$i\hbar \frac{\partial \psi}{\partial t} = -\frac{\hbar^2}{2m}\nabla^2\psi + V\psi$$

$$-i\hbar \frac{\partial \psi^*}{\partial t} = -\frac{\hbar^2}{2m}\nabla^2\psi^* + V\psi^*$$

Multiply the first by $\psi^*$ and the second by $\psi$Then subtract:

$$i\hbar\!\left(\psi^*\frac{\partial \psi}{\partial t} + \psi\frac{\partial \psi^*}{\partial t}\right) = -\frac{\hbar^2}{2m}\!\left(\psi^*\nabla^2\psi - \psi\nabla^2\psi^*\right)$$

The left-hand side is $i\hbar\,\partial|\psi|^2/\partial t$. The right-hand side is a divergence:

$$\nabla \cdot (\psi^*\nabla\psi - \psi\nabla\psi^*) = \psi^*\nabla^2\psi - \psi\nabla^2\psi^*$$

Therefore:

$$i\hbar\frac{\partial |\psi|^2}{\partial t} = -\frac{\hbar^2}{2m}\nabla \cdot (\psi^*\nabla\psi - \psi\nabla\psi^*)$$

Dividing by $i\hbar$:

$$\frac{\partial |\psi|^2}{\partial t} + \nabla \cdot \left[\frac{\hbar}{2mi}(\psi^*\nabla\psi - \psi\nabla\psi^*)\right] = 0$$

$$\frac{\partial |\psi|^2}{\partial t} + \nabla \cdot \mathbf{J} = 0 \qquad \blacksquare$$

### 3.5 Unitarity of Time Evolution

**Theorem 3.1.** Time evolution governed by the Schrodinger equation with a Hermitian Hamiltonian Is
unitary, and therefore preserves the norm of the state vector.

_Proof._ The time evolution operator $\hat{U}(t, t_0)$ is defined by:

$$|\psi(t)\rangle = \hat{U}(t, t_0)|\psi(t_0)\rangle$$

For a time-independent Hamiltonian:

$$\hat{U}(t, t_0) = \exp\!\left(-\frac{i\hat{H}(t - t_0)}{\hbar}\right)$$

To prove unitarity, we show $\hat{U}^\dagger \hat{U} = \hat{I}$:

$$\hat{U}^\dagger = \exp\!\left(\frac{i\hat{H}^\dagger(t - t_0)}{\hbar}\right) = \exp\!\left(\frac{i\hat{H}(t - t_0)}{\hbar}\right)$$

Since $\hat{H} = \hat{H}^\dagger$ (Hermitian). Therefore:

$$\hat{U}^\dagger \hat{U} = \exp\!\left(\frac{i\hat{H}(t - t_0)}{\hbar}\right)\exp\!\left(-\frac{i\hat{H}(t - t_0)}{\hbar}\right) = \hat{I}$$

Since commuting operators satisfy $e^A e^{-A} = I$.

**Consequence.** Norm preservation:

$$\langle\psi(t)|\psi(t)\rangle = \langle\psi(t_0)|\hat{U}^\dagger\hat{U}|\psi(t_0)\rangle = \langle\psi(t_0)|\psi(t_0)\rangle$$

Total probability is conserved under time evolution. $\blacksquare$

**Composing evolutions.** For successive time intervals, the evolution operator composes as:

$$\hat{U}(t_2, t_0) = \hat{U}(t_2, t_1)\,\hat{U}(t_1, t_0)$$

This composition law, combined with unitarity, is the group structure underlying quantum dynamics.
For a time-dependent Hamiltonian, the evolution operator is given by Dyson"s time-ordered
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

### 3.7 Worked Example: Infinite Square Well

**Problem.** A particle of mass $m$ is confined to a one-dimensional box of width $L$ (infinite square well). Find the energy eigenstates and eigenvalues.

<details>
<summary>Solution</summary>

The potential is:
$$V(x) = \begin{cases} 0 & 0 < x < L \\ \infty & \text{otherwise} \end{cases}$$

Inside the box ($0 < x < L$), the time-independent Schrodinger equation is:
$$-\frac{\hbar^2}{2m}\frac{d^2\phi}{dx^2} = E\phi$$

$$\frac{d^2\phi}{dx^2} = -k^2\phi, \quad k = \frac{\sqrt{2mE}}{\hbar}$$

General solution: $\phi(x) = A\sin(kx) + B\cos(kx)$

Boundary conditions: $\phi(0) = 0 \implies B = 0$

$\phi(L) = 0 \implies \sin(kL) = 0 \implies kL = n\pi, \quad n = 1, 2, 3, ...$

Energy eigenvalues:
$$E_n = \frac{n^2\pi^2\hbar^2}{2mL^2}$$

Eigenstates: $\phi_n(x) = \sqrt{\frac{2}{L}}\sin\left(\frac{n\pi x}{L}\right)$

The normalization constant $A = \sqrt{2/L}$ ensures $\int_0^L |\phi_n|^2 dx = 1$.

$\blacksquare$

**Intuition.** The energy levels scale as $n^2$, so the spacing between levels increases with $n$. The ground state energy $E_1$ is non-zero -- this is the zero-point energy, a direct consequence of the uncertainty principle. A particle confined to a region of size $L$ must have momentum $\sim \hbar/L$, giving kinetic energy $\sim \hbar^2/(2mL^2)$.

</details>

### 3.8 Worked Example: Expectation Values

**Problem.** For the ground state of the infinite square well, find $\langle x \rangle$, $\langle x^2 \rangle$, $\langle p \rangle$, and $\langle p^2 \rangle$. Verify the uncertainty principle.

<details>
<summary>Solution</summary>

Ground state: $\phi_1(x) = \sqrt{2/L}\sin(\pi x/L)$

$$\langle x \rangle = \frac{2}{L}\int_0^L x\sin^2\left(\frac{\pi x}{L}\right)dx = \frac{L}{2}$$

By symmetry, the average position is at the center of the well.

$$\langle x^2 \rangle = \frac{2}{L}\int_0^L x^2\sin^2\left(\frac{\pi x}{L}\right)dx = \frac{L^2}{3} - \frac{L^2}{2\pi^2}$$

For momentum, use $\hat{p} = -i\hbar\frac{d}{dx}$:

$$\langle p \rangle = \frac{2}{L}\int_0^L \sin\left(\frac{\pi x}{L}\right)\left(-i\hbar\frac{d}{dx}\right)\sin\left(\frac{\pi x}{L}\right)dx = 0$$

By symmetry, the average momentum is zero.

$$\langle p^2 \rangle = \frac{2}{L}\int_0^L \sin\left(\frac{\pi x}{L}\right)\left(-\hbar^2\frac{d^2}{dx^2}\right)\sin\left(\frac{\pi x}{L}\right)dx = \frac{\pi^2\hbar^2}{L^2}$$

Uncertainties:
$$\sigma_x = \sqrt{\langle x^2 \rangle - \langle x \rangle^2} = L\sqrt{\frac{1}{12} - \frac{1}{2\pi^2}} \approx 0.18L$$

$$\sigma_p = \sqrt{\langle p^2 \rangle - \langle p \rangle^2} = \frac{\pi\hbar}{L}$$

Uncertainty product:
$$\sigma_x\sigma_p = \frac{\pi\hbar}{L} \cdot L\sqrt{\frac{1}{12} - \frac{1}{2\pi^2}} = \pi\hbar\sqrt{\frac{1}{12} - \frac{1}{2\pi^2}} \approx 1.14\hbar > \frac{\hbar}{2}$$

The uncertainty principle is satisfied.

$\blacksquare$

**Common mistake.** Forgetting that $\langle p \rangle = 0$ for a standing wave. The momentum expectation value is zero because the particle is equally likely to be moving left or right.

</details>

### 3.9 Time-Dependent Perturbation Theory

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

## Intuition

The Schrodinger equation is the quantum version of Newton's second law: it tells you how a quantum state evolves in time. The wave function is like a ghostly cloud that describes where a particle might be found, with the square of its height giving the probability. A particle in a box is like a vibrating string fixed at both ends: only certain wavelengths fit, so only certain energies are allowed. The zero-point energy is the quantum version of the jitterbug: you cannot pin a particle down completely because the uncertainty principle demands it keep moving. Probability current is like water flow: the continuity equation ensures that probability is never created or destroyed, only moved around. Unitarity guarantees that quantum mechanics is reversible: if you run time backward, you recover the initial state, just like rewinding a video.



## Cross-References

- **[Postulates of Quantum Mechanics](2_postulates-of-quantum-mechanics.md)**: The postulates provide the mathematical framework for wave functions and the Schrodinger equation.
- **[Operators and Observables](4_operators-and-observables.md)**: Operators represent physical observables and act on wave functions to extract measurable quantities.
- **[One-Dimensional Problems](5_one-dimensional-problems.md)**: The infinite square well and other 1D problems illustrate the application of the Schrodinger equation.

- [Calculus](https://mathematics.wyattau.com/docs/calculus)
- [Linear Algebra](https://mathematics.wyattau.com/docs/linear-algebra)
- [Vector Calculus](https://mathematics.wyattau.com/docs/vector-calculus)
- [Quantum Computing](https://computer-science.wyattau.com/docs/quantum-computing)

### 3.10 Common Mistakes

**Mistake 1: Forgetting to normalise the wave function**
A physically valid wave function must satisfy $\int |\psi|^2\,dx = 1$. Students often solve the Schrodinger equation and present the unnormalised solution. The normalisation constant is determined by this integral and affects all expectation values and probabilities. Always normalise before computing physical quantities.

**Mistake 2: Applying incorrect boundary conditions**
For the infinite square well, $\psi = 0$ at the walls because the potential is infinite there. For the finite square well, $\psi$ and $d\psi/dx$ must be continuous at the boundary. For the delta function potential, $\psi$ is continuous but $d\psi/dx$ has a discontinuity. Using the wrong matching conditions gives incorrect energy eigenvalues.

**Mistake 3: Assuming all wave functions are normalisable**
Plane waves $e^{ikx}$ are not normalisable over all space and cannot represent physical states by themselves. Physical states are wave packets constructed by superposing plane waves. The energy spectrum for free particles is continuous, and the eigenfunctions form a continuum rather than a discrete set.
