const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    mode: 'production',

    // メインとなるJavaScriptファイル（エントリーポイント）
    entry: {
        Example: './example/example.ts',
    },
    output: {
        filename: '[name].js',
        path: `${__dirname}/../dist`,
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            terserOptions: {
                compress: true,
                ecma: 2015,
                mangle: true,
                toplevel: true,
            }
        })],
    },

    module: {
        rules: [
            {test: /\.ts$/, use: 'ts-loader'},
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    experiments: {
        outputModule: true
    }
};
