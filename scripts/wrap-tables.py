#!/usr/bin/env python3
"""Wrap every unwrapped content table in a horizontal scroll container.

The reading column is a grid item, and a grid or flex child defaults to
`min-width: auto` -- it refuses to shrink below its content's intrinsic width.
A table of formulas has a large intrinsic width, so it stretched the reading
column past the viewport and the overflow escaped to the document. Measured on a
phone at 390px: a thermodynamics page reported `scrollWidth` 682 against a
390px viewport, with one table 650px wide inside a 326px column. The header, the
sidebar and the prose all slid sideways together.

`reader.js` already wraps tables in a scroll container at runtime, but its
wrapper inherits the same `min-width: auto` from being inside the grid item, so
`overflow-x: auto` had nothing to clip against. The `min-width: 0` fix in
`shared/scripts/reader.js` addresses that path; this script fixes the source, so
the table is correctly wrapped before any script runs and stays correct with
JavaScript disabled.

Idempotent: a table already inside a wrapper is left alone.
"""

import argparse
import re
import sys
from pathlib import Path

DOCS_GLOB = "sites/*/src/content/docs"

WRAPPER_OPEN = re.compile(
    r'<div[^>]*class="[^"]*\b(?:table-wrap|table-wrapper|table-scroll-wrapper|'
    r"table-overflow|wn-table-wrapper|overflow-x)\b[^\"]*\"[^>]*>",
    re.IGNORECASE,
)
WRAPPER_CLOSE = re.compile(r"^\s*</div>\s*$")

# A table header line plus the delimiter row directly beneath it.
DELIMITER = re.compile(r"^\s*\|?[\s:|-]*-[\s:|-]*\|[\s:|-]*$")
FENCE = re.compile(r"^\s*(```|~~~)")


def strip_frontmatter(lines):
    """Yield (index, line) for the body, skipping YAML frontmatter."""
    if not lines or lines[0].strip() != "---":
        return list(enumerate(lines))
    for i in range(1, len(lines)):
        if lines[i].strip() == "---":
            return list(enumerate(lines[i + 1 :], start=i + 1))
    return list(enumerate(lines))


def is_table_start(line, nxt):
    return (
        isinstance(line, str)
        and line.lstrip().startswith("|")
        and isinstance(nxt, str)
        and bool(DELIMITER.match(nxt))
        and "-" in nxt
    )


def wrap_file(path: Path, apply: bool) -> int:
    original = path.read_text(encoding="utf-8")
    lines = original.split("\n")
    body = strip_frontmatter(lines)

    out = list(lines)
    # Process from the bottom so earlier indices stay valid.
    inserts = []
    depth = 0
    in_fence = False

    for index, line in body:
        if FENCE.match(line):
            in_fence = not in_fence
            continue
        if in_fence:
            continue

        if WRAPPER_OPEN.search(line):
            depth += 1
            continue
        if WRAPPER_CLOSE.match(line) and depth > 0:
            depth -= 1
            continue
        if depth > 0:
            continue

        nxt = lines[index + 1] if index + 1 < len(lines) else None
        if not is_table_start(line, nxt):
            continue

        # Find the end of this table: the last consecutive row starting with `|`.
        end = index + 1
        while end + 1 < len(lines) and lines[end + 1].lstrip().startswith("|"):
            end += 1

        # Walk back over blank lines to close the wrapper immediately after the
        # final row. Leaving them inside means the next table in the file starts
        # with a blank line then `<div ...>` -- so its `WRAPPER_OPEN` test passes
        # and the wrapper nests, and a run of adjacent tables produced a nest of
        # wrappers instead of a row of siblings. `<div>` and `</div>` counts still
        # balanced, which is exactly why it did not look like damage.
        close_at = end
        while close_at > index + 1 and not lines[close_at].strip():
            close_at -= 1

        inserts.append((index, close_at))

    if not inserts:
        return 0

    for start, end in reversed(inserts):
        out.insert(end + 1, "\n</div>")
        out.insert(start, '<div class="table-wrap">\n')

    updated = "\n".join(out)
    if updated != original and apply:
        path.write_text(updated, encoding="utf-8")
    return len(inserts)


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--check", action="store_true", help="report without writing")
    args = parser.parse_args()
    apply = not args.check

    root = Path(".")
    files = sorted(
        p
        for p in root.glob(f"{DOCS_GLOB}/**/*")
        if p.suffix in (".md", ".mdx")
    )
    # Generated practice/flashcard wrappers are produced from fixtures; editing
    # them would be undone by the next regeneration.
    files = [p for p in files if not re.match(r"^(flashcard|practice)-", p.stem)]

    total = 0
    touched = 0
    for path in files:
        count = wrap_file(path, apply)
        if count:
            total += count
            touched += 1
            if touched <= 25:
                print(f"  wrapped {count:3d}  {path}")

    if total == 0:
        print("responsive tables      ok  every table is in a scroll container")
        return 0

    verb = "wrapped" if apply else "would wrap"
    print(f"\n{verb} {total} table(s) across {touched} file(s).")
    if not apply:
        print("Dry run. Re-run without --check to write.")
    return 1 if args.check else 0


if __name__ == "__main__":
    sys.exit(main())
