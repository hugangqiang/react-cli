const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {defaultPath, defaultConfig } = require('./default.js');

let config = Object.assign(defaultConfig, {

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: '../index.html',
            template: './src/index.html'
        }),
        new webpack.ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom',
            PT: 'prop-types',
            axios: 'axios',
        })
    ],

    resolve: {
        modules: [
            'node_modules',
            defaultPath.src,
            defaultPath.common,
            defaultPath.components,
            defaultPath.layout,
            defaultPath.view,
            defaultPath.root
        ]
    },
    devtool: 'cheap-module-eval-source-map'

});


config.module.rules.push(
    // {
    //     test: /\.js$/,
    //     use: ['eslint-loader'],
    //     enforce: 'pre',
    //     include:[
    //         defaultPath.src
    //     ]
    // },
    {
        test: /\.js$/,
        use: ['babel-loader'],
        include:[
            defaultPath.src
        ]
    },
    {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
    }
);

module.exports = config;