const path = require('path');
const cleanWebpack = require('clean-webpack-plugin');

module.exports = {
    // do fewer checks
    mode: 'production',
    entry: './src/app.ts',
    output: {
        // arbitrary name (where bundle)
        // added unique hash for file
        // filename: 'bundle.[contenthash].js',
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'none',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ],
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    plugins: [
        new cleanWebpack.CleanWebpackPlugin(),
    ],
}
