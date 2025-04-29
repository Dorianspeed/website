import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import tsConfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react(), svgr({ include: '**/*.svg' }), tsConfigPaths()],
  test: {
    clearMocks: true,
    coverage: {
      exclude: ['src/app/*', 'src/assets/*', 'src/constants/*', 'src/types/*'],
      include: ['src/**/*'],
      reporter: ['json-summary', 'text'],
      reportsDirectory: '../../coverage/web'
    },
    environment: 'happy-dom',
    globals: true,
    mockReset: true,
    reporters: ['verbose'],
    setupFiles: './vitest.setup.ts'
  }
});
