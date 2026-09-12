---
title: "Software Licensing Glossary — Key Terms"
description: "Essential software licensing terminology: copyleft, permissive licenses, dual licensing, GPL, MIT, Apache, BSD, and commercial licensing models."
date: 2026-07-24
tags: [glossary]
---

## License Categories

**Copyleft**: A licensing approach requiring derivative works to be distributed under the same license terms. The GPL family uses copyleft to ensure code stays open.

**Permissive License**: A license allowing use, modification, and distribution with minimal restrictions, including in proprietary software. MIT and BSD are canonical examples.

**Proprietary License**: A license restricting use, modification, or distribution. Source code is typically not made available.

**Dual Licensing**: Offering the same software under two different licenses, typically one open-source and one commercial.

## Common Licenses

**GPL (GNU General Public License)**: A strong copyleft license. Any distributed work incorporating GPL code must itself be GPL-licensed. Version 3 addresses patents and tivoization.

**LGPL (Lesser GPL)**: A weaker copyleft license allowing linking from proprietary software while requiring modifications to the library itself to stay open.

**MIT License**: A minimal permissive license requiring only that the copyright notice and license text be preserved.

**Apache License 2.0**: A permissive license with an explicit patent grant and trademark restrictions.

**BSD Licenses**: A family of permissive licenses (2-clause and 3-clause variants) similar in spirit to MIT, originating from Berkeley Unix.

**MPL (Mozilla Public License)**: A file-level copyleft license — modifications to licensed files stay open, but new files can be proprietary.

## Concepts

**Tivoization**: Distributing GPL software on hardware that refuses to run modified versions, addressed by GPLv3's anti-tivoization clause.

**License Compatibility**: Whether code under two different licenses can legally be combined. Permissive licenses are generally compatible with copyleft ones, not vice versa.

**Contributor License Agreement (CLA)**: A legal agreement contributors sign granting the project maintainer rights to relicense their contributions.

**SPDX Identifier**: A standardised short string identifying a license (e.g., `MIT`, `Apache-2.0`, `GPL-3.0-only`), used in package metadata.

## Further Resources

Return to the [Licensing Hub](/hub/) for license comparisons, or explore [Tools](/tools/) for license-scanning utilities.

## Copyleft Spectrum

**Strong Copyleft**: Derivatives of the whole work must adopt the same license. GPL-2.0-only and GPL-3.0-only are the canonical examples.

**Weak Copyleft**: Copyleft applies only to the licensed component itself, not to works that link against it. LGPL and MPL are weak/medium copyleft.

**Network Copyleft**: Triggers copyleft obligations when the software is offered over a network, not just distributed. AGPL-3.0 closes the "hosting loophole" that allowed SaaS providers to modify GPL software without sharing changes.

**Share-Alike**: The Creative Commons term (SA) for the copyleft principle: adaptations must be licensed under the same terms.

## License Mechanics

**Patent Grant**: An explicit licence to use patents held by contributors that read on the software. Apache-2.0 grants it expressly; GPLv3 includes it indirectly; MIT/BSD rely on implied licence only.

**Attribution Clause**: The requirement to preserve copyright notices and license text in copies. Present in every OSI-approved permissive license.

**Notices File**: A compiled listing of all dependencies and their licenses, required for compliance when shipping permissively-licensed code in proprietary products.

**License Proliferation**: The historical over-creation of slightly-different open-source licenses, raising compatibility analysis costs. The SPDX list now tracks 600+ identifiers.

**Public Domain Equivalent**: Licenses/declarations that surrender copyright entirely: CC0 and the Unlicense. Not recognised in all jurisdictions (notably Germany), which is why most projects still prefer a formal license.

**Non-Commercial Clauses**: Restrictions on commercial use that fail the Open Source Definition (freedom to use for any purpose). CC BY-NC is common but not open source.

## Compliance Practice

**Copyleft Compliance Checklist**: Distributing GPL code requires: preserving notices, providing the corresponding source (or written offer), stating changes, and passing the license terms downstream.

**Vulnerability vs License Scanning**: SCA (Software Composition Analysis) tools audit both security advisories and license obligations across dependency trees.

**License Header**: A short declaration at the top of each source file; SPDX recommends a single-line `// SPDX-License-Identifier: <id>` rather than full license text.

## Further Resources

See the Licensing Hub for per-license comparison tables and the Tools section for scanners that automate compliance checks.


## Additional Licenses and Models

**BSL (Boost Software License)**: A permissive license similar to MIT with an explicit patent grant and no attribution requirement in binaries.

**Zlib License**: A short permissive license requiring altered source versions to be plainly marked.

**Artistic License 2.0**: A Perl's-license allowing redistribution with modified source under conditions; OSI-approved but rarely chosen today.

**EPL (Eclipse Public License)**: A weak-copyleft license (EPL-2.0 current) used by Eclipse, Jetty, and enterprise Java tooling; module-level copyleft.

**CDDL (Common Development and Distribution License)**: File-level copyleft license originated by Sun for OpenSolaris; compatible with GPL under certain interpretations.

**SSPL (Server Side Public License)**: MongoDB's license requiring source disclosure for offering the software as a service; rejected by OSI as not open source.

**BSL (Business Source License)**: Time-delayed open source — code converts to an open license after a change date (MariaDB, HashiCorp post-2023).

**AGPL (Affero GPL)**: GPLv3 plus network-use clause; the standard choice for server software that wants to force SaaS disclosure.

**CC BY**: Creative Commons attribution license for creative works; permissive but not recommended for software (no patent or source provisions).

**MIT-0**: MIT variant with the attribution condition removed — effectively a public-domain dedication with warranty language.

## Legal Concepts

**Derivative Work**: Copyright law's term for adaptations; the trigger point for copyleft obligations and the reason linking analysis matters.

**Mere Aggregation**: Distributing independent programs side-by-side (e.g., on one disk image) without combining them into a single work; GPL obligations do not cross this boundary.

**Static vs Dynamic Linking**: The legal debate over whether linking produces a derivative work; the FSF says yes for both, most practitioners treat dynamic linking as a weaker claim.

**Operating System Modification Exception**: GPLv3 language covering system libraries and kernel modules whose linking the OS itself permits.

**Conveying vs Mere Distribution**: GPLv3's broader term covering both physical transfer and network distribution of object code.

**Installation Information**: GPLv3's requirement to provide build/install instructions when conveying object code for consumer devices.

**Termination and Cure**: GPLv3's provision allowing licensees who violate terms to regain the license automatically if they cure within 30 days — a first-offence forgiveness clause.


## Quick Reference Table

| Term | Meaning |
|------|---------|
| SPDX | Standardised license identifier system (SPDX-License-Identifier: MIT) |
| SBOM | Software Bill of Materials — machine-readable dependency inventory |
| SCA | Software Composition Analysis — automated license/security auditing |
| AGPL | GPL plus network-use clause closing the SaaS loophole |
| EPL | Eclipse Public License, weak module-level copyleft |
| CDDL | Sun's file-level copyleft license (OpenSolaris, ZFS) |
| BSL | Business Source License — converts to open source after change date |
| SSPL | MongoDB's service-restriction license, rejected by OSI |
| CC0 | Public-domain dedication, unrecognised in some jurisdictions |
| Unlicense | Alternative public-domain dedication with explicit waiver text |
| CLA | Contributor License Agreement granting relicensing rights to maintainer |
| DCO | Developer Certificate of Origin — lighter-weight CLA alternative |
| ORM | Open Source Rewards/OSI-approved mark — compliance certification schemes |
| Compatibility | Whether two licenses' code may be legally combined |
| One-way compatibility | A-permissive-in-B-copyleft is fine; the reverse is not |
| License stack | Combined obligations of a dependency tree's many licenses |
| Copyleft clause | Requirement that derivatives carry the same license |
| Patent grant | Express permission to use contributor patents covering the code |
| Tivoization | Hardware refusing modified GPL software; restricted by GPLv3 |
| for prod | Non- OSI-approved licenses fail the open-source definition |

## Decision Guide

| If you want | Use | Avoid |
|-------------|-----|-------|
| Maximum reuse, no conditions | MIT-0, CC0, Unlicense | GPL family |
| Permissive with patent safety | Apache-2.0, BSD-3 | Bare MIT (implied patents only) |
| Copyleft on your library | LGPL, MPL-2.0 | AGPL (network triggers) |
| Force SaaS sources open | AGPL-3.0 | Permissive licenses |
| Delay-then-open commercial | BSL 1.1 | SSPL (never converts) |
| Creative works | CC BY / CC BY-SA | Software-specific licenses |
