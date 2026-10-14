#!/usr/bin/env python3
"""Remove generic template paragraphs, but never below a page's depth minimum.

The most-repeated paragraph in the network appears 706 times across 28 sites:
"Worked examples demonstrating the application of key concepts are covered in
the detailed sub-pages linked above." It is true of every page and therefore
false as content. 8,385 such instances sit across 1,929 files.

Removing them raises quality -- but some pages are relying on that padding to
reach their tier minimum, and a page below its minimum has not been fixed, it
has only been exposed. So the rule is:

  remove a generic paragraph ONLY IF the page stays at or above its tier
  minimum afterwards; otherwise leave it and report it.

Pages that would fall below are a real finding and are reported as a worklist
rather than papered over. The shortfall they represent -- pages that were
passing the depth gate on boilerplate -- needs real content, which is an
editorial decision.

Tier rules and body-line counting mirror scripts/lint-depth.js exactly, so this
fixer and that gate cannot disagree about what "meets the minimum" means.
"""

from __future__ import annotations

import argparse
import collections
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SITES = ROOT / "sites"

TIERS = {1: 30, 2: 80, 3: 120, 4: 150}

# Blocks starting with these are never treated as removable prose: headings,
# tables, lists, quotes and JSX carry structure that a blanket removal would
# destroy, even when the wording is generic.
STRUCTURAL = re.compile(r"^\s*(#|\||>|[-*+]|\d+[.)]|<|import |export )")

# A block carrying an aside fence is load-bearing. Some boilerplate paragraphs
# have an aside's *closing* ::: glued to their last line, so removing them as
# prose orphans the opener -- which is how one pass of this fixer broke 190
# :::tip directives before the exclusion was added. Blocks containing a fence
# are never removed.
FENCE = ":::"


def determine_tier(path: Path, docs_dir: Path) -> int:
    rel = path.relative_to(docs_dir)
    parts = rel.parts
    if "university" in str(docs_dir):
        if path.name in ("index.md", "index.mdx"):
            return 1
        if len(parts) <= 2:
            return 2
        r = str(rel)
        if any(k in r for k in ("advanced", "proof", "theorem")):
            return 4
        return 3
    if path.name in ("index.md", "index.mdx"):
        return 1
    if len(parts) <= 2:
        return 1
    r = str(rel)
    if any(k in r for k in ("advanced", "depth", "extension", "extra")):
        return 3
    return 2


def count_body_lines(content: str) -> int:
    body = content
    if content.startswith("---"):
        end = content.find("\n---", 3)
        if end != -1:
            body = content[end + 4 :]
    n = 0
    for line in body.split("\n"):
        t = line.strip()
        if t == "" or t.startswith("<!--"):
            continue
        n += 1
    return n


def blocks(text: str):
    """Yield (start, end, joined) for blank-line separated blocks outside fences."""
    lines = text.split("\n")
    in_fence = False
    start = None
    cur: list[str] = []
    for i, line in enumerate(lines):
        s = line.strip()
        if s.startswith("```") or s.startswith("~~~"):
            in_fence = not in_fence
            if cur:
                yield start, i, "\n".join(cur).strip()
                cur = []
            continue
        if in_fence:
            continue
        if not s:
            if cur:
                yield start, i, "\n".join(cur).strip()
                cur = []
            continue
        if not cur:
            start = i
        cur.append(s)
    if cur:
        yield start, len(lines), "\n".join(cur).strip()


def collect(roots: list[Path], threshold: int, include_lists: bool):
    texts: dict[Path, str] = {}
    docs_of: dict[Path, Path] = {}
    for base in roots:
        for docs in sorted(base.glob("*/src/content/docs")):
            if not docs.is_dir():
                continue
            for p in sorted(list(docs.rglob("*.md")) + list(docs.rglob("*.mdx"))):
                if "zh" in p.parts:
                    continue
                try:
                    texts[p] = p.read_text(encoding="utf-8")
                except Exception:
                    continue
                docs_of[p] = docs

    freq: collections.Counter = collections.Counter()
    for t in texts.values():
        for _, _, b in blocks(t):
            if len(b) > 60:
                freq[b] += 1
    generic = {b for b, n in freq.items() if n >= threshold}
    if not include_lists:
        generic = {b for b in generic if not STRUCTURAL.match(b)}
    # Deliberate site boilerplate is not content filler. The network-promotion
    # paragraphs repeat on purpose, carry a real link, and are the sort of
    # thing a footer already provides -- but removing them is a presentation
    # decision rather than a correctness one, so they are left alone.
    generic = {b for b in generic if "wyattsnotes.wyattau.com" not in b}
    return texts, docs_of, generic, freq


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--check", action="store_true")
    ap.add_argument("--apply", action="store_true")
    ap.add_argument("--threshold", type=int, default=30)
    ap.add_argument("--include-lists", action="store_true")
    ap.add_argument("--report-blocked", action="store_true")
    ap.add_argument("roots", nargs="*")
    args = ap.parse_args()

    roots = [Path(r).resolve() for r in args.roots] or [SITES]
    texts, docs_of, generic, freq = collect(roots, args.threshold, args.include_lists)

    removed = 0
    removed_files = 0
    blocked: list[tuple[Path, int, int]] = []

    for path, text in texts.items():
        tier = determine_tier(path, docs_of[path])
        minimum = TIERS[tier]
        # Work out which generic blocks could go.
        targets = [
            (s, e)
            for s, e, b in blocks(text)
            if b in generic and FENCE not in b
        ]
        if not targets:
            continue
        new_lines: list[str] = []
        lines = text.split("\n")
        drop: set[int] = set()
        for s, e in targets:
            drop.update(range(s, e))
        for i, line in enumerate(lines):
            if i not in drop:
                new_lines.append(line)
        candidate = "\n".join(new_lines)
        candidate = re.sub(r"\n{3,}", "\n\n", candidate)

        after = count_body_lines(candidate)
        if after < minimum:
            blocked.append((path, count_body_lines(text), after))
            continue
        removed += len(targets)
        removed_files += 1
        if args.apply and not args.check:
            path.write_text(candidate, encoding="utf-8")

    print(
        f"generic paragraphs: {len(generic)} distinct | removed {removed} across "
        f"{removed_files} file(s) | blocked {len(blocked)} file(s) below minimum"
    )
    if args.report_blocked and blocked:
        # Find the site by locating the `sites` component. Indexing parts[1]
        # on an absolute path yields the first directory under root, which
        # silently attributes every page to the same nonexistent site.
        def site_of(p: Path) -> str:
            parts = p.parts
            return parts[parts.index("sites") + 1] if "sites" in parts else p.parts[1]

        by_site = collections.Counter(site_of(p) for p, _, _ in blocked)
        print("  blocked by site:", ", ".join(f"{k}:{v}" for k, v in by_site.most_common(10)))
        for p, before, after in blocked[:8]:
            print(f"    {p.relative_to(ROOT)}  {before} -> {after}")
    if args.check and removed:
        print("  -> remaining; run scripts/fix-generic-boilerplate.py --apply")
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())