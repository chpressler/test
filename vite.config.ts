import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  build: {
    outDir: path.resolve(__dirname, '../src/main/resources/static'),
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
