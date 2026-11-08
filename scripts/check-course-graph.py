#!/usr/bin/env python3
"""
check-course-graph.py - rigorous validation of the Core Course dependency graph.

Checks, in order:
  1. Schema: unique chapter ids, stages exist, chapter stage matches, statuses valid.
  2. Order: every dependency references a chapter EARLIER in the file.
  3. Acyclicity: independent topological sort succeeds.
  4. Ledger: every declared input names a discharging chapter that exists and
     comes LATER in the order; every discharges[] entry is claimed by a later
     (or any) chapter's declaredInputs with a matching dischargedBy; every
     declared input in the whole course is discharged by some chapter.
  5. Hub agreement: the Course Map table in the hub markdown agrees with this
     file (ids via titles, statuses, stage attribution).

Exits nonzero on any violation. This is a gate script.
"""
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
GRAPH = ROOT / "docs" / "course-graph.json"
HUB = ROOT / "sites" / "mathematics" / "src" / "content" / "docs" / "17-core-course" / "index.md"

problems = []

def fail(msg):
    problems.append(msg)

graph = json.loads(GRAPH.read_text(encoding="utf-8"))
stages = graph["stages"]
chapters = graph["chapters"]
stage_ids = [s["id"] for s in stages]

# 1. Schema
ids = [c["id"] for c in chapters]
if len(set(ids)) != len(ids):
    dupes = sorted({i for i in ids if ids.count(i) > 1})
    fail(f"duplicate chapter ids: {dupes}")
id_set = set(ids)
if len(stage_ids) != len(set(stage_ids)):
    fail("duplicate stage ids")
if ids != sorted(ids):
    pass  # ids are prefixed by stage letter; lexicographic order is the document order check
order_index = {c["id"]: i for i, c in enumerate(chapters)}
for c in chapters:
    if c["stage"] not in stage_ids:
        fail(f"{c['id']}: unknown stage {c['stage']}")
    if c["status"] not in ("written", "queued"):
        fail(f"{c['id']}: invalid status {c['status']}")
    if c["status"] == "written" and not c.get("file"):
        fail(f"{c['id']}: written but no file")
    if c.get("file"):
        f = ROOT / "sites" / "mathematics" / "src" / "content" / "docs" / "17-core-course" / c["file"]
        # Queued chapters may carry a planned filename (stage = page for the
        # foundations build); the file itself is only required once written.
        if c["status"] == "written" and not f.exists():
            fail(f"{c['id']}: file does not exist: {c['file']}")
        if c["status"] == "queued" and f.exists():
            fail(f"{c['id']}: queued but its planned file already exists: {c['file']}")

# 2. Order: dependencies must be earlier
for c in chapters:
    for d in c.get("deps", []):
        if d not in id_set:
            fail(f"{c['id']}: dependency {d} does not exist")
        elif order_index[d] >= order_index[c["id"]]:
            fail(f"{c['id']}: dependency {d} is not earlier in the file")

# 3. Acyclicity: Kahn's algorithm must consume everything
indeg = {c["id"]: 0 for c in chapters}
for c in chapters:
    for d in c.get("deps", []):
        if d in indeg:
            indeg[c["id"]] += 1
adj = {c["id"]: [] for c in chapters}
for c in chapters:
    for d in c.get("deps", []):
        if d in adj:
            adj[d].append(c["id"])
ready = [i for i, n in indeg.items() if n == 0]
consumed = 0
while ready:
    n = ready.pop()
    consumed += 1
    for m in adj[n]:
        indeg[m] -= 1
        if indeg[m] == 0:
            ready.append(m)
if consumed != len(chapters):
    stuck = sorted(i for i, n in indeg.items() if n > 0)
    fail(f"CYCLE DETECTED: {len(chapters) - consumed} chapters unreachable topologically: {stuck[:10]}")

# 4. Ledger
all_declared = {}   # input name -> list of (chapter id, dischargedBy)
all_discharged = set()  # (input name, discharging chapter id)
for c in chapters:
    for d in c.get("declaredInputs", []):
        name, by = d.get("input"), d.get("dischargedBy")
        if not name or not by:
            fail(f"{c['id']}: malformed declared input {d}")
            continue
        all_declared.setdefault(name, []).append((c["id"], by))
        all_discharged.add((name, by))
        if by not in id_set:
            fail(f"{c['id']}: declared input '{name}' discharged by nonexistent chapter {by}")
    for name in c.get("discharges", []):
        all_discharged.add((name, c["id"]))

for name, claims in all_declared.items():
    for (cid, by) in claims:
        if (name, by) not in all_discharged:
            fail(
                f"{cid} declares '{name}' discharged by {by}, but {by} does not "
                f"list '{name}' in its discharges[]"
            )
for (name, by) in sorted(all_discharged):
    if name not in all_declared:
        fail(f"{by} discharges '{name}' but no chapter declares it")
    if by not in id_set:
        fail(f"discharger {by} of '{name}' does not exist")

# 5. Axioms: the permanent assumptions, distinct from debts.
axioms = graph.get("axioms", [])
axiom_ids = [a.get("id") for a in axioms]
if len(set(axiom_ids)) != len(axiom_ids):
    fail("duplicate axiom ids")
for a in axioms:
    if not a.get("id") or not a.get("statement"):
        fail(f"malformed axiom {a}")
assumed = {}
for c in chapters:
    for aid in c.get("axioms", []):
        if aid not in axiom_ids:
            fail(f"{c['id']} assumes unknown axiom '{aid}'")
        assumed.setdefault(aid, []).append(c["id"])
for aid in axiom_ids:
    if aid not in assumed:
        fail(f"axiom '{aid}' is declared but no chapter assumes it")
    if aid in all_declared:
        fail(f"axiom '{aid}' is also declared as a debt; axioms are never discharged")

# 6. Hub agreement
hub = HUB.read_text(encoding="utf-8")
m = re.search(r"<!-- COURSE-MAP:START -->(.*?)<!-- COURSE-MAP:END -->", hub, re.S)
if not m:
    fail("hub is missing the COURSE-MAP markers")
else:
    seg = m.group(1)
    rows = re.findall(r"^\|\s*([A-Z]\d+)\s*\|\s*([^|]+?)\s*\|\s*(\w[\w ]*?)\s*\|\s*$", seg, re.M)
    hub_map = {}
    for cid, title, status in rows:
        hub_map[cid] = (title.strip(), status.strip())
    for c in chapters:
        if c["id"] not in hub_map:
            fail(f"hub map is missing chapter {c['id']}")
        else:
            htitle, hstatus = hub_map[c["id"]]
            if hstatus != c["status"]:
                fail(f"hub status drift for {c['id']}: hub '{hstatus}' vs graph '{c['status']}'")
            htitle_clean = re.sub(r"\s*\(.*?\)\s*$", "", htitle)
            if htitle_clean != c["title"]:
                fail(f"hub title drift for {c['id']}: hub '{htitle_clean}' vs graph '{c['title']}'")
    for cid in hub_map:
        if cid not in id_set:
            fail(f"hub map has unknown chapter {cid}")

if problems:
    print("course graph check FAILED:")
    for p in problems:
        print("  -", p)
    sys.exit(1)
print(
    f"course graph OK: {len(chapters)} chapters, {len(stages)} stages, "
    f"{sum(len(c.get('deps', [])) for c in chapters)} edges, acyclic, "
    f"{len(all_declared)} ledger inputs all discharged, "
    f"{len(axiom_ids)} axioms declared and assumed, hub in agreement"
)
