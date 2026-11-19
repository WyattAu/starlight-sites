#!/usr/bin/env python3
"""Add QC ladders to thermal-physics files 1-5 (retrofit batch)."""
import sys
from pathlib import Path

D = Path(sys.argv[1])

def qc(qs, answers):
    body = "\n".join(f"{i}. {q}" for i, q in enumerate(qs, 1))
    ans = " ".join(f"**{i}.** {a}" for i, a in enumerate(answers, 1))
    block = (f":::note[Quick check]\n\n{body}\n\n<details class=\"wn-spoiler\">\n"
             f"<summary>Answers</summary>\n<div class=\"wn-spoiler-body\">\n\n{ans}\n\n"
             f"</div>\n</details>\n\n:::\n\n")
    idx = t.rfind("## Cross-References")
    if idx > 0:
        return t[:idx] + block + t[idx:]
    return t.rstrip() + "\n\n" + block

DATA = {
"1_the-laws-of-thermodynamics.md": (
 ["State the zeroth law, and what it makes measurable.",
  "Write the first law for dU, naming the sign conventions.",
  "State the second law in the entropy form for an isolated system.",
  "State the third law, and one consequence for heat capacities.",
  "Write the Helmholtz free energy and its differential.",
  "Derive one Maxwell relation from F = U - TS.",
  "Name the scientist who founded the subject before heat was known to be energy.",
  "State Carnot's efficiency bound for an engine between hot and cold reservoirs."],
 ["Two systems in thermal equilibrium with a third are in equilibrium with each other: temperature exists.",
  "dU = T dS - P dV: heat added minus work done.",
  "dS >= 0 for an isolated system: entropy never decreases.",
  "S approaches a constant as T approaches zero; heat capacities vanish there.",
  "F := U - TS; dF = -S dT - P dV.",
  "Commuting mixed partials of F give (partial S / partial V)_T = (partial P / partial T)_V.",
  "Sadi Carnot, 1824: the Reflexions founded thermodynamics before heat was known to be energy.",
  "eta = 1 - T_c / T_h: no engine between those reservoirs does better."]),
"2_statistical-mechanics.md": (
 ["Define microstate versus macrostate.",
  "State the Boltzmann distribution for a subsystem in contact with a heat bath.",
  "Define the partition function and the entropy in terms of it.",
  "State the equipartition theorem, and its per-quadratic-degree energy.",
  "Give the Maxwell-Boltzmann speed distribution's most probable speed.",
  "State the Fermi-Dirac distribution at zero temperature.",
  "State the Bose-Einstein distribution's form.",
  "Name the mathematician-physicists behind the ensembles."],
 ["A microstate is one exact configuration; a macrostate is the set sharing macroscopic values: entropy counts the microstates per macrostate.",
  "P(state) proportional to e^{-E / kT}: the Boltzmann factor.",
  "Z := sum e^{-E / kT}; S = k (ln Z + beta E) at the mean energy.",
  "Each quadratic degree of freedom carries kT / 2 of mean energy.",
  "The Maxwell-Boltzmann peak lands at v_mp = sqrt(2 kT / m).",
  "Step function: all states below the Fermi energy filled, all above empty.",
  "N(E) proportional to 1 / (e^{E / kT} - 1) times the density of states.",
  "Josiah Willard Gibbs systematised the ensembles in 1902; Einstein independently recovered the fluctuation theory in 1902-1903."]),
"3_the-grand-canonical-ensemble.md": (
 ["What does the grand canonical ensemble fix, and what does it let fluctuate?",
  "Write the grand partition function.",
  "State the grand potential's relation to pressure for an ideal gas.",
  "What does the number fluctuation measure, and what does it equal?",
  "Name one physical problem the grand ensemble handles naturally.",
  "How do Fermi-Dirac and Bose-Einstein statistics emerge in the grand formalism?",
  "What is the chemical potential's role in the distribution?",
  "State the adsorption application's reading."],
 ["Temperature and chemical potential (via a reservoir); particle number fluctuates.",
  "Xi := sum_N sum_states e^{-beta (E - mu N)}.",
  "Grand potential Omega = -P V: for an ideal gas, P = kT lambda^{-3} z with z the fugacity.",
  "The compressibility: variance of N over N squared equals kT times the isothermal compressibility.",
  "Adsorption: a surface exchanging particles with a gas, counted by the grand ensemble's occupation numbers.",
  "They are the grand ensemble's mean occupation numbers for fermion and boson single-particle states.",
  "States fill until their single-particle energy reaches mu: occupancy is set by E - mu against kT.",
  "The surface's adsorbed fraction is counted by the same distribution the gas obeys: the grand ensemble gives the isotherm."]),
"4_fermi-gas-at-finite-temperature.md": (
 ["State the Sommerfeld expansion's purpose.",
  "Give copper's Fermi energy order and compare with room-temperature kT.",
  "What fraction of the electron gas is thermally active at room temperature?",
  "Write the electronic heat capacity's leading low-T form.",
  "Why does the Pauli principle freeze most of the electron gas?",
  "State the chemical potential's temperature dependence at low T.",
  "Name the physicist whose 1927 expansion resolved the metals' heat-capacity puzzle.",
  "What is the Fermi temperature for copper, roughly?"],
 ["Correcting the electron gas's heat capacity: expansions in kT / E_F give temperature corrections to Fermi-surface quantities.",
  "About 7 eV against 0.026 eV: three hundred times larger.",
  "The fraction kT / E_F near the Fermi surface: about one part in three hundred.",
  "C_V is approximately gamma T with gamma proportional to n / E_F: linear in temperature.",
  "Filled states below block thermal kicks; only the shell within kT of the surface has empty targets.",
  "mu rises slightly with T, by corrections of order (kT)^2 / E_F: nearly constant at room temperature.",
  "Arnold Sommerfeld, 1927.",
  "E_F / k_B is about 80,000 K for copper: room temperature is deep freeze."]),
"5_bose-einstein-condensation.md": (
 ["What happens below the Bose-Einstein critical temperature?",
  "Write the critical temperature's scaling with density.",
  "State the condensed fraction at temperature T below T_c.",
  "What happens to the condensate fraction at zero temperature?",
  "Name the 1995 experiment and its atom.",
  "Why do photons not undergo Bose-Einstein condensation at ordinary conditions?",
  "What is the Bose gas's chemical potential below T_c?",
  "Name the prediction's year and the predictor who extended Bose's statistics."],
 ["The ground state acquires a macroscopic occupation: the condensate forms.",
  "T_c scales as the density to the two-thirds, times Planck and mass constants.",
  "1 - (T / T_c)^{3/2}: a power-law depletion as T rises.",
  "The fraction reaches one: all particles in the ground state.",
  "Eric Cornell and Carl Wieman's rubidium-87 condensate, with Wolfgang Ketterle's sodium work the same year: the 2001 Nobel Prize.",
  "Photon number is not conserved: the chemical potential sticks at zero, and sunlight's thermal distribution has no critical temperature.",
  "Stuck at the ground-state energy: adding particles all enter the condensate without changing mu.",
  "Bose's 1924 counting and Einstein's 1925 extension: the condensation is Einstein's prediction."]),
}

for F, (qs, ans) in DATA.items():
    p = D / F
    t = p.read_text(encoding="utf-8")
    if ":::note[Quick check]" in t:
        print(F, "already has QC")
        continue
    t = qc(qs, ans)
    p.write_text(t, encoding="utf-8")
    print(F, "QC added")
