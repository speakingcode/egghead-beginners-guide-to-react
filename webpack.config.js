var webpack = require('webpack')

module.exports = {
  entry : [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  module : {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          'react-hot-loader/webpack',
          'babel-loader'
        ]
      },
      {
        test: /\.css$/i,
        loader: 'style-loader'
      },
      {
        test: /\.module.css$/,
        loader: 'css-loader',
        options: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]',
        },
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output : {
    path       : __dirname + '/dist',
    publicPath : '/',
    filename   : 'bundle.js'
  },
  devServer : {
    static: './dist',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
