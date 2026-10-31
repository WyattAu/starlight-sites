# GUI & Frontend Refactor: Discussion, Decisions, and Roadmap
- **[ADOPT]**; clear value, fits the architecture, low risk. Schedule it.
- **[CONSIDER]**; real value but conditional on a need that does not yet
- **[REJECT]**; does not fit, redundant with an installed dependency, or
- `@tanstack/solid-query`; when in-page search UX becomes stateful.
- `@astrojs/partytown`; if main-thread analytics cost shows in Lighthouse.
- `@tanstack/solid-table` / `solid-virtual`; when a real data-table/list lands.
- `solid-transition-group` / `solid-motion`; when scripted animation is needed.
- R0 (precondition); establish the safety net so every later change is gated.
- R1; low-risk, mechanical, high-clarity win (`--ifm-*` removal). Builds
- R2; DRY refactor of islands onto Kobalte. No dependency added.
- R3; icon hygiene. No dependency added.
- R4; Astro 6 upgrade. Framework-level; depends on R1-R3 being clean.
- R5; landing-page Astro migration (depends on R4 for native primitives).
- R6; adopt the deferred candidates opportunistically.
### Phase R0: Safety net and baselines (precondition)
### Phase R1: Remove `--ifm-*` Docusaurus CSS shims (D3)
### Phase R2: Refactor islands onto Kobalte (D2)
- **R2a; LocaleSwitcher -> Kobalte `Select`.** Replace the hand-rolled
- **R2b; PracticeProblem -> Kobalte `RadioGroup`.** Replace the bespoke
- **R2c; DiagnosticTest -> Kobalte `RadioGroup`.** Same transformation as R2b,
- **R2d (optional); audit BaseDialog** for Kobalte `Tooltip`/`Dialog` upgrades;
### Phase R3: Icon hygiene with Lucide via unplugin-icons (D5)
### Phase R4: Astro 5.18.2 -> 6.x upgrade (D1)
### Phase R5: Landing page -> Astro (D4, was ROADMAP Phase J)
### Phase R6: Deferred candidates (trigger-gated)