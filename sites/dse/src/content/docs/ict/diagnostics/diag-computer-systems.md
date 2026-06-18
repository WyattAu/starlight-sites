---
title: "Computer Systems -- Diagnostic Tests"
description: ""s
hardware design?

**Solution:**

(a) $-6.625 = -(110.101)_2 = -1.10101 \times 2^2$.

Sign bit: 1 (negative). Exponent: $2 + 127 = 129 = (10000001)_2$. Mantissa:
$10101000000000000000000$.

Stored as: 1 10000001 10101000000000000000000.

(b) Steps: (1) Compare exponents -- align the smaller number's mantissa by shifting right.
$3.5 = 1.11 \times 2^1$. Shift to $0.111 \times 2^2$ (2). Add mantissas:
$1.10101 + 0.111 = 10.10001$. Normalise: $1.00001 \times 2^3$ (3). Result:
$-1.00001 \times 2^2 + 0.111 \times 2^2 = -0.11001 \times 2^2$... Actually: subtracting since one is
negative. The ALU adds the signed mantissas using two's complement arithmetic.

(c) Floating-point has limited precision (23 bits of mantissa in single precision $=$ about 7
significant decimal digits). Values like $0.1$ cannot be represented exactly in binary (it is a
recurring fraction: $0.000110011...$). This causes small rounding errors that accumulate through
repeated operations. The CPU hardware is designed with a fixed number of bits for the mantissa, so
it cannot store infinite precision -- a fundamental hardware limitation of the ALU's arithmetic
circuits.

### IT-2: System Architecture (with Programming and Databases)

**Question:** A school's student management system stores data in a relational database on a server.
(a) Explain the roles of the CPU, RAM, and hard disk when a teacher searches for a student by ID
number. (b) If the database has 50,000 records and a sequential search takes 0.001 ms per record,
calculate the worst-case search time. How does indexing reduce this? (c) Explain why the database
uses RAM (buffer cache) to improve performance, relating to the memory hierarchy.

**Solution:**

(a) When a teacher searches for student ID "S12345":

1. The teacher's browser sends the query over the network to the server.
2. The server's CPU receives the request and executes the database query program.
3. The CPU checks RAM (buffer cache) for the data -- if found (cache hit), it returns the result
   immediately.
4. If not in RAM (cache miss), the CPU instructs the disk controller to read from the hard disk.
5. The data is loaded from disk into RAM (and cached for future queries).
6. The CPU processes the data, formats the result, and sends it back to the teacher's browser.

(b) Worst-case sequential search: $50,000 \times 0.001 = 50$ ms.

With a B-tree index: search depth $\approx \log_2(50,000) \approx 16$ levels. With 3--4 disk
accesses (each $\approx 5$ ms), total $\approx 15$--$20$ ms. With the index cached in RAM, the
search reduces to a fraction of a millisecond.

(c) The database buffer cache keeps frequently accessed data and index pages in RAM. Since RAM
access time ($\approx 100$ ns) is roughly 100,000 times faster than disk access ($\approx 10$ ms),
caching dramatically reduces query latency. The memory hierarchy principle applies: the most
frequently accessed database pages are kept in the fastest available storage. The database engine
uses LRU (Least Recently Used) or similar algorithms to manage the buffer cache, evicting least-used
pages when RAM is full.

### IT-3: Hardware Selection (with Network Security)

**Question:** A small business needs to set up a file server for 20 employees. (a) Recommend minimum
specifications for: CPU cores, RAM, and storage type, justifying each choice. (b) Explain why ECC
(Error-Correcting Code) RAM is important for a server but not needed for a desktop. (c) The server
will store sensitive client data. Explain how hardware-level security features (TPM, secure boot)
complement software-level encryption.

**Solution:**

(a) **CPU:** Minimum 4 cores. A server handles concurrent requests from 20 users -- multiple cores
allow parallel processing of file operations, database queries, and network I/O without queuing.

**RAM:** Minimum 16 GB. The OS uses $\approx 4$ GB, and the file server needs RAM for the buffer
cache (storing frequently accessed files), network buffers, and user session data. Insufficient RAM
causes excessive disk swapping, severely degrading performance.

**Storage:** NVMe SSD (minimum 500 GB). SSDs provide fast random read/write for concurrent file
access by multiple users. NVMe is significantly faster than SATA SSDs for multi-user workloads. A
secondary HDD can be added for backup.

(b) ECC RAM detects and corrects single-bit errors that can occur due to electromagnetic
interference, cosmic rays, or hardware degradation. In a server running 24/7, even a single-bit
error could corrupt critical data or crash the system. Desktops are used for shorter periods and the
occasional error is tolerable (a crash is merely inconvenient). Servers process financial data,
databases, and critical business data where data integrity is paramount.

(c) **TPM (Trusted Platform Module):** A dedicated hardware chip that securely stores cryptographic
keys and verifies system integrity. It ensures that encryption keys cannot be extracted even if the
server is physically stolen.

**Secure Boot:** Ensures that only cryptographically signed, trusted firmware and OS components load
at startup. This prevents rootkits and boot-level malware from compromising the system before
software encryption activates.

Hardware and software security are complementary: TPM protects keys at the hardware level
(preventing extraction), secure boot ensures a trusted execution environment, and software
encryption (e.g., AES-256 full-disk encryption) protects data at rest. Together they provide defence
in depth.
