module.exports = {
  entry: './app/app.ts',
  output: {
    path: './dist/',
    filename: 'app.js'
  },
  externals: {
    'lodash': '_',
    'jquery': '$',
    'angular': 'angular'
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
      {
        test: /\.s[a|c]ss$/,
        loader: 'style!css!sass'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        loader: 'url'
      },
      {
        test: /\.tpl\.html$/,
        loaders: ['html']
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx', '']
  }
};
