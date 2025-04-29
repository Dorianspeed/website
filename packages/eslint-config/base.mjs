import eslint from '@eslint/js';
import tsEslint from 'typescript-eslint';

export default tsEslint.config(
  { files: ['./src/**/*.ts', './src/**/*.tsx'] },
  eslint.configs.recommended,
  tsEslint.configs.recommended,
  {
    rules: {
      '@typescript-eslint/array-type': ['error', { default: 'generic' }],
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { disallowTypeAnnotations: true, fixStyle: 'separate-type-imports', prefer: 'type-imports' }
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', ignoreRestSiblings: true }
      ],
      'sort-keys': ['warn', 'asc', { caseSensitive: false }]
    }
  }
);
