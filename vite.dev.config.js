import path from 'path';
import { fileURLToPath } from 'url';
import { glob } from 'glob';
import { defineConfig } from 'vite';

const __dirname = path
  .dirname(fileURLToPath(import.meta.url))
  .replaceAll('\\', '/');

const inputPaths = path
  .resolve(__dirname, 'src', 'demo/**/*.html')
  .replaceAll('\\', '/');

export default defineConfig({
  root: path.join(__dirname, 'src'),
  publicDir: path.join(__dirname, 'public'),
  server: {
    open: '/demo/',
  },
  build: {
    emptyOutDir: true,
    outDir: path.join(__dirname, 'dist'),
    rollupOptions: {
      input: glob.sync(inputPaths),
    },
  },
});
