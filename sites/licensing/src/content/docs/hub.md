---
title: "Software Licensing Guide — GPL, MIT, Apache, BSD"
description: "Comprehensive software licensing guide covering open-source licenses (GPL, MIT, Apache, BSD), proprietary licenses, copyleft vs permissive, license compatibility, and compliance. Practical guidance for developers choosing and using software licenses."
date: 2026-07-24
tags:
  - licensing
  - open-source
  - gpl
  - mit
  - apache
  - software-law
categories:
  - hub
---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"name": "Home", "url": "https://licensing.wyattau.com"},
    {"name": "Hub", "url": "https://licensing.wyattau.com/hub"}
  ]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Software Licensing Guide",
  "description": "Comprehensive software licensing guide covering open-source licenses, copyleft vs permissive, license compatibility, and compliance for developers.",
  "provider": {
    "@type": "Organization",
    "name": "Wyatt's Notes",
    "url": "https://licensing.wyattau.com"
  },
  "url": "https://licensing.wyattau.com/hub",
  "educationalLevel": "Professional",
  "inLanguage": "en",
  "isAccessibleForFree": true
}
</script>

## Why This Guide Exists

Software licensing determines what you can do with code — who can use it, modify it, distribute it, and under what conditions. For developers, understanding licensing is not optional. Choosing the wrong license for your project can inadvertently prevent adoption. Using code under the wrong license can result in legal liability. Ignoring license obligations can lead to lawsuits and damaged reputations.

This hub page maps every resource on this site. The guides cover the major open-source licenses (GPL, MIT, Apache, BSD), the philosophy and legal mechanics of copyleft versus permissive licensing, license compatibility and dual licensing, and practical compliance guidance. Whether you are choosing a license for your own project or ensuring compliance when using open-source dependencies, these resources provide the knowledge you need.

## Table of Contents

- [Why Licensing Matters](#why-licensing-matters)
- [Open-Source Licenses](#open-source-licenses)
- [Copyleft vs. Permissive](#copyleft-vs-permissive)
- [License Compatibility](#license-compatibility)
- [Proprietary and Source-Available Licenses](#proprietary-and-source-available-licenses)
- [Choosing a License](#choosing-a-license)
- [License Compliance](#license-compliance)
- [Common Licensing Scenarios](#common-licensing-scenarios)
- [Cross-Site Resources](#cross-site-resources)
- [FAQ](#faq)

---

## Why Licensing Matters

Every piece of software has a license — even if it is not explicitly stated. When no license is specified, the default under copyright law is "all rights reserved." This means no one can use, copy, modify, or distribute the code without explicit permission.

### The Four Freedoms

The Free Software Definition (Free Software Foundation) identifies four essential freedoms:

- **Freedom 0** — the freedom to run the program for any purpose
- **Freedom 1** — the freedom to study how the program works and modify it
- **Freedom 2** — the freedom to redistribute copies
- **Freedom 3** — the freedom to distribute copies of your modified versions

A license is the legal mechanism that grants these freedoms while protecting the author's rights.

### Why Developers Care

- **Choosing a license** — affects who can use your code and how
- **Using dependencies** — every library has a license that constrains your project
- **Compliance** — failure to comply with license terms can result in legal action
- **Business considerations** — licensing affects monetisation, partnerships, and adoption

---

## Open-Source Licenses

Open-source licenses grant broad permissions to use, modify, and distribute software. The major licenses differ in their requirements and restrictions.

### MIT License

The MIT License is the most permissive major open-source license. It grants nearly unrestricted rights to use, modify, and distribute the software.

**Key terms:**

- Permission is granted free of charge
- Can use, copy, modify, merge, publish, distribute, sublicense, and sell
- Must include the copyright notice and license text in all copies
- No warranty or liability

**When to use MIT:**

- Maximum adoption is the priority
- You do not require derivative works to remain open source
- You want minimal legal complexity

**Example projects:** React, jQuery, Ruby on Rails, .NET Core

### Apache License 2.0

The Apache License is permissive like MIT but includes additional provisions for patent protection and contributor agreements.

**Key terms:**

- Grants patent rights from contributors
- Requires notice of modifications
- Includes a patent grant that protects users from patent claims
- Must include copyright, patent, trademark, and attribution notices

**When to use Apache 2.0:**

- You want patent protection for contributors
- You need attribution requirements
- Enterprise adoption is a priority
- You are contributing to a foundation-managed project

**Example projects:** Android, Kubernetes, TensorFlow, Apache HTTP Server

### BSD Licenses

The BSD licenses are permissive licenses similar to MIT. There are several variants:

**2-Clause BSD (Simplified):**

- Similar to MIT
- Grants permission to use, copy, modify, and distribute
- Requires copyright notice in documentation

**3-Clause BSD:**

- Adds a non-endorsement clause
- Prohibits using the names of contributors to endorse derived products without permission

**4-Clause BSD (Original):**

- Adds an advertising clause
- Largely obsolete; not recommended for new projects

### GNU General Public License (GPL)

The GPL is the most well-known copyleft license. It requires that derivative works also be released under the GPL.

**GPL v2:**

- Grants permission to use, copy, modify, and distribute
- Derivative works must be released under GPL v2
- Source code must be made available when distributing binaries
- Includes a patent grant

**GPL v3:**

- Adds protections against tivoisation (hardware restrictions on modified software)
- Includes patent protection
- Adds anti-DRM provisions
- Compatible with Apache 2.0 (but not vice versa)

**When to use GPL:**

- You want to ensure derivative works remain open source
- You want to prevent proprietary adoption of your code
- You are building a community-driven project

**Example projects:** Linux kernel (GPLv2), WordPress, GCC, Bash

### GNU Lesser General Public License (LGPL)

The LGPL is a weaker form of copyleft that allows proprietary software to link to LGPL-licensed libraries.

**Key terms:**

- Libraries can be linked by proprietary software
- Modifications to the library itself must be released under LGPL
- The library can be dynamically linked (not statically) by proprietary code

**When to use LGPL:**

- You want a library to be usable by proprietary software
- You want modifications to the library to remain open source
- You want wider adoption than GPL allows

### GNU Affero General Public License (AGPL)

The AGPL is the strongest copyleft license. It extends GPL to cover software used over a network.

**Key terms:**

- If the software is used to provide a service over a network (SaaS), the source code must be made available
- Closes the "SaaS loophole" that GPL does not address
- Derivative works must be released under AGPL

**When to use AGPL:**

- You want to ensure SaaS providers release their source code
- You are building infrastructure software
- You want maximum copyleft protection

**Example projects:** MongoDB (switched to AGPL), GNU Health

### Mozilla Public License (MPL)

The MPL is a weak copyleft license that applies at the file level.

**Key terms:**

- Modifications to MPL-licensed files must be released under MPL
- Can be combined with code under other licenses
- Each file has its own license header

**When to use MPL:**

- You want copyleft protection for your own files but allow combination with proprietary code
- You want a middle ground between permissive and copyleft

**Example projects:** Firefox, Rust (dual-licensed with Apache 2.0)

---

## Copyleft vs. Permissive

The fundamental distinction in open-source licensing is between copyleft and permissive licenses.

### Copyleft

Copyleft licenses require that derivative works be released under the same license. The key principle: freedom must be preserved across all versions.

**Advantages:**

- Ensures the code remains free and open
- Prevents proprietary appropriation
- Builds strong community around shared code
- Creates a level playing field

**Disadvantages:**

- Limits adoption by proprietary software
- Can create compliance complexity
- May deter commercial contributions
- License incompatibilities with other copyleft licenses

**Examples:** GPL, LGPL, AGPL, MPL

### Permissive

Permissive licenses grant broad freedoms with minimal restrictions. Users can do almost anything with the code, including incorporating it into proprietary software.

**Advantages:**

- Maximum adoption and reuse
- Simple compliance requirements
- No restrictions on proprietary use
- Compatible with most other licenses

**Disadvantages:**

- Derivative works can be made proprietary
- No guarantee the code remains open
- Contributors' work may benefit proprietary companies without reciprocation
- Less community protection

**Examples:** MIT, Apache 2.0, BSD

### Choosing Between Them

| Priority | Recommended License Type |
|----------|------------------------|
| Maximum adoption | Permissive (MIT, Apache 2.0) |
| Keep derivative works open | Copyleft (GPL, AGPL) |
| Enterprise use | Permissive (Apache 2.0) |
| Community-driven project | Copyleft (GPL) |
| Library for wide use | Weak copyleft (LGPL) or permissive |
| SaaS protection | AGPL |

---

## License Compatibility

License compatibility determines whether code under different licenses can be combined in a single project.

### Compatible Combinations

- MIT + MIT = MIT
- MIT + Apache 2.0 = Apache 2.0
- MIT + BSD = MIT (or BSD)
- MIT + GPL = GPL
- Apache 2.0 + GPL v3 = GPL v3
- BSD + GPL = GPL

### Incompatible Combinations

- GPL v2 + Apache 2.0 — Apache 2.0 includes patent provisions incompatible with GPL v2
- GPL v2 + GPL v3 — the licenses have different requirements
- AGPL + proprietary code — AGPL requires source code disclosure
- Any copyleft + proprietary — copyleft licenses require derivative works to be open

### Dual Licensing

Many projects offer code under two licenses (e.g., "GPL or MIT"). This allows users to choose the license that fits their use case. It is also a business model: commercial users pay for a non-copyleft license while open-source users get the free copyleft version.

---

## Proprietary and Source-Available Licenses

Not all software is open source. Understanding other licensing models is essential for comprehensive knowledge.

### Proprietary Licenses

- **EULA** (End-User License Agreement) — restricts use, modification, and distribution
- **Subscription** — pay periodically for continued use (SaaS model)
- **Perpetual** — one-time purchase with ongoing use rights
- **OEM** — bundled with hardware

### Source-Available Licenses

These licenses provide access to source code but do not meet the Open Source Definition:

- **BSL (Business Source License)** — source available, converts to open source after a period
- **Elastic License 2.0** — source available but restricts SaaS and competitive use
- **Server Side Public License (SSPL)** — MongoDB's license; requires SaaS providers to release their entire stack

---

## Choosing a License

### Decision Framework

1. **Do you want derivative works to remain open?**
   - Yes → Copyleft (GPL, AGPL)
   - No → Permissive (MIT, Apache 2.0)

2. **Do you want patent protection?**
   - Yes → Apache 2.0 or GPL v3
   - No → MIT or BSD

3. **Is your project a library?**
   - Yes, and you want proprietary use → LGPL or MIT
   - Yes, and you want copyleft → GPL
   - No → GPL or Apache 2.0

4. **Do you want to prevent SaaS adoption without source release?**
   - Yes → AGPL
   - No → GPL

### Tools for Choosing

- **choosealicense.com** — interactive license chooser by GitHub
- **tldrlegal.com** — plain-English summaries of licenses
- **opensource.org** — the Open Source Initiative's license list

---

## License Compliance

Compliance means following the terms of every license that applies to your software.

### For Users of Open-Source Software

- **Include copyright notices** — every permissive license requires this
- **Include license text** — distribute the full license text with your software
- **Document modifications** — some licenses require you to note changes
- **Disclose source code** — copyleft licenses require source availability
- **Maintain license compatibility** — ensure all licenses in your project are compatible

### For Distributors

- **SBOM (Software Bill of Materials)** — maintain a list of all components and their licenses
- **License scanning tools** — FOSSology, LicenseFinder, FOSSA, Snyk
- **Automated compliance** — CI/CD pipelines can scan for license issues on every commit

### Common Compliance Mistakes

1. **Ignoring transitive dependencies** — your dependencies have dependencies, each with their own license
2. **Assuming all open-source is MIT** — every license has specific requirements
3. **Not including license text** — most licenses require the full text to be distributed
4. **Mixing incompatible licenses** — GPL and Apache 2.0 are not compatible under GPL v2
5. **Forgetting about documentation** — some licenses apply to documentation as well as code

---

## Common Licensing Scenarios

### Scenario 1: Building a Web Application

If your web application does not distribute software (SaaS), copyleft licenses like GPL do not apply. You can use GPL-licensed libraries without releasing your source code. However, if you distribute binaries (desktop app), GPL applies.

### Scenario 2: Creating a Library

If you want maximum adoption, use MIT or Apache 2.0. If you want to ensure derivatives remain open, use GPL or LGPL. If you want commercial revenue, consider dual licensing.

### Scenario 3: Contributing to an Existing Project

Check the project's LICENSE file. You must contribute under the same license or one compatible with it. Some projects require a CLA (Contributor License Agreement).

### Scenario 4: Using Code from Stack Overflow

Code posted on Stack Overflow is licensed under CC BY-SA 4.0, which requires attribution and share-alike. This is different from most software licenses and can create compatibility issues.

### Scenario 5: Enterprise Software Development

Enterprises typically prefer permissive licenses (MIT, Apache 2.0) to avoid copyleft obligations. Apache 2.0 is the most common choice for enterprise projects because of its patent protection.

---

## Cross-Site Resources

Software licensing connects to many areas of development:

- **[Developer Tools](https://tools.wyattau.com/hub)** — tools for license scanning and compliance
- **[Linux Administration](https://linux.wyattau.com/hub)** — Linux is GPL-licensed; understanding GPL matters
- **[C++ Programming](https://programming.wyattau.com/hub)** — license considerations for C++ projects
- **[Go Programming](https://go.wyattau.com/hub)** — Go standard library licensing
- **[Rust Programming](https://rust.wyattau.com/hub)** — Rust is dual-licensed MIT/Apache 2.0
- **[Python](https://python.wyattau.com/hub)** — Python's PSF license

---

## Frequently Asked Questions

### Can I use GPL code in a proprietary project?

Not directly. If you distribute the GPL code as part of your project, the entire project must be released under GPL v2 or v3 (depending on which version the original code uses). You can dynamically link to GPL libraries if they are under LGPL, but static linking generally triggers copyleft obligations.

### Is MIT more permissive than Apache 2.0?

Both are permissive, but they differ in specific ways. MIT is simpler and shorter. Apache 2.0 includes a patent grant and requires notice of modifications. For maximum simplicity, choose MIT. For patent protection, choose Apache 2.0.

### What happens if I violate a license?

License violation can result in: loss of the license grant (meaning you no longer have permission to use the code), copyright infringement claims, and potential lawsuits. In practice, most authors will first ask you to comply. Legal action is a last resort.

### Can I change from one license to another?

You can change the license of code you authored. You cannot change the license of code you received under an existing license. For example, if you received code under GPL, that code remains under GPL. You can license your own new contributions under a different license.

### Do I need a license for my GitHub repository?

Technically, no — the code is copyrighted by default. But without a license, no one can legally use, modify, or distribute your code. If you want others to use your code, add a license. If you want to keep it private, do not publish it.

### How do I check the licenses of my dependencies?

Use license scanning tools: FOSSology, LicenseFinder, FOSSA, or Snyk. Most package managers have license information built in (`npm licenses`, `pip show`, `cargo metadata`). CI/CD pipelines can automate this checking.

---

*Last updated: 24 July 2026*

*Written by Wyatt. For questions or feedback, visit [wyattau.com](https://wyattau.com).*
