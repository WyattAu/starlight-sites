#!/usr/bin/env python3
"""Repoint cross-site links at the retired mathematics course routes.

The redirects in sites/mathematics/astro.config.mjs keep every retired route
resolving, so these links are not broken. But they are stale: each one is a
statement that the mathematics course lives at `/complex-analysis/` when the
content is at `/6-complex-analysis/`, and 40+ files across the network assert
it.

Two forms are handled:

  * Markdown links and hrefs written as bare site-relative paths, e.g.
    `](/complex-analysis/)` -- these only resolve correctly on the mathematics
    site itself, so they are rewritten by route name.
  * Absolute cross-site URLs, e.g.
    `https://mathematics.wyattau.com/real-analysis/`.

Generated `public/llms.txt` and `llms-full.txt` are included: they are built
artifacts checked into the repo, and leaving them advertising retired routes
means the site's own machine-readable index points at the wrong place.

Sub-paths are preserved, and the alternation is longest-first so that
`probability-and-statistics` is never truncated to `probability`.
"""

import re
import sys
from pathlib import Path

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

# Anything that could carry a link: prose, generated llms indexes, templates.
SEARCH_ROOTS = [Path("sites"), Path("shared")]
SKIP_PARTS = {"node_modules", ".git", "dist", ".astro", ".wrangler"}

SLUG_ALT = "|".join(re.escape(s) for s in sorted(ROUTES, key=len, reverse=True))
SUFFIX = r"(?P<suffix>(?:/[A-Za-z0-9._~-]*)*/?)"

# Absolute cross-site URL to the mathematics host.
ABS = re.compile(
    r"(?P<pre>https://mathematics\.wyattau\.com)/(?P<slug>" + SLUG_ALT + r")" + SUFFIX
)
# Bare site-relative path in a markdown link or href.
REL = re.compile(
    r"(?P<pre>\]\(|href=\")/(?P<slug>" + SLUG_ALT + r")" + SUFFIX + r"(?P<post>\)|\"|#)?"
)


def rewrite(text: str) -> tuple[str, int]:
    count = 0

    def abs_repl(match: re.Match) -> str:
        nonlocal count
        count += 1
        return match.group("pre") + "/" + ROUTES[match.group("slug")] + match.group("suffix")

    def rel_repl(match: re.Match) -> str:
        nonlocal count
        # A route that already names its track must be left alone.
        slug = match.group("slug")
        suffix = match.group("suffix") or ""
        if suffix.startswith("/" + ROUTES[slug]):
            return match.group(0)
        count += 1
        return match.group("pre") + "/" + ROUTES[slug] + suffix + (match.group("post") or "")

    text = ABS.sub(abs_repl, text)
    text = REL.sub(rel_repl, text)
    return text, count


def main() -> int:
    apply = "--apply" in sys.argv
    per_file: dict[str, int] = {}

    for root in SEARCH_ROOTS:
        for path in sorted(root.rglob("*")):
            if path.suffix not in (".md", ".mdx", ".txt", ".astro", ".ts", ".mjs", ".js"):
                continue
            if SKIP_PARTS & set(path.parts):
                continue
            original = path.read_text(encoding="utf-8", errors="replace")
            updated, count = rewrite(original)
            if count and updated != original:
                per_file[str(path)] = count
                if apply:
                    path.write_text(updated, encoding="utf-8")

    for name in sorted(per_file):
        print(f"  {per_file[name]:4d}  {name}")
    total = sum(per_file.values())
    verb = "repointed" if apply else "would repoint"
    print(f"\n{verb} {total} cross-site references across {len(per_file)} files.")
    if not apply:
        print("Dry run. Re-run with --apply to rewrite.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
