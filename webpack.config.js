const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const bundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  mode: 'development',
  // entry: {
  //   bundle: path.resolve(__dirname, './src/index.js')
  // },
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js', //bundle.js?
    publicPath: '/', //not sure if needed
    // clean: true,
    // assetModuleFilename: '[name][ext]',
  },
  // devtool: 'eval-source-map',
  // target: 'web',  //?
  devServer: {
    static: {
      directory: path.resolve(__dirname, './dist'),
      publicPath: '/', //not sure if needed
    },
    host: 'localhost',
    port: 4000,
    // open: true, //?
    // hot: true,
    // liveReload: true, //?
    // compress: true, //?
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '*'],
  },
  module: {
    rules: [
      {
        test:/\.css$/,
        use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        loader: 'file-loader',
        type: 'asset/resource'
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      // title: 'Webpack App',
      // filename: './public/index.html',
      template: './public/index.html',
    }),
    // new BundleAnalyzerPlugin(),
  ],
}