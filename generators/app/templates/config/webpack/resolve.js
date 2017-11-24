const path = require('path')

module.exports = {
  alias: {
    Components: path.resolve(__dirname, './../components/'),
    Utils: path.resolve(__dirname, './../utils/index'),
    Assets: path.resolve(__dirname, './../assets/')
  }
}
