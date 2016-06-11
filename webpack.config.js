module.exports = {
  entry: './app/app.ts',
  output: {
    path: './dist/',
    filename: 'app.js'
  },
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
    extensions: ['', '.ts', '.tsx', '.scss']
  }
};
