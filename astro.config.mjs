// @ts-check
import { defineConfig } from 'astro/config';

// The site's public address, used for page links, the sitemap and sharing previews.
// Netlify sets URL automatically (it becomes the custom domain once one is added);
// SITE_URL can override it. BASE_PATH is only needed when serving from a sub-folder.
const site = process.env.SITE_URL || process.env.URL || 'https://example.com';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
