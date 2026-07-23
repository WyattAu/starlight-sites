---


title: Quantum Mechanics
tags:
  - Physics
  - University
description: 'UNIVERSITY Physics notes: Quantum Mechanics. Comprehensive study material with definitions, examples, and assessment tools.'
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "physics", "url": "https://physics.wyattau.com"}, {"name": "5 Quantum Mechanics", "url": "https://physics.wyattau.com/5-quantum-mechanics"}, {"name": "Index", "url": "https://physics.wyattau.com/5-quantum-mechanics/index"}]
}
</script>

<!-- Course Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Quantum Mechanics",
  "description": "'UNIVERSITY Physics notes: Quantum Mechanics. Comprehensive study material with definitions, examples, and assessment tools.'",
  "provider": {
    "@type": "Organization",
    "name": "Wyatt's Notes",
    "url": "https://physics.wyattau.com"
  },
  "url": "https://physics.wyattau.com",
  "educationalLevel": "Secondary",
  "inLanguage": "en",
  "isAccessibleForFree": true,
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "online",
    "courseWorkload": "PT1H"
  }
}
</script>

## Quantum Mechanics

## Contents

1. [Historical Motivation](1_historical-motivation.md)
2. [Postulates of Quantum Mechanics](2_postulates-of-quantum-mechanics.md)
3. [Wave Functions and the Schrodinger Equation](3_wave-functions-and-the-schrodinger-equation.md)
4. [Operators and Observables](4_operators-and-observables.md)
5. [One-Dimensional Problems](5_one-dimensional-problems.md)
6. [Angular Momentum and the Hydrogen Atom](6_angular-momentum-and-the-hydrogen-atom.md)
7. [Spin](7_spin.md)
8. [Approximation Methods](8_approximation-methods.md)
9. [Problem Set](9_problem-set.md)
10. [Identical Particles and Exchange Symmetry](10_identical-particles-and-exchange-symmetry.md)
11. [Variational Methods](11_variational-methods.md)
12. [Time-Dependent Perturbation Theory](12_time-dependent-perturbation-theory.md)
13. [Scattering Theory](13_scattering-theory.md)
14. [WKB Approximation](14_wkb-approximation.md)
15. [Density Functional Theory: Conceptual Overview](15_density-functional-theory-conceptual-overview.md)

## Overview

University-level quantum mechanics notes covering postulates, operators, and approximation methods.

## Topics Covered

- **Postulates**: State vectors, observables, measurement, time evolution. The postulates of quantum mechanics provide the mathematical framework: states are vectors in Hilbert space, observables are Hermitian operators, and measurement gives eigenvalues.
- **Wave Functions**: Schrödinger equation, probability interpretation, normalisation. The wavefunction encodes all information about a quantum system; |ψ|² gives probability density.
- **Operators**: Commutation relations, uncertainty principle, eigenvalues. Non-commuting operators (like position and momentum) cannot be simultaneously measured — this is the uncertainty principle.
- **Approximation Methods**: Perturbation theory, variational method, WKB. Exact solutions are rare; approximation methods make quantum mechanics practical for real systems.

## Prerequisites

- Classical mechanics (Lagrangian, Hamiltonian)
- Linear algebra (vector spaces, operators, eigenvalues)
- Differential equations (ordinary and partial)
- Complex numbers and Fourier transforms

## How to Use These Notes

Start with the historical motivation to understand the context, then progress to postulates and operators. Each section includes worked examples and practice problems.

## Navigation

Use the sidebar to browse topics, or start with the introductory pages linked from the sidebar.

## Additional Resources

Each section includes:
- Detailed explanations of key concepts
- Worked examples with step-by-step solutions
- Practice problems with answers
- Common pitfalls and how to avoid them
- Connections to other areas of physics

## Study Tips

1. **Master the postulates**: Understand the physical meaning of each postulate. The postulates define the mathematical framework — states, observables, measurement, and time evolution.
2. **Practise problems**: Work through many problems to build intuition. Quantum mechanics is counterintuitive; practice is essential for developing physical intuition.
3. **Draw diagrams**: Visualise wave functions and probability distributions. Probability densities show where particles are likely to be found.
4. **Learn symmetries**: Understand conservation laws and selection rules. Symmetries determine which transitions are allowed and which are forbidden.
5. **Connect to applications**: Relate quantum mechanics to atomic, molecular, and particle physics. Quantum mechanics explains the periodic table, chemical bonding, and particle interactions.

## Cross-References

- **[Classical Mechanics](../../1-classical-mechanics/index.md):** Classical limit of quantum mechanics; the correspondence principle connects quantum to classical.
- **[Electromagnetism](../../3-electromagnetism/index.md):** Quantum electrodynamics; the quantum theory of electromagnetic interactions.
- **[Particle Physics](../../7-particle-physics-and-cosmology/index.md):** Quantum field theory and particle physics; quantum mechanics is the foundation.
- **[Thermal Physics](../../2-thermal-physics/index.md):** Statistical mechanics uses quantum theory to explain thermodynamic properties.

- [Calculus](https://mathematics.wyattau.com/docs/calculus)
- [Linear Algebra](https://mathematics.wyattau.com/docs/linear-algebra)
- [Vector Calculus](https://mathematics.wyattau.com/docs/vector-calculus)
- [Quantum Computing](https://computer-science.wyattau.com/docs/quantum-computing)

## Common Mistakes

- **Confusing the uncertainty principle with measurement disturbance:** The uncertainty principle is a fundamental property of quantum states, not a limitation of measuring instruments. Even with perfect instruments, $\Delta x \Delta p \geq \hbar/2$ holds for any quantum state.
- **Assuming superposition means the particle is in multiple places:** Superposition means the particle's state is a linear combination of basis states. It does not mean the particle physically exists in multiple locations simultaneously — measurement yields one outcome with a definite probability.
- **Treating the wavefunction as physically observable:** The wavefunction $\psi$ itself is not observable; only $|\psi|^2$ (probability density) is. The overall phase of $\psi$ has no physical consequences.
- **Forgetting that measurement is irreversible and collapses the state:** After measurement, the system is in the eigenstate corresponding to the measured eigenvalue. You cannot "undo" a measurement to recover the original superposition.

## Intuition

Quantum mechanics is the theory of what happens when you look very closely at very small things — and the answer is that things behave very differently from what our everyday experience suggests. The core idea is that physical quantities like position, momentum, and energy don't have definite values until they're measured. Instead, a quantum system exists in a superposition — a combination of all possible states simultaneously. The wavefunction describes this superposition, and its square gives the probability of finding a particular measurement outcome. This isn't a statement about our ignorance; it's a fundamental feature of reality. The universe genuinely doesn't "decide" what a particle is doing until we measure it.

The mathematical framework is surprisingly clean once you accept its premises. States are vectors in an abstract Hilbert space. Observables are Hermitian operators on that space. Measurement gives eigenvalues with probabilities determined by the state. Time evolution follows the Schrödinger equation, which is deterministic — the wavefunction evolves smoothly and predictably. The weirdness enters only when you measure, and even that has precise rules. The uncertainty principle isn't about measurement limitations; it's a mathematical consequence of the fact that position and momentum operators don't commute. You can know both precisely in principle — but not simultaneously, because the wavefunctions that are sharply peaked in position are necessarily spread out in momentum.

The power of quantum mechanics is that it unifies an enormous range of phenomena under one framework. The periodic table, chemical bonding, semiconductor behaviour, laser operation, nuclear structure, particle interactions — all are consequences of the same postulates. When you understand why the hydrogen atom has discrete energy levels, you understand the same physics that makes neon signs glow and fibre-optic cables carry data. The approximation methods — perturbation theory, variational methods, WKB — are what make quantum mechanics practical for real systems where exact solutions don't exist. Learning quantum mechanics isn't just learning a subject; it's learning the language in which nature writes at its most fundamental level.

