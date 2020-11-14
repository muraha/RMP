const path = require('path')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = (env) => {
  const isProductionBuild = env.prod ? true : false
  return {
    mode: isProductionBuild ? 'production' : 'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer: {
      historyApiFallback: true,
      contentBase: './',
      hot: true
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.min.js',
      chunkFilename: '[id].js',
      publicPath: '/',
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.s?[ac]ss$/,
          exclude: [/node_modules/, /MoviesAPI\.ReactJS/],
          use: [
            isProductionBuild ? MiniCssExtractPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                sourceMap: true,
                modules: {
                  localIdentName: '[name]_[local]_[hash:base64]',
                }
              },
            },
            { loader: 'sass-loader' },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: () => [autoprefixer({})],
              },
            },
          ],
        },
        {
          test: /\.(png|jpe?g|gif)$/,
          loader: 'url-loader?limit=10000&name=img/[name].[ext]',
        },
        {
          test: /\.svg$/,
          loader: 'svg-inline-loader'
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, '/src/index.html'),
        filename: 'index.html',
        inject: 'body',
      }),
      new MiniCssExtractPlugin({
        filename: isProductionBuild ? '[name].[hash].css' : '[name].css',
        chunkFilename: isProductionBuild ? '[id].[hash].css' : '[id].css',
      }),
    ],
  };
};
