---
title: "Cell Biology -- Diagnostic Tests"
description: ""fluid" because
phospholipids can move laterally within their layer (but rarely flip-flop between layers), and
proteins can drift within the bilayer. "Mosaic" refers to the scattered pattern of different
proteins.

Small non-polar molecules diffuse because the hydrophobic core of the bilayer (fatty acid tails)
presents no energetic barrier to them -- they are soluble in the lipid environment. They move down
their concentration gradient by simple diffusion.

Ions are charged and hydrophilic. The hydrophobic core is highly unfavourable for charged species --
the dielectric constant is very different from water. Ions cannot shed their hydration shell to
enter the non-polar interior. Transport proteins (channel proteins or carrier proteins) provide a
hydrophilic pathway through the membrane. Channel proteins form pores with polar amino acid linings;
carrier proteins undergo conformational changes to shuttle ions across.

Cholesterol is embedded between phospholipids in animal cell membranes. It acts as a bidirectional
fluidity buffer: at high temperatures, it restricts phospholipid movement (reducing excessive
fluidity), and at low temperatures, it prevents tight packing (maintaining fluidity). This ensures
membrane integrity across a range of temperatures.

## Integration Tests

### IT-1: Cell Division and Cancer (with Molecular Biology)

**Question:** Explain how a mutation in a proto-oncogene can lead to uncontrolled cell division.
Include the roles of: (a) the normal proto-oncogene product, (b) how the mutation changes its
function, (c) the cell cycle checkpoints that should prevent this, and (d) why multiple mutations
are required for cancer development.

**Solution:**

(a) Normal proto-oncogenes encode proteins that promote cell division, such as growth factor
receptors, signal transduction proteins (e.g., Ras), and transcription factors (e.g., Myc). In a
healthy cell, these proteins are activated only when appropriate growth signals are received, and
their activity is tightly regulated. For example, Ras is active only when bound to GTP and is
inactivated by its intrinsic GTPase activity.

(b) A mutation can convert a proto-oncogene into an oncogene through several mechanisms: point
mutation producing a constitutively active protein (e.g., Ras locked in GTP-bound state), gene
amplification (multiple copies producing excess protein), or chromosomal translocation placing the
gene under a stronger promoter. The result is continuous, unregulated promotion of cell division
regardless of external signals.

(c) Cell cycle checkpoints that should prevent uncontrolled division:

- G1 checkpoint: checks cell size, nutrient availability, DNA damage (mediated by p53). If damage is
  detected, p53 activates p21 which inhibits cyclin-dependent kinases (CDKs).
- G2 checkpoint: verifies DNA replication is complete and error-free before mitosis.
- M checkpoint (spindle assembly checkpoint): ensures all chromosomes are properly attached to
  spindle fibres before anaphase.

(d) Multiple mutations are required because cells have redundant tumour suppressor mechanisms. ,
cancer requires: activation of at least one oncogene, inactivation of at least one tumour suppressor
gene (e.g., p53, Rb), and mutations enabling angiogenesis and metastasis. A single mutation is
insufficient because the remaining checkpoints can still halt division or trigger apoptosis.

---

### IT-2: Endosymbiosis and Evolution (with Evolution and Genetics)

**Question:** Outline three pieces of evidence supporting the endosymbiotic theory for the origin of
mitochondria and chloroplasts. Explain how this theory accounts for the observation that
mitochondrial DNA is inherited maternally in most animals.

**Solution:**

Three pieces of evidence:

1. **Double membrane structure:** Both mitochondria and chloroplasts have two membranes. The outer
   membrane is thought to derive from the host cell"s phagocytic vesicle, while the inner membrane
   derives from the original prokaryote's plasma membrane.

2. **Own genome and ribosomes:** Mitochondria and chloroplasts contain circular DNA (like
   prokaryotes, not linear like eukaryotic nuclear DNA), and 70S ribosomes (prokaryotic size, not
   80S). They can transcribe and translate their own proteins independently of the nucleus.

3. **Binary fission reproduction:** Both organelles divide by binary fission, the same process used
   by prokaryotes, rather than by mitosis. They cannot be synthesised de novo -- new organelles
   arise only from pre-existing ones.

Maternal inheritance explanation: During fertilisation, the sperm contributes primarily nuclear DNA
to the zygote. The sperm's midpiece contains mitochondria for powering flagellar movement, but these
mitochondria (along with the rest of the tail) are excluded from the zygote upon fusion. The egg
cell (ovum) is much larger and contains thousands of mitochondria in its cytoplasm. Therefore, the
zygote inherits its mitochondria almost exclusively from the mother. Additionally, in many species,
there is an active mechanism to selectively degrade sperm-derived mitochondria in the zygote through
ubiquitin-mediated autophagy.

---

### IT-3: Membrane Transport and Neurone Function (with Human Physiology)

**Question:** The sodium-potassium pump ($\text{Na}^+/\text{K}^+$-ATPase) moves $3\ \text{Na}^+$ out
and $2\ \text{K}^+$ in per ATP hydrolysed. Calculate the percentage of a typical neuron's resting
energy budget consumed by this pump, given that a neuron at rest has a membrane potential of
$-70\ \text{mV}$ and the pump maintains concentration gradients of
$[\text{Na}^+]_{\text{out}}/[\text{Na}^+]_{\text{in}} = 10$ and
$[\text{K}^+]_{\text{in}}/[\text{K}^+]_{\text{out}} = 30$. One ATP hydrolysis releases approximately
$50\ \text{kJ mol}^{-1}$.

**Solution:**

The work done by the pump per cycle (moving 3 Na$^+$ out and 2 K$^+$ in) against both concentration
and electrical gradients:

For $\text{Na}^+$ (moving out against both gradient and electrical gradient, since inside is
negative):
$\Delta G_{\text{Na}} = 3RT\ln\frac{[\text{Na}^+]_{\text{out}}}{[\text{Na}^+]_{\text{in}}} + 3F \times V_m$

$= 3(8.314)(310)\ln(10) + 3(96485)(0.070)$

$= 3(2577)(2.303) + 3(6754) = 17800 + 20262 = 38062\ \text{J mol}^{-1}$

For $\text{K}^+$ (moving in against the concentration gradient but with the electrical gradient):
$\Delta G_{\text{K}} = 2RT\ln\frac{[\text{K}^+]_{\text{in}}}{[\text{K}^+]_{\text{out}}} - 2F \times V_m$

$= 2(2577)\ln(30) - 2(6754) = 2(2577)(3.401) - 13508 = 17534 - 13508 = 4026\ \text{J mol}^{-1}$

Total work per cycle: $38062 + 4026 = 42088\ \text{J mol}^{-1} \approx 42\ \text{kJ mol}^{-1}$

Efficiency: $\frac{42}{50} \times 100 = 84\%$

The $\text{Na}^+/\text{K}^+$ pump is estimated to consume approximately 60--70% of a neuron's total
ATP at rest. This is because the pump must continuously work against the leak channels that allow
$\text{Na}^+$ to diffuse back in and $\text{K}^+$ to diffuse back out, maintaining the resting
potential that is essential for action potential generation.
