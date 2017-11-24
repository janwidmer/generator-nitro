const stylePlugins = require('./../plugins/style')

module.exports = {
  test: /\.less$/,
  use: stylePlugins.less.extract([
    {
      loader: 'css-loader'
    }, {
      loader: 'postcss-loader'
    }, {
      loader: 'less-loader'
    }
  ])
}
