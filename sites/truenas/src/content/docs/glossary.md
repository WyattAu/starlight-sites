---
title: "TrueNAS Glossary — Key Terms and Definitions"
description: "Study notes for TrueNAS Glossary — Key Terms and Definitions with worked examples, practice problems, and key concepts for exam preparation."
date: 2026-07-24
tags: [glossary]
---

## TrueNAS Fundamentals

**TrueNAS**: The leading open-source storage operating system, available in CORE (FreeBSD-based) and SCALE (Linux-based) variants.

**TrueNAS CORE**: The FreeBSD-based variant, mature and widely deployed, using jails and plugins for additional services.

**TrueNAS SCALE**: The Linux-based variant, actively developed, using Docker containers and Kubernetes for apps.

**NAS (Network Attached Storage)**: A device providing file-based storage to networked computers.

**Web Interface**: TrueNAS's browser-based management interface for configuration and monitoring.

**Jail**: An isolated FreeBSD environment for running additional services (CORE only).

**Plugin**: A pre-packaged application that can be installed into a jail (CORE only).

**Container**: A Docker-based application running on TrueNAS SCALE.

**Kubernetes (k3s)**: The lightweight Kubernetes distribution used by TrueNAS SCALE for app management.

**App Catalog**: The collection of applications available for installation on TrueNAS SCALE.

## ZFS Fundamentals

**ZFS (Zettabyte File System)**: The most advanced filesystem, combining volume management, RAID, and data integrity features.

**Pool (zpool)**: The top-level storage container, made up of one or more virtual devices (vdevs).

**Dataset**: A logical division within a pool, similar to a partition but more flexible.

**Zvol**: A block device exported from a pool, used for iSCSI and VM storage.

**Snapshot**: A point-in-time, read-only copy of a dataset, nearly instant to create.

**Scrub**: A data integrity check that reads all blocks and verifies checksums.

**Resilver**: The process of rebuilding a degraded vdev after replacing a failed disk.

**Copy-on-Write (CoW)**: ZFS writes new data to free blocks rather than overwriting existing data.

**Checksum**: A mathematical value verifying data integrity. ZFS checksums every block.

**ARC (Adaptive Replacement Cache)**: ZFS's in-memory read cache, using RAM for caching.

**L2ARC**: A second-level cache using SSDs to extend the ARC.

**ZIL (ZFS Intent Log)**: A write cache for synchronous operations, optionally on a separate device (SLOG).

## Pool Layouts

**Single Disk**: No redundancy, maximum capacity. Use only for non-critical data.

**Mirror (RAID 1)**: Two or more identical disks, all storing the same data. Best performance, 50% capacity.

**RAIDZ1**: Single parity, tolerates 1 disk failure. Good balance of capacity and redundancy.

**RAIDZ2**: Double parity, tolerates 2 disk failures. Recommended default for most use cases.

**RAIDZ3**: Triple parity, tolerates 3 disk failures. Maximum redundancy for irreplaceable data.

**Stripe of Mirrors**: Mirrors striped together, excellent performance and redundancy.

**Vdev (Virtual Device)**: A group of disks in a pool. The basic building block of ZFS pools.

**Metadata**: Data describing data — file names, permissions, timestamps, directory structure.

**Record Size**: The maximum size of a single block written to disk. Default 128 KB; tune for workload.

**Ashift**: The physical sector size of disks, set when creating a vdev.

## Dataset Properties

**Quota**: Limits disk usage per dataset. Prevents any single dataset from consuming all pool space.

**Reservation**: Guarantees minimum disk space for a dataset, even if other datasets need space.

**Compression**: Algorithm applied to data before writing (lz4, zstd, gzip). Reduces storage usage.

**lz4**: Fast compression with minimal CPU overhead. Default and recommended for most workloads.

**zstd**: Better compression ratios than lz4 with moderate CPU cost.

**gzip**: High compression ratios but significant CPU cost. Use for cold archive data.

**Deduplication**: Remove duplicate blocks across datasets. Memory-intensive; generally not recommended.

**Snapshot Policy**: Automatic snapshots at defined intervals with retention rules.

**Replication Target**: Where snapshots are sent for backup.

**Access Time (atime)**: Records when files are last read. Disable to improve performance.

**Recordsize**: Per-dataset record size override.

## Sharing Protocols

**SMB (Server Message Block)**: The standard protocol for Windows file sharing. Also works with macOS and Linux.

**NFS (Network File System)**: The standard protocol for Linux/Unix file sharing.

**WebDAV**: File access over HTTP/HTTPS, useful for remote access without VPN.

**AFP (Apple Filing Protocol)**: Legacy Apple file sharing. SMB is now preferred for macOS.

**iSCSI (Internet Small Computer System Interface)**: Block-level storage over IP networks, used for VM storage.

**SMB Share**: A directory exposed to the network via the SMB protocol.

**NFS Export**: A directory shared to Linux/Unix clients via NFS.

**ACL (Access Control List)**: Fine-grained permissions for specific users and groups.

**POSIX Permissions**: Standard Unix permission model (owner, group, others).

**Guest Access**: Allowing unauthenticated access to a share (not recommended).

## Backup and Replication

**3-2-1 Rule**: 3 copies of data, on 2 different media, with 1 offsite copy.

**Replication**: Sending snapshots to another TrueNAS system or remote location.

**Local Replication**: Copying snapshots to another pool on the same system.

**Remote Replication**: Sending snapshots to a TrueNAS system at a different location.

**Cloud Backup**: Backing up data to cloud storage services (S3, Backblaze B2, Azure).

**Cloud Sync**: Synchronizing data with cloud storage on a schedule.

**Snapshot Retention Policy**: Rules defining how many snapshots to keep and for how long.

**Hourly Snapshots**: Snapshots taken every hour, typically kept for 24 hours.

**Daily Snapshots**: Snapshots taken once daily, typically kept for 7 days.

**Weekly Snapshots**: Snapshots taken once weekly, typically kept for 4 weeks.

**zfs send/receive**: ZFS commands for replicating snapshots between pools or systems.

**Backup Verification**: Periodically testing that backups can actually be restored.

## Monitoring and Alerting

**SMART (Self-Monitoring, Analysis and Reporting Technology)**: Disk health monitoring providing early warning of failures.

**Short Self-Test**: A quick SMART test checking basic disk health.

**Long Self-Test**: A thorough SMART test reading all disk surfaces.

**Email Alerts**: Notifications sent via email for system events and failures.

**Webhook**: Custom HTTP callbacks for integration with external services (Slack, Discord, PagerDuty).

**Grafana + Prometheus**: Open-source monitoring stack for visual dashboards and metrics.

**Netdata**: Real-time performance monitoring for system metrics.

**S.M.A.R.T. Errors**: Indicators of potential disk failure requiring attention.

**Pool Status**: The health state of a ZFS pool (ONLINE, DEGRADED, FAULTED).

**Resilver Status**: Progress of rebuilding a degraded vdev after disk replacement.

## Performance Tuning

**ARC Size**: The amount of RAM used by ZFS for caching. More RAM = better read performance.

**Record Size**: Tune per-dataset for workload: 4 KB for databases, 1 MB for large files.

**Compression**: lz4 is fast with minimal CPU overhead; zstd offers better ratios.

**Sync Writes**: Synchronous writes ensure data is on disk before acknowledging. Use `sync=standard` or `sync=always`.

**Jumbo Frames**: Ethernet frames larger than 1500 bytes (typically 9000 MTU), improving throughput.

**Link Aggregation (LACP)**: Combining multiple network interfaces for increased bandwidth.

**SMB Multichannel**: Parallel SMB transfers across multiple network connections.

**Disk Temperature**: Monitor to prevent overheating and premature failure.

**IOPS (Input/Output Operations Per Second)**: Measure of disk performance.

**Throughput**: The rate of data transfer, measured in MB/s or GB/s.

## Security

**SSH (Secure Shell)**: Encrypted remote access protocol. Use key authentication, disable password-based SSH.

**HTTPS**: Encrypted web interface access using SSL/TLS certificates.

**SSL/TLS Certificate**: Encrypts web traffic between your browser and the TrueNAS interface.

**Two-Factor Authentication (2FA)**: Additional security layer requiring a code beyond password.

**Firewall**: Network rules restricting which ports and addresses can access the system.

**Encryption**: Encoding data so only authorized parties can read it.

**GELI**: FreeBSD disk encryption (TrueNAS CORE).

**ZFS Native Encryption**: Built-in ZFS encryption (TrueNAS SCALE).

**Encryption Key**: The secret used to encrypt/decrypt data. Store securely, not on the NAS.

**User Accounts**: Individual accounts for accessing the NAS, avoiding shared accounts.

**Root Account**: The administrative account. Change the default password immediately.

## Storage Concepts

**Block Storage**: Data stored in fixed-size blocks. Used by ZFS and iSCSI.

**File Storage**: Data stored as files in a directory hierarchy. Used by SMB and NFS.

**Object Storage**: Data stored as objects with metadata. Used by S3 and similar services.

**RAID (Redundant Array of Independent Disks)**: Combining multiple disks for performance, redundancy, or both.

**Hot Spare**: A standby disk that automatically replaces a failed disk.

**Hot Swap**: Replacing a disk while the system is running.

**Un SHRINK**: A feature allowing you to reduce pool size by removing vdevs.

**Free Space**: Unused capacity in a pool, available for new data.

**Fragmentation**: The scattering of data blocks across the disk, reducing sequential performance.

**TRIM**: A command informing SSDs which blocks are no longer in use.

## Related Terms

- See [Linux Glossary](glossary) for Linux fundamentals
- See [Networking Glossary](glossary) for network configuration
- See [Security Glossary](glossary) for security hardening
- See [Databases Glossary](glossary) for database storage
- See [Tools Glossary](glossary) for Docker and Kubernetes
