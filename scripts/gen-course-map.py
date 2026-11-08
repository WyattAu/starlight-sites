#!/usr/bin/env python3
"""Generate the Core Course map section of the hub from docs/course-graph.json.

The hub's Course Map is generated output: it is rewritten between the
COURSE-MAP markers from the graph, so the prose table and the machine-checked
data can never disagree. `scripts/check-course-graph.py` fails the push when
they do.

Usage:
  python3 scripts/gen-course-map.py           # rewrite the hub section
  python3 scripts/gen-course-map.py --check   # exit nonzero if it is stale
"""
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
GRAPH = ROOT / "docs" / "course-graph.json"
HUB = ROOT / "sites" / "mathematics" / "src" / "content" / "docs" / "17-core-course" / "index.md"
START = "<!-- COURSE-MAP:START -->"
END = "<!-- COURSE-MAP:END -->"


def build_section(graph):
    chapters = graph["chapters"]
    stages = {s["id"]: s for s in graph["stages"]}
    axioms = {a["id"]: a for a in graph.get("axioms", [])}

    written = sum(1 for c in chapters if c["status"] == "written")
    lines = [
        "## The Course Map",
        "",
        "The reader arrives knowing how to read. The course builds the rest in",
        "dependency order: logic before counting, counting before the number line, the",
        "number line before algebra, algebra before structure, structure before the",
        "continuum, and the continuum before everything that measures it.",
        f"The full course is {len(chapters)} chapters across {len(graph['stages'])} dependency stages, from",
        "logic to the research frontier, with",
        f"{written} written. The graph is machine-checked: `docs/course-graph.json` is",
        "validated for acyclicity and order-consistency on every push, and the same",
        "data generates a Lean 4 proof, checked in CI, that every dependency of every",
        "chapter descends the course order.",
        "",
        '<div class="table-wrap">',
        "",
        "| Chapter | Title | Status |",
        "|---|---|---|",
    ]

    current_stage = None
    for c in chapters:
        if c["stage"] != current_stage:
            current_stage = c["stage"]
            s = stages[current_stage]
            lines.append(f"| **Stage {current_stage} — {s['title']}** | *{s['blurb']}* | |")

        status = "written" if c["status"] == "written" else "queued"
        notes = []
        debts = c.get("declaredInputs", [])
        if debts:
            notes.append(
                "debt: " + ", ".join(f"{d['input']} → {d['dischargedBy']}" for d in debts)
            )
        assumed = c.get("axioms", [])
        if assumed:
            notes.append("assumes: " + ", ".join(assumed))
        suffix = f" ({'; '.join(notes)})" if notes else ""
        lines.append(f"| {c['id']} | {c['title']}{suffix} | {status} |")

    lines += [
        "",
        "</div>",
        "",
        "Two ledgers, not one. A **debt** is a declared input with a named chapter",
        "that pays it; the machine check refuses a debt without a payee. An **axiom**",
        "is a foundation the course deliberately adopts and never proves, listed in",
        "the graph so that no chapter can quietly assume one. Zermelo's axiom of",
        "choice enters at D5 and is what the basis theorem, the maximal ideal",
        "theorem, and Tychonoff's theorem actually consume.",
        "",
    ]
    if axioms:
        lines += ["| Axiom | Statement |", "|---|---|"]
        for a in graph["axioms"]:
            lines.append(f"| `{a['id']}` | {a['statement']} |")
        lines.append("")

    lines += [
        "The flagship debt is the fundamental theorem of algebra, declared at E3,",
        "consumed at F7 and F8, and paid at K3, roughly forty chapters later.",
        "Dependencies that run upstream (a stage-7 chapter declaring something a",
        "stage-6 chapter proves) are legal and visible: the ledger checks the payee,",
        "not the direction of travel.",
        "",
        "The reference tracks in the sidebar remain the encyclopaedia; this course is",
        "the path through it.",
    ]
    return "\n".join(lines)


STAGE_START = "<!-- STAGE-GRAPH:START -->"
STAGE_END = "<!-- STAGE-GRAPH:END -->"


def build_stage_graph(graph):
    """Aggregate chapter edges to stage edges and emit a mermaid flow."""
    chapters = graph["chapters"]
    stages = {s["id"]: s for s in graph["stages"]}
    stage_of = {c["id"]: c["stage"] for c in chapters}
    order = {s["id"]: i for i, s in enumerate(graph["stages"])}

    edges = set()
    for c in chapters:
        for d in c.get("deps", []):
            a, b = stage_of[d], stage_of[c["id"]]
            if a != b:
                edges.add((a, b))

    lines = [
        "```mermaid",
        "graph TD",
    ]
    for s in graph["stages"]:
        sid = s["id"]
        count = sum(1 for c in chapters if c["stage"] == sid)
        label = f"{sid}: {s['title']} ({count})"
        lines.append(f'    {sid}["{label}"]')
    for a, b in sorted(edges, key=lambda e: (order[e[0]], order[e[1]])):
        lines.append(f"    {a} --> {b}")
    lines.append("```")
    lines.append("")
    lines.append(
        "Each node is a stage, with its chapter count; each arrow is a dependency"
    )
    lines.append(
        "that crosses a stage boundary. The arrows only ever point forward, which is"
    )
    lines.append("the property the Lean artifact checks chapter by chapter.")
    return "\n".join(lines)


def apply_block(text, start, end, body):
    if start in text:
        return re.sub(
            re.escape(start) + r".*?" + re.escape(end),
            start + "\n" + body + "\n" + end,
            text,
            flags=re.S,
        )
    return text


def main():
    graph = json.loads(GRAPH.read_text(encoding="utf-8"))
    hub = HUB.read_text(encoding="utf-8")
    section = build_section(graph)

    if START in hub:
        new = re.sub(
            re.escape(START) + r".*?" + re.escape(END),
            START + "\n" + section + "\n" + END,
            hub,
            flags=re.S,
        )
    else:
        body_start = hub.index("## The Course Map")
        tail = "The reference tracks in the sidebar remain the encyclopaedia; this course is\nthe path through it."
        body_end = hub.index(tail) + len(tail)
        new = (
            hub[:body_start]
            + START
            + "\n"
            + section
            + "\n"
            + END
            + "\n\n"
            + hub[body_end:].lstrip("\n")
        )

    new = apply_block(new, STAGE_START, STAGE_END, build_stage_graph(graph))

    if "--check" in sys.argv:
        if new != hub:
            print("course map STALE: run python3 scripts/gen-course-map.py")
            sys.exit(1)
        print("course map up to date")
        return

    if new != hub:
        HUB.write_text(new, encoding="utf-8")
        print("course map regenerated")
    else:
        print("course map already current")


if __name__ == "__main__":
    main()
