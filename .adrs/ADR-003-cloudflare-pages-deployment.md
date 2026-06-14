# ADR-003: Cloudflare Pages for Deployment

## Status

Accepted

## Context

Static sites need hosting. Options:
- Cloudflare Pages
- Vercel
- Netlify
- GitHub Pages

## Decision

Deploy all 9 sites to Cloudflare Pages.

## Rationale

- **Performance**: Cloudflare's global CDN ensures low latency worldwide.
- **Cost**: Free tier covers all 9 sites with no bandwidth limits.
- **Integration**: Cloudflare Workers for search API, KV for search index.
- **Custom domains**: Easy custom domain setup (wyattau.com subdomains).
- **Preview deployments**: Automatic preview URLs for pull requests.
- **Analytics**: Cloudflare Web Analytics (privacy-first, no consent needed).

## Consequences

- Positive: Zero hosting costs.
- Positive: Global CDN with edge caching.
- Negative: Vendor lock-in to Cloudflare ecosystem.
- Negative: Limited server-side capabilities (static only).
