**Status:** Draft; pending decision
| CI/CD | GitHub Actions | - | Current |
| Hosting | Cloudflare (static + Workers) | - | Current |
| Node.js | Already using Bun | **Skip**; Bun is faster, already adopted |
| Bun | Already using v1.2 | **Keep**; No action needed |
| pnpm | Bun workspaces already handle monorepo | **Skip**; Bun's workspace support is sufficient |
| ni | Nice DX but not critical | **Skip**; Low priority |
| Vite | Already using via Astro | **Keep**; Core of Astro |
| Rolldown | Will arrive in Vite naturally | **Wait**; No action needed, Vite team handles migration |
| Esbuild | Used internally by Vite | **Skip**; Internal |
| tsdown | For library bundling; project produces sites, not libraries | **Skip**; Not applicable |
**SolidStart vs Astro+Starlight:** SolidStart is excellent for app-like experiences. However, this project is a **documentation monorepo**; Astro+Starlight is purpose-built for this. SolidStart would require rebuilding the entire content layer, sidebar routing, search integration, and theming. **No migration justified.**
| Valibot | Smaller bundle but Zod is working fine | **Skip**; Migration cost > benefit |
| ESLint | Biome replaces this | **Skip**; Already migrated |
1. **Drop Corvu, keep Kobalte**; Kobalte is the community standard, well-documented, stable
2. **Drop Kobalte, switch to Corvu**; Corvu is newer, actively maintained, native Solid
3. **Migrate to Ark UI**; Zag.js-powered, cross-framework, excellent accessibility, more components
4. **Use Solid UI (Shadcn-Solid)**; Shadcn-style components, could provide design system foundation
**Recommendation:** **Option 1; Drop Corvu, keep Kobalte.** Rationale:
**Current state:** `solid-motion` is at `v1.0.0-alpha.8`; alpha quality in production.
1. **Keep solid-motion, monitor**; Risk: alpha may have breaking changes
2. **Replace with Solid Transition Group**; More limited but stable/official
3. **Replace with AutoAnimate**; Already using, covers most animation needs
4. **Use Motion One directly**; Web Animations API based, framework-agnostic
**Recommendation:** **Option 3; Consolidate on AutoAnimate + Solid Transition Group.** Rationale:
1. **Keep custom i18n**; Simple, no dependencies, works for current needs
2. **Switch to @solid-primitives/i18n**; Official, lightweight, fine-grained reactive
3. **Use Typesafe i18n**; End-to-end type safety for translation keys
**Recommendation:** **Option 2; Switch to @solid-primitives/i18n.** Rationale:
1. **Keep current architecture**; Working, custom, performant
2. **Add TanStack Query for search caching**; Reduce redundant API calls
3. **Add Solid Query for search**; Same benefit, Solid-native
**Recommendation:** **Option 1; Keep current architecture.** Rationale:
1. **Keep sync script**; Simple, works, explicit
2. **Use Bun workspace imports**; Import directly from `../../shared/`
3. **Use Astro aliases**; Configure `@shared` alias in each site
**Recommendation:** **Option 1; Keep sync script.** Rationale:
1. **Keep current setup**; Working, efficient, on-demand imports
2. **Switch to astro-icon**; Astro-native, supports 100k+ Iconify sets
3. **Add solid-icons**; Additional icon packs if needed
**Recommendation:** **Option 1; Keep current setup.** Rationale:
1. **Add astro-compress**; Minify HTML/CSS/SVG at build time
2. **Add @astrojs/partytown**; Offload third-party scripts (not currently needed)
3. **Wait for Rolldown**; Vite's Rust-based bundler will arrive naturally
**Recommendation:** **Option 1; Add astro-compress.** Rationale:
### Phase 1: Cleanup (Low Risk, High Value): 1-2 days
### Phase 2: i18n Upgrade (Medium Risk, Medium Value): 2-3 days
### Phase 3: Polish (Low Risk, Low Value): 1 day
1. **Drop unused Corvu dependency**; Reduce surface area
2. **Consolidate animation libraries**; Remove alpha-risk solid-motion
3. **Upgrade i18n**; Leverage solid-primitives ecosystem
4. **Add build compression**; astro-compress for smaller outputs
5. **Future-proof**; Monitor Solid UI and TanStack Query for when needs evolve