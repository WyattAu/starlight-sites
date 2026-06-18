---
title: Introduction to TrueNAS
description: "Reference for deploying and managing TrueNAS (CORE and SCALE), covering ZFS pool design, dataset Permissions, SMB/NFS sharing, snapshots, replication,"

---

## Abstract

Reference for deploying and managing TrueNAS (CORE and SCALE), covering ZFS pool design, dataset
Permissions, SMB/NFS sharing, snapshots, replication, encryption, and backup strategies.

## What is TrueNAS

TrueNAS is open-source network-attached storage (NAS) software built on top of OpenZFS. It is
Developed and maintained by iXsystems and comes in two editions:

- **TrueNAS CORE** -- Based on FreeBSD. Mature, battle-tested, and widely deployed in production.
  Uses the FreeBSD kernel and ZFS implementation.
- **TrueNAS SCALE** -- Based on Debian Linux. Supports Docker containers and Kubernetes applications
  natively. Uses the OpenZFS on Linux (ZoL) implementation. This is the actively developed flagship
  edition.

Both editions share the same web interface, REST API, and core storage management features. The
Primary differences are the underlying OS (FreeBSD vs. Linux) and the application ecosystem.

## Why TrueNAS

TrueNAS combines enterprise-grade storage features with a manageable web interface. The value
Proposition rests on three pillars:

1. **OpenZFS at the core.** Every dataset is checksummed, every pool is self-healing, and every
   snapshot is free. ZFS provides data integrity guarantees that traditional filesystems and RAID
   controllers cannot match. There is no write hole, no silent corruption, and no rebuild
   degradation -- the filesystem is the volume manager.

2. **Built-in data protection.** Snapshots, replication (ZFS send/receive), cloud sync, and
   scrubbing are first-class features, not add-on products. TrueNAS makes the 3-2-1 backup rule
   achievable without third-party software.

3. **Unified protocol support.** SMB, NFS, iSCSI, and S3-compatible object storage are all
   configurable from the same interface. A single TrueNAS system can serve Windows file shares,
   Linux NFS mounts, VMware iSCSI datastores, and S3 API clients simultaneously.

## Scope of This Reference

This reference covers the operational knowledge needed to design, deploy, and maintain a TrueNAS
System in a homelab or small-to-medium business environment. It is organized into the following
Sections:

| Section                 | Content                                                        |
| ----------------------- | -------------------------------------------------------------- |
| ZFS Deep Dive           | Pool architecture, vdev types, datasets, snapshots, ARC, scrub |
| Sharing and Permissions | SMB, NFS, iSCSI, ACLs, Kerberos, shadow copies                 |
| Backup and Replication  | ZFS send/receive, cloud sync, ransomware protection, RPO/RTO   |
| Apps and Services       | Container management, common application deployment            |
| Monitoring and Alerting | Grafana, Prometheus, SMART monitoring, alert configuration     |
| Performance Tuning      | ARC sizing, recordsize, compression, SMB/NFS tuning, hardware  |
| ZFS Encryption          | Native encryption, key management, raw send, security          |

The focus is on TrueNAS SCALE (Linux-based), but most ZFS concepts, CLI commands, and best practices
Apply equally to TrueNAS CORE. Where there are platform-specific differences, they are noted.

## Before You Begin

A few assumptions about the reader and the environment:

- You are familiar with Linux command-line administration (bash, systemd, networking).
- You understand basic storage concepts (RAID, filesystems, block devices).
- You have physical or virtual hardware available with at least two disks (mirroring is the minimum
  for redundancy).
- Your TrueNAS system is accessible via the web UI and SSH.

For hardware recommendations, refer to the TrueNAS hardware guide. The critical requirements are ECC
RAM, an HBA in IT mode (not a RAID controller), and enough RAM for the ARC (32 GB minimum for a
Dedicated NAS, 64 GB recommended).

## Summary

The key principles covered in this topic are linked in the sub-pages above. Focus on understanding
the definitions, applying the formulas or frameworks, and evaluating strengths and limitations of
each approach.

## Worked Examples

Worked examples demonstrating the application of key concepts are covered in the detailed sub-pages
linked above.

## Common Pitfalls

- Confusing terminology or concepts that appear similar but have distinct meanings.
- Overlooking key assumptions or boundary conditions that limit applicability.

## Overview

This introduction provides comprehensive coverage of Truenas content for the Infrastructure qualification, with detailed explanations, worked examples, and practice questions aligned to the specification.

## Content Structure

This page includes:

- **Key Definitions**: Precise explanations of essential concepts
- **Core Concepts**: Detailed treatment of fundamental principles
- **Worked Examples**: Step-by-step solutions demonstrating application
- **Practice Questions**: Examination-style questions with mark schemes
- **Common Pitfalls**: Frequent errors and how to avoid them
- **Exam Tips**: Strategies for maximising marks

## How to Use This Content

1. Read through the introductory material to establish context
2. Study the definitions and core concepts carefully
3. Work through the worked examples, following each step
4. Attempt the practice questions independently
5. Review your answers against the provided solutions
6. Note any areas requiring further revision

## Key Concepts

- Foundational definitions and terminology
- Application of principles to examination contexts
- Connections to related topics within the specification
- Assessment objective alignment

## Revision Strategies

- **Active Recall**: Test yourself on the material rather than passively re-reading
- **Spaced Repetition**: Review this content at increasing intervals
- **Interleaving**: Mix this topic with others during study sessions
- **Elaborative Interrogation**: Ask yourself why each concept works

## Exam Preparation

Practise applying these concepts under timed conditions. Focus on understanding what each question is asking and how marks are allocated. Review examiner reports to learn from common mistakes made by other students.

## Further Resources

- Flashcards for rapid revision of key terms
- Diagnostic tests to identify remaining gaps
- Practice problems with detailed worked solutions
- Cross-references to related topics