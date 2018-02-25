var path = require('path')

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname),
    filename: 'browser.js',
    library: ['adonis', 'wsp'],
    libraryTarget: 'umd'
  }
}
