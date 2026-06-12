import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import solidJs from '@astrojs/solid-js';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://wyattsnotes.wyattau.com',
  output: 'static',
  integrations: [
    starlight({
      title: "Wyatt's Notes",
      defaultLocale: 'en',
      sidebar: [
        { label: 'Exam Boards', items: [
          { label: 'DSE', link: 'https://dse.wyattau.com/' },
          { label: 'IB', link: 'https://ib.wyattau.com/' },
          { label: 'A-Level', link: 'https://alevel.wyattau.com/' },
          { label: 'Qualifications', link: 'https://qualifications.wyattau.com/' },
        ]},
        { label: 'University', items: [
          { label: 'University Notes', link: 'https://university.wyattau.com/' },
        ]},
        { label: 'Programming', items: [
          { label: 'Programming Notes', link: 'https://programming.wyattau.com/' },
        ]},
        { label: 'Reference', items: [
          { label: 'Infrastructure', link: 'https://infrastructure.wyattau.com/' },
          { label: 'Languages', link: 'https://languages.wyattau.com/' },
          { label: 'Tools', link: 'https://tools.wyattau.com/' },
        ]},
      ],
      head: [
        { tag: 'meta', attrs: { property: 'og:image', content: 'https://wyattsnotes.wyattau.com/img/social-card.svg' } },
        { tag: 'script', attrs: { src: '/cross-site-search.js', defer: true } },
        { tag: 'script', attrs: { src: '/page-search.js', defer: true } },
      ],
      customCss: ['./src/styles/custom.css'],
    }),
    solidJs(),
    sitemap(),
  ],
});
