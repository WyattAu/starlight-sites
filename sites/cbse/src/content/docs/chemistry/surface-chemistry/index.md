---


date: 2026-07-23T21:57:32+01:00
title: "Surface Chemistry | CBSE - Wyatt's Notes"
description: "\"itemListElement\": [{\"name\": \"Home\", \"url\": \"https://wyattau.com\"}, {\"name\": \"cbse\", \"url\": \"https://cbse.wyattau.com\"}, {\"name\": \"Chemistry\", \"url\":"
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "cbse", "url": "https://cbse.wyattau.com"}, {"name": "Chemistry", "url": "https://cbse.wyattau.com/chemistry"}, {"name": "Surface Chemistry", "url": "https://cbse.wyattau.com/chemistry/surface-chemistry"}, {"name": "Index", "url": "https://cbse.wyattau.com/chemistry/surface-chemistry/index"}]
}
</script>

<!-- Course Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Surface Chemistry",
  "description": "CBSE Class 12 chemistry: Adsorption, colloids, catalysis, and worked examples.",
  "provider": {
    "@type": "Organization",
    "name": "Wyatt's Notes",
    "url": "https://cbse.wyattau.com"
  },
  "url": "https://cbse.wyattau.com",
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

## Surface Chemistry

Surface chemistry studies phenomena occurring at surfaces and interfaces. It covers adsorption, catalysis, colloids, and their applications.

## Key Concepts

- Adsorption: accumulation of species on a surface (physical vs chemical adsorption)
- Physisorption: weak van der Waals forces, low enthalpy ($20-40 \, \text{kJ/mol}$), reversible
- Chemisorption: strong chemical bonds, high enthalpy ($80-240 \, \text{kJ/mol}$), often irreversible
- Freundlich isotherm: $\frac{x}{m} = kP^{1/n}$ (at moderate pressure)
- Langmuir isotherm: $\frac{x}{m} = \frac{aP}{1 + bP}$ (monolayer adsorption)
- Colloids: particles of size $1-1000 \, \text{nm}$ dispersed in a medium
- Tyndall effect: scattering of light by colloidal particles
- Electrophoresis: movement of colloidal particles under electric field
- Catalysis: substances that increase reaction rate without being consumed
- Enzyme catalysis: highly specific biological catalysts

## Worked Example 1 — Freundlich Adsorption

**Problem:** At 298 K, the mass of gas adsorbed per gram of adsorbent is $0.12 \, \text{g}$ at $2 \, \text{atm}$ and $0.36 \, \text{g}$ at $6 \, \text{atm}$. Verify that the data fits the Freundlich isotherm and find $k$ and $n$.

**Solution:**

Freundlich isotherm: $\frac{x}{m} = kP^{1/n}$

Taking logarithms:
$$\log\left(\frac{x}{m}\right) = \log k + \frac{1}{n}\log P$$

From the two data points:
$$\log(0.12) = \log k + \frac{1}{n}\log(2)$$
$$\log(0.36) = \log k + \frac{1}{n}\log(6)$$

Subtracting:
$$\log(0.36) - \log(0.12) = \frac{1}{n}[\log(6) - \log(2)]$$

$$\log(3) = \frac{1}{n}\log(3)$$

Therefore $1/n = 1$, so $n = 1$.

Substituting back:
$$\log(0.12) = \log k + \log(2)$$

$$\log k = \log(0.12) - \log(2) = \log(0.06)$$

$$k = 0.06$$

**Common mistake:** Forgetting to take logarithms. The Freundlich equation is linear in log-log form.

## Worked Example 2 — Colloidal Properties

**Problem:** A colloidal solution of $\text{Fe(OH)}_3$ is prepared by adding $\text{FeCl}_3$ to hot water. Explain why the sol is positively charged and describe how to purify it.

**Solution:**

$\text{FeCl}_3$ hydrolyzes:
$$\text{FeCl}_3 + 3\text{H}_2\text{O} \rightarrow \text{Fe(OH)}_3 + 3\text{HCl}$$

The colloidal particles preferentially adsorb $\text{Fe}^{3+}$ ions (common ion), giving them a positive charge.

Purification by dialysis: The sol is placed in a parchment paper bag immersed in pure water. Crystalloid impurities ($\text{HCl}$, excess $\text{FeCl}_3$) pass through the membrane, while colloidal particles are retained.

**Common mistake:** Confusing the charge on the colloidal particle with the charge on the stabilizing ion. The particle and its adsorbed ion have the same charge.

## Worked Example 3 — Catalysis

**Problem:** The decomposition of $\text{H}_2\text{O}_2$ is catalyzed by $\text{MnO}_2$. The rate constant increases from $1.2 \times 10^{-3} \, \text{s}^{-1}$ to $5.8 \times 10^{-2} \, \text{s}^{-1}$ at the same temperature. By what factor does the catalyst increase the rate?

**Solution:**

The rate increases by a factor of:
$$\frac{k_{\text{catalyzed}}}{k_{\text{uncatalyzed}}} = \frac{5.8 \times 10^{-2}}{1.2 \times 10^{-3}} = \frac{58}{1.2} \approx 48.3$$

The catalyst increases the rate approximately 48-fold. The catalyst provides an alternative pathway with lower activation energy.

**Common mistake:** Thinking a catalyst changes the equilibrium constant. A catalyst increases both forward and reverse rates equally; it does not shift equilibrium.

## Practice Problems

1. At a certain temperature, $x/m = 0.20 \, \text{g/g}$ at $1 \, \text{atm}$ and $0.40 \, \text{g/g}$ at $4 \, \text{atm}$. Find $n$ in the Freundlich isotherm.
2. Explain why $\text{As}_2\text{S}_3$ sol is negatively charged.
3. How does a catalyst affect the activation energy and the equilibrium constant?

## Why This Matters

Surface chemistry is critical in industrial processes (Haber process, catalytic converters), pharmaceutical formulations (colloidal drugs), water treatment (adsorption), and environmental science (air purification).

## Intuition

**Everything happens at surfaces:** Imagine a crowded dance floor where new dancers arriving at the edges create the most excitement — that's surface chemistry. Molecules accumulate on surfaces (adsorption) because surface atoms have unsatisfied bonding needs, like unfinished handshakes. The more surface area available, the more adsorption can happen. Colloids are tiny particles dispersed throughout a medium, like flour particles suspended in water when you're mixing batter — they're small enough to scatter light but large enough to stay suspended.

**Why it matters:** Surface chemistry explains why catalytic converters clean your car exhaust, why activated charcoal filters water, why soap forms micelles, and how your kidneys filter blood. It's the chemistry of interfaces, and interfaces are where most of the interesting action happens.

**The key insight:** Physisorption is weak and reversible (like magnets on a fridge), while chemisorption involves actual chemical bonds (like welding) — and the right choice depends on whether you need temporary or permanent attachment.

## Common Exam Patterns

- Distinguish between physisorption and chemisorption (reversibility, enthalpy, specificity)
- Colloid purification methods: dialysis, ultrafiltration
- Electrophoresis demonstrates the charge on colloidal particles
- Catalysts lower activation energy but do not change equilibrium position
- Practice with Freundlich and Langmuir isotherm calculations

## Common Mistakes

**Confusing lyophilic and lyophobic colloids.** Lyophilic colloids are solvent-loving and efficiently formed (like starch in water). Lyophobic colloids are solvent-hating and require stabilising agents (like gold sol). Students often assume all colloids are formed the same way.

**Forgetting that catalysts do not change equilibrium position.** Catalysts speed up both forward and reverse reactions equally, reaching equilibrium faster but not shifting the equilibrium position. Students sometimes think a catalyst favours the products, which is incorrect.

**Confusing adsorption with absorption.** Adsorption is a surface phenomenon where molecules accumulate on the surface. Absorption is a bulk phenomenon where molecules penetrate into the volume. Colloids exhibit adsorption on the surface of dispersed particles, which gives them their charge.

## Cross-References

- **[Solutions](../solutions/index.md):** Adsorption depends on concentration of the adsorbate in solution — connecting surface chemistry to solution concepts.
- **[Chemical Kinetics](../chemical-kinetics/index.md):** Catalysis speeds up reactions by providing alternative pathways — connecting surface chemistry to reaction rates.
- **[Polymers](../polymers/index.md):** Polymeric colloids and polymer-surfactant interactions are important in surface chemistry applications.
- **[Electrochemistry](../electrochemistry/index.md):** Electrophoresis of colloids involves electric fields, linking surface chemistry to electrochemistry.
