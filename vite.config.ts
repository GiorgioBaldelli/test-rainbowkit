import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',  // Changed to '/' for root domain
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          wagmi: ['wagmi', 'viem'],
          rainbowkit: ['@rainbow-me/rainbowkit']
        }
      }
    },
    commonjsOptions: {
      include: [/node_modules/],
    },
    sourcemap: true,
  },
});