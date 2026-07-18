---
title: "Diagnostic Test: TrueNAS"
description: "Self-assessment quiz on TrueNAS"
sidebar_position: 60
tableOfContents: false
---

# Diagnostic Test: TrueNAS

10 multiple-choice questions covering ZFS concepts, pool management, datasets, shares, snapshots, replication, and networking. Select the best answer for each question, then check your score using the answer key below.

---

**Question 1.** What is the minimum number of drives needed for a RAIDZ2 vdev?

(A) 3
(B) 4
(C) 5
(D) 2

---

**Question 2.** Which ZFS feature provides read acceleration using system RAM?

(A) SLOG
(B) L2ARC
(C) ARC
(D) Special vdev

---

**Question 3.** What is the default compression algorithm on TrueNAS?

(A) gzip-6
(B) zstd-3
(C) lz4
(D) none

---

**Question 4.** When replacing a failed drive in a mirror pool, the resilver process:

(A) Copies the entire disk, not just actual data
(B) Only copies the blocks that contain data
(C) Requires the pool to be offline
(D) Cannot proceed while the pool is in use

---

**Question 5.** What is the recommended ashift value for modern drives?

(A) 9
(B) 12
(C) 13
(D) 14

---

**Question 6.** A snapshot in ZFS:

(A) Consumes space proportional to the entire dataset immediately
(B) Is instantaneous and consumes no space until the live data changes
(C) Is a writable copy of the dataset
(D) Requires the pool to be taken offline

---

**Question 7.** What does zpool scrub do?

(A) Rebuilds a failed drive
(B) Reads all data and verifies checksums, repairing corruption
(C) Creates a backup of the pool
(D) Defragments the pool

---

**Question 8.** The SLOG device primarily improves:

(A) Read performance for cold data
(B) Synchronous write performance
(C) Compression ratios
(D) Deduplication speed

---

**Question 9.** In a 3-way mirror pool, how many drives can fail without data loss?

(A) 1
(B) 2
(C) 3
(D) 0

---

**Question 10.** What is the recommended recordsize for a dataset storing large media files (video, audio)?

(A) 4K
(B) 16K
(C) 64K
(D) 128K

---

## Answer Key

| Question | Correct Answer |
|----------|---------------|
| 1        | B             |
| 2        | C             |
| 3        | C             |
| 4        | B             |
| 5        | B             |
| 6        | B             |
| 7        | B             |
| 8        | B             |
| 9        | B             |
| 10       | D             |

**Scoring:** Count your correct answers out of 10. A score of 8 or above indicates strong mastery of TrueNAS administration fundamentals. Review the explanations in the practice problems for any questions you answered incorrectly.
