import { fixupPluginRules } from '@eslint/compat';
import eslint from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import tsEslint from 'typescript-eslint';

export default tsEslint.config(
  {
    ignores: ['**/.next/','**/postcss.config.mjs']
  },
  eslint.configs.recommended,
  ...tsEslint.configs.recommended,
  {
    plugins: { react, 'react-hooks': fixupPluginRules(reactHooks) },
    rules: {
      ...reactHooks.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', ignoreRestSiblings: true }
      ],
      'react-hooks/exhaustive-deps': 'off',
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
