"""Retrofit injection for topic-2 files 18, 19, 20: history + 2 ponders + QC ladder.

Run from repo root: python3 .loop/retrofit-181920.py
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


# ================= 18: Quantum statistical mechanics, advanced topics =================

def jobs18(t):
    t = insert_hist(t, "### 18.1 Density Matrix and Ensemble Averages",
        "John von Neumann's, from his 1927 axiomatisation",
        "**History.** The density matrix is John von Neumann's, from his 1927 axiomatisation of quantum mechanics: he built it precisely to handle statistical mixtures that a single wavefunction cannot represent. Lev Landau introduced the same object from the other side in 1927, describing a subsystem in contact with an environment by a traced-out state, anticipating decoherence by decades. The entropy formula $-k_B \\mathrm{Tr}(\\hat\\rho \\ln \\hat\\rho)$ carries von Neumann's name, and E. T. Jaynes's 1957 maximum-entropy principle showed that the canonical $\\hat\\rho = e^{-\\beta \\hat H}/Z$ is not an assumption about physics at all: it is the least-biased guess consistent with a measured temperature.")
    t = insert_ponder(t, "### 18.1 Density Matrix and Ensemble Averages",
        "Ponder (attempt the purity test).",
        "Why does $\\mathrm{Tr}(\\hat\\rho^2)$ decide purity? Attempt to see it: expand $\\hat\\rho = \\sum_i p_i |\\psi_i\\rangle\\langle\\psi_i|$ and square it. What do the cross-terms do, and why is $\\mathrm{Tr}(\\hat\\rho^2) < 1$ a statement about ignorance rather than about physics?",
        "Squaring kills the cross-terms in an orthonormal basis, leaving $\\hat\\rho^2 = \\sum_i p_i^2 |\\psi_i\\rangle\\langle\\psi_i|$, so $\\mathrm{Tr}(\\hat\\rho^2) = \\sum_i p_i^2$. That sum is 1 exactly when a single probability is 1 (pure state) and falls below 1 for any genuine mixture. The mixture can be epistemic: a subsystem of a larger pure state is described by a mixed $\\hat\\rho$ while the whole stays pure. The probabilities sit in the description, not necessarily in the world, which is exactly why the density operator and not the wavefunction is the general object.")
    t = insert_ponder(t, "### 18.2 Quantum Ideal Gases: General Treatment",
        "Ponder (attempt the bookkeeping).",
        "The grand partition function arrives with an awkward sign pattern, $\\ln \\mathcal{Z} = \\pm \\sum_{\\mathbf{k}} \\ln(1 \\mp e^{-\\beta(\\epsilon_{\\mathbf{k}} - \\mu)})$. Attempt to rederive it from per-mode occupation counting so the signs stop being arbitrary: where does each sign come from?",
        "Count one mode grand-canonically. Fermions allow $n = 0$ or $1$, so the mode partition function is $1 + e^{-\\beta(\\epsilon-\\mu)}$: the $\\ln(1 + x)$ branch. Bosons allow any $n$, so the mode sum is the geometric series $\\sum_n x^n = 1/(1-x)$: the $\\ln(1-x)$ branch. Both signs encode one counting rule with or without a ceiling, and the whole thermodynamics follows from $\\Omega = -PV = \\mp k_B T \\sum_{\\mathbf{k}} \\ln(1 \\mp x)$. The classical limit $x \\ll 1$ collapses both branches to the Maxwell-Boltzmann weight.")
    t = insert_qc(t,
    [
        "Define the density matrix for a statistical mixture and the rule it gives for expectation values.",
        "State the purity test and the entropy built on the density matrix.",
        "Write the canonical ensemble's density operator.",
        "State the von Neumann equation and what closed-system evolution preserves.",
        "Write the grand partition function's sign pattern and state the classical limit.",
        "What happens to the chemical potential below $T_c$ in the ideal Bose gas, and how does $N$ split?",
        "Which quantity of the degenerate Fermi gas is linear in temperature, and how does it scale?",
        "Why is the chemical potential of a photon gas exactly zero?",
    ],
    [
        "$\\hat\\rho = \\sum_i p_i |\\psi_i\\rangle\\langle\\psi_i|$ with $\\mathrm{Tr}\\,\\hat\\rho = 1$, hermiticity, and $\\langle \\hat A \\rangle = \\mathrm{Tr}(\\hat\\rho \\hat A)$: the most general quantum state description, pure or mixed.",
        "$\\mathrm{Tr}(\\hat\\rho^2) = 1$ if and only if the state is pure; von Neumann entropy $S = -k_B \\mathrm{Tr}(\\hat\\rho \\ln \\hat\\rho)$ is zero for pure states and positive for thermal ones.",
        "$\\hat\\rho = \\frac{1}{Z} e^{-\\beta \\hat H}$ with $Z = \\mathrm{Tr}[e^{-\\beta \\hat H}]$.",
        "$i\\hbar\\, \\partial \\hat\\rho/\\partial t = [\\hat H, \\hat\\rho]$, the quantum analogue of Liouville's equation; unitary evolution preserves the eigenvalues of $\\hat\\rho$, so the von Neumann entropy of a closed system stays constant.",
        "$\\ln \\mathcal{Z} = \\pm \\sum_{\\mathbf{k}} \\ln(1 \\mp e^{-\\beta(\\epsilon_{\\mathbf{k}} - \\mu)})$, plus for fermions, minus for bosons; when $\\beta(\\epsilon-\\mu) \\gg 1$ both branches reduce to the Maxwell-Boltzmann weight $e^{-\\beta(\\epsilon-\\mu)}$.",
        "It is pinned at the ground-state energy $\\mu = \\epsilon_0$; the particle number splits as $N = N_0 + N_{\\text{ex}}$, with the excited fraction saturating and the surplus condensing into the ground state.",
        "The specific heat: $C_V \\propto T/T_F$, from the Sommerfeld expansion; only the thermal shell of electrons within $k_B T$ of the Fermi surface responds.",
        "Photon number is not conserved: photons are created and destroyed freely by the walls, so the distribution $1/(e^{\\beta\\hbar\\omega} - 1)$ carries $\\mu = 0$, with temperature alone fixing the occupancy (Planck's law).",
    ])
    return t


# ================= 19: Irreversible thermodynamics and fluctuations =================

def jobs19(t):
    t = insert_hist(t, "### 19.1 Fluctuation-Dissipation in the Time Domain",
        "Murray S. Green and Ryogo Kubo",
        "**History.** The linear-response synthesis is the Green-Kubo formalism of the 1950s, named for Murray S. Green and Ryogo Kubo, who turned the fluctuation-dissipation theorem into a recipe: every transport coefficient is a time integral of an equilibrium correlation function. The modern chapter came four decades later: Denis Evans and colleagues derived the first fluctuation theorem in 1993, Christopher Jarzynski published his equality in 1997, and Gavin Crooks strengthened it to the full forward-reverse relation in 1999, results that quantify how often a small system appears to run the second law backwards, confirmed in single-molecule experiments within a few years.")
    t = insert_ponder(t, "### 19.1 Fluctuation-Dissipation in the Time Domain",
        "Ponder (attempt the reading).",
        "The time-domain statement says the response function is a derivative of an equilibrium correlation: $\\chi(t) = \\frac{1}{k_B T} \\frac{d}{dt} \\langle A(t) A(0) \\rangle$. Attempt to read the Brownian example against it: the velocity correlation $\\langle v(t) v(0) \\rangle = \\frac{k_B T}{m} e^{-t/\\tau}$ must encode the mobility. Attempt to extract the Einstein relation from it.",
        "Differentiate the exponential correlation: $\\chi(t) = -\\frac{1}{\\tau} \\langle v(t) v(0)\\rangle / k_B T$ up to sign conventions. Integrating the response over the drive gives the velocity gained per unit force, $\\mu = \\tau/m$: the mobility is the correlation's memory time. With charge $e$, $\\mu = e\\tau/m$, and pairing with $\\langle v^2 \\rangle = k_B T/m$ yields Einstein's $D = \\mu k_B T$: the diffusion constant and the mobility are one correlation function viewed twice.")
    t = insert_ponder(t, "### 19.4 Crooks Fluctuation Theorem",
        "Ponder (attempt the crossing).",
        "Crooks relates entire work distributions: $P_F(W)/P_R(-W) = e^{\\beta(W - \\Delta F)}$. Attempt to locate the boundary point where neither direction is favoured, and to explain what microscopic ingredient forces the ratio to be exactly exponential.",
        "The ratio equals 1 at $W = \\Delta F$: realisations doing exactly the free-energy difference are equally likely forward and backward. Below $\\Delta F$ (transient second-law violations) the reverse process dominates; above it, the forward does. The exponential form is forced by microscopic reversibility: detailed balance fixes each path's probability ratio to $e^{\\beta W}$, and folding in the equilibrium endpoints contributes the $-\\beta\\Delta F$. Integrating Crooks over $W$ with the Jarzynski kernel recovers the equality as a corollary.")
    t = insert_qc(t,
    [
        "State the time-domain fluctuation-dissipation theorem for the response function.",
        "Extract the Einstein relation from the Brownian velocity correlation $\\langle v(t) v(0) \\rangle = (k_B T/m) e^{-t/\\tau}$.",
        "State the Johnson-Nyquist spectrum and the frequency range of its whiteness.",
        "Write the Jarzynski equality and define its average.",
        "Derive the second law from Jarzynski's equality in one line, and give the quasi-static limit.",
        "Where was the equality verified experimentally, and on what systems?",
        "Write the Crooks fluctuation theorem.",
        "Show how Crooks implies Jarzynski, and locate the crossing point of the two work distributions.",
    ],
    [
        "$\\chi(t) = \\frac{1}{k_B T} \\frac{d}{dt} \\langle A(t) A(0) \\rangle$: the response is a derivative of an equilibrium autocorrelation.",
        "Differentiating the correlation and integrating the response gives mobility $\\mu = e\\tau/m$: the memory time of the correlation is the mobility, and with $\\langle v^2 \\rangle = k_B T/m$ it becomes $D = \\mu k_B T$.",
        "$S_V(f) = 4 k_B T R$, white (frequency-independent) up to $f \\sim k_B T/h$; the variance in a bandwidth is $\\langle V^2 \\rangle = 4 k_B T R \\Delta f$.",
        "$\\langle e^{-\\beta W} \\rangle = e^{-\\beta \\Delta F}$, averaged over many realisations of a drive taking the system from equilibrium $A$ to equilibrium $B$.",
        "Jensen: $\\langle e^{-\\beta W} \\rangle \\ge e^{-\\beta \\langle W \\rangle}$ gives $\\langle W \\rangle \\ge \\Delta F$. Quasi-static driving collapses the work distribution to a delta at $\\Delta F$.",
        "Single-molecule pulling experiments (RNA, DNA hairpins) with optical tweezers: far-from-equilibrium pulls still satisfy the equality.",
        "$P_F(W)/P_R(-W) = e^{\\beta (W - \\Delta F)}$: the entire forward distribution against the reversed backward distribution.",
        "Multiply $P_F(W) e^{-\\beta W}$ by $e^{-\\beta\\Delta F}$ rewritten via the theorem and integrate: $\\int P_F(W) e^{-\\beta W} dW = e^{-\\beta \\Delta F} \\int P_R(-W) dW = e^{-\\beta \\Delta F}$. The crossing sits at $W = \\Delta F$, where the ratio is 1.",
    ])
    return t


# ================= 20: Thermodynamics of information processing =================

def jobs20(t):
    t = insert_hist(t, "### 20.1 Landauer Bound in Practice",
        "The subject's founding paradox is Maxwell's 1867 demon",
        "**History.** The founding paradox is Maxwell's 1867 demon; the founding quantitative claim is Leo Szilard's 1929 one-molecule engine, which tied one bit of information to one $k_B T \\ln 2$ of work, thirty-two years before anyone priced the bit itself. Rolf Landauer's 1961 IBM paper did that: erasure costs at least $k_B T \\ln 2$, and the cost sits at erasure, not measurement. Charles Bennett's 1982 analysis completed the demon's exorcism by showing that computation can be made logically reversible, so it is the demon's memory reset, not its measurements, that restores the second law.")
    t = insert_ponder(t, "The fundamental equality for a quasi-static bit operation is:",
        "Ponder (attempt the asymmetry).",
        "Why must erasing one bit cost $k_B T \\ln 2$ while writing or copying can be free? Attempt the argument from entropy bookkeeping: an erasure maps two states onto one. What happened to the phase-space volume, and what must the bath absorb?",
        "Erasure compresses a two-state ensemble onto one state: the system's phase-space volume shrinks by a factor 2 and its entropy drops by $k_B \\ln 2$. The second law demands the environment's entropy rise by at least as much, so the bath absorbs at least $Q = k_B T \\ln 2$. Writing maps one state to two and grows the space, which the bath supplies without complaint. The asymmetry is logical irreversibility: many-to-one maps cost, one-to-one maps need not, which is Bennett's route to reversible computing.")
    t = insert_ponder(t, "The net effect is that the demon cannot violate the second law",
        "Ponder (attempt the exorcism).",
        "Maxwell's demon seems to violate the second law by sorting molecules for free. Attempt to locate exactly where its cycle fails: the measurement, the sorting, or the memory reset, and reconstruct Szilard's one-bit engine budget.",
        "Szilard's engine: the demon measures which half of the box holds its single molecule (one bit), lets the gas expand against a piston harvesting $k_B T \\ln 2$ of work, and must then reset its memory. Bennett showed the measurement and harvest can in principle be made reversible; the erasure of the one-bit record dissipates $k_B T \\ln 2$, exactly cancelling the harvest. The bookkeeping fails at reset: information is physical, and forgetting is the only step that must be paid for.")
    t = insert_qc(t,
    [
        "State the Landauer limit in energy and in electronvolts at room temperature, and the order-of-magnitude gap to a modern CMOS switch.",
        "What does closing the CMOS-to-Landauer gap require?",
        "What did Bennett's 1982 argument show about where computation pays?",
        "Name the canonical reversible logic gates and the tape-restoring trick.",
        "Write Shannon's entropy and the quasi-static erasure equality.",
        "Why does erasure cost while writing does not?",
        "Where does Maxwell's demon's cycle actually fail?",
        "Give the ATP energy scale, and the flip-flop example's cost in $k_B T$ per operation.",
    ],
    [
        "$k_B T \\ln 2 \\approx 0.018\\ \\mathrm{eV}$ at 300 K; era-2000 CMOS sat at $\\sim 10^4 k_B T$ per switch and modern nodes at $10^2$ to $10^3 k_B T$, a gap of five to six orders of magnitude.",
        "Fundamentally different computing paradigms: reversible or adiabatic logic operating near equilibrium, not incremental voltage tuning.",
        "That a computer can be logically reversible at every step if it never erases: dissipation occurs only at initialisation and optional output, not during the computation itself.",
        "Fredkin and Toffoli gates; any computation can be made reversible by saving all intermediates and running the computation in reverse to restore the input tape.",
        "$H = -\\sum_i p_i \\log_2 p_i$; for a quasi-static bit erasure $\\Delta S_{\\text{system}} + \\Delta S_{\\text{bath}} = 0$, giving $Q \\ge k_B T \\ln 2$.",
        "Erasure is a many-to-one map: phase-space volume shrinks by 2, entropy drops $k_B \\ln 2$, and the bath must absorb it. Writing is one-to-many and thermodynamically free.",
        "At the memory reset: measurement and sorting can be reversible in principle, but erasing the one-bit record costs $k_B T \\ln 2$, cancelling the harvested work (Szilard-Bennett accounting).",
        "ATP hydrolysis delivers $\\Delta G \\approx 20 k_B T$; the worked flip-flop dissipates $E = 10\\,\\mu\\mathrm{W}/3\\,\\mathrm{GHz} \\approx 3.33 \\times 10^{-15}\\ \\mathrm{J} \\approx 8 \\times 10^5 k_B T$ per operation, about $10^6$ times the Landauer limit.",
    ])
    return t


apply("18_quantum-statistical-mechanics-advanced-topics.md", jobs18)
apply("19_irreversible-thermodynamics-and-fluctuations.md", jobs19)
apply("20_thermodynamics-of-information-processing.md", jobs20)
