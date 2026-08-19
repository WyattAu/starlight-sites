---


date: 2026-07-23T21:57:32+01:00
title: "Solid State"
description: "CBSE Class 12 chemistry: Crystal structures, unit cells, packing, and worked examples."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "cbse", "url": "https://cbse.wyattau.com"}, {"name": "Chemistry", "url": "https://cbse.wyattau.com/chemistry"}, {"name": "Solid State", "url": "https://cbse.wyattau.com/chemistry/solid-state"}, {"name": "Index", "url": "https://cbse.wyattau.com/chemistry/solid-state/index"}]
}
</script>

<!-- Course Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Solid State",
  "description": "CBSE Class 12 chemistry: Crystal structures, unit cells, packing, and worked examples.",
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

## Solid State

Solid state chemistry covers the structure of crystalline solids, unit cells, packing arrangements, and defects in crystals.

## Key Concepts

- Crystal lattice: regular 3D arrangement of points
- Unit cell: smallest repeating unit of a crystal
- Primitive (simple): atoms at corners only
- Body-centred cubic (BCC): atoms at corners + body centre
- Face-centred cubic (FCC): atoms at corners + face centres
- Hexagonal close-packed (HCP): ABAB stacking
- Coordination number: number of nearest neighbours
- Packing fraction: fraction of volume occupied by spheres
- Density: $\rho = \frac{ZM}{N_A a^3}$ where $Z$ = atoms per unit cell, $M$ = molar mass, $a$ = edge length
- Schottky defect: missing cation-anion pair (creates vacancies)
- Frenkel defect: cation displaced to interstitial site

## Worked Example 1 — Unit Cell Calculations

**Problem:** An element has BCC structure with edge length $3 \times 10^{-8} \, \text{cm}$. Calculate its density if the atomic mass is $93 \, \text{g/mol}$.

**Solution:**

For BCC: $Z = 2$ atoms per unit cell

$$\rho = \frac{ZM}{N_A a^3} = \frac{2 \times 93}{6.022 \times 10^{23} \times (3 \times 10^{-8})^3}$$

$$= \frac{186}{6.022 \times 10^{23} \times 27 \times 10^{-24}}$$

$$= \frac{186}{162.594} = 1.144 \, \text{g/cm}^3$$

**Common mistake:** Using $Z = 1$ for BCC instead of $Z = 2$. In BCC, there is 1 atom from corners ($8 \times 1/8$) + 1 from body centre = 2.

## Worked Example 2 — Packing Efficiency

**Problem:** Calculate the packing efficiency of FCC.

**Solution:**

In FCC, atoms touch along the face diagonal:
$$\sqrt{2}a = 4r \implies a = 2\sqrt{2}r$$

Number of atoms per unit cell: $Z = 4$ (8 corners $\times 1/8$ + 6 faces $\times 1/2$)

Volume of atoms: $V_{\text{atoms}} = 4 \times \frac{4}{3}\pi r^3 = \frac{16}{3}\pi r^3$

Volume of unit cell: $V_{\text{cell}} = a^3 = (2\sqrt{2}r)^3 = 16\sqrt{2}r^3$

Packing efficiency:
$$\eta = \frac{V_{\text{atoms}}}{V_{\text{cell}}} = \frac{\frac{16}{3}\pi r^3}{16\sqrt{2}r^3} = \frac{\pi}{3\sqrt{2}} = 0.74 = 74\%$$

**Common mistake:** Using $a = 2r$ for FCC. In FCC, atoms touch along the face diagonal, so $\sqrt{2}a = 4r$.

## Worked Example 3 — Defects

**Problem:** Explain why $\text{NaCl}$ shows Schottky defects while $\text{AgCl}$ shows Frenkel defects.

**Solution:**

**Schottky defects** occur when ions are missing from their lattice sites. This happens when the cation and anion are similar in size. In $\text{NaCl}$, $\text{Na}^+$ (95 pm) and $\text{Cl}^-$ (181 pm) are not too different, and the lattice energy cost of creating vacancies is moderate.

**Frenkel defects** occur when a smaller ion is displaced to an interstitial site. $\text{Ag}^+$ (126 pm) is much smaller than $\text{Cl}^-$ (181 pm), so $\text{Ag}^+$ can fit into interstitial positions. The small cation migrates to an interstitial site, leaving a vacancy.

**Common mistake:** Thinking Frenkel defects involve anions. It is always the smaller ion (in most cases the cation) that is displaced.

## Practice Problems

1. An element has FCC structure with density $10.5 \, \text{g/cm}^3$ and edge length $4.09 \times 10^{-8} \, \text{cm}$. Find the atomic mass.
2. Calculate the radius ratio for BCC and determine which cation size is compatible.
3. Explain why $\text{CsCl}$ does not show Frenkel defects.

## Why This Matters

Solid state chemistry is fundamental to materials science, metallurgy, semiconductor technology, and nanotechnology. Understanding crystal structures determines the properties of metals, ceramics, and electronic materials.

## Common Exam Patterns

- Know the $Z$ values: SC = 1, BCC = 2, FCC = 4, HCP = 4
- Use the density formula $\rho = ZM/(N_A a^3)$ for unit cell calculations
- Packing fractions: SC = 52%, BCC = 68%, FCC/HCP = 74%
- Schottky defects: similar-sized ions, low coordination number
- Frenkel defects: large size difference, in most cases in Ag halides

## Intuition

**Atoms are lazy packers — they fill space as efficiently as possible:** Imagine stacking oranges at a grocery store. You'd logically arrange them so each orange touches as many neighbors as possible, minimizing gaps. This is exactly what atoms do in metals and ionic solids — they pack to maximize coordination number and minimize wasted space.

**Why it matters:** Crystal structure determines material properties — conductivity, hardness, melting point, and brittleness all depend on how atoms are arranged. Understanding packing helps predict why copper is ductile while ceramics are brittle, and why semiconductors have band gaps.

**The key insight:** The density formula ρ = ZM/(Nₐa³) connects the microscopic world (unit cell geometry) to the macroscopic world (measurable density), bridging atomic-scale structure to bulk material properties.

## Common Mistakes

**Confusing the number of atoms per unit cell.** For BCC, there are 2 atoms per unit cell (1 at corners + 1 at body centre). For FCC, there are 4 atoms per unit cell (8 corner atoms x 1/8 + 6 face atoms x 1/2). Students often count atoms without applying the sharing fractions for corners, edges, and faces.

**Confusing Schottky and Frenkel defects.** Schottky defects involve missing pairs of ions (cation and anion), reducing density. Frenkel defects involve an ion displaced to an interstitial site, keeping density unchanged. Students often mix up which defect reduces density.

**Forgetting that coordination number depends on crystal structure.** In BCC, each atom has 8 nearest neighbours. In FCC, each atom has 12 nearest neighbours. In HCP, each atom also has 12 nearest neighbours. Students sometimes assume all close-packed structures have the same coordination number.

## Cross-References

- **[Site Home](../../):** Main landing page for CBSE notes.
- **[Chemistry](../../chemistry/):** Chemistry notes covering organic and physical chemistry.
- **[Physics](../../physics/):** Physics notes covering mechanics and thermodynamics.
- **[Practice](../../practice-*.mdx):** Practice problems for revision.
