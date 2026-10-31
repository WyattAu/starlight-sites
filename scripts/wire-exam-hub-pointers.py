#!/usr/bin/env python3
"""Point each exam-board site's hub at the university transition pages.

The exam-board sites (IB, Highers, Leaving Certificate, DSE, GCSE, A-level,
AP, CBSE, Gaokao) serve students who are, by definition, about to step into
university or the workforce -- and the destination sites' transition pages
(mathematics, physics, chemistry) exist precisely for that step, written to
close the exam-board-to-university gap. A student finishing any of these
boards reaches the same baseline by reading them.

The callout is inserted after the hub's first prose heading -- exam hubs are
structured data (JSON-LD Course schema) followed by prose, so there is no
single `</script>` anchor to insert after as there is on the university sites.
Idempotent: a hub already carrying the callout is left alone.
"""

import sys
from pathlib import Path

ROOT = Path("sites")

EXAM_SITES = [
    "ib", "highers", "leaving-cert", "dse", "gcse", "alevel", "ap", "cbse",
    "gaokao",
]

CALLOUT = """

:::note[Heading to university next?]
These notes are calibrated to your exam. University mathematics and physics are
not: they assume you can read a proof, define a limit from the epsilon-delta
definition, and work with vectors and set notation. The destination sites have
free transition pages written exactly for that step -- start with
**[Before You Begin: From School to University Mathematics](https://mathematics.wyattau.com/before-you-begin/)**
and continue to
**[the physics version](https://physics.wyattau.com/before-you-begin/)**.
Both end with a self-test, so you know which sections to study.
:::
"""


def main() -> int:
    changed = 0
    for site in EXAM_SITES:
        hub = ROOT / site / "src" / "content" / "docs" / "hub.md"
        if not hub.exists():
            print(f"  {site}: no hub.md, skipping")
            continue
        body = hub.read_text(encoding="utf-8")
        if "before-you-begin" in body:
            print(f"  {site}: already wired")
            continue
        # Insert after the first prose heading, where a reader starting from
        # the top will meet it before the subject listings.
        idx = body.find("\n## ")
        if idx < 0:
            print(f"  {site}: no prose heading found, skipping")
            continue
        insert_at = body.index("\n", idx + 1) + 1
        body = body[:insert_at] + CALLOUT + body[insert_at:]
        hub.write_text(body, encoding="utf-8")
        changed += 1
        print(f"  wired  {site}/hub.md")

    print(f"\n{changed} hub(s) wired.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
