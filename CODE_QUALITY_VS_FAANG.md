# Code Quality Comparison: FAANG / HFT vs. Wyatt's Notes

Date: 2026-06-21
Scope: Honest comparison of this project's code quality practices against
industry leaders, with a gap-closing roadmap. The project is a 2000-page
static documentation site with a search API — the comparison is contextual,
not aspirational for the wrong reasons.

---

## 1. Comparison matrix

Rating scale: **1** (absent) → **5** (industry-leading). Ratings are
contextual — a documentation site doesn't need HFT-level practices, but
there are genuine gaps where FAANG-level practices would improve the project.

### 1.1 Testing

| Practice | FAANG | HFT | This project | Gap |
|----------|-------|-----|--------------|-----|
| Unit test coverage (target) | 80%+ critical paths | 99%+ trading logic | 16.9% aggregate, 56% components | **Major** — aggregate dragged by uncovered scripts/search-api |
| Branch coverage target | 80%+ | 95%+ | 38% component branches | **Major** — FlashcardDeck views under-covered |
| E2E testing | Extensive (Selenium, Playwright, internal tools) | Exhaustive (every order path) | Playwright for GUI snapshots + accessibility | **Moderate** — E2E covers visual regression but not user flows |
| Property-based testing | Used (Google's internal tools, Meta's QuickCheck) | Standard for model validation | SM-2 has QuickCheck-style tests (mulberry32-seeded) | **Already strong** — 47 deterministic property tests |
| Mutation testing | Standard at FAANG (Meta's Sapienz, Google's Mutant) | Standard for trading logic | Not implemented | **Gap** — would validate test assertion strength |
| Performance testing | Per-service SLOs tracked | Microsecond budgets enforced | Lighthouse in CI (informational) | **Moderate** — no SLO tracking, no regression detection |
| Concurrency testing | Extensive race-condition testing | Critical (lock-free structures) | Minimal (SolidJS signals are single-threaded) | **N/A** — island architecture avoids concurrency |
| Test isolation | Enforced (no shared mutable state) | Enforced (deterministic replay) | **Strong** — `beforeEach`, no test interdependence | **Already strong** |

### 1.2 Type Safety

| Practice | FAANG | HFT | This project | Gap |
|----------|-------|-----|--------------|-----|
| Language strictness | Strict TypeScript everywhere; Go/Rust for critical paths | C++ with strict rules; Rust for new code | `strict` + `noUncheckedIndexedAccess` + `verbatimModuleSyntax` | **Already strong** — maximally strict for a TS codebase |
| Type coverage | Near-100% at FAANG (enforced by CI) | 100% for trading code | 0 type errors after the audit; `noUncheckedIndexedAccess` enforced | **Already strong** |
| Null safety | Enforced via language features (Kotlin nullability, Rust Option) | Enforced via Rust/Modern C++ | `strictNullChecks` + `noUncheckedIndexedAccess` | **Already strong** |
| Type-level programming | Used where appropriate (not over-used) | Minimal (performance focus) | Appropriate — Kobalte generics, utility types, no over-engineering | **Already strong** |
| Formal verification | Used for critical paths (Google's Fuchsia, Amazon's s2n-tls) | Standard for trading models | Not applicable (no algorithms requiring formal proof) | **N/A** |

### 1.3 Code Review

| Practice | FAANG | HFT | This project | Gap |
|----------|-------|-----|--------------|-----|
| Review requirement | 2+ approvals required | 2+ for trading code; 1 for tooling | Solo developer — no formal review | **Structural** — solo project, but PR-based workflow with CI gates |
| Automated checks on PR | Extensive (lint, test, build, security, performance) | Extensive + latency checks | Biome + test + typecheck + build (9-site matrix) | **Already strong** — the CI gate is comprehensive |
| Review time SLA | < 24h at FAANG | < 4h for trading code | N/A (solo) | **N/A** |
| Code ownership | CODEOWNERS enforced; auto-assignment | CODEOWNERS for critical paths | No CODEOWNERS (solo dev) | **N/A** — solo project |
| Large PR policy | PRs > 400 LOC flagged for split | PRs > 200 LOC require extra scrutiny | Some commits are large (sync-generated) but atomic | **Acceptable** — sync-generated bulk changes are inherently large |

### 1.4 Static Analysis

| Practice | FAANG | HFT | This project | Gap |
|----------|-------|-----|--------------|-----|
| Linter | Internal tools (Google's Tricorder, Meta's Infer) | Clang-tidy, custom lint passes | Biome 2.5.0 (recommended preset + custom rules) | **Already strong** for a single-developer project |
| SAST (security) | Internal tools + commercial (Fortify, Checkmarx) | Custom + commercial | Biome (lint-level only) | **Moderate** — no dedicated SAST tool (CodeQL, Semgrep) |
| DAST | Automated scanning of deployed services | Active monitoring of production | N/A (static sites, no runtime attack surface) | **N/A** for static sites; the search Worker is the only dynamic surface |
| Secret detection | Pre-commit hooks + CI scanning (GitLeaks, TruffleHog) | Pre-commit + CI + runtime monitoring | `bun audit` + high-signal regex scan (zero hits) | **Moderate** — no pre-commit secret scanning |
| License scanning | Automated (FOSSA, Snyk) | Automated + manual review | `bun audit` (partial) + manual review | **Moderate** — no automated license compliance |

### 1.5 CI/CD

| Practice | FAANG | HFT | This project | Gap |
|----------|-------|-----|--------------|-----|
| Pipeline stages | Build → Test → Security → Performance → Staging → Canary → Prod | Build → Test → Model Validation → Shadow → Prod | Gate (lint+test+build) → Deploy (all 9 sites simultaneously) | **Moderate** — no staging/canary; all sites deploy together |
| Deployment strategy | Canary (1% → 10% → 100%); feature flags | Shadow trading → live with kill switch | All-or-nothing deploy to Cloudflare Pages | **Moderate** — no canary/gradual rollout |
| Rollback speed | Automated rollback in < 1 min | Kill switch in < 100ms | Manual rollback (git revert + redeploy) | **Moderate** — no automated rollback |
| Build reproducibility | Hermetic builds (Bazel, Blaze) | Deterministic builds (exact compiler flags) | `--frozen-lockfile`, pinned Bun version | **Already strong** for a JS project |
| Cache strategy | Aggressive (remote cache at scale) | Minimal (deterministic builds) | Bun cache + GitHub Actions cache | **Acceptable** — sufficient for the project size |
| PR preview | Deploy preview for every PR | N/A (internal tools) | Cloudflare Pages preview deployment | **Already strong** |

### 1.6 Security

| Practice | FAANG | HFT | This project | Gap |
|----------|-------|-----|--------------|-----|
| Threat modeling | STRIDE per feature; threat review for new services | Extensive (financial fraud, market manipulation) | Not formally done (static site has minimal attack surface) | **Acceptable** — the search Worker is the only dynamic surface |
| Penetration testing | Regular (internal red team + external) | Regular + continuous | Not done | **Low priority** — static site; the search Worker could benefit |
| Dependency scanning | Automated (Dependabot, Snyk, internal) | Automated + manual review | `bun audit` CI gate + weekly workflow | **Already strong** — blocking CI gate + automated weekly scan |
| CSP headers | Enforced | Enforced | Not implemented (static sites) | **Low priority** — Cloudflare provides some protection |
| Input validation | Comprehensive (SQL escaping, XSS prevention, etc.) | Comprehensive (order validation, risk checks) | Worker: `esc()` for HTML; search: query trimmed + limit clamped | **Acceptable** for the attack surface |

### 1.7 Performance

| Practice | FAANG | HFT | This project | Gap |
|----------|-------|-----|--------------|-----|
| Latency budgets | Per-service SLOs (p50/p95/p99) | Microsecond budgets enforced | Warm TTFB < 200ms (measured) | **Moderate** — no p99 tracking, no automated regression |
| Core Web Vitals | Tracked in production (Lighthouse CI) | N/A (not web-facing) | Lighthouse CI in PR pipeline (informational) | **Already present** — could promote to blocking |
| Resource budgets | Per-service memory/CPU limits | Extreme (cache-line optimization) | Bundle size tracking exists (ROADMAP Phase C) | **Acceptable** — sufficient for the scale |
| Caching strategy | CDN + application-level caching | Kernel bypass, memory-mapped files | Cloudflare edge caching + aggressive static caching | **Already strong** for a static site |
| Performance regression detection | Automated (Google's Tricorder, internal dashboards) | Automated with sub-second alerts | Lighthouse CI (informational, not blocking) | **Moderate** — could promote to blocking |

### 1.8 Architecture

| Practice | FAANG | HFT | This project | Gap |
|----------|-------|-----|--------------|-----|
| Modular design | Enforced (monorepo with clear module boundaries) | Extreme (every component independently testable) | **Strong** — shared/ single-source-of-truth, sync SOP, god-files split | **Already strong** |
| API contracts | Typed APIs (protobuf, gRPC, Thrift) | Typed APIs (FIX, ITCH, proprietary protocols) | Typed interfaces (TypeScript), Astro config contracts | **Already strong** for the stack |
| Documentation | Comprehensive (design docs, ADRs, runbooks) | Comprehensive (trading logic documented) | 6 ADRs, ROADMAP, content standards, INCIDENT_RESPONSE | **Moderate** — could add more ADRs for recent decisions |
| Backward compatibility | Semantic versioning, deprecation periods | Strict versioning (binary compatibility) | No published API (static site) | **N/A** |
| Dependency direction | Enforced (no circular deps, strict layering) | Enforced | **Strong** — flat shared/ tree, no circular deps, drift enforcement | **Already strong** |

### 1.9 Incident Response

| Practice | FAANG | HFT | This project | Gap |
|----------|-------|-----|--------------|-----|
| On-call rotation | 24/7 on-call with escalation | 24/7 on-call; every trader monitors | Solo developer (no rotation possible) | **N/A** — solo project |
| Incident classification | SEV1-4 with SLAs | SEV1 (market impact) with kill-switch | INCIDENT_RESPONSE.md exists (rollback procedures) | **Moderate** — documented but no SLA/escalation |
| Post-mortem process | Blameless post-mortems; action items tracked | Root-cause analysis for every incident | LEVEL 4+ errors require post-mortem (ROADMAP) | **Already strong** — formal process documented |
| MTTR target | < 30 min for SEV1 | < 1 min for kill switch | Not tracked | **Low priority** — solo project, MTTR is the developer's time |
| Uptime monitoring | Comprehensive (Datadog, PagerDuty, custom) | Real-time (sub-second) | `uptime.yml` (6-hourly probes) | **Acceptable** — sufficient for a documentation site |

### 1.10 Observability

| Practice | FAANG | HFT | This project | Gap |
|----------|-------|-----|--------------|-----|
| Logging | Structured logging (JSON); centralized log aggregation | Detailed order-level logging | `console.error` in Worker; Cloudflare Worker logs | **Moderate** — no structured logging, no log aggregation |
| Metrics | Prometheus/Datadog/custom dashboards | Real-time P&L, latency, fill rates | Search analytics (zero-result rate, latency); web-vitals | **Moderate** — no unified dashboard |
| Alerting | Automated alerts on SLO violations | Automated alerts on risk limits, latency spikes | `uptime.yml` (6-hourly HTTP checks) | **Moderate** — no alerting on SLO violations |
| Distributed tracing | OpenTelemetry / Jaeger / Zipkin | Custom tracing for order lifecycle | Not implemented | **Low priority** — static site + simple Worker |
| Error tracking | Sentry / Bugsnag / custom | Custom error tracking with categorization | Cloudflare Worker logs (stdout) | **Moderate** — no client-side error tracking |

---

## 2. Summary: Where the project is strong vs. FAANG

The project is **genuinely strong** in several areas that many open-source projects neglect:

| Area | Strength | Evidence |
|------|----------|----------|
| **Type safety** | Maximally strict for a TS codebase | `strict` + `noUncheckedIndexedAccess` + `verbatimModuleSyntax`; 0 type errors |
| **Lint/formatting** | Clean, enforced | Biome with 0 errors across 638 files; pre-commit hooks |
| **Dependency security** | Blocking CI gate + weekly audit | `bun audit` blocks deploys; `audit.yml` opens issues |
| **Build reproducibility** | Hermetic for a JS project | `--frozen-lockfile`, pinned Bun version, cached installs |
| **Architecture** | Single-source-of-truth, drift enforcement | `sync-shared.mjs` with byte-parity CI tests |
| **TypeScript** | 0 errors with strictest flags | Root tsconfig with all strict flags enabled |
| **Testing (property-based)** | Deterministic, seeded | SM-2 tests with mulberry32 PRNG across 5 seeds |
| **Regression prevention** | Comprehensive guards | `no-ifm-shims`, `no-literal-icons`, `shared-sync`, `lint-no-emoji` |

## 3. Summary: Where the project has genuine gaps vs. FAANG

| Gap | Severity | Effort to close | Priority |
|-----|----------|-----------------|----------|
| **Test coverage (38% branch)** | High | 2-3 weeks (FlashcardDeck views + edge cases) | P1 |
| **No canary/gradual deploy** | Medium | 1-2 days (Cloudflare split testing or staging) | P2 |
| **No automated rollback** | Medium | 1 day (Cloudflare API rollback script) | P2 |
| **No structured logging** | Medium | 1 day (Cloudflare Workers JSON logging) | P2 |
| **No pre-commit secret scanning** | Medium | 0.5 day (GitLeaks or TruffleHog hook) | P1 |
| **No SLO tracking / alerting** | Low-Medium | 1-2 days (Lighthouse CI blocking + alert) | P2 |
| **No mutation testing** | Low | 2-3 days (Stryker or similar; validates test quality) | P3 |
| **No CODEOWNERS** | N/A | Solo project — not applicable | N/A |
| **No DAST** | N/A | Static site — no runtime attack surface | N/A |

## 4. What is NOT a gap (and should NOT be pursued)

Several FAANG/HFT practices are **irrelevant** for this project and pursuing them would waste time:

| Practice | Why it's irrelevant |
|----------|-------------------|
| Canary deploys (1% → 10% → 100%) | Static sites deploy atomically; there's no state to gradually shift traffic to |
| Kill switches (HFT) | No financial risk from a documentation site; the uptime probe + rollback is sufficient |
| Chaos engineering (Netflix) | No microservices to inject failures into; the Worker is the only dynamic surface |
| Kernel bypass networking | Not applicable to a static site |
| Monorepo at scale (Google's 86M LOC) | This is ~50K LOC of code + 2000 content files; monorepo tooling (Bazel, Nx) would add complexity without benefit |
| Formal verification (Lean4/Coq) | No algorithms requiring formal proof; SM-2 is validated by property-based tests |
| A/B testing framework | Already exists for search ranking; not needed for static content |
| Real-time distributed tracing | Static site + simple Worker; OpenTelemetry would be overkill |

---

## 5. Gap-closing roadmap

### Phase G1: Quick wins (1 week)

These are high-value, low-effort improvements that close the most impactful gaps.

| Item | Effort | Impact | Details |
|------|--------|--------|---------|
| **Promote Lighthouse CI to blocking** | 0.5 day | Performance regression prevention | Change `continue-on-error: true` to `false` in ci.yml for the Lighthouse step. Add a baseline score threshold (e.g., >= 90). |
| **Add pre-commit secret scanning** | 0.5 day | Prevent accidental credential commits | Add GitLeaks or TruffleHog as a pre-commit hook. Scan for API keys, tokens, passwords. |
| **Add structured logging to Worker** | 1 day | Observability | Replace `console.log`/`console.error` with JSON-structured logs. Add request ID correlation. Cloudflare Workers capture stdout as structured logs. |
| **Document recent ADRs** | 0.5 day | Architecture traceability | Add ADRs for: R4 Astro 6 upgrade, the `client-only-directives.mjs` remark plugin, the `solid-sonner` lazy import, and the ViewTransitions finding. |

### Phase G2: Testing hardening (2 weeks)

Close the coverage gap and improve test quality.

| Item | Effort | Impact | Details |
|------|--------|--------|---------|
| **FlashcardDeck branch coverage** | 2-3 days | Branch coverage 38% → 60%+ | Test all view states (deck/review/stats/settings), edge cases (empty deck, last card, zero streak), and the SM-2 save/load round-trip. |
| **DiagnosticTest edge cases** | 1-2 days | Branch coverage improvement | Test: empty question pool, single-question pool, all-weak-topics, all-strong-topics, concurrent rating. |
| **E2E user flows** | 2-3 days | User-journey coverage | Add Playwright tests for: flashcard review flow (open → flip → rate → next → complete), practice problem submission, locale switching. |
| **Promote coverage gate** | 0.5 day | CI enforcement | After coverage improvements, promote to a CI gate: fail under 60% branch coverage. |
| **Mutation testing trial** | 2-3 days | Test quality validation | Run Stryker or equivalent on FlashcardDeck and DiagnosticTest. Identify weak assertions. |

### Phase G3: Deployment hardening (1 week)

Improve the deployment pipeline.

| Item | Effort | Impact | Details |
|------|--------|--------|---------|
| **Staged deployment** | 1-2 days | Risk reduction | Deploy to a staging domain first (e.g., `preview.wyattsnotes.wyattau.com`), run smoke tests, then promote to production. |
| **Automated rollback** | 1 day | MTTR improvement | Add a workflow that re-deploys the last known good commit on deploy failure. Cloudflare Pages API supports this. |
| **Build size monitoring** | 0.5 day | Bundle regression detection | Track total JS/CSS bundle size across builds; fail if it increases by > 10%. |
| **Lighthouse performance budgets** | 0.5 day | Performance regression prevention | Add Lighthouse CI with specific score thresholds (Performance >= 90, Accessibility >= 95, Best Practices >= 90). |

### Phase G4: Security hardening (1 week)

Close security gaps beyond the already-done items.

| Item | Effort | Impact | Details |
|------|--------|--------|---------|
| **Content Security Policy headers** | 0.5 day | XSS mitigation for the search dashboard | Add CSP headers to the Worker's HTML response: `script-src 'self' https://static.cloudflareinsights.com` |
| **Rate limiting on search endpoint** | 0.5 day | Abuse prevention | Add a simple IP-based rate limit (e.g., 100 req/min) to `/api/search`. |
| **Input length validation** | 0.5 day | DoS prevention | Cap the search query length at 200 characters. Current: unlimited. |
| **Dependency license scanning** | 0.5 day | License compliance | Add `license-checker` to CI; fail on copyleft licenses in proprietary-compatible dependencies. |
| **Security headers on static assets** | 0.5 day | Defense-in-depth | Add `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy: strict-origin-when-cross-origin` to `_headers` files. |

### Phase G5: Observability (1 week)

Improve monitoring and alerting.

| Item | Effort | Impact | Details |
|------|--------|--------|---------|
| **Search SLO tracking** | 1-2 days | Performance visibility | Track p50/p95/p99 search latency in the Worker; expose via `/api/health`. |
| **Alert on search degradation** | 1 day | Proactive incident detection | Add a threshold: if zero-result rate > 10% or p95 latency > 500ms for > 5 min, open a GitHub issue. |
| **Client-side error tracking** | 1-2 days | Frontend error visibility | Add a lightweight error reporter (e.g., Sentry's JS SDK or a custom `window.onerror` handler) to capture client-side JS errors. |
| **Build time tracking** | 0.5 day | CI performance visibility | Log build time per site; track trends in the weekly audit. |

---

## 6. What this roadmap does NOT include (and why)

| Excluded practice | Reason |
|-------------------|--------|
| **Formal verification (Lean4/Coq)** | No algorithms require it; SM-2 has property-based tests |
| **Chaos engineering** | No microservices to inject failures into |
| **Real-time distributed tracing** | Static site + simple Worker; OpenTelemetry would be overkill |
| **Mutation testing at scale** | Trial only (Phase G3); full adoption is a separate project |
| **Full canary deployment** | Static sites deploy atomically; staged deployment is the realistic alternative |
| **A/B testing framework** | Already exists for search; not needed for static content |
| **Micro-optimization (cache-line, SIMD)** | Not applicable to a documentation site |
| **Kernel bypass networking** | Not applicable |
| **Monorepo tooling (Bazel/Nx)** | ~50K LOC; the current `sync-shared.mjs` is sufficient |

---

## 7. Projected state after gap-closing roadmap

| Metric | Current | After G1-G5 |
|--------|---------|-------------|
| Branch coverage | 38% | 65%+ |
| CI gates | Lint + test + typecheck | + Lighthouse (blocking) + secret scan |
| Deployment | All-or-nothing | Staged (preview → production) |
| Rollback | Manual (git revert) | Automated (last-known-good) |
| Security scanning | bun audit (CI) | + GitLeaks (pre-commit) + CSP headers + rate limiting |
| Observability | Worker console logs | Structured logging + search SLOs + alerting |
| Documentation | 6 ADRs | + 4 ADRs (R4, remark plugin, lazy import, ViewTransitions) |
| Test count | 239 | 280+ (E2E flows + edge cases) |

---

*This document is a comparison, not a criticism. The project is already
stronger than many open-source projects of comparable size. The gaps are
real but measured — closing them would bring the project to a level where
a FAANG engineer would be comfortable deploying it to production.*
