/**
 * Custom Astro integration that wraps astro-mermaid and adds
 * data-cfasync="false" to the injected mermaid script tag.
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
      'astro:build:done': async ({ dir, pages }) => {
        const fs = await import('node:fs');
        const path = await import('node:path');

        // Recursively find all HTML files
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

        const htmlFiles = findHtmlFiles(dir);
        let patched = 0;

        for (const htmlFile of htmlFiles) {
          let html = fs.readFileSync(htmlFile, 'utf-8');

          // Look for the astro-mermaid injected script (contains [astro-mermaid] log)
          // and add data-cfasync="false" to it
          const mermaidScriptRegex = /<script>([\s\S]*?\[astro-mermaid\][\s\S]*?)<\/script>/;

          if (mermaidScriptRegex.test(html)) {
            // Replace the <script> tag with one that has data-cfasync="false"
            html = html.replace(
              /<script>([\s\S]*?\[astro-mermaid\][\s\S]*?)<\/script>/,
              '<script data-cfasync="false">$1</script>'
            );
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
