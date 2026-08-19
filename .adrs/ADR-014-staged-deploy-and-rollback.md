# ADR-014: Staged deploy (canary + rollout) with automated rollback

- **Status:** Accepted
- **Date:** 2026-08-19
- **Deciders:** Wyatt (maintainer)

## Context

The prior deploy pipeline shipped all 45 sites in a single parallel job
from a single trigger. A bad build (or a post-build Cloudflare Pages issue)
would change every site at once with no recovery path short of a manual
`git revert` + manual redeploy. The existing verify step (poll until 200
or 5-min timeout) provides detection but not recovery, and a multi-hour
recovery window for 45 documentation sites was unacceptable.

## Decision

### Staged deploy (two waves)

1. **Canary wave**: `deploy-canary` — 2 sites selected by structural
   variant (`dse` for the heavy content path; `tools` for KaTeX/mermaid
   pipeline). Runs with `fail-fast: true`; if either fails, the rollout
   wave is never started.
2. **Rollout wave**: `deploy-rollout` — the remaining 43 sites. Runs
   only after the canary passes full deploy + verification. Runs with
   `fail-fast: false` (each site is independent; one failure must not
   cancel the other 42 in-flight builds).

Both waves derive their site lists from the SSOT (`list-sites.js
--canary-matrix / --rollout-matrix`), so membership is validated against
`sites/` and cannot reference defunct sites.

### Automated rollback

- **`mark-good` job**: on every fully successful deploy, moves a
  `last-good-deploy` lightweight tag to the triggering SHA. This tag
  represents the last commit that was verified live.
- **`rollback-on-failure` job**: if either deploy wave fails (but not if
  only the gate failed — no site changed in that case), automatically
  dispatches `rollback.yml` via `gh workflow run`.
- **`rollback.yml`** (workflow_dispatch, with optional `ref` input
  defaulting to `last-good-deploy`): checks out the known-good commit,
  builds all 45 sites + landing, deploys, and verifies HTTP 200 with a
  5-minute poll. Reports result in the GitHub step summary.

### Blast radius

A post-gate failure changes at most 2 sites (canary). A canary failure
after sites changed is automatically rolled back in minutes; a full
rollout failure triggers rollback of all 43.

## Consequences

- Deploy time for the first 2 sites is serial (gate → canary); this
  adds ~10 minutes to the critical path but prevents a 45-site regression
  from ever shipping.
- `last-good-deploy` tag is force-pushed; it always points to exactly
  one commit.
- Manual rollback is trivial: trigger `rollback.yml` from the Actions
  tab, optionally specifying a commit SHA.
- The tag requires `contents: write` permission on the deploy workflow.
