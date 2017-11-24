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
			{
				loader: 'postcss-loader',
				options: {
					plugins: function (loader) {
						return [
							require('iconfont-webpack-plugin')({
								resolve: loader.resolve,
							}),
							autoprefixer(nitroConfig.get('code.compatibility')),
						];
					},
				},
			},
			{
				loader: 'sass-loader',
			},
		],
	}),
}
