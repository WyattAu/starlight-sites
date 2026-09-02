---
title: "Cybersecurity Practice Test — 30 Problems"
description: "30 cybersecurity problems covering Network Security, Cryptography, and Compliance. Multiple choice and scenario analysis with detailed explanations."
date: 2026-07-24
tags:
  - security
  - practice-test
  - exam-preparation
  - cybersecurity
categories:
  - practice-test
---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"name": "Home", "url": "https://security.wyattau.com"},
    {"name": "Practice Test", "url": "https://security.wyattau.com/practice-test-mega"}
  ]
}
</script>

## Cybersecurity Practice Test — 30 Problems

This practice test covers 30 problems across three major domains of cybersecurity: Network Security, Cryptography, and Compliance and Risk. Each problem tests conceptual understanding, threat analysis, and real-world scenario reasoning. Work through all problems before checking the answer key.

## Instructions

- **Time limit:** 75 minutes (2.5 minutes per problem)
- **Format:** Multiple choice and scenario analysis — select the best answer or apply security concepts to a scenario
- **Marking:** 1 mark per problem, 30 marks total
- **Conditions:** Attempt without notes.
- **After the test:** Check the answer key at the bottom. Study the explanations for any problems you got wrong.

| Domain | Problems | Marks |
| --- | --- | --- |
| Network Security | P1–P10 | 10 |
| Cryptography | P11–P20 | 10 |
| Compliance and Risk | P21–P30 | 10 |
| **Total** | **30** | **30** |

---

## Network Security (P1–P10)

### P1 — CIA Triad

A company's website is defaced by an attacker who modifies the homepage content. Which pillar of the CIA triad is primarily violated?

| # | Option |
| --- | --- |
| A | Confidentiality |
| B | Integrity |
| C | Availability |
| D | Authentication |
| E | Non-repudiation |

**Correct: B** (index 1)

Integrity ensures data is accurate and unauthorised modification is prevented. Defacing a website modifies data without authorization — a direct integrity violation. Confidentiality is about unauthorised access; availability is about system uptime.

`easy` — 1 mark

---

### P2 — Least Privilege Principle

A database administrator needs to run queries but should not be able to modify database schema. Which security principle applies?

| # | Option |
| --- | --- |
| A | Defence in depth |
| B | Separation of duties |
| C | Least privilege |
| D | Need to know |
| E | Risk transference |

**Correct: C** (index 2)

Least privilege dictates that users should have only the minimum permissions necessary to perform their function. The DBA needs query access but not schema modification — granting only what is needed follows least privilege. Defence in depth layers multiple controls; separation of duties divides critical tasks.

`easy` — 1 mark

---

### P3 — Firewall Rules

A firewall rule blocks all inbound traffic on port 23 (Telnet). Which security objective does this primarily achieve?

| # | Option |
| --- | --- |
| A | Encrypting remote access traffic |
| B | Reducing the attack surface by disabling an insecure protocol |
| C | Ensuring data integrity during transmission |
| D | Implementing multi-factor authentication |
| E | Complying with GDPR requirements |

**Correct: B** (index 1)

Telnet transmits data (including credentials) in plaintext. Blocking port 23 eliminates an insecure protocol from the network, reducing the attack surface. SSH (port 22) should be used instead for encrypted remote access. This is a hardening measure.

`easy` — 1 mark

---

### P4 — IDS Alert Classification

An IDS alerts on repeated failed login attempts from a single IP address targeting 50 different user accounts. What type of attack is this most likely?

| # | Option |
| --- | --- |
| A | Denial of service |
| B | Brute force / credential stuffing |
| C | SQL injection |
| D | Cross-site scripting |
| E | Man-in-the-middle |

**Correct: B** (index 1)

Repeated failed logins across many accounts from one IP suggests credential stuffing (trying leaked username/password pairs) or brute force. DoS floods a single target. SQL injection and XSS target web applications, not authentication systems. Mitigation: rate limiting, account lockout, and IP reputation lists.

`medium` — 1 mark

---

### P5 — Network Segmentation

Why should payment processing systems be on a separate network segment?

| # | Option |
| --- | --- |
| A | To increase network speed |
| B | To limit lateral movement in case of a breach and meet PCI DSS requirements |
| C | To reduce DNS lookup time |
| D | To simplify firewall rules |
| E | To enable faster backups |

**Correct: B** (index 1)

Network segmentation isolates sensitive systems. If an attacker compromises the general network, they cannot reach the payment segment without crossing a firewall. PCI DSS explicitly requires segmentation of cardholder data environments. This limits blast radius and reduces compliance scope.

`medium` — 1 mark

---

### P6 — VPN Limitations

A company deploys a VPN for remote workers. Which threat does the VPN NOT protect against?

| # | Option |
| --- | --- |
| A | Eavesdropping on public Wi-Fi |
| B | Compromised endpoints with malware |
| C | Man-in-the-middle attacks on the VPN tunnel |
| D | IP address spoofing on the local network |
| E | Unencrypted traffic between VPN server and destination |

**Correct: B** (index 1)

A VPN encrypts traffic between the endpoint and the VPN gateway. It does not protect against malware on the endpoint itself — if the device is compromised, the attacker can access data before it enters the VPN tunnel. VPNs also do not inspect traffic content for threats.

`medium` — 1 mark

---

### P7 — WPA3 Security

What is a key improvement of WPA3 over WPA2?

| # | Option |
| --- | --- |
| A | Faster wireless speeds |
| B | Protection against offline dictionary attacks via SAE |
| C | Support for more wireless clients |
| D | Backward compatibility with WEP |
| E | Larger network range |

**Correct: B** (index 1)

WPA3 uses SAE (Dragonfly key exchange) instead of PSK, making it resistant to offline dictionary attacks. An attacker capturing the four-way handshake cannot brute-force the password offline. WPA3 also provides forward secrecy and stronger encryption (GCMP-256).

`medium` — 1 mark

---

### P8 — DDoS Mitigation

Which technique is most effective against volumetric DDoS attacks?

| # | Option |
| --- | --- |
| A | Web application firewall |
| B | Rate limiting at the network edge |
| C | Input validation |
| D | SQL parameterization |
| E | Two-factor authentication |

**Correct: B** (index 1)

Volumetric DDoS floods the network bandwidth. Rate limiting at the edge (or upstream) drops excess traffic before it reaches the target. Web application firewalls protect against application-layer attacks. Input validation and parameterisation prevent injection, not DDoS.

`medium` — 1 mark

---

### P9 — Zero Trust Architecture

What is the core principle of Zero Trust?

| # | Option |
| --- | --- |
| A | Trust all internal traffic by default |
| B | Never trust, always verify — authenticate and authorise every request regardless of location |
| C | Use a single firewall to protect the perimeter |
| D | Encrypt all data at rest only |
| E | Allow all traffic inside the network |

**Correct: B** (index 1)

Zero Trust assumes no implicit trust based on network location. Every access request is authenticated, authorised, and encrypted — whether it originates inside or outside the network. This eliminates the "trusted internal network" assumption that attackers routinely exploit.

`medium` — 1 mark

---

### P10 — SIEM Purpose

What is the primary purpose of a SIEM (Security Information and Event Management) system?

| # | Option |
| --- | --- |
| A | Encrypt network traffic |
| B | Aggregate and correlate security logs for detection and analysis |
| C | Block malicious IP addresses |
| D | Manage user passwords |
| E | Scan for vulnerabilities |

**Correct: B** (index 1)

A SIEM collects logs from across the infrastructure (firewalls, IDS, servers, endpoints), correlates events, and alerts on suspicious patterns. It provides centralised visibility, incident detection, and forensic analysis. It does not block traffic directly — that is the job of firewalls and IPS.

`easy` — 1 mark

---

## Cryptography (P11–P20)

### P11 — Symmetric Encryption Keys

How many keys does symmetric encryption use?

| # | Option |
| --- | --- |
| A | Zero — it is unencrypted |
| B | One — the same key for encryption and decryption |
| C | Two — one for encryption, one for decryption |
| D | Three — encryption, decryption, and hashing |
| E | It depends on the algorithm |

**Correct: B** (index 1)

Symmetric encryption uses a single shared key for both encryption and decryption. AES, ChaCha20, and 3DES are symmetric algorithms. The challenge is key distribution — both parties must securely share the secret key before communication.

`easy` — 1 mark

---

### P12 — Asymmetric Encryption Use Case

Which use case is asymmetric encryption best suited for?

| # | Option |
| --- | --- |
| A | Encrypting large file transfers |
| B | Encrypting database contents at rest |
| C | Key exchange and digital signatures |
| D | Real-time video encryption |
| E | Compressing data before encryption |

**Correct: C** (index 2)

Asymmetric encryption (RSA, ECC) is slow for bulk data but solves key distribution. It is used to exchange symmetric keys (TLS handshake) and to create digital signatures (verify identity and integrity). Symmetric encryption handles bulk data.

`easy` — 1 mark

---

### P13 — Hash Function Properties

Which property makes a hash function suitable for password storage?

| # | Option |
| --- | --- |
| A | Fast computation |
| B | Pre-image resistance |
| C | Deterministic output for the same input |
| D | Fixed output length |
| E | Avalanche effect |

**Correct: B** (index 1)

Pre-image resistance means you cannot compute the original input from the hash output. For password storage, this means an attacker with the hash database cannot recover the original passwords. Fast computation is actually bad for password hashing — slow algorithms (bcrypt, Argon2) resist brute-force attacks.

`medium` — 1 mark

---

### P14 — Digital Signatures

What does a digital signature provide?

| # | Option |
| --- | --- |
| A | Confidentiality — only the recipient can read the message |
| B | Authentication, integrity, and non-repudiation |
| C | Encryption of the entire message |
| D | Key distribution for future communication |
| E | Compression of the message |

**Correct: B** (index 1)

Digital signatures prove: (1) Authentication — the signer's identity is verified via their private key, (2) Integrity — the signed hash proves the message was not modified, (3) Non-repudiation — the signer cannot deny signing. They do not provide confidentiality.

`medium` — 1 mark

---

### P15 — Key Exchange (Diffie-Hellman)

What is the purpose of Diffie-Hellman key exchange?

| # | Option |
| --- | --- |
| A | To encrypt data in transit |
| B | To establish a shared secret over an insecure channel without sending the key |
| C | To authenticate the server's identity |
| D | To generate digital certificates |
| E | To compress data before transmission |

**Correct: B** (index 1)

Diffie-Hellman allows two parties to compute a shared secret over an insecure channel. Each party contributes to the shared secret mathematically — neither sends the actual key. An eavesdropper cannot compute the shared secret without solving the discrete logarithm problem.

`medium` — 1 mark

---

### P16 — Certificate Authority Role

What is the role of a Certificate Authority (CA)?

| # | Option |
| --- | --- |
| A | To encrypt all web traffic |
| B | To issue, sign, and revoke digital certificates that verify entity identities |
| C | To generate symmetric encryption keys |
| D | To manage firewall rules |
| E | To monitor network traffic |

**Correct: B** (index 1)

A CA issues digital certificates binding a public key to an identity. The CA signs certificates with its private key. Clients verify the signature using the CA's public key (in the trust store). CAs also maintain Certificate Revocation Lists (CRLs) and support OCSP for revocation checking.

`easy` — 1 mark

---

### P17 — Password Hashing (bcrypt)

Why is bcrypt preferred over SHA-256 for password hashing?

| # | Option |
| --- | --- |
| A | bcrypt is faster than SHA-256 |
| B | bcrypt includes a salt and is deliberately slow to resist brute-force attacks |
| C | bcrypt produces shorter hashes |
| D | bcrypt is a symmetric encryption algorithm |
| E | bcrypt does not require a key |

**Correct: B** (index 1)

bcrypt is designed for password hashing — it includes a random salt (preventing rainbow tables) and is computationally expensive (configurable cost factor). SHA-256 is too fast — an attacker can compute billions of hashes per second for brute-force. bcrypt, scrypt, and Argon2 are purpose-built for passwords.

`medium` — 1 mark

---

### P18 — Forward Secrecy

What does forward secrecy guarantee?

| # | Option |
| --- | --- |
| A | Data is encrypted at rest |
| B | Compromising a long-term key does not compromise past session keys |
| C | All traffic is encrypted end-to-end |
| D | The server cannot decrypt client messages |
| E | Keys are never stored on disk |

**Correct: B** (index 1)

Forward secrecy (perfect forward secrecy, PFS) ensures that each session uses a unique ephemeral key. Even if the server's long-term private key is later compromised, past sessions cannot be decrypted because the ephemeral session keys were discarded. TLS 1.3 mandates forward secrecy.

`medium` — 1 mark

---

### P19 — AES Block Size

What is the block size of AES?

| # | Option |
| --- | --- |
| A | 56 bits |
| B | 64 bits |
| C | 128 bits |
| D | 256 bits |
| E | 512 bits |

**Correct: C** (index 2)

AES (Advanced Encryption Standard) has a fixed block size of 128 bits (16 bytes). Key sizes can be 128, 192, or 256 bits (AES-128, AES-192, AES-256). DES used 64-bit blocks with 56-bit keys. The block size determines how much data is encrypted in each operation.

`easy` — 1 mark

---

### P20 — RSA Key Size

A company uses RSA-2048 for encryption. An attacker wants to factor the modulus. What is the computational complexity class of this problem?

| # | Option |
| --- | --- |
| A | P — solvable in polynomial time |
| B | NP-complete |
| C | believed to be hard (no known polynomial-time algorithm) |
| D | O(1) — constant time |
| E | O(n) — linear time |

**Correct: C** (index 2)

Integer factorisation (needed to break RSA) has no known polynomial-time algorithm on classical computers. It is believed to be hard but is not proven NP-complete. Quantum computers (Shor's algorithm) can factor efficiently, which is why post-quantum cryptography is being developed.

`medium` — 1 mark

---

## Compliance and Risk (P21–P30)

### P21 — GDPR Data Subject Rights

Under GDPR, which right allows a user to request deletion of their personal data?

| # | Option |
| --- | --- |
| A | Right to access |
| B | Right to rectification |
| C | Right to erasure (right to be forgotten) |
| D | Right to data portability |
| E | Right to object |

**Correct: C** (index 2)

The right to erasure (Article 17) allows data subjects to request deletion of their personal data. Exceptions exist (legal obligations, freedom of expression). Right to access is Article 15, rectification is Article 16, portability is Article 20, and object is Article 21.

`easy` — 1 mark

---

### P22 — PCI DSS Scope

Which requirement is a key part of PCI DSS for organisations handling card payments?

| # | Option |
| --- | --- |
| A | Encrypt all email communications |
| B | Encrypt transmission of cardholder data across open, public networks |
| C | Use biometric authentication for all employees |
| D | Store passwords in plaintext for customer support |
| E | Allow unlimited login attempts |

**Correct: B** (index 1)

PCI DSS Requirement 4 mandates encrypting cardholder data during transmission over open networks (e.g., the internet). This prevents interception of payment data. Other key requirements include maintaining a firewall, using strong cryptography for stored data, and restricting access on a need-to-know basis.

`medium` — 1 mark

---

### P23 — SOC 2 Trust Services

Which is NOT one of the five Trust Services Criteria in SOC 2?

| # | Option |
| --- | --- |
| A | Security |
| B | Availability |
| C | Confidentiality |
| D | Profitability |
| E | Privacy |

**Correct: D** (index 3)

SOC 2 Trust Services Criteria are: Security, Availability, Processing Integrity, Confidentiality, and Privacy. Profitability is a business metric, not a security criterion. SOC 2 reports assess controls relevant to these five criteria based on the organisation's commitments.

`medium` — 1 mark

---

### P24 — Incident Response Phases

What is the correct order of the incident response lifecycle?

| # | Option |
| --- | --- |
| A | Detection → Preparation → Recovery → Lessons learned |
| B | Preparation → Detection and Analysis → Containment/Eradication/Recovery → Post-incident Activity |
| C | Recovery → Detection → Preparation → Forensics |
| D | Post-incident → Preparation → Detection → Recovery |
| E | Detection → Recovery → Preparation → Containment |

**Correct: B** (index 1)

The NIST incident response lifecycle: (1) Preparation — plan and train, (2) Detection and Analysis — identify the incident, (3) Containment, Eradication, and Recovery — stop and fix it, (4) Post-Incident Activity — learn and improve. Preparation comes first because you cannot respond effectively without a plan.

`medium` — 1 mark

---

### P25 — Risk Assessment Matrix

In a risk assessment, risk is calculated as:

| # | Option |
| --- | --- |
| A | Risk = Vulnerability + Threat |
| B | Risk = Threat x Vulnerability x Impact |
| C | Risk = Impact - Likelihood |
| D | Risk = Asset x Threat |
| E | Risk = Probability / Cost |

**Correct: B** (index 1)

Risk is the product of threat likelihood, vulnerability, and impact. A high-impact event with high likelihood and high vulnerability represents the greatest risk. This formula helps organisations prioritise which risks to mitigate first based on their overall risk score.

`medium` — 1 mark

---

### P26 — Penetration Testing vs Vulnerability Scanning

What is the key difference between penetration testing and vulnerability scanning?

| # | Option |
| --- | --- |
| A | They are identical |
| B | Vulnerability scanning is automated and broad; penetration testing is manual and deep |
| C | Penetration testing only looks at network layer |
| D | Vulnerability scanning requires authorisation; penetration testing does not |
| E | Penetration testing is faster than scanning |

**Correct: B** (index 1)

Vulnerability scanning uses tools to automatically identify known weaknesses across many systems. Penetration testing involves a human expert manually exploiting identified vulnerabilities to demonstrate real-world impact. Scanning is broad and fast; testing is deep and slow. Both require explicit authorisation.

`medium` — 1 mark

---

### P27 — Encryption at Rest vs In Transit

A company encrypts its database (at rest) and its HTTPS traffic (in transit). A stolen laptop exposes the database. Which encryption protected the data?

| # | Option |
| --- | --- |
| A | Encryption in transit |
| B | Encryption at rest |
| C | Both protected the data |
| D | Neither — encryption does not help with stolen devices |
| E | Only TLS protected the data |

**Correct: B** (index 1)

Encryption at rest protects data stored on disk — if the laptop is stolen, the database file is unreadable without the decryption key. Encryption in transit protects data moving over the network. The stolen laptop scenario involves stored data, so encryption at rest is the relevant control.

`easy` — 1 mark

---

### P28 — Shared Responsibility Model

In a cloud environment, which responsibility is ALWAYS the customer's under the shared responsibility model?

| # | Option |
| --- | --- |
| A | Physical data centre security |
| B | Hypervisor patching |
| C | Data classification and access control |
| D | Network infrastructure maintenance |
| E | Hardware replacement |

**Correct: C** (index 2)

The cloud provider secures the infrastructure (physical security, hypervisor, network). The customer secures what they put in the cloud — data classification, identity management, access control, application configuration, and OS patching (for IaaS). Data classification and access control are always the customer's responsibility.

`medium` — 1 mark

---

### P29 — Business Continuity

What is the primary purpose of a Business Continuity Plan (BCP)?

| # | Option |
| --- | --- |
| A | To prevent all security incidents |
| B | To ensure critical business functions can continue during and after a disaster |
| C | To encrypt all business data |
| D | To hire more security staff |
| E | To eliminate all risk |

**Correct: B** (index 1)

A BCP defines how an organisation maintains operations during and after a disruptive event (natural disaster, cyberattack, power outage). It identifies critical functions, defines recovery procedures, and establishes communication plans. It does not prevent incidents — it ensures resilience.

`easy` — 1 mark

---

### P30 — STRIDE Threat Model

In the STRIDE threat model, what does the "S" stand for?

| # | Option |
| --- | --- |
| A | Security |
| B | Spoofing |
| C | Steganography |
| D | Segmentation |
| E | Synchronisation |

**Correct: B** (index 1)

STRIDE stands for: Spoofing (impersonation), Tampering (unauthorised modification), Repudiation (denying actions), Information Disclosure (unauthorised data access), Denial of Service (interrupting service), Elevation of Privilege (gaining unauthorised access). Each category maps to a security property: authentication, integrity, non-repudiation, confidentiality, availability, and authorisation.

`medium` — 1 mark

---

## Answer Key

<details>
<summary>Click to reveal the answer key</summary>

| Question | Answer | Question | Answer | Question | Answer |
| --- | --- | --- | --- | --- | --- |
| P1 | B | P11 | B | P21 | C |
| P2 | C | P12 | C | P22 | B |
| P3 | B | P13 | B | P23 | D |
| P4 | B | P14 | B | P24 | B |
| P5 | B | P15 | B | P25 | B |
| P6 | B | P16 | B | P26 | B |
| P7 | B | P17 | B | P27 | B |
| P8 | B | P18 | B | P28 | C |
| P9 | B | P19 | C | P29 | B |
| P10 | B | P20 | C | P30 | B |

</details>

---

## Difficulty Breakdown

| Difficulty | Count |
| --- | --- |
| Easy | 9 |
| Medium | 20 |
| Hard | 1 |

---

## Cross-References

- **[Security Fundamentals](https://security.wyattau.com/hub)** — CIA triad, least privilege, and defence in depth
- **[Cryptography](https://security.wyattau.com/hub)** — Symmetric/asymmetric encryption, hashing, and digital signatures
- **[Network Security](https://security.wyattau.com/hub)** — Firewalls, IDS/IPS, and network segmentation
- **[Web Security](https://security.wyattau.com/hub)** — OWASP Top 10, injection, and XSS
- **[Incident Response](https://security.wyattau.com/hub)** — Detection, containment, and recovery
- **[Networking Guide](https://networking.wyattau.com/hub)** — The protocols that security controls protect
- **[Computer Science](https://computer-science.wyattau.com/hub)** — Algorithms and theory that underpin cryptography

---

## Tips for Using This Practice Test

1. **Think like an attacker.** Every security control exists because someone will try to break it. Understanding the attack makes the defence intuitive.
2. **Know the frameworks.** STRIDE, OWASP Top 10, CIA triad, and NIST incident response are fundamental mental models.
3. **Understand the "why".** Security policies exist because of specific threats. Understanding the threat makes the policy logical rather than arbitrary.
4. **Practise scenario analysis.** Real-world security questions require applying concepts to situations, not just memorising definitions.
5. **Retake after one week.** Security concepts are interconnected — spaced repetition builds the mental models needed for analysis.

---

*Last updated: 24 July 2026*

*Written by Wyatt. For questions or feedback, visit [wyattau.com](https://wyattau.com).*
