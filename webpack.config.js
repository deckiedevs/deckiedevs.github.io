const path = require('path');

module.exports = [{
    name: 'index',
    entry: './src/index.js',
    mode: 'none',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, './public/assets/js')
    }
}, {
    name: 'transitions',
    entry: './src/transitions.js',
    mode: 'none',
    output: {
        filename: 'transitions.js',
        path: path.resolve(__dirname, './public/assets/js')
    }
}];
