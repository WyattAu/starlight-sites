# Incident Response Plan

## Severity Levels

| Level | Name | Description | Response Time |
|-------|------|-------------|---------------|
| 1 | Critical | All sites down, data loss, security breach | Immediate |
| 2 | Major | Multiple sites broken, search API down | 4 hours |
| 3 | Minor | Single site issue, non-critical feature broken | 24 hours |
| 4 | Low | Cosmetic issue, performance degradation | Next sprint |

## Response Procedure

### 1. Detection

- Automated: uptime.yml probes every 6 hours, auto-creates GitHub issues on non-200 responses
- Manual: user reports via GitHub issues or email

### 2. Triage

- Assign severity level
- Identify affected sites/components
- Check Cloudflare status page for platform issues

### 3. Containment

| Scenario | Action |
|----------|--------|
| Site down | Check Cloudflare Pages dashboard; verify DNS; check deploy logs |
| Search API down | Check Cloudflare Worker logs; verify KV namespace |
| CI/CD broken | Check GitHub Actions logs; verify secrets are set |
| Security issue | Follow SECURITY.md reporting process |

### 4. Recovery

| Scenario | Recovery |
|----------|----------|
| Bad deploy | Revert to last known good via Cloudflare Pages dashboard |
| CI broken | Fix forward; do not deploy until CI green |
| DNS issue | Verify Cloudflare DNS records; check for accidental changes |
| Dependency vulnerability | Update dependency; run full test suite; deploy |

### 5. Post-Incident

- Document root cause in GitHub issue
- Update monitoring/alerting if gap found
- Update this document if procedure was inadequate

## Rollback Procedure

```bash
# Find last good deploy
git log --oneline -10

# Revert to last good commit
git revert HEAD

# Push to trigger redeploy
git push origin main
```

## Contact

- **Email:** wyatt_au@protonmail.com
- **GitHub Issues:** For non-security issues only
