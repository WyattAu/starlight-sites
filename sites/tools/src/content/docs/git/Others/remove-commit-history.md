---

title: "Remove Commit History | Tools - Wyatt's Notes"
date: 2025-06-02T21:52:46.700Z
description: "- Clone Git repository - Create orphan branch - - Stage all changes - - - Delete old branch - - Rename current temp branch to main - - Force-push current"
tags:
  - git
categories:
  - CS

---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "tools", "url": "https://tools.wyattau.com"}, {"name": "Git", "url": "https://tools.wyattau.com/git"}, {"name": "Others", "url": "https://tools.wyattau.com/git/Others"}, {"name": "Remove Commit History", "url": "https://tools.wyattau.com/git/Others/remove-commit-history"}]
}
</script>

## Intuition

Removing commit history is a destructive operation that creates a fresh repository with a single commit containing the current state of all files. This is useful when sensitive data like passwords or API keys have been accidentally committed, or when a repository's history is too cluttered to be useful. The orphan branch technique creates a new branch with no parent, and force-pushing replaces the remote history entirely. The key insight is that Git stores content by hash, so rewriting history creates entirely new commit objects.

## Proposed Solution

- Clone Git repository
- Create orphan branch
- `git checkout --orphan temp`
- Stage all changes
- `git add -A`
- `git commit -m "init commit (cleaned history)"`
- Delete old branch
- `git branch -D main`
- Rename current temp branch to main
- `git branch -m main`
- Force-push current branch to GitHub
- `git push -f origin main`
- Delete all other branches and tags if needed

  ```bash
  git tag | xargs git tag -d  # Delete local tags
  git push origin --delete --tags  # Delete remote tags
  git push origin --delete old-branch  # Repeat for historical branches
  ```

## Common Pitfalls

1. Neglecting to normalise database designs, leading to data redundancy and update anomalies.

2. Misunderstanding the difference between a stack (LIFO) and a queue (FIFO) in data structure
   applications.

3. Forgetting that $O(n \log n)$ average-case for quicksort becomes $O(n^2)$ worst-case on already
   sorted input.

4. Mixing up Big O, Big $\Omega$, and Big $\Theta$ notation. Big O is an upper bound, not
   necessarily tight.

### When to Use This Approach

- **Removing sensitive data**: passwords, API keys, or private keys accidentally committed to the
  repository history.
- **Starting fresh**: when a repository"s history is cluttered with merge conflicts, broken commits,
  or irrelevant experimental branches.
- **Reducing repository size**: large binary files bloating the `.git` directory.

### Alternative: `git filter-branch`

For selective history rewriting (removing specific files without losing all history):

```bash
## Remove a file from all commits
git filter-branch --force --index-filter   'git rm --cached --ignore-unmatch path/to/sensitive-file'   --prune-empty -- --all

## Clean up and force-push
git reflog expire --expire=now --all
git gc --prune=now --aggressive
git push --force --all
```

### Alternative: BFG Repo-Cleaner

For faster history cleaning on large repositories:

```bash
# Install BFG
# https://rtyley.github.io/bfg-repo-cleaner/

# Clone a fresh bare copy
git clone --mirror git@github.com:user/repo.git

# Remove files larger than 10MB
java -jar bfg.jar --strip-blobs-bigger-than 10M repo.git

# Remove a specific file
java -jar bfg.jar --delete-sensitive-file config/secrets.yaml repo.git

# Clean up
cd repo.git
git reflog expire --expire=now --all
git gc --prune=now --aggressive
git push
```

### Warning

These operations are **destructive**. Anyone who has cloned or forked the repository will have
mismatched histories. Coordinate with all contributors before rewriting history. Force-pushing to
shared branches should only be done during agreed maintenance windows.

### Recovery After Accidental Force-Push

If commits are lost after a force-push, several recovery paths exist:

1. **From local reflog**: If the original commits still exist locally, `git reflog` lists previous
   HEAD positions. Reset to the desired entry and re-push:

   ```bash
   git reflog
   git reset --hard HEAD@{1}
   git push --force
   ```

2. **From a collaborator's clone**: Another contributor who has not rebased can push the original
   history back:

   ```bash
   git fetch https://github.com/collaborator/repo.git main
   git reset --hard FETCH_HEAD
   git push --force
   ```

3. **From GitHub dangling refs**: GitHub retains unreachable objects for approximately 30 days. The
   GitHub API or the `git fsck --unreachable` command on a fresh clone can sometimes recover lost
   commits.

### Soft Reset Alternative

Instead of creating an orphan branch, a softer approach collapses all history into one commit while
preserving the full working tree state:

```bash
git reset --soft $(git rev-list --max-parents=0 HEAD)
git commit --amend -m "Squashed initial commit"
git push --force origin main
```

This avoids orphan branch bookkeeping and keeps the final diff intact in a single commit.

### Notes on Shared Repositories

Force-pushing to shared branches disrupts all collaborators. Before rewriting history:

- Announce a maintenance window and coordinate with all contributors.
- Ask collaborators to rebase their work onto the new history afterward.
- For truly sensitive data (credentials, tokens), consider rotating the leaked secrets entirely
  rather than relying solely on history removal, since forks and clones may retain the data.

## Summary

The key principles covered in this topic are linked in the sub-pages above. Focus on understanding
the definitions, applying the formulas or frameworks, and evaluating strengths and limitations of
each approach.

## Worked Examples

Worked examples demonstrating the application of key concepts are covered in the detailed sub-pages
linked above.

---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "tools", "url": "https://tools.wyattau.com"}, {"name": "Git", "url": "https://tools.wyattau.com/git"}, {"name": "Others", "url": "https://tools.wyattau.com/git/Others"}, {"name": "Remove Commit History", "url": "https://tools.wyattau.com/git/Others/remove-commit-history"}]
}
</script>

## Cross-References

- [Filter Repo](/tools/git/05-advanced-topics/10-filter-repo) is the modern recommended tool for the history rewriting operations this guide covers.
- [Git Objects](/tools/git/02-fundamentals/02-git-objects) explains the object model that must be reconstructed when commit history is removed.
- [Reflog](/tools/git/05-advanced-topics/01-reflog) shows how to recover from accidental history rewrites using the reference log.
