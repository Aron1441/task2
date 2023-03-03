const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
    context: path.resolve(__dirname, 'source'),
    mode: 'development',
    resolve: {
      fallback: {
        "path": require.resolve('path-browserify'),
      }
    },
    entry: {
        main: './js/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
    },
    devServer: {
        port: 4200
    },
    module: {
      rules: [
        {
          test: /\.scss$/i,
          use: [
            // Creates `style` nodes from JS strings
            {
              loader: MiniCssExtractPlugin.loader,
              options: {}
            },
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ],
        },
        {
          test: /\.(png|jpg|svg)$/i,
          dependency: { not: ['url'] },
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          },
          type: 'javascript/auto'
        },
      ],
    },
    plugins: [
        new MiniCssExtractPlugin({
          filename:'[name][contenthash].css'
        }),
        new HtmlWebpackPlugin({
            title: 'main page',
            filename: 'index.html',
            template: './index.html',
        }),
        new CleanWebpackPlugin()
    ],
}