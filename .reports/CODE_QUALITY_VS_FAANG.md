static documentation site with a search API; the comparison is contextual,
contextual; a documentation site doesn't need HFT-level practices, but
| Unit test coverage (target) | 80%+ critical paths | 99%+ trading logic | 16.9% aggregate, 56% components | **Major**; aggregate dragged by uncovered scripts/search-api |
| Branch coverage target | 80%+ | 95%+ | 38% component branches | **Major**; FlashcardDeck views under-covered |
| E2E testing | Extensive (Selenium, Playwright, internal tools) | Exhaustive (every order path) | Playwright for GUI snapshots + accessibility | **Moderate**; E2E covers visual regression but not user flows |
| Property-based testing | Used (Google's internal tools, Meta's QuickCheck) | Standard for model validation | SM-2 has QuickCheck-style tests (mulberry32-seeded) | **Already strong**; 47 deterministic property tests |
| Mutation testing | Standard at FAANG (Meta's Sapienz, Google's Mutant) | Standard for trading logic | Not implemented | **Gap**; would validate test assertion strength |
| Performance testing | Per-service SLOs tracked | Microsecond budgets enforced | Lighthouse in CI (informational) | **Moderate**; no SLO tracking, no regression detection |
| Concurrency testing | Extensive race-condition testing | Critical (lock-free structures) | Minimal (SolidJS signals are single-threaded) | **N/A**; island architecture avoids concurrency |
| Test isolation | Enforced (no shared mutable state) | Enforced (deterministic replay) | **Strong**; `beforeEach`, no test interdependence | **Already strong** |
| Language strictness | Strict TypeScript everywhere; Go/Rust for critical paths | C++ with strict rules; Rust for new code | `strict` + `noUncheckedIndexedAccess` + `verbatimModuleSyntax` | **Already strong**; maximally strict for a TS codebase |
| Type-level programming | Used where appropriate (not over-used) | Minimal (performance focus) | Appropriate; Kobalte generics, utility types, no over-engineering | **Already strong** |
| Review requirement | 2+ approvals required | 2+ for trading code; 1 for tooling | Solo developer; no formal review | **Structural**; solo project, but PR-based workflow with CI gates |
| Automated checks on PR | Extensive (lint, test, build, security, performance) | Extensive + latency checks | Biome + test + typecheck + build (9-site matrix) | **Already strong**; the CI gate is comprehensive |
| Code ownership | CODEOWNERS enforced; auto-assignment | CODEOWNERS for critical paths | No CODEOWNERS (solo dev) | **N/A**; solo project |
| Large PR policy | PRs > 400 LOC flagged for split | PRs > 200 LOC require extra scrutiny | Some commits are large (sync-generated) but atomic | **Acceptable**; sync-generated bulk changes are inherently large |
| SAST (security) | Internal tools + commercial (Fortify, Checkmarx) | Custom + commercial | Biome (lint-level only) | **Moderate**; no dedicated SAST tool (CodeQL, Semgrep) |
| Secret detection | Pre-commit hooks + CI scanning (GitLeaks, TruffleHog) | Pre-commit + CI + runtime monitoring | `bun audit` + high-signal regex scan (zero hits) | **Moderate**; no pre-commit secret scanning |
| License scanning | Automated (FOSSA, Snyk) | Automated + manual review | `bun audit` (partial) + manual review | **Moderate**; no automated license compliance |
| Pipeline stages | Build → Test → Security → Performance → Staging → Canary → Prod | Build → Test → Model Validation → Shadow → Prod | Gate (lint+test+build) → Deploy (all 9 sites simultaneously) | **Moderate**; no staging/canary; all sites deploy together |
| Deployment strategy | Canary (1% → 10% → 100%); feature flags | Shadow trading → live with kill switch | All-or-nothing deploy to Cloudflare Pages | **Moderate**; no canary/gradual rollout |
| Rollback speed | Automated rollback in < 1 min | Kill switch in < 100ms | Manual rollback (git revert + redeploy) | **Moderate**; no automated rollback |
| Cache strategy | Aggressive (remote cache at scale) | Minimal (deterministic builds) | Bun cache + GitHub Actions cache | **Acceptable**; sufficient for the project size |
| Threat modeling | STRIDE per feature; threat review for new services | Extensive (financial fraud, market manipulation) | Not formally done (static site has minimal attack surface) | **Acceptable**; the search Worker is the only dynamic surface |
| Penetration testing | Regular (internal red team + external) | Regular + continuous | Not done | **Low priority**; static site; the search Worker could benefit |
| Dependency scanning | Automated (Dependabot, Snyk, internal) | Automated + manual review | `bun audit` CI gate + weekly workflow | **Already strong**; blocking CI gate + automated weekly scan |
| CSP headers | Enforced | Enforced | Not implemented (static sites) | **Low priority**; Cloudflare provides some protection |
| Latency budgets | Per-service SLOs (p50/p95/p99) | Microsecond budgets enforced | Warm TTFB < 200ms (measured) | **Moderate**; no p99 tracking, no automated regression |
| Core Web Vitals | Tracked in production (Lighthouse CI) | N/A (not web-facing) | Lighthouse CI in PR pipeline (informational) | **Already present**; could promote to blocking |
| Resource budgets | Per-service memory/CPU limits | Extreme (cache-line optimization) | Bundle size tracking exists (ROADMAP Phase C) | **Acceptable**; sufficient for the scale |
| Performance regression detection | Automated (Google's Tricorder, internal dashboards) | Automated with sub-second alerts | Lighthouse CI (informational, not blocking) | **Moderate**; could promote to blocking |
| Modular design | Enforced (monorepo with clear module boundaries) | Extreme (every component independently testable) | **Strong**; shared/ single-source-of-truth, sync SOP, god-files split | **Already strong** |
| Documentation | Comprehensive (design docs, ADRs, runbooks) | Comprehensive (trading logic documented) | 6 ADRs, ROADMAP, content standards, INCIDENT_RESPONSE | **Moderate**; could add more ADRs for recent decisions |
| Dependency direction | Enforced (no circular deps, strict layering) | Enforced | **Strong**; flat shared/ tree, no circular deps, drift enforcement | **Already strong** |
| On-call rotation | 24/7 on-call with escalation | 24/7 on-call; every trader monitors | Solo developer (no rotation possible) | **N/A**; solo project |
| Incident classification | SEV1-4 with SLAs | SEV1 (market impact) with kill-switch | INCIDENT_RESPONSE.md exists (rollback procedures) | **Moderate**; documented but no SLA/escalation |
| Post-mortem process | Blameless post-mortems; action items tracked | Root-cause analysis for every incident | LEVEL 4+ errors require post-mortem (ROADMAP) | **Already strong**; formal process documented |
| MTTR target | < 30 min for SEV1 | < 1 min for kill switch | Not tracked | **Low priority**; solo project, MTTR is the developer's time |
| Uptime monitoring | Comprehensive (Datadog, PagerDuty, custom) | Real-time (sub-second) | `uptime.yml` (6-hourly probes) | **Acceptable**; sufficient for a documentation site |
| Logging | Structured logging (JSON); centralized log aggregation | Detailed order-level logging | `console.error` in Worker; Cloudflare Worker logs | **Moderate**; no structured logging, no log aggregation |
| Metrics | Prometheus/Datadog/custom dashboards | Real-time P&L, latency, fill rates | Search analytics (zero-result rate, latency); web-vitals | **Moderate**; no unified dashboard |
| Alerting | Automated alerts on SLO violations | Automated alerts on risk limits, latency spikes | `uptime.yml` (6-hourly HTTP checks) | **Moderate**; no alerting on SLO violations |
| Distributed tracing | OpenTelemetry / Jaeger / Zipkin | Custom tracing for order lifecycle | Not implemented | **Low priority**; static site + simple Worker |
| Error tracking | Sentry / Bugsnag / custom | Custom error tracking with categorization | Cloudflare Worker logs (stdout) | **Moderate**; no client-side error tracking |
| **No CODEOWNERS** | N/A | Solo project; not applicable | N/A |
| **No DAST** | N/A | Static site; no runtime attack surface | N/A |
real but measured; closing them would bring the project to a level where