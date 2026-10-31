the generator must carry all sidebar definitions; duplicating the
1. **KaTeX CDN pinned version**; exactly one version enforced repo-wide
2. **Required head entries**; web-vitals script, PWA manifest, theme-color,
3. **Required pipeline**; `mdx({ remarkPlugins: [remarkMath],
4. **Shared-integration imports**; must resolve via `../../shared/`, not
5. **og:image**; must be an absolute `*.wyattau.com` URL.
scope; the linter validates invariants only.