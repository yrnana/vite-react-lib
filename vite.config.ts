import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

import pkg from './package.json';

const external = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
  /\/jsx-runtime/,
];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ['src/lib'],
    }),
  ],
  build: {
    target: 'esnext',
    sourcemap: true,
    minify: false,
    lib: {
      name: pkg.name,
      entry: path.resolve(__dirname, `src/lib/index.ts`),
      formats: ['es', 'cjs'],
      fileName: (format) =>
        format === 'es' ? `index.esm.js` : `index.${format}.js`,
    },
    rollupOptions: {
      external,
    },
  },
  server: {
    host: '0.0.0.0',
    open: true,
  },
  css: {
    devSourcemap: true,
  },
  optimizeDeps: {
    include: ['react/jsx-runtime'],
  },
});
