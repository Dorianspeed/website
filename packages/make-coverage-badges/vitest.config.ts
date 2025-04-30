import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    clearMocks: true,
    coverage: {
      exclude: ['src/constants/*', 'src/index.ts', 'src/types/*'],
      include: ['src/utils/**/*'],
      reporter: ['json-summary', 'text'],
      reportsDirectory: '../../coverage/make-coverage-badges'
    },
    environment: 'node',
    globals: true,
    mockReset: true,
    reporters: ['verbose']
  }
});
