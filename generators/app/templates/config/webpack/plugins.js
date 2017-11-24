const webpack = require('webpack')
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin')
const stylePlugins = require('./plugins/style')
const htmlPlugins = require('./plugins/html')

module.exports = [
	...htmlPlugins,
	new webpack.ProvidePlugin({
		$: 'jquery',
		T: 'terrific'
	}),

	new webpack.DefinePlugin({
		'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
	}),
	...stylePlugins.array
]
