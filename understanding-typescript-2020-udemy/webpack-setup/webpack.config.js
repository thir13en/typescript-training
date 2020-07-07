const path = require('path');

module.exports = {
    // do fewer checks
    mode: 'development',
    entry: './src/app.ts',
    output: {
        // arbitrary name (where bundle)
        // added unique hash for file
        // filename: 'bundle.[contenthash].js',
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        // used by webpack-dev-server to really understand where the output file is
        // for the dev compilation
        publicPath: 'dist',
    },
    devtool: 'inline-source-map',
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
}
