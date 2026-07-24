---
title: "Complete Cybersecurity Study Guide"
description: "Comprehensive cybersecurity study guide covering security fundamentals, cryptography, authentication, web security, network security, incident response, cloud security, OS security, malware analysis, and penetration testing. From foundations to advanced topics with practical examples."
date: 2026-07-24
tags:
  - security
  - study-guide
  - cybersecurity
  - penetration-testing
  - cryptography
categories:
  - hub
---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"name": "Home", "url": "https://security.wyattau.com"},
    {"name": "Hub", "url": "https://security.wyattau.com/hub"}
  ]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Complete Cybersecurity Study Guide",
  "description": "Comprehensive cybersecurity study guide covering security fundamentals, cryptography, web security, network security, incident response, and penetration testing.",
  "provider": {
    "@type": "Organization",
    "name": "Wyatt's Notes",
    "url": "https://security.wyattau.com"
  },
  "url": "https://security.wyattau.com/hub",
  "educationalLevel": "University",
  "inLanguage": "en",
  "isAccessibleForFree": true
}
</script>

## Why This Guide Exists

Cybersecurity is the practice of protecting systems, networks, and data from digital attacks. As our world becomes increasingly connected, the demand for cybersecurity professionals continues to grow. But cybersecurity is not just a career — it is a mindset. Every developer, every system administrator, and every user benefits from understanding how systems can be attacked and how to defend them.

This hub page maps every resource on this site. The learning path takes you from security fundamentals through cryptography, authentication, web security, network security, incident response, cloud security, OS security, malware analysis, and penetration testing. Each section includes practical examples, attack scenarios, and defensive strategies.

## Table of Contents

- [Security Fundamentals](#security-fundamentals)
- [Cryptography](#cryptography)
- [Authentication](#authentication)
- [Web Security](#web-security)
- [Network Security](#network-security)
- [Incident Response](#incident-response)
- [Cloud Security](#cloud-security)
- [OS Security](#os-security)
- [Malware Analysis](#malware-analysis)
- [Penetration Testing](#penetration-testing)
- [Learning Path](#learning-path)
- [Cross-Site Resources](#cross-site-resources)
- [FAQ](#faq)

---

## Security Fundamentals

Security fundamentals establish the principles and concepts that underpin all cybersecurity practice. Understanding these foundations is essential before studying specific attack and defence techniques.

### Topic Notes

- [Security Fundamentals Overview](/01-security-fundamentals) — core principles, threat models, and risk management
- [Security Fundamentals](/01-security-fundamentals/security-fundamentals) — CIA triad, least privilege, defence in depth, and threat modelling

### Key Concepts

The **CIA triad** defines the three pillars of information security:

- **Confidentiality**: only authorised parties can access data
- **Integrity**: data is accurate and has not been tampered with
- **Availability**: systems and data are accessible when needed

**Least privilege** dictates that users and systems should have only the minimum permissions necessary to perform their function. This limits the blast radius of compromised accounts or systems.

**Defence in depth** means layering multiple security controls so that if one fails, others still protect the asset. A firewall alone is insufficient — combine it with authentication, encryption, monitoring, and access controls.

**Threat modelling** identifies what you are protecting, who might attack it, and how. STRIDE (Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege) is a systematic threat classification framework.

---

## Cryptography

Cryptography is the science of securing communication through encoding messages so that only authorised parties can read them. It is the foundation of confidentiality and integrity in digital systems.

### Topic Notes

- [Cryptography Overview](/02-cryptography) — symmetric and asymmetric encryption, hash functions, and digital signatures
- [Cryptography](/02-cryptography/cryptography) — AES, RSA, ECC, SHA, and key exchange
- [TLS in Practice](/02-cryptography/tls-in-practice) — how cryptography is applied in real-world protocols

### Key Concepts

**Symmetric encryption** (AES, ChaCha20) uses the same key for encryption and decryption. It is fast and suitable for bulk data. The challenge is key distribution — how do you securely share the key?

**Asymmetric encryption** (RSA, ECDSA, Ed25519) uses a public-private key pair. The public key encrypts; the private key decrypts. It solves the key distribution problem but is much slower than symmetric encryption.

**Hash functions** (SHA-256, SHA-3, BLAKE3) produce a fixed-size digest from arbitrary input. They are one-way — you cannot reverse a hash to obtain the original data. They are used for password storage, data integrity verification, and digital signatures.

**Digital signatures** combine hashing and asymmetric encryption. The signer hashes the message and encrypts the hash with their private key. Anyone with the public key can verify the signature by comparing hashes.

**Key exchange** (Diffie-Hellman, ECDH) allows two parties to establish a shared secret over an insecure channel. Neither party ever sends the key directly — they each contribute to the shared secret mathematically.

---

## Authentication

Authentication verifies the identity of users, devices, and systems. It is the gatekeeper of access control — if authentication fails, all other security controls are irrelevant.

### Topic Notes

- [Authentication Overview](/03-authentication) — authentication factors, protocols, and best practices
- [Authentication](/03-authentication/authentication) — passwords, MFA, biometrics, and token-based auth
- [OAuth Deep Dive](/03-authentication/oauth-deep-dive) — OAuth 2.0, OpenID Connect, and token flows

### Key Concepts

**Multi-factor authentication (MFA)** requires two or more independent factors: something you know (password), something you have (phone or hardware key), and something you are (biometrics). MFA dramatically reduces the risk of account compromise.

**Password security** starts with hashing. Never store passwords in plaintext — hash them with a slow, salted algorithm like bcrypt, scrypt, or Argon2. Fast hashes (SHA-256) are unsuitable for passwords because they enable brute-force attacks.

**OAuth 2.0** is the standard for delegated authorisation. It allows a user to grant a third-party application limited access to their resources without sharing their credentials. OpenID Connect adds an identity layer on top of OAuth.

**Session management** determines how authenticated sessions are tracked. Tokens (JWT), server-side sessions, and cookies each have trade-offs. The key principles are: expire sessions, rotate tokens, and invalidate on logout.

---

## Web Security

Web security protects web applications from attacks that exploit vulnerabilities in code, configuration, or architecture. Web applications are the most commonly attacked surface in modern systems.

### Topic Notes

- [Web Security Overview](/04-web-security) — common vulnerabilities and defence strategies
- [OWASP Top 10](/04-web-security/owasp-top-10) — the most critical web application security risks
- [Web Security](/04-web-security/web-security) — injection, XSS, CSRF, and security headers
- [API Security](/04-web-security/api-security) — authentication, authorisation, and rate limiting for APIs

### Key Concepts

**Injection attacks** occur when untrusted data is sent to an interpreter as part of a command. SQL injection, NoSQL injection, and command injection are common variants. The defence is input validation and parameterised queries.

**Cross-Site Scripting (XSS)** occurs when an attacker injects malicious scripts into web pages viewed by other users. Stored XSS, reflected XSS, and DOM-based XSS are the three types. The defence is output encoding and Content Security Policy (CSP) headers.

**Cross-Site Request Forgery (CSRF)** tricks a user's browser into making unwanted requests to a site where they are authenticated. The defence is anti-CSRF tokens and SameSite cookies.

**The OWASP Top 10** lists the most critical web application security risks: Broken Access Control, Cryptographic Failures, Injection, Insecure Design, Security Misconfiguration, Vulnerable Components, Authentication Failures, Software and Data Integrity Failures, Logging and Monitoring Failures, and Server-Side Request Forgery.

---

## Network Security

Network security protects data in transit and the infrastructure that carries it. It encompasses firewalls, intrusion detection, VPNs, and network monitoring.

### Topic Notes

- [Network Security Overview](/05-network-security) — perimeter defence, monitoring, and access control
- [Network Security](/05-network-security/network-security) — firewalls, IDS/IPS, and network segmentation
- [VPN and Tunneling](/05-network-security/vpn-and-tunneling) — IPsec, WireGuard, and encrypted tunnels

### Key Concepts

**Firewalls** filter network traffic based on rules. Packet-filtering firewalls inspect headers; stateful firewalls track connection state; application-layer firewalls inspect payload. Modern next-generation firewalls combine all three.

**Network segmentation** divides a network into isolated zones. If one segment is compromised, the attacker cannot move laterally to other segments. Use VLANs, subnets, and firewall rules to enforce segmentation.

**VPNs** create encrypted tunnels over public networks. IPsec operates at the network layer; WireGuard is a modern, high-performance VPN protocol. VPNs protect data in transit but do not protect endpoints.

---

## Incident Response

Incident response is the process of detecting, containing, eradicating, and recovering from security incidents. A well-practised incident response plan limits damage and reduces recovery time.

### Topic Notes

- [Incident Response Overview](/06-incident-response) — preparation, detection, containment, and recovery
- [Incident Response](/06-incident-response/incident-response) — the incident response lifecycle and playbooks
- [Forensics](/06-incident-response/forensics) — digital forensics, evidence collection, and chain of custody

### Key Concepts

The **incident response lifecycle** has four phases: Preparation (plan and train), Detection and Analysis (identify the incident), Containment, Eradication, and Recovery (stop and fix it), and Post-Incident Activity (learn and improve).

**Containment** stops the incident from spreading. Short-term containment isolates affected systems; long-term containment applies patches and hardening while maintaining business operations.

**Digital forensics** preserves and analyses evidence. The chain of custody documents who handled evidence and when. Forensic images capture the exact state of a system without altering it.

---

## Cloud Security

Cloud security protects data, applications, and infrastructure in cloud environments. The shared responsibility model defines what the cloud provider secures versus what the customer secures.

### Topic Notes

- [Cloud Security Overview](/07-cloud-security) — shared responsibility, identity, and data protection
- [Cloud Security](/07-cloud-security/cloud-security) — IAM, encryption, and configuration management

### Key Concepts

The **shared responsibility model** divides security duties. The cloud provider secures the infrastructure (physical data centres, network, hypervisor). The customer secures what they put in the cloud (data, identity, application configuration, OS patching).

**Identity and Access Management (IAM)** is the primary security control in the cloud. Follow least privilege — grant only the permissions needed. Use roles instead of long-lived access keys. Enable MFA everywhere.

**Cloud configuration errors** are the leading cause of cloud security incidents. Public S3 buckets, overly permissive security groups, and unencrypted storage are common mistakes. Use infrastructure-as-code scanning and continuous compliance monitoring.

---

## OS Security

Operating system security protects the system from unauthorised access, malware, and configuration weaknesses. Hardening an OS reduces its attack surface.

### Topic Notes

- [OS Security Overview](/08-os-security) — hardening, access control, and monitoring
- [OS Security](/08-os-security/os-security) — Linux and Windows security configuration and best practices

### Key Concepts

**Hardening** reduces the attack surface by disabling unnecessary services, removing unused software, applying patches, and configuring access controls. A hardened system has fewer avenues for attack.

**File permissions** control who can read, write, and execute files. Linux uses Unix permissions (owner, group, others) and ACLs. Windows uses NTFS permissions. Follow least privilege — grant write access only when necessary.

**Audit logging** records who did what and when. Enable logging for authentication, privilege escalation, file access, and system changes. Forward logs to a centralised system that an attacker cannot tamper with.

---

## Malware Analysis

Malware analysis examines malicious software to understand its behaviour, capabilities, and indicators of compromise. It is essential for incident response and threat intelligence.

### Topic Notes

- [Malware Analysis Overview](/09-malware-analysis) — types of malware, analysis techniques, and tools
- [Malware Analysis](/09-malware-analysis/malware-analysis) — static analysis, dynamic analysis, and reverse engineering

### Key Concepts

**Static analysis** examines malware without running it — analysing file headers, strings, imports, and disassembly. It reveals the malware's capabilities without risk of infection.

**Dynamic analysis** runs malware in a controlled environment (sandbox) and observes its behaviour — file system changes, network connections, registry modifications, and process creation.

**Indicators of Compromise (IOCs)** are artefacts that indicate a breach: file hashes, IP addresses, domain names, registry keys, and file paths. Share IOCs with threat intelligence communities to help others detect the same malware.

---

## Penetration Testing

Penetration testing simulates real-world attacks to identify vulnerabilities before adversaries do. It is a structured, authorised process of ethical hacking.

### Topic Notes

- [Penetration Testing Overview](/pentesting-and-attacks) — methodology, tools, and reporting
- [Penetration Testing](/pentesting-and-attacks) — reconnaissance, scanning, exploitation, and post-exploitation

### Key Concepts

The **penetration testing methodology** follows a structured process:

1. **Reconnaissance** — gather information about the target (OSINT, DNS enumeration, social engineering)
2. **Scanning** — identify live hosts, open ports, and running services
3. **Exploitation** — use identified vulnerabilities to gain access
4. **Post-exploitation** — escalate privileges, move laterally, and establish persistence
5. **Reporting** — document findings, evidence, and remediation recommendations

**Common tools** include Nmap (network scanning), Burp Suite (web application testing), Metasploit (exploitation), Wireshark (packet analysis), and John the Ripper (password cracking).

---

## Learning Path

Cybersecurity is vast. Follow this progression to build competence.

### Stage 1: Foundations (Weeks 1–6)

- Study security fundamentals — CIA triad, threat modelling, and risk management
- Learn cryptography — symmetric and asymmetric encryption, hashing, and digital signatures
- Understand authentication — MFA, password security, and OAuth

### Stage 2: Core Skills (Weeks 7–12)

- Study web security — OWASP Top 10, injection, XSS, and CSRF
- Learn network security — firewalls, IDS/IPS, and VPNs
- Understand incident response — detection, containment, and recovery

### Stage 3: Advanced Topics (Weeks 13–18)

- Study cloud security — IAM, shared responsibility, and configuration management
- Learn OS security — hardening, permissions, and audit logging
- Understand malware analysis — static and dynamic analysis

### Stage 4: Specialisation (Weeks 19–24)

- Study penetration testing — methodology, tools, and reporting
- Choose a specialisation — application security, network forensics, or threat intelligence
- Build a home lab and practise on vulnerable systems (DVWA, HackTheBox, TryHackMe)

---

## Cross-Site Resources

Wyatt's Notes is a network of interconnected study sites. The security content connects to related material:

- **[Networking Guide](https://networking.wyattau.com/hub)** — the network protocols that security controls protect
- **[C++ Programming Guide](https://cpp.wyattau.com/hub)** — if you are building security-critical applications
- **[Python Programming Guide](https://python.wyattau.com/hub)** — Python is widely used for security tooling and scripting
- **[Database Design Guide](https://databases.wyattau.com/hub)** — database security, encryption, and access control
- **[Computer Science Guide](https://computer-science.wyattau.com/hub)** — algorithms and theory that underpin cryptography

---

## Frequently Asked Questions

### How should I start learning cybersecurity?

Start with security fundamentals — understand the CIA triad, least privilege, and defence in depth. Then learn cryptography — it is the foundation of all security controls. Build a home lab and practise on intentionally vulnerable systems.

### Do I need to know programming for cybersecurity?

Yes, at least at a basic level. Python is the most commonly used language for security tooling. Understanding how code works helps you find vulnerabilities and understand exploits. You do not need to be a developer, but you should be able to read and write scripts.

### What certifications should I get?

For beginners, CompTIA Security+ provides a solid foundation. For intermediate professionals, CEH (Certified Ethical Hacker) or OSCP (Offensive Security Certified Professional) are valuable. For advanced specialisation, CISSP or GPEN demonstrate expertise.

### How do I practise cybersecurity safely?

Build a home lab with virtual machines. Use intentionally vulnerable systems like DVWA, Metasploitable, or HackTheBox. Never practise on systems you do not own or have explicit permission to test.

### What is the difference between penetration testing and vulnerability scanning?

Vulnerability scanning automatically identifies potential weaknesses using tools. Penetration testing manually exploits those weaknesses to demonstrate real-world impact. Scanning is broad and fast; testing is deep and slow.

### Is cybersecurity a good career?

Yes. Demand for cybersecurity professionals far exceeds supply. The field offers strong salaries, job security, and meaningful work. It requires continuous learning — threats evolve constantly — but that is part of what makes it interesting.

---

*Last updated: 24 July 2026*

*Written by Wyatt. For questions or feedback, visit [wyattau.com](https://wyattau.com).*
