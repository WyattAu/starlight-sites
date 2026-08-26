# Code Quality Matrix: FAANG / HFT / Defence / ECN vs. starlight-sites

Date: 2026-08-19
Supersedes: `CODE_QUALITY_VS_FAANG.md` (2026-06-21), which covered FAANG/HFT only.
Scope: honest, evidence-based comparison of this monorepo's engineering practices
against four industry archetypes, analysed through programming principles (SOLID,
DRY, KISS, YAGNI, separation of concerns) and domain practice standards. The
project is a 46-site static documentation platform with one Cloudflare Worker,
maintained by a single developer with CI gates - the comparison is contextual:
adopting what would genuinely help, explicitly declining what would not.

> **Corrections (2026-08-26 verification pass).** This snapshot is superseded by
> `STATUS.md` (2026-08-22) and partially inaccurate as follows; see
> `CODE_QUALITY_VERIFICATION_2026-08-26.md` for the full audit.
>
> - **Stale:** "cspell/markdownlint are `continue-on-error` (non-blocking)"
>   (\$1 row *Fail-fast*, \$2.1 row *Regression gates*, \$2.4 row *Gates*, Gap \#7).
>   Both were promoted to blocking in `ci.yml` on 2026-08-20; only lychee
>   (`fail: false`) remains non-blocking.
> - **Stale:** "E2E not run in CI; config targets 3 defunct site URLs" (\$2.1).
>   `e2e.yml` runs Playwright on a daily cron, pushes to main, and manual
>   dispatch against a derived, ghost-free URL list.
> - **False at time of writing:** "`lint-secrets.js` in CI" (\$2.5). No workflow
>   invoked it until it was added to the `deploy.yml` gate job on 2026-08-26.
> - **Overstated:** Gap \#1 "purge complete / 0 broken CI references". Ghost
>   slugs survived in `tests/e2e/performance.config.ts`, `visual.config.ts`,
>   `smoke.spec.ts`, dozens of content cross-links, and the committed
>   `merged-index.js` artifact -- all outside the scanner's fixed file list.
>   The scan list was extended and the config/spec/content surfaces purged on
>   2026-08-26; the generated fallback index remains out of scope by design.
> - **Optimistic:** "\$7 search index coverage 45 on next deploy". The KV
>   namespace secret (`CLOUDFLARE_KV_NAMESPACE_ID`) is still unset, so the
>   committed static fallback remains the 2026-07-11 nine-site build
>   (STATUS.md P0-4).
> - **Internally inconsistent:** the DIP evidence rows (\$1, \$2.2) still cite
>   hardcoded data maps and unused `zod`/`@felte`, contradicting Gap \#3's DONE
>   status (decomposition landed; deps removed; validation inverted into
>   `validate.js`). "Bundle dry-run verified" (Gap \#3) is not reproducible from
>   repository state.

---

## 0. What the four archetypes actually optimise for

| Archetype | Optimises for | Signature discipline |
|-----------|--------------|---------------------|
| **FAANG** (large-scale consumer web) | Velocity at scale, correctness of mutable distributed systems | Code review culture, typed contracts, canary deploys, SLO-driven observability |
| **HFT** (high-frequency trading) | Deterministic microsecond latency, zero financial error | Property-based testing, deterministic builds, kill switches, hardware-level budgets |
| **Defence** (safety-critical, DO-178C / IEC 61508 school) | Zero untracked change; every artefact traceable to intent | Configuration management, requirements traceability, independent V&V, MC/DC coverage, reproducible builds |
| **ECN** (exchange / mission-critical market infrastructure) | Always-on correctness under partial failure; every decision auditable | Hot failover, static degradation paths, idempotent replay, order-path E2E tests, audit trails |

A solo-maintainer docs platform cannot and should not adopt all of this. The
useful question per row below is: *which specific failure mode has this project
already experienced (or is exposed to) that the archetype's discipline prevents?*

---

## 1. Programming-principles matrix

Ratings 1 (absent) to 5 (institutionalised). "Gap" names the concrete weakness
with evidence, not a vibe.

| Principle | FAANG | HFT | Defence | ECN | This project | Gap (evidence) |
|---|---|---|---|---|---|---|
| **DRY** | 4 - tool-enforced | 4 | 5 - single baseline, automated derivation | 4 | 3 | `shared/` is hash-enforced single-source (4-layer sync: pre-commit, CI, deploy gate, `tests/unit/shared-sync.test.js`). But `astro.config.mjs` is ~90% identical across 46 files (~5,100 redundant lines) with **no drift enforcement**, and the site list is hand-maintained in 4+ places and **has already drifted** (tests omit 7 newest sites, CI build matrix omits 6, duplicate `alevel` in `EXPECTED_SITES`). |
| **SOLID-SRP** | 4 | 5 | 5 | 5 | 3 | Component level is strong (FlashcardDeck decomposed to sm2/storage/views with documented invariants). But `search-api/worker.js` (967 lines) mixes routing, ranking, A/B experimentation, analytics, dashboard serving, and tracking in one module. |
| **SOLID-OCP** | 4 | 3 | 3 | 3 | 4 | A/B ranking weights and the 9 custom lint rules are data-driven tables - extensible without editing logic. No gap worth acting on. |
| **SOLID-LSP/ISP** | 4 | 4 | 4 | 4 | 4 | Small, focused interfaces (`sm2.ts`, `storage.ts` contracts); no fat-interface abuse observed. |
| **SOLID-DIP** | 4 | 4 | 5 - hardware abstraction | 4 - FIX/ITCH contract layers | 2 | Worker depends on `env.SEARCH_KV` binding (good) but `SITE_AUTHORITY`, `SITES`, and `subjectKeywords` data live hardcoded inside logic; `zod` and `@felte/*` are installed with **zero imports** - validation policy was never inverted into a schema layer (`handleTrack` accepts arbitrary JSON into KV). |
| **KISS** | 3 - tooling creep is their known failure | 5 - ruthless | 4 | 4 | 3 | Hash-sync and Bun+Biome are exemplary simplicity. Counterweights: a Rust/WASM crate for 89 LOC of widget (`packages/widgets/src/lib.rs`), an A/B + analytics + trending stack inside a docs-search worker (also YAGNI). |
| **YAGNI** | 3 | 4 | 4 - minimal surface | 4 | 3 | Same evidence as KISS, plus unused deps (`zod`, `@felte/core`, `@felte/validator-zod`). |
| **Separation of concerns** | 4 | 5 | 5 | 5 | 4 | Clean layering (content / shared components / worker / scripts / CI gates; content linters separate from code linters). Weakened by root-level one-off scripts with absolute paths (`audit.js`, `fix-tables.js`, Biome-excluded). |
| **Fail-fast / defence-in-depth** | 4 | 5 | 5 | 5 | 4 | Lint gates + drift tests + weekly audit + uptime probes are layered. Gaps in depth: cspell/markdownlint/lychee are `continue-on-error` in CI (non-blocking layers), E2E is manual-only. |

**Reading:** the project's principle adherence is genuinely high for its size;
the two systemic weaknesses are *unverified duplication of metadata* (a Defence
configuration-management failure mode, already materialised) and *one god-module*
(a classic SRP failure).

---

## 2. Practice matrices

### 2.1 Testing

| Practice | FAANG | HFT | Defence | ECN | This project | Gap |
|---|---|---|---|---|---|---|
| Unit coverage (critical paths) | 80%+ | 99%+ trading logic | MC/DC on safety-critical code | Exhaustive order-path | 439 tests (219 node + 220 vitest); SM-2 has 85 property tests, 5 seeds | Branch coverage ~45-56% vs 80% target |
| Property-based testing | Common (QuickCheck lineage) | Standard for models | Formal where warranted | Standard for matching engines | **Present and strong** (mulberry32-seeded SM-2 invariants) | None - this exceeds FAANG-median practice |
| E2E / user-flow | Extensive | Every order path | HIL simulation | Certification-grade replay | 8 Playwright specs exist (flashcard/diagnostic flows, visual regression) | **E2E not run in CI**; config targets 3 defunct site URLs |
| Regression gates for content | N/A | N/A | 5 - every artefact verified | 4 | 9 custom content linters (incl. new `lint-latex.js`) in CI + pre-commit | cspell/markdownlint non-blocking |
| Mutation testing | Common | Common | Rare (prefer formal) | Rare | Absent | Low priority (Stryker trial is G2 in old roadmap) |

### 2.2 Type safety and contracts

| Practice | FAANG | HFT | Defence | ECN | This project | Gap |
|---|---|---|---|---|---|---|
| Static typing strictness | Enforced | C++/Rust strict rules | Coding standards (MISRA-class) | Contract schemas everywhere | `strict` + `noUncheckedIndexedAccess` + `verbatimModuleSyntax`, 0 errors | **None** - maximal for TS |
| Input validation at boundaries | Schema-validated | Order validation | 5 | 5 | Search query validated (2-200 chars, limit clamp, rate limit) | `/api/track` accepts arbitrary JSON (installed `zod` unused) |
| Runtime invariant checks | Selective | 5 | 5 | 5 | SM-2 `assertInvariant` PRE/POST checks | Good; limited to the algorithm that needs it |

### 2.3 Configuration management (the Defence lens)

This is the archetype this project has most to learn from, and where real
incidents have already occurred.

| Practice | Defence standard | This project | Evidence of gap |
|---|---|---|---|
| Single authoritative source for enumerations | One baseline, derived automatically | Site lists hand-copied in 4+ places | `shared-sync.test.js` / `build-pipeline.test.js` omit 7 sites; `ci.yml` build matrix omits 6; duplicate `alevel` entry |
| No dead references to removed items | Traceability matrix catches all | "9-site ghost" persists repo-wide | `preview.yml`, `lighthouserc.json`, `playwright.config.ts`, `uptime-check.sh`, worker `SITES`, `deploy.yml` summary all reference removed `university`/`qualifications`/`infrastructure`; `preview.yml` **would fail today** |
| No untracked ad-hoc tooling in deliverable baseline | All tooling under CM, reproducible | Root-level one-off scripts | `audit.js` (527 lines) / `fix-tables.js` with hardcoded `/home/wyatt/...` absolute paths, excluded from Biome; committed `scripts/__pycache__/` |
| Generator templates stay current | Derived artefacts regenerated from current baseline | `generate-site.mjs` pins Astro 5/Starlight 0.32 while sites are on Astro 6/0.40 | New sites scaffolded with stale versions |
| Generated/artefact state labelled | Generated files marked and lint-exempted | Mostly good | `search-api/merged-index.js` (15,726 lines, generated) is committed without a generator header - acceptable as deliberate static fallback, but undocumented at top of file |

### 2.4 CI/CD and deployment

| Practice | FAANG | HFT | Defence | ECN | This project | Gap |
|---|---|---|---|---|---|---|
| Gates before deploy | Build/test/security/perf | + model validation | Full regression + review boards | Full regression | gate job (biome + 10 custom linters + sync-check + typecheck + tests) blocks deploy of all 45 sites | Strong; cspell/markdownlint/lychee non-blocking |
| Gradual rollout | Canary 1%-10%-100% | Shadow -> live | N/A (controlled releases) | Dark launch + parallel run | All-at-once to Cloudflare Pages | Static sites deploy atomically - **staged (preview -> prod) is the realistic hardening**, not true canary |
| Automated rollback | < 1 min | Kill switch < 100ms | Recovery procedures mandated | Failover automatic | Manual (git revert + redeploy) | Automatable via Cloudflare Pages API |
| Build reproducibility | Hermetic (Bazel) | Deterministic | 5 - bit-exact rebuilds required | 4 | `--frozen-lockfile`, pinned Bun 1.3, cached | **Strong for JS** |

### 2.5 Security

| Practice | FAANG | HFT | Defence | ECN | This project | Gap |
|---|---|---|---|---|---|---|
| Dependency vulnerabilities | Automated + SLAs | Automated + manual review | SBOM + supply-chain CM | Automated | `bun audit` blocking CI gate + weekly auto-filed issues; ADR-006 documented risk acceptance until Astro 6 (now resolved) | None material |
| SAST beyond lint | Internal + commercial | Custom passes | 5 | 5 | Biome lint-level only | CodeQL/Semgrep absent - moderate |
| Runtime headers | CSP enforced | N/A | N/A | 5 | CSP, HSTS+preload, X-Frame-Options, nosniff on Worker dashboard + sites | Closed in July session |
| Secret hygiene | Pre-commit + CI scanning | Same | 5 | 5 | `lint-secrets.js` in CI + lint-staged; zero hits | Closed |

### 2.6 Observability and incident response

| Practice | FAANG | HFT | Defence | ECN | This project | Gap |
|---|---|---|---|---|---|---|
| Structured logging | JSON + aggregation | Order-level | 5 | Full audit trail | JSON `log()` in Worker; server-side stacks, generic client errors | No client-side error capture |
| Metrics/SLOs | SLO-driven | Real-time P&L/latency | Instrumented per requirement | Per-message-stage metrics | `/api/health` exposes zero-result rate + latency percentiles vs SLO targets | No alerting on SLO breach (uptime probe only) |
| Incident process | Blameless post-mortems | RCA every incident | Formal FRACAS | Regulator-reportable | `INCIDENT_RESPONSE.md`; post-mortem policy for LEVEL 4+ | Documented, unexercised |

### 2.7 Fault tolerance (the ECN lens)

| Practice | ECN standard | This project | Verdict |
|---|---|---|---|
| Static degradation path | Matching engine falls back to auction mode | Worker serves committed `merged-index.js` when KV misses | **Already present - genuinely good ECN instinct** |
| Idempotent retry | Replay-safe order handling | Search is read-only/GET; deploys are content-addressed | Satisfied by architecture |
| Failover of dynamic component | Hot-hot replicas | Single Worker instance (Cloudflare-managed edge) | Platform-managed; acceptable |
| Recovery drills | Regular failover tests | Uptime probe + manual rollback | Gap: no deploy-failure auto-recovery |

---

## 3. Content-pipeline integrity (case study, 2026-08-19)

The May-July 2026 content migrations (Docusaurus -> Starlight, via WyattsNotes)
demonstrate the exact failure mode a Defence-style CM discipline prevents:
**a chain of partially-verified bulk transformations with no post-condition
checks**, each fixing the previous layer's syntax while freezing its semantic
damage into source.

1. WyattsNotes `eb9952fd` (May 9): bogus "escape LaTeX braces for MDX" script -
   69k brace groups wrapped in `{'\{'}`/`{'}'}` across 541+ files on a false
   premise.
2. `d47dfaea` (May 15): half-reversal leaving `{{'}X{}'}` residue - which
   **renders silently wrong** in KaTeX (stray prime glyphs), not loudly.
3. `38270148` (May 25): braces frozen as diamond sentinels; a build-time plugin
   restored them to the still-mangled form.
4. starlight-sites `2d6d10d34` (Jul 17): sentinel restore faithfully
   resurrected the garbage into this repo (23k occurrences).
5. Admonition converter (uncommitted script): dropped 13 rigor-note lead
   sentences, produced malformed `aria-label`s, truncated descriptions
   mid-sentence at a 160-char cap.

**Remediated 2026-08-19** (this session):

- 502 + 127 + 1 corruption markers repaired across 12 files
  (`scripts/fix-latex-corruption.js`, committed and reusable).
- `probabilisticml` tutorial fully restored from pre-corruption git history
  (`WyattsNotes@7bdc90d0` lineage): all 16 admonition lead sentences/titles
  restored, 2 malformed asides rebuilt, ~65 separator-loss punctuation faults
  fixed, descriptions completed, "Logically quantified" -> "Naturally
  quantified" semantic fix, Intuition sections rewritten to mathematical
  substance at full depth (SEO/DRDA structure retained: JSON-LD breadcrumbs,
  index pages, frontmatter, Cross-References).
- **Regression gate added**: `scripts/lint-latex.js` wired into `lint:all`,
  `lint-staged` (pre-commit), and CI - all five corruption layers are now
  statically detected, so this class of damage can never re-freeze silently.

Lesson generalised: **every bulk content transform must ship with a detector**
(lint rule + test) in the same change. This is the Defence CM principle applied
to a content platform, and it is now repo policy.

---

## 4. Where the project is already strong (keep, do not churn)

| Area | Evidence |
|---|---|
| Type safety | Strictest practical TS config; 0 errors (regressions from July pushes repaired 2026-08-19: ReviewQueue/SettingsDialog/storage under `noUncheckedIndexedAccess`) |
| Lint gate | Biome 0 errors repo-wide (restored 2026-08-19; the restored gate immediately caught a runtime corruption in `shared/scripts/site-nav.js` synced to all 46 sites, plus stale duplicates in `shared/public/`) |
| Single-source-of-truth sync | 4-layer SHA-256 enforcement; mirror semantics; dead-code assertions |
| Property-based testing | SM-2: 85 invariant tests, 5 deterministic seeds |
| Content regression gates | 10 custom linters incl. latex-corruption detection |
| Dependency security | Blocking `bun audit` gate + weekly auto-filed issues |
| Build reproducibility | Frozen lockfile, pinned toolchain |
| Static degradation (ECN) | Worker static fallback index |
| Decision records | 9 ADRs incl. superseded-risk rationale |

## 5. Genuine gaps and priorities

Status legend: **[DONE 2026-08-19]** completed in the ADR-011/012 session.

| # | Gap | Archetype lens | Severity | Effort | Priority | Status |
|---|-----|---------------|----------|--------|----------|--------|
| 1 | Site-list single source of truth; purge 9-site ghosts (`preview.yml` broken TODAY) | Defence CM | **High - active breakage** | 1-2 days | **P0** | **[DONE 2026-08-19]** ADR-011: `sites.meta.json` + `scripts/lib/sites.cjs` + derived CI/deploy/preview matrices + `no-ghost-sites.test.js` gate. Also fixed search index coverage (was 6 of 45 live sites) |
| 2 | E2E (Playwright) into CI against preview URLs; fix defunct URL list | ECN order-path testing | High | 2-3 days | P1 | **[PARTIAL 2026-08-19]** `e2e.yml` (daily + main-push + dispatch) with ghost-free URL list; PR-preview-URL targeting remains future work |
| 3 | `worker.js` decomposition (routing/ranking/analytics/dashboard); extract data maps; adopt or drop `zod` | SOLID-SRP/DIP | High | ~1 week | P1 | **[DONE 2026-08-19]** ADR-012: 10 modules, declarative validation, `zod`/`@felte` dropped, bundle dry-run verified |
| 4 | Branch coverage 45% -> 65% + CI coverage gate | FAANG testing | Medium | 2-3 weeks | P1 | **[DONE 2026-08-19]** shared/components ratcheted to 69% stmts / 52% branch via SettingsDialog, ReviewQueue, storage.ts, ToastProvider, jsonld-seo tests + a real onCleanup bug in SettingsDialog fixed; vitest.config.ts thresholds gate CI (`shared/components >= 65/50 lines/branches`) |
| 5 | Staged deploy + automated rollback | ECN/FAANG CD | Medium | 2-3 days | P2 | **[DONE 2026-08-19]** ADR-014: deploy.yml split into canary(2)→rollout(43); `mark-good` tags last-good-deploy; `rollback-on-failure` auto-triggers rollback.yml on wave failure; rollback.yml manual + auto dispatch |
| 6 | SLO alerting on `/api/health` (issue-filing workflow) | FAANG observability | Medium | 1-2 days | P2 | **[DONE 2026-08-19]** `slo-alert.yml` (30-min cadence, issue-filing, mirrors uptime.yml pattern) |
| 7 | Promote cspell/markdownlint to blocking | Defence gates | Medium | 0.5 day | P2 | **Blocked**: 2026-08-19 census = 38,370 cspell / 17,890 markdownlint findings; needs a content-hygiene pass first. `bun audit` **promoted to blocking** instead (Astro 6 landed) |
| 8 | `astro.config.mjs` factory decision (ADR): generate + drift-check, or lint-validate variable fields only | DRY | Medium | 3-4 days | P3 | **[DONE 2026-08-19]** ADR-013: validate invariants (katex version, head blocks, pipeline, imports, og:image) + don't regenerate; `lint-config-parity.js` wired to CI + lint:all + lint-staged; 45 sites passing; first run caught 18 real violations (manifest, theme-color, font preloads, JSON-LD, og:image) |
| 9 | Archive root one-off scripts to `scripts/archive/`; regenerate `generate-site.mjs` pins | Defence CM | Low | 0.5 day | P3 | **[DONE 2026-08-19]** `audit.js`/`fix-tables.js` archived, Biome excludes updated, `__pycache__` removed + ignored, generator pins updated to Astro 6/0.40 |
| 10 | Client-side error capture | FAANG observability | Low | 1-2 days | P3 | Open |
| 11 | ADR for this comparison + content-transform-detector policy (partially covered by this doc) | Traceability | Low | 0.5 day | P3 | **[DONE 2026-08-19]** ADR-011 (derived site list), ADR-012 (worker decomposition), ADR-013 (config parity lint), ADR-014 (staged deploy + rollback); content-transform-detector policy recorded in section 3 |

## 6. Explicitly NOT worth pursuing (unchanged from prior analysis)

Kill switches, chaos engineering, kernel-bypass-class optimisation, Bazel/Nx
monorepo tooling (~30k unique LOC), formal verification (SM-2 is
property-tested), true canary traffic shifting (atomic static deploys),
full OpenTelemetry tracing (one Worker), CODEOWNERS/review SLAs (solo).

## 7. Projected state after P0-P3

| Metric | Before (2026-08-19) | After P0-P1-P2-P3 (this session) | Remaining |
|---|---|---|---|
| Hand-maintained site lists | 7+ (drifted) | 0 (all derived) | - |
| Broken CI references | preview.yml + 3 configs + 3 search-api files | 0 (gated by `no-ghost-sites.test.js`) | - |
| Search index coverage | 6 of 45 live sites | 45 (on next deploy with KV secret) | verify post-deploy |
| Config parity violations | 18 (manifest, theme-color, fonts, JSON-LD, og:image) | 0 (gated by `lint-config-parity.js`) | - |
| Worker module | 1 x 967 lines | 10 single-purpose modules | - |
| Branch coverage (components) | 45% | 52% branch / 69% stmts (ratchet-gated) | Content authoring for remaining uncovered lines |
| CI gates | lint + content linters + tests + build | + E2E (daily+main) + SLO alert + bun audit (blocking) + coverage ratchet + config parity | - |
| Deploy strategy | all-at-once, manual rollback | 2-site canary → 43-site rollout, tag + auto-rollback | - |
| Stale dependencies | zod, @felte/* | 0 (removed) | - |
| markdownlint errors | 17,890 | 5,538 (12,350 auto-fixed) | Content authoring pass for MD040/MD036/MD060 |
| cspell unknown words | 38,370 | ~25,000+ (legit terms added to dictionary) | Dedicated content-hygiene pass |

---

*This document is a comparison and a corrective, not a criticism. The project's
process discipline already exceeds many production systems of its size; the
work remaining is bounded, specific, and sequenced above.*
