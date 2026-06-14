# Contributing to Wyatt's Notes

## Reporting Issues

Open an issue with:

1. **Subject** -- Which subject/topic contains the error
2. **Page URL** -- The specific page with the issue
3. **Description** -- What is incorrect and what the correct information should be
4. **Evidence** -- Reference to official syllabus or textbook if available

## Submitting Changes

1. Fork the repository
2. Create a branch: `git checkout -b fix/subject-topic`
3. Make changes
4. Run linters: `bun run lint`
5. Run tests: `bun run test`
6. Submit a pull request

## Content Guidelines

### Writing Style

- Precise and formal
- Define terms before using them
- Include worked examples for complex concepts
- Use consistent notation throughout

### Mathematical Content

- Inline math: `$...$`
- Display math: `$$...$$`
- Verify formulas render correctly

### Code Examples

- Complete, runnable examples
- Comments on key lines
- Test examples before submitting
- Consistent formatting

### Structure

- Start with clear learning objectives
- Build from simple to complex
- Include practice problems
- Cross-reference related topics

## Development Setup

```bash
git clone https://github.com/WyattAu/starlight-sites.git
cd starlight-sites
bun install
cd sites/dse && bun run dev
```

## Code of Conduct

- Be respectful and constructive
- Focus on educational value
- Cite sources when possible
- Maintain academic integrity
