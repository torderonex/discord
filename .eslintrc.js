module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	'settings': {
		'react': {
			'version': 'detect'
		}
	},
	'extends': ['plugin:i18next/recommended', 'eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react/recommended', 'plugin:storybook/recommended'],
	'overrides': [
		{
			'env': {
				'node': true
			},
			'files': [
				'.eslintrc.{js,cjs}'
			],
			'parserOptions': {
				'sourceType': 'script'
			}
		}
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': [
		'@typescript-eslint',
		'react',
		'react-hooks'
	],
	'rules': {
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': 'warn',
		'react/react-in-jsx-scope': 'off',
		'i18next/no-literal-string': 'warn',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'error',
		'object-curly-spacing': ['error', 'always'],
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'windows'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		]
	}
};
