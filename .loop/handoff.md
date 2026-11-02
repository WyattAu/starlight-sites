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
