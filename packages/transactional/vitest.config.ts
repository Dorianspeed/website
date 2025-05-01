import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    clearMocks: true,
    coverage: {
      exclude: ['src/constants/*', 'src/types/*'],
      include: ['src/common/**/*', 'src/emails/**/*'],
      reporter: ['json-summary', 'text'],
      reportsDirectory: '../../coverage/transactional'
    },
    environment: 'happy-dom',
    globals: true,
    mockReset: true,
    reporters: ['verbose'],
    setupFiles: './vitest.setup.ts'
  }
});
