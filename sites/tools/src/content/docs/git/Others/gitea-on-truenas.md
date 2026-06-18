---
title: Hosting With Gitea On TrueNAS
description: ""s Encrypt for automatic TLS certificate
   provisioning.
3. Configure DNS to point the domain to the TrueNAS host IP.
4. Verify HTTPS by navigating to `https://git.example.com` in a browser.

### First Repository Setup

1. Create an admin account on first login.
2. Configure `app.ini` for email notifications: set SMTP host, port, user, and password.
3. Create your first repository and push using SSH:
   ```bash
   git remote add origin git@git.example.com:user/repo.git
   git push -u origin main
   ```
4. Add SSH keys under `Settings > SSH / GPG Keys`.

### Backup Strategy

1. **Gitea dump**: `gitea dump` creates a zip with the database, repositories, and configuration.
2. **Scheduled tasks**: Use TrueNAS `Task Manager` to run `gitea dump` nightly and copy the archive
   to a backup dataset.
3. **Off-site replication**: Configure TrueNAS cloud sync to push backups to S3-compatible storage
   or a remote TrueNAS instance.

### WireGuard VPN Configuration

1. Install WireGuard on the client machine.
2. Add a peer entry on TrueNAS: `Network > WireGuard Peers > Add` with the client public key and
   allowed IPs.
3. On the client, configure the peer with the TrueNAS endpoint address and port.
4. Verify connectivity: `ping <gitea-internal-ip>` through the tunnel.

### Troubleshooting

- **502 Bad Gateway**: Check that the Gitea pod is running (`kubectl get pods` or TrueNAS app
  status). The most common cause is a misconfigured ingress pointing to the wrong port.
- **Cannot push via SSH**: Verify the SSH port is exposed in the Gitea app settings (default 22
  mapped to a host port, e.g., 30022). Ensure the firewall allows the mapped port.
- **Slow performance**: Increase the PostgreSQL connection pool in `app.ini`
  (`DB_MAX_OPEN_CONNS = 50`). Move the database to a dedicated SSD dataset.
- **Repository migration**: Use the Gitea admin panel `Site Administration > Repository Migration`
  to import repositories from GitHub, GitLab, or another Gitea instance.


### Administration Tips

1. **User management**: Restrict public registration under `Site Administration > Account Options`
   to prevent unauthorized sign-ups. Use invitations or OAuth2 for controlled access.
2. **LFS configuration**: Enable Git Large File Storage in `app.ini` under `[server]` with
   `LFS_START_SERVER = true`. Allocate a dedicated dataset for LFS objects as they grow quickly.
3. **Repository limits**: Set `MAX_FILE_SIZE`, `MAX_REPO_FILES`, and `DEFAULT_PUSH_CREATE_PRIVATE`
   in `app.ini` to prevent abuse and manage storage consumption.
4. **CI/CD runners**: Gitea Actions supports container-based CI/CD. Deploy the `act_runner` as a
   separate container on TrueNAS and register it with the Gitea instance via
   `Site Administration > Actions > Runners`.

### Reverse Proxy and Header Configuration

When using Traefik or Nginx as a reverse proxy in front of Gitea, set the following in `app.ini`
under `[server]`:

```ini
ROOT_URL = https://git.example.com/
DOMAIN = git.example.com
SSH_PORT = 22
PROTOCOL = https
```

Traefik automatically sets `X-Forwarded-For` and `X-Forwarded-Proto` headers. If Gitea shows
incorrect redirect URLs, verify these headers are passed through correctly.

## Summary

The key principles covered in this topic are linked in the sub-pages above. Focus on understanding
the definitions, applying the formulas or frameworks, and evaluating strengths and limitations of
each approach.

## Worked Examples

Worked examples demonstrating the application of key concepts are covered in the detailed sub-pages
linked above.
