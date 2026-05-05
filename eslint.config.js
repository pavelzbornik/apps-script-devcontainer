// @ts-check
const js = require('@eslint/js');
const globals = require('globals');
const tsParser = require('@typescript-eslint/parser');
const tsPlugin = require('@typescript-eslint/eslint-plugin');

module.exports = [
  {
    ignores: ['node_modules/', 'dist/'],
  },
  js.configs.recommended,
  {
    files: ['**/*.{js,cjs}'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: globals.node,
    },
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        ...globals.node,
        // Google Apps Script runtime globals
        SpreadsheetApp: 'readonly',
        DriveApp: 'readonly',
        DocumentApp: 'readonly',
        FormApp: 'readonly',
        GmailApp: 'readonly',
        CalendarApp: 'readonly',
        UrlFetchApp: 'readonly',
        Logger: 'readonly',
        Utilities: 'readonly',
        PropertiesService: 'readonly',
        ScriptApp: 'readonly',
        Session: 'readonly',
        HtmlService: 'readonly',
        ContentService: 'readonly',
        CacheService: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
    },
  },
];
