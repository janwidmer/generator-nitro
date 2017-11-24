'use strict';

const config = require('config');
const utils = require('./utils');
const globby = require('globby');

module.exports = (gulp, plugins) => {

	const throttleBase = config.get('nitro.watch.throttle.base');
	const throttleCache = config.get('nitro.watch.throttle.cache');
	const lastRun = {};

	return () => {
		const browserSync = utils.getBrowserSyncInstance();

		plugins.watch([
			`src/views/**/*.${config.get('nitro.viewFileExtension')}`,
			`${config.get('nitro.viewDataDirectory')}/**/*.json`,
			`src/patterns/**/*.${config.get('nitro.viewFileExtension')}`,<% if (options.clientTpl) { %>
			'!src/patterns/**/template/**/*.hbs',<% } %>
			'src/patterns/**/schema.json',
			'src/patterns/**/_data/*.json',
		], () => {
			processChange('data', () => {
				if (config.get('nitro.mode.livereload')) {
					browserSync.reload('*.html');
				}
			});
		});

		plugins.watch([
			'src/assets/img/**/*',
		], () => {
			gulp.start('minify-img');
		});

		plugins.watch([
			'src/patterns/atoms/icon/img/icons/*.svg',
		], () => {
			gulp.start('svg-sprite');
		});

		plugins.watch([
			'src/assets/font/**/*',
		], () => {
			gulp.start('copy-assets');
		});
	};
};
