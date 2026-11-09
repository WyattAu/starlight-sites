# Known issues - KaTeX-rejecting math needing manual repair (loop, 2026-10-31)

61 files where `Step`/`binop`-style automated brace repair correctly refused
to guess (structural corruption, not missing braces). The estate-wide oracle
sweep (`node /tmp/opencode/fix-math-braces.mjs --dry <files>`) still rejects
these; each needs a human to re-read the intended formula.

Defect classes observed:
1. quote glyphs inside \mathrm{} (\mathrm{'s move is noexcept) - C++/programming sites
2. misused {cases} environments for bond-drawing prose
3. nested-\frac damage in physics worked examples (mangled numerator/denominator spans)
4. \tag{$*$} - renders only because remark-math cuts the span early

The file list is in known-issues-katex-files.txt (one path per line).
Verify each fix with: node -e "katex.renderToString(body, {throwOnError:true})"


## Update (2026-11-02): the stray-fence swallow class, estate-wide

The detector pass found 240 display spans across 51 files where a display
swallows headings/SVGs/prose - the stray-`$$` fence class that produced the
bonding page's 9 errors. Root cause in the generator: display blocks were
emitted with a blank line inside (ending remark-math flow early) plus a
stray closing `$$` that reopened a display over the following prose.

- Detection: `python3 scripts/find-display-swallows.py` (repo script)
- Repair tool: `node scripts/fix-math-braces.mjs <files>` (oracle-gated -
  only applies repairs KaTeX accepts)
- The bonding page (gcse) is fully repaired and deployed (0 KaTeX errors
  after the next build); the remaining 51 files are listed in
  known-issues-display-swallows.txt, concentrated on dse diagnostics pages

Most dse diag-* swallows come from review-question blocks written as prose
inside `$$ ... $$`; the fix is to delete the stray fence line (the prose
then renders normally) - same one-line fix as the bonding page.
