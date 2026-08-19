---
title: "Linux Administration Study Guide"
description: "Comprehensive Linux administration study guide covering CLI fundamentals, file systems, process management, networking, systemd, security, package management, LVM, and disk partitioning. Practical guides for Linux system administrators."
date: 2026-07-24
tags:
  - linux
  - system-administration
  - cli
  - networking
  - systemd
  - security
categories:
  - hub
---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"name": "Home", "url": "https://linux.wyattau.com"},
    {"name": "Hub", "url": "https://linux.wyattau.com/hub"}
  ]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Linux Administration Study Guide",
  "description": "Comprehensive Linux administration study guide covering CLI, file systems, processes, networking, systemd, security, and package management.",
  "provider": {
    "@type": "Organization",
    "name": "Wyatt's Notes",
    "url": "https://linux.wyattau.com"
  },
  "url": "https://linux.wyattau.com/hub",
  "educationalLevel": "Professional",
  "inLanguage": "en",
  "isAccessibleForFree": true
}
</script>

## Why This Guide Exists

Linux powers the majority of the world's servers, cloud infrastructure, embedded systems, and supercomputers. Whether you are managing a home server, deploying applications to the cloud, or administering enterprise infrastructure, Linux administration is an essential skill for any systems professional.

This hub page maps every resource on this site. The guides cover the core competencies of Linux administration: the command line, file systems, process management, networking, systemd, security, and package management. Each section provides both conceptual understanding and practical, hands-on commands that you can apply immediately. The goal is not to memorise every command, but to understand the system deeply enough that you can solve problems you have never encountered before.

## Table of Contents

- [Why Linux](#why-linux)
- [Linux Distributions](#linux-distributions)
- [CLI Fundamentals](#cli-fundamentals)
- [File Systems](#file-systems)
- [Process Management](#process-management)
- [Networking](#networking)
- [systemd](#systemd)
- [Security](#security)
- [Package Management](#package-management)
- [LVM and Disk Partitioning](#lvm-and-disk-partitioning)
- [Cross-Site Resources](#cross-site-resources)
- [FAQ](#faq)

---

## Why Linux

Linux dominates the server market for several reasons:

- **Open source** — free to use, modify, and distribute
- **Stability** — Linux servers routinely run for years without rebooting
- **Security** — strong permissions model, rapid patching, and community vigilance
- **Performance** — efficient resource usage; runs on everything from Raspberry Pi to supercomputers
- **Ecosystem** — vast package repositories, community support, and enterprise distributions
- **Cloud native** — all major cloud providers default to Linux for virtual machines and containers

### Who Should Learn Linux?

- System administrators managing servers
- DevOps engineers building and deploying infrastructure
- Software developers deploying to Linux servers
- Security professionals conducting assessments
- Students pursuing careers in IT or computer science
- Anyone who wants to understand how computers actually work

---

## Linux Distributions

Linux distributions package the Linux kernel with system libraries, package managers, and default configurations. The major distributions fall into several families.

### Debian-Based

- **Debian** — the foundation; known for stability and reliability
- **Ubuntu** — user-friendly; the most popular desktop and cloud distribution
- **Linux Mint** — Ubuntu-based with a focus on desktop usability

### Red Hat-Based

- **Red Hat Enterprise Linux (RHEL)** — enterprise-grade; commercial support
- **CentOS / AlmaLinux / Rocky Linux** — free RHEL-compatible alternatives
- **Fedora** — cutting-edge; upstream for RHEL

### Arch-Based

- **Arch Linux** — rolling release; minimal base; user assembles the system
- **Manjaro** — Arch-based with easier installation and configuration

### Choosing a Distribution

| Use Case | Recommended Distribution |
| ---------- | ------------------------ |
| Enterprise servers | RHEL, AlmaLinux, Rocky Linux |
| Cloud deployments | Ubuntu, Amazon Linux |
| Desktop use | Ubuntu, Fedora, Linux Mint |
| Learning Linux | Arch Linux, Gentoo |
| Home servers | Ubuntu Server, Debian |
| Security testing | Kali Linux, Parrot OS |

---

## CLI Fundamentals

The command line is the primary interface for Linux administration. Mastering the CLI is the single most important skill for a Linux administrator.

### Navigation

```bash
pwd                     # Print working directory
ls                      # List directory contents
ls -la                  # List all files with details
cd /path/to/dir         # Change directory
cd ~                    # Go to home directory
cd -                    # Go to previous directory
tree                    # Display directory tree
```

### File Operations

```bash
cp source dest          # Copy files
cp -r source dest       # Copy directories recursively
mv source dest          # Move or rename files
rm file                 # Delete a file
rm -rf directory        # Delete a directory recursively
mkdir -p path/to/dir    # Create directories recursively
touch file              # Create an empty file or update timestamp
ln -s target link       # Create a symbolic link
```

### Text Processing

```bash
cat file                # Display file contents
less file               # View file with paging
head -n 20 file         # First 20 lines
tail -n 20 file         # Last 20 lines
tail -f file            # Follow file changes in real time
grep "pattern" file     # Search for pattern in file
grep -r "pattern" dir   # Recursive search
sed 's/old/new/g' file  # Stream editor substitution
awk '{print $1}' file   # Process text by columns
wc -l file              # Count lines
sort file               # Sort lines
uniq file               # Remove duplicate lines
cut -d: -f1 /etc/passwd # Extract fields
```

### Permissions

```bash
chmod 755 file          # Set permissions (owner=rwx, group=rx, other=rx)
chmod u+x file          # Add execute permission for owner
chmod -R 644 dir        # Recursive permission change
chown user:group file   # Change file ownership
chown -R user:group dir # Recursive ownership change
```

**Permission meanings:**

| Number | Permission | Symbol |
| -------- | ------------ | -------- |
| 4 | Read | r |
| 2 | Write | w |
| 1 | Execute | x |
| 0 | None | --- |

### Piping and Redirection

```bash
command1 | command2     # Pipe output of command1 to command2
command > file          # Redirect stdout to file (overwrite)
command >> file         # Redirect stdout to file (append)
command 2> file         # Redirect stderr to file
command &> file         # Redirect both stdout and stderr
command < file          # Redirect file to stdin
command1 && command2    # Run command2 only if command1 succeeds
command1 || command2    # Run command2 only if command1 fails
```

---

## File Systems

Understanding Linux file systems is essential for managing storage, permissions, and backups.

### Directory Structure

```
/                    — root directory
├── bin/             — essential user binaries
├── boot/            — boot loader files
├── dev/             — device files
├── etc/             — system configuration
├── home/            — user home directories
├── lib/             — shared libraries
├── mnt/             — temporary mount points
├── opt/             — optional software
├── proc/            — process information (virtual)
├── root/            — root user's home directory
├── sbin/            — system binaries
├── srv/             — service data
├── sys/             — system information (virtual)
├── tmp/             — temporary files
├── usr/             — user programs and data
│   ├── bin/         — user binaries
│   ├── lib/         — libraries
│   └── share/       — architecture-independent data
└── var/             — variable data (logs, mail, spool)
    ├── log/         — system logs
    └── tmp/         — persistent temporary files
```

### File System Types

| Type | Description | Use Case |
| ------ | ------------- | ---------- |
| ext4 | Default Linux file system | General purpose |
| XFS | High-performance; large files | Databases, media |
| Btrfs | Copy-on-write; snapshots | Desktops, backup targets |
| ZFS | Advanced; RAID, compression, snapshots | Storage servers |
| tmpfs | RAM-based file system | /tmp, /run |
| proc | Virtual file system | Process and kernel info |

### Mounting

```bash
mount /dev/sdb1 /mnt/data     # Mount a partition
mount -t ext4 /dev/sdb1 /mnt  # Specify file system type
umount /mnt/data               # Unmount
cat /proc/mounts               # View mounted file systems
blkid                          # View block device UUIDs and types
lsblk                          # List block devices
```

### /etc/fstab

The `/etc/fstab` file defines file systems mounted at boot:

```
UUID=xxx  /mnt/data  ext4  defaults  0  2
```

Fields: device, mount point, type, options, dump, fsck order.

---

## Process Management

Linux is a multitasking operating system. Understanding process management is essential for diagnosing performance issues and maintaining system stability.

### Viewing Processes

```bash
ps aux                  # List all running processes
ps -ef                  # Full-format listing
top                     # Interactive process viewer
htop                    # Improved top (if installed)
pstree                  # Display process tree
pgrep nginx             # Find process by name
pidof nginx             # Get PID by name
```

### Process Control

```bash
kill PID                # Send SIGTERM (graceful stop)
kill -9 PID             # Send SIGKILL (force stop)
killall nginx           # Kill all processes named nginx
pkill -f "pattern"      # Kill processes matching pattern
nice -n 10 command      # Run command with lower priority
renice -n 5 -p PID      # Change priority of running process
nohup command &         # Run command immune to hangups
bg                      # Background a stopped process
fg                      # Foreground a background process
jobs                    # List background jobs
```

### Process States

| State | Description |
| ------- | ------------- |
| R | Running or runnable |
| S | Sleeping (interruptible) |
| D | Uninterruptible sleep (usually I/O) |
| Z | Zombie (terminated but not reaped) |
| T | Stopped (by signal) |

### Resource Monitoring

```bash
free -h                 # Memory usage
vmstat 1 5              # Virtual memory statistics (1-second intervals, 5 reports)
iostat 1 5              # I/O statistics
sar -u 1 5              # CPU usage over time
dstat                   # Versatile resource statistics
nmon                    # Interactive performance monitor
```

---

## Networking

Linux networking is powerful and flexible. Most network configuration and troubleshooting happens at the command line.

### Network Configuration

```bash
ip addr show            # Show IP addresses
ip link show            # Show network interfaces
ip route show           # Show routing table
ip neigh show           # Show ARP table
ifconfig                # Legacy interface configuration (deprecated)
hostname                # Show/set hostname
hostname -I             # Show IP addresses only
```

### Connectivity Testing

```bash
ping google.com         # Test connectivity
traceroute google.com   # Trace route to destination
mtr google.com          # Combined ping and traceroute
nslookup domain.com     # DNS lookup
dig domain.com          # Detailed DNS lookup
host domain.com         # Simple DNS lookup
curl -I https://example.com  # HTTP headers
wget https://example.com/file  # Download a file
```

### Network Utilities

```bash
ss -tlnp                # Show listening TCP ports
ss -ulnp                # Show listening UDP ports
netstat -tlnp           # Legacy version of ss
lsof -i :80             # Show processes using port 80
tcpdump -i eth0         # Capture network traffic
nmap -sT target         # Port scan
scp file user@host:/path  # Secure copy over SSH
rsync -avz source dest    # Synchronise files
```

### SSH

```bash
ssh user@host           # Connect to remote host
ssh -p 2222 user@host   # Connect on non-standard port
ssh-keygen -t ed25519   # Generate SSH key pair
ssh-copy-id user@host   # Copy public key to remote host
ssh -L 8080:localhost:80 user@host  # Local port forwarding
ssh -R 8080:localhost:80 user@host  # Remote port forwarding
```

### Firewall

```bash
# iptables (legacy)
iptables -L -n              # List rules
iptables -A INPUT -p tcp --dport 22 -j ACCEPT  # Allow SSH

# nftables (modern)
nft list ruleset             # List all rules

# ufw (Ubuntu)
ufw status                   # Check firewall status
ufw allow ssh                # Allow SSH
ufw enable                   # Enable firewall

# firewalld (RHEL/Fedora)
firewall-cmd --list-all      # List all rules
firewall-cmd --add-service=ssh --permanent  # Allow SSH
```

---

## systemd

systemd is the init system and service manager for most modern Linux distributions. It manages services, mounts, timers, and system state.

### Service Management

```bash
systemctl status nginx          # Check service status
systemctl start nginx           # Start a service
systemctl stop nginx            # Stop a service
systemctl restart nginx         # Restart a service
systemctl reload nginx          # Reload configuration
systemctl enable nginx          # Start at boot
systemctl disable nginx         # Do not start at boot
systemctl is-active nginx       # Check if running
systemctl is-enabled nginx      # Check if enabled at boot
systemctl list-units --type=service  # List all services
```

### Journal and Logs

```bash
journalctl -u nginx             # Logs for a specific service
journalctl -f                   # Follow all logs
journalctl --since "1 hour ago"  # Logs from the last hour
journalctl -p err               # Error-level messages and above
journalctl --disk-usage         # Check journal size
journalctl --vacuum-size=500M   # Limit journal to 500 MB
```

### Timers (Cron Replacement)

systemd timers replace cron for scheduling tasks:

```ini
# /etc/systemd/system/backup.timer
[Unit]
Description=Daily backup timer

[Timer]
OnCalendar=daily
Persistent=true

[Install]
WantedBy=timers.target
```

```bash
systemctl list-timers           # List all timers
systemctl start backup.timer    # Start a timer
systemctl enable backup.timer   # Enable at boot
```

### System State

```bash
systemctl reboot                # Reboot the system
systemctl poweroff              # Shut down the system
systemctl suspend               # Suspend to RAM
systemctl hibernate             # Hibernate to disk
systemctl isolate multi-user.target  # Switch to multi-user mode
```

---

## Security

Linux security is built on a permissions model, but securing a Linux system requires attention to many areas.

### User Management

```bash
useradd -m -s /bin/bash username  # Create a user
passwd username                    # Set password
usermod -aG sudo username         # Add to sudo group (Ubuntu)
usermod -aG wheel username        # Add to wheel group (RHEL)
userdel -r username               # Delete user and home directory
id username                        # Show user groups
who                                # Show logged-in users
last                               # Show login history
```

### SSH Hardening

- Use key-based authentication; disable password authentication
- Change the default SSH port
- Restrict SSH access to specific users or groups
- Use AllowUsers or AllowGroups in `/etc/ssh/sshd_config`
- Enable fail2ban to block brute-force attempts

### File Permissions and Security

```bash
chmod 600 sensitive-file     # Owner read/write only
chmod 700 ~/.ssh            # Restrict SSH directory
chattr +i immutable-file    # Make file immutable
lsattr file                 # View file attributes
find / -perm -4000          # Find SUID binaries
find / -writable -type f    # Find world-writable files
```

### AppArmor and SELinux

- **AppArmor** — path-based mandatory access control (Ubuntu, SUSE)
- **SELinux** — label-based mandatory access control (RHEL, Fedora)

Both restrict what processes can do, even as root. Learning to work with them (rather than disabling them) is essential for secure Linux administration.

### Auditing and Monitoring

```bash
ausearch -m LOGIN           # Search audit logs
aureport                    # Generate audit reports
logwatch                    # Summarise log files
rkhunter                    # Rootkit detection
clamscan                    # Antivirus scanning
```

---

## Package Management

Package managers handle installing, updating, and removing software. Each distribution family has its own package manager.

### APT (Debian/Ubuntu)

```bash
apt update                      # Update package lists
apt upgrade                     # Upgrade installed packages
apt install package             # Install a package
apt remove package              # Remove a package
apt purge package               # Remove with configuration
apt search keyword              # Search for packages
apt show package                # Show package details
apt autoremove                  # Remove unused dependencies
dpkg -i package.deb             # Install a .deb file
dpkg -l                         # List installed packages
```

### DNF/YUM (RHEL/Fedora)

```bash
dnf update                      # Update packages
dnf install package             # Install a package
dnf remove package              # Remove a package
dnf search keyword              # Search for packages
dnf info package                # Show package details
dnf list installed              # List installed packages
rpm -ivh package.rpm            # Install an .rpm file
```

### Pacman (Arch)

```bash
pacman -Syu                     # Full system upgrade
pacman -S package               # Install a package
pacman -R package               # Remove a package
pacman -Rns package             # Remove with config and dependencies
pacman -Ss keyword              # Search for packages
pacman -Qi package              # Show package details
pacman -Qs                      # List installed packages
```

### Snap and Flatpak

Universal package managers that work across distributions:

```bash
snap install package            # Install a snap
snap list                       # List installed snaps
flatpak install package         # Install a Flatpak
flatpak list                    # List installed Flatpaks
```

---

## LVM and Disk Partitioning

LVM (Logical Volume Manager) provides flexible disk management, allowing you to resize volumes, add disks, and create snapshots.

### LVM Concepts

- **Physical Volume (PV)** — a disk or partition initialised for LVM
- **Volume Group (VG)** — a pool of storage from one or more physical volumes
- **Logical Volume (LV)** — a virtual partition carved from a volume group

### LVM Operations

```bash
pvcreate /dev/sdb              # Initialise a disk for LVM
pvdisplay                      # Show physical volumes
vgcreate myvg /dev/sdb         # Create a volume group
vgdisplay                      # Show volume groups
lvcreate -L 10G -n mylv myvg   # Create a 10 GB logical volume
lvcreate -l 100%FREE -n mylv myvg  # Use all free space
lvdisplay                      # Show logical volumes
mkfs.ext4 /dev/myvg/mylv       # Format the logical volume
mount /dev/myvg/mylv /mnt      # Mount the logical volume
```

### LVM Resizing

```bash
lvextend -L +5G /dev/myvg/mylv    # Add 5 GB to a logical volume
resize2fs /dev/myvg/mylv           # Resize ext4 file system
xfs_growfs /mnt                    # Resize XFS file system
```

### Disk Partitioning

```bash
fdisk /dev/sdb                # Partition with fdisk (MBR)
gdisk /dev/sdb                # Partition with gdisk (GPT)
parted /dev/sdb               # Partition with parted
lsblk                         # View partition layout
partprobe                     # Inform kernel of partition changes
```

### RAID with mdadm

```bash
mdadm --create /dev/md0 --level=1 --raid-devices=2 /dev/sdb1 /dev/sdc1
mdadm --detail /dev/md0       # Check RAID status
cat /proc/mdstat              # View RAID status
```

---

## Cross-Site Resources

Linux administration connects to many other areas:

- **[TrueNAS Administration](https://truenas.wyattau.com/hub)** — TrueNAS SCALE runs on Linux; ZFS and Linux administration overlap
- **[Networking](https://networking.wyattau.com/hub)** — network configuration and troubleshooting
- **[Security](https://security.wyattau.com/hub)** — security hardening and vulnerability assessment
- **[Performance Tuning](https://tuning.wyattau.com/hub)** — system-level optimisation
- **[Docker and Kubernetes](https://tools.wyattau.com/kubernetes-docker)** — containerisation on Linux
- **[Developer Tools](https://tools.wyattau.com/hub)** — development environments on Linux

---

## Frequently Asked Questions

### Which Linux distribution should I learn?

For server administration, learn Ubuntu or RHEL/AlmaLinux. Ubuntu is the most popular cloud distribution and has the largest community. RHEL dominates enterprise environments. For learning Linux deeply, Arch Linux forces you to understand every component. For desktop use, Ubuntu or Fedora are excellent choices.

### How do I become proficient in the command line?

Practice daily. Replace GUI tasks with command-line equivalents. Work through tutorials. Set up a home server and administer it entirely via SSH. The command line becomes intuitive through repetition — there is no shortcut.

### What is the difference between init systems?

SysVinit is the traditional init system. Upstart replaced it in some distributions. systemd is the current standard, used by most major distributions. systemd provides faster boot times, better service management, and integrated logging. Learning systemd is essential for modern Linux administration.

### How do I recover from a broken system?

Boot from a live USB or rescue mode. Mount your root filesystem. Use `chroot` to enter the installed system. Repair configuration files, reinstall bootloaders, or restore from backups. Having a rescue plan and regular backups is essential for any production system.

### Do I need to learn Linux for a development career?

If you deploy to cloud servers (AWS, GCP, Azure), almost certainly yes. Most cloud instances run Linux. Even if you develop on macOS or Windows, your deployment target is likely Linux. Basic Linux skills — SSH, file management, process control — are expected of most backend and DevOps engineers.

### How do I keep a Linux system secure?

Keep it updated. Minimise installed packages. Use firewall rules. Enable SELinux or AppArmor. Use SSH keys. Monitor logs. Run services with least privilege. Regularly audit for vulnerabilities. Security is not a one-time setup — it requires ongoing attention.

---

*Last updated: 24 July 2026*

*Written by Wyatt. For questions or feedback, visit [wyattau.com](https://wyattau.com).*
