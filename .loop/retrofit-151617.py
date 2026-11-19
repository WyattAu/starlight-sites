"""Retrofit injection for topic-2 files 15, 16, 17: history + 2 ponders + QC ladder.

Run from repo root: python3 .loop/retrofit-151617.py
Idempotent: each block is guarded by a presence check.
"""
from pathlib import Path

D = Path("sites/physics/src/content/docs/2-thermal-physics")


def insert_hist(t, anchor, marker, text):
    if marker in t:
        print("hist already present:", marker[:40])
        return t
    assert anchor in t, "HIST " + anchor[:50]
    return t.replace(anchor, text + "\n\n" + anchor, 1)


def insert_ponder(t, anchor, head, body, spoil):
    if head in t:
        print("ponder already present:", head[:40])
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
        print("QC already present")
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
    assert marker in t, "QC marker missing"
    return t.replace(marker, block + marker, 1)


def apply(path, jobs):
    p = D / path
    t = p.read_text(encoding="utf-8")
    t = jobs(t)
    p.write_text(t, encoding="utf-8")
    print(path, "done")


# ================= 15: Quantum statistics in detail =================

def jobs15(t):
    t = insert_hist(t, "### 15.1 Fermi--Dirac and Bose--Einstein Distributions",
        "Satyendra Nath Bose sent his photon-counting derivation",
        "**History.** The two quantum distributions arrived within two years of each other. Satyendra Nath Bose sent his photon-counting derivation to Albert Einstein in 1924; Einstein translated it himself, extended it to massive particles, and predicted the condensation now bearing both names. Enrico Fermi and Paul Dirac independently wrote down the fermion distribution in 1926, after Wolfgang Pauli's 1925 exclusion principle. Arnold Sommerfeld applied the Fermi gas to metals in 1928 and resolved a puzzle the classical Drude model had carried since 1900: why conduction electrons, apparently thousands of degrees hot, contribute almost nothing to the heat capacity.")
    t = insert_ponder(t, "### 15.1 Fermi--Dirac and Bose--Einstein Distributions",
        "Ponder (attempt the counting).",
        "The classical Maxwell-Boltzmann counting assumes distinguishable particles and unrestricted state occupation. Attempt to construct the two quantum corrections from the counting alone: what changes when a state holds at most one particle, and what changes when any number is allowed but the particles are indistinguishable?",
        "One particle per state: the grand-canonical counting yields $\\langle n \\rangle = 1/(e^{\\beta(\\epsilon - \\mu)} + 1)$, where the $+1$ is the exclusion cap in the denominator. Indistinguishable bosons: the counting yields $\\langle n \\rangle = 1/(e^{\\beta(\\epsilon - \\mu)} - 1)$, where the $-1$ enhances occupation: bosons bunch. The single sign in the denominator is the whole of statistics; every macroscopic consequence (degeneracy pressure, condensation) flows from it.")
    t = insert_ponder(t, "### 15.3 The Bose Gas and Bose--Einstein Condensation",
        "Ponder (attempt the contrast).",
        "Both gases live at low temperature, yet the Fermi gas keeps a finite energy floor while the Bose gas collapses into its ground state. Attempt to explain both behaviours from the distributions alone: why can fermions never condense, and why must bosons?",
        "Fermions: Pauli exclusion stacks the particles up the momentum ladder, and even at $T = 0$ the gas carries energy $\\tfrac{3}{5} N \\epsilon_F$. Degeneracy pressure is pure statistics, no interaction required. Bosons: no ceiling exists, and below $T_c$ the excited states can absorb only a bounded number (the thermal cloud saturates when $n \\lambda^3$ reaches order one), so the surplus has nowhere to go but the ground state: a macroscopic fraction, $N_0/N = 1 - (T/T_c)^{3/2}$. Exclusion versus bunching: one cap, one attractor.")
    t = insert_qc(t,
    [
        "Write the quantum occupation number formula and identify the fermion and boson cases.",
        "State what Pauli exclusion does to occupation, and what bosons are allowed instead.",
        "Give the Fermi energy of a 3D gas in terms of density, and define the Fermi temperature.",
        "State the Sommerfeld expansion's energy and specific heat at $T \\ll T_F$.",
        "Why did the linear specific heat resolve the metals puzzle?",
        "Give the BEC critical temperature for a 3D Bose gas.",
        "State the condensate fraction below $T_c$.",
        "Estimate the Fermi energy of copper ($n \\approx 8.49 \\times 10^{28}\\ \\mathrm{m^{-3}}$) in joules and electronvolts.",
    ],
    [
        "$\\langle n_i \\rangle = 1/(e^{\\beta(\\epsilon_i - \\mu)} \\pm 1)$: plus for fermions, minus for bosons.",
        "Fermions: $\\langle n_i \\rangle \\leq 1$ per state, the exclusion cap. Bosons: unrestricted occupation, up to macroscopic condensation into one state.",
        "$\\epsilon_F = \\frac{\\hbar^2}{2m}(3\\pi^2 n)^{2/3}$ at $T = 0$, and $T_F = \\epsilon_F / k_B$: the temperature scale set by degeneracy.",
        "$E = \\tfrac{3}{5} N \\epsilon_F [1 + \\tfrac{5\\pi^2}{12}(T/T_F)^2 + \\cdots]$ and $C_V = N k_B \\tfrac{\\pi^2}{2} (T/T_F)$: linear in $T$, tiny compared with $N k_B$.",
        "Classical Drude theory predicted electrons should supply a full $\\tfrac{3}{2} N k_B$; measurements showed almost nothing. The Fermi result gives only $\\sim (T/T_F)$ of that, since electrons deep below $\\epsilon_F$ have no empty states to absorb energy into.",
        "$T_c = \\frac{2\\pi\\hbar^2}{m k_B}\\left(\\frac{n}{\\zeta(3/2)}\\right)^{2/3}$ with $\\zeta(3/2) \\approx 2.612$: condensation when the de Broglie wave packets overlap.",
        "$N_0/N = 1 - (T/T_c)^{3/2}$: the excited states saturate, and everything beyond their capacity sits in the ground state.",
        "$\\epsilon_F = \\frac{\\hbar^2}{2m_e}(3\\pi^2 n)^{2/3} \\approx 1.13 \\times 10^{-18}\\ \\mathrm{J} \\approx 7\\ \\mathrm{eV}$, so $T_F \\sim 8 \\times 10^4\\ \\mathrm{K}$: copper's electrons are deeply degenerate at room temperature.",
    ])
    return t


# ================= 16: The Debye model of solids =================

def jobs16(t):
    t = insert_hist(t, "### 16.1 From Einstein to Debye",
        "The Einstein model treats all atoms as independent quantum oscillators",
        "**History.** Einstein's 1907 solid was the first application of quantum ideas to matter: quantised oscillators made the specific heat fall at low temperature where classical equipartition demanded the constant $3Nk_B$ of Dulong-Petit. But Walther Nernst's low-temperature measurements around 1910-1911 exposed the model's wrong shape: experiments showed a power law, not an exponential freeze-out. Peter Debye's 1912 fix treated the lattice as a continuum of sound waves with a cutoff chosen to fit exactly $3N$ modes, and the $T^3$ law emerged from the $\\omega^2$ density of states. The phonon concept was born in that calculation.")
    t = insert_ponder(t, "### 16.1 From Einstein to Debye",
        "Ponder (attempt the exponent).",
        "Experiment says $C_V \\propto T^3$ at low temperature; Einstein's model gives an exponential. Attempt to find which structural feature of the mode spectrum decides the low-temperature shape: what does a solid do at temperature $T$ when its spectrum has a gap (Einstein) versus a continuum reaching zero (Debye)?",
        "The exponent lives in the low-frequency density of states. With a single gap at $\\omega_E$, modes freeze out exponentially: $C \\propto e^{-\\theta_E/T}$. With a continuum $g(\\omega) \\propto \\omega^2$ reaching zero, only modes with $\\hbar\\omega \\lesssim k_B T$ stay excited: their count scales as the phase-space volume of a ball of radius $k_B T/\\hbar$ in $k$-space, $\\propto T^3$. The gapless acoustic spectrum is the entire fix: no fine-tuning, just topology of the dispersion at $\\omega = 0$.")
    t = insert_ponder(t, "### 16.5 Debye Frequency and Wavevector",
        "Ponder (attempt the cutoff).",
        "Debye counts modes with the continuum integral $g(\\omega) = 3V\\omega^2/2\\pi^2 v_s^3$ up to a cutoff $\\omega_D$ chosen so the total comes to exactly $3N$. Attempt to derive $\\omega_D$ from that condition, and name the physics the cutoff stands in for.",
        "$\\int_0^{\\omega_D} g\\, d\\omega = \\frac{V \\omega_D^3}{2\\pi^2 v_s^3} = 3N$ gives $\\omega_D = v_s (6\\pi^2 N/V)^{1/3}$, equivalently $k_D = (6\\pi^2 n)^{1/3}$: one allowed wavelength per atom, $\\lambda_D$ comparable to the lattice spacing. The cutoff replaces the discrete Brillouin zone of the real crystal: beyond $k_D$ the continuum picture double-counts modes that the discrete lattice cannot support, since sound waves shorter than the atomic spacing have no meaning in the crystal.")
    t = insert_qc(t,
    [
        "Write the Einstein specific heat and state its correct limit and its low-temperature failure.",
        "State the Debye density of states and the condition that fixes the cutoff $\\omega_D$.",
        "Write the Debye specific heat integral in terms of $\\theta_D$.",
        "Give the low-temperature Debye law.",
        "Give the high-temperature limit both models share.",
        "In the aluminum worked example, the computed $\\theta_D \\approx 748$ K against an experimental 428 K: what causes the gap?",
        "State the mean sound speed prescription for one longitudinal and two transverse modes.",
        "Explain physically why Debye captures $T^3$ where Einstein misses it, and what $\\theta_D$ correlates with across materials.",
    ],
    [
        "$C_V = 3Nk_B (\\theta_E/T)^2 e^{\\theta_E/T} / (e^{\\theta_E/T} - 1)^2$: it recovers Dulong-Petit at high $T$ and falls to zero as $T \\to 0$ (already a quantum success), but exponentially rather than as a power law.",
        "$g(\\omega) = 3V\\omega^2 / 2\\pi^2 v_s^3$ for $0 \\le \\omega \\le \\omega_D$, with $\\int_0^{\\omega_D} g\\, d\\omega = 3N$, giving $\\omega_D = v_s (6\\pi^2 N/V)^{1/3}$.",
        "$C_V = 9Nk_B (T/\\theta_D)^3 \\int_0^{\\theta_D/T} \\frac{x^4 e^x}{(e^x - 1)^2} dx$ with $\\theta_D = \\hbar\\omega_D/k_B$.",
        "$C_V = \\frac{12\\pi^4}{5} N k_B (T/\\theta_D)^3 \\propto T^3$: the universal low-temperature law of insulating crystals.",
        "Dulong-Petit: $C_V \\to 3Nk_B$ once every mode is thermally excited ($T \\gg \\theta_D$).",
        "The single-speed approximation: real crystals have one longitudinal and two transverse branches with different dispersions, so the true density of states deviates from the ideal $\\omega^2$ form.",
        "$3/v_s^3 = 1/v_L^3 + 2/v_T^3$: the inverse-cube average over one longitudinal and two transverse branches.",
        "Einstein's gapped spectrum freezes out exponentially; Debye's continuum reaching $\\omega = 0$ leaves thermally reachable acoustic modes whose phase space grows as $T^3$. $\\theta_D$ correlates with stiffness and melting point: stiff bonds and light atoms (diamond) push it up, soft materials (lead) pull it down.",
    ])
    return t


# ================= 17: Thermodynamic response functions =================

def jobs17(t):
    t = insert_hist(t, "### 17.1 General Relations",
        "The four Maxwell relations appeared",
        "**History.** The four Maxwell relations appeared in James Clerk Maxwell's Theory of Heat (1871), read off from the exact differentials of the thermodynamic potentials. Systematic manipulation of any thermodynamic derivative became an industry after Percy Bridgman's 1914 tables reduced every possible derivative to a small set of measurable quantities, a tool generations of cryogenics labs kept at hand. The pedagogical mnemonics (the thermodynamic square, credited to Max Born's school) arrived later, and instructors have argued since over whether mnemonics teach the structure or hide it.")
    t = insert_ponder(t, "### 17.2 Maxwell Relations",
        "Ponder (attempt the sign).",
        "Attempt to derive the Maxwell relations without the table: start from $dU = TdS - PdV$, apply the equality of mixed second partials that exact differentials obey, and generate the first relation. Why do the signs alternate across the four potentials?",
        "Exactness of $U(S,V)$ says $\\partial/\\partial V$ of $(\\partial U/\\partial S) = \\partial/\\partial S$ of $(\\partial U/\\partial V)$, that is $(\\partial T/\\partial V)_S = -(\\partial P/\\partial S)_V$. Each potential carries its own pair of conjugate variables with its own signs ($dU$: $T, -P$; $dF$: $-S, -P$; $dH$: $T, V$; $dG$: $-S, V$), and each relation inherits the sign of the swapped pair. The alternating signs are bookkeeping for which variables are natural to which potential, not physics to be memorised.")
    t = insert_ponder(t, "### 17.3 Jacobian Formalism",
        "Ponder (attempt the trap).",
        "Attempt to convert $(\\partial S/\\partial V)_T$ into measurable quantities with Jacobians, and locate the classic sign trap: why does the triple product $(\\partial x/\\partial y)_z (\\partial y/\\partial z)_x (\\partial z/\\partial x)_y$ come to $-1$ rather than $+1$?",
        "Convert to Jacobians: $(\\partial S/\\partial V)_T = \\partial(S,T)/\\partial(V,T)$, then chain through whichever variables are measurable ($P$, $T$): $\\partial(S,T)/\\partial(V,P) \\cdot \\partial(V,P)/\\partial(V,T)$. Each Jacobian expands into ordinary partials from the measurable set. The trap: each factor in the triple product holds a different variable fixed, so the cycle is not a closed loop of unconstrained derivatives; one factor is an inversion of the others' orientation, and the product carries the sign $-1$. Mechanical Jacobian algebra prevents the error that plain intuition invites.")
    t = insert_qc(t,
    [
        "Define the three canonical response functions $C_X$, $\\kappa_T$, and $\\alpha$.",
        "State the identity linking $C_P$ and $C_V$, and evaluate it for the ideal gas.",
        "Why is $C_P$ never smaller than $C_V$?",
        "Generate the Maxwell relation from the Helmholtz potential $F(T,V)$.",
        "Generate the Maxwell relation from the Gibbs potential $G(T,P)$.",
        "State the Jacobian conversion rule for a constrained partial derivative.",
        "What is the triple-product rule and its sign?",
        "Use the worked example to give $C_P/C_V$ for a monatomic and a diatomic gas at room temperature.",
    ],
    [
        "$C_X = T (\\partial S/\\partial T)_X$; $\\kappa_T = -\\tfrac{1}{V} (\\partial V/\\partial P)_T$; $\\alpha = \\tfrac{1}{V} (\\partial V/\\partial T)_P$.",
        "$C_P - C_V = TV\\alpha^2/\\kappa_T$; for the ideal gas ($\\alpha = 1/T$, $\\kappa_T = 1/P$) this is $TV(1/T^2)P = Nk_B$.",
        "$C_P - C_V = TV\\alpha^2/\\kappa_T$ is a product of squares and a positive compressibility: $\\alpha^2 \\ge 0$ and $\\kappa_T > 0$, so the gap cannot go negative. Physically, $C_P$ pays for expansion work the $C_V$ process never does.",
        "$dF = -SdT - PdV$ gives $(\\partial S/\\partial V)_T = (\\partial P/\\partial T)_V$.",
        "$dG = -SdT + VdP$ gives $(\\partial S/\\partial P)_T = -(\\partial V/\\partial T)_P$.",
        "$(\\partial x/\\partial y)_z = \\partial(x,z)/\\partial(y,z)$: every constrained derivative is a ratio of two Jacobians sharing the held variable.",
        "$(\\partial x/\\partial y)_z (\\partial y/\\partial z)_x (\\partial z/\\partial x)_y = -1$: the minus sign appears because each factor holds a different variable fixed.",
        "Monatomic: $C_P/C_V = 1 + Nk_B/(3Nk_B/2) = 5/3$. Diatomic: $1 + Nk_B/(5Nk_B/2) = 7/5 = 1.4$.",
    ])
    return t


apply("15_quantum-statistics-in-detail.md", jobs15)
apply("16_the-debye-model-of-solids.md", jobs16)
apply("17_thermodynamic-response-functions.md", jobs17)
