const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.tsx", // Entry point for your React app
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),    
    // Uncomment the following lines to copy assets to the dist folder
    // new CopyPlugin({
    //   patterns: [{ from: 'public/assets', to: 'assets' }],
    // }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, // Process JS and JSX files
        exclude: /node_modules/, // Exclude node_modules
        use: {
          loader: "babel-loader", // Transpile JS and JSX
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /assets\\results\.js$/,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx'],
  },
  output: {
    filename: "[name].bundle.js", // Output bundle file name
    path: path.resolve(__dirname, "dist"), // Output directory,
    clean: true,
    assetModuleFilename: 'assets/[name][ext]',
  },
};
