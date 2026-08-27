---
sources:
  - text: Standard textbook reference

sources:
  - text: Standard textbook reference

sources:
  - text: Standard textbook reference
date: 2026-07-23T21:57:32+01:00
sources:
  - text: Standard textbook reference
title: "Mechanics | CBSE - Wyatt's Notes"
sources:
  - text: Standard textbook reference
description: "This section covers mechanics concepts, definitions, and applications with worked examples and practice problems."
sources:
  - text: Standard textbook reference
---
sources:
  - text: Standard textbook reference

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "cbse", "url": "https://cbse.wyattau.com"}, {"name": "Physics", "url": "https://cbse.wyattau.com/physics"}, {"name": "Mechanics", "url": "https://cbse.wyattau.com/physics/mechanics"}, {"name": "Index", "url": "https://cbse.wyattau.com/physics/mechanics/index"}]
}
</script>

<!-- Course Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Mechanics",
  "description": "CBSE Class 12 physics: Newton's laws, work-energy theorem, rotational motion, and gravitation.",
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

## Mechanics

Mechanics is the branch of physics dealing with motion and the forces that cause it. It encompasses Newton's laws of motion, work and energy, rotational dynamics, and gravitation.

## Key Concepts

- Newton's second law: $\vec{F}_{net} = m\vec{a}$
- Work done: $W = \vec{F} \cdot \vec{d} = Fd\cos\theta$
- Kinetic energy: $K = \frac{1}{2}mv^2$
- Potential energy (gravitational): $U = mgh$
- Work-energy theorem: $W_{net} = \Delta K$
- Conservation of energy: $K_i + U_i = K_f + U_f$
- Torque: $\tau = rF\sin\theta$
- Moment of inertia: $I = \sum m_i r_i^2$
- Rotational dynamics: $\tau = I\alpha$
- Angular momentum: $L = I\omega$
- Gravitational PE: $U = -\frac{GMm}{r}$

## Worked Example 1 — Projectile Motion

**Problem:** A ball is thrown at $30 \, \text{m/s}$ at $60^\circ$ to the horizontal. Find the range and maximum height.

**Solution:**

Components:
$$v_{0x} = 30\cos 60^\circ = 15 \, \text{m/s}, \quad v_{0y} = 30\sin 60^\circ = 25.98 \, \text{m/s}$$

Maximum height:
$$H = \frac{v_{0y}^2}{2g} = \frac{(25.98)^2}{2 \times 9.8} = \frac{675}{19.6} = 34.44 \, \text{m}$$

Range:
$$R = \frac{v_0^2 \sin 2\theta}{g} = \frac{900 \times \sin 120^\circ}{9.8} = \frac{900 \times 0.866}{9.8} = 79.5 \, \text{m}$$

**Common mistake:** Using $\sin 2\theta$ with $\theta = 60^\circ$ gives $\sin 120^\circ$, not $\sin 60^\circ$.

## Worked Example 2 — Work-Energy with Friction

**Problem:** A 5 kg block slides down a rough incline of $30^\circ$ from rest over 4 m. The coefficient of kinetic friction is 0.2. Find the speed at the bottom.

**Solution:**

Work done by gravity:
$$W_g = mgd\sin\theta = 5 \times 9.8 \times 4 \times \sin 30^\circ = 5 \times 9.8 \times 4 \times 0.5 = 98 \, \text{J}$$

Work done by friction:
$$W_f = -\mu_k mg\cos\theta \cdot d = -0.2 \times 5 \times 9.8 \times \cos 30^\circ \times 4$$
$$= -0.2 \times 5 \times 9.8 \times 0.866 \times 4 = -33.95 \, \text{J}$$

Net work:
$$W_{net} = 98 - 33.95 = 64.05 \, \text{J}$$

By work-energy theorem:
$$W_{net} = \frac{1}{2}mv^2 \implies v = \sqrt{\frac{2 \times 64.05}{5}} = \sqrt{25.62} = 5.06 \, \text{m/s}$$

**Common mistake:** Forgetting to include the $\cos\theta$ factor when calculating the normal force on an incline.

## Worked Example 3 — Rotational Motion

**Problem:** A solid disc of mass 2 kg and radius 0.3 m rolls without slipping down an incline from height 2 m. Find its speed at the bottom.

**Solution:**

Conservation of energy:
$$mgh = \frac{1}{2}mv^2 + \frac{1}{2}I\omega^2$$

For a disc, $I = \frac{1}{2}mR^2$ and $\omega = v/R$:
$$mgh = \frac{1}{2}mv^2 + \frac{1}{2} \cdot \frac{1}{2}mR^2 \cdot \frac{v^2}{R^2} = \frac{1}{2}mv^2 + \frac{1}{4}mv^2 = \frac{3}{4}mv^2$$

$$v = \sqrt{\frac{4gh}{3}} = \sqrt{\frac{4 \times 9.8 \times 2}{3}} = \sqrt{26.13} = 5.11 \, \text{m/s}$$

**Common mistake:** Forgetting that rolling objects have both translational and rotational kinetic energy.

## Practice Problems

1. A 10 kg object is thrown vertically upward at $20 \, \text{m/s}$. Find the maximum height and total time of flight.
2. A force of 50 N acts at $30^\circ$ to the horizontal on a 5 kg block. Find the acceleration if $\mu_k = 0.1$.
3. A ring of mass 3 kg and radius 0.5 m rotates at $10 \, \text{rad/s}$. Find its rotational kinetic energy.

## Why This Matters

Mechanics forms the foundation of all physics. Understanding Newton's laws, energy conservation, and rotational dynamics is essential for engineering, aerospace, robotics, and any field involving motion and forces.

## Intuition

**Energy is the great simplifier:** Instead of tracking every force at every moment (Newton's approach), you can just compare the beginning and end states. If you know a ball is at height h and want its speed, you don't need to know the path it took — just equate potential energy lost to kinetic energy gained. Energy methods cut through complexity by focusing on what matters: the state, not the journey.

**Why it matters:** Mechanics is the foundation of all physics and engineering. Every bridge, airplane, and robot is designed using these principles. The work-energy theorem connects forces to motion through energy, and rotational dynamics explains everything from spinning tops to galaxy formation.

**The key insight:** The work-energy theorem (W_net = ΔK) is Newton's second law in disguise — integrating F=ma over distance gives you the energy relationship, making many problems dramatically simpler.

## Common Exam Patterns

- Always draw free-body diagrams before applying Newton's second law
- For projectile motion, separate horizontal and vertical components
- Energy methods are often simpler than force methods for problems involving speed and height
- Rotational problems require identifying the correct moment of inertia for the geometry
- Gravitational potential energy is negative and approaches zero at infinity

## Cross-References

- **[Site Home](../../):** Main landing page for CBSE notes.
- **[Chemistry](../../chemistry/):** Chemistry notes covering organic and physical chemistry.
- **[Physics](../../physics/):** Physics notes covering mechanics and thermodynamics.
- **[Practice](../../practice-*):** Practice problems for revision.

## Common Mistakes

- **Forgetting to include all forces in free-body diagrams:** Beginners often omit normal force, friction, or weight. Every object interacting with the system must be represented. Draw the object in isolation and list every contact and non-contact force.
- **Mixing up mass and weight:** Mass ($m$) is in kg and is constant; weight ($W = mg$) is a force in Newtons and varies with gravity. Using mass where weight is required (or vice versa) gives wrong answers by a factor of $g$.
- **Sign errors in projectile motion:** The acceleration due to gravity is $-g$ (downward) in the vertical direction. Forgetting the negative sign leads to objects accelerating upward instead of falling.
- **Using rotational kinetic energy without the correct moment of inertia:** The moment of inertia depends on geometry (solid disk $\frac{1}{2}mr^2$, thin ring $mr^2$, etc.). Using the wrong formula gives incorrect rotational energy values.
