---
template: splash
title: Infrastructure Notes
description: "These notes provide practical guidance on designing, deploying, and maintaining IT infrastructure. Topics range from storage systems and database"
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

## Overview

Server administration and databases notes covering storage, networking, security, and system administration topics.

## Subjects Covered

- **[Storage](/truenas/)**: ZFS, TrueNAS, RAID configurations, backup strategies
- **[Databases](/databases/)**: PostgreSQL, MySQL, MongoDB, Redis, database design
- **[Networking](/networking/)**: TCP/IP, DNS, HTTP, load balancing, firewalls
- **[Security](/security/)**: Hardening, encryption, access control, monitoring
- **[System Administration](/linux/)**: Linux, automation, scripting, containerisation

## How to Use These Notes

Start with the introductory pages to build foundational knowledge, then progress to more advanced topics. Each section includes practical examples and command-line instructions that can be tried on a real system. Use the practice questions to test your understanding before moving to the next topic.

## Navigation

Use the sidebar to browse topics, or start with the introductory pages linked from the sidebar. The notes are designed to be followed sequentially for beginners, or used as a reference for experienced practitioners.

## Additional Resources

Each section includes command-line examples that can be copied and run directly. Where applicable, configuration files are provided in full, and common error messages are explained with troubleshooting steps. The notes reference official documentation and industry best practices throughout.

## Prerequisites

These notes assume basic familiarity with:
- Linux command line (file navigation, text editing, package management)
- Basic networking concepts (IP addresses, ports, protocols)
- Text editing (vim, nano, or VS Code)

For beginners, start with the introductory sections which provide context for each topic before diving into implementation details.

## Study Tips

1. **Hands-on practice**: Set up a virtual machine or lab environment to try the commands and configurations
2. **Take notes**: Document your own environment-specific configurations and solutions
3. **Review error messages**: Understanding common errors helps with troubleshooting
4. **Build incrementally**: Start with simple setups and add complexity gradually
5. **Use the worked examples**: Follow along with the examples to build muscle memory

## Overview

This landing page provides comprehensive coverage of Index.md content for the Infrastructure qualification, with detailed explanations, worked examples, and practice questions aligned to the specification.

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

## Overview

This landing page provides comprehensive coverage of Index.md content for the Infrastructure qualification, with detailed explanations, worked examples, and practice questions aligned to the specification.

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