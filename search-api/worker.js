// Search API Worker for Wyatt's Notes
// Merges Pagefind indexes from 9 sites into a unified search API

const SITES = {
  dse: { name: 'DSE', url: 'https://dse.wyattau.com', color: '#ff6b35' },
  ib: { name: 'IB', url: 'https://ib.wyattau.com', color: '#0077b6' },
  alevel: { name: 'A-Level', url: 'https://alevel.wyattau.com', color: '#2a9d8f' },
  university: { name: 'University', url: 'https://university.wyattau.com', color: '#9b5de5' },
  qualifications: { name: 'Qualifications', url: 'https://qualifications.wyattau.com', color: '#f4a261' },
  programming: { name: 'Programming', url: 'https://programming.wyattau.com', color: '#06d6a0' },
  infrastructure: { name: 'Infrastructure', url: 'https://infrastructure.wyattau.com', color: '#ef476f' },
  languages: { name: 'Languages', url: 'https://languages.wyattau.com', color: '#118ab2' },
  tools: { name: 'Tools', url: 'https://tools.wyattau.com', color: '#073b4c' },
};

// Site authority weights for ranking
const SITE_AUTHORITY = {
  university: 10,
  programming: 8,
  infrastructure: 7,
  languages: 7,
  dse: 6,
  ib: 6,
  alevel: 6,
  tools: 6,
  qualifications: 5,
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // CORS headers
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Cache-Control': 'public, max-age=300, s-maxage=300',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    // Route handling
    try {
      if (url.pathname === '/api/search') {
        return await handleSearch(url, env, corsHeaders);
      }
      if (url.pathname === '/api/sites') {
        return handleSites(corsHeaders);
      }
      if (url.pathname === '/api/health') {
        return await handleHealth(env, corsHeaders);
      }
      if (url.pathname === '/api/trending') {
        return await handleTrending(env, corsHeaders);
      }
      if (url.pathname === '/api/suggest') {
        return await handleSuggest(url, env, corsHeaders);
      }
      if (url.pathname === '/' || url.pathname === '/dashboard') {
        return await handleDashboard(corsHeaders);
      }
      return new Response(JSON.stringify({ error: 'Not found' }), {
        status: 404,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    } catch (err) {
      return new Response(JSON.stringify({ error: err.message }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
  },
};

async function handleSearch(url, env, corsHeaders) {
  const query = url.searchParams.get('q')?.trim();
  const limit = Math.min(parseInt(url.searchParams.get('limit') || '20'), 50);
  const site = url.searchParams.get('site'); // optional: filter by site

  if (!query || query.length < 2) {
    return new Response(JSON.stringify({ error: 'Query must be at least 2 characters' }), {
      status: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  // Check KV cache first
  const cacheKey = `search:${site || 'all'}:${query.toLowerCase()}`;
  const cached = await env.SEARCH_KV.get(cacheKey, { type: 'json' });
  if (cached) {
    return new Response(JSON.stringify(cached), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  // Fetch merged index from KV
  const index = await env.SEARCH_KV.get('merged-index', { type: 'json' });
  if (!index) {
    return new Response(JSON.stringify({ error: 'Search index not available' }), {
      status: 503,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  // Search and rank
  let results = searchIndex(query, index, site);

  // Apply limit
  results = results.slice(0, limit);

  const response = {
    query,
    total: results.length,
    results: results.map(r => ({
      title: r.title,
      url: r.url,
      site: r.site,
      siteName: SITES[r.site]?.name || r.site,
      siteColor: SITES[r.site]?.color || '#666',
      siteUrl: SITES[r.site]?.url || '',
      snippet: r.snippet,
      score: r.score,
      breadcrumbs: r.url.split('/').filter(Boolean).slice(0, -1),
    })),
  };

  // Cache hot queries (top 1000)
  if (results.length > 0) {
    await env.SEARCH_KV.put(cacheKey, JSON.stringify(response), { expirationTtl: 300 });
  }

  // Log search query for analytics
  await logSearch(query, results.length, env);

  return new Response(JSON.stringify(response), {
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });
}

function searchIndex(query, index, siteFilter) {
  const queryLower = query.toLowerCase();
  const queryWords = queryLower.split(/\s+/);
  const results = [];

  for (const entry of index.entries) {
    // Filter by site if specified
    if (siteFilter && entry.site !== siteFilter) continue;

    // Skip entries with missing data
    if (!entry.title || !entry.url) continue;

    let score = 0;
    const titleLower = (entry.title || '').toLowerCase();
    const contentLower = (entry.content || entry.description || '').toLowerCase();
    const urlLower = (entry.url || '').toLowerCase();

    // 1. Exact phrase match in title (highest signal)
    if (titleLower.includes(queryLower)) {
      score += 100;
    }

    // 2. Individual word matches in title
    for (const word of queryWords) {
      if (titleLower.includes(word)) score += 20;
    }

    // 3. Exact phrase match in content
    if (contentLower.includes(queryLower)) {
      score += 50;
    }

    // 4. Individual word matches in content
    for (const word of queryWords) {
      if (contentLower.includes(word)) score += 5;
    }

    // 5. Match in URL slug
    for (const word of queryWords) {
      if (urlLower.includes(word)) score += 15;
    }

    // 6. Site authority bonus
    score += (SITE_AUTHORITY[entry.site] || 0) * 2;

    // 7. Content length penalty (prefer focused pages)
    const contentLength = (entry.content || entry.description || '').length;
    if (contentLength > 5000) score -= 5;
    if (contentLength > 10000) score -= 10;

    // 8. Shallow URL depth bonus (prefer top-level pages)
    const depth = entry.url.split('/').length - 3; // subtract protocol + domain
    if (depth <= 1) score += 10;
    if (depth <= 2) score += 5;

    if (score > 0) {
      // Generate snippet
      const snippet = generateSnippet(contentLower, queryWords);

      results.push({
        ...entry,
        score,
        snippet,
      });
    }
  }

  // Sort by score descending
  results.sort((a, b) => b.score - a.score);

  return results;
}

function generateSnippet(content, queryWords) {
  // Handle undefined/null content
  if (!content) return '';

  // Find the first occurrence of any query word
  let bestPos = -1;
  for (const word of queryWords) {
    const pos = content.indexOf(word);
    if (pos !== -1 && (bestPos === -1 || pos < bestPos)) {
      bestPos = pos;
    }
  }

  if (bestPos === -1) {
    // No match in content, return beginning
    return content.slice(0, 200).trim() + '...';
  }

  // Extract snippet around the match
  const start = Math.max(0, bestPos - 80);
  const end = Math.min(content.length, bestPos + 120);
  let snippet = content.slice(start, end).trim();

  if (start > 0) snippet = '...' + snippet;
  if (end < content.length) snippet = snippet + '...';

  return snippet;
}

function handleSites(corsHeaders) {
  const sites = Object.entries(SITES).map(([id, info]) => ({
    id,
    ...info,
    authority: SITE_AUTHORITY[id] || 0,
  }));

  return new Response(JSON.stringify({ sites }), {
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });
}

async function handleHealth(env, corsHeaders) {
  const metadata = await env.SEARCH_KV.get('metadata', { type: 'json' });

  return new Response(
    JSON.stringify({
      status: 'ok',
      indexVersion: metadata?.version || 'unknown',
      lastUpdated: metadata?.lastUpdated || 'unknown',
      siteCount: metadata?.siteCount || 0,
      totalEntries: metadata?.totalEntries || 0,
    }),
    {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    }
  );
}

async function handleTrending(env, corsHeaders) {
  const trending = await env.SEARCH_KV.get('trending', { type: 'json' });

  return new Response(JSON.stringify({ trending: trending || [] }), {
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });
}

async function handleSuggest(url, env, corsHeaders) {
  const query = url.searchParams.get('q')?.trim().toLowerCase();
  if (!query || query.length < 1) {
    return new Response(JSON.stringify({ suggestions: [] }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  // Get trending searches and filter by prefix
  const trending = await env.SEARCH_KV.get('trending', { type: 'json' }) || [];
  const suggestions = trending
    .filter(t => t.query.toLowerCase().includes(query))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5)
    .map(t => ({ query: t.query, count: t.count }));

  // Also add common query completions
  const commonQueries = [
    'physics', 'chemistry', 'biology', 'mathematics', 'calculus',
    'linear algebra', 'thermodynamics', 'quantum', 'organic chemistry',
    'c++', 'python', 'rust', 'java', 'javascript',
    'dse', 'ib', 'a-level', 'gcse', 'ap',
    'algorithms', 'data structures', 'databases', 'networking',
  ];

  for (const q of commonQueries) {
    if (q.includes(query) && !suggestions.find(s => s.query === q)) {
      suggestions.push({ query: q, count: 0 });
    }
  }

  return new Response(JSON.stringify({ suggestions: suggestions.slice(0, 8) }), {
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });
}

async function handleDashboard(corsHeaders) {
  const dashboardHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Search Analytics — Wyatt's Notes</title>
  <meta name="robots" content="noindex, nofollow">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: system-ui, sans-serif; background: #0f172a; color: #e2e8f0; padding: 2rem; }
    h1 { font-size: 1.5rem; margin-bottom: 1.5rem; color: #ff6b35; }
    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin-bottom: 1.5rem; }
    .card { background: #1e293b; border: 1px solid #334155; border-radius: 10px; padding: 1.25rem; }
    .card h2 { font-size: 0.85rem; color: #94a3b8; margin-bottom: 0.5rem; }
    .stat { font-size: 2rem; font-weight: 800; color: #ff6b35; }
    table { width: 100%; border-collapse: collapse; }
    th, td { text-align: left; padding: 0.6rem; border-bottom: 1px solid #334155; font-size: 0.85rem; }
    th { color: #94a3b8; }
    .badge { display: inline-block; font-size: 0.65rem; padding: 0.1rem 0.4rem; border-radius: 3px; font-weight: 600; }
    .refresh { background: #ff6b35; color: white; border: none; padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer; }
    .refresh:hover { background: #ff8c4a; }
  </style>
</head>
<body>
  <h1>Search Analytics</h1>
  <div class="grid">
    <div class="card"><h2>Status</h2><div class="stat" id="status">—</div></div>
    <div class="card"><h2>Entries</h2><div class="stat" id="entries">—</div></div>
    <div class="card"><h2>Sites</h2><div class="stat" id="sites">—</div></div>
    <div class="card"><h2>Last Updated</h2><div class="stat" id="updated" style="font-size:1rem">—</div></div>
  </div>
  <div class="card" style="margin-bottom:1rem">
    <h2>Trending</h2>
    <table><thead><tr><th>#</th><th>Query</th><th>Count</th></tr></thead>
    <tbody id="trend"><tr><td colspan="3" style="text-align:center;color:#64748b">Loading...</td></tr></tbody></table>
  </div>
  <div class="card">
    <h2>Sites</h2>
    <table><thead><tr><th>Site</th><th>URL</th><th>Authority</th></tr></thead>
    <tbody id="siteList"><tr><td colspan="3" style="text-align:center;color:#64748b">Loading...</td></tr></tbody></table>
  </div>
  <div style="text-align:center;margin-top:1rem"><button class="refresh" onclick="load()">Refresh</button></div>
  <script>
    const A='https://search.wyattau.com/api';
    async function load(){await Promise.all([health(),trending(),sites()]);}
    async function health(){try{const r=await fetch(A+'/health');const d=await r.json();document.getElementById('status').textContent=d.status==='ok'?'✅':'❌';document.getElementById('entries').textContent=d.totalEntries;document.getElementById('sites').textContent=d.siteCount;document.getElementById('updated').textContent=new Date(d.lastUpdated).toLocaleString();}catch{document.getElementById('status').textContent='❌';}}
    async function trending(){try{const r=await fetch(A+'/trending');const d=await r.json();const t=document.getElementById('trend');if(!d.trending||!d.trending.length){t.innerHTML='<tr><td colspan="3" style="text-align:center;color:#64748b">None</td></tr>';return;}t.innerHTML=d.trending.sort((a,b)=>b.count-a.count).map((x,i)=>'<tr><td>'+(i+1)+'</td><td><b>'+x.query+'</b></td><td>'+x.count+'</td></tr>').join('');}catch{}}
    async function sites(){try{const r=await fetch(A+'/sites');const d=await r.json();document.getElementById('siteList').innerHTML=d.sites.map(s=>'<tr><td><span class="badge" style="background:'+s.color+'20;color:'+s.color+'">'+s.name+'</span></td><td>'+s.url+'</td><td>'+s.authority+'</td></tr>').join('');}catch{}}
    load();setInterval(load,60000);
  </script>
</body>
</html>`;

  return new Response(dashboardHtml, {
    headers: { ...corsHeaders, 'Content-Type': 'text/html; charset=utf-8' },
  });
}

async function logSearch(query, resultCount, env) {
  // Get current trending
  let trending = await env.SEARCH_KV.get('trending', { type: 'json' }) || [];

  // Find or create entry
  const existing = trending.find(t => t.query === query);
  if (existing) {
    existing.count++;
    existing.lastSearched = new Date().toISOString();
  } else {
    trending.push({
      query,
      count: 1,
      lastSearched: new Date().toISOString(),
    });
  }

  // Keep top 50 trending
  trending.sort((a, b) => b.count - a.count);
  trending = trending.slice(0, 50);

  await env.SEARCH_KV.put('trending', JSON.stringify(trending), { expirationTtl: 86400 });
}
