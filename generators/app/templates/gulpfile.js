'use strict';

const gulp = require('gulp');
const getTask = require('./gulp/utils').getTask;
const gulpSequence = require('gulp-sequence').use(gulp);<% if (options.exporter || options.release) { %>
const config = require('config');<% } %><% if (options.exporter) { %>
require('nitro-exporter')(gulp, config);<% } %><% if (options.release) { %>
require('nitro-release')(gulp, config);<% } %>

gulp.task('sync-githooks', getTask('sync-githooks'));
gulp.task('minify-img', getTask('minify-img'));
gulp.task('svg-sprite', getTask('svg-sprite'));
gulp.task('copy-assets', getTask('copy-assets'));
gulp.task('clean-assets', getTask('clean-assets'));<% if (options.clientTpl) { %>
gulp.task('clean-templates', getTask('clean-templates'));<% } %>
gulp.task('serve', getTask('serve'));
gulp.task('serve-stop', getTask('serve-stop'));
gulp.task('watch-serve', ['serve'], getTask('watch-serve'));
gulp.task('develop', ['watch-assets', 'watch-serve']);
gulp.task('build', gulpSequence(<% if (options.clientTpl) { %>['clean-assets', 'clean-templates']<% } else { %>'clean-assets'<% } %>, 'assets'));
gulp.task('dump-views', getTask('dump-views'));
gulp.task('lint-accessibility', ['dump-views'], getTask('lint-accessibility'));
gulp.task('lint-html', ['dump-views'], getTask('lint-html'));
gulp.task('visual-approve', getTask('visual-approve'));
gulp.task('visual-reference', ['assets'], getTask('visual-reference'));
gulp.task('visual-test', ['assets'], getTask('visual-test'));
gulp.task('test', ['compile-css', 'compile-js'], getTask('test'));
gulp.task('watch-test', ['test'], getTask('watch-test'));<% if (options.bundler === 'gulp') { %><% if (options.js === 'TypeScript') { %>
gulp.task('compile-ts', getTask('compile-ts'));<% } %><% if (options.clientTpl) { %>
gulp.task('compile-templates', getTask('compile-templates'));<% } %>
gulp.task('compile-js', <% if (options.js === 'TypeScript') { %>['compile-ts'<% if (options.clientTpl) { %>, 'compile-templates'<% } %>], <% } else if (options.clientTpl) { %>['compile-templates'], <% } %>getTask('compile-js'));
gulp.task('compile-js-proto', getTask('compile-js-proto'));
gulp.task('minify-css', ['compile-css'], getTask('minify-css'));
gulp.task('minify-js', ['compile-js'], getTask('minify-js'));
gulp.task('compile-css', getTask('compile-css'));
gulp.task('compile-css-proto', getTask('compile-css-proto'));
gulp.task('assets', ['svg-sprite', 'copy-assets', 'minify-img', 'minify-js', 'minify-css']);
gulp.task('assets-proto', ['compile-css-proto', 'compile-js-proto']);
gulp.task('watch-assets', ['assets', 'assets-proto'], getTask('watch-assets'));
gulp.task('production', ['assets', 'assets-proto'], getTask('production'));<% } else { %>
gulp.task('assets', ['svg-sprite', 'copy-assets', 'minify-img']);
gulp.task('watch-assets', ['assets'], getTask('watch-assets-resources'));
gulp.task('production', getTask('production'));<% } %>

