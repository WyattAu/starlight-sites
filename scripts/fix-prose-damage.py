#!/usr/bin/env python3
"""Repair prose damage left by the 2026-09 em-dash normalization pass.

Two mechanical classes, both unambiguous:

  1. ``Fermat"s``   -> ``Fermat's``    (curly closing quote used as apostrophe)
  2. ``$...$Where`` -> ``$...$ Where`` (inline math glued to a following word)

A third class -- ``$...$ Then`` where the math closed a sentence and the
full stop was eaten -- is deliberately *not* repaired. Restoring the stop
also means re-casing ``Then`` -> ``then``, which is a prose judgement, not
a mechanical one. It stays a tracked worklist (see ``--report``).

Safety guards:
  - fenced code blocks and inline code spans are skipped
  - the opening ``$`` must not be preceded by a word character, so the
    *gap between two adjacent spans* is never mistaken for a span
  - letter case is never changed; the repair only inserts one space

Usage::

    python3 scripts/fix-prose-damage.py            # repair the network
    python3 scripts/fix-prose-damage.py --check    # gate: fail if any remain
    python3 scripts/fix-prose-damage.py --report   # list the un-repaired class
    python3 scripts/fix-prose-damage.py <glob>...  # scoped run
"""

import glob
import re
import sys

FENCE = re.compile(r"^\s*(```|~~~)")
INLINE_CODE = re.compile(r"`[^`]*`")

# Shell expansion, restricted to the two unambiguous shapes:
#
#   `${...}`      always shell (`${SRC}`, `${HOME:-/tmp}`, `${arr[0]}`)
#   `$$`          the PID variable, also the `$$...$$` display delimiter,
#                 so it must be stashed before RE_MATH sees it
#
# A bare `$PATH` is deliberately *not* matched. It cannot be told apart from
# the maths `$P + Q$` without whitespace, so guessing corrupts real
# formulas; fence and inline-code skipping already covers the realistic
# shell-in-prose cases.
SHELL_VAR = re.compile(r"\$\{[^{}\n]{0,80}\}|\$\$")

# ``Word"s`` where Word is a capitalised proper name. \b before the quote
# keeps ``the "s" of it`` out; requiring a capitalised stem keeps ordinary
# quotes such as ``He said "Stop"`` untouched.
RE_QUOTE = re.compile(r"\b([A-Z][a-zA-Z]{2,})\"s\b")

# Inline math immediately followed by a *capitalised* word.
#
# Three guards, each of which prevents a false positive:
#
#   (?<![\w$])  the opening `$` may not follow a word character.
#   [^$\s]      the opening `$` must be followed by non-whitespace, and the
#               closing `$` preceded by non-whitespace -- remark-math's own
#               rule. Without it the *gap between two adjacent spans* reads
#               as a span: in `$x - a$ divides $P(x)$ iff` the naive pattern
#               matches `$ iff $`. Same rule is why `$a$b$` parses as math
#               `a` followed by literal `b$`.
#   [A-Z]       the glued word must be capitalised. `$P(x)$ iff $P(a) = 0$`
#               is correct prose (a lowercase continuation); only a capital
#               first letter betrays the deleted boundary.
#   [^$\n]      `$$` display delimiters cannot appear inside a span.
#   (?<![^$\s]   a closing `$` may not follow `:`, `/` or `_`. That is the
#   :/\_])      shape of a shell variable chain (`$PATH:$PWD`, `$BIN/foo`),
#               never of a formula. Without this guard `export PATH=$PATH:$PWD`
#               parses as one span glued to the next word.
#
# The pattern matches a *run* of adjacent spans, because the normalization
# pass removed spaces between them too: `$p = 0.6$$q = 0.3$After the drift`
# needs the space after the *last* span, and that `$` is preceded by another
# closing `$` rather than by whitespace.
SPAN = r"\$[^$\s](?:[^$\n]{0,117}[^$\s:/_])?\$"
RE_MATH = re.compile(rf"(?<![\w$])((?:{SPAN})+)([A-Z][A-Za-z'’-]{{0,30}})")

# Sentence-final math whose full stop was eaten: math, whitespace, then a
# capitalised word. Reported, not repaired.
RE_RUNON = re.compile(r"(?<![\w$])(\$[^$\n]{1,120}\$)\s+([A-Z][a-z]{2,})\b")

PLACEHOLDER = "\x00{}\x00"


def fix_line(line: str) -> tuple[str, int]:
    """Return (repaired line, repair count)."""
    n = 0

    def quote_sub(m: re.Match) -> str:
        nonlocal n
        n += 1
        return f"{m.group(1)}'s"

    out = RE_QUOTE.sub(quote_sub, line)

    # Stash inline code spans and shell variables so ``echo $PATH`` and
    # ``PATH=$PATH:$PWD`` are never treated as mathematics.
    spans: list[str] = []

    def stash(m: re.Match) -> str:
        spans.append(m.group(0))
        return PLACEHOLDER.format(len(spans) - 1)

    out = INLINE_CODE.sub(stash, out)
    out = SHELL_VAR.sub(stash, out)

    def math_sub(m: re.Match) -> str:
        nonlocal n
        n += 1
        return f"{m.group(1)} {m.group(2)}"

    out = RE_MATH.sub(math_sub, out)

    out = re.sub(
        PLACEHOLDER.format(r"(\d+)"), lambda m: spans[int(m.group(1))], out
    )
    return out, n


def run_ons(text: str) -> list[str]:
    """Sentence-final math followed by a capitalised word."""
    found: list[str] = []
    in_fence = False
    for line in text.split("\n"):
        if FENCE.match(line):
            in_fence = not in_fence
            continue
        if in_fence or not line.strip():
            continue
        for m in RE_RUNON.finditer(line):
            found.append(f"{m.group(1)} {m.group(2)}")
    return found


def main(argv: list[str]) -> int:
    check = "--check" in argv
    report = "--report" in argv
    args = [a for a in argv if not a.startswith("--")]

    if args:
        paths = sorted({f for a in args for f in glob.glob(a, recursive=True)})
    else:
        paths = sorted(
            glob.glob("sites/*/src/content/docs/**/*.md", recursive=True)
            + glob.glob("sites/*/src/content/docs/**/*.mdx", recursive=True)
        )

    changed_files = 0
    changed_lines = 0
    offenders: list[str] = []
    total_runons = 0
    runon_samples: list[str] = []

    for p in paths:
        with open(p, encoding="utf-8") as fh:
            src = fh.read()

        if report or check:
            for frag in run_ons(src):
                total_runons += 1
                if len(runon_samples) < 12:
                    runon_samples.append(f"{p}: {frag[:100]}")

        if not check and not report:
            lines = src.split("\n")
            out: list[str] = []
            in_fence = False
            touched = False
            for line in lines:
                if FENCE.match(line):
                    in_fence = not in_fence
                    out.append(line)
                    continue
                if in_fence or not line.strip():
                    out.append(line)
                    continue
                new, n = fix_line(line)
                if n:
                    touched = True
                    changed_lines += 1
                out.append(new)
            if touched:
                changed_files += 1
                offenders.append(p)
                with open(p, "w", encoding="utf-8") as fh:
                    fh.write("\n".join(out))
            continue

        # --check must use the *same* fence handling as the repair pass,
        # otherwise code blocks are flagged by the gate but never fixed.
        in_fence = False
        for line in src.split("\n"):
            if FENCE.match(line):
                in_fence = not in_fence
                continue
            if in_fence or not line.strip():
                continue
            if fix_line(line)[1]:
                changed_files += 1
                offenders.append(p)
                break

    if report:
        print(f"run-on (unrepaired, needs an editor): {total_runons} occurrence(s)")
        for s in runon_samples:
            print(f"  {s}")
        return 0

    if check:
        if offenders:
            print(f"FAIL: prose damage in {changed_files} file(s).")
            for p in offenders[:20]:
                print(f"  {p}")
            if len(offenders) > 20:
                print(f"  ... and {len(offenders) - 20} more")
            print("Run: python3 scripts/fix-prose-damage.py")
            return 1
        print(f"OK: no prose damage ({len(paths)} files scanned).")
        return 0

    print(f"Repaired {changed_lines} line(s) across {changed_files} file(s).")
    for p in offenders[:15]:
        print(f"  {p}")
    if len(offenders) > 15:
        print(f"  ... and {len(offenders) - 15} more")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))