/**
 * Custom Astro integration that adds data-cfasync="false" to
 * Cloudflare-injected mermaid scripts after build.
 *
 * This prevents Cloudflare Rocket Loader from deferring the mermaid
 * initialization script, which would break dynamic import('mermaid').
 *
 * Usage in astro.config.mjs:
 *   import mermaidNoRocketLoader from './shared/integrations/mermaid-no-rocket-loader/index.mjs';
 *   import mermaid from 'astro-mermaid';
 *
 *   integrations: [
 *     mermaid({ theme: "dark", autoTheme: true }),
 *     mermaidNoRocketLoader(),
 *   ]
 */
export default function mermaidNoRocketLoader() {
  return {
    name: 'mermaid-no-rocket-loader',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const fs = await import('node:fs');
        const path = await import('node:path');

        function findHtmlFiles(dir) {
          const files = [];
          const entries = fs.readdirSync(dir, { withFileTypes: true });
          for (const entry of entries) {
            const fullPath = path.join(dir, entry.name);
            if (entry.isDirectory()) {
              files.push(...findHtmlFiles(fullPath));
            } else if (entry.isFile() && entry.name.endsWith('.html')) {
              files.push(fullPath);
            }
          }
          return files;
        }

        // Patterns that identify the mermaid initialization script
        const MERMAID_PATTERNS = [
          '[astro-mermaid]',
          'pre.mermaid',
          'import(\'mermaid\')',
          "import('mermaid')",
          'hasMermaidDiagrams',
          'initMermaid',
        ];

        const htmlFiles = findHtmlFiles(dir);
        let patched = 0;

        for (const htmlFile of htmlFiles) {
          let html = fs.readFileSync(htmlFile, 'utf-8');
          let modified = false;

          // Find all <script>...</script> tags and check if they contain mermaid code
          const scriptRegex = /<script(?![^>]*data-cfasync)([^>]*)>([\s\S]*?)<\/script>/g;
          let match;

          while ((match = scriptRegex.exec(html)) !== null) {
            const fullMatch = match[0];
            const attrs = match[1];
            const content = match[2];

            // Skip scripts that already have data-cfasync
            if (attrs.includes('data-cfasync')) continue;

            // Check if this script contains mermaid-related code
            const isMermaidScript = MERMAID_PATTERNS.some(p => content.includes(p));

            if (isMermaidScript) {
              const patchedScript = `<script data-cfasync="false"${attrs}>${content}</script>`;
              html = html.replace(fullMatch, patchedScript);
              modified = true;
            }
          }

          if (modified) {
            fs.writeFileSync(htmlFile, html, 'utf-8');
            patched++;
          }
        }

        if (patched > 0) {
          console.log(`[mermaid-no-rocket-loader] Patched ${patched} HTML files with data-cfasync="false"`);
        }
      }
    }
  };
}
