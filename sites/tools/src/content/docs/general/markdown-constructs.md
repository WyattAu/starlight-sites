---
title: Markdown & MDX Constructs
description: "Use through . Do not skip levels (e.g., jumping from to ). The first heading In a page body should be because Docusaurus uses the frontmatter as the ."
date: 2025-05-15T22:45:51.828Z
tags:
  - general
categories:
  - general

---

## Standard Markdown

### Headings

Use `#` through `######`. Do not skip levels (e.g., jumping from `##` to `####`). The first heading
In a page body should be `##` because Docusaurus uses the frontmatter `title` as the `h1`.

```md
## Level 2

### Level 3

#### Level 4
```

### Emphasis

```md
_italic_ or _italic_ **bold** or **bold** **_bold italic_** ~~strikethrough~~
```

### Links and Images

```md
[link text](https://example.com) [reference link][ref]

[ref]: https://example.com

![alt text](image.png)
```

For images stored in the same docs directory, use relative paths. Docusaurus resolves them at build
Time and copies them to the static output.

### Blockquotes

```md
> This is a blockquote.
>
> It can span multiple paragraphs.
```

Nesting is supported:

```md
> Level 1
>
> > Level 2
```

### Lists

Unordered:

```md
- Item
- Item
  - Nested item
  - Another nested item
```

Ordered:

```md
1. First
2. Second
3. Third
   1. Nested
```

### Horizontal Rule

```md
---
```

Three or more hyphens, asterisks, or underscores on a line by themselves.

## Extended Markdown Features (GFM)

### Tables

```md
| Header 1   | Header 2 | Header 3    |
| ---------- | -------- | ----------- |
| Cell 1     | Cell 2   | Cell 3      |
| Left align | Center   | Right align |
| Left align | Center   | Right align |
```

Column alignment with colons:

```md
| Left | Center | Right |
| :--- | :----: | ----: |
| L    |   C    |     R |
```

Tables that need complex cell content (code blocks, lists) will not render correctly in standard
Markdown. For those cases, use the custom `.grid-table` CSS class with div-based structure, or use
An MDX component.

### Task Lists

```md
- [x] Completed task
- [ ] Incomplete task
- [ ] Another incomplete task
```

These render as checkboxes. Useful for tracking progress in notes.

### Footnotes

```md
Here is a statement that needs a citation[^1].

[^1]: This is the footnote content. It appears at the bottom of the page.
```

Footnotes support multiple references to the same note and can contain inline formatting, links, and
Even code.

### Definition Lists

Some markdown processors support definition lists, but they are not part of standard GFM. In
Docusaurus, use a description list via HTML or a custom component if needed.

### Strikethrough

```md
~~This text is struck through.~~
```

Renders as ~~This text is struck through.~~

## Code Blocks

### Inline Code

`` `Backticks` `` for inline code. For template syntax or generics, escape angle brackets outside
Code blocks: use `std::vector&lt;int&gt;` in prose.

### Fenced Code Blocks

Specify the language after the opening fence for syntax highlighting:

````md
```python
Def hello():
 print("Hello, world")
```

```cpp
#include <iostream>

Int main() {
 std::cout << "Hello, world\n";
}
```
````

Supported languages include `python``cpp``java``dart``javascript``typescript``bash`
`json``yaml``sql`And many more.

### Line Highlighting

Docusaurus supports commenting specific lines to highlight them:

````md
```python
Def greet(name): # highlight-next-line
 print(f"Hello, {name}")
 return True # highlight-line
```
````

### Custom Title

````md
```python title="my_script.py"
Print("hello")
```
````

### Diff Mode

````md
```diff
- old line
+ new line
 unchanged line
```
````

## Docusaurus-Specific MDX Features

### Admonitions

Admonitions are the preferred way to call out important information:

```md
<aside aria-label="This is a note. :::" class="starlight-aside starlight-aside--note"><p class="starlight-aside__title" aria-hidden="true"><svg class="starlight-aside__icon" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 14a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-5a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v2Z"/></svg>This is a note. :::</p>
> **Tip:** This is a tip.

> **Info:** This is informational.

> **Caution:** This is a caution.

> **Danger:** This is dangerous.

> **Caution:** This is a warning.
```

Admonitions support optional titles:

```md
> **Tip:** Custom Title Content here.
```

They can also be collapsible (Docusaurus 3):

```md
:::note[Click to expand] Hidden content that is revealed on click.
</aside>
```

### Tabs

Tabs require an MDX import:

````mdx
import { Tabs } from "@astrojs/starlight/components';
import { TabItem } from '@astrojs/starlight/components';

&lt;Tabs&gt; &lt;TabItem value="python" label="Python"&gt;

```python
Print("Python code")
```

&lt;/TabItem&gt; &lt;TabItem value="java" label="Java"&gt;

```java
System.out.println("Java code");
```

&lt;/TabItem&gt; &lt;/Tabs&gt;
````

Tabs support synchronization by `groupId`. Tabs with the same `groupId` across the page will switch
In unison:

```mdx
&lt;Tabs groupId="language"&gt; &lt;TabItem value="python" label="Python"&gt; ... &lt;/TabItem&gt;
&lt;TabItem value="java" label="Java"&gt; ... &lt;/TabItem&gt; &lt;/Tabs&gt;
```

### Math with KaTeX

This site imports KaTeX CSS in `src/css/custom.css`. Use it for mathematical notation.

Inline math:

```md
The quadratic formula is $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$.
```

Block math:

```md
$$
\int_{-\infty}^{\infty} e^{-x^2} \, dx = \sqrt{\pi}
$$
```

KaTeX supports a wide range of LaTeX commands. Refer to the
[KaTeX supported functions](https://katex.org/docs/supported.html) list for what is available.

### Mermaid Diagrams

Docusaurus supports Mermaid diagrams natively in code blocks:

````md
```mermaid
Graph TD
 A[Start] --> B{Decision}
 B -->|Yes| C[Action 1]
 B -->|No| D[Action 2]
 C --> E[End]
 D --> E
```
````

Supported diagram types include `graph``sequenceDiagram``classDiagram``stateDiagram`
`erDiagram``gantt``pie`And `flowchart`.

This site adds a hover zoom effect on Mermaid SVGs via `src/css/custom.css`:

```css
.mermaid svg:hover {
  transform: scale(1.2);
  transform-origin: center;
}
```

### Details / Summary

```mdx
&lt;details&gt; &lt;summary&gt;Click to expand&lt;/summary&gt;

Hidden content here.

&lt;/details&gt;
```

<aside aria-label="Do not nest `&lt;details&gt;` inside another `&lt;details&gt;`. This causes rendering" class="starlight-aside starlight-aside--caution"><p class="starlight-aside__title" aria-hidden="true"><svg class="starlight-aside__icon" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L1 21h22L12 2Zm0 4l7.53 14H4.47L12 6Zm-1 5v4h2v-4h-2Zm0 6v2h2v-2h-2Z"/></svg>Do not nest `&lt;details&gt;` inside another `&lt;details&gt;`. This causes rendering</p>
issues in Docusaurus.
</aside>
### MDX Import Statements

Since Docusaurus processes `.md` files as MDX, you can import React components:

```mdx
import CodeBlock from '@theme/CodeBlock';
import { Tabs } from '@astrojs/starlight/components';
import { TabItem } from '@astrojs/starlight/components';
import BrowserOnly from '@docusaurus/BrowserOnly';

;
```

Common `@theme` imports:

| Component          | Purpose                               |
| ------------------ | ------------------------------------- |
| `CodeBlock`        | Render a code block from a file path  |
| `Tabs` / `TabItem` | Tabbed content switching              |
| `Details`          | Collapsible sections with React state |
| `Admonition`       | Programmatic admonition rendering     |
| `Head`             | Inject elements into `<head>`         |

Custom components from `@site/src/components/` are also importable:

```mdx
import MyComponent from '@components/MyComponent';

&lt;MyComponent prop="value" /&gt;
```

## Frontmatter Options

Every page should have frontmatter. Here is the full set of commonly used fields:

```yaml
---
id: my-page # URL path segment (overrides filename)
title: My Page Title # Display title and h1
description: 'Use through . Do not skip levels (e.g., jumping from to ). The first heading In a page body should be because Docusaurus uses the frontmatter as the .'
slug: /custom/url/path # Full URL override
title: Short Name # Override display name in sidebar
date: 2025-05-15T22:45:51Z
tags:
  - tag1
  - tag2
categories:
  - category1
image: /img/thumbnail.png # Social sharing image
hide_table_of_contents: false
toc_max_heading_level: 4 # Max heading level for ToC
draft: true # Hide from production build
---
```

### Slug Behavior

- Without `slug`: derived from file path, e.g., `docs/docs_general-notes/intro.md` becomes
  `/docs/general-notes/intro`.
- With `slug: custom-slug`: becomes `/docs/custom-slug`.
- With `slug: /absolute/path`: becomes `/absolute/path` (bypasses the docs prefix).

### Tags and Categories

Tags and categories populate the blog-like tag pages and aid search. They are flat strings — no
Hierarchy. Use lowercase, hyphen-separated values for consistency:

```yaml
tags:
  - c-plus-plus
  - concurrency
  - modern-cpp
```

## Escaping Rules for MDX

Since MDX treats angle brackets as JSX, bare `<` and `>` in prose cause build errors.

### In Prose

Write `std::vector&lt;int&gt;` instead of `std::vector<int>`.

### In Tables

Same rule applies inside table cells:

```md
| Type                   | Description           |
| ---------------------- | --------------------- |
| `std::vector&lt;T&gt;` | Dynamic array         |
| `std::map&lt;K, V&gt;` | Associative container |
```

### In Code Blocks

No escaping needed inside fenced code blocks — the content is treated as raw text.

### Raw HTML Restrictions

Do not use
``tags or other raw HTML block elements. MDX does not allow them. Use markdown or Docusaurus components instead. Self-closing elements like`<br />`and`<img />`
are generally fine.

## Common Pitfalls

1. Focusing only on content knowledge without developing exam technique and question-answering
   skills.

2. Ignoring feedback from marked work and failing to address recurring weaknesses.

3. Not making connections between different topics within the subject to build a coherent
   understanding.

4. Memorising content without understanding the underlying principles. This leads to poor
   application in unfamiliar contexts.

## Summary

The key principles covered in this topic are linked in the sub-pages above. Focus on understanding
the definitions, applying the formulas or frameworks, and evaluating strengths and limitations of
each approach.

## Worked Examples

Worked examples demonstrating the application of key concepts are covered in the detailed sub-pages
linked above.

## Common Pitfalls in Markdown and MDX

| Pitfall | Symptom | Fix |
| ------- | ------- | --- |
| Nested blockquotes | Incorrect nesting breaks rendering | Use `>` for level 1, `> >` for level 2 |
| Table alignment markers | Misaligned columns in rendered output | Ensure colons line up with hyphens in separator row |
| Inline code with pipes | Pipe breaks table structure | Use backtick-escaped code: `` \`code\` `` |
| Task list checkboxes | Checkboxes not rendering as interactive | Use `- [x]` and `- [ ]` with spaces exactly as shown |
| Unescaped angle brackets | Build error in MDX files | Write `&lt;` and `&gt;` in prose and table cells |
| Missing language on code fence | No syntax highlighting applied | Always specify language: ` ```python ` |
| Incorrect admonition syntax | Admonition rendered as blockquote | Use `:::note` at start, `:::` at end on its own line |
| Double blank lines | Unnecessary vertical space in output | Use single blank lines between sections |
| Tabs vs. spaces in code blocks | Indentation rendered inconsistently | Use consistent indentation (2 or 4 spaces) throughout |
| Frontmatter title as h1 | Duplicate h1 heading in rendered page | Start body content with `##` (h2) level headings |

<aside aria-label="Quick Reference" class="starlight-aside starlight-aside--tip"><p class="starlight-aside__title" aria-hidden="true"><svg class="starlight-aside__icon" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9.37 2.51a.75.75 0 0 1-.28 1.02L5.59 5H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2.59l-3.09 2.97a.75.75 0 1 1-1.02-1.09l4.5-4.5a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.02 1.08L7 10.5V17a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3v-2.38l2.12 2.12a.75.75 0 1 0 1.06-1.06l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 1 0-1.06-1.06l-4.5 4.5a.75.75 0 0 1-1.06 0L7.64 3.53a.75.75 0 0 1-.28-1.02ZM19 18a1 1 0 0 0-1-1h-2v-2a1 1 0 0 0-2 0v2H9a1 1 0 0 0-1 1v3h12v-3Z"/></svg>Quick Reference</p>
For a complete syntax reference, consult the
[Docusaurus Markdown documentation](https://docusaurus.io/docs/markdown-features)
and the [MDX specification](https://mdxjs.com/).
</aside>