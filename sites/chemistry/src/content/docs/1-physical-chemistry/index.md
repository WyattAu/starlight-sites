---


date: 2026-07-23T21:57:32+01:00
title: "Physical Chemistry - Wyatt's Notes"
description: 'Topics in physical chemistry including thermodynamics, kinetics, quantum chemistry, and spectroscopy with worked examples.'
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "chemistry", "url": "https://chemistry.wyattau.com"}, {"name": "1 Physical Chemistry", "url": "https://chemistry.wyattau.com/1-physical-chemistry"}, {"name": "Index", "url": "https://chemistry.wyattau.com/1-physical-chemistry/index"}]
}
</script>

<!-- Course Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Physical Chemistry",
  "description": "'Topics in physical chemistry including thermodynamics, kinetics, quantum chemistry, and spectroscopy with worked examples.'",
  "provider": {
    "@type": "Organization",
    "name": "Wyatt's Notes",
    "url": "https://chemistry.wyattau.com"
  },
  "url": "https://chemistry.wyattau.com",
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

## Physical Chemistry

Physical chemistry examines the physical principles underlying chemical systems. It draws on mathematics and physics to explain why reactions occur, how fast they proceed, and what determines the stability of molecular structures. Core topics include thermodynamics, chemical kinetics, quantum mechanics, and spectroscopy.

## Key Concepts

Thermodynamics describes the energy changes and spontaneity of reactions through quantities such as enthalpy ($H$), entropy ($S$), and Gibbs free energy ($G$). The relationship $\Delta G = \Delta H - T \Delta S$ determines whether a process is thermodynamically favourable at a given temperature. Chemical kinetics, by contrast, concerns the rate at which reactions occur and the mechanisms by which they proceed.

## Worked Example: Calculating Gibbs Free Energy

Consider a reaction with $\Delta H = -92.2 \text{ kJ mol}^{-1}$ and $\Delta S = -198.7 \text{ J K}^{-1} \text{mol}^{-1}$ at $T = 298 \text{ K}$. Converting entropy to kJ: $\Delta S = -0.1987 \text{ kJ K}^{-1} \text{mol}^{-1}$. Applying the equation:

$$\Delta G = -92.2 - (298)(-0.1987) = -92.2 + 59.2 = -33.0 \text{ kJ mol}^{-1}$$

Since $\Delta G < 0$, the reaction is spontaneous under these conditions.

## Overview

University-level physical chemistry notes covering thermodynamics, kinetics, quantum chemistry, and spectroscopy.

## Topics Covered

- **Thermodynamics**: Enthalpy, entropy, Gibbs free energy, phase equilibria
- **Kinetics**: Rate laws, reaction mechanisms, catalysis, Arrhenius equation
- **Quantum Chemistry**: Wave functions, Schrodinger equation, molecular orbitals
- **Spectroscopy**: IR, UV-Vis, NMR, mass spectrometry

## Prerequisites

- General chemistry (first-year university level)
- Calculus (differentiation, integration, differential equations)
- Linear algebra (matrices, eigenvalues)
- Basic physics (mechanics, thermodynamics)

## How to Use These Notes

Start with the introductory sections to build foundational knowledge, then progress to more advanced topics. Each section includes worked examples and practice problems.

## Navigation

Use the sidebar to browse topics, or start with the introductory pages linked from the sidebar.

## Additional Resources

Each section includes:

- Detailed explanations of key concepts
- Worked examples with step-by-step solutions
- Practice problems with answers
- Common pitfalls and how to avoid them
- Connections to other areas of physical chemistry

## Intuition

Physical chemistry applies physics to chemical systems, asking why reactions happen and how fast. Thermodynamics determines spontaneity and equilibrium through energy and entropy, while kinetics measures reaction rates through activation energies and transition states. Quantum chemistry calculates molecular properties from first principles by solving the Schrodinger equation for electrons. Statistical mechanics bridges microscopic and macroscopic properties, connecting molecular energies to temperature and pressure. Spectroscopy probes molecular structure through light absorption, with different techniques revealing electronic, vibrational, and rotational energy levels. These tools let us predict and control chemical behavior from atomic-scale understanding.

## Study Tips

1. **Build a strong foundation**: Ensure you understand the basic concepts before moving to advanced topics
2. **Practice regularly**: Physical chemistry requires active practice, not just reading
3. **Work through derivations**: Practice deriving equations from first principles
4. **Use mathematical tools**: Familiarise yourself with calculus and linear algebra techniques
5. **Connect theory to experiment**: Relate theoretical concepts to experimental observations

## Common Mistakes

**Mistake 1: Confusing $\Delta G$ with $\Delta G^\circ$**
$\Delta G$ is the Gibbs free energy change under arbitrary conditions, while $\Delta G^\circ$ is the standard free energy change at defined standard states. The relationship $\Delta G = \Delta G^\circ + RT\ln Q$ connects them through the reaction quotient $Q$. At equilibrium ($Q = K$), $\Delta G = 0$ and $\Delta G^\circ = -RT\ln K$, but this does not mean $\Delta G = \Delta G^\circ$.

**Mistake 2: Assuming the Arrhenius equation applies to all reactions**
The Arrhenius equation $k = Ae^{-E_a/RT}$ assumes a single-step reaction with a well-defined activation energy. For multi-step mechanisms, the observed activation energy is an effective value that may not correspond to any single elementary step. Reactions with negative activation energies or complex temperature dependences require the Eyring equation from transition state theory.

**Mistake 3: Treating entropy as disorder without quantitative reasoning**
Entropy is a quantitative thermodynamic quantity measured in $\text{J K}^{-1}$, not a qualitative measure of disorder. The entropy change $\Delta S = q_{\text{rev}}/T$ must be calculated from reversible heat transfer, not estimated from visual inspection. Students often predict sign errors by confusing the system entropy with the total (system + surroundings) entropy.

## Cross-References

- **[Organic Chemistry](../2-organic-chemistry/):** Covers reaction mechanisms and synthesis that build on physical chemistry principles.
- **[Inorganic Chemistry](../3-inorganic-chemistry/):** Explores coordination chemistry and solid-state chemistry that use thermodynamic and kinetic concepts.
- **[Chemical Kinetics](chemical-kinetics.md):** Detailed notes on reaction rates, rate laws, and activation energy.

- [Thermodynamics](https://physics.wyattau.com/docs/thermodynamics)
- [Calculus](https://mathematics.wyattau.com/docs/calculus)
- [Quantum Mechanics](https://physics.wyattau.com/docs/quantum-mechanics)
- [Linear Algebra](https://mathematics.wyattau.com/docs/linear-algebra)
