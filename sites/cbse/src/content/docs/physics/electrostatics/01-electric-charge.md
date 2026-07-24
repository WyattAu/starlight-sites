---

date: 2026-07-23T21:57:32+01:00
title: "Electric charge"
description: "CBSE Class 12 physics: Electric charge with Coulomb's law, superposition principle, and worked examples."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "cbse", "url": "https://cbse.wyattau.com"}, {"name": "Physics", "url": "https://cbse.wyattau.com/physics"}, {"name": "Electrostatics", "url": "https://cbse.wyattau.com/physics/electrostatics"}, {"name": "01 Electric Charge", "url": "https://cbse.wyattau.com/physics/electrostatics/01-electric-charge"}]
}
</script>

## Electric charge

Electric charge is a fundamental property of matter. This topic covers Coulomb's law, the superposition principle, quantization, and conservation of charge.

## Key Concepts

- Coulomb's law: $F = k\frac{|q_1 q_2|}{r^2}$, where $k = \frac{1}{4\pi\varepsilon_0} \approx 9 \times 10^9 \, \text{N}\cdot\text{m}^2/\text{C}^2$
- Principle of superposition: $\vec{F}_{net} = \sum \vec{F}_i$
- Quantization of charge: $q = ne$, where $e = 1.6 \times 10^{-19} \, \text{C}$
- Conservation of charge: total charge in an isolated system is constant
- Like charges repel, unlike charges attract
- Charge is conserved in all interactions (nuclear, chemical, etc.)
- The force between two charges is along the line joining them

## Worked Example 1 — Coulomb's Law (Two Charges)

**Problem:** Two point charges $q_1 = +3 \, \mu\text{C}$ and $q_2 = -5 \, \mu\text{C}$ are placed 0.2 m apart. Find the magnitude and direction of the force between them.

**Solution:**
$$F = k\frac{|q_1 q_2|}{r^2} = 9 \times 10^9 \times \frac{3 \times 10^{-6} \times 5 \times 10^{-6}}{(0.2)^2}$$
$$= 9 \times 10^9 \times \frac{15 \times 10^{-12}}{0.04} = 9 \times 10^9 \times 3.75 \times 10^{-10}$$
$$= 3.375 \, \text{N}$$

Since the charges have opposite signs, the force is attractive (directed toward each other).

**Common mistake:** Forgetting to convert microcoulombs to coulombs. Always write $3 \, \mu\text{C} = 3 \times 10^{-6} \, \text{C}$ before substituting.

## Worked Example 2 — Superposition of Forces

**Problem:** A charge $q = +2 \, \mu\text{C}$ is placed at the origin. Charges $q_1 = +3 \, \mu\text{C}$ at $(0.1, 0)$ m and $q_2 = -4 \, \mu\text{C}$ at $(0, 0.1)$ m. Find the net force on $q$.

**Solution:**

Force due to $q_1$ (along $+x$):
$$F_1 = k\frac{|q \cdot q_1|}{r^2} = 9 \times 10^9 \times \frac{2 \times 10^{-6} \times 3 \times 10^{-6}}{(0.1)^2} = 5.4 \, \text{N} \, \hat{i}$$

Force due to $q_2$ (along $-y$, attractive):
$$F_2 = k\frac{|q \cdot q_2|}{r^2} = 9 \times 10^9 \times \frac{2 \times 10^{-6} \times 4 \times 10^{-6}}{(0.1)^2} = 7.2 \, \text{N}$$

Since $q_2$ is negative and below $q$, the force on $q$ is toward $q_2$:
$$\vec{F}_2 = -7.2 \, \hat{j} \, \text{N}$$

Net force:
$$\vec{F}_{net} = 5.4 \, \hat{i} - 7.2 \, \hat{j} \, \text{N}$$
$$|\vec{F}_{net}| = \sqrt{5.4^2 + 7.2^2} = \sqrt{29.16 + 51.84} = \sqrt{81} = 9 \, \text{N}$$

Direction: $\theta = \tan^{-1}\left(\frac{7.2}{5.4}\right) \approx 53.1^\circ$ below the $x$-axis.

**Common mistake:** Adding force magnitudes directly without considering direction. Forces are vectors and must be added using vector components.

## Worked Example 3 — Equilibrium of Three Charges

**Problem:** A charge $q_1 = +4 \, \mu\text{C}$ is at the origin and $q_2 = +9 \, \mu\text{C}$ is at $x = 3$ m. Where should a third charge $q_3$ be placed on the $x$-axis so that it is in equilibrium?

**Solution:**

For $q_3$ to be in equilibrium, the forces from $q_1$ and $q_2$ must be equal and opposite. Let $q_3$ be at distance $x$ from the origin.

$$k\frac{|q_1 q_3|}{x^2} = k\frac{|q_2 q_3|}{(3-x)^2}$$
$$\frac{4}{x^2} = \frac{9}{(3-x)^2}$$

Taking square roots (both positive):
$$\frac{2}{x} = \frac{3}{3-x}$$
$$2(3-x) = 3x \implies 6 - 2x = 3x \implies x = 1.2 \, \text{m}$$

The third charge should be placed at $x = 1.2$ m from the origin.

**Common mistake:** Taking the negative square root. Since we are looking for a position between the charges where both forces oppose, the solution must be between $x = 0$ and $x = 3$.

## Cross-References

- **[Electric Field (02-electric-field.md)](02-electric-field.md):** Charges create electric fields, which exert forces on other charges — connecting charge to the field concept.
- **[Current Electricity](../current-electricity/index.md):** Electric current is the flow of charge — understanding charge is the first step to understanding circuits.
- **[Electrostatics](../../../../../../typescript/src/content/docs/index):** The broader topic that uses Coulomb's law to calculate fields, potentials, and forces from charge distributions.
- **[Atoms and Nuclei (Physics)](../../../../../../typescript/src/content/docs/index):** Atomic structure depends on the electrostatic attraction between the positively charged nucleus and negatively charged electrons.

## Practice Problems

1. Two charges of $+6 \, \mu\text{C}$ and $-2 \, \mu\text{C}$ are 0.3 m apart. Find the force between them.
2. A charge of $+5 \, \mu\text{C}$ is at the origin. Find the force on a $-3 \, \mu\text{C}$ charge at $(0.4, 0.3)$ m.
3. Find the number of electrons in 1 C of negative charge.

### Additional Practice Problems

4. Three equal charges of $+2 \, \mu\text{C}$ are placed at the vertices of an equilateral triangle of side 0.1 m. Find the net force on any one charge.
5. A charge $q_1 = +1 \, \mu\text{C}$ is at the origin and $q_2 = +4 \, \mu\text{C}$ is at $x = 6$ m. A third charge is placed at $x = 2$ m. Find the net force on the third charge.

## Intuition

**The invisible force that holds matter together:** Electric charge is like an invisible property of matter — you can't see it, but you can see its effects when objects attract or repel. Think of it as a "social tendency": like charges (same type) avoid each other, while opposite charges are drawn together, just like magnets. The force between charges follows an inverse-square law — double the distance and the force drops to one quarter, just like gravity weakens with distance.

**Why it matters:** Electric charge is the foundation of all electromagnetic phenomena — from the lightning in a thunderstorm to the signals in your brain. Understanding charge means understanding how batteries work, how computers process information, and how atoms bind together to form everything around you.

**The key insight:** Charge comes in discrete packets (multiples of the elementary charge e = 1.6 × 10⁻¹⁹ C) and is always conserved — it can be transferred between objects but never created or destroyed, like a cosmic accounting system that always balances.

## Common Exam Patterns

- Always convert units to SI before substituting into Coulomb's law
- When finding net force on a charge, compute each force separately and add as vectors
- For equilibrium problems, set the magnitudes of opposing forces equal
- The equilibrium position between two like charges is always between them, closer to the smaller charge
- Coulomb's law applies only to point charges or spherical charge distributions

## Exam Tips

1. Draw a diagram showing all charges and the point where force is to be calculated.
2. Use vector notation to avoid sign errors when forces act in different directions.
3. Remember that Coulomb's law gives the magnitude; determine the direction from the signs of the charges.
4. For three or more charges, use the superposition principle: compute the force from each pair separately.
5. Check that your answer makes physical sense: like charges repel, unlike charges attract.

## Common Mistakes

**Forgetting to convert microcoulombs to coulombs.** The formula F = kq₁q₂/r² requires charges in coulombs, not microcoulombs. Always write 3 μC = 3 × 10⁻⁶ C before substituting. This single mistake can make your answer off by a factor of 10¹².

**Adding force magnitudes directly without vector components.** Forces are vectors — when multiple charges act on a charge, you must resolve forces into components and add them vectorially, not just add the magnitudes. F_net ≠ F₁ + F₂ unless the forces are in the same direction.

**Confusing the equilibrium position between two charges.** For two like charges, the equilibrium point is between them, closer to the smaller charge. For two unlike charges, the equilibrium point is outside the charges, on the side of the smaller charge (magnitude). Students often place the equilibrium point at the midpoint regardless of charge magnitudes.
