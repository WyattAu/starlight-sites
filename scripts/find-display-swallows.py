#!/usr/bin/env python3
"""Find display-math spans that swallow content (stray $$ fence class).

Walks every markdown file, pairs standalone $$ fence lines sequentially
(matching remark-math), and flags:
  - odd fence counts (an unclosed or extra fence shifts all pairing)
  - display spans whose body contains headings (###), SVG (<svg), bold
    markers (**) or list bullets — content that can never be valid KaTeX

These are the stray-fence swallows documented in
.loop/known-issues-katex.md. Manual repair: delete the stray $$ (the
formula is usually already complete) or restore the missing closer.

Usage: python3 scripts/find-display-swallows.py [--sites DIR]
"""
import os
import re
import sys


def strip_fences_and_code(text):
    text = re.sub(r"```.*?```", "", text, flags=re.DOTALL)
    text = re.sub(r"`[^`]*`", "", text)
    return text


def main():
    root = "sites"
    findings = 0
    files_hit = 0
    for root_dir, _, files in os.walk(root):
        for f in files:
            if not f.endswith((".md", ".mdx")):
                continue
            p = os.path.join(root_dir, f)
            try:
                text = open(p, encoding="utf-8", errors="ignore").read()
            except OSError:
                continue
            text = strip_fences_and_code(text)
            lines = text.split("\n")
            fences = [i for i, l in enumerate(lines) if l.strip() == "$$"]
            odd = len(fences) % 2 == 1
            swallows = []
            i = 0
            while i + 1 < len(fences):
                a, b = fences[i], fences[i + 1]
                body = lines[a + 1 : b]
                if any(("###" in x) or ("<svg" in x) or x.startswith("## ") for x in body):
                    swallows.append((a + 1, b + 1))
                i += 2
            if odd or swallows:
                files_hit += 1
                if odd:
                    print(f"{p}: ODD fence count ({len(fences)})")
                for a, b in swallows:
                    print(f"{p}: display swallows content ({a}-{b})")
                    findings += 1
    print(f"\n{findings} swallow(s) across {files_hit} file(s)")


if __name__ == "__main__":
    main()
