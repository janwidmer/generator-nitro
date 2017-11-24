const bannerData = {
	date: new Date().toISOString().slice(0, 19),
	pkg: require('./package.json'),
};

const plugins = new webpack.BannerPlugin({
	banner: `
		${bannerData.pkg.name}
		@version v${bannerData.pkg.version}
		@date ${bannerData.date}
		`,
})

module.exports = plugins
