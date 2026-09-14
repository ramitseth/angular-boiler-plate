const eslint = require('@eslint/js');
const angular = require('@angular-eslint/eslint-plugin');
const angularTemplate = require('@angular-eslint/eslint-plugin-template');
const tseslint = require('typescript-eslint');

module.exports = tseslint.config(
  {
    ignores: ['dist/**', 'node_modules/**', 'e2e/**']
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['src/**/*.ts'],
    plugins: {
      '@angular-eslint': angular
    },
    rules: {
      '@angular-eslint/component-class-suffix': 'error',
      '@angular-eslint/directive-class-suffix': 'error',
      '@typescript-eslint/no-explicit-any': 'off'
    }
  },
  {
    files: ['src/**/*.html'],
    languageOptions: {
      parser: require('@angular-eslint/template-parser')
    },
    plugins: {
      '@angular-eslint/template': angularTemplate
    },
  }
);
