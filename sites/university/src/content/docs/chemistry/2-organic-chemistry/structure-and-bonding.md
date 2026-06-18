---
title: Structure and Bonding
description: ""s Rule

**Theorem 3 (Huckel's Rule):** A planar, cyclic, fully conjugated system with $(4n + 2)$ $\pi$
electrons is aromatic (exceptionally stable). Systems with $4n$ $\pi$ electrons are antiaromatic
(destabilized).

| $\pi$ Electrons | $n$ | Aromaticity  | Example                 |
| --------------- | --- | ------------ | ----------------------- |
| 2               | 0   | Aromatic     | Cyclopropenyl cation    |
| 4               | 1   | Antiaromatic | Cyclobutadiene          |
| 6               | 1   | Aromatic     | Benzene                 |
| 8               | 2   | Antiaromatic | Cyclooctatetraene (tub) |
| 10              | 2   | Aromatic     | Naphthalene             |

### 5.2 Criteria for Aromaticity

1. **Cyclic** — the $\pi$ system must form a closed loop.
2. **Planar** — all $p$ orbitals must be parallel for effective overlap.
3. **Fully conjugated** — every atom in the ring must have a $p$ orbital (no sp$^3$ atoms in the
   ring).
4. **$(4n + 2)$ $\pi$ electrons** — Huckel's rule.

### 5.3 Aromatic Heterocycles

**Pyridine:** 6 $\pi$ electrons from the C=N ring; the nitrogen lone pair is in an sp$^2$ orbital
perpendicular to the $\pi$ system and does not participate.

**Pyrrole:** 6 $\pi$ electrons; the nitrogen lone pair (in a $p$ orbital) contributes to the $\pi$
system.

**Furan and Thiophene:** 6 $\pi$ electrons; the heteroatom lone pair contributes to the $\pi$
system.

### 5.4 Anti-Aromaticity and Non-Aromaticity

**Antiaromatic:** Meets all criteria except has $4n$ $\pi$ electrons. Highly destabilized; distorts
geometry to escape antiaromaticity (e.g., cyclooctatetraene adopts a tub-shaped non-planar
conformation).

**Non-aromatic:** Fails one or more criteria (not cyclic, not planar, not fully conjugated, or wrong
electron count but not $4n$).

## 6. Stereochemistry

### 6.1 Chirality

**Definition 9 (Chirality):** A molecule is chiral if it is not superimposable on its mirror image.
A chiral center (stereocenter) is a carbon atom bonded to four different substituents.

**Theorem 4 (Chirality):** A molecule with a single stereocenter exists as a pair of enantiomers
(non-superimposable mirror images) that are chemically identical in an achiral environment but
rotate plane-polarized light in opposite directions.

### 6.2 The R/S Naming System

**Definition 10 (Cahn-Ingold-Prelog Rules):**

1. Assign priority to substituents based on atomic number (higher = higher priority).
2. Orient the molecule so the lowest-priority group is pointing away.
3. Read the remaining three in order of decreasing priority:
   - Clockwise → $R$ (Rectus)
   - Counterclockwise → $S$ (Sinister)

For double bonds (E/Z):

$$\text{E (Entgegen): } \text{higher priority groups on opposite sides}$$

$$\text{Z (Zusammen): } \text{higher priority groups on same side}$$

### 6.3 Optical Activity

**Definition 11 (Optical Activity):** Enantiomers rotate plane-polarized light. The specific
rotation:

$$[\alpha] = \frac{\alpha_{\text{obs}}}{c \cdot l}$$

where $\alpha_{\text{obs}}$ is the observed rotation (degrees), $c$ is concentration (g/mL), and $l$
is path length (dm).

An enantiomeric mixture:
$ee = \frac{[\text{major}] - [\text{minor}]}{[\text{major}] + [\text{minor}]} \times 100\%$

### 6.4 Diastereomers

**Definition 12 (Diastereomers):** Stereoisomers that are not mirror images. They have different
physical and chemical properties.

- Molecules with 2 or more stereocenters can have diastereomeric relationships.
- **Meso compounds:** Molecules with stereocenters that are achiral overall due to an internal plane
  of symmetry.

**Example 2:** Tartaric acid has three stereoisomers: $(R,R)$, $(S,S)$ (enantiomers), and meso
(internally compensated, $[R,S]$ with a symmetry plane).

$\blacksquare$

### 6.5 Fischer Projections

**Definition 13 (Fischer Projection):** A 2D representation of a 3D molecule with:

- Horizontal bonds projecting toward the viewer.
- Vertical bonds projecting away from the viewer.

To interchange two substituents: swap any two groups → invert stereochemistry.

## 7. Conformational Analysis

### 7.1 Newman Projections

**Definition 14 (Newman Projection):** View along a C–C bond. The front carbon is represented by the
point where bonds meet; the back carbon by a circle.

### 7.2 Conformations of Ethane

The dihedral angle $\phi$ between H atoms on adjacent carbons determines the energy:

$$E(\phi) = \frac{V_0}{2}(1 + \cos 3\phi)$$

- **Staggered** ($\phi = 60°, 180°, 300°$): minimum energy.
- **Eclipsed** ($\phi = 0°, 120°, 240°$): maximum energy ($\sim 12$ kJ/mol above staggered).

### 7.3 Butane Conformations

| Conformation     | Dihedral Angle | Relative Energy (kJ/mol) |
| ---------------- | -------------- | ------------------------ |
| Anti             | 180°           | 0                        |
| Gauche           | ±60°           | +3.8                     |
| Eclipsed (Me–H)  | ±120°          | +16                      |
| Eclipsed (Me–Me) | 0°             | +19                      |

The anti conformation is most stable due to minimal steric hindrance.

### 7.4 Cyclohexane

**Definition 15 (Chair Conformation):** The most stable conformation of cyclohexane, with bond
angles of 109.5° and zero angle strain.

- **Axial bonds:** Point alternately up and down, roughly parallel to the ring axis.
- **Equatorial bonds:** Point outward, roughly in the plane of the ring.

At room temperature, cyclohexane undergoes rapid **ring flipping**, interconverting axial and
equatorial positions.

**Theorem 5 (A-Value):** The conformational free energy difference between axial and equatorial:

| Substituent | A-Value (kJ/mol) | Preferred Position |
| ----------- | ---------------- | ------------------ |
| CH$_3$      | 7.3              | Equatorial         |
| C$_2$H$_5$  | 7.4              | Equatorial         |
| t-Bu        | > 20             | Equatorial (locks) |
| OH          | 4.0              | Equatorial         |
| Cl          | 2.1              | Equatorial         |
| Br          | 1.8              | Equatorial         |

### 7.5 Disubstituted Cyclohexanes

- **1,2-diaxial interactions:** Substituents in the 1,2-positions on the same side experience steric
  repulsion (gauche butane interactions).
- **cis-1,3-diaxial:** Severe repulsion if both groups are axial.
- **trans-decalin:** Rigid (no ring flip); **cis-decalin:** more flexible.

### 7.6 Cyclohexane Conformational Equilibrium

For a monosubstituted cyclohexane:

$$K_{\text{eq}} = \frac{[\text{equatorial}]}{[\text{axial}]} = e^{-\Delta G/RT}$$

**Example 3:** For methylcyclohexane at 298 K with $\Delta G = 7.3$ kJ/mol:

$$K_{\text{eq}} = e^{-7300/(8.314 \times 298)} = e^{-2.95} \approx 19$$

The equatorial conformer is favored ~95%.

$\blacksquare$

## 8. Physical Organic Chemistry Concepts

### 8.1 Inductive Effects

**Definition 16 (Inductive Effect):** Electron withdrawal or donation through $\sigma$ bonds,
decreasing with distance.

- **Electron-withdrawing groups (EWG):** $-$NO$_2$, $-$CN, $-$C=O, halogens (at short range).
- **Electron-donating groups (EDG):** Alkyl groups, $-$O$^-$, $-$NH$_2$.

### 8.2 Hyperconjugation

**Definition 17 (Hyperconjugation):** Delocalization of $\sigma$ electrons (in most cases C–H) into
an adjacent empty or partially filled $p$ or $\pi$ orbital.

This stabilizes carbocations, explains the preference for staggered conformations, and contributes
to the stability of alkenes (more alkyl substituents = more hyperconjugation = more stable).

### 8.3 Field Effects

**Definition 18 (Field Effect):** Electrostatic interaction through space (not through bonds),
important for polar substituents near a reaction center.

## Common Pitfalls

1. **Confusing hybridization and geometry.** sp$^2$ hybridized carbon is trigonal planar (3 groups),
   but sp$^3$ nitrogen with a lone pair is also trigonal planar ($\sigma = 3$). **Fix:** Steric
   number (bonded atoms + lone pairs) determines geometry, not hybridization alone.
2. **Misidentifying aromatic vs non-aromatic systems.** Cyclooctatetraene is non-aromatic
   (tub-shaped, not planar), not antiaromatic. **Fix:** Check all four criteria: cyclic, planar,
   fully conjugated, and electron count.
3. **Wrong R/S assignment from Fischer projections.** Interchanging any two groups in a Fischer
   projection inverts stereochemistry. **Fix:** Place the lowest-priority group at top or bottom
   (vertical) for a valid R/S assignment.
4. **Ignoring hyperconjugation in carbocation stability.** Tertiary carbocations are more stable not
   just because of inductive effects but also because of more C–H hyperconjugation. **Fix:** Count
   the number of adjacent C–H bonds that can hyperconjugate.
5. **Confusing E/Z with R/S.** E/Z refers to double-bond geometry (alkenes); R/S refers to chirality
   at stereocenters. **Fix:** Use CIP priorities for both, but apply to different structural
   features.
6. **Wrong axial/equatorial assignments in chair conformations.** Axial bonds alternate up/down
   around the ring. **Fix:** Draw the chair carefully; remember that ring flip converts all axial to
   equatorial and vice versa.
7. **Overcounting $\pi$ electrons in aromatic heterocycles.** The nitrogen lone pair in pyridine
   does not contribute to the $\pi$ system; in pyrrole it does. **Fix:** Check whether the lone pair
   is in a $p$ orbital (contributes) or an sp$^2$ orbital (does not).

## Summary

- **Hybridization:** sp$^3$ (tetrahedral), sp$^2$ (trigonal planar + $p_\pi$), sp (linear + 2
  $p_\pi$).
- **VSEPR:** Electron pairs arrange to minimize repulsion; bond angles deviate from ideal values due
  to lone pairs and multiple bonds.
- **Conjugation and resonance:** Delocalized $\pi$ systems; resonance hybrids are more stable than
  individual forms.
- **Aromaticity:** Huckel's rule $(4n + 2)$ $\pi$ electrons; must be cyclic, planar, and fully
  conjugated.
- **Stereochemistry:** R/S system for chiral centers; E/Z for double bonds; enantiomers vs
  diastereomers.
- **Conformational analysis:** Newman projections; cyclohexane chair conformations; A-values
  determine substituent preferences.

## Worked Examples

### Example 1: Determining Molecular Geometry

**Problem:** Predict the geometry and bond angle around the central carbon in CH3NO2 (nitromethane).
**Solution:** The central carbon is sp3 hybridised (tetrahedral geometry for the C-H bonds,
approximately 109.5 degrees). The nitrogen is sp2 hybridised with a formal positive charge. The two
N-O bonds are equivalent due to resonance. The C-N bond length is shorter than a typical C-N single
bond due to partial double bond character from resonance delocalisation.

### Example 2: Analysing Conformational Energy

**Problem:** For methylcyclohexane, determine which conformation is more stable (equatorial vs axial
methyl) and calculate the energy difference. **Solution:** The equatorial conformation is more
stable. The A-value for a methyl group is 1.7 kcal/mol. At room temperature (kT = 0.6 kcal/mol), the
equilibrium constant K = exp(-Delta G/RT) = exp(-1.7/0.6) = exp(-2.83) = 0.059. The equatorial:axial
ratio is approximately 17:1, meaning about 94% of molecules are in the equatorial conformation at
room temperature.

## Cross-References

| Topic                        | Site        | Link                                                                    |
| ---------------------------- | ----------- | ----------------------------------------------------------------------- |
| Reaction Mechanisms          | WyattsNotes | [View](/docs/university/chemistry/reaction-mechanisms)                  |
| Spectroscopy                 | WyattsNotes | [View](/docs/university/chemistry/spectroscopy)                         |
| Quantum Chemistry            | WyattsNotes | [View](/docs/university/chemistry/quantum-chemistry)                    |
| Organic Chemistry — MIT 5.12 | MIT OCW     | [View](https://ocw.mit.edu/courses/5-12-organic-chemistry-i-fall-2005/) |
