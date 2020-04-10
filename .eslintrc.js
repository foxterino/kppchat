module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:prettier/recommended',
	],
	settings: {
		react: {
			pragma: 'React',
			version: 'detect',
		},
	},
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	plugins: [
		'react',
		'react-hooks',
		'@typescript-eslint',
		'emotion',
		'pretty-imports',
	],
	rules: {
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'react/prop-types': 0,
		'no-empty-pattern': 0,
		'no-unused-vars': 0,
		'emotion/jsx-import': 'error',
		'emotion/no-vanilla': 'error',
		'emotion/import-from-emotion': 'error',
		'emotion/styled-import': 'error',
		'pretty-imports/sorted': 'error',
	},
};
