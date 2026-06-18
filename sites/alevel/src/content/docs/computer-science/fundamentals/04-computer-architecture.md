---
title: Computer Architecture
description: ""writeback" stage, but the SUB instruction needs R1 in its
"decode" stage, which occurs before writeback. This is a data hazard.

**Forwarding solution:** The result of ADD is available after the "execute" stage (as a computed
Value). Instead of waiting for writeback, the result is forwarded directly from the execute stage
Output to the decode stage input of SUB, eliminating the stall.

</details>

**Problem 7.** Compare Von Neumann and Harvard architectures. Why is the modified Harvard
Architecture used in modern CPUs?

<details>
<summary>Hint</summary>

Consider bus contention and the practical need for unified main memory.

</details>

<details>
<summary>Answer</summary>

Von Neumann uses a single memory and bus for both instructions and data, causing contention. Harvard
Uses separate memories and buses, allowing simultaneous instruction fetch and data access.

Modern CPUs use modified Harvard: L1 cache is split into instruction cache (I-cache) and data cache
(D-cache), providing Harvard benefits at the fastest level. Beyond L1, memory is unified (Von
Neumann) because:

1. Main memory must be flexible — programs need to load data and instructions dynamically
2. Unified memory simplifies the memory management unit (MMU) design
3. The cost of duplicate main memory buses is not justified given cache hit rates
</details>

**Problem 8.** A direct-mapped cache has 64 lines, each holding 16 bytes. Main memory has 65,536
Blocks. How many bits are needed for the tag, line number, and offset fields?

<details>
<summary>Hint</summary>

Offset = log₂(block size). Line = log₂(cache lines). Tag = remaining bits from block address.

</details>

<details>
<summary>Answer</summary>

Offset: $\log_2(16) = 4$ bits Line number: $\log_2(64) = 6$ bits Total block address bits:
$\log_2(65536) = 16$ bits

Tag: $16 - 6 = 10$ bits

Each cache line stores: 16 bytes (data) + 10 bits (tag) + 1 bit (valid) + 1 bit (dirty) ≈ 18 bytes
Total.

</details>

**Problem 9.** Explain the difference between a page fault and a TLB miss. Which is more expensive?

<details>
<summary>Hint</summary>

One involves disk I/O; the other involves a slower but still RAM-speed lookup.

</details>

<details>
<summary>Answer</summary>

**TLB miss:** The virtual-to-physical translation is not in the TLB cache. The CPU must consult the
Page table in main memory (a few extra memory accesses). Cost: ~10–100 cycles.

**Page fault:** The required page is not in physical memory at all. The OS must read it from disk
(swap space) into a free frame, update the page table, and restart the instruction. Cost:
~100,000–10,000,000 cycles (disk access is ~10ms, while a CPU cycle is ~0.3ns).

A page fault is orders of magnitude more expensive than a TLB miss.

</details>

**Problem 10.** A RISC processor has 32 registers, each 32 bits wide. How many bits are needed to
Encode a register operand? What is the maximum number of 3-operand instructions possible if the
Opcode field is 8 bits?

<details>
<summary>Hint</summary>

Register field size = log₂(32). Total instruction size = opcode + 3 register fields.

</details>

<details>
<summary>Answer</summary>

Register operand: $\log_2(32) = 5$ bits

Instruction format: 8 (opcode) + 5 + 5 + 5 = 23 bits

With 8-bit opcode: $2^8 = 256$ possible opcodes.

</details>


## Common Pitfalls

1. Mixing up Big O, Big $\Omega$, and Big $\Theta$ notation — Big O is an upper bound, not
   necessarily tight.

2. Neglecting to normalise database designs, leading to data redundancy and update anomalies.

3. Forgetting edge cases in algorithm design (e.g., empty input, single element, already sorted
   data).

4. Writing pseudocode that is too language-specific rather than using standard algorithmic
   constructs.

## Summary

The key principles covered in this topic are linked in the sub-pages above. Focus on understanding
the definitions, applying the formulas or frameworks, and evaluating strengths and limitations of
each approach.

## Worked Examples

Worked examples demonstrating the application of key concepts are covered in the detailed sub-pages
linked above.

