# starlight-sites

Wyatt's Notes — Starlight monorepo. 9 sub-sites migrated from Docusaurus to Astro Starlight.

## Sites

| Site | URL | Files | Subjects |
|------|-----|-------|----------|
| DSE | dse.wyattau.com | 161 | Maths, Physics, Biology, Chemistry, Economics, ICT, Geography, History |
| IB | ib.wyattau.com | 304 | Maths, Physics, Biology, Chemistry, Economics, English, CS, Geography, History, Psychology |
| A-Level | alevel.wyattau.com | 366 | Maths, Further Maths, Physics, Biology, Chemistry, Economics, English, Geography, History, Psychology, CS |
| University | university.wyattau.com | 444 | Mathematics, Physics, Chemistry, CS, Computing, Admissions |
| Qualifications | qualifications.wyattau.com | 271 | GCSE, A-Level, AP, SAT, CBSE, Gaokao, Highers, HSC, ILC |
| Languages | languages.wyattau.com | 189 | Python, Rust, Go, TypeScript, Java, Kotlin, Swift, Haskell, Elixir, Ruby, Dart |
| Programming | programming.wyattau.com | 129 | C++ toolchain, types, OOP, templates, concurrency, STL |
| Infrastructure | infrastructure.wyattau.com | 93 | Linux, networking, security, databases, ML, tuning |
| Tools | tools.wyattau.com | 63 | Git, algorithms, licensing |

**Total: 2,020 files across 9 sites**

## Tech Stack

- **Astro 5.x** + **Starlight 0.32.x**
- **SolidJS** (interactive island components)
- **Bun** (package manager + runtime)
- **KaTeX** (math rendering via remark-math + rehype-katex)
- **Pagefind** (built-in search)

## Build

```bash
# Install all sites
bun run install:all

# Build a specific site
cd sites/dse && bun install && bun run build

# Build all sites
bun run build:all
```

## Interactive Components

| Component | Lines | Used In |
|-----------|-------|---------|
| FlashcardDeck | 839 | 131 files |
| PracticeProblem | 267 | 169 files |
| DiagnosticTest | 577 | 12 files |
| DesmosGraph | 233 | 33 files |
| PhetSimulation | 73 | 57 files |

All components are SolidJS islands with `client:only="solid-js"`.
