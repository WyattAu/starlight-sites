"""Topic 3 batch 3: retrofit 7_SR-and-EM, 9_waveguides, 10_radiation.

Repairs the subscript-brace damage class generically, then adds
history, 2 ponders, and a v1.1.0 QC ladder per file.
Run from repo root: python3 .loop/retrofit-t3-b3.py
"""
import re
from pathlib import Path

D = Path("sites/physics/src/content/docs/3-electromagnetism")


def repair(t):
    # generic subscript-brace repair: v_{\text{phase} = -> v_{\text{phase}} =
    t = re.sub(r"(_\{\\text\{[a-zA-Z]+\}) =", r"\1} =", t)
    t = re.sub(r"(_\{\\mathrm\{[a-zA-Z]+\}) ", r"\1} ", t)
    t = re.sub(r"(_\{\\text\{[a-zA-Z]+\}) ", r"\1} ", t)

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
            k = l.rfind("}", 0, len(l) - 1)
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


# ================= 7_special-relativity-and-electromagnetism =================

def jobs7(t):
    t = insert_hist(t, "### 7.1 Covariant Formulation",
        "Einstein's 1905 paper is titled On the Electrodynamics",
        "**History.** Einstein's 1905 paper is titled *On the Electrodynamics of Moving Bodies*, and special relativity was born from an asymmetry inside electromagnetism itself. His opening paragraph moves a magnet past a conductor and then a conductor past a magnet: the observed current is identical, yet the field theory of the day explained one case by an induced electric field and the other by a $\\mathbf{v} \\times \\mathbf{B}$ force. Einstein demanded one explanation, and relativity is the demand granted. Minkowski completed the geometry in 1908, announcing that 'space by itself and time by itself are doomed to fade away': the four-dimensional form this section develops.")
    t = insert_ponder(t, "### 7.1 Covariant Formulation",
        "Ponder (attempt the demand).",
        "Run Einstein's opening case yourself: a magnet and a wire loop approach each other. In the magnet's frame the loop sees a changing $\\mathbf{B}$ and Faraday induces the current; in the loop's frame the charges feel $\\mathbf{v} \\times \\mathbf{B}$. Attempt to state precisely what is wrong, given that both frames predict the same current.",
        "Nothing measurable is wrong: the current agrees. What is wrong is that the same event carries two unrelated theoretical explanations depending on the frame, one electromagnetic, one kinematic. Einstein's demand was principle, not prediction: the explanation must be frame-independent, and granting it means the electric and magnetic fields cannot be separate objects. They are frame components of one thing, which the field tensor below names.")
    t = insert_ponder(t, "### 7.3 The Electromagnetic Field Tensor",
        "Ponder (attempt the invariants).",
        "From the six components of $\\mathbf{E}$ and $\\mathbf{B}$, attempt to build quantities every inertial observer agrees on. A tensor with two indices admits rotation scalars; attempt to form them from $\\mathbf{E}$ and $\\mathbf{B}$, and decide how many independent ones there are and what each classifies.",
        "Two survive: $\\mathbf{E}^2 - c^2 \\mathbf{B}^2$ and $\\mathbf{E} \\cdot \\mathbf{B}$. The first splits fields into electric-like (positive, a frame with $\\mathbf{B} = 0$ exists) versus magnetic-like (negative, a frame with $\\mathbf{E} = 0$ exists). The second, being a scalar under boosts, says a field that is parallel to $\\mathbf{B}$ in one frame is parallel in every frame: crossed fields cannot be un-crossed by motion. A plane wave has both invariants zero, null in every frame: no observer ever rides alongside it.")
    t = insert_qc(t,
    [
        "(E) A pure magnetic field $\\mathbf{B} = 0.5\\,\\text{T}\\,\\hat{\\mathbf{z}}$ is observed from a frame moving at $v = 0.8c$ along $\\hat{\\mathbf{x}}$. Compute $\\gamma$, the induced $\\mathbf{E}'$, and decide whether the boosted field stays purely magnetic.",
        "(M) Read off $F^{12}$ and $F^{23}$ from the field-tensor matrix, state which field components they carry, and verify the antisymmetry $F^{21} = -F^{12}$ against the printed matrix.",
        "(M) Compute both invariants for a plane wave with $\\mathbf{E} = E_0\\hat{\\mathbf{x}}$ and $\\mathbf{B} = (E_0/c)\\hat{\\mathbf{y}}$. Decide what null means for boosts: is there any frame where the wave's $\\mathbf{E}$ or $\\mathbf{B}$ vanishes?",
        "(M) Classify fields by their invariants: $\\mathbf{E} \\cdot \\mathbf{B} \\ne 0$, $\\mathbf{E}^2 - c^2\\mathbf{B}^2 > 0$, $< 0$, and $= 0$. For each, decide which frame (if any) sets one field to zero.",
        "(M) Trap: 'magnetism is just a relativistic correction to electrostatics, so the magnetic force is not real.' Decide how much of this is right, using the wire-and-drifting-charge case, and what the tensor says about 'real'.",
        "(H) Verify that the covariant equation $\\partial_\\mu F^{\\mu\\nu} = \\mu_0 J^\\nu$ contains charge conservation: take $\\partial_\\nu$ of both sides and use the antisymmetry of $F^{\\mu\\nu}$ in its indices.",
        "(M) A field $\\mathbf{E} = E_0\\hat{\\mathbf{y}}$, $\\mathbf{B} = 0$ is boosted along $\\hat{\\mathbf{x}}$. Compute which components change and which do not, and state the parallel-versus-perpendicular rule the pitfalls warn about.",
        "(H) Synthesise the direction of the logic: Maxwell's equations contain $c$; relativity declares $c$ invariant for everyone. Decide which theory constrained which, and what this says about finding Maxwell's equations in a post-relativistic course.",
    ],
    [
        "$\\gamma = 1/\\sqrt{1 - 0.64} = 5/3$, and a boost on a pure $\\mathbf{B}$ generates $\\mathbf{E}' = -\\gamma\\,\\mathbf{v} \\times \\mathbf{B}$ of magnitude $\\gamma v B_0 = (5/3)(0.8)(3 \\times 10^8)(0.5) \\approx 2.0 \\times 10^8\\,\\text{V/m}$ along $-\\hat{\\mathbf{y}}$. Not purely magnetic anymore: the $\\mathbf{E}^2 - c^2\\mathbf{B}^2$ invariant is negative here, so the field is magnetic-like but never pure again in a moving frame.",
        "$F^{12} = -B_z$ and $F^{23} = -B_x$ in the printed convention. The antisymmetry check: the matrix prints $F^{21} = +B_z = -F^{12}$, as required. Reading the tensor means locating the field by slot, not re-deriving the convention each time.",
        "$\\mathbf{E}^2 - c^2\\mathbf{B}^2 = E_0^2 - c^2 E_0^2/c^2 = 0$ and $\\mathbf{E} \\cdot \\mathbf{B} = 0$: both invariants null. Null stays null under every boost, so no observer finds $\\mathbf{E} = 0$ or $\\mathbf{B} = 0$: you cannot outrun a plane wave's fields, only see them transformed in direction and strength.",
        "$\\mathbf{E} \\cdot \\mathbf{B} \\ne 0$: no frame zeroes either field (the boost frame always sees crossed fields). $\\mathbf{E}^2 - c^2\\mathbf{B}^2 > 0$: a frame with $\\mathbf{B} = 0$ exists (electric-like). $< 0$: a frame with $\\mathbf{E} = 0$ exists (magnetic-like). $= 0$ with $\\mathbf{E} \\cdot \\mathbf{B} = 0$: null, the plane-wave case, no such frame. The invariants are the classification, not adjectives.",
        "Half right. For a current-carrying wire and a drifting test charge, the relativity of charge density does turn the magnetic force into an electric one in the charge's frame: the purist's computation works there. But it is one configuration, not a reduction, and the tensor verdict is cleaner: $\\mathbf{E}$ and $\\mathbf{B}$ are components of one object, split differently by frame; neither is the correction and neither the original.",
        "$\\partial_\\nu \\partial_\\mu F^{\\mu\\nu} = 0$ identically, since the symmetric pair of derivatives contracts the antisymmetric tensor to nothing, so the equation forces $\\mu_0 \\partial_\\nu J^\\nu = 0$: charge conservation is not an extra postulate but a consequence of writing the theory covariantly.",
        "Every component of this field is perpendicular to the boost: $E_y' = \\gamma E_0 = (5/3) E_0$, while a hypothetical $E_x$ would have passed through unchanged ($E_\\parallel' = E_\\parallel$). A compensating magnetic field appears: $\\mathbf{B}' = -\\gamma\\,\\mathbf{v} \\times \\mathbf{E}/c^2$ with magnitude $\\gamma v E_0/c^2$. The rule: perpendicular components mix with $\\gamma$, parallel ones are untouched, exactly the pitfall's warning.",
        "The arrow runs from electromagnetism to relativity: Maxwell's equations demanded an invariant $c$ before Einstein declared one, and the theory's Galilean failure was the anomaly. In a post-relativistic course, Maxwell's equations are not adjusted to fit relativity; they are the first theory found already covariant, which is why this chapter reads like a translation rather than a correction.",
    ])
    return t


# ================= 9_waveguides-and-cavities =================

def jobs9(t):
    t = insert_hist(t, "### 9.1 Rectangular Waveguides",
        "Lord Rayleigh derived the modes of hollow conducting cylinders in 1897",
        "**History.** Lord Rayleigh derived the modes of hollow conducting cylinders in 1897, forty years before anyone built hardware that needed them: the mathematics waited for the microwave era. The hardware arrived in 1936, when George Southworth's team at Bell Labs and Wilmer Barrow's group at MIT demonstrated practical waveguides independently, with a patent fight to match. Radar in the Second World War turned the theory into an industry almost overnight, and the cavity magnetron of 1940, a resonant-cavity device, gave Allied radar a power density that Axis designs spent the war chasing.")
    t = insert_ponder(t, "### 9.1 Rectangular Waveguides",
        "Ponder (attempt the cutoff).",
        "A hollow copper pipe cannot carry DC, and it refuses long wavelengths too. Attempt to find why, from the boundary condition alone: with $E_\\text{tangential} = 0$ at every wall, attempt to fit a transverse field pattern across a guide of width $a$, and identify the largest wavelength that can stand.",
        "The tangential condition forces standing transverse structure: a half-sine across the width at minimum, $E_x \\propto \\sin(\\pi x/a)$. That costs transverse wavenumber $k_c = \\pi/a$, which the dispersion $k^2 = (\\omega/c)^2 - k_c^2$ must pay for: below $\\omega_c = c\\pi/a$, $k$ turns imaginary and the mode decays as $e^{-|k|z}$, carrying no power. The cutoff is the price of the boundary condition: fields must fit, and long wavelengths simply do not fit.")
    t = insert_ponder(t, "### 9.1 Rectangular Waveguides",
        "Ponder (attempt the paradox).",
        "The guide's phase velocity exceeds $c$: the field pattern sweeps along the walls faster than light. Attempt to reconcile this before deciding anything is broken: model TE10 as two plane waves bouncing between the walls, and compute what the zigzag does to the two velocities.",
        "Each plane wave travels at exactly $c$ along its zigzag; the axial speed of the pattern (phase velocity) and the speed of the wave's energy envelope (group velocity) are that same $c$ projected differently: $v_p = c/\\cos\\theta > c$ and $v_g = c\\cos\\theta < c$, with the product $c^2$. Nothing outruns light: the pattern on the wall is a sweep of intersections, like a laser dot swept across the Moon, and energy rides the envelope at $v_g$. Which velocity matters depends entirely on whether you are reading phase or carrying power.")
    t = insert_qc(t,
    [
        "(E) A rectangular guide has width $a = 3\\,\\text{cm}$ ($a > b$). Compute the dominant TE10 cutoff frequency, then decide which of 3, 6, and 10 GHz propagate down it.",
        "(M) Starting from the transverse boundary condition, derive the cutoff wavenumber $k_c = \\pi/a$ for TE10 and show $f_{c,10} = c/(2a)$: the boundary condition is the whole derivation.",
        "(M) A signal at $f = 1.5\\,f_c$ propagates in the guide. Compute $v_p$, $v_g$, and verify their product, then give the guide wavelength $\\lambda_g = v_p/f$ in terms of $\\lambda_0$.",
        "(M) Classify modes: why do hollow single-conductor guides support TE and TM but never TEM, while coaxial cable supports TEM? State what TEM requires structurally.",
        "(M) Trap: 'the wave travels in a straight line down the middle of the guide, so its speed down the axis is c.' Decide what actually travels at $c$, and reconstruct the zigzag picture that produces $v_p > c$ and $v_g < c$.",
        "(H) Prove that power flows at the group velocity: show the axial Poynting flux integrated over the cross-section equals the stored energy per unit length times $v_g$ for a mode below the cutoff scaling, and state why the evanescent case carries zero power either way.",
        "(M) A cubic cavity has $a = b = d = 4\\,\\text{cm}$. Compute the lowest TE101 resonance via $f = (c/2)\\sqrt{(m/a)^2 + (n/b)^2 + (p/d)^2}$, then decide the scale factor needed to move it to 2.45 GHz.",
        "(H) Decide the engineering synthesis: why did the cavity magnetron decide the radar war, in terms of $Q$, power density, and the cavity concept itself, and what modern machine inherits the same role?",
    ],
    [
        "$f_{c,10} = c/(2a) = 3 \\times 10^8 / 0.06 = 5\\,\\text{GHz}$. Decision: 3 GHz is below cutoff and decays evanescently; 6 and 10 GHz propagate. The verification hook: real X-band guides (8.2 to 12.4 GHz) have $a \\approx 2.3\\,\\text{cm}$, sitting above the same formula's cutoff.",
        "The wall condition forces one half-period across the width: $k_x = \\pi/a$. The dispersion relation $k^2 = (\\omega/c)^2 - k_x^2$ then propagates only for $\\omega > ck_x$, giving $f_c = ck_x/2\\pi = c/(2a)$. No other input enters: the geometry alone sets the cutoff.",
        "$v_p = c/\\sqrt{1 - (1/1.5)^2} = c/\\sqrt{0.556} \\approx 1.34c$; $v_g = c\\sqrt{0.556} \\approx 0.745c$; product $v_p v_g = c^2$, the check. $\\lambda_g = v_p/f = 1.34 \\lambda_0$: the guide wavelength exceeds free space's, which is why guide components are oversized for their frequency.",
        "TEM requires the transverse field lines to close around a second conductor: its potential difference defines the mode. A hollow pipe is one conductor with nowhere for the transverse voltage to anchor, so only modes with longitudinal structure (TE, TM) satisfy the walls. Coax has an inner conductor: TEM rides the annulus.",
        "What travels at $c$ is each constituent plane wave along its zigzag path. TE10 is two such waves bouncing between the side walls; their intersections sweep the walls at $v_p > c$ (a pattern speed, like a swept laser dot), while the envelope that carries energy advances axially at $v_g < c$. The straight-line picture hides the bounces and manufactures the paradox.",
        "For a mode far above cutoff, the axial Poynting flux $\\int S_z\\,dA$ equals the energy density times the axial transport speed; differentiating the dispersion gives that transport speed as $d\\omega/dk = v_g$, so $P = u \\cdot A \\cdot v_g$: energy moves with the envelope. Below cutoff, $k$ is imaginary: $S_z$ averages to zero (reactive fields slosh, nothing net), which is why the evanescent case is power-blind in both pictures.",
        "$f_{101} = (c/2)\\sqrt{(1/0.04)^2 \\times 2} = 1.5 \\times 10^8 \\times 35.4 \\approx 5.3\\,\\text{GHz}$. To reach 2.45 GHz the cavity scales up by $5.3/2.45 \\approx 2.2$: dimensions near $8.6\\,\\text{cm}$, the same order as the mode-stirred chamber of a domestic microwave oven, whose frequency was chosen partly to keep the cavity modest.",
        "The magnetron's cavities stored energy with high $Q$ while injecting it hard: resonant accumulation let a small tube deliver kilowatts at centimetre wavelengths, exactly where radar resolution wants them. Power density per volume was the war-winning metric. The modern inheritor: the RF cavities of linear accelerators, resonant structures replenishing particle energy every metre, the same concept at gigavolts.",
    ])
    return t


# ================= 10_radiation-from-accelerating-charges =================

def jobs10(t):
    t = insert_hist(t, "### 10.1 Larmor Formula",
        "Joseph Larmor derived his formula in 1897",
        "**History.** Joseph Larmor derived his formula in 1897, the same year J. J. Thomson announced the corpuscle the formula's charge would belong to, and neither Lienard (1898) nor Wiechert (1900) had a physics community sure that electrons existed to radiate. The formula then refused to go away: applied to Rutherford's planetary atom it condemned the electron to spiral into the nucleus in about a hundred picoseconds, which forced Bohr's 1913 stationary-state postulate. And in 1947 engineers at General Electric watched electrons in their new betatron refuse to gain energy on schedule, the light of synchrotron radiation shining from the machine's window: the formula, relativised by Lienard, had become an engineering constraint.")
    t = insert_ponder(t, "### 10.1 Larmor Formula",
        "Ponder (attempt the mechanism).",
        "Why does acceleration radiate when constant velocity does not? Attempt the answer from the field pictures alone: a charge at rest has radial field lines, and a charge moving at constant velocity carries them rigidly along. Attempt to draw what the field lines must do when the charge's velocity suddenly changes, and follow the kink outward.",
        "The velocity change cannot inform the field everywhere at once: the old field, built around the old position, and the new field, built around the new one, meet in a kink that propagates outward at $c$. The kink carries transverse field, and transverse field carries energy in the Poynting flux. A kink born of every acceleration, propagating forever, is what radiation is: no acceleration, no kink, no energy left behind. The Larmor formula is the kink's energy bookkeeping.")
    t = insert_ponder(t, "### 10.1 Larmor Formula",
        "Ponder (attempt the collapse).",
        "Apply the formula to Rutherford's atom: an electron circling a proton at the Bohr radius accelerates continuously. Attempt the energy bookkeeping: compute the radiated power, divide the orbital energy by it, and watch how long the classical atom survives. What did Bohr have to postulate to stop this?",
        "The numbers: centripetal acceleration about $9 \\times 10^{22}\\,\\text{m/s}^2$ gives $P \\approx 5 \\times 10^{-8}\\,\\text{W}$, against an orbital binding energy of $13.6\\,\\text{eV}$: collapse in roughly $10^{-10}\\,\\text{s}$ (the integrated answer is $1.6 \\times 10^{-11}\\,\\text{s}$). The classical atom is gone before a clock can notice it. Bohr's stationary states, forbidding the orbiting electron to radiate except in jumps, were not a refinement: they were an emergency measure against this calculation.")
    t = insert_qc(t,
    [
        "(E) Compute the Larmor power for an electron with $a = 10^{20}\\,\\text{m/s}^2$ (atomic-field scale), and compare the answer's size with a radio station's output to confirm how weak single-particle radiation is.",
        "(M) Show that a dipole's radiated power scales as $\\omega^4$: start from $p(t) = p_0\\cos\\omega t$, relate dipole acceleration to $\\omega^2$, and apply Larmor. Then decide what the $\\omega^4$ does to blue versus red light in Rayleigh scattering.",
        "(M) An electron decelerates from $0.1c$ to rest over $d = 1\\,\\text{mm}$. Compute the average deceleration, the Larmor power, and the radiated fraction of the $2.56\\,\\text{keV}$ kinetic energy, following the worked example.",
        "(M) Classify by geometry: short-dipole antenna, synchrotron magnet, X-ray tube target. For each, decide the angular pattern and the spectrum, and name the radiation in the file's terms.",
        "(M) Trap: 'an electron in a circular orbit moves at constant speed, so with constant velocity it should not radiate.' Decide what is wrong, and restate the condition for radiation correctly.",
        "(H) Derive the Larmor formula from the far field: integrate the radiation Poynting flux $S = E_\\text{rad}^2/\\mu_0 c$ over a sphere using $E_\\text{rad} \\propto qa\\sin\\theta/(4\\pi\\varepsilon_0 c^2 R)$, and carry the $\\sin\\theta$ integral.",
        "(M) A proton in a 1 T cyclotron at $v = 0.5c$ radiates via transverse acceleration. Decide the relativistic scaling that applies ($\\gamma^4$ or $\\gamma^6$), compute the rough centripetal $a$, and decide why circular machines lose energy faster than the Larmor estimate suggests.",
        "(H) Synthesise: LEP's electrons lost a few percent of their 100 GeV energy per turn to this effect. Decide the design consequence for the radio-frequency cavities, and name the quantum story the classical formula cannot tell.",
    ],
    [
        "$P = e^2 a^2/(6\\pi\\varepsilon_0 c^3) = (1.6 \\times 10^{-19})^2 (10^{40})/(6\\pi \\times 8.85 \\times 10^{-12} \\times 2.7 \\times 10^{25}) \\approx 5.7 \\times 10^{-14}\\,\\text{W}$. A station radiates megawatts: fourteen orders of magnitude sit between one shaken electron and engineering.",
        "Dipole acceleration is $a = \\omega^2 d$, so Larmor gives $P \\propto a^2 \\propto \\omega^4 d^2$, the file's $\\omega^4 p_0^2$ form. Rayleigh scattering is driven-dipole reradiation: blue (higher $\\omega$) scatters as $\\omega^4$, roughly (700/450)^4 $\\approx 6$ times stronger than red, which is the sky's colour and the sunsets'.",
        "$a = v^2/2d = (3 \\times 10^7)^2/(2 \\times 10^{-3}) = 4.5 \\times 10^{17}\\,\\text{m/s}^2$; $P \\approx 2.3 \\times 10^{-19}\\,\\text{W}$; radiated fraction $E_\\text{rad}/K \\approx 3.8 \\times 10^{-14}$. Bremsstrahlung at these energies is negligible: the X-ray tube's photons come from the rare close encounters, not the average stopping.",
        "Short dipole: the $\\sin^2\\theta$ doughnut, no radiation along the axis, broadband spectrum set by the drive. Synchrotron magnet: a narrow forward cone of opening $\\sim 1/\\gamma$, spectrum sweeping from radio to X-ray as $\\gamma$ climbs. X-ray tube: broad-angle bremsstrahlung with a cutoff at the full electron energy, the continuous spectrum under the characteristic lines.",
        "Velocity is a vector: uniform circular motion changes its direction every instant, so the acceleration is $v^2/r$, never zero. The correct condition is acceleration of any kind, in the inertial frame: constant speed along a curve radiates fully. The trap confuses the scalar speed with the vector, and Larmor's $a^2$ charges the difference.",
        "The flux integrates as $P = \\int (q^2 a^2 \\sin^2\\theta/(16\\pi^2 \\varepsilon_0^2 c^4 R^2) \\times 1/\\mu_0 c)\\, R^2 d\\Omega$; the angular integral $\\int \\sin^2\\theta\\, d\\Omega = 8\\pi/3$ contributes, and with $1/\\mu_0 \\varepsilon_0 = c^2$ the geometry collapses: $P = q^2 a^2/(6\\pi\\varepsilon_0 c^3)$. The $\\sin^2$ came from projecting the acceleration onto the transverse plane; the integral is the whole derivation.",
        "Transverse acceleration in a cyclotron: the $\\gamma^4$ branch (the $\\gamma^6$ belongs to acceleration parallel to velocity). With $a = v^2/r$ and $r$ set by the bending field, $P = q^4 B^2 v^2 \\gamma^2/(6\\pi \\varepsilon_0 m^2 c^3) \\cdot \\gamma^2$: power climbs as $\\gamma^4$ at fixed radius. The Larmor estimate with lab $a$ misses both the relativistic factor and the deficit's growth, which is why machines feel it as a wall.",
        "The cavities must replenish a few percent of 100 GeV per turn: megawatts of continuous RF, the machine's dominant power bill, scaling as $\\gamma^4/E$ in energy. The classical formula cannot say how the loss is parcelled: quantum mechanically the electron emits discrete photons (in LEP, mostly single hard quanta per turn), which is the file's forward pointer to quantum radiation.",
    ])
    return t


apply("7_special-relativity-and-electromagnetism.md", jobs7)
apply("9_waveguides-and-cavities.md", jobs9)
apply("10_radiation-from-accelerating-charges.md", jobs10)
