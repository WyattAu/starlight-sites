#!/usr/bin/env python3
"""Wire each subject's transition page into its hub and intro pages.

The mathematics site's before-you-begin page is the exemplar: a skippable
baseline section, addressed to readers whose school background is exam-focused,
with a self-test at the end so confident readers can skip by assessment rather
than by trust. This script gives every other subject the same front door, with
subject-specific prerequisites named rather than a generic paragraph.

Idempotent: a hub or intro that already links its transition page is left alone.
"""

import sys
from pathlib import Path

ROOT = Path("sites")

# site -> (page title fragment, subject-specific prerequisite sentence).
SUBJECTS = {
    "physics": (
        "Before You Begin: The Mathematics Physics Assumes",
        "vectors, trigonometry, coordinate geometry, and single-variable "
        "calculus including the chain and product rules",
    ),
    "chemistry": (
        "Before You Begin: The Chemistry Your School Course Skipped",
        "moles and stoichiometry, electron configuration, bonding models, and "
        "the algebra of equilibrium expressions",
    ),
    "economics": (
        "Before You Begin: The Mathematics Economics Assumes",
        "percentages and elasticities, simultaneous equations, and reading "
        "graphs of functions",
    ),
    "computer-science": (
        "Before You Begin: Abstractions CS Assumes You Already Have",
        "functions as reusable units, boolean logic, and how a loop and a "
        "variable actually execute",
    ),
}


def callout(title: str, url: str, prereq: str) -> str:
    return f"""

:::note[New to the subject, or from a different exam board?]
Read **[{title}]({url})** first. It rebuilds what the tracks assume -- {prereq} --
from first principles, defines every term before it is used, and ends with a
self-test so confident readers can skip by assessment rather than by trust.
:::
"""


def main() -> int:
    changed = 0
    for site, (title, prereq) in SUBJECTS.items():
        docs = ROOT / site / "src" / "content" / "docs"
        if not docs.exists():
            print(f"  {site}: no docs directory, skipping")
            continue
        slug = "before-you-begin"
        url = f"/{slug}/"
        text = callout(title, url, prereq)
        for name in ("hub.md", "intro.md"):
            page = docs / name
            if not page.exists():
                continue
            body = page.read_text(encoding="utf-8")
            if slug in body:
                continue
            marker = body.find("</script>")
            if marker < 0:
                continue
            at = marker + len("</script>")
            body = body[:at] + text + body[at:]
            page.write_text(body, encoding="utf-8")
            changed += 1
            print(f"  wired  {site}/{name}")
    print(f"\n{changed} page(s) wired.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
