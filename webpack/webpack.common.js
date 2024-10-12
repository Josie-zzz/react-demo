const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackBar = require('webpackbar')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const webpack = require('webpack')

console.log(path.resolve(__dirname, '..', 'src'), "path.resolve(__dirname, '../src')")

module.exports = {
    entry: './src/index.tsx',
    output: {
        clean: true,
        path: path.resolve(__dirname, '../dist/script'),
    },
    // 设置模块解析
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '../src'),
        },
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            {
                // 解析 less 文件（css 也可以放这）
                test: /\.(le|c)ss$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
            },
            {
                // 解析 ts 文件
                test: /\.([cm]?ts|tsx)$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                // 解析图片等资源文件
                test: /\.(png|jpg|svg|wav)$/i,
                type: 'asset/resource',
            },
            {
                // 解析图片等资源文件
                test: /\.(m3u8)$/i,
                type: 'asset/source',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new WebpackBar(),
        new webpack.DefinePlugin({
        }),
    ],
}
