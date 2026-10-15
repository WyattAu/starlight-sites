---

date: 2026-07-23T21:57:32+01:00
title: "One-Dimensional Problems"
tags:
  - Physics
  - University
description: "One-dimensional quantum problems: the infinite square well, the harmonic oscillator, the free particle, parity, the virial theorem, the finite square well, the delta potential, and tunnelling. Each solved completely, with the boundary conditions doing the physics. With recall prompts, counterexamples by name and interleaving problems. Tier U."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "physics", "url": "https://physics.wyattau.com"}, {"name": "5 Quantum Mechanics", "url": "https://physics.wyattau.com/5-quantum-mechanics"}, {"name": "5_one Dimensional Problems", "url": "https://physics.wyattau.com/5-quantum-mechanics/5_one-dimensional-problems"}]
}
</script>

## Recall prompts

Attempt these from memory *before* reading.

- What are the energy levels of the infinite square well, and what sets the
  spacing between them?
- What is the lowest energy of the well, and why is it not zero?
- What makes the harmonic oscillator soluble in closed form?
- What does the parity of a state mean, and when is it a good quantum number?
- What is the tunnelling probability's dependence on barrier width?

Check your answers against the text. Prompt 2 is the one to sit with: a
particle in a box cannot sit still, and *that* is a statement about the size of
the box rather than about the particle.

## Motivation: boundary conditions are the physics

Nothing in the Schrodinger equation knows that a well has walls. The equation
inside the well is the same free-particle equation, and its solutions are
sines and cosines with *any* wavelength. Every number that comes out of the
infinite square well -- the energies $E_n = n^2\pi^2\hbar^2/2mL^2$, the
orthogonality of the states, the nodes -- comes from the boundary conditions
and nothing else.

That is worth stating plainly, because the standard presentation makes it look
as though solving the equation produces the quantisation. It does not.
Quantisation is a statement that only certain wavelengths fit, and "fit" is a
boundary-condition word.

**The zero-point energy is the same argument in disguise.** Localising a
particle to width $L$ costs momentum of order $\hbar/L$, so the kinetic energy
is at least $\hbar^2/2mL^2$. The exact answer $E_1 = \pi^2\hbar^2/2mL^2$ is
that estimate with $\pi^2$ in the right place. Shrink the box and the ground
state energy *rises*, which is why an electron confined to an atom has tens of
electron-volts and a proton confined to a nucleus has millions.

**Tunnelling is the same boundary-condition story in the other direction.**
Inside a barrier with $E < V_0$, the solutions are exponentials rather than
oscillations -- not because the equation changed, but because the sign of
$E - V$ flipped and turned the differential equation from oscillatory to
exponential. The decay constant $\kappa$ is the only new object, and the
transmission probability goes as $e^{-2\kappa a}$. Everything else is
bookkeeping.

### 5.1 The Infinite Square Well

A particle of mass $m$ in a potential $V(x) = 0$ for $0 \lt x \lt L$ and $V(x) = \infty$ otherwise.

**Derivation.** Inside the well, the time-independent Schrodinger equation is:

$$
-\frac{\hbar^2}{2m}\frac{d^2\phi}{dx^2} = E\phi \implies \frac{d^2\phi}{dx^2} + k^2\phi = 0
$$

Where $k = \sqrt{2mE}/\hbar$. The general solution is:

$$
\phi(x) = A\sin(kx) + B\cos(kx)
$$

**Boundary conditions:** $\phi(0) = \phi(L) = 0$.

From $\phi(0) = 0$: $B = 0$, so $\phi(x) = A\sin(kx)$.

From $\phi(L) = 0$: $\sin(kL) = 0$, which requires $kL = n\pi$ for $n = 1, 2, 3, \ldots$

Therefore $k_n = n\pi/L$ and:

$$
E_n = \frac{\hbar^2 k_n^2}{2m} = \frac{n^2\pi^2\hbar^2}{2mL^2}
$$

**Normalisation.** $\int_0^L |A|^2\sin^2(n\pi x/L)\,dx = |A|^2 L/2 = 1$ Giving $A = \sqrt{2/L}$.

**Solutions:**

$$
\phi_n(x) = \sqrt{\frac{2}{L}}\sin\left(\frac{n\pi x}{L}\right), \quad E_n = \frac{n^2 \pi^2 \hbar^2}{2mL^2}, \quad n = 1, 2, 3, \ldots
$$

**Properties:**

- The ground state ($n = 1$) has the lowest energy $E_1 > 0$ (**zero-point energy**).
- Energy levels are not equally spaced; $E_n \propto n^2$.
- There are $(n - 1)$ nodes in the $n$-th eigenstate.

:::caution
$\phi(x) = 0$ everywhere, Which is not normalisable. Furthermore, $E_1 > 0$ (zero-point energy) is a
direct consequence of The uncertainty principle: confining the particle to a finite region requires
kinetic energy.
:::

### 5.2 The Quantum Harmonic Oscillator

$V(x) = \frac{1}{2}m\omega^2 x^2$.

#### 5.2.1 Algebraic Method: Ladder Operators

Define the **ladder operators** (creation and annihilation operators):

$$
\hat{a} = \sqrt{\frac{m\omega}{2\hbar}}\left(\hat{x} + \frac{i\hat{p}}{m\omega}\right), \quad \hat{a}^\dagger = \sqrt{\frac{m\omega}{2\hbar}}\left(\hat{x} - \frac{i\hat{p}}{m\omega}\right)
$$

**Commutation relation.** Using $[\hat{x}, \hat{p}] = i\hbar$:

$$
[\hat{a}, \hat{a}^\dagger] = \frac{m\omega}{2\hbar}\!\left[\hat{x} + \frac{i\hat{p}}{m\omega},\, \hat{x} - \frac{i\hat{p}}{m\omega}\right] = \frac{1}{2\hbar}(-i)(i\hbar) + \frac{1}{2\hbar}(i)(-i\hbar) = 1
$$

**Inversion.** From the definitions:

$$
\hat{x} = \sqrt{\frac{\hbar}{2m\omega}}(\hat{a} + \hat{a}^\dagger), \quad \hat{p} = -i\sqrt{\frac{m\omega\hbar}{2}}(\hat{a} - \hat{a}^\dagger)
$$

**Hamiltonian in terms of ladder operators.** Substituting into
$\hat{H} = \hat{p}^2/(2m) + m\omega^2\hat{x}^2/2$:

$$
\hat{H} = \hbar\omega\!\left(\hat{a}^\dagger\hat{a} + \frac{1}{2}\right)
$$

Where we used
$\hat{a}\hat{a}^\dagger = [\hat{a}, \hat{a}^\dagger] + \hat{a}^\dagger\hat{a} = 1 + \hat{a}^\dagger\hat{a}$.

**Number operator.** $\hat{N} = \hat{a}^\dagger\hat{a}$ So $\hat{H} = \hbar\omega(\hat{N} + 1/2)$.

_Proof that $\hat{a}$ and $\hat{a}^\dagger$ lower and raise the energy._ Compute
$[\hat{H}, \hat{a}]$:

$$
[\hat{H}, \hat{a}] = \hbar\omega[\hat{a}^\dagger\hat{a}, \hat{a}] = \hbar\omega(\hat{a}^\dagger[\hat{a}, \hat{a}] + [\hat{a}^\dagger, \hat{a}]\hat{a}) = -\hbar\omega\,\hat{a}
$$

So $\hat{H}\hat{a}|n\rangle = (E_n - \hbar\omega)\hat{a}|n\rangle$: $\hat{a}$ lowers energy by
$\hbar\omega$. Similarly, $[\hat{H}, \hat{a}^\dagger] = +\hbar\omega\,\hat{a}^\dagger$.

Let $|n\rangle$ be an eigenstate with $\hat{H}|n\rangle = E_n|n\rangle$. Then:

$$
\hat{a}|n\rangle = c_n|n-1\rangle, \quad \hat{a}^\dagger|n\rangle = c_{n+1}|n+1\rangle
$$

The constants follow from normalisation. Since $\hat{a}^\dagger\hat{a}|n\rangle = n|n\rangle$:

$$
\|c_n|n-1\rangle\|^2 = \langle n|\hat{a}^\dagger\hat{a}|n\rangle = n
$$

Therefore:

$$
\hat{a}|n\rangle = \sqrt{n}\,|n-1\rangle, \quad \hat{a}^\dagger|n\rangle = \sqrt{n+1}\,|n+1\rangle
$$

**Ground state.** The lowering process must terminate: $\hat{a}|0\rangle = 0$. This gives the
Differential equation:

$$
\left(x + \frac{\hbar}{m\omega}\frac{d}{dx}\right)\phi_0(x) = 0 \implies \phi_0(x) = \left(\frac{m\omega}{\pi\hbar}\right)^{1/4}\exp\!\left(-\frac{m\omega x^2}{2\hbar}\right)
$$

**Energy spectrum.** $E_n = \hbar\omega(n + 1/2)$ for $n = 0, 1, 2, \ldots$ The zero-point energy
$E_0 = \hbar\omega/2 \gt 0$ is a direct consequence of $[\hat{x}, \hat{p}] = i\hbar$.

#### 5.2.2 Analytic Solution

The eigenfunctions involve Hermite polynomials $H_n$:

$$
\phi_n(x) = \left(\frac{m\omega}{\pi\hbar}\right)^{1/4} \frac{1}{\sqrt{2^n n!}} H_n\!\left(\sqrt{\frac{m\omega}{\hbar}}\,x\right) e^{-m\omega x^2/(2\hbar)}
$$

The first few Hermite polynomials are $H_0(\xi) = 1$, $H_1(\xi) = 2\xi$, $H_2(\xi) = 4\xi^2 - 2$.

**Example 5.1.** Using the ladder operators, find $\phi_1(x)$ from $\phi_0(x)$.

<details>
<summary>Solution</summary>

$$
\phi_1(x) \propto \hat{a}^\dagger\phi_0(x) = \sqrt{\frac{m\omega}{2\hbar}}\left(x - \frac{\hbar}{m\omega}\frac{d}{dx}\right)\phi_0(x)
$$

$$
= \sqrt{\frac{m\omega}{2\hbar}}\!\left(x + \frac{\hbar}{m\omega}\cdot\frac{m\omega x}{\hbar}\right)\phi_0(x) = \sqrt{\frac{m\omega}{2\hbar}}\cdot 2x\,\phi_0(x)
$$

Normalising gives
$\phi_1(x) = \left(\frac{m\omega}{\pi\hbar}\right)^{1/4}\sqrt{\frac{2m\omega}{\hbar}}\,x\,e^{-m\omega x^2/(2\hbar)}$.

</details>

### 5.3 The Free Particle

$V(x) = 0$ everywhere. The Schrodinger equation:

$$
-\frac{\hbar^2}{2m}\frac{d^2\phi}{dx^2} = E\phi
$$

Solutions: $\phi_k(x) = \frac{1}{\sqrt{2\pi}} e^{ikx}$ with $E = \frac{\hbar^2 k^2}{2m}$.

The energy spectrum is **continuous** (all $E \geq 0$). The eigenfunctions are not normalisable
(plane Waves); physical states are **wave packets** constructed by superposition.

### 5.3.1 Parity

The **parity operator** $\hat{\Pi}$ reflects the coordinate: $\hat{\Pi}\psi(x) = \psi(-x)$.

**Properties:**

- $\hat{\Pi}^2 = \hat{I}$ So eigenvalues are $\pm 1$.
- Even functions ($\psi(-x) = \psi(x)$) have parity $+1$.
- Odd functions ($\psi(-x) = -\psi(x)$) have parity $-1$.
- If $V(x) = V(-x)$ (symmetric potential), then $[\hat{H}, \hat{\Pi}] = 0$ So energy eigenstates can
  be chosen to have definite parity.

**Theorem 5.1.** For a symmetric potential $V(x) = V(-x)$ The energy eigenstates are either even Or
odd.

_Proof._ Since $[\hat{H}, \hat{\Pi}] = 0$ There exists a simultaneous eigenbasis. Let
$\hat{H}\phi = E\phi$ and $\hat{\Pi}\phi = \pi\phi$ where $\pi = \pm 1$. Then
$\phi(-x) = \pi\phi(x)$ So $\phi$ is either even ($\pi = +1$) or odd ($\pi = -1$). $\blacksquare$

This theorem explains why the infinite square well, harmonic oscillator, and finite square well
Eigenstates all have definite parity: their potentials are all symmetric about the origin.

### 5.3.2 The Virial Theorem

**Theorem 5.2 (Virial Theorem).** For a stationary state of a Hamiltonian
$\hat{H} = \hat{p}^2/(2m) + V(\hat{x})$:

$$
2\langle T \rangle = \langle x\,V"(x) \rangle
$$

Where $T$ is the kinetic energy.

_Proof._ Using Ehrenfest's theorem for the operator $\hat{G} = \hat{x}\hat{p}$:

$$
\frac{d}{dt}\langle\hat{x}\hat{p}\rangle = \frac{i}{\hbar}\langle[\hat{H}, \hat{x}\hat{p}]\rangle = 0
$$

For a stationary state. Computing the commutator:

$$
[\hat{H}, \hat{x}\hat{p}] = \left[\frac{\hat{p}^2}{2m} + V, \hat{x}\hat{p}\right] = \frac{1}{2m}[\hat{p}^2, \hat{x}]\hat{p} + [\hat{x}\hat{p}, V] + \hat{x}[V, \hat{p}]
$$

$$
= \frac{-i\hbar}{m}\hat{p}\hat{p} + \hat{x}[V, \hat{p}] + \hat{x}[V, \hat{p}] = \frac{-i\hbar\hat{p}^2}{m} + 2i\hbar\hat{x}\,V'(x)
$$

Setting $d\langle\hat{x}\hat{p}\rangle/dt = 0$ and dividing by $i\hbar$:

$$
-\frac{\langle\hat{p}^2\rangle}{m} + 2\langle\hat{x}\,V'(\hat{x})\rangle = 0
$$

$$
-2\langle T \rangle + \langle x\,V'(x) \rangle = 0 \implies 2\langle T \rangle = \langle x\,V'(x) \rangle \qquad \blacksquare
$$

**Applications.** For the harmonic oscillator ($V \propto x^2$):
$2\langle T \rangle = 2\langle V \rangle$ So $\langle T \rangle = \langle V \rangle = E/2$. For the
hydrogen atom ($V \propto -1/r$): $2\langle T \rangle = -\langle V \rangle$ So
$\langle T \rangle = -E$ and $\langle V \rangle = 2E$.

### 5.4 The Finite Square Well

Consider $V(x) = -V_0$ for $|x| \lt a$ and $V(x) = 0$ for $|x| \gt a$ Where $V_0 \gt 0$.

#### 5.4.1 Bound States ($E \lt 0$)

Define $k = \sqrt{2m(E + V_0)}/\hbar$ (inside) and $\kappa = \sqrt{-2mE}/\hbar$ (outside). Note that
$k^2 + \kappa^2 = 2mV_0/\hbar^2$.

**Even parity solutions.** Inside: $\phi(x) = A\cos(kx)$. Outside: $\phi(x) = Be^{-\kappa|x|}$.

Matching $\phi$ and $\phi'$ at $x = a$ and dividing the two conditions:

$$
k\tan(ka) = \kappa
$$

**Odd parity solutions.** Inside: $\phi(x) = A\sin(kx)$. Outside: $\phi(x) = Be^{-\kappa|x|}$ (with
sign For $x \lt 0$). Matching gives:

$$
-k\cot(ka) = \kappa
$$

These are transcendental equations solved graphically. Define $z = ka$ and
$z_0 = a\sqrt{2mV_0/\hbar^2}$.

The even condition becomes $\tan z = \sqrt{z_0^2/z^2 - 1}$ and the odd condition becomes
$-\cot z = \sqrt{z_0^2/z^2 - 1}$. The number of bound states is $N = \lfloor 2z_0/\pi \rfloor + 1$.
There is always at least one bound state (the even ground state).

#### 5.4.2 Scattering States ($E \gt 0$)

For $E \gt 0$ The particle has enough energy to escape. Define $k_1 = \sqrt{2mE}/\hbar$ (outside) And
$k_2 = \sqrt{2m(E + V_0)}/\hbar$ (inside). The solutions are oscillatory everywhere. The
Transmission coefficient is:

$$
T = \frac{1}{1 + \dfrac{V_0^2}{4E(E + V_0)}\sin^2(2k_2 a)}
$$

**Resonances** occur when $2k_2 a = n\pi$ (integer multiples of $\pi$), giving $T = 1$: the well
Becomes perfectly transparent.

**Example 5.3.** A finite square well has $V_0 = 5\,\mathrm{eV}$ and $2a = 1\,\mathrm{nm}$. Estimate
the Number of bound states for an electron.

<details>
<summary>Solution</summary>

Compute $z_0 = a\sqrt{2m_e V_0}/\hbar$:

$$
z_0 = (0.5 \times 10^{-9})\frac{\sqrt{2(9.109 \times 10^{-31})(5)(1.602 \times 10^{-19})}}{1.055 \times 10^{-34}}
$$

$$
= (5 \times 10^{-10})\frac{\sqrt{1.460 \times 10^{-48}}}{1.055 \times 10^{-34}} = (5 \times 10^{-10})\frac{3.821 \times 10^{-24}}{1.055 \times 10^{-34}}
$$

$$
= (5 \times 10^{-10})(3.622 \times 10^{10}) = 18.11
$$

The number of bound states is
$N = \lfloor 2z_0/\pi \rfloor + 1 = \lfloor 36.22/\pi \rfloor + 1 = \lfloor 11.53 \rfloor + 1 = 12$.

(Actually, the formula is $N = \lfloor z_0/(\pi/2) \rfloor + 1$ only when counting the number of
Intersections. With $z_0/(\pi/2) = 18.11/1.571 = 11.53$ There are 11 full intersections plus one
Partial, giving about 11 or 12 bound states.)

</details>

### 5.5 The Delta Function Potential

Consider $V(x) = -\alpha\delta(x)$ where $\alpha \gt 0$.

#### 5.5.1 Bound State ($E \lt 0$)

The wave function is $\psi(x) = Ae^{\kappa x}$ for $x \lt 0$ and $\psi(x) = Be^{-\kappa x}$ for
$x \gt 0$ Where $\kappa = \sqrt{-2mE}/\hbar$.

**Matching conditions.**

1. **Continuity:** $A = B$ at $x = 0$.

2. **Discontinuity in derivative** (integrating the Schrodinger equation across $x = 0$):

$$
\psi'(0^+) - \psi'(0^-) = -\frac{2m\alpha}{\hbar^2}\psi(0)
$$

This gives $-\kappa B - \kappa A = -2m\alpha A/\hbar^2$ And since $A = B$:

$$
\kappa = \frac{m\alpha}{\hbar^2}
$$

The bound state energy is:

$$
E = -\frac{\hbar^2\kappa^2}{2m} = -\frac{m\alpha^2}{2\hbar^2}
$$

The normalised wave function is $\psi(x) = \sqrt{\kappa}\,e^{-\kappa|x|}$. There is exactly one
bound state.

#### 5.5.2 Scattering States ($E \gt 0$)

For a particle of energy $E = \hbar^2 k^2/(2m)$ incident from the left:

$$
\psi(x) = \begin{cases} e^{ikx} + Re^{-ikx} & x \lt 0 \\ Te^{ikx} & x \gt 0 \end{cases}
$$

Applying the matching conditions at $x = 0$:

$$
1 + R = T, \quad ik(T - 1 - R) = -\frac{2m\alpha}{\hbar^2}T
$$

Solving:

$$
T = \frac{ik}{ik - m\alpha/\hbar^2} = \frac{1}{1 + im\alpha/(\hbar^2 k)}
$$

$$
R = \frac{-m\alpha/\hbar^2}{ik - m\alpha/\hbar^2} = \frac{-im\alpha/\hbar^2}{ik + m\alpha/\hbar^2}
$$

The transmission and reflection coefficients:

$$
|T|^2 = \frac{1}{1 + (m\alpha)^2/(\hbar^4 k^2)} = \frac{1}{1 + m\alpha^2/(2\hbar^2 E)}, \quad |R|^2 = 1 - |T|^2
$$

Note that even for very high energies ($E \to \infty$),
$|R|^2 \to (m\alpha)^2/(\hbar^4 k^2) \neq 0$: The delta function always reflects some probability,
unlike a smooth potential which becomes Transparent at high energies. This is because the delta
function has an infinitely sharp feature At $x = 0$ that scatters waves of all wavelengths.

### 5.6 Quantum Tunnelling

Consider a rectangular barrier $V(x) = V_0$ for $0 \lt x \lt a$ and $V(x) = 0$ otherwise, with
$E \lt V_0$.

Inside the barrier, the Schrodinger equation gives exponentially decaying and growing solutions:

$$
\psi(x) = Ce^{\kappa x} + De^{-\kappa x}, \quad \kappa = \sqrt{\frac{2m(V_0 - E)}{\hbar^2}}
$$

For a **thick barrier** ($\kappa a \gg 1$), the growing solution $Ce^{\kappa x}$ is negligible at
the Far edge, and the transmission coefficient simplifies to:

$$
T \approx \frac{16E(V_0 - E)}{V_0^2}\,e^{-2\kappa a}
$$

The exponential factor $e^{-2\kappa a}$ is the hallmark of quantum tunnelling: the probability of
Penetration decreases exponentially with barrier width and height.

:::caution
"have" energy $V_0$ inside The barrier; rather, the wave function extends into the classically
forbidden region with Exponentially decreasing amplitude. The particle's energy is $E \lt V_0$
throughout.
:::

**Example 5.2.** An electron with $E = 5$ eV approaches a barrier of height $V_0 = 10$ eV and Width
$a = 0.5$ nm. Calculate $T$.

<details>
<summary>Solution</summary>

$$
{\kappa = \sqrt{\frac{2(9.109 \times 10^{-31})(10 - 5)(1.602 \times 10^{-19})}{(1.055 \times 10^{-34})^2}} = \sqrt{1.302 \times 10^{20}} = 1.141 \times 10^{10}\;\mathrm{m}^{-1}}
$$

$$
2\kappa a = 2(1.141 \times 10^{10})(5 \times 10^{-10}) = 11.41
$$

$$
T \approx \frac{16(5)(5)}{100}\,e^{-11.41} = 4.0 \times e^{-11.41} = 4.0 \times 1.097 \times 10^{-5} = 4.4 \times 10^{-5}
$$

The electron has roughly a $0.004\%$ chance of tunnelling through this barrier.

</details>

**Application: alpha decay.** Alpha decay can be understood as quantum tunnelling through the
Coulomb Barrier. The Geiger-Nuttall law, which relates the decay constant to the alpha particle
energy, Follows directly from the exponential dependence of $T$ on the barrier width.

**Application: scanning tunnelling microscope (STM).** In an STM, a small voltage is applied between
A sharp tip and a conducting surface. Electrons tunnel across the gap, producing a current that
Depends exponentially on the tip-surface distance: $I \propto e^{-2\kappa d}$. This allows atomic-
Resolution imaging of surfaces, as a change in distance of $0.1$ nm changes the current by a factor
of about 10.

## Intuition

One-dimensional quantum problems are the laboratory where quantum weirdness becomes visible. The infinite square well is like a ball bouncing in a perfectly elastic box: the standing waves that fit inside determine the allowed energies, and the zero-point energy means the ball can never be perfectly still. The harmonic oscillator is the quantum version of a pendulum: the ladder operators let you climb up and down the energy ladder one rung at a time, and each rung costs exactly one quantum of energy. The delta function potential is an infinitely sharp spike that still manages to bind a particle, showing that even an infinitely narrow potential can trap a quantum state. Quantum tunneling is the most dramatic departure from classical physics: a particle can pass through a barrier it classically cannot climb over, like a ball rolling through a wall. The thinner and lower the barrier, the more likely the tunnel, which is how nuclear decay and scanning tunneling microscopes work.

## Counterexamples worth knowing by name

| Claim | True? | Counterexample |
| ----- | ----- | -------------- |
| A particle in a box can have zero energy | no | $E_1 = \pi^2\hbar^2/2mL^2 > 0$; zero energy would need zero momentum and a position known to width $L$, violating the uncertainty principle |
| The infinite well is the limit of the finite well | yes, and it is a useful check | as $V_0 \to \infty$ the finite-well energies approach the infinite-well ones from below |
| Tunnelling probability is $e^{-2\kappa a}$ | only for a thick barrier | the exact $T$ has a prefactor $16E(V_0-E)/V_0^2$, which matters when $E$ is close to $V_0$ |
| Parity is always a good quantum number | no | it requires the potential to be even about the origin; shift the well to $[0,L]$ and parity is lost |
| A delta potential gives a continuous spectrum | no | the attractive delta has exactly one bound state, and it is the only 1D potential with a single one |
| The harmonic oscillator states are evenly spaced by $\hbar\omega$ | yes | this is special and is why it is exactly soluble; anharmonic terms split the spacing |
| Higher-energy states have more nodes | yes | and this is not a coincidence: $n-1$ nodes is what makes the states orthogonal |
| Wave functions must be continuous | no | $\psi$ is continuous only where $V$ is finite; at an infinite wall it is zero, and at a delta potential $\psi$ is continuous but $\psi'$ is not |

The first row is the one that generalises furthest. The zero-point energy is
not a curiosity of the square well -- it is why atoms do not collapse, why
helium does not freeze at absolute zero, and why the cosmological constant is
not obviously zero.

The last row is the one people trip on when moving from the infinite to the
finite well: the matching conditions are *different*, and using the wrong ones
gives eigenvalues that are close enough to look plausible.

## Where the research frontier is

- **Tunnelling in real devices.** The $e^{-2\kappa a}$ law is the whole of
  scanning tunnelling microscopy, flash memory and resonant tunnelling
  diodes; the open problems are inelastic tunnelling and interactions between
  the tunnelling particle and the barrier.
- **Quantum well engineering.** Superlattices and quantum wells are engineered
  by choosing layer widths and compositions, so the level structure becomes a
  design variable rather than a given.
- **The WKB approximation beyond 1D.** WKB gives the exponential factor and
  the pre-factor, and its failure near turning points is exactly what the
  connection formulae patch; how well it carries into higher dimensions is
  still studied.
- **Stochastic simulation.** Propagating the Schrodinger equation numerically
  for a particle in a well is the standard test problem for time integrators,
  because the exact propagator is unitary and finite steps are not.
- **Many-particle wells.** Adding a second particle to a well makes the
  problem interacting, and the level structure changes qualitatively; that is
  where the field's hard problems begin.

## Interleaving problems

Mix these with the [postulates](/5-quantum-mechanics/2_postulates-of-quantum-mechanics/),
[wave
functions](/5-quantum-mechanics/3_wave-functions-and-the-schrodinger-equation/),
[operators](/5-quantum-mechanics/4_operators-and-observables/), [Linear
Algebra](https://mathematics.wyattau.com/2-linear-algebra/5_eigenvalues-and-eigenvectors/)
and [Fourier
methods](https://mathematics.wyattau.com/6-ordinary-differential-equations/1_introduction-to-odes/).

1. (Operators.) Compute $\langle x\rangle$ and $\langle p\rangle$ for the
   $n$-th state of the infinite square well without integrating, using parity:
   $\phi_n(x)$ is symmetric or antisymmetric about $L/2$, so the integrands are
   odd.
2. (Linear algebra.) Show that the infinite-well states $\sqrt{2/L}\sin(n\pi
   x/L)$ are orthonormal on $[0,L]$. Where does the orthogonality come from
   -- the equation, or the boundary conditions?
3. (Wave functions.) Show that the virial theorem $2\langle T\rangle =
   n\langle V\rangle$ holds for the harmonic oscillator and that $\langle T
   \rangle = \langle V \rangle$ for the infinite well. Why do the two
   potentials give different results?
4. (Classical mechanics.) Compare the classical period of a particle in the
   infinite well with the quantum beating period between $n$ and $n+1$. Show
   that they agree as $n \to \infty$, which is the correspondence principle
   working rather than being assumed.
5. (Operators.) Show that the tunnelling exponent $\kappa$ is the imaginary
   part of the wave number inside the barrier, and hence that $e^{-2\kappa a}$
   is $|e^{ik a}|^2$ with $k$ analytically continued. That continuation is why
   the same equation gives both.
6. (Research.) Derive the WKB connection formulae at a single turning point,
   and state the condition under which they are valid. Then explain why a
   double turning point needs an extra phase of $\pi/4$.

## Cross-References

- **[Wave Functions and the Schrodinger Equation](/5-quantum-mechanics/3_wave-functions-and-the-schrodinger-equation/)**: The Schrodinger equation provides the foundation for solving 1D quantum problems.
- **[Operators and Observables](/5-quantum-mechanics/4_operators-and-observables/)**: Operators like the Hamiltonian act on wave functions to extract energy eigenvalues.
- **[Angular Momentum and the Hydrogen Atom](/5-quantum-mechanics/6_angular-momentum-and-the-hydrogen-atom/)**: The hydrogen atom extends 1D techniques to three dimensions with central potentials.

- [Calculus](https://mathematics.wyattau.com/docs/calculus)
- [Linear Algebra](https://mathematics.wyattau.com/linear-algebra/)
- [Vector Calculus](https://mathematics.wyattau.com/docs/vector-calculus)
- [Quantum Computing](https://computer-science.wyattau.com/docs/quantum-computing)

### 5.7 Common Mistakes

**Mistake 1: Assuming energy quantisation always occurs**
Energy is quantised only for bound states (particles trapped in a potential well). For scattering states ($E > 0$ for a finite potential), the energy spectrum is continuous. Students often assume all quantum systems have discrete energy levels, which is only true for confined particles.

**Mistake 2: Forgetting the zero-point energy**
The ground state energy of a quantum system is never zero for a confining potential. For the infinite square well, $E_1 = \pi^2\hbar^2/(2mL^2) > 0$. This is a consequence of the uncertainty principle: confining a particle to a region of size $L$ requires momentum $\sim \hbar/L$, giving kinetic energy $\sim \hbar^2/(2mL^2)$. Students sometimes set the lowest energy to zero as in classical mechanics.

**Mistake 3: Misunderstanding quantum tunnelling**
Tunnelling does not require the particle to "have" energy greater than the barrier height inside the barrier. The wave function extends into the classically forbidden region with exponentially decreasing amplitude. The particle's energy is $E < V_0$ throughout, and the tunnelling probability decreases exponentially with barrier width and height.
