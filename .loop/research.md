# Research: Dot-and-Cross SVG Diagrams for GCSE Chemistry Bonding

## Source: sites/gcse/src/content/docs/chemistry/2-bonding/2_bonding.md

### Ionic bonding section (§1.3, lines 95–155)
Seven compounds described in prose with NO diagram:
- MgO (Mg 2,8,2 → Mg²⁺; O 2,6 → O²⁻) — worked example with KaTeX equation
- CaCl₂ (Ca 2,8,8,2 → Ca²⁺; each Cl 2,8,7 → Cl⁻)
- Na₂O (each Na 2,8,1 → Na⁺; O 2,6 → O²⁻)
- Al₂O₃ (each Al 2,8,3 → Al³⁺; each O 2,6 → O²⁻)
- CaF₂ worked example, Li₂O worked example, K₂S worked example

### Covalent bonding section (§2.2, lines 250–300)
Nine compounds described in prose:
- H₂ — has an ASCII attempt (`H · + · H → H - H`) that renders as literal text
- H₂O — two single bonds + 2 lone pairs on O
- CO₂ — two double bonds
- CH₄ — four single bonds
- NH₃ — three single bonds + 1 lone pair on N
- HCl — one single bond
- H₂S worked example, N₂ worked example (triple bond), PCl₃ worked example

### What the exam boards require (AQA/Edexcel/OCR)
- Ionic: show outer shell only, brackets with charge, dot/cross convention for electron origin
- Covalent: show shared pairs as overlapping circles or dot/cross pairs, lone pairs visible

### Technical findings
1. **SVG in markdown**: The bonding page already uses inline HTML (`<div class="table-wrap">`, `<script>` for JSON-LD). Astro/Starlight renders inline SVG in markdown without build changes.
2. **Electron convention**: dots = electrons from the metal (ionic) or first atom (covalent); crosses = electrons from the nonmetal (ionic) or second atom (covalent). The convention must be consistent within each diagram.
3. **Brackets for ionic**: each ion enclosed in square brackets with its charge as a superscript.
4. **Lone pairs**: shown as pairs of dots or crosses on the outer shell, not shared.

### Diagram specifications (8 core diagrams)

| # | Compound | Type | Key features |
|---|---|---|---|
| 1 | NaCl | ionic | Na⁺ (empty outer shell, charge +1), Cl⁻ (8 electrons: 7 crosses + 1 dot, charge −1) |
| 2 | MgO | ionic | Mg²⁺ (empty shell, +2), O²⁻ (8 electrons: 6 crosses + 2 dots, −2) |
| 3 | CaF₂ | ionic | Ca²⁺ (+2), two F⁻ (each −1, 8 electrons) — 1:2 ratio |
| 4 | Li₂O | ionic | 2Li⁺ (+1 each), O²⁻ (−2, 8 electrons) — 2:1 ratio |
| 5 | H₂ | covalent | One shared pair (dot + cross) between two H atoms |
| 6 | H₂O | covalent | Two shared pairs, two lone pairs on O |
| 7 | CH₄ | covalent | Four shared pairs, no lone pairs on C |
| 8 | N₂ | covalent | Triple bond (three shared pairs), one lone pair on each N |

### SVG rendering approach
- Each atom: a circle (the outer shell) with the element symbol inside
- Electrons: filled circles (dots, one colour) and × symbols (crosses, another colour) positioned on the shell circle
- Ionic compounds: square brackets around each ion, charge as superscript text
- Covalent molecules: overlapping shell circles with shared electron pairs in the overlap region
- Viewport: 200–400px wide, scalable, no external dependencies
- Colours: CSS variables for dot/cross colours (accessible contrast, distinguishable in print)

### Plan validity
The plan's 8 compounds and SVG approach are confirmed. No revision needed. The existing ASCII attempt for H₂ (line 255) will be replaced by the H₂ SVG diagram. The mermaid bonding-decision flowchart (added earlier) is separate and remains.

## Chemistry Verification (PROVE phase)

All electron counts verified against the periodic table:
- Ionic: Na/Mg/Ca/Li lose electrons to reach noble gas configuration; O/Cl/F/S gain electrons
- Charge balance confirmed for each compound (positive charges = negative charges)
- Covalent: duet rule for H, octet rule for C/N/O — shared pairs and lone pairs verified
- Dot/cross convention: dots = metal's electrons (ionic) or first atom's (covalent); crosses = other atom's

No chemistry errors found. The 8 diagram specs are confirmed correct for implementation.
