"""Topic 3 batch 2: retrofit 4_electrodynamics, 5_em-waves, 6_potentials-and-gauge.

Per file: history, 2 ponders, and a question-standard v1.1.0 QC
ladder. Run from repo root: python3 .loop/retrofit-t3-b2.py
"""
from pathlib import Path

D = Path("sites/physics/src/content/docs/3-electromagnetism")


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
    t = jobs(t)
    p.write_text(t, encoding="utf-8")
    print(path, "done")


# ================= 4_electrodynamics =================

def jobs4(t):
    t = insert_hist(t, "### 4.1 Faraday's Law of Induction",
        "Michael Faraday's iron-ring experiment of 29 August 1831",
        "**History.** Michael Faraday's iron-ring experiment of 29 August 1831 produced the first current from a changing magnetic field, and his interpretation, fields carrying influence through space rather than action at a distance, was so unorthodox that continental physicists ignored it for a decade. Joseph Henry had seen the effect in 1830 but published nothing, and the priority dispute shadowed both men. The mathematics arrived sixteen years later than the discovery: not from Faraday, who drew field lines instead of equations, but from Maxwell, who turned the flux rule and the displacement current into the theory this chapter completes.")
    t = insert_ponder(t, "### 4.1 Faraday's Law of Induction",
        "Ponder (attempt the minus sign).",
        "Faraday's law carries a minus sign, and textbooks present it as a rule. Attempt instead to derive it: a magnet plunges toward a coil and a current appears. If the induced current ran the other way, what would happen to the magnet's motion, and what does that failed experiment tell you the sign has to be? Energy conservation should decide it, not convention.",
        "Run the wrong sign: the induced current would attract the plunging magnet, adding kinetic energy while the current delivers heat to the coil: energy from nowhere, a perpetual-motion machine. The only sign that charges the bookkeeping is the one that makes the induced current oppose the change: that is Lenz's law, and the minus sign is its mathematics. Every generator on the grid is harder to turn in exact proportion to the electrical load it carries, which is the same law paid out in torque.")
    t = insert_ponder(t, "### 4.4 Motional EMF",
        "Ponder (attempt the two derivations).",
        "A rod slides on rails through a uniform field. Attempt the EMF twice: once as the Lorentz force $q\\mathbf{v} \\times \\mathbf{B}$ driving charges along the rod, once as the flux rule $-d\\Phi_B/dt$ from the growing loop area. You get the same answer. Attempt to find a configuration where the two methods disagree, and decide which one is the law and which is the shortcut.",
        "For circuits whose geometry changes, both agree, which is why generators can be designed by the flux rule alone. They part company in configurations like the Faraday disk, a conducting disk spinning in a uniform field, where the flux through any fixed loop stays constant while the force $\\mathbf{v} \\times \\mathbf{B}$ drives a steady EMF from axle to rim. The local law, Lorentz force plus the $-\\partial \\mathbf{B}/\\partial t$ term of Faraday's equation, is always right; the flux rule is a shortcut whose validity must be checked, not an axiom.")
    t = insert_qc(t,
    [
        "(E) A loop of radius $R = 5\\,\\text{cm}$ sits in $\\mathbf{B} = B_0\\cos(\\omega t)\\,\\hat{\\mathbf{z}}$ with $B_0 = 0.2\\,\\text{T}$ and $\\omega = 20\\,\\text{rad/s}$. Compute the EMF's amplitude, and state the induced current's direction when $\\sin(\\omega t) > 0$ and $\\mathbf{B}$ points up but is decreasing.",
        "(M) Derive the sliding-rod EMF $\\mathcal{E} = BLv$ from the Lorentz force on the rod's charges, including the surface charge that builds until equilibrium, and check it against $-d\\Phi_B/dt$.",
        "(M) A bar magnet falls through a copper ring. Decide the induced current's direction as the magnet approaches, and account for the ring's heating: where does that energy come from?",
        "(M) Classify by mechanism: transformer, rotating generator, induction cooktop, chemical battery. Which term of the induced field drives each: the $-\\partial \\mathbf{B}/\\partial t$ transformer EMF or the $\\mathbf{v} \\times \\mathbf{B}$ motional EMF?",
        "(M) Trap: 'an EMF acts equally at every point of the circuit.' Decide whether this is right, and locate where the driving field actually lives in (a) a stationary coil in a changing field and (b) a sliding rod.",
        "(H) Reproduce Maxwell's correction: show $\\nabla \\times \\mathbf{B} = \\mu_0 \\mathbf{J}$ contradicts charge conservation whenever $\\partial \\rho/\\partial t \\ne 0$, then repair it using Gauss's law, deriving the displacement-current term from the continuity equation.",
        "(M) A copper pendulum swings between magnet poles and stops dead; a slotted copper pendulum of identical size swings freely. Decide why the slots kill the braking.",
        "(H) Take the curl of Faraday's law, substitute the Ampere-Maxwell law, and show that induction plus displacement current is exactly a wave equation: identify the mechanism that carries light.",
    ],
    [
        "Amplitude $\\mathcal{E}_0 = \\pi R^2 B_0 \\omega = \\pi (0.0025)(0.2)(20) \\approx 31\\,\\text{mV}$. When upward flux is decreasing, the induced current flows to create upward $\\mathbf{B}$: counterclockwise seen from above. The verification hook: the amplitude scales linearly in $R^2$, $B_0$, and $\\omega$.",
        "Charges in the moving rod feel $q\\mathbf{v} \\times \\mathbf{B}$ along it; they pile up until the electrostatic field balances the drive in the stationary parts, leaving $\\mathcal{E} = \\int (\\mathbf{E} + \\mathbf{v} \\times \\mathbf{B}) \\cdot d\\mathbf{l} = vBL$ concentrated in the rod. The flux rule gives $-d(BLx)/dt = -BLv$: same magnitude, and the sign matches because Lenz makes the induced force oppose the rod's motion.",
        "As the magnet approaches (flux growing), the ring's current flows to oppose it, repelling the magnet; after it passes, the current reverses to keep it from leaving. The heat is real: it comes from the magnet's mechanical energy, which is why the magnet falls slower than free fall, the damped-fall experiment that shows Lenz's sign is not optional.",
        "Transformer and induction cooktop: transformer EMF, driven by $-\\partial \\mathbf{B}/\\partial t$ with nothing moving. Rotating generator: motional EMF, $\\mathbf{v} \\times \\mathbf{B}$ in the moving conductors (though both frames describe it). Chemical battery: neither, it is electrochemistry, which is why the classification starts by excluding it.",
        "Wrong in both cases. (a) In the stationary coil the driving field is the induced $\\mathbf{E}$, which curls around $\\partial \\mathbf{B}/\\partial t$ and is distributed, but not uniform: it concentrates where the flux changes fastest. (b) In the rod the drive is $\\mathbf{v} \\times \\mathbf{B}$, living only in the moving segment; the rails and resistor carry the current but host no drive. EMF is a line integral, not a point field, which is exactly why the trap tempts.",
        "Taking the divergence gives $0 = \\mu_0 \\nabla \\cdot \\mathbf{J}$, demanding $\\nabla \\cdot \\mathbf{J} = 0$ always, while continuity gives $\\nabla \\cdot \\mathbf{J} = -\\partial \\rho/\\partial t$: any accumulating charge breaks it. Rewriting continuity with Gauss as $\\nabla \\cdot \\mathbf{J} = -\\nabla \\cdot (\\varepsilon_0 \\partial \\mathbf{E}/\\partial t)$ shows the missing term: $\\nabla \\times \\mathbf{B} = \\mu_0 \\mathbf{J} + \\mu_0 \\varepsilon_0 \\partial \\mathbf{E}/\\partial t$.",
        "Eddy currents need closed loops; the slots cut every loop to a sliver, so the induced EMFs cannot integrate into large circulating currents and their opposing fields collapse. The braking is proportional to the loop area the pendulum presents, which is the design rule behind laminated transformer cores.",
        "$\\nabla \\times (\\nabla \\times \\mathbf{E}) = -\\partial_t (\\nabla \\times \\mathbf{B}) = -\\mu_0 \\varepsilon_0 \\partial_t^2 \\mathbf{E} - \\mu_0 \\partial_t \\mathbf{J}$; in vacuum $\\mathbf{J} = 0$ and $\\nabla \\cdot \\mathbf{E} = 0$ reduce this to $\\nabla^2 \\mathbf{E} = \\mu_0 \\varepsilon_0 \\partial_t^2 \\mathbf{E}$ at speed $c$. Induction is not a curiosity of coils: it is the mechanism of light itself, which is the next chapter's subject.",
    ])
    return t


# ================= 5_electromagnetic-waves =================

def jobs5(t):
    t = insert_hist(t, "### 5.1 The Wave Equation",
        "Maxwell died in 1879",
        "**History.** Maxwell died in 1879, eight years before anyone demonstrated that his predicted waves existed. Heinrich Hertz's 1887-88 experiments, an oscillator discharging across a spark gap and a loop detector across the room, produced standing waves in his laboratory, measured their wavelength, and showed their speed matched light's. Asked what use the discovery was, Hertz reportedly answered that it was probably of no use whatsoever; Guglielmo Marconi began radio transmissions eight years later. The waves' polarisation, which Hertz confirmed with wire-grid experiments, settled the older question Fresnel had raised for light: they are transverse, exactly as the equations demand.")
    t = insert_ponder(t, "### 5.2 Properties of EM Waves",
        "Ponder (attempt the transversality).",
        "That light is transverse was an experimental fact for fifty years before Maxwell. Attempt to derive it instead: take a plane wave $\\mathbf{E} = \\mathbf{E}_0 e^{i(\\mathbf{k} \\cdot \\mathbf{r} - \\omega t)}$ and apply $\\nabla \\cdot \\mathbf{E} = 0$ to it. What does the computation forbid, and why is the absence of magnetic charge the deeper reason?",
        "The derivatives turn $\\nabla \\cdot \\mathbf{E} = 0$ into $i\\mathbf{k} \\cdot \\mathbf{E}_0 = 0$: the field is perpendicular to its own propagation direction, with no freedom left. A longitudinal electric wave would need field lines beginning and ending along the direction of travel, which requires charge density in the wave; with $\\rho = 0$ there is nothing to end on. Transversality is not an extra fact: it is Gauss's law wearing a travelling-wave costume.")
    t = insert_ponder(t, "### 5.4 Poynting's Theorem and Energy Conservation",
        "Ponder (attempt the energy route).",
        "A capacitor charges up between parallel plates. Attempt to track where its stored energy physically enters: through the wires that connect it, or somewhere else? Compute the Poynting vector $\\mathbf{S} = \\mathbf{E} \\times \\mathbf{B}/\\mu_0$ between the plates while $\\mathbf{E}$ is growing, and give its direction.",
        "Between the plates $\\mathbf{E}$ points across the gap, and the displacement current gives an azimuthal $\\mathbf{B}$, so $\\mathbf{S} \\propto \\mathbf{E} \\times \\mathbf{B}$ points radially inward: energy flows in through the open sides of the gap, not down the wires. The same analysis around a current-carrying wire shows energy flowing into the copper from the fields outside it: conductors guide the fields; the fields carry the energy. Poynting's theorem is the bookkeeping that makes this precise.")
    t = insert_qc(t,
    [
        "(E) An FM broadcast station transmits at $f = 100\\,\\text{MHz}$. Compute the wavelength and wavenumber $k$, and decide whether a quarter-wave antenna ($\\lambda/4$) would be taller than 1 metre.",
        "(M) For $\\mathbf{E} = E_0 \\cos(kz - \\omega t)\\,\\hat{\\mathbf{x}}$, use Faraday's law to derive the associated $\\mathbf{B}$ field: its magnitude, direction, and the relation between $k$, $\\omega$, and $c$.",
        "(M) Sunlight delivers $I = 1361\\,\\text{W/m}^2$ at Earth's orbit. Compute the peak electric field via $I = E_0^2/(2\\mu_0 c)$, then the peak magnetic field, and check their ratio against $c$.",
        "(M) Classify propagation in (a) a dielectric, (b) a plasma below its plasma frequency, (c) a good conductor. Use $n^2$ in each case, and decide why AM signals skip off the ionosphere at night while FM does not.",
        "(M) Trap: a student draws $\\mathbf{E}$ and $\\mathbf{B}$ parallel in a plane wave travelling along $\\hat{\\mathbf{z}}$. Decide which Maxwell equation this violates, and state what $\\mathbf{B} = \\hat{\\mathbf{k}} \\times \\mathbf{E}/c$ enforces.",
        "(H) Reproduce Poynting's theorem: dot $\\mathbf{B}$ into curl-$\\mathbf{E}$ and $\\mathbf{E}$ into curl-$\\mathbf{B}$, subtract, and use the product rule to identify the energy density $u$, the flux $\\mathbf{S}$, and the work term $\\mathbf{J} \\cdot \\mathbf{E}$.",
        "(M) Compute copper's skin depth ($\\sigma = 5.96 \\times 10^7$) at 50 Hz and at 1 GHz via $\\delta = \\sqrt{2/\\mu_0 \\sigma \\omega}$, and decide why power lines are thick aluminium while RF interconnects only need surface plating.",
        "(H) In a hollow waveguide, measurements show $v_p = \\omega/k > c$ while $v_g = d\\omega/dk < c$. Decide whether relativity is violated, which velocity carries information, and why the waveguide's dispersion makes this possible at all.",
    ],
    [
        "$\\lambda = c/f = 3 \\times 10^8 / 10^8 = 3\\,\\text{m}$, and $k = 2\\pi/\\lambda \\approx 2.1\\,\\text{rad/m}$; the quarter-wave antenna is $0.75\\,\\text{m}$, under a metre. The verification hook: real FM antenna masts match this length.",
        "$\\nabla \\times \\mathbf{E} = E_0 k \\sin(kz - \\omega t)\\,\\hat{\\mathbf{y}}$ and $-\\partial \\mathbf{B}/\\partial t$ must equal it, so $\\mathbf{B} = (E_0 k/\\omega)\\cos(kz - \\omega t)\\,\\hat{\\mathbf{y}}$: perpendicular to both $\\mathbf{E}$ and the travel direction, with $B_0 = (k/\\omega) E_0 = E_0/c$ once $\\omega/k = c$.",
        "$E_0 = \\sqrt{2 \\mu_0 c I} = \\sqrt{2 (1.257 \\times 10^{-6})(3 \\times 10^8)(1361)} \\approx 1010\\,\\text{V/m}$, and $B_0 = E_0/c \\approx 3.4\\,\\mu\\text{T}$, about a tenth of Earth's surface field: the check is that $B_0 = E_0/c$ exactly, which is the in-phase relation of Theorem 5.1.",
        "(a) Dielectric: $n^2 > 1$, propagates slower than $c$. (b) Plasma below the plasma frequency: $n^2 < 0$, the field is evanescent and reflects. (c) Conductor: $n$ complex, penetration limited to the skin depth. The ionosphere is a plasma whose cutoff sits between AM and FM frequencies: AM (below cutoff) reflects and skips, FM (above) punches through to space.",
        "Faraday's law kills it: with $\\mathbf{E} \\parallel \\mathbf{B}$ both along $\\hat{\\mathbf{x}}$ and travelling along $\\hat{\\mathbf{z}}$, $\\nabla \\times \\mathbf{E}$ points along $\\hat{\\mathbf{y}}$ while $\\partial \\mathbf{B}/\\partial t$ points along $\\hat{\\mathbf{x}}$, so the equation cannot hold for any phase relation. $\\mathbf{B} = \\hat{\\mathbf{k}} \\times \\mathbf{E}/c$ enforces the triad: $\\mathbf{E} \\perp \\mathbf{B} \\perp \\hat{\\mathbf{k}}$, mutually perpendicular and in phase.",
        "$\\mathbf{B} \\cdot (\\nabla \\times \\mathbf{E}) - \\mathbf{E} \\cdot (\\nabla \\times \\mathbf{B}) = \\nabla \\cdot (\\mathbf{E} \\times \\mathbf{B})$ is the product-rule identity; substituting the two curl equations gives $\\partial_t (\\varepsilon_0 E^2/2 + B^2/2\\mu_0) + \\nabla \\cdot (\\mathbf{E} \\times \\mathbf{B}/\\mu_0) = -\\mathbf{J} \\cdot \\mathbf{E}$. Reading: field energy density $u$, flux $\\mathbf{S}$ leaving, and $-\\mathbf{J} \\cdot \\mathbf{E}$ the rate fields do work on charges.",
        "$\\delta(50\\,\\text{Hz}) = \\sqrt{2/(4\\pi \\times 10^{-7} \\cdot 5.96 \\times 10^7 \\cdot 314)} \\approx 9.2\\,\\text{mm}$; $\\delta(1\\,\\text{GHz}) \\approx 2.1\\,\\mu\\text{m}$. The decision: 50 Hz current fills the conductor (resistance cares about bulk area), while GHz current rides a micrometre skin, so surface plating suffices and bulk purity does not.",
        "No violation: $v_p$ is the phase pattern's speed and can exceed $c$ (waveguide $v_p = c/\\sqrt{1 - (\\omega_c/\\omega)^2}$), but signals travel at $v_g < c$, so information and energy stay subluminal. The waveguide disperses because $\\omega^2 = \\omega_c^2 + c^2 k^2$ makes $d\\omega/dk$ depend on frequency: the dispersion relation is what breaks the vacuum's $v_p = v_g$ coincidence.",
    ])
    return t


# ================= 6_potentials-and-gauge-transformations =================

def jobs6(t):
    t = insert_hist(t, "### 6.1 Scalar and Vector Potentials",
        "The potentials have led a disputed life",
        "**History.** The potentials have led a disputed life. Maxwell built his 1865 theory on them as the primary objects; Oliver Heaviside, impatient with their redundancy, called them 'still-born' and campaigned for the fields-only formulation that textbooks adopted for seventy years. The gauge condition is Ludvig Lorenz's (1867), a Danish physicist so persistently confused with Hendrik Lorentz of Leiden that the misnomer survives in published papers; this chapter's own caution box exists because of it. The potentials' revenge arrived in 1959, when Aharonov and Bohm showed a field-free region can still shift quantum phases, a story the quantum chapters take up.")
    t = insert_ponder(t, "### 6.2 Gauge Transformations",
        "Ponder (attempt the redundancy).",
        "The transformation $V' = V - \\partial \\chi/\\partial t$, $\\mathbf{A}' = \\mathbf{A} + \\nabla \\chi$ leaves every field unchanged. Attempt two things: first, to see why by direct substitution; second, to flip the redundancy from nuisance to resource, if the potentials carry more data than the fields need, what would you spend that freedom on?",
        "Direct substitution: $\\nabla V' = \\nabla V - \\nabla \\dot{\\chi}$ and $\\partial \\mathbf{A}'/\\partial t = \\partial \\mathbf{A}/\\partial t + \\nabla \\dot{\\chi}$, so $\\mathbf{E}' = -\\nabla V' - \\partial \\mathbf{A}'/\\partial t = \\mathbf{E}$, with the time derivatives cancelling because mixed partials commute; $\\nabla \\times \\nabla \\chi \\equiv 0$ handles $\\mathbf{B}$. The freedom is real data-slack: one scalar function's worth. Spend it as a constraint, for instance $\\nabla \\cdot \\mathbf{A} = 0$ (Coulomb) or the Lorenz condition, and the wave equations below decouple: the redundancy, once fixed, buys tractability.")
    t = insert_ponder(t, "### 6.4 Retarded Potentials",
        "Ponder (attempt the arrow).",
        "The wave equation's Green function offers two roots: $t_r = t - R/c$ and $t_a = t + R/c$. The mathematics is indifferent; attempt the physics. Which root survives, what principle kills the other, and what everyday sight is the retarded root hiding in plain sight?",
        "Causality keeps $t_r = t - R/c$: the field here now reflects where the source was, not where it will be. The advanced root is a perfectly good solution of the equation, and only the boundary condition that effects follow causes discards it (time-reversal-symmetric theory, time-asymmetric world). The everyday sight: the Sun on your face is eight minutes stale, the same mechanism at $8.3$ light-minutes instead of $3$ light-nanoseconds across a room.")
    t = insert_qc(t,
    [
        "(E) Verify the gauge invariance of $\\mathbf{E}$ by direct substitution: compute $\\mathbf{E}' = -\\nabla(V - \\partial \\chi/\\partial t) - \\partial(\\mathbf{A} + \\nabla \\chi)/\\partial t$ and show every $\\chi$-term cancels, naming the property of derivatives you used.",
        "(M) Derive the Lorenz condition: substitute $\\mathbf{E} = -\\nabla V - \\partial \\mathbf{A}/\\partial t$ and $\\mathbf{B} = \\nabla \\times \\mathbf{A}$ into Gauss's and Ampere-Maxwell's laws, and show the mixed terms collapse into $\\nabla \\cdot \\mathbf{A} + \\mu_0 \\varepsilon_0 \\partial V/\\partial t = 0$, decoupling the potentials into two wave equations.",
        "(M) A desk lamp sits 3 m away. Compute the light-travel delay of its field changes, and decide why electrostatics textbooks never mention retardation: what is special about static sources?",
        "(M) Classify the gauges by use-case: why does the Coulomb gauge serve magnetostatics and bound-state work while the Lorenz gauge serves radiation and relativity? Base the decision on what each does to $V$ and $\\mathbf{A}$'s equations.",
        "(M) Trap: 'potentials satisfying the Lorenz condition are the physically real ones; other gauges describe the same physics less accurately.' Decide what is wrong, and state what is observable in classical electromagnetism.",
        "(H) The wave equation's Green function gives two candidate times, $t' = t \\mp R/c$. Prove the retarded choice satisfies causality, and verify that for static $\\rho$ the retarded potential reduces to the Coulomb integral: retardation must be invisible in statics.",
        "(M) The Lienard-Wiechert fields split into a velocity field falling as $1/R^2$ and an acceleration field falling as $1/R$. Decide which part a detector a kilometre away measures, and what that implies about the source's motion.",
        "(H) Heaviside called the potentials 'still-born'; Aharonov and Bohm disagreed in 1959: an electron path encircling a shielded flux tube has $\\mathbf{B} = 0$ along the path yet acquires phase $\\Delta\\phi = (q/\\hbar) \\oint \\mathbf{A} \\cdot d\\mathbf{l} \\ne 0$. Decide what this does to 'potentials are bookkeeping', and name the flag it plants for the quantum chapters.",
    ],
    [
        "$\\nabla(V - \\partial_t \\chi) = \\nabla V - \\nabla \\partial_t \\chi$ and $\\partial_t (\\mathbf{A} + \\nabla \\chi) = \\partial_t \\mathbf{A} + \\nabla \\partial_t \\chi$; the $\\nabla \\partial_t \\chi$ terms cancel in $\\mathbf{E}' = -\\nabla V' - \\partial_t \\mathbf{A}'$ because mixed partial derivatives commute. $\\mathbf{B}$ survives because $\\nabla \\times \\nabla \\chi \\equiv 0$.",
        "Gauss gives $\\nabla \\cdot \\mathbf{E} = -\\nabla^2 V - \\partial_t (\\nabla \\cdot \\mathbf{A}) = \\rho/\\varepsilon_0$; Ampere-Maxwell's curl gives $\\nabla \\times (\\nabla \\times \\mathbf{A}) = \\nabla(\\nabla \\cdot \\mathbf{A}) - \\nabla^2 \\mathbf{A} = \\mu_0 \\mathbf{J} - \\mu_0 \\varepsilon_0 \\nabla \\dot{V} - \\mu_0 \\varepsilon_0 \\ddot{\\mathbf{A}}$. Imposing $\\nabla \\cdot \\mathbf{A} + \\mu_0 \\varepsilon_0 \\dot{V} = 0$ deletes both gradient terms at once: two independent wave equations, one for $V$, one for $\\mathbf{A}$.",
        "Delay $= R/c = 3/(3 \\times 10^8) = 10\\,\\text{ns}$. Static sources make the retarded and present configurations identical: $\\rho(\\mathbf{r}', t_r) = \\rho(\\mathbf{r}', t)$ for all $t_r$, so the integral collapses to Coulomb's and retardation has nothing to show. Only changing sources expose the arrow.",
        "Coulomb gauge ($\\nabla \\cdot \\mathbf{A} = 0$): statics stays simple and $\\mathbf{A}$ obeys a Poisson equation, but $V$ becomes instantaneous, awkward for waves. Lorenz gauge: both potentials obey symmetric wave equations with retarded solutions, the form special relativity writes as one four-vector equation. Bound-state and numerical work picks Coulomb; radiation picks Lorenz.",
        "Gauge is convention, not physics: every gauge reproduces the same $\\mathbf{E}$ and $\\mathbf{B}$, which are the classical observables. The Lorenz condition's virtue is symmetry and decoupling, not truth; calling a gauge physical mistakes a coordinate choice for a fact. (Quantum mechanics later complicates the story, but through the phase, not through preferring one gauge.)",
        "The roots $t' = t - R/c$ and $t' = t + R/c$ are both solutions; causality retains the retarded one, since $t + R/c$ would have the field anticipate its source. For static $\\rho$, $\\rho(\\mathbf{r}', t_r)$ is independent of $t_r$, so $V = (1/4\\pi\\varepsilon_0) \\int \\rho\\, d^3r'/R$: the Coulomb integral, retardation invisible by construction.",
        "Radiation wins by distance: the acceleration field divided by the velocity field grows linearly with $R$, so past some crossover the detector measures pure $1/R$ radiation and the $1/R^2$ term is gone. Radiation exists only when the charge accelerates, since constant-velocity fields just ride along with the charge: the $1/R$ exponent is the verification hook, the slowest falloff consistent with energy conservation.",
        "It collapses the bookkeeping claim: a field-free region still moves the quantum phase, and the loop integral of $\\mathbf{A}$ around the flux is gauge-invariant and measurable. The classical statement 'only $\\mathbf{E}$ and $\\mathbf{B}$ are observable' survives locally, but globally the potentials carry information no local field does: the flag planted here is the quantum chapters' opening.",
    ])
    return t


apply("4_electrodynamics.md", jobs4)
apply("5_electromagnetic-waves.md", jobs5)
apply("6_potentials-and-gauge-transformations.md", jobs6)
