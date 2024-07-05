import { resolve } from 'path'
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

// https://vitejs.dev/config/
export default defineConfig({
  root,
  base: '',
  plugins: [react()],
  server: {
    host: '0.0.0.0',
  },
  build: {
    outDir,
    emptyOutDir: true
  }
})
