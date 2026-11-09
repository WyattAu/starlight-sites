#!/usr/bin/env python3
"""fix-inline-math-interrupts.py - repair inline math broken by paragraph
interrupts in course pages.

Bug shape: a paragraph whose inline `$...$` math wraps across a line break,
where the continuation line begins with a paragraph-interrupting marker
(`+ `, `- `, `* `, `1. `, `> `, `# `). The interrupting marker splits the
paragraph, orphaning the math's closing `$` and cascading into phantom
lists and raw TeX in the rendered page.

Fix: merge the interrupting line into the previous line (single space), so
the math span sits on one line. Repeat until the state machine is clean.

Scope: the Core Course pages (17-core-course). The wider reference corpus
has its own instances; see the known-issues ledger.

Usage:
  python3 scripts/fix-inline-math-interrupts.py            # repair
  python3 scripts/fix-inline-math-interrupts.py --check    # exit 1 if any found
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
COURSE = ROOT / "sites" / "mathematics" / "src" / "content" / "docs" / "17-core-course"
INTERRUPT = re.compile(r"^(?:[+*-]\s|\d+[.)]\s|>|#{1,6}\s|```)")
CHECK = "--check" in sys.argv


def para_interrupts(lines):
    """Char-level scan: list of paragraph-line indexes where math is open
    and the line starts with an interrupting marker."""
    out = []
    in_math = False
    for j, line in enumerate(lines):
        if in_math and INTERRUPT.match(line.strip()):
            out.append(j)
        k = 0
        while k < len(line):
            if line[k] == "\\" and k + 1 < len(line):
                k += 2
                continue
            if line.startswith("$$", k):
                in_math = not in_math
                k += 2
                continue
            if line[k] == "$":
                in_math = not in_math
                k += 1
                continue
            k += 1
    return out


def fix_file(path):
    lines = path.read_text(encoding="utf-8").split("\n")
    in_display = in_fence = False
    para_start = None
    merges = 0
    i = 0
    while i < len(lines):
        s = lines[i].strip()
        if s.startswith("```"):
            in_fence = not in_fence
            i += 1
            continue
        if in_fence:
            i += 1
            continue
        if s.startswith("$$"):
            in_display = not in_display
            i += 1
            continue
        if in_display:
            i += 1
            continue
        if not s:
            para_start = None
            i += 1
            continue
        if para_start is None:
            para_start = i
        # scan the paragraph accumulated so far
        chunk = lines[para_start:i + 1]
        bad = para_interrupts(chunk)
        if bad:
            j = bad[0] + para_start
            # merge the interrupting line into the previous line
            lines[j - 1] = lines[j - 1].rstrip() + " " + lines[j].lstrip()
            del lines[j]
            merges += 1
            continue  # re-scan the same paragraph from scratch
        i += 1
    if merges and not CHECK:
        path.write_text("\n".join(lines), encoding="utf-8")
    return merges


def main():
    total = 0
    for f in sorted(COURSE.glob("*.md")):
        m = fix_file(f)
        if m:
            print(f"  {f.relative_to(ROOT)}: {m} interrupt(s) merged")
        total += m
    if CHECK:
        if total:
            print(f"FAIL: {total} inline-math interrupt(s) found")
            sys.exit(1)
        print("OK: no inline-math interrupts")
    else:
        print(f"merged {total} interrupt(s)")


if __name__ == "__main__":
    main()
