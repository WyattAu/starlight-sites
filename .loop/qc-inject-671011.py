"""QC ladder injection for topic-2 files 6, 7, 10, 11.

Standard: 8 self-contained questions in aside+spoiler form, ordered to
trace the file's section ladder (not shufflable quiz items).
Run from repo root: python3 .loop/qc-inject-671011.py
"""
from pathlib import Path

D = Path("sites/physics/src/content/docs/2-thermal-physics")


def qc_block(qs, ans):
    body = "\n".join(f"{i}. {q}" for i, q in enumerate(qs, 1))
    a = " ".join(f"**{i}.** {x}" for i, x in enumerate(ans, 1))
    return (
        ":::note[Quick check]\n\n" + body + "\n\n"
        '<details class="wn-spoiler">\n<summary>Answers</summary>\n'
        '<div class="wn-spoiler-body">\n\n' + a + "\n\n</div>\n</details>\n\n:::\n\n"
    )


def add(path, qs, ans):
    assert len(qs) == 8, path + " needs 8 questions"
    assert len(ans) == 8, path + " needs 8 answers"
    p = D / path
    t = p.read_text(encoding="utf-8")
    if ":::note[Quick check]" in t:
        print(path, "already has QC, skipped")
        return
    block = qc_block(qs, ans)
    marker = "## Cross-References"
    if marker in t:
        t = t.replace(marker, block + marker, 1)
    else:
        t = t.rstrip() + "\n\n" + block
    p.write_text(t, encoding="utf-8")
    print(path, "QC ladder added")


DATA = {}

DATA["6_the-ising-model.md"] = (
    [
        "Write the Ising model's energy for spins $s_i = \\pm 1$ with nearest-neighbour coupling $J$ and external field $h$, and say what the sign of $J$ does.",
        "What did Ising's exact solution of the one-dimensional model find in his 1925 thesis?",
        "Why was Peierls's 1936 argument the turning point for the model's reputation?",
        "State the mean-field decoupling of $s_i s_j$ and the self-consistency equation it produces.",
        "Where is the critical point of the mean-field equation, and what happens as it is crossed?",
        "For the 2D square lattice, compare the mean-field critical temperature with Onsager's exact value.",
        "How does the susceptibility behave above $T_c$ in the mean-field treatment?",
        "What is the core failure of mean field theory that the pitfalls section emphasises?",
    ],
    [
        "$H = -J \\sum_{\\langle ij \\rangle} s_i s_j - h \\sum_i s_i$. Positive $J$ rewards aligned neighbours (ferromagnetic coupling); negative $J$ rewards anti-alignment.",
        "No phase transition at any positive temperature: long-range order never appears in 1D, and Ising concluded the model could not describe ferromagnetism. The conclusion is correct for 1D only.",
        "Peierls showed that at low temperature the energy cost of a domain wall beats its entropy in two dimensions, so long-range order must survive: the 2D model does have a phase transition, reviving a model many had written off after Ising's negative result.",
        "Replace each neighbour's spin by its average: $s_i s_j \\approx m s_i + m s_j - m^2$. Each spin then feels an effective field from its $z$ neighbours, and self-consistency demands $m = \\tanh(\\beta J z\\, m)$.",
        "The critical coupling is $\\beta J z = 1$, that is $k_B T_c = J z$. Below $T_c$ two nonzero solutions $\\pm m$ appear continuously from $m = 0$: a phase transition in the simplest possible equation.",
        "Mean field gives $k_B T_c = J z = 4J$ for the square lattice ($z = 4$); the exact Onsager value is $k_B T_c / J = 2/\\ln(1+\\sqrt{2}) \\approx 2.269$. Mean field overestimates $T_c$ by the factor $4/2.269 \\approx 1.76$ because it ignores fluctuations.",
        "It diverges as $T \\to T_c$ from above, $\\chi \\sim 1/(T - T_c)$ in mean field (the Curie-Weiss form): the system responds without bound to an arbitrarily small field near criticality.",
        "It neglects fluctuations, which grow without bound near $T_c$: mean field predicts ordering even in one dimension (where none occurs), overestimates $T_c$, and yields the wrong critical exponents.",
    ],
)

DATA["7_classical-limit-and-the-maxwell-boltzmann-distribution.md"] = (
    [
        "When do the Fermi-Dirac and Bose-Einstein distributions reduce to Maxwell-Boltzmann, and in terms of what criterion?",
        "State the Maxwell-Boltzmann speed distribution's shape and its most probable speed.",
        "Write the classical $N$-particle partition function and explain the role of the factor $1/N!$.",
        "State the equipartition theorem's assignment per quadratic degree of freedom, and give the mean energy of a 3D point particle.",
        "How does the Maxwell-Boltzmann distribution follow from maximum entropy?",
        "Derive the shape of the barometric formula from hydrostatic balance.",
        "What is the effusion flux through a small hole, and how does it scale with pressure and temperature?",
        "State the mean free path and the origin of its numerical factor.",
    ],
    [
        "When the thermal occupation is small, equivalently the degeneracy parameter $n \\lambda^3 \\ll 1$ with $\\lambda$ the thermal de Broglie wavelength: wave-packet overlap is rare, the $\\pm 1$ in the quantum denominators is negligible, and both distributions collapse to the Maxwell-Boltzmann form.",
        "$f(v) \\propto v^2 \\exp(-m v^2 / 2 k_B T)$: the Gaussian in momentum times the $v^2$ volume-of-shell factor; the most probable speed is $v_p = \\sqrt{2 k_B T / m}$.",
        "$Z_N = z^N / N!$ with $z$ the one-particle partition function. The $1/N!$ counts identical particles as indistinguishable, which makes $Z_N$ and the entropy extensive; without it, mixing two identical gases would double the entropy (the Gibbs paradox).",
        "Each quadratic degree of freedom carries $k_B T / 2$ of mean energy; a free 3D particle has three translational degrees, so $\\langle E \\rangle = 3 k_B T / 2$.",
        "Maximising the Shannon entropy subject to fixed mean energy yields the exponential Boltzmann weight $\\exp(-\\beta E)$: the least-biased distribution consistent with a temperature constraint.",
        "Hydrostatic balance $dP/dz = -m g n$ with $P = n k_B T$ gives $n(z) = n_0 \\exp(-m g z / k_B T)$: exponential decay with the scale height $k_B T / m g$.",
        "The flux through a hole small compared with the mean free path is $n \\langle v \\rangle / 4$ with $\\langle v \\rangle = \\sqrt{8 k_B T / \\pi m}$, so the rate scales as $P / \\sqrt{m T}$: lighter particles escape faster at fixed temperature (Graham's law).",
        "$\\lambda = 1 / (\\sqrt{2}\\, n \\sigma)$ with $\\sigma$ the collision cross-section; the $\\sqrt{2}$ comes from the relative speed of two moving molecules, which exceeds a molecule's own speed by that factor on average.",
    ],
)

DATA["10_phase-transitions.md"] = (
    [
        "State the Ehrenfest classification's distinction between first-order and second-order transitions.",
        "Which thermodynamic derivatives are discontinuous in a first-order transition, and what do they correspond to physically?",
        "Give the van der Waals critical constants $V_c$, $T_c$, $P_c$ in terms of the constants $a$ and $b$, and the universal ratio they produce.",
        "Why do power laws appear at the critical point?",
        "What is the universality lesson of critical phenomena?",
        "How do the isotherms change below the critical temperature in the liquid-gas system?",
        "What is critical opalescence, and what does it reveal?",
        "Which quantity diverges with the exponent $\\gamma$?",
    ],
    [
        "First order: a first derivative of the free energy (entropy, volume) is discontinuous, with latent heat and coexistence. Second order: first derivatives are continuous but a second derivative (heat capacity, compressibility, susceptibility) jumps or diverges.",
        "The entropy $S = -\\partial F/\\partial T$ and the volume $V = \\partial F/\\partial P$: their jumps give the latent heat $T \\Delta S$ and the discontinuous density change of melting or boiling.",
        "$V_c = 3b$, $T_c = 8a/(27 R b)$, $P_c = a/(27 b^2)$, giving $P_c V_c / (R T_c) = 3/8$ for every gas described by van der Waals: the first hint of the law of corresponding states.",
        "At the critical point no characteristic length or energy scale survives: the system is scale-free, and only power laws are self-similar under rescaling. The divergence of the correlation length removes every microscopic scale from the problem.",
        "The critical exponents depend only on symmetries and dimension, not on microscopic details: fluids and magnets with nothing shared microscopically share exponents.",
        "Below $T_c$ the isotherms develop a flat coexistence portion: liquid and gas coexist at one pressure, connected by the van der Waals loop, whose unphysical sections are replaced by the Maxwell construction.",
        "Near $T_c$ the fluid scatters light strongly: the correlation length grows to optical wavelengths, so fluctuations exist on all scales and the fluid turns milky. It is the visual signature of diverging correlations.",
        "The compressibility (the magnetic susceptibility in the magnet analogy) diverges as $|T - T_c|^{-\\gamma}$: the system's response to a small field blows up.",
    ],
)

DATA["11_landau-theory-of-phase-transitions.md"] = (
    [
        "Write Landau's free energy for a ferromagnet and identify the order parameter.",
        "State the zero-field solutions of the theory above and below $T_c$.",
        "What is the temperature dependence of the spontaneous magnetisation, and which exponent does it give?",
        "Compute the susceptibility above $T_c$ and its divergence.",
        "What does Landau theory predict for the specific heat at $T_c$?",
        "Which symmetry is broken at the transition, and what does 'spontaneously' mean here?",
        "Why does Landau theory fail near $T_c$, and which framework repairs it?",
        "Give an everyday example of spontaneous symmetry breaking in a ferromagnet.",
    ],
    [
        "$F = F_0 + a(T - T_c) M^2 + b M^4$ (plus $-HM$ with a field): the order parameter is the magnetisation $M$, the macroscopic quantity that is zero in the disordered phase and nonzero below $T_c$.",
        "Above $T_c$ ($a > 0$) the unique minimum is $M = 0$. Below $T_c$ ($a < 0$) $M = 0$ turns into a maximum and two minima appear at $M = \\pm \\sqrt{a_0 (T_c - T)/b}$.",
        "$M \\propto (T_c - T)^{1/2}$: the mean-field exponent $\\beta = 1/2$.",
        "Minimising with field gives $2 a (T - T_c) M - H = 0$, so $\\chi = 1/(2 a (T - T_c))$: divergence with mean-field exponent $\\gamma = 1$.",
        "A finite jump at $T_c$ (a second-order transition in the Ehrenfest sense), because $M^2 \\propto T_c - T$ enters the free energy linearly: Landau theory predicts no divergence, while real systems (the lambda transition) diverge.",
        "The flip symmetry $M \\to -M$ of the free energy: below $T_c$ the system must settle into one of the two minima, and which one it picks is decided by infinitesimal causes, not by the Hamiltonian, which treats both alike.",
        "It neglects fluctuations, which grow without bound as $T \\to T_c$ and invalidate the analytic expansion: the renormalisation group resums them and yields the true exponents.",
        "A bar of iron cooled below its Curie point with no external field magnetises itself: the choice of north pole is spontaneous, an accident of thermal noise frozen in.",
    ],
)

for fname, (qs, ans) in DATA.items():
    add(fname, qs, ans)
