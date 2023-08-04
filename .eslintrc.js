module.exports = {
	env: {
		browser : true,
		es2021: true,
		es6: true,
		node: true,
		jest: true,
	},
	extends: [
		'plugin:prettier/recommended',
		// 'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		// 'prettier',
	],
	overrides: [
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: 'tsconfig.json',
		sourceType: 'module',
	},
	plugins: [
		'@typescript-eslint',
	],
	ignorePatterns: ['.eslintrc.js'],
	rules: {
		'@typescript-eslint/interface-name-prefix': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		 '@typescript-eslint/no-empty-function' : 'off',
	},
	settings: {
		'import/resolver': {
			'typescript': {}
		}
	}
};
