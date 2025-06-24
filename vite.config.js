import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Add PostCSS configuration here
  css: {
    postcss: './postcss.config.js', // Specify the path to your postcss.config.js
  },
  // This proxy will be helpful later for API communication
  server: {
    proxy: {
      '/api': { // Any request starting with /api will be proxied
        target: 'http://localhost:5000', //  Flask backend URL (adjust if different)
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Remove /api prefix when forwarding
      },
    },
  },
});
