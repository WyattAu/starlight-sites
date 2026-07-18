---
title: Virtualization
tags:
  - Computing
  - University
description: 'Runs directly on hardware. Examples: VMware ESXi, Xen, Hyper-V. Comprehensive educational content coverage with definitions and practice problems.'
---

### 8.1 Hypervisor Types

**Type 1 (bare-metal).** Runs directly on hardware. Examples: VMware ESXi, Xen, Hyper-V.

- Direct hardware access; high performance.
- Must include device drivers for all hardware.

**Type 2 (hosted).** Runs on a host OS. Examples: VirtualBox, VMware Workstation, QEMU.

- Easier to develop and install.
- Additional overhead from the host OS.

### 8.2 Virtual Machine Monitors

A **VMM** (hypervisor) presents the illusion of multiple independent physical machines to guest
OSes.

**Challenges:**

- **Instruction emulation:** Sensitive instructions must be trapped and emulated. On x86, `IN`
  `OUT``HLT``CLI``STI`And `MOV` to/from control registers are sensitive.
- **Memory virtualization:** The VMM maintains **shadow page tables** mapping guest virtual to host
  physical addresses. Hardware support: Extended Page Tables (EPT, Intel) and Nested Page Tables
  (NPT, AMD).
- **I/O virtualization:** Device access mediated by the VMM. Paravirtualized drivers (e.g., VirtIO)
  improve performance.

### 8.3 Paravirtualization

The guest OS is modified to make **hypercalls** instead of executing sensitive instructions
directly.

- _Advantage:_ Lower overhead (no trap-and-emulate for every sensitive instruction).
- _Disadvantage:_ Requires modifying the guest kernel.

### 8.4 Containers

**Containers** share the host kernel but provide process isolation via:

- **Namespaces:** Isolate process trees, network, file systems, IPC, UTS (hostname).
- **cgroups:** Limit resource usage (CPU, memory, I/O).

| Property    | VMs                    | Containers            |
| ----------- | ---------------------- | --------------------- |
| Kernel      | Separate per VM        | Shared with host      |
| Startup     | Minutes                | Seconds               |
| Footprint   | GBs                    | MBs                   |
| Isolation   | Hardware-level         | Process-level         |
| Performance | Near-native (with EPT) | Near-native (minimal) |

**Docker** uses OverlayFS for layered images. **Kubernetes** orchestrates containers across
clusters.

### 8.5 Key Relationships

| Technology   | Abstraction level | Isolation strength | Overhead | Use case                |
| ------------ | ----------------- | ------------------ | -------- | ----------------------- |
| Type 1 hyper | Hardware          | Strong (HW-level)  | Low      | Server virtualisation   |
| Type 2 hyper | OS                | Moderate           | Higher   | Development/testing     |
| Containers   | OS kernel         | Weak (process)     | Minimal  | Microservices, CI/CD   |
| Unikernels   | Application       | Very strong        | Very low | Specialised appliances  |

### 8.6 Common Pitfalls

- **Assuming containers provide the same isolation as VMs.** Containers share the host kernel; a
  kernel exploit can compromise all containers. VMs provide hardware-level isolation via separate
  kernel instances.
- **Confusing paravirtualization with full virtualization.** Paravirtualization requires a modified
  guest OS; full virtualization does not (hardware-assisted or binary translation).
- **Forgetting that CPU virtualization includes more than just instructions.** Timer interrupts,
  APIC virtualisation, and VMCS (VMX controls) must all be handled correctly for performance.
- **Thinking nested virtualization is always supported.** Running a hypervisor inside a VM requires
  nested VT-x/AMD-V support, which adds significant complexity and performance overhead.

### 8.7 Worked Examples

**Problem 1.** A Type 1 hypervisor hosts 10 VMs, each with 4 GB RAM and 2 vCPUs. The host has 64 GB
RAM and 16 physical cores. Estimate the memory overhead.

**Solution.** Each VM reserves 4 GB (total 40 GB). The hypervisor itself uses ~1 GB. Additional
overhead: shadow page tables (~200 MB per VM), device emulation state (~100 MB per VM). Total
overhead: $40 + 1 + 10 \times 0.3 = 44$ GB. Remaining for host cache and I/O: 20 GB. With EPT
hardware support, the shadow page table overhead is eliminated. $\blacksquare$

**Problem 2.** Design a container strategy for a microservice with 12 services. Each service needs
50 MB RAM and starts in < 1 second. Compare with VM approach.

**Solution.** Containers: shared kernel, total RAM $\sim 12 \times 50 + 500$ MB (OS overhead) $\approx 1.1$ GB. Startup: seconds. VMs: each VM needs separate OS ($\sim 512$ MB minimum), total RAM $\sim 12 \times 512 = 6.1$ GB. Startup: minutes. Containers are superior for this lightweight microservice architecture. $\blacksquare$

### 8.8 Applications

- **Cloud computing:** AWS Nitro uses custom hardware (Nitro cards) to offload virtualisation
  overhead, achieving bare-metal performance for VMs. Google Cloud uses KVM-based virtualisation
  with and without nested containers via gVisor.
- **Edge computing:** Lightweight virtualisation (Firecracker by AWS) runs micro-VMs for serverless
  functions (Lambda, Fargate), combining VM isolation with container-like startup times.
- **DevOps pipelines:** CI/CD systems (GitHub Actions, GitLab CI) use container executors for
  reproducible build environments. Each job runs in an isolated container with pinned dependencies.
- **Desktop virtualisation:** VirtualBox and VMware Workstation enable running multiple OSes on a
  single desktop for software development, testing compatibility across platforms.

<aside class="starlight-aside starlight-aside--caution">
vulnerability can potentially Compromise all containers on a host. For strong multi-tenant
isolation, VMs are preferred.

</aside>
### 8.9 Worked Example: Comparing Virtualisation Overheads

**Problem.** A host runs 20 web server instances. Each instance uses 256 MB RAM and 0.5 CPU cores
at peak. Compare RAM usage for: (a) 20 VMs with 512 MB each, (b) 20 containers sharing host OS.

**Solution.** (a) VMs: each VM requires 512 MB (guest OS overhead) + 256 MB (application) = 768 MB
per VM, total $20 \times 768 = 15.36$ GB RAM. (b) Containers: host OS uses 512 MB, each container
adds 256 MB application + negligible OS overhead ($\sim 5$ MB per container), total
$512 + 20 \times 261 \approx 5.73$ GB RAM. Containers use 63% less RAM in this scenario, enabling
higher density on the same hardware. However, if instances run untrusted workloads, VMs provide
stronger isolation. $\blacksquare$
