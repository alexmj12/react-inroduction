const webpack = require("webpack");
const path = require("path");

const sourcePath = path.join(__dirname,  "src", "app");
const outputPath = path.join(__dirname, "build");

var config = {
    context: sourcePath,
    entry: {
        app: path.join(sourcePath, "index.tsx")
    },
    output: {
        publicPath: "/",
        path: outputPath,
        filename: "./js/[name].js"
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, use: "awesome-typescript-loader" }
        ]
    },
    devServer: {
        publicPath: "/",
        contentBase: path.join(__dirname, "build"),
        port: 9000,
        inline: true,
        historyApiFallback: true
    }
};

module.exports = config;