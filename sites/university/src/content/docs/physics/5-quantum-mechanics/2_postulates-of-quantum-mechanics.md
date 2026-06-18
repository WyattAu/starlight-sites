---
title: Postulates of Quantum Mechanics
tags:
  - Physics
  - University
description: ""s equations in classical mechanics.
The Schrodinger equation is linear, guaranteeing superposition is preserved. Energy conservation is
Built in: for a time-independent Hamiltonian, $\langle H \rangle$ is constant.

**Postulate 5 (Composite Systems).** The state space of a composite system is the tensor product of
The state spaces of the components.

_Physical motivation._ This postulate produces entangled states, which have been confirmed
Experimentally (Bell inequality violations, quantum teleportation). The tensor product structure
Ensures that measurements on subsystems can exhibit correlations stronger than any classical theory
Permits.

### 2.2 The Measurement Problem

The measurement postulate (Postulate 3) introduces a fundamental tension: the Schrodinger equation
Describes **deterministic, unitary** evolution, but measurement produces **probabilistic,
non-unitary** Collapse. This is the **measurement problem**.

**The conflict.** Consider a system in a superposition
$|\psi\rangle = \alpha|a_1\rangle + \beta|a_2\rangle$. Under unitary evolution, the state remains a
superposition. But a measurement of $\hat{A}$ yields Either $a_1$ or $a_2$ with probabilities
$|\alpha|^2$ and $|\beta|^2$And the state collapses to The corresponding eigenstate. No unitary
operator can map a superposition to a single eigenstate With the correct probabilities.

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

**Definition.** For a pure state $|\psi\rangle$The density operator is
$\hat{\rho} = |\psi\rangle\langle\psi|$. For a statistical mixture of states $|\psi_i\rangle$ with
probabilities $p_i$:

$$\hat{\rho} = \sum_i p_i\,|\psi_i\rangle\langle\psi_i|$$

**Properties:**

- $\mathrm{Tr}(\hat{\rho}) = 1$ (normalisation)
- $\hat{\rho}^\dagger = \hat{\rho}$ (Hermitian)
- $\hat{\rho}^2 = \hat{\rho}$ if and only if the state is pure; $\hat{\rho}^2 \lt \hat{\rho}$ for
  mixed states
- Expectation values: $\langle A \rangle = \mathrm{Tr}(\hat{\rho}\hat{A})$

**Time evolution:** $i\hbar\,d\hat{\rho}/dt = [\hat{H}, \hat{\rho}]$ (Liouville-von Neumann
equation).

The density matrix is essential for describing subsystems of entangled states (reduced density
Matrices via partial trace), open quantum systems, and decoherence.

### 2.4 Implications

- **Superposition:** A system can be in a linear combination of eigenstates:
  $|\psi\rangle = \sum_n c_n |a_n\rangle$.
- **Uncertainty Principle:** Non-commuting observables cannot be simultaneously measured with
  arbitrary precision.
- **Probabilistic Nature:** Quantum mechanics predicts probabilities, not deterministic outcomes.
- **No-cloning theorem.** There is no unitary operation that copies an arbitrary unknown quantum
  state $|\psi\rangle$. This follows from the linearity of quantum mechanics and has profound
  implications for quantum information.

