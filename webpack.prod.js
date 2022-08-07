const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtracPlugin = require('mini-css-extract-plugin');
const OptimizaCssAssetsPlugin = require('css-minimizer-webpack-plugin');

const CopyPlugin = require('copy-webpack-plugin');


const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {

    mode: 'production',
    optimization: {
        minimizer: [new OptimizaCssAssetsPlugin()]
    },
    output: {
        filename: 'main.[contentHash].js'
    },

    module: {

        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: [
                    "babel-loader",
                ]
            },
            {
                test: /\.css$/,
                exclude: /styles\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]

            },
            {
                test: /styles\.css$/,
                use: [
                    MiniCssExtracPlugin.loader,
                    'css-loader'
                ]

            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: { minimize: false }
                    }
                ]
            },
            /*
            {
                test:/\.(png|svg|jpg|)/$,
                use :[
                    {
                        loader:'file-loader',
                        options:{
                            esModule:false
                        }
                    }
                ]
            }*/
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new MiniCssExtracPlugin({
            filename: '[name].[contentHash].css',
            ignoreOrder: false
        }),

        new CopyPlugin({
            patterns: [
                { from: 'src/assets', to: 'assets/' },
            ],
        }),
        new CleanWebpackPlugin(),
    ]

}
