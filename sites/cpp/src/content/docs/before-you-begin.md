their performance claims in C++. The C++ listings; a Monte Carlo estimator, a
kernel trick timing, a Metropolis–Hastings inner loop; assume you can read a
The prerequisite is school algebra and one scripting language; Python is the
That one difference; a translation step before execution; explains every
**Definition.** **Compilation** translates source code into machine code; the
CPU's native instructions; producing an executable file.
*optimise aggressively* (an unoptimised build can be 10–50× slower; the
the errors it reports; "type mismatch", "undeclared identifier", "undefined
reference"; are caught *before the program exists*. This is why static types
`double` is the double-precision floating-point type; the C++ counterpart of
for brevity; their C++ examples rely on static typing for guarantees; and the
the type from the initialiser; `double` here. Use it when the type is obvious
original object instead; no copy.
element on every call; the copy alone can dominate the running time. The
- `std::mt19937_64 rng(2026)`; the seeded generator, the same reproducibility
- `std::uniform_real_distribution<double> U(0.0, 1.0)`; a distribution object:
- `std::printf("...%.3e\n", value)`; the scientific-format print, where
- `-O3` in the build line; because the comparisons being made are
   while Python's `area("hello")` fails only at runtime; and only if that line
`const char*`/string; a compile-time type error. Python fails at runtime, and
the caller's vector directly; same values, no copy, and a visible guarantee
with the same standard library implementation; which is why the listings'
(5) `6.912e-04`; mantissa to three significant digits, times ten to a power of
- [The C++ Track](/); compilation model, toolchain, concurrency, and the rest.
- [Measure-Theoretic Probability](https://machine-learning.wyattau.com/1-probabilistic-machine-learning/1_measure-theoretic-probability/) -
- [Gaussian Processes](https://machine-learning.wyattau.com/1-probabilistic-machine-learning/9_gaussian-processes/) -