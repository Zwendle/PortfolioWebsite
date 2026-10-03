import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import astro from 'eslint-plugin-astro';
import jsxA11y from 'eslint-plugin-jsx-a11y-x';
import reactHooks from 'eslint-plugin-react-hooks';
import prettier from 'eslint-config-prettier';
import globals from 'globals';

export default defineConfig(
  { ignores: ['dist/', '.astro/', 'node_modules/', 'coverage/'] },
  js.configs.recommended,
  tseslint.configs.recommended,
  astro.configs['flat/recommended'],
  { ...jsxA11y.configs.recommended, files: ['**/*.{ts,tsx}'] },
  { ...reactHooks.configs.flat.recommended, files: ['**/*.{ts,tsx}'] },
  { files: ['**/*.{ts,tsx}'], languageOptions: { globals: globals.browser } },
  prettier,
);
