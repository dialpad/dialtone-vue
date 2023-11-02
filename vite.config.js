import { defineConfig } from 'vite';
import svgPlugin from 'unplugin-svg-vue-component/vite';
import vue from '@vitejs/plugin-vue2';
import path, { resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: {
        'dialtone-vue': resolve(__dirname, './index.js'),
        emoji: resolve(__dirname, './emoji.js'),
        directives: resolve(__dirname, './directives.js'),
      },
    },
    rollupOptions: {
      external: ['vue', '@dialpad/dialtone'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [vue(), svgPlugin()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('.', import.meta.url)),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setupTests.js',
    coverage: {
      reporter: ['text', 'html'],
      exclude: [
        'node_modules/',
        'tests/setupTests.js',
      ],
    },
  },
});
