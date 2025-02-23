import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://meetyououtside.com',
  base: '/',
  integrations: [tailwind()],
});
