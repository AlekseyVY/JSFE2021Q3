const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const htmlPage = ['tour_1', 'tour_2', 'tour_3', 'tour_4', 'tour_5', 'tour_6'];
const multipleHtml = htmlPage.map(name => {
  return new HtmlWebPackPlugin({
    template: `./src/tours/${name}.html`,
    filename: `/tours/${name}.html`,
  })
});

module.exports = {
  entry: './src/index.js',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist')
    },
    compress: true,
    port: 4000,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ]
  },
    output: {
      filename: '[name].[contenthash].js',
      chunkFilename: `[name].chunk.js`,
      path: path.resolve(__dirname, 'dist')
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: './src/index.html',
      }),
      new CopyPlugin({
        patterns: [
          { from: "./src/assets", to: "assets" },
        ],
      }),
      new CleanWebpackPlugin(),
    ].concat(multipleHtml),
  optimization: {
    splitChunks: {
      chunks: "all",
    }
  },
  experiments: {
    topLevelAwait: true,
  }
}