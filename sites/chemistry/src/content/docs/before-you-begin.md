---
date: 2026-10-18T00:00:00+01:00
title: "Before You Begin: The Chemistry Your School Course Skipped"
tags:
  - Chemistry
description: "The transition into university chemistry: moles and stoichiometry done rigorously, electron configuration, why bonding models are models, equilibrium algebra, and the logarithms pH needs -- every term defined before use and every rule proved."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "chemistry", "url": "https://chemistry.wyattau.com"}, {"name": "chemistry", "url": "https://chemistry.wyattau.com/chemistry/before-you-begin"}]
}
</script>

School chemistry teaches models as if they were facts. Lewis structures, VSEPR
shapes, and the octet rule are *useful approximations* with domains of validity —
and university chemistry begins by saying which approximation fails where and
why. The transition needs three things: the arithmetic of the mole done without
formula-sheet panic, enough quantum language to know what an orbital *is*, and
the algebra of equilibria, which is logarithms and simultaneous equations.

This page rebuilds those, defining every term before use and proving every rule
that can be proved. Take the self-test in §5; study what surprises you.

## Intuition

Chemistry is counting and energy. Counting: reactions happen in whole numbers of
particles, and the mole is the exchange rate between the counting world and the
weighing world. Energy: every reaction, phase change and bond is an energy
ledger, and equilibrium is where the ledger's bookkeeping — entropy, not order —
balances. School chemistry states the ledger's conclusions; university chemistry
derives them, which requires the logarithm and the exponential to be friends of
yours rather than buttons on a calculator.

## 1. The mole, rigorously

**Definition.** A **mole** of entities is $N_A = 6.02214076 \times 10^{23}$
entities — a fixed count, exactly as a "dozen" is twelve.

**Definition.** The **molar mass** $M$ of a substance is the mass of one mole of
its entities, in $\mathrm{g\,mol^{-1}}$. For an element, $M$ equals its relative
atomic mass numerically.

**Why the mole works.** Atoms combine in small whole-number ratios because
reactions conserve atoms. So a balanced equation is a *counting statement*:
$2\mathrm{H_2} + \mathrm{O_2} \to 2\mathrm{H_2O}$ says 2 molecules react with 1.
Multiplying the count by $N_A$ converts to moles; multiplying moles by $M$
converts to grams. The chain is

$$
\text{mass} \xrightarrow{\;\div M\;} \text{moles} \xrightarrow{\;\times N_A\;} \text{particles},
$$

and every stoichiometry problem is a walk along this chain with a ratio from the
balanced equation in the middle.

*Worked example.* What mass of $\mathrm{CO_2}$ forms from $24.0\,\mathrm{g}$ of
carbon? $n(\mathrm{C}) = 24.0/12.0 = 2.00\,\mathrm{mol}$; the ratio C : CO₂ is
$1 : 1$, so $n(\mathrm{CO_2}) = 2.00\,\mathrm{mol}$; mass $= 2.00 \times 44.0 = 88.0\,\mathrm{g}$.

**Concentration.** $c = n/V$ in $\mathrm{mol\,dm^{-3}}$ (school: "molarity").
Dilution conserves moles: $c_1V_1 = c_2V_2$ — proved because $n = cV$ is the
same $n$ before and after adding solvent.

## 2. Electrons, orbitals, and what a model is

**Definition.** An **atomic orbital** is a mathematical function $\psi$ whose
square $|\psi|^2$ gives the probability density of finding an electron at a
point. It is *not* a path.

This is where school and university part company. The school orbit — electrons
in shells circling a nucleus — is wrong in a way that matters: an electron has no
trajectory, and the orbital is a standing wave of probability. The "shells" are
energy levels; the "subshells" $s, p, d$ are shapes of $|\psi|^2$; occupancy
follows the Pauli exclusion principle (two electrons per orbital, opposite
spins) and the Aufbau ordering by energy.

**Why models are models.** Lewis structures assign bonding to shared pairs and
work well for main-group chemistry. They fail for electron-deficient species
($\mathrm{BF_3}$), for odd-electron species ($\mathrm{NO}$), and for anything
where delocalisation matters (benzene). University chemistry keeps the model and
states its domain — and when a model fails, that failure is *data about the
system*, which is exactly the reasoning the mechanism sections of the tracks use.

## 3. Equilibrium algebra

**Definition.** For a reversible reaction at equilibrium,
$a\mathrm{A} + b\mathrm{B} \rightleftharpoons c\mathrm{C} + d\mathrm{D}$, the
**equilibrium constant** is

$$
K_c = \frac{[\mathrm{C}]^c[\mathrm{D}]^d}{[\mathrm{A}]^a[\mathrm{B}]^b},
$$

with $[\,]$ denoting equilibrium concentration. Only temperature changes $K_c$.

**The algebra you need.** Every equilibrium problem ends in a quadratic or a
logarithm. Two examples of the entire technique:

*Weak acid.* For $\mathrm{HA} \rightleftharpoons \mathrm{H^+} + \mathrm{A^-}$
with $K_a$ and initial concentration $C$: the ICE table gives
$K_a = \frac{x^2}{C - x}$. When $K_a \ll C^2$... more precisely when
$x \ll C$, the approximation $C - x \approx C$ gives
$x = \sqrt{K_a C}$ — and the approximation is *self-checking*: compute $x/C$; if
it exceeds about $5\%$, solve the quadratic instead. Knowing when an
approximation is licensed is the skill.

*pH.* $\mathrm{pH} = -\log_{10}[\mathrm{H^+}]$, so $[\mathrm{H^+}] = 10^{-\mathrm{pH}}$ — a definition, not a formula to derive. For a weak acid,
$\mathrm{pH} = \tfrac12(\mathrm{p}K_a - \log C)$, obtained by taking $-\log$ of
$x = \sqrt{K_aC}$. Logs convert the multiplication in $K_a$ into the addition in
pH, which is why every equilibrium graph in the subject is drawn on log axes.

**Hess's law and energies.** Enthalpy is a state function, so any route between
the same states gives the same $\Delta H$ — that is *why* Hess cycles work, and
it is proved by the definition of a state function rather than by experiment.

## 4. Notation and unit discipline

- Units multiply and cancel like algebra. $\mathrm{mol\,dm^{-3}} \times \mathrm{dm^3} = \mathrm{mol}$. Writing units at every line is how errors are
  caught.
- Significant figures: a computed answer carries no more than the least precise
  input. Reporting $0.0666667\,\mathrm{M}$ from data good to two figures is a
  claim the data does not support.
- Ions carry charge as superscripts; states as subscripts
  $(s), (l), (g), (aq)$. A balanced equation conserves both atoms and charge —
  check both.

## 5. Self-test

1. How many oxygen atoms are in $0.25\,\mathrm{mol}$ of
   $\mathrm{Al_2(SO_4)_3}$? (§1)
2. $25.0\,\mathrm{cm^3}$ of $0.100\,\mathrm{M\,NaOH}$ neutralises
   $20.0\,\mathrm{cm^3}$ of HCl. Find $c(\mathrm{HCl})$. (§1, §3)
3. Why is the Lewis model of bonding wrong for benzene, and what replaces it?
   (§2)
4. A $0.10\,\mathrm{M}$ solution of a weak acid has $\mathrm{pH} = 2.87$. Find
   $K_a$, stating the approximation you made. (§3)
5. Why does $\mathrm{pH} = -\log_{10}[\mathrm{H^+}]$ turn a product into a sum?
   (§3)

**Answers.**
(1) $0.25 \times 12 \times N_A = 1.8 \times 10^{24}$ atoms ($3$ oxygens per
formula unit $\times\, 4$ oxygens in each sulfate).
(2) $c_1V_1 = c_2V_2$: $0.100 \times 25.0 = c \times 20.0$, so $c = 0.125\,\mathrm{M}$.
(3) Benzene's six $\pi$ electrons are delocalised over the ring; the Lewis model
forces localised double bonds, predicting two distinct C–C bond lengths, while
all six are equal — the delocalised $\pi$ system replaces it.
(4) $[\mathrm{H^+}] = 10^{-2.87} = 1.35\times10^{-3}$;
$K_a = x^2/(C - x) = (1.35\times10^{-3})^2/(0.10 - 0.00135) = 1.83\times10^{-5}$;
the approximation $C - x \approx C$ was used and $x/C = 1.35\%$, well under $5\%$,
so it is licensed.
(5) Because $\log$ of a product is the sum of the logs: $-\log(ab) = -(\log a + \log b)$.

## Where to go next

- [Atomic Structure and Periodicity](/3-inorganic-chemistry/atomic-structure-and-periodicity/) — orbitals done properly.
- [Chemical Kinetics](/1-physical-chemistry/chemical-kinetics/) — rates, and the difference between equilibrium and speed.
- [Thermodynamics](/1-physical-chemistry/thermodynamics/) — the energy ledger, derived.
