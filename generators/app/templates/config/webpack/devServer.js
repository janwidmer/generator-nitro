const path = require('path')

module.exports = {
	port: 8082,
	contentBase: path.resolve(__dirname, 'public'),
	proxy: {
		'/': {
			target: 'http://localhost:8080',
			secure: false,
		},
	},
	hot: false,
	inline: false,
	stats: {
		warnings: true,
	},
}
