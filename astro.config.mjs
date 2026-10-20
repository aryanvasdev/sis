// @ts-check
import { defineConfig } from 'astro/config';

// SITE_URL / BASE_PATH are set by the GitHub Pages workflow.
// When you move to a custom domain (e.g. https://www.sahibinternationalschool.in),
// set SITE_URL to that domain and leave BASE_PATH empty.
const site = process.env.SITE_URL || 'https://example.com';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
