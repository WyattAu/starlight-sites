# Contributing to Wyatt's Notes

Thank you for your interest in contributing to Wyatt's Notes. This document provides guidelines for contributing to this project.

## How to Contribute

### Reporting Issues

If you find errors in the content, please open an issue with:

1. **Subject** — Which subject/topic contains the error
2. **Page URL** — The specific page with the issue
3. **Description** — What is incorrect and what the correct information should be
4. **Evidence** — Reference to official syllabus or textbook if available

### Suggesting Improvements

For content improvements:

1. Open an issue describing the improvement
2. Wait for approval before starting work
3. Submit a pull request with the changes

### Submitting Corrections

1. Fork the repository
2. Create a branch for your changes
3. Make your changes
4. Submit a pull request

## Content Guidelines

### Writing Style

- Be precise and formal
- Define terms before using them
- Include worked examples for complex concepts
- Use consistent notation throughout

### Mathematical Content

- Use LaTeX notation for formulas
- Wrap inline math in `$...$`
- Wrap display math in `$$...$$`
- Verify formulas render correctly

### Code Examples

- Include complete, runnable examples
- Add comments explaining key lines
- Test examples before submitting
- Use consistent formatting

### Structure

- Start with clear learning objectives
- Build from simple to complex
- Include practice problems
- Cross-reference related topics

## File Structure

```
sites/
├── dse/              # Hong Kong DSE notes
├── ib/               # IB Diploma notes
├── alevel/           # UK A-Level notes
├── university/       # University STEM notes
├── programming/      # C++ systems programming
├── infrastructure/   # Server administration
├── languages/        # Programming languages
├── tools/            # Algorithms and tools
└── qualifications/   # GCSE, AP, etc.
```

## Development Setup

1. Clone the repository
2. Install dependencies: `bun install`
3. Start dev server: `bun run dev`
4. Make changes
5. Test locally
6. Submit pull request

## Code of Conduct

- Be respectful and constructive
- Focus on educational value
- Cite sources when possible
- Maintain academic integrity

## Questions?

Open an issue with the "question" label.
