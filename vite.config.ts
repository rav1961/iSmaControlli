/// <reference types="vitest" />
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(), tsconfigPaths(), viteSingleFile()],
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['src/setup-test.ts']
  }
});
