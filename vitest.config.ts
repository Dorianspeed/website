import react from '@vitejs/plugin-react';
import magicalSvg from 'vite-plugin-magical-svg';
import tsConfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react(), tsConfigPaths(), magicalSvg({ target: 'react' })],
  test: {
    clearMocks: true,
    coverage: {
      exclude: ['src/app/*', 'src/assets/*', 'src/constants/*', 'src/types/*'],
      include: ['src/**/*'],
      reporter: ['html', 'text']
    },
    environment: 'jsdom',
    globals: true,
    mockReset: true,
    reporters: ['verbose'],
    setupFiles: './vitest.setup.ts'
  }
});
