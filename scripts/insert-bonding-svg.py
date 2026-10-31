#!/usr/bin/env python3
"""Generate dot-and-cross SVG diagrams and insert them into the GCSE bonding page."""

import math
from pathlib import Path

PAGE = Path('sites/gcse/src/content/docs/chemistry/2-bonding/2_bonding.md')

# ── SVG helpers ──────────────────────────────────────────────────────────

def electron_dot(cx, cy, ex, ey, colour='#2563eb', r=4):
    """A filled dot electron at (ex, ey) on a shell centred at (cx, cy)."""
    return f'<circle cx="{ex:.1f}" cy="{ey:.1f}" r="{r}" fill="{colour}" stroke="#1f2937" stroke-width="0.8"/>'

def electron_cross(cx, cy, ex, ey, colour='#dc2626', s=5):
    """An ×-shaped cross electron at (ex, ey)."""
    return (f'<line x1="{ex-s:.1f}" y1="{ey-s:.1f}" x2="{ex+s:.1f}" y2="{ey+s:.1f}" '
            f'stroke="{colour}" stroke-width="2.2"/>\n'
            f'  <line x1="{ex+s:.1f}" y1="{ey-s:.1f}" x2="{ex-s:.1f}" y2="{ey+s:.1f}" '
            f'stroke="{colour}" stroke-width="2.2"/>')

def shell_electrons(cx, cy, r, angles, kind='cross', dot_colour='#2563eb', cross_colour='#dc2626'):
    """Place electrons at given angles (degrees) on a shell circle."""
    parts = []
    for a in angles:
        rad = math.radians(a)
        ex = cx + r * math.cos(rad)
        ey = cy + r * math.sin(rad)
        if kind == 'dot':
            parts.append(electron_dot(cx, cy, ex, ey, dot_colour))
        else:
            parts.append(electron_cross(cx, cy, ex, ey, cross_colour))
    return '\n  '.join(parts)

def bracket_left(x, y_top, y_bot, colour='#374151'):
    return f'<path d="M {x+8},{y_top} L {x},{y_top} L {x},{y_bot} L {x+8},{y_bot}" stroke="{colour}" fill="none" stroke-width="2"/>'

def bracket_right(x, y_top, y_bot, colour='#374151'):
    return f'<path d="M {x-8},{y_top} L {x},{y_top} L {x},{y_bot} L {x-8},{y_bot}" stroke="{colour}" fill="none" stroke-width="2"/>'

def charge_text(x, y, charge, colour='#dc2626'):
    return f'<text x="{x}" y="{y}" font-size="16" fill="{colour}" font-weight="bold">{charge}</text>'

def atom_label(cx, cy, symbol, size=14):
    return f'<text x="{cx}" y="{cy}" text-anchor="middle" font-size="{size}" fill="#1f2937" font-weight="bold" dominant-baseline="central">{symbol}</text>'

def shell_circle(cx, cy, r, colour='#9ca3af'):
    return f'<circle cx="{cx}" cy="{cy}" r="{r}" stroke="{colour}" fill="none" stroke-width="1.5"/>'

# 8 evenly spaced angles on a circle
ANGLES_8 = [270, 315, 0, 45, 90, 135, 180, 225]

# ── Diagram generators ────────────────────────────────────────────────────

def svg_nacl():
    """NaCl: Na⁺ (empty shell) + Cl⁻ (7 crosses + 1 dot from Na)."""
    parts = []
    parts.append('<svg viewBox="0 0 420 180" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">')
    # Na⁺ on the left
    parts.append(shell_circle(80, 85, 30))
    parts.append(atom_label(80, 85, 'Na'))
    # Na inner shell (2 electrons, shown small)
    parts.append(shell_circle(80, 85, 16, '#d1d5db'))
    for a in [90, 270]:
        rad = math.radians(a)
        parts.append(f'<circle cx="{80 + 16 * math.cos(rad):.1f}" cy="{85 + 16 * math.sin(rad):.1f}" r="3" fill="#6b7280"/>')
    # Na⁺ brackets + charge
    parts.append(bracket_left(40, 40, 130))
    parts.append(bracket_right(120, 40, 130))
    parts.append(charge_text(124, 55, '+'))
    # Cl⁻ on the right
    parts.append(shell_circle(290, 85, 30))
    parts.append(atom_label(290, 85, 'Cl'))
    # Cl inner shell
    parts.append(shell_circle(290, 85, 16, '#d1d5db'))
    for a in [90, 270]:
        rad = math.radians(a)
        parts.append(f'<circle cx="{290 + 16 * math.cos(rad):.1f}" cy="{85 + 16 * math.sin(rad):.1f}" r="3" fill="#6b7280"/>')
    # Cl⁻ outer shell: 7 crosses (Cl's own) + 1 dot (transferred from Na)
    # The dot from Na is at the top (nearest the Na atom)
    parts.append(shell_electrons(290, 85, 30, [270], 'dot'))  # Na's dot at top
    parts.append(shell_electrons(290, 85, 30, [0, 45, 90, 135, 180, 225, 315], 'cross'))  # 7 Cl crosses
    # Cl⁻ brackets + charge
    parts.append(bracket_left(250, 40, 130))
    parts.append(bracket_right(330, 40, 130))
    parts.append(charge_text(334, 55, '−', '#2563eb'))
    # Labels
    parts.append(f'<text x="80" y="155" text-anchor="middle" font-size="12" fill="#6b7280">Na⁺</text>')
    parts.append(f'<text x="290" y="155" text-anchor="middle" font-size="12" fill="#6b7280">Cl⁻</text>')
    # Arrow between
    parts.append(f'<text x="185" y="90" text-anchor="middle" font-size="14" fill="#9ca3af">⟶</text>')
    parts.append(f'<text x="185" y="108" text-anchor="middle" font-size="10" fill="#9ca3af">e⁻ transfer</text>')
    parts.append('</svg>')
    parts.append(f'<p style="text-align:center;font-size:12px;color:#6b7280;margin:4px 0">Sodium chloride (NaCl): the sodium atom transfers its single outer electron to chlorine. ● = sodium&#39;s electron, ✕ = chlorine&#39;s electrons</p>')
    return '\n'.join(parts)

def svg_mgo():
    """MgO: Mg²⁺ (empty shell) + O²⁻ (6 crosses + 2 dots from Mg)."""
    parts = []
    parts.append('<svg viewBox="0 0 420 180" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">')
    # Mg²⁺ on the left
    parts.append(shell_circle(80, 85, 30))
    parts.append(atom_label(80, 85, 'Mg'))
    parts.append(shell_circle(80, 85, 16, '#d1d5db'))
    for a in [90, 270]:
        rad = math.radians(a)
        parts.append(f'<circle cx="{80 + 16 * math.cos(rad):.1f}" cy="{85 + 16 * math.sin(rad):.1f}" r="3" fill="#6b7280"/>')
    parts.append(bracket_left(40, 40, 130))
    parts.append(bracket_right(120, 40, 130))
    parts.append(charge_text(124, 55, '2+'))
    # O²⁻ on the right
    parts.append(shell_circle(290, 85, 30))
    parts.append(atom_label(290, 85, 'O'))
    # O²⁻ outer shell: 6 crosses (O's own) + 2 dots (Mg's, at the top-left and top-right)
    parts.append(shell_electrons(290, 85, 30, [250, 290], 'dot'))  # Mg's 2 dots
    parts.append(shell_electrons(290, 85, 30, [0, 45, 90, 135, 180, 225, 315], 'cross'))  # O's 6 crosses (using 7 positions minus 2 for dots = need adjustment)
    # Actually: O²⁻ has 8 electrons = 2 dots + 6 crosses
    # Let me redo: 2 dots at top positions, 6 crosses at other positions
    # Clear and redo the electrons
    parts_clean = []
    parts_clean.append(shell_circle(290, 85, 30))
    parts_clean.append(atom_label(290, 85, 'O'))
    # 2 dots at top-left and top-right (from Mg)
    parts_clean.append(shell_electrons(290, 85, 30, [300, 240], 'dot'))
    # 6 crosses at the remaining positions
    parts_clean.append(shell_electrons(290, 85, 30, [0, 45, 90, 135, 180, 315], 'cross'))
    # Brackets + charge
    parts_clean.append(bracket_left(250, 40, 130))
    parts_clean.append(bracket_right(330, 40, 130))
    parts_clean.append(charge_text(334, 55, '2−', '#2563eb'))
    parts_clean.append(f'<text x="80" y="155" text-anchor="middle" font-size="12" fill="#6b7280">Mg²⁺</text>')
    parts_clean.append(f'<text x="290" y="155" text-anchor="middle" font-size="12" fill="#6b7280">O²⁻</text>')
    parts_clean.append(f'<text x="185" y="90" text-anchor="middle" font-size="14" fill="#9ca3af">⟶</text>')
    parts_clean.append(f'<text x="185" y="108" text-anchor="middle" font-size="10" fill="#9ca3af">2 e⁻ transfer</text>')
    parts_clean.append('</svg>')
    parts_clean.append(f'<p style="text-align:center;font-size:12px;color:#6b7280;margin:4px 0">Magnesium oxide (MgO): magnesium transfers two electrons to oxygen. ● = magnesium&#39;s electrons, ✕ = oxygen&#39;s electrons</p>')
    return '\n'.join(parts_clean)

def svg_caf2():
    """CaF₂: Ca²⁺ in the centre, two F⁻ ions on either side."""
    parts = []
    parts.append('<svg viewBox="0 0 520 180" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">')
    # Ca²⁺ in the centre
    parts.append(shell_circle(260, 85, 30))
    parts.append(atom_label(260, 85, 'Ca'))
    parts.append(shell_circle(260, 85, 16, '#d1d5db'))
    for a in [90, 270]:
        rad = math.radians(a)
        parts.append(f'<circle cx="{260 + 16 * math.cos(rad):.1f}" cy="{85 + 16 * math.sin(rad):.1f}" r="3" fill="#6b7280"/>')
    parts.append(bracket_left(220, 40, 130))
    parts.append(bracket_right(300, 40, 130))
    parts.append(charge_text(304, 55, '2+'))
    # Left F⁻
    parts.append(shell_circle(100, 85, 30))
    parts.append(atom_label(100, 85, 'F'))
    parts.append(shell_electrons(100, 85, 30, [0, 45, 90, 135, 180, 225, 315], 'cross'))
    parts.append(shell_electrons(100, 85, 30, [270], 'dot'))  # Ca's dot at top
    parts.append(bracket_left(60, 40, 130))
    parts.append(bracket_right(140, 40, 130))
    parts.append(charge_text(144, 55, '−', '#2563eb'))
    # Right F⁻
    parts.append(shell_circle(420, 85, 30))
    parts.append(atom_label(420, 85, 'F'))
    parts.append(shell_electrons(420, 85, 30, [0, 45, 90, 135, 180, 225, 315], 'cross'))
    parts.append(shell_electrons(420, 85, 30, [270], 'dot'))
    parts.append(bracket_left(380, 40, 130))
    parts.append(bracket_right(460, 40, 130))
    parts.append(charge_text(464, 55, '−', '#2563eb'))
    # Labels
    parts.append(f'<text x="100" y="155" text-anchor="middle" font-size="12" fill="#6b7280">F⁻</text>')
    parts.append(f'<text x="260" y="155" text-anchor="middle" font-size="12" fill="#6b7280">Ca²⁺</text>')
    parts.append(f'<text x="420" y="155" text-anchor="middle" font-size="12" fill="#6b7280">F⁻</text>')
    parts.append('</svg>')
    parts.append('<p style="text-align:center;font-size:12px;color:#6b7280;margin:4px 0">Calcium fluoride (CaF₂): calcium transfers one electron to each fluorine atom. ● = calcium&#39;s electron, ✕ = fluorine&#39;s electrons</p>')
    return '\n'.join(parts)

def svg_li2o():
    """Li₂O: O²⁻ in the centre, two Li⁺ ions on either side."""
    parts = []
    parts.append('<svg viewBox="0 0 520 180" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">')
    # O²⁻ in the centre
    parts.append(shell_circle(260, 85, 30))
    parts.append(atom_label(260, 85, 'O'))
    # 8 electrons: 2 dots (from Li) + 6 crosses (O's own)
    # 2 dots at top-left and top-right (from Li)
    parts.append(shell_electrons(260, 85, 30, [300, 240], 'dot'))
    # 6 crosses at the other positions
    parts.append(shell_electrons(260, 85, 30, [0, 45, 90, 135, 180, 315], 'cross'))
    parts.append(bracket_left(220, 40, 130))
    parts.append(bracket_right(300, 40, 130))
    parts.append(charge_text(304, 55, '2−', '#2563eb'))
    # Left Li⁺
    parts.append(shell_circle(100, 85, 25))
    parts.append(atom_label(100, 85, 'Li', 12))
    parts.append(shell_circle(100, 85, 12, '#d1d5db'))
    for a in [90, 270]:
        rad = math.radians(a)
        parts.append(f'<circle cx="{100 + 12 * math.cos(rad):.1f}" cy="{85 + 12 * math.sin(rad):.1f}" r="2.5" fill="#6b7280"/>')
    parts.append(bracket_left(70, 45, 125))
    parts.append(bracket_right(130, 45, 125))
    parts.append(charge_text(134, 55, '+'))
    # Right Li⁺
    parts.append(shell_circle(420, 85, 25))
    parts.append(atom_label(420, 85, 'Li', 12))
    parts.append(shell_circle(420, 85, 12, '#d1d5db'))
    for a in [90, 270]:
        rad = math.radians(a)
        parts.append(f'<circle cx="{420 + 12 * math.cos(rad):.1f}" cy="{85 + 12 * math.sin(rad):.1f}" r="2.5" fill="#6b7280"/>')
    parts.append(bracket_left(390, 45, 125))
    parts.append(bracket_right(450, 45, 125))
    parts.append(charge_text(454, 55, '+'))
    # Labels
    parts.append(f'<text x="100" y="150" text-anchor="middle" font-size="12" fill="#6b7280">Li⁺</text>')
    parts.append(f'<text x="260" y="155" text-anchor="middle" font-size="12" fill="#6b7280">O²⁻</text>')
    parts.append(f'<text x="420" y="150" text-anchor="middle" font-size="12" fill="#6b7280">Li⁺</text>')
    parts.append('</svg>')
    parts.append('<p style="text-align:center;font-size:12px;color:#6b7280;margin:4px 0">Lithium oxide (Li₂O): each lithium atom transfers one electron to oxygen. ● = lithium&#39;s electrons, ✕ = oxygen&#39;s electrons</p>')
    return '\n'.join(parts)

# ── Covalent diagrams ─────────────────────────────────────────────────────

def svg_h2():
    """H₂: two overlapping circles with one shared pair."""
    parts = []
    parts.append('<svg viewBox="0 0 260 180" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">')
    # Two overlapping circles
    parts.append(shell_circle(95, 85, 45))
    parts.append(shell_circle(165, 85, 45))
    # Element labels
    parts.append(atom_label(75, 85, 'H'))
    parts.append(atom_label(185, 85, 'H'))
    # Shared pair in the overlap: 1 dot + 1 cross side by side
    parts.append(electron_dot(130, 85, 122, 85))
    parts.append(electron_cross(130, 85, 138, 85))
    # Labels
    parts.append('<text x="130" y="155" text-anchor="middle" font-size="12" fill="#6b7280">Shared pair of electrons</text>')
    parts.append('</svg>')
    return '\n'.join(parts)

def svg_h2o():
    """H₂O: central O with two overlapping H circles, two shared pairs, two lone pairs."""
    parts = []
    parts.append('<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">')
    # Central O
    parts.append(shell_circle(160, 105, 50))
    parts.append(atom_label(160, 105, 'O'))
    # Left H circle (overlapping)
    parts.append(shell_circle(85, 105, 30))
    parts.append(atom_label(65, 105, 'H', 12))
    # Right H circle (overlapping)
    parts.append(shell_circle(235, 105, 30))
    parts.append(atom_label(255, 105, 'H', 12))
    # Shared pair 1 (left overlap): dot + cross
    parts.append(electron_dot(160, 105, 118, 105))
    parts.append(electron_cross(160, 105, 132, 105))
    # Shared pair 2 (right overlap): dot + cross
    parts.append(electron_dot(160, 105, 202, 105))
    parts.append(electron_cross(160, 105, 188, 105))
    # Two lone pairs on O (top and bottom)
    parts.append(electron_dot(160, 105, 148, 65))
    parts.append(electron_dot(160, 105, 172, 65))
    parts.append(electron_dot(160, 105, 148, 145))
    parts.append(electron_dot(160, 105, 172, 145))
    # Labels
    parts.append('<text x="160" y="35" text-anchor="middle" font-size="12" fill="#6b7280">Lone pairs</text>')
    parts.append('<text x="160" y="195" text-anchor="middle" font-size="12" fill="#6b7280">Two shared pairs (bonds)</text>')
    parts.append('</svg>')
    return '\n'.join(parts)

def svg_ch4():
    """CH₄: central C with four H atoms at compass points."""
    parts = []
    parts.append('<svg viewBox="0 0 320 260" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">')
    # Central C
    parts.append(shell_circle(160, 130, 45))
    parts.append(atom_label(160, 130, 'C'))
    # Four H atoms at compass points (N, E, S, W)
    for dx, dy, lx, ly in [(0, -55, 160, 55), (55, 0, 240, 130), (0, 55, 160, 205), (-55, 0, 80, 130)]:
        hx, hy = 160 + dx, 130 + dy
        parts.append(shell_circle(hx, hy, 22))
        parts.append(atom_label(hx, hy, 'H', 12))
        # Shared pair: dot from C + cross from H in the overlap
        mx = (160 + hx) / 2
        my = (130 + hy) / 2
        parts.append(electron_dot(160, 130, mx - 5, my))
        parts.append(electron_cross(160, 130, mx + 5, my))
    # Labels
    parts.append('<text x="160" y="245" text-anchor="middle" font-size="12" fill="#6b7280">Four shared pairs (single covalent bonds)</text>')
    parts.append('</svg>')
    return '\n'.join(parts)

def svg_n2():
    """N₂: two overlapping circles with a triple bond (three shared pairs) and lone pairs."""
    parts = []
    parts.append('<svg viewBox="0 0 280 180" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">')
    # Two overlapping circles
    parts.append(shell_circle(100, 85, 50))
    parts.append(shell_circle(180, 85, 50))
    # Element labels
    parts.append(atom_label(75, 85, 'N'))
    parts.append(atom_label(205, 85, 'N'))
    # Triple bond: three shared pairs in the overlap
    for dy in [-12, 0, 12]:
        parts.append(electron_dot(140, 85 + dy, 132, 85 + dy))
        parts.append(electron_cross(140, 85 + dy, 148, 85 + dy))
    # Lone pairs (outside the overlap, on the outer edges)
    parts.append(electron_dot(140, 85, 62, 65))
    parts.append(electron_dot(140, 85, 62, 105))
    parts.append(electron_dot(140, 85, 218, 65))
    parts.append(electron_dot(140, 85, 218, 105))
    # Label
    parts.append('<text x="140" y="165" text-anchor="middle" font-size="12" fill="#6b7280">Triple bond: three shared pairs</text>')
    parts.append('</svg>')
    return '\n'.join(parts)

# ── Read the page and insert diagrams ─────────────────────────────────────

t = PAGE.read_text(encoding='utf-8')

# Insert ionic diagrams
t = t.replace(
    '**Example: Magnesium oxide (MgO)**\n\nMagnesium',
    f'**Example: Magnesium oxide (MgO)**\n\n{svg_mgo()}\n\nMagnesium'
)

t = t.replace(
    '**Worked Example.** Draw the dot and cross diagram for calcium fluoride (CaF$_2$).\n\nCalcium',
    f'**Worked Example.** Draw the dot and cross diagram for calcium fluoride (CaF$_2$).\n\n{svg_caf2()}\n\nCalcium'
)

t = t.replace(
    '**Worked Example.** Draw the dot and cross diagram for lithium oxide (Li$_2$O).\n\nEach lithium',
    f'**Worked Example.** Draw the dot and cross diagram for lithium oxide (Li$_2$O).\n\n{svg_li2o()}\n\nEach lithium'
)

# Insert covalent diagrams
t = t.replace(
    '**Hydrogen (H$_2$):** Each hydrogen atom has 1 electron. They share one pair.\n\n$$\n\\mathrm{H \\cdot + \\cdot \\mathrm{H \\to \\mathrm{H - \\mathrm{H',
    f'**Hydrogen (H$_2$):** Each hydrogen atom has 1 electron. They share one pair.\n\n{svg_h2()}\n\n$$\n\\mathrm{{H \\cdot + \\cdot \\mathrm{{H \\to \\mathrm{{H - \\mathrm{{H'
)

t = t.replace(
    '**Water (H$_2$O):** Oxygen has 6 outer electrons and needs 2 more. Each hydrogen has 1 electron.',
    f'**Water (H$_2$O):** Oxygen has 6 outer electrons and needs 2 more. Each hydrogen has 1 electron.\n\n{svg_h2o()}'
)

t = t.replace(
    '**Methane (CH$_4$):** Carbon forms four single bonds with four hydrogen atoms.',
    f'**Methane (CH$_4$):** Carbon forms four single bonds with four hydrogen atoms.\n\n{svg_ch4()}'
)

t = t.replace(
    '**Worked Example.** Draw the dot and cross diagram for nitrogen (N$_2$).\n\nNitrogen is in group 5',
    f'**Worked Example.** Draw the dot and cross diagram for nitrogen (N$_2$).\n\n{svg_n2()}\n\nNitrogen is in group 5'
)

PAGE.write_text(t, encoding='utf-8')
print('SVG diagrams inserted into bonding page')
print(f'Page size: {len(t)} bytes')
