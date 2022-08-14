
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require("terser-webpack-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')

module.exports = {
  mode: "development",
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  devServer: {
    static: path.resolve(__dirname, 'public'),
    port: 8080,
    open: true,
    historyApiFallback: true
  },
  // 优化项
  optimization: {
    minimize: true,
    minimizer: [
      //压缩JS
      new TerserPlugin({}),
      // 压缩css 替代
      new CssMinimizerPlugin(),
    ],
    splitChunks: {
      
    }
  },
  module: {
    rules: [
      {
        test: /\.js/,
        include: path.resolve(__dirname, 'src'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                // ["@babel/preset-env", { modules: false }],
                ["@babel/preset-env"],
                "@babel/preset-react"
              ]
            }
          }
        ]
      },
      { test: /\.css$/, 
        use: [
          // 'style-loader',
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader', 
          'postcss-loader'
        ] 
      },
      {
        test: /\.less$/, 
        use: [
          // 'style-loader', 
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          }, 
          'postcss-loader', 
          'less-loader'
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: true
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[chunkhash].css",
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled', 
      generateStatsFile: true,
    }) 
  ]

}