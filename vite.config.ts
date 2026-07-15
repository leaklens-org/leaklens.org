import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâ€”file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
      port: 3000,
      proxy: {
        '/api-leakcheck': {
          target: 'https://leakcheck.io',
          changeOrigin: true,
          rewrite: (p) => p.replace(/^\/api-leakcheck/, '')
        },
        '/api-aleph': {
          target: 'https://aleph.occrp.org',
          changeOrigin: true,
          rewrite: (p) => p.replace(/^\/api-aleph/, '')
        },
        '/api-xposed': {
          target: 'https://api.xposedornot.com',
          changeOrigin: true,
          rewrite: (p) => p.replace(/^\/api-xposed/, '')
        }
      }
    },
  };
});
