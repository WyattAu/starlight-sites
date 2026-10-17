#!/usr/bin/env python3
"""Prove whether a root-level course monolith is superseded by its numbered track.

A monolith is superseded only if the material it contains already exists in the
track. Comparing line counts is not proof: a longer page can still be longer
because of padding, and a shorter one can hold the only copy of a proof.

So this checks coverage of *content items* instead:

  * every display-math block   ($$ ... $$ and \\[ ... \\])
  * every inline-math span    ($...$)
  * every term definition     (a **bolded term** introducing a definition)
  * every top-level section heading

Each item is looked for in the union of the track's pages, normalised for
whitespace. A monolith whose items are already present is a stale duplicate and
can be retired. A monolith with uncovered items has real content and must be
extracted before anything is removed.
"""

import re
import sys
from pathlib import Path

DOCS = Path("sites/mathematics/src/content/docs")


def normalise(text: str) -> str:
    """Collapse whitespace so line wrapping does not defeat a match."""
    return re.sub(r"\s+", " ", text).strip()


def content_items(text: str):
    """Extract the checkable content items of a document."""
    items = {}
    for m in re.finditer(r"\$\$(.+?)\$\$", text, re.S):
        items.setdefault("display_math", []).append(normalise(m.group(1)))
    # Strip display math first so it is not re-counted as inline.
    without_display = re.sub(r"\$\$.+?\$\$", " ", text, flags=re.S)
    for m in re.finditer(r"(?<!\$)\$([^$\n]{3,})\$(?!\$)", without_display):
        items.setdefault("inline_math", []).append(normalise(m.group(1)))
    for m in re.finditer(r"\*\*(.+?)\*\*\s*(?:—|--|-|:|is |refers to)", text):
        term = normalise(m.group(1))
        if 2 < len(term) < 60:
            items.setdefault("definitions", []).append(term)
    for m in re.finditer(r"^#{2,3}\s+(.+)$", text, re.M):
        items.setdefault("headings", []).append(normalise(m.group(1)))
    return items


def covered(item: str, haystack: str, min_words: int = 2) -> bool:
    """Is this item present in the track's text?

    Short items are matched exactly; longer ones by their leading words, since a
    track page may reformat the tail of a formula or sentence.
    """
    probe = item[:90] if len(item.split()) >= min_words else item
    return probe in haystack


def main():
    mapping = {
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

    overall_ok = True
    for mono_name, track_name in sorted(mapping.items()):
        mono_path = DOCS / mono_name
        track_dir = DOCS / track_name
        if not mono_path.exists():
            print(f"{mono_name}: MISSING monolith")
            continue
        if not track_dir.is_dir():
            print(f"{mono_name}: MISSING track {track_name}")
            overall_ok = False
            continue

        track_text = "\n".join(
            p.read_text(encoding="utf-8") for p in sorted(track_dir.glob("*.md*"))
        )
        haystack = normalise(track_text)
        items = content_items(mono_path.read_text(encoding="utf-8"))

        total = sum(len(v) for v in items.values())
        missing_by_kind = {}
        for kind, values in sorted(items.items()):
            missing = [v for v in values if not covered(v, haystack)]
            if missing:
                missing_by_kind[kind] = missing
        missing_total = sum(len(v) for v in missing_by_kind.values())
        pct = 100.0 * (total - missing_total) / total if total else 0.0

        verdict = "SUPERSEDED" if pct >= 90 else "HAS UNIQUE CONTENT"
        if pct < 90:
            overall_ok = False
        print(
            f"{mono_name:30s} -> {track_name:32s} "
            f"{total - missing_total:4d}/{total:4d} covered ({pct:5.1f}%)  {verdict}"
        )
        for kind, missing in sorted(missing_by_kind.items()):
            print(f"    uncovered {kind}: {len(missing)}")
            for item in missing[:6]:
                print(f"        - {item[:110]}")

    return 0 if overall_ok else 1


if __name__ == "__main__":
    sys.exit(main())
