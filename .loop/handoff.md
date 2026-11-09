# Handoff - 87-chapter research syllabus verified; Stage A written; reveal mechanism live (2026-11-08, later)

## Deployed state
- run 42472946877 (d2e647c03) SUCCESS, lean-proof: success (first CI-proof of
  the artifact; elan cache seeded, no more runtime downloads after cache hit).
- run for 8e2282c67 in flight: Stage A page + reveal CSS + lint exemption.

## What landed (10ade0503..8e2282c67)
- Research frontier (v2.5): Stage M functional summit (6), Stage N topology/
  geometry (7), Stage O probability (4). 83 chapters verified BEFORE content.
- Per-topic completeness audit (v2.6): new B5 counting, H4 approximation
  (Weierstrass/Stone-Weierstrass/Arzela-Ascoli), M7 unbounded operators +
  Stone, O5 Girsanov/risk-neutral; 20 scope notes; I7 dep +H4, F9 dep +F8.
  87 chapters, 200 edges. Approach machinery added: stage gates, retention
  loop (feeds the existing mastery engine), formal witnesses (Stage B Lean).
- Stage A WRITTEN: stage-a-reasoning.md, all five chapters as one page;
  ponder spoilers, quick checks, first stage gate, 4 problems. A1-A5
  status=written in the graph. Reveal CSS: details.wn-spoiler +
  .wn-spoiler-inline in shared/styles/custom.css (synced to 48 sites).
- lint-handwaves: quoted-mention exemption (match wrapped in quotes is a
  mention not a use); whole-tree findings 255 -> 247.
- lean-proof job: actions/cache on ~/.elan + retry loops with real failure
  propagation + elan toolchain install "$(cat lean-toolchain)" (elan needs
  an explicit arg). ghcr.io/leanprover/lean4 does NOT exist; Docker Hub
  mirror empty. Do not go back to containers.

## Next (in order)
1. Verify Stage A rendered: node /tmp/opencode/verify-stage-a.mjs
   (spoiler count, click opens, blur lifts on focus, sidebar link, fab).
2. Stage B: stage-b-counting.md (Peano, addition/multiplication as
   theorems, division with remainder, counting arguments B5) with the
   FIRST formal-witness Lean boxes (core-only: Nat.add_comm etc.) + the
   CI extraction check (scripts/check-course-lean, wire into gate).
3. Retrofit One-Line Reveal to the 14 written pages (plain text ->
   wn-spoiler-inline), one site-sync commit.
4. llms.txt freshness on every content push (rule 8).

## Lessons
- Plain-scalar YAML values cannot contain ': ' (verified: lean ...) - the
  whole-workflow failure mode is zero jobs + no logs; parse workflow YAML
  locally before push (standard rule 7, born this session).
- actions/cache only saves on job success: a flaky job that fails never
  seeds its cache; retries must propagate (ok=1 flags), never mask with
  trailing sleeps.
- rg -r REPLACES matches (the -r flag); my own greps showed '.n nav' for
  '.page-landing nav' - read flags before trusting output.

# Handoff - core course graph + axioms ledger, Lean in CI, theme-fab + mermaid repairs (2026-11-08)

## Deployed state
- run 42435368783 (0967a4361) SUCCESS: theme selector fix (fab was hidden on
  the whole landing site by `body.page-landing #wn-reader{display:none}`; the
  class is every page's base class). Verified with playwright: fab visible on
  /, /about/, /topics/ at 1208,828.
- run for 5e4c1a96e in flight: 61-chapter graph + axioms ledger + mermaid
  vendoring + lean-proof CI job. Verify mermaid renders (jsdelivr was 503 and
  every diagram on the fleet showed raw code) with
  `node /tmp/opencode/verify-deploy.mjs` (screenshots in /tmp/opencode/shots/).

## What landed (5f65d49b7..5e4c1a96e)
- docs/course-graph.json = single source of truth: 61 chapters, 12 stages,
  130 edges, 13 ledger debts (all paid), 2 axioms (classical-logic at A1,
  axiom-of-choice at D5 - modelled separately from debts, never discharged).
  New chapters: C4 primes/FTA, D5 choice/Zorn, G7 integration+FTC (fixes the
  misattributed FTC debt that pointed at the chain-rule chapter), G8
  contraction mapping/ODEs, J8 curvature.
- scripts/check-course-graph.py (gate): acyclicity, order, ledger payees,
  axiom validation, hub agreement. scripts/gen-course-map.py generates the
  hub map + stage-graph mermaid between markers (--check mode for CI later).
- scripts/gen-course-graph-lean.py -> lean/CourseGraph.lean: 61 per-chapter
  descent theorems + composite graph_ok; builds green locally on elan
  v4.29.0 (reinstall fixed the earlier corrupted-toolchain false alarms).
  NEW CI JOB lean-proof: elan + lake build before deploy-canary.
- Standard v2.3 (docs/pedagogy-core-course.md): axioms vs debts, generated
  ledger, hub page rewritten (the stale "Five Levels" framing is gone).
- Mermaid/web-vitals vendored same-origin (mermaid 11.17.2 UMD 3.5MB,
  web-vitals 4.2.4 IIFE) to public/vendor/ on all 49 sites via
  sync-shared PUBLIC_FILES; mermaid-render.js lazy-loads it only on pages
  with diagrams; Head.astro CDN tag + preconnect removed; CSP drops
  jsdelivr; 48 astro configs drop the jsdelivr dns-prefetch;
  lint-config-parity needle updated. mermaid-render.js/web-vitals.js are
  now sync-managed (8 sites were missing copies).
- biome excludes: lean/.lake, lake-manifest.json, docs/course-graph.json
  (generator output), **/public/vendor (third-party bundles).

## Open items (priority order)
1. Post-deploy: verify mermaid renders on math hub + a diagram-heavy page
   (tools/python), fab on landing, no jsdelivr requests, CSP not blocking
   /vendor/mermaid.min.js.
2. Stage A1 build (propositions/quantifiers/false-proof dissection) once the
   user blesses the 61-chapter DAG. Click-to-reveal mechanism (standalone
   stylesheet class, never inline CSS) needed before Stage A content.
3. gen-course-map.py --check is not yet a CI gate step (local + validator
   agreement only). Wire it into the gate next graph change.
4. Lean transitive-closure theorem over symbolic indices: skip; per-chapter
   certificates are complete for the data. Do not promise more in docs.
5. Search worker zero-results 43.2% lifetime; bot filter accumulating.

## Lessons (this session)
- Identical per-site blobs dedupe in git (one zlib stream): 49 x 3.5MB
  vendor copies cost ~1MB of pack. The sync-shared duplication pattern is
  cheap for identical assets, expensive only for divergent ones.
- biome formats JSON inside gitignored dirs if the file is tracked; and
  `rg -rn` REPLACES matches (the -r flag) - read flags before trusting
  grep-style output. Both caused false alarms this session.
- The "corrupted elan toolchain" was a red herring: the real bug was
  conjoining theorem NAMES where propositions belong
  (`deps_lt_A1 ∧ ...` vs the unfolded ∀ statements). Toolchain reinstall
  was unnecessary; the generated statement was the problem.

# Handoff - estate math repair, SEO fixes, search SLO, deploy gate unblocked (2026-11-01)

## Deployed state
- Deploy All Sites: SUCCESS (run 41385771451, 2026-11-02) - includes the
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
  never stripped - grep -c counted minified-HTML lines, not matches
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
1. Manual KaTeX repair list (61 files, .loop/known-issues-katex.md) - the
   bonding page still shows ~32 katex-error instances from the structural
   class; each needs human re-reading of the intended formula
2. GRAPH002 internal-linking program (991 pages, crawlkit baseline in
   docs/SEO-AUDIT-2026-11-01.md)
3. CANNIB001 triage (150 clusters) + DUP-CROSS strategy decision
   (differentiate vs cross-site canonicals) - business input needed
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
- 3B BUILT (930f2c5db): tangent vectors as derivations on GERMS (locality
  by construction, no bump functions); Hadamard proved via FTC +
  differentiation-under-integral (declared); derivation theorem (v_i =
  D(x_i)); chart transport iso + change-of-basis law; differential
  well-defined/Jacobian-in-charts/chain-rule; IFT on manifolds (local
  diffeo). Self-review caught: type-inconsistent germs in the transport
  (x_i o phi^-1 vs x_i o phi) - fixed.
- 3C BUILT (66d3524c2): dx^I as determinant evaluators; wedge on
  concatenated sequences so associativity is definitional; coordinate
  basis proposition (dual statement proved IN-PAGE - 1B Thm 5.4 is
  about vectors not forms, the draft's citation was wrong); d^2 = 0 via
  Clairaut (the one declared input); graded Leibniz; pullback
  commutation; coordinate independence of d on manifolds (Thm 3.2).
- 3D BUILT (c3a360edc): manifolds-with-boundary (structural boundary
  clause; invariance of domain flagged as the classical alternative);
  orientation via positive-Jacobian atlas; outward-first boundary
  orientation with Lemma 2.1 proved cleanly; chart + partition-of-unity
  integration (Fubini/change-of-variables/partitions declared); local
  Stokes on H^n with every sign audited (incl. the general-j_0 fix:
  missing index not always n; j_0 != n terms die over the whole line);
  generalised Stokes assembled through the partition; classical FTC/
  Green/divergence/Stokes derived as coordinate expansions.
- CORE COURSE LEVEL 3 COMPLETE: hub + 1A + 1B + 2A + 3A + 3B + 3C + 3D,
  linear dependency order, every theorem proved, <= 3 declared analysis
  inputs per page, all pointed at the RA track. NEXT: Level 4 (Schilling
  measure theory: sigma-algebras, Caratheodory, Lebesgue, convergence
  theorems, L^p), then Level 5 (Ullrich complex via forms; Bott-Tu de
  Rham; Aluffi algebra chapter 0).
- FULL AUDIT PASS DONE (8241c3faa..f9a7e9de2, 2026-11-07): all 8 pages
  re-verified; 7 findings fixed (1B subspace-generation gap -> new Thm
  1.6 + rank-nullity renumbered 1.7, char != 2 scope + Lemma 4.4
  converse, matrix-composition convention, 2A eps-bounding, 1A glyph +
  un-built term). Mechanical sweeps clean.
- DOGFOODING PASS DONE: header Sites catalogue 38/48 -> 48/48 (added
  economics, finance, accounting, programming, driving-eu/uk/us,
  language-tests, civics-tests, professional-certs); landing index +
  Layout nav completed, dead computing.wyattau.com link removed;
  vestigial Google Fonts preconnect + GA CSP/prefetch removed from
  shared + 44 _headers files; new gate check lint-site-nav-parity.js
  guards all 4 catalogue surfaces (biome-clean; biome check + sync
  -shared --check MUST be run locally before pushing - three gate
  failures were caused by skipping those).
- LIVE VERIFIED 2026-11-07: all 8 core-course URLs 200; landing +
  mathematics navs carry the new catalogue; CSP headers clean (only
  cloudflareinsights + search.wyattau.com allowances remain); search
  healthy, L3 terms (Hadamard lemma, exchange lemma, outward-first)
  all return results.
- OPEN: vendor mermaid + web-vitals off jsdelivr (Head.astro touches
  every page of 48 sites - dedicated rollout); Level 4 measure theory
  next content build; local commit d04e6d74e (3 prose handwave words)
  pushed and processing.
- Deploy note: deploy.yml uses a concurrency group - newer pushes cancel
  in-progress runs (5e412b0f5 run cancelled by the 5280534d9 run). Watch
  only the newest run; main is cumulative.
