# Astro 7 migration wave — plan ledger

Status table (update per batch). Crash-proof: this file + the branch are
the durable state; re-read first after any restart.

| Task | Status | Evidence / next |
|---|---|---|
| 49 site package.jsons: astro ^7.2.10, starlight ^0.42.8, mdx ^8.1.2, solid-js int ^7.1.2 | done | grep '"astro": "\^7.2.10"' sites/*/package.json -c = 49 |
| root override astro -> ^7.2.10 | done | package.json overrides |
| vite override removed (astro 7 needs vite 8: transformWithOxc) | done | bun.lock resolves vite 8.3.5 + astro 7.4.5 |
| lock regenerated on astro 7 | done | bun.lock: astro@7.4.5, starlight@0.42.8, solid-js-int@7.1.2, mdx@8.1.2 |
| canary build (tools site) | in progress | astro 7 config-load transport timeout under **bun** — build via `node ./node_modules/.bin/astro build` instead; earlier run died at machine flap, deep into content (mermaid transforms OK) |
| all-45-site build verification | pending | CI build matrix after PR merge |
| bun audit re-count on astro 7 | pending | expect: astro/esbuild/devalue findings cleared (astro 7.0.6 fix; vite 8/oxc replaces esbuild 0.25/0.27 chains); smol-toml >=1.8 still pending upstream |
| re-block the bun audit gate | pending | revert 29e80d06 ratchet after audit reaches 0 |

## Notes

- astro 7 breaking change that bit us: config loading runs through vite 8's
  module runner — under the bun runtime the transport invoke times out at
  60 s (bun issue; node runs it fine). Build scripts in CI may need
  `node ./node_modules/.bin/astro build` instead of `bun run build`.
- astro-mermaid 2.2.0 peers astro >=4 — no change needed.
- @tailwindcss/vite 4.3.4 peers vite ^8 — no change needed.
- The known-issue list from main (display-swallow, 51 files) is independent.
