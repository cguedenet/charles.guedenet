import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
// Note: sitemap removed — re-add @astrojs/sitemap when blog content exists
export default defineConfig({
  site: 'https://cguedenet.github.io',
  integrations: [mdx(), tailwind()]
});