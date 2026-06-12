---
template: splash
title: Programming Notes
description: 'Deep systems programming notes covering C++ ownership, templates, concurrency, and build systems.'
hero:
  tagline: Rigorous C++ systems programming notes covering ownership, templates, concurrency, and build systems. Written for developers who want to understand the language deeply.
  actions:
    - text: Start Learning
      link: /1_enviroment_and_toolchain/1_compiler_and_standards/1_installing_compiler/
      icon: right-arrow
      variant: primary
    - text: All Topics
      link: /1_enviroment_and_toolchain/
      icon: list
      variant: minimal
---

import { Card, CardGrid } from '@astrojs/starlight/components';

## Topics Covered

<CardGrid>
  <Card title="Environment & Toolchain" link="/1_enviroment_and_toolchain/">
    Compiler setup, build systems, CMake, and development environment configuration.
  </Card>
  <Card title="Compilation Model" link="/2_compilation_model/">
    Translation units, linkage, ODR, and how C++ code becomes executable.
  </Card>
  <Card title="Types" link="/3_types/">
    Type system fundamentals, value categories, references, and pointers.
  </Card>
  <Card title="Resource Management" link="/4_resource_management/">
    Ownership semantics, RAII, smart pointers, and memory management.
  </Card>
  <Card title="Function Architecture" link="/5_function_architecture/">
    Function mechanics, error handling, and exception safety.
  </Card>
  <Card title="Object-Oriented" link="/6_object_oriented/">
    Class design, runtime polymorphism, and virtual dispatch.
  </Card>
  <Card title="Templates & Metaprogramming" link="/7_templates_and_metaprogramming/">
    Generic programming, concepts, constraints, and compile-time computation.
  </Card>
  <Card title="Standard Library" link="/8_standard_library/">
    Containers, algorithms, ranges, and I/O formatting.
  </Card>
  <Card title="Concurrency" link="/9_concurrency/">
    Threading, synchronization, atomics, memory model, and coroutines.
  </Card>
</CardGrid>

## Why These Notes?

<div class="feature-grid">
  <div class="feature-card">
    <h3>Deep Understanding</h3>
    <p>Not just syntax — understand why C++ works the way it does. Every design decision explained with rationale.</p>
  </div>
  <div class="feature-card">
    <h3>Modern C++</h3>
    <p>Covers C++20/23 features including concepts, ranges, coroutines, and modules.</p>
  </div>
  <div class="feature-card">
    <h3>Practical Examples</h3>
    <p>Real-world code patterns, not toy examples. Production-ready techniques and best practices.</p>
  </div>
  <div class="feature-card">
    <h3>Searchable</h3>
    <p>Use Cmd+K to search across all 9 Wyatt's Notes sites from any page.</p>
  </div>
</div>
