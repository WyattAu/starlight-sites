#!/usr/bin/env python3
"""Validate the physics course structure graph.

Rounds:
  1. Structural integrity: unique ids, stage-prefixed, known stages,
     document order matches stage order.
  2. Dependency integrity: depends_on references exist, are earlier in
     the document, the dependency graph is acyclic, every chapter is
     reachable from the entry chapters.
  3. Prerequisite-map integrity: the mathematics_dependency_map
     references stages that exist in the mathematics course graph.
  4. Coverage completeness: every stage has at least one chapter.

Usage: python3 scripts/check-physics-graph.py
"""
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
GRAPH = ROOT / "docs" / "physics-course-graph.json"
MATH_GRAPH = ROOT / "docs" / "course-graph.json"

def fail(msg):
    print(f"physics graph check FAILED:\n  - {msg}")
    sys.exit(1)

def main():
    m = json.loads(GRAPH.read_text(encoding="utf-8"))
    chapters = m.get("chapters", [])
    stages = m.get("stages", [])
    problems = []

    stage_ids = [s["id"] for s in stages]
    if len(stage_ids) != len(set(stage_ids)):
        fail("duplicate stage ids")
    stage_index = {s["id"]: i for i, s in enumerate(stages)}

    ids = [c["id"] for c in chapters]
    if len(ids) != len(set(ids)):
        fail("duplicate chapter ids")

    for c in chapters:
        cid = c["id"]
        if not cid.startswith(c["stage"]):
            problems.append(f"{cid}: id not stage-prefixed")
        if c["stage"] not in stage_ids:
            problems.append(f"{cid}: unknown stage {c['stage']}")

    # document order must match stage order
    last_stage_rank = -1
    for c in chapters:
        r = stage_index[c["stage"]]
        if r < last_stage_rank:
            problems.append(f"{c['id']}: document order breaks stage order")
            break
        last_stage_rank = r

    by_id = {c["id"]: c for c in chapters}
    doc_pos = {c["id"]: i for i, c in enumerate(chapters)}

    # dependency integrity
    for c in chapters:
        for dep in c.get("depends_on", []):
            if dep not in by_id:
                problems.append(f"{c['id']}: depends_on unknown chapter {dep}")
                continue
            if doc_pos[dep] >= doc_pos[c["id"]]:
                problems.append(f"{c['id']}: dependency {dep} is not earlier in the document")

    # acyclicity (deps are earlier by construction if the above passes;
    # verify anyway over the declared edges)
    edges = [(c["id"], d) for c in chapters for d in c.get("depends_on", []) if d in by_id]
    visited, stack, cyclic = set(), set(), []
    adj = {}
    for a, b in edges:
        adj.setdefault(b, []).append(a)
    def visit(n):
        if n in visited:
            return
        if n in stack:
            cyclic.append(f"cycle through {n}")
            return
        stack.add(n)
        for nxt in adj.get(n, []):
            visit(nxt)
        stack.discard(n)
        visited.add(n)
    for c in chapters:
        if c["id"] not in visited:
            visit(c["id"])
    problems.extend(sorted(set(cyclic)))

    # reachability from entry chapters (no depends_on)
    entries = [c["id"] for c in chapters if not c.get("depends_on")]
    if not entries:
        problems.append("no entry chapters (every chapter has dependencies)")
    reach = set()
    frontier = list(entries)
    while frontier:
        cur = frontier.pop()
        if cur in reach:
            continue
        reach.add(cur)
        frontier.extend(adj.get(cur, []))
    unreachable = [c["id"] for c in chapters if c["id"] not in reach]
    if unreachable:
        problems.append(f"unreachable chapters: {', '.join(unreachable)}")

    # prerequisite map integrity
    math_stages = set()
    if MATH_GRAPH.exists():
        mm = json.loads(MATH_GRAPH.read_text(encoding="utf-8"))
        math_stages = {s["id"] for s in mm.get("stages", [])}
    for pstage, mdeps in m.get("mathematics_dependency_map", {}).items():
        if pstage != "note" and pstage not in stage_ids:
            problems.append(f"mathematics_dependency_map: unknown physics stage {pstage}")
        for d in mdeps if isinstance(mdeps, list) else []:
            if math_stages and d not in math_stages:
                problems.append(f"mathematics_dependency_map[{pstage}]: unknown mathematics stage {d}")

    # coverage: every stage has at least one chapter
    covered = {c["stage"] for c in chapters}
    for s in stages:
        if s["id"] not in covered:
            problems.append(f"stage {s['id']} has no chapters")

    if problems:
        print("physics graph check FAILED:")
        for p in problems:
            print(f"  - {p}")
        sys.exit(1)

    n = len(chapters)
    print(f"physics graph OK: {len(stages)} stages, {n} chapters, "
          f"{len(edges)} dependency edges, acyclic, {len(reach)} reachable, "
          f"all stages covered")

if __name__ == "__main__":
    main()
