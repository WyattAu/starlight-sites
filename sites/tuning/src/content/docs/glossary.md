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

## Platform and Circuitry

**BCLK (Base Clock)**: The foundational bus clock from which CPU and memory clocks derive via multipliers. Locked on most modern consumer platforms; decoupled from PCIe on Intel post-Sandy-Bridge.

**Multiplier**: The ratio between BCLK and core clock. A 100 MHz BCLK with a 48x multiplier yields 4.8 GHz. Overclocking usually means raising the multiplier.

**VRM (Voltage Regulator Module)**: The motherboard circuitry converting PSU rails into clean Vcore. VRM thermals cap sustained overclocks on budget boards.

**LLC (Load-Line Calibration)**: The board's compensation for Vdroop — the voltage sag when current demand spikes. Aggressive LLC keeps Vcore flat but risks transient overshoot.

**Vdroop**: Intentional output impedance in the VRM design that lets voltage sag under load, protecting against spikes.

**VSOCH/Fixed Sync**: Runtime mechanisms (Intel Adaptive Boost, AMD OC Fault Detection) that catch unsafe current/voltage excursions faster than software polling.

**Delidding**: Removing the CPU's integrated heat spreader to replace the factory thermal interface with liquid metal. High risk, modest gains on soldered parts.

**Degradation**: Permanent loss of maximum stable frequency from sustained over-voltage and heat — the reason conservative daily voltages are advised.

## Memory Subsystem

**IMC (Integrated Memory Controller)**: The memory controller on the CPU die. Its quality (IMC lottery) caps achievable memory frequencies.

**tRFC**: Refresh cycle timing — the highest-impact CAS-adjacent timing on modern DDR4/DDR5, worth hundreds of cycles of tuning headroom.

**Command Rate**: Delay between memory commands (1T vs 2T). 1T tightens latency but stresses the IMC.

**Rank Interleaving**: Alternating access between physical ranks to hide refresh and precharge latency.

## Validation and Benchmarking

**Benchmark Baseline**: A recorded before-state (scores, clocks, temps, power) captured under identical ambient conditions, without which tuning claims are unfalsifiable.

**Variance Run-to-Run**: Natural score scatter in benchmarks (often 1-3%); treat differences inside the noise band as no-change.

**OCCT/Prime95 Small FFT**: Heat-vector stress loads that maximise die power density — the fastest way to find thermal instability.

**y-cruncher**: Memory- and cache-intensive stress workload, effective at exposing IMC and RAM instability that CPU loads miss.

**Validation Stability Definition**: The practical standard: complete your benchmark suite plus a daily-driver workload list with zero errors, WHEA events, or crashes over a defined soak period.


## Bench and Monitoring Terms

**HWiNFO**: The standard Windows sensor suite — per-core clocks, VRM temps, power draw, and bus utilisation with logging for correlation against stress runs.

**Perf Counter (PMC)**: CPU performance-monitoring counters exposing cycles, retired instructions, cache misses, and branch misses; the ground truth beneath every tuning claim.

**Telemetry Log**: A timestamped capture of clocks, voltages, and temperatures during a run — the artefact you compare against baseline to attribute a change.

**Score Normalisation**: Adjusting benchmark output for ambient temperature, background load, and driver version so runs are comparable across days.

## Cooling Physics

**TDP (Thermal Design Power)**: The cooler-sizing figure — heat a cooling system must dissipate at nominal load; not the same as peak boost power draw.

**PPT/PL1/PL2**: Platform power limits — AMD's Package Power Tracking and Intel's sustained (PL1) versus burst (PL2) power windows that shape boost behaviour.

**Tau**: Intel's time constant defining how long PL2 burst power is allowed before dropping to PL1.

**Specific Heat Capacity**: The energy required to raise a unit mass one degree; water's high value is why liquid loops flatten temperature spikes.

**Thermal Mass**: A system's resistance to rapid temperature change; larger radiators and blocks smooth transient loads.

**Delta-T**: The temperature difference between coolant and ambient air — the true measure of cooling capacity, independent of room conditions.

**Fan Static Pressure**: A fan's push against airflow restriction; radiators and dense fins need high-static-pressure fans, open cases need volume flow.

**Contact Frame**: An aftermarket CPU retention bracket replacing the stock ILM, reducing uneven mounting pressure and bending on LGA1700.

## GPU-Specific

**Shader Clock Offset vs Memory Offset**: Core offsets scale compute-bound frame rates; memory offsets help bandwidth-bound resolutions. Tune separately to attribute gains.

**V/F Curve**: The voltage-frequency relationship editor in MSI Afterburner-style tools; flattening the curve at a target voltage is the undervolting workflow.

**Hot Spot vs Edge Temp**: The die's internal junction temperature versus the measured edge sensor; a large delta signals mounting or paste problems.

**VRAM Junction Temp**: GDDR6/6X memory temperature — often the true throttle trigger at high memory offsets, invisible on edge sensors.


## Tuning Workflow Reference

| Step | Action | Tool |
|------|--------|------|
| 1 | Record stock baseline | HWiNFO log + bench suite |
| 2 | Find current limits | Stress load, watch throttle triggers |
| 3 | Adjust one variable | Clocks OR voltage OR memory, never two |
| 4 | Validate | Full stress cycle + daily workload |
| 5 | Re-baseline | Score delta vs variance band |
| 6 | Iterate or lock | Continue gains or save stable profile |

## Voltage Terms

| Term | Meaning |
|------|---------|
| Vcore | CPU core voltage — the primary overclocking lever |
| Vsoc/SA | System agent / uncore voltage — memory controller headroom |
| VDDG/VDDP | Infinity Fabric related voltages on AMD platforms |
| DRAM Voltage | Memory module supply (1.35 V typical DDR4 XMP) |
| Vtt/IMC termination | Bus termination voltage affecting stability margins |
| Offset mode | Voltage scales with load relative to a base offset |
| Adaptive/Fixed | CPU-chosen voltage vs hard-set constant (used for extreme OC) |
| LLC level | Droop compensation strength (moderate beats maximum) |
