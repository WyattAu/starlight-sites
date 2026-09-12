---
title: "About Wyatt Au"
description: "About Wyatt Au — educator, content developer, and creator of Wyatt's Notes. Learn about the expertise behind 45+ study sites covering IB, A-Level, GCSE, AP, DSE, and university STEM."
---

# About Wyatt Au

## Who I Am

I'm **Wyatt Au**, an educator and content developer passionate about making rigorous education accessible to everyone. I created Wyatt's Notes — a network of 45+ study sites covering everything from IB and A-Level to university physics and programming.

## My Mission

Education should be free, rigorous, and accessible. Wyatt's Notes exists because:
- Quality study materials shouldn't be locked behind paywalls
- Every student deserves access to university-level explanations
- Open-source tools can democratise education

## What I Build

### Wyatt's Notes
- **45+ study sites** covering exam boards, programming, and university STEM
- **3,000+ content pages** with worked examples and practice problems
- **Interactive components** including flashcards with SM-2 spaced repetition
- **Cross-site search** across all subjects
- **Open source** under AGPLv3

### Technical Stack
- **Framework:** Astro + Starlight
- **Components:** SolidJS for interactive elements
- **Search:** Cloudflare Worker with ranking algorithm
- **Hosting:** Cloudflare Pages

## Expertise

### Education
- Deep understanding of exam board curricula (IB, A-Level, GCSE, AP, DSE)
- Experience with university-level STEM content
- Knowledge of effective study techniques and spaced repetition

### Technology
- Full-stack web development
- Cloudflare Workers and edge computing
- SolidJS and React ecosystem
- Rust and WebAssembly

### Content Development
- Technical writing for education
- Interactive content design
- SEO and content strategy

## Why Trust These Resources

1. **Rigorous content** — Every topic includes derivations, worked examples, and practice problems
2. **Exam-aligned** — Content follows official curricula and mark schemes
3. **Interactive learning** — Flashcards with SM-2 algorithm, diagnostic tests, practice problems
4. **Cross-referenced** — Related topics linked across 45+ sites
5. **Open source** — All code and content available on GitHub

## Connect

- **GitHub:** [github.com/WyattAu](https://github.com/WyattAu)
- **Twitter:** [@wyattau](https://twitter.com/wyattau)
- **Email:** wyatt@wyattau.com

## Contributing

Wyatt's Notes is open source. Contributions are welcome:
- Fix typos or errors in content
- Add new topics or expand existing ones
- Improve interactive components
- Report bugs or suggest features

See [CONTRIBUTING.md](https://github.com/WyattAu/starlight-sites/blob/main/CONTRIBUTING.md) for guidelines.

## Approach

Wyatt's Notes treats explanation as the product: every topic page leads with the idea, then the formal statement, then worked examples that show each step of reasoning — including the dead ends students usually hit. Mistakes are treated as data: common errors are called out explicitly with the reasoning error that produces them.

## Principles

- **Primary sources first.** Theory pages cite the textbooks and papers the material derives from — Aluffi for algebra, Griffiths for quantum mechanics, CLRS for algorithms — so readers can trace every claim.
- **Practice mirrors assessment.** Problem sets are written to the style of the actual examinations students face, with difficulty ratings and full solutions.
- **Localisation is real.** UK exam boards (AQA, Edexcel, OCR), DSE (Hong Kong), HSC (NSW), CBSE (India), and Gaokao (China) each get native coverage rather than relabelled generic content.
- **Accessibility is baseline.** The site ships font-size controls, contrast modes, reduced-motion support, and full keyboard navigation across every property.

## The Network

The full property list spans **academic curriculum** (alevel.wyattau.com, gcse.wyattau.com, ib.wyattau.com, ap.wyattau.com, dse.wyattau.com, hsc.wyattau.com, highers.wyattau.com, leaving-cert.wyattau.com, cbse.wyattau.com, gaokao.wyattau.com, sat.wyattau.com), **university-level discipline sites** (mathematics, physics, chemistry, computer-science, machine-learning, networking, security, databases), **programming languages** (python, rust, go, java, kotlin, swift, typescript, cpp, ruby, elixir, haskell, dart, languages), **professional skills** (linux, truenas, tuning, tools, licensing, professional-certs), and **practical-life preparation** (driving-us, driving-uk, driving-eu, civics-tests, language-tests, admissions).

## Contact and Corrections

Every content page carries a date and its sources. Corrections and suggestions are welcome — accuracy outranks completeness, and fixes ship quickly.


## Why Subdomains

Each discipline lives on its own subdomain so that navigation, tone, and depth can match its audience — a Hong Kong DSE candidate and a sysadmin tuning ZFS want different things from a study site. Shared infrastructure (search, design system, components) keeps the network consistent; per-site ownership keeps the content honest. Cross-links connect disciplines where the ideas genuinely meet, so following a concept never dead-ends at a site boundary.

## Content Standards

Pages are tiered: index pages orient and link, standard pages teach a topic in full, and depth pages treat hard subtopics with proofs and multiple worked examples. Depth lints run in CI on every commit — pages below their tier's minimum line count fail the build, so thin content cannot silently ship. Practice problems carry difficulty ratings and worked solutions; flashcards pair question sides with spaced-repetition-friendly phrasing.

## Technology

The network is a single Astro/Starlight monorepo: one shared component and design library, per-site content collections, staged deployments with automatic rollback, and schema validation on every content file before anything reaches production. Search runs on a Cloudflare Worker indexing the whole network. Performance budgets and accessibility checks gate deploys alongside content quality.


## Site Directory

| Category | Sites |
|----------|-------|
| UK Curriculum | alevel, gcse, highers, leaving-cert |
| Hong Kong | dse |
| Australia | hsc |
| India | cbse |
| China | gaokao |
| International | ib, sat, admissions, language-tests |
| Mathematics | mathematics |
| Sciences | physics, chemistry, machine-learning |
| Computing | computer-science, networking, security, databases |
| Languages | python, rust, go, java, kotlin, swift, typescript, cpp, ruby, elixir, haskell, dart, languages |
| Systems | linux, truenas, tuning, tools, licensing, professional-certs |
| Life Skills | driving-us, driving-uk, driving-eu, civics-tests |

## Editorial Standards

| Standard | Requirement |
|----------|-------------|
| Minimum depth | Tiered by page role; enforced in CI |
| Citations | Primary sources on theory pages |
| Difficulty labels | Every practice problem rated |
| Freshness | Content dates maintained from git history |
| Accuracy | Corrections prioritised over new content |
| Accessibility | WCAG-minded markup on all properties |
