import eslint from '@eslint/js';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import turboPlugin from 'eslint-plugin-turbo';
import tsEslint from 'typescript-eslint';

export default tsEslint.config(
  { ignores: ['**/.turbo', '**/.next/', '**/coverage'] },
  { files: ['./src/**/*.ts', './src/**/*.tsx'] },
  eslint.configs.recommended,
  tsEslint.configs.recommended,
  {
    plugins: { react: reactPlugin, 'react-hooks': reactHooksPlugin, turbo: turboPlugin },
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
      'react-hooks/exhaustive-deps': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react/button-has-type': 'error',
      'react/destructuring-assignment': 'error',
      'react/function-component-definition': [
        'error',
        { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' }
      ],
      'react/jsx-boolean-value': ['error', 'always'],
      'react/jsx-fragments': ['error', 'element'],
      'react/jsx-handler-names': 'error',
      'react/jsx-no-useless-fragment': 'error',
      'react/jsx-sort-props': 'warn',
      'sort-keys': ['warn', 'asc', { caseSensitive: false }]
    },
    settings: { react: { version: 'detect' } }
  }
);
