const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");


module.exports = {
  mode: 'development',
  entry: { index: path.resolve(__dirname, "src", "index.js")
},
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/"
  }, 
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html")
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|pdf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            publicPath: 'fonts',
            outputPath: 'fonts',
          },
      },
    },
    {
      test: /\.(ogv|mp4|webm)$/,
      use: [
          {
              loader: "file-loader",
              options: {
                  name: "[name].[ext]",
                  outputPath: "video"
              }
          }
      ]
  }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  optimization: {
    splitChunks: { chunks: "all" }
  },
};