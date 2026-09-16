#!/usr/bin/env python3
"""
Definitive options-array repair for PracticeProblem components.

Works on the ORIGINAL corrupted state: options spans like
    options={[ 'a', &quot;b&quot;, `c`, d ]}        (mixed quote delimiters,
    entities, stray apostrophes)
are parsed with a quote-aware tokenizer, each element decoded, and
re-emitted as a DOUBLE-QUOTED JS array (apostrophes need no escaping):
    options={["a", "b", "c", "d"]}
"""
import re
import subprocess
import sys

ENT = {'&quot;': '"', '&gt;': '>', '&lt;': '<', '&amp;': '&', '&apos;': "'", '&#39;': "'"}

def decode_entities(s):
    for k, v in ENT.items():
        s = s.replace(k, v)
    return s

def js_dq(s):
    """Emit as a double-quoted JS string literal body (without surrounding quotes)."""
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

def fix_options_span(line, oi):
    """Repair one options={...} span starting at oi. Returns (new_line, changed)."""
    i = oi + len('options=')
    if i >= len(line) or line[i] != '{':
        return line, False
    # find matching close brace, tracking quotes AND the &quot; pseudo-quote
    j = i
    depth = 0
    n = len(line)
    in_squote = in_dquote = in_tick = False
    while j < n:
        c = line[j]
        if line.startswith('&quot;', j):
            # toggles the "state" for tokenizer purposes
            if in_dquote:
                in_dquote = False
            else:
                in_dquote = True
            j += 6
            continue
        if c == '\\' and j + 1 < n:
            j += 2
            continue
        if not in_dquote:
            if c == "'" and not in_tick:
                in_squote = not in_squote
            elif c == '`' and not in_squote:
                in_tick = not in_tick
            elif c == '{':
                depth += 1
            elif c == '}':
                depth -= 1
                if depth == 0:
                    break
        j += 1
    if depth != 0:
        return line, False
    inner = line[i + 1:j]          # inside the outer { }
    after = line[j + 1:]            # from } onward (j points AT the closing })

    # strip outer [ ]
    m = re.match(r'\s*\[(.*)\]\s*$', inner, re.DOTALL)
    if not m:
        return line, False
    arr = m.group(1)

    # tokenize elements: split on top-level commas (outside quotes)
    elems = []
    buf = []
    k = 0
    in_sq = in_dq = in_tick = False
    while k < len(arr):
        c = arr[k]
        if arr.startswith('&quot;', k):
            buf.append('&quot;')
            in_dq = not in_dq
            k += 6
            continue
        if c == '\\' and k + 1 < len(arr):
            buf.append(arr[k:k+2])
            k += 2
            continue
        if c == "'" and not in_dq and not in_tick:
            in_sq = not in_sq
            buf.append(c)
            k += 1
            continue
        if c == '`' and not in_dq and not in_sq:
            in_tick = not in_tick
            buf.append(c)
            k += 1
            continue
        if c == ',' and not in_sq and not in_dq and not in_tick:
            elems.append(''.join(buf).strip())
            buf = []
            k += 1
            continue
        buf.append(c)
        k += 1
    if buf:
        elems.append(''.join(buf).strip())
    elems = [e for e in elems if e]
    if not elems:
        return line, False

    # decode each element to plain text
    texts = []
    for e in elems:
        t = decode_entities(e)
        # strip wrapping quotes (single, double, backtick) — max one pair each end
        t = t.strip()
        for _ in range(2):
            if len(t) >= 2 and t[0] == t[-1] and t[0] in ("'", '"', '`'):
                t = t[1:-1].strip()
        texts.append(t)

    rebuilt = 'options={[' + ', '.join('"' + js_dq(t) + '"' for t in texts) + ']}'
    new_line = line[:i] + rebuilt + after
    return new_line, rebuilt != line[i:j]

def process(path):
    content = open(path, encoding='utf-8').read()
    lines = content.split('\n')
    count = 0
    for li, line in enumerate(lines):
        if 'options={' not in line or 'PracticeProblem' not in line:
            continue
        idx = 0
        while True:
            oi = line.find('options={', idx)
            if oi == -1:
                break
            new_line, changed = fix_options_span(line, oi)
            if changed:
                line = new_line
                count += 1
            idx = oi + len('options={')
        lines[li] = line
    if count:
        open(path, 'w', encoding='utf-8').write('\n'.join(lines))
    return count

if __name__ == '__main__':
    total = 0
    for f in sys.argv[1:]:
        n = process(f)
        total += n
        print(f'{n:3d}  {f}')
    print(f'total: {total}')
