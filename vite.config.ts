import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import pkg from './package.json';
import dts from 'vite-plugin-dts';

const external = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
  /\/jsx-runtime/,
];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion'],
      },
    }),
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
      entry: path.resolve(__dirname, `src/lib/index.tsx`),
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external,
    },
  },
  server: {
    host: '0.0.0.0',
    open: true,
  },
});
