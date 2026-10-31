- [DSE Physics](https://dse.wyattau.com/physics/); Hong Kong DSE curriculum
- [IB Physics](https://ib.wyattau.com/physics/); International Baccalaureate
- [A-Level Physics](https://alevel.wyattau.com/physics/); UK A-Level (AQA, OCR, Edexcel)
- [AP Physics](https://ap.wyattau.com/physics/); US Advanced Placement
- [IB Mechanics](https://ib.wyattau.com/physics/1-space-time-and-motion/); similar treatment for IB
- [A-Level Mechanics](https://alevel.wyattau.com/physics/mechanics/); AQA/OCR version
1. **Curriculum reference**; "This covers Topic 1: Mechanics from the DSE Physics curriculum (2025 onward)"
2. **Exam-board-specific examples**; Use past paper questions from that board
3. **Syllabus mapping**; Show which syllabus points this page covers
4. **Difficulty calibration**; Match the depth to the exam level:
1. **Verify all 46 sites have sitemaps**; check each `astro.config.mjs` includes `sitemap()` integration
2. **Check for www/non-www duplication**; ensure all sites redirect to `https://{subdomain}.wyattau.com`
3. **Check for trailing slash consistency**; canonicals should always include trailing slash
1. **Add path-level canonical overrides**; for pages that genuinely overlap (e.g., a DSE mechanics page and a physics mechanics page that cover identical derivations), allow frontmatter to specify a canonical override:
2. **Add a `relatedSubjects` frontmatter field**; for explicit cross-site linking:
title: "DSE Physics; Mechanics"
1. **"Alternate page with canonical tag"**; should increase as cross-site links are established (this is GOOD, not an error)
2. **"Duplicate without user-selected canonical"**; should decrease to 0
3. **"Crawled - currently not indexed"**; monitor for pages being dropped due to perceived duplication
- [ ] Review "Alternate page with canonical tag" count; should be stable or decreasing
- `site:wyattau.com "exact phrase"`; search Google for duplicate phrases across sites
- Screaming Frog; crawl all 46 sites, check canonical tags, detect near-duplicates
- Copyscape; check for content similarity between specific page pairs
- `shared/components/starlight/Head.astro`; canonical override support, enhanced cross-site links