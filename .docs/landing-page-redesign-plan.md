# Landing Page Redesign Plan

## Goals
- Academic trust (appeal to academics/students, not casual visitors)
- Remove "vibe-coded" feel
- Eliminate empty descriptors (rigorous, comprehensive, etc.)
- Consistent logo usage across all 41 sites
- Clean, authoritative information architecture

---

## 1. Logo Integration (shared/logo/)

### Current state
- `shared/logo/logo_withtext_optimized.svg` — full logo with text (Inkscape SVG, 4161mm canvas)
- Current favicon: book emoji (`📚`)
- Landing page nav: text-only "WN"
- Starlight sites: text-only site title

### Actions
- [ ] Create a proper `favicon.svg` from the logo (crop to emblem, appropriate viewBox)
- [ ] Replace `sites/*/public/favicon.svg` with the new favicon
- [ ] Landing page nav: replace "WN" text with logo SVG
- [ ] Optionally: inject logo into Starlight header via `SiteTitle` component override
- [ ] Distribute via `sync-shared.mjs`

---

## 2. Descriptor Audit

### Phrases to remove/replace
| Current | Problem | Replacement |
|---------|---------|-------------|
| "rigorous" | Empty claim, overused | Cut or replace with specific fact |
| "comprehensive" | Meaningless | Cut |
| "without the paywall" | Negative framing | Focus on positive |
| "free & open source" badge | Irrelevant to trust | Remove or move to footer |
| "written with undergraduate precision" | Vague | Cut |
| "designed for serious students" | Gatekeeping tone | Cut |

### Stats to remove
- "2000+ Pages" — vanity metric
- "42 Sites" — irrelevant to user
- "15+ Subjects" — vague
- "100% Free" — implied, don't need to state

### Hero rewrite
Current: "Rigorous Study Notes Without the Paywall"
Proposed: focus on what the notes ARE, not what they're NOT.

---

## 3. Design Direction (MIT / Imperial / Building Society)

### Reference principles

**MIT (ocw.mit.edu)**
- Minimal nav, massive whitespace
- Content-first: the notes speak for themselves
- No badges, no stats, no hype
- Typography-driven: serif headings, clean layout

**Imperial College (imperial.ac.uk)**
- Strong grid, structured cards
- Research/authority signals (faculty, publications)
- Bold use of accent color for CTAs
- Footer-heavy with trust signals

**Building Societies (nationwide.co.uk)**
- Community language ("for students, by students")
- Clear, simple navigation
- Prominent search
- Transparency about what's offered

### Proposed landing page structure

```
┌─────────────────────────────────────────────────┐
│  [Logo]  Nav: Subjects  |  Search  |  Theme     │
├─────────────────────────────────────────────────┤
│                                                 │
│  Hero: One sentence. What this is.               │
│  Subtitle: Who it's for.                        │
│  [Browse notes →]                               │
│                                                 │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────┐ │
│  │ Mathematics  │ │ Physics      │ │ Chemistry│ │
│  │ 158 pages    │ │ 136 pages    │ │ 29 pages │ │
│  │ Proof-based  │ │ Derivations  │ │ ...      │ │
│  └──────────────┘ └──────────────┘ └──────────┘ │
│                                                 │
│  ┌─────────────────────────────────────────────┐ │
│  │ Featured: Fourier Series Interactive         │ │
│  │ (WASM demo embedded)                        │ │
│  └─────────────────────────────────────────────┘ │
│                                                 │
│  Footer: GitHub, License, About                 │
└─────────────────────────────────────────────────┘
```

### Key changes
1. **Hero**: Single sentence. "Undergraduate and advanced study notes in mathematics, physics, computer science, and engineering."
2. **Subject grid**: One card per site, minimal description, page count as signal of depth
3. **No stats row** — removed entirely
4. **No "Free & Open Source" badge** — moved to footer if anywhere
5. **Featured content**: WASM interactive demo (Fourier series) as proof of depth
6. **Typography**: Increase contrast, possibly serif for headings

---

## 4. Colour & Typography

### Current
- Accent: `#ff6b35` (orange)
- Background: `#0a0a0f` (near-black)
- Text: `#e2e8f0` (light gray)

### Proposed adjustments
- Slightly warmer background (`#0f0f14` or `#111118`)
- Higher contrast text (`#f0f0f5` or pure white)
- Accent stays orange but more muted for headings
- Serif option: Merriweather for hero/headings (academic feel)
- Mono for code/metadata

---

## 5. Implementation Order

1. [ ] Fix favicon + logo across all sites
2. [ ] Rewrite hero copy (remove empty descriptors)
3. [ ] Remove stats row from landing page
4. [ ] Restructure subject cards (no badges, cleaner metadata)
5. [ ] Adjust typography (serif headings if chosen)
6. [ ] Add WASM interactive demo embed (Fourier series) as featured content
7. [ ] Final copy audit across all site descriptions
