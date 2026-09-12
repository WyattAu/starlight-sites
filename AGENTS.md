# Agent Operating Guide — starlight-sites

Single source of truth for how to work in this monorepo. Read before running anything.

## CI-only build policy (mandatory)

Never run heavy verification locally. The machine is chronically memory-tight
(24Gi/31Gi used, zram swap ~26Gi in use at idle) and stalls under V8 heap
commit spikes — full-tree node scripts appear to hang (no OOM killer exists;
it is swap thrash). All validation happens in GitHub Actions:

- **Builds**: `astro build` / `bun run build` — CI only (canary + rollout).
- **Full-tree node scripts — CI only, never local**:
  - `scripts/lint-depth.js` (whole repo; scoped per-file runs are OK)
  - `scripts/sync-shared.mjs` and `--check` (hashes entire tree)
  - `scripts/lint-practice-components.js`, `scripts/lint-no-emoji.js`,
    `scripts/lint-secrets.js`, `scripts/lint-links.js` without path args
- Every push is validated by: gate → 46x content-sync → 2x canary → 43x
  rollout with auto-rollback. Local "pre-verification" is redundant.

## Local command rules

1. `timeout 30` (or similar) on any speculative/untested command.
2. Prefer `python3` one-shots for read-only sweeps — streaming allocators
   survive memory pressure that stalls V8.
3. Scoped node runs only: pass explicit file args
   (`node scripts/lint-depth.js sites/python/src/content/docs/**/*.md`).
4. If a node script is unavoidable: `NODE_OPTIONS=--max-old-space-size=1024`.
5. Author files with the editor's write tool, not shell heredocs, for
   anything larger than a few lines.
6. `gh run view ... --log-failed` for CI diagnosis; never re-run a failing
   full build locally to "see the error".

## Shared-asset editing (sync-shared.mjs)

Per-site copies of shared files are **generated** — never edit them directly:

- `sites/*/src/components/` ← `shared/components/`
- `sites/*/src/utils/` ← `shared/utils/`
- `sites/*/src/styles/` ← `shared/styles/` (including `custom.css`)
- `sites/*/src/design/` ← `shared/design/`
- `sites/*/public/fonts/` ← `shared/fonts/`
- `sites/*/src/i18n/` ← `shared/i18n/`

Edit the canonical file under `shared/` and let CI sync. Direct edits to
site copies fail the gate's Shared-asset integrity check.

## Content standards

- Depth tiers (scripts/lint-depth.js): Tier 1 index >=30 lines,
  Tier 2 >=80, Tier 3 >=120, Tier 4 >=150 (body lines, frontmatter and
  blanks excluded). CI fails below-minimum content.
- Sidebar standard for all Starlight sites:
  `[Study Hub, (Practice Test?), ...subjects..., About, Glossary]` —
  every sidebar slug must have matching content or the Astro build fails.
- Flashcard/practice wrapper files (`flashcard-*`, `practice-*` with an
  import + component) are exempt from depth checks; generate content from
  `fixtures/practice/*.json` via `scripts/generate-practice-mdx.js`
  instead of hand-writing JSX props.

## KV search index (Cloudflare free tier)

- Daily write quota is small and consumed by every deploy's
  `update-search-index` job. Manual full-index uploads must run right
  after UTC midnight (quota reset) via
  `gh workflow run upload-search-index.yml --ref main`.
- `scripts/upload-index.js` exits 0 on quota error 10048 by design.
- Verify with `curl -s https://search.wyattau.com/api/health`.

## Deploy failure playbook

1. `gh run view <id> --json jobs -q '.jobs[] | select(.conclusion=="failure") | .name'`
2. `gh run view <id> --log-failed 2>&1 | grep -E "##\[error\]|Error"`.
3. Common classes: lockfile drift (run `bun install`, commit `bun.lock`),
   emoji lint, PracticeProblem corruption (3 classes, see lint script),
   sidebar slug without content, KV quota (10048 — benign, exit 0).
4. Rollout failures deploy nothing beyond canary; last-good tag is
   untouched unless canary itself shipped.
