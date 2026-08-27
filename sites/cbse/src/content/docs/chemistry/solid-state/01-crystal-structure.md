---

date: 2026-07-23T21:57:32+01:00
title: "Crystal structure | CBSE - Wyatt's Notes"
description: "Study notes for Crystal structure with worked examples, practice problems, and key concepts for exam preparation."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "cbse", "url": "https://cbse.wyattau.com"}, {"name": "Chemistry", "url": "https://cbse.wyattau.com/chemistry"}, {"name": "Solid State", "url": "https://cbse.wyattau.com/chemistry/solid-state"}, {"name": "01 Crystal Structure", "url": "https://cbse.wyattau.com/chemistry/solid-state/01-crystal-structure"}]
}
</script>

## Crystal structure

Study notes for CBSE Class 12 chemistry - Crystal structure.


```mermaid
flowchart TD
    A[01 Crystal Structure] --> B[Key Concepts]
    A --> C[Core Principles]
    A --> D[Practical Applications]
    B --> E[Fundamental definitions]
    C --> F[Design patterns]
    D --> G[Real-world usage]
```

## Key Concepts

- Unit cell: the smallest repeating unit of a crystal lattice
- Types of cubic unit cells: simple cubic (SC), body-centred cubic (BCC), face-centred cubic (FCC)
- Number of atoms per unit cell: SC = 1, BCC = 2, FCC = 4
- Packing efficiency: $\text{PE} = \frac{Z \cdot \frac{4}{3}\pi r^3}{a^3} \times 100\%$
- Radius-edge relations: SC: $a = 2r$; BCC: $a = \frac{4r}{\sqrt{3}}$; FCC: $a = \frac{4r}{\sqrt{2}}$
- Density: $\rho = \frac{ZM}{N_A a^3}$

## Worked Example 1 — Number of Atoms per Unit Cell

**Problem:** An element crystallises in a BCC unit cell with edge length $a = 3.0 \, \text{\AA}$. If the molar mass is $52 \, \text{g/mol}$, find the density of the crystal.

**Solution:**

For BCC: $Z = 2$ atoms per unit cell.

Edge length: $a = 3.0 \, \text{\AA} = 3.0 \times 10^{-8} \, \text{cm}$

Volume of unit cell:
$$a^3 = (3.0 \times 10^{-8})^3 = 27 \times 10^{-24} \, \text{cm}^3$$

Density:
$$\rho = \frac{ZM}{N_A a^3} = \frac{2 \times 52}{6.022 \times 10^{23} \times 27 \times 10^{-24}}$$
$$= \frac{104}{16.2594} \approx 6.40 \, \text{g/cm}^3$$

## Worked Example 2 — Packing Efficiency of FCC

**Problem:** Show that the packing efficiency of an FCC unit cell is approximately 74%.

**Solution:**

In FCC: atoms touch along the face diagonal.
$$\sqrt{2}a = 4r \implies a = \frac{4r}{\sqrt{2}} = 2\sqrt{2}r$$

Volume of unit cell:
$$a^3 = (2\sqrt{2}r)^3 = 16\sqrt{2}r^3$$

Number of atoms in FCC: $Z = 4$

Volume occupied by atoms:
$$V_{atoms} = 4 \times \frac{4}{3}\pi r^3 = \frac{16}{3}\pi r^3$$

Packing efficiency:
$$\text{PE} = \frac{\frac{16}{3}\pi r^3}{16\sqrt{2}r^3} \times 100\% = \frac{\pi}{3\sqrt{2}} \times 100\% \approx \frac{3.1416}{4.2426} \times 100\% \approx 74.05\%$$

## Worked Example 3 — Radius of an Atom from Unit Cell Data

**Problem:** Iron crystallises in a BCC structure with density $7.86 \, \text{g/cm}^3$. The molar mass of Fe is $56 \, \text{g/mol}$. Find the atomic radius.

**Solution:**

For BCC: $Z = 2$.

From density formula:
$$a^3 = \frac{ZM}{\rho N_A} = \frac{2 \times 56}{7.86 \times 6.022 \times 10^{23}}$$
$$= \frac{112}{4.733 \times 10^{24}} = 23.66 \times 10^{-24} \, \text{cm}^3$$

$$a = \sqrt[3]{23.66 \times 10^{-24}} = 2.87 \times 10^{-8} \, \text{cm} = 2.87 \, \text{\AA}$$

For BCC: $a = \frac{4r}{\sqrt{3}}$

$$r = \frac{a\sqrt{3}}{4} = \frac{2.87 \times 1.732}{4} = \frac{4.972}{4} \approx 1.24 \, \text{\AA}$$

## Practice Problems

1. An element crystallises in a simple cubic unit cell with $a = 2.5 \, \text{\AA}$ and molar mass $60 \, \text{g/mol}$. Find the density.
2. Calculate the packing efficiency of a BCC unit cell.
3. Copper has an FCC structure with $a = 3.61 \, \text{\AA}$. Find the atomic radius of copper.

### Additional Practice Problems

1. A metal has a BCC structure with density $6.8 \, \text{g/cm}^3$ and atomic radius $1.25 \, \text{\AA}$. Find the molar mass.
2. Compare the number of atoms per unit cell and packing efficiency for SC, BCC, and FCC structures.

## Key Formulas

- Density: $\rho = \frac{ZM}{N_A a^3}$
- Packing efficiency: $\text{PE} = \frac{Z \cdot \frac{4}{3}\pi r^3}{a^3} \times 100\%$
- Radius-edge relations:
  - SC: $a = 2r$
  - BCC: $a = \frac{4r}{\sqrt{3}}$
  - FCC: $a = \frac{4r}{\sqrt{2}}$
- Number of atoms: SC = 1, BCC = 2, FCC = 4

## Worked Example 4 — Packing Efficiency of BCC

**Problem:** Show that the packing efficiency of a BCC unit cell is approximately 68%.

**Solution:**

In BCC: atoms touch along the body diagonal.
$$\sqrt{3}a = 4r \implies a = \frac{4r}{\sqrt{3}}$$

Volume of unit cell:
$$a^3 = \left(\frac{4r}{\sqrt{3}}\right)^3 = \frac{64r^3}{3\sqrt{3}}$$

Number of atoms in BCC: $Z = 2$

Volume occupied by atoms:
$$V_{atoms} = 2 \times \frac{4}{3}\pi r^3 = \frac{8}{3}\pi r^3$$

Packing efficiency:
$$\text{PE} = \frac{\frac{8}{3}\pi r^3}{\frac{64r^3}{3\sqrt{3}}} \times 100\% = \frac{8\pi}{3} \times \frac{3\sqrt{3}}{64} \times 100\% = \frac{\pi\sqrt{3}}{8} \times 100\%$$

$$\text{PE} = \frac{3.1416 \times 1.732}{8} \times 100\% = \frac{5.441}{8} \times 100\% \approx 68.02\%$$

**Answer:** The packing efficiency of BCC is approximately 68%.

**Common mistake:** Forgetting that in BCC, atoms touch along the body diagonal ($\sqrt{3}a$), not along the edge.

## Worked Example 5 — Void Calculations

**Problem:** In an FCC unit cell of a metal with atomic radius $r$, what is the radius of the largest tetrahedral void that can fit in the structure?

**Solution:**

In FCC, the radius of the largest tetrahedral void is:
$$r_{void} = 0.225r$$

This ratio comes from the geometry of the tetrahedral void formed by four atoms in the FCC structure.

For example, if the metal has $r = 1.25 \, \text{\AA}$:
$$r_{void} = 0.225 \times 1.25 = 0.281 \, \text{\AA}$$

**Common mistake:** Confusing tetrahedral voids (radius ratio 0.225) with octahedral voids (radius ratio 0.414).

## Worked Example 6 — Crystal System Identification

**Problem:** A compound has a unit cell with $a = b \neq c$ and $\alpha = \beta = \gamma = 90°$. What crystal system does it belong to?

**Solution:**

Step 1: Analyse the unit cell parameters:

- $a = b \neq c$: two axes are equal, one is different
- $\alpha = \beta = \gamma = 90°$: all angles are right angles

Step 2: Match with crystal systems:

- Cubic: $a = b = c$, $\alpha = \beta = \gamma = 90°$ (no)
- Tetragonal: $a = b \neq c$, $\alpha = \beta = \gamma = 90°$ (yes)
- Orthorhombic: $a \neq b \neq c$, $\alpha = \beta = \gamma = 90°$ (no)

**Answer:** The compound belongs to the tetragonal crystal system.

**Common mistake:** Forgetting that crystal systems are defined by both edge length relationships and angle relationships.

## Intuition

Crystal structure is nature's way of packing atoms as efficiently as possible. Imagine stacking oranges at a grocery store -- there are only a few ways to arrange them so they do not fall. Simple cubic is like stacking layers directly on top of each other (wasteful, lots of gaps). Body-centered cubic puts one atom in the center of a cube of eight corner atoms. Face-centered cubic fills the gaps by placing atoms on each face, achieving the densest packing at 74%. The voids between atoms are like empty pockets where smaller atoms can sit, and the radius ratio tells you which voids a smaller atom can fit into.

## Common Mistakes

### Mistake 1: Using the wrong radius-edge relation for the crystal type

Each unit cell type has a specific relation between atomic radius $r$ and edge length $a$. Students frequently mix these up: SC uses $a = 2r$, BCC uses $a = 4r/\sqrt{3}$, and FCC uses $a = 4r/\sqrt{2}$. The key is knowing where atoms touch: along the edge (SC), along the body diagonal (BCC), or along the face diagonal (FCC). Using the wrong relation gives incorrect packing efficiency and density.

### Mistake 2: Confusing the number of atoms per unit cell with the coordination number

The number of atoms per unit cell ($Z$) counts how many atoms belong to one unit cell after accounting for sharing at corners, edges, and faces. The coordination number counts how many nearest neighbours each atom has (6 for SC, 8 for BCC, 12 for FCC). Students often report $Z$ when the question asks for the coordination number, or vice versa. Read the question carefully to determine which value is needed.

### Mistake 3: Forgetting to convert units in density calculations

The density formula $\rho = ZM / (N_A a^3)$ requires consistent units. If the edge length $a$ is given in angstroms (Å), convert to centimetres ($1\,\text{Å} = 10^{-8}\,\text{cm}$) before cubing. Similarly, ensure the molar mass $M$ is in g/mol and Avogadro's number $N_A = 6.022 \times 10^{23}\,\text{mol}^{-1}$. A common error is cubing $a$ in angstroms and then mixing it with cgs units, yielding a density that is off by orders of magnitude.

## Cross-References

- [Solutions](../../../../../../mathematics/src/content/docs/5-ordinary-differential-equations/6_series-solutions) -- how solutes interact with crystal lattices
- [CBSE Physics](../../../../../../ib/src/content/docs/physics/physics) -- solid-state physics and material properties
- [CBSE Mathematics](../../../../../../ib/src/content/docs/maths/maths) -- geometry and 3D coordinate systems
