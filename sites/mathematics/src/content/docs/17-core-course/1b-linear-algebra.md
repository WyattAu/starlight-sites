---
date: 2026-10-24T00:00:00+00:00
title: "Level 1B: Linear Algebra Done Wrong"
description: "Coordinate-free linear algebra: vector spaces, dual spaces, quotient spaces, exterior algebra, and determinants as alternating multilinear forms – building the geometric machinery for differential geometry without matrices or coordinates."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "17 Core Course", "url": "https://mathematics.wyattau.com/17-core-course"}, {"name": "Level 1B: Linear Algebra Done Wrong", "url": "https://mathematics.wyattau.com/17-core-course/1b-linear-algebra"}]
}
</script>

**The Defect.** The standard linear algebra course starts with matrices and row
reduction, a computational approach that treats vectors as column arrays and
linear maps as grids of numbers. This works for computation but obscures the
geometry: a vector is not a column of numbers; a linear map is not a grid. The
coordinate-free approach of Sergei Treil's *Linear Algebra Done Wrong* treats
vectors as abstract elements of a vector space and linear maps as
structure-preserving functions, introducing coordinates only at the very end as
a computational convenience. This page follows that approach.

**The One-Line Reveal.** The entire page follows from one definition: a vector
space is a set with addition and scalar multiplication satisfying eight axioms.
Everything else (dual spaces, quotient spaces, exterior algebra, determinants)
is constructed from this single definition by universal properties and
dimension counting.

**Scope.** All vector spaces in this course are *finitely generated*: spanned
by finitely many vectors. For spaces not spanned by any finite list, even the
existence of a basis is equivalent to the axiom of choice; that set-theoretic
territory is never needed downstream and is avoided here. A **field** is a
system of scalars with addition, multiplication, and division, such as
$\mathbb{Q}$, $\mathbb{R}$, or $\mathbb{C}$; nothing below uses more than the
field axioms.

## 1. Vector Spaces and Linear Maps

**Definition.** A **vector space** $V$ over a field $k$ is a set with addition
$+: V \times V \to V$ and scalar multiplication $\cdot: k \times V \to V$
satisfying eight axioms: associativity and commutativity of addition, additive
identity, additive inverses, scalar identity $1v = v$, compatibility
$(\alpha\beta)v = \alpha(\beta v)$, and distributivity of scalar
multiplication over vector addition and over scalar addition.

**Definition.** A function $T: V \to W$ between vector spaces is a **linear
map** if $T(\alpha u + \beta v) = \alpha T(u) + \beta T(v)$ for all $u, v \in
V$ and $\alpha, \beta \in k$. The set of all linear maps from $V$ to $W$ is
denoted $\operatorname{Hom}(V, W)$ or $L(V, W)$.

**Theorem 1.1.** $\operatorname{Hom}(V, W)$ is itself a vector space under
pointwise addition and scalar multiplication.

**Proof.** Each axiom is inherited from $W$. The zero map $0(v) = 0_W$ is the
additive identity. For $T_1, T_2 \in \operatorname{Hom}(V, W)$, the pointwise
sum $(T_1 + T_2)(v) = T_1(v) + T_2(v)$ is linear: it distributes over
arguments because each $T_i$ does and $W$'s addition does. Likewise
$(\alpha T)(v) = \alpha T(v)$ is linear. The remaining axioms (associativity,
commutativity, distributivity, identities, inverses $-T$) hold pointwise
because they hold in $W$ at every argument. $\blacksquare$

### Bases and Dimension

**Definition.** A list $e_1, \dots, e_n$ of vectors of $V$ is **linearly
independent** if the only scalars with $\sum_i a_i e_i = 0$ are
$a_1 = \dots = a_n = 0$; it **spans** $V$ if every $v \in V$ can be written
$\sum_i a_i e_i$. A **basis** is a list that is both.

**Coordinates and their uniqueness.** If $e_1, \dots, e_n$ is a basis, every
$v$ has an expression $v = \sum_i v_i e_i$, and the scalars $v_i$ (the
**coordinates** of $v$) are unique: if $\sum_i v_i e_i = \sum_i v'_i e_i$,
then $\sum_i (v_i - v'_i) e_i = 0$, so independence forces $v_i = v'_i$ for
every $i$. $\blacksquare$

**Theorem 1.2 (bases exist).** If finitely many vectors span $V$, then $V$ has
a basis.

**Proof.** Among all lists spanning $V$, choose one of minimal length,
$w_1, \dots, w_m$. If it were dependent, some nontrivial combination
$\sum_i a_i w_i = 0$ would have $a_p \neq 0$ for some $p$; solving gives
$w_p = -a_p^{-1} \sum_{i \neq p} a_i w_i$. Deleting $w_p$ leaves a shorter
list that still spans: any expression over the full list can be rewritten with
$w_p$ replaced by that combination. This contradicts minimality, so the
minimal spanning list is independent, hence a basis. $\blacksquare$

**Lemma 1.3 (exchange).** If $v_1, \dots, v_k$ are linearly independent and
$w_1, \dots, w_m$ span $V$, then $k \leq m$.

**Proof.** We show by induction on $j$ that for each $j \leq \min(k, m)$ there
is a subset $S_j \subseteq \{1, \dots, m\}$ with $|S_j| = m - j$ such that the
list $v_1, \dots, v_j$ together with $\{w_i : i \in S_j\}$ spans $V$.
For $j = 0$, take $S_0 = \{1, \dots, m\}$.
Assume the claim for $j$, with $j < k$. Since $v_{j+1}$ lies in the span of
the list, $v_{j+1} = \sum_{i \leq j} c_i v_i + \sum_{i \in S_j} d_i w_i$. If
all $d_i$ were zero, then $\sum_{i \leq j} c_i v_i - v_{j+1} = 0$ would be a
nontrivial dependence among $v_1, \dots, v_{j+1}$ (its $v_{j+1}$ coefficient
is $-1$), contradicting independence. So some $d_p \neq 0$ with $p \in S_j$;
solving for $w_p$ shows the list with $w_p$ replaced by $v_{j+1}$ still
spans, which is the claim for $j + 1$ with $S_{j+1} = S_j \setminus \{p\}$.
If $k > m$, the induction runs to $j = m$, giving $S_m = \emptyset$: the list
$v_1, \dots, v_m$ alone spans $V$. Applying the induction step once more would
express $v_{m+1}$ as a combination of $v_1, \dots, v_m$ (there are no $w$'s
left to carry any $d_i$), contradicting independence. Hence $k \leq m$.
$\blacksquare$

**Corollary 1.4 (dimension is well defined).** Any two bases of $V$ have the
same length. This common length is the **dimension** $\dim V$.

**Proof.** Apply Lemma 1.3 twice: with basis one playing the independent list
and basis two the spanning list, and vice versa. $\blacksquare$

**Lemma 1.5 (basis extension).** If $u_1, \dots, u_r$ are linearly independent
in $V$ and $w_1, \dots, w_m$ span $V$, then the $u$'s can be extended, using
some of the $w$'s, to a basis of $V$.

**Proof.** Choose $S \subseteq \{1, \dots, m\}$ maximal such that
$u_1, \dots, u_r$ together with $\{w_i : i \in S\}$ remains independent. Such
an $S$ exists (the empty set works) and there are finitely many subsets, so a
maximal one can be chosen. We claim $u_1, \dots, u_r$ and $\{w_i : i \in S\}$
together span $V$. If not, some $w_l$ lies outside their span; then adjoining
$w_l$ keeps the list independent. Indeed, suppose
$\sum_i a_i u_i + \sum_{i \in S} b_i w_i + c\, w_l = 0$ with some coefficient
nonzero. If $c \neq 0$, then $w_l$ is a combination of the others, contrary to
its choice; so $c = 0$, and then all other coefficients vanish because the
shorter list is already independent. This contradicts the maximality of $S$.
So the list is independent and spans $V$, i.e. it is a basis extending the
$u$'s. $\blacksquare$

**Theorem 1.6 (rank–nullity).** For every linear map $T: V \to W$,

$$
\dim V = \dim \ker T + \dim \operatorname{im} T.
$$

**Proof.** Let $u_1, \dots, u_r$ be a basis of $\ker T$ (if
$\ker T = \{0\}$ the list is empty and $r = 0$), and extend it to a basis
$u_1, \dots, u_r, v_1, \dots, v_s$ of $V$ by Lemma 1.5. The images
$T(v_1), \dots, T(v_s)$ span $\operatorname{im} T$: any $v$ decomposes as
$\sum_i b_i u_i + \sum_j c_j v_j$, and $T(v) = \sum_j c_j T(v_j)$ because the
$u$-terms map to zero. They are independent: if $\sum_j a_j T(v_j) = 0$, then
$T(\sum_j a_j v_j) = 0$, so $\sum_j a_j v_j \in \ker T$ equals some
$\sum_i b_i u_i$; moving everything to one side gives a vanishing combination
of the full basis $u_1, \dots, u_r, v_1, \dots, v_s$, so every coefficient is
zero, in particular every $a_j$. Hence $\{T(v_1), \dots, T(v_s)\}$ is a basis
of $\operatorname{im} T$, so $\dim \operatorname{im} T = s$, while
$\dim V = r + s$ because $u_1, \dots, u_r, v_1, \dots, v_s$ is a basis of
$V$. $\blacksquare$

**The One-Line Reveal.** The proof splits $V$ into two pieces: the part that
maps to zero (the kernel) and the part that maps injectively (the extension).
The splitting is possible by basis extension, and then the theorem is just
counting.

## 2. Dual Spaces

**Definition.** The **dual space** $V^* = \operatorname{Hom}(V, k)$ is the
space of all linear functionals on $V$: linear maps $V \to k$.

**Theorem 2.1.** $\dim V^* = \dim V$.

**Proof.** Let $\{e_1, \dots, e_n\}$ be a basis of $V$. Define $e^j \in V^*$
(the **dual basis**) by $e^j(e_i) = \delta_{ij}$ (Kronecker delta). These are
linearly independent: if $\sum_j a_j e^j = 0$, evaluate on $e_i$ to get
$a_i e^i(e_i) = a_i = 0$. They span: for any $\varphi \in V^*$ and any
$v = \sum_i v_i e_i$, linearity gives $\varphi(v) = \sum_i v_i \varphi(e_i)$,
and since $v_i = e^i(v)$ ($e^i$ is linear and kills every $e_j$ with
$j \neq i$), we get

$$
\varphi(v) = \sum_i \varphi(e_i)\, e^i(v) = \left(\sum_i \varphi(e_i)\, e^i\right)(v).
$$

So $\varphi = \sum_i \varphi(e_i)\, e^i$, and the dual basis spans $V^*$.
Hence $\{e^1, \dots, e^n\}$ is a basis of $V^*$ and $\dim V^* = n = \dim V$.
$\blacksquare$

**The One-Line Reveal.** The dual basis is defined by where it *sends* the
basis vectors, and the delta $\delta_{ij}$ ensures it picks out exactly one
coordinate. This is the coordinate-free version of "the transpose."

**Theorem 2.2.** The map $\operatorname{ev}: V \to V^{**}$ defined by
$(\operatorname{ev}(v))(\varphi) = \varphi(v)$ is an isomorphism.

**Proof.** $\operatorname{ev}$ is linear in $v$: for fixed $\varphi$, the
assignment $v \mapsto \varphi(v)$ is linear, so
$\operatorname{ev}(\alpha v_1 + \beta v_2)$ agrees with
$\alpha\operatorname{ev}(v_1) + \beta\operatorname{ev}(v_2)$ on every
$\varphi$, and two functionals agreeing on all arguments are equal. It is
injective: if $\operatorname{ev}(v) = 0$, then $\varphi(v) = 0$ for all
$\varphi \in V^*$; taking $\varphi = e^j$ gives $e^j(v) = v_j = 0$ for every
$j$, so $v = 0$ by the uniqueness of coordinates. Since
$\dim V^{**} = \dim V^* = \dim V$ (Theorem 2.1 applied twice), injective plus
equal dimensions gives surjective. $\blacksquare$

**Definition.** For a linear map $T: V \to W$, the **dual map** is
$T^*: W^* \to V^*$, $T^*(\varphi) = \varphi \circ T$. It is linear, because
$T^*(\alpha\varphi + \beta\psi)(v) = (\alpha\varphi + \beta\psi)(T(v)) =
\alpha T^*(\varphi)(v) + \beta T^*(\psi)(v)$. Applying the construction twice
gives $T^{**} = (T^*)^*: V^{**} \to W^{**}$.

**Proposition 2.3 (naturality of $\operatorname{ev}$).** For every linear map
$T: V \to W$, the square

$$
\begin{CD}
V @>{\operatorname{ev}_V}>> V^{**} \\
@V{T}VV @VV{T^{**}}V \\
W @>>{\operatorname{ev}_W}> W^{**}
\end{CD}
$$

commutes: $T^{**} \circ \operatorname{ev}_V = \operatorname{ev}_W \circ T$.

**Proof.** Take $v \in V$ and $\varphi \in W^*$. Then
$(T^{**}(\operatorname{ev}_V(v)))(\varphi) = (\operatorname{ev}_V(v))(T^*\varphi)
= (T^*\varphi)(v) = \varphi(T(v)) = (\operatorname{ev}_W(T(v)))(\varphi)$:
the first step is the definition of the dual of a dual map, the middle step is
the definition of $T^*$, and the last is the definition of
$\operatorname{ev}_W$. Since the two elements of $W^{**}$ agree on every
$\varphi$, they are equal; and this holds for every $v$.
$\blacksquare$

**Why this is "natural."** The isomorphism $V \to V^{**}$ is **canonical**: it
does not require choosing a basis. In contrast, the isomorphism $V \to V^*$ (represented, once a basis is chosen, by $v \mapsto \sum_i v_i e^i$) *does*
require a basis. This is why the double dual is "better" than the dual: the
isomorphism is not an artefact of coordinates. In the language of [category
theory](/17-core-course/1a-categories/), Proposition 2.3 says precisely that
$\operatorname{ev}: \operatorname{Id} \Rightarrow (-)^{**}$ is a natural
transformation from the identity functor to the double-dual functor: the
square above is exactly the commuting square from the definition of a natural
transformation.

## 3. Quotient Spaces

**Definition.** Let $U \subseteq V$ be a subspace. The **quotient space**
$V/U$ is the set of equivalence classes $v + U$ under the relation
$v \sim v'$ iff $v - v' \in U$.

**Theorem 3.1.** $V/U$ is a vector space with
$\dim(V/U) = \dim V - \dim U$.

**Proof.** Addition and scalar multiplication are well defined: if
$v_1 + U = v_1' + U$ and $v_2 + U = v_2' + U$, then
$(v_1 - v_1') + (v_2 - v_2') \in U$, so
$(v_1 + v_2) + U = (v_1' + v_2') + U$; likewise for scalars. The vector space
axioms hold because they hold for representatives. The zero vector is
$0 + U = U$. The dimension formula follows from rank–nullity (Theorem 1.6)
applied to the **quotient map** $\pi: V \to V/U$, $\pi(v) = v + U$:
$\ker \pi = U$ by definition of the relation, and $\pi$ is surjective by
construction, so $\dim V = \dim U + \dim(V/U)$. $\blacksquare$

**The One-Line Reveal.** The quotient space "sets $U$ to zero": every vector
in $U$ becomes the zero vector of $V/U$, and rank–nullity counts what you
collapse ($\dim U$) plus what remains ($\dim V/U$).

**Theorem 3.2 (universal property of the quotient).** Let $\pi: V \to V/U$ be
the quotient map. A linear map $T: V \to W$ with $U \subseteq \ker T$
induces a unique linear map $\bar{T}: V/U \to W$ with $\bar{T} \circ \pi = T$.

**Proof.** Define $\bar{T}(v + U) = T(v)$. This is well defined: if
$v + U = v' + U$, then $v - v' \in U \subseteq \ker T$, so $T(v) = T(v')$.
It is linear because $T$ is: $\bar{T}((v + U) + (v' + U)) =
\bar{T}((v + v') + U) = T(v + v') = T(v) + T(v')$, and likewise for scalars.
By construction $\bar{T} \circ \pi = T$. For uniqueness: every element of
$V/U$ has the form $\pi(v)$ (surjectivity, Theorem 3.1), so any $\bar{S}$
with $\bar{S} \circ \pi = T$ must send $\pi(v)$ to $T(v)$; there is no
freedom left. $\blacksquare$

## 4. Alternating Forms and the Determinant

This section constructs the determinant honestly: not as an opaque formula,
but as the unique normalised alternating multilinear form, with the formula
*derived* rather than decreed. The only combinatorial input is the sign of a
permutation, which is proved from scratch.

### Permutations and their sign

**Definition.** A **permutation** of $\{1, \dots, n\}$ is a bijection
$\sigma: \{1, \dots, n\} \to \{1, \dots, n\}$. A **transposition** is a
permutation that swaps two elements and fixes all others.

**Lemma 4.1 (cycle decomposition).** Every permutation is a product of
transpositions.

**Proof.** Powers of $\sigma$ act injectively: if $\sigma^i(x) = \sigma^j(x)$
with $i < j$, applying $\sigma^{-i}$ (which exists, $\sigma$ being a bijection)
gives $\sigma^{j-i}(x) = x$. So among $x, \sigma(x), \dots, \sigma^n(x)$ (that
is $n + 1$ values in an $n$-element set), two coincide, and by injectivity of
the powers the first coincidence is a return: $\sigma^r(x) = x$ for some
$1 \leq r \leq n$. The permutation $c$ that cycles the orbit
$x \mapsto \sigma(x) \mapsto \cdots \mapsto \sigma^{r-1}(x) \mapsto x$ and
fixes everything else is a product of transpositions,
$c = (x \ \sigma^{r-1}(x)) \cdots (x \ \sigma(x))$: following any element
through the factors confirms this (check the orbit elements; all others are
fixed by every factor). Now let $\rho$ agree with $\sigma$ off the orbit of
$x$ and fix the orbit pointwise; then $\sigma = c \circ \rho$ (apply $\rho$
first: on the orbit it is the identity and $c$ reproduces $\sigma$; off the
orbit $c$ is the identity and $\rho$ reproduces $\sigma$), and $\rho$ moves
strictly fewer elements than $\sigma$. Induct on the number of moved
elements. $\blacksquare$

**Lemma 4.2 (the sign polynomial).** Let
$P = \prod_{1 \leq i < j \leq n} (x_i - x_j)$, a polynomial in
$x_1, \dots, x_n$. Swapping the variables $x_p$ and $x_q$ (with $p < q$)
carries $P$ to $-P$.

**Proof.** Inspect the factors of $P$ in three groups. Factors
$(x_i - x_j)$ with $\{i, j\} \cap \{p, q\} = \emptyset$ are unchanged. The
factor $(x_p - x_q)$ becomes $(x_q - x_p) = -(x_p - x_q)$. Each remaining
factor involves exactly one of $p, q$ and some third index $a$, and the *two*
factors involving $a$ multiply to the same value before and after the
substitution: if $a < p$ they are $(x_a - x_p)(x_a - x_q)$, which becomes
$(x_a - x_q)(x_a - x_p)$, the same product; if $p < a < q$ they are
$(x_p - x_a)(x_a - x_q)$, which becomes
$(x_q - x_a)(x_a - x_p) = (-(x_a - x_q))(-(x_p - x_a))$, the same product; if
$a > q$ they are $(x_p - x_a)(x_q - x_a)$, which becomes
$(x_q - x_a)(x_p - x_a)$, again the same product. So every factor is preserved
except $(x_p - x_q)$, which negates; the total product negates.
$\blacksquare$

**Definition (action on polynomials).** For $\sigma \in S_n$ and a polynomial
$Q$ in $x_1, \dots, x_n$, let $\sigma Q$ be the polynomial
$(\sigma Q)(x_1, \dots, x_n) = Q(x_{\sigma^{-1}(1)}, \dots, x_{\sigma^{-1}(n)})$.
With this convention $\sigma(\tau Q) = (\sigma\tau)Q$, since both sides
substitute $x_{\tau^{-1}(\sigma^{-1}(i))} = x_{(\sigma\tau)^{-1}(i)}$ for
$x_i$.

**Proposition 4.3 (the sign).** For every $\sigma \in S_n$ there is a sign
$\operatorname{sgn}(\sigma) \in \{+1, -1\}$ with $\sigma P =
\operatorname{sgn}(\sigma)\, P$. Moreover: (i) if $\sigma$ is a product of
$m$ transpositions, then $\operatorname{sgn}(\sigma) = (-1)^m$, so the parity
of $m$ is the same for every factorisation; (ii) $\operatorname{sgn}(\sigma\tau)
= \operatorname{sgn}(\sigma)\operatorname{sgn}(\tau)$.

**Proof.** The polynomial $\sigma P = \prod_{i<j}(x_{\sigma^{-1}(i)} -
x_{\sigma^{-1}(j)})$ runs over each unordered pair $\{a, b\}$ exactly once,
because $\sigma^{-1}$ is a bijection; each factor is $(x_a - x_b)$ up to an
overall sign. So $\sigma P = \pm P$. Also $P \neq 0$: substituting $x_i = i$
makes every factor $(i - j)$ with $i < j$ a nonzero number. So
$\operatorname{sgn}(\sigma)$ is well defined. For (i), induct on $m$: the case
$m = 0$ is $\sigma = \operatorname{id}$, and $\operatorname{id}\, P = P$ gives
$\operatorname{sgn}(\operatorname{id}) = +1$; if $\tau$ is a transposition
swapping $x_p, x_q$, then $\tau P$ is $P$ with those variables swapped, which
is $-P$ by Lemma 4.2, so $\operatorname{sgn}(\tau) = -1$; and the induction
step follows from $\sigma(\tau Q) = (\sigma\tau)Q$ together with linearity of
the action, $\sigma(cQ) = c(\sigma Q)$. For (ii):
$(\sigma\tau)P = \sigma(\tau P) = \sigma(\operatorname{sgn}(\tau) P) =
\operatorname{sgn}(\tau)(\sigma P) = \operatorname{sgn}(\tau)\operatorname{sgn}(\sigma) P$,
and cancelling the nonzero $P$ gives the claim. $\blacksquare$

### Alternating forms

**Definition.** Let $V$ be a vector space and $k \geq 1$. An **alternating
$k$-form** on $V$ is a function $\omega: V^k \to k$, linear in each argument
separately (making it **multilinear**), with
$\omega(v_1, \dots, v, \dots, v, \dots, v_k) = 0$ whenever two arguments
coincide. The alternating $k$-forms form a vector space under pointwise
operations: every axiom is checked argument by argument, exactly as in
Theorem 1.1.

**Lemma 4.4 (swapping negates).** An alternating form satisfies: exchanging
any two arguments negates the value.

**Proof.** Put $v + w$ into two positions of the form and expand by
multilinearity in those positions:
$0 = \omega(v + w, v + w) = \omega(v, v) + \omega(v, w) + \omega(w, v) +
\omega(w, w) = \omega(v, w) + \omega(w, v)$, the two pure terms vanishing by
alternation. $\blacksquare$

**Lemma 4.5 (sorting).** For $\sigma \in S_n$ and any alternating $n$-form
$\omega$ on $V$ with basis $e_1, \dots, e_n$:
$\omega(e_{\sigma(1)}, \dots, e_{\sigma(n)}) = \operatorname{sgn}(\sigma)\,
\omega(e_1, \dots, e_n)$.

**Proof.** By Lemma 4.1 write $\sigma = \tau_1 \cdots \tau_m$ as a product of
transpositions, and induct on $m$. The case $m = 0$ is trivial. For the
step, let $\tau$ be a transposition and suppose the claim for $\sigma'$; then
the tuple $(e_{(\tau\sigma')(1)}, \dots, e_{(\tau\sigma')(n)})$ agrees with
$(e_{\sigma'(1)}, \dots, e_{\sigma'(n)})$ except that the entries in the two
positions moved by $\tau$ are exchanged, so Lemma 4.4 gives
$\omega(e_{(\tau\sigma')(1)}, \dots) = -\omega(e_{\sigma'(1)}, \dots) =
-\operatorname{sgn}(\sigma')\,\omega(e_1, \dots, e_n)$. By Proposition
4.3(ii) and $\operatorname{sgn}(\tau) = -1$,
$\operatorname{sgn}(\tau\sigma') = -\operatorname{sgn}(\sigma')$, completing
the induction. $\blacksquare$

### The determinant

**Theorem 4.6 (determination).** Let $\omega$ be an alternating $n$-form on
$V$ with basis $e_1, \dots, e_n$, and write $v_i = \sum_j a_{ji} e_j$ for the
coordinates. Then

$$
\omega(v_1, \dots, v_n) = \left(\sum_{\sigma \in S_n} \operatorname{sgn}(\sigma)\,
a_{\sigma(1) 1} \cdots a_{\sigma(n) n}\right) \omega(e_1, \dots, e_n).
$$

In particular, an alternating $n$-form is determined by the single scalar
$\omega(e_1, \dots, e_n)$.

**Proof.** Expand the arguments one at a time by multilinearity:

$$
\omega\Big(\sum_{j_1} a_{j_1 1} e_{j_1}, \dots, \sum_{j_n} a_{j_n n} e_{j_n}\Big)
= \sum_{(p_1, \dots, p_n)} a_{p_1 1} \cdots a_{p_n n}\; \omega(e_{p_1}, \dots, e_{p_n}),
$$

the sum running over all ordered $n$-tuples of indices. If two $p_i$ coincide,
the term vanishes by alternation. The surviving terms have all $p_i$ distinct;
an injective self-map of a finite set is a bijection, so
$(p_1, \dots, p_n)$ is a permutation $\sigma$, and Lemma 4.5 evaluates
$\omega(e_{\sigma(1)}, \dots, e_{\sigma(n)})$ as
$\operatorname{sgn}(\sigma)\,\omega(e_1, \dots, e_n)$. Summing the surviving
terms gives the display. $\blacksquare$

**Theorem 4.7 (existence: the Leibniz form).** The function

$$
D(v_1, \dots, v_n) = \sum_{\sigma \in S_n} \operatorname{sgn}(\sigma)\,
a_{\sigma(1) 1} \cdots a_{\sigma(n) n}, \qquad v_i = \sum_j a_{ji} e_j,
$$

is an alternating $n$-linear form with $D(e_1, \dots, e_n) = 1$.

**Proof.** *$n$-linearity.* In the $\sigma$-term exactly one factor,
$a_{\sigma(i) i}$, involves $v_i$, and it is the coordinate of $v_i$ along
$e_{\sigma(i)}$, a linear function of $v_i$. A sum of functions each linear in
$v_i$ is linear in $v_i$; this holds for every $i$.

*Alternation.* Let $\tau = (i\ j)$ be a transposition and compare
$D(v_{\tau(1)}, \dots, v_{\tau(n)})$ with $D(v_1, \dots, v_n)$ term by term.
The $\sigma$-term of the former is
$\operatorname{sgn}(\sigma) \prod_l a_{\sigma(l), \tau(l)}$ (the $l$-th
argument is $v_{\tau(l)}$, whose coordinates are indexed by $\tau(l)$).
Reindex the product with $l = \tau(l')$: since $\tau^2 = \operatorname{id}$,
the product becomes $\prod_{l'} a_{\sigma(\tau(l')), l'} = \prod_{l'}
a_{\sigma'(l'), l'}$ where $\sigma' = \sigma\tau$. And
$\operatorname{sgn}(\sigma) = \operatorname{sgn}(\sigma'\tau) =
\operatorname{sgn}(\sigma')\operatorname{sgn}(\tau) = -\operatorname{sgn}(\sigma')$
by Proposition 4.3(ii). So the terms of $D(v_{\tau(1)}, \dots)$ are exactly
the negatives of the terms of $D(v_1, \dots)$, and
$D(v_{\tau(1)}, \dots, v_{\tau(n)}) = -D(v_1, \dots, v_n)$; taking
$(i, j)$ to be any two positions proves alternation via Lemma 4.4's
equivalence.

*Normalisation.* The coordinates of $e_i$ are $a_{ji} = \delta_{ji}$. The
$\sigma$-term is $\operatorname{sgn}(\sigma) \prod_l \delta_{\sigma(l), l}$:
nonzero only if $\sigma(l) = l$ for every $l$, i.e. $\sigma =
\operatorname{id}$, contributing $+1 \cdot 1 = 1$. $\blacksquare$

**Definition (determinant).** The **determinant** of an $n \times n$ matrix
$B = (b_{ij})$ is the value of the Leibniz form on its columns:
$\det B = \sum_{\sigma} \operatorname{sgn}(\sigma) b_{\sigma(1) 1} \cdots
b_{\sigma(n) n}$. The **determinant** of a linear map $T: V \to V$ is
$\det T := \det B$, where $B$ is the matrix of $T$ in any basis; Corollary 4.9
shows the choice of basis does not matter.

**Theorem 4.8 (multiplicativity).** For linear maps $S, T: V \to V$,
$\det(S \circ T) = \det(S) \det(T)$.

**Proof.** Fix $S$ and consider $\omega(v_1, \dots, v_n) = D(Sv_1, \dots,
Sv_n)$, an alternating $n$-linear form: composing each argument with the
linear map $S$ preserves multilinearity, and repeated arguments still give
zero. By Theorem 4.6, $\omega$ is determined by its value on the basis:
$\omega = c\, D$ with $c = \omega(e_1, \dots, e_n) = D(Se_1, \dots, Se_n) =
\det S$. So for *all* arguments,

$$
D(Sv_1, \dots, Sv_n) = \det(S)\, D(v_1, \dots, v_n).
$$

Apply this twice:

$$
D(S(Tv_1), \dots, S(Tv_n)) = \det(S)\, D(Tv_1, \dots, Tv_n) =
\det(S)\det(T)\, D(v_1, \dots, v_n).
$$

The left side is itself an alternating $n$-form in the $v_i$, so by Theorem
4.6 it equals its own basis value times $D$, and that basis value is
$D(STe_1, \dots, STe_n) = \det(ST)$. Cancelling the nonzero form $D$
(Theorem 4.7 gives $D(e_1, \dots, e_n) = 1$) yields
$\det(ST) = \det(S)\det(T)$. $\blacksquare$

**Corollary 4.9.** A linear map $T: V \to V$ is invertible if and only if
$\det T \neq 0$; and $\det T$ does not depend on the basis used to compute it.

**Proof.** If $T$ is invertible with inverse $T^{-1}$, then
$1 = \det(\operatorname{id}) = \det(T^{-1} T) = \det(T^{-1})\det(T)$ (the
Leibniz sum of the identity matrix is $1$, and multiplicativity applies), so
$\det T \neq 0$. Conversely, if $\det T = 0$ and an inverse $S$ existed, the
same computation would give the absurdity $1 = \det(S)\det(T) = 0$; so no
inverse exists. For basis independence: if $B$ and $B'$ are the matrices of
$T$ in bases $e$ and $e'$, let $S$ be the matrix whose $j$-th column holds
the $e$-coordinates of $e'_j$. Then the $j$-th column of $BS$ holds the
$e$-coordinates of $Te'_j$, and applying $S^{-1}$ converts $e$-coordinates to
$e'$-coordinates; so $B' = S^{-1} B S$. Hence
$\det B' = \det(S^{-1})\det B\det S = \det B$, since
$\det(S^{-1})\det(S) = \det(S^{-1}S) = \det(\operatorname{id}) = 1$ by the
invertibility computation above. $\blacksquare$

**The One-Line Reveal.** The determinant is not decreed; it is *forced*. An
alternating $n$-form is determined by one scalar (Theorem 4.6), a normalised
one exists (Theorem 4.7), so the determinant exists and is unique, and the
Leibniz formula is simply what uniqueness dictates. Multiplicativity then
falls out of composing an alternating form with a linear map.

## 5. The Exterior Algebra

The exterior powers are the spaces of $k$-dimensional volume measurements:
$\bigwedge^2 V$ measures signed areas, $\bigwedge^k V$ measures signed
$k$-volume. They are what later levels use to build differential forms.

**Definition (free vector space).** For a set $S$, the **free vector space**
on $S$ is the set of formal finite linear combinations
$\sum_s c_s [s]$ with $c_s \in k$ (all but finitely many coefficients zero),
with coordinatewise addition and scalar multiplication. The symbols $[s]$ form
a basis: a linear map from a free vector space is uniquely determined by
arbitrary prescribed values on the symbols $[s]$.

**Definition (exterior power).** Fix $k \geq 1$ and let $F$ be the free
vector space on $V^k$ (the set of $k$-tuples of vectors), writing
$[v_1, \dots, v_k]$ for the symbol of a tuple. Let $R \subseteq F$ be the
subspace spanned by every instance of the multilinearity relations in each
argument,

$$
[v_1 + v_1', v_2, \dots, v_k] - [v_1, v_2, \dots, v_k] - [v_1', v_2, \dots, v_k],
\qquad
[c\, v_1, v_2, \dots, v_k] - c\,[v_1, v_2, \dots, v_k],
$$

and every instance of the repetition relations
$[v_1, \dots, v, \dots, v, \dots, v_k]$ (any two positions equal). The
**$k$-th exterior power** is the quotient $\bigwedge^k V = F / R$ (a quotient
of vector spaces, Section 3), and the coset of $[v_1, \dots, v_k]$ is written
$v_1 \wedge \cdots \wedge v_k$, a **pure wedge**. We also set
$\bigwedge^0 V = k$.

By construction, the map $(v_1, \dots, v_k) \mapsto v_1 \wedge \cdots \wedge
v_k$ is $k$-linear (the multilinearity relations say exactly this) and
alternating: a tuple with a repeated entry lies in $R$, so its wedge is zero.

**Theorem 5.1 (anticommutativity).** Exchanging any two positions of a pure
wedge negates it:
$v_1 \wedge \cdots \wedge v_s \wedge \cdots \wedge v_r \wedge \cdots \wedge v_k
= -\, v_1 \wedge \cdots \wedge v_r \wedge \cdots \wedge v_s \wedge \cdots
\wedge v_k$ for $r < s$.

**Proof.** The tuple with $v_r + v_s$ in both positions $r$ and $s$ has a
repeated entry, so its wedge is zero. Expand by $k$-linearity in those two
positions: $0 = \omega_r + \omega_{rs} + \omega_{sr} + \omega_s$, where
$\omega_{rs}$ is the wedge with $(v_r, v_s)$ in the two positions, $\omega_{sr}$
with them exchanged, and $\omega_r, \omega_s$ the wedges with one vector
repeated in both positions. The last two vanish; so
$\omega_{rs} + \omega_{sr} = 0$. $\blacksquare$

**Corollary 5.2.** If $v_1, \dots, v_k$ are linearly dependent, then
$v_1 \wedge \cdots \wedge v_k = 0$.

**Proof.** Exchanging positions only changes a wedge by a sign (Theorem 5.1),
so reorder so that the dependent vector is last: some
$v_k = \sum_{j < k} c_j v_j$. Then by linearity in the last argument,
$v_1 \wedge \cdots \wedge v_k = \sum_{j < k} c_j\, v_1 \wedge \cdots \wedge
v_{k-1} \wedge v_j$, and every summand has $v_j$ in two positions, hence
vanishes. $\blacksquare$

**Theorem 5.3 (universal property).** For every alternating $k$-linear map
$\beta: V^k \to W$ (with $W$ any vector space) there is a unique linear map
$\tilde\beta: \bigwedge^k V \to W$ with
$\tilde\beta(v_1 \wedge \cdots \wedge v_k) = \beta(v_1, \dots, v_k)$.

**Proof.** Let $\beta_F: F \to W$ be the linear map sending each symbol
$[v_1, \dots, v_k]$ to $\beta(v_1, \dots, v_k)$; a linear map out of a free
vector space is determined by arbitrary values on the basis symbols. The
subspace $R$ lies in $\ker \beta_F$: each multilinearity relation maps to
$\beta(v_1 + v_1', v_2, \dots) - \beta(v_1, v_2, \dots) - \beta(v_1', v_2,
\dots) = 0$ because $\beta$ is multilinear, and each repetition relation maps
to $\beta(\dots, v, \dots, v, \dots) = 0$ because $\beta$ is alternating. By
the universal property of the quotient (Theorem 3.2, with $F$ in place of $V$
and $R$ in place of $U$), $\beta_F$ induces a linear
$\tilde\beta: F/R \to W$ with $\tilde\beta \circ \pi = \beta_F$ for the
quotient map $\pi: F \to F/R$; evaluating on symbols gives the claimed
formula. For uniqueness: the symbols span $F$, so their images, the pure
wedges, span $\bigwedge^k V$ (surjectivity of $\pi$ preserves spanning), and
a linear map is determined by its values on a spanning set.
$\blacksquare$

**Theorem 5.4 (dimension).** $\dim \bigwedge^k V = \binom{n}{k}$ for
$0 \leq k \leq n$, and $\bigwedge^k V = 0$ for $k > n$.

**Proof.** *Spanning.* Expand each argument of a pure wedge in the basis,
using $k$-linearity:

$$
v_1 \wedge \cdots \wedge v_k = \sum_{(p_1, \dots, p_k)} a_{p_1 1} \cdots
a_{p_k k}\; e_{p_1} \wedge \cdots \wedge e_{p_k}.
$$

If some index repeats, the wedge vanishes (Corollary 5.2). Otherwise the
indices are distinct, and reordering $(p_1, \dots, p_k)$ into increasing
order negates the wedge by $-1$ at each exchange of positions (Theorem 5.1),
for a total sign $(-1)^m$ when $m$ exchanges are used. The parity of $m$ is
independent of how the reordering is performed (Proposition 4.3(i) applied to
the reordering permutation), so the sign is well defined, and the wedge
equals $\pm\, e_{i_1} \wedge \cdots \wedge e_{i_k}$ with $i_1 < \cdots <
i_k$. Hence the *increasing wedges* $e_I := e_{i_1} \wedge \cdots \wedge
e_{i_k}$, one for each $k$-element subset $\{i_1 < \cdots < i_k\}$ of
$\{1, \dots, n\}$, span $\bigwedge^k V$. For $k > n$ there are no such
subsets, and $\bigwedge^k V = 0$.

*Independence.* For each increasing tuple $J = (j_1 < \cdots < j_k)$ we build
a linear functional $\lambda_J: \bigwedge^k V \to k$ with $\lambda_J(e_I) = 1$
if $I = J$ and $0$ otherwise. First define, using the dual basis $e^{j_p}$
from Section 2 and the determinant of Section 4, the function

$$
\beta_J(v_1, \dots, v_k) := \det\big(e^{j_p}(v_i)\big)_{p,\, i = 1}^{k},
$$

the determinant of the $k \times k$ matrix whose $(p, i)$ entry is the
$e^{j_p}$-coordinate of $v_i$. Each entry is linear in $v_i$, so $\beta_J$ is
$k$-linear. It is alternating: if two arguments $v_i, v_{i'}$ coincide, two
*columns* of the matrix coincide, and the term-pairing computation in the
proof of Theorem 4.7 shows the Leibniz sum of a matrix with two equal columns
negates under their exchange, so it is zero. By the universal property
(Theorem 5.3), $\beta_J$ induces a linear functional
$\lambda_J = \tilde\beta_J$ on $\bigwedge^k V$. Now evaluate on basis wedges:
$e^{j_p}(e_{i_q}) = \delta_{j_p i_q}$, so $\lambda_J(e_I) = \det(\delta_{j_p
i_q})$. If $I = J$, the matrix is the identity and the value is $1$. If
$I \neq J$, the two increasing tuples differ as sets, so some $j_p$ appears
in no $i_q$: the $p$-th row of the matrix is zero, and the determinant is
$0$.

Finally, if $\sum_I c_I e_I = 0$, apply $\lambda_J$:
$0 = \sum_I c_I \lambda_J(e_I) = c_J$ for every $J$. So all coefficients
vanish: the increasing wedges are independent. Together with spanning, they
are a basis, and $\dim \bigwedge^k V$ is the number of $k$-element subsets of
an $n$-element set, $\binom{n}{k}$. $\blacksquare$

**Corollary 5.5 (the top wedge and the determinant).** $\bigwedge^n V$ is
one-dimensional, spanned by $e_1 \wedge \cdots \wedge e_n$, and for all
$v_1, \dots, v_n$,

$$
v_1 \wedge \cdots \wedge v_n = \det(B)\; e_1 \wedge \cdots \wedge e_n,
$$

where $B$ is the matrix whose $i$-th column holds the coordinates of $v_i$.

**Proof.** $\dim \bigwedge^n V = \binom{n}{n} = 1$ with that spanning vector,
by Theorem 5.4. The identity is the spanning computation specialised to
$k = n$: expanding gives
$\sum_{(p_1, \dots, p_n)} a_{p_1 1} \cdots a_{p_n n}\, e_{p_1} \wedge \cdots
\wedge e_{p_n}$; non-increasing tuples either repeat an index (vanishing) or
form a permutation $\sigma$ of $(1, \dots, n)$, whose reordering into
increasing order contributes exactly the sign $\operatorname{sgn}(\sigma)$
(as in the proof of Theorem 5.4, with well-definedness from Proposition
4.3(i)). The surviving coefficient is
$\sum_\sigma \operatorname{sgn}(\sigma) a_{\sigma(1) 1} \cdots a_{\sigma(n) n} =
\det B$. $\blacksquare$

**Remark (the full exterior algebra).** The direct sum
$\bigwedge V = \bigwedge^0 V \oplus \bigwedge^1 V \oplus \cdots \oplus
\bigwedge^n V$ has dimension $2^n$ and carries a multiplication extending
$\wedge$, with a $p$-wedge and a $q$-wedge multiplying into
$\bigwedge^{p+q} V$. Proving that multiplication well defined on the quotients
is a short universal-property argument, constructed when it is first needed
for differential forms; the individual powers built here are what the
intervening levels use.

## 6. Self-test

1. Prove that the coordinates of a vector in a basis are unique. (§1 – two
   expressions for the same vector subtract to a vanishing combination, and
   independence forces every coefficient of the difference to be zero.)
2. A space is spanned by four vectors and contains a linearly independent
   list of five. Which lemma rules this out, and what does its proof do when
   the independent list is longer than the spanning one? (§1 – the exchange
   lemma, Lemma 1.3; it replaces spanning vectors one at a time until none
   remain, and the next replacement attempt exhibits a dependence among the
   independent list, a contradiction.)
3. Prove that $T^*: W^* \to V^*$ is linear. (§2 – composition distributes
   over pointwise sums and scalar multiples of functionals, evaluated at an
   arbitrary $v \in V$.)
4. Compute $\operatorname{sgn}$ of the 3-cycle $(1\ 2\ 3)$ and prove that
   $\operatorname{sgn}(\sigma^{-1}) = \operatorname{sgn}(\sigma)$. (§4 –
   $(1\ 2\ 3) = (1\ 3)(1\ 2)$, two transpositions, sign $+1$; and
   $\operatorname{sgn}(\sigma)\operatorname{sgn}(\sigma^{-1}) =
   \operatorname{sgn}(\operatorname{id}) = +1$ by multiplicativity.)
5. Prove $\det(ST) = \det(S)\det(T)$ without expanding either side. (§4 –
   the assignment $(v_1, \dots, v_n) \mapsto D(STv_1, \dots, STv_n)$ is an
   alternating $n$-form, so Theorem 4.6 reduces it to its basis value, which
   factors as the two determinant evaluations.)
6. Prove that $v \wedge w = 0$ in $\bigwedge^2 V$ if and only if $v, w$ are
   linearly dependent. (§5 – Corollary 5.2 gives one direction; for the
   other, extend the independent pair $\{v, w\}$ to a basis (Lemma 1.5) and
   evaluate the functional $\lambda_{(1, 2)}$ from Theorem 5.4, which sends
   $v \wedge w$ to $1$.)

### The One-Line Reveal (for this page)

The entire page follows from one shift: treat vectors as geometric objects,
not as coordinate arrays. Coordinates appear only when a basis is fixed, and
every structural theorem states exactly what does and does not depend on that
choice. The exchange lemma fixes dimension without matrices; the dual basis
fixes the measurements on $V$; the universal properties fix what survives
quotienting and wedging; and the determinant emerges as the unique normalised
alternating form, with the Leibniz formula derived rather than decreed.

### Where to go next

- [Level 2: Topology](/17-core-course/2a-topology/) – continuity,
  connectedness, and compactness proved from the open-set axioms, building
  directly on the quotient and universal-property machinery of this page.
- [Real Analysis](/3-real-analysis/) – the rigorous
  $\varepsilon$–$\delta$ foundations that underpin the measure theory of
  Level 4.
- [Linear Algebra Done Wrong](https://www.math.brown.edu/~treil/ladw/) –
  Treil's free book, which develops this material at full depth.
