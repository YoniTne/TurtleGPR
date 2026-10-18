import js from '@eslint/js'
import prettier from 'eslint-config-prettier'
import svelte from 'eslint-plugin-svelte'
import { defineConfig } from 'eslint/config'
import globals from 'globals'
import ts from 'typescript-eslint'
import svelteConfig from './svelte.config.js'

export default defineConfig(
    { ignores: ['dist/'] },

    // Base rule sets: JS, strict type-aware TS, Svelte. Prettier last so formatting rules are off.
    js.configs.recommended,
    ts.configs.strictTypeChecked,
    ts.configs.stylisticTypeChecked,
    svelte.configs.recommended,
    prettier,
    svelte.configs.prettier,

    {
        languageOptions: {
            globals: { ...globals.browser, ...globals.node },
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
                extraFileExtensions: ['.svelte'],
            },
        },
    },
    {
        files: ['**/*.svelte', '**/*.svelte.ts'],
        languageOptions: { parserOptions: { parser: ts.parser, svelteConfig } },
    },
    // Plain JS config files are not part of the TS project: skip type-aware rules there.
    { files: ['**/*.js'], extends: [ts.configs.disableTypeChecked] },

    {
        rules: {
            // General
            eqeqeq: ['error', 'always'],
            curly: ['error', 'all'],
            'no-console': ['warn', { allow: ['warn', 'error'] }],
            'no-var': 'error',
            'prefer-const': 'error',
            'prefer-template': 'error',
            'object-shorthand': 'error',

            // TypeScript
            '@typescript-eslint/consistent-type-imports': [
                'error',
                { fixStyle: 'inline-type-imports' },
            ],
            '@typescript-eslint/no-unused-vars': [
                'error',
                { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
            ],

            // Svelte
            'svelte/block-lang': ['error', { script: 'ts', style: null }],
            'svelte/button-has-type': 'error',
            'svelte/no-target-blank': 'error',
            'svelte/no-useless-mustaches': 'error',
            'svelte/prefer-class-directive': 'error',
            'svelte/prefer-style-directive': 'error',
            'svelte/require-each-key': 'error',
            'svelte/shorthand-attribute': 'error',
            'svelte/shorthand-directive': 'error',
            'svelte/spaced-html-comment': 'error',
        },
    },
)
