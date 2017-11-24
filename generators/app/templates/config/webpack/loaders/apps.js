const path = require('path')

module.exports = {
	test: /\.js$/,
	include: [path.resolve(__dirname, '../../apps')],
	use: 'nitro-apps-loader'
}
