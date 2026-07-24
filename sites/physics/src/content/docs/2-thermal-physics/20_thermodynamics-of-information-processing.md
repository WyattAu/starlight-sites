---

date: 2026-07-23T21:57:32+01:00
title: Thermodynamics of Information Processing
tags:
  - Physics
  - University
description: "The minimum energy dissipation per irreversible bit operation depends on the phy Comprehensive educational content coverage with definitions and practice proble"
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "physics", "url": "https://physics.wyattau.com"}, {"name": "2 Thermal Physics", "url": "https://physics.wyattau.com/2-thermal-physics"}, {"name": "20_thermodynamics Of Information Processing", "url": "https://physics.wyattau.com/2-thermal-physics/20_thermodynamics-of-information-processing"}]
}
</script>

### 20.1 Landauer Bound in Practice

The minimum energy dissipation per irreversible bit operation depends on the physical
implementation:

- **CMOS transistor** (2000s-era): $\sim 10^4\,k_BT$ per switch (vastly above the Landauer limit)
- **Modern CMOS** (7 nm node): $\sim 10^2$--$10^3\,k_BT$ per switch
- **Adiabatic / reversible logic proposals**: $\sim 1$--$10\,k_BT$ per operation (approaching the
  limit)

The gap between theory ($k_BT\ln 2 \approx 0.018$ eV at 300 K) and practice ($\sim 1$--$10$ fJ per
switch) spans 5--6 orders of magnitude. Closing this gap requires fundamentally different computing
paradigms.

### 20.2 Bennett"s Clock and Reversible Computing

Bennett (1982) showed that a computer can be made logically reversible at every step if it never
erases information. Such a computer dissipates energy only during the initialisation of bits and
during optional output, not during computation.

A logically reversible computation can be embedded in a thermodynamically reversible process by
driving the system slowly enough that it remains near equilibrium at all times. The energy cost is
then:

$$E = \int_0^\tau \frac{\partial F}{\partial \lambda(t)}\,\dot{\lambda}(t)\,dt$$

For a quasi-static process: $E \to \Delta F$ (minimum possible).

**Fredkin and Toffoli gates** are examples of logically reversible logic gates. Any computation can
be made reversible by saving all intermediate results and running the computation in reverse to
restore the input tape.

### 20.3 Information-Theoretic Formulation

The Shannon entropy of a probability distribution $\{p_i\}$ over microstates is:

$$H = -\sum_i p_i \log_2 p_i$$

Landauer's principle states that erasing one bit of information dissipates at least $k_B T \ln 2$ of heat. This follows from the second law: the entropy decrease of the information-bearing degrees of freedom must be compensated by an entropy increase in the environment.

The fundamental equality for a quasi-static bit operation is:

$$\Delta S_{\text{system}} + \Delta S_{\text{bath}} = 0 \quad \Longrightarrow \quad Q \geq k_B T \ln 2$$

### 20.4 Maxwell's Demon and Information-Entropy Relation

Maxwell's demon paradox is resolved by recognising that acquiring information about particle positions requires work. The demon's memory must be reset, and this erasure dissipates the heat required by Landauer's bound.

The total entropy balance for a measurement-and-erasure cycle:

$$\Delta S_{\text{gas}} + \Delta S_{\text{memory}} + \Delta S_{\text{bath}} \geq 0$$

The net effect is that the demon cannot violate the second law when the full information-processing cycle is accounted for.

### 20.5 Thermodynamic Costs in Biological Systems

Living systems process information at nonzero thermodynamic cost:

- **Molecular motors:** Use chemical energy (ATP hydrolysis, $\Delta G \approx 20\,k_BT$) to perform mechanical work, operating near the Landauer limit.
- **Gene regulation:** Transcription factor binding events are stochastic; cells expend $\sim 10^3$--$10^4$ ATP per expressed gene to overcome noise.
- **Neural signalling:** An action potential consumes $\sim 10^6$ ATP per pulse, far above the Landauer limit due to redundancy and reliability requirements.

## Worked Example: Landauer Limit for a Flip-Flop

**Problem.** A CMOS flip-flop operating at 3 GHz dissipates 10 $\mu$W. How many $k_B T$ per operation does this represent at 300 K? Compare with the Landauer limit.

**Solution.** Energy per operation: $E = 10 \times 10^{-6} / (3 \times 10^9) = 3.33 \times 10^{-15}$ J.

$$E / (k_B T) = 3.33 \times 10^{-15} / (1.38 \times 10^{-23} \times 300) = 3.33 \times 10^{-15} / 4.14 \times 10^{-21} = 8.05 \times 10^5\,k_B T$$

The Landauer limit is $\ln 2 \approx 0.693\,k_B T$. The flip-flop operates $\sim 10^6$ times above the fundamental limit, illustrating the vast gap between current technology and thermodynamic perfection. $\blacksquare$

### Key Relationships

| Concept | Formula | Significance |
|---------|---------|--------------|
| Landauer bound | $E_{\min} = k_B T \ln 2$ | Minimum heat per erased bit |
| Shannon entropy | $H = -\sum_i p_i \log_2 p_i$ | Information content in bits |
| Free energy change | $\Delta F = \Delta U - T\Delta S$ | Reversible work available |
| Second law with info | $\Delta S_{\text{univ}} = \Delta S_{\text{sys}} + \Delta S_{\text{bath}} - \Delta I \geq 0$ | Information as negative entropy |
| Bennett's reversible computing | $W_{\text{rev}} = \Delta F$ | No energy dissipated per logical step |

### Common Pitfalls

1. **Landauer's bound is a lower bound, not an operating point:** Real devices dissipate 5--6 orders of magnitude more than $k_B T \ln 2$. The bound applies only to logically irreversible operations — reversible operations can in principle dissipate arbitrarily little.
2. **Information is not physical, but its representation is:** The Shannon entropy of a message has no physical units until it is encoded in a physical system (spins, charges, photons). The thermodynamic cost is tied to the physical representation, not the abstract information.
3. **Measurement requires energy dissipation:** Acquiring information about a system requires interaction, which disturbs the system. The minimum energy cost of a measurement is related to the distinguishability of the measured states.
4. **Maxwell's demon does not violate the second law:** The demon's memory must be reset, and this erasure exactly compensates the apparent entropy decrease of the gas. The total entropy of the universe never decreases.

### Summary Table

| Process | Information Change | Minimum Heat Dissipation |
|---------|-------------------|-------------------------|
| Bit erasure (reset) | $1$ bit $\to$ $0$ (known) | $k_B T \ln 2$ |
| Bit copy (fanout) | $1$ bit $\to$ $2$ copies | $0$ (reversible) |
| Measurement | Unknown $\to$ known | $\geq k_B T \ln 2$ (for resetting meter) |
| Logical AND (irreversible) | $2$ bits $\to$ $1$ bit | $k_B T \ln 2$ |
| Reversible gate (CNOT, Toffoli) | $n$ bits $\to$ $n$ bits | $0$ (in principle) |

### Connections to Other Topics

- **Statistical mechanics:** The Gibbs paradox resolves when identical particle distinguishability is accounted for — information about which particle is which is not physical for identical quantum particles.
- **Quantum information:** The Landauer bound extends to quantum systems: erasing a qubit costs at least $k_B T \ln 2$, but quantum superposition allows some computations to be more efficient per bit erased.
- **Biology:** Molecular machines operate in the presence of thermal noise. The minimum energy required to maintain a nonequilibrium steady state (e.g., a concentration gradient) is set by information-theoretic bounds.
- **Computer architecture:** The gap between Landauer's limit and CMOS practice motivates research into reversible computing, adiabatic logic, and neuromorphic architectures that approach the thermodynamic limit.

### Additional Worked Example: Erasing a Register

**Problem.** A 64-bit register is initialised to a random value. How much heat must be dissipated to erase it (reset to all zeros) at $T = 300$ K? Compare with the energy to charge a typical DRAM capacitor ($\sim 4$ fJ per bit).

**Solution.** Erasing 64 bits requires at minimum $64 \, k_B T \ln 2$:

$$Q_{\min} = 64 \times 1.38 \times 10^{-23} \times 300 \times \ln 2$$
$$= 64 \times 4.14 \times 10^{-21} \times 0.693 = 64 \times 2.87 \times 10^{-21} = 1.84 \times 10^{-19} \text{ J}$$

Per bit: $2.87 \times 10^{-21}$ J = $2.87$ zJ. DRAM capacitors use $\sim 4$ fJ/bit = $4 \times 10^{-15}$ J/bit, about $1.4 \times 10^6$ times above the Landauer limit.

This enormous gap demonstrates that current computing is limited not by thermodynamics but by engineering constraints (capacitive charging, leakage, noise margins). $\blacksquare$

## Intuition

Landauer's principle reveals that information is physical: erasing a bit must dissipate at least kT ln 2 of heat because erasure reduces the entropy of the information-bearing system, and the second law demands compensation in the environment. Maxwell's demon fails because acquiring and erasing information about particles costs energy that exactly cancels the apparent entropy decrease. The vast gap between the Landauer limit and current CMOS technology shows that modern computing is limited by engineering, not by fundamental physics. Reversible computing aims to close this gap by never erasing information during computation.

## Cross-References

| Topic             | Site       | Link                                                                                                       |
| ----------------- | ---------- | ---------------------------------------------------------------------------------------------------------- |
| [Thermal Physics] | A-Level    | [View](https://alevel-maths-physics.wyattau.com/docs/alevel/physics/thermal-physics/01-thermal-properties) |
| [Thermal Physics] | IB         | [View](https://ib.wyattau.com/docs/ib/physics/2-particulate-nature-of-matter/1_thermodynamics)             |
| [Thermal Physics] | DSE        | [View](https://dse.wyattau.com/docs/dse/physics/4-thermal-physics/1_heat-and-gases)                        |
| [Thermal Physics] | University | [View](https://university.wyattau.com/docs/physics/2-thermal-physics/1_thermal-physics)                    |


- [Calculus](https://mathematics.wyattau.com/docs/calculus)
- [Linear Algebra](https://mathematics.wyattau.com/docs/linear-algebra)
- [Vector Calculus](https://mathematics.wyattau.com/docs/vector-calculus)
- [Quantum Computing](https://computer-science.wyattau.com/docs/quantum-computing)

## See Also

- [Thermal Physics](./)
- [The Laws of Thermodynamics](./1_the-laws-of-thermodynamics)
- [Phase Transitions](./10_phase-transitions)
