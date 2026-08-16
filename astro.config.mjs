// @ts-check
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax';

export default defineConfig({
  site: 'https://ivanightingale.github.io',
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [[rehypeMathjax, { output: 'svg' }]],
    shikiConfig: {
      theme: 'nord',
    },
  },
});