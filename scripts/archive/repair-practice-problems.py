#!/usr/bin/env python3
"""
Repair PracticeProblem components corrupted with the &quot; pattern.

Corruption: question={"TEXT&quot; options={[...]} correctAnswer={N} explanation=&quot;MORE"}
  (the whole thing parses as ONE string prop; options/correctAnswer/explanation
   are lost as literal text -- users see a text wall, no interactivity)

Repair:    question={"TEXT"} options={[...]} correctAnswer={N} explanation={"MORE"}
"""
import re
import subprocess
import sys
import glob

# question={"(Q) &quot; options=({OPTS}) correctAnswer={N} explanation=&quot;(E)"}
# - Q: non-greedy up to the unique literal '&quot; options='
# - OPTS: non-greedy up to the unique boundary '} correctAnswer='
# - E: standard JS string chars, terminated by '"}' at end of expression
PATTERN = re.compile(
    r'question=\{"(.*?)"?&quot; options=(\{.*?\}) correctAnswer=\{(\d+)\} '
    r'explanation=&quot;((?:[^"\\]|\\.)*)"\}',
    re.DOTALL,
)

def repair(content):
    def repl(m):
        q, opts, correct, expl = m.group(1), m.group(2), m.group(3), m.group(4)
        q = q.rstrip()
        return f'question={{"{q}"}} options={opts} correctAnswer={{{correct}}} explanation={{"{expl}"}}'
    return PATTERN.subn(repl, content)

def main():
    files = sorted(
        f for f in glob.glob('sites/*/src/content/docs/**/*.mdx', recursive=True)
        + glob.glob('sites/*/src/content/docs/**/*.md', recursive=True)
        if '&quot; options={' in open(f, encoding='utf-8', errors='ignore').read()
    )
    print(f'files with corruption: {len(files)}')
    total = 0
    repaired = []
    for f in files:
        content = open(f, encoding='utf-8').read()
        new_content, n = repair(content)
        if n == 0:
            print(f'  NO MATCH: {f}')
            continue
        open(f, 'w', encoding='utf-8').write(new_content)
        total += n
        repaired.append((f, n))
    print(f'total components repaired: {total} across {len(repaired)} files')
    for f, n in repaired:
        print(f'  {n:3d}  {f}')

if __name__ == '__main__':
    main()
