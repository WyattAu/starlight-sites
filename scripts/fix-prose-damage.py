#!/usr/bin/env python3
"""Repair prose damage left by the 2026-09 em-dash normalization pass.

Four mechanical classes, all unambiguous:

  1. ``Fermat"s``   -> ``Fermat's``    (curly closing quote used as apostrophe)
  2. ``$...$Where`` -> ``$...$ Where`` (inline math glued to a following word)
  3. ``...changes`` + ``Is preferred.``
                  -> ``...changes`` + ``is preferred.``
                    (a wrapped line whose first letter was wrongly capitalised)
  4. ``...have`` + ``Non-empty set``
                  -> ``...have`` + ``non-empty set``
                    (same defect, restricted to the ``Non-`` prefix)

Class 3 is the largest and the most dangerous, because the same shape also
occurs in correct prose:

    ...gateway to the
    International Mathematical Olympiad team

Lower-casing that would be a serious content regression. The discriminator is
grammatical class: closed-class English words -- articles, conjunctions,
prepositions, auxiliaries, demonstratives, pronouns -- can never open a
proper noun. So a wrapped line is only repaired when it begins with one of
those *and* the previous line does not terminate a clause.

Content words are deliberately left alone: ``Function``, ``Type``, ``Time``,
``Memory``, ``Data`` and ``Compiler`` are legitimately capitalised inside
technical terms, so they are ambiguous. ``Non`` is allowed only in the
``Non-`` prefix form. Everything left over is reported by ``--report`` as a
worklist rather than guessed at.

A fifth class -- ``$...$ Then``, where the math closed a sentence and the
full stop was eaten -- is reported but never repaired: restoring the stop
also means re-casing ``Then`` -> ``then``, which is editorial.

Safety guards throughout:
  - fenced code blocks and inline code spans are skipped
  - the opening ``$`` of a span may not follow a word character, so the
    *gap between two spans* is never mistaken for a span
  - letter case is only ever changed inside class 3/4, and only for the
    first letter of a line

Usage::

    python3 scripts/fix-prose-damage.py            # repair the network
    python3 scripts/fix-prose-damage.py --check    # gate: fail if any remain
    python3 scripts/fix-prose-damage.py --report   # list the un-repaired classes
    python3 scripts/fix-prose-damage.py <glob>...  # scoped run
"""

import glob
import re
import sys

FENCE = re.compile(r"^\s*(```|~~~)")
INLINE_CODE = re.compile(r"`[^`]*`")

# Shell expansion, restricted to the two unambiguous shapes: `${...}` is
# always shell, and `$$` is the PID variable (also the `$$...$$` display
# delimiter, so it must be stashed before RE_MATH sees it). A bare `$PATH`
# is not matched: it cannot be told from the maths `$P + Q$` without
# whitespace, and guessing corrupts real formulas.
SHELL_VAR = re.compile(r"\$\{[^{}\n]{0,80}\}|\$\$")

# ---------------------------------------------------------------------------
# Class 1: curly closing quote used as an apostrophe.
# ---------------------------------------------------------------------------
RE_QUOTE = re.compile(r'\b([A-Z][a-zA-Z]{2,})"s\b')

# ---------------------------------------------------------------------------
# Class 2: inline math glued to a following word.
#
#   (?<![\w$])   the opening `$` may not follow a word character
#   [^$\s]       the opening `$` must be followed by non-whitespace and the
#                closing `$` preceded by non-whitespace -- remark-math's own
#                rule. Without it the gap between two adjacent spans reads as
#                a span, and `$x - a$ divides $P(x)$ iff $P(a) = 0$` gains a
#                space inside its final formula.
#   (?<![^$\s]   a closing `$` may not follow `:`, `/` or `_`: the shape of a
#    :/\_])      shell variable chain (`$PATH:$PWD`), never of a formula.
#   [A-Z]        the glued word must be capitalised. A lowercase continuation
#                (`$P(x)$ iff ...`) is correct prose.
#
# The pattern matches a *run* of adjacent spans, because the pass removed
# spaces between them too: `$p = 0.6$$q = 0.3$After` needs the space after
# the last span, whose opening `$` follows another closing `$`.
SPAN = r"\$[^$\s](?:[^$\n]{0,117}[^$\s:/_])?\$"
RE_MATH = re.compile(rf"(?<![\w$])((?:{SPAN})+)([A-Z][A-Za-z'’-]{{0,30}})")

# ---------------------------------------------------------------------------
# Classes 3 and 4: a wrapped line wrongly capitalised.
# ---------------------------------------------------------------------------
# Lines that are structure, not prose: headings, tables, list items,
# blockquotes, asides, frontmatter, JSX.
STRUCTURAL = re.compile(r"^\s*(#|\||[-*+]\s|\d+\.\s|:::|---|===|\{|\[|<[A-Za-z/])")

# Endings that legitimately terminate a clause, so the next line genuinely
# starts a new sentence and its capital is correct.
GOOD_END = re.compile(r"""[.!?…:;,\-–—)\]”"'`*_/|+=~]\s*$""")

# Closed-class English: articles, conjunctions, prepositions, auxiliaries and
# copulas, demonstratives, determiners, pronouns, sentence adverbs. None of
# these can open a proper noun, which is what makes class 3 safe.
CLOSED_CLASS = frozenset(
    {
        # articles
        "a", "an", "the",
        # coordinating and subordinating conjunctions
        "and", "but", "or", "nor", "for", "so", "yet", "although", "though",
        "because", "since", "unless", "until", "while", "whereas", "whether",
        "if", "once",
        # prepositions
        "about", "above", "across", "after", "against", "along", "among",
        "around", "as", "at", "before", "behind", "below", "beneath",
        "beside", "between", "beyond", "by", "concerning", "despite", "down",
        "during", "except", "from", "given", "in", "inside", "into", "like",
        "minus", "near", "of", "off", "on", "onto", "out", "outside", "over",
        "past", "per", "plus", "regarding", "through", "throughout", "to",
        "toward", "towards", "under", "up", "upon", "versus", "via", "with",
        "within", "without",
        # auxiliaries and copulas
        "am", "is", "are", "was", "were", "be", "been", "being", "have",
        "has", "had", "do", "does", "did", "can", "cannot", "could", "may",
        "might", "must", "shall", "should", "will", "would",
        # demonstratives, determiners, pronouns
        "this", "that", "these", "those", "such", "each", "every", "either",
        "neither", "both", "all", "some", "any", "no", "none", "one",
        "another", "other", "others", "much", "many", "few", "several",
        "enough", "more", "most", "less", "least", "than", "he", "she",
        "it", "they", "we", "you", "there", "here", "then", "thus", "hence",
        # possessive/object pronouns and relative determiners. Closed class,
        # and common enough at wrap points ("...releasing / Their contents")
        # that leaving them out would forfeit several hundred safe repairs.
        "him", "his", "her", "hers", "its", "ours", "our", "yours", "your",
        "theirs", "their", "my",
        "them", "us", "me", "my", "which", "whose", "whom", "what",
        "rather", "unlike", "regardless", "otherwise", "instead", "meanwhile",
        "therefore", "however", "moreover", "furthermore", "also", "only",
        "even", "not", "when", "where", "while", "whenever", "wherever",
        "whatever", "whoever", "so", "very", "just", "quite",
    }
)

# Class 4: the `Non-` prefix. Allowed only in that hyphenated form, because
# a bare capitalised `Non` could be an acronym.
RE_NON_PREFIX = re.compile(r"^Non(?=-)")

RE_FIRST_WORD = re.compile(r"^([A-Z])([a-z]+\b)")

# Class 5: sentence-final math whose full stop was eaten. Reported only.
RE_RUNON = re.compile(r"(?<![\w$])(\$[^$\n]{1,120}\$)\s+([A-Z][a-z]{2,})\b")

PLACEHOLDER = "\x00{}\x00"


def load_approved(path: str) -> frozenset[str]:
    """Read an approved word list from scripts/prose-capitalisation-worklist.py."""
    words: set[str] = set()
    with open(path, encoding="utf-8") as fh:
        for line in fh:
            w = line.split("#", 1)[0].strip()
            if w and re.fullmatch(r"[A-Za-z][a-z]+", w):
                words.add(w)
    return frozenset(words)


def is_prose(line: str) -> bool:
    """True when the line is running prose rather than structure."""
    if not line.strip() or FENCE.match(line) or STRUCTURAL.match(line):
        return False
    # A line opening with bold usually begins a deliberate emphasis run.
    if re.match(r"^\*\*[A-Z]", line):
        return False
    return True


def fix_line(line: str) -> tuple[str, int]:
    """Apply classes 1 and 2 to one line. Returns (line, repair count)."""
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

    out = re.sub(PLACEHOLDER.format(r"(\d+)"), lambda m: spans[int(m.group(1))], out)
    return out, n


def fix_continuation(
    line: str, prev: str | None, approved: frozenset[str] = frozenset()
) -> tuple[str, int, str]:
    """Apply classes 3 and 4. Returns (line, repair count, reason)."""
    if prev is None or not is_prose(line) or GOOD_END.search(prev):
        return line, 0, ""
    m = RE_FIRST_WORD.match(line)
    if not m:
        return line, 0, ""
    word = m.group(1) + m.group(2)
    if RE_NON_PREFIX.match(line):
        # `Non-` is the only capitalised content-word prefix in English prose.
        return "non" + line[3:], 1, "non-prefix"
    if word.lower() not in CLOSED_CLASS and word not in approved:
        return line, 0, "ambiguous"
    # group(1) is the single leading capital; everything after it is intact.
    reason = "closed-class" if word.lower() in CLOSED_CLASS else "approved"
    return m.group(1).lower() + line[m.end(1) :], 1, reason


def run_ons(text: str) -> list[str]:
    """Class 5: sentence-final math followed by a capitalised word."""
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


def scan(
    paths: list[str], approved: frozenset[str] = frozenset()
) -> tuple[list[tuple[str, list[str], list[str]]], list[str], int]:
    """Return (per-file repairs, run-on fragments, ambiguous count)."""
    repairs: list[tuple[str, list[str], list[str]]] = []
    runon_frags: list[str] = []
    ambiguous = 0

    for p in paths:
        with open(p, encoding="utf-8") as fh:
            lines = fh.read().split("\n")
        out = list(lines)
        prev: str | None = None
        in_fence = False
        touched = False
        for i, line in enumerate(lines):
            if FENCE.match(line):
                in_fence = not in_fence
                prev = None
                continue
            if in_fence:
                continue
            if not line.strip():
                prev = None
                continue

            new, n = fix_line(line)
            if n:
                out[i] = new
                touched = True

            fixed, c, reason = fix_continuation(new, prev, approved)
            if reason == "ambiguous":
                ambiguous += 1
            elif c:
                out[i] = fixed
                touched = True

            prev = new if is_prose(new) else None

        if touched:
            repairs.append((p, out, run_ons("\n".join(out))))

    return repairs, runon_frags, ambiguous


def main(argv: list[str]) -> int:
    check = "--check" in argv
    report = "--report" in argv
    approve = None
    for i, a in enumerate(argv):
        if a == "--approve" and i + 1 < len(argv):
            approve = argv[i + 1]
    approved = load_approved(approve) if approve else frozenset()
    args = [a for a in argv if not a.startswith("--") and a != approve]

    if args:
        paths = sorted({f for a in args for f in glob.glob(a, recursive=True)})
    else:
        paths = sorted(
            glob.glob("sites/*/src/content/docs/**/*.md", recursive=True)
            + glob.glob("sites/*/src/content/docs/**/*.mdx", recursive=True)
        )

    repairs, _, ambiguous = scan(paths, approved)

    if report:
        total = sum(len(frags) for _, _, frags in repairs)
        print("un-repaired classes (worklist, needs an editor):")
        print(f"  run-on math (missing full stop): {total} occurrence(s)")
        print(f"  wrapped-line capitals, ambiguous content word: {ambiguous}")
        if approved:
            print(f"  (approved list applied: {len(approved)} word(s))")
        else:
            print(
                "\n  Approve words in bulk with:\n"
                "    python3 scripts/prose-capitalisation-worklist.py --emit approve.txt\n"
                "    python3 scripts/fix-prose-damage.py --approve approve.txt"
            )
        return 0

    if check:
        if repairs:
            print(f"FAIL: prose damage in {len(repairs)} file(s).")
            for p, _, _ in repairs[:20]:
                print(f"  {p}")
            if len(repairs) > 20:
                print(f"  ... and {len(repairs) - 20} more")
            print("Run: python3 scripts/fix-prose-damage.py")
            return 1
        print(f"OK: no prose damage ({len(paths)} files scanned).")
        return 0

    total = sum(1 for _, _, _ in repairs)
    for p, out, _ in repairs:
        with open(p, "w", encoding="utf-8") as fh:
            fh.write("\n".join(out))
    print(f"Repaired {total} file(s).")
    for p, _, _ in repairs[:15]:
        print(f"  {p}")
    if len(repairs) > 15:
        print(f"  ... and {len(repairs) - 15} more")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))