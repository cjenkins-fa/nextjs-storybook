import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

const __dirname = path
  .dirname(fileURLToPath(import.meta.url))
  .replaceAll('\\', '/');

const version = process.env.npm_package_version;

export default defineConfig({
  build: {
    emptyOutDir: true,
    rollupOptions: {
      input: {
        coreScript: path.join(__dirname, 'src', 'scripts', 'core.js'),
        coreStyle: path.join(__dirname, 'src', 'stylesheets', 'core.scss'),
      },
      output: {
        entryFileNames: path.join(version, 'core.js'),
        assetFileNames: path.join(version, 'core.css'),
      },
    },
  },
});
