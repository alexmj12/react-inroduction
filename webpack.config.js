const webpack = require("webpack");
const path = require("path");

const CleanWebpackPlugin = require("clean-webpack-plugin");

const sourcePath = path.join(__dirname, "app");
const outputPath = path.join(__dirname, "build", "js");

module.exports = {
    devtool: "eval-source-map",
    entry: {
        app: path.join(sourcePath, "index.js")
    },
    output: {
        path: outputPath,
        filename: "app.js"
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(outputPath)
    ],
    devServer: {
        publicPath: "/",
        contentBase: path.join(__dirname, "build"),
        port: 9000,
        inline: true,
        historyApiFallback: true
    }
};