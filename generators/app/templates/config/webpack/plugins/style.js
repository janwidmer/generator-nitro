const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractCSS = new ExtractTextPlugin('[name].css')
const extractLess = new ExtractTextPlugin('[name].less.css')
const extractSASS = new ExtractTextPlugin('[name].sass.css')

module.exports = {
  array: [extractCSS, extractLess, extractSASS],
  css: extractCSS,
  less: extractLess,
  sass: extractSASS
}
