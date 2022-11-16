module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	'extends': 'eslint:recommended',
	'overrides': [
	],
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'rules': {
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
		],
		'max-lines': [
			'error',
			'80'
		],
		'max-len': [
			'error', 
			{ "code": 80 }
		],
		'max-lines-per-function': [
			'error', 
			'15'
		],
		'max-statements-per-line': [
			'error',
			 { "max": 1 }]
	}
};
