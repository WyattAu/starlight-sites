---
date: 2026-09-19T00:00:00.000Z
title: "Number Theory and Cryptography"
description: 'UNIVERSITY Mathematics notes: RSA, Diffie–Hellman and ElGamal from first principles — how Euler and Fermat theorems, modular inverses and discrete logarithms become public-key cryptography.'
tags:
  - Mathematics
  - University
categories:
  - Mathematics
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "7 Number Theory", "url": "https://mathematics.wyattau.com/7-number-theory"}, {"name": "Number Theory and Cryptography", "url": "https://mathematics.wyattau.com/7-number-theory/number-theory-and-cryptography"}]
}
</script>

### 12.1 Public-Key Cryptography

Classical ciphers share one key: anyone who can encrypt can decrypt. **Public-key cryptography**
splits the key: a **public key** (published, used to encrypt or verify) and a **private key**
(secret, used to decrypt or sign). The trick is a **one-way function with a trapdoor**: easy to
compute in one direction, computationally infeasible to invert without secret knowledge.

Number theory supplies both halves:

- **Easy**: multiply two large primes; compute modular powers by repeated squaring.
- **Hard**: factor a 600-digit composite; compute discrete logarithms modulo a large prime.

### 12.2 RSA

**Setup.** Choose two large distinct primes $p, q$ (each hundreds of digits). Let $n = pq$ and
$\varphi(n) = (p-1)(q-1)$. Choose $e$ with $\gcd(e, \varphi(n)) = 1$; compute the private
exponent $d$ with $ed \equiv 1 \pmod{\varphi(n)}$ (extended Euclid). Public key: $(n, e)$.
Private key: $d$.

**Encryption** of a message $m$ ($0 \leq m < n$): $c \equiv m^e \pmod n$.

**Decryption**: $m \equiv c^d \pmod n$.

*Why it works.* Euler's theorem: since $\gcd(m, n) = 1$ (for $m$ coprime to $n$),

$$
c^d \equiv (m^e)^d = m^{ed} \equiv m \pmod n,
$$

because $ed \equiv 1 \pmod{\varphi(n)}$ implies $ed = 1 + k\varphi(n)$ and
$m^{ed} = m \cdot (m^{\varphi(n)})^k \equiv m$. (A sharper proof works for all $m$ using
$m^{ed} \equiv m \pmod p$ and $\pmod q$ and CRT.)

**Worked example (toy size).** $p = 61$, $q = 53$, $n = 3233$,
$\varphi(n) = 60 \cdot 52 = 3120$, $e = 17$, $d = 2753$ (since $17 \cdot 2753 = 46801 = 15 \cdot
3120 + 1$). Encrypt $m = 65$: $c = 65^{17} \bmod 3233 = 2790$. Decrypt: $2790^{2753} \bmod 3233 =
65$ ✓ (by repeated squaring: 12 squarings and a handful of multiplications).

**Security.** Recovering $d$ from $(n, e)$ is as hard as factoring $n$ (there are reductions both
ways for proper key generation). All classical attacks reduce to factoring; 2048-bit $n$ is the
current floor. *Pitfall*: shared primes, small $e$ without padding, and deterministic encryption
are the standard exam criticisms.

### 12.3 Diffie–Hellman Key Exchange

Public: a large prime $p$ and a primitive root $g$ modulo $p$.

1. Alice chooses secret $a$; publishes $A = g^a \bmod p$.
2. Bob chooses secret $b$; publishes $B = g^b \bmod p$.
3. Shared secret: Alice computes $K = B^a \equiv g^{ab}$; Bob computes $K = A^b \equiv g^{ab}$
   (both reduced mod $p$).

An eavesdropper sees $p, g, g^a, g^b$ but must solve the **discrete logarithm problem** to get $a$
or $b$ — infeasible for 2048-bit $p$.

*Worked example.* $p = 23$, $g = 5$ (primitive root mod 23). Alice: $a = 6$, $A = 5^6 = 15625
\equiv 8 \pmod{23}$. Bob: $b = 15$, $B = 5^{15} \equiv 19 \pmod{23}$. Shared:
$K = 19^6 \equiv 2 \pmod{23} = 8^{15} \pmod{23}$ ✓.

### 12.4 ElGamal Encryption

Public: $p, g$ as above and Alice's public key $A = g^a$. To encrypt $m$ to Alice: pick ephemeral
$k$, send $c_1 = g^k$ and $c_2 = m \cdot A^k \bmod p$. Alice decrypts with her secret $a$:

$$
m = c_2 \cdot (c_1^a)^{-1} \pmod p,
$$

using $c_1^a = g^{ka} = A^k$. Security rests on the Diffie–Hellman problem.

### 12.5 Euler, Fermat and Practical Detail

- Repeated squaring computes $m^e \bmod n$ in $O(\log e)$ multiplications — the reason large
  exponents are feasible.
- $\gcd(e, \varphi(n)) = 1$ guarantees $d$ exists (multiplicative inverse modulo $\varphi(n)$,
  extended Euclid — see [Congruences](/7-number-theory/3_congruences/)).
- Decryption works for **all** $m$ (not just coprime ones) when $n = pq$: check $m^{ed} \equiv m$
  mod $p$ and mod $q$ separately, then CRT.

### 12.6 Common Pitfalls

- $\varphi(n) = (p-1)(q-1)$ requires $p \neq q$: with $p = q$, $\varphi(n) = p(p-1)$, not
  $(p-1)^2$.
- Never publish $d$ or $\varphi(n)$: knowing $\varphi(n)$ is equivalent to knowing $p$ and $q$.
- Textbook RSA is **deterministic** and malleable: real systems use randomised padding (OAEP);
  state this in "criticise the scheme" questions.
- Diffie–Hellman without authentication is a man-in-the-middle target: the fix is signatures
  (RSA or ElGamal signatures), not a change of group.

## See Also

- [Fermat, Euler and Wilson Theorems](/7-number-theory/4_fermat-euler-and-wilson-theorems/)
- [Primitive Roots and Discrete Logarithms](/7-number-theory/7_primitive-roots-and-discrete-logarithms/)
- [Linear Congruences and the Chinese Remainder Theorem](/7-number-theory/5_linear-congruences-and-the-chinese-remainder-theorem/)


$$
m^{ed} \equiv m \pmod n \quad \text{whenever } ed \equiv 1 \pmod{\varphi(n)}
$$

A full exam question walks the entire key generation: choose primes, compute $n$ and
$\varphi(n)$, pick $e$ and invert it, encrypt a small message by repeated squaring, decrypt, and
then criticise the scheme. Practise each stage to the point where repeated squaring is mechanical.

The standard criticism list: deterministic encryption leaks equality of plaintexts; small
decryption exponents fall to Wiener's continued-fraction attack (the continued-fraction page is
the natural companion); shared factors between two public moduli break both keys — the factoring
is a single gcd.
