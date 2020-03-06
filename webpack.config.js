const path = require('path');

module.exports = {
    mode: "production",
    entry: path.resolve('./test/ngInjectTest'),
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    path.resolve('./loader.js')
                ]
            }
        ]
    },
};