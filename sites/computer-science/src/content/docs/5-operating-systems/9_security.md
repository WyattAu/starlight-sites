---

date: 2026-07-23T21:57:32+01:00
title: Security
tags:
  - Computing
  - University
description: 'Each object (file, directory, device) has an associated list of Entries specifying which subjects (users, groups) have which permissions (read, write, execute).'
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "computer-science", "url": "https://computer-science.wyattau.com"}, {"name": "5 Operating Systems", "url": "https://computer-science.wyattau.com/5-operating-systems"}, {"name": "9_security", "url": "https://computer-science.wyattau.com/5-operating-systems/9_security"}]
}
</script>

### 9.1 Access Control

**Access control lists (ACLs).** Each object (file, directory, device) has an associated list of
Entries specifying which subjects (users, groups) have which permissions (read, write, execute).

```
ACL for /data/report.txt:
  alice: rw-
  bob:   r--
  @dev:  rwx
  other: ---
```

- _Advantage:_ Flexible; per-object granularity; easy to audit.
- _Disadvantage:_ Checking permissions requires scanning the list; ACLs can grow large.

**Capabilities.** Each subject (process) carries a list of capability tokens, each granting access
to A specific object with specific rights. The kernel verifies that the process presents a valid
Capability.

- _Advantage:_ Decentralised; no per-object list to scan; efficient for distributed systems.
- _Disadvantage:_ Capability revocation is difficult; if a process copies a capability, revoking the
  original does not affect copies (solved by indirection: capabilities point to a kernel-managed
  object table entry that can be invalidated).

| Property       | ACLs                   | Capabilities         |
| -------------- | ---------------------- | -------------------- |
| Association    | With objects           | With subjects        |
| Revocation     | Easy (modify the list) | Difficult            |
| Delegation     | Requires policy        | Natural (copy token) |
| Implementation | POSIX, NTFS            | seL4, Capsicum, FUSE |

### 9.2 Principle of Least Privilege

A subject should receive only the minimum privileges necessary to perform its task. Violations
Create unnecessary attack surface.

**Application to OS design:**

- **Processes:** Run with the lowest possible privileges. Web servers should not run as root.
- **System calls:** `chmod` and `chown` require appropriate ownership; `setuid` requires root.
- **Kernel modules:** Loadable kernel modules have full kernel access; restrict loading to
  privileged users.
- **Containers:** Limit capabilities via `docker run --cap-drop ALL --cap-add NET_BIND_SERVICE`.

**Privilege separation.** Split a program into components with different privilege levels. Example:
OpenSSH splits into an unprivileged monitor (handles network I/O) and a privileged child (handles
Authentication and session setup). A compromise of the monitor does not grant root access.

### 9.3 Buffer Overflow Prevention

A **buffer overflow** occurs when a program writes data beyond the bounds of a buffer, potentially
Overwriting return addresses, function pointers, or other control data.

**Defences:**

**Stack canaries.** A random value (`canary`) placed between the local variables and the saved
Return address on the stack. Before returning, the function checks that the canary is unchanged. If
Modified, the program aborts.

- Implemented in GCC/Clang with `-fstack-protector-all`.
- The canary value is randomised per process and stored in a segment register (`%fs:40` on x86-64).

**Address Space Layout Randomisation (ASLR).** Randomises the base addresses of the stack, heap,
Libraries, and executable code in each process invocation.

- Defeats return-to-libc and ROP (Return-Oriented Programming) attacks that rely on known addresses.
- Entropy: 22--28 bits on 64-bit systems, providing $2^{22}$ to $2^{28}$ possible layouts.
- Limitation: information leaks (e.g., pointer disclosure) can defeat ASLR.

**Data Execution Prevention (DEP / W\^X).** Marks memory pages as either writable or executable,
Never both. A buffer overflow that injects shellcode into a writable data region cannot execute it.

- Hardware support: the NX (No-eXecute) bit in page table entries.
- Compiler support: `-Wl,-z,noexecstack` (GNU ld).

**Control Flow Integrity (CFI).** Verifies that indirect branches (function pointers, returns) jump
Only to valid targets. Forward-edge CFI checks call targets; backward-edge CFI checks return
Addresses using shadow stacks.

- Implemented in LLVM via `-fsanitize=cfi`.
- Hardware support: Intel CET (Control-flow Enforcement Technology).

:::caution
single mechanism is Insufficient. A determined attacker who can read memory can defeat ASLR; a
format string Vulnerability can leak canary values; and JIT compilers require
writable-and-executable pages.
:::
### 9.4 Privilege Separation in Practice

Privilege separation divides a program into components running at different privilege levels, limiting
the damage from any single vulnerability.

**OpenSSH example:**

- The **monitor** process runs as an unprivileged user, handling all network I/O and protocol
  parsing.
- The **privileged child** handles authentication secrets, session setup, and PAM interactions.
- The monitor communicates with the child via a strictly controlled IPC channel.
- A buffer overflow in the monitor does not grant access to authentication keys or root privileges.

**Practical implementation steps:**

1. Fork a child process before performing any privileged operations.
2. Drop all capabilities in the parent (monitor) using `prctl(PR_CAP_AMBIENT, PR_CAP_AMBIENT_DROP_ALL)`.
3. Restrict IPC to a minimal set of verified message types.
4. Use `seccomp` filters in the monitor to block dangerous syscalls (e.g., `execve`, `mount`).

**Common privilege separation violations:**

| Violation | Consequence | Mitigation |
| --------- | ----------- | ---------- |
| Running web server as root | Full system compromise on exploit | Run as unprivileged user with minimal capabilities |
| Unrestricted Docker containers | Container escape to host | Use `--cap-drop ALL` and add only required capabilities |
| setuid on complex binaries | Large attack surface for privilege escalation | Avoid setuid; use capability-based access instead |
| Shared writable memory between privilege levels | Data corruption or privilege leakage | Use message-passing with strict validation |

### 9.5 Summary of Key Relationships

| Defence Layer | Mechanism | What It Prevents | Limitation |
| ------------- | --------- | ---------------- | ---------- |
| ASLR | Randomises memory layout | Return-to-libc, ROP | Defeated by information leaks |
| Stack canaries | Detects stack buffer overflows | Stack smashing | Bypassed by format string bugs |
| DEP / W^X | Prevents code execution in data pages | Shellcode injection | JIT compilers need W+X pages |
| CFI | Validates indirect branch targets | Control-flow hijacking | Overhead; imprecise in some implementations |
| Privilege separation | Limits damage from compromised components | Full system compromise | Complexity; IPC design errors |
| Least privilege | Reduces attack surface | Unauthorised access | Requires careful capability analysis |

## Intuition

Operating system security is the bouncer, the lock, and the surveillance camera all in one. Authentication is checking your ID at the door — are you who you claim to be? Authorisation is checking your ticket — are you allowed in this room? The protection ring model is like concentric castle walls — the kernel lives in the innermost ring with maximum privilege, and user programs live in outer rings with limited access. Buffer overflow attacks are like pouring more water into a glass than it can hold — the excess spills into adjacent memory, and a clever attacker can make it spill in a way that executes their code. Defence means building taller glasses and checking the pour.

## Common Mistakes

**Confusing authentication with authorisation:** Authentication verifies identity (who you are). Authorisation determines permissions (what you can do). Don't use them interchangeably.

**Assuming encryption alone ensures security:** Encryption protects data confidentiality but doesn't prevent all attacks (e.g., denial of service, social engineering). Defence in depth is needed.

**Forgetting that security is a process, not a product:** No single mechanism provides complete security. Regular updates, monitoring, and user education are essential components.

## Cross-References

- **[Site Home](../../):** Main landing page for computer-science notes.
- **[Practice](../../practice-*.mdx):** Practice problems for revision.

- [Discrete Mathematics](https://mathematics.wyattau.com/docs/discrete-mathematics)
- [Algorithm Implementation](https://programming.wyattau.com/docs/algorithms)
