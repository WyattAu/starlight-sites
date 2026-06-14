# ADR-001: Use Astro Starlight over Docusaurus

## Status

Accepted

## Context

Wyatt's Notes needed a static site generator for 9 documentation sites. Options evaluated:
- Astro Starlight
- Docusaurus
- MkDocs Material
- VitePress

## Decision

Use Astro Starlight as the documentation framework.

## Rationale

- **Performance**: Astro's island architecture ships zero JS by default. Docusaurus ships React runtime.
- **Component model**: Starlight supports SolidJS islands for interactive components (flashcards, quizzes).
- **MDX support**: Native MDX with remark/rehype plugin ecosystem.
- **Built-in features**: Search (Pagefind), i18n, sidebar autogenerate, dark mode.
- **TypeScript**: Full TypeScript support with strict mode.
- **Community**: Active development, regular releases, strong ecosystem.

## Consequences

- Positive: Faster page loads, smaller bundles, better SEO.
- Positive: SolidJS integration for interactive components.
- Negative: Smaller community than Docusaurus.
- Negative: Some Starlight-specific patterns (component overrides) have learning curve.

## Alternatives Considered

| Option | Pros | Cons | Rejected Because |
|--------|------|------|------------------|
| Docusaurus | Large community, React ecosystem | Ships React runtime, slower | Performance |
| MkDocs Material | Simple, fast build | Limited interactivity | No SolidJS support |
| VitePress | Fast, Vue-based | Vue ecosystem, less flexible | Team expertise |
