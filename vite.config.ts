import path from 'node:path'
import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/** Social crawlers need absolute URLs in OG tags; resolve the site origin at build time. */
function siteUrl(mode: string): Plugin {
  const env = { ...process.env, ...loadEnv(mode, process.cwd(), '') }
  const vercelHost = env.VERCEL_PROJECT_PRODUCTION_URL
  const origin = (env.VITE_SITE_URL || (vercelHost ? `https://${vercelHost}` : '')).replace(/\/$/, '')
  return {
    name: 'site-url',
    transformIndexHtml: (html) => html.replaceAll('__SITE_URL__', origin),
  }
}

export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss(), siteUrl(mode)],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            { name: 'react', test: /node_modules[\\/](react|react-dom|scheduler|react-router|react-router-dom)[\\/]/ },
            { name: 'motion', test: /node_modules[\\/](framer-motion|motion-dom|motion-utils)[\\/]/ },
            { name: 'radix', test: /node_modules[\\/]@radix-ui[\\/]/ },
          ],
        },
      },
    },
  },
}))
