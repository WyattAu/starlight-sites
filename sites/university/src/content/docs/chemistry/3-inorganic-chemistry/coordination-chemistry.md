---
title: Coordination Chemistry
description: ""]$$

Rate: $v = k[\text{complex}]$ (independent of incoming ligand).

**S$\_\text{N}$2 (Associative):** The incoming ligand attacks to form a 7-coordinate intermediate;
then a ligand leaves.

$$[\text{ML}_6] + \text{L}' \to [\text{ML}_6\text{L}'] \to [\text{ML}_5\text{L}'] + \text{L}$$

Rate: $v = k[\text{complex}][\text{L}']$.

### 9.3 Trans Effect (Square Planar)

**Definition 8 (Trans Effect):** In square planar complexes, some ligands labilize the ligand
**trans** to them, accelerating its substitution.

**Trans effect series:**

$$\text{CN}^- \approx \text{CO} \approx \text{C}_2\text{H}_4 > \text{PR}_3 > \text{H}^- > \text{SC(NH}_2)_2 > \text{CH}_3^- > \text{SCN}^- > \text{I}^- > \text{Br}^- > \text{Cl}^- > \text{py} > \text{NH}_3 > \text{OH}^- > \text{H}_2\text{O}$$

This is exploited in the synthesis of square planar Pt complexes (e.g., cisplatin).

## 10. Electronic Spectra and Color

### 10.1 d–d Transitions

**Definition 9 (d–d Transition):** An electron is promoted from a lower-energy $d$ orbital to a
higher-energy $d$ orbital, absorbing light in the visible or near-UV region.

$$\Delta_o = h\nu = \frac{hc}{\lambda}$$

- The absorbed wavelength determines the color (complementary color is observed).
- Selection rules: Laporte forbidden ($\Delta\ell = \pm 0$ not satisfied), but weakly allowed by
  vibronic coupling or low symmetry.

### 10.2 Orgel Diagrams

**Definition 10 (Orgel Diagram):** Qualitative diagrams showing the energy of $d$-orbital states as
a function of $\Delta/B$ (field strength ratio).

For octahedral $d^n$, the Orgel diagram shows which transitions are spin-allowed and their
approximate positions.

### 10.3 Charge Transfer Transitions

**Definition 11 (Charge Transfer):** Intense transitions involving electron transfer between metal
and ligand:

- **LMCT (Ligand to Metal Charge Transfer):** Electron transfers from ligand to metal (e.g.,
  $[\text{MnO}_4]^-$, purple color from O$^{2-}$ → Mn$^{7+}$).
- **MLCT (Metal to Ligand Charge Transfer):** Electron transfers from metal to ligand (e.g.,
  $[\text{Ru(bpy)}_3]^{2+}$, MLCT absorption in visible).

Charge transfer transitions are much more intense ($\varepsilon \sim 10^3$–$10^5$) than d–d
transitions ($\varepsilon \sim 1$–$100$).

## Common Pitfalls

1. **Confusing $\Delta_o$ and pairing energy $P$ units.** $\Delta_o$ is in most cases in cm$^{-1}$
   (wavenumbers) or kJ/mol; $P$ is in the same units. **Fix:** Always compare in the same units.
2. **Wrong tetrahedral splitting direction.** $\Delta_t$ is inverted relative to $\Delta_o$: $e$ is
   lower, $t_2$ is higher. **Fix:** Tetrahedral has fewer ligands and less direct overlap, so the
   splitting is smaller ($\frac{4}{9}\Delta_o$) and inverted.
3. **Assuming all octahedral $d^n$ complexes can be high-spin or low-spin.** Only $d^4$–$d^7$ have
   this choice. **Fix:** $d^1$–$d^3$ and $d^8$–$d^{10}$ have only one configuration regardless of
   field strength.
4. **Ignoring the chelate effect for stability.** EDTA forms extremely stable complexes not because
   of bond strength but because of entropy. **Fix:** $\beta_n$ for chelates is much larger than for
   monodentate analogs.
5. **Wrong trans effect vs trans influence.** Trans effect is a kinetic phenomenon (rate of
   substitution); trans influence is a thermodynamic phenomenon (bond weakening). **Fix:** Trans
   effect relates to substitution rates; trans influence relates to ground-state bond lengths.
6. **Misassigning spectrochemical series positions.** The spectrochemical series ranks ligands, not
   metals. **Fix:** Memorize the ligand series; also note that higher oxidation state metals produce
   larger $\Delta$.
7. **Ignoring orbital contributions to magnetic moments.** The spin-only formula works for first-row
   transition metals but fails for heavier metals where orbital contributions are significant.
   **Fix:** Use $\mu_{\text{eff}} = \sqrt{4S(S+1) + L(L+1)}\,\mu_B$ when orbital angular momentum is
   not quenched.

## Summary

- **CFT:** $d$-orbital splitting in ligand fields; $\Delta_o$ (octahedral),
  $\Delta_t = \frac{4}{9}\Delta_o$ (tetrahedral).
- **Spectrochemical series:** I$^-$ < Cl$^-$ < F$^-$ < H$_2$O < NH$_3$ < CN$^-$ < CO.
- **High-spin vs low-spin:** Determined by $\Delta$ vs $P$; only $d^4$–$d^7$ octahedral.
- **CFSE:** Net stabilization from $d$-orbital splitting; explains hydration enthalpies.
- **Jahn-Teller:** Degenerate states distort; most important for $d^4$ (high-spin) and $d^9$.
- **Magnetism:** $\mu_{\text{eff}} = \sqrt{n(n+2)}\,\mu_B$; spin-only formula for first-row metals.
- **Stability:** Irving-Williams series; chelate effect (entropy-driven).
- **Color:** d–d transitions (weak, $\epsilon \sim 10$) and charge transfer (strong,
  $\epsilon \sim 10^4$).

## Worked Examples

### Example 1: CFSE Calculation

**Problem:** Calculate the crystal field stabilisation energy for [CoF6]^3- (high-spin, octahedral)
and [Co(CN)6]^3- (low-spin, octahedral). Co^3+ has d^6 configuration. Delta_o for F- is 15,000 cm^-1
and for CN- is 33,000 cm^-1. **Solution:** High-spin [CoF6]^3-: t2g^4 eg^2. CFSE = 4(-0.4 Delta_o) +
2(0.6 Delta_o) = -1.6 + 1.2 = -0.4 Delta_o = -0.4 x 15,000 = -6,000 cm^-1 = -71.8 kJ/mol. Low-spin
[Co(CN)6]^3-: t2g^6 eg^0. CFSE = 6(-0.4 Delta_o) + 0 = -2.4 Delta_o = -2.4 x 33,000 = -79,200 cm^-1
= -947.5 kJ/mol. The low-spin complex is much more stabilised.

### Example 2: Isomer Counting

**Problem:** How many geometric isomers does [Co(NH3)2(en)2]^2+ have, and how many are optically
active? (en = ethylenediamine, bidentate) **Solution:** The bidentate ligands occupy two
coordination sites each. Possible arrangements: cis and trans for the NH3 pairs relative to each
other. In the cis form, the two en ligands can be arranged as fac (with N atoms on a triangular
face) or mer (with N atoms in a meridian). Total geometric isomers: 3 (cis-fac, cis-mer, trans). The
cis-fac and cis-mer forms are chiral (no plane of symmetry), so there are 2 pairs of enantiomers.

## Cross-References

| Topic                             | Site        | Link                                                                                      |
| --------------------------------- | ----------- | ----------------------------------------------------------------------------------------- |
| Atomic Structure                  | WyattsNotes | [View](/docs/university/chemistry/atomic-structure-and-periodicity)                       |
| Main-Group Chemistry              | WyattsNotes | [View](/docs/university/chemistry/main-group-chemistry)                                   |
| Solid-State Chemistry             | WyattsNotes | [View](/docs/university/chemistry/solid-state-chemistry)                                  |
| Coordination Chemistry — MIT 5.03 | MIT OCW     | [View](https://ocw.mit.edu/courses/5-03-principles-of-inorganic-chemistry-iii-fall-2005/) |
