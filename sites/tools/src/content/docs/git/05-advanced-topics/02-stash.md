---

title: "Stash | Tools - Wyatt's Notes"
description: "temporarily shelves changes in your working directory and index, restoring your repository to a clean state (matching HEAD). It is a stack-based mechanism —"
date: 2025-06-03T09:00:00.000Z
tags:
  - git
  - advanced
  - stash
categories:
  - CS

---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "tools", "url": "https://tools.wyattau.com"}, {"name": "Git", "url": "https://tools.wyattau.com/git"}, {"name": "05 Advanced Topics", "url": "https://tools.wyattau.com/git/05-advanced-topics"}, {"name": "02 Stash", "url": "https://tools.wyattau.com/git/05-advanced-topics/02-stash"}]
}
</script>

## What is Stash

`git stash` temporarily shelves changes in your working directory and index, restoring your
repository to a clean state (matching HEAD). It is a stack-based mechanism — you can push multiple
stashes and pop them in LIFO order.

### When to Use Stash

- Switching branches with uncommitted work you cannot commit yet.
- Pulling remote changes that conflict with your local work.
- Running a quick test on a clean working directory.
- Context-switching between tasks.
