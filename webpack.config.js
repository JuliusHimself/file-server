const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'production',
    entry: './index.js',
    output: {
        filename: 'unimportant.js',
        path: path.resolve(__dirname, 'dist/')
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: "images/**/**", to: "./" },
            ],
        }),
        new ImageminPlugin()
    ]
}