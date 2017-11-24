const entry = require('./webpack/entries')
const output = require('./webpack/output')
const modules = require('./webpack/modules')
const plugins = require('./webpack/plugins')
const devServer = require('./webpack/devServer')
const resolve = require('./webpack/resolve')

module.exports = {
	entry,
	output,
	module: modules,
	plugins,
	devServer,
	resolve
}
