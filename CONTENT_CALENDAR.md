# 90-Day Content Execution Calendar

Date: 2026-07-24
Duration: 12 weeks (90 days)
Goal: Improve rankings for 500+ target keywords across 46 properties on wyattau.com.

---

## Phase 1: Foundation (Weeks 1-4)

**Goal:** Fix technical issues, establish baseline metrics, ensure all properties are indexed.

### Week 1: GSC Setup & Technical Audit

| Day | Task | Owner | Expected Outcome | Success Metric |
|-----|------|-------|------------------|----------------|
| Mon | Register all 46 properties in Google Search Console | — | All properties verified | 46/46 properties in GSC |
| Mon | Submit XML sitemaps for all 46 sites | — | Sitemaps indexed | Sitemaps "Submitted" in GSC |
| Tue | Run Lychee broken link check on all sites | — | List of 404s | 0 broken links |
| Tue | Fix all 404 errors found | — | All 404s resolved | 0 errors in GSC Coverage |
| Wed | Run Lighthouse audit on top 50 pages per site | — | Performance baseline | Lighthouse > 90 on top pages |
| Wed | Fix pages with LCP > 2.5s or CLS > 0.1 | — | CWV pass | 0 pages failing CWV |
| Thu | Audit mobile usability on all sites | — | Mobile issues identified | 0 mobile usability errors |
| Thu | Fix mobile usability issues | — | Mobile-friendly | All pages pass mobile check |
| Fri | Set up keyword tracking spreadsheet | — | Tracking doc live | 519 keywords tracked |
| Fri | Document baseline metrics (impressions, clicks, position) | — | Baseline recorded | All 46 properties have baseline data |

**Dependencies:** DNS access for all 46 subdomains. GSC account permissions.

### Week 2: On-Page SEO Optimization

| Day | Task | Owner | Expected Outcome | Success Metric |
|-----|------|-------|------------------|----------------|
| Mon | Optimize meta titles for top 20 pages (DSE, IB) | — | Titles updated | Titles < 60 chars, keyword-targeted |
| Mon | Optimize meta titles for top 20 pages (A-Level, GCSE) | — | Titles updated | Titles < 60 chars, keyword-targeted |
| Tue | Optimize meta titles for top 20 pages (AP, Physics) | — | Titles updated | Titles < 60 chars, keyword-targeted |
| Tue | Optimize meta titles for top 20 pages (Mathematics, Chemistry) | — | Titles updated | Titles < 60 chars, keyword-targeted |
| Wed | Optimize meta titles for top 20 pages (Programming, CS) | — | Titles updated | Titles < 60 chars, keyword-targeted |
| Wed | Optimize meta descriptions for all sites above | — | Descriptions updated | Descriptions < 155 chars, compelling |
| Thu | Add FAQ schema to top 20 pages per site | — | Schema validated | 0 rich result errors in GSC |
| Thu | Verify structured data on all hub pages | — | Schema validated | All hub pages have FAQ + BreadcrumbList |
| Fri | Audit internal linking on top 10 pages per site | — | Link gaps identified | Orphan page count = 0 |
| Fri | Fix orphan pages and broken internal links | — | Links repaired | All pages have ≥ 2 internal links |

**Dependencies:** Week 1 GSC setup complete. Access to content files.

### Week 3: Core Web Vitals Optimization

| Day | Task | Owner | Expected Outcome | Success Metric |
|-----|------|-------|------------------|----------------|
| Mon | Audit TTFB on all pages (target < 800ms) | — | Slow pages identified | TTFB < 800ms on all pages |
| Mon | Optimize server response times (CDN, caching) | — | TTFB improved | TTFB reduced 30%+ |
| Tue | Audit LCP on all pages (target < 2.5s) | — | LCP issues identified | LCP < 2.5s on all pages |
| Tue | Optimize LCP (image preloading, critical CSS) | — | LCP improved | LCP reduced 20%+ |
| Wed | Audit CLS on all pages (target < 0.1) | — | Layout shifts identified | CLS < 0.1 on all pages |
| Wed | Fix CLS (explicit image dimensions, font loading) | — | CLS improved | CLS reduced 50%+ |
| Thu | Audit FID/INP on all pages (target < 200ms) | — | Interactivity issues found | FID/INP < 200ms |
| Thu | Optimize JavaScript execution (code splitting, deferral) | — | FID improved | FID reduced 30%+ |
| Fri | Re-run Lighthouse on all fixed pages | — | All metrics pass | Performance > 90 on all pages |
| Fri | Document final CWV metrics | — | Metrics recorded | All pages passing CWV |

**Dependencies:** Week 2 meta optimizations complete. Access to Astro config and build system.

### Week 4: Schema Markup Audit & Expansion

| Day | Task | Owner | Expected Outcome | Success Metric |
|-----|------|-------|------------------|----------------|
| Mon | Audit existing schema on all 46 sites | — | Schema inventory | All sites have schema documented |
| Mon | Add Article schema to all content pages | — | Schema validated | 2,000+ pages with Article schema |
| Tue | Add Course schema to hub pages | — | Schema validated | 46 hub pages with Course schema |
| Tue | Add BreadcrumbList schema to all pages | — | Schema validated | All pages have breadcrumb schema |
| Wed | Add FAQPage schema to practice/test pages | — | Schema validated | 200+ pages with FAQ schema |
| Wed | Add HowTo schema to study guide pages | — | Schema validated | 50+ pages with HowTo schema |
| Thu | Validate all schema with Google Rich Results Test | — | 0 errors | 0 schema errors in GSC |
| Thu | Submit new structured data for indexing | — | Indexed | All schema pages indexed |
| Fri | Create schema monitoring checklist | — | Checklist live | Monthly schema audit scheduled |
| Fri | Document schema strategy for ongoing maintenance | — | Strategy doc | Process documented |

**Dependencies:** Week 3 CWV optimization complete. Access to Google Rich Results Test.

---

## Phase 2: Content Expansion (Weeks 5-8)

**Goal:** Create hub pages, topic clusters, glossary pages, and practice test pages.

### Week 5: Create Hub Pages for Remaining 41 Sites

| Day | Task | Owner | Expected Outcome | Success Metric |
|-----|------|-------|------------------|----------------|
| Mon | Create hub pages for admissions, alevel, ap, cbse | — | 4 new hubs | Hub pages live with ≥ 3,000 words |
| Mon | Create hub pages for chemistry, civics-tests, computer-science | — | 3 new hubs | Hub pages live with ≥ 3,000 words |
| Tue | Create hub pages for cpp, dart, databases, driving-eu | — | 4 new hubs | Hub pages live with ≥ 3,000 words |
| Tue | Create hub pages for driving-uk, driving-us, dse, elixir | — | 4 new hubs | Hub pages live with ≥ 3,000 words |
| Wed | Create hub pages for gaokao, gcse, go, haskell | — | 4 new hubs | Hub pages live with ≥ 3,000 words |
| Wed | Create hub pages for highers, hsc, ib, java | — | 4 new hubs | Hub pages live with ≥ 3,000 words |
| Thu | Create hub pages for kotlin, language-tests, languages, leaving-cert | — | 4 new hubs | Hub pages live with ≥ 3,000 words |
| Thu | Create hub pages for licensing, linux, machine-learning, main | — | 4 new hubs | Hub pages live with ≥ 3,000 words |
| Fri | Create hub pages for mathematics, networking, physics, professional-certs | — | 4 new hubs | Hub pages live with ≥ 3,000 words |
| Fri | Create hub pages for programming, python, ruby, rust, sat, security, swift, tools, truenas, tuning, typescript | — | 11 new hubs | Hub pages live with ≥ 3,000 words |

**Hub Page Template:**
- Title: "[Subject] Complete Study Guide"
- Length: 3,000-5,000 words
- Structure: Overview → Topics → Quick Reference → Practice → FAQ
- Internal links: 10-15 links to topic pages
- Schema: FAQ, BreadcrumbList, Course

**Dependencies:** Week 4 schema audit complete. Content audit data from CONTENT_AUDIT.md.

### Week 6: Add "See Also" Cross-Links to All Content Pages

| Day | Task | Owner | Expected Outcome | Success Metric |
|-----|------|-------|------------------|----------------|
| Mon | Add cross-links to all DSE content pages | — | Cross-links live | 161 pages with ≥ 3 cross-links |
| Mon | Add cross-links to all IB content pages | — | Cross-links live | 304 pages with ≥ 3 cross-links |
| Tue | Add cross-links to all A-Level content pages | — | Cross-links live | 366 pages with ≥ 3 cross-links |
| Tue | Add cross-links to all GCSE content pages | — | Cross-links live | All GCSE pages with ≥ 3 cross-links |
| Wed | Add cross-links to all AP content pages | — | Cross-links live | All AP pages with ≥ 3 cross-links |
| Wed | Add cross-links to all Physics content pages | — | Cross-links live | All Physics pages with ≥ 3 cross-links |
| Thu | Add cross-links to all Mathematics content pages | — | Cross-links live | All Math pages with ≥ 3 cross-links |
| Thu | Add cross-links to all Programming content pages | — | Cross-links live | All Programming pages with ≥ 3 cross-links |
| Fri | Add cross-links to all remaining sites (languages, infrastructure, tools) | — | Cross-links live | All remaining pages with ≥ 3 cross-links |
| Fri | Verify cross-links render correctly on all sites | — | Links verified | 0 broken cross-links |

**Cross-linking Strategy:**
- Each content page links to its hub page (parent)
- Each content page links to 2-3 related topic pages (siblings)
- Each hub page links to all its child pages
- Cross-site links between related subjects (e.g., physics ↔ mathematics)

**Dependencies:** Week 5 hub pages complete. Content inventory from CONTENT_AUDIT.md.

### Week 7: Create Glossary/Terminology Pages

| Day | Task | Owner | Expected Outcome | Success Metric |
|-----|------|-------|------------------|----------------|
| Mon | Create glossary for Physics site | — | Glossary live | 100+ terms defined |
| Mon | Create glossary for Mathematics site | — | Glossary live | 100+ terms defined |
| Tue | Create glossary for Chemistry site | — | Glossary live | 100+ terms defined |
| Tue | Create glossary for Computer Science site | — | Glossary live | 100+ terms defined |
| Wed | Create glossary for Programming site (C++) | — | Glossary live | 80+ terms defined |
| Wed | Create glossary for Languages site (programming languages) | — | Glossary live | 80+ terms defined |
| Thu | Create glossaries for exam sites (DSE, IB, A-Level, GCSE, AP) | — | 5 glossaries live | 50+ terms per glossary |
| Thu | Add glossary schema (DefinedTermSet) to all glossary pages | — | Schema validated | 0 schema errors |
| Fri | Link glossary terms to relevant content pages | — | Terms linked | Each term links to ≥ 2 content pages |
| Fri | Add glossary index page with alphabetical navigation | — | Index live | All glossaries accessible from index |

**Glossary Page Template:**
- Title: "[Subject] Glossary of Key Terms"
- Structure: Alphabetical A-Z, each term with definition + example
- Schema: DefinedTermSet
- Internal links: Each term links to relevant content pages

**Dependencies:** Week 6 cross-links complete. Existing content for term extraction.

### Week 8: Add Practice Test Pages for Exam Sites

| Day | Task | Owner | Expected Outcome | Success Metric |
|-----|------|-------|------------------|----------------|
| Mon | Create practice test pages for DSE (Physics, Maths, Chemistry) | — | 3 practice tests live | Each test has ≥ 20 questions |
| Mon | Create practice test pages for IB (Physics, Math AA, Chemistry) | — | 3 practice tests live | Each test has ≥ 20 questions |
| Tue | Create practice test pages for A-Level (Maths, Physics, Chemistry) | — | 3 practice tests live | Each test has ≥ 20 questions |
| Tue | Create practice test pages for GCSE (Maths, Physics, Chemistry) | — | 3 practice tests live | Each test has ≥ 20 questions |
| Wed | Create practice test pages for AP (Calculus, Physics, Chemistry) | — | 3 practice tests live | Each test has ≥ 20 questions |
| Wed | Create practice test pages for driving tests (UK, US, EU) | — | 3 practice tests live | Each test has ≥ 30 questions |
| Thu | Create practice test pages for language tests (IELTS, TOEFL, DELE) | — | 3 practice tests live | Each test has ≥ 20 questions |
| Thu | Create practice test pages for professional certs | — | Practice tests live | Each test has ≥ 20 questions |
| Fri | Add Quiz/PracticeTest schema to all test pages | — | Schema validated | 0 schema errors |
| Fri | Verify all practice test pages are indexed | — | Indexed | All test pages in GSC Coverage |

**Practice Test Template:**
- Title: "[Exam] Practice Test: [Subject]"
- Structure: Instructions → Questions → Answers → Explanations
- Interactive: SolidJS quiz component for self-marking
- Schema: Quiz, FAQ

**Dependencies:** Week 7 glossaries complete. Existing practice question content.

---

## Phase 3: Authority Building (Weeks 9-12)

**Goal:** Build authority through outreach, guest posts, scholarship promotion, and broken link building.

### Week 9: Send First Batch of Outreach Emails (Template A)

| Day | Task | Owner | Expected Outcome | Success Metric |
|-----|------|-------|------------------|----------------|
| Mon | Research 50 education blogs for outreach | — | Target list created | 50 targets identified |
| Mon | Research 30 education resource pages for link requests | — | Target list created | 30 resource page targets |
| Tue | Send Template A (Guest Post Outreach) to top 20 education blogs | — | Emails sent | 20 emails sent |
| Tue | Send Template B (Resource Page) to top 15 resource pages | — | Emails sent | 15 emails sent |
| Wed | Send Template A to next 15 education blogs | — | Emails sent | 15 emails sent |
| Wed | Send Template B to next 15 resource pages | — | Emails sent | 15 emails sent |
| Thu | Send Template C (Broken Link) to sites with broken links | — | Emails sent | 10 emails sent |
| Thu | Track all outreach in tracking spreadsheet | — | Tracking live | All emails logged |
| Fri | Follow up on Week 9 emails (5-7 day window) | — | Follow-ups sent | 30 follow-ups sent |
| Fri | Document response rates and outcomes | — | Metrics recorded | Response rate > 10% |

**Outreach Targets:**
- Education blogs: EdSurge, The Edvocate, Inside Higher Ed, EdTech Magazine
- Resource pages: Khan Academy links, MIT OCW, LibreTexts
- Programming blogs: Dev.to, Medium, Hashnode

**Template A (Guest Post):** See OUTREACH_TEMPLATES.md Template 1
**Template B (Resource Page):** See OUTREACH_TEMPLATES.md Template 2
**Template C (Broken Link):** See OUTREACH_TEMPLATES.md Template 3

**Dependencies:** Week 8 practice tests complete. Outreach templates from OUTREACH_TEMPLATES.md.

### Week 10: Guest Post Pitches (Template B) + HARO Monitoring

| Day | Task | Owner | Expected Outcome | Success Metric |
|-----|------|-------|------------------|----------------|
| Mon | Set up HARO (Help a Reporter Out) account | — | Account active | HARO monitoring daily |
| Mon | Set up Google Alerts for "STEM education", "free study notes" | — | Alerts active | Alerts delivering daily |
| Tue | Send guest post pitches to 10 programming blogs | — | Pitches sent | 10 pitches sent |
| Tue | Send guest post pitches to 10 education blogs | — | Pitches sent | 10 pitches sent |
| Wed | Monitor HARO for education/technology queries | — | Queries identified | 5+ relevant queries found |
| Wed | Respond to 5 HARO queries with expert quotes | — | Responses sent | 5 responses submitted |
| Thu | Create 3 shareable infographics for top topics | — | Infographics live | 3 infographics published |
| Thu | Submit infographics to education aggregators | — | Submissions sent | 10 submissions sent |
| Fri | Create press release for new study guides | — | Press release drafted | Press release ready |
| Fri | Track HARO responses and follow-ups | — | Tracking live | All responses logged |

**HARO Topics to Monitor:**
- "STEM education", "free educational resources"
- "AP exam preparation", "IB diploma"
- "programming education", "computer science curriculum"
- "study tips", "exam preparation strategies"

**Dependencies:** Week 9 outreach complete. HARO account setup.

### Week 11: Scholarship Page Promotion to .edu Sites

| Day | Task | Owner | Expected Outcome | Success Metric |
|-----|------|-------|------------------|----------------|
| Mon | Submit scholarship to 10 scholarship listing sites | — | Submissions sent | 10 sites listed |
| Mon | Submit scholarship to Fastweb, Scholarships.com, Cappex | — | Submissions sent | 3 major sites listed |
| Tue | Email financial aid offices at 20 target universities | — | Emails sent | 20 emails sent |
| Tue | Email financial aid offices at 20 more universities | — | Emails sent | 20 emails sent |
| Wed | Post scholarship on Reddit (r/scholarships, r/college, r/STEM) | — | Posts live | 3 Reddit posts published |
| Wed | Share scholarship on Twitter/LinkedIn with hashtags | — | Posts live | 5 social posts published |
| Thu | Post scholarship in Facebook groups for college students | — | Posts live | 3 Facebook posts published |
| Thu | Contact student bloggers/YouTubers in education niche | — | Outreach sent | 10 outreach emails sent |
| Fri | Track scholarship submissions and .edu backlinks | — | Tracking live | 5+ .edu backlinks targeted |
| Fri | Document scholarship promotion outcomes | — | Metrics recorded | Response rate > 5% |

**Scholarship Submission Sites:**
- Scholarships.com, Fastweb, Cappex, Unigo, Going Merry
- ScholarshipOwl, Chegg Scholarships, Niche, Peterson's, College Board

**Template (Scholarship):** See SCHOLARSHIP_PAGE.md promotion strategy

**Dependencies:** Week 10 HARO/guest posts complete. Scholarship page live at wyattsnotes.wyattau.com/scholarship.

### Week 12: Broken Link Building Campaign (Template C)

| Day | Task | Owner | Expected Outcome | Success Metric |
|-----|------|-------|------------------|----------------|
| Mon | Use Ahrefs/SEMrush to find broken links on 20 education sites | — | Broken links identified | 50+ broken links found |
| Mon | Create replacement content for broken links (if needed) | — | Content ready | 5 replacement pages created |
| Tue | Send Template C emails to sites with broken links | — | Emails sent | 20 emails sent |
| Tue | Send Template C to sites linking to competitors with broken links | — | Emails sent | 10 emails sent |
| Wed | Follow up on Week 12 emails | — | Follow-ups sent | 15 follow-ups sent |
| Wed | Reclaim unlinked mentions of "Wyatt's Notes" | — | Link requests sent | 10 requests sent |
| Thu | Analyze all outreach from Weeks 9-12 | — | Analysis complete | Response rate calculated |
| Thu | Identify top-performing outreach strategies | — | Strategy documented | Top 3 strategies identified |
| Fri | Plan next 90-day content calendar | — | Next calendar drafted | Calendar ready for review |
| Fri | Present 90-day results to stakeholders | — | Presentation ready | Results documented |

**Broken Link Building Process:**
1. Find broken links on education resource pages
2. Check if our content matches the broken link topic
3. If yes: send Template C email offering our content as replacement
4. If no: create replacement content, then send Template C

**Template C (Broken Link):** See OUTREACH_TEMPLATES.md Template 3

**Dependencies:** Week 11 scholarship promotion complete. Ahrefs/SEMrush access.

---

## Monthly Milestones

### Month 1 (Weeks 1-4): Foundation
- [ ] All 46 properties registered in GSC
- [ ] All technical issues resolved (404s, mobile, CWV)
- [ ] All meta titles/descriptions optimized (top 20 pages per site)
- [ ] Schema markup expanded to 2,000+ pages
- [ ] Baseline metrics documented for all 46 properties
- [ ] Core Web Vitals passing on all pages

### Month 2 (Weeks 5-8): Content Expansion
- [ ] 41 new hub pages created (46 total)
- [ ] "See Also" cross-links added to all content pages
- [ ] Glossary pages created for 10+ subjects
- [ ] Practice test pages created for 15+ exam subjects
- [ ] New content indexed by Google
- [ ] Internal linking structure complete

### Month 3 (Weeks 9-12): Authority Building
- [ ] 50+ outreach emails sent (Templates A, B, C)
- [ ] 20+ guest post pitches sent
- [ ] HARO monitoring active with 5+ responses
- [ ] Scholarship submitted to 10+ listing sites
- [ ] 20+ university financial aid offices contacted
- [ ] 20+ broken link building emails sent
- [ ] 90-day progress report completed
- [ ] Next 90-day calendar planned

---

## Content Types & Templates

### Hub Page Template
- Title: "[Subject] Complete Study Guide"
- Length: 3,000-5,000 words
- Structure: Overview → Topics → Quick Reference → Practice → FAQ
- Internal links: 10-15 links to topic pages
- Schema: FAQ, BreadcrumbList, Course

### Glossary Page Template
- Title: "[Subject] Glossary of Key Terms"
- Structure: Alphabetical A-Z, each term with definition + example
- Schema: DefinedTermSet
- Internal links: Each term links to ≥ 2 content pages

### Practice Test Template
- Title: "[Exam] Practice Test: [Subject]"
- Structure: Instructions → Questions → Answers → Explanations
- Interactive: SolidJS quiz component
- Schema: Quiz, FAQ

---

## KPIs to Track

| Metric | Baseline | Week 4 Target | Week 8 Target | Week 12 Target |
|--------|----------|---------------|---------------|----------------|
| Total impressions | — | +10% | +25% | +50% |
| Total clicks | — | +10% | +25% | +50% |
| Average position | — | +2 positions | +5 positions | +10 positions |
| Indexed pages | — | +20 | +50 | +100 |
| Backlinks | — | +10 | +30 | +50 |
| Referring domains | — | +5 | +15 | +25 |
| Properties in GSC | 0 | 46 | 46 | 46 |
| Hub pages | 5 | 46 | 46 | 46 |
| Glossary pages | 0 | 0 | 10+ | 10+ |
| Practice test pages | 0 | 0 | 15+ | 15+ |
| Outreach emails sent | 0 | 0 | 0 | 80+ |
| Guest post pitches | 0 | 0 | 0 | 20+ |
| .edu backlinks | 0 | 0 | 0 | 5+ |

---

## Risk Mitigation

| Risk | Impact | Mitigation |
|------|--------|------------|
| Content quality issues | High | Peer review all new content before publishing |
| Technical SEO regressions | Medium | Run Lychee and Lighthouse after every deploy |
| Competitor outranking | Medium | Monitor weekly, update content regularly |
| Link building penalties | High | Follow Google guidelines, avoid paid links |
| Resource constraints | Medium | Prioritize high-impact tasks, delegate where possible |
| Low outreach response rate | Medium | A/B test email templates, personalize more |
| Scholarship submissions ignored | Low | Follow up after 7 days, offer additional info |

---

## Weekly Review Checklist

Every Friday, review:
- [ ] Tasks completed vs. planned
- [ ] Success metrics achieved
- [ ] Blockers encountered
- [ ] Dependencies resolved
- [ ] Next week priorities adjusted
- [ ] GSC data reviewed
- [ ] Outreach responses tracked
