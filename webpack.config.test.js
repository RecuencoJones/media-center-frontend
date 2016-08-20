var webpack = require('./webpack.config');

webpack.entry = {};

webpack.devtool = 'inline-source-map';

webpack.module.postLoaders = [
  {
    test: /\.tsx?$/,
    loader: 'istanbul-instrumenter-loader',
    exclude: /test|node_modules|\.spec\.ts$/
  }
];

webpack.ts = {
  compilerOptions: {
    sourceMap: false,
    inlineSourceMap: true
  }
};

module.exports = webpack;
