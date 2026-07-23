---

title: Introduction to General Notes
description: 'This resource is created not based on any curriculum, but a amalgamation of what Comprehensive educational content coverage with definitions and practice proble'
date: 2025-05-15T22:45:51.828Z
tags:
  - general
categories:
  - general
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "tools", "url": "https://tools.wyattau.com"}, {"name": "General", "url": "https://tools.wyattau.com/general"}, {"name": "Intro", "url": "https://tools.wyattau.com/general/intro"}]
}
</script>

## Intuition

**A catch-all for practical knowledge:** The General section is like a personal notebook — it captures everything that does not fit neatly into structured categories but is still worth knowing. It is the practical knowledge that makes you effective, not just knowledgeable.

**Why it matters:** Real-world engineering requires more than textbook knowledge — you need to know how to set up your development environment, contribute to open source, write documentation, and manage your career. This section covers those practical skills.

**The key insight:** The most valuable engineering knowledge is often the undocumented stuff — the keyboard shortcuts, the tool configurations, the career advice that experienced engineers share informally. This section tries to capture some of that.

## Abstract

This resource is created not based on any curriculum, but a amalgamation of whatever I drop Notes
of.

## What This Section Covers

The General Notes section is a catch-all for topics that do not fit neatly into the structured
Language-specific or academic sections of this knowledge base. Broadly, it covers:

- **Testing & Integration Patterns**: Notes on embedding external tools and services (e.g., iframes
  for Compiler Explorer, Dartpad) and the quirks involved.
- **Markdown & Docusaurus Reference**: How this site is authored, including MDX features,
  frontmatter conventions, and custom styling.
- **Examples & Life Notes**: Practical guides and recipes (e.g., alleviating back pain, crafting
  ghee) that serve as personal reference material.

There is no strict topical boundary. If something does not belong under Java, C++, Python, Dart,
Git, or A-Level notes, it probably lands here.

## How to Use These Notes

These notes are written for personal reference first and public readability second. A few principles
To keep in mind:

- **Search, do not browse linearly.** The general section is intentionally flat. Use the search bar
  or tags to find what you need rather than reading top-to-bottom.
- **Tags and categories are the primary navigation.** Each page has frontmatter with `tags` and
  `categories`. Use them to filter related content.
- **Examples are concrete.** When a note includes a code snippet, table, or procedure, it is
  intended to be copy-pasteable or directly actionable.

## Organization Philosophy

The rest of this knowledge base follows a curriculum-like structure: each language has numbered
Chapters, each chapter has ordered pages. The General section intentionally breaks from that pattern
Because its content is heterogeneous.

### Directory Layout

```
docs_general-notes/
  intro.md              <- this file
  markdown-constructs.md <- MDX / markdown reference for this site
  testing/
    iframe-integration.md <- iframe embedding patterns
  examples/
    alleviating-back-pain.md
    crafting-ghee.md
```

### Naming Conventions

- File names use `kebab-case.md`.
- Frontmatter `slug` values override the URL path when the default derived slug is undesirable.
- `sidebar_position` controls ordering; negative values push items to the top or hide them from the
  main flow.
- `tags` are flat strings (no hierarchy); `categories` mirror the top-level directory names where
  applicable.

### Writing Conventions

| Convention                 | Detail                                                                               |
| -------------------------- | ------------------------------------------------------------------------------------ |
| No inline comments         | Code blocks are self-documenting; comments added only when the intent is non-obvious |
| Frontmatter required       | Every page must have at least `title` and `date`                                     |
| Admonitions over bold      | Use Docusaurus `:::note` / `:::caution` instead of **Note:**                         |
| Tables for structured data | Prefer tables over bulleted lists when comparing attributes                          |
| KaTeX for math             | Inline with `$...$`, block with `$$...$$`                                            |

### Adding a New Page

1. Create the `.md` or `.mdx` file in the appropriate subdirectory.
2. Add frontmatter with at minimum `title``date`And `slug`.
3. Assign relevant `tags` and `categories`.
4. Set `sidebar_position` to control placement relative to siblings.
5. Run `npm run build` locally to verify there are no build errors before committing.

## Site Stack

These notes are rendered by Docusaurus 3, which means every `.md` file is processed as MDX. This
Unlocks React components, interactive tabs, and custom JSX — but also imposes constraints:

- Raw HTML tags like `` are not allowed in MDX; use Docusaurus components or markdown instead.
- Angle brackets in prose (e.g., `std::vector<int>`) must be escaped as `&lt;` and `&gt;` outside of
  code blocks.
- Nested `&lt;details&gt;` elements inside other `&lt;details&gt;` are not supported.
- Frontmatter is parsed at build time and drives sidebar ordering, page metadata, and search
  indexing.

Refer to `markdown-constructs.md` in this section for the full MDX feature reference.

## Summary

The key principles covered in this topic are linked in the sub-pages above. Focus on understanding
the definitions, applying the formulas or frameworks, and evaluating strengths and limitations of
each approach.

## Worked Examples

Worked examples demonstrating the application of key concepts are covered in the detailed sub-pages
linked above.

## Common Pitfalls

- Confusing terminology or concepts that appear similar but have distinct meanings.
- Overlooking key assumptions or boundary conditions that limit applicability.

## Overview

This introduction provides comprehensive coverage of General content for the Tools qualification, with detailed explanations, worked examples, and practice questions aligned to the specification.

## Content Structure

This page includes:

- **Key Definitions**: Precise explanations of essential concepts
- **Core Concepts**: Detailed treatment of fundamental principles
- **Worked Examples**: Step-by-step solutions demonstrating application
- **Practice Questions**: Examination-style questions with mark schemes
- **Common Pitfalls**: Frequent errors and how to avoid them
- **Exam Tips**: Strategies for maximising marks

## How to Use This Content

1. Read through the introductory material to establish context
2. Study the definitions and core concepts carefully
3. Work through the worked examples, following each step
4. Attempt the practice questions independently
5. Review your answers against the provided solutions
6. Note any areas requiring further revision

## Key Concepts

- Foundational definitions and terminology
- Application of principles to examination contexts
- Connections to related topics within the specification
- Assessment objective alignment

## Revision Strategies

- **Active Recall**: Test yourself on the material rather than passively re-reading
- **Spaced Repetition**: Review this content at increasing intervals
- **Interleaving**: Mix this topic with others during study sessions
- **Elaborative Interrogation**: Ask yourself why each concept works

## Exam Preparation

Practise applying these concepts under timed conditions. Focus on understanding what each question is asking and how marks are allocated. Review examiner reports to learn from common mistakes made by other students.

## Further Resources

- Flashcards for rapid revision of key terms
- Diagnostic tests to identify remaining gaps
- Practice problems with detailed worked solutions
- Cross-references to related topics