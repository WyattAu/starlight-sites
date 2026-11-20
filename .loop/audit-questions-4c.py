"""Audit every shipped QC ladder against question standard v1.1.0.

Mechanical checks (per file with a Quick check block):
  items      - ladder length (target 8)
  recall     - items opened by a recall-only stem (rule 1: max 2)
  whichq     - items opened by "Which ..." (self-answerable proxy)
  trap       - answers name a wrong path / flawed step (rule 4)
  echo       - 10-gram answer overlap with the page body (rule 5)
  bare       - answers shorter than 60 chars (rule 7)
  hint       - a Hint spoiler layer exists (patterns.md #3)
  tags       - (E)/(M)/(H) difficulty marks present

Judgment checks (depth, concreteness, slope) remain manual:
run docs/standards/questions/review-checklist.md on retrofits.

Run from repo root: python3 .loop/audit-questions-4c.py
"""
import re
from pathlib import Path

SITES = [Path("sites/mathematics/src/content/docs"), Path("sites/physics/src/content/docs")]
RECALL = re.compile(r"^(?:State|Name|Give|List|Write)\b|^What (?:is|are)\b|^Which\b")
TRAP = re.compile(
    r"\b(?:trap|wrong path|flawed|tempting|fallacy|instead of|does not commute"
    r"|the error|mistake|paradox|naive|order of limits)\b"
)


def norm(s):
    s = re.sub(r"\$[^$]*\$", " MATH ", s)
    return re.sub(r"[^a-z0-9 ]+", " ", s.lower())


def shingles(text, n=10):
    w = norm(text).split()
    return set(tuple(w[i:i + n]) for i in range(len(w) - n + 1))


rows = []
for root in SITES:
    for pat in ("*.md", "*.mdx"):
      for p in sorted(root.rglob(pat)):
        t = p.read_text(encoding="utf-8", errors="ignore")
        idx = t.find(":::note[Quick check]")
        if idx < 0:
            continue
        close = t.find("\n:::", idx)
        if close < 0:
            continue
        block = t[idx:close]
        body = t[:idx] + t[close:]
        body_sh = shingles(body)
        qs = re.findall(r"^\d+\. (.+)$", block, flags=re.MULTILINE)
        ans_block = re.search(r'<div class="wn-spoiler-body">\n\n(.*?)\n\n</div>', block, flags=re.DOTALL)
        ans = re.findall(r"^\*\*\d+\.\*\* (.+)$", ans_block.group(1), flags=re.MULTILINE) if ans_block else []
        recall = sum(1 for q in qs if RECALL.match(q))
        trap = any(TRAP.search(a) for a in ans)
        echo = sum(1 for a in ans if shingles(a) & body_sh)
        bare = sum(1 for a in ans if len(a) < 60)
        hint = "Hint" in block
        tags = bool(re.search(r"\((?:E|M|H)\)", block))
        rows.append((str(p), len(qs), recall, trap, echo, bare, hint, tags))

total = len(rows)
over = [r for r in rows if r[2] > 2]
no_trap = [r for r in rows if not r[4]]
echo_files = [r for r in rows if r[4] > 0]
hinted = [r for r in rows if r[6]]
tagged = [r for r in rows if r[7]]
echo_hits = sum(r[4] for r in rows)
bare_hits = sum(r[5] for r in rows)

print(f"ladders audited: {total} (target 8 items each)")
print(f"rule1 recall-stem overuse (>2): {len(over)} ladders ({100*len(over)//max(total,1)}%)")
print(f"rule4 trap present: {total - len(no_trap)} ladders ({100*(total-len(no_trap))//max(total,1)}%)")
print(f"rule5 echo answers: {echo_hits} items across {len(echo_files)} ladders")
print(f"rule7 bare answers: {bare_hits} items")
print(f"hint layer present: {len(hinted)} ladders ({100*len(hinted)//max(total,1)}%)")
print(f"difficulty tags present: {len(tagged)} ladders ({100*len(tagged)//max(total,1)}%)")
print()
print("worst offenders (recall*2 + echo*3 + no-trap*2 + bare):")
def score(r):
    return r[2] * 2 + r[4] * 3 + (0 if r[3] else 2) + r[5]
for r in sorted(rows, key=score, reverse=True)[:20]:
    print(f"  s{score(r):3} recall={r[2]} echo={r[4]} bare={r[5]} trap={'y' if r[3] else 'n'} {r[0]}")
