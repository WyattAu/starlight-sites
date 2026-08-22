---

date: 2026-07-23T21:57:32+01:00
title: Licensing
description: "\"itemListElement\": [{\"name\": \"Home\", \"url\": \"https://wyattau.com\"}, {\"name\": \"licensing\", \"url\": \"https://licensing.wyattau.com\"}, {\"name\": \"Intro\", \"url\":"
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "licensing", "url": "https://licensing.wyattau.com"}, {"name": "Intro", "url": "https://licensing.wyattau.com/intro"}]
}
</script>

Welcome to the licensing notes.

Browse the content using the sidebar navigation on the left.

## Why Licensing Matters

Every piece of software has a license — even if you did not choose one. Without an explicit license, copyright law gives you "all rights reserved" by default, meaning nobody can use, modify, or distribute your code. Choosing the right license protects you and communicates your intentions to users.

## Key Concepts

- **Copyright** is automatic and grants exclusive rights to the creator. It does not need to be registered.
- **Licensing** is the act of granting specific permissions to others. An MIT license grants broad permissions; a GPL license grants permissions with conditions.
- **Copyleft** (GPL, AGPL) requires derivative works to use the same license. Permissive licenses (MIT, BSD, Apache) allow proprietary derivatives.

## Common License Families

| License | Type | Key Requirement |
| --------- | ------ | ----------------- |
| MIT | Permissive | Include copyright notice |
| BSD 2-Clause | Permissive | Include copyright notice |
| Apache 2.0 | Permissive | Include notice, state changes, patent grant |
| GPL v3 | Copyleft | Derivative works must be GPL |
| AGPL v3 | Strong Copyleft | Network use triggers copyleft |
| MPL 2.0 | Weak Copyleft | File-level copyleft |

## Why This Matters

Choosing the wrong license can have lasting consequences for your project. A GPL license in a commercial product may require you to release your source code. A permissive license without patent protection may leave you vulnerable to patent claims. Understanding the legal implications of each license family is not optional — it is a fundamental part of software development.

## Practical Guidance

- **For personal projects:** MIT or BSD are simple and permissive. They allow anyone to use, modify, and distribute your code with minimal restrictions.
- **For commercial products:** Apache 2.0 provides patent grants and explicit contributor licensing. Avoid GPL if you want to keep your code proprietary.
- **For community projects:** GPL or AGPL ensure that improvements remain open. Choose based on whether you want to allow proprietary forks.

---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "licensing", "url": "https://licensing.wyattau.com"}, {"name": "Intro", "url": "https://licensing.wyattau.com/intro"}]
}
</script>

## Intuition

**Software licences govern the legal use of code:** Every piece of software has a licence, whether explicitly stated or determined by default copyright law. Understanding licensing is essential for developers, companies, and open source contributors.

**Why it matters:** Incorrect licensing can result in legal disputes, forced code disclosure, or loss of intellectual property rights.

**The key insight:** There is no such thing as "no licence" — if you do not specify one, default copyright applies, meaning nobody can legally use, modify, or distribute your code.

## Common Mistakes

**Confusing copyright with licensing:** Copyright is automatic (applied on creation). Licensing is a choice — you decide how others can use your work. An unlicensed work is "all rights reserved" by default, even if you want to share it. Always apply an explicit license.

**Using GPL code in proprietary software:** GPL requires derivative works to also be GPL. If you incorporate GPL-licensed code into your project, your entire project must be GPL-compatible. Use MIT or Apache 2.0 for permissive licensing if you want proprietary compatibility.

**Ignoring license compatibility:** Not all licenses can be combined. GPL and Apache 2.0 have compatibility issues. BSD and MIT are broadly compatible. Before combining code from different sources, verify their licenses allow the combination.

## Cross-References

- **[Site Home](../../):** Main landing page for licensing notes.
- **[Practice](../../practice-*.mdx):** Practice problems for revision.
