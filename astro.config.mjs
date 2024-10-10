import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: "server",
  routes: [{
    path: '/index',
    handler: () => import('./pages/index.astro')
  }, {
    path: '/personaje',
    handler: () => import('./pages/personaje.astro')
  }],
  adapter: vercel()
});