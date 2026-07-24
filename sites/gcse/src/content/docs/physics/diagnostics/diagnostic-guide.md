---

date: 2026-07-23T21:57:32+01:00
title: "GCSE Physics -- Diagnostic Guide"
description: "| Diagnostic File | Topics Covered | Source File | | --------------------- | --------------------------------------------------------------------------------"
tableOfContents: false
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "gcse", "url": "https://gcse.wyattau.com"}, {"name": "Physics", "url": "https://gcse.wyattau.com/physics"}, {"name": "Diagnostics", "url": "https://gcse.wyattau.com/physics/diagnostics"}, {"name": "Diagnostic Guide", "url": "https://gcse.wyattau.com/physics/diagnostics/diagnostic-guide"}]
}
</script>

## GCSE Physics — Diagnostic Guide

## Coverage Map

| Diagnostic File       | Topics Covered                                                                                  | Source File                         |
| --------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------- |
| `diag-energy.md`      | Energy stores, transfers, conservation, efficiency, specific heat capacity, work and power      | `energy.md`                         |
| `diag-electricity.md` | Current, voltage, resistance, Ohm"s law, series/parallel circuits, power, domestic electricity  | `electricity.md`                    |
| `diag-forces.md`      | Newton's laws, weight/mass, Hooke's law, momentum, pressure, circular motion, terminal velocity | `forces.md`                         |
| `diag-waves.md`       | Wave properties, EM spectrum, reflection, refraction, sound waves, interference                 | `waves.md`                          |
| `diag-magnetism.md`   | Magnetic fields, electromagnets, motor effect, electromagnetic induction, transformers          | `magnetism-and-electromagnetism.md` |

## Grading Rubric

### PASS Criteria

- Correctly solve at least 2 out of 3 Unit Tests with full working
- Correctly solve at least 2 out of 3 Integration Tests
- Correct use of SI units in all calculations
- Clear diagrams where required (circuits, forces, wave diagrams)

### PARTIAL Criteria

- Correctly solve 1--2 Unit Tests and 1 Integration Test
- Shows understanding of physics principles but makes calculation errors
- Correct formulas used but with arithmetic mistakes
- Partially correct explanations of physics concepts

### FAIL Indicators

- Cannot distinguish between scalar and vector quantities
- Confuses weight and mass
- Cannot apply Ohm's law or Kirchhoff's laws correctly
- Cannot recall the electromagnetic spectrum in order
- Does not include units in final answers

## Prerequisite Chains

```
Energy (stores, transfers, conservation)
  ├── Forces (work, power, kinetic/potential energy)
  └── Electricity (energy transfer, power calculations)

Forces (Newton's laws, mass, weight)
  ├── Energy (work, gravitational potential energy)
  └── Waves (wave speed formula)

Electricity (current, voltage, resistance)
  ├── Energy (power, energy calculations)
  └── Magnetism (electromagnetic induction, transformers)

Waves (wave properties, speed, frequency)
  └── Magnetism (electromagnetic waves)
```

**Recommended order of diagnostic completion:**

1. `diag-energy` -- foundational concept of energy conservation
2. `diag-forces` -- Newton's laws, a core physics toolkit
3. `diag-electricity` -- circuit analysis and Ohm's law
4. `diag-waves` -- wave properties and the EM spectrum
5. `diag-magnetism` -- builds on electricity concepts

## Timing Recommendations

| Diagnostic         | Recommended Time | Notes                                        |
| ------------------ | ---------------- | -------------------------------------------- |
| `diag-energy`      | 35 minutes       | Includes specific heat capacity calculations |
| `diag-forces`      | 40 minutes       | Multi-step Newton's law problems             |
| `diag-electricity` | 40 minutes       | Circuit analysis requires careful working    |
| `diag-waves`       | 30 minutes       | Mix of recall and calculation                |
| `diag-magnetism`   | 35 minutes       | Induction problems can be complex            |

**Total recommended time:** approximately 3 hours (spread across 2 sessions).

## How to Use These Diagnostics

1. Complete each diagnostic without notes, showing all working.
2. Always include units in intermediate and final answers.
3. Draw diagrams for circuit problems, force diagrams, and wave diagrams.
4. Check solutions immediately, comparing method and answer.
5. If you score FAIL, review the source file before retrying.
6. Integration Tests frequently combine topics (e.g., energy and forces, electricity and magnetism)
   -- these mirror the style of GCSE combined questions.
7. Practise writing explanations in full sentences, as GCSE Physics awards marks for descriptive
   answers.

## Intuition

**A diagnostic roadmap:** Diagnostic tests are like medical check-ups — they identify weak spots before the exam, so you can focus your study time where it matters most.

**Why it matters:** Targeted revision is more efficient than covering everything. Diagnostic tests help you prioritize and track improvement.

**The key insight:** Making mistakes on diagnostic tests is valuable — each error points to a concept that needs clarification.

## Summary

The key principles covered in this topic are linked in the sub-pages above. Focus on understanding
the definitions, applying the formulas or frameworks, and evaluating strengths and limitations of
each approach.

## Worked Examples

Worked examples demonstrating the application of key concepts are covered in the detailed sub-pages
linked above.

### Example: Energy Conservation on a Roller Coaster

A roller coaster car of mass 500 kg starts from rest at the top of a hill 20 m high. Calculate its speed at the bottom, assuming no friction.

**Solution:**

Using conservation of energy:
$$mgh = \frac{1}{2}mv^2$$

$$v = \sqrt{2gh} = \sqrt{2 \times 9.8 \times 20} = \sqrt{392} = 19.8 \text{ m/s}$$

**Exam tip:** Always state the principle used (conservation of energy) and show the formula before substituting values.

### Example: Series Circuit Analysis

A 12 V battery is connected to three resistors in series: 4 $\Omega$, 6 $\Omega$, and 2 $\Omega$. Find the current through each resistor and the voltage across the 6 $\Omega$ resistor.

**Solution:**

Total resistance: $R_{total} = 4 + 6 + 2 = 12 \text{ }\Omega$

Current: $I = \frac{V}{R_{total}} = \frac{12}{12} = 1 \text{ A}$

In a series circuit, the current is the same through all components.

Voltage across 6 $\Omega$ resistor:
$$V = IR = 1 \times 6 = 6 \text{ V}$$

**Common mistake:** Assuming the voltage is the same across all components in series. In series, current is constant; in parallel, voltage is constant.

### Example: Wave Speed and Frequency

A sound wave has a wavelength of 0.85 m and travels through air at 340 m/s. Find its frequency and period.

**Solution:**

Using the wave equation: $v = f\lambda$

$$f = \frac{v}{\lambda} = \frac{340}{0.85} = 400 \text{ Hz}$$

Period: $T = \frac{1}{f} = \frac{1}{400} = 0.0025 \text{ s} = 2.5 \text{ ms}$

**Exam tip:** Frequency is measured in hertz (Hz), which is the same as s$^{-1}$.

## Common Pitfalls

- Confusing terminology or concepts that appear similar but have distinct meanings.
- Overlooking key assumptions or boundary conditions that limit applicability.
- Forgetting to include units in final answers.
- Using the wrong formula for series vs parallel circuits.
- Confusing mass and weight ($W = mg$).
- Not showing working in calculations.

## Overview

This diagnostic assessment provides comprehensive coverage of Gcse content for the Qualifications qualification, with detailed explanations, worked examples, and practice questions aligned to the specification.

## Content Structure

This page includes:

- **Key Definitions**: Precise explanations of essential concepts
- **Core Concepts**: Detailed treatment of fundamental principles
- **Worked Examples**: Step-by-step solutions demonstrating application
- **Practice Questions**: Examination-style questions with mark schemes
- **Common Pitfalls**: Frequent errors and how to avoid them
- **Exam Tips**: Strategies for maximising marks

## How to Use This Content

1. Read through the introductory material to establish context
2. Study the definitions and core concepts carefully
3. Work through the worked examples, following each step
4. Attempt the practice questions independently
5. Review your answers against the provided solutions
6. Note any areas requiring further revision

## Key Concepts

- Foundational definitions and terminology
- Application of principles to examination contexts
- Connections to related topics within the specification
- Assessment objective alignment

## Revision Strategies

- **Active Recall**: Test yourself on the material rather than passively re-reading
- **Spaced Repetition**: Review this content at increasing intervals
- **Interleaving**: Mix this topic with others during study sessions
- **Elaborative Interrogation**: Ask yourself why each concept works

## Exam Preparation

Practise applying these concepts under timed conditions. Focus on understanding what each question is asking and how marks are allocated. Review examiner reports to learn from common mistakes made by other students.

## See Also

- [Diagnostics](./)
- [Electricity -- Diagnostic Tests](./diag-electricity)
- [Energy -- Diagnostic Tests](./diag-energy)
