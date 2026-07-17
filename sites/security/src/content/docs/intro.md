---
title: Introduction to Security
description: "Information security is not a feature you bolt on after the fact. It is a property of a system that Must be designed in from the start, validated"

---

## The Threat Landscape

Information security is not a feature you bolt on after the fact. It is a property of a system that
Must be designed in from the start, validated continuously, and treated as a first-class engineering
Concern alongside reliability, performance, and correctness.

The modern threat landscape is defined by scale and sophistication. Nation-state actors operate with
Resources that rival the budgets of the organizations they target. Organized crime groups monetize
Access through ransomware, data exfiltration, and credential resale. Insider threats — whether
Malicious or negligent — account for a significant fraction of breaches. Supply chain attacks
Compromise trusted software to reach thousands of downstream victims simultaneously.

The cost of failure is material. The average data breach costs organizations millions of USD, and
Regulatory penalties under GDPR, HIPAA, and PCI-DSS can dwarf the direct technical cost of an
Incident.

## Security as a Systems Engineering Discipline

Security failures are almost always systems failures. A buffer overflow in a C library, a
Misconfigured S3 bucket, an overly permissive IAM policy, a leaked JWT secret — these are not crypto
Problems or network problems or application problems. They are systems problems that manifest at a
Particular layer.

The systems engineer"s advantage is understanding how layers interact. When you understand how TLS
Termination works, how DNS resolution chains to load balancers, how container isolation maps to
Kernel namespaces, you can reason about where trust boundaries exist and where they might be
Violated.

## The CIA Triad

Every security property ultimately reduces to one or more of:

| Property            | Question                                     | Failure Mode                     |
| ------------------- | -------------------------------------------- | -------------------------------- |
| **Confidentiality** | Can unauthorized parties read this data?     | Data breach, information leakage |
| **Integrity**       | Can unauthorized parties modify this data?   | Data tampering, code injection   |
| **Availability**    | Can authorized parties access this resource? | Denial of service, data deletion |

Most real-world incidents violate multiple triad elements simultaneously. A ransomware attack
Compromises confidentiality (data exfiltration before encryption), integrity (file encryption), and
Availability (system lockout) in a single operation.

## Defense in Depth

No single security control is sufficient. Defense in depth layers multiple independent controls so
That the failure of any one mechanism does not result in total compromise. A web application
Protected by WAF, input validation, parameterized queries, and least-privilege database credentials
Is resilient in ways that an application relying on any single one of those controls is not.

The key insight is **independence** — controls must fail independently. Two firewalls from the same
Vendor with the same rule set are not two independent controls.

## The Security Mindset

Security engineering requires a particular mindset: assume components fail, assume configurations
Drift, assume attackers have more information than you think, and assume that what you do not
Explicitly deny is permitted.

This is adversarial thinking — not paranoia, but disciplined skepticism. The question is not "does
This work?" but "what happens when this is used in ways I did not intend?"

## Scope of This Section

This section covers the core security competencies expected of a systems engineer:

1. **Security Fundamentals**. CIA triad, threat modeling, risk assessment, least privilege
   ([security-fundamentals](./01-security-fundamentals/security-fundamentals.md))
2. **Cryptography**. Symmetric/asymmetric encryption, hashing, PKI, TLS
   ([cryptography](./02-cryptography/cryptography.md))
3. **Authentication and Authorization**. Passwords, MFA, OAuth 2.0, JWT, RBAC/ABAC
   ([authentication](./03-authentication/authentication.md))
4. **Web Security**. XSS, CSRF, injection, CORS, CSP, OWASP Top 10
   ([web-security](./04-web-security/web-security.md))
5. **Network Security**. Firewalls, VPNs, zero trust, DNS security, SIEM
   ([network-security](./05-network-security/network-security.md))
6. **Incident Response**. NIST IR lifecycle, forensics, containment, post-mortem
   ([incident-response](./06-incident-response/incident-response.md))

<aside class="starlight-aside starlight-aside--tip">
Administration. The focus is on understanding how security controls work at the implementation level
And why they fail when they do.

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

This introduction provides comprehensive coverage of Security content for the Infrastructure qualification, with detailed explanations, worked examples, and practice questions aligned to the specification.

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
</aside>