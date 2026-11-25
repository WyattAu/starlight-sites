"""Topic 3 batch 4: retrofit 11_advanced-electrodynamics, 13_plasma-overview.

Run from repo root: python3 .loop/retrofit-t3-b4.py
"""
import re
from pathlib import Path

D = Path("sites/physics/src/content/docs/3-electromagnetism")


def repair(t):
    t = re.sub(r"(_\{\\text\{[a-zA-Z]+\}) =", r"\1} =", t)
    t = re.sub(r"(_\{\\text\{[a-zA-Z]+\}) ", r"\1} ", t)
    t = re.sub(r"(_\{\\mathrm\{[a-zA-Z]+\}) ", r"\1} ", t)

    def bal(s):
        b = 0
        j = 0
        while j < len(s):
            c = s[j]
            if c == "\\":
                j += 2
                continue
            if c == "{":
                b += 1
            elif c == "}":
                b -= 1
            j += 1
        return b

    lines = t.split("\n")
    for i, l in enumerate(lines):
        guard = 0
        while bal(l) < 0 and guard < 5:
            k = l.rfind("}")
            if k < 0:
                break
            l = l[:k] + l[k + 1:]
            guard += 1
        if l != lines[i]:
            lines[i] = l
        if bal(l) != 0 and ("\\frac" in l or "\\mathbf" in l):
            print(f"  [balance {bal(l):+d}] {l[:90]}")
    return "\n".join(lines)


def insert_hist(t, anchor, marker, text):
    if marker in t:
        print("hist present:", marker[:30])
        return t
    assert anchor in t, "HIST " + anchor[:50]
    return t.replace(anchor, text + "\n\n" + anchor, 1)


def insert_ponder(t, anchor, head, body, spoil):
    if head in t:
        print("ponder present:", head[:30])
        return t
    assert anchor in t, "PONDER " + anchor[:50]
    block = (
        f"**{head}** {body}\n\n"
        '<details class="wn-spoiler">\n<summary>The resolution</summary>\n'
        f'<div class="wn-spoiler-body">\n\n{spoil}\n\n</div>\n</details>\n\n'
    )
    return t.replace(anchor, block + anchor, 1)


def insert_qc(t, qs, ans):
    if ":::note[Quick check]" in t:
        print("QC present")
        return t
    assert len(qs) == 8 and len(ans) == 8
    body = "\n".join(f"{i}. {q}" for i, q in enumerate(qs, 1))
    a = " ".join(f"**{i}.** {x}" for i, x in enumerate(ans, 1))
    block = (
        ":::note[Quick check]\n\n" + body + "\n\n"
        '<details class="wn-spoiler">\n<summary>Answers</summary>\n'
        '<div class="wn-spoiler-body">\n\n' + a + "\n\n</div>\n</details>\n\n:::\n\n"
    )
    marker = "## Cross-References"
    if marker in t:
        return t.replace(marker, block + marker, 1)
    return t.rstrip() + "\n\n" + block


def apply(path, jobs):
    p = D / path
    t = p.read_text(encoding="utf-8")
    t = repair(t)
    t = jobs(t)
    p.write_text(t, encoding="utf-8")
    print(path, "done")


# ================= 11_advanced-electrodynamics =================

def jobs11(t):
    t = insert_hist(t, "### 11.1 Multipole Expansion",
        "Adrien-Marie Legendre built the polynomials that order this expansion",
        "**History.** Adrien-Marie Legendre built the polynomials that order this expansion during Laplace's 1782-85 assault on celestial potential theory; the expansion's mathematics is older than the electrical physics it now describes. Maxwell's stress tensor arrived in the 1873 Treatise as a picture of field lines under tension, pressure across them, and forces transmitted locally through space, and Minkowski's 1908 geometry gave it the covariant form this section states. Maxwell's prediction that light presses on matter was measured by Nichols and Hull in 1901-03, matching the theory's number: the field had been proven to carry momentum.")
    t = insert_ponder(t, "### 11.1 Multipole Expansion",
        "Ponder (attempt the hierarchy).",
        "The expansion's terms die by powers of $1/r$: monopole, then dipole, then quadrupole. Attempt to argue the ordering from symmetry alone: why does a nonzero total charge silence every shape term, and what kind of charge arrangement must exist for the quadrupole to lead?",
        "Each moment measures how the previous one's cancellation failed. Nonzero $Q$ dominates because $1/r$ beats everything: shape is invisible at distance while net charge survives. If $Q = 0$, the first asymmetry, $\\mathbf{p}$, leads at $1/r^2$; only when the charge arrangement is also dipole-neutral (two antiparallel dipoles, four alternating charges) does the quadrupole's $1/r^3$ speak: symmetric-top nuclei and quadrupole lenses live exactly in that regime. The hierarchy is a census of cancellations.")
    t = insert_ponder(t, "### 11.3 Electromagnetic Stress-Energy Tensor",
        "Ponder (attempt the force without contact).",
        "Two charges push apart without touching. Attempt Maxwell's replacement for action at a distance: surround one charge with a closed surface, and try to compute the force as a flux of the stress tensor through that surface. What must the field be carrying for this to make sense, and what measured effect proved it?",
        "The answer: the field at each point carries momentum, and force on anything inside the surface is the momentum flux $\\oint T \\cdot d\\mathbf{A}$ through it, with $\\partial_\\mu T^{\\mu\\nu} = -f^\\nu$ as the books. Tension along field lines, pressure across them, momentum density $\\mathbf{S}/c^2$: the field is a mechanical medium in exactly this sense. Nichols and Hull's 1901-03 measurement of light pressure on mirrors, matching Maxwell's $I/c$, is the experiment that retired action at a distance.")
    t = insert_qc(t,
    [
        "(E) Charges $+q$ and $-q$ sit a distance $d$ apart along $\\hat{\\mathbf{z}}$ ($d = 1\\,\\text{nm}$, $q = 1.6 \\times 10^{-19}\\,\\text{C}$). Compute the dipole moment, and give the leading potential's form on the axis at $r = 100d$.",
        "(M) Derive the dipole term $\\phi \\approx \\mathbf{p} \\cdot \\hat{\\mathbf{r}}/(4\\pi\\varepsilon_0 r^2)$ in two moves: Taylor-expand $1/|\\mathbf{r} - \\mathbf{r}'|$ for $r \\gg r'$, then integrate over the distribution.",
        "(M) Construct a charge arrangement whose monopole and dipole both vanish but whose quadrupole does not, and decide which physical systems live in that regime.",
        "(M) Classify the surviving multipole moments by symmetry: a uniformly charged sphere, a polarised atom in a field, a symmetric-top molecule, a neutral atom in its ground state. State the leading nonzero moment for each.",
        "(M) Trap: 'the stress tensor is bookkeeping; forces really act at a distance.' Decide what the tensor adds physically, and name the experiment that decided the question.",
        "(H) Derive the radiation pressure on a perfect reflector: bookkeep the momentum of incident light at intensity $I$, account for the reversal on reflection, and give the factor of 2 from momentum transfer.",
        "(M) Two capacitor plates hold field $E$ between them and nothing outside. Use Maxwell's stress to compute the force per area on a plate, and decide which picture, tension along field lines or energy density, gives the number.",
        "(H) Synthesise: momentum conservation $\\partial_\\mu T^{\\mu\\nu} = -f^\\nu$ means emitting light recoils the emitter. Decide the sail comparison (reflective sail versus absorbing), and name the chapter where this reappears as radiation reaction.",
    ],
    [
        "$p = qd = 1.6 \\times 10^{-28}\\,\\text{C}\\cdot\\text{m}$ along $\\hat{\\mathbf{z}}$. On the axis the leading term is $\\phi \\approx qd/(4\\pi\\varepsilon_0 r^2)$: the monopole cancels exactly, so the $1/r^2$ dipole term speaks first.",
        "Expand $1/|\\mathbf{r} - \\mathbf{r}'| = (1/r)(1 + \\hat{\\mathbf{r}} \\cdot \\mathbf{r}'/r + \\cdots)$; the zeroth term integrates to $Q/r$, and the first-order term integrates to $\\hat{\\mathbf{r}} \\cdot \\mathbf{p}/(4\\pi\\varepsilon_0 r^2)$, since $\\int \\rho \\mathbf{r}'\\,dV' = \\mathbf{p}$. The expansion is a moment-generating machine: each order, one cancellation.",
        "Two equal and opposite dipoles end to end (four charges $+q, -q, -q, +q$ in a line, equally spaced): net charge zero, net dipole zero, quadrupole nonzero. This is the regime of quadrupole lenses and, per the section, nuclei with spin $I \\geq 1$, whose $Q_{zz}$ measures the deviation from spherical charge.",
        "Uniform sphere: monopole only, $Q_{\\text{total}}$, every higher moment dies by spherical symmetry. Polarised atom: dipole. Symmetric-top molecule: quadrupole (dipole cancels by the symmetry). Neutral ground-state atom with full spherical symmetry: nothing beyond monopole, which itself is zero: neutral symmetric atoms have no electrostatic far field at all.",
        "It is the physics, not bookkeeping: the field carries momentum density $\\mathbf{S}/c^2$, and force is momentum flux through any surface enclosing the charge, which is how the force gets transmitted without contact. Nichols and Hull (1901-03) measured the pressure of light on a mirror and matched Maxwell's $I/c$: the deciding experiment.",
        "Incident light of intensity $I$ carries momentum flux $I/c$. An absorber keeps it all: pressure $I/c$. A reflector reverses it: the transfer is $I/c - (-I/c) = 2I/c$. The factor of 2 is momentum bookkeeping, nothing else: which is why solar-sail designs prefer reflective films.",
        "The stress tensor between the plates gives attraction $P = \\sigma^2/(2\\varepsilon_0) = \\varepsilon_0 E^2/2 = u$ per unit area: force per area equals the field energy density. Both pictures agree because tension along field lines is exactly the energy density in the tensor's diagonal; the plates are pulled together by the stretched field between them.",
        "An emitter sending power $P$ into a beam loses momentum at $P/c$ (doubled if it bounces off a reflective sail behind it). Solar sails ride this: the sun's $I/c$ is small per square metre but free and constant. Radiation reaction, the same ledger charged back to the radiating charge itself, is where Chapter 10's accelerating charges pay for their light.",
    ])
    return t


# ================= 13_plasma-physics-brief-overview =================

def jobs13(t):
    t = insert_hist(t, "### 13.1 Debye Shielding in Plasmas",
        "Peter Debye and Erich Huckel introduced the shielding length in 1923",
        "**History.** Peter Debye and Erich Huckel introduced the shielding length in 1923, for electrolyte solutions, not plasmas: the mobile ions of a salt solution screen a dissolved charge exactly as mobile electrons screen an inserted one. Irving Langmuir gave the ionised gas its name, plasma, in 1928, after Tonks and Langmuir had found the collective oscillations now bearing Langmuir's name. Edward Appleton's 1924-26 ionosphere work tied the plasma frequency to radio propagation, and the AM-skips-FM-pierces behaviour this chapter shares with Chapter 5 became the first planetary-scale plasma experiment.")
    t = insert_ponder(t, "### 13.1 Debye Shielding in Plasmas",
        "Ponder (attempt the shielding).",
        "Insert a positive charge into an electron-ion plasma and attempt to compute how the electrons rearrange: their density follows the Boltzmann factor $n_e \\propto \\exp(e\\phi/k_B T)$, and $\\phi$ obeys Poisson. Linearise for weak fields and attempt the resulting equation for $\\phi$: what shape must the potential take, and where does the Debye length come from?",
        "Linearising gives $n_e \\approx n_0 (1 + e\\phi/k_B T)$; substituting into Poisson turns it into $\\nabla^2 \\phi = \\phi/\\lambda_D^2$ with $\\lambda_D = \\sqrt{\\varepsilon_0 k_B T/n_0 e^2}$: solutions are exponentials, so the potential falls as $e^{-r/\\lambda_D}/r$, Coulomb dressed in a screening coat. The length is a thermal-to-electrostatic ratio: hotter electrons (more thermal agitation) and denser plasmas (more screeners) both shorten it.")
    t = insert_ponder(t, "### 13.2 Plasma Oscillations",
        "Ponder (attempt the oscillation).",
        "Displace a whole slab of electrons by $x$ against the fixed ion background: charge appears on the two faces. Attempt to compute the restoring field between those sheet charges, write the slab's equation of motion, and identify the frequency. Then decide why the answer refuses to depend on the wavelength.",
        "The displaced faces carry sheet charge $\\sigma = n_0 e x$, so between them $E = n_0 e x/\\varepsilon_0$, uniform: the slab feels $m_e \\ddot{x} = -n_0 e^2 x/\\varepsilon_0$, harmonic motion at $\\omega_p = \\sqrt{n_0 e^2/m_e \\varepsilon_0}$. The frequency is $k$-independent because the restoring field is the same for a rigid displacement of any shape: the Coulomb force is long-ranged, so no wavelength is preferred. Sound needs collisions to exist; Langmuir waves do not.")
    t = insert_qc(t,
    [
        "(E) Verify the section's number: compute $\\lambda_D$ for $n_e = 10^{18}\\,\\text{m}^{-3}$, $T = 10^4\\,\\text{K}$, and confirm it lands near 74 micrometres.",
        "(M) Derive $\\omega_p = \\sqrt{n_e e^2/m_e \\varepsilon_0}$ from the slab-displacement argument, and decide why the frequency does not depend on the displacement wavelength $k$.",
        "(M) Compute $f_p$ for the ionosphere at $n_e = 10^{12}\\,\\text{m}^{-3}$, then decide AM (around 1 MHz) versus FM (around 100 MHz) propagation, connecting to the $n^2$ classification of Chapter 5.",
        "(M) Classify by collisionality: a fusion plasma, the ionosphere, the interstellar medium, the electron gas in copper. For each, decide whether shielding is quiescent or dynamic, and state the metal's plasma frequency's consequence for visible light.",
        "(M) Trap: 'Langmuir waves are just sound waves in the electron gas.' Decide what is wrong, using the $k \\to 0$ limit and the need (or not) for collisions.",
        "(H) Derive the Debye potential's shape: linearise the electron Boltzmann factor about $\\phi = 0$, keep ions fixed, solve the resulting radial equation, and show the screening is exponential, not power-law.",
        "(M) Decide the quasi-neutral condition: state what must hold between $\\lambda_D$, the system size $L$, and the particle count in a Debye sphere for shielding to work, and classify the failure cases.",
        "(H) Synthesise: shielding, plasma frequency, and Chapter 5's $n^2$ criterion are one story. Decide how the three combine to explain a metal's mirror shine, and name the plasmas where the same physics runs at $10^8\\,\\text{K}$.",
    ],
    [
        "$\\lambda_D = \\sqrt{\\varepsilon_0 k_B T/(n_e e^2)} = \\sqrt{(8.85 \\times 10^{-12})(1.38 \\times 10^{-23} \\times 10^4)/(10^{18} \\times 2.56 \\times 10^{-38})} \\approx 7.4 \\times 10^{-5}\\,\\text{m}$: confirmed. The hook: halve the density and $\\lambda_D$ grows by $\\sqrt{2}$, not 2.",
        "Rigid displacement $x$ puts sheet charge $n_0 e x$ on the faces; the uniform interior field $n_0 e x/\\varepsilon_0$ gives $m_e \\ddot{x} = -n_0 e^2 x/\\varepsilon_0$: harmonic at $\\omega_p$. $k$ never enters because the long-ranged Coulomb force makes the restoring field identical for any size slab: no wavelength is special.",
        "$f_p = (1/2\\pi)\\sqrt{n_e e^2/m_e \\varepsilon_0} \\approx 9\\,\\text{MHz}$ at $10^{12}\\,\\text{m}^{-3}$. AM at 1 MHz sits below cutoff and reflects (sky-wave skips); FM at 100 MHz is far above and punches through: the ionosphere is Chapter 5's $n^2 < 0$ case made planetary.",
        "Fusion plasma: collisionless, shielding dynamic, $\\lambda_D$ millimetres. Ionosphere: partially collisional, everything slow. Interstellar medium: collisionless with enormous $\\lambda_D$ (metres to kilometres at low density). Copper's electron gas: $n \\sim 10^{29}\\,\\text{m}^{-3}$ puts $f_p$ in the ultraviolet, so visible light is below cutoff: reflected wholesale, which is why metals shine.",
        "Sound needs collisions and has $\\omega = c_s k$ going to zero as $k \\to 0$; Langmuir waves need neither: the electrostatic restoring force is long-ranged, and $\\omega \\to \\omega_p$ as $k \\to 0$ (a constant, from the file's dispersion). The electron gas oscillates against the ions, not against itself: acoustics is the wrong analogy, electrostatics is the right one.",
        "Electrons: $n_e \\approx n_0 (1 + e\\phi/k_B T)$ for $e\\phi \\ll k_B T$; ions fixed. Poisson becomes $\\nabla^2 \\phi = \\phi/\\lambda_D^2$, whose radial solution is $\\phi = (Q e^{-r/\\lambda_D}/4\\pi\\varepsilon_0 r)$. Power law becomes exponential: the screening coat, with the Boltzmann linearisation the only approximation made.",
        "Shielding requires $\\lambda_D \\ll L$ and many particles in a Debye sphere ($N_D = n_0 \\lambda_D^3 \\gg 1$): enough screeners for the statistics to hold. Failure cases: $\\lambda_D \\ge L$ (small or tenuous plasma, no screening, bare Coulomb), or $N_D \\sim 1$ (no quasi-neutrality, discrete effects dominate).",
        "Metal: electron gas plasma, visible light below $\\omega_p$, so $n^2 < 0$, evanescent, reflected: the mirror shine IS the plasma cutoff. Chapter 5's $n^2$ classification, this chapter's $\\omega_p$, and Debye's screening are one criterion read three ways. The same physics at $10^8\\,\\text{K}$ runs the fusion plasmas, where confinement is the entire engineering problem.",
    ])
    return t


apply("11_advanced-electrodynamics.md", jobs11)
apply("13_plasma-physics-brief-overview.md", jobs13)
