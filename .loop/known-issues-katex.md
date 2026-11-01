# Known issues — KaTeX-rejecting math needing manual repair (loop, 2026-10-31)

61 files where `Step`/`binop`-style automated brace repair correctly refused
to guess (structural corruption, not missing braces). The estate-wide oracle
sweep (`node /tmp/opencode/fix-math-braces.mjs --dry <files>`) still rejects
these; each needs a human to re-read the intended formula.

Defect classes observed:
1. quote glyphs inside \mathrm{} (\mathrm{'s move is noexcept) — C++/programming sites
2. misused {cases} environments for bond-drawing prose
3. nested-\frac damage in physics worked examples (mangled numerator/denominator spans)
4. \tag{$*$} — renders only because remark-math cuts the span early

The file list is in known-issues-katex-files.txt (one path per line).
Verify each fix with: node -e "katex.renderToString(body, {throwOnError:true})"
