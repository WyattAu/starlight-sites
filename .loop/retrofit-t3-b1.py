"""Topic 3 batch 1: retrofit 1_maxwell, 2_electrostatics, 3_magnetostatics.

Per file: damage repair, history, 2 ponders, and a question-standard
v1.1.0 QC ladder (8 items, deliverable verbs, concrete data, trap,
slope, argument answers, verification hooks).
Run from repo root: python3 .loop/retrofit-t3-b1.py
"""
from pathlib import Path

D = Path("sites/physics/src/content/docs/3-electromagnetism")


def repair(t):
    t = t.replace(r"\frac{Q_{\mathrm{enc}}{\varepsilon_0}", r"\frac{Q_{\mathrm{enc}}}{\varepsilon_0}")
    t = t.replace(r"I_{\mathrm{enc} +", r"I_{\mathrm{enc}} +")
    t = t.replace(r'\hat{\mathbf{r}"}"', r"\hat{\mathbf{r}}")
    t = t.replace(r'\mathbf{r"}', r"\mathbf{r}")

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

    for i, l in enumerate(t.split("\n")):
        b = bal(l)
        if b != 0 and ("\\frac" in l or "\\mathbf" in l):
            print(f"  [balance {b:+d}] {l[:90]}")
    return t


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


# ================= 1_maxwell-s-equations =================

def jobs1(t):
    t = insert_hist(t, "### 1.1 The Four Equations",
        "James Clerk Maxwell published twenty equations",
        "**History.** James Clerk Maxwell published twenty component equations in *A Dynamical Theory of the Electromagnetic Field* (1865); Oliver Heaviside condensed them into the four vector form used here in 1884. The one term Maxwell added with no experimental prompt was the displacement current $\\mu_0\\varepsilon_0 \\partial\\mathbf{E}/\\partial t$: he needed it to reconcile Ampere's law with charge conservation, and it promptly predicted waves travelling at $1/\\sqrt{\\mu_0\\varepsilon_0}$, the measured speed of light. Heinrich Hertz's 1887 experiments produced and detected those waves, and Maxwell's theory became the first great unification in physics.")
    t = insert_ponder(t, "### 1.3 Continuity Equation",
        "Ponder (attempt the contradiction).",
        "A capacitor is being charged. Apply Ampere's original law $\\nabla \\times \\mathbf{B} = \\mu_0 \\mathbf{J}$ to two surfaces sharing one loop: a surface cut by the wire, and a surface passing between the plates. Attempt the two computations and confront the contradiction; then invent the repair.",
        "The wire surface gives $\\oint \\mathbf{B} \\cdot d\\mathbf{l} = \\mu_0 I$; the gap surface sees no conduction current and gives zero: one loop, two answers. The repair must add a term that equals $I$ through the gap: $\\mu_0 \\varepsilon_0 \\partial \\Phi_E/\\partial t$ works, because between the plates $\\Phi_E$ tracks the accumulated charge. The continuity equation is the statement that this repair is not optional: it is the price of charge conservation.")
    t = insert_ponder(t, "### 1.5 Worked Example: Deriving the Electromagnetic Wave Equation",
        "Ponder (attempt the unification).",
        "Take the source-free equations and attempt to eliminate $\\mathbf{B}$ entirely: curl Faraday's law, substitute Ampere-Maxwell. What equation must $\\mathbf{E}$ obey, and what happens when the measured constants $\\mu_0$ and $\\varepsilon_0$ are inserted into the wave speed?",
        "Curl Faraday: $\\nabla \\times (\\nabla \\times \\mathbf{E}) = -\\partial_t (\\nabla \\times \\mathbf{B}) = -\\mu_0\\varepsilon_0 \\partial_t^2 \\mathbf{E}$; with $\\nabla \\cdot \\mathbf{E} = 0$ the left side is $-\\nabla^2 \\mathbf{E}$: a wave equation at speed $1/\\sqrt{\\mu_0\\varepsilon_0} \\approx 3 \\times 10^8$ m/s. Maxwell inserted the constants from laboratory electricity and got the speed of light: 'we can scarcely avoid the inference that light consists in the transverse undulations of the same medium' (1865).")
    t = insert_qc(t,
    [
        "(E) For an infinite line charge of density $\\lambda$, the field is $\\mathbf{E} = \\frac{\\lambda}{2\\pi\\varepsilon_0 r}\\hat{\\mathbf{r}}$. Compute $\\nabla \\cdot \\mathbf{E}$ for $r > 0$, then use the divergence theorem on a coaxial cylinder of length $L$ to show the axis carries exactly $\\lambda L$ of charge.",
        "(E) Derive the normal boundary condition $\\hat{\\mathbf{n}} \\cdot (\\mathbf{E}_2 - \\mathbf{E}_1) = \\sigma/\\varepsilon_0$ from Gauss's law with a pillbox of vanishing height straddling a surface charge $\\sigma$, and state what it gives at a conductor's surface.",
        "(M) A uniform field $B_0$ through a loop of radius $a$ and resistance $R$ is driven to zero in time $\\tau$. Compute the induced EMF and current, give the induced field's direction, and check the sign against Lenz's law.",
        "(M) Decide in which cases Gauss's law alone determines $\\mathbf{E}$ everywhere: (i) an infinite charged plane, (ii) a finite charged disk, (iii) a uniformly charged sphere, (iv) a dipole. State the criterion behind your decisions.",
        "(M) Trap: a student says 'the displacement current between a capacitor's plates is real charge flowing through the gap.' Decide whether this is right, and identify what the displacement term actually is.",
        "(H) Derive $\\nabla^2 \\mathbf{E} = \\mu_0\\varepsilon_0 \\partial^2 \\mathbf{E}/\\partial t^2$ from the source-free equations in two moves (curl Faraday, substitute Ampere-Maxwell), then compute the wave speed from $\\mu_0 = 4\\pi \\times 10^{-7}$ and $\\varepsilon_0 = 8.85 \\times 10^{-12}$.",
        "(M) Use Ampere's law on a rectangular loop straddling a solenoid wall to show $B_{\\text{in}} - B_{\\text{out}} = \\mu_0 n I$, and explain why the outside field vanishes in the long-solenoid limit.",
        "(H) Take the divergence of the Ampere-Maxwell law, substitute Gauss's law, and derive $\\nabla \\cdot \\mathbf{J} + \\partial \\rho/\\partial t = 0$. Then show the pre-Maxwell law $\\nabla \\times \\mathbf{B} = \\mu_0 \\mathbf{J}$ contradicts this whenever $\\partial \\rho/\\partial t \\ne 0$.",
    ],
    [
        "The divergence is $(1/r)\\,\\partial(r E_r)/\\partial r = 0$ away from the axis; the flux through the cylinder is $E_r \\times 2\\pi r L = \\lambda L/\\varepsilon_0$, so the enclosed charge is $\\lambda L$: the entire charge sits on the singular axis, which is the verification hook for the field's $1/r$ form.",
        "Pillbox flux is $(E_{2n} - E_{1n})A$ as the height shrinks (side flux vanishes), equal to $\\sigma A/\\varepsilon_0$: the jump condition. At a conductor $\\mathbf{E}_1 = 0$ inside, so $E_{\\text{out},n} = \\sigma/\\varepsilon_0$.",
        "$\\text{EMF} = \\pi a^2 B_0/\\tau$ (Faraday: flux change over time), $I = \\pi a^2 B_0/(\\tau R)$. The induced field points in the original direction, propping up the dying flux: opposing the change, exactly Lenz's sign.",
        "(i) and (iii) yes, (ii) and (iv) no. Criterion: $\\mathbf{E}$'s direction and magnitude must be constant on a closed surface so $E$ can be pulled from the integral; the disk's off-axis field and the dipole's angular structure defeat that.",
        "No charge crosses the gap: $\\mu_0 \\varepsilon_0 \\partial \\mathbf{E}/\\partial t$ is a time-varying field term that mimics a current's field-generation effects on every loop, which is why Maxwell's name for it has misled generations. The physical account is stored field energy, not transported charge.",
        "$\\nabla \\times (\\nabla \\times \\mathbf{E}) = -\\partial_t (\\nabla \\times \\mathbf{B}) = -\\mu_0\\varepsilon_0 \\partial_t^2 \\mathbf{E}$, and $\\nabla \\cdot \\mathbf{E} = 0$ reduces the left side to $-\\nabla^2 \\mathbf{E}$. Speed $c = 1/\\sqrt{\\mu_0 \\varepsilon_0} = 1/\\sqrt{4\\pi \\times 8.85 \\times 10^{-19}} \\approx 3.0 \\times 10^8$ m/s: the measured speed of light, the verification hook.",
        "The loop encloses $nL$ turns and sees flux only where it pierces the wall: $B_{\\text{in}} - B_{\\text{out}} = \\mu_0 n I$. As the solenoid length grows, the return flux spreads over infinite area outside, so $B_{\\text{out}} \\to 0$ and the whole jump drops inside.",
        "Div curl is identically zero, so $0 = \\mu_0 \\nabla \\cdot \\mathbf{J} + \\mu_0 \\varepsilon_0 \\partial_t (\\nabla \\cdot \\mathbf{E}) = \\mu_0 (\\nabla \\cdot \\mathbf{J} + \\partial \\rho/\\partial t)$. Without the displacement term the law demands $\\nabla \\cdot \\mathbf{J} = 0$ always: charge could never accumulate anywhere, and the charging capacitor could not exist.",
    ])
    return t


# ================= 2_electrostatics =================

def jobs2(t):
    t = insert_hist(t, "### 2.1 Coulomb's Law and the Electric Field",
        "George Green's 1828 Essay",
        "**History.** The tools of this chapter have a tangled provenance. George Green's 1828 *Essay* introduced the potential and the identities bearing his name, self-published for a miller's clientele and forgotten until William Thomson (Kelvin) unearthed it around 1845. Thomson's method of images followed in 1848, extracting exact conducting-sphere results from mirror charges with an elegance Maxwell admired. The word dielectric, and the first experiments on polarisable media, are Faraday's (1837); the multipole expansion descends from Laplace and Legendre in the 1780s.")
    t = insert_ponder(t, "### 2.7 The Uniqueness Theorem",
        "Ponder (attempt the licence).",
        "The method of images solves a hard conductor problem by pretending the conductor is not there. Attempt to invent the theorem that licenses the fraud: what must be pinned on the boundary, and why does pinning it force exactly one interior field? Sketch the three-line proof before reading the resolution.",
        "Pin $V$ (Dirichlet) on the closed boundary: if $V_1$ and $V_2$ both solved it, $U = V_1 - V_2$ is harmonic with $U = 0$ on the boundary. Green's first identity gives $\\int |\\nabla U|^2 dV = \\oint U (\\partial U/\\partial n) dA = 0$, so $\\nabla U = 0$ everywhere: $U$ is constant, and zero on the boundary makes it zero. Uniqueness is the licence: the image solution satisfies the same boundary data, so it is the truth.")
    t = insert_ponder(t, "### 2.8 Method of Images",
        "Ponder (attempt the construction).",
        "A charge $q$ sits a distance $d$ above a grounded infinite plane. Attempt to invent the image configuration that forces $V = 0$ on the plane: what sign, what position, and why does that combination cancel there? Then attempt the bookkeeping: what is the total induced surface charge?",
        "An image $-q$ at the mirror point $z = -d$: on the plane every point is equidistant from the pair, so the two potentials cancel identically. Integrating the induced $\\sigma$ over the plane gives $-q$: the conductor's electrons have rearranged to hide the charge's flux, and the attraction the charge feels is exactly the Coulomb force toward the image, $F = -q^2 \\hat{\\mathbf{z}}/(4\\pi\\varepsilon_0 (2d)^2)$.")
    t = insert_qc(t,
    [
        "(E) A charge $q = 1\\,\\mu\\text{C}$ sits $d = 5\\,\\text{cm}$ above a grounded conducting plane. Compute the force on the charge via the method of images, and state its direction.",
        "(M) Derive Poisson's equation $\\nabla^2 V = -\\rho/\\varepsilon_0$ in two moves from $\\mathbf{E} = -\\nabla V$ and Gauss's law, and state what the equation becomes in charge-free regions.",
        "(M) A coaxial cable has inner radius $a$, outer radius $b$, charge $\\lambda$ per length. Compute $E(r)$ by Gauss's law, integrate to get $V(a) - V(b)$, and derive the capacitance per length $C/L = 2\\pi\\varepsilon_0/\\ln(b/a)$.",
        "(M) Classify boundary-value problems: which data determine a unique solution (fixed $V$, fixed $\\partial V/\\partial n$, both)? When does the Neumann problem have a solution at all, and what freedom remains in it?",
        "(M) Trap: a student computes the field inside the metal of the grounded plane using the image charge. Decide what went wrong, and state where the image method is valid and what the physical charge distribution inside the conductor is.",
        "(H) Prove the Dirichlet uniqueness theorem in three lines with Green's first identity: assume two solutions, form $U = V_1 - V_2$, and conclude $U \\equiv 0$.",
        "(M) At a dielectric interface with no free surface charge, derive the condition on $\\mathbf{D}$'s normal component and on $\\mathbf{E}$'s tangential component, and identify which bound quantity breaks the continuity of $\\mathbf{E}_n$.",
        "(H) A neutral atom has dipole moment $p = 10^{-30}\\,\\text{C}\\cdot\\text{m}$. Show that its far-field potential leads with the $1/r^3$ dipole term rather than $1/r^2$, and compute $E$ at $r = 1\\,\\text{nm}$.",
    ],
    [
        "The image $-q$ sits $5\\,\\text{cm}$ below the plane; the force is the Coulomb attraction across $2d = 10\\,\\text{cm}$: $F = q^2/(4\\pi\\varepsilon_0 (2d)^2) = 8.99 \\times 10^9 \\times 10^{-12}/10^{-2} \\approx 0.90\\,\\text{N}$ toward the plane. Verification: halving $d$ quadruples $F$.",
        "$\\nabla \\cdot \\mathbf{E} = -\\nabla^2 V$ from the gradient, and Gauss gives $\\nabla \\cdot \\mathbf{E} = \\rho/\\varepsilon_0$: $\\nabla^2 V = -\\rho/\\varepsilon_0$. Where $\\rho = 0$ it is Laplace's equation $\\nabla^2 V = 0$, the workhorse of conductor problems.",
        "Gauss on a coaxial cylinder gives $E(r) = \\lambda/(2\\pi \\varepsilon_0 r)$ for $a < r < b$; then $V(a) - V(b) = \\int_a^b E\\,dr = (\\lambda/2\\pi\\varepsilon_0) \\ln(b/a)$, so $C/L = \\lambda/\\Delta V = 2\\pi\\varepsilon_0/\\ln(b/a)$: check the limit $b \\to a$, where $C$ diverges as the gap closes.",
        "Fixed $V$ on the whole boundary (Dirichlet): unique. Fixed $\\partial V/\\partial n$ (Neumann): unique up to an additive constant, and solvable only if compatible: the total outward flux must equal $-\\int \\rho\\,dV/\\varepsilon_0$. Mixed problems need $V$ on enough of the boundary to kill the constant.",
        "The image charge lives only in the field region ($z > 0$); inside the metal $\\mathbf{E} = 0$ and the image is bookkeeping, not charge. The physical substitute is the induced surface charge $\\sigma(r) = -qd/(2\\pi (r^2 + d^2)^{3/2})$, totalling $-q$ and peaked directly below the charge.",
        "$\\nabla^2 U = 0$ in the volume, $U = 0$ on the boundary; Green's first identity gives $\\int_{\\mathcal{V}} |\\nabla U|^2\\, dV = \\oint_{\\mathcal{S}} U (\\partial U/\\partial n)\\, dA = 0$. The integrand is nonnegative, so $\\nabla U \\equiv 0$: $U$ is constant, and the zero boundary value fixes the constant at zero.",
        "Gauss for $\\mathbf{D}$ with $\\rho_f = 0$ gives $D_{2n} = D_{1n}$ (normal continuity of $\\mathbf{D}$); Faraday's static law $\\oint \\mathbf{E} \\cdot d\\mathbf{l} = 0$ on a vanishing loop gives $E_{2t} = E_{1t}$. The jump in $E_n$ comes from the bound surface charge $\\sigma_b = \\mathbf{P} \\cdot \\hat{\\mathbf{n}}$.",
        "The monopole term scales as $Q_{\\text{enc}}/r^2$ and dies because the atom is neutral: the first nonzero moment is the dipole, $V \\approx p\\cos\\theta/(4\\pi\\varepsilon_0 r^2)$, so $E \\approx p/(4\\pi\\varepsilon_0 r^3) = 8.99 \\times 10^9 \\times 10^{-30}/10^{-27} \\approx 9 \\times 10^6$ N/C at 1 nm, falling as $1/r^3$: the verification hook is the exponent, not the number.",
    ])
    return t


# ================= 3_magnetostatics =================

def jobs3(t):
    t = insert_hist(t, "### 3.1 The Biot-Savart Law",
        "Hans Christian Orsted's April 1820 lecture demonstration",
        "**History.** Hans Christian Orsted's April 1820 lecture demonstration (a compass needle twitching near a live wire) reached Paris within months, and Jean-Baptiste Biot with the young Felix Savart had measured the field's $1/r$ law by October, using a torsion balance, with Laplace reducing their data to the element formula this section states. Andre-Marie Ampere, working from Orsted's news, built the full mathematical theory of current-on-current forces by 1827, a speed of composition that earned him the title 'the Newton of electricity'. The vector potential entered later, through Kelvin (1847) and Maxwell, as the mathematical object this chapter's second half develops.")
    t = insert_ponder(t, "### 3.2 Ampere's Law",
        "Ponder (attempt the shape).",
        "You are Orsted's Parisian colleagues in 1820: a compass needle near a straight wire settles perpendicular to it, circling as the current grows. Attempt to derive the field's radial dependence from symmetry alone, before any measurement: which symmetry survives, and what does an Amperian circle then force?",
        "An infinite straight current is invariant under translations along the wire and rotations about it: $\\mathbf{B}$ can depend only on $r$ and must be azimuthal ($\\hat{\\boldsymbol{\\phi}}$). On a circle of radius $r$, $B$ is constant and tangential, so Ampere's law forces $B \\cdot 2\\pi r = \\mu_0 I$: the $1/r$ law followed from symmetry in 1820 before Biot and Savart's instruments confirmed it.")
    t = insert_ponder(t, "### 3.3 Magnetic Vector Potential",
        "Ponder (attempt the representation).",
        "The condition $\\nabla \\cdot \\mathbf{B} = 0$ looks like a constraint to fight. Attempt instead to exploit it: what does a vanishing divergence suggest about representing $\\mathbf{B}$ as a derivative of something else, and what freedom is left in that something? Why is $\\mathbf{A}$ called less physical than $\\mathbf{B}$?",
        "A divergence-free field is (in ordinary domains) the curl of something: $\\mathbf{B} = \\nabla \\times \\mathbf{A}$, since $\\nabla \\cdot (\\nabla \\times \\mathbf{A}) \\equiv 0$. The representation is not unique: $\\mathbf{A} \\to \\mathbf{A} + \\nabla \\chi$ leaves $\\mathbf{B}$ untouched (curl of a gradient is zero), the gauge freedom. $\\mathbf{B}$ is what forces measure; $\\mathbf{A}$ is convention plus boundary data, at least classically, and the gauge choice (for instance $\\nabla \\cdot \\mathbf{A} = 0$) is exactly the freedom the derivations below will spend.")
    t = insert_qc(t,
    [
        "(E) A long solenoid has $n = 1000$ turns per metre carrying $I = 2\\,\\text{A}$. Choose the Amperian loop that isolates the interior field, and compute $B$ inside in millitesla.",
        "(M) Derive $B = \\mu_0 I/(2\\pi r)$ for an infinite wire by integrating the Biot-Savart law, using $\\int_{-\\infty}^{\\infty} a\\, dz/(a^2 + z^2)^{3/2} = 2/a$ with $a = r$.",
        "(M) Given the wire's vector potential in Coulomb gauge, $A_z = -(\\mu_0 I/2\\pi)\\ln(r/r_0)$, compute $\\mathbf{B} = \\nabla \\times \\mathbf{A}$ and recover the $1/r$ field; then explain why the constant $r_0$ inside the logarithm is unobservable.",
        "(M) Decide which distributions an Ampere-loop solution can handle and which force Biot-Savart: an infinite wire, an infinite sheet of current, a finite-length solenoid, a toroid. State the criterion.",
        "(M) Trap: 'inside iron, use $\\mathbf{H}$ in the force law $q\\mathbf{v} \\times \\mathbf{H}$, since $\\mathbf{H}$ is the field in matter.' Decide whether this is right, and state which field the Lorentz force always uses and why.",
        "(H) Show that $\\mathbf{B} = \\nabla \\times \\mathbf{A}$ makes $\\nabla \\cdot \\mathbf{B} = 0$ automatic, then substitute into Ampere's law and use the Coulomb gauge to derive the vector Poisson equation $\\nabla^2 \\mathbf{A} = -\\mu_0 \\mathbf{J}$.",
        "(M) A cylinder of radius $R$ carries uniform magnetisation $M\\hat{\\mathbf{z}}$. Compute the bound surface current from $\\mathbf{K}_b = \\mathbf{M} \\times \\hat{\\mathbf{n}}$, and name the familiar device it makes the magnet equivalent to.",
        "(H) A loop of radius $a$ carries $I$. Show that on-axis, for $z \\gg a$, $B \\approx \\mu_0 m/(2\\pi z^3)$ with $m = I\\pi a^2$, and compare the falloff with an electric dipole's field: what does this exponent pair promise for Chapter 5's waves?",
    ],
    [
        "A rectangular loop with one long side deep inside and one far outside: the outside leg contributes nothing in the ideal limit and the short sides are perpendicular to $\\mathbf{B}$, so $B L = \\mu_0 n L I$ gives $B = \\mu_0 n I = 4\\pi \\times 10^{-7} \\times 2000 \\approx 2.5\\,\\text{mT}$.",
        "An element $dz$ at distance $\\sqrt{a^2 + z^2}$ contributes $dB = (\\mu_0 I/4\\pi)\\, a\\, dz/(a^2 + z^2)^{3/2}$ (the cross product kills the $z$-components by symmetry); integrating along the wire gives $B = (\\mu_0 I/4\\pi)(2/a) = \\mu_0 I/(2\\pi a)$ with $a = r$: Ampere's law verified element by element.",
        "In cylindrical coordinates $B_\\phi = -\\partial A_z/\\partial r = \\mu_0 I/(2\\pi r)\\hat{\\boldsymbol{\\phi}}$: recovered. The constant $r_0$ shifts $A_z$ by an additive constant, a gradient of a linear function in $z$, whose curl is zero: a gauge artefact, invisible to every force measurement.",
        "The loop method needs the symmetry to fix $\\mathbf{B}$'s direction and make its magnitude constant on a loop: wire and sheet yes, toroid yes (circular loops), finite solenoid no (end effects break the constancy): Biot-Savart by integration, or the boundary conditions of Chapter 4.",
        "The Lorentz force always uses $\\mathbf{B}$, in matter and out: $q\\mathbf{v} \\times \\mathbf{B}$ is the microscopic law. $\\mathbf{H} = \\mathbf{B}/\\mu_0 - \\mathbf{M}$ is auxiliary bookkeeping whose curl sees only free currents, and in ferromagnets $\\mathbf{B}$ is not even proportional to $\\mathbf{H}$, so substituting $\\mathbf{H}$ into the force law is doubly wrong.",
        "$\\nabla \\cdot (\\nabla \\times \\mathbf{A}) \\equiv 0$: the divergence of a curl is an identity, so the no-monopole condition costs nothing. Then $\\nabla \\times \\mathbf{B} = \\nabla \\times (\\nabla \\times \\mathbf{A}) = \\nabla(\\nabla \\cdot \\mathbf{A}) - \\nabla^2 \\mathbf{A} = \\mu_0 \\mathbf{J}$; the Coulomb gauge $\\nabla \\cdot \\mathbf{A} = 0$ deletes the gradient term, leaving one Poisson equation per component, solved as electrostatics in disguise.",
        "$\\hat{\\mathbf{n}} = \\hat{\\mathbf{r}}$ on the curved surface, so $\\mathbf{K}_b = M\\hat{\\mathbf{z}} \\times \\hat{\\mathbf{r}} = M\\hat{\\boldsymbol{\\phi}}$: a surface current circulating like a solenoid's, of density $K = M$. A long uniformly magnetised cylinder is therefore equivalent to a solenoid with $nI = M$, giving $B \\approx \\mu_0 M$ inside: this is why bar magnets behave like solenoids.",
        "The exact on-axis field $B = \\mu_0 I a^2/(2(a^2 + z^2)^{3/2})$ becomes $\\mu_0 I a^2/(2z^3) = \\mu_0 m/(2\\pi z^3)$ with $m = I\\pi a^2$: the magnetic dipole falls as $1/z^3$, the electric dipole's exponent exactly. The pair's shared structure is what lets one current's field induce EMFs in another loop, and in Chapter 5 the displacement current lets the pair radiate.",
    ])
    return t


apply("1_maxwell-s-equations.md", jobs1)
apply("2_electrostatics.mdx", jobs2)
apply("3_magnetostatics.md", jobs3)
