#!/usr/bin/env python3
"""Generate the physics course map section of the physics hub from
docs/physics-course-graph.json (physics-v1.1: 15 stages, 78 chapters).

The hub's Course Map is generated output: it is rewritten between the
COURSE-MAP markers from the graph, so the stage listing and the
machine-checked data can never disagree. scripts/check-physics-graph.py
validates the graph on every push.

Usage:
  python3 scripts/gen-physics-course-map.py           # stamp or rewrite
  python3 scripts/gen-physics-course-map.py --check   # exit nonzero if stale
"""
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
GRAPH = ROOT / "docs" / "physics-course-graph.json"
HUB = ROOT / "sites" / "physics" / "src" / "content" / "docs" / "hub.md"
START = "<!-- COURSE-MAP:START -->"
END = "<!-- COURSE-MAP:END -->"

BLURBS = {
    "A": "models, units, orders of magnitude: what physics asks before it answers",
    "B": "kinematics becomes vector mechanics; Newton's laws as the first engine",
    "C": "momentum and energy: the first great conservation laws",
    "D": "one law of gravitation: falling apples and Kepler's orbits unified",
    "E": "oscillations, waves, and fluids: the SHM engine and its travelling forms",
    "F": "temperature, heat, entropy: the laws that forbid shortcuts",
    "G": "charge, field, potential: Gauss's law and the electrostatic machine",
    "H": "currents, induction, and Maxwell's four equations: light itself derived",
    "I": "interference and diffraction: the wave theory's victory over rays",
    "J": "the two postulates: time dilation, length contraction, one invariant speed",
    "K": "quantisation, wave-particle duality, the uncertainty principle",
    "L": "spectra, nuclei, and the particle zoo: what the atom is made of",
    "M": "Boltzmann's bridge: macroscopic thermodynamics from microscopic counting",
    "N": "bands, phonons, and why solids differ from one another",
    "O": "the open problems: where the frontier currently sits",
}


def build_section(graph):
    chapters = graph["chapters"]
    stages = graph["stages"]
    written = sum(1 for c in chapters if c["status"] == "written")

    lines = [
        "## The Course Map",
        "",
        "The staged course is a guided path from measurement to the research",
        "frontier, designed to be read in order after",
        "**[Before You Begin](/before-you-begin/)**. It is planned as",
        f"{len(chapters)} chapters across {len(stages)} dependency stages, with",
        f"{written} written so far: chapters ship stage by stage, each with full",
        "derivations, guided-discovery ponders, anchored history, and QC ladders",
        "under the same pedagogy standard as the",
        "[mathematics course](https://mathematics.wyattau.com/hub/). Until a stage",
        "ships, its chapter titles below mark exactly what is coming, and the",
        "seven reference tracks above cover the same physics as derivation-based",
        "reference notes you can read today.",
        "",
    ]
    for s in stages:
        chs = [c for c in chapters if c["stage"] == s["id"]]
        lines.append(f"**Stage {s['id']} — {s['title']}** ({len(chs)} chapters, {BLURBS[s['id']]})")
        lines.append("")
        for c in chs:
            status = "written" if c["status"] == "written" else "queued"
            lines.append(f"- {c['title']} — *{status}*")
        lines.append("")
    lines.append("**Where to study now:** the reference tracks above are the")
    lines.append("existing library — every page carries full derivations, worked")
    lines.append("examples, and common pitfalls. The course path below them is the")
    lines.append("order to read them in once its stages begin shipping.")
    lines.append("")
    return "\n".join(lines)


def main():
    check = "--check" in sys.argv
    graph = json.loads(GRAPH.read_text(encoding="utf-8"))
    section = f"{START}\n" + build_section(graph) + f"{END}\n"
    hub = HUB.read_text(encoding="utf-8")

    if START in hub and END in hub:
        pattern = re.compile(re.escape(START) + r".*?" + re.escape(END) + r"\n", re.DOTALL)
        new_hub = pattern.sub(lambda m: section, hub, count=1)
    elif not check:
        anchor = "---\n"
        pos = hub.find(anchor, hub.find("\n\n:::note"))  # after the first aside block
        if pos < 0:
            pos = hub.find("\n\n", hub.find("</script>", hub.find("</script>") + 1))
        new_hub = hub[:pos] + "\n\n" + section + hub[pos:]
    else:
        print("course-map markers missing from hub")
        sys.exit(1)

    if check:
        sys.exit(0 if new_hub == hub else 1)
    HUB.write_text(new_hub, encoding="utf-8")
    print(f"course map stamped: {len(graph['chapters'])} chapters, {sum(1 for c in graph['chapters'] if c['status'] == 'written')} written")


if __name__ == "__main__":
    main()
