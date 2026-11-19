"""Retrofit injection for topic-2 files 12, 13, 14: history + 2 ponders + QC ladder.

Run from repo root: python3 .loop/retrofit-121314.py
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


# ================= 12: Ising model and mean field theory =================

def jobs12(t):
    t = insert_hist(t, "### 12.1 The Ising Model",
        "Weiss postulated his molecular field in 1907",
        "**History.** Mean field theory is older than the model it describes: Pierre Weiss postulated his molecular field in 1907 to explain ferromagnetism, two decades before the Ising model existed. Ernst Ising's 1925 thesis then killed the one-dimensional case, and the two-dimensional case waited for Lars Onsager, who presented his transfer-matrix solution in 1942 and published the full derivation only in 1944. Chen-Ning Yang completed the spontaneous magnetisation, with its exact exponent $\\beta = 1/8$, in 1952. No exact solution exists in three dimensions to this day.")
    t = insert_ponder(t, "### 12.1 The Ising Model",
        "Ponder (attempt the method).",
        "The one-dimensional partition function sums $2^N$ configurations. Attempt to invent a method that never performs the exponential sum: factorise each nearest-neighbour bond's Boltzmann weight into a 2 by 2 matrix, and write the total sum as a trace. What survives the thermodynamic limit?",
        "Write $T(\\sigma, \\sigma') = \\exp[\\beta J \\sigma \\sigma' + \\beta h (\\sigma + \\sigma')/2]$: the bond weight as a matrix element. The total sum factorises into $Z = \\mathrm{Tr}\\, \\mathbf{T}^N = \\lambda_+^N + \\lambda_-^N$, and as $N \\to \\infty$ only the largest eigenvalue remains: the free energy per spin is a logarithm of one number. The exponential count became an algebra problem, and the same move, enlarged to $4 \\times 4$ matrices, is Onsager's 1944 solution of the square lattice.")
    t = insert_ponder(t, "### 12.2 Mean-Field Approximation",
        "Ponder (attempt the clash).",
        "Mean field gives the magnetisation exponent $\\beta = 1/2$ from the $\\tanh$ expansion; Onsager's exact square lattice gives $\\beta = 1/8$. Attempt to diagnose why the same expansion that works at high temperature fails precisely at the critical point, and why mean field becomes exact above $d = 4$.",
        "The expansion assumes each spin sees the average field; near $T_c$ the fluctuations of the local field grow without bound and the assumption collapses. Fluctuations weaken as coordination grows: each spin's field is an average over $z$ neighbours with relative spread about $1/\\sqrt{z}$, and $z$ grows without bound as the dimension rises. Above the upper critical dimension $d = 4$ the fluctuations are harmless and mean field is exact; below it they renormalise the exponents, which is precisely what the renormalisation group computes.")
    t = insert_qc(t,
    [
        "Write the Ising Hamiltonian and explain each symbol's role.",
        "How does the transfer matrix evaluate the 1D partition function, and what is the model's key 1D verdict?",
        "State the Weiss mean-field decoupling of $\\sigma_i \\sigma_j$.",
        "Write the self-consistency equation for $m$ with and without a field.",
        "Where does the mean-field critical temperature $T_c^{\\text{MF}}$ sit, and how does the small-$m$ expansion locate it?",
        "Compare the mean-field and exact critical temperatures for the square lattice.",
        "List the mean-field critical exponents and the exact 2D Ising values.",
        "What is the upper critical dimension, and what does universality claim?",
    ],
    [
        "$\\mathcal{H} = -J \\sum_{\\langle i,j \\rangle} \\sigma_i \\sigma_j - h \\sum_i \\sigma_i$ with $\\sigma_i \\in \\{-1, +1\\}$; $J > 0$ couples nearest neighbours ferromagnetically and $h$ is the external field.",
        "$Z = \\mathrm{Tr}\\, \\mathbf{T}^N = \\lambda_+^N + \\lambda_-^N$ with $\\mathbf{T}$ the 2 by 2 bond matrix; in the thermodynamic limit $Z = \\lambda_+^N$. Verdict: no phase transition at any $T > 0$; $m \\to 0$ as $h \\to 0$.",
        "$\\sigma_i \\sigma_j \\approx \\sigma_i \\langle \\sigma_j \\rangle + \\langle \\sigma_i \\rangle \\sigma_j - \\langle \\sigma_i \\rangle \\langle \\sigma_j \\rangle$: each spin interacts with the average, not with individual neighbours.",
        "With field: $m = \\tanh[\\beta (zJm + h)]$. At $h = 0$: $m = \\tanh(\\beta zJm)$.",
        "$T_c^{\\text{MF}} = zJ/k_B$: expanding $m = \\tanh(\\beta zJm)$ for small $m$ gives $m \\approx \\beta zJm - (\\beta zJ)^3 m^3/3$, and a nonzero solution appears only when $\\beta zJ > 1$.",
        "Mean field: $k_B T_c = zJ = 4J$ for $z = 4$; exact (Onsager): $k_B T_c/J = 2/\\ln(1+\\sqrt{2}) \\approx 2.269$. The overestimate factor is $4/2.269 \\approx 1.76$.",
        "Mean field: $\\beta = 1/2$, $\\gamma = 1$, $\\alpha = 0$ (jump), $\\nu = 1/2$. Exact 2D: $\\beta = 1/8$, $\\gamma = 7/4$, $\\alpha = 0$ (logarithm), $\\nu = 1$.",
        "Mean field is exact for $d > 4$ and wrong below: above $d = 4$, critical fluctuations are too weak to shift the exponents. Universality: the exponents depend only on dimensionality and symmetry, not on microscopic details.",
    ])
    return t


# ================= 13: Fluctuation-dissipation theorem =================

def jobs13(t):
    t = insert_hist(t, "### 13.1 Linear Response Theory",
        "Einstein's 1905 Brownian-motion paper",
        "**History.** The theorem's first instance is Einstein's 1905 Brownian-motion paper, which tied a particle's diffusion coefficient to its mobility in the viscous medium: the same molecular collisions that drag the particle also drive its random walk. The electrical version arrived in a single year at Bell Labs: John Bertrand Johnson measured the thermal noise of a resistor in 1928, and Harry Nyquist explained it the same year with an equipartition argument. Ryogo Kubo's 1957 formalism made the general quantum statement precise, and the theorem has been the working bridge between equilibrium fluctuations and every response coefficient since.")
    t = insert_ponder(t, "### 13.1 Linear Response Theory",
        "Ponder (attempt the invention).",
        "At equilibrium nothing dissipates, yet the theorem equates a dissipation coefficient (the absorptive part $\\chi''$) with a fluctuation spectrum $S(\\omega)$. Attempt to invent the reason the same bath that damps a motion must also jiggle it: what would equilibrium look like if the bath drained energy without ever returning it?",
        "It would be a one-way street: a system coupled to such a bath would cool forever, and detailed balance would fail. In true equilibrium the coupled system and bath trade energy at exactly equal rates, and the microscopic coupling that lets the bath drain a driven motion is the same coupling through which it kicks the system spontaneously. Einstein's Brownian result is the cleanest instance: drag and diffusion are the same collisions seen from two sides.")
    t = insert_ponder(t, "### 13.3 Johnson--Nyquist Noise",
        "Ponder (attempt Nyquist's argument).",
        "A resistor $R$ is connected to a matched transmission line whose modes sit at temperature $T$. Attempt to derive the noise voltage from equipartition alone: how much energy does each line mode carry, and what voltage source must the resistor imitate to keep the balance?",
        "Each classical mode carries $k_B T$, so two matched resistors at the ends trade a power $k_B T \\Delta f$ per bandwidth back and forth. A Thevenin source $V_n$ behind $R$ delivers at most $V_n^2 / 4R$ to a matched load; setting that equal to $k_B T \\Delta f$ gives $\\langle V^2 \\rangle = 4 k_B T R \\Delta f$. The noise is the resistor's effort to stay in equilibrium with the radiation field: equipartition wearing a circuit's clothes.")
    t = insert_qc(t,
    [
        "Write the perturbed Hamiltonian used in linear response and the response integral it produces.",
        "State the quantum response function and its ingredients.",
        "State the classical form of the fluctuation-dissipation theorem.",
        "What spectrum does a damped harmonic oscillator produce, and where does it peak?",
        "State the Johnson-Nyquist noise formula and name its ingredients.",
        "Compute the noise voltage squared for a 10 k$\\Omega$ resistor at 300 K over a 1 MHz bandwidth.",
        "Why is Johnson-Nyquist noise fundamental rather than an engineering nuisance?",
        "Reconstruct Nyquist's 1928 equipartition argument from a matched line.",
    ],
    [
        "$\\mathcal{H}(t) = \\mathcal{H}_0 - f(t) A$ with $A$ the observable conjugate to the field $f(t)$; the first-order response is $\\langle A(t) \\rangle - \\langle A \\rangle_0 = \\int_{-\\infty}^{t} \\chi_{AA}(t - t') f(t')\\, dt'$.",
        "$\\chi_{AA}(t) = \\frac{i}{\\hbar} \\theta(t) \\langle [A(t), A(0)] \\rangle_0$: a retarded (causal) commutator of the observable with itself, evaluated in equilibrium.",
        "$S(\\omega) = \\frac{2 k_B T}{\\omega} \\chi''(\\omega)$: the fluctuation power spectrum equals the absorptive (imaginary) part of the susceptibility times $2 k_B T / \\omega$.",
        "A Lorentzian: $\\chi''(\\omega) = \\gamma \\omega / [(\\omega_0^2 - \\omega^2)^2 + \\gamma^2 \\omega^2]$, peaked at the natural frequency $\\omega_0$.",
        "$\\langle V^2 \\rangle = 4 k_B T R \\Delta f$ with $R$ the resistance and $\\Delta f$ the measured bandwidth.",
        "$4 \\times (1.38 \\times 10^{-23}) \\times 300 \\times 10^4 \\times 10^6 \\approx 1.66 \\times 10^{-10}\\ \\mathrm{V^2}$, that is about 13 microvolts rms.",
        "It arises from the thermal motion of the charge carriers themselves: no cooling of the circuit removes it short of cooling the resistor, and it sets the noise floor of every amplifier.",
        "Each line mode carries $k_B T$, so matched resistors trade $k_B T \\Delta f$ per bandwidth; a Thevenin source delivers $V_n^2/4R$ to a matched load, and equating the two gives $\\langle V^2 \\rangle = 4 k_B T R \\Delta f$.",
    ])
    return t


# ================= 14: Microcanonical ensemble =================

def jobs14(t):
    t = insert_hist(t, "### 14.1 Density of States",
        "Ludwig Boltzmann proposed the counting entropy in 1877",
        "**History.** Ludwig Boltzmann proposed the counting entropy, $S$ proportional to $\\ln W$, in 1877, in a short paper that drew little notice at the time; the idea had come to him as a shift from continuous to combinatorial arguments. Max Planck gave the relation its constant $k_B$ and its modern form $S = k_B \\ln W$ in 1900-1901 while introducing the quantum of energy, and it is Planck's version that is engraved on Boltzmann's Vienna gravestone. Josiah Willard Gibbs's 1902 Statistical Mechanics then placed the microcanonical ensemble at the foundation of the subject.")
    t = insert_ponder(t, "### 14.1 Density of States",
        "Ponder (attempt the logarithm).",
        "Boltzmann's entropy is the logarithm of the state count. Attempt to derive the logarithm rather than assume it: when two independent systems are combined, their state counts multiply, $\\Omega = \\Omega_1 \\Omega_2$. Which property of entropy forces $S = c \\ln \\Omega$, and what fixes the constant $c$?",
        "Entropy must be additive: two separated systems' entropy is the sum of their entropies. Additivity converts the multiplication of counts into an addition only under the logarithm, since $c \\ln(\\Omega_1 \\Omega_2) = c \\ln \\Omega_1 + c \\ln \\Omega_2$. Monotonicity fixes the sign of $c$, and matching one measured scale (the ideal gas or blackbody spectrum) fixes its value: $c = k_B$, the constant Planck named for Boltzmann.")
    t = insert_ponder(t, "### 14.4 Equivalence of Ensembles in the Thermodynamic Limit",
        "Ponder (attempt the failure).",
        "Ensemble equivalence is a theorem of the thermodynamic limit. Attempt to find its edge cases: what happens to energy fluctuations when interactions are long-ranged, as gravity's are, or when the entropy $S(E)$ loses concavity at a first-order transition?",
        "Equivalence needs additive energy and a concave $S(E)$. With long-ranged forces, energy no longer scales with volume per particle, $\\Delta E/E$ need not vanish, and the microcanonical ensemble allows a negative specific heat: a gravitating cluster that radiates energy away heats up, which the canonical ensemble's bath forbids. A non-concave $S(E)$ makes the Legendre transform $\\inf_E [E - \\beta^{-1} S(E)]$ non-invertible: the canonical ensemble never visits the states between the concave hull's tangency points, and the two ensembles genuinely disagree.")
    t = insert_qc(t,
    [
        "Define the microcanonical state count $\\Omega(E, V, N)$ and the entropy built on it.",
        "How is temperature defined inside the microcanonical ensemble?",
        "State the ideal-gas entropy's large-$N$ form (Sackur-Tetrode) and the mean energy it implies.",
        "State the classical virial theorem's consequence for a power-law potential $U \\propto r^n$.",
        "What mechanism drives ensemble equivalence in the thermodynamic limit?",
        "Write the Legendre-transform relation between microcanonical entropy and canonical free energy.",
        "What does the microcanonical picture give for the third law?",
        "For the two-state paramagnet, give the multiplicity, the equation of state, and where $T \\to \\infty$.",
    ],
    [
        "$\\Omega(E, V, N) = \\int_{E < \\mathcal{H} < E + \\delta E} \\frac{d^{3N} q\\, d^{3N} p}{N!\\, h^{3N}}$, and $S = k_B \\ln \\Omega$.",
        "Through $1/T = \\partial S / \\partial E$: temperature is the inverse slope of the entropy versus energy.",
        "$S = N k_B [\\ln(V/N) + \\tfrac{3}{2} \\ln(4 \\pi m E / 3 N h^2) + 5/2]$; differentiating gives $E = \\tfrac{3}{2} N k_B T$, equipartition recovered.",
        "$\\langle K \\rangle = \\tfrac{n}{2} \\langle U \\rangle$; for the harmonic oscillator ($n = 2$) the kinetic and potential energies are equal on average.",
        "Canonical energy fluctuations scale as $\\Delta E / E \\sim 1/\\sqrt{N}$: the energy distribution sharpens onto a delta function as $N \\to \\infty$, so every ensemble agrees.",
        "$F(\\beta) = \\inf_E [E - \\beta^{-1} S(E)]$: the canonical free energy is the Legendre-Fenchel transform of the microcanonical entropy.",
        "Nernst's theorem: as $T \\to 0$ the system sits in its ground state(s), so $S \\to k_B \\ln g_0$, zero for a non-degenerate ground state ($g_0 = 1$).",
        "$\\Omega = \\binom{N}{N_\\uparrow}$ with $E = (2 N_\\uparrow - N) \\mu B$; the equation of state is $M = N \\mu \\tanh(\\mu B / k_B T)$ (the spin-1/2 Brillouin function). $T \\to \\infty$ at $M = 0$, where the entropy is maximal and $1/T = 0$.",
    ])
    return t


apply("12_ising-model-and-mean-field-theory.md", jobs12)
apply("13_fluctuation-dissipation-theorem.md", jobs13)
apply("14_microcanonical-ensemble.md", jobs14)
