# Iteration Plan: Dot-and-Cross SVG Diagrams for GCSE Chemistry Bonding

## Goal
Replace the GCSE bonding page's prose-described dot-and-cross diagrams with drawn SVG diagrams — the backlog's highest-value visual item, addressing the reader's "diagrams are just .md" complaint with the subject where diagrams ARE the assessed content.

## Scope (one pass)
Create 8 inline SVG diagrams for the core compounds named on the GCSE bonding page:
ionic (NaCl, MgO, CaF₂, Li₂O) and covalent (H₂, H₂O, CH₄, N₂). Each SVG shows the
dot-and-cross electron notation, is self-contained (no external files), and renders
inline in the existing markdown. Additionally add one mermaid diagram already scoped
(bonding-type decision flowchart) and verify the existing mermaid phase-diagram page.

## Phases and acceptance criteria

### Phase 1: Research (30 min)
- Read the GCSE bonding page to identify exact diagram positions and content needs
- Check the board specifications (AQA, Edexcel, OCR) for what each diagram must show
- Verify the SVG rendering pipeline (inline SVG in markdown, no build changes needed)

**AC:** List of 8 diagram specs (what each shows: electron transfer/sharing, charges, lone pairs)

### Phase 2: Implement (2h)
- Create 8 SVG diagrams (inline `<svg>` elements in the bonding page markdown)
- Each SVG: labelled ions/atoms, electron dots/crosses with the convention (original vs transferred), charges displayed, octet completion visible
- Place each SVG at the point in the page where the prose describes it

**AC:** All 8 SVGs render in the browser at 390px mobile width; each diagram's electron count and charges are correct against the chemistry; the page passes all content gates

### Phase 3: Test and validate (30 min)
- Playwright: verify the bonding page renders at 390px (no overflow), all SVGs present
- Content gates: the bonding page passes all 26 gates
- Chemistry accuracy: every diagram's electron count checked against the periodic table

**AC:** Playwright verification clean; gates green; diagrams chemically correct

### Done means
The GCSE bonding page has 8 visible dot-and-cross diagrams where the reader previously saw only prose descriptions. The diagrams are chemically accurate, render at mobile width, and are reusable as templates for other exam-board bonding pages.
