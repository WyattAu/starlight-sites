# ADR-006: Accept Astro 5.x CVEs until the Astro 6 upgrade

- **Status:** Superseded
- **Date:** 2026-06-21
- **Related:** `GUI_FRONTEND_REFACTOR.md` R4, `CODE_QUALITY_AUDIT.md` F2

## Context

`bun audit` reports high-severity advisories against the pinned Astro 5.18.2
dependency:

- **GHSA-2pvr-wf23-7pc7** (high) — Host-header SSRF in the prerendered
  error-page fetch.
- **GHSA-8hv8-536x-4wqp** (high) — Reflected XSS via an unescaped slot name.
- **GHSA-jrpj-wcv7-9fh9** (moderate) — XSS via unescaped attribute names in
  spread props.
- **GHSA-j687-52p2-xcff** (moderate) — XSS in `define:vars` via incomplete
  `</script>` sanitisation.

These are all fixed **only in Astro 6.x**; there is no 5.x patch (5.18.2 is
the final 5.x release).

## Decision

Accept the residual Astro 5.x risk. Do NOT add a blocking `bun audit` step to
CI yet; run it as `continue-on-error: true` (informational) plus a weekly
`.github/workflows/audit.yml` that opens an issue for new advisories.

## Rationale / constraints

The Astro 6 upgrade is blocked by a genuine Kobalte incompatibility: the
`@astrojs/solid-js` v6 integration server-side-renders Solid islands during
prerender, and Kobalte's popper calls `solid-js/web`'s `template()` at module
top level, which is a client-only API. This affects every page that renders
`<PracticeProblem>` (via `QuestionDialog` -> `BaseDialog` -> Kobalte `Dialog`).
See `GUI_FRONTEND_REFACTOR.md` R4 for the full diagnosis and the viable unblock
paths (the recommended one is a `client:only="solid"` wrapper architecture).

A blocking audit would fail every CI run on advisories we cannot remediate
without first landing R4, providing no signal.

## Risk assessment

- The SSRF advisory requires a crafted Host header against the prerendered
  error page; the sites are static, so the attack surface is narrow.
- The XSS advisories require authoring-specific conditions (unescaped slot
  names, spread props, `define:vars`); the content pipeline sanitises user
  content (`shared/utils/sanitize.ts`) and the component overrides do not use
  the affected patterns.
- Real-world exploitation likelihood is low; impact if exploited is moderate.

## Consequences

- Promote `bun audit` to a blocking CI gate as part of the R4 (Astro 6)
  unblock. This ADR is superseded when R4 lands.
- The weekly audit workflow tracks new advisories in the meantime so a
  newly-disclosed critical would still surface within seven days.
- Dev-tool advisories (markdownlint-cli -> glob/minimatch ReDoS) are
  independent of Astro and CAN be remediated now by bumping the tool.
