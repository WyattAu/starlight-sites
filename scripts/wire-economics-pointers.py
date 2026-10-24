#!/usr/bin/env python3
"""Point each exam-board economics landing page at the university economics site.

economics.wyattau.com carries the university treatment — micro theory,
econometrics, and game theory with the core theorems proved. The exam-board
pages (A-Level, IB, DSE) teach institutions, diagrams, and evaluation
technique; the callout names the layer underneath for readers who want the
machinery, and is deliberately skippable for readers who do not.

Idempotent: a page already carrying the callout is left alone.
"""

import sys
from pathlib import Path

ROOT = Path("sites")

# exam-board site -> its economics landing page (relative to docs/)
PAGES = {
    "alevel": "economics/economics.md",
    "ib": "economics/index.md",
    "dse": "economics/index.md",
}

CALLOUT = """

:::note[Going further with economics?]
These pages teach the exam: diagrams, evaluation structure, and the
institutions each board expects. **[economics.wyattau.com](https://economics.wyattau.com)**
is the university layer underneath — micro theory, econometrics, and game theory
with the core theorems (Slutsky, Gauss--Markov, Nash existence) proved in full,
and the proofs are where the assumptions behind the exam diagrams become
visible. Skippable by design: the exam content stands on its own.
:::
"""


def main() -> int:
    changed = 0
    for site, rel in PAGES.items():
        page = ROOT / site / "src" / "content" / "docs" / rel
        if not page.exists():
            print(f"  {site}/{rel}: missing, skipping")
            continue
        body = page.read_text(encoding="utf-8")
        if "economics.wyattau.com" in body:
            print(f"  {site}/{rel}: already wired")
            continue
        idx = body.find("\n## ")
        if idx < 0:
            idx = body.find("\n# ")
        if idx < 0:
            print(f"  {site}/{rel}: no heading found, skipping")
            continue
        insert_at = body.index("\n", idx + 1) + 1
        body = body[:insert_at] + CALLOUT + body[insert_at:]
        page.write_text(body, encoding="utf-8")
        changed += 1
        print(f"  wired  {site}/{rel}")
    print(f"\n{changed} page(s) wired.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
