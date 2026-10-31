#!/usr/bin/env python3
"""Repair prose where separators between sentences were eaten.

Two shapes ship across the network, both from line-wrapping damage:

  R1  `` `M[0][2]``M[1][2]``M[2][2]` ``   a list of code spans whose
      `, ` separators were eaten, leaving one span with a backtick inside it.

  R2  `` if `low + high > INT_MAX`The sum overflow ``   a closing backtick
      followed immediately by a capital, because the full stop and space
      between the two sentences were eaten.

R1 is a certain repair: a backtick inside a code span can only mean the span
was meant to be several, and `, ` is the separator that was lost. R2 needs a
word list, because a capital after a code span is sometimes a sentence opener
and sometimes a proper noun or an identifier (`Ed`, `CPM`, `Python`). Only a
closed list of unambiguous sentence openers is repaired automatically; the
rest is reported by --worklist for human judgement rather than guessed at.

Fenced code blocks, table rows and the frozen zh locale are never touched.

  --check     report only, exit 1 if anything remains
  --apply     write repairs (the default is --apply)
  --approve W add a word to the sentence-opener list (repeatable, comma list)
  --worklist  print the ambiguous cases R2 declined to repair
"""

from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SITES = ROOT / "sites"

# Unambiguous sentence openers. A capital immediately after a closing backtick
# is a sentence boundary for these and nothing else. Deliberately absent: And,
# Or, A, and anything that could be a name or identifier (Ed, CPM, Git,
# Python). Those need a human to decide whether the lost mark was `, `, ` and `
# or `. `, so they go to the worklist.
SENTENCE_OPENERS = {
    "the", "which", "so", "etc", "not", "but", "then", "this", "each", "every",
    "both", "no", "they", "only", "with", "where", "meaning", "any", "even",
    "all", "it", "you", "we", "he", "she", "here", "there", "thus", "hence",
    "however", "therefore", "since", "when", "while", "if", "in", "on", "at",
    "for", "from", "after", "before", "during", "because", "given", "consider",
    "suppose", "note", "use", "move", "never", "enabling", "result", "output",
    "input", "answer", "our", "their", "its", "his", "her", "such", "once",
    "instead", "moreover", "furthermore", "additionally", "otherwise",
    "perhaps", "maybe", "next", "finally", "first", "second", "third",
    "example", "question", "explanation", "simply", "usually", "typically",
    "often", "always", "nevertheless", "nonetheless", "meanwhile",
}

BACKTICK_RUN = re.compile(r"`+")
WORD = re.compile(r"[A-Za-z]+")


def collect(base: Path):
    """Markdown files under a root: a file, a directory, or sites/."""
    if base.is_file():
        return [base] if base.suffix in (".md", ".mdx") else []
    docs = base / "src" / "content" / "docs"
    scan = docs if docs.is_dir() else base
    return sorted(p for p in scan.rglob("*") if p.suffix in (".md", ".mdx"))


def scan_line(line: str, openers: set[str]):
    """Return (repaired_line, r1_count, r2_count, ambiguous_words)."""
    out = []
    r1 = r2 = 0
    ambiguous = []
    i = 0
    n = len(line)
    while i < n:
        ch = line[i]
        if ch == "$":
            # Inline math: copy verbatim so LaTeX is never touched.
            close = line.find("$", i + 1)
            if close == -1:
                out.append(line[i:])
                break
            out.append(line[i : close + 1])
            i = close + 1
            continue
        if ch != "`":
            out.append(ch)
            i += 1
            continue

        run = BACKTICK_RUN.match(line, i)
        size = len(run.group(0))
        delim = run.group(0)

        # Find the closing run of exactly the same size (CommonMark).
        j = i + size
        close_at = -1
        while j < n:
            if line[j] == "`":
                r2run = BACKTICK_RUN.match(line, j)
                if len(r2run.group(0)) == size:
                    close_at = j
                    break
                j = r2run.end()
                continue
            j += 1
        if close_at == -1:
            # Unterminated span: leave the rest of the line alone.
            out.append(line[i:])
            break

        content = line[i + size : close_at]
        just_split = False
        if "`" in content:
            # R1 -- a backtick inside the span means several spans were meant.
            parts = [p for p in BACKTICK_RUN.split(content) if p != ""]
            if len(parts) > 1:
                out.append(", ".join(f"{delim}{p}{delim}" for p in parts))
                r1 += 1
                just_split = True
                i = close_at + size
                # The comma we just emitted is the list separator, so a word
                # glued after it continues the list rather than starting a
                # sentence.
                if i < n and line[i].isupper():
                    w = WORD.match(line, i)
                    if w and w.group(0).lower() in {"and", "or"}:
                        out.append(" " + w.group(0).lower())
                        r2 += 1
                        i = w.end()
                        continue
                continue

        out.append(line[i : close_at + size])
        i = close_at + size

        # R2 -- a capital glued straight onto the closing backtick.
        if i < n and line[i].isupper():
            w = WORD.match(line, i)
            if w:
                word = w.group(0)
                if word == "S" and not line[i + 1 : i + 2].isalpha():
                    # Plural of a code span: `Key`S -> `Key`s
                    out.append("s")
                    r2 += 1
                    i = w.end()
                    continue
                low = word.lower()
                if low in openers:
                    # Insert only the separator that was lost. The capital is
                    # left exactly as written: `B`Then is a new sentence, so
                    # `. Then` is right and `. then` is wrong. Lowercasing here
                    # would be a second, unjustified edit.
                    out.append(". ")
                    out.append(word)
                    r2 += 1
                    i = w.end()
                    continue
                if len(word) > 1:
                    ambiguous.append(word)
        continue
    return "".join(out), r1, r2, ambiguous


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--check", action="store_true", help="report only")
    ap.add_argument("--apply", action="store_true", help="write repairs")
    ap.add_argument("--approve", default="", help="comma-separated extra openers")
    ap.add_argument("--worklist", action="store_true", help="print ambiguous cases")
    ap.add_argument("roots", nargs="*", help="optional roots (default: sites/)")
    args = ap.parse_args()

    openers = set(SENTENCE_OPENERS)
    for extra in args.approve.split(","):
        extra = extra.strip().lower()
        if extra:
            openers.add(extra)

    roots = [Path(r).resolve() for r in args.roots] or [SITES]
    files = []
    for base in roots:
        files.extend(collect(base))

    total_r1 = total_r2 = 0
    ambiguous_hits = []
    ambiguous_words = []
    touched = 0

    def sweep(files):
        r1 = r2 = 0
        changed_files = 0
        for path in files:
            if "zh" in path.parts:
                continue  # frozen locale
            text = path.read_text(encoding="utf-8")
            lines = text.split("\n")
            out = []
            f1 = f2 = 0
            in_fence = False
            for line in lines:
                s = line.lstrip()
                if s.startswith("```") or s.startswith("~~~"):
                    in_fence = not in_fence
                    out.append(line)
                    continue
                if in_fence or s.startswith("|"):
                    out.append(line)
                    continue
                fixed, a, b, amb = scan_line(line, openers)
                if amb:
                    ambiguous_words.extend(amb)
                    if args.worklist:
                        for w in amb:
                            ambiguous_hits.append(f"{path.relative_to(ROOT)}: {w}")
                if a or b:
                    f1 += a
                    f2 += b
                out.append(fixed)
            if f1 or f2:
                changed_files += 1
                r1 += f1
                r2 += f2
                if args.apply and not args.check:
                    path.write_text("\n".join(out), encoding="utf-8")
        return r1, r2, changed_files

    # One pass is not enough when applying: splitting `a``b` emits `a`, `b`,
    # which can leave a capital glued to the new closing backtick. Iterate to a
    # fixed point so a single invocation is idempotent. In --check mode
    # nothing is written, so iterating would just recount the same findings --
    # one pass is the honest answer there.
    passes = 1 if args.check else 5
    ambiguous_first_pass = 0
    for iteration in range(passes):
        r1, r2, files_changed = sweep(files)
        total_r1 += r1
        total_r2 += r2
        touched += files_changed
        if iteration == 0:
            ambiguous_first_pass = len(ambiguous_words)
        if not (r1 or r2):
            break
    # Ambiguous words are only meaningful from the first pass; later passes
    # re-walk the same lines and would multiply the count by the pass number.
    del ambiguous_words[ambiguous_first_pass:]

    if args.worklist:
        seen = {}
        for hit in ambiguous_hits:
            seen[hit] = seen.get(hit, 0) + 1
        for hit, _ in sorted(seen.items()):
            print(f"  {hit}")

    # Ambiguous cases are never silently dropped. They do not fail --check,
    # because deciding them needs a human and the network has hundreds of
    # them, but they are reported on every run so the count cannot rot
    # unnoticed. They are tracked in the editorial backlog.
    tally = {}
    for word in ambiguous_words:
        tally[word] = tally.get(word, 0) + 1
    if tally:
        total = sum(tally.values())
        top = ", ".join(f"{w} ({n})" for w, n in sorted(tally.items(), key=lambda kv: -kv[1])[:12])
        print(f"worklist: {total} ambiguous capital(s) need a human: {top}")

    print(f"R1 list separators: {total_r1}   R2 sentence boundaries: {total_r2}   files: {touched}")
    if args.check and (total_r1 or total_r2):
        print("  -> remaining; run scripts/fix-glued-code-spans.py to repair")
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())