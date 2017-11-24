
module.exports = {
	_disabled: !nitroConfig.get('code.validation.eslint.live'),
	test: /\.(js)$/,
	enforce: 'pre',
	use: [
		{
			options: {
				formatter: require('eslint-friendly-formatter'),
				eslintPath: require.resolve('eslint'),
				ignore: true,
				emitError: true,
				emitWarning: true,
			},
			loader: require.resolve('eslint-loader'),
		},
	],
	include: [
		path.resolve(__dirname, 'patterns'),
		path.resolve(__dirname, 'assets'),
	],
}
