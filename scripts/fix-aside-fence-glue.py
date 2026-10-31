#!/usr/bin/env python3
"""Remove stray ::: fences that are glued to an ATX heading.

A `:::` that closes nothing and opens nothing is inert for the parser but
ruins whatever it is glued to: `:::## Cross-References` stops rendering as a
heading and appears as literal text. The repair is to drop the fence and leave
the heading on its own line.

Only lines where the fence is followed by an ATX heading are touched. Anything
else is left alone, so this cannot mangle a legitimate aside.
"""

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SITES = ROOT / "sites"

# Optional roots let tests point the fixer at a fixture tree.
ROOTS = [Path(a).resolve() for a in sys.argv[1:]] or [SITES]

# ::: glued to a markdown heading, optionally with trailing title text.
GLUED = re.compile(r"^(:{3,})(#{1,6}\s+\S.*)$")


def content_dirs(root: Path):
    """Yield the docs directories to sweep under a root."""
    if (root / "src" / "content" / "docs").is_dir():
        yield root / "src" / "content" / "docs"
    elif root.name == "docs":
        yield root
    elif root.is_dir():
        for site in sorted(root.iterdir()):
            docs = site / "src" / "content" / "docs"
            if docs.is_dir():
                yield docs


changed = []
for base in ROOTS:
    for docs in content_dirs(base):
        for path in sorted(docs.rglob("*.md")) + sorted(docs.rglob("*.mdx")):
            text = path.read_text(encoding="utf-8")
            lines = text.split("\n")
            in_fence = False
            out = []
            touched = 0
            for line in lines:
                stripped = line.lstrip()
                if stripped.startswith("```") or stripped.startswith("~~~"):
                    in_fence = not in_fence
                    out.append(line)
                    continue
                m = None if in_fence else GLUED.match(line)
                if m:
                    out.append(m.group(2))
                    touched += 1
                else:
                    out.append(line)
            if touched:
                path.write_text("\n".join(out), encoding="utf-8")
                changed.append((path.relative_to(base), touched))

for path, n in changed:
    print(f"  repaired {n} stray fence(s) in {path}")
print(f"{sum(n for _, n in changed)} stray fence(s) removed across {len(changed)} file(s)")
sys.exit(0)