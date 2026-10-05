// @ts-check
import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ivanightingale.github.io',
  // Preserve pre-v7 whitespace handling between inline elements.
  compressHTML: true,
  integrations: [sitemap()],
  markdown: {
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [[rehypeMathjax, { output: 'svg' }]],
    }),
    shikiConfig: {
      theme: 'everforest-light',
    },
  },
});