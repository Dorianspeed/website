import { KnipConfig } from 'knip';

export default {
  workspaces: {
    'apps/web': {
      ignoreDependencies: ['@svgr/webpack', 'postcss', 'tailwindcss']
    },
    'packages/typescript-config': {
      ignoreDependencies: ['@testing-library/jest-dom', 'next', 'vitest']
    }
  }
} satisfies KnipConfig;
