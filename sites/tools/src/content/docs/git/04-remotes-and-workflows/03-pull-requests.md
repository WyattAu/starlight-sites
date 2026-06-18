---
title: Pull Requests
description: ""This is wrong"          | "This condition is inverted — `x < 0` should be `x >= 0`"              |
| "Use a better algorithm" | "A binary search would reduce this from $O(n)$ to $O(\log n)$"         |
| "This is hard to read"   | "Extract this into a named function `is_valid_email` with a docstring" |

**Distinguish blocking from non-blocking comments:**

```markdown
[REQUIRED] This must be fixed before merging.

- The null check is missing -- this will crash if `user` is null.

[SUGGESTION] Consider this improvement (non-blocking).

- You could use `String::from_utf8_lossy` instead of `unsafe { String::from_utf8_unchecked }`.

[QUESTION] I"m not sure about this -- please clarify.

- Why is the timeout set to 30 seconds? Is this documented somewhere?
```

## CI Integration

### Required Status Checks

Configure GitHub to require certain checks before a PR can be merged:

1. **Tests**: `npm test``cargo test``pytest`Etc.
2. **Linting**: `eslint``clang-tidy``flake8`Etc.
3. **Type checking**: `tsc --noEmit``mypy`Etc.
4. **Build**: `npm run build``cargo build`Etc.
5. **Security**: `npm audit``snyk test`Etc.

### Branch Protection Rules

For the `main` branch, configure:

| Rule                      | Purpose                                            |
| ------------------------- | -------------------------------------------------- |
| Require PR before merging | All changes must be reviewed                       |
| Require approvals (1+)    | At least one person must approve                   |
| Require status checks     | All CI checks must pass                            |
| Require up-to-date branch | PR must be rebased on latest `main` before merging |
| Require signed commits    | Commits must be GPG/SSH signed                     |
| Require linear history    | No merge commits (force rebase)                    |
| Restrict who can push     | Only authorized users can bypass PRs               |

### Auto-Merge

After all checks pass and approvals are granted, enable auto-merge:

```bash
# Via GitHub CLI
$ gh pr merge 42 --auto --squash
```

## Merging Strategies on Platforms

| Strategy                  | Git Command                          | When to Use                                  |
| ------------------------- | ------------------------------------ | -------------------------------------------- |
| **Create a merge commit** | `git merge --no-ff`                  | Preserves full history; good for large teams |
| **Squash and merge**      | `git merge --squash`                 | Linear history; one commit per PR            |
| **Rebase and merge**      | `git rebase` + `git merge --ff-only` | Linear history; preserves individual commits |

### Squash and Merge: Implications

Squash and merge creates a single commit from all commits in the PR. This has consequences:

- **Pros**: Clean, linear history; easy to `git bisect`; PR is a single unit.
- **Cons**: Individual commit messages are lost; cannot revert a specific commit within the PR.

:::tip

If you use squash and merge, ensure your PR title and description are comprehensive — they become
the only commit message for the entire change.

## Reverting a PR

### After a Merge Commit

```bash
$ git revert -m 1 <merge-commit-hash>
```

The `-m 1` flag tells Git to keep the first parent (the branch you merged into), effectively undoing
the entire feature.

### After a Squash and Merge

```bash
$ git revert <squash-commit-hash>
```

Single commit — straightforward revert.

## PR Etiquette

1. **Self-review** before requesting review — fix obvious issues yourself.
2. **Keep PRs small** — review under 400 lines of changes.
3. **Respond promptly** to review comments.
4. **Push fixes** to the same branch — don't open a new PR.
5. **Don't force-push** after someone has reviewed your code.
6. **Thank reviewers** for their time and feedback.

## Common Pitfalls

1. Forgetting edge cases in algorithm design (e.g., empty input, single element, already sorted
   data).

2. Neglecting to normalise database designs, leading to data redundancy and update anomalies.

3. Forgetting that $O(n \log n)$ average-case for quicksort becomes $O(n^2)$ worst-case on already
   sorted input.

4. Confusing an algorithm with a program — an algorithm is a step-by-step procedure, not its
   implementation in code.

## Worked Examples

Worked examples demonstrating the application of key concepts are covered in the detailed sub-pages
linked above.


:::