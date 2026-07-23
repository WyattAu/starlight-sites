---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "cbse", "url": "https://cbse.wyattau.com"}, {"name": "Physics", "url": "https://cbse.wyattau.com/physics"}, {"name": "Magnetic Effects", "url": "https://cbse.wyattau.com/physics/magnetic-effects"}, {"name": "Index", "url": "https://cbse.wyattau.com/physics/magnetic-effects/index"}]
}
</script>

<!-- Course Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Magnetic Effects of Current and Magnetism",
  "description": "CBSE Class 12 physics: Magnetic effects of current with Biot-Savart law, Ampere's law, and worked examples.",
  "provider": {
    "@type": "Organization",
    "name": "Wyatt's Notes",
    "url": "https://cbse.wyattau.com"
  },
  "url": "https://cbse.wyattau.com",
  "educationalLevel": "Secondary",
  "inLanguage": "en",
  "isAccessibleForFree": true,
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "online",
    "courseWorkload": "PT1H"
  }
}
</script>
title: "Magnetic Effects of Current and Magnetism"
description: "CBSE Class 12 physics: Magnetic effects of current with Biot-Savart law, Ampere's law, and worked examples."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "cbse", "url": "https://cbse.wyattau.com"}, {"name": "Physics", "url": "https://cbse.wyattau.com/physics"}, {"name": "Magnetic Effects", "url": "https://cbse.wyattau.com/physics/magnetic-effects"}, {"name": "Index", "url": "https://cbse.wyattau.com/physics/magnetic-effects/index"}]
}
</script>

<!-- Course Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Magnetic Effects of Current and Magnetism",
  "description": "CBSE Class 12 physics: Magnetic effects of current with Biot-Savart law, Ampere's law, and worked examples.",
  "provider": {
    "@type": "Organization",
    "name": "Wyatt's Notes",
    "url": "https://cbse.wyattau.com"
  },
  "url": "https://cbse.wyattau.com",
  "educationalLevel": "Secondary",
  "inLanguage": "en",
  "isAccessibleForFree": true,
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "online",
    "courseWorkload": "PT1H"
  }
}
</script>

## Magnetic Effects of Current and Magnetism

Magnetic effects of current covers the magnetic field produced by electric currents, force on moving charges in magnetic fields, and the behavior of materials in magnetic fields.

## Key Concepts

- Magnetic field $\vec{B}$ is a vector field measured in tesla (T)
- Biot-Savart law: $d\vec{B} = \frac{\mu_0}{4\pi} \frac{I \, d\vec{l} \times \hat{r}}{r^2}$
- Ampere's circuital law: $\oint \vec{B} \cdot d\vec{l} = \mu_0 I_{enc}$
- Force on a moving charge: $\vec{F} = q\vec{v} \times \vec{B}$
- Force on a current-carrying conductor: $\vec{F} = I\vec{l} \times \vec{B}$
- Cyclotron motion: radius $r = \frac{mv}{qB}$, period $T = \frac{2\pi m}{qB}$
- Magnetic dipole moment: $\vec{m} = NI\vec{A}$ (for a coil of $N$ turns)
- Torque on a dipole: $\vec{\tau} = \vec{m} \times \vec{B}$
- Para-, dia-, and ferromagnetic materials respond differently to external fields

## Worked Example 1 — Magnetic Field at the Centre of a Circular Loop

**Problem:** A circular loop of radius 0.1 m carries a current of 2 A. Find the magnetic field at its centre.

**Solution:**

Using the Biot-Savart law for a circular loop at its centre:

$$B = \frac{\mu_0 I}{2R}$$

$$B = \frac{4\pi \times 10^{-7} \times 2}{2 \times 0.1} = \frac{4\pi \times 10^{-7}}{0.1} = 4\pi \times 10^{-6} \, \text{T}$$

$$B \approx 1.26 \times 10^{-5} \, \text{T}$$

**Common mistake:** Forgetting that for a coil of $N$ turns, the field is $B = \frac{\mu_0 N I}{2R}$.

## Worked Example 2 — Force on a Charge in a Magnetic Field

**Problem:** A proton moves with velocity $2 \times 10^6 \, \text{m/s}$ at $30^\circ$ to a uniform magnetic field of $0.1 \, \text{T}$. Find the magnitude of the force.

**Solution:**

$$F = qvB\sin\theta = 1.6 \times 10^{-19} \times 2 \times 10^6 \times 0.1 \times \sin 30^\circ$$

$$F = 1.6 \times 10^{-19} \times 2 \times 10^6 \times 0.1 \times 0.5 = 1.6 \times 10^{-14} \, \text{N}$$

**Common mistake:** Forgetting the $\sin\theta$ factor. When $\theta = 0$ (velocity parallel to field), the force is zero.

## Worked Example 3 — Ampere's Law for a Solenoid

**Problem:** A long solenoid has 500 turns per metre and carries a current of 3 A. Find the magnetic field inside the solenoid.

**Solution:**

For an ideal long solenoid:

$$B = \mu_0 n I$$

where $n = 500$ turns/m:

$$B = 4\pi \times 10^{-7} \times 500 \times 3 = 4\pi \times 10^{-7} \times 1500$$

$$B = 6\pi \times 10^{-4} \approx 1.88 \times 10^{-3} \, \text{T}$$

**Common mistake:** Confusing total turns $N$ with turns per unit length $n = N/L$.

## Worked Example 4 — Cyclotron Frequency

**Problem:** A proton is accelerated in a cyclotron with a magnetic field of $0.5 \, \text{T}$. Find the cyclotron frequency.

**Solution:**

The cyclotron frequency is:

$$f = \frac{qB}{2\pi m}$$

$$f = \frac{1.6 \times 10^{-19} \times 0.5}{2\pi \times 1.67 \times 10^{-27}}$$

$$f = \frac{8 \times 10^{-20}}{1.049 \times 10^{-26}} \approx 7.62 \times 10^6 \, \text{Hz} \approx 7.62 \, \text{MHz}$$

**Common mistake:** The cyclotron frequency is independent of the speed and radius of the particle. the answer varies based on only on the charge, mass, and magnetic field.

## Cross-References

- **[Current Electricity](../current-electricity/index.md):** Electric currents produce magnetic fields — understanding circuits is prerequisite to understanding magnetic effects.
- **[Electrostatics](../electrostatics/index.md):** Charges at rest produce electric fields; charges in motion produce magnetic fields — they're the electromagnetic duality.
- **[Atoms and Nuclei](../atoms-nuclei/index.md):** The Bohr model uses magnetic fields to explain atomic spectra and the Zeeman effect.
- **[Optics](../optics/index.md):** Electromagnetic waves include visible light — Maxwell's equations unify magnetic effects with optics.

## Practice Problems

1. Find the magnetic field at the centre of a circular coil of radius 0.2 m with 100 turns carrying 1.5 A.
2. An electron moves at $10^7 \, \text{m/s}$ perpendicular to a field of $0.01 \, \text{T}$. Find the radius of its circular path.
3. A solenoid of length 0.5 m has 2000 turns. Find the current required to produce a field of $2 \times 10^{-3} \, \text{T}$.

## Intuition

**Electricity and magnetism are two faces of the same coin:** Moving charges create magnetic fields, and changing magnetic fields create electric currents — they're inseparable partners. Think of a wire carrying current as creating an invisible magnetic "halo" around it, like a force field. A solenoid (coil of wire) concentrates this field inside, making it uniform — like organizing scattered magnets into a neat row so their fields reinforce. The force on a moving charge in a magnetic field is always perpendicular to its motion, which is why charged particles spiral in circles rather than straight lines.

**Why it matters:** Magnetic effects underpin electric motors (which power everything from fans to electric cars), generators (which produce the electricity you use), MRI machines (which use magnetic fields to image your body), and particle accelerators (which explore the fundamental structure of matter).

**The key insight:** The magnetic force on a moving charge is always perpendicular to both velocity and field, meaning it changes direction but never speed — it's the ultimate "turning force" that makes circular motion possible without doing work.

## Common Exam Patterns

- Biot-Savart law problems often involve straight wires and circular loops
- Ampere's law is useful for symmetric current distributions (solenoids, toroids)
- The right-hand rule determines the direction of the magnetic field
- Force on a current-carrying wire is the vector sum of forces on individual charges
- Practice converting between SI units (T, G where $1 \, \text{T} = 10^4 \, \text{G}$)

## Common Mistakes

### Mistake 1: Using the right-hand rule incorrectly for force on a moving charge

The force on a moving charge is $\vec{F} = q\vec{v} \times \vec{B}$. For a positive charge, point your right hand fingers in the direction of $\vec{v}$, curl them toward $\vec{B}$, and your thumb points in the direction of $\vec{F}$. For a negative charge, reverse the result. Students often forget to reverse for negative charges or use the left hand instead of the right.

### Mistake 2: Confusing the magnetic field inside a solenoid with the field of a single loop

The magnetic field inside a long solenoid is $B = \mu_0 nI$ (uniform), where $n$ is the number of turns per unit length. The field at the centre of a single circular loop is $B = \mu_0 I / (2R)$. Students sometimes use the solenoid formula for a single loop, which gives a much larger field. Count the number of turns and the length carefully.

### Mistake 3: Forgetting that magnetic force does no work

The magnetic force $\vec{F} = q\vec{v} \times \vec{B}$ is always perpendicular to the velocity, so it does no work and cannot change the kinetic energy of a charged particle. It only changes the direction of motion, not the speed. Students sometimes calculate work done by magnetic force and get a non-zero result, which is physically impossible.
