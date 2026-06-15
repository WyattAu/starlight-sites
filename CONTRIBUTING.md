# Contributing to Wyatt's Notes

## Reporting issues

Open an issue with:

1. **Subject** -- Which subject or topic contains the error.
2. **Page URL** -- The specific page.
3. **Description** -- What is incorrect and what the correct information should be.
4. **Evidence** -- Reference to the official syllabus or textbook, where available.

## Submitting changes

1. Fork the repository.
2. Create a branch: `git checkout -b fix/subject-topic`.
3. Make changes (see the shared-asset SOP below).
4. Run the full gate: `bun run verify`.
5. Submit a pull request.

The pre-commit hook (Husky) runs automatically and enforces per-file checks,
shared-asset integrity, and the unit + integration test suite. CI repeats the
full gate plus a nine-site build matrix on every push.

## Shared-asset single-source-of-truth SOP

Components, utilities, and styles live canonically under `shared/`. The client
search scripts live canonically under `search-api/`. Each site receives a
regenerated standalone copy so it can build independently.

- Edit the canonical source only (`shared/...` or `search-api/...`).
- Run `bun run sync` to propagate to every site.
- Run `bun run sync:check` to verify parity.
- Never edit per-site copies directly; the next sync will overwrite them and the
  integration test (`tests/unit/shared-sync.test.js`) will fail in CI on drift.

To scaffold a new site from a content directory:

```bash
bun run generate <name> <title> <url> <content-dir>
bun run sync
```

## Content guidelines

### Writing style

- Precise and formal.
- Define terms before first use.
- Include worked examples for complex concepts.
- Maintain consistent notation throughout.

### Mathematical content

- Inline math: `$...$`.
- Display math: `$$...$$`.
- Verify formulas render correctly before submitting.

### Code examples

- Complete and runnable.
- Comments on the key lines.
- Tested before submission.
- Consistent formatting.

### No-emoji policy

Emoji and pictograph symbols are prohibited in code, configuration, and
documentation. Use text equivalents (`OK` / `FAIL`, not status glyphs).
Mathematical arrows (`->`, implication) and geometric notation are permitted as
they are legitimate notation, not decoration.

## Development setup

```bash
git clone https://github.com/WyattAu/starlight-sites.git
cd starlight-sites
bun install
cd sites/dse && bun run dev
```

## Code of conduct

- Be respectful and constructive.
- Focus on educational value.
- Cite sources where possible.
- Maintain academic integrity.
