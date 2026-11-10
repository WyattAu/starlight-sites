#!/usr/bin/env python3
"""convert-quick-checks.py - convert **Quick check.** blocks and the
## Stage Gate section in a course stage page to the aside + spoiler
format (:::note / :::caution with <details> answers).

Line-based, single pass, idempotent (already-converted blocks are left
untouched). Scope: one stage page per run.

Usage: python3 scripts/convert-quick-checks.py <stage-page.md>
"""
import sys
from pathlib import Path

def main():
    if len(sys.argv) < 2:
        print("usage: convert-quick-checks.py <stage-page.md>")
        sys.exit(1)
    path = Path(sys.argv[1])
    lines = path.read_text(encoding="utf-8").split("\n")
    out = []
    i = 0
    qc_done = 0
    gate_done = 0
    while i < len(lines):
        line = lines[i]
        # ---- already converted: pass through ----
        if line.strip().startswith(":::"):
            out.append(line)
            i += 1
            continue
        # ---- quick check ----
        if line.strip() == "**Quick check.**":
            j = i + 1
            while j < len(lines) and lines[j].strip() == "":
                j += 1
            q_start = j
            ans_start = None
            k = q_start
            while k < len(lines):
                if lines[k].startswith("*Answers:*"):
                    ans_start = k
                    break
                if lines[k].strip() == "":
                    m = k + 1
                    while m < len(lines) and lines[m].strip() == "":
                        m += 1
                    if m < len(lines) and lines[m].startswith("*Answers:*"):
                        ans_start = m
                        break
                    # a blank line that is not the answers boundary:
                    # the questions list itself ended; stop the scan
                    break
                k += 1
            if ans_start is None:
                out.append(line)
                i += 1
                continue
            questions = lines[q_start:ans_start]
            while questions and questions[-1].strip() == "":
                questions = questions[:-1]
            a_end = ans_start
            while a_end < len(lines) and lines[a_end].strip() != "":
                a_end += 1
            answers = lines[ans_start:a_end]
            a0 = answers[0].replace("*Answers:*", "", 1).strip()
            answers_body = ([a0] if a0 else []) + answers[1:]
            while answers_body and answers_body[0].strip() == "":
                answers_body = answers_body[1:]
            while answers_body and answers_body[-1].strip() == "":
                answers_body = answers_body[:-1]
            out.append(":::note[Quick check]")
            out.append("")
            out.extend(questions)
            out.append("")
            out.append('<details class="wn-spoiler">')
            out.append("<summary>Answers</summary>")
            out.append('<div class="wn-spoiler-body">')
            out.append("")
            out.extend(answers_body)
            out.append("")
            out.append("</div>")
            out.append("</details>")
            out.append("")
            out.append(":::")
            qc_done += 1
            i = a_end
            continue
        # ---- stage gate ----
        if line.strip() == "## Stage Gate":
            out.append(line)
            i += 1
            while i < len(lines) and not lines[i].strip().startswith("1. "):
                if lines[i].strip() != "":
                    out.append(lines[i])
                i += 1
            out.append(":::caution[Pass mark: four of five]")
            gate_done += 1
            while i < len(lines):
                if lines[i].strip() == "## Where to Go Next":
                    break
                out.append(lines[i])
                i += 1
            out.append(":::")
            continue
        out.append(line)
        i += 1

    path.write_text("\n".join(out), encoding="utf-8")
    print(f"quick checks converted: {qc_done}, gates converted: {gate_done}")

if __name__ == "__main__":
    main()
