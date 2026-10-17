#!/usr/bin/env python3
"""Retire the superseded course monoliths at the mathematics docs root.

Every one of these files was a whole course at `src/content/docs/<name>.md`,
later split into a numbered track directory. The tracks are now the fuller
version -- verified by content-item coverage against the track pages, not by
line counts -- so keeping the root copy meant shipping a second, thinner
teaching of the same subject and giving a reader who landed on it the worse
account.

Deletion is only safe if nothing loses a route, so the check is ordered:
`--apply` refuses to delete unless every affected route has a redirect, and the
caller is expected to have added them (see astro.config.mjs).
"""

import re
import sys
from pathlib import Path

DOCS = Path("sites/mathematics/src/content/docs")
CONFIG = Path("sites/mathematics/astro.config.mjs")

# monolith filename -> track directory it was split into
MONOLITHS = {
    "abstract-algebra.md": "1-abstract-algebra",
    "complex-analysis.md": "6-complex-analysis",
    "differential-equations.md": "5-ordinary-differential-equations",
    "linear-algebra.md": "2-linear-algebra",
    "multivariable-calculus.md": "4-multivariable-calculus",
    "number-theory.md": "7-number-theory",
    "probability-and-statistics.md": "8-probability-and-statistics",
    "probability.md": "8-probability-and-statistics",
    "real-analysis.md": "3-real-analysis",
}


def declared_redirects() -> set[str]:
    """Route prefixes declared in the astro config's redirects block."""
    text = CONFIG.read_text(encoding="utf-8")
    block = re.search(r"redirects:\s*\{(.*?)\n  \}", text, re.S)
    if not block:
        return set()
    return set(re.findall(r"'([^']+)'\s*:", block.group(1)))


def main() -> int:
    apply = "--apply" in sys.argv

    present = [name for name in MONOLITHS if (DOCS / name).exists()]
    if not present:
        print("No monoliths present; nothing to do.")
        return 0

    redirects = declared_redirects()
    missing_redirects = [
        name for name in present if f"/{Path(name).stem}" not in redirects
    ]
    if missing_redirects:
        print("Refusing to proceed: these routes have no redirect configured:")
        for name in missing_redirects:
            print(f"  /{Path(name).stem}  (from {name})")
        print("\nAdd them to the redirects block in astro.config.mjs first, then re-run.")
        return 1

    total = 0
    for name in present:
        path = DOCS / name
        lines = len(path.read_text(encoding="utf-8").splitlines())
        track = MONOLITHS[name]
        if apply:
            path.unlink()
        total += lines
        verb = "removed" if apply else "would remove"
        print(f"  {verb} {name} ({lines} lines) -> {track}")

    print(f"\n{len(present)} monoliths, {total} lines {'removed' if apply else 'pending'}.")
    if not apply:
        print("Dry run. Re-run with --apply to delete.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
