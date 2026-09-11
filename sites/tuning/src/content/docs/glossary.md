---
title: "Hardware Tuning Glossary — Key Terms"
description: "Performance tuning terminology: overclocking, undervolting, memory timings, thermal throttling, boost algorithms, and stability-testing concepts for CPUs, GPUs, and RAM."
date: 2026-07-24
tags: [glossary]
---

## CPU Tuning

**Overclocking**: Running a component above its stock clock speed for more performance, at the cost of power and heat.

**Undervolting**: Reducing voltage while holding frequency — lower heat and power with the same performance, or headroom for higher boosts.

**PBO (Precision Boost Overdrive)**: AMD's firmware framework letting the CPU exceed stock power and current limits within platform safety bounds.

**Turbo/Boost Algorithm**: Vendor logic (Intel Turbo Boost, AMD Precision Boost 2) that raises clocks based on temperature, current, and power headroom.

**Thermal Throttling**: Automatic clock reduction when die temperature crosses a limit, protecting silicon.

**Vcore**: The core voltage supplied to the CPU. Higher stable frequencies generally demand higher Vcore, and leakage grows non-linearly near the upper edge.

**Curve Optimizer**: AMD per-core undervolting mechanism that offsets the voltage/frequency curve for each core individually.

## Memory Tuning

**Frequency and Timings**: RAM speed (MT/s) and latency (CL, tRCD, tRP, tRAS). Real-world latency blends both — infinity-fabric sync on Ryzen matters as much as raw MT/s.

**XMP / EXPO**: Intel (XMP) and AMD (EXPO) memory profiles that apply validated frequency/timing/voltage sets with one toggle.

**Gear/Fabric Ratios**: The relationship between memory clock, memory controller, and Infinity Fabric (AMD) or gear modes (Intel); 1:1 sync usually minimises latency.

**Training**: The POST-time process where the memory controller finds stable timings for the installed DIMMs.

## GPU Tuning

**Core and Memory Offset**: Positive frequency offsets applied to the GPU core and VRAM to lift frame rates within thermal and power limits.

**Power Limit**: The maximum board power draw; raising it sustains higher clocks under load at the cost of heat.

**Fan Curve**: User-defined mapping from temperature to fan duty cycle, balancing acoustics against sustained boost clocks.

**Frame Time**: The time to render one frame. Stable frame times matter more than average FPS for perceived smoothness — spikes present as stutter.

## Cooling and Stress Testing

**Thermal Paste / TIM**: Thermally conductive material between die and cooler; pump-out and dry-out degrade it over years.

**Heat Soak**: Temperature creep under sustained load as cooler capacity saturates, eventually forcing clocks down.

**Stability Testing**: Sustained stress workloads (Prime95, y-cruncher, FurMark, 3DMark) that expose instability faster than gaming loads.

**WHEA Errors**: Windows Hardware Error Architecture events — corrected machine-check errors on Ryzen often signal marginal SoC voltage before crashes appear.

**Silicon Lottery**: Manufacturing variance; identical chips reach different maximum stable clocks at the same voltage.

## Further Resources

Return to the [Tuning Hub](/hub/) for per-component guides, or see [Linux](/linux/) for OS-side scheduling and governor tuning.
