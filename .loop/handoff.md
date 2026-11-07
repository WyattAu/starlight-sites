# Handoff — estate math repair, SEO fixes, search SLO, deploy gate unblocked (2026-11-01)

## Deployed state
- Deploy All Sites: SUCCESS (run 41385771451, 2026-11-02) — includes the
  mid-line flow-math closing repair (62 files) + 33-span oracle pass, the
  .mdx list-item restoration, ib genetics prose repair, and sidebar
  Introduction entries. wyattsnotes.wyattau.com UP (200).
- Live-verified: bonding NaCl + math (errors 41 -> 9; remainder is the
  known-issue class), tools definitions page 0 errors, four-statements page
  200, /intro/ 200, search bot filter deployed (7-day window accumulating).
- Verified live: GCSE bonding NaCl diagram + repaired math, accounting
  four-statements page, ap /intro/, robots.txt on the 3 new sites

## What landed (see git log on main, 376dae600..b1d7fc9aa)
- GCSE bonding: NaCl dot-and-cross (8th diagram), 10 unbalanced \mathrm
  repairs, prose fixes; PRIOR HANDOFF DIAGNOSIS CORRECTED: the SVGs were
  never stripped — grep -c counted minified-HTML lines, not matches
- Accounting: "The Four Statements, Interlocking" (cycle track page 2)
- CS: section 6.12 The PCP Theorem (statement, gap amplification, hardness
  of approximation, Dinur, IP=PSPACE lineage)
- Search: SearchAction template-query bot filter (was 49% of zero-results) +
  7-day SLO window in /api/health
- Estate KaTeX brace repair: 223 files, oracle-gated (KaTeX must reject the
  original and accept the repair); known-issue list for 61 files needing
  manual repair: .loop/known-issues-katex.md
- SEO: per-page title/description/canonical now DEPLOYED (was stuck on the
  unmerged branch); robots.txt for accounting/economics/finance; sidebar
  Introduction entries (orphan fix) on 30 sites; lint-staged hook timeout
  90 -> 240
- SEO audit + 10-item prioritized plan: docs/SEO-AUDIT-2026-11-01.md

## Deploy-gate fixes that unblocked the pipeline
1. tools/probabilisticml stray $$ swallowing prose (the 4 KaTeX errors that
   failed run 41189374982)
2. display-math delimiter gate: single-line $$..$$ -> multi-line (2 files)
3. llms.txt freshness: regenerate after any content change (2 passes)

## Open items (priority order)
1. Manual KaTeX repair list (61 files, .loop/known-issues-katex.md) — the
   bonding page still shows ~32 katex-error instances from the structural
   class; each needs human re-reading of the intended formula
2. GRAPH002 internal-linking program (991 pages, crawlkit baseline in
   docs/SEO-AUDIT-2026-11-01.md)
3. CANNIB001 triage (150 clusters) + DUP-CROSS strategy decision
   (differentiate vs cross-site canonicals) — business input needed
4. CSP headers for accounting/economics/finance; multi-H1 cleanup in
   PageTitle override
5. wyattsnotes: add to the uptime monitor check list (it was down and the
   monitor stayed green)
6. Search SLO: watch the 7-day window converge; remaining zeros are genuine
   content gaps (econometrics terms)
7. Uptime monitor blind-spot fix + crawlkit gsc/rank credential wiring

## Core course hardening (2026-11-07)

- 17-core-course Level 1 proofread: every handwave closed. 1B now has the
  exchange lemma, basis extension, quotient universal property, permutation
  sign from scratch (cycle decomposition + sign polynomial), determinant
  existence/uniqueness/multiplicativity, and the exterior-power dimension via
  separating functionals (no "standard argument"). 1A: incorrect "epi in Top"
  caution replaced with the provable N -> Z monoid example, comma-category and
  Hausdorff jargon removed, adjunction naturality made explicit, heading
  levels fixed, self-test hints corrected. Em-dashes swept to en-dashes in
  all three files.
- Level 2 BUILT (2a-topology.md, 5280534d9): metric + abstract topologies,
  continuity (open-preimage definition, epsilon-delta equivalence proved),
  homeomorphisms, closure/interior, subspace + product characteristic
  properties, Hausdorff, connectedness (full sup proof that [a,b] is
  connected; IVT as a corollary; Q disconnected with sqrt-2 irrationality
  proved inline), compactness (full Heine-Borel sup proof; compact-in-
  Hausdorff closed; EVT as a corollary; wrap map as the canonical
  continuous-bijection-not-homeomorphism). Two declared analysis inputs
  (completeness axiom incl. Archimedean corollary, elementary-calculus
  continuity), everything else proved. Self-review pass caught 9 issues
  (forward reference of Archimedes, undefined distance-to-set, R^2 vs RxR
  product-topology gap) - fixed in 9ae6603ab.
- Hub page table lists 1A/1B/2; 1B links forward to 2. Sidebar picks up
  2a-topology via autogenerate.
- NEXT: Level 3 in three sub-pages (3a smooth manifolds: charts, atlases,
  compatibility transitivity, stereographic S^n; 3b tangent spaces via
  derivations; 3c forms + Stokes). Declared inputs for 3a: multivariable
  chain rule + inverse function theorem (labelled explicitly, like
  completeness in Level 2). Levels 4-5 after.
- 3A BUILT (3a-manifolds.md, e8f418b86 + 02a19925c): Euclidean
  differentiability with the partials-do-not-a-derivative-make
  counterexample; algebra of derivatives proved from the definition (so
  rational smoothness needs no calculus); explicit-base line-with-two-
  origins example; raw compatibility shown NON-transitive (counterexample:
  t + |t-1|^3/4 is C^2 not C^3 at 1) with transitivity-through-a-common-
  atlas (Prop 3.1) + locality (Lemma 1.5) proving maximal-atlas existence
  AND uniqueness (Thm 3.2); stereographic sphere fully algebraic; products;
  smooth maps via the f(U) subset V definition - smooth implies continuous
  in two lines, well-definedness proved, dimension invariance via IFT +
  rank-nullity (1B Thm 1.6 cross-link). Self-review caught: broken
  counterexample (|t-1|^3 term was non-injective), messy half-edited §5
  definition paragraph (now the Lee-style definition), quotient-handwave in
  the two-origins example (now an explicit base).
- NEXT after 3A: 3b tangent spaces (derivations, differential, IFT on
  manifolds), then 3c forms + Stokes; Levels 4-5 (Schilling measure
  theory, then the syntheses).
- Deploy note: deploy.yml uses a concurrency group - newer pushes cancel
  in-progress runs (5e412b0f5 run cancelled by the 5280534d9 run). Watch
  only the newest run; main is cumulative.
