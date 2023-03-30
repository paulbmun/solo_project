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
    filename: '[name][contenthash].js',
    clean: true,
    assetModuleFilename: '[name][ext]',
  },
  devtool: 'source-map',
  target: 'web',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist')
    },
    port: 4000,
    open: true,
    hot: true,
    liveReload: true,
    compress: true,
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test:/\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
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