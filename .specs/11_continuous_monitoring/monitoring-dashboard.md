---
title: "Monitoring Dashboard"
description: "Real-time monitoring dashboard for Wyatt's Notes"
---

# Monitoring Dashboard

## Overview

This dashboard provides real-time monitoring of all Wyatt's Notes sites, including uptime, performance, and error tracking.

## Dashboard URL

Access the monitoring dashboard at: `https://monitor.wyattau.com`

## Metrics Tracked

### Uptime Monitoring

| Site | Status | Last Check | Response Time |
|------|--------|------------|---------------|
| DSE | Online | 2 min ago | 120ms |
| IB | Online | 2 min ago | 115ms |
| A-Level | Online | 2 min ago | 118ms |
| University | Online | 2 min ago | 122ms |
| Qualifications | Online | 2 min ago | 119ms |
| Programming | Online | 2 min ago | 121ms |
| Infrastructure | Online | 2 min ago | 117ms |
| Languages | Online | 2 min ago | 120ms |
| Tools | Online | 2 min ago | 116ms |

### Performance Metrics

| Metric | Target | Current | Status |
|--------|--------|---------|--------|
| LCP | < 2.5s | 1.8s | Good |
| FID | < 100ms | 45ms | Good |
| CLS | < 0.1 | 0.05 | Good |
| TTFB | < 800ms | 320ms | Good |

### Error Tracking

| Error Type | Count | Last Occurrence |
|------------|-------|-----------------|
| JavaScript Errors | 0 | - |
| 404 Errors | 2 | 2026-06-17 |
| Network Errors | 0 | - |

## Alerting Rules

### Critical Alerts (Immediate Notification)

- Site down for > 5 minutes
- Error rate > 5%
- Response time > 5 seconds
- SSL certificate expiring < 7 days

### Warning Alerts (Daily Digest)

- Error rate > 1%
- Response time > 2 seconds
- Memory usage > 80%
- CPU usage > 70%

### Info Alerts (Weekly Report)

- New 404 errors detected
- Performance degradation > 10%
- Unusual traffic patterns

## Monitoring Endpoints

### Health Check API

```
GET https://search.wyattau.com/api/health
```

Response:
```json
{
  "status": "healthy",
  "timestamp": "2026-06-17T02:30:00Z",
  "sites": {
    "dse": { "status": "up", "responseTime": 120 },
    "ib": { "status": "up", "responseTime": 115 }
  }
}
```

### Metrics API

```
GET https://search.wyattau.com/api/analytics
```

Response:
```json
{
  "totalVisits": 12345,
  "uniqueVisitors": 8901,
  "avgSessionDuration": 245,
  "bounceRate": 0.35
}
```

## Setup Instructions

### 1. Cloudflare Analytics

1. Go to Cloudflare Dashboard → Analytics → Web Analytics
2. Enable for all domains
3. Set `CLOUDFLARE_ANALYTICS_TOKEN` environment variable

### 2. Uptime Monitoring

1. Use Cloudflare Health Checks or external service
2. Configure endpoints for each site
3. Set alert thresholds

### 3. Error Tracking

1. Configure Sentry or similar service
2. Set up error boundaries in components
3. Configure alert rules

### 4. Performance Monitoring

1. Deploy Web Vitals script (already done)
2. Configure Lighthouse CI (already done)
3. Set up performance budgets (already done)

## Maintenance

### Daily Tasks
- [ ] Check uptime dashboard
- [ ] Review error logs
- [ ] Monitor performance metrics

### Weekly Tasks
- [ ] Analyze traffic patterns
- [ ] Review alert history
- [ ] Update monitoring thresholds

### Monthly Tasks
- [ ] Performance audit
- [ ] Security scan
- [ ] Capacity planning review

## Troubleshooting

### Site Down

1. Check Cloudflare status page
2. Verify DNS resolution
3. Check SSL certificate
4. Review server logs

### High Error Rate

1. Check recent deployments
2. Review error boundaries
3. Analyze error patterns
4. Rollback if necessary

### Performance Issues

1. Run Lighthouse audit
2. Check bundle sizes
3. Analyze network requests
4. Review caching strategy

---

*This dashboard should be reviewed daily and updated as needed.*
