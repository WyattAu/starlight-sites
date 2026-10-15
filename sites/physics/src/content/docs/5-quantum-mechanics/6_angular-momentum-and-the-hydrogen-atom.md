---

date: 2026-07-23T21:57:32+01:00
title: Angular Momentum and the Hydrogen Atom
tags:
  - Physics
  - University
description: "Angular momentum and the hydrogen atom: the angular momentum operators, ladder operators and the eigenvalue spectrum from the commutation relations alone, spherical harmonics, the hydrogen atom solved completely, orbital shapes and quantum numbers, and where the Bohr model disagrees with quantum mechanics. With recall prompts, counterexamples by name and interleaving problems. Tier U."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "physics", "url": "https://physics.wyattau.com"}, {"name": "5 Quantum Mechanics", "url": "https://physics.wyattau.com/5-quantum-mechanics"}, {"name": "6_angular Momentum And The Hydrogen Atom", "url": "https://physics.wyattau.com/5-quantum-mechanics/6_angular-momentum-and-the-hydrogen-atom"}]
}
</script>

## Recall prompts

Attempt these from memory *before* reading.

- Write the commutation relations among $L_x$, $L_y$ and $L_z$.
- What are the allowed values of $l$ and $m$?
- What is the magnitude of $\mathbf{L}$ in the state with quantum number $l$?
- How many states have a given $n$ in hydrogen?
- What does the Bohr model predict for the ground-state angular momentum, and
  what is it actually?

Check your answers against the text. Prompt 5 is the one that matters most,
because the two answers differ and the difference is measurable.

## Motivation: the algebra does all the work

The striking thing about angular momentum in quantum mechanics is not that it
is quantised. It is that the quantisation follows from three commutation
relations,

$$
[L_x, L_y] = i\hbar L_z, \qquad [L_y, L_z] = i\hbar L_x, \qquad [L_z, L_x] =
i\hbar L_y,
$$

and from nothing else. No differential equation is solved, no boundary
condition is imposed, and no assumption is made about what $\mathbf{L}$ is
made of. Everything else on this page -- the allowed values of $l$, the
$l(l+1)$ rather than $l^2$, the ladder structure, even the possibility of
half-integer eigenvalues -- is already in those three lines.

That is worth seeing clearly, because it is what makes spin possible. Spin has
nothing to do with rotating a body in space, so the derivation via
$\hat{\mathbf{L}} = \hat{\mathbf{r}} \times \hat{\mathbf{p}}$ cannot apply to
it. But spin satisfies the same three commutation relations, so it inherits
the same spectrum. The algebra, not the geometry, is the physics.

**Why $l(l+1)$ and not $l^2$.** The ladder operators give

$$
L^2 = L_z^2 \pm \hbar L_z + L_\mp L_\pm,
$$

and the second term is a positive operator, so $L^2 \ge L_z^2 \pm \hbar L_z$.
That inequality bounds $m$ above and below and forces the top of the ladder to
satisfy $l = m_{\max}$ -- and the magnitude comes out $\sqrt{l(l+1)}\hbar$,
not $l\hbar$. The extra $+1$ is not a correction; it is the statement that you
cannot know all three components at once.

**The hydrogen atom is the payoff.** Separating variables in spherical
coordinates turns the angular part into exactly the $L^2$ and $L_z$ eigenvalue
problems, and the radial equation into one whose solutions exist only for
specific $E$. Three quantum numbers appear because the problem has three
compatible symmetries, and the energy depends only on $n$ -- which is why
there are degeneracies to break.

### 6.1 Angular Momentum Operators

$$
\hat{L}_x = -i\hbar\left(y\frac{\partial}{\partial z} - z\frac{\partial}{\partial y}\right), \quad \hat{L}_y = -i\hbar\left(z\frac{\partial}{\partial x} - x\frac{\partial}{\partial z}\right), \quad \hat{L}_z = -i\hbar\left(x\frac{\partial}{\partial y} - y\frac{\partial}{\partial x}\right)
$$

**Commutation relations:**

$$
[\hat{L}_x, \hat{L}_y] = i\hbar\hat{L}_z, \quad [\hat{L}_y, \hat{L}_z] = i\hbar\hat{L}_x, \quad [\hat{L}_z, \hat{L}_x] = i\hbar\hat{L}_y
$$

$$
[\hat{L}^2, \hat{L}_i] = 0 \quad \mathrm{for\ all\ } i
$$

**Simultaneous eigenstates:** $|l, m\rangle$ with

$$
\hat{L}^2|l,m\rangle = \hbar^2 l(l+1)|l,m\rangle, \quad \hat{L}_z|l,m\rangle = \hbar m|l,m\rangle
$$

Where $l = 0, 1, 2, \ldots$ and $m = -l, -l+1, \ldots, l-1, l$.

### 6.2 Raising and Lowering Operators

Define the **ladder operators**:

$$
\hat{L}_{\pm} = \hat{L}_x \pm i\hat{L}_y
$$

**Key commutation relations:**

$$
[\hat{L}_z, \hat{L}_{\pm}] = \pm\hbar\hat{L}_{\pm}, \quad [\hat{L}^2, \hat{L}_{\pm}] = 0
$$

_Proof._
$[\hat{L}_z, \hat{L}_+] = [\hat{L}_z, \hat{L}_x] + i[\hat{L}_z, \hat{L}_y] = i\hbar\hat{L}_y + i(i\hbar\hat{L}_x) = \hbar(\hat{L}_y + i\hat{L}_x)\cdot(-1)$

Wait, let us redo this carefully:

$$
[\hat{L}_z, \hat{L}_+] = [\hat{L}_z, \hat{L}_x + i\hat{L}_y] = [\hat{L}_z, \hat{L}_x] + i[\hat{L}_z, \hat{L}_y] = i\hbar\hat{L}_y + i(-i\hbar\hat{L}_x) = i\hbar\hat{L}_y + \hbar\hat{L}_x = \hbar(\hat{L}_x + i\hat{L}_y) = \hbar\hat{L}_+
$$

Similarly, $[\hat{L}_z, \hat{L}_-] = -\hbar\hat{L}_-$. And:

$$
[\hat{L}^2, \hat{L}_+] = [\hat{L}_x^2 + \hat{L}_y^2 + \hat{L}_z^2, \hat{L}_+] = 0
$$

Since $\hat{L}^2$ commutes with each component. $\blacksquare$

**Action on eigenstates.** Since $[\hat{L}_z, \hat{L}_+] = \hbar\hat{L}_+$:

$$
\hat{L}_z(\hat{L}_+|l,m\rangle) = (\hat{L}_+\hat{L}_z + \hbar\hat{L}_+)|l,m\rangle = \hbar(m+1)(\hat{L}_+|l,m\rangle)
$$

So $\hat{L}_+|l,m\rangle$ is an eigenstate of $\hat{L}_z$ with eigenvalue $\hbar(m+1)$: it raises
$m$ by 1. Similarly, $\hat{L}_-$ lowers $m$ by 1. Both preserve the $l$ value since
$[\hat{L}^2, \hat{L}_{\pm}] = 0$.

**Normalisation.** Write $\hat{L}_+|l,m\rangle = C_+(l,m)|l,m+1\rangle$. Then:

$$
|C_+(l,m)|^2 = \langle l,m|\hat{L}_-\hat{L}_+|l,m\rangle
$$

Using $\hat{L}_-\hat{L}_+ = \hat{L}^2 - \hat{L}_z^2 - \hbar\hat{L}_z$:

$$
|C_+(l,m)|^2 = \hbar^2 l(l+1) - \hbar^2 m^2 - \hbar^2 m = \hbar^2[l(l+1) - m(m+1)]
$$

Therefore:

$$
\hat{L}_+|l,m\rangle = \hbar\sqrt{l(l+1) - m(m+1)}\,|l,m+1\rangle
$$

$$
\hat{L}_-|l,m\rangle = \hbar\sqrt{l(l+1) - m(m-1)}\,|l,m-1\rangle
$$

### 6.3 Eigenvalue Spectrum of Angular Momentum

**Theorem 6.1.** The quantum numbers $l$ and $m$ satisfy:

- $l = 0, 1/2, 1, 3/2, 2, \ldots$ (integer or half-integer)
- For a given $l$: $m = -l, -l+1, \ldots, l-1, l$ (there are $2l+1$ values)
- For **orbital** angular momentum, $l$ is restricted to non-negative integers.

_Proof._ Starting from a state $|l,m\rangle$ Repeatedly applying $\hat{L}_+$ raises $m$ by 1 each
time. The norm of the resulting state is:

$$
\|\hat{L}_+|l,m\rangle\|^2 = \hbar^2[l(l+1) - m(m+1)]
$$

This must remain non-negative, so $m(m+1) \leq l(l+1)$ Giving $m \leq l$. The raising process must
Terminate at some maximum $m_{\max}$ where $\hat{L}_+|l, m_{\max}\rangle = 0$:

$$
l(l+1) - m_{\max}(m_{\max} + 1) = 0
$$

Similarly, the lowering process terminates at $m_{\min}$ where $\hat{L}_-|l, m_{\min}\rangle = 0$:

$$
l(l+1) - m_{\min}(m_{\min} - 1) = 0
$$

Subtracting: $m_{\max}(m_{\max}+1) - m_{\min}(m_{\min}-1) = 0$. Since we reach $m_{\max}$ from
$m_{\min}$ in $N$ steps: $m_{\max} = m_{\min} + N$. Solving gives $m_{\max} = l$ and
$m_{\min} = -l$ So $N = 2l$ Meaning $2l$ must be a non-negative integer. Therefore
$l = 0, 1/2, 1, 3/2, \ldots$ and $m$ takes $2l+1$ values from $-l$ to $l$. $\blacksquare$

For orbital angular momentum (defined as
$\hat{\mathbf{L}} = \hat{\mathbf{r}} \times \hat{\mathbf{p}}$), The wave function must be
single-valued under a full rotation $\phi \to \phi + 2\pi$. This requires
$e^{im\phi} = e^{im(\phi+2\pi)}$ So $m$ must be an integer, which restricts $l$ to integers.

### 6.4 Spherical Harmonics

The simultaneous eigenfunctions of $\hat{L}^2$ and $\hat{L}_z$ are the **spherical harmonics**
$Y_l^m(\theta, \phi)$:

$$
Y_l^m(\theta, \phi) = (-1)^m\sqrt{\frac{2l+1}{4\pi}\frac{(l-m)!}{(l+m)!}}\,P_l^m(\cos\theta)\,e^{im\phi}
$$

Where $P_l^m$ are the associated Legendre functions.

**Properties:**

- Orthonormality: $\int Y_l^m^*\, Y_{l"}^{m'}\,d\Omega = \delta_{ll'}\delta_{mm'}$
- Completeness:
  $\sum_{l=0}^{\infty}\sum_{m=-l}^{l} Y_l^m(\theta,\phi)\,Y_l^m^*(\theta',\phi') = \delta(\cos\theta - \cos\theta')\delta(\phi - \phi')$
- Parity: $Y_l^m(\pi-\theta, \phi+\pi) = (-1)^l\,Y_l^m(\theta,\phi)$

**First few spherical harmonics:**

| $(l, m)$     | $Y_l^m(\theta,\phi)$                                 |
| ------------ | ---------------------------------------------------- |
| $(0, 0)$     | $\dfrac{1}{\sqrt{4\pi}}$                             |
| $(1, 0)$     | $\sqrt{\dfrac{3}{4\pi}}\cos\theta$                   |
| $(1, \pm 1)$ | $\mp\sqrt{\dfrac{3}{8\pi}}\sin\theta\,e^{\pm i\phi}$ |
| $(2, 0)$     | $\sqrt{\dfrac{5}{16\pi}}(3\cos^2\theta - 1)$         |

### 6.5 The Hydrogen Atom

The Hamiltonian for hydrogen (electron of mass $m_e$ and charge $-e$ Proton of charge $+e$):

$$
\hat{H} = -\frac{\hbar^2}{2m_e}\nabla^2 - \frac{e^2}{4\pi\varepsilon_0 r}
$$

#### 6.5.1 Separation of Variables

In spherical coordinates, the Laplacian separates, and we write
$\psi(r,\theta,\phi) = R(r)\,Y_l^m(\theta,\phi)$. The radial equation is:

$$
-\frac{\hbar^2}{2m_e}\frac{1}{r^2}\frac{d}{dr}\!\left(r^2\frac{dR}{dr}\right) + \left[-\frac{e^2}{4\pi\varepsilon_0 r} + \frac{\hbar^2 l(l+1)}{2m_e r^2}\right]R = ER
$$

The term $\hbar^2 l(l+1)/(2m_e r^2$ acts as an effective **centrifugal barrier**.

#### 6.5.2 Solving the Radial Equation

Substitute $u(r) = rR(r)$ and define the Bohr radius $a_0 = 4\pi\varepsilon_0\hbar^2/(m_e e^2)$ and
the Rydberg energy $E_R = e^2/(8\pi\varepsilon_0 a_0) = m_e e^4/(8\varepsilon_0^2 h^2)$. With the
substitution $\rho = 2r/(na_0)$ The radial equation becomes:

$$
\frac{d^2u}{d\rho^2} = \left[\frac{l(l+1)}{\rho^2} - \frac{1}{\rho} + \frac{n}{4}\left(\frac{1}{n^2} - \frac{E}{E_R}\right)\right]u
$$

For the solution to be well-behaved at both $\rho = 0$ and $\rho \to \infty$ We require:

$$
E = -\frac{E_R}{n^2} = -\frac{m_e e^4}{2(4\pi\varepsilon_0)^2\hbar^2}\cdot\frac{1}{n^2}
$$

With $n = 1, 2, 3, \ldots$ and $l = 0, 1, \ldots, n-1$.

The radial wave functions are:

$$
R_{nl}(r) = \sqrt{{\left(\frac{2}{na_0}\right)}^3\frac{(n-l-1)!}{2n[(n+l)!]^3}}\,e^{-r/(na_0)}\!\left(\frac{2r}{na_0}\right)^l L_{n-l-1}^{2l+1}\!\left(\frac{2r}{na_0}\right)
$$

Where $L_q^p$ are the associated Laguerre polynomials.

**Energy eigenvalues:**

$$
E_n = -\frac{m_e e^4}{2(4\pi\varepsilon_0)^2 \hbar^2} \cdot \frac{1}{n^2} = -\frac{13.6\,\mathrm{eV}{n^2}, \quad n = 1, 2, 3, \ldots}
$$

**Degeneracy:** Each energy level $E_n$ has degeneracy $n^2$ (ignoring spin). The quantum numbers
are:

- Principal: $n = 1, 2, 3, \ldots$
- Orbital angular momentum: $l = 0, 1, \ldots, n - 1$
- Magnetic: $m_l = -l, \ldots, l$

The ground state wave function ($n = 1, l = 0, m_l = 0$):

$$
\psi_{100}(r, \theta, \phi) = \frac{1}{\sqrt{\pi a_0^3}} e^{-r/a_0}
$$

Where $a_0 = \frac{4\pi\varepsilon_0 \hbar^2}{m_e e^2} \approx 0.529\,\mathrm{\AA}$ is the Bohr
radius.

#### 6.5.3 Expectation Values for the Ground State

**Example 6.1.** Calculate $\langle r \rangle$, $\langle r^2 \rangle$ And $\langle 1/r \rangle$ for
the Hydrogen ground state.

<details>
<summary>Solution</summary>

For $\psi_{100} = (\pi a_0^3)^{-1/2}e^{-r/a_0}$ All integrals involve radial integrals with $r^2 dr$:

$$
\langle r \rangle = \frac{4\pi}{\pi a_0^3}\int_0^{\infty} r^3 e^{-2r/a_0}\,dr = \frac{4}{a_0^3}\cdot\frac{6}{(2/a_0)^4} = \frac{4 \cdot 6 \cdot a_0^4}{16} = \frac{3}{2}a_0
$$

$$
\langle r^2 \rangle = \frac{4}{a_0^3}\int_0^{\infty} r^4 e^{-2r/a_0}\,dr = \frac{4}{a_0^3}\cdot\frac{24}{(2/a_0)^5} = \frac{4 \cdot 24 \cdot a_0^5}{32} = 3a_0^2
$$

$$
\left\langle\frac{1}{r}\right\rangle = \frac{4}{a_0^3}\int_0^{\infty} r\,e^{-2r/a_0}\,dr = \frac{4}{a_0^3}\cdot\frac{1}{(2/a_0)^2} = \frac{1}{a_0}
$$

Note that $\langle 1/r \rangle = 1/a_0 = -2E_1/e^2$ (by the virial theorem). The standard deviation
is $\Delta r = \sqrt{3a_0^2 - (3a_0/2)^2} = \sqrt{3/4}\,a_0$.

</details>

#### 6.5.4 Selection Rules

Electric dipole transitions between hydrogen states are governed by selection rules derived from the
Wigner-Eckart theorem. For a transition $|n,l,m\rangle \to |n',l',m'\rangle$ induced by the electric
Dipole operator $\hat{\mathbf{r}}$:

$$
\Delta l = l' - l = \pm 1, \quad \Delta m = m' - m = 0, \pm 1
$$

$\Delta n$ is unrestricted (energy conservation determines which transitions are allowed).

_Proof sketch._ The matrix element $\langle n'l'm'|\hat{z}|nlm\rangle$ involves the integral
$\int Y_{l'}^{m'*}(\theta,\phi)\cos\theta\,Y_l^m(\theta,\phi)\,d\Omega$. Using the addition theorem
for spherical harmonics, $\cos\theta = \sqrt{4\pi/3}\,Y_1^0$ The integral becomes a product of
Clebsch-Gordan coefficients that vanishes unless $l' = l \pm 1$ and $m' = m$. $\blacksquare$

### 6.6 Orbital Shapes and Quantum Numbers

The three quantum numbers characterise hydrogen atom eigenstates:

- **$n$ (principal):** Determines the energy and overall size. The mean radius scales as
  $\langle r \rangle \propto n^2 a_0$.
- **$l$ (orbital angular momentum):** Determines the shape. The spectroscopic notation is $l = 0$
  (s), $l = 1$ (p), $l = 2$ (d), $l = 3$ (f), etc.
- **$m_l$ (magnetic):** Determines the spatial orientation. The angular dependence is
  $Y_l^{m_l}(\theta, \phi)$.

**Radial probability distribution.** The probability of finding the electron between $r$ and $r+dr$
is $P(r)\,dr = |R_{nl}(r)|^2 r^2\,dr$. For the $1s$ state, the maximum is at $r = a_0$ (the Bohr
radius). For $2s$ There is a node at $r = 2a_0$. For $2p$ The distribution peaks closer to the
nucleus.

**Angular distributions.** The $s$ orbitals ($l = 0$) are spherically symmetric. The $p$ orbitals
($l = 1$) have dumbbell shapes aligned along the $x$-, $y$-, or $z$-axis depending on $m_l$. The $d$
Orbitals ($l = 2$) have more complex cloverleaf patterns.

**Radial nodes.** The radial wave function $R_{nl}(r)$ has $n - l - 1$ nodes (zeros excluding
$r = 0$ And $r = \infty$). The total number of nodes in the full wave function is $n - 1$ Consistent
with The general property that the $n$-th energy eigenstate has $n - 1$ nodes.

**Fine structure.** The non-relativistic Schrodinger equation gives energy levels depending only on
$n$. Relativistic corrections (spin-orbit coupling, Darwin term, kinetic energy correction) split
these Into fine structure multiplets, removing the $l$-degeneracy. The fine structure shift is of
order $\alpha^2 E_n$ where $\alpha \approx 1/137$ is the fine structure constant.

## Intuition

Angular momentum in quantum mechanics is like a spinning top that can only point in certain discrete directions. The ladder operators are like climbing stairs: you can raise or lower the magnetic quantum number one step at a time, but you cannot stop between steps. The hydrogen atom is nature's simplest atom and the hydrogen of quantum mechanics: the electron orbits the nucleus not in fixed paths but in probability clouds shaped like dumbbells, clovers, and spheres. The quantum numbers are like an address: n tells you the floor (energy), l tells you the room shape (angular momentum), and m tells you the orientation. The energy depends only on n, which is a hidden symmetry of the Coulomb potential. The selection rules are like dance rules: the electron can only jump between certain states, which is why hydrogen emits only specific colors of light.

## Counterexamples worth knowing by name

| Claim | True? | Counterexample |
| ----- | ----- | -------------- |
| The Bohr model gives the right angular momentum | no | it predicts $L = n\hbar$, so the ground state has $L = \hbar$; quantum mechanics gives $l = 0$ and $L = 0$, and this is measured |
| $L_z$ can equal $\lvert\mathbf{L}\rvert$ | no | $\lvert L_z\rvert \le \hbar\sqrt{l(l+1)} < \hbar(l+1)$; if $L_z = \lvert\mathbf{L}\rvert$ then $L_x$ and $L_y$ would both be known exactly |
| Orbital angular momentum can be half-integer | no | single-valuedness of the wave function under $2\pi$ rotation forces integer $l$; spin is a different operator and is exempt |
| The hydrogen ground state has $l = 1$ | no | $l = 0$, so it is spherically symmetric and $\psi$ is maximal at the origin |
| $\psi_{100}$ vanishes at the nucleus | no | it is *maximal* there; the probability of finding the electron at the origin is the largest of any state |
| $n$ determines $l$ | no | it only bounds it, $l \le n-1$; for $n = 2$ both $l = 0$ and $l = 1$ occur at the same energy |
| Angular momentum is conserved because the state is an eigenstate of $L^2$ | no | conservation is about commuting with $\hat{H}$; a state can be an $L^2$ eigenstate and still not be stationary |
| The energy depends on $l$ | no | for the Coulomb potential the energy depends only on $n$, which is why there are degeneracies to break |

The first row is the most important and the most under-appreciated. The Bohr
model is usually presented as "right but incomplete", and for the energy
levels that is fair. For angular momentum it is simply wrong: it predicts a
ground state that does not exist, and the discrepancy is the first sign that a
planar orbit is not what an electron does.

The last row is the one with the most physics behind it. The Coulomb
degeneracy is an *accidental* symmetry -- it is higher than the spherical
symmetry would suggest -- and it is precisely that accident which makes the
hydrogen spectrum clean enough to be the standard first example.

## Where the research frontier is

- **Breaking the degeneracy.** The Lamb shift, from vacuum fluctuations, splits
  $2s$ from $2p$ and was the first evidence for QED. Measuring it to high
  precision is still the standard test of bound-state QED.
- **The proton radius puzzle.** Muonic hydrogen gives a proton radius about
  4% smaller than electronic hydrogen does, and resolving whether that is new
  physics or a systematic took a decade of work.
- **Rydberg atoms.** Large-$n$ hydrogen-like atoms have enormous dipoles and
  long lifetimes, and are now used as qubits and as electric-field sensors.
- **Angular momentum coupling.** Real atoms have many electrons, and the
  coupling schemes ($LS$ and $jj$) and their term symbols are where the
  algebra above earns its keep.
- **Exotic "hydrogen" atoms.** Positronium, muonium and antiprotonic atoms
  reuse the hydrogen solution with different masses, testing QED and CPT in
  ways ordinary hydrogen cannot.

## Interleaving problems

Mix these with the [postulates](/5-quantum-mechanics/2_postulates-of-quantum-mechanics/),
[operators](/5-quantum-mechanics/4_operators-and-observables/), [one-dimensional
problems](/5-quantum-mechanics/5_one-dimensional-problems/), [Symplectic
Structure and KAM Theory](/1-classical-mechanics/16_symplectic-structure-and-kam-theory/),
[Linear Algebra](https://mathematics.wyattau.com/2-linear-algebra/5_eigenvalues-and-eigenvectors/)
and [Hamiltonian Mechanics](/1-classical-mechanics/4_hamiltonian-mechanics/).

1. (Operators.) Compute $[L_x, L_y]$ from
   $\hat{\mathbf{L}} = \hat{\mathbf{r}} \times \hat{\mathbf{p}}$ using only
   $[\hat{x}_i, \hat{p}_j] = i\hbar\delta_{ij}$. Then explain why the result
   holds for spin even though spin has no $\hat{\mathbf{r}}$ or
   $\hat{\mathbf{p}}$.
2. (Linear algebra.) From the commutation relations alone, construct the
   ladder operators and prove that $l$ is restricted to integer or half-integer
   values. Identify the single step that forces the quantisation, and say what
   would happen if that step were unavailable.
3. (Wave functions.) Show that $\psi_{100} = (\pi a_0^3)^{-1/2}e^{-r/a_0}$
   satisfies the time-independent Schrodinger equation with
   $E = -13.6\,\mathrm{eV}$, by direct substitution. Then compute
   $\langle r\rangle$ and confirm it is $3a_0/2$, not $a_0$.
4. (Classical mechanics.) The Kepler problem is classically integrable and has
   an extra conserved quantity, the Runge-Lenz vector. Show that its quantum
   counterpart is what produces the *accidental* degeneracy between different
   $l$ at the same $n$.
5. (Hamiltonian mechanics.) Compare the classical eccentricity of a Kepler
   orbit with the quantum numbers $n$ and $l$, and show that large $n$ with
   $l = n-1$ reproduces circular orbits. What does large $n$ with small $l$
   correspond to classically?
6. (Research.) The proton radius puzzle: muonic hydrogen spectroscopy gives
   $r_p \approx 0.84\,\mathrm{fm}$ against $0.88\,\mathrm{fm}$ from electronic
   hydrogen. State what would have to be true for both to be right, and why
   the resolution matters more than the number.

## Cross-References

- **[Operators and Observables](/5-quantum-mechanics/4_operators-and-observables/)**: Operators represent physical observables and their commutation relations determine the structure of angular momentum.
- **[Spin](/5-quantum-mechanics/7_spin/)**: Spin is an intrinsic angular momentum that extends the orbital angular momentum formalism.
- **[Scattering Theory](/5-quantum-mechanics/13_scattering-theory/)**: Scattering theory applies angular momentum techniques to analyze particle collisions.

- [Calculus](https://mathematics.wyattau.com/docs/calculus)
- [Linear Algebra](https://mathematics.wyattau.com/linear-algebra/)
- [Vector Calculus](https://mathematics.wyattau.com/docs/vector-calculus)
- [Quantum Computing](https://computer-science.wyattau.com/docs/quantum-computing)

### 6.7 Common Mistakes

**Mistake 1: Confusing the orbital quantum number $l$ with the magnetic quantum number $m$**
For a given $l$, the magnetic quantum number $m$ ranges from $-l$ to $l$ in integer steps, giving $2l + 1$ values. Students sometimes confuse these and assign $m$ values outside this range. The quantum number $l$ determines the total angular momentum magnitude $\hbar\sqrt{l(l+1)}$, while $m$ determines the $z$-component $\hbar m$.

**Mistake 2: Assuming $L_z$ can equal $L$**
The $z$-component of angular momentum satisfies $|L_z| \leq \hbar l < \hbar\sqrt{l(l+1)} = |\mathbf{L}|$. The magnitude of $\mathbf{L}$ is always greater than the magnitude of any single component. This is a consequence of the uncertainty relations between $L_x$, $L_y$, and $L_z$: they cannot all be simultaneously determined.

**Mistake 3: Forgetting that $l$ is restricted to integers for orbital angular momentum**
For orbital angular momentum (defined as $\hat{\mathbf{L}} = \hat{\mathbf{r}} \times \hat{\mathbf{p}}$), $l$ must be a non-negative integer because the wave function must be single-valued under a full rotation. Half-integer $l$ values are allowed for spin angular momentum but not for orbital angular momentum. Never assign $l = 1/2$ to an orbital state.
