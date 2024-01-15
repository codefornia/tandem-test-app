const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: ['@babel/polyfill', './src/index.tsx'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js'
    },
    devServer: {
        port: 3000,
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.scss']
    },
    plugins: [
        new HTMLWebpackPlugin({template: './src/index.html'}),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpg|jpeg|png|svg|webp)/,
                type: 'asset/resource',
                generator : {
                    filename : 'img/[hash:8].[name][ext][query]',
                }
            },
            {
                test: /\.(woff|woff2)/,
                type: 'asset/resource',
                generator : {
                    filename : 'fonts/[hash:8].[name][ext][query]',
                }
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.m?jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env']
                    }
                }
            },
            {
                test: /\.m?(ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-typescript', ['@babel/preset-react', {"runtime": "automatic"}], '@babel/preset-env']
                    }
                }
            }
        ]
    }
}