import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    clearMocks: true,
    coverage: {
      exclude: ['constants/*', 'types/*'],
      include: ['common/**/*', 'emails/**/*'],
      reporter: ['html', 'text']
    },
    environment: 'happy-dom',
    globals: true,
    mockReset: true,
    reporters: ['verbose'],
    setupFiles: './vitest.setup.ts'
  }
});
