---
title: "Linux Glossary — Key Terms and Definitions"
description: "Study notes for Linux Glossary — Key Terms and Definitions with worked examples, practice problems, and key concepts for exam preparation."
date: 2026-07-24
tags: [glossary]
---

## Linux Fundamentals

**Kernel**: The core component of the Linux operating system that manages hardware resources, process scheduling, and memory management.

**Distribution (Distro)**: A complete operating system built around the Linux kernel, including system libraries, package manager, and desktop environment (e.g., Ubuntu, Fedora, Arch).

**Shell**: A command-line interpreter that provides a user interface for accessing the operating system's services (e.g., Bash, Zsh, Fish).

**Bash (Bourne Again Shell)**: The default shell on most Linux distributions, providing scripting capabilities and command-line interaction.

```bash
#!/bin/bash
echo "Hello, World!"
```

**Terminal**: A text-based interface for interacting with the shell and executing commands.

**Root User**: The superuser account with unrestricted access to the system, identified by UID 0.

**Superuser (sudo)**: A command that allows permitted users to run commands as root or another user.

```bash
sudo apt update
sudo -u www-data whoami
```

**Daemon**: A background process that runs without user interaction, providing system services (e.g., `sshd`, `nginx`, `systemd`).

**Service**: A daemon managed by the init system (systemd), which can be started, stopped, and enabled at boot.

```bash
sudo systemctl start nginx
sudo systemctl enable nginx
sudo systemctl status nginx
```

**Systemd**: The modern init system and service manager for Linux, replacing SysVinit.

## File System

**File System**: The method an operating system uses to organize and store files on storage devices (e.g., ext4, btrfs, xfs).

**Directory (Folder)**: A container for files and other directories in a hierarchical file system.

**Root Directory (/)**: The top-level directory in the Linux file system hierarchy.

**Home Directory (~)**: The user's personal directory, typically `/home/username`.

**Path**: The location of a file or directory in the file system hierarchy.

**Absolute Path**: A path starting from the root directory (e.g., `/home/user/file.txt`).

**Relative Path**: A path relative to the current directory (e.g., `../file.txt`).

**File Permissions**: Access control mechanisms determining who can read, write, or execute files.

```bash
-rwxr-xr-- 1 user group 4096 Jan 1 10:00 file.txt
# Type: - (file), d (directory)
# User: rwx (read, write, execute)
# Group: r-x (read, execute)
# Other: r-- (read only)
```

**chmod**: Command to change file permissions using symbolic or octal notation.

```bash
chmod 755 file.txt    # rwxr-xr-x
chmod u+x script.sh   # Add execute for user
chmod go-w file.txt   # Remove write for group and others
```

**chown**: Command to change file ownership.

```bash
chown user:group file.txt
chown -R www-data:www-data /var/www
```

**Filesystem Hierarchy Standard (FHS)**: Defines the directory structure and directory contents in Linux distributions.

**/etc**: Configuration files directory.

**/var**: Variable data files (logs, spool files, temporary files).

**/tmp**: Temporary files, cleared on reboot.

**/proc**: Virtual filesystem providing process and kernel information.

**/dev**: Device files representing hardware devices.

**/usr**: User programs and data (secondary hierarchy).

**Inode**: A data structure storing metadata about a file (permissions, ownership, size, timestamps) without the file name.

**Hard Link**: A directory entry pointing to an inode; multiple hard links can point to the same inode.

**Symbolic Link (Soft Link)**: A file that points to another file or directory by path, independent of inodes.

```bash
ln -s /path/to/original /path/to/link
```

**Mount**: Attaching a file system to the directory tree, making its contents accessible.

```bash
mount /dev/sda1 /mnt/data
umount /mnt/data
```

## Commands and Utilities

**ls**: Lists files and directories in the current or specified directory.

```bash
ls -la  # Long format, include hidden files
ls -lh  # Human-readable file sizes
```

**cd**: Changes the current working directory.

```bash
cd /home/user
cd ~
cd ..
cd -  # Return to previous directory
```

**pwd**: Prints the current working directory.

**cp**: Copies files and directories.

```bash
cp file.txt /backup/
cp -r directory/ /backup/  # Recursive copy
cp -p file.txt /backup/   # Preserve permissions
```

**mv**: Moves or renames files and directories.

```bash
mv file.txt /new/location/
mv oldname.txt newname.txt
```

**rm**: Removes files and directories.

```bash
rm file.txt
rm -rf directory/  # Recursive force removal (dangerous!)
```

**find**: Searches for files based on various criteria.

```bash
find /var/log -name "*.log" -mtime -7
find . -type f -size +100M
find . -empty -delete
```

**grep**: Searches for patterns in files or input streams.

```bash
grep -r "error" /var/log/
grep -i "warning" logfile.txt
grep -c "pattern" file.txt  # Count matches
```

**awk**: A powerful text processing language for pattern scanning and processing.

```bash
awk '{print $1, $3}' file.txt
awk -F: '{print $1}' /etc/passwd
```

**sed**: A stream editor for filtering and transforming text.

```bash
sed 's/old/new/g' file.txt
sed -i 's/old/new/g' file.txt  # In-place edit
sed -n '10,20p' file.txt        # Print lines 10-20
```

**pipe (|)**: Connects the output of one command to the input of another command.

```bash
cat file.txt | grep "error" | wc -l
```

**Redirection (>, >>, <)**: Redirects standard input, output, or error to/from files.

```bash
command > output.txt    # Redirect stdout to file (overwrite)
command >> output.txt   # Redirect stdout to file (append)
command < input.txt     # Redirect file to stdin
command 2> error.log    # Redirect stderr to file
```

**xargs**: Builds and executes command lines from standard input.

```bash
find . -name "*.tmp" | xargs rm
echo "file1 file2 file3" | xargs touch
```

**tar**: Archiving utility for creating and extracting tarballs.

```bash
tar -czf archive.tar.gz directory/  # Create compressed archive
tar -xzf archive.tar.gz             # Extract compressed archive
tar -tf archive.tar.gz              # List archive contents
```

**curl**: A tool for transferring data with URLs, supporting many protocols.

```bash
curl https://api.example.com/data
curl -o file.zip https://example.com/download.zip
curl -X POST -d '{"key":"value"}' https://api.example.com
```

**wget**: A utility for downloading files from the web.

```bash
wget https://example.com/file.zip
wget -c https://example.com/large-file.iso  # Resume interrupted download
```

## Process Management

**Process**: An instance of a running program, with its own memory space and resources.

**PID (Process ID)**: A unique number assigned to each running process.

**Parent Process**: A process that created another process; processes form a tree structure.

**Child Process**: A process created by another process (parent).

**Foreground Process**: A process that runs in the terminal and receives input from the keyboard.

**Background Process**: A process that runs independently of the terminal, using `&` or `nohup`.

```bash
long_running_task &
nohup long_running_task &
```

**ps**: Displays information about running processes.

```bash
ps aux                    # All processes for all users
ps -ef | grep nginx       # Filter for nginx processes
ps -eo pid,ppid,cmd      # Custom output format
```

**top / htop**: Interactive process viewers showing real-time system information.

**kill**: Sends signals to processes to terminate or control them.

```bash
kill PID          # Send SIGTERM (graceful termination)
kill -9 PID       # Send SIGKILL (force termination)
kill -HUP PID     # Send SIGHUP (reload configuration)
```

**nice**: Runs a command with modified scheduling priority.

```bash
nice -n 10 ./heavy_task.sh    # Lower priority
nice -n -5 ./important_task.sh  # Higher priority
```

**renice**: Changes the priority of an existing process.

```bash
renice -n 5 -p PID
```

**nohup**: Runs a command immune to hangups, continuing after terminal closure.

```bash
nohup ./script.sh &
```

**Signals**: Software notifications sent to processes (SIGHUP, SIGINT, SIGTERM, SIGKILL, SIGUSR1).

**zombie process**: A process that has completed execution but still has an entry in the process table.

**orphan process**: A process whose parent has terminated but continues running.

## User and Group Management

**User Account**: An identity for interacting with the system, with associated permissions and home directory.

**Group**: A collection of users sharing common permissions and access rights.

**Useradd**: Command to create a new user account.

```bash
useradd -m -s /bin/bash -G sudo newuser
passwd newuser
```

**Usermod**: Command to modify a user account.

```bash
usermod -aG docker username  # Add user to docker group
usermod -s /bin/zsh username  # Change default shell
```

**Userdel**: Command to delete a user account.

**Groupadd**: Command to create a new group.

**Groupmod**: Command to modify a group.

**/etc/passwd**: File containing user account information (username, UID, GID, home directory, shell).

**/etc/shadow**: File containing encrypted user passwords (readable only by root).

**/etc/group**: File containing group information.

**Sudoers File**: Configuration file (`/etc/sudoers`) defining which users can run commands as root.

**Login Shell**: A shell started when a user logs in, reading profile files like `.bashrc` and `.profile`.

**Non-Login Shell**: A shell started for a running session (e.g., terminal emulator), reading `.bashrc`.

## Networking

**IP Address (Internet Protocol)**: A unique numerical address assigned to each device on a network.

**IPv4**: 32-bit address format (e.g., 192.168.1.1), providing ~4.3 billion addresses.

**IPv6**: 128-bit address format (e.g., 2001:0db8:85a3::8a2e:0370:7334), providing vastly more addresses.

**Subnet Mask**: A number that divides an IP address into network and host portions.

**Default Gateway**: The router that forwards traffic from a local network to other networks.

**DNS (Domain Name System)**: Translates domain names to IP addresses.

**/etc/resolv.conf**: Configuration file specifying DNS servers.

**DHCP (Dynamic Host Configuration Protocol)**: Automatically assigns IP addresses and network configuration to devices.

**Hostname**: A human-readable name identifying a device on a network.

```bash
hostnamectl set-hostname myserver
```

**Interface**: A network connection point (e.g., eth0, enp0s3, wlan0).

**ifconfig / ip**: Commands for viewing and configuring network interfaces.

```bash
ip addr show
ip link set eth0 up
ip addr add 192.168.1.100/24 dev eth0
```

**ping**: Tests connectivity between the local host and a remote host.

```bash
ping google.com
ping -c 4 192.168.1.1
```

**traceroute / tracepath**: Traces the route packets take to a destination.

```bash
traceroute google.com
```

**netstat / ss**: Displays network connections, routing tables, and interface statistics.

```bash
ss -tuln            # Show listening TCP/UDP ports
ss -tp              # Show TCP connections with process info
netstat -tuln       # Traditional netstat command
```

**iptables / nftables**: Linux firewall tools for packet filtering and network address translation.

**SSH (Secure Shell)**: Encrypted protocol for secure remote access and command execution.

```bash
ssh user@hostname
ssh -p 2222 user@hostname  # Non-standard port
ssh-keygen -t ed25519       # Generate SSH key pair
ssh-copy-id user@hostname   # Copy public key to server
```

**SCP / rsync**: Tools for securely copying files between systems.

```bash
scp file.txt user@remote:/path/
rsync -avz /local/dir/ user@remote:/remote/dir/
```

**Firewall**: A network security system that monitors and controls incoming/outgoing traffic.

**NAT (Network Address Translation)**: Translates private IP addresses to public IP addresses for internet access.

## Security

**SELinux (Security-Enhanced Linux)**: A kernel security module providing mandatory access control.

**AppArmor**: A Linux security module for application confinement using per-program profiles.

**PAM (Pluggable Authentication Modules)**: A framework for authentication, allowing different methods (password, LDAP, etc.).

**Firewall**: A system that controls network traffic based on security rules.

**Fail2ban**: A tool that bans IP addresses showing malicious behavior (e.g., repeated failed login attempts).

**Cryptography**: The practice of secure communication techniques (encryption, hashing, digital signatures).

**Encryption**: Converting data into a coded format readable only with the correct decryption key.

**Hashing**: Converting data into a fixed-size string, used for password storage and data integrity verification.

**SSH Key Authentication**: Using public-private key pairs for SSH authentication instead of passwords.

**Principle of Least Privilege**: Granting users only the minimum permissions needed to perform their tasks.

**Security Updates**: Patches released to fix vulnerabilities in software packages.

```bash
sudo apt update && sudo apt upgrade
```

**Audit Logs**: Records of security-relevant events, stored in `/var/log/auth.log` or `/var/log/secure`.

**Chroot**: Changing the apparent root directory for a process, isolating it from the rest of the system.

**Namespaces**: Kernel features that partition system resources, providing isolation for containers and processes.

**cgroups (Control Groups)**: Kernel features that limit and account for resource usage of process groups.

## Package Management

**Package Manager**: Software that automates installing, updating, configuring, and removing software packages.

**APT (Advanced Package Tool)**: Debian/Ubuntu package manager for installing, updating, and removing packages.

```bash
sudo apt update
sudo apt install nginx
sudo apt remove nginx
sudo apt autoremove
```

**YUM / DNF**: Red Hat/CentOS/Fedora package managers.

```bash
sudo dnf install nginx
sudo dnf update
```

**Pacman**: Arch Linux package manager.

```bash
sudo pacman -S nginx
sudo pacman -Syu  # Full system upgrade
```

**Flatpak / Snap**: Universal package formats that work across multiple distributions.

**Repository**: A server hosting a collection of software packages for distribution.

**Dependency**: A package required by another package to function properly.

**Dependency Resolution**: The process of determining and installing all required dependencies.

**Version Pinning**: Restricting a package to a specific version to avoid compatibility issues.

**Package Cache**: Local storage of downloaded packages, allowing offline installation.

## Storage and Filesystems

**Block Device**: A device that transfers data in blocks (e.g., hard drives, SSDs).

**Partition**: A logical division of a physical disk, treated as separate storage units.

**Filesystem**: A method of organizing data on a partition (ext4, btrfs, xfs, ntfs).

**Mount Point**: A directory where a filesystem is attached to the directory tree.

**RAID (Redundant Array of Independent Disks)**: Combining multiple disks for performance, redundancy, or both.

**LVM (Logical Volume Manager)**: A system for managing disk space using logical volumes instead of physical partitions.

```bash
pvcreate /dev/sdb1
vgcreate myvg /dev/sdb1
lvcreate -L 10G -n mylv myvg
mkfs.ext4 /dev/myvg/mylv
mount /dev/myvg/mylv /mnt/data
```

**Swap**: Disk space used as virtual memory when physical RAM is exhausted.

**Disk Usage (du)**: Displays disk space usage for files and directories.

```bash
du -sh /var/log
du -h --max-depth=1 /
```

**Disk Free (df)**: Displays disk space usage for mounted filesystems.

```bash
df -h
```

**Inode Usage**: Monitoring inode consumption, which can be exhausted even with free disk space.

## Automation and Scheduling

**Cron**: A time-based job scheduler for running scripts or commands at specified intervals.

```bash
# Edit crontab
crontab -e

# Format: minute hour day month day-of-week command
0 2 * * * /usr/local/bin/backup.sh    # Daily at 2 AM
*/5 * * * * /usr/local/bin/check.sh   # Every 5 minutes
```

**Systemd Timers**: Modern alternative to cron, integrated with systemd.

**At**: A command for scheduling one-time tasks at a specific time.

```bash
echo "/usr/local/bin/script.sh" | at 3:00 PM tomorrow
```

**Automation Script**: A shell script that automates repetitive tasks.

```bash
#!/bin/bash
LOG="/var/log/backup.log"
echo "$(date): Starting backup" >> $LOG
tar -czf /backup/etc-$(date +%Y%m%d).tar.gz /etc
echo "$(date): Backup complete" >> $LOG
```

**Ansible / Puppet / Chef**: Configuration management tools for automating infrastructure setup and maintenance.

**CI/CD**: Continuous Integration/Continuous Deployment pipelines for automating software delivery.

## Virtualization and Containers

**Virtual Machine (VM)**: A software emulation of a physical computer, running an operating system within another OS.

**Hypervisor**: Software that creates and manages virtual machines (e.g., KVM, Xen, VMware).

**KVM (Kernel-based Virtual Machine)**: A Linux kernel module for hardware virtualization.

**Container**: An isolated user space running a process, sharing the host kernel but with its own filesystem and network.

**Docker**: A platform for building, distributing, and running containers.

```bash
docker run -d -p 80:80 nginx
docker build -t myapp .
docker compose up -d
```

**Docker Compose**: A tool for defining and running multi-container Docker applications.

```yaml
version: '3'
services:
  web:
    image: nginx
    ports:
      - "80:80"
  db:
    image: postgres
    environment:
      POSTGRES_PASSWORD: secret
```

**Kubernetes (K8s)**: An open-source system for automating deployment, scaling, and management of containerized applications.

**Namespace (Container)**: Isolation of system resources for containers, including network, PID, and mount namespaces.

**cgroups (Control Groups)**: Kernel feature limiting resource usage for groups of processes, fundamental to containers.

## Related Terms

- See [Programming Glossary](/programming/glossary) for general programming concepts
- See [Computer Science Glossary](/computer-science/glossary) for CS fundamentals
- See [Database Glossary](/databases/glossary) for Linux database administration
- See [Networking Glossary](/networking/glossary) for network concepts
- See [Security Glossary](/security/glossary) for security concepts
