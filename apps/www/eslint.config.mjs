import eslint from '@eslint/js';
import globals from 'tailwind';
import tseslint from 'typescript-eslint';

export default [
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			}
		}
	},
	{
		files: ['**/*.tsx', '**/*.jsx', '**/*.ts', '**/*.js'],
		rules: {
			'@typescript-eslint/no-unused-expressions': 'off'
		}
	},
	{
		ignores: ['build/', '.next/', 'dist/', 'node_modules/']
	}
];
