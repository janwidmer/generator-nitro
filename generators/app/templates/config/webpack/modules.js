const appsLoader = require('./loaders/apps')
const jsLoader = require('./loaders/js')
const htmlLoader = require('./loaders/html')
const hbsLoader = require('./loaders/hbs')
const twigLoader = require('./loaders/twig')
const cssLoader = require('./loaders/css')
const sassLoader = require('./loaders/sass')
const lessLoader = require('./loaders/less')
const svgLoader = require('./loaders/svg')
const fontsLoader = require('./loaders/fonts')

module.exports = {
  rules: [
    appsLoader,
    jsLoader,
    htmlLoader,
    hbsLoader,
    cssLoader,
    sassLoader,
    lessLoader,
    svgLoader,
    fontsLoader
  ]
}
