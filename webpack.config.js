const path = require('path')

const outputhPath = path.resolve(__dirname, 'dist')

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: 'main.js',
        path: outputhPath
    }
}