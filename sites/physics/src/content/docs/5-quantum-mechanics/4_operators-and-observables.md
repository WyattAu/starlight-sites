---

date: 2026-07-23T21:57:32+01:00
title: "Operators and Observables"
tags:
  - Physics
  - University
description: "Operators and Observables: comprehensive educational content notes with precise definitions, worked examples, common pitfalls, and practice problems."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "physics", "url": "https://physics.wyattau.com"}, {"name": "5 Quantum Mechanics", "url": "https://physics.wyattau.com/5-quantum-mechanics"}, {"name": "4_operators And Observables", "url": "https://physics.wyattau.com/5-quantum-mechanics/4_operators-and-observables"}]
}
</script>

## Recall prompts

Attempt these from memory *before* reading.

- What makes an operator an *observable*? Give the two conditions.
- Compute $[\hat{x}, \hat{p}] = \hat{x}\hat{p} - \hat{p}\hat{x}$ acting on a
  smooth test function.
- State the generalised uncertainty principle.
- Define the expectation value, and say what it is *not*.
- What is the difference between Hermitian and self-adjoint, in one sentence?

Check your answers against the text. The last prompt is the one that catches
people, and it is the reason the page exists.

## Motivation: why an observable needs a *domain*

In finite-dimensional linear algebra, a Hermitian matrix is all you need. It
has real eigenvalues and an orthonormal eigenbasis, so "measure $\hat{A}$"
means "read off an eigenvalue and its weight" and the probabilities in the Born
rule have somewhere to live.

Physics is not finite-dimensional. The position operator $\hat{x} = x$ and the
momentum operator $\hat{p} = -i\hbar\,\mathrm{d}/\mathrm{d}x$ are defined on
*functions*, and the set of functions on which a differential operator is
defined is not incidental -- it is part of the operator. Changing the domain
changes the operator, and can change whether it has real eigenvalues at all.

**This is not a technicality.** The momentum operator on the half-line is
Hermitian on its natural domain and is not self-adjoint, and self-adjointness
is what the spectral theorem needs. The spectral theorem is what guarantees a
complete family of spectral projections, and those projections are what
"probability of outcome $a$" is defined in terms of. Lose self-adjointness and
the Born rule has nothing to be a statement about.

So the two conditions are:

- **Hermitian (symmetric):** $\langle\phi, \hat{A}\psi\rangle =
  \langle \hat{A}\phi, \psi\rangle$ for all $\psi, \phi$ in the domain.
- **Self-adjoint:** Hermitian *and* the domain equals the domain of
  $\hat{A}^\dagger$.

On a finite-dimensional space, domains are everything, so the two coincide.
On a Hilbert space of functions, they need not, and the difference is exactly
where the interesting physics lives.

### 4.1 Position and Momentum Operators

In the position representation:

$$
\hat{x} = x, \quad \hat{p} = -i\hbar\frac{\partial}{\partial x}
$$

These satisfy the **canonical commutation relation**:

$$
[\hat{x}, \hat{p}] = i\hbar
$$

### 4.2 General Properties of Hermitian Operators

**Hermitian operators** have real eigenvalues and orthogonal eigenstates -- essential for
observables.

**Theorem 4.1.** If $\hat{A}$ is Hermitian, then:

- All eigenvalues are real.
- Eigenstates corresponding to distinct eigenvalues are orthogonal.
- The eigenstates form a complete basis (for the space of physical states).

_Proof that eigenvalues are real._ Let $\hat{A}|a\rangle = a|a\rangle$ with
$\langle a|a\rangle = 1$. Then:

$$
\langle a|\hat{A}|a\rangle = a\langle a|a\rangle = a
$$

Taking the complex conjugate:

$$
\langle a|\hat{A}|a\rangle^* = \langle a|\hat{A}^\dagger|a\rangle = \langle a|\hat{A}|a\rangle = a^*
$$

Where the second equality uses $\hat{A} = \hat{A}^\dagger$. Therefore $a = a^*$ So $a$ is real.
$\blacksquare$

_Proof that eigenstates are orthogonal._ Let $\hat{A}|a\rangle = a|a\rangle$ and
$\hat{A}|b\rangle = b|b\rangle$ With $a \neq b$:

$$
\langle b|\hat{A}|a\rangle = a\langle b|a\rangle
$$

$$
\langle b|\hat{A}|a\rangle = \langle\hat{A}b|a\rangle = b^*\langle b|a\rangle = b\langle b|a\rangle
$$

Where the last step uses $b^* = b$ (eigenvalues are real). Therefore:

$$
(a - b)\langle b|a\rangle = 0
$$

Since $a \neq b$ We must have $\langle b|a\rangle = 0$. $\blacksquare$

**Theorem 4.2 (Spectral Theorem).** Every Hermitian operator on a finite-dimensional Hilbert space
Has a complete orthonormal set of eigenvectors. In infinite dimensions, this holds for Self-adjoint
operators with a discrete spectrum; operators with continuous spectra require the Spectral theorem
in its general form (resolution of the identity).

### 4.3 Commutators

The **commutator** of two operators is $[\hat{A}, \hat{B}] = \hat{A}\hat{B} - \hat{B}\hat{A}$.

**Theorem 4.3 (Generalised Uncertainty Principle).** For observables $\hat{A}$ and $\hat{B}$:

$$
\sigma_A \sigma_B \geq \frac{1}{2}|\langle[\hat{A}, \hat{B}]\rangle|
$$

**Corollary 4.4 (Heisenberg Uncertainty Principle).** $\sigma_x \sigma_p \geq \hbar/2$.

_Proof._ This follows from the generalised uncertainty principle with $[\hat{x}, \hat{p}] = i\hbar$:

$$
\sigma_x \sigma_p \geq \frac{1}{2}|\langle i\hbar \rangle| = \frac{\hbar}{2}
$$

$\blacksquare$

### 4.4 Proof of the Generalised Uncertainty Principle

**Theorem 4.5 (Robertson-Schrodinger inequality).** For any state $|\psi\rangle$ and observables
$\hat{A}$, $\hat{B}$:

$$
\sigma_A^2\,\sigma_B^2 \geq \frac{1}{4}|\langle[\hat{A}, \hat{B}]\rangle|^2 + \frac{1}{4}\langle\{\Delta\hat{A}, \Delta\hat{B}\}\rangle^2
$$

Where $\Delta\hat{A} = \hat{A} - \langle\hat{A}\rangle$ and
$\sigma_A^2 = \langle\Delta\hat{A}^2\rangle$.

_Proof._ Define $|\alpha\rangle = (\Delta\hat{A} + i\lambda\Delta\hat{B})|\psi\rangle$ for a real
Parameter $\lambda$. Since $\langle\alpha|\alpha\rangle \geq 0$:

$$
\langle\psi|(\Delta\hat{A} - i\lambda\Delta\hat{B})(\Delta\hat{A} + i\lambda\Delta\hat{B})|\psi\rangle \geq 0
$$

$$
= \sigma_A^2 + i\lambda\langle[\Delta\hat{A}, \Delta\hat{B}]\rangle + \lambda^2\sigma_B^2 \geq 0
$$

This is a quadratic in $\lambda$ that is non-negative for all $\lambda$ So its discriminant must be
non-positive:

$$
(\langle[\Delta\hat{A}, \Delta\hat{B}]\rangle)^2 - 4\sigma_A^2\sigma_B^2 \leq 0
$$

Since $[\Delta\hat{A}, \Delta\hat{B}] = [\hat{A}, \hat{B}]$ (constants commute with everything):

$$
\sigma_A^2\,\sigma_B^2 \geq \frac{1}{4}|\langle[\hat{A}, \hat{B}]\rangle|^2 \qquad \blacksquare
$$

The stronger Robertson-Schrodinger form retains the anticommutator term
$\langle\{\Delta\hat{A}, \Delta\hat{B}\}\rangle^2$ Which is always non-negative and provides a
tighter bound.

**Example 4.1.** Show that the uncertainty principle is saturated for the harmonic oscillator ground
state.

<details>
<summary>Solution</summary>

For the ground state $\psi_0(x) = (m\omega/\pi\hbar)^{1/4}\exp(-m\omega x^2/(2\hbar))$:

$$
\langle x \rangle = 0, \quad \langle x^2 \rangle = \frac{\hbar}{2m\omega} \implies \sigma_x = \sqrt{\frac{\hbar}{2m\omega}}
$$

$$
\langle p \rangle = 0, \quad \langle p^2 \rangle = \frac{m\omega\hbar}{2} \implies \sigma_p = \sqrt{\frac{m\omega\hbar}{2}}
$$

$$
\sigma_x\,\sigma_p = \frac{\hbar}{2}
$$

This saturates the Heisenberg bound, so the ground state is a **minimum uncertainty state**
(Gaussian).

</details>

### 4.5 Expectation Values

The **expectation value** of an observable $\hat{A}$ in state $|\psi\rangle$:

$$
\langle A \rangle = \langle \psi | \hat{A} | \psi \rangle = \int \psi^* \hat{A} \psi\, dx
$$

**Theorem 4.6 (Ehrenfest's Theorem).** Quantum expectation values obey classical equations of
motion:

$$
\frac{d\langle \hat{x} \rangle}{dt} = \frac{\langle \hat{p} \rangle}{m}, \quad \frac{d\langle \hat{p} \rangle}{dt} = -\left\langle \frac{\partial V}{\partial x}\right\rangle
$$

_Proof of Ehrenfest's Theorem._ From the Schrodinger equation:

$$
\frac{d\langle \hat{A} \rangle}{dt} = \frac{i}{\hbar}\langle[\hat{H}, \hat{A}]\rangle + \left\langle\frac{\partial \hat{A}}{\partial t}\right\rangle
$$

For $\hat{A} = \hat{x}$ (no explicit time dependence), using
$[\hat{p}^2, \hat{x}] = -2i\hbar\hat{p}$:

$$
\frac{d\langle \hat{x} \rangle}{dt} = \frac{i}{\hbar}\!\left\langle\left[\frac{\hat{p}^2}{2m}, \hat{x}\right]\right\rangle = \frac{i}{\hbar}\cdot\frac{-2i\hbar}{2m}\langle\hat{p}\rangle = \frac{\langle\hat{p}\rangle}{m}
$$

For $\hat{A} = \hat{p}$ Using $[V(\hat{x}), \hat{p}] = i\hbar\,V'(\hat{x})$:

$$
\frac{d\langle \hat{p} \rangle}{dt} = \frac{i}{\hbar}\langle[V(\hat{x}), \hat{p}]\rangle = -\left\langle\frac{\partial V}{\partial x}\right\rangle
$$

$\blacksquare$

**Correspondence principle.** Ehrenfest's theorem embodies the **correspondence principle**: in the
Classical limit (large quantum numbers or $\hbar \to 0$), quantum expectation values follow
Classical trajectories. However, this is only exact for linear or quadratic potentials; for general
Potentials, $\langle V'(x) \rangle \neq V'(\langle x \rangle)$ So quantum corrections persist even
for large systems.

### 4.6 Solving Eigenvalue Equations

To find the eigenvalues and eigenvectors of an operator $\hat{A}$ Solve:

$$
\hat{A}|\phi\rangle = a|\phi\rangle \implies \det(\hat{A} - a\hat{I}) = 0
$$

The roots give the eigenvalues; substituting each back yields the eigenvectors.

**Example 4.3.** Find the eigenvalues and eigenvectors of
$\hat{S}_x = \frac{\hbar}{2}\begin{pmatrix}0&1\\1&0\end{pmatrix}$.

<details>
<summary>Solution</summary>

$$
\det\!\left(\frac{\hbar}{2}\begin{pmatrix}-a & 1\\1 & -a\end{pmatrix}\right) = 0 \implies a^2 - 1 = 0 \implies a = \pm 1
$$

Eigenvalues are $\pm\hbar/2$.

For $a = +1$:
$\begin{pmatrix}-1 & 1\\1 & -1\end{pmatrix}\begin{pmatrix}c_1\\c_2\end{pmatrix} = 0 \implies c_1 = c_2$.
Normalised: $|+\rangle_x = \frac{1}{\sqrt{2}}\begin{pmatrix}1\\1\end{pmatrix}$.

For $a = -1$: $c_1 = -c_2$. Normalised:
$|-\rangle_x = \frac{1}{\sqrt{2}}\begin{pmatrix}1\\-1\end{pmatrix}$.

These are equal superpositions of the $S_z$ eigenstates. Note that measuring $S_x$ on a state of
Definite $S_z$ gives probabilistic outcomes, and vice versa.

</details>

## Intuition

Quantum operators are the bridge between abstract mathematical states and physical measurements. Each observable, such as position or momentum, is represented by an operator whose eigenvalues are the possible outcomes you could measure. Operators for incompatible observables do not commute, which means measuring one precisely forces the other to become uncertain. This is not a limitation of instruments but a fundamental feature of quantum reality. Ehrenfest's theorem shows that quantum expectation values follow classical equations of motion on average, providing a smooth bridge from quantum to classical behaviour. Spin-half systems illustrate these ideas most vividly.

## Common Mistakes

**Mistake 1: Assuming $\langle V'(x) \rangle = V'(\langle x \rangle)$ in Ehrenfest's theorem**
Ehrenfest's theorem gives $d\langle p \rangle/dt = -\langle \partial V/\partial x \rangle$, not $-V'(\langle x \rangle)$. The expectation value of the derivative of $V$ is generally not the derivative of $V$ at the expectation value. This equality holds only for linear or quadratic potentials. Students frequently make this substitution when applying Ehrenfest's theorem to anharmonic oscillators.

**Mistake 2: Confusing Hermitian operators with self-adjoint operators**
Every self-adjoint operator is Hermitian, but the converse is not true for operators on infinite-dimensional spaces. The momentum operator $\hat{p} = -i\hbar\,d/dx$ is Hermitian on a dense domain but may fail to be self-adjoint depending on boundary conditions. Self-adjointness requires the domain of $\hat{A}$ and $\hat{A}^\dagger$ to coincide, which is essential for the spectral theorem.

**Mistake 3: Assuming the uncertainty principle limits measurement precision**
The Heisenberg uncertainty principle $\sigma_x \sigma_p \geq \hbar/2$ is a property of quantum states, not a limitation of measurement apparatus. It reflects the inherent spread of a state in position and momentum space simultaneously. A minimum-uncertainty Gaussian state saturates the bound, showing it is a fundamental feature of quantum mechanics, not an instrumental error.

Quantum operators are the machinery that extracts measurable information from a quantum state. Each observable, like position or momentum, has an associated operator whose eigenvalues are the possible measurement outcomes. The expectation value of an operator gives the average result over many identical measurements. Commuting operators share eigenstates, meaning both observables can be known simultaneously. Non-commuting operators, like position and momentum, obey an uncertainty relation: measuring one precisely forces the other to become uncertain. This is not a limitation of instruments but a fundamental feature of quantum reality. Spin-half systems illustrate this vividly: measuring spin along one axis gives random results for the orthogonal axis.

## Counterexamples worth knowing by name

<div class="table-wrap">

| Claim | True? | Counterexample |
| ----- | ----- | -------------- |
| Hermitian is the same as self-adjoint | no | $\hat{p} = -i\hbar\,\mathrm{d}/\mathrm{d}x$ on the half-line is Hermitian on its natural domain and admits no self-adjoint extension without a boundary condition added |
| Every observable has a complete set of eigenstates | no | not for a general Hermitian operator; it is true for self-adjoint ones, and position and momentum have a *continuous* spectrum rather than a countable one |
| Commuting observables can be measured simultaneously with arbitrary precision | no | commuting self-adjoint operators may have no common eigenbasis; what follows from $[\hat{A},\hat{B}] = 0$ is a *common invariant subspace* |
| Eigenvalues of an observable are distinct | no | degeneracy is ubiquitous and physical -- spin multiplets and atomic levels -- and is not a defect |
| The expectation value is the value you will measure | no | it is the mean over many identically prepared systems; a single measurement returns an eigenvalue |
| The uncertainty principle limits how well instruments can measure | no | it bounds the spread of a *state*, and is attained by minimum-uncertainty Gaussians, so it is not an instrumental error |
| Every observable has a discrete spectrum | no | $\hat{x}$ and $\hat{p}$ have continuous spectra; the generalised eigenfunctions are distributions, not vectors |
| An operator is defined by its formula | no | it is defined by its formula *and* its domain; the same formula on different domains is a different operator |

</div>

The first row is the one that matters most, and it is also the one that feels
like pedantry until you meet an example. The last row is its general form and
is worth internalising: on an infinite-dimensional space, writing the operator
down is only half the specification.

The third row deserves emphasis. The common statement is "commuting
observables are simultaneously measurable", and it is a theorem about a
*common eigenspace* -- which need not be the whole space. Two operators can
commute and still leave you unable to assign both eigenvalues at once.

## Where the research frontier is

- **Domains in quantum mechanics.** Whether the Hamiltonian admits a
  self-adjoint extension is a genuine mathematical question with physical
  answers: boundary conditions at a singular endpoint can make the extension
  unique, absent, or a family parameterised by an angle, and that angle is
  the quantum number.
- **Observables without spectra.** Quantum field theory has no
  eigenvalues to read. The observable algebra is local and relativistic, and
  the theory of von Neumann algebras replaces "operator with spectrum" with
  "local algebra with representations".
- **Haag's theorem.** Local relativistic observables cannot be unitarily
  equivalent to the free field ones. It is a rigorous statement that the
  mathematical frame of canonical quantisation breaks down in QFT, and
  reconciling it remains open.
- **Generalised measurement theory.** POVMs generalise projective
  measurements; whether they describe real apparatus or are a mathematical
  convenience is still argued.
- **Black-hole information and observables.** Which operators count as
  observables inside a black hole, and what algebra they satisfy, is unsettled
  and empirically constrained.

## Interleaving problems

Mix these with the [postulates](/5-quantum-mechanics/2_postulates-of-quantum-mechanics/),
[wave
functions](/5-quantum-mechanics/3_wave-functions-and-the-schrodinger-equation/),
[spin](/5-quantum-mechanics/7_spin/), [Linear
Algebra](https://mathematics.wyattau.com/2-linear-algebra/1_vectors-and-vector-spaces/),
[Functional
Analysis](https://mathematics.wyattau.com/11-functional-analysis/2_inner-product-spaces-and-hilbert-spaces/)
and [Spectral
Theory](https://mathematics.wyattau.com/12-graduate-analysis/1_spectral-theory-of-self-adjoint-operators/).

1. (Linear algebra.) Prove that a Hermitian operator on a finite-dimensional
   space has an orthonormal eigenbasis. Identify every step of the proof that
   fails in infinite dimensions, and say which hypothesis each one used.
2. (Functional analysis.) State the spectral theorem for self-adjoint
   operators, and explain why the theorem is false for merely Hermitian ones.
   Then take the first derivative on $L^2(0,1)$ and determine its adjoint,
   checking domains rather than formal expressions.
3. (Wave functions.) Compute $[\hat{x}, \hat{p}]$ acting on a smooth compactly
   supported function by differentiating, with no appeal to a formula. Then say
   why the answer is $i\hbar$ rather than the classical commutator $0$, and
   what that statement means physically.
4. (Spectral theory.) Show that the spectral measure of $\hat{p}$ is Lebesgue
   measure, using the Fourier transform: the projectors of $\hat{p}$ are the
   Fourier projections onto sets. What does it mean that position and momentum
   have continuous spectral measures rather than countable ones?
5. (Linear algebra.) Two Hermitian operators commute. Show that every
   eigenvector of one is an eigenvector of the other *if* the eigenvalues of
   the first are non-degenerate, and construct a two-dimensional example with
   degenerate eigenvalues where the conclusion fails.
6. (Research.) State Haag's theorem in the form that local, covariant,
   time-ordered algebras cannot be unitarily equivalent to the free-field
   algebra. Explain what it implies about canonical quantisation, and why it
   is not regarded as showing QFT is inconsistent.

## Cross-References

- **[Postulates of Quantum Mechanics](/5-quantum-mechanics/2_postulates-of-quantum-mechanics/)**: The postulates establish that observables are represented by Hermitian operators.
- **[Wave Functions and the Schrodinger Equation](/5-quantum-mechanics/3_wave-functions-and-the-schrodinger-equation/)**: Wave functions are the state vectors that operators act upon to extract physical information.
- **[Spin](/5-quantum-mechanics/7_spin/)**: Spin operators illustrate the algebraic properties of angular momentum in quantum mechanics.

- [Linear Algebra](https://mathematics.wyattau.com/2-linear-algebra/1_vectors-and-vector-spaces/)
- [Hilbert Spaces](https://mathematics.wyattau.com/11-functional-analysis/2_inner-product-spaces-and-hilbert-spaces/)
- [Bounded Linear Operators](https://mathematics.wyattau.com/11-functional-analysis/3_bounded-linear-operators/)
