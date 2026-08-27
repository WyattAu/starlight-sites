---
sources:
  - text: Spivak - Calculus

sources:
  - text: Spivak - Calculus

sources:
  - text: Spivak - Calculus
date: 2026-07-23T21:57:32+01:00
sources:
  - text: Spivak - Calculus
title: "Linear Algebra | Mathematics - Wyatt's Notes"
sources:
  - text: Spivak - Calculus
tags:
sources:
  - text: Spivak - Calculus
  - Mathematics
sources:
  - text: Spivak - Calculus
  - University
sources:
  - text: Spivak - Calculus
description: 'Linear Algebra: comprehensive educational content notes with precise definitions, worked examples, common pitfalls, and practice problems.'
sources:
  - text: Spivak - Calculus
---
sources:
  - text: Spivak - Calculus

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "2 Linear Algebra", "url": "https://mathematics.wyattau.com/2-linear-algebra"}, {"name": "Index", "url": "https://mathematics.wyattau.com/2-linear-algebra/index"}]
}
</script>

<!-- Course Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Linear Algebra",
  "description": "'Linear Algebra: comprehensive educational content notes with precise definitions, worked examples, common pitfalls, and practice problems.'",
  "provider": {
    "@type": "Organization",
    "name": "Wyatt's Notes",
    "url": "https://mathematics.wyattau.com"
  },
  "url": "https://mathematics.wyattau.com",
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

## Linear Algebra

## Contents

1. [Vectors and Vector Spaces](1_vectors-and-vector-spaces)
2. [Linear Independence, Span, Basis, and Dimension](2_linear-independence-span-basis-and-dimension)
3. [Matrices](3_matrices)
4. [Systems of Linear Equations](4_systems-of-linear-equations)
5. [Eigenvalues and Eigenvectors](5_eigenvalues-and-eigenvectors)
6. [Linear Transformations](6_linear-transformations)
7. [Inner Product Spaces](7_inner-product-spaces)
8. [Singular Value Decomposition](8_singular-value-decomposition)
9. [Problem Set](9_problem-set)

## Overview

University-level linear algebra notes covering vector spaces, matrices, and decompositions.

## Topics Covered

- **Vector Spaces and Subspaces**: Definitions, examples, bases, dimension
- **Matrices and Systems**: Matrix operations, determinants, linear systems
- **Eigenvalues and Eigenvectors**: Diagonalisation, characteristic polynomials
- **Linear Transformations**: Kernel, image, rank-nullity theorem

## Prerequisites

- Basic algebra and arithmetic
- Mathematical proofs and logic
- Familiarity with mathematical notation

## How to Use These Notes

Start with vector spaces to build foundational knowledge, then progress to matrices and decompositions. Each section includes worked examples and practice problems.

## Navigation

Use the sidebar to browse topics, or start with the introductory pages linked from the sidebar.

## Additional Resources

Each section includes:

- Detailed explanations of key concepts
- Worked examples with step-by-step solutions
- Practice problems with answers
- Common pitfalls and how to avoid them
- Connections to other areas of mathematics

## Study Tips

1. **Master the definitions**: Linear algebra requires precise understanding of vector spaces and linear maps
2. **Practise proofs**: Learn to write clear, rigorous proofs
3. **Draw diagrams**: Visualise vector spaces, transformations, and decompositions
4. **Learn standard examples**: Know the properties of common matrices (diagonal, symmetric, orthogonal)
5. **Connect to applications**: Relate linear algebra to data science, physics, and engineering

## Intuition

Linear algebra is the study of straight-line transformations. Vectors represent quantities with magnitude and direction; linear transformations stretch, rotate, and shear these vectors while preserving the operations of addition and scalar multiplication. Matrices are the numerical embodiment of these transformations. Eigenvalues reveal the natural stretching directions of a transformation, and diagonalisation exposes its simplest form. The singular value decomposition decomposes any matrix into rotation, scaling, and rotation, providing the best low-rank approximation to data. Linear algebra underpins everything from solving systems of equations to principal component analysis in statistics and quantum mechanics in physics.

### 2.1 Common Mistakes

**Mistake 1: Assuming $AB = BA$ for matrix multiplication**
Matrix multiplication is not commutative. Even when both $AB$ and $BA$ are defined and have the same dimensions, they are generally not equal. For example, with $A = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$ and $B = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$, we get $AB \neq BA$. Always check the order of multiplication carefully.

**Mistake 2: Assuming eigenvectors of a symmetric matrix are orthogonal only for distinct eigenvalues**
Eigenvectors corresponding to distinct eigenvalues of a symmetric (Hermitian) matrix are always orthogonal, but eigenvectors within the same eigenspace are not automatically orthogonal. When an eigenvalue has multiplicity greater than one, you must apply the Gram-Schmidt process to obtain an orthonormal basis for that eigenspace.

**Mistake 3: Confusing the column space with the null space**
The column space of $A$ consists of all vectors $A\mathbf{x}$, while the null space consists of all $\mathbf{x}$ such that $A\mathbf{x} = \mathbf{0}$. These are subspaces of different spaces as a rule (column space in the codomain, null space in the domain). The rank-nullity theorem relates their dimensions, but they are not the same object.

## Cross-References

- **[Abstract Algebra](../../../../../typescript/src/content/docs/index):** Groups, rings, and modules.
- **[Real Analysis](../../../../../typescript/src/content/docs/index):** Metric spaces and convergence.
- **[Multivariable Calculus](../../../../../typescript/src/content/docs/index):** Applications of linear algebra in calculus.

- [Quantum Mechanics](https://physics.wyattau.com/docs/quantum-mechanics)
- [Graph Theory](https://computer-science.wyattau.com/docs/graph-theory)
