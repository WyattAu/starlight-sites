# Search API Reference

Cross-site search API deployed at `search.wyattau.com`.

## Base URL

```
https://search.wyattau.com
```

## Authentication

No authentication required. All endpoints are public.

## CORS

All responses include CORS headers:
```
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, OPTIONS
Access-Control-Allow-Headers: Content-Type
```

## Endpoints

### GET /api/search

Full-text search across all 9 sites.

**Parameters:**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `q` | string | Yes | - | Search query (minimum 2 characters) |
| `limit` | integer | No | 20 | Maximum results (1-50) |
| `site` | string | No | - | Filter by site ID (e.g., `dse`, `ib`) |
| `subject` | string | No | - | Filter by subject (e.g., `physics`, `mathematics`) |
| `lang` | string | No | auto | Language filter (e.g., `en`, `zh`) |
| `preview` | boolean | No | false | Include result previews |
| `variant` | string | No | auto | A/B test variant (`control`, `variant_a`, `variant_b`) |

**Response:**

```json
{
  "query": "physics",
  "total": 15,
  "variant": "control",
  "lang": "en",
  "results": [
    {
      "title": "Physics Mechanics",
      "url": "https://dse.wyattau.com/physics/1-mechanics/",
      "site": "dse",
      "siteName": "DSE",
      "siteColor": "#ff6b35",
      "siteUrl": "https://dse.wyattau.com",
      "snippet": "...introduction to classical mechanics...",
      "score": 125,
      "breadcrumbs": ["physics", "1-mechanics"]
    }
  ]
}
```

**Example:**

```bash
curl "https://search.wyattau.com/api/search?q=quantum+mechanics&limit=10&subject=physics"
```

### GET /api/sites

List all indexed sites.

**Response:**

```json
{
  "sites": [
    {
      "id": "dse",
      "name": "DSE",
      "url": "https://dse.wyattau.com",
      "color": "#ff6b35",
      "lang": "en",
      "authority": 6
    }
  ]
}
```

### GET /api/health

Index health check.

**Response:**

```json
{
  "status": "ok",
  "indexVersion": "v1781450320566",
  "lastUpdated": "2026-06-14T15:18:40.567Z",
  "siteCount": 9,
  "totalEntries": 2013
}
```

### GET /api/trending

Top trending search queries.

**Response:**

```json
{
  "trending": [
    { "query": "physics", "count": 45, "lastSearched": "2026-06-14T12:00:00Z" }
  ]
}
```

### GET /api/suggest

Query autocomplete suggestions.

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `q` | string | Yes | Partial query (minimum 1 character) |

**Response:**

```json
{
  "suggestions": [
    { "query": "physics", "count": 45 },
    { "query": "physical chemistry", "count": 12 }
  ]
}
```

### GET /api/analytics

Search analytics data.

**Response:**

```json
{
  "totalSearches": 1234,
  "totalClicks": 567,
  "clickThroughRate": "45.9",
  "uniqueQueryCount": 890,
  "topQueries": [...],
  "dailyVolume": [...],
  "siteClicks": [...]
}
```

### GET /api/ab-test

A/B test variant performance.

**Response:**

```json
{
  "variants": {
    "control": { "searches": 500, "clicks": 200, "ctr": "40.0" },
    "variant_a": { "searches": 500, "clicks": 250, "ctr": "50.0" },
    "variant_b": { "searches": 200, "clicks": 70, "ctr": "35.0" }
  }
}
```

### POST /api/track

Track search events (analytics).

**Request Body:**

```json
{
  "event": "search_result_click",
  "query": "physics",
  "position": 0,
  "url": "https://dse.wyattau.com/physics/",
  "site": "dse",
  "resultCount": 15,
  "timestamp": "2026-06-14T12:00:00Z"
}
```

## Ranking algorithm

Each indexed entry is scored against the query. Only entries with a positive
score are returned, sorted by score descending. The scoring weights are
A/B-test variants (`control` default; `variant_a`, `variant_b`):

| Signal | control | variant_a | variant_b | Effect |
|--------|---------|-----------|-----------|--------|
| Exact phrase in title | 100 | 120 | 80 | Highest signal |
| Per query word in title | 20 | 25 | 15 | |
| Exact phrase in content | 50 | 60 | 40 | |
| Per query word in content | 5 | 8 | 3 | |
| Per query word in URL slug | 15 | 20 | 10 | |
| Authority multiplier | x2 | x3 | x1 | Multiplied by site authority (0--10) |
| Shallow URL depth bonus | 10 | 15 | 5 | Top-level pages boosted |

Penalties: content longer than 5000 chars subtracts 5; longer than 10000 chars
subtracts a further 10 (focused pages preferred).

Site authority weights: `university` 10, `programming` 8, `infrastructure` 7,
`languages` 7, `dse`/`ib`/`alevel`/`tools` 6, `qualifications` 5.

## Static assets

| Path | Description |
|------|-------------|
| `GET /page-search.js` | Client search-modal script (CDN-cached) |
| `GET /cross-site-search.js` | Client inline-nav search script (CDN-cached) |
| `GET /` , `GET /dashboard` | Analytics dashboard HTML |

## Error Responses

All errors follow the format:

```json
{
  "error": "Error message"
}
```

| Status | Meaning |
|--------|---------|
| 400 | Invalid request (missing/invalid parameters) |
| 404 | Unknown endpoint |
| 503 | Search index not available |

## Rate Limiting

No explicit rate limiting. Cached responses served via Cloudflare Cache API (5-minute TTL).

## Caching

- Edge cache: 5 minutes (Cloudflare Cache API)
- KV cache: 5 minutes for hot queries
- Response headers: `Cache-Control: public, max-age=300, s-maxage=300`
