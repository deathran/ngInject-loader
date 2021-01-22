const path = require('path');

module.exports = {
    mode: "production",
    entry: path.resolve('./test/index'),
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true
                        }
                    }
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.(js|ts)x?$/,
                use: [
                    path.resolve('./loader.js')
                ]
            }
        ]
    },
};