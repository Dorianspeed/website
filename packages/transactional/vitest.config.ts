import react from '@vitejs/plugin-react';
import tsConfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react(), tsConfigPaths()],
  test: {
    clearMocks: true,
    coverage: {
      exclude: ['constants/*', 'types/*'],
      include: ['common/**/*', 'emails/**/*'],
      reporter: ['html', 'text']
    },
    environment: 'jsdom',
    globals: true,
    mockReset: true,
    reporters: ['verbose'],
    setupFiles: './vitest.setup.ts'
  }
});
