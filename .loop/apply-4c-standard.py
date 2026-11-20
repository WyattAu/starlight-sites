"""Apply problem standard 4c: (1) rewrite 6_the-ising-model's QC ladder to
4c grade as the exemplar; (2) repair 9_problem-set's broken math delimiters.

Run from repo root: python3 .loop/apply-4c-standard.py
"""
import re
from pathlib import Path

D = Path("sites/physics/src/content/docs/2-thermal-physics")

# ---------- (1) Ising QC ladder, 4c grade ----------

ISING_QA = [
    (
        "Compute the partition function of a three-spin ring ($J > 0$, $h = 0$, $K = \\beta J$) two ways: once by listing all $2^3 = 8$ configurations, once from $Z = \\lambda_+^3 + \\lambda_-^3$ with $\\lambda_\\pm = e^{K} \\pm e^{-K}$. Show both routes give $Z = 2e^{3K} + 6e^{-K}$, and explain why the $\\lambda_-$ term cannot be dropped at finite $N$.",
        "All-up and all-down each satisfy three bonds and give $e^{3K}$; the six single-flip states each break one bond and give $e^{-K}$. From the eigenvalues, $(a+b)^3 + (a-b)^3 = 2a^3 + 6ab^2 = 2e^{3K} + 6e^{-K}$. The $\\lambda_-$ term is suppressed only by the ratio $(\\tanh K)^N$: at finite $N$ it contributes, and dropping it is a thermodynamic-limit statement, not an identity.",
    ),
    (
        "Using $m = \\partial \\ln \\lambda_+ / \\partial(\\beta h)$ with $\\lambda_+ = e^{\\beta J} \\cosh(\\beta h) + \\sqrt{e^{2\\beta J} \\sinh^2(\\beta h) + e^{-2\\beta J}}$, show that the one-dimensional chain has zero magnetisation at $h = 0$ for every finite temperature. Then find the trap: what happens if you take $\\beta J \\to \\infty$ before $h \\to 0$?",
        "At $h = 0$ the $\\cosh$ derivative vanishes and the $\\sinh^2$ factor kills the square root's derivative, so $\\partial \\lambda_+/\\partial(\\beta h)|_0 = 0$: no spontaneous magnetisation at any finite $T$. The trap is the order of limits: $\\beta J \\to \\infty$ first freezes the chain into magnetised ground states. The 1D transition sits exactly at $T = 0$, so the two limits do not commute.",
    ),
    (
        "Expand $m = \\tanh(\\beta z J m)$ at $h = 0$ to third order in $m$ and show that the nonzero branch obeys $m \\approx \\sqrt{3(T_c - T)/T_c}$ near the transition, where $T_c = zJ/k_B$. Why must the cubic term be kept when it is the smallest term in the expansion?",
        "With $\\tilde K = \\beta z J = T_c/T$: $m \\approx \\tilde K m - \\tilde K^3 m^3/3$, and the nontrivial branch satisfies $m^2 = 3(\\tilde K - 1)/\\tilde K^2 \\to 3(T_c - T)/T_c$: exponent $\\beta = 1/2$. The cubic term decides because at $T_c$ the linear coefficient passes through zero: the leading nonlinearity sets the solution's scale, and truncating earlier destroys the transition.",
    ),
    (
        "Mean field assigns the one-dimensional chain ($z = 2$) a critical temperature $T_c = 2J/k_B$. Decide whether this prediction is inaccurate or qualitatively wrong, and state the lesson about which lattices mean field can be trusted on.",
        "Qualitatively wrong: the exact 1D answer is no transition at any positive temperature, so mean field invents an ordered phase that does not exist. The error shrinks as coordination grows, since each spin's local field is an average over $z$ neighbours with spread $1/\\sqrt{z}$, and mean field's exponents become exact above four dimensions: trust it on high-connectivity lattices, not on chains.",
    ),
    (
        "A student argues: 'the mean-field overestimate on the square lattice ($4J$ against Onsager's $2.269J$) is an artefact of the crude decoupling, so a better trial ansatz should reproduce the exact exponents.' Decide whether refining the ansatz can fix the exponents, and identify the flawed step.",
        "It cannot. The error is structural, not quantitative: below the upper critical dimension every single-site decoupling misses the critical fluctuations, so refining the ansatz moves amplitudes and $T_c$ while the exponents stay mean field's. The flawed step is treating the exponent mismatch as the same kind of error as the $T_c$ overestimate: exponents are universal, and mean field's are correct only for $d > 4$.",
    ),
    (
        "Prove that $m = \\tanh(\\beta z J m)$ at $h = 0$ has a nonzero solution if and only if $\\beta z J > 1$: use $\\tanh x < x$ for $x > 0$ for one direction, and strict concavity of $g(m) = \\tanh(\\beta z J m) - m$ on $m > 0$ for the other.",
        "If $\\beta z J \\le 1$: $\\tanh(\\beta z J m) \\le \\beta z J m \\le m$ with equality only at $m = 0$, so no other root exists. If $\\beta z J > 1$: $g(0) = 0$, $g'(0) = \\beta z J - 1 > 0$, and $g''(m) = -2(\\beta z J)^2 \\mathrm{sech}^2(\\beta z J m) \\tanh(\\beta z J m) < 0$ on $m > 0$, so the strictly concave $g$ rises above zero once and, since $g(1^-) = \\tanh(\\beta z J) - 1 < 0$, crosses back exactly once: the odd map gives the partner root $-m_*$.",
    ),
    (
        "At $h = 0$ the eigenvalue ratio is $\\lambda_-/\\lambda_+ = \\tanh(\\beta J)$. Compute the relative error made by dropping $\\lambda_-^N$ at $K = 1$, $N = 100$, and then show where in temperature the 1D transition was hiding all along.",
        "$(\\tanh 1)^{100} \\approx 1.4 \\times 10^{-12}$: the correction dies exponentially in $N$ for every finite temperature. But $\\tanh K \\to 1$ as $K \\to \\infty$, so the eigenvalues become degenerate exactly at $T = 0$: the level crossing that in two dimensions happens at finite $T_c$ is pushed to the boundary $T = 0$ in one dimension.",
    ),
    (
        "Linearise the self-consistency with a small field, $m = \\tanh[\\beta(zJm + h)]$, to derive the mean-field susceptibility above $T_c$. Then check the scaling relation $2\\beta + \\gamma = 2$ for both the mean-field exponents and Onsager's exact pair $\\beta = 1/8$, $\\gamma = 7/4$. What does the relation fix, and what does it leave open?",
        "Linearising gives $m(1 - \\beta z J) = \\beta h$, so $\\chi = \\partial m/\\partial h = 1/[k_B(T - T_c)]$: divergence with $\\gamma = 1$. The relation holds for both pairs: $2(1/2) + 1 = 2$ and $2(1/8) + 7/4 = 2$. It constrains but does not determine: the exponents themselves are set by dimension and symmetry, which is the question the renormalisation group answers.",
    ),
]


def ising_block():
    body = "\n".join(f"{i}. {q}" for i, (q, a) in enumerate(ISING_QA, 1))
    ans = " ".join(f"**{i}.** {a}" for i, (q, a) in enumerate(ISING_QA, 1))
    return (
        ":::note[Quick check]\n\n" + body + "\n\n"
        '<details class="wn-spoiler">\n<summary>Answers</summary>\n'
        '<div class="wn-spoiler-body">\n\n' + ans + "\n\n</div>\n</details>\n\n:::\n\n"
    )


p = D / "6_the-ising-model.md"
t = p.read_text(encoding="utf-8")
new_t, n = re.subn(r":::note\[Quick check\].*?:::\n\n", lambda m: ising_block(), t, count=1, flags=re.DOTALL)
assert n == 1, "ising QC block not found"
p.write_text(new_t, encoding="utf-8")
print("6_the-ising-model: QC ladder rewritten to 4c grade")

# ---------- (2) 9_problem-set broken math repair ----------

p = D / "9_problem-set.md"
t = p.read_text(encoding="utf-8")
lines = t.split("\n")
fixed = 0
for i, s in enumerate(lines):
    s = s.rstrip()
    if not s:
        continue
    bare = (
        "$" not in s
        and ("\\frac" in s or s.startswith("\\varepsilon") or s.startswith("C_V("))
        and len(s) < 220
    )
    if bare:
        lines[i] = f"${s}$"
        fixed += 1
        continue
    if s.startswith("$") and s.endswith("$$") and len(s) > 3:
        lines[i] = f"${s[1:-2]}$"
        fixed += 1
        continue
    if s.startswith("$") and s.count("$") == 1:
        lines[i] = f"{s}$"
        fixed += 1
p.write_text("\n".join(lines), encoding="utf-8")
print(f"9_problem-set: repaired {fixed} broken math lines")
