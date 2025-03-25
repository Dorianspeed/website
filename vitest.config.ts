import path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: {
      '@/assets': path.resolve(__dirname, 'src/assets'),
      '@/components': path.resolve(__dirname, 'src/components'),
      '@/constants': path.resolve(__dirname, 'src/constants'),
      '@/styles': path.resolve(__dirname, 'src/styles'),
      '@/types': path.resolve(__dirname, 'src/types'),
      '@/utils': path.resolve(__dirname, 'src/utils')
    }
  },
  test: { environment: 'jsdom', globals: true }
});
