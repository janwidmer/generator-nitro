const stylePlugins = require('./../plugins/style')

module.exports = {
	test: /\.scss$/,
	use: ExtractTextPlugin.extract({
		fallback: 'style-loader',
		use: [
			{
				loader: 'css-loader',
				query: {
					importLoaders: 1,
				},
			},
		],
	}),
}
