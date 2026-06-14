---
template: splash
title: Infrastructure Notes
description: 'Infrastructure notes covering TrueNAS, databases, networking, security, and system administration topics.'
hero:
  tagline: Notes and study materials
  actions:
    - text: Browse Notes
      link: /databases/intro/
      icon: right-arrow
      variant: primary
---

These notes provide practical guidance on designing, deploying, and maintaining IT infrastructure. Topics range from storage systems and database administration to networking fundamentals and security best practices, each presented with clear explanations and real-world examples.

## Key Topics

The notes are organised into major infrastructure domains: storage and file systems (including TrueNAS and ZFS), relational and non-relational databases, network architecture, and security hardening. Each section assumes a working familiarity with the Linux command line and basic networking concepts.

## Worked Example: Setting Up a ZFS Pool

A ZFS storage pool is created using the `zpool create` command. For instance, `zpool create tank mirror /dev/sda /dev/sdb` creates a mirrored pool named `tank` from two disks. This configuration provides redundancy: if one disk fails, the data remains accessible from the other. You can verify the pool status by running `zpool status tank`, which reports the health, capacity, and any errors detected.
