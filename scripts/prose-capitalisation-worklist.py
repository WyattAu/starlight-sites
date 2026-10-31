#!/usr/bin/env python3
"""Worklist for the ambiguous capitalised-continuation class.

`fix-prose-damage.py` repairs a wrapped line whose first word is closed-class
(`the`, `is`, `of`, `their`, ...), because no closed-class English word can
open a proper noun. That covers ~8,400 of the 42,151 candidates.

The remaining ~25,000 are content words, where the same shape is sometimes
damage and sometimes correct:

    damage   ...by defining a method with the
             Same name.

    correct  It serves as the gateway to the
             International Mathematical Olympiad team

Every sample inspected shows damage dominating heavily -- `Different` 93x,
`Function` 85x, `Same` 62x -- but the class also contains genuine proper
nouns whose capital is correct:

    ...only within the
    Windows ecosystem.

    The backend is a
    Python Flask application that queries a PostgreSQL database.

    ...above 60 degrees
    Celsius the rate drops to zero.

Lower-casing those would be a serious content regression, so nothing is
applied automatically and `--emit` writes a list that must be reviewed.

No statistical filter separates the two populations, and that was measured
rather than assumed. The obvious candidate -- "safe if the word is never
capitalised mid-sentence anywhere in the network" -- was implemented and
discarded: with ~100,000 mid-sentence capitals across 46 sites almost every
common word has at least one hit, so the rule admitted nothing, and its
counter-examples are direct. `the Same magnification` and `maximum Number
of` are damage that is capitalised mid-sentence, while `In Python, /`
produces a float` is correct and looks identical to the test. Filtering the
frontmatter, LaTeX `\text{...}` and ld+json out of the tally did not help
either. So the list is unfiltered and ranked by frequency, and the intended
workflow is reviewing it in batches.

Usage::

    # the 40 most frequent candidates, each with a real sample
    python3 scripts/prose-capitalisation-worklist.py --top 40

    # review those, keep the good ones, apply
    python3 scripts/fix-prose-damage.py --approve reviewed.txt

    # then take the next batch
    python3 scripts/prose-capitalisation-worklist.py --min 20 --top 80

    # see what a list would change, without writing
    python3 scripts/fix-prose-damage.py --approve reviewed.txt --check
"""

import argparse
import collections
import glob
import re
import sys

FENCE = re.compile(r"^\s*(```|~~~)")
STRUCT = re.compile(r"^\s*(#|\||[-*+]\s|\d+\.\s|:::|---|===|\{|\[|<[A-Za-z/])")
GOOD = re.compile(r"""[.!?…:;,\-–—)\]”"'`*_/|+=~]\s*$""")


def prose(line: str) -> bool:
    if not line.strip() or FENCE.match(line) or STRUCT.match(line):
        return False
    return not re.match(r"^\*\*[A-Z]", line)


def content_paths(patterns: list[str]) -> list[str]:
    if patterns:
        return sorted({f for p in patterns for f in glob.glob(p, recursive=True)})
    return sorted(
        glob.glob("sites/*/src/content/docs/**/*.md", recursive=True)
        + glob.glob("sites/*/src/content/docs/**/*.mdx", recursive=True)
    )


def build_worklist(paths: list[str]) -> tuple[collections.Counter, dict, collections.Counter]:
    """Return (wrap-point counts, samples, mid-sentence counts).

    The mid-sentence tally is reported as a hint only. It was tried as a
    safety filter and rejected -- see the module docstring.
    """
    counts: collections.Counter = collections.Counter()
    samples: dict[str, list[str]] = collections.defaultdict(list)
    established: collections.Counter = collections.Counter()

    for p in paths:
        lines = open(p, encoding="utf-8", errors="replace").read().split("\n")
        prev = None
        in_fence = False
        for i, line in enumerate(lines):
            n = i + 1
            if FENCE.match(line):
                in_fence = not in_fence
                prev = None
                continue
            if in_fence or not line.strip():
                prev = None
                continue
            pr = prose(line)

            if pr:
                for sentence in re.split(r"(?<=[.!?])\s+", line):
                    clean = re.sub(
                        r"\$[^$]*\$|`[^`]*`|\\text\{[^}]*\}|\\mathrm\{[^}]*\}", " ", sentence
                    )
                    for mm in re.finditer(r"\b[A-Z][a-z]+\b", clean):
                        established[mm.group(0)] += 1

                m = re.match(r"^([A-Z][a-z]+)\b", line)
                if m and prev is not None and not GOOD.search(prev):
                    w = m.group(1)
                    counts[w] += 1
                    if len(samples[w]) < 2:
                        samples[w].append(
                            f"{p.split('/')[1]}:{n}  ...{prev.strip()[-40:]!r} + {line.strip()[:52]!r}"
                        )
            prev = line if pr else None

    return counts, samples, established


def main(argv: list[str]) -> int:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("globs", nargs="*", help="scope the scan (default: the whole network)")
    ap.add_argument("--emit", metavar="FILE", help="write an approvable word list")
    ap.add_argument(
        "--min", type=int, default=1, help="only words seen at least N times"
    )
    ap.add_argument("--top", type=int, default=0, help="only the N most frequent words")
    ap.add_argument(
        "--show-established",
        action="store_true",
        help=(
            "annotate each word with how often it is capitalised mid-sentence, "
            "as a hint. NOT a filter: the test was measured and does not work."
        ),
    )
    args = ap.parse_args(argv)

    paths = content_paths(args.globs)
    counts, samples, established = build_worklist(paths)

    ranked = [(w, c) for w, c in counts.items() if c >= args.min]
    ranked.sort(key=lambda x: (-x[1], x[0]))
    if args.top:
        ranked = ranked[: args.top]

    total = sum(c for _, c in ranked)

    print(f"ambiguous candidates: {sum(counts.values())} over {len(counts)} distinct words")
    print(f"(scan: {len(paths)} files)")
    print(f"listed here: {total} occurrences over {len(ranked)} words")
    print(
        "\nEvery word needs review. The list contains both damage ('the\n"
        "Same magnification') and correct capitals ('Windows ecosystem',\n"
        "'In Python, ...'). No automatic filter separates them.\n"
    )

    for w, c in ranked:
        extra = f"  [mid-sentence x{established[w]}]" if args.show_established else ""
        mark = "  <-- review" if c >= 20 else ""
        print(f"{c:6d}  {w:20s} {samples[w][0] if samples[w] else ''}{extra}{mark}")

    if args.emit:
        words = sorted(w for w, _ in ranked)
        with open(args.emit, "w", encoding="utf-8") as fh:
            fh.write("# Candidate words for lower-casing at a hard-wrap point.\n")
            fh.write("# REVIEW EVERY LINE before applying: the list contains both\n")
            fh.write("# damage and correct capitals such as Python or Celsius.\n")
            fh.write("# One word per line; blank lines and # comments ignored.\n")
            fh.write(f"# {total} occurrences across {len(words)} words.\n")
            fh.write("# Regenerate with:\n")
            fh.write("#   python3 scripts/prose-capitalisation-worklist.py --emit <file>\n")
            for w in words:
                fh.write(f"{w}\n")
        print(f"\nwrote {len(words)} words to {args.emit}", file=sys.stderr)
        print(
            f"apply with: python3 scripts/fix-prose-damage.py --approve {args.emit}",
            file=sys.stderr,
        )

    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))