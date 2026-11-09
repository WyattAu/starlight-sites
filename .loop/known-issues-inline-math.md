# Known issues: inline math broken by paragraph interrupts (fleet-wide)

Discovered 2026-11-09 while auditing the Stage B rendered page.

## Bug shape

A paragraph whose inline `$...$` math wraps onto a continuation line
beginning with a paragraph-interrupting marker (`+ `, `- `, `* `,
`1. `, `> `, `# `) is split by the markdown pipeline: remark-math
terminates the math at the interrupt, the orphaned closing `$` cascades
into phantom list items and raw TeX. Multi-line inline math whose
continuation lines do NOT start with an interrupting marker renders
correctly (verified against 1d's norm definition on the live site).

## Detection

`python3 scripts/fix-inline-math-interrupts.py --check` (state machine,
char-level math tracking). Gated on course pages in deploy.yml.

## Scope

Fixed 2026-11-09: the 11 course-page instances (1c x2, 1d x4, 2a x1,
3c x1, stage-b x3).

Open: ~1248 suspicious paragraphs across the wider reference corpus
(277 files; chemistry/equilibrium 20, alevel/biology/homeostasis 10,
dse and ib concentrated). The state-machine scan flags "math
unterminated at paragraph end" and "interrupted by block-start" kinds;
each needs eyeball confirmation before mechanical merging (literal
dollar amounts like "$2 million" produce scanner noise; the state
machine already skips escaped `\$` and `$$`).

## Remediation plan (one batch)

1. Run the fixer in a branch across all content dirs; eyeball the diff
   on 10 sample files (marginalia: dollar amounts must NOT be merged).
2. Extend the gate from course-only to the whole tree once zero
   findings.
3. Depth-tier check per touched file.
