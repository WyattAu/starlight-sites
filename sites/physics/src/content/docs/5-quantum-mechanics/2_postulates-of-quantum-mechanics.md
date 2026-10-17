---

date: 2026-07-23T21:57:32+01:00
title: Postulates of Quantum Mechanics
tags:
  - Physics
  - University
description: "The five postulates of quantum mechanics: state space, observables as self-adjoint operators, the Born rule and collapse, unitary time evolution, and composite systems as tensor products. Then the measurement problem, the density matrix formalism, and the four interpretations that disagree about what collapse means. With recall prompts, counterexamples by name and interleaving problems. Tier U-A."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "physics", "url": "https://physics.wyattau.com"}, {"name": "5 Quantum Mechanics", "url": "https://physics.wyattau.com/5-quantum-mechanics"}, {"name": "2_postulates Of Quantum Mechanics", "url": "https://physics.wyattau.com/5-quantum-mechanics/2_postulates-of-quantum-mechanics"}]
}
</script>

## Recall prompts

Attempt these from memory *before* reading.

- State the five postulates.
- Why must the state vector be *complex*-valued? What observable effect would
  be lost with real amplitudes alone?
- Write the Born rule. What is the probability that the state is left in
  $|a_n\rangle$ after measuring $\hat{A}$?
- State the trace rule for expectation values.
- What exactly is the tension the measurement problem names?

Check your answers against the text. Prompt 2 is the one that catches people:
the complex phase is not decoration, it is the only thing interference needs.

## Motivation: five rules and no explanation

Classical mechanics is a theory: it tells you what happens and why. Quantum
mechanics is a set of rules. The postulates say what a state is, how
observables act, what a measurement returns, how states evolve, and how
composite systems combine -- and then stop.

That looks like a failure of taste, and for most of the twentieth century it
was treated as one: the postulates were presented as a recipe to be applied
without asking why any of it is true. But the rules are not arbitrary, and
three of them are forced by experiment rather than chosen:

- **Linearity** is not postulated; it is what an experiment with a slit and a
  probability amplitude implies. Add a second slit and the amplitudes add.
- **Hermiticity** is not postulated either. An observable must return a real
  number, and the only operators guaranteed to have a real spectrum are the
  self-adjoint ones.
- **The Born rule** is the one postulate with no derivation from the others.
  It is the "measure what you compute" rule, and it is what makes the whole
  scheme predictive.

What the postulates do *not* do is explain collapse. That is not a missing
detail; it is the one genuine conceptual crisis in the subject, and section 2.2
is devoted to it.

### 2.1 The Postulates

**Postulate 1 (State Space).** The state of a quantum system is completely described by a normalised
Vector $|\psi\rangle$ in a complex Hilbert space $\mathcal{H}$.

_Physical motivation._ Superposition is observed in interference experiments (e.g., double-slit),
where a particle can traverse multiple paths simultaneously. The complex-valued nature of the state
is essential: relative phases between superposition components produce observable interference
patterns that cannot be replicated with real amplitudes alone.

**Postulate 2 (Observables).** Every measurable quantity (observable) is represented by a Hermitian
(self-adjoint) operator $\hat{A} = \hat{A}^\dagger$ acting on $\mathcal{H}$.

_Physical motivation._ Hermitian operators have real eigenvalues, matching the fact that measurement
outcomes are real numbers. The spectral theorem guarantees a complete set of eigenstates, providing
a basis for expansion.

**Postulate 3 (Measurement).** A measurement of observable $\hat{A}$ yields one of the eigenvalues
$a_n$ of $\hat{A}$. The probability of measuring $a_n$ when the system is in state $|\psi\rangle$ is

$$
P(a_n) = |\langle a_n | \psi \rangle|^2
$$

Where $|a_n\rangle$ is the eigenstate corresponding to $a_n$. After measurement, the state collapses
to $|a_n\rangle$.

_Physical motivation._ The Born rule $P = |\langle a_n|\psi\rangle|^2$ was postulated by Born (1926)
to connect wave functions to observable probabilities. It correctly predicts the intensity
distribution in diffraction experiments and the [statistics](/2-thermal-physics/15_quantum-statistics-in-detail/)
of particle detections.

**Postulate 4 (Time Evolution).** The time evolution of the state is governed by the
**time-dependent Schrodinger equation**:

$$
i\hbar \frac{\partial}{\partial t}|\psi(t)\rangle = \hat{H}|\psi(t)\rangle
$$

Where $\hat{H}$ is the Hamiltonian (energy operator).

_Physical motivation._ This is the quantum analogue of Hamilton's equations in classical mechanics.
The Schrodinger equation is linear, guaranteeing superposition is preserved. Energy conservation is
built in: for a time-independent Hamiltonian, $\langle H \rangle$ is constant.

**Postulate 5 (Composite Systems).** The state space of a composite system is the tensor product of
the state spaces of the components.

_Physical motivation._ This postulate produces entangled states, which have been confirmed
experimentally (Bell inequality violations, quantum teleportation). The tensor product structure
ensures that measurements on subsystems can exhibit correlations stronger than any classical theory
permits.

### 2.2 The Measurement Problem

The measurement postulate (Postulate 3) introduces a fundamental tension: the Schrodinger equation
describes **deterministic, unitary** evolution, but measurement produces **probabilistic,
non-unitary** Collapse. This is the **measurement problem**.

**The conflict.** Consider a system in a superposition
$|\psi\rangle = \alpha|a_1\rangle + \beta|a_2\rangle$. Under unitary evolution, the state remains a
superposition. But a measurement of $\hat{A}$ yields either $a_1$ or $a_2$ with probabilities
$|\alpha|^2$ and $|\beta|^2$, and the state collapses to the corresponding eigenstate. No unitary
operator can map a superposition to a single eigenstate with the correct probabilities.

**Major interpretational approaches:**

- **Copenhagen interpretation.** Collapse is a fundamental, irreducible process. The classical
  measuring apparatus triggers the collapse. No further mechanism is specified.

- **Many-worlds interpretation (Everett, 1957).** The universal wave function never collapses.
  Instead, measurement causes the observer and system to entangle, branching into multiple
  non-interacting "worlds," each corresponding to one measurement outcome.

- **Decoherence (Zurek).** Interaction with the environment rapidly suppresses off-diagonal elements
  of the reduced density matrix in a preferred basis ("einselection"), explaining the emergence of
  classical behaviour from unitary quantum mechanics.

- **Bohmian mechanics.** Particles have definite positions guided by the wave function via the
  "pilot wave." The wave function never collapses, but the effective description reproduces the Born
  rule.

The measurement problem remains an active area of research in the foundations of quantum mechanics.

### 2.3 Density Matrix Formalism

For systems where the state is not known precisely (statistical mixtures), the **density operator**
Provides a more general description than the state vector.

**Definition.** For a pure state $|\psi\rangle$, the density operator is
$\hat{\rho} = |\psi\rangle\langle\psi|$. For a statistical mixture of states $|\psi_i\rangle$ with
probabilities $p_i$:

$$
\hat{\rho} = \sum_i p_i\,|\psi_i\rangle\langle\psi_i|
$$

**Properties:**

- $\mathrm{Tr}(\hat{\rho}) = 1$ (normalisation)
- $\hat{\rho}^\dagger = \hat{\rho}$ (Hermitian)
- $\hat{\rho}^2 = \hat{\rho}$ if and only if the state is pure; $\hat{\rho}^2 \lt \hat{\rho}$ for
  mixed states
- Expectation values: $\langle A \rangle = \mathrm{Tr}(\hat{\rho}\hat{A})$

**Time evolution:** $i\hbar\,d\hat{\rho}/dt = [\hat{H}, \hat{\rho}]$ (Liouville-von Neumann
equation).

The density matrix is essential for describing subsystems of entangled states (reduced density
matrices via partial trace), open quantum systems, and decoherence.

### 2.4 Implications

- **Superposition:** A system can be in a linear combination of eigenstates:
  $|\psi\rangle = \sum_n c_n |a_n\rangle$.
- **Uncertainty Principle:** non-commuting observables cannot be simultaneously measured with
  arbitrary precision.
- **Probabilistic Nature:** Quantum mechanics predicts probabilities, not deterministic outcomes.
- **No-cloning theorem.** There is no unitary operation that copies an arbitrary unknown quantum
  state $|\psi\rangle$. This follows from the linearity of quantum mechanics and has profound
  implications for quantum information.

## Cross-References

- **[Electronic Band Structure](/6-solid-state-physics/5_electronic-band-structure/)**: Applies the quantum postulates to electrons in periodic potentials, yielding Bloch states and energy bands.

- [Vectors and Vector Spaces](https://mathematics.wyattau.com/2-linear-algebra/1_vectors-and-vector-spaces/)
- [Hilbert Spaces](https://mathematics.wyattau.com/11-functional-analysis/2_inner-product-spaces-and-hilbert-spaces/)
- [Angular Momentum and the Hydrogen Atom](/5-quantum-mechanics/6_angular-momentum-and-the-hydrogen-atom/)
- [Thermodynamics and Statistical Mechanics](/2-thermal-physics/21_thermodynamics-and-statistical-mechanics/)


## Intuition

The postulates of quantum mechanics are like the rules of a game that nature plays at the smallest scales. The state vector is your scoreboard: it contains everything knowable about the system. Hermitian operators are the measuring instruments, and their real eigenvalues are the only possible outcomes you can read. The Born rule tells you that the square of the amplitude gives the probability, like measuring how much of a wave is present at each point. Time evolution is smooth and deterministic, like a river flowing according to a fixed current. The measurement problem is the deep mystery: the smooth flow of the Schrodinger equation suddenly jerks when you look, collapsing the wave function to a single outcome. This tension between smooth evolution and sudden collapse is still debated. Decoherence explains why we do not see quantum weirdness in everyday life: the environment constantly measures the system, washing out quantum superpositions.

### 2.5 Common Mistakes

**Mistake 1: Confusing probability amplitude with probability**
The probability of measuring eigenvalue $a_n$ is $|\langle a_n|\psi\rangle|^2$, not $\langle a_n|\psi\rangle$. The amplitude $\langle a_n|\psi\rangle$ is a complex number, and probabilities must be real and non-negative. Students often forget to take the modulus squared, leading to complex or negative "probabilities."

**Mistake 2: Assuming measurement always yields the expectation value**
The expectation value $\langle \hat{A} \rangle = \sum_n a_n P(a_n)$ is the average over many measurements, not the result of a single measurement. A single measurement of $\hat{A}$ yields one of the eigenvalues $a_n$, not the expectation value. The expectation value is what you would get on average if you repeated the experiment many times.

**Mistake 3: Forgetting that measurement collapses the state**
After measuring $\hat{A}$ and obtaining $a_n$, the state collapses to $|a_n\rangle$, not to some other state. This collapse is irreversible in the sense that information about the original superposition is lost. Subsequent measurements of $\hat{A}$ will yield $a_n$ with certainty until the system evolves or is disturbed.


## Counterexamples worth knowing by name

<div class="table-wrap">

| Claim | True? | Counterexample |
| ----- | ----- | -------------- |
| A measurement outcome is determined by the state | no | Bell's theorem: no local hidden variable theory reproduces the QM predictions, and experiments close the loopholes |
| The wave function is an observable | no | it is a vector, not an operator; the expectation value of the projector $\lvert\psi\rangle\langle\psi\rvert$ is 1 for every normalised state, so no measurement can confirm it |
| Repeated measurement sharpens knowledge | no | a projective measurement leaves the state in an eigenstate, so re-measuring $\hat{A}$ returns $a_n$ with certainty and tells you nothing new about $a_n$ |
| Entanglement lets you signal faster than light | no | no-cloning plus the fact that each local outcome is independent of the distant choice; the correlations only appear when the records are compared |
| Decoherence solves the measurement problem | no | it explains the appearance of classicality but produces an improper mixture, not a single outcome |
| Quantum mechanics is merely a classical statistical theory | no | Bell inequalities, and Kochen-Specker, rule out both hidden-variable and noncontextual classical reconstructions |
| The postulates are the only consistent formulation | no | they are one presentation; the algebraic, operational and categorical approaches are known to be equivalent, and the choices encode interpretation rather than prediction |

</div>

The first two rows are the ones that matter most. The projector row in
particular kills a very common confusion: $\lvert\psi\rangle$ is a state, not
something you can measure, and no experiment distinguishes one normalised
vector from a scalar multiple of it.

The last row is the right way to think about interpretation. Many-worlds,
Bohmian mechanics and collapse all agree on every experimental prediction and
disagree only about what is real. The postulates are the predictions; the
interpretation is extra structure layered on top.

## Where the research frontier is

- **Measurement-device-independent (MDI) rules.** Instead of assuming the
  measurement operators, derive them from observed statistics. Several
  currently used DI protocols have since been attacked, and the surviving
  challenge is closing every device-independent loophole.
- **Landauer's principle at the nanoscale.** The bound is uncontroversial in
  the reversible limit; whether it survives when the memory is unreliable or
  the erasure is many-body is still argued.
- **Quantum error correction and thresholds.** The threshold theorem says
  below a critical error rate, arbitrarily long computation is possible. The
  frontier is pushing the threshold up to make the requirement physically
  attainable, and understanding decoherence in the codes that do the work.
- **Contextuality as a resource.** Kochen-Specker contextuality was a
  obstruction to classical models and has become the resource that powers
  certain advantage-based computation and measurement tasks.
- **The foundations of collapse models.** Objective collapse is testable in
  principle; the open question is whether any parameter range survives
  experimental bounds.

## Interleaving problems

Mix these with [Linear
Algebra](https://mathematics.wyattau.com/2-linear-algebra/1_vectors-and-vector-spaces/),
[Angular Momentum and the Hydrogen
Atom](/5-quantum-mechanics/6_angular-momentum-and-the-hydrogen-atom/), [Symplectic
Structure and KAM Theory](/1-classical-mechanics/16_symplectic-structure-and-kam-theory/)
and [Hamiltonian
Mechanics](/1-classical-mechanics/4_hamiltonian-mechanics/).

1. (Linear algebra.) Prove that a self-adjoint operator on a finite-dimensional
   Hilbert space has an orthonormal eigenbasis, and identify exactly which step
   fails for an unbounded self-adjoint operator. That failure is why the
   spectral theorem is a separate theorem.
2. (Hamiltonian mechanics.) The Schrodinger equation is
   $i\hbar\,d|\psi\rangle/dt = \hat{H}|\psi\rangle$ with $\hat{H}$ the
   quantisation of the classical Hamiltonian. Show that quantising $p^2/2m$
   gives $-\hbar^2\partial_x^2/2m$, and explain why the replacement
   $p \mapsto -i\hbar\partial_x$ is forced by the commutator structure of
   translations rather than chosen.
3. (Symplectic structure.) Write the state vector as a point of projective
   Hilbert space and identify the natural symplectic form there. Then say what
   the Hamiltonian flow on that space has in common with classical Hamiltonian
   mechanics, and where the analogy stops.
4. (Angular momentum.) Show that $\lvert L^2\rvert = \hbar^2 l(l+1)$ and not
   $\hbar^2 l^2$, using only the postulates and the commutation relations.
   The extra factor is a pure consequence of quantisation.
5. (Density matrices.) Show that $\hat{\rho} = \lvert\psi\rangle\langle\psi\rvert$
   satisfies $\mathrm{Tr}(\hat{\rho}^2) = 1$ for any normalised state, and
   that for a mixture $\mathrm{Tr}(\hat{\rho}^2) = \sum_i p_i^2 \le 1$.
   Purity is therefore $\mathrm{Tr}(\hat{\rho}^2) = 1$, with equality only
   when the mixture is trivial.
6. (Research.) Kochen-Specker contextuality rules out noncontextual hidden
   variable models. State the result precisely enough to see why it requires
   dimension at least three -- the two-dimensional case has an explicit
   noncontextual model, and the difference is instructive.
