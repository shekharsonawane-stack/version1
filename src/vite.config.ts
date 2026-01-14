import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'ui-vendor': ['lucide-react', 'recharts'],
        },
      },
      // Explicitly exclude server files from build
      external: [
        /^jsr:/,
        /^npm:/,
      ],
    },
  },
  optimizeDeps: {
    exclude: [],
  },
  server: {
    fs: {
      // Don't serve files from supabase directory
      deny: ['**/supabase/**'],
    },
  },
});