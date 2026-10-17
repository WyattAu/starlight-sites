---

date: 2026-07-23T21:57:32+01:00
title: "Spin | Physics - Wyatt's Notes"
tags:
  - Physics
  - University
description: "Spin: the spin operators, the Pauli matrices and their properties, deriving them from the commutation relations alone, spin-1/2 in a magnetic field, the Stern-Gerlach experiment, and why a spin-1/2 state returns to itself only after 720 degrees. With recall prompts, counterexamples by name and interleaving problems. Tier U."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "physics", "url": "https://physics.wyattau.com"}, {"name": "5 Quantum Mechanics", "url": "https://physics.wyattau.com/5-quantum-mechanics"}, {"name": "7_spin", "url": "https://physics.wyattau.com/5-quantum-mechanics/7_spin"}]
}
</script>

## Recall prompts

Attempt these from memory *before* reading.

- Write down the three Pauli matrices.
- What are their eigenvalues, and what is $[\sigma_x, \sigma_y]$?
- How many independent parameters specify a general spin-1/2 state?
- What does the Stern-Gerlach experiment actually demonstrate?
- After a $360^\circ$ rotation, does a spin-1/2 state return to itself?

Check your answers against the text. Prompt 5 is the one that is almost always
answered wrong, and it is not a formality: the sign change is measurable.

## Motivation: spin is where the algebra has to be enough

The angular momentum page argued that the algebra, not the geometry, is the
physics. Spin is where that claim stops being a slogan, because the geometric
route is unavailable.

For orbital angular momentum there is an object to rotate:
$\hat{\mathbf{L}} = \hat{\mathbf{r}} \times \hat{\mathbf{p}}$. For spin there is
no such object -- an electron is not a spinning ball, and the naive picture
fails twice over. Treating the electron as a sphere of radius
$\sim e^2/mc^2$ rotating fast enough to produce the observed magnetic moment
puts a point on its surface well past the speed of light. And a point particle
has no surface to rotate.

So spin is *postulated* as an independent degree of freedom, and the only
structure it is required to have is the angular momentum algebra. From
$[S_x, S_y] = i\hbar S_z$ alone, plus Hermiticity and tracelessness in two
dimensions, the Pauli matrices follow -- and the derivation in section 7.3 does
exactly that.

**Two things to notice in that derivation.** First, it produces $2\times2$
matrices without anyone choosing a dimension: the smallest non-trivial
representation of the algebra *is* two-dimensional, which is what "spin-1/2"
means. Second, it produces three Hermitian, traceless, unitary matrices whose
squares are the identity -- a set with no classical counterpart, because no
classical quantity squares to one while failing to commute with the others.

**The Bloch sphere.** A general spin-1/2 state is

$$
\lvert\psi\rangle = \cos\frac{\theta}{2}\lvert\uparrow\rangle +
e^{i\phi}\sin\frac{\theta}{2}\lvert\downarrow\rangle ,
$$

which is two angles -- a point on a sphere. The global phase has already been
divided out, so the *relative* phase $\phi$ is the only phase left, and it is
half the story of what a qubit is.

### 7.1 The Spin Operators

Spin is an **intrinsic** form of angular momentum with no classical analogue. For spin-$1/2$
particles (e.g., electrons):

$$
\hat{S}_x = \frac{\hbar}{2}\sigma_x, \quad \hat{S}_y = \frac{\hbar}{2}\sigma_y, \quad \hat{S}_z = \frac{\hbar}{2}\sigma_z
$$

Where $\sigma_x, \sigma_y, \sigma_z$ are the **Pauli matrices**:

$$
\sigma_x = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}, \quad \sigma_y = \begin{pmatrix} 0 & -i \\ i & 0 \end{pmatrix}, \quad \sigma_z = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}
$$

### 7.2 Properties of Pauli Matrices

$$
\sigma_i^2 = I, \quad \sigma_i \sigma_j = i\epsilon_{ijk}\sigma_k \quad (i \neq j)
$$

$$
[\sigma_i, \sigma_j] = 2i\epsilon_{ijk}\sigma_k, \quad \{\sigma_i, \sigma_j\} = 2\delta_{ij}I
$$

Spin states: $|\uparrow\rangle = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$ (spin up, $m_s = +1/2$) and
$|\downarrow\rangle = \begin{pmatrix} 0 \\ 1 \end{pmatrix}$ (spin down, $m_s = -1/2$).

### 7.3 Derivation of the Pauli Matrices

The Pauli matrices are uniquely determined (up to unitary equivalence) by the angular momentum
algebra For $j = 1/2$.

**Requirements.** We seek $2 \times 2$ matrices $\sigma_x, \sigma_y, \sigma_z$ such that:

1. $\sigma_i^2 = I$ (eigenvalues are $\pm 1$ Corresponding to $S_z = \pm\hbar/2$)
2. $\sigma_i^\dagger = \sigma_i$ (Hermitian)
3. $\mathrm{Tr}(\sigma_i) = 0$ (traceless, since eigenvalues sum to zero)
4. $[\sigma_x, \sigma_y] = 2i\sigma_z$ (and cyclic permutations)

**Step 1: Fix $\sigma_z$.** A traceless Hermitian matrix with eigenvalues $\pm 1$ is:

$$
\sigma_z = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}
$$

(up to an overall unitary transformation, which corresponds to choosing the quantisation axis).

**Step 2: Determine $\sigma_x$.** A general traceless Hermitian matrix is:

$$
\sigma_x = \begin{pmatrix} a & b \\ b^* & -a \end{pmatrix}
$$

Where $a \in \mathbb{R}$ and $b \in \mathbb{C}$. From $\sigma_x^2 = I$: $a^2 + |b|^2 = 1$ and
$2ab = 0$. Since $|b| \neq 0$ (otherwise $\sigma_x$ is diagonal and commutes with
$\sigma_z$ Violating $[\sigma_x, \sigma_z] \neq 0$), we have $a = 0$ and $|b| = 1$. Choosing $b = 1$
(by convention):

$$
\sigma_x = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}
$$

**Step 3: Determine $\sigma_y$.** From $[\sigma_x, \sigma_y] = 2i\sigma_z$:

$$
\sigma_x\sigma_y - \sigma_y\sigma_x = 2i\sigma_z
$$

Writing $\sigma_y = \begin{pmatrix} c & d \\ d^* & -c \end{pmatrix}$ and imposing $\sigma_y^2 = I$,
$\sigma_y^\dagger = \sigma_y$ And the commutation relation, we find $c = 0$, $|d| = 1$ And the
commutator gives $d - d^* = 2i$ So $d = i$:

$$
\sigma_y = \begin{pmatrix} 0 & -i \\ i & 0 \end{pmatrix}
$$

$\blacksquare$

### 7.4 Spin-1/2 in a Magnetic Field

A particle with magnetic moment $\boldsymbol{\mu} = \gamma\mathbf{S}$ (where $\gamma$ is the
Gyromagnetic ratio) in a magnetic field $\mathbf{B} = B_0\hat{z}$ has Hamiltonian:

$$
\hat{H} = -\boldsymbol{\mu}\cdot\mathbf{B} = -\gamma B_0\hat{S}_z = -\frac{\hbar\gamma B_0}{2}\sigma_z
$$

The eigenstates are $|\uparrow\rangle$ and $|\downarrow\rangle$ with energies
$E_\uparrow = -\hbar\gamma B_0/2$ And $E_\downarrow = +\hbar\gamma B_0/2$. The energy splitting is
$\Delta E = \hbar\gamma B_0$.

**Time evolution.** For an arbitrary initial state:

$$
|\psi(0)\rangle = \alpha|\uparrow\rangle + \beta|\downarrow\rangle
$$

The state at time $t$ is:

$$
|\psi(t)\rangle = \alpha e^{i\gamma B_0 t/2}|\uparrow\rangle + \beta e^{-i\gamma B_0 t/2}|\downarrow\rangle
$$

**Larmor precession.** The expectation values precess around the $z$-axis:

$$
\langle S_x \rangle(t) = \frac{\hbar}{2}(\alpha^*\beta\,e^{-i\gamma B_0 t} + \alpha\beta^*\,e^{i\gamma B_0 t})
$$

$$
\langle S_y \rangle(t) = \frac{\hbar}{2i}(\alpha^*\beta\,e^{-i\gamma B_0 t} - \alpha\beta^*\,e^{i\gamma B_0 t})
$$

$$
\langle S_z \rangle(t) = \frac{\hbar}{2}(|\alpha|^2 - |\beta|^2) = \mathrm{const}.
$$

The spin precesses at the **Larmor frequency** $\omega_L = \gamma B_0$.

For an electron, $\gamma = -e/(m_e)$ (negative charge), giving $\omega_L = eB_0/m_e$.

**The Larmor frequency.** For a typical laboratory field $B_0 = 1$ T:

$$
\omega_L = \frac{(1.602 \times 10^{-19})(1)}{9.109 \times 10^{-31}} = 1.76 \times 10^{11}\;\mathrm{rad}/s
$$

Corresponding to a frequency $\nu_L = \omega_L/(2\pi) = 28$ GHz (microwave range). This is the basis
of Electron Spin Resonance (ESR) and Nuclear Magnetic Resonance (NMR) spectroscopy, where
transitions Between spin states are driven by oscillating magnetic fields at the Larmor frequency.

**Example 7.1.** An electron starts in the state $|\psi(0)\rangle = |\uparrow\rangle$. A magnetic
field $\mathbf{B} = B_0\hat{x}$ is applied. Find $|\psi(t)\rangle$.

<details>
<summary>Solution</summary>

With $\mathbf{B} = B_0\hat{x}$ The Hamiltonian is
$\hat{H} = -\gamma B_0\hat{S}_x = \omega_L\hat{S}_x$ Where $\omega_L = \gamma B_0$. The eigenstates
of $\hat{S}_x$ are:

$$
|+\rangle_x = \frac{1}{\sqrt{2}}(|\uparrow\rangle + |\downarrow\rangle), \quad |-\rangle_x = \frac{1}{\sqrt{2}}(|\uparrow\rangle - |\downarrow\rangle)
$$

With eigenvalues $\pm\hbar\omega_L/2$.

Expanding $|\uparrow\rangle = (|+\rangle_x + |-\rangle_x)/\sqrt{2}$ and evolving:

$$
|\psi(t)\rangle = \frac{1}{\sqrt{2}}\!\left(e^{-i\omega_L t/2}|+\rangle_x + e^{i\omega_L t/2}|-\rangle_x\right)
$$

$$
= \cos\!\left(\frac{\omega_L t}{2}\right)|\uparrow\rangle - i\sin\!\left(\frac{\omega_L t}{2}\right)|\downarrow\rangle
$$

The probability of measuring spin-up along $z$ oscillates as $\cos^2(\omega_L t/2)$ With period
$T = 2\pi/\omega_L$.

</details>

### 7.5 Stern-Gerlach Experiment

A beam of silver atoms passes through an inhomogeneous magnetic field and splits into two beams,
Confirming the quantisation of angular momentum (spin-1/2 for the outer electron).

**Detailed analysis.** The force on a magnetic moment in an inhomogeneous field is:

$$
\mathbf{F} = \nabla(\boldsymbol{\mu}\cdot\mathbf{B})
$$

For a field $\mathbf{B} = B(z)\hat{z}$ with $\partial B_z/\partial z \neq 0$, the $z$-component of
force is $F_z = \mu_z\,\partial B_z/\partial z$. Since $\mu_z = \gamma m_s\hbar$ and
$m_s = \pm 1/2$:

$$
F_z = \pm\frac{\gamma\hbar}{2}\frac{\partial B_z}{\partial z}
$$

The beam splits into two, corresponding to $m_s = +1/2$ (deflected up) and $m_s = -1/2$ (deflected
down).

**Sequential Stern-Gerlach measurements.** Consider three apparatuses in sequence:

1. First SG-Z: selects $|\uparrow\rangle$.
2. Second SG-X: splits into $|+\rangle_x$ and $|-\rangle_x$ with equal probability $1/2$.
3. Third SG-Z (on the $|-\rangle_x$ beam): again splits into $|\uparrow\rangle$ and
   $|\downarrow\rangle$ with equal probability $1/2$.

This demonstrates that the intermediate $S_x$ measurement **erases** the information about the
Original $S_z$ state. The probabilities reflect the non-commutativity
$[\hat{S}_x, \hat{S}_z] = i\hbar\hat{S}_y$.

**Example 7.2.** A spin-1/2 particle passes through SG-Z (selecting $|\uparrow\rangle$), then
through SG-Z at angle $\theta$ from the $z$-axis. Find the probability of measuring $+1$ in the
second Apparatus.

<details>
<summary>Solution</summary>

The eigenstate of $\hat{S}_n = \hat{S}_z\cos\theta + \hat{S}_x\sin\theta$ with eigenvalue $+\hbar/2$
is:

$$
|+\rangle_n = \cos\frac{\theta}{2}|\uparrow\rangle + \sin\frac{\theta}{2}|\downarrow\rangle
$$

The probability is:

$$
P = |\langle+_n|\uparrow\rangle|^2 = \cos^2\frac{\theta}{2}
$$

For $\theta = 90°$ (i.e., measuring $S_x$): $P = 1/2$.

</details>

## Intuition

Spin is the universe's internal compass that has no classical counterpart. An electron is not literally spinning like a top, yet it carries angular momentum and a magnetic moment as if it were. The Pauli matrices encode the algebra of this internal angular momentum in a neat two-by-two package. When you put a spin in a magnetic field, it precesses like a wobbling top, but the energy comes in only two values: aligned or anti-aligned. The Stern-Gerlach experiment is the smoking gun: a beam of atoms splits into exactly two beams, not a continuous spread, proving that angular momentum is quantized. Measuring spin along one axis completely randomizes the result along a perpendicular axis, which is the quantum version of the uncertainty principle at work. Adding two spins together gives either a triplet (symmetric) or a singlet (antisymmetric), and the singlet state is so entangled that measuring one instantly tells you about the other, no matter how far apart they are.

Given two angular momenta $\hat{\mathbf{J}}_1$ and $\hat{\mathbf{J}}_2$ with quantum numbers
$j_1, m_1$ and $j_2, m_2$ Define the total
$\hat{\mathbf{J}} = \hat{\mathbf{J}}_1 + \hat{\mathbf{J}}_2$.

**Compatible observables:** $\hat{J}^2$, $\hat{J}_z$, $\hat{J}_1^2$, $\hat{J}_2^2$ all commute. We
label Simultaneous eigenstates as $|j_1, j_2; j, m\rangle$.

**Clebsch-Gordan decomposition.** The total angular momentum quantum numbers range over:

$$
j = |j_1 - j_2|, |j_1 - j_2| + 1, \ldots, j_1 + j_2
$$

In integer steps. For each $j$ The magnetic quantum number $m$ ranges from $-j$ to $j$.

The transformation between the product basis and the total-$j$ basis is:

$$
|j_1, j_2; j, m\rangle = \sum_{m_1, m_2} C(j_1\,m_1\,j_2\,m_2|j\,m)\,|j_1, m_1\rangle|j_2, m_2\rangle
$$

Where $C(j_1\,m_1\,j_2\,m_2|j\,m)$ are the **Clebsch-Gordan coefficients**.

**Two spin-1/2 particles.** The composite system has $j_1 = j_2 = 1/2$. The possible total spins
are:

- **Triplet** ($j = 1$): three states with $m = 1, 0, -1$ $$|1,1\rangle = |\uparrow\uparrow\rangle$$
  $$
  |1,0\rangle = \frac{1}{\sqrt{2}}(|\uparrow\downarrow\rangle + |\downarrow\uparrow\rangle)
  $$
  $$
  |1,-1\rangle = |\downarrow\downarrow\rangle
  $$

- **Singlet** ($j = 0$): one state with $m = 0$
  $$
  |0,0\rangle = \frac{1}{\sqrt{2}}(|\uparrow\downarrow\rangle - |\downarrow\uparrow\rangle)
  $$

The triplet states are symmetric under particle exchange; the singlet is antisymmetric.

**Total spin operator.**
$\hat{S}^2 = \hat{S}_1^2 + \hat{S}_2^2 + 2\hat{\mathbf{S}}_1\cdot\hat{\mathbf{S}}_2$ So:

$$
\hat{\mathbf{S}}_1\cdot\hat{\mathbf{S}}_2 = \frac{1}{2}(\hat{S}^2 - \hat{S}_1^2 - \hat{S}_2^2)
$$

For the triplet: $\hat{\mathbf{S}}_1\cdot\hat{\mathbf{S}}_2 = \hbar^2/4$. For the singlet:
$\hat{\mathbf{S}}_1\cdot\hat{\mathbf{S}}_2 = -3\hbar^2/4$.

**Complete set of commuting observables (CSCO).** For a two-spin system, the set
$\\{\hat{S}^2, \hat{S}_z, \hat{S}_1^2, \hat{S}_2^2\\}$ forms a CSCO: their simultaneous eigenstates
are Uniquely labelled by the quantum numbers $(s, m_s, s_1, s_2)$. An alternative CSCO is
$\\{\hat{S}_{1z}, \hat{S}_{2z}, \hat{S}_1^2, \hat{S}_2^2\\}$ Which uses the product basis. The
Clebsch-Gordan coefficients are the transformation matrix between these two bases.

**Clebsch-Gordan table for $j_1 = j_2 = 1/2$:**

<div class="table-wrap">

| $m_1$  | $m_2$  | $j=1,\,m$    | $j=0,\,m$     |
| ------ | ------ | ------------ | ------------- |
| $+1/2$ | $+1/2$ | $1$          | $0$           |
| $+1/2$ | $-1/2$ | $1/\sqrt{2}$ | $1/\sqrt{2}$  |
| $-1/2$ | $+1/2$ | $1/\sqrt{2}$ | $-1/\sqrt{2}$ |
| $-1/2$ | $-1/2$ | $1$          | $0$           |

</div>

**Example 7.3.** Two electrons are in the singlet state. If electron 1 is measured to have
$S_z = +\hbar/2$ What is the state of electron 2 immediately after? What is the probability of
Measuring $S_x = +\hbar/2$ for electron 2?

<details>
<summary>Solution</summary>

The singlet state is
$|0,0\rangle = (|\uparrow_1\downarrow_2\rangle - |\downarrow_1\uparrow_2\rangle)/\sqrt{2}$.

After measuring $S_1^z = +\hbar/2$ The state collapses to $|\uparrow_1\downarrow_2\rangle$. Electron
2 is in $|\downarrow\rangle$.

The probability of measuring $S_2^x = +\hbar/2$ is:

$$
P = |\langle+_x|\downarrow\rangle|^2 = \left|\frac{1}{\sqrt{2}}\langle\uparrow| + \frac{1}{\sqrt{2}}\langle\downarrow|\;\downarrow\rangle\right|^2 = \frac{1}{2}
$$

</details>

### 7.6 Common Mistakes

**Mistake 1: Confusing probability with probability amplitude.**
In quantum mechanics, the probability of a measurement outcome is the square of the absolute value of the probability amplitude. Do not confuse the amplitude (a complex number) with the probability (a real number between 0 and 1).

**Mistake 2: Assuming that spin is a classical angular momentum.**
Spin is an intrinsic quantum property with no classical analogue. It does not correspond to physical rotation of the particle. Do not think of spin as the particle spinning like a top.

**Mistake 3: Forgetting that measuring spin along one axis randomizes the result along a perpendicular axis.**
If a particle is in a definite state of $S_z$, measuring $S_x$ will give a random result (with equal probability for $+\hbar/2$ and $-\hbar/2$). The intermediate measurement destroys the information about the original state. Do not assume that measuring one component of spin tells you about the other components.

**Mistake 4: Confusing the singlet and triplet states.**
The singlet state $|0,0\rangle$ is antisymmetric under particle exchange, while the triplet states $|1,m\rangle$ are symmetric. Do not confuse the two; they have different symmetry properties and different total spin.

**Mistake 5: Assuming that spin-1/2 particles have only two states.**
A single spin-1/2 particle has two states ($|\uparrow\rangle$ and $|\downarrow\rangle$), but a system of two spin-1/2 particles has four states (triplet and singlet). Do not assume that the number of states is always two; the answer varies based on on the number of particles.

## Counterexamples worth knowing by name

<div class="table-wrap">

| Claim | True? | Counterexample |
| ----- | ----- | -------------- |
| Spin is the electron rotating about its axis | no | a classical sphere of the electron's mass and charge spinning fast enough to give the observed moment has a surface speed far beyond $c$, and the electron is a point particle anyway |
| A $360^\circ$ rotation returns the state to itself | no | $\lvert\psi\rangle \to -\lvert\psi\rangle$, which is measurable by interferometry; the state returns only after $720^\circ$ |
| Measuring $S_x$, then $S_z$, then $S_x$ again reproduces the first result | no | the second measurement destroys the first; the third is random, exactly as the non-commutation predicts |
| $\lvert\uparrow\rangle + \lvert\downarrow\rangle$ has a definite $z$-component | no | it is an $S_x$ eigenstate; it has no definite $S_z$ at all |
| The Stern-Gerlach apparatus measures a classical magnetic dipole | no | it measures spin, and a classical dipole would produce a *continuous* spread on the screen rather than two spots |
| $\sigma_x\sigma_y$ is Hermitian | no | the product of two Hermitian matrices is Hermitian only if they commute, and $\sigma_x$ and $\sigma_y$ do not |
| Spin adds to orbital angular momentum by simple addition | no | total angular momentum is built from Clebsch-Gordan coefficients, and $l = 1$ with $s = 1/2$ gives $j = 3/2$ *or* $j = 1/2$, not $3/2$ alone |
| Spin-half particles are fermions because they are spin-half | that is the theorem | the spin-statistics connection is not derivable from non-relativistic QM and requires relativity |

</div>

The second row is the one to internalise, because it is the difference between
spin-1/2 and everything classical. The $720^\circ$ requirement is not a
mathematical curiosity -- it has been measured with neutrons, and it is why
spinors are not vectors.

The last row is the deepest item on the page. Spin was postulated to explain a
spectroscopy anomaly; the spin-statistics theorem then shows that the *same*
quantum number fixes whether the particle is a fermion. Nothing in this course
derives it, and the derivation needs relativity.

## Where the research frontier is

- **Spintronics.** Using spin rather than charge to carry information, which
  promises lower dissipation. The open problem is injecting and preserving spin
  efficiently at room temperature across a metal-semiconductor interface.
- **Spin qubits.** Electron and nuclear spins in silicon and diamond are among
  the longest-coherence qubits available, and the scaling question is control
  fan-out rather than decoherence.
- **Topological spin textures.** Skyrmions are nanoscale whirls of magnetisation
  that can be moved with tiny currents, and are a candidate for racetrack
  memory.
- **Spin-statistics.** The theorem holds in relativistic QFT, but the derivation
  assumes locality and a vacuum; what survives in topologically non-trivial
  settings is an active area, with anyons as the counterexample.
- **Weak measurement.** Spin trajectories in a Stern-Gerlach magnet have been
  reconstructed by weak measurement, and what those "trajectories" mean is
  genuinely contested.

## Interleaving problems

Mix these with the [postulates](/5-quantum-mechanics/2_postulates-of-quantum-mechanics/),
[angular
momentum](/5-quantum-mechanics/6_angular-momentum-and-the-hydrogen-atom/),
[operators](/5-quantum-mechanics/4_operators-and-observables/), [Linear
Algebra](https://mathematics.wyattau.com/2-linear-algebra/1_vectors-and-vector-spaces/)
and [Symplectic Structure and KAM
Theory](/1-classical-mechanics/16_symplectic-structure-and-kam-theory/).

1. (Linear algebra.) Derive the Pauli matrices from
   $[\sigma_i, \sigma_j] = 2i\epsilon_{ijk}\sigma_k$, together with Hermiticity,
   tracelessness and unit determinant. Identify which assumption fixes the
   dimension, and show that $3\times3$ matrices do not satisfy it.
2. (Operators.) Compute $[\sigma_x, \sigma_y]$ explicitly and confirm it equals
   $2i\sigma_z$. Then show that $\sigma_i\sigma_j = \delta_{ij}I +
   i\epsilon_{ijk}\sigma_k$, which encodes both the commutator and the
   anticommutator in one line.
3. (Angular momentum.) Show that $S^2 = \frac{3}{4}\hbar^2 I$ for spin-1/2, and
   explain why $s = 1/2$ is the *smallest* non-trivial representation. What
   would $s = 0$ correspond to?
4. (Wave functions.) Parametrise a general spin-1/2 state by two angles and show
   that the relative phase is half the azimuthal angle on the Bloch sphere. Then
   explain why the factor of a half is the $720^\circ$ rotation in disguise.
5. (Classical mechanics.) A classical magnetic dipole in a Stern-Gerlach field
   produces a continuous distribution of deflections. Show that this follows
   from a continuous distribution of $\mu_z$, and hence that the two-spot result
   is a direct measurement of quantisation rather than of magnetism.
6. (Research.) State the spin-statistics connection precisely and explain why
   its proof requires relativity. Then describe what an anyon is and what breaks
   in two dimensions that allows it.

## Cross-References

- **[Angular Momentum and the Hydrogen Atom](/5-quantum-mechanics/6_angular-momentum-and-the-hydrogen-atom/)**: Orbital angular momentum provides the foundation for understanding spin as an intrinsic angular momentum.
- **[Operators and Observables](/5-quantum-mechanics/4_operators-and-observables/)**: Operators represent physical observables and their commutation relations determine spin algebra.
- **[Identical Particles and Exchange Symmetry](/5-quantum-mechanics/10_identical-particles-and-exchange-symmetry/)**: Spin statistics connect spin to particle exchange symmetry and quantum statistics.

- [Calculus](https://mathematics.wyattau.com/docs/calculus)
- [Linear Algebra](https://mathematics.wyattau.com/2-linear-algebra/)
- [Vector Calculus](https://mathematics.wyattau.com/docs/vector-calculus)
- [Quantum Computing](https://computer-science.wyattau.com/docs/quantum-computing)
