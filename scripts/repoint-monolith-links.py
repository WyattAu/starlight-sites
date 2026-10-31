#!/usr/bin/env python3
"""Repoint in-repo links from the retired monolith routes to their tracks.

The redirects in astro.config.mjs keep every URL working, but a link is a
statement about where a thing lives. Leaving 64 links pointing at retired routes
means the content tree keeps describing a structure that no longer exists, and
the next person to edit a cross-reference propagates a stale route.

Rewriting them to the track also means the cross-site link linter -- which
resolves routes from the local content tree -- is checking real pages rather
than silently riding on redirects.
"""

import re
import sys
from pathlib import Path

DOCS = Path("sites/mathematics/src/content/docs")

# retired route -> canonical track route
ROUTES = {
    "abstract-algebra": "1-abstract-algebra",
    "complex-analysis": "6-complex-analysis",
    "differential-equations": "5-ordinary-differential-equations",
    "linear-algebra": "2-linear-algebra",
    "multivariable-calculus": "4-multivariable-calculus",
    "number-theory": "7-number-theory",
    "probability": "8-probability-and-statistics",
    "probability-and-statistics": "8-probability-and-statistics",
    "real-analysis": "3-real-analysis",
}

# The files being deleted; references inside them need no rewriting.
RETIRED = {
    "abstract-algebra.md",
    "complex-analysis.md",
    "differential-equations.md",
    "linear-algebra.md",
    "multivariable-calculus.md",
    "number-theory.md",
    "probability-and-statistics.md",
    "probability.md",
    "real-analysis.md",
}

# Markdown links and bare absolute hrefs to a retired route.
#
# The alternation is sorted longest-first. `probability` is a prefix of
# `probability-and-statistics`, and a regex alternation takes the first
# alternative that matches -- so listing the shorter slug first makes the longer
# route match `probability` and then fail its own terminator, silently skipping
# every link to it. Sorting by descending length removes that ordering hazard.
#
# The suffix is captured so sub-paths survive: `/number-theory/8_.../` is a
# page inside the retired root course and has to move to `/7-number-theory/8_.../`,
# not just the bare route.
#
# The suffix class must include `/`. `/abstract-algebra/7_x/` ends in a slash,
# and a class without it consumes `/7_x`, then cannot terminate on the closing
# slash -- so every sub-path link silently failed to match while the bare
# `/abstract-algebra/` matched fine. That is the worst shape for a rewriting
# tool: the easy case works, the case that actually matters is skipped, and the
# run reports success.
_LINK_RE = (
    r"(?P<pre>\]\(|href=\")/?(?P<slug>"
    + "|".join(re.escape(slug) for slug in sorted(ROUTES, key=len, reverse=True))
    + r")(?P<suffix>(?:/[A-Za-z0-9._~-]*)*/?)(?P<post>\)|\"|#)?"
)
LINK = re.compile(_LINK_RE)


def main() -> int:
    apply = "--apply" in sys.argv
    changed = 0
    touched: dict[str, int] = {}

    for path in sorted(DOCS.rglob("*")):
        if path.suffix not in (".md", ".mdx"):
            continue
        rel = path.relative_to(DOCS)
        if rel.name in RETIRED and rel.parent == Path("."):
            continue

        original = path.read_text(encoding="utf-8")
        count = 0

        def repl(match: re.Match) -> str:
            nonlocal count
            slug = match.group("slug")
            suffix = match.group("suffix") or ""
            count += 1
            return (
                match.group("pre")
                + "/"
                + ROUTES[slug]
                + suffix
                + match.group("post")
            )

        updated = LINK.sub(repl, original)
        if count and updated != original:
            touched[str(rel)] = count
            changed += count
            if apply:
                path.write_text(updated, encoding="utf-8")

    for name in sorted(touched):
        print(f"  {touched[name]:3d}  {name}")
    total = sum(touched.values())
    verb = "repointed" if apply else "would repoint"
    print(f"\n{verb} {total} references across {len(touched)} files.")
    if not apply:
        print("Dry run. Re-run with --apply to rewrite.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
