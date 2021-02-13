const path = require('path')
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'inline-source-map',

  devServer: {
    contentBase: path.resolve(__dirname, './public'),
    port: 3000,
    hot: true,
    historyApiFallback: true,
    open: true,
    proxy: {
      '/api': 'http://localhost:5000',
    },
  },
})
