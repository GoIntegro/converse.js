/* global module */
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './'
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: 'go5-chat',
            template: 'index.html'
        })
    ]
});
