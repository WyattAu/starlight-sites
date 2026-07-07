/**
 * Analytics dashboard HTML (static). Extracted from worker.js to shrink the
 * god-file and to localise the XSS-hardened client script (esc()).
 */
export const DASHBOARD_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Search Analytics — Wyatt's Notes</title>
  <meta name="robots" content="noindex, nofollow">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: system-ui, sans-serif; background: #0f172a; color: #e2e8f0; padding: 2rem; }
    h1 { font-size: 1.5rem; margin-bottom: 0.5rem; color: #ff6b35; }
    .subtitle { color: #64748b; margin-bottom: 1.5rem; }
    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 1.5rem; }
    .card { background: #1e293b; border: 1px solid #334155; border-radius: 10px; padding: 1.25rem; }
    .card h2 { font-size: 0.8rem; color: #94a3b8; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.5px; }
    .stat { font-size: 2rem; font-weight: 800; color: #ff6b35; }
    .stat.green { color: #06d6a0; }
    .label { font-size: 0.8rem; color: #64748b; }
    table { width: 100%; border-collapse: collapse; }
    th, td { text-align: left; padding: 0.6rem; border-bottom: 1px solid #334155; font-size: 0.85rem; }
    th { color: #94a3b8; font-size: 0.75rem; text-transform: uppercase; }
    .badge { display: inline-block; font-size: 0.65rem; padding: 0.1rem 0.4rem; border-radius: 3px; font-weight: 600; }
    .bar { height: 20px; background: #ff6b35; border-radius: 4px; min-width: 2px; }
    .bar-container { display: flex; align-items: center; gap: 0.5rem; }
    .refresh { background: #ff6b35; color: white; border: none; padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer; font-size: 0.85rem; }
    .refresh:hover { background: #ff8c4a; }
    .section { margin-bottom: 1.5rem; }
    .section h2 { font-size: 1rem; margin-bottom: 1rem; color: #94a3b8; border-bottom: 1px solid #334155; padding-bottom: 0.5rem; }
    .chart { display: flex; align-items: flex-end; gap: 3px; height: 100px; padding: 0.5rem 0; }
    .chart-bar { flex: 1; background: #ff6b35; border-radius: 3px 3px 0 0; min-height: 2px; transition: height 0.3s; }
    .chart-labels { display: flex; justify-content: space-between; font-size: 0.65rem; color: #64748b; }
  </style>
</head>
<body>
  <h1>Search Analytics</h1>
  <p class="subtitle">Real-time search metrics across all Wyatt's Notes sites</p>

  <div class="grid" id="stats">
    <div class="card"><h2>Status</h2><div class="stat" id="status">—</div></div>
    <div class="card"><h2>Total Searches</h2><div class="stat" id="totalSearches">—</div></div>
    <div class="card"><h2>Click-through Rate</h2><div class="stat green" id="ctr">—</div></div>
    <div class="card"><h2>Unique Queries</h2><div class="stat" id="uniqueQueries">—</div></div>
    <div class="card"><h2>Entries</h2><div class="stat" id="entries">—</div></div>
    <div class="card"><h2>Indexed Sites</h2><div class="stat" id="sites">—</div></div>
  </div>

  <div class="section">
    <h2>Search Volume (Last 30 Days)</h2>
    <div class="card">
      <div class="chart" id="volumeChart"></div>
      <div class="chart-labels" id="volumeLabels"></div>
    </div>
  </div>

  <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem">
    <div class="section">
      <h2>Top Queries</h2>
      <div class="card">
        <table>
          <thead><tr><th>#</th><th>Query</th><th>Count</th></tr></thead>
          <tbody id="topQueries"><tr><td colspan="3" style="text-align:center;color:#64748b">Loading...</td></tr></tbody>
        </table>
      </div>
    </div>
    <div class="section">
      <h2>Site Distribution</h2>
      <div class="card">
        <table>
          <thead><tr><th>Site</th><th>Clicks</th><th></th></tr></thead>
          <tbody id="siteClicks"><tr><td colspan="3" style="text-align:center;color:#64748b">Loading...</td></tr></tbody>
        </table>
      </div>
    </div>
  </div>

  <div style="text-align:center;margin-top:1.5rem">
    <button class="refresh" onclick="loadAll()">Refresh</button>
  </div>

  <script>
    const A='https://search.wyattau.com/api';
    const SITES={dse:'DSE',ib:'IB',alevel:'A-Level',university:'University',qualifications:'Qualifications',programming:'Programming',infrastructure:'Infrastructure',languages:'Languages',tools:'Tools'};
    const COLORS={dse:'#ff6b35',ib:'#0077b6',alevel:'#2a9d8f',university:'#9b5de5',qualifications:'#f4a261',programming:'#06d6a0',infrastructure:'#ef476f',languages:'#118ab2',tools:'#073b4c'};

    // Escape untrusted strings before interpolating into innerHTML. The
    // analytics data (notably q.query) is user-controlled; without this a
    // search for "<img src=x onerror=...>" would execute in the dashboard
    // origin (stored XSS).
    function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');}

    async function loadAll(){await Promise.all([loadHealth(),loadAnalytics()]);}

    async function loadHealth(){
      try{const r=await fetch(A+'/health');const d=await r.json();
      document.getElementById('status').textContent=d.status==='ok'?'OK':'FAIL';
      document.getElementById('entries').textContent=d.totalEntries;
      document.getElementById('sites').textContent=d.siteCount;}catch(e){console.error('health load failed:',e);document.getElementById('status').textContent='FAIL';}
    }

    async function loadAnalytics(){
      try{const r=await fetch(A+'/analytics');const d=await r.json();
      document.getElementById('totalSearches').textContent=d.totalSearches;
      document.getElementById('ctr').textContent=d.clickThroughRate+'%';
      document.getElementById('uniqueQueries').textContent=d.uniqueQueryCount;

      // Volume chart
      const chart=document.getElementById('volumeChart');
      const labels=document.getElementById('volumeLabels');
      if(d.dailyVolume.length>0){
        const max=Math.max(...d.dailyVolume.map(d=>d.count));
        chart.innerHTML=d.dailyVolume.map(d=>'<div class="chart-bar" style="height:'+(d.count/max*100)+'%" title="'+esc(d.date)+': '+d.count+'"></div>').join('');
        labels.innerHTML='<span>'+esc(d.dailyVolume[0].date)+'</span><span>'+esc(d.dailyVolume[d.dailyVolume.length-1].date)+'</span>';
      }

      // Top queries
      const tq=document.getElementById('topQueries');
      if(d.topQueries.length>0){
        tq.innerHTML=d.topQueries.map((q,i)=>'<tr><td>'+(i+1)+'</td><td><b>'+esc(q.query)+'</b></td><td>'+q.count+'</td></tr>').join('');
      }else{tq.innerHTML='<tr><td colspan="3" style="text-align:center;color:#64748b">No searches yet</td></tr>';}

      // Site clicks
      const sc=document.getElementById('siteClicks');
      if(d.siteClicks.length>0){
        const maxC=Math.max(...d.siteClicks.map(s=>s.count));
        sc.innerHTML=d.siteClicks.map(s=>'<tr><td><span class="badge" style="background:'+(COLORS[s.site]||'#666')+'20;color:'+(COLORS[s.site]||'#666')+'">'+esc(SITES[s.site]||s.site)+'</span></td><td>'+s.count+'</td><td><div class="bar-container"><div class="bar" style="width:'+(s.count/maxC*100)+'%;background:'+(COLORS[s.site]||'#666')+'"></div></div></td></tr>').join('');
      }else{sc.innerHTML='<tr><td colspan="3" style="text-align:center;color:#64748b">No clicks yet</td></tr>';}
      }catch(e){console.error('Failed to load analytics:',e);}
    }

    loadAll();
    setInterval(loadAll,30000);
  </script>
</body>
</html>`
