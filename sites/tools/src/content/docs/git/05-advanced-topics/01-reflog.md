---
title: Reflog
description: ""Add login page"
b7e9d4f5 HEAD@{1}: commit: Add login page

# Create a branch pointing to it
$ git branch recovered-work b7e9d4f5
```

## Reflog Expiry and Garbage Collection

Reflog entries do not persist forever. By default:

| Setting                      | Default | Meaning                                               |
| ---------------------------- | ------- | ----------------------------------------------------- |
| `gc.reflogExpire`            | 90 days | Reflog entries older than this are expired            |
| `gc.reflogExpireUnreachable` | 30 days | Entries pointing to unreachable commits expire sooner |
| `gc.pruneExpire`             | 2 weeks | Unreachable objects are pruned                        |

### When Objects Are Actually Deleted

An object is only deleted when:

1. It is **unreachable** (not referenced by any branch, tag, stash, or reflog entry).
2. `git gc --prune` has been run (or `git gc` runs automatically).
3. The reflog entries pointing to it have expired.

```bash
# Show unreachable objects (not yet deleted)
$ git fsck --unreachable

# Manually run garbage collection
$ git gc --prune=now

# WARNING: This permanently deletes unreachable objects
```

:::caution

`git gc --prune=now` is permanent. After running this, any commits that were only reachable via
expired reflog entries are gone forever. Use with extreme caution.

## Reflog Best Practices

### 1. Know the Reflog Exists

The reflog is the single most important recovery tool in Git. Memorize `git reflog` — it will save
you from almost any accidental data loss.

### 2. Increase Reflog Retention for Important Branches

```bash
# Keep reflog entries for 1 year on important branches
$ git config gc.reflogExpire main.1.year.ago
```

### 3. Don't Panic

Almost nothing in Git is truly permanent until garbage collection runs. If you accidentally delete,
reset, rebase, or amend something, the reflog is your first line of defense.

## Common Pitfalls

1. Confusing authentication (who you are) with authorisation (what you can do) in security contexts.

2. Forgetting that $O(n \log n)$ average-case for quicksort becomes $O(n^2)$ worst-case on already
   sorted input.

3. Writing pseudocode that is too language-specific rather than using standard algorithmic
   constructs.

4. Confusing an algorithm with a program — an algorithm is a step-by-step procedure, not its
   implementation in code.

## Summary

The key principles covered in this topic are linked in the sub-pages above. Focus on understanding
the definitions, applying the formulas or frameworks, and evaluating strengths and limitations of
each approach.

## Worked Examples

Worked examples demonstrating the application of key concepts are covered in the detailed sub-pages
linked above.


:::