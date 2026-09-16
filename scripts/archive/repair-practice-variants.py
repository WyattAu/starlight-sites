#!/usr/bin/env python3
"""
Definitive repair for the remaining &quot;-corrupted PracticeProblem tags.

Per tag: extract question / options / correctAnswer / explanation / difficulty
using a quote-aware scanner, decode HTML entities, and rebuild a well-formed
component. Validates every output file with the project's real MDX compiler.
"""
import re
import subprocess
import sys
import os

ENT = {'&quot;': '"', '&gt;': '>', '&lt;': '<', '&amp;': '&', '&apos;': "'", '&#39;': "'"}

def decode_entities(s):
    for k, v in ENT.items():
        s = s.replace(k, v)
    return s

def js_escape(s):
    """Escape for a double-quoted JS string."""
    out = []
    for ch in s:
        if ch == '\\':
            out.append('\\\\')
        elif ch == '"':
            out.append('\\"')
        elif ch == '\n':
            out.append('\\n')
        else:
            out.append(ch)
    return ''.join(out)

def scan_string(src, i):
    """Scan a quoted string starting at src[i] (quote char).
    Handles \\-escapes and the &quot; pseudo-quote.
    Returns (content, end_index_after_closing_quote)."""
    q = src[i]
    j = i + 1
    out = []
    n = len(src)
    while j < n:
        # check for &quot; pseudo-delimiter
        if src.startswith('&quot;', j):
            return ''.join(out), j + 6
        c = src[j]
        if c == '\\' and j + 1 < n:
            out.append(src[j:j+2])
            j += 2
            continue
        if c == q:
            return ''.join(out), j + 1
        out.append(c)
        j += 1
    return ''.join(out), n

def split_elements(arr_inner):
    """Split array content on top-level commas, respecting quotes."""
    elems = []
    buf = []
    i, n = 0, len(arr_inner)
    depth = 0
    while i < n:
        c = arr_inner[i]
        if arr_inner.startswith('&quot;', i):
            buf.append('&quot;')
            i += 6
            continue
        if c in ('\'', '"', '`'):
            content, i2 = scan_string(arr_inner, i)
            buf.append(arr_inner[i:i2])
            i = i2
            continue
        if c == '[':
            depth += 1
        elif c == ']':
            depth -= 1
        if c == ',' and depth == 0:
            elems.append(''.join(buf).strip())
            buf = []
            i += 1
            continue
        buf.append(c)
        i += 1
    if buf:
        elems.append(''.join(buf).strip())
    return [e for e in elems if e]

def strip_wrap(s):
    """Strip wrapping quotes (any style) from an element."""
    s = s.strip()
    if s.startswith('&quot;') and s.endswith('&quot;') and len(s) >= 12:
        return s[6:-6], True
    if len(s) >= 2 and s[0] == s[-1] and s[0] in ('\'', '"', '`'):
        return s[1:-1], True
    return s, False

def parse_tag(tag):
    """Extract fields from a corrupted tag. Returns dict or None."""
    # question: between question={" and the LAST '&quot; options={'
    qi = tag.find('question={"')
    oi = tag.rfind('&quot; options={')
    ci = tag.find('} correctAnswer={')
    if qi == -1 or oi == -1 or ci == -1:
        return None
    q_raw = tag[qi + len('question={"'):oi]
    question = decode_entities(q_raw)

    # options: between options={ and the matching } before ' correctAnswer='
    oi2 = tag.find('options={', oi)
    start = oi2 + len('options={')
    # scan to matching close: track bracket depth, respect quotes
    depth = 1
    j = start
    in_str = None
    n = len(tag)
    while j < n and depth > 0:
        c = tag[j]
        if in_str:
            if c == '\\':
                j += 2
                continue
            if c == in_str:
                in_str = None
            j += 1
            continue
        if c in ('\'', '"', '`'):
            in_str = c
            j += 1
            continue
        if c == '[':
            depth += 1
        elif c == ']':
            depth -= 1
        elif c == '}':
            break
        j += 1
    opts_inner = tag[start:j].lstrip('[').rstrip(']').strip()
    opts = [decode_entities(strip_wrap(e)[0]) for e in split_elements(opts_inner)]

    cm = re.search(r'correctAnswer=\{(\d+)\}', tag[ci:ci+40])
    correct = int(cm.group(1)) if cm else 0

    # explanation
    ei = tag.find('explanation=', ci)
    expl = ''
    if ei != -1:
        ei += len('explanation=')
        # to ' difficulty=' or end
        di = tag.find('difficulty=', ei)
        raw = tag[ei:di if di != -1 else len(tag)].strip()
        # strip wrapping: {"..."} / {`...`} / &quot;...&quot;" } / &quot;..."} / "..."
        raw = raw.lstrip('{').rstrip('}').strip()
        if raw.endswith('/>'):
            raw = raw[:-2].strip()
        # now raw is like: "E"  or  &quot;E&quot;"  or  `E`  or  &quot;E&quot;
        for _ in range(2):
            raw = raw.strip()
            if raw.startswith('&quot;'):
                raw = raw[6:]
            if raw.endswith('&quot;'):
                raw = raw[:-6]
            raw = raw.strip()
        if len(raw) >= 2 and raw[0] == raw[-1] and raw[0] in ('\'', '"', '`'):
            raw = raw[1:-1]
        expl = decode_entities(raw)

    # difficulty
    dm = re.search(r'difficulty=(?:&quot;)?(\w+)', tag[ci:])
    diff = dm.group(1) if dm else 'medium'
    if diff not in ('easy', 'medium', 'hard'):
        diff = 'medium'

    return {
        'question': question,
        'options': opts,
        'correct': correct,
        'explanation': expl,
        'difficulty': diff,
    }

def build_tag(f):
    q = js_escape(f['question'])
    opts = ', '.join('"' + js_escape(o) + '"' for o in f['options'])
    e = js_escape(f['explanation'])
    return (f'<PracticeProblem client:only="solid-js" question={{"{q}"}} '
            f'options={{{opts}]}} correctAnswer={{{f["correct"]}}} '
            f'explanation={{"{e}"}} difficulty="{f["difficulty"]}" />')

def main():
    files = sys.argv[1:]
    ok, failed = [], []
    for f in files:
        content = open(f, encoding='utf-8').read()
        out = []
        pos = 0
        count = 0
        while True:
            i = content.find('<PracticeProblem', pos)
            if i == -1:
                out.append(content[pos:])
                break
            end = content.find('/>', i)
            if end == -1:
                out.append(content[pos:])
                break
            end += 2
            tag = content[i:end]
            out.append(content[pos:i])
            if '&quot; options={' in tag:
                fields = parse_tag(tag)
                if fields and fields['options'] and fields['question']:
                    out.append(build_tag(fields))
                    count += 1
                else:
                    out.append(tag)  # keep; will be reported
            else:
                out.append(tag)
            pos = end
        new_content = ''.join(out)
        open(f, 'w', encoding='utf-8').write(new_content)
        # validate with real compiler
        r = subprocess.run(['bun', 'scripts/_check-mdx-real.mjs', f],
                           capture_output=True, text=True)
        status = 'OK' if r.returncode == 0 else 'FAIL'
        (ok if r.returncode == 0 else failed).append(f)
        print(f'{status}  {count:2d} tags  {f}')
    print(f'\nOK: {len(ok)}, FAIL: {len(failed)}')
    for f in failed:
        print('  ', f)

if __name__ == '__main__':
    main()
