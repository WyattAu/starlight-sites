---
title: Generalised Coordinates and Constraints
tags:
  - Physics
  - University
description: ""Alembert’s Principle

A **virtual displacement** $\delta \mathbf{r}_i$ is an infinitesimal change in position consistent
with The constraints at a fixed instant in time ($\delta t = 0$).

**Definition (Virtual Work).** The virtual work of the forces is:

$$\delta W = \sum_{i=1}^N \mathbf{F}_i \cdot \delta \mathbf{r}_i$$

**Definition (Ideal Constraints).** Constraints are **ideal** if the virtual work of the constraint
forces is zero:

$$\sum_{i=1}^N \mathbf{C}_i \cdot \delta \mathbf{r}_i = 0$$

Where $\mathbf{C}_i$ is the constraint force on particle $i$.

**Theorem 2.1 (Principle of Virtual Work).** A system is in static equilibrium if and only if the
virtual work of the applied forces vanishes for all virtual displacements consistent with the
constraints.

_Proof._ In static equilibrium, $\mathbf{F}_i + \mathbf{C}_i = \mathbf{0}$ for each particle.
Therefore:

$$\sum_i (\mathbf{F}_i + \mathbf{C}_i) \cdot \delta\mathbf{r}_i = 0$$

For ideal constraints, $\sum_i \mathbf{C}_i \cdot \delta\mathbf{r}_i = 0$So
$\sum_i \mathbf{F}_i \cdot \delta\mathbf{r}_i = 0$. Conversely, if the virtual work of applied
forces vanishes for all admissible virtual displacements, the system must be in equilibrium
(otherwise one could choose a virtual displacement in the direction of net force to get non-zero
work). $\blacksquare$

**Theorem 2.2 (D'Alembert’s Principle).** For a system of $N$ particles:

$$\sum_{i=1}^N (\mathbf{F}_i - m_i \ddot{\mathbf{r}}_i) \cdot \delta \mathbf{r}_i = 0$$

Where $\mathbf{F}_i$ includes both applied and constraint forces. For ideal constraints, the
Constraint forces do no virtual work, so only the applied forces contribute.

_Proof._ D'Alembert’s principle extends the principle of virtual work to dynamics by treating
$-m_i \ddot{\mathbf{r}}_i$ as a "fictitious force" (the **inertia force**). Starting from Newton's
second law $\mathbf{F}_i + \mathbf{C}_i = m_i \ddot{\mathbf{r}}_i$:

$$\sum_i (\mathbf{F}_i + \mathbf{C}_i - m_i\ddot{\mathbf{r}}_i) \cdot \delta\mathbf{r}_i = 0$$

This is true. For ideal constraints $\sum_i \mathbf{C}_i \cdot \delta\mathbf{r}_i = 0$Giving:

$$\sum_i (\mathbf{F}_i - m_i\ddot{\mathbf{r}}_i) \cdot \delta\mathbf{r}_i = 0$$

$\blacksquare$

