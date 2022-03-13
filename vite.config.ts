import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import packageData from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'classic',
    }),
  ],
  build: {
    sourcemap: true,
    minify: false,
    lib: {
      name: packageData.name,
      entry: path.resolve(__dirname, `src/lib/index.tsx`),
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
    },
  },
  server: {
    host: '0.0.0.0',
    open: true,
  },
});
