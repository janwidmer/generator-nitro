const HtmlWebpackPlugin = require('html-webpack-plugin')
const Config = require('../../nitro.config')
const getTemplates = require('../../utils/get-templates')

const templates = getTemplates()

const plugins = templates.map((filePath) => {
  const fileName = filePath.match(/[^\\\/]+(?=\.[\w]+$)|[^\\\/]+$/)[0]
  return new HtmlWebpackPlugin({
    title: Config.pageTitle,
    filename: `${fileName}.html`,
    template: filePath
  })
})

module.exports = plugins
